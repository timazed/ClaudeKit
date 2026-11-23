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
var chunk_fzqmkppd_exports = {};
__export(chunk_fzqmkppd_exports, {
  bZe: () => bZe,
  yYn: () => yYn
});
module.exports = __toCommonJS(chunk_fzqmkppd_exports);
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_czdx79v3 = require("/$bunfs/root/chunk-czdx79v3.js");
var import_chunk_yhzdv0wf = require("/$bunfs/root/chunk-yhzdv0wf.js");
var import_chunk_2gnrwghx = require("/$bunfs/root/chunk-2gnrwghx.js");
var import_chunk_b7hj8816 = require("/$bunfs/root/chunk-b7hj8816.js");
var import_chunk_kat5c1mk = require("/$bunfs/root/chunk-kat5c1mk.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var I = 10;
function bZe(Z) {
  let n = (0, import_chunk_sng02qpc.k)(40), { file_path: s, operation: m, patch: f, firstLine: y, fileContent: H, content: p, style: _, verbose: c, isInterrupted: O } = Z, { columns: l } = (0, import_chunk_6n6exvyx.qe)();
  const d = O ? "Interrupted" : "Rejected";
  let h;
  if (n[0] !== m || n[1] !== d) h = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [d, " ", m, " to", " "] }), n[0] = m, n[1] = d, n[2] = h;
  else h = n[2];
  let P;
  if (n[3] !== s || n[4] !== c) P = c ? s : (0, import_chunk_2yx6c1y2.Po)(s), n[3] = s, n[4] = c, n[5] = P;
  else P = n[5];
  let v;
  if (n[6] !== s || n[7] !== P) v = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, dimColor: true, children: (0, import_chunk_a46xeenj.e)(import_chunk_yhzdv0wf.Af, { filePath: s, children: P }) }), n[6] = s, n[7] = P, n[8] = v;
  else v = n[8];
  let F;
  if (n[9] !== h || n[10] !== v) F = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "row", children: [h, v] }), n[9] = h, n[10] = v, n[11] = F;
  else F = n[11];
  let i = F;
  if (_ === "condensed" && !c) {
    let t2;
    if (n[12] !== i) t2 = (0, import_chunk_a46xeenj.e)(import_chunk_b7hj8816.Wn, { children: i }), n[12] = i, n[13] = t2;
    else t2 = n[13];
    return t2;
  }
  if (m === "write" && p !== void 0) {
    let a, t2;
    if (n[14] !== p || n[15] !== c) {
      let C = (0, import_chunk_7cfjrnwy.Lm)(p, `
`).split(`
`);
      a = C.length - I;
      t2 = c ? p : C.slice(0, I).join(`
`);
      n[14] = p, n[15] = c, n[16] = a, n[17] = t2;
    } else a = n[16], t2 = n[17];
    let z = t2;
    const u2 = z || "(No content)";
    const b2 = l - 12;
    let A;
    if (n[18] !== s || n[19] !== u2 || n[20] !== b2) A = (0, import_chunk_a46xeenj.e)(import_chunk_2gnrwghx.Hv, { code: u2, filePath: s, width: b2, isWidthFixed: true, dim: true }), n[18] = s, n[19] = u2, n[20] = b2, n[21] = A;
    else A = n[21];
    let S;
    if (n[22] !== a || n[23] !== c) S = !c && (0, import_chunk_a46xeenj.e)(import_chunk_czdx79v3.hc, { count: a, expandable: true }), n[22] = a, n[23] = c, n[24] = S;
    else S = n[24];
    let D;
    if (n[25] !== S || n[26] !== A || n[27] !== i) D = (0, import_chunk_a46xeenj.e)(import_chunk_b7hj8816.Wn, { children: (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [i, A, S] }) }), n[25] = S, n[26] = A, n[27] = i, n[28] = D;
    else D = n[28];
    return D;
  }
  if (!f || f.length === 0) {
    let t2;
    if (n[29] !== i) t2 = (0, import_chunk_a46xeenj.e)(import_chunk_b7hj8816.Wn, { children: i }), n[29] = i, n[30] = t2;
    else t2 = n[30];
    return t2;
  }
  const t = l - 12;
  let u;
  if (n[31] !== H || n[32] !== s || n[33] !== y || n[34] !== f || n[35] !== t) u = (0, import_chunk_a46xeenj.e)(import_chunk_kat5c1mk.Zce, { hunks: f, dim: true, width: t, filePath: s, firstLine: y, fileContent: H }), n[31] = H, n[32] = s, n[33] = y, n[34] = f, n[35] = t, n[36] = u;
  else u = n[36];
  let b;
  if (n[37] !== u || n[38] !== i) b = (0, import_chunk_a46xeenj.e)(import_chunk_b7hj8816.Wn, { children: (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [i, u] }) }), n[37] = u, n[38] = i, n[39] = b;
  else b = n[39];
  return b;
}
function Pt(u) {
  return u.startsWith("+");
}
function ht(b, A) {
  return b + (0, import_chunk_4smdap7r.U)(A.lines, Pt);
}
function bt(S) {
  return S.startsWith("-");
}
function vt(D, xt) {
  return D + (0, import_chunk_4smdap7r.U)(xt.lines, bt);
}
function yYn(Z) {
  let n = (0, import_chunk_sng02qpc.k)(25), { filePath: s, structuredPatch: m, firstLine: f, fileContent: y, style: H, verbose: p, previewHint: _, collapsed: c } = Z, { columns: O } = (0, import_chunk_6n6exvyx.qe)(), l = m.reduce(ht, 0), d = m.reduce(vt, 0), h;
  if (n[0] !== l) h = l > 0 ? (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: ["Added ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: l }), " ", l > 1 ? "lines" : "line"] }) : null, n[0] = l, n[1] = h;
  else h = n[1];
  const P = l > 0 && d > 0 ? ", " : null;
  let v;
  if (n[2] !== l || n[3] !== d) v = d > 0 ? (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [l === 0 ? "R" : "r", "emoved ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: d }), " ", d > 1 ? "lines" : "line"] }) : null, n[2] = l, n[3] = d, n[4] = v;
  else v = n[4];
  let F;
  if (n[5] !== h || n[6] !== P || n[7] !== v) F = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [h, P, v] }), n[5] = h, n[6] = P, n[7] = v, n[8] = F;
  else F = n[8];
  let i = F;
  if (_) {
    if (H !== "condensed" && !p) {
      let t2;
      if (n[9] !== _) t2 = (0, import_chunk_a46xeenj.e)(import_chunk_b7hj8816.Wn, { children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: _ }) }), n[9] = _, n[10] = t2;
      else t2 = n[10];
      return t2;
    }
  } else if (H === "condensed" && !p) {
    return i;
  } else if (c && !p && l + d > 0) {
    let t2;
    if (n[11] === import_chunk_w1d7ygsk.R) t2 = (0, import_chunk_a46xeenj.e)(import_chunk_czdx79v3.xm, {}), n[11] = t2;
    else t2 = n[11];
    let a2;
    if (n[12] !== i) a2 = (0, import_chunk_a46xeenj.e)(import_chunk_b7hj8816.Wn, { children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [i, " ", t2] }) }), n[12] = i, n[13] = a2;
    else a2 = n[13];
    return a2;
  }
  let t;
  if (n[14] !== i) t = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: i }), n[14] = i, n[15] = t;
  else t = n[15];
  const a = O - 12;
  let C;
  if (n[16] !== y || n[17] !== s || n[18] !== f || n[19] !== m || n[20] !== a) C = (0, import_chunk_a46xeenj.e)(import_chunk_kat5c1mk.Zce, { hunks: m, dim: false, width: a, filePath: s, firstLine: f, fileContent: y }), n[16] = y, n[17] = s, n[18] = f, n[19] = m, n[20] = a, n[21] = C;
  else C = n[21];
  let z;
  if (n[22] !== t || n[23] !== C) z = (0, import_chunk_a46xeenj.e)(import_chunk_b7hj8816.Wn, { children: (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [t, C] }) }), n[22] = t, n[23] = C, n[24] = z;
  else z = n[24];
  return z;
}
