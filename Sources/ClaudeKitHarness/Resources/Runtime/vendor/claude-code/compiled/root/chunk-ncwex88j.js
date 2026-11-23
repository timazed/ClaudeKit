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
var chunk_ncwex88j_exports = {};
__export(chunk_ncwex88j_exports, {
  DGl: () => DGl,
  NTn: () => NTn,
  bue: () => bue
});
module.exports = __toCommonJS(chunk_ncwex88j_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_r60bafc1 = require("/$bunfs/root/chunk-r60bafc1.js");
function NTn() {
  return (0, import_chunk_3t7ve0wy.ta)() && (0, import_chunk_f9x2f6cx.dC)() === "stream-json";
}
function DGl() {
  let o = (0, import_chunk_f9x2f6cx.dC)();
  return NTn() || (0, import_chunk_r3kja8v6.vi)() && (o === "stream-json" || o === "json");
}
function bue() {
  return (0, import_chunk_r60bafc1.Z8e)() || DGl();
}
