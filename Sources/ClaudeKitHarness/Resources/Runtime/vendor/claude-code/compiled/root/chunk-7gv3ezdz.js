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
var chunk_7gv3ezdz_exports = {};
__export(chunk_7gv3ezdz_exports, {
  EDt: () => EDt,
  FCn: () => FCn,
  Jnr: () => Jnr,
  Nqe: () => Nqe,
  Q5r: () => Q5r,
  Xnr: () => Xnr,
  Ynr: () => Ynr,
  kLa: () => kLa
});
module.exports = __toCommonJS(chunk_7gv3ezdz_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_1tyxkk56 = require("/$bunfs/root/chunk-1tyxkk56.js");
var import_chunk_ghhxe1kj = require("/$bunfs/root/chunk-ghhxe1kj.js");
function Nqe() {
  return (0, import_chunk_ghhxe1kj.AQ)().cachedSystemTheme() ?? i() ?? "dark";
}
function Ynr() {
  return (0, import_chunk_ghhxe1kj.AQ)().cachedSystemTheme() ?? i();
}
function Q5r() {
  return (0, import_chunk_ghhxe1kj.AQ)().cachedSystemTheme();
}
function Xnr(e) {
  (0, import_chunk_ghhxe1kj.AQ)().setSystemTheme(e);
}
function FCn(e) {
  return (0, import_chunk_ghhxe1kj.AQ)().onSystemThemeChange(e);
}
function Jnr(e) {
  if (e === "auto") return Nqe();
  if ((0, import_chunk_1tyxkk56.dlo)(e)) return e;
  let t = (0, import_chunk_ghhxe1kj.lG)(e);
  return t && (0, import_chunk_ghhxe1kj.tSi)(t) || "dark";
}
function EDt(e) {
  let t = (0, import_chunk_1tyxkk56.LQ)(Jnr(e)), n = (0, import_chunk_ghhxe1kj.lG)(e);
  if (!n) return t;
  return (0, import_chunk_1tyxkk56.wmr)(t, (0, import_chunk_ghhxe1kj.nSi)(n)?.overrides);
}
function kLa(e) {
  let t = u(e);
  if (!t) return;
  return 0.2126 * t.r + 0.7152 * t.g + 0.0722 * t.b > 0.5 ? "light" : "dark";
}
function u(e) {
  let t = /^rgba?:([0-9a-f]{1,4})\/([0-9a-f]{1,4})\/([0-9a-f]{1,4})/i.exec(e);
  if (t) return { r: m(t[1]), g: m(t[2]), b: m(t[3]) };
  let n = /^#([0-9a-f]+)$/i.exec(e);
  if (n && n[1].length % 3 === 0) {
    let r = n[1], o = r.length / 3;
    return { r: m(r.slice(0, o)), g: m(r.slice(o, 2 * o)), b: m(r.slice(2 * o)) };
  }
  return;
}
function m(e) {
  let t = 16 ** e.length - 1;
  return parseInt(e, 16) / t;
}
function i() {
  let e = import_chunk_c203g5kd.s.COLORFGBG;
  if (!e) return;
  let n = e.split(";").at(-1);
  if (n === void 0 || n === "") return;
  let r = Number(n);
  if (!Number.isInteger(r) || r < 0 || r > 15) return;
  return r <= 6 || r === 8 ? "dark" : "light";
}
