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
var chunk_y149sphk_exports = {};
__export(chunk_y149sphk_exports, {
  ET: () => ET,
  u9t: () => u9t
});
module.exports = __toCommonJS(chunk_y149sphk_exports);
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function X(m, u) {
  return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { width: 2, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: D[m] }) }, u);
}
var D = { branch: import_chunk_xcgcdx61.eC.branch, last: import_chunk_xcgcdx61.eC.last, pipe: import_chunk_xcgcdx61.eC.pipe, space: "" };
function u9t(d) {
  let l = (0, import_chunk_sng02qpc.k)(7), { connectors: n, children: t } = d, c;
  if (l[0] !== n) c = n.length > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.hg, { "aria-hidden": true, fromLeftEdge: true, flexShrink: 0, flexDirection: "row", children: n.map(X) }), l[0] = n, l[1] = c;
  else c = l[1];
  let a;
  if (l[2] !== t) a = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexGrow: 1, flexShrink: 1, children: t }), l[2] = t, l[3] = a;
  else a = l[3];
  let N;
  if (l[4] !== c || l[5] !== a) N = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "row", children: [c, a] }), l[4] = c, l[5] = a, l[6] = N;
  else N = l[6];
  return N;
}
var i = (0, import_chunk_bs4h6795.an)([]), p = (0, import_chunk_bs4h6795.an)(true);
function s(d, n = true) {
  let t = import_chunk_bs4h6795.dy.toArray(d);
  return t.map((l, c) => (0, import_chunk_a46xeenj.e)(p.Provider, { value: n && c === t.length - 1, children: l }, c));
}
function B(d) {
  let t = (0, import_chunk_sng02qpc.k)(5), { children: n } = d, l;
  if (t[0] === import_chunk_w1d7ygsk.R) l = [], t[0] = l;
  else l = t[0];
  let c;
  if (t[1] !== n) c = s(n), t[1] = n, t[2] = c;
  else c = t[2];
  let a;
  if (t[3] !== c) a = (0, import_chunk_a46xeenj.e)(i.Provider, { value: l, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: c }) }), t[3] = c, t[4] = a;
  else a = t[4];
  return a;
}
function O(d) {
  let f = (0, import_chunk_sng02qpc.k)(18), { label: n, children: t, dimColor: l, color: c } = d, a = (0, import_chunk_bs4h6795.be)(i), N = (0, import_chunk_bs4h6795.be)(p), m = N ? "last" : "branch", u = N ? "space" : "pipe", C = n != null && n !== false, h = C ? n : t, b;
  if (f[0] !== a || f[1] !== m) b = [...a, m], f[0] = a, f[1] = m, f[2] = b;
  else b = f[2];
  let P;
  if (f[3] !== c || f[4] !== l || f[5] !== h) P = (0, import_chunk_bs4h6795.y_)(h) ? h : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: l, color: c, children: h }), f[3] = c, f[4] = l, f[5] = h, f[6] = P;
  else P = f[6];
  let x;
  if (f[7] !== b || f[8] !== P) x = (0, import_chunk_a46xeenj.e)(u9t, { connectors: b, children: P }), f[7] = b, f[8] = P, f[9] = x;
  else x = f[9];
  let v;
  if (f[10] !== a || f[11] !== t || f[12] !== u || f[13] !== C) v = C && (0, import_chunk_a46xeenj.e)(i.Provider, { value: [...a, u], children: s(t) }), f[10] = a, f[11] = t, f[12] = u, f[13] = C, f[14] = v;
  else v = f[14];
  let q;
  if (f[15] !== x || f[16] !== v) q = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: [x, v] }), f[15] = x, f[16] = v, f[17] = q;
  else q = f[17];
  return q;
}
function j(d) {
  let l = (0, import_chunk_sng02qpc.k)(3), { children: n } = d, t = (0, import_chunk_bs4h6795.be)(p), c;
  if (l[0] !== n || l[1] !== t) c = s(n, t), l[0] = n, l[1] = t, l[2] = c;
  else c = l[2];
  return c;
}
var ET = Object.assign(B, { Node: O, Group: j });
