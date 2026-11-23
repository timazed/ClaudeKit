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
var chunk_z4vemndw_exports = {};
__export(chunk_z4vemndw_exports, {
  H2: () => H2,
  TIe: () => TIe,
  d_e: () => d_e
});
module.exports = __toCommonJS(chunk_z4vemndw_exports);
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_7r4ehpnw = require("/$bunfs/root/chunk-7r4ehpnw.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_x9zzkrd5 = require("/$bunfs/root/chunk-x9zzkrd5.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_bpbq4vg2 = require("/$bunfs/root/chunk-bpbq4vg2.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var B = "cyan_FOR_SUBAGENTS_ONLY";
function H2(n) {
  if (!n) return B;
  if ((0, import_chunk_xfj2cwfv.zj)(n)) return import_chunk_xfj2cwfv.q0[n];
  return `ansi:${n}`;
}
function d_e(n) {
  let a = (0, import_chunk_sng02qpc.k)(12), { name: p, color: d, source: l, summary: c } = n, t;
  if (a[0] !== l) t = l ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [" ", l] }) : null, a[0] = l, a[1] = t;
  else t = a[1];
  let f;
  if (a[2] === import_chunk_w1d7ygsk.R) f = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-hidden": true, children: import_chunk_7r4ehpnw.xe.pointer }), a[2] = f;
  else f = a[2];
  let s;
  if (a[3] !== d || a[4] !== p || a[5] !== t) s = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: d, children: ["@ ", p, t, f] }), a[3] = d, a[4] = p, a[5] = t, a[6] = s;
  else s = a[6];
  let m;
  if (a[7] !== c) m = c ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [" ", c] }) : null, a[7] = c, a[8] = m;
  else m = a[8];
  let i;
  if (a[9] !== s || a[10] !== m) i = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { children: [s, m] }), a[9] = s, a[10] = m, a[11] = i;
  else i = a[11];
  return i;
}
(0, import_chunk_bs4h6795.G)();
var P = { keyCase: "lower" };
function TIe(n) {
  let i = (0, import_chunk_sng02qpc.k)(18), { displayName: p, qualifier: d, count: l, addMargin: c, fallbackLabel: a, body: t } = n, f = l === void 0 ? 1 : l, s = c === void 0 ? true : c, m = (0, import_chunk_x9zzkrd5.Ii)("app:toggleTranscript", "Global", "ctrl+o"), w;
  if (i[0] !== p || i[1] !== a) w = (0, import_chunk_xfj2cwfv.UNe)(p) || a, i[0] = p, i[1] = a, i[2] = w;
  else w = i[2];
  let C = w, v;
  if (i[3] !== t) v = t ? (0, import_chunk_xfj2cwfv.N6n)(t) : "", i[3] = t, i[4] = v;
  else v = i[4];
  let u = v;
  const N = f === 1 ? "Message" : `${f} messages`, _ = d ? ` (${d})` : "";
  let y;
  if (i[5] !== u) y = u ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { italic: true, children: [": ", u] }) : "", i[5] = u, i[6] = y;
  else y = i[6];
  let T;
  if (i[7] !== m) T = (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: m, action: "expand", parens: true, format: P }), i[7] = m, i[8] = T;
  else T = i[8];
  let b;
  if (i[9] !== C || i[10] !== N || i[11] !== _ || i[12] !== y || i[13] !== T) b = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [N, " from @", C, _, y, " ", T] }), i[9] = C, i[10] = N, i[11] = _, i[12] = y, i[13] = T, i[14] = b;
  else b = i[14];
  let S;
  if (i[15] !== s || i[16] !== b) S = (0, import_chunk_a46xeenj.e)(import_chunk_bpbq4vg2.ki, { addMargin: s, glyph: import_chunk_7r4ehpnw.xe.pointerSmall, dimColor: true, children: b }), i[15] = s, i[16] = b, i[17] = S;
  else S = i[17];
  return S;
}
