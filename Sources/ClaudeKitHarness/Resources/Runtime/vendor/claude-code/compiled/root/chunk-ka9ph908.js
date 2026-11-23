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
var chunk_ka9ph908_exports = {};
__export(chunk_ka9ph908_exports, {
  mYr: () => mYr,
  n$a: () => n$a
});
module.exports = __toCommonJS(chunk_ka9ph908_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_hy0sycbj = require("/$bunfs/root/chunk-hy0sycbj.js");
var h = 0, n = 1;
class mYr {
  ws;
  parseMessage;
  started = false;
  opened;
  constructor(e, o) {
    this.ws = e;
    this.parseMessage = o;
    this.opened = new Promise((t, c) => {
      if (this.ws.readyState === n) t();
      else {
        let s = this.ws, a = () => {
          s.removeEventListener("open", a), s.removeEventListener("error", i), t();
        }, i = (d) => {
          s.removeEventListener("open", a), s.removeEventListener("error", i), (0, import_chunk_42tcgre6.q)("error", "mcp_websocket_connect_fail"), c((0, import_chunk_jv7av99m.D)(d.error ?? d));
        };
        s.addEventListener("open", a), s.addEventListener("error", i);
      }
    }), this.opened.catch(() => {
    });
    let r = this.ws;
    r.addEventListener("message", this.onBunMessage), r.addEventListener("error", this.onBunError), r.addEventListener("close", this.onBunClose);
  }
  onclose;
  onerror;
  onmessage;
  closeEvent = void 0;
  onBunMessage = (e) => {
    try {
      let o = typeof e.data === "string" ? e.data : String(e.data);
      if (Buffer.byteLength(o) > import_chunk_hy0sycbj.XRe) {
        this.handleError(new import_chunk_jv7av99m.A(`MCP server sent a WebSocket message over ${import_chunk_hy0sycbj.XRe / 1024 / 1024} MiB. Claude Code did not read it and closed the connection.`, "mcp websocket message over the cap")), this.close().catch(() => {
        });
        return;
      }
      let r = (0, import_chunk_w578pjby.te)(o), t = this.parseMessage(r);
      this.onmessage?.(t);
    } catch (o) {
      this.handleError(o);
    }
  };
  onBunError = () => {
    this.handleError(Error("WebSocket error"));
  };
  onBunClose = (e) => {
    this.closeEvent = { code: e.code, reason: e.reason }, this.handleCloseCleanup();
  };
  handleError(e) {
    (0, import_chunk_42tcgre6.q)("error", "mcp_websocket_message_fail"), this.onerror?.((0, import_chunk_jv7av99m.D)(e));
  }
  handleCloseCleanup() {
    this.onclose?.();
    let e = this.ws;
    e.removeEventListener("message", this.onBunMessage), e.removeEventListener("error", this.onBunError), e.removeEventListener("close", this.onBunClose);
  }
  async start() {
    if (this.started) throw Error("Start can only be called once per transport.");
    if (await this.opened, this.ws.readyState !== n) throw (0, import_chunk_42tcgre6.q)("error", "mcp_websocket_start_not_opened"), Error("WebSocket is not open. Cannot start transport.");
    this.started = true;
  }
  async close() {
    if (this.ws.readyState === n || this.ws.readyState === h) this.ws.close();
    this.handleCloseCleanup();
  }
  async send(e) {
    if (this.ws.readyState !== n) throw (0, import_chunk_42tcgre6.q)("error", "mcp_websocket_send_not_opened"), Error("WebSocket is not open. Cannot send message.");
    let o = (0, import_chunk_w578pjby._)(e);
    try {
      this.ws.send(o);
    } catch (r) {
      throw this.handleError(r), r;
    }
  }
}
function n$a(e) {
  return e instanceof mYr ? e.closeEvent : void 0;
}
