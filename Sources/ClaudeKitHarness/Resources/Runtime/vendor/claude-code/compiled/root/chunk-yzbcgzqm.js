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
var chunk_yzbcgzqm_exports = {};
__export(chunk_yzbcgzqm_exports, {
  MHt: () => MHt,
  T7t: () => T7t,
  Zer: () => Zer,
  c4r: () => c4r,
  eXs: () => eXs,
  f4r: () => f4r,
  sMa: () => sMa,
  u4r: () => u4r
});
module.exports = __toCommonJS(chunk_yzbcgzqm_exports);
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
class r {
  working = (0, import_chunk_se72nykz.ps)({ working: false });
  userPrompt = (0, import_chunk_se72nykz.ps)({ waitingFor: void 0 });
}
var MHt = new import_chunk_pzzqg6s3.ze(() => new r());
function T7t(o, e) {
  MHt.of(o).working.setState((n) => n.working === e ? n : { working: e });
}
function Zer(o) {
  return MHt.of(o).working.getState().working;
}
function c4r(o, e) {
  return MHt.of(o).working.subscribe(e);
}
function u4r(o, e) {
  MHt.of(o).userPrompt.setState((n) => n.waitingFor === e ? n : { waitingFor: e });
}
function f4r(o) {
  return eXs(o) !== void 0;
}
function eXs(o) {
  return MHt.of(o).userPrompt.getState().waitingFor;
}
function sMa(o, e) {
  return MHt.of(o).userPrompt.subscribe(e);
}
