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
var chunk_kejyjxvj_exports = {};
__export(chunk_kejyjxvj_exports, {
  NNo: () => NNo,
  Uce: () => Uce
});
module.exports = __toCommonJS(chunk_kejyjxvj_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var Uce = 15728640, o = 16384;
function NNo(n, t) {
  let e = 0;
  while (e < n.length) {
    let i = (0, import_chunk_7cfjrnwy.ee)(n.slice(e), o);
    if (t -= Buffer.byteLength((0, import_chunk_w578pjby.cs)(i)) - 2, t < 0) break;
    e += i.length;
  }
  return n.slice(0, e);
}
