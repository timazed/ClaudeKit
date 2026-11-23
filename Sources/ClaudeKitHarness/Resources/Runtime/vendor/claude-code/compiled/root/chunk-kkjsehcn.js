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
var chunk_kkjsehcn_exports = {};
__export(chunk_kkjsehcn_exports, {
  xte: () => xte
});
module.exports = __toCommonJS(chunk_kkjsehcn_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
class e {
  #e = { credentialsPersisted: 0, loginCompleted: 0 };
  #t = (0, import_chunk_69qhefwa.Be)();
  subscribe = (t) => this.#t.subscribe(t);
  getSnapshot = () => this.#e;
  credentialsPersisted() {
    this.#e = { ...this.#e, credentialsPersisted: this.#e.credentialsPersisted + 1 }, this.#t.emit();
  }
  loginCompleted() {
    this.#e = { ...this.#e, loginCompleted: this.#e.loginCompleted + 1 }, this.#t.emit();
  }
}
var xte = new import_chunk_pzzqg6s3.ze(() => new e());
