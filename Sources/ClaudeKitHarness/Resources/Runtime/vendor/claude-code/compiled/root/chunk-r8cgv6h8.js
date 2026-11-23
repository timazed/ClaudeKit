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
var chunk_r8cgv6h8_exports = {};
__export(chunk_r8cgv6h8_exports, {
  Cb: () => Cb,
  Z5t: () => Z5t
});
module.exports = __toCommonJS(chunk_r8cgv6h8_exports);
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_czdx79v3 = require("/$bunfs/root/chunk-czdx79v3.js");
var import_chunk_b7hj8816 = require("/$bunfs/root/chunk-b7hj8816.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_h9qt07a5 = require("/$bunfs/root/chunk-h9qt07a5.js");
var import_chunk_tcdd2he7 = require("/$bunfs/root/chunk-tcdd2he7.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
function Z5t(f) {
  return f.replace(/<sandbox_violations>[\s\S]*?<\/sandbox_violations>/g, "");
}
function L(f) {
  let t = f.flatMap((s) => {
    if (!(0, import_chunk_tcdd2he7.$8e)(s)) return [];
    let p = (0, import_chunk_wbk1hf21.Tl)(s.text);
    return [(0, import_chunk_h9qt07a5.wFt)(p) ?? p];
  }).join(`
`);
  return t.trim() === "" ? void 0 : t;
}
function Cb(f) {
  let n = (0, import_chunk_sng02qpc.k)(32), { result: t, verbose: s, verbatim: p } = f, V = p === void 0 ? false : p, b, v, g, h, y, T, w, I;
  if (n[0] !== t || n[1] !== V || n[2] !== s) {
    let a;
    let P = Array.isArray(t);
    let m2;
    if (n[11] !== P || n[12] !== t) m2 = typeof t === "string" ? t : P ? L(t) : void 0, n[11] = P, n[12] = t, n[13] = m2;
    else m2 = n[13];
    let W = m2;
    let q = V || P;
    if (W === void 0) a = "Tool execution failed";
    else {
      let z = (q ? (0, import_chunk_wbk1hf21.Tl)(W) : Z5t((0, import_chunk_wbk1hf21.Tl)((0, import_chunk_h9qt07a5.Bi)(W, "tool_use_error") ?? W)).replace(/<\/?error>/g, "")).trim();
      let c = s ? z : (0, import_chunk_k449cc64.yF)(z).rest;
      if (!s && !q && c.startsWith("InputValidationError: ")) a = "Invalid tool parameters";
      else if (c.startsWith("Error: ") || c.startsWith("Cancelled: ")) a = c;
      else a = `Error: ${c}`;
    }
    y = (0, import_chunk_7cfjrnwy.Mt)(a, `
`) + 1 - import_chunk_tcdd2he7.pln;
    h = import_chunk_b7hj8816.Wn;
    g = import_chunk_ee10yhqw.Q;
    I = true;
    v = import_chunk_8bkqeb5d.r;
    w = "error";
    b = import_chunk_8bkqeb5d.rr;
    T = s ? a : a.split(`
`).slice(0, import_chunk_tcdd2he7.pln).join(`
`);
    n[0] = t, n[1] = V, n[2] = s, n[3] = b, n[4] = v, n[5] = g, n[6] = h, n[7] = y, n[8] = T, n[9] = w, n[10] = I;
  } else b = n[3], v = n[4], g = n[5], h = n[6], y = n[7], T = n[8], w = n[9], I = n[10];
  let m;
  if (n[14] !== b || n[15] !== T) m = (0, import_chunk_a46xeenj.e)(b, { children: T }), n[14] = b, n[15] = T, n[16] = m;
  else m = n[16];
  let j;
  if (n[17] !== v || n[18] !== w || n[19] !== m) j = (0, import_chunk_a46xeenj.e)(v, { color: w, children: m }), n[17] = v, n[18] = w, n[19] = m, n[20] = j;
  else j = n[20];
  let B;
  if (n[21] !== y || n[22] !== s) B = !s && (0, import_chunk_a46xeenj.e)(import_chunk_czdx79v3.hc, { count: y, expandable: true }), n[21] = y, n[22] = s, n[23] = B;
  else B = n[23];
  let S;
  if (n[24] !== g || n[25] !== I || n[26] !== j || n[27] !== B) S = (0, import_chunk_a46xeenj.o)(g, { compact: I, children: [j, B] }), n[24] = g, n[25] = I, n[26] = j, n[27] = B, n[28] = S;
  else S = n[28];
  let C;
  if (n[29] !== h || n[30] !== S) C = (0, import_chunk_a46xeenj.e)(h, { children: S }), n[29] = h, n[30] = S, n[31] = C;
  else C = n[31];
  return C;
}
