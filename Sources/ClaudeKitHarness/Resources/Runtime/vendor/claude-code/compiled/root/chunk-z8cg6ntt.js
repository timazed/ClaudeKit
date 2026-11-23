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
var chunk_z8cg6ntt_exports = {};
__export(chunk_z8cg6ntt_exports, {
  B4n: () => B4n,
  D0o: () => D0o,
  ooa: () => ooa
});
module.exports = __toCommonJS(chunk_z8cg6ntt_exports);
var import_chunk_qct54h38 = require("/$bunfs/root/chunk-qct54h38.js");
var D0o = "--attach-serve";
function t(e) {
  return e === D0o || e.startsWith(`${D0o}=`);
}
function B4n() {
  return process.argv.some(t);
}
function ooa(e) {
  if (B4n()) (0, import_chunk_qct54h38.Ete)(e);
}
