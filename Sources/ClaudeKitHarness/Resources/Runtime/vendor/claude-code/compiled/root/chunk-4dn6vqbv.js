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
var chunk_4dn6vqbv_exports = {};
__export(chunk_4dn6vqbv_exports, {
  fXr: () => fXr,
  jRn: () => jRn
});
module.exports = __toCommonJS(chunk_4dn6vqbv_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_wx7ffn80 = require("/$bunfs/root/chunk-wx7ffn80.js");
var jRn = 1e4;
function fXr() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE || (0, import_chunk_wx7ffn80.Vre)();
}
