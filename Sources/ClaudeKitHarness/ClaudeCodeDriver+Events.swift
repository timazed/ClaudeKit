import Foundation
import ClaudeKitCore

extension ClaudeCodeDriver {
    func receive(_ packet: JSONValue) async {
        guard packet["generation"]?.stringValue == generation, !generation.isEmpty, let event = packet["event"] else { return }
        switch event["type"]?.stringValue {
        case "user":
            if event["isReplay"]?.boolValue == true, let id = event["uuid"]?.stringValue { pendingInputs.remove(id) }
        case "rate_limit_event":
            if let info = event["rate_limit_info"], let status = info["status"]?.stringValue {
                let kind = info["rateLimitType"]?.stringValue
                limits[kind ?? "unknown"] = .init(status: status, kind: kind, utilization: info["utilization"]?.numberValue,
                    resetsAt: info["resetsAt"]?.numberValue.map { Date(timeIntervalSince1970: $0) })
                await onEvent?(.diagnostic(.object(["kind": .string("rate_limit"), "message": .string(status)])))
            }
        case "host_runtime":
            runtimeEvidence = event
            deadlines.removeValue(forKey: "startup")?.cancel()
            runtimeWaiter?.resume(); runtimeWaiter = nil
        case "host_logged_out":
            deadlines.removeValue(forKey: "logout")?.cancel()
            logoutWaiter?.resume(); logoutWaiter = nil
        case "host_error": failAll(failure("harness_failure", event["message"]?.stringValue ?? "Harness failed."))
        case "control_response":
            guard let response = event["response"], let id = response["request_id"]?.stringValue else { return }
            deadlines.removeValue(forKey: id)?.cancel()
            if response["subtype"]?.stringValue == "success" { pending.removeValue(forKey: id)?.resume(returning: response["response"] ?? .object([:])) }
            else { pending.removeValue(forKey: id)?.resume(throwing: failure("control_failed", "The harness rejected the control request.")) }
        case "control_request":
            let token = UUID(), epoch = generation
            if let id = event["request_id"]?.stringValue { controlTasks[id] = token }
            tasks[token] = Task { [weak self] in await self?.handle(event, generation: epoch); await self?.removeTask(token) }
        case "control_cancel_request":
            if let id = event["request_id"]?.stringValue {
                if let token = controlTasks.removeValue(forKey: id) { tasks.removeValue(forKey: token)?.cancel() }
                permits.removeAll { $0.2 == id }
            }
        case "system":
            if event["subtype"]?.stringValue == "init", let id = event["session_id"]?.stringValue {
                sessionID = id; await onEvent?(.session(id))
            }
            if let subtype = event["subtype"]?.stringValue, ["status", "task_started", "task_progress", "task_notification", "api_retry"].contains(subtype) {
                await onEvent?(.diagnostic(.object(["kind": .string(subtype), "message": event["status"] ?? event["description"] ?? .null])))
            }
        case "stream_event":
            let frame = event["event"]
            if frame?["type"]?.stringValue == "message_start" { answerBuffer = ""; answerStopReason = nil }
            if let delta = frame?["delta"]?["text"]?.stringValue { text += delta; answerBuffer += delta; await onEvent?(.text(delta)) }
            if let reason = frame?["delta"]?["stop_reason"]?.stringValue { answerStopReason = reason }
            if frame?["type"]?.stringValue == "message_stop", answerStopReason == "end_turn", pendingInputs.isEmpty, !answerBuffer.isEmpty {
                deliveredAnswer = true; await onEvent?(.answer(answerBuffer))
            }
        case "assistant":
            lastAssistantUUID = event["uuid"]?.stringValue
            if event["message"]?["content"]?.arrayValue?.contains(where: { $0["type"]?.stringValue == "tool_use" && $0["name"]?.stringValue?.hasPrefix("mcp__ios__") == true }) == true {
                await onEvent?(.diagnostic(.object(["kind": .string("tool_round")])))
            }
        case "result":
            guard let waiter = runWaiter else { return }
            if !pendingInputs.isEmpty { return }
            if event["is_error"]?.boolValue != false {
                runWaiter = nil
                waiter.resume(throwing: failure("turn_failed", event["result"]?.stringValue ?? "The official harness reported a failed turn."))
                return
            }
            let final = event["result"]?.stringValue ?? text
            if text.isEmpty, !final.isEmpty { await onEvent?(.text(final)) }
            if !deliveredAnswer, !final.isEmpty { deliveredAnswer = true; await onEvent?(.answer(final)) }
            pendingResult = .init(sessionID: sessionID, text: final, usage: .init(
                inputTokens: event["usage"]?["input_tokens"]?.intValue ?? 0,
                outputTokens: event["usage"]?["output_tokens"]?.intValue ?? 0,
                cacheReadInputTokens: event["usage"]?["cache_read_input_tokens"]?.intValue,
                cacheCreationInputTokens: event["usage"]?["cache_creation_input_tokens"]?.intValue,
                estimatedCostUSD: event["total_cost_usd"]?.numberValue), structuredOutput: event["structured_output"])
            if session?.ephemeral == true {
                let result = pendingResult!; pendingResult = nil; runWaiter = nil; onEvent = nil
                waiter.resume(returning: result); return
            }
            guard let uuid = lastAssistantUUID else { failAll(failure("missing_transcript_identity", "The final assistant message has no persistence identity.")); return }
            do { try await transport.write(.object(["op": .string("flush"), "generation": .string(generation), "sessionID": .string(sessionID), "messageUUID": .string(uuid)])) }
            catch { failAll(error) }
        case "host_flushed":
            guard let result = pendingResult else { return }
            pendingResult = nil
            if event["persisted"]?.boolValue == true {
                let waiter = runWaiter; runWaiter = nil; onEvent = nil; waiter?.resume(returning: result)
            } else { failAll(failure("transcript_not_persisted", "The harness completed but its transcript was not confirmed. The prompt was not retried.")) }
        default: break
        }
    }
    func removeTask(_ id: UUID) { tasks.removeValue(forKey: id); controlTasks = controlTasks.filter { $0.value != id } }
    func respond(_ id: String, _ response: JSONValue, generation: String) async {
        guard generation == self.generation, !Task.isCancelled else { return }
        try? await send(.object(["type": .string("control_response"), "response": .object(["subtype": .string("success"), "request_id": .string(id), "response": response])]))
    }
    func handle(_ event: JSONValue, generation: String) async {
        guard generation == self.generation, let id = event["request_id"]?.stringValue,
              let request = event["request"], let session else { return }
        switch request["subtype"]?.stringValue {
        case "can_use_tool":
            let fullName = request["tool_name"]?.stringValue ?? ""
            if fullName == "WebSearch" {
                let allowed = session.webSearch.mode == .live && searchCalls < (session.webSearch.maximumCalls ?? .max)
                var input = request["input"]?.objectValue ?? [:]
                if let domains = session.webSearch.allowedDomains {
                    input["allowed_domains"] = .array(domains.map(JSONValue.string)); input.removeValue(forKey: "blocked_domains")
                }
                if allowed { searchCalls += 1 }
                await respond(id, .object(allowed ? ["behavior": .string("allow"), "updatedInput": .object(input)] : ["behavior": .string("deny"), "message": .string("Hosted search policy denied this call.")]), generation: generation)
                return
            }
            let name = fullName.hasPrefix("mcp__ios__") ? String(fullName.dropFirst(10)) : ""
            let arguments = request["input"] ?? .object([:])
            let allow = await session.approve(name, arguments)
            guard generation == self.generation, !Task.isCancelled else { return }
            if allow { permits.append((name, arguments, id)) }
            await respond(id, .object(allow ? ["behavior": .string("allow"), "updatedInput": arguments] : ["behavior": .string("deny"), "message": .string("The app denied this tool request.")]), generation: generation)
        case "mcp_message":
            guard let message = request["message"] else { return }
            var result: JSONValue = .object([:])
            switch message["method"]?.stringValue {
            case "initialize": result = .object(["protocolVersion": .string("2025-03-26"), "capabilities": .object(["tools": .object([:])]), "serverInfo": .object(["name": .string("ios"), "version": .string("1")])])
            case "tools/list": result = .object(["tools": .array(session.tools.map { .object(["name": .string($0.name), "description": .string($0.description), "inputSchema": $0.inputSchema]) })])
            case "tools/call":
                let name = message["params"]?["name"]?.stringValue ?? ""
                let arguments = message["params"]?["arguments"] ?? .object([:])
                let allowed: Bool
                if let index = permits.firstIndex(where: { $0.0 == name && $0.1 == arguments }) { permits.remove(at: index); allowed = true }
                else { allowed = session.tools.first(where: { $0.name == name })?.approvalPolicy == .automatic }
                if allowed, generation == self.generation, !Task.isCancelled {
                    let output = await session.execute(name, arguments)
                    result = .object(["isError": .bool(!output.success), "content": .array(output.content.map { item in
                        switch item {
                        case let .text(text): return .object(["type": .string("text"), "text": .string(text)])
                        case let .image(image): return .object(["type": .string("image"), "data": .string(image.data.base64EncodedString()), "mimeType": .string(image.mediaType)])
                        }
                    })])
                } else { result = .object(["isError": .bool(true), "content": .array([.object(["type": .string("text"), "text": .string("Native tool execution was not authorized.")])])]) }
            case "notifications/initialized", "ping", "resources/list", "prompts/list": break
            default:
                await respond(id, .object(["mcp_response": .object(["jsonrpc": .string("2.0"), "id": message["id"] ?? .number(0), "error": .object(["code": .number(-32601), "message": .string("Unsupported method")])])]), generation: generation); return
            }
            await respond(id, .object(["mcp_response": .object(["jsonrpc": .string("2.0"), "id": message["id"] ?? .number(0), "result": result])]), generation: generation)
        default:
            try? await send(.object(["type": .string("control_response"), "response": .object(["subtype": .string("error"), "request_id": .string(id), "error": .string("Unsupported host control")])]))
        }
    }
}
