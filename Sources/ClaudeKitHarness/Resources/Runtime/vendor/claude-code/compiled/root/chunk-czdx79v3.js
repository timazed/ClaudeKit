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
var chunk_czdx79v3_exports = {};
__export(chunk_czdx79v3_exports, {
  Bwn: () => Bwn,
  hc: () => hc,
  xm: () => xm
});
module.exports = __toCommonJS(chunk_czdx79v3_exports);
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_x9zzkrd5 = require("/$bunfs/root/chunk-x9zzkrd5.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_v2br6d1p = require("/$bunfs/root/chunk-v2br6d1p.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
var c = (0, import_chunk_bs4h6795.an)(false);
function Bwn(h) {
  let i = (0, import_chunk_sng02qpc.k)(2), { children: t } = h, a;
  if (i[0] !== t) a = (0, import_chunk_a46xeenj.e)(c.Provider, { value: true, children: t }), i[0] = t, i[1] = a;
  else a = i[1];
  return a;
}
function m() {
  return (0, import_chunk_bs4h6795.be)(c);
}
function xm() {
  let a = (0, import_chunk_sng02qpc.k)(3), h = m(), t = (0, import_chunk_bs4h6795.be)(import_chunk_v2br6d1p.NL), i = (0, import_chunk_x9zzkrd5.Ii)("app:toggleTranscript", "Global", "ctrl+o");
  if (h || t) {
    return null;
  }
  let n;
  if (a[0] === import_chunk_w1d7ygsk.R) n = { keyCase: "lower" }, a[0] = n;
  else n = a[0];
  let d;
  if (a[1] !== i) d = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: i, action: "expand", parens: true, format: n }) }), a[1] = i, a[2] = d;
  else d = a[2];
  return d;
}
function hc(h) {
  let l = (0, import_chunk_sng02qpc.k)(11), { count: t, unit: i, expandable: a, hiddenChars: n } = h, d = i === void 0 ? "line" : i, b = a === void 0 ? false : a;
  if (t <= 0) {
    return null;
  }
  let p;
  if (l[0] !== t || l[1] !== d) p = (0, import_chunk_f64qna2j.$y)(t, d), l[0] = t, l[1] = d, l[2] = p;
  else p = l[2];
  let f;
  if (l[3] !== n) f = n !== void 0 && n >= 1e3 && ` (~${(0, import_chunk_f64qna2j.zAt)(n)} KB)`, l[3] = n, l[4] = f;
  else f = l[4];
  let u;
  if (l[5] !== b) u = b && (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [" ", (0, import_chunk_a46xeenj.e)(xm, {})] }), l[5] = b, l[6] = u;
  else u = l[6];
  let C;
  if (l[7] !== p || l[8] !== f || l[9] !== u) C = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [p, f, u] }), l[7] = p, l[8] = f, l[9] = u, l[10] = C;
  else C = l[10];
  return C;
}
