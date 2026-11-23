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
var chunk_ggqyvxbh_exports = {};
__export(chunk_ggqyvxbh_exports, {
  KWs: () => KWs,
  M$o: () => M$o,
  qWs: () => qWs,
  yIe: () => yIe
});
module.exports = __toCommonJS(chunk_ggqyvxbh_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_210k8f6q = require("/$bunfs/root/chunk-210k8f6q.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_szvrpg0x = require("/$bunfs/root/chunk-szvrpg0x.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_74h6kcya = require("/$bunfs/root/chunk-74h6kcya.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
var M$o = "current-pr";
function KWs(n, i) {
  if (!n || !i) return null;
  let d = n.kind === "cr" && false, g = n.kind === "mr";
  return { prefix: g ? "MR" : "PR", label: `${g ? "!" : "#"}${n.number}`, url: i, dedupUrl: n.url, color: ee(n.reviewState) };
}
function ee(n) {
  switch (n) {
    case "approved":
      return "success";
    case "changes_requested":
      return "error";
    case "pending":
      return "warning";
    case "merged":
      return "merged";
    default:
      return;
  }
}
function P(n, i, d) {
  return;
}
function qWs(n, i, d) {
  (0, import_chunk_bs4h6795.H)(() => {
    if (i === void 0) return;
    P(n, i, d === "cr" || d === "mr");
  }, [n, i, d]);
}
function ue(de) {
  return de.settings?.prUrlTemplate;
}
function yIe(n) {
  let p = (0, import_chunk_sng02qpc.k)(39), { number: i, url: d, reviewState: g, bold: m, color: x, dimColor: T, underline: q, hidePrefix: U, kind: K } = n, F = q === void 0 ? true : q, c = K === "cr" && false, a = K === "mr", R = a ? "!" : "#", O = (0, import_chunk_74h6kcya.X)(ue), z;
  if (p[0] !== c || p[1] !== a || p[2] !== O || p[3] !== d) z = c || a ? d : (0, import_chunk_sjqze7qg.SSe)(d, O), p[0] = c, p[1] = a, p[2] = O, p[3] = d, p[4] = z;
  else z = p[4];
  let f = z, J, Q;
  if (p[5] !== c || p[6] !== a || p[7] !== d || p[8] !== f) J = () => {
    P(f, d, c || a);
  }, Q = [f, d, c, a], p[5] = c, p[6] = a, p[7] = d, p[8] = f, p[9] = J, p[10] = Q;
  else J = p[9], Q = p[10];
  (0, import_chunk_bs4h6795.H)(J, Q);
  let V;
  if (p[11] !== x || p[12] !== g) V = x ?? j(g), p[11] = x, p[12] = g, p[13] = V;
  else V = p[13];
  let b = V, _ = T || !b && !m, W;
  if (p[14] !== m || p[15] !== _ || p[16] !== R || p[17] !== i || p[18] !== b) W = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: b, dimColor: _, bold: m, children: [R, i] }), p[14] = m, p[15] = _, p[16] = R, p[17] = i, p[18] = b, p[19] = W;
  else W = p[19];
  let N = W, w;
  if (p[20] !== m || p[21] !== T || p[22] !== U || p[23] !== a) w = !U && (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: T || !m, children: a ? "MR" : "PR" }), " "] }), p[20] = m, p[21] = T, p[22] = U, p[23] = a, p[24] = w;
  else w = p[24];
  let v;
  if (p[25] !== m || p[26] !== _ || p[27] !== R || p[28] !== i || p[29] !== b || p[30] !== F) v = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: b, dimColor: _, underline: F, bold: m, children: [R, i] }), p[25] = m, p[26] = _, p[27] = R, p[28] = i, p[29] = b, p[30] = F, p[31] = v;
  else v = p[31];
  let h;
  if (p[32] !== N || p[33] !== v || p[34] !== f) h = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: f, fallback: N, assumeSupport: true, children: v }), p[32] = N, p[33] = v, p[34] = f, p[35] = h;
  else h = p[35];
  let Z;
  if (p[36] !== w || p[37] !== h) Z = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [w, h] }), p[36] = w, p[37] = h, p[38] = Z;
  else Z = p[38];
  return Z;
}
function j(n) {
  switch (n) {
    case "approved":
      return "success";
    case "changes_requested":
      return "error";
    case "pending":
      return "warning";
    case "merged":
      return "merged";
    default:
      return;
  }
}
