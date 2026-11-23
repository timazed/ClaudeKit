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
var chunk_6crpgxs4_exports = {};
__export(chunk_6crpgxs4_exports, {
  Uqe: () => Uqe
});
module.exports = __toCommonJS(chunk_6crpgxs4_exports);
class Uqe {
  #t = /* @__PURE__ */ new Map();
  #e = /* @__PURE__ */ new Map();
  #s = false;
  told(t, s, e) {
    if (t.noteModelToldAway(e), t.awayEpisode(e) === void 0) return;
    this.#n(t);
    let i = s ?? "", n = this.#e.get(i);
    if (n !== void 0) {
      n.add(e);
      return;
    }
    let d = [...this.#e.keys()].find((o) => o !== "");
    if (this.#e.size >= 64 && d !== void 0) this.#e.delete(d);
    this.#e.set(i, /* @__PURE__ */ new Set([e]));
  }
  takeReturn(t, s, e) {
    let i = s ?? "", n = this.#e.get(i);
    if (n?.has(e) !== true || t.awayEpisode(e) !== void 0) return;
    let d = t.takeBackNote(e);
    if (d?.toldModel === true) {
      let r = this.#t.keys().next().value;
      if (!this.#t.has(e) && this.#t.size >= 256 && r !== void 0) this.#t.delete(r);
      this.#t.set(e, d);
    }
    let o = this.#t.get(e);
    if (o === void 0) return;
    return this.#i(i, n, e), o.sinceHeardMs;
  }
  clear() {
    this.#t.clear(), this.#e.clear();
  }
  #i(t, s, e) {
    if (s.delete(e), s.size === 0) this.#e.delete(t);
  }
  #n(t) {
    if (this.#s) return;
    this.#s = true, t.onAwayEpisodeDropped((s) => {
      this.#t.delete(s);
      for (let [e, i] of [...this.#e]) this.#i(e, i, s);
    });
  }
}
