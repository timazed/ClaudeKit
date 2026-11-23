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
var chunk_46p385kd_exports = {};
__export(chunk_46p385kd_exports, {
  ND: () => ND
});
module.exports = __toCommonJS(chunk_46p385kd_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_pv97d3wp = require("/$bunfs/root/chunk-pv97d3wp.js");
var import_chunk_5h92z04c = require("/$bunfs/root/chunk-5h92z04c.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
function Q(V, X) {
  return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate", children: V }, X);
}
var v = { completed: "success", running: "running", pending: "pending", failed: "error" }, a = 2;
function ND(T) {
  let i = (0, import_chunk_sng02qpc.k)(24), { status: t, label: m, annotation: x, detail: s, detailOverflow: L, output: d } = T, h = L === void 0 ? "truncate" : L, M;
  if (i[0] !== d) M = d === void 0 ? [] : d, i[0] = d, i[1] = M;
  else M = i[1];
  let w = M, U = (0, import_chunk_8bkqeb5d.Xe)(), S = t === "running" && !U, P = (0, import_chunk_5h92z04c.Dte)(), y = t === "running" || t === "failed", l;
  if (i[2] !== S || i[3] !== t) l = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { width: P, flexShrink: 0, children: S ? (0, import_chunk_a46xeenj.e)(import_chunk_pv97d3wp.sKe, {}) : (0, import_chunk_a46xeenj.e)(import_chunk_5h92z04c.ln, { status: v[t] }) }), i[2] = S, i[3] = t, i[4] = l;
  else l = i[4];
  const R = t === "failed" ? "error" : void 0, C = t === "pending", b = t === "running" && "\u2026";
  let u;
  if (i[5] !== x) u = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: x }), i[5] = x, i[6] = u;
  else u = i[6];
  let p;
  if (i[7] !== m || i[8] !== R || i[9] !== C || i[10] !== b || i[11] !== u) p = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: R, dimColor: C, children: [m, b, u] }), i[7] = m, i[8] = R, i[9] = C, i[10] = b, i[11] = u, i[12] = p;
  else p = i[12];
  let c;
  if (i[13] !== l || i[14] !== p) c = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { children: [l, p] }), i[13] = l, i[14] = p, i[15] = c;
  else c = i[15];
  let f;
  if (i[16] !== s || i[17] !== h || i[18] !== y || i[19] !== w) f = y && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", paddingLeft: P + a, children: [s && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: h, children: s }), w.map(Q)] }), i[16] = s, i[17] = h, i[18] = y, i[19] = w, i[20] = f;
  else f = i[20];
  let B;
  if (i[21] !== c || i[22] !== f) B = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", paddingLeft: a, children: [c, f] }), i[21] = c, i[22] = f, i[23] = B;
  else B = i[23];
  return B;
}
