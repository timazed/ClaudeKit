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
var chunk_4s4nxvxt_exports = {};
__export(chunk_4s4nxvxt_exports, {
  Bcn: () => Bcn,
  Kko: () => Kko,
  Sji: () => Sji,
  kTr: () => kTr,
  yji: () => yji,
  zws: () => zws
});
module.exports = __toCommonJS(chunk_4s4nxvxt_exports);
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_path = require("path");
var Kko = String.raw`\s\u2800\uFFF9-\uFFFB\p{Cc}\p{M}\p{Default_Ignorable_Code_Point}`, c = new RegExp(`^[${Kko}]+`, "u");
function yji(n) {
  return n.replace(c, "");
}
function zws(n, r = kTr(n)) {
  return (0, import_chunk_z6pfqf6e.$r)(n) || Bcn(n) || import_chunk_7cfjrnwy.Wz.test(r[0]) || r.map(yji).some((e) => (0, import_chunk_z6pfqf6e.$r)(e) || Bcn(e));
}
var u = /^\.\.\//;
function Bcn(n) {
  return (0, import_chunk_z6pfqf6e.KS)(n) || (0, import_chunk_z6pfqf6e.KS)(import_path.posix.normalize(n).replace(u, "/")) || l(n) && (0, import_chunk_z6pfqf6e.KS)("/" + n);
}
function l(n) {
  let r = import_path.posix.normalize(n);
  return r === ".." || r.startsWith("../");
}
function Sji(n) {
  let r = n.slice(7);
  return zws(r) || zws(r.slice(1));
}
var i = /(?:%[0-9A-Fa-f]{2}){1,512}/g, f = /^%[0-9A-Fa-f]{2}/;
function kTr(n) {
  if (!n.includes("%")) return [n, n];
  let r = new TextDecoder("utf-8", { fatal: false, ignoreBOM: true });
  return [n.replace(i, (e, t) => {
    let o = t + e.length;
    return r.decode(s(e), { stream: f.test(n.slice(o, o + 3)) });
  }), n.replace(i, (e) => Array.from(s(e), (t) => String.fromCharCode(t)).join(""))];
}
function s(n) {
  return Uint8Array.from(n.slice(1).split("%"), (r) => parseInt(r, 16));
}
