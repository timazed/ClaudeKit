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
var chunk_eftem1xs_exports = {};
__export(chunk_eftem1xs_exports, {
  _ve: () => _ve
});
module.exports = __toCommonJS(chunk_eftem1xs_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_jczdrj4v = require("/$bunfs/root/chunk-jczdrj4v.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_yss9hm8r = require("/$bunfs/root/chunk-yss9hm8r.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function _ve(x) {
  let t = (0, import_chunk_sng02qpc.k)(40), l, s, n, i, c, a, h, r, A, P, p;
  if (t[0] !== x) ({ title: p, children: l, onCancel: i, enterAction: h, escapeAction: s, keys: r, initial: A, optional: P, onChange: c, onSubmit: a, ...n } = x), t[0] = x, t[1] = l, t[2] = s, t[3] = n, t[4] = i, t[5] = c, t[6] = a, t[7] = h, t[8] = r, t[9] = A, t[10] = P, t[11] = p;
  else l = t[1], s = t[2], n = t[3], i = t[4], c = t[5], a = t[6], h = t[7], r = t[8], A = t[9], P = t[10], p = t[11];
  let b = h === void 0 ? "save" : h, z;
  if (t[12] !== r) z = r === void 0 ? [] : r, t[12] = r, t[13] = z;
  else z = t[13];
  let v = z, ne = A === void 0 ? "" : A, S = P === void 0 ? false : P, [D, oe] = (0, import_chunk_bs4h6795.y)(ne), [E, B] = (0, import_chunk_bs4h6795.y)(null), m;
  if (t[14] !== s || t[15] !== i) m = { action: "confirm:no", hint: s, run: i }, t[14] = s, t[15] = i, t[16] = m;
  else m = t[16];
  let d;
  if (t[17] !== v || t[18] !== m) d = [m, ...v], t[17] = v, t[18] = m, t[19] = d;
  else d = t[19];
  let I;
  if (t[20] === import_chunk_w1d7ygsk.R) I = [], t[20] = I;
  else I = t[20];
  let u;
  if (t[21] !== c) u = (J) => {
    oe(J), B(null), c?.(J);
  }, t[21] = c, t[22] = u;
  else u = t[22];
  let f;
  if (t[23] !== n || t[24] !== a || t[25] !== S) f = (ie) => {
    let L = ie.trim();
    let T = L || S ? a(L) : `${n.label} is required`;
    return B(typeof T === "string" ? T : null), T;
  }, t[23] = n, t[24] = a, t[25] = S, t[26] = f;
  else f = t[26];
  let g;
  if (t[27] !== E || t[28] !== n || t[29] !== f || t[30] !== u || t[31] !== D) g = (0, import_chunk_a46xeenj.e)(import_chunk_jczdrj4v.zi, { scope: "Settings", bindings: I, flexDirection: "column", children: (0, import_chunk_a46xeenj.e)(import_chunk_yss9hm8r.hd, { ...n, value: D, onChange: u, onSubmit: f, error: E }) }), t[27] = E, t[28] = n, t[29] = f, t[30] = u, t[31] = D, t[32] = g;
  else g = t[32];
  let M;
  if (t[33] !== l || t[34] !== b || t[35] !== i || t[36] !== g || t[37] !== d || t[38] !== p) M = (0, import_chunk_a46xeenj.o)(import_chunk_vs99e3g5.Oe, { title: p, onCancel: i, isCancelActive: false, keys: d, enterAction: b, children: [l, g] }), t[33] = l, t[34] = b, t[35] = i, t[36] = g, t[37] = d, t[38] = p, t[39] = M;
  else M = t[39];
  return M;
}
