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
var chunk_9mhdzhnn_exports = {};
__export(chunk_9mhdzhnn_exports, {
  OKe: () => OKe,
  ZZe: () => ZZe,
  c2r: () => c2r,
  nMt: () => nMt,
  qmt: () => qmt,
  t6s: () => t6s
});
module.exports = __toCommonJS(chunk_9mhdzhnn_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_t9k2xeez = require("/$bunfs/root/chunk-t9k2xeez.js");
var ZZe = "tengu_violin_willow";
function c2r() {
  try {
    let { value: e, source: o } = (0, import_chunk_865at33z.gn)(ZZe, false);
    return (0, import_chunk_865at33z.km)(o) ? e === true : void 0;
  } catch {
    return;
  }
}
function nMt() {
  try {
    return (0, import_chunk_865at33z.b)(ZZe, false);
  } catch {
    return false;
  }
}
function OKe() {
  return (0, import_chunk_t9k2xeez.ECr)() && c2r() === true;
}
function qmt({ cloudClient: e }) {
  if ((0, import_chunk_t9k2xeez.Jvt)()) return "tengu_violin_wood";
  return e && c2r() === false ? ZZe : void 0;
}
async function t6s({ cloudClient: e }) {
  try {
    return await (0, import_chunk_t9k2xeez.ON)() && (!e || await (0, import_chunk_865at33z.w6t)(ZZe));
  } catch {
    return false;
  }
}
