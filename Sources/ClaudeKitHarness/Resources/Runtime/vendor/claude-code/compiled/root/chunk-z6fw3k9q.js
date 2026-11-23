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
var chunk_z6fw3k9q_exports = {};
__export(chunk_z6fw3k9q_exports, {
  x_e: () => x_e
});
module.exports = __toCommonJS(chunk_z6fw3k9q_exports);
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
class e {
  last = null;
  record(s) {
    this.last = s;
  }
}
var x_e = new import_chunk_2904xtvq.j(() => new e());
