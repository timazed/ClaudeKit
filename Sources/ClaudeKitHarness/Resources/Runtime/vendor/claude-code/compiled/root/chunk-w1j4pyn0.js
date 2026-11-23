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
var chunk_w1j4pyn0_exports = {};
__export(chunk_w1j4pyn0_exports, {
  EBa: () => EBa,
  nnt: () => nnt,
  rnt: () => rnt
});
module.exports = __toCommonJS(chunk_w1j4pyn0_exports);
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_wzzzxdne = require("/$bunfs/root/chunk-wzzzxdne.js");
function nnt(e, _) {
  return e === _ || e.behavior === "ask" && e.forcedByCaller === true;
}
function rnt(e) {
  return e === import_chunk_pbteexar.uqt || e === import_chunk_pbteexar.cxt || e === import_chunk_pbteexar.XFe || e === import_chunk_pbteexar.BDs || e === import_chunk_pbteexar.WDs || (0, import_chunk_wzzzxdne.muo)(e);
}
function EBa(e) {
  return e === import_chunk_pbteexar.XFe;
}
