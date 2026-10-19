import Foundation

public extension Request {
    /// Limits the complete base64 packet below the embedded host's 8 MiB frame limit.
    func validateAttachments() throws {
        guard images.count <= 20, images.reduce(0, { $0 + $1.data.count }) <= 4 * 1024 * 1024,
              transportText.utf8.count <= AgentStoreLimits.maximumMessageTextByteCount else {
            throw AgentRuntimeError(code: "request_limit", message: "Requests allow 20 images, 4 MiB of image data, and 1 MiB of text.")
        }
        for image in images {
            let bytes = [UInt8](image.data.prefix(12))
            let valid: Bool
            switch image.mediaType {
            case "image/png": valid = bytes.starts(with: [137,80,78,71,13,10,26,10])
            case "image/jpeg": valid = bytes.starts(with: [255,216,255])
            case "image/gif": valid = bytes.starts(with: Array("GIF87a".utf8)) || bytes.starts(with: Array("GIF89a".utf8))
            case "image/webp": valid = bytes.count >= 12 && bytes.starts(with: Array("RIFF".utf8)) && Array(bytes[8..<12]) == Array("WEBP".utf8)
            default: valid = false
            }
            guard valid else { throw AgentRuntimeError(code: "invalid_image", message: "Use PNG, JPEG, GIF, or WebP data matching its media type.") }
        }
    }

    var harnessContent: JSONValue {
        guard !images.isEmpty else { return .string(transportText) }
        var blocks: [JSONValue] = images.map { image in
            .object(["type": .string("image"), "source": .object([
                "type": .string("base64"), "media_type": .string(image.mediaType), "data": .string(image.data.base64EncodedString())])])
        }
        if !transportText.isEmpty { blocks.append(.object(["type": .string("text"), "text": .string(transportText)])) }
        return .array(blocks)
    }
}

extension Request {
    func validateOutputSchema() throws {
        guard let outputSchema else { return }
        guard outputSchema.compactJSONString.utf8.count <= 1_048_576 else {
            throw AgentRuntimeError(code: "schema_limit", message: "Output schema exceeds 1 MiB.")
        }
        // Fail closed for unsupported assertions; never silently weaken a caller's schema.
        try AgentJSONSchemaValidator.validateSchema(.raw(outputSchema))
    }
}

public extension AgentRuntime {
    /// Decodes the validated final JSON result. Streaming text is provisional.
    func send<Output: Decodable & Sendable>(_ request: Request, in threadID: String,
                                           as type: Output.Type) async throws -> Output {
        guard request.outputSchema != nil else {
            throw AgentRuntimeError(code: "output_schema_required", message: "Typed results require an outputSchema.")
        }
        let json = try await send(request, in: threadID)
        return try JSONDecoder().decode(type, from: Data(json.utf8))
    }
}
