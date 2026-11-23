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
var chunk_1p0ddgd7_exports = {};
__export(chunk_1p0ddgd7_exports, {
  $hs: () => $hs,
  lV: () => lV,
  yDi: () => yDi
});
module.exports = __toCommonJS(chunk_1p0ddgd7_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_13h3tw8q = require("/$bunfs/root/chunk-13h3tw8q.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_fs = require("fs");
class c {
  #n = /* @__PURE__ */ new Map();
  #e = (0, import_chunk_69qhefwa.Be)();
  hold(e) {
    this.#n.set(e.sessionId, e), e.onAnswered(() => this.#e.emit(e.sessionId)), this.#e.emit(e.sessionId);
  }
  release(e) {
    if (e.close()) this.#e.emit(e.sessionId);
  }
  of(e) {
    return this.#n.get((0, import_chunk_t39bs2jr.Pu)(e));
  }
  ready(e) {
    return this.of(e)?.open() === true;
  }
  concerns(e) {
    return this.of(e) !== void 0;
  }
  onChanged(e, t) {
    let n = (0, import_chunk_t39bs2jr.Pu)(e);
    return this.#e.subscribe((s) => {
      if (s === n) t();
    });
  }
}
var g = 8, S = 2e3;
class h {
  attachSyncs = new c();
  servedCallHolds = null;
  #n = /* @__PURE__ */ new Map();
  #e = /* @__PURE__ */ new Map();
  #s = /* @__PURE__ */ new Map();
  #i = /* @__PURE__ */ new Map();
  #r;
  #a = null;
  #t = /* @__PURE__ */ new Map();
  #d = false;
  #l = false;
  #c = /* @__PURE__ */ new Set();
  #f = /* @__PURE__ */ new Set();
  register(e, t) {
    let n = (0, import_chunk_t39bs2jr.Pu)(e);
    this.#n.delete(n), this.#e.delete(n), this.#s.delete(n), f(this.#n).forEach((r) => {
      let o = this.#n.get(r);
      this.#n.delete(r), o?.then((a) => this.retire(a.sessionId), () => {
      });
    }), this.#n.set(n, t);
  }
  noteSilentlyNotArmed(e, t) {
    let n = (0, import_chunk_t39bs2jr.Pu)(e);
    this.#e.delete(n), f(this.#e).forEach((s) => this.#e.delete(s)), this.#e.set(n, t);
  }
  silentlyNotArmed(e) {
    return this.#e.get((0, import_chunk_t39bs2jr.Pu)(e));
  }
  noteNotOptedIn(e, t) {
    let n = (0, import_chunk_t39bs2jr.Pu)(e);
    this.#s.delete(n), f(this.#s).forEach((s) => this.#s.delete(s)), this.#s.set(n, t);
  }
  notOptedIn(e) {
    return this.#s.get((0, import_chunk_t39bs2jr.Pu)(e));
  }
  take(e) {
    let t = (0, import_chunk_t39bs2jr.Pu)(e), n = this.#n.get(t);
    return this.#n.delete(t), n;
  }
  reportSendGateAnswers(e, t) {
    return Promise.resolve(false);
  }
  noteResumeCommandOnScreen(e) {
    this.#a = (0, import_chunk_t39bs2jr.Pu)(e);
  }
  hold(e, t) {
    let n = (0, import_chunk_t39bs2jr.Pu)(e.sessionId);
    this.retire(n), this.#e.delete(n), this.#s.delete(n);
    let s = (0, import_chunk_f9x2f6cx.Cl)() ? (a, l) => m(this.#a === n ? l ?? a : a) : void 0, r = null, o = (a) => r ??= (async () => {
      await e.sync.shutdown(t, a), await e.sync.drain(import_chunk_w578pjby.FK);
    })();
    this.#t.set(n, { unregister: (0, import_chunk_w578pjby.Ct)(() => o(s)), shutDownOnce: o, sync: e.sync, root: e.gitRoot }), this.#o(n);
  }
  consentMayHaveChanged() {
  }
  retire(e) {
    let t = (0, import_chunk_t39bs2jr.Pu)(e), n = this.#t.get(t);
    if (n === void 0) return;
    this.#t.delete(t), n.unregister(), n.sync.shutdown(0), this.#o(t);
  }
  async shutDown(e) {
    let t = (0, import_chunk_t39bs2jr.Pu)(e), n = this.#t.get(t);
    if (n === void 0) return;
    let s = Date.now(), r = await n.shutDownOnce(void 0).then(() => false, (o) => ((0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(o)), true));
    if (this.#t.get(t) === n) this.#t.delete(t), n.unregister(), this.#o(t);
  }
  watchState(e, t) {
    let n = (0, import_chunk_t39bs2jr.Pu)(e), s = this.#i.get(n);
    if (s === void 0) s = { changed: (0, import_chunk_69qhefwa.Be)(), listening: 0, last: u(this.stateOf(n)) }, this.#i.set(n, s);
    let r = s, o = r.changed.subscribe(t);
    if (r.listening += 1, this.#r === void 0) this.#r = setInterval(() => {
      [...this.#i.keys()].forEach((l) => this.#o(l));
    }, S), this.#r.unref?.();
    let a = true;
    return () => {
      if (!a) return;
      if (a = false, o(), r.listening -= 1, r.listening === 0 && this.#i.get(n) === r) this.#i.delete(n);
      if (this.#i.size === 0 && this.#r !== void 0) clearInterval(this.#r), this.#r = void 0;
    };
  }
  #o(e) {
    let t = this.#i.get(e);
    if (t === void 0) return;
    let n = this.stateOf(e), s = u(n);
    if (s === t.last) return;
    t.last = s;
    try {
      t.changed.emit(n);
    } catch (r) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(r));
    }
  }
  stateOf(e) {
    return this.#t.get((0, import_chunk_t39bs2jr.Pu)(e))?.sync.state();
  }
  syncOf(e) {
    return this.#t.get((0, import_chunk_t39bs2jr.Pu)(e))?.sync;
  }
  servedCallFaceOf(e) {
    let t = (0, import_chunk_t39bs2jr.Pu)(e);
    return this.syncOf(t);
  }
  rootOf(e) {
    return this.#t.get((0, import_chunk_t39bs2jr.Pu)(e))?.root;
  }
  tellUnknownEngineWord() {
    if (this.#d) return false;
    return this.#d = true, true;
  }
  sayUnknownEngineWord() {
    if (this.#l) return false;
    return this.#l = true, true;
  }
  sayGitNotOnStartPath(e) {
    if (this.#c.has(e)) return false;
    return this.#c.add(e), true;
  }
  wholeListingOutgrew(e) {
    return this.#f.has(e);
  }
  noteWholeListingOutgrew(e) {
    this.#f.add(e);
  }
  get heldCount() {
    return this.#n.size;
  }
  get exitHookCount() {
    return this.#t.size;
  }
}
function p() {
  return new h();
}
var $hs = new import_chunk_2904xtvq.j(p);
function lV() {
  return $hs.of((0, import_chunk_f9x2f6cx.N)().host);
}
function yDi(e) {
  return lV().take(e);
}
function m(e) {
  try {
    (0, import_fs.writeSync)(2, `${(0, import_chunk_13h3tw8q.js)(e)}
`);
  } catch {
  }
}
function f(e) {
  return [...e.keys()].slice(0, Math.max(0, e.size + 1 - g));
}
function u(e) {
  switch (e?.state) {
    case void 0:
      return "none";
    case "seeding":
      return "seeding";
    case "armed":
      return `armed:${e.engine}:${e.direction}`;
    case "off":
      return `off:${e.reason}`;
    case "stopped":
      return `stopped:${e.reason}`;
  }
}
