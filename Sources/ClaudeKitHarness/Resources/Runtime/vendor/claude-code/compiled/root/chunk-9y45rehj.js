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
var chunk_9y45rehj_exports = {};
__export(chunk_9y45rehj_exports, {
  DTt: () => DTt,
  JTs: () => JTs,
  Klt: () => Klt,
  LR: () => LR,
  Oj: () => Oj,
  QG: () => QG,
  QTo: () => QTo,
  QTs: () => QTs,
  Qre: () => Qre,
  Rxe: () => Rxe,
  Wme: () => Wme,
  YAr: () => YAr,
  hfn: () => hfn,
  oVi: () => oVi,
  qlt: () => qlt,
  rNe: () => rNe,
  r_: () => r_
});
module.exports = __toCommonJS(chunk_9y45rehj_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var r_ = "MEMORY.md", QG = 200, Wme = 25e3, JTs = 4 * Wme, Klt = 200, rNe = 4096;
function qlt(t) {
  let r = t.trim();
  return { trimmed: r, lineCount: (0, import_chunk_7cfjrnwy.Mt)(r, `
`) + 1, byteCount: r.length };
}
function LR(t) {
  return t.normalize("NFC").toLowerCase();
}
function Qre(t) {
  let r = t?.lastIndexOf("/") ?? -1;
  if (r <= 0) return "";
  let n = t.slice(0, r + 1);
  return n.split("/").some((o) => o.startsWith(".")) ? "" : n;
}
var DTt = "This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).", QTs = "Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";
function Oj(t) {
  let r = "";
  for (let n of (0, import_chunk_xfj2cwfv.H6t)((0, import_chunk_kx2fp6pc.Og)(t.replace(/\r\n?|[\u2028\u2029]/g, `
`)))) {
    let o = n.codePointAt(0), e = o !== 9 && o !== 10 && (o < 32 || o >= 127 && o <= 159);
    r += e ? "\uFFFD" : n;
  }
  return r;
}
function Rxe(t) {
  return (0, import_chunk_865at33z.tg)(s(t));
}
function QTo(t) {
  return hfn(t) || /[\p{Cc}\u2028\u2029]/u.test(t);
}
function YAr(t) {
  return Rxe(t.replace(/[\t\n\r\u2028\u2029]/g, ""));
}
var oVi = /* @__PURE__ */ new Set([8204, 8205, 65038, 65039]), i = /^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;
function hfn(t) {
  let r = t.codePointAt(0);
  if (oVi.has(r) || r === 9 || r === 10 || r === 13) return false;
  return i.test(t) || r < 32 || r >= 127 && r <= 159;
}
function s(t) {
  let r = "";
  for (let n of t.replace(/\r\n?|[\u2028\u2029]/g, `
`)) {
    if (hfn(n)) continue;
    r += n;
  }
  return r;
}
