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
var chunk_r5rtrbxq_exports = {};
__export(chunk_r5rtrbxq_exports, {
  ETa: () => ETa,
  PMt: () => PMt,
  VJn: () => VJn,
  eqs: () => eqs,
  fht: () => fht,
  vTa: () => vTa
});
module.exports = __toCommonJS(chunk_r5rtrbxq_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_r59sj93t = require("/$bunfs/root/chunk-r59sj93t.js");
var import_chunk_5h9h52az = require("/$bunfs/root/chunk-5h9h52az.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var p = "bot_protected_tengu_merry_rainbow";
function PMt() {
  return (0, import_chunk_sghy0qej.Pe)(p, { safe: true });
}
function eqs(t, r) {
  let e = (0, import_chunk_5h9h52az.pht)(t, r);
  return r === "prompt" && (0, import_chunk_5h9h52az.Rk)(e) === "bash" && PMt() ? ` ${e}` : e;
}
function VJn(t) {
  return !(0, import_chunk_r59sj93t.cue)((0, import_chunk_xfj2cwfv.UC)(t).text, null) || !PMt();
}
function ETa(t) {
  return VJn(t) ? t : ` ${t}`;
}
function fht(t) {
  let r = o(t);
  return /^\s/.test(r) && r.trimStart().startsWith("/") && PMt();
}
function o(t) {
  return (0, import_chunk_xfj2cwfv.UC)(t.replace(import_chunk_7cfjrnwy.q8, "")).text;
}
function n(t) {
  return o(t).trim().toLowerCase();
}
function vTa(t, r) {
  let e = n(r);
  return t?.find((i) => n(i.label) === e);
}
