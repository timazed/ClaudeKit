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
var chunk_4qkqgt25_exports = {};
__export(chunk_4qkqgt25_exports, {
  dUa: () => dUa,
  zYr: () => zYr
});
module.exports = __toCommonJS(chunk_4qkqgt25_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_a9pcmp5n = require("/$bunfs/root/chunk-a9pcmp5n.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_cd75h1kz = require("/$bunfs/root/chunk-cd75h1kz.js");
var w = "tengu_ticklish_fern", g = "anthropic/remoteBrowser", f = 9e4, c = 18e4, E = { wait_ran_out: "The cloud browser is in use by another agent in this chat, and only one agent can use it at a time. It was still in use after a wait of 3 minutes, so this call was not sent. If you have other work, do it first. Otherwise make the call again to wait once more.", page_may_have_changed: "Another agent in this chat has used the cloud browser since your last call, so a different tab may be in front and your page may have changed. This call was not sent. It is your turn now: list the tabs with browser_tabs, select the tab you were using (open it again if it is gone), and read the page again. Then make the call again if you still need it." }, m = "This cloud browser call was stopped before it was sent.";
class zYr {
  #e;
  #t = [];
  #o;
  #i = 0;
  #s = /* @__PURE__ */ new Map();
  #a = /* @__PURE__ */ new Map();
  async take(t, n, e) {
    if (e.aborted) throw new import_chunk_jv7av99m.Ie(m);
    this.#r(t, n);
    let o = Date.now(), h = this.#e?.agent !== t && !this.#_();
    if (h) {
      let a = (0, import_chunk_cd75h1kz.Bo)(e, { timeoutMs: c, refTimer: true }), s = await new Promise((r) => {
        let d = { agent: t, settle: r };
        this.#t.push(d), this.#n(), a.signal.addEventListener("abort", () => this.#l(d), { once: true });
      });
      if (a.cleanup(), !s) {
        let r = e.aborted || !a.signal.aborted;
        if ((0, import_chunk_cqa9hrgx.l)("remote_browser_turn", r ? "wait_stopped" : "wait_ran_out", { wait_ms: Date.now() - o, count: this.#t.length }), r) throw new import_chunk_jv7av99m.Ie(m);
        throw this.#a.set(t, { messageId: n, why: "wait_ran_out" }), _("wait_ran_out");
      }
      this.#r(t, n);
    }
    this.#e = { agent: t, lastCallAt: Date.now() };
    let i = this.#s.get(t);
    if (i !== void 0 && i.nth < this.#i) throw i.nth = 1 / 0, this.#a.set(t, { messageId: n, why: "page_may_have_changed" }), (0, import_chunk_cqa9hrgx.l)("remote_browser_turn", "page_may_have_changed", { wait_ms: Date.now() - o, idle_ms: Date.now() - i.at }), _("page_may_have_changed");
    if (this.#i += 1, this.#s.set(t, { nth: this.#i, at: Date.now() }), h) (0, import_chunk_cqa9hrgx.u)("remote_browser_turn", { wait_ms: Date.now() - o, count: this.#t.length });
  }
  release(t) {
    if (this.#e !== void 0 && this.#e.agent === t) this.#h();
  }
  runEnded(t) {
    for (let n of this.#t.filter((e) => e.agent === t)) this.#l(n);
    this.release(t);
  }
  #r(t, n) {
    let e = this.#a.get(t);
    if (e?.messageId === n) throw _(e.why);
  }
  #l(t) {
    this.#t = this.#t.filter((n) => n !== t), t.settle(false), this.#n();
  }
  #h() {
    let t = this.#t[0];
    this.#e = t && { agent: t.agent, lastCallAt: Date.now() };
    let n = this.#t.filter((e) => e.agent === t?.agent);
    this.#t = this.#t.filter((e) => e.agent !== t?.agent);
    for (let e of n) e.settle(true);
    this.#n();
  }
  #_() {
    return this.#e === void 0 || Date.now() - this.#e.lastCallAt >= f;
  }
  #n() {
    if (clearTimeout(this.#o), this.#e === void 0 || this.#t.length === 0) return;
    this.#o = setTimeout(() => this.#_() ? this.#h() : this.#n(), this.#e.lastCallAt + f - Date.now()), this.#o.unref?.();
  }
}
function dUa(t, n) {
  if (t !== import_chunk_2mwshd9r.Cp) return n;
  return async (e, o, h, i, ...a) => {
    if ((0, import_chunk_a9pcmp5n.vbe)() && !(0, import_chunk_4vsz8a99.Oc)(o).some((s) => {
      if (s.type !== "connected" || !(0, import_chunk_865at33z.sPe)(s)) return false;
      return s.capabilities.experimental?.[g]?.agents_apart === true;
    }) && (0, import_chunk_865at33z.b)(w, false) === true) await o.toolState.get(zYr).take((0, import_chunk_865at33z.Kk)(o.agentId, o.agentContext), i.message.id, o.abortController.signal);
    return n(e, o, h, i, ...a);
  };
}
function _(t) {
  return new import_chunk_jv7av99m.A(E[t], "cloud browser call not sent", t);
}
