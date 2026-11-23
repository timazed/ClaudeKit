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
var chunk_f0sbddj1_exports = {};
__export(chunk_f0sbddj1_exports, {
  F9t: () => F9t,
  LIt: () => LIt,
  a8l: () => a8l,
  ikn: () => ikn,
  sjr: () => sjr,
  skn: () => skn
});
module.exports = __toCommonJS(chunk_f0sbddj1_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
async function skn(e) {
  let s = false, i = await (0, import_chunk_9e5mdyfk.qF)(void 0, e, () => {
    s = true;
  });
  return s ? null : i;
}
var c = 12e4, p = 18e5, g = 1e4, m = 3;
function S(e) {
  return !F9t(e) && e.tempo === "blocked" && e.needs !== import_chunk_9e5mdyfk.jv;
}
function F9t(e) {
  return (0, import_chunk_9e5mdyfk.Wd)(e) && !((0, import_chunk_9e5mdyfk.Hk)(e.state) === "success" && (0, import_chunk_9e5mdyfk.wSe)(e));
}
class LIt {
  #p;
  #g;
  #s = void 0;
  #m = (0, import_chunk_69qhefwa.Be)();
  #h = 0;
  #n = false;
  #u = true;
  #o = null;
  #e = null;
  #d = false;
  #t = 0;
  #i = null;
  #l = 0;
  #S;
  constructor(e) {
    this.#p = e?.sweepMs ?? g, this.#g = e?.ignoredAfterMs ?? p;
    let s = e?.storageV5;
    this.#S = () => skn(s);
  }
  getSnapshot = () => this.#s;
  subscribe = (e) => {
    let s = this.#m.subscribe(e);
    if (this.#h++, !this.#n) if (this.#n = true, this.#s === void 0) this.#r();
    else this.#f();
    let i = false;
    return () => {
      if (i) return;
      if (i = true, s(), this.#h--, this.#h === 0) this.#N();
    };
  };
  refetch = () => this.#r();
  async quiesce() {
    while (this.#e) await this.#e;
  }
  setFocused(e) {
    if (e === this.#u) return;
    if (this.#u = e, !this.#n) return;
    if (e) this.#l = 0, this.#r();
    else this.#a();
  }
  recordOpenViaLeft() {
    if (this.#c(), this.#t > 0 && Date.now() - this.#t <= c) (0, import_chunk_cqa9hrgx.u)("fleet_needs_input_nudge"), this.#t = 0;
    return this.#s;
  }
  #r() {
    if (this.#a(), this.#e) return this.#d = true, this.#e;
    return this.#e = this.#b().finally(() => {
      if (this.#e = null, this.#d) this.#d = false, this.#r();
    }), this.#e;
  }
  async #b() {
    let e;
    try {
      e = await this.#S();
    } catch {
      e = [];
    }
    if (!this.#n) return;
    if (e !== null) this.#l = 0;
    else if (++this.#l <= m) {
      if (this.#l === 1) (0, import_chunk_w578pjby.t)("[fleet nudge] listing sessions failed for a reason that may pass; keeping the counts", { level: "warn" });
      if (this.#u) this.#f();
      return;
    }
    let s = e ?? [], i = 0, r = 0, d = 0, h = 0, f = (0, import_chunk_9e5mdyfk.TS)();
    for (let n of s) {
      if (n.id === f) continue;
      if (F9t(n.state)) {
        if (r++, (0, import_chunk_9e5mdyfk.Hk)(n.state.state) === "success") d++;
        continue;
      }
      if (h++, S(n.state)) i++;
    }
    if (i === 0) this.#c(), this.#t = 0;
    let o = this.#s;
    if (o?.needsInput !== i || o?.done !== r || o?.succeeded !== d) {
      let n = o !== void 0 && i > o.needsInput;
      if (this.#s = { needsInput: i, done: r, succeeded: d }, (0, import_chunk_y53wbr8a.a)("tengu_fleet_nudge_state", { needs_input_count: i, done_count: r, succeeded_count: d, increased: n }), n) this.#t = Date.now(), this.#_();
      this.#m.emit();
    }
    if (h > 0 && this.#u) this.#f();
  }
  #f() {
    this.#a(), this.#o = setTimeout(() => void this.#r(), this.#p), this.#o.unref();
  }
  #_() {
    this.#c(), this.#i = setTimeout(() => {
      this.#i = null, (0, import_chunk_cqa9hrgx.l)("fleet_needs_input_nudge", "ignored"), this.#t = 0;
    }, this.#g), this.#i.unref();
  }
  #a() {
    if (this.#o) clearTimeout(this.#o), this.#o = null;
  }
  #c() {
    if (this.#i) clearTimeout(this.#i), this.#i = null;
  }
  #N() {
    this.#a(), this.#d = false, this.#n = false;
  }
}
function a8l(e, s) {
  return e.fleetNudgeStore ??= new LIt({ storageV5: s }), e.fleetNudgeStore;
}
var sjr = (0, import_chunk_bs4h6795.an)(null);
function ikn() {
  let e = (0, import_chunk_bs4h6795.be)(sjr);
  if (!e) throw ReferenceError("useFleetNudgeStore cannot be called outside of a FleetNudgeStoreContext provider (mounted by <AppStateProvider />)");
  return e;
}
