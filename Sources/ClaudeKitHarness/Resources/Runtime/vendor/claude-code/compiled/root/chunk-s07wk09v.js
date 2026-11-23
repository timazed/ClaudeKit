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
var chunk_s07wk09v_exports = {};
__export(chunk_s07wk09v_exports, {
  RZl: () => RZl,
  u$n: () => u$n
});
module.exports = __toCommonJS(chunk_s07wk09v_exports);
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
function u$n(n) {
  return (0, import_chunk_r3kja8v6.ue)() && (0, import_chunk_cbnm4p23.Ai)(n) === "turn-abort";
}
function RZl(n) {
  return (0, import_chunk_r3kja8v6.ue)() && n !== null && typeof n === "object" && "asyncDispatched" in n && n.asyncDispatched === true;
}
