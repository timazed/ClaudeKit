const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_ttkwnzeb_exports = {};
__export(chunk_ttkwnzeb_exports, {
  Dri: () => Dri,
  Fri: () => Fri,
  Hri: () => Hri,
  Lri: () => Lri,
  Nri: () => Nri,
  SYr: () => SYr,
  bYr: () => bYr,
  iRn: () => iRn,
  t0t: () => t0t
});
module.exports = __toCommonJS(chunk_ttkwnzeb_exports);
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
function t0t(e) {
  return "method" in e && "id" in e && e.id !== null;
}
var Hri = "claudecode/answerWithinMs", Dri = 12e4;
function Lri(e) {
  if (!t0t(e) || !("method" in e) || e.method !== "ping") return;
  let t = e.params?._meta?.[Hri];
  return typeof t === "number" && t > 0 && t <= Dri ? t : void 0;
}
class iRn extends Error {
  reason;
  constructor(e) {
    super("MCP ping got no answer in time");
    this.reason = e;
    this.name = "McpPingUnansweredError";
  }
}
var SYr = Object.freeze({}), bYr = Object.freeze({ name: "claude-code", title: "Claude Code", description: "Anthropic's agentic coding tool", websiteUrl: "https://claude.com/claude-code" }), s = Symbol("swallow");
class Nri {
  serverName;
  sendMcpMessage;
  isClosed = false;
  manifestInitializeResult;
  manifestToolsListResult;
  swallowNextInitializedNotification = false;
  outcome;
  onclose;
  onerror;
  onmessage;
  constructor(e, t, i, n = false) {
    this.serverName = e;
    this.sendMcpMessage = t;
    this.manifestInitializeResult = n ? void 0 : i?.initializeResult, this.manifestToolsListResult = i?.toolsListResult, this.outcome = i === void 0 ? "none" : n ? "replayed" : "pending";
  }
  get manifestOutcome() {
    return this.outcome;
  }
  async start() {
  }
  async send(e) {
    if (this.isClosed) throw Error("Transport is closed");
    let t = this.answerFromManifest(e);
    if (t === s) return;
    if (t !== void 0) {
      queueMicrotask(() => this.onmessage?.(t));
      return;
    }
    let i = await this.sendMcpMessage(this.serverName, e);
    if (this.onmessage) this.onmessage(i);
  }
  async close() {
    if (this.isClosed) return;
    this.isClosed = true, this.onclose?.();
  }
  answerFromManifest(e) {
    if (this.manifestInitializeResult === void 0 && this.manifestToolsListResult === void 0 && !this.swallowNextInitializedNotification) return;
    if (!("method" in e)) {
      this.dropManifest("unexpected_message");
      return;
    }
    switch (e.method) {
      case "initialize": {
        let t = this.manifestInitializeResult;
        if (t === void 0 || !("id" in e)) {
          this.dropManifest("unexpected_message");
          return;
        }
        this.manifestInitializeResult = void 0;
        let i = e.params;
        if (i === void 0 || typeof i.protocolVersion !== "string" || i.protocolVersion !== t.protocolVersion) {
          this.dropManifest("protocol_version_mismatch");
          return;
        }
        if (!r(i.capabilities)) {
          this.dropManifest("client_capabilities_declared");
          return;
        }
        if (!o(t)) {
          this.dropManifest("malformed_result");
          return;
        }
        return this.swallowNextInitializedNotification = true, this.outcome = "replayed", { jsonrpc: "2.0", id: e.id, result: t };
      }
      case "notifications/initialized": {
        if (!this.swallowNextInitializedNotification) {
          this.dropManifest("unexpected_message");
          return;
        }
        return this.swallowNextInitializedNotification = false, s;
      }
      case "tools/list": {
        let t = this.manifestToolsListResult;
        if (t === void 0 || !("id" in e) || this.swallowNextInitializedNotification || e.params !== void 0 && e.params.cursor !== void 0) {
          this.dropManifest("unexpected_message");
          return;
        }
        if (this.manifestToolsListResult = void 0, !o(t)) return;
        return { jsonrpc: "2.0", id: e.id, result: t };
      }
      default: {
        this.dropManifest("unexpected_message");
        return;
      }
    }
  }
  dropManifest(e) {
    if (this.manifestInitializeResult = void 0, this.manifestToolsListResult = void 0, this.swallowNextInitializedNotification = false, this.outcome === "pending") this.outcome = e;
  }
}
function r(e) {
  return (0, import_chunk_ma3kja9f.T)(e) && Object.keys(e).length === 0;
}
function o(e) {
  let t = e._meta;
  if (t === void 0) return true;
  if (!(0, import_chunk_ma3kja9f.T)(t)) return false;
  let { progressToken: i } = t;
  if (i !== void 0 && typeof i !== "string" && typeof i !== "number") return false;
  let n = t["io.modelcontextprotocol/related-task"];
  return n === void 0 || (0, import_chunk_ma3kja9f.T)(n) && typeof n.taskId === "string";
}
class Fri {
  sendMcpMessage;
  isClosed = false;
  constructor(e) {
    this.sendMcpMessage = e;
  }
  onclose;
  onerror;
  onmessage;
  async start() {
  }
  async send(e) {
    if (this.isClosed) throw Error("Transport is closed");
    this.sendMcpMessage(e);
  }
  async close() {
    if (this.isClosed) return;
    this.isClosed = true, this.onclose?.();
  }
}
