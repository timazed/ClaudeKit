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
var chunk_xm1vs26f_exports = {};
__export(chunk_xm1vs26f_exports, {
  Bve: () => Bve,
  Met: () => Met,
  Wve: () => Wve,
  iHt: () => iHt
});
module.exports = __toCommonJS(chunk_xm1vs26f_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_x8bs72nm = require("/$bunfs/root/chunk-x8bs72nm.js");
var import_chunk_mh32mevx = require("/$bunfs/root/chunk-mh32mevx.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var A = "tengu_temporal_nautilus", k = /[\v\f\r\x1c-\x1e\u0085\u2028\u2029](?=[^\n])/g, d = 20, B = 65536, E = /[\p{Zs}\u2800]/gu;
function f() {
  return { furtherBreaks: d, inlineMarkChars: B, marksRanOut: false };
}
function Bve() {
  return (0, import_chunk_sghy0qej.Pe)(A, { safe: true });
}
function p(r) {
  let t = r.charCodeAt(0);
  return (t >= 128 || t === 91) && (0, import_chunk_mh32mevx.OEo)((0, import_chunk_mh32mevx.of)(r)).replace(E, " ").startsWith(import_chunk_x8bs72nm.SY) ? r.replace("[", "\uFFFD") : r;
}
function w(r, t) {
  let e = p(r);
  if (e.search(k) === -1) return [e];
  let n = "", s = 0, i = 0, o = import_chunk_x8bs72nm.Aht;
  for (let { index: a } of e.matchAll(k)) {
    let R = e.slice(s, a + 1), c = h(R), u = i === 0 || t.furtherBreaks > 0;
    if (i > 0 && (a >= import_chunk_xfj2cwfv.Xdt || !u && t.inlineMarkChars <= 0)) {
      t.marksRanOut = true;
      break;
    }
    if (c > o && o < import_chunk_x8bs72nm.Aht) n = m(n), o = import_chunk_x8bs72nm.Aht;
    if (u && i > 0) t.furtherBreaks--;
    if (!u) t.inlineMarkChars -= import_chunk_x8bs72nm.SY.length;
    let g = u || c + import_chunk_x8bs72nm.SY.length > o;
    n += `${R}${g ? `
` : ""}${import_chunk_x8bs72nm.SY}`, o = g ? import_chunk_x8bs72nm.Aht : o - c - import_chunk_x8bs72nm.SY.length, i++, s = a + 1;
  }
  let l = e.slice(s);
  if (h(l) > o && o < import_chunk_x8bs72nm.Aht) n = m(n);
  return `${n}${l}`.split(`
`);
}
function h(r) {
  return r.length + 7 * (0, import_chunk_7cfjrnwy.Mt)(r, "	");
}
function m(r) {
  return `${r.slice(0, -import_chunk_x8bs72nm.SY.length)}
${import_chunk_x8bs72nm.SY}`;
}
function _(r, t) {
  return r.split(`
`).flatMap((e) => w(e, t)).join(`
`);
}
function Wve(r, t = Bve()) {
  return t ? _(r, f()) : r;
}
function Met(r, t = Bve()) {
  if (!t) return (0, import_chunk_mh32mevx.T9)(r);
  let e = f(), n = _(r, e);
  return e.marksRanOut || (0, import_chunk_mh32mevx.T9)(r) || n !== r && (0, import_chunk_mh32mevx.T9)(n);
}
function iHt(r) {
  if (!Bve()) return r;
  let t = f(), e = r.lines.flatMap((n) => n.startsWith("+") ? w(n.slice(1), t).map((s) => `+${s}`) : [`${n.charAt(0)}${p(n.slice(1))}`]);
  return { ...r, lines: e, rowsBroken: true };
}
