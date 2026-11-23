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
var chunk_fwgyarbe_exports = {};
__export(chunk_fwgyarbe_exports, {
  $fo: () => $fo,
  Dal: () => Dal,
  Fae: () => Fae,
  Hwt: () => Hwt,
  Mwt: () => Mwt,
  asn: () => asn,
  h_r: () => h_r,
  ov: () => ov,
  sUt: () => sUt
});
module.exports = __toCommonJS(chunk_fwgyarbe_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_crypto = require("crypto");
var import_path = require("path");
function ov() {
  return (0, import_chunk_f9x2f6cx.HI)() ?? (0, import_path.join)((0, import_chunk_f9x2f6cx.qEe)() ?? asn(), (0, import_chunk_f9x2f6cx.W)());
}
function asn() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "uploads");
}
function Fae() {
  return [asn(), (0, import_chunk_f9x2f6cx.qEe)() ?? (0, import_chunk_6mfepmbb.pHr)()];
}
function Mwt(e, t) {
  return `${e}-${A(t)}`;
}
function Hwt(e) {
  return (0, import_crypto.createHash)("sha256").update(e.toLowerCase()).digest("hex").slice(0, 8);
}
var m = new RegExp(`(?!${import_chunk_6mfepmbb.Gze})[^]`, "gu"), a = 1024, u = 64;
function h_r(e) {
  let t = (0, import_path.basename)(e), n = (t.length <= a ? t : t.slice(0, a - u).replace(/[\uD800-\uDBFF]$/, "") + t.slice(-u).replace(/^[\uDC00-\uDFFF]/, "")).normalize("NFC").replace(m, "_").replace(new RegExp("(^|[._-])\\p{M}+", "gu"), "$1_").replace(new RegExp("(\\p{M}{8})\\p{M}+", "gu"), "$1_") || "attachment", r = n.lastIndexOf("."), o = r > 0 && Buffer.byteLength(n.slice(r)) <= 16 ? n.slice(r) : "", s = 200 - Buffer.byteLength(o), i = "";
  for (let c of o ? n.slice(0, r) : n) {
    if (s -= Buffer.byteLength(c), s < 0) break;
    i += c;
  }
  return i + o;
}
var d = /^[A-Za-z0-9_-]{8}-/;
function p(e) {
  return (0, import_chunk_z6pfqf6e.JLo)(e.replace(/_+$/, ""));
}
function A(e) {
  return p(e) ? e + "_" : e;
}
function Dal(e) {
  let t = e.replace(d, "");
  if (t.endsWith("_") && p(t)) return t.slice(0, -1);
  return t || e;
}
var _ = 1024;
function $fo(e, t) {
  let n = (0, import_chunk_f9x2f6cx.iNs)();
  if (!n.has(e) && n.size >= _) {
    let r = n.keys().next().value;
    if (r !== void 0) n.delete(r);
  }
  n.set(e, t);
}
function sUt(e) {
  return (0, import_chunk_f9x2f6cx.iNs)().get(e);
}
