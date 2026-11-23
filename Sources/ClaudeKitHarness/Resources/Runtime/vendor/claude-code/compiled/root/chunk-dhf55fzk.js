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
var chunk_dhf55fzk_exports = {};
__export(chunk_dhf55fzk_exports, {
  Lht: () => Lht,
  MVo: () => MVo,
  eer: () => eer
});
module.exports = __toCommonJS(chunk_dhf55fzk_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_s2fwt5ac = require("/$bunfs/root/chunk-s2fwt5ac.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var f = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ ttl: (0, import_chunk_adx6804h.E)().optional() })), b = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ method: (0, import_chunk_adx6804h.v)("tools/call"), params: (0, import_chunk_adx6804h.c)({ _meta: (0, import_chunk_s2fwt5ac.zVo)().optional(), task: f().optional(), name: (0, import_chunk_adx6804h.n)(), arguments: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() }) })), y = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ params: (0, import_chunk_adx6804h.c)({ cursor: (0, import_chunk_adx6804h.n)().optional() }).optional() })), R = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ params: (0, import_chunk_adx6804h.c)({ requestId: (0, import_chunk_s2fwt5ac.GVo)().optional(), reason: (0, import_chunk_adx6804h.n)().optional() }) })), MVo = (0, import_chunk_2cbgkbm2.p)(() => {
  let e = (0, import_chunk_adx6804h.oc)((o) => typeof o === "object" && o !== null), t = (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)());
  return (0, import_chunk_adx6804h.c)({ params: (0, import_chunk_adx6804h.c)({ protocolVersion: (0, import_chunk_adx6804h.n)(), capabilities: (0, import_chunk_adx6804h.c)({ experimental: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), e).optional(), sampling: (0, import_chunk_adx6804h.c)({ context: e.optional(), tools: e.optional() }).optional(), elicitation: (0, import_chunk_adx6804h.Mge)((0, import_chunk_adx6804h.c)({ form: (0, import_chunk_adx6804h.Mge)((0, import_chunk_adx6804h.c)({ applyDefaults: (0, import_chunk_adx6804h.P)().optional() }), t).optional(), url: e.optional() }), t).optional(), roots: (0, import_chunk_adx6804h.c)({ listChanged: (0, import_chunk_adx6804h.P)().optional() }).optional(), tasks: (0, import_chunk_adx6804h.c)({ list: e.optional(), cancel: e.optional(), requests: (0, import_chunk_adx6804h.c)({ sampling: (0, import_chunk_adx6804h.c)({ createMessage: e.optional() }).optional(), elicitation: (0, import_chunk_adx6804h.c)({ create: e.optional() }).optional() }).optional() }).optional(), extensions: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), e).optional() }), clientInfo: (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)(), title: (0, import_chunk_adx6804h.n)().optional(), icons: (0, import_chunk_adx6804h.C)(j()).optional(), version: (0, import_chunk_adx6804h.n)(), websiteUrl: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional() }) }) });
}), q = (0, import_chunk_2cbgkbm2.p)(() => {
  let e = (0, import_chunk_adx6804h.n)().refine((r) => {
    try {
      return atob(r), true;
    } catch {
      return false;
    }
  }, { message: "Invalid Base64 string" }), t = (0, import_chunk_adx6804h.c)({ audience: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.F)(["user", "assistant"])).optional(), priority: (0, import_chunk_adx6804h.E)().min(0).max(1).optional(), lastModified: (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.aC)({ offset: true }), (0, import_chunk_adx6804h.aC)({ offset: true, precision: -1 })]).optional() }).optional(), o = (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional(), s = { data: e, mimeType: (0, import_chunk_adx6804h.n)(), annotations: t, _meta: o }, i = { uri: (0, import_chunk_adx6804h.n)(), mimeType: (0, import_chunk_adx6804h.n)().optional(), _meta: o };
  return (0, import_chunk_adx6804h.$t)({ _meta: (0, import_chunk_s2fwt5ac.zVo)().optional(), content: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("text"), text: (0, import_chunk_adx6804h.n)(), annotations: t, _meta: o }), (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("image"), ...s }), (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("audio"), ...s }), (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)(), title: (0, import_chunk_adx6804h.n)().optional(), icons: (0, import_chunk_adx6804h.C)(j()).optional(), uri: (0, import_chunk_adx6804h.n)(), description: (0, import_chunk_adx6804h.n)().optional(), mimeType: (0, import_chunk_adx6804h.n)().optional(), size: (0, import_chunk_adx6804h.E)().optional(), annotations: t, _meta: (0, import_chunk_adx6804h.$t)({}).optional(), type: (0, import_chunk_adx6804h.v)("resource_link") }), (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("resource"), resource: (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.c)({ ...i, text: (0, import_chunk_adx6804h.n)() }), (0, import_chunk_adx6804h.c)({ ...i, blob: e })]), annotations: t, _meta: o })])).default([]), structuredContent: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional(), isError: (0, import_chunk_adx6804h.P)().optional() });
}), j = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ src: (0, import_chunk_adx6804h.n)(), mimeType: (0, import_chunk_adx6804h.n)().optional(), sizes: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), theme: (0, import_chunk_adx6804h.F)(["light", "dark"]).optional() }));
var eer = ["2025-11-25", "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"], z = -32603;
class Lht {
  serverInfo;
  onclose;
  oninitialized;
  #e;
  #t;
  #s;
  #n = {};
  #o = /* @__PURE__ */ new Map();
  constructor(e, t) {
    this.serverInfo = e;
    this.#t = t.capabilities, this.#s = t.instructions;
  }
  get transport() {
    return this.#e;
  }
  registerCapabilities(e) {
    if (this.#e) throw Error("Cannot register capabilities after connecting to transport");
    let t = { ...this.#t };
    for (let [o, s] of Object.entries(e)) if (s !== void 0) t[o] = { ...t[o], ...s };
    this.#t = t;
  }
  setRequestHandler(e, t) {
    if (!this.#t.tools) {
      if (e === "tools/list") throw Error("Server does not support tools (required for tools/list)");
      throw Error("Server does not support tools (required for tools/call)");
    }
    this.#n[e] = t;
  }
  async connect(e) {
    this.#e = e;
    let t = e.onclose;
    e.onclose = () => {
      t?.(), this.#r();
    };
    let o = e.onmessage;
    e.onmessage = (s, i) => {
      o?.(s, i), this.#a(s, i?.authInfo);
    }, await e.start();
  }
  async close() {
    await this.#e?.close();
  }
  async sendToolListChanged() {
    return this.#i({ method: "notifications/tools/list_changed" });
  }
  async #i(e, t, o = false) {
    if (!this.#e) throw Error("Not connected");
    if (o) await S();
    if (e.method === "notifications/tools/list_changed" && !this.#t.tools) throw Error("Server does not support notifying of tool list changes (required for notifications/tools/list_changed)");
    await this.#e.send({ ...e, jsonrpc: "2.0" }, t === void 0 ? void 0 : { relatedRequestId: t });
  }
  #r() {
    for (let e of this.#o.values()) e.abort();
    this.#o.clear(), this.#e = void 0, this.onclose?.();
  }
  #a(e, t) {
    let o = (0, import_chunk_s2fwt5ac.Wet)().safeParse(e);
    if (!o.success || !("method" in o.data)) return;
    let s = o.data;
    if (!("id" in s)) {
      this.#d(s.method, e);
      return;
    }
    let { method: i, id: r } = s, d = this.#e, u = i === "tools/list" ? this.#n["tools/list"] : void 0, m = i === "tools/call" ? this.#n["tools/call"] : void 0;
    if (!u && !m && i !== "initialize" && i !== "ping") {
      d?.send({ jsonrpc: "2.0", id: r, error: { code: -32601, message: "Method not found" } }).catch(() => {
      });
      return;
    }
    let w = Boolean(s.params?._meta?.["io.modelcontextprotocol/related-task"]?.taskId), T = f().safeParse(s.params?.task).success, a = new AbortController();
    this.#o.set(r, a);
    let h = { signal: a.signal, requestId: r, authInfo: t, sendNotification: async (l) => {
      if (a.signal.aborted) return;
      await this.#i(l, r, w);
    } };
    Promise.resolve().then(() => {
      if (T) throw new g(z, `Server does not support task creation (required for ${i})`);
    }).then(() => {
      if (u) return y().parse(e), Promise.resolve(u(e, h));
      if (m) return this.#l(m, b().parse(e), h);
      return Promise.resolve(i === "ping" ? {} : this.#c(e));
    }).then(async (l) => {
      if (!a.signal.aborted) await d?.send({ result: l, jsonrpc: "2.0", id: r });
    }, async (l) => {
      if (!a.signal.aborted) await d?.send({ jsonrpc: "2.0", id: r, error: x(l) });
    }).catch(() => {
    }).finally(() => {
      if (this.#o.get(r) === a) this.#o.delete(r);
    });
  }
  async #l(e, t, o) {
    let s = q().safeParse(await e(t, o));
    if (!s.success) throw new g(-32602, `MCP error -32602: Invalid tools/call result: ${s.error.message}`);
    return s.data;
  }
  #c(e) {
    let t = MVo().parse(e).params.protocolVersion;
    return { protocolVersion: eer.includes(t) ? t : eer[0], capabilities: this.#t, serverInfo: this.serverInfo, ...this.#s && { instructions: this.#s } };
  }
  #d(e, t) {
    if (e === "notifications/cancelled") Promise.resolve().then(() => {
      let o = R().safeParse(t);
      if (o.success && o.data.params.requestId) this.#o.get(o.data.params.requestId)?.abort(o.data.params.reason);
    });
    else if (e === "notifications/initialized") Promise.resolve().then(() => this.oninitialized?.()).catch(() => {
    });
  }
}
async function S() {
  throw Error("Cannot enqueue task message: taskStore and taskMessageQueue are not configured");
}
class g extends Error {
  code;
  constructor(e, t) {
    super(t);
    this.code = e;
  }
}
function x(e) {
  if (typeof e !== "object" || e === null) return { code: z, message: "Internal error" };
  let t = "code" in e ? e.code : void 0, o = "data" in e ? e.data : void 0;
  return { code: typeof t === "number" && Number.isSafeInteger(t) ? t : z, message: "message" in e && typeof e.message === "string" ? e.message : "Internal error", ...o !== void 0 && { data: o } };
}
