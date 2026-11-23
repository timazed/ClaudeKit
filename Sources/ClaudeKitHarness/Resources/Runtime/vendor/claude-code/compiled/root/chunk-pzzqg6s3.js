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
var chunk_pzzqg6s3_exports = {};
__export(chunk_pzzqg6s3_exports, {
  qB: () => qB,
  ze: () => ze
});
module.exports = __toCommonJS(chunk_pzzqg6s3_exports);
function qB(e) {
  return { subscribe(t) {
    return e().subscribe(t);
  }, emit(...t) {
    e().emit(...t);
  }, clear() {
    e().clear();
  } };
}
class ze {
  #t;
  #e = /* @__PURE__ */ new WeakMap();
  constructor(e) {
    this.#t = e;
  }
  peek(e) {
    return this.#e.get(e.root);
  }
  of(e) {
    let t = e.root, r = this.#e.get(t);
    if (r !== void 0) return r;
    let o = this.#t();
    return this.#e.set(t, o), o;
  }
  drop(e) {
    this.#e.delete(e.root);
  }
}
