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
var chunk_wmbdbvfy_exports = {};
__export(chunk_wmbdbvfy_exports, {
  PF: () => PF,
  Rf: () => Rf,
  qUo: () => qUo,
  wIt: () => wIt,
  xmt: () => xmt
});
module.exports = __toCommonJS(chunk_wmbdbvfy_exports);
var import_chunk_74h6kcya = require("/$bunfs/root/chunk-74h6kcya.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_fdqz9r50 = require("/$bunfs/root/chunk-fdqz9r50.js");
var import_chunk_px0bhkvr = require("/$bunfs/root/chunk-px0bhkvr.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
function t() {
  let [o, e] = (0, import_chunk_bs4h6795.nb)((i) => i + 1, 0);
  return (0, import_chunk_bs4h6795.H)(() => (0, import_chunk_865at33z.pPl)(e), []), o;
}
function qUo(o, e) {
  return (0, import_chunk_bzyb60p0.mdr)(o) ?? (0, import_chunk_bzyb60p0.mdr)(e) ?? (0, import_chunk_865at33z.xE)();
}
function PF(o) {
  return (0, import_chunk_865at33z.jt)(qUo(o.mainLoopModelForSession, o.mainLoopModel));
}
function wIt() {
  let o = (0, import_chunk_74h6kcya.X)((n) => n.mainLoopModel), e = (0, import_chunk_74h6kcya.X)((n) => n.mainLoopModelForSession), i = (0, import_chunk_fdqz9r50.Jz)(), s = t(), r = (0, import_chunk_px0bhkvr.Gu)();
  return (0, import_chunk_bs4h6795.re)(() => (0, import_chunk_bzyb60p0.Fyt)(e, o), [e, o, i, r, s]);
}
function xmt() {
  let o = (0, import_chunk_74h6kcya.X)((n) => n.mainLoopModel), e = (0, import_chunk_74h6kcya.X)((n) => n.mainLoopModelForSession), i = (0, import_chunk_fdqz9r50.Jz)(), s = t(), r = (0, import_chunk_px0bhkvr.Gu)();
  return (0, import_chunk_bs4h6795.re)(() => qUo(e, o), [e, o, i, r, s]);
}
function Rf() {
  let o = (0, import_chunk_74h6kcya.X)((n) => n.mainLoopModel), e = (0, import_chunk_74h6kcya.X)((n) => n.mainLoopModelForSession), i = (0, import_chunk_fdqz9r50.Jz)(), s = t(), r = (0, import_chunk_px0bhkvr.Gu)();
  return (0, import_chunk_bs4h6795.re)(() => PF({ mainLoopModel: o, mainLoopModelForSession: e }), [e, o, i, r, s]);
}
