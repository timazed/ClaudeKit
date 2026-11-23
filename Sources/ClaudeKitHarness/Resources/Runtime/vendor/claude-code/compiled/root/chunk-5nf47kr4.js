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
var chunk_5nf47kr4_exports = {};
__export(chunk_5nf47kr4_exports, {
  HTt: () => HTt,
  JTo: () => JTo,
  Jre: () => Jre,
  XTs: () => XTs,
  Xre: () => Xre,
  YTs: () => YTs,
  eAl: () => eAl,
  nNe: () => nNe
});
module.exports = __toCommonJS(chunk_5nf47kr4_exports);
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_tkv5z5dk = require("/$bunfs/root/chunk-tkv5z5dk.js");
function Xre(i) {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS || (i ?? (0, import_chunk_2yx6c1y2.vt)()).disableBundledSkills === true;
}
var YTs = "allow_bundled_skills";
function HTt() {
  return !(0, import_chunk_2zeyvjwb.hk)(YTs);
}
function t() {
  return (0, import_chunk_2zeyvjwb.oNl)() ?? import_chunk_tkv5z5dk.hCo;
}
function Jre(i) {
  return HTt() && !t().includes(i);
}
function nNe(i, e) {
  return Xre(e) || Jre(i);
}
function eAl() {
  return (0, import_chunk_2zeyvjwb.NPe)(YTs, "Bundled skills", "are");
}
function JTo() {
  let i = HTt();
  return `${Xre()}:${i}:${i ? t().join(",") : ""}`;
}
function XTs(i, e) {
  return i.type === "prompt" && i.source === "builtin" && nNe(i.name, e);
}
