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
var chunk_98tkmkvx_exports = {};
__export(chunk_98tkmkvx_exports, {
  Ame: () => Ame,
  Awe: () => Awe,
  Wvt: () => Wvt,
  bf: () => bf,
  hvl: () => hvl,
  mvl: () => mvl,
  pvl: () => pvl
});
module.exports = __toCommonJS(chunk_98tkmkvx_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_nnk8tdzz = require("/$bunfs/root/chunk-nnk8tdzz.js");
function bf() {
  return t(import_chunk_c203g5kd.s.MCP_TIMEOUT);
}
function pvl(n) {
  return t(import_chunk_c203g5kd.Jra.parse(n)) < (0, import_chunk_nnk8tdzz.Qk)(bf);
}
function Wvt() {
  return Math.min(bf(), 1e4);
}
function Awe() {
  let n = import_chunk_c203g5kd.s.MCP_CONNECT_TIMEOUT_MS;
  return n && n > 0 ? Math.min(n, 2147483647) : 5e3;
}
var Ame = 2e3, mvl = 8e3, hvl = 500;
function t(n) {
  return n && n > 0 ? Math.min(n, 2147483647) : 3e4;
}
