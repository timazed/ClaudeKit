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
var chunk_hzjxdt7w_exports = {};
__export(chunk_hzjxdt7w_exports, {
  Vgs: () => Vgs
});
module.exports = __toCommonJS(chunk_hzjxdt7w_exports);
var import_chunk_qf73a9we = require("/$bunfs/root/chunk-qf73a9we.js");
var import_chunk_vce2t55r = require("/$bunfs/root/chunk-vce2t55r.js");
var import_chunk_tjdnrbvx = require("/$bunfs/root/chunk-tjdnrbvx.js");
function t(e) {
  return (0, import_chunk_vce2t55r.rRe)(e) && (0, import_chunk_tjdnrbvx.Tc)(e);
}
function s(e) {
  return e.mode === "poll-event" && e.pollEvent?.kind === import_chunk_qf73a9we.gre && (0, import_chunk_tjdnrbvx.Tc)(e);
}
function Vgs(e) {
  e.setPassive?.(t, true), (0, import_chunk_qf73a9we.gN)(e.removeByFilter(s), "a stop ended the scripts this status line describes");
}
