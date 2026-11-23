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
var chunk_amwj5gqt_exports = {};
__export(chunk_amwj5gqt_exports, {
  TBs: () => TBs,
  _5t: () => _5t
});
module.exports = __toCommonJS(chunk_amwj5gqt_exports);
var import_chunk_jnjxe5w9 = require("/$bunfs/root/chunk-jnjxe5w9.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
var n = [];
class i {
  #n = (0, import_chunk_69qhefwa.Be)();
  #o = { entries: n, loading: false };
  #t = false;
  #i = 0;
  #e = 0;
  getSnapshot = () => this.#o;
  subscribe = (e) => this.#n.subscribe(e);
  #r(e) {
    let t = this.#o, r = { ...t, ...e };
    if (r.entries === t.entries && r.loading === t.loading) return;
    this.#o = r, this.#n.emit();
  }
  get pending() {
    return this.#e !== 0;
  }
  clear() {
    this.#t = false, this.#r({ entries: n });
  }
  beginLoad() {
    if (this.#e = ++this.#i, !this.#t) this.#r({ loading: true });
    return this.#e;
  }
  endLoad(e) {
    if (e !== this.#e) return;
    this.#e = 0, this.#r({ loading: false });
  }
  setEntries(e) {
    this.#t = true, this.#r({ entries: e.length === 0 ? n : e });
  }
  get known() {
    return this.#t;
  }
}
function _5t() {
  return { roster: null, selection: null, view: null, attach: null, editor: null, deleteConfirm: null, earlier: new i(), agentLastUsedMigrationDone: false, scope: null, resultSeen: { entryChannel: (0, import_chunk_78g0060s.S)("unknown"), openFinished: null, emitted: /* @__PURE__ */ new Set() }, fleetNudgeStore: null, killRing: (0, import_chunk_jnjxe5w9.lWo)() };
}
function TBs({ selection: e, view: t, attach: r, editor: o, deleteConfirm: l }, { clock: s, groupsEnabled: a }) {
  (0, import_chunk_bs4h6795.H)(() => {
    let d = e.attachView({ clock: s, onError: o.setError }), p = t.attachView({ groupsEnabled: a }), c = r.attachView(), h = o.attachView(), u = l.attachView();
    return () => {
      u(), h(), c(), p(), d();
    };
  }, [e, t, r, o, l, s]);
}
