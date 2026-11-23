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
var chunk_2904xtvq_exports = {};
__export(chunk_2904xtvq_exports, {
  j: () => j
});
module.exports = __toCommonJS(chunk_2904xtvq_exports);
class j {
  #t;
  #e = /* @__PURE__ */ new WeakMap();
  constructor(t) {
    this.#t = t;
  }
  of(t) {
    let e = this.#e.get(t);
    if (e !== void 0) return e;
    let s = this.#t();
    return this.#e.set(t, s), s;
  }
}
