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
var chunk_vrv1km14_exports = {};
__export(chunk_vrv1km14_exports, {
  B8r: () => B8r,
  Hni: () => Hni,
  KAn: () => KAn,
  Mni: () => Mni,
  YXt: () => YXt,
  hor: () => hor,
  mor: () => mor,
  p9o: () => p9o,
  qAn: () => qAn
});
module.exports = __toCommonJS(chunk_vrv1km14_exports);
var mor = { pxPerToken: 28, maxTargetPx: 1568, maxTargetTokens: 1568 };
function l(e, r) {
  return Math.floor((e - 1) / r) + 1;
}
function d(e, r, t) {
  return l(e, t) * l(r, t);
}
function KAn(e, r, t) {
  let { pxPerToken: a, maxTargetPx: n, maxTargetTokens: u } = t;
  if (e <= n && r <= n && d(e, r, a) <= u) return [e, r];
  if (r > e) {
    let [o, p] = KAn(r, e, t);
    return [p, o];
  }
  let m = e / r, i = e, s = 1;
  for (; ; ) {
    if (s + 1 === i) return [s, Math.max(Math.round(s / m), 1)];
    let o = Math.floor((s + i) / 2), p = Math.max(Math.round(o / m), 1);
    if (o <= n && d(o, p, a) <= u) s = o;
    else i = o;
  }
}
var qAn = 0.1, YXt = 1, B8r = YXt;
function Mni(e) {
  if (e === void 0) return;
  if (typeof e !== "number" || !Number.isFinite(e) || e < qAn || e > YXt) return { error: `scale must be a number in [${qAn}, ${YXt}] \u2014 e.g. 0.5 for a half-size image` };
  return e;
}
var hor = `Scale factor in [${qAn}, ${YXt}] for the returned image; 1 (default) uses the full image token budget, 0.5 returns an image at half the width and height (~quarter of the tokens). Coordinates are ALWAYS in the full-resolution coordinate frame (reported with every scaled screenshot), never in the scaled image's own pixels.`;
function p9o(e, r, t) {
  return `${e}-scale view; coordinate frame: ${r}x${t}.`;
}
function Hni(e, r) {
  let [t, a] = e, n = Number.isFinite(r) && r >= qAn && r <= YXt ? r : B8r;
  return [Math.max(1, Math.round(t * n)), Math.max(1, Math.round(a * n))];
}
