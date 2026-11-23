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
var chunk_szvrpg0x_exports = {};
__export(chunk_szvrpg0x_exports, {
  Wa: () => Wa,
  iO: () => iO
});
module.exports = __toCommonJS(chunk_szvrpg0x_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
class s {
  #t = /* @__PURE__ */ new Set();
  #e = /* @__PURE__ */ new Map();
  lastBellAt = 0;
  claim(t) {
    if (this.#t.has(t)) return false;
    return this.#t.add(t), true;
  }
  has(t) {
    return this.#t.has(t);
  }
  claimIfChanged(t, e) {
    if (this.#e.get(t) === e) return false;
    return this.#e.set(t, e), true;
  }
}
var iO = new import_chunk_2904xtvq.j(() => new s());
function Wa() {
  return iO.of((0, import_chunk_f9x2f6cx.N)().host);
}
