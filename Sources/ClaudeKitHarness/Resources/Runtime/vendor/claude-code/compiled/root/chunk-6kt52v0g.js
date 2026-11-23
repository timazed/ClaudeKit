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
var chunk_6kt52v0g_exports = {};
__export(chunk_6kt52v0g_exports, {
  $3: () => $3,
  $Ve: () => $Ve,
  jUr: () => jUr
});
module.exports = __toCommonJS(chunk_6kt52v0g_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_75ftbgzx = require("/$bunfs/root/chunk-75ftbgzx.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var jUr = 200;
function $3(A) {
  let n = (0, import_chunk_sng02qpc.k)(25), { title: t, subtitle: p, onClose: o, onBack: s, isEscapeBack: i, onStop: a, keys: d, children: g } = A, W = i === void 0 ? false : i, D;
  if (n[0] !== d) D = d === void 0 ? [] : d, n[0] = d, n[1] = D;
  else D = n[1];
  let C = D, T = W ? s : void 0;
  const E = T ?? o, N = T ? "go back" : "close", S = s && !T ? "go back" : "", x = s ?? o;
  let u;
  if (n[2] !== S || n[3] !== x) u = { on: "left", hint: S, run: x }, n[2] = S, n[3] = x, n[4] = u;
  else u = n[4];
  let y;
  if (n[5] !== a) y = a ? [{ on: "x", hint: "stop", run: a }] : [], n[5] = a, n[6] = y;
  else y = n[6];
  let f;
  if (n[7] !== o) f = { action: "confirm:yes", hint: "", run: o }, n[7] = o, n[8] = f;
  else f = n[8];
  let I;
  if (n[9] === import_chunk_w1d7ygsk.R) I = ["enter", " "], n[9] = I;
  else I = n[9];
  let B;
  if (n[10] !== o) B = { on: I, hint: "close", run: o }, n[10] = o, n[11] = B;
  else B = n[11];
  let h;
  if (n[12] !== C || n[13] !== f || n[14] !== B || n[15] !== u || n[16] !== y) h = [u, ...y, ...C, f, B], n[12] = C, n[13] = f, n[14] = B, n[15] = u, n[16] = y, n[17] = h;
  else h = n[17];
  let K;
  if (n[18] !== g || n[19] !== p || n[20] !== h || n[21] !== E || n[22] !== N || n[23] !== t) K = (0, import_chunk_a46xeenj.e)(import_chunk_vs99e3g5.Oe, { title: t, subtitle: p, onCancel: E, escapeAction: N, keys: h, children: g }), n[18] = g, n[19] = p, n[20] = h, n[21] = E, n[22] = N, n[23] = t, n[24] = K;
  else K = n[24];
  return K;
}
function $Ve(A) {
  let o = (0, import_chunk_sng02qpc.k)(5), { status: t, children: p } = A, s;
  if (o[0] !== t) s = t === "running" || t === "pending" ? void 0 : (0, import_chunk_75ftbgzx.twn)(t), o[0] = t, o[1] = s;
  else s = o[1];
  const i = p ?? (t === "killed" ? "stopped" : t);
  let a;
  if (o[2] !== s || o[3] !== i) a = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: s, children: i }), o[2] = s, o[3] = i, o[4] = a;
  else a = o[4];
  return a;
}
