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
var chunk_yvba4101_exports = {};
__export(chunk_yvba4101_exports, {
  Fol: () => Fol,
  ac: () => ac
});
module.exports = __toCommonJS(chunk_yvba4101_exports);
var import_chunk_r6fna520 = require("/$bunfs/root/chunk-r6fna520.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var h = 1568, I = { min: 1568, max: 1e5 }, _ = { firstParty: 2e3, bedrock: 2e3, vertex: 2e3, foundry: 2e3, anthropicAws: 2e3, anthropicGoogleCloud: 2e3, mantle: 2e3, gateway: 2e3 };
function p(t) {
  return (0, import_chunk_zhr7rpv7.Ss)() && (0, import_chunk_865at33z.b)("tengu_mossy_gray", false) === true ? 1 / 0 : _[(0, import_chunk_zhr7rpv7.rc)(t)];
}
function ac(t) {
  let i = M(), e = t ? (0, import_chunk_865at33z.St)(t) : void 0, n = e ? (0, import_chunk_zhr7rpv7.kd)(e)?.image_limits : void 0, a = f(t, e), m = p(t), g = m, u = Math.min(n?.maxWidth ?? import_chunk_r6fna520.Qv.maxWidth, m), c = Math.min(n?.maxHeight ?? import_chunk_r6fna520.Qv.maxHeight, m), o = Math.min(r(a.maxWidth, u), g), s = Math.min(r(a.maxHeight, c), g), x = a.maxImageTokens ?? n?.maxImageTokens, d = n?.maxBase64Size ?? i;
  if (x === void 0 && o === import_chunk_r6fna520.Qv.maxWidth && s === import_chunk_r6fna520.Qv.maxHeight && d === import_chunk_r6fna520.Qv.maxBase64Size) return import_chunk_r6fna520.Qv;
  return { maxWidth: o, maxHeight: s, maxImageTokens: x, rejectMaxWidth: Math.max(u, o), rejectMaxHeight: Math.max(c, s), maxBase64Size: d, targetRawSize: d * 3 / 4 };
}
function Fol(t) {
  let i = t ? (0, import_chunk_865at33z.St)(t) : void 0, e = i ? (0, import_chunk_zhr7rpv7.kd)(i)?.image_limits : void 0;
  if (e?.maxWidth === void 0 || e.maxHeight === void 0) return;
  let n = f(t, i), a = Math.min(e.maxWidth, r(n.maxWidth, e.maxWidth)), m = Math.min(e.maxHeight, r(n.maxHeight, e.maxHeight));
  if (a <= import_chunk_r6fna520.Qv.maxWidth || m <= import_chunk_r6fna520.Qv.maxHeight) return;
  return { ...import_chunk_r6fna520.Qv, maxWidth: a, maxHeight: m, maxImageTokens: n.maxImageTokens ?? e.maxImageTokens };
}
function f(t, i) {
  let e = i ? (0, import_chunk_865at33z.rz)(i) : void 0;
  return { ...e && (0, import_chunk_865at33z.RAl)(e.id, e.id), maxImageTokens: (0, import_chunk_865at33z.Xme)(e?.runtime?.image_limits?.max_image_tokens, I) };
}
function r(t, i) {
  return t === void 0 ? i : Math.max(h, t);
}
function M() {
  if ((0, import_chunk_zhr7rpv7.ve)() === "firstParty" && (0, import_chunk_zhr7rpv7.ya)() && (0, import_chunk_865at33z.b)("tengu_crimson_vector", false)) return import_chunk_r6fna520.O_l;
  return import_chunk_r6fna520.Qv.maxBase64Size;
}
