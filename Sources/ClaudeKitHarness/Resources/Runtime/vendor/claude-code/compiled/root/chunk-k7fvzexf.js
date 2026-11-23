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
var chunk_k7fvzexf_exports = {};
__export(chunk_k7fvzexf_exports, {
  LAn: () => LAn,
  VXt: () => VXt,
  cor: () => cor
});
module.exports = __toCommonJS(chunk_k7fvzexf_exports);
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var r = (0, import_chunk_se72nykz.EVt)("computerUseMcpState", void 0);
class VXt {
  #e;
  constructor(e) {
    this.#e = e;
  }
  static over(e) {
    return new VXt(r(e.getState, e.setState));
  }
  get() {
    return this.#e.get();
  }
  update(e) {
    this.#e.set(e);
  }
}
class t {
  owner = void 0;
  acquire(e) {
    if (this.owner) return () => {
    };
    return this.owner = e, () => {
      if (this.owner === e) this.owner = void 0;
    };
  }
}
var LAn = new import_chunk_pzzqg6s3.ze(() => new t());
function cor(e) {
  return LAn.of(e).owner;
}
