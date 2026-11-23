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
var chunk_ft02b5r0_exports = {};
__export(chunk_ft02b5r0_exports, {
  Hqr: () => Hqr,
  Mqr: () => Mqr
});
module.exports = __toCommonJS(chunk_ft02b5r0_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var l = 5e3, u = 27e4;
class f {
  now;
  entries = /* @__PURE__ */ new Map();
  constructor(e = Date.now) {
    this.now = e;
  }
  async enter(e, t) {
    let n = this.now();
    for (let [o, m] of this.entries) if (m.state === "warm" && m.until <= n) this.entries.delete(o);
    let i = this.entries.get(e), r, a = 0;
    if (i === void 0) r = c(), this.entries.set(e, r);
    else if (i.state === "warming" && t.capMs > 0) {
      let o = this.now();
      await w(i.ready, t.capMs, t.signal), a = Math.max(0, this.now() - o);
    }
    let d = false;
    return { leader: r !== void 0, waitedMs: a, responded: () => {
      d = true, this.markWarm(e);
    }, done: () => {
      if (d || r === void 0) return;
      if (this.entries.get(e) === r && r.state === "warming") this.entries.delete(e), r.release();
    } };
  }
  stateOf(e) {
    let t = this.entries.get(e);
    if (t === void 0) return "cold";
    if (t.state === "warm") return t.until > this.now() ? "warm" : "cold";
    return "warming";
  }
  clear() {
    for (let e of this.entries.values()) if (e.state === "warming") e.release();
    this.entries.clear();
  }
  markWarm(e) {
    let t = this.entries.get(e);
    if (this.entries.set(e, { state: "warm", until: this.now() + u }), t?.state === "warming") t.release();
  }
}
function c() {
  let e;
  return { state: "warming", ready: new Promise((n) => {
    e = n;
  }), release: e };
}
function w(e, t, n) {
  if (n?.aborted) return Promise.resolve();
  let i = new AbortController(), r = () => i.abort();
  return n?.addEventListener("abort", r, { once: true }), Promise.race([e, (0, import_chunk_5appeerh.K)(t, i.signal)]).finally(() => {
    i.abort(), n?.removeEventListener("abort", r);
  });
}
var p = new import_chunk_2904xtvq.j(() => new f());
function Mqr() {
  return p.of((0, import_chunk_f9x2f6cx.N)().host);
}
function g(e) {
  return e ?? l;
}
function Hqr() {
  return import_chunk_c203g5kd.s.DISABLE_PROMPT_CACHING ? 0 : g(import_chunk_c203g5kd.s.CLAUDE_CODE_WORKFLOW_PREFIX_STAGGER_MS);
}
