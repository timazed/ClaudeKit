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
var chunk_we1vdsm0_exports = {};
__export(chunk_we1vdsm0_exports, {
  Agt: () => Agt
});
module.exports = __toCommonJS(chunk_we1vdsm0_exports);
class Agt {
  #e = /* @__PURE__ */ new Map();
  remember(i) {
    for (let e of i) this.#e.delete(e.id), this.#e.set(e.id, e);
    for (let e of this.#e.keys()) {
      if (this.#e.size <= 512) break;
      this.#e.delete(e);
    }
  }
  get(i) {
    return this.#e.get(i);
  }
  clear() {
    this.#e.clear();
  }
}
