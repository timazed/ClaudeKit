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
var chunk_d8gyrnk3_exports = {};
__export(chunk_d8gyrnk3_exports, {
  KSn: () => KSn,
  VSn: () => VSn,
  e2l: () => e2l,
  p9n: () => p9n,
  zSn: () => zSn
});
module.exports = __toCommonJS(chunk_d8gyrnk3_exports);
var import_chunk_7r4ehpnw = require("/$bunfs/root/chunk-7r4ehpnw.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_k59mf0h7 = require("/$bunfs/root/chunk-k59mf0h7.js");
var import_chunk_fdqz9r50 = require("/$bunfs/root/chunk-fdqz9r50.js");
var import_chunk_yvad17bv = require("/$bunfs/root/chunk-yvad17bv.js");
var import_chunk_6fvsq616 = require("/$bunfs/root/chunk-6fvsq616.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_gd8mknr6 = require("/$bunfs/root/chunk-gd8mknr6.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_wvchre07 = require("/$bunfs/root/chunk-wvchre07.js");
var import_chunk_xkd0qe42 = require("/$bunfs/root/chunk-xkd0qe42.js");
var import_chunk_46p385kd = require("/$bunfs/root/chunk-46p385kd.js");
var import_chunk_j1y56x6a = require("/$bunfs/root/chunk-j1y56x6a.js");
var import_chunk_y192p33y = require("/$bunfs/root/chunk-y192p33y.js");
var import_chunk_vx3fbgjb = require("/$bunfs/root/chunk-vx3fbgjb.js");
var import_chunk_cak1hmy1 = require("/$bunfs/root/chunk-cak1hmy1.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
function me() {
  if (!(0, import_chunk_yvad17bv.xi)()) return;
  let c = (0, import_chunk_wtm85h0y.Y0)();
  if (!c) return;
  if (import_chunk_xfj2cwfv.aT.includes(c)) return import_chunk_xfj2cwfv.q0[c];
  return;
}
function A(c) {
  let m = (0, import_chunk_sng02qpc.k)(6), { isLoading: t, isScreenReader: i, themeColor: p } = c, u = p ?? void 0, l;
  if (m[0] !== i) l = i ? (0, import_chunk_a46xeenj.e)(import_chunk_a46xeenj.ae, { children: "$\xA0" }) : (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [import_chunk_7r4ehpnw.xe.pointer, "\xA0"] }), m[0] = i, m[1] = l;
  else l = m[1];
  let f;
  if (m[2] !== u || m[3] !== t || m[4] !== l) f = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: u, dimColor: t, children: l }), m[2] = u, m[3] = t, m[4] = l, m[5] = f;
  else f = m[5];
  return f;
}
function zSn(c) {
  let b = (0, import_chunk_sng02qpc.k)(10), { mode: t, isLoading: i, viewingAgentName: p, viewingAgentColor: n } = c, u = (0, import_chunk_8bkqeb5d.Xe)(), m = (0, import_chunk_fdqz9r50._m)(me), l = n ? import_chunk_xfj2cwfv.q0[n] : void 0;
  const d = !u || !p && t === "bash";
  let F;
  if (b[0] !== i || b[1] !== u || b[2] !== t || b[3] !== m || b[4] !== l || b[5] !== p) F = p ? (0, import_chunk_a46xeenj.e)(A, { isLoading: i, isScreenReader: u, themeColor: l }) : t === "bash" ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "bashBorder", dimColor: i, children: "!\xA0" }) : (0, import_chunk_a46xeenj.e)(A, { isLoading: i, isScreenReader: u, themeColor: (0, import_chunk_yvad17bv.xi)() ? m : void 0 }), b[0] = i, b[1] = u, b[2] = t, b[3] = m, b[4] = l, b[5] = p, b[6] = F;
  else F = b[6];
  let s;
  if (b[7] !== d || b[8] !== F) s = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { "aria-hidden": d, alignItems: "flex-start", alignSelf: "flex-start", flexWrap: "nowrap", justifyContent: "flex-start", children: F }), b[7] = d, b[8] = F, b[9] = s;
  else s = b[9];
  return s;
}
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
var ce = 2, fe = 6;
function ge(c) {
  return (0, import_chunk_wbk1hf21.Dr)(c).replace(/\r\n|\r/g, `
`).replaceAll("	", "    ").replace(/[^\P{Cc}\n]/gu, "");
}
function W(c) {
  let B = (0, import_chunk_sng02qpc.k)(12), { text: t, onChange: i, onKey: p, onReturn: n, isBoxed: u, showCursor: m } = c, l = u === void 0 ? false : u, f = m === void 0 ? true : m, { columns: d } = (0, import_chunk_6n6exvyx.qe)(), [b, F] = (0, import_chunk_bs4h6795.y)(t.length);
  const s = l ? 0 : 1;
  let q;
  if (B[0] === import_chunk_w1d7ygsk.R) q = (0, import_chunk_a46xeenj.e)(zSn, { mode: "prompt", isLoading: false }), B[0] = q;
  else q = B[0];
  const C = Math.max(1, d - ce);
  let I;
  if (B[1] !== b || B[2] !== i || B[3] !== p || B[4] !== n || B[5] !== f || B[6] !== C || B[7] !== t) I = (0, import_chunk_a46xeenj.e)(import_chunk_gd8mknr6.fA, { value: t, onChange: i, onKeyDownBefore: p, inputFilter: ge, onSubmit: n, clearOnSubmit: false, multiline: true, disableCtrlCClear: true, disableEscapeDoublePress: true, placeholder: "Type your message while the session is set up", focus: true, showCursor: f, columns: C, maxVisibleLines: fe, cursorOffset: b, onChangeCursorOffset: F }), B[1] = b, B[2] = i, B[3] = p, B[4] = n, B[5] = f, B[6] = C, B[7] = t, B[8] = I;
  else I = B[8];
  let M;
  if (B[9] !== s || B[10] !== I) M = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "row", marginTop: s, children: [q, I] }), B[9] = s, B[10] = I, B[11] = M;
  else M = B[11];
  return M;
}
function vo() {
  return Date.now();
}
function Ao(Io) {
  return (0, import_chunk_y192p33y.AZe)(Io, "new");
}
function _o(Je) {
  return (0, import_chunk_a46xeenj.e)(import_chunk_46p385kd.ND, { status: "pending", label: Je }, Je);
}
var P = null;
function e2l(c) {
  let s = (0, import_chunk_sng02qpc.k)(71), { state: t, cancelling: i, onCancel: p, hasPromptLine: n, isQuestionWaiting: u, hasFailed: m, home: l, SessionFrame: f } = c, d = m === void 0 ? false : m, [b, F] = (0, import_chunk_bs4h6795.y)(vo), B;
  if (s[0] === import_chunk_w1d7ygsk.R) B = () => F(Date.now()), s[0] = B;
  else B = s[0];
  (0, import_chunk_8bkqeb5d.Al)(B, 1e3);
  let q;
  if (s[1] !== n) q = () => n ? (0, import_chunk_k59mf0h7.OWn)() : "", s[1] = n, s[2] = q;
  else q = s[2];
  let [C, I] = (0, import_chunk_bs4h6795.y)(q), M;
  if (s[3] !== n) M = () => {
    let Ie = n && (0, import_chunk_k59mf0h7.IWn)() && !j();
    if (Ie) (0, import_chunk_y53wbr8a.a)("tengu_cloud_create_prompt_return_ignored", {});
    return Ie;
  }, s[3] = n, s[4] = M;
  else M = s[4];
  let [L, Qe] = (0, import_chunk_bs4h6795.y)(M), Oe;
  if (s[5] !== n) Oe = () => n && (0, import_chunk_k59mf0h7.Vko)(), s[5] = n, s[6] = Oe;
  else Oe = s[6];
  let [ie, We] = (0, import_chunk_bs4h6795.y)(Oe), De;
  if (s[7] !== t) De = (0, import_chunk_xkd0qe42.lIe)(t), s[7] = t, s[8] = De;
  else De = s[8];
  let Y = De === "created", H;
  if (s[9] !== p || s[10] !== C) H = () => C === "" ? p() : false, s[9] = p, s[10] = C, s[11] = H;
  else H = s[11];
  let Ke;
  if (s[12] !== p || s[13] !== H) Ke = { "app:interrupt": p, "app:exit": H }, s[12] = p, s[13] = H, s[14] = Ke;
  else Ke = s[14];
  let ko = Ke, h = !Y || d, je;
  if (s[15] !== h) je = { context: "Global", isActive: h }, s[15] = h, s[16] = je;
  else je = s[16];
  (0, import_chunk_6fvsq616.gs)(ko, je);
  let Ge;
  if (s[17] === import_chunk_w1d7ygsk.R) Ge = (0, import_chunk_y192p33y.Fse)(0, { wake: false }).steps.filter(import_chunk_y192p33y.rKe).map(Ao), s[17] = Ge;
  else Ge = s[17];
  let Bo = Ge, Me;
  if (s[18] !== i || s[19] !== d || s[20] !== n || s[21] !== u || s[22] !== ie || s[23] !== L) Me = n || i || d ? p9n({ isCancelling: i, hasFailed: d, isQuestionWaiting: u, isQueued: ie, wasReturnPressed: L }) : "Typing is paused until the prompt opens", s[18] = i, s[19] = d, s[20] = n, s[21] = u, s[22] = ie, s[23] = L, s[24] = Me;
  else Me = s[24];
  let le = Me, U;
  if (s[25] !== d || s[26] !== t) U = d ? (0, import_chunk_y192p33y.RZe)("new", true) : (0, import_chunk_xkd0qe42.mUs)(t), s[25] = d, s[26] = t, s[27] = U;
  else U = s[27];
  let V;
  if (s[28] !== U) V = (0, import_chunk_a46xeenj.e)(import_chunk_vx3fbgjb.Es, { children: U }), s[28] = U, s[29] = V;
  else V = s[29];
  let z;
  if (s[30] !== b || s[31] !== t) z = t.steps.map((Ye) => (0, import_chunk_a46xeenj.e)(KSn, { step: Ye, state: t, now: b }, Ye.id)), s[30] = b, s[31] = t, s[32] = z;
  else z = s[32];
  let J;
  if (s[33] !== Y) J = !Y && Bo.map(_o), s[33] = Y, s[34] = J;
  else J = s[34];
  let He;
  if (s[35] !== V || s[36] !== z || s[37] !== J) He = (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [V, z, J] }), s[35] = V, s[36] = z, s[37] = J, s[38] = He;
  else He = s[38];
  let w = He, Q = f !== void 0 && (P === null || l === void 0), Ue;
  if (s[39] !== Q || s[40] !== d || s[41] !== n || s[42] !== C || s[43] !== h || s[44] !== L) Ue = n ? (0, import_chunk_a46xeenj.e)(W, { text: C, onChange: (Ve) => {
    I(Ve), (0, import_chunk_k59mf0h7.PZ)(Ve), Qe(false), We(false);
  }, onKey: import_chunk_k59mf0h7.Y2e, onReturn: () => {
    if (d) {
      return;
    }
    if (j()) {
      We(true);
      return;
    }
    if (!L) (0, import_chunk_y53wbr8a.a)("tengu_cloud_create_prompt_return_ignored", {}), Qe(true);
  }, isBoxed: Q, showCursor: !Q || h }) : void 0, s[39] = Q, s[40] = d, s[41] = n, s[42] = C, s[43] = h, s[44] = L, s[45] = Ue;
  else Ue = s[45];
  let N = Ue, $e;
  if (s[46] !== i || s[47] !== d || s[48] !== le) $e = (0, import_chunk_a46xeenj.e)(VSn, { status: le, cancelling: i, hasFailed: d }), s[46] = i, s[47] = d, s[48] = le, s[49] = $e;
  else $e = s[49];
  let X = $e;
  if (Q) {
    const x2 = h ? X : null;
    let O2;
    if (s[50] !== f || s[51] !== N || s[52] !== w || s[53] !== x2) O2 = (0, import_chunk_a46xeenj.e)(f, { prompt: N, foot: x2, children: w }), s[50] = f, s[51] = N, s[52] = w, s[53] = x2, s[54] = O2;
    else O2 = s[54];
    return O2;
  }
  let x;
  if (s[55] !== X || s[56] !== h) x = h && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { marginTop: 1, children: X }), s[55] = X, s[56] = h, s[57] = x;
  else x = s[57];
  let O;
  if (s[58] !== N || s[59] !== x) O = (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [N, x] }), s[58] = N, s[59] = x, s[60] = O;
  else O = s[60];
  let v = O;
  if (P !== null && l !== void 0) {
    let S2;
    if (s[61] !== v) S2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", marginBottom: 1, flexShrink: 0, children: v }), s[61] = v, s[62] = S2;
    else S2 = s[62];
    let ze;
    if (s[63] !== l.showRoster || s[64] !== l.tabs || s[65] !== w || s[66] !== S2) ze = (0, import_chunk_a46xeenj.e)(P.CloudHomeFrame, { tabs: l.tabs, sessionId: void 0, offersNew: false, showRoster: l.showRoster, onMainScreen: true, footer: S2, children: w }), s[63] = l.showRoster, s[64] = l.tabs, s[65] = w, s[66] = S2, s[67] = ze;
    else ze = s[67];
    return ze;
  }
  let S;
  if (s[68] !== v || s[69] !== w) S = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", marginTop: 1, children: [w, v] }), s[68] = v, s[69] = w, s[70] = S;
  else S = s[70];
  return S;
}
function j() {
  let c = (0, import_chunk_k59mf0h7.Vko)(), t = (0, import_chunk_j1y56x6a.qbn)();
  if (t && !c) (0, import_chunk_y53wbr8a.a)("tengu_cloud_create_prompt_queued", {});
  return t;
}
function VSn(c) {
  let n = (0, import_chunk_sng02qpc.k)(7), { status: t, cancelling: i, hasFailed: p } = c, u;
  if (n[0] !== t) u = t === null ? (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "enter", action: "send your message once the session is ready" }) : t, n[0] = t, n[1] = u;
  else u = n[1];
  const m = i ? "quit now" : p ? "see it now" : "cancel";
  let l;
  if (n[2] !== m) l = (0, import_chunk_a46xeenj.e)(import_chunk_cak1hmy1.rs, { action: "app:interrupt", context: "Global", fallback: "ctrl+c", description: m }), n[2] = m, n[3] = l;
  else l = n[3];
  let f;
  if (n[4] !== u || n[5] !== l) f = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [u, l] }) }), n[4] = u, n[5] = l, n[6] = f;
  else f = n[6];
  return f;
}
function p9n({ isCancelling: c, hasFailed: t, isQuestionWaiting: i, isQueued: p, wasReturnPressed: n }) {
  return c ? "Cancelling\u2026" : t ? "Pause typing to see what went wrong" : i ? "A question is waiting. Pause typing to see it" : p ? "Your message will be sent once the session is ready" : n ? "Not sent. You can send your message once the session opens" : null;
}
function KSn(c) {
  let n = (0, import_chunk_sng02qpc.k)(9), { step: t, state: i, now: p } = c, u;
  if (n[0] !== p || n[1] !== i || n[2] !== t) u = (0, import_chunk_xkd0qe42.pUs)(t, i, p), n[0] = p, n[1] = i, n[2] = t, n[3] = u;
  else u = n[3];
  let m = u, l;
  if (n[4] !== t.status || n[5] !== m.annotation || n[6] !== m.detail || n[7] !== m.label) l = (0, import_chunk_a46xeenj.e)(import_chunk_46p385kd.ND, { status: t.status, label: m.label, annotation: m.annotation, detail: m.detail, detailOverflow: "wrap" }), n[4] = t.status, n[5] = m.annotation, n[6] = m.detail, n[7] = m.label, n[8] = l;
  else l = n[8];
  return l;
}
