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
var chunk_wbk1hf21_exports = {};
__export(chunk_wbk1hf21_exports, {
  Dr: () => Dr,
  Tl: () => Tl,
  w1e: () => w1e
});
module.exports = __toCommonJS(chunk_wbk1hf21_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
function Dr(r) {
  return Bun.stripANSI(r);
}
function w1e(r) {
  return (0, import_chunk_7cfjrnwy.qy)(Dr((0, import_chunk_7cfjrnwy.qy)(String(r))));
}
function Tl(r) {
  return r.replace(/[^\n\r\v\f\x85\u2028\u2029]+/g, (n) => Dr(n));
}
