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
var chunk_gdmb039p_exports = {};
__export(chunk_gdmb039p_exports, {
  $D: () => $D,
  BZe: () => BZe,
  PIt: () => PIt,
  T7n: () => T7n,
  Vya: () => Vya,
  Wse: () => Wse,
  XK: () => XK,
  dH: () => dH,
  zya: () => zya
});
module.exports = __toCommonJS(chunk_gdmb039p_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var l = ["\xB7", "\u2722", "\u2733", "\u2736", "\u273B", "\u273B"], p = ["\xB7", "\u2722", "\u2733", "\u2736", "\u273B", "\u273D"], T = ["\xB7", "\u2722", "*", "\u2736", "\u273B", "\u273D"], d = [...l, ...l.toReversed()], f = [...p, ...p.toReversed()], y = [...T, ...T.toReversed()];
function T7n() {
  if (import_chunk_c203g5kd.s.TERM === "xterm-ghostty") return l;
  return p;
}
function BZe() {
  if (import_chunk_c203g5kd.s.TERM === "xterm-ghostty") return d;
  return f;
}
var g = 8;
function Wse(r) {
  return Math.round(r * g) / g;
}
function zya(r) {
  return Wse(r / 360) * 360;
}
function PIt(r, t) {
  return (1 - Math.cos(2 * Math.PI * r / t)) / 2;
}
function $D(r, t, i) {
  return { r: Math.round(r.r + (t.r - r.r) * i), g: Math.round(r.g + (t.g - r.g) * i), b: Math.round(r.b + (t.b - r.b) * i) };
}
function dH(r) {
  return `rgb(${r.r},${r.g},${r.b})`;
}
function Vya(r) {
  let t = (r % 360 + 360) % 360, i = 0.7, m = 0.6, e = (1 - Math.abs(0.19999999999999996)) * 0.7, n = e * (1 - Math.abs(t / 60 % 2 - 1)), R = 0.6 - e / 2, o = 0, u = 0, a = 0;
  if (t < 60) o = e, u = n;
  else if (t < 120) o = n, u = e;
  else if (t < 180) u = e, a = n;
  else if (t < 240) u = n, a = e;
  else if (t < 300) o = n, a = e;
  else o = e, a = n;
  return { r: Math.round((o + R) * 255), g: Math.round((u + R) * 255), b: Math.round((a + R) * 255) };
}
function XK(r) {
  let t = r.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);
  return t ? { r: parseInt(t[1], 10), g: parseInt(t[2], 10), b: parseInt(t[3], 10) } : null;
}
