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
var chunk_v65a0pbg_exports = {};
__export(chunk_v65a0pbg_exports, {
  Pwn: () => Pwn,
  rW: () => rW,
  tl: () => tl,
  yve: () => yve
});
module.exports = __toCommonJS(chunk_v65a0pbg_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_f3ymc800 = require("/$bunfs/root/chunk-f3ymc800.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_s73318k8 = require("/$bunfs/root/chunk-s73318k8.js");
var import_chunk_9js1xpg4 = require("/$bunfs/root/chunk-9js1xpg4.js");
var import_chunk_wvchre07 = require("/$bunfs/root/chunk-wvchre07.js");
var import_chunk_drb2187g = require("/$bunfs/root/chunk-drb2187g.js");
var import_chunk_y8kqnbqt = require("/$bunfs/root/chunk-y8kqnbqt.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_dfcadv0m = require("/$bunfs/root/chunk-dfcadv0m.js");
var import_chunk_47n6tps8 = require("/$bunfs/root/chunk-47n6tps8.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_mh32mevx = require("/$bunfs/root/chunk-mh32mevx.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
var He = { "select:accept": "Enter", "select:cancel": "Esc", "select:previous": "\u2191", "select:next": "\u2193" };
function rW(a, t = false) {
  let s = (0, import_chunk_8bkqeb5d.Xe)(), p = (0, import_chunk_9js1xpg4.$d)()?.bindings, f = He[a];
  if (t || s || !p) return f;
  let F = (0, import_chunk_y8kqnbqt.zCe)(a, "Select", p).map(import_chunk_y8kqnbqt.i0);
  return F.includes(f) ? f : F.at(-1) ?? "";
}
function te(a) {
  let t = (0, import_chunk_mh32mevx.HZ)(a);
  return t === null ? void 0 : String(t);
}
function A(a) {
  switch (a?.type) {
    case "workflow-agent": {
      let t = te(a.workflowName);
      return t !== void 0 ? `from the "${t}" workflow` : "from a workflow";
    }
    case "subagent": {
      let t = te(a.agentName);
      return t !== void 0 ? `from the ${t} agent` : "from a subagent";
    }
    case "remote-agent":
      return "from a remote cloud agent";
    case "plugin": {
      let t = te(a.pluginName);
      return t === void 0 ? "from a plugin" : `from the ${t} plugin`;
    }
  }
  return;
}
function Pwn(a, t, s) {
  let p = A(t);
  return (0, import_chunk_mgh1y10w.oe)(a) + (p === void 0 ? 0 : 1 + (0, import_chunk_mgh1y10w.oe)(`\xB7 ${p}`)) <= s;
}
function yve(a) {
  let l = (0, import_chunk_sng02qpc.k)(25), { title: t, subtitle: s, color: p, requestSource: f, srPrefix: F, aside: b } = a, P = p === void 0 ? "permission" : p, H;
  if (l[0] !== f) H = A(f), l[0] = f, l[1] = H;
  else H = l[1];
  let X = H;
  const U = F !== void 0 ? `${F} ${t}` : void 0;
  let i;
  if (l[2] !== P || l[3] !== U || l[4] !== t) i = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-label": U, bold: true, color: P, children: t }), l[2] = P, l[3] = U, l[4] = t, l[5] = i;
  else i = l[5];
  let x;
  if (l[6] !== X) x = X !== void 0 && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "\xB7 " }), X] }), l[6] = X, l[7] = x;
  else x = l[7];
  let d;
  if (l[8] !== i || l[9] !== x) d = (0, import_chunk_a46xeenj.o)(import_chunk_47n6tps8.Vh, { children: [i, x] }), l[8] = i, l[9] = x, l[10] = d;
  else d = l[10];
  let w = d, B;
  if (l[11] !== b || l[12] !== f || l[13] !== t) B = b !== void 0 && Pwn(t, f, b.rowColumns - 1 - (0, import_chunk_mgh1y10w.oe)(b.text)), l[11] = b, l[12] = f, l[13] = t, l[14] = B;
  else B = l[14];
  let T = B;
  const h = T ? 1 : void 0;
  let L;
  if (l[15] !== b || l[16] !== T || l[17] !== w) L = T ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "row", justifyContent: "space-between", gap: 1, children: [w, (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: b.text })] }) : w, l[15] = b, l[16] = T, l[17] = w, l[18] = L;
  else L = l[18];
  let u;
  if (l[19] !== s) u = s != null && (typeof s === "string" ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate-start", children: s }) : s), l[19] = s, l[20] = u;
  else u = l[20];
  let K;
  if (l[21] !== u || l[22] !== h || l[23] !== L) K = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", flexGrow: h, children: [L, u] }), l[21] = u, l[22] = h, l[23] = L, l[24] = K;
  else K = l[24];
  return K;
}
function at() {
  return false;
}
var ye = { keyCase: "lower" }, Ce = "Permission Required:";
function tl(a) {
  let u = (0, import_chunk_sng02qpc.k)(46), { title: t, subtitle: s, color: p, titleColor: f, innerPaddingX: F, hasPanelInset: b, requestSource: P, titleRight: l, srPrefix: H, marginTop: X, hideBorder: U, frame: i, children: x } = a, d = p === void 0 ? "permission" : p, w = F === void 0 ? 1 : F, B = b === void 0 ? false : b, T = H === void 0 ? Ce : H, h = X === void 0 ? 1 : X, L = U === void 0 ? false : U, K;
  if (u[0] !== x) K = (0, import_chunk_a46xeenj.e)(import_chunk_s73318k8.E9t.Provider, { value: true, children: x }), u[0] = x, u[1] = K;
  else K = u[1];
  let E = K, n = (0, import_chunk_f3ymc800.e7n)(), I = (0, import_chunk_bs4h6795.be)(import_chunk_3jkk3v3z.ay), O;
  if (u[2] !== I) O = I ?? { rows: 0, columns: 0 }, u[2] = I, u[3] = O;
  else O = u[3];
  let { columns: q } = (0, import_chunk_6n6exvyx.Qo)(O), Y = (0, import_chunk_6n6exvyx.rl)(), [j] = (0, import_chunk_bs4h6795.y)(at), z = i !== void 0 || j, c = B && !Y && Pwn(t, P, q - 2 * import_chunk_dfcadv0m.wS - (n === null ? 0 : 1 + (0, import_chunk_mgh1y10w.oe)(n))) ? import_chunk_dfcadv0m.wS : 1, m = B && !z ? c : w;
  if (z) {
    let S2;
    if (u[4] !== n || u[5] !== E || u[6] !== d || u[7] !== q || u[8] !== i || u[9] !== m || u[10] !== Y || u[11] !== h || u[12] !== P || u[13] !== T || u[14] !== s || u[15] !== t || u[16] !== l) S2 = (0, import_chunk_a46xeenj.e)(ge, { title: t, subtitle: s, color: d, requestSource: P, titleRight: l, askPosition: n, columns: q, insideModal: Y, srPrefix: T, innerPaddingX: m, marginTop: h, frame: i, children: E }), u[4] = n, u[5] = E, u[6] = d, u[7] = q, u[8] = i, u[9] = m, u[10] = Y, u[11] = h, u[12] = P, u[13] = T, u[14] = s, u[15] = t, u[16] = l, u[17] = S2;
    else S2 = u[17];
    return S2;
  }
  const S = !L, D = T ?? void 0;
  let N;
  if (u[18] !== n || u[19] !== q || u[20] !== c || u[21] !== l) N = l === void 0 && n !== null ? { text: n, rowColumns: q - 2 * c } : void 0, u[18] = n, u[19] = q, u[20] = c, u[21] = l, u[22] = N;
  else N = u[22];
  let v;
  if (u[23] !== P || u[24] !== s || u[25] !== D || u[26] !== N || u[27] !== t || u[28] !== f) v = (0, import_chunk_a46xeenj.e)(yve, { title: t, subtitle: s, color: f, requestSource: P, srPrefix: D, aside: N }), u[23] = P, u[24] = s, u[25] = D, u[26] = N, u[27] = t, u[28] = f, u[29] = v;
  else v = u[29];
  let M;
  if (u[30] !== v || u[31] !== l) M = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { justifyContent: "space-between", children: [v, l] }), u[30] = v, u[31] = l, u[32] = M;
  else M = u[32];
  let J;
  if (u[33] !== c || u[34] !== M) J = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingX: c, flexDirection: "column", children: M }), u[33] = c, u[34] = M, u[35] = J;
  else J = u[35];
  let ee;
  if (u[36] !== E || u[37] !== m) ee = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", paddingX: m, children: E }), u[36] = E, u[37] = m, u[38] = ee;
  else ee = u[38];
  let ze;
  if (u[39] === import_chunk_w1d7ygsk.R) ze = (0, import_chunk_a46xeenj.e)(import_chunk_f3ymc800.$se, {}), u[39] = ze;
  else ze = u[39];
  let Ae;
  if (u[40] !== d || u[41] !== h || u[42] !== J || u[43] !== ee || u[44] !== S) Ae = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", borderStyle: "round", borderColor: d, borderTop: S, borderLeft: false, borderRight: false, borderBottom: false, marginTop: h, children: [J, ee, ze] }), u[40] = d, u[41] = h, u[42] = J, u[43] = ee, u[44] = S, u[45] = Ae;
  else Ae = u[45];
  return Ae;
}
function ge(a) {
  let n = (0, import_chunk_sng02qpc.k)(47), { title: t, subtitle: s, color: p, requestSource: f, titleRight: F, askPosition: b, columns: P, insideModal: l, srPrefix: H, innerPaddingX: X, marginTop: U, frame: i, children: x } = a, d = i?.titleSuffix === void 0 ? "" : (0, import_chunk_mh32mevx.ljn)(i.titleSuffix.replace(/\s+/g, " ").trim()), w = A(f), B = (0, import_chunk_8bkqeb5d.Xe)(), T = rW("select:cancel"), h = (0, import_chunk_bs4h6795.be)(import_chunk_3jkk3v3z.ay), L = Math.max(1, i === void 0 ? P - 2 : P - 2 * (l ? import_chunk_dfcadv0m.IF : import_chunk_dfcadv0m.wS)), u = (0, import_chunk_mgh1y10w.oe)(t) + (d === "" ? 0 : 3 + (0, import_chunk_mgh1y10w.oe)(d)) + (w === void 0 ? 0 : 3 + (0, import_chunk_mgh1y10w.oe)(w)), K = F ?? (b !== null && u + 2 + (0, import_chunk_mgh1y10w.oe)(b) <= L ? b : void 0);
  const E = H === null ? void 0 : `${H} ${t}`;
  let I;
  if (n[0] !== E || n[1] !== t) I = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-label": E, children: t }), n[0] = E, n[1] = t, n[2] = I;
  else I = n[2];
  let O;
  if (n[3] !== w || n[4] !== d) O = d === "" && w === void 0 ? void 0 : (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [d !== "" && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [" \xB7 ", d] }), w !== void 0 && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [" \xB7 ", w] })] }), n[3] = w, n[4] = d, n[5] = O;
  else O = n[5];
  let q;
  if (n[6] !== s) q = typeof s === "string" ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate-start", children: s }) : s ?? void 0, n[6] = s, n[7] = q;
  else q = n[7];
  let Y;
  if (n[8] !== p || n[9] !== I || n[10] !== O || n[11] !== q || n[12] !== K) Y = { title: I, titleSuffix: O, subtitle: q, isSubtitleDimmed: false, titleEnd: K, color: p }, n[8] = p, n[9] = I, n[10] = O, n[11] = q, n[12] = K, n[13] = Y;
  else Y = n[13];
  let j = Y;
  if (i === void 0) {
    const z2 = U === 0 && !l ? -1 : 0;
    let c2;
    if (n[14] !== x || n[15] !== X) c2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", marginTop: -1, marginX: -1, paddingX: X, children: x }), n[14] = x, n[15] = X, n[16] = c2;
    else c2 = n[16];
    let m2;
    if (n[17] !== c2 || n[18] !== j) m2 = (0, import_chunk_a46xeenj.e)(import_chunk_vs99e3g5.iW, { ...j, insetX: 1, children: c2 }), n[17] = c2, n[18] = j, n[19] = m2;
    else m2 = n[19];
    let S2;
    if (n[20] === import_chunk_w1d7ygsk.R) S2 = (0, import_chunk_a46xeenj.e)(import_chunk_f3ymc800.$se, {}), n[20] = S2;
    else S2 = n[20];
    let D2;
    if (n[21] !== z2 || n[22] !== m2) D2 = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", marginTop: z2, children: [m2, S2] }), n[21] = z2, n[22] = m2, n[23] = D2;
    else D2 = n[23];
    return D2;
  }
  const z = i.onCancel, c = i.showHintLine === false;
  let m;
  if (n[24] !== T || n[25] !== i.hints || n[26] !== i.notice || n[27] !== i.showPermissionsHint || n[28] !== B) m = B && i.notice !== void 0 ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "warning", children: i.notice }) : (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [i.notice !== void 0 && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "warning", children: i.notice }, "notice"), (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: T, action: "cancel", terse: true, format: ye }, "cancel"), i.showPermissionsHint !== false && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "/permissions" }, "permissions"), import_chunk_bs4h6795.dy.toArray(i.hints)] }), n[24] = T, n[25] = i.hints, n[26] = i.notice, n[27] = i.showPermissionsHint, n[28] = B, n[29] = m;
  else m = n[29];
  let S;
  if (n[30] !== L || n[31] !== h) S = h === null ? null : { rows: h.rows, columns: L }, n[30] = L, n[31] = h, n[32] = S;
  else S = n[32];
  const D = L - P;
  let N;
  if (n[33] !== x) N = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: x }), n[33] = x, n[34] = N;
  else N = n[34];
  let v;
  if (n[35] !== D || n[36] !== N) v = (0, import_chunk_a46xeenj.e)(import_chunk_drb2187g.FD, { count: D, children: N }), n[35] = D, n[36] = N, n[37] = v;
  else v = n[37];
  let M;
  if (n[38] !== v || n[39] !== S) M = (0, import_chunk_a46xeenj.e)(import_chunk_3jkk3v3z.ay.Provider, { value: S, children: v }), n[38] = v, n[39] = S, n[40] = M;
  else M = n[40];
  let J;
  if (n[41] !== i.onCancel || n[42] !== M || n[43] !== c || n[44] !== m || n[45] !== j) J = (0, import_chunk_a46xeenj.e)(import_chunk_vs99e3g5.Oe, { ...j, onCancel: z, isCancelActive: false, truncateInputGuide: true, hideInputGuide: c, inputGuide: m, children: M }), n[41] = i.onCancel, n[42] = M, n[43] = c, n[44] = m, n[45] = j, n[46] = J;
  else J = n[46];
  return J;
}
