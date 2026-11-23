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
var chunk_vqrzsba1_exports = {};
__export(chunk_vqrzsba1_exports, {
  nYt: () => nYt,
  qGo: () => qGo,
  u4s: () => u4s
});
module.exports = __toCommonJS(chunk_vqrzsba1_exports);
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var t = "repl-ask-declined", qGo = new DOMException(t, "AbortError");
function nYt(e) {
  return e.aborted && (0, import_chunk_cbnm4p23.Ai)(e.reason) === t;
}
class o {
  #e = 0;
  #t = (0, import_chunk_69qhefwa.Be)();
  subscribe = (e) => this.#t.subscribe(e);
  getSnapshot = () => this.#e > 0;
  hold() {
    if (this.#e++, this.#e === 1) this.#t.emit();
    let e = false;
    return () => {
      if (e) return;
      if (e = true, this.#e--, this.#e === 0) this.#t.emit();
    };
  }
}
var u4s = new import_chunk_pzzqg6s3.ze(() => new o());
