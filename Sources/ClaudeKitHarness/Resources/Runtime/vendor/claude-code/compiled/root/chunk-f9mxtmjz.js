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
var chunk_f9mxtmjz_exports = {};
__export(chunk_f9mxtmjz_exports, {
  VGt: () => VGt
});
module.exports = __toCommonJS(chunk_f9mxtmjz_exports);
var import_chunk_an2g6kvv = require("/$bunfs/root/chunk-an2g6kvv.js");
function VGt() {
  let { parse: r } = require("/$bunfs/root/chunk-dzjs7e5t.js");
  return { parse: (e, n) => r(e, { ...n, buildRegExp: (o, p) => new import_chunk_an2g6kvv.Ult(o, p) }) };
}
