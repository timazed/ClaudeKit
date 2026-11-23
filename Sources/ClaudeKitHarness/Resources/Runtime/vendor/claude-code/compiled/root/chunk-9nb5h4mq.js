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
var chunk_9nb5h4mq_exports = {};
__export(chunk_9nb5h4mq_exports, {
  X5t: () => X5t
});
module.exports = __toCommonJS(chunk_9nb5h4mq_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_yhzdv0wf = require("/$bunfs/root/chunk-yhzdv0wf.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_b7hj8816 = require("/$bunfs/root/chunk-b7hj8816.js");
var import_chunk_54ceh2ac = require("/$bunfs/root/chunk-54ceh2ac.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_czdx79v3 = require("/$bunfs/root/chunk-czdx79v3.js");
var import_chunk_kat5c1mk = require("/$bunfs/root/chunk-kat5c1mk.js");
var import_chunk_jannkkyp = require("/$bunfs/root/chunk-jannkkyp.js");
var import_chunk_r8cgv6h8 = require("/$bunfs/root/chunk-r8cgv6h8.js");
var import_chunk_0pkh1evw = require("/$bunfs/root/chunk-0pkh1evw.js");
var import_chunk_c7hg08xn = require("/$bunfs/root/chunk-c7hg08xn.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
var pe = 40, fe = 3, Z = "(another command ran in this repository at the same time; a change made by either may show under either result)", ge = "(a git step in this command can move the working tree, so these may be its changes, not edits)", ee = null;
function B({ diff: t, verbose: s, style: n, treeMoved: d }) {
  let { columns: h } = (0, import_chunk_6n6exvyx.qe)();
  if (t.skipped || (t.unavailable || t.shared) && t.files.length === 0) return (0, import_chunk_a46xeenj.e)(import_chunk_c7hg08xn.At, { children: t.skipped ? "(file diff skipped for this git command)" : t.unavailable ? t.moreFiles > 0 ? t.shared ? `(file diff unavailable for this command; ${N(t.moreFiles)} changed in this repository while it ran, by it or by other commands)` : `(file diff unavailable for this command; ${N(t.moreFiles)} changed)` : "(file diff unavailable for this command)" : Z });
  ee ??= t;
  let a = s || ee === t ? "(files that changed while this command ran, by the command or by another process; a convenience view, not a review or audit of the command)" : null, c = t.shared ? Z : null, P = (t.changedFiles ?? []).filter((i) => !t.files.some((f) => f.filePath === i)).slice(0, s ? void 0 : fe), M = (n === "condensed" || d) && !s;
  return (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [t.files.map((i) => {
    let f = i.hunks.flatMap((u) => u.lines), D = i.created ? "Created" : i.deleted ? "Deleted" : "Updated", { hunks: m, hiddenLines: g } = s ? { hunks: i.hunks, hiddenLines: 0 } : be(i.hunks, pe);
    return (0, import_chunk_a46xeenj.e)(import_chunk_b7hj8816.Wn, { children: (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [D, " ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: s ? i.filePath : (0, import_chunk_2yx6c1y2.Po)(i.filePath) }), " ", (0, import_chunk_a46xeenj.e)(import_chunk_0pkh1evw.fx, { added: (0, import_chunk_4smdap7r.U)(f, (u) => u.startsWith("+")), removed: (0, import_chunk_4smdap7r.U)(f, (u) => u.startsWith("-")) })] }), M ? null : (0, import_chunk_a46xeenj.e)(import_chunk_kat5c1mk.Zce, { hunks: m, dim: false, width: h - 12, filePath: i.filePath, firstLine: null }), M ? null : (0, import_chunk_a46xeenj.e)(import_chunk_czdx79v3.hc, { count: g, expandable: true })] }) }, i.filePath);
  }), t.moreFiles > 0 ? (0, import_chunk_a46xeenj.e)(import_chunk_b7hj8816.Wn, { children: (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [t.files.length > 0 ? `${(0, import_chunk_f64qna2j.$y)(t.moreFiles, "file")} changed` : `${N(t.moreFiles)} changed (binary, mode only or too large to show)`, t.unavailable ? " (part of the diff is unavailable)" : ""] }), P.map((i) => (0, import_chunk_a46xeenj.e)(import_chunk_yhzdv0wf.Af, { filePath: i, children: s ? i : (0, import_chunk_2yx6c1y2.Po)(i) }, i)), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: P.length > 0 && (0, import_chunk_f64qna2j.Lde)(t.moreFiles - P.length) })] }) }) : null, d ? (0, import_chunk_a46xeenj.o)(import_chunk_c7hg08xn.At, { children: [ge, s ? null : (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [" ", (0, import_chunk_a46xeenj.e)(import_chunk_czdx79v3.xm, {})] })] }) : null, c ? (0, import_chunk_a46xeenj.e)(import_chunk_c7hg08xn.At, { children: c }) : null, a ? (0, import_chunk_a46xeenj.e)(import_chunk_c7hg08xn.At, { children: a }) : null] });
}
function N(t) {
  return `${t} ${t === 1 ? "file" : "files"}`;
}
function be(t, s) {
  let n = [], d = 0, h = 0;
  for (let a of t) {
    let c = s - d;
    if (c <= 0) h += a.lines.length;
    else if (a.lines.length <= c) n.push(a), d += a.lines.length;
    else n.push({ ...a, lines: a.lines.slice(0, c) }), h += a.lines.length - c, d = s;
  }
  return { hunks: n, hiddenLines: h };
}
function Me(Y) {
  return (0, import_chunk_a46xeenj.o)(import_chunk_c7hg08xn.At, { settled: true, children: ["[Image sent to Claude:", " ", (0, import_chunk_a46xeenj.e)(import_chunk_yhzdv0wf.Af, { filePath: Y, children: (0, import_chunk_2yx6c1y2.Po)(Y) }), "]"] }, Y);
}
function te(t) {
  if (!t.match(/<sandbox_violations>([\s\S]*?)<\/sandbox_violations>/)) return { cleanedStderr: t };
  return { cleanedStderr: (0, import_chunk_r8cgv6h8.Z5t)(t).trim() };
}
function ne(t) {
  let s = t.match(import_chunk_bzyb60p0.Our);
  if (!s) return { cleanedStderr: t, cwdResetWarning: null };
  let n = s[1] ?? null;
  return { cleanedStderr: t.replace(import_chunk_bzyb60p0.Our, "").trim(), cwdResetWarning: n };
}
function X5t(t) {
  let l = (0, import_chunk_sng02qpc.k)(62), { content: s, verbose: n, timeoutMs: d, style: h, command: a } = t, { stdout: c, stderr: P, isImage: M, returnCodeInterpretation: i, noOutputExpected: f, backgroundTaskId: D, bashEditDiff: m, persistedOutputPath: g, persistedOutputSize: u, viewedImagePaths: x } = s, p = c === void 0 ? "" : c, q = P === void 0 ? "" : P, ue;
  if (l[0] !== x) ue = x === void 0 ? [] : x, l[0] = x, l[1] = ue;
  else ue = l[1];
  let b = ue, ce;
  if (l[2] !== m || l[3] !== a) ce = m !== void 0 && a !== void 0 && (0, import_chunk_bzyb60p0.w_i)(a), l[2] = m, l[3] = a, l[4] = ce;
  else ce = l[4];
  let J = ce, F, v, T, _, K, C, L, O, E;
  if (l[5] !== M || l[6] !== g || l[7] !== u || l[8] !== q || l[9] !== p || l[10] !== n || l[11] !== b) {
    K = import_chunk_w1d7ygsk.Mn;
    lt: {
      let { cleanedStderr: De } = te(q);
      ({ cleanedStderr: T, cwdResetWarning: v } = ne(De));
      let S2;
      if (l[21] !== b) S2 = b.map(Me), l[21] = b, l[22] = S2;
      else S2 = l[22];
      E = S2;
      if (M) {
        let w2;
        if (l[23] === import_chunk_w1d7ygsk.R) w2 = (0, import_chunk_a46xeenj.e)(import_chunk_c7hg08xn.At, { oneRow: true, children: "[Image sent to Claude]" }), l[23] = w2;
        else w2 = l[23];
        let y2;
        if (l[24] !== E) y2 = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [w2, E] }), l[24] = E, l[25] = y2;
        else y2 = l[25];
        K = y2;
        break lt;
      }
      F = import_chunk_ee10yhqw.Q;
      C = true;
      if (l[26] !== p || l[27] !== n) L = p !== "" ? (0, import_chunk_a46xeenj.e)(import_chunk_54ceh2ac.nW, { content: p, verbose: n }) : null, l[26] = p, l[27] = n, l[28] = L;
      else L = l[28];
      if (l[29] !== g || l[30] !== u || l[31] !== n) O = n && g ? (0, import_chunk_a46xeenj.e)(import_chunk_jannkkyp.uwn, { path: g, size: u }) : null, l[29] = g, l[30] = u, l[31] = n, l[32] = O;
      else O = l[32];
      _ = T.trim() !== "" ? (0, import_chunk_a46xeenj.e)(import_chunk_54ceh2ac.nW, { content: T, verbose: n, isError: true }) : null;
    }
    l[5] = M, l[6] = g, l[7] = u, l[8] = q, l[9] = p, l[10] = n, l[11] = b, l[12] = F, l[13] = v, l[14] = T, l[15] = _, l[16] = K, l[17] = C, l[18] = L, l[19] = O, l[20] = E;
  } else F = l[12], v = l[13], T = l[14], _ = l[15], K = l[16], C = l[17], L = l[18], O = l[19], E = l[20];
  if (K !== import_chunk_w1d7ygsk.Mn) return K;
  let S;
  if (l[33] !== v) S = v ? (0, import_chunk_a46xeenj.e)(import_chunk_c7hg08xn.At, { children: v }) : null, l[33] = v, l[34] = S;
  else S = l[34];
  let w;
  if (l[35] !== m || l[36] !== h || l[37] !== J || l[38] !== n) w = m ? (0, import_chunk_a46xeenj.e)(B, { diff: m, verbose: n, style: h, treeMoved: J }) : null, l[35] = m, l[36] = h, l[37] = J, l[38] = n, l[39] = w;
  else w = l[39];
  let y;
  if (l[40] !== D || l[41] !== m || l[42] !== v || l[43] !== f || l[44] !== i || l[45] !== T || l[46] !== p || l[47] !== b.length) y = D || p === "" && T.trim() === "" && !v && !m && (b.length === 0 || i) ? (0, import_chunk_a46xeenj.e)(import_chunk_c7hg08xn.At, { oneRow: true, children: D ? (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: ["Running in the background", " ", (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "down", action: "manage", parens: true })] }) : i || (f ? "Done" : "(No output)") }) : null, l[40] = D, l[41] = m, l[42] = v, l[43] = f, l[44] = i, l[45] = T, l[46] = p, l[47] = b.length, l[48] = y;
  else y = l[48];
  let H;
  if (l[49] !== d) H = d && (0, import_chunk_a46xeenj.e)(import_chunk_b7hj8816.Wn, { children: (0, import_chunk_a46xeenj.e)(import_chunk_jannkkyp.JVe, { timeoutMs: d }) }), l[49] = d, l[50] = H;
  else H = l[50];
  let he;
  if (l[51] !== F || l[52] !== _ || l[53] !== S || l[54] !== w || l[55] !== y || l[56] !== H || l[57] !== C || l[58] !== L || l[59] !== O || l[60] !== E) he = (0, import_chunk_a46xeenj.o)(F, { compact: C, children: [L, O, _, S, w, y, E, H] }), l[51] = F, l[52] = _, l[53] = S, l[54] = w, l[55] = y, l[56] = H, l[57] = C, l[58] = L, l[59] = O, l[60] = E, l[61] = he;
  else he = l[61];
  return he;
}
