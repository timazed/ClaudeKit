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
var chunk_6geanr2a_exports = {};
__export(chunk_6geanr2a_exports, {
  Cq: () => Cq,
  Lyi: () => Lyi
});
module.exports = __toCommonJS(chunk_6geanr2a_exports);
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_1n9wdcmg = require("/$bunfs/root/chunk-1n9wdcmg.js");
var import_chunk_pjgajh0r = require("/$bunfs/root/chunk-pjgajh0r.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
function p() {
  let t = (0, import_chunk_1n9wdcmg.Iy)("app:toggleTranscript", "Global", "ctrl+o");
  return import_chunk_d57v19zt.Re.dim(`(${t} to expand)`);
}
var l = 3, u = 10;
function d(t) {
  return ((0, import_chunk_pjgajh0r.Rq)() ? (0, import_chunk_pjgajh0r.kFt)(t) : t).split(`
`);
}
function g(t, s) {
  let r = d(t), n = [];
  for (let e of r) {
    let a = (0, import_chunk_mgh1y10w.oe)(e);
    if (a <= s) n.push(e.trimEnd());
    else {
      let m = 0;
      while (m < a) {
        let c = (0, import_chunk_mgh1y10w.gxt)(e, m, m + s);
        n.push(c.trimEnd()), m += s;
      }
    }
  }
  let o = n.length - l;
  if (o === 1) return { aboveTheFold: n.slice(0, l + 1).join(`
`).trimEnd(), remainingLines: 0 };
  return { aboveTheFold: n.slice(0, l).join(`
`).trimEnd(), remainingLines: Math.max(0, o) };
}
function Lyi(t, s, r = false) {
  let n = t.trimEnd();
  if (!n) return "";
  let o = Math.max(s - u, 10), e = l * o * 4, a = n.length > e, m = a ? n.slice(0, e) : n, { aboveTheFold: c, remainingLines: i } = g(m, o), f = i;
  if (a) {
    let h = Math.max((0, import_chunk_7cfjrnwy.Mt)(n, `
`) + 1, Math.ceil((0, import_chunk_wbk1hf21.Dr)(n).length / o));
    f = Math.max(1, i, h - l);
  }
  return [c, f > 0 ? import_chunk_d57v19zt.Re.dim((0, import_chunk_f64qna2j.$y)(f) + (r ? "" : ` ${p()}`)) : ""].filter(Boolean).join(`
`);
}
function Cq(t, s) {
  if (typeof t !== "string") return false;
  let r = t.trimEnd(), n = 0, o = 0;
  for (let i = 0; i <= l; i++) {
    if (n = r.indexOf(`
`, n), n === -1) break;
    o++, n++;
  }
  if (n !== -1 && n < r.length) return true;
  if (s === void 0) return false;
  let e = Math.max(s - u, 10), a = l + 1, m = l * e * 4;
  if (r.length > m) return true;
  if (o === 0 && !(0, import_chunk_pjgajh0r.Rq)()) {
    let i = a * e;
    if (r.length <= i) return false;
    return (0, import_chunk_mgh1y10w.oe)(r) > i;
  }
  let c = 0;
  for (let i of d(r)) if (c += Math.max(1, Math.ceil((0, import_chunk_mgh1y10w.oe)(i) / e)), c > a) return true;
  return false;
}
