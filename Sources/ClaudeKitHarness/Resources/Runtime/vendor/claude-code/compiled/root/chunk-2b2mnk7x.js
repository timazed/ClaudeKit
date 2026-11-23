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
var chunk_2b2mnk7x_exports = {};
__export(chunk_2b2mnk7x_exports, {
  RVo: () => RVo
});
module.exports = __toCommonJS(chunk_2b2mnk7x_exports);
var import_chunk_s2fwt5ac = require("/$bunfs/root/chunk-s2fwt5ac.js");
var import_chunk_dhf55fzk = require("/$bunfs/root/chunk-dhf55fzk.js");
var import_crypto = require("crypto");
var u = "_GET_stream", f = new TextEncoder();
class RVo {
  stringify;
  onclose;
  onmessage;
  #c = false;
  #l = false;
  #a = false;
  #r = false;
  #t;
  #o;
  #f;
  #s = /* @__PURE__ */ new Map();
  #n = /* @__PURE__ */ new Map();
  #i = /* @__PURE__ */ new Map();
  constructor(e, s) {
    this.stringify = e;
    this.#o = s.sessionIdGenerator, this.#f = s.enableJsonResponse ?? false;
  }
  async start() {
    if (this.#c) throw Error("Transport already started");
    this.#c = true;
  }
  async handleRequest(e, s) {
    if (this.#o === void 0) {
      if (this.#l) throw Error("Stateless transport cannot be reused across requests. Create a new transport per request.");
      this.#l = true;
    }
    switch (e.method) {
      case "POST":
        return this.#g(e, s?.authInfo);
      case "GET":
        return this.#w(e);
      case "DELETE":
        return this.#y(e);
    }
    return this.#e(405, -32e3, "Method not allowed.", { Allow: "GET, POST, DELETE" });
  }
  async send(e, s) {
    let t = "result" in e || "error" in e, r = t ? e.id : s?.relatedRequestId;
    if (r === void 0) {
      if (t) throw Error("Cannot send a response on a standalone SSE stream unless resuming a previous client request");
      this.#v(u, e);
      return;
    }
    let i = this.#n.get(r);
    if (i === void 0) throw Error("No connection established for request ID");
    let d = this.#s.get(i);
    if (this.#v(i, e), !t) return;
    this.#i.set(r, e);
    let a = [...this.#n].filter(([, n]) => n === i).map(([n]) => n);
    if (!a.every((n) => this.#i.has(n))) return;
    if (d?.kind === "json") {
      let n = a.map((h) => this.#i.get(h));
      d.answer(new Response(this.stringify(n.length === 1 ? n[0] : n), { status: 200, headers: this.#R({ "Content-Type": "application/json" }) }));
    } else this.#u(i);
    for (let n of a) this.#i.delete(n), this.#n.delete(n);
  }
  async close() {
    this.#r = true;
    for (let e of [...this.#s.keys()]) this.#u(e);
    this.#s.clear(), this.#i.clear(), this.onclose?.();
  }
  closeSSEStream(e) {
    let s = this.#n.get(e);
    if (s !== void 0) this.#u(s);
  }
  async #g(e, s) {
    let t = e.headers.get("accept");
    if (!t?.includes("application/json") || !t.includes("text/event-stream")) return this.#e(406, -32e3, "Not Acceptable: Client must accept both application/json and text/event-stream");
    if (!e.headers.get("content-type")?.includes("application/json")) return this.#e(415, -32e3, "Unsupported Media Type: Content-Type must be application/json");
    let r;
    try {
      r = await e.json();
    } catch {
      return this.#e(400, -32700, "Parse error: Invalid JSON");
    }
    let i = [];
    for (let o of Array.isArray(r) ? r : [r]) {
      let c = (0, import_chunk_s2fwt5ac.Wet)().safeParse(o);
      if (!c.success) return this.#e(400, -32700, "Parse error: Invalid JSON-RPC message");
      i.push(c.data);
    }
    if (i.some((o) => "method" in o && o.method === "initialize" && (0, import_chunk_dhf55fzk.MVo)().safeParse(o).success)) {
      if (this.#a && this.#t !== void 0) return this.#e(400, -32600, "Invalid Request: Server already initialized");
      if (i.length > 1) return this.#e(400, -32600, "Invalid Request: Only one initialization request is allowed");
      if (this.#r) return this.#e(503, -32e3, "Service Unavailable: Server closed");
      this.#t = this.#o?.(), this.#a = true;
    } else {
      let o = this.#h(e);
      if (o) return o;
    }
    let a = i.filter((o) => "method" in o && "id" in o);
    if (a.length === 0) return this.#d(i, s), new Response(null, { status: 202 });
    let n = (0, import_crypto.randomUUID)();
    if (this.#f) return new Promise((o) => {
      this.#s.set(n, { kind: "json", answer: o }), this.#p(a, n), this.#d(i, s);
    });
    let h = this.#m(n, "no-cache");
    if (this.#p(a, n), await Promise.resolve(), this.#r) return this.#e(404, -32001, "Session not found");
    return this.#d(i, s), h;
  }
  #p(e, s) {
    for (let t of e) if ("id" in t && t.id !== void 0) this.#n.set(t.id, s);
  }
  #d(e, s) {
    for (let t of e) this.onmessage?.(t, { authInfo: s });
  }
  #m(e, s) {
    let t = new ReadableStream({ start: (r) => {
      this.#s.set(e, { kind: "events", write: (i) => r.enqueue(i), end: () => r.close() });
    }, cancel: () => {
      this.#s.delete(e);
    } });
    return new Response(t, { status: 200, headers: this.#R({ "Content-Type": "text/event-stream", "Cache-Control": s, Connection: "keep-alive" }) });
  }
  async #w(e) {
    if (!e.headers.get("accept")?.includes("text/event-stream")) return this.#e(406, -32e3, "Not Acceptable: Client must accept text/event-stream");
    let s = this.#h(e);
    if (s) return s;
    if (this.#s.has(u)) return this.#e(409, -32e3, "Conflict: Only one SSE stream is allowed per session");
    return this.#m(u, "no-cache, no-transform");
  }
  async #y(e) {
    let s = this.#h(e);
    if (s) return s;
    return await Promise.resolve(), await this.close(), new Response(null, { status: 200 });
  }
  #h(e) {
    if (this.#o !== void 0) {
      if (!this.#a) return this.#e(400, -32e3, "Bad Request: Server not initialized");
      let t = e.headers.get("mcp-session-id");
      if (!t) return this.#e(400, -32e3, "Bad Request: Mcp-Session-Id header is required");
      if (t !== this.#t) return this.#e(404, -32001, "Session not found");
    }
    let s = e.headers.get("mcp-protocol-version");
    if (s !== null && !import_chunk_dhf55fzk.eer.includes(s)) return this.#e(400, -32e3, `Bad Request: Unsupported protocol version: ${s} (supported versions: ${import_chunk_dhf55fzk.eer.join(", ")})`);
    if (this.#r) return this.#e(404, -32001, "Session not found");
    return;
  }
  #u(e) {
    let s = this.#s.get(e);
    if (this.#s.delete(e), s?.kind === "events") s.end();
  }
  #R(e) {
    let s = new Headers(e);
    if (this.#t !== void 0) s.set("mcp-session-id", this.#t);
    return s;
  }
  #v(e, s) {
    let t = this.#s.get(e);
    if (t?.kind !== "events") return;
    try {
      t.write(f.encode(`event: message
data: ${this.stringify(s)}

`));
    } catch {
    }
  }
  #e(e, s, t, r = {}) {
    return new Response(this.stringify({ jsonrpc: "2.0", error: { code: s, message: t }, id: null }), { status: e, headers: { "Content-Type": "application/json", ...r } });
  }
}
