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
var chunk_02gf2emt_exports = {};
__export(chunk_02gf2emt_exports, {
  Het: () => Het,
  U5s: () => U5s
});
module.exports = __toCommonJS(chunk_02gf2emt_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
class Het {
  #e = false;
  #t = (0, import_chunk_69qhefwa.Be)();
  get settled() {
    return this.#e;
  }
  settle() {
    if (this.#e) return;
    this.#e = true;
    try {
      this.#t.emit();
    } catch (e) {
      (0, import_chunk_w578pjby.t)(`CountedAsk: a listener threw while the request settled: ${String(e)}`, { level: "error" });
    }
    this.#t.clear();
  }
  settleWhen(e) {
    e.then(() => this.settle(), () => this.settle());
  }
  onSettle(e) {
    return this.#t.subscribe(e);
  }
}
class U5s {
  #e = /* @__PURE__ */ new Map();
  #t = 0;
  #i = (0, import_chunk_69qhefwa.Be)();
  subscribe = (e) => this.#i.subscribe(e);
  join(e) {
    if (e.settled || this.#e.has(e)) return;
    this.#e.set(e, e.onSettle(() => this.#s(e))), this.#i.emit();
  }
  positionLabel(e) {
    if (!this.#e.has(e)) return null;
    let i = this.#t + this.#e.size;
    return i < 2 ? null : `${this.#t + 1} of ${i}`;
  }
  #s(e) {
    let i = this.#e.get(e);
    if (i === void 0) return;
    i(), this.#e.delete(e), this.#t = this.#e.size === 0 ? 0 : this.#t + 1, this.#i.emit();
  }
}
