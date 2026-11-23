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
var chunk_h4t4qfaq_exports = {};
__export(chunk_h4t4qfaq_exports, {
  Cwe: () => Cwe,
  Lb: () => Lb,
  Mcn: () => Mcn,
  li: () => li,
  vo: () => vo,
  xZ: () => xZ
});
module.exports = __toCommonJS(chunk_h4t4qfaq_exports);
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var vo = "REPL", xZ = "Eval", Mcn = "Code";
function li(o) {
  return o === vo || o === xZ;
}
function Lb(o) {
  if (o === vo) return true;
  return (0, import_chunk_r3kja8v6.ue)() && o === xZ;
}
function Cwe(o) {
  return (0, import_chunk_r3kja8v6.ue)() && li(o) ? Mcn : o;
}
