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
var chunk_54ceh2ac_exports = {};
__export(chunk_54ceh2ac_exports, {
  J$o: () => J$o,
  X$o: () => X$o,
  nW: () => nW
});
module.exports = __toCommonJS(chunk_54ceh2ac_exports);
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_210k8f6q = require("/$bunfs/root/chunk-210k8f6q.js");
var import_chunk_v2br6d1p = require("/$bunfs/root/chunk-v2br6d1p.js");
var import_chunk_c7hg08xn = require("/$bunfs/root/chunk-c7hg08xn.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_tqcvacgp = require("/$bunfs/root/chunk-tqcvacgp.js");
var import_chunk_6geanr2a = require("/$bunfs/root/chunk-6geanr2a.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
var l = (0, import_chunk_bs4h6795.an)(false);
function X$o(t) {
  let s = (0, import_chunk_sng02qpc.k)(2), { children: r } = t, o;
  if (s[0] !== r) o = (0, import_chunk_a46xeenj.e)(l.Provider, { value: true, children: r }), s[0] = r, s[1] = o;
  else o = s[1];
  return o;
}
function u() {
  return (0, import_chunk_bs4h6795.be)(l);
}
function v(t) {
  if (/^\s/.test(t)) return t;
  try {
    let r = (0, import_chunk_w578pjby.te)(t), s = (0, import_chunk_w578pjby._)(r), o = t.replaceAll("\\/", "/").replace(/\s+/g, ""), i = s.replace(/\s+/g, "");
    if (o !== i) return t;
    return (0, import_chunk_w578pjby._)(r, null, 2);
  } catch {
    return t;
  }
}
var E = 1e4;
function R(t) {
  if (t.length > E) return t;
  return t.split(`
`).map(v).join(`
`);
}
var A = /https?:\/\/[^\s"'<>\\\x00-\x1f]+/g, H = 1e5;
function J$o(t, r) {
  if (t.length > H) return t;
  let s = (o) => o.replace(A, (i) => (0, import_chunk_tqcvacgp.YE)(i, void 0, { themeName: r, mayWriteHyperlink: (0, import_chunk_210k8f6q.WZn)(i) }));
  if (!t.includes(import_chunk_8bkqeb5d.PGs)) return s(t);
  return t.split(`
`).map((o) => o.includes(import_chunk_8bkqeb5d.PGs) ? o : s(o)).join(`
`);
}
function nW(t) {
  let a = (0, import_chunk_sng02qpc.k)(14), { content: r, verbose: s, isError: o } = t, { columns: i } = (0, import_chunk_6n6exvyx.qe)(), [d] = (0, import_chunk_3jkk3v3z.Os)(), j = u(), h = (0, import_chunk_bs4h6795.be)(import_chunk_v2br6d1p.NL), w = s || j, F;
  if (a[0] !== r || a[1] !== d) F = J$o(R(r), d), a[0] = r, a[1] = d, a[2] = F;
  else F = a[2];
  let m = F, g;
  mt: {
    if (w) {
      let n3;
      if (a[3] !== m) n3 = c(m), a[3] = m, a[4] = n3;
      else n3 = a[4];
      g = n3;
      break mt;
    }
    let n2;
    if (a[5] !== i || a[6] !== m || a[7] !== h) n2 = c((0, import_chunk_6geanr2a.Lyi)(m, i, h)), a[5] = i, a[6] = m, a[7] = h, a[8] = n2;
    else n2 = a[8];
    g = n2;
  }
  let N = g;
  const n = o ? "error" : "plain";
  let f;
  if (a[9] !== N) f = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.rr, { children: N }), a[9] = N, a[10] = f;
  else f = a[10];
  let O;
  if (a[11] !== n || a[12] !== f) O = (0, import_chunk_a46xeenj.e)(import_chunk_c7hg08xn.At, { tone: n, children: f }), a[11] = n, a[12] = f, a[13] = O;
  else O = a[13];
  return O;
}
function c(t) {
  return t.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g, "");
}
