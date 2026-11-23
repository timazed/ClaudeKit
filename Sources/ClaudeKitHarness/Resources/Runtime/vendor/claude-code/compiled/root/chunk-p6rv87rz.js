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
var chunk_p6rv87rz_exports = {};
__export(chunk_p6rv87rz_exports, {
  AEl: () => AEl,
  Aji: () => Aji,
  Gcn: () => Gcn,
  REl: () => REl,
  TTr: () => TTr,
  tks: () => tks
});
module.exports = __toCommonJS(chunk_p6rv87rz_exports);
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
function o(n) {
  return (0, import_chunk_7cfjrnwy.pP)((0, import_chunk_7cfjrnwy.nt)(n, "."), " ");
}
function Aji(n) {
  return /^con(in|out)\$$/i.test(o(n));
}
var r = /[<>"|?*\\\x00-\x1f]/;
function AEl(n) {
  return n.split("/").some((t) => r.test(t));
}
function Gcn(n) {
  return n.split("/").some((t) => t.includes(":") || t.endsWith(".") || t.endsWith(" ") || (0, import_chunk_z6pfqf6e.lx)(o(t)) || Aji(t));
}
var e = /^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;
function tks(n) {
  return (0, import_chunk_7cfjrnwy.pP)((0, import_chunk_7cfjrnwy.nt)(n, ":"), ". ");
}
var i = /:|[. ](?:\/|$)/;
function REl(n) {
  return i.test(n) ? [n.split("/").map(tks).filter((t) => t !== "").join("/")] : [];
}
function TTr(n) {
  return n.split("/").some((t) => e.test(tks(t)));
}
