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
var chunk_j8vrv0q8_exports = {};
__export(chunk_j8vrv0q8_exports, {
  $Sn: () => $Sn,
  Lpa: () => Lpa,
  Npa: () => Npa,
  P2: () => P2,
  a9n: () => a9n,
  z1r: () => z1r
});
module.exports = __toCommonJS(chunk_j8vrv0q8_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_2t5dst6n = require("/$bunfs/root/chunk-2t5dst6n.js");
var import_chunk_f3ymc800 = require("/$bunfs/root/chunk-f3ymc800.js");
var import_chunk_wvchre07 = require("/$bunfs/root/chunk-wvchre07.js");
var import_chunk_6fvsq616 = require("/$bunfs/root/chunk-6fvsq616.js");
var import_chunk_ykad4ek3 = require("/$bunfs/root/chunk-ykad4ek3.js");
var import_chunk_ma8jx6m7 = require("/$bunfs/root/chunk-ma8jx6m7.js");
var import_chunk_s7te3n3c = require("/$bunfs/root/chunk-s7te3n3c.js");
var import_chunk_z8dyhx9v = require("/$bunfs/root/chunk-z8dyhx9v.js");
var import_chunk_jczdrj4v = require("/$bunfs/root/chunk-jczdrj4v.js");
var import_chunk_mfm58fyw = require("/$bunfs/root/chunk-mfm58fyw.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_s73318k8 = require("/$bunfs/root/chunk-s73318k8.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_x3vhf8tp = require("/$bunfs/root/chunk-x3vhf8tp.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function P2({ isActive: w = true, asksNothing: v = false, onDrop: b, onTypedOver: i, shouldStayUp: C, onEnterLock: d, isOnDecline: P, leavesToDialog: S }) {
  let s = (0, import_chunk_8bkqeb5d.Xe)(), A = w && (v || !s);
  (0, import_chunk_f3ymc800.OF)(A);
  let D = (0, import_chunk_8bkqeb5d.si)(), n = (0, import_chunk_ykad4ek3.mx)(), Q = (0, import_chunk_bs4h6795.I)(false), u = (0, import_chunk_bs4h6795.I)(0), m = (0, import_chunk_bs4h6795.I)(false), l = (0, import_chunk_bs4h6795.I)([]), T = (0, import_chunk_bs4h6795.I)(false), h = (0, import_chunk_bs4h6795.I)(false);
  function q(f) {
    if (Q.current = true, u.current = Date.now(), i?.(), T.current = true, d?.(true), n !== void 0 && f !== "") {
      let t = (0, import_chunk_ma8jx6m7.tne)(n);
      if (t === "" && f.startsWith("!") && !m.current) m.current = true, (0, import_chunk_ma8jx6m7.jJt)(n, "bash"), (0, import_chunk_ma8jx6m7.DMe)(n, f.slice(1)), l.current.push(...f.slice(1));
      else (0, import_chunk_ma8jx6m7.DMe)(n, t + f), l.current.push(...f);
    }
  }
  function x() {
    h.current = true, b?.();
    let f = l.current.splice(0).join("");
    if (n !== void 0) {
      let t = (0, import_chunk_ma8jx6m7.tne)(n);
      if ((0, import_chunk_ma8jx6m7.DMe)(n, t.slice(0, t.length - f.length)), m.current) m.current = false, (0, import_chunk_ma8jx6m7.jJt)(n, "prompt");
    }
  }
  if ((0, import_chunk_6fvsq616.Pa)((f, t, E) => {
    let O = !(t.ctrl || t.meta || t.shift || t.super), z = (t.return || t.escape) && O;
    if (v && z) return h.current = false, false;
    if (v && t.backspace && n !== void 0) {
      let a = l.current.pop();
      if (a !== void 0) {
        let H = (0, import_chunk_ma8jx6m7.tne)(n);
        (0, import_chunk_ma8jx6m7.DMe)(n, H.slice(0, -a.length));
      } else if (m.current) m.current = false, (0, import_chunk_ma8jx6m7.jJt)(n, "prompt");
      return true;
    }
    if (d) {
      if ((t.upArrow || t.downArrow) && O) T.current = false, h.current = false, d(false);
      if (z) return t.return && P?.() !== true && (T.current || u.current !== 0 && (0, import_chunk_2t5dst6n.QK)(D, u.current, import_chunk_2t5dst6n.HF));
    }
    if (!z) {
      let a = f !== "" ? f : E;
      if (t.return || t.escape || /^(\[<\d[\d;-]*[Mm]?)+$/.test(a)) return true;
      if (v && a.length > 1 && !a.startsWith("\x1B") && new RegExp("\\p{Cc}", "u").test(a)) return x(), true;
      if (a === "" || t.ctrl || t.meta || t.super || t.wheelUp || t.wheelDown || new RegExp("\\p{Cc}", "u").test(a) || u.current === 0 && S?.(a) === true) return false;
      if (h.current ||= C?.() === true, v && (h.current || a.length > import_chunk_s7te3n3c.jL || n !== void 0 && !m.current && !(0, import_chunk_ma8jx6m7.Wsr)((0, import_chunk_ma8jx6m7.gE)(n)))) x();
      return q(a.length > import_chunk_s7te3n3c.jL || h.current ? "" : a), true;
    }
    if (Q.current || u.current !== 0 && (0, import_chunk_2t5dst6n.QK)(D, u.current, import_chunk_2t5dst6n.HF)) return Q.current = false, u.current = Date.now(), true;
    return false;
  }, { isActive: A }), !A) return;
  return v ? x : () => q("");
}
(0, import_chunk_adx6804h.B)();
var Lpa = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ question: (0, import_chunk_adx6804h.F)(["experience", "pace"]), experience: (0, import_chunk_adx6804h.F)(import_chunk_sjqze7qg.ZSt).optional() })), Npa = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.F)([...import_chunk_sjqze7qg.ZSt, ...import_chunk_sjqze7qg.ebt, "other_question", "skip", "cancelled"]));
async function z1r(w, v) {
  w.log("questions_shown");
  let b = "experience", i;
  while (true) {
    let C = await v({ question: b, experience: i });
    switch (C) {
      case "new":
      case "chat":
      case "tried":
      case "agents":
        i = C, b = "pace";
        break;
      case "other_question":
        b = b === "pace" ? "experience" : "pace";
        break;
      case "own":
      case "check":
      case "step":
        w.closeQuestions({ experience: i, pace: C, closedBy: "answer" });
        return;
      case "skip":
        w.closeQuestions({ experience: i, closedBy: "dismissal" });
        return;
      case "typing":
        w.closeQuestions({ experience: i, closedBy: "typing" });
        return;
      case "cancelled":
        return;
    }
  }
}
(0, import_chunk_bs4h6795.G)();
function $Sn(w) {
  let u = (0, import_chunk_sng02qpc.k)(37), { options: v, focusFirst: b, escape: i, navigationHint: C, isOverPrompt: d, onDone: P } = w, S = (0, import_chunk_vs99e3g5.$l)(), s = (0, import_chunk_mfm58fyw.mg)(P), A = (0, import_chunk_8bkqeb5d.si)(), D = (0, import_chunk_z8dyhx9v.Zu)(), { refusedWithin: n, noteRefused: Q } = (0, import_chunk_z8dyhx9v.po)(), m;
  if (u[0] !== A || u[1] !== Q || u[2] !== D || u[3] !== n) m = () => {
    if ((0, import_chunk_2t5dst6n.Ha)(A, D(), import_chunk_2t5dst6n.HF) || n(import_chunk_2t5dst6n.HF)) {
      return Q(), true;
    }
    return false;
  }, u[0] = A, u[1] = Q, u[2] = D, u[3] = n, u[4] = m;
  else m = u[4];
  let l = m, T = (0, import_chunk_bs4h6795.be)(import_chunk_2t5dst6n.TO), [h, q] = (0, import_chunk_bs4h6795.y)(false), x;
  if (u[5] !== T) x = () => (T?.getState().open.length ?? 0) > 1, u[5] = T, u[6] = x;
  else x = u[6];
  let f;
  if (u[7] !== d || u[8] !== x) f = { isActive: d, onEnterLock: q, shouldStayUp: x }, u[7] = d, u[8] = x, u[9] = f;
  else f = u[9];
  let t = P2(f);
  const E = s.refused ?? b;
  let O;
  if (u[10] !== l || u[11] !== s) O = (z) => {
    if (l()) s.refuse(z);
    else s.answer(z);
  }, u[10] = l, u[11] = s, u[12] = O;
  else O = u[12];
  let a;
  if (u[13] !== i || u[14] !== P || u[15] !== l) a = () => {
    if (!l()) P(i.value);
  }, u[13] = i, u[14] = P, u[15] = l, u[16] = a;
  else a = u[16];
  let H;
  if (u[17] !== d || u[18] !== v || u[19] !== l || u[20] !== s.attempts || u[21] !== E || u[22] !== O || u[23] !== a) H = (0, import_chunk_a46xeenj.e)(import_chunk_s73318k8.ct, { layout: "compact-vertical", options: v, defaultFocusValue: E, hideIndexes: d, disablePrintableKeybindings: true, refuseInput: l, onChange: O, onCancel: a }, s.attempts), u[17] = d, u[18] = v, u[19] = l, u[20] = s.attempts, u[21] = E, u[22] = O, u[23] = a, u[24] = H;
  else H = u[24];
  let W;
  if (u[25] !== i || u[26] !== S.keyName || u[27] !== S.pending || u[28] !== h || u[29] !== C) W = S.pending ? `Press ${S.keyName} again to exit` : (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [h ? (0, import_chunk_a46xeenj.e)(import_chunk_f3ymc800.Qce, {}) : (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "enter", action: "select" }), C, (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "escape", action: i.action })] }), u[25] = i, u[26] = S.keyName, u[27] = S.pending, u[28] = h, u[29] = C, u[30] = W;
  else W = u[30];
  let N;
  if (u[31] !== W) N = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: W }), u[31] = W, u[32] = N;
  else N = u[32];
  let te;
  if (u[33] !== t || u[34] !== H || u[35] !== N) te = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", gap: 1, onPaste: t, children: [H, N] }), u[33] = t, u[34] = H, u[35] = N, u[36] = te;
  else te = u[36];
  return te;
}
function ye(a) {
  return { value: a, label: import_chunk_x3vhf8tp.KQs[a] };
}
function Pe(w) {
  let { pace: H, ...W } = w;
  return { value: H, ...W };
}
function a9n(w) {
  let s = (0, import_chunk_sng02qpc.k)(30), { asked: v, isOverPrompt: b, onDone: i } = w, { question: C, experience: d } = v, P = C === "experience", S = (0, import_chunk_z8dyhx9v.Ns)(), A;
  if (s[0] !== S || s[1] !== i) A = () => {
    if (!S()) i("other_question");
  }, s[0] = S, s[1] = i, s[2] = A;
  else A = s[2];
  let D = A;
  const n = P ? 1 : 2;
  let Q;
  if (s[3] !== n) Q = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["Question ", n, " of 2"] }), s[3] = n, s[4] = Q;
  else Q = s[4];
  const u = P ? import_chunk_x3vhf8tp.zQs : import_chunk_x3vhf8tp.qQs;
  let m;
  if (s[5] !== u) m = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: u }), s[5] = u, s[6] = m;
  else m = s[6];
  const l = P ? import_chunk_x3vhf8tp.VQs : import_chunk_x3vhf8tp.YQs;
  let T;
  if (s[7] !== l) T = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: l }), s[7] = l, s[8] = T;
  else T = s[8];
  let h;
  if (s[9] !== m || s[10] !== T) h = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: [m, T] }), s[9] = m, s[10] = T, s[11] = h;
  else h = s[11];
  let q;
  if (s[12] !== D) q = [{ action: "tabs:next", run: D }, { action: "tabs:previous", run: D }], s[12] = D, s[13] = q;
  else q = s[13];
  let x;
  if (s[14] !== d || s[15] !== P) x = P ? import_chunk_sjqze7qg.ZSt.map(ye) : (0, import_chunk_x3vhf8tp.XQs)(d).map(Pe), s[14] = d, s[15] = P, s[16] = x;
  else x = s[16];
  const f = P ? d : void 0;
  let t;
  if (s[17] === import_chunk_w1d7ygsk.R) t = { value: "skip", action: "skip" }, s[17] = t;
  else t = s[17];
  let E;
  if (s[18] !== b || s[19] !== i || s[20] !== x || s[21] !== f) E = (0, import_chunk_a46xeenj.e)($Sn, { options: x, focusFirst: f, escape: t, navigationHint: "Tab/Arrow keys to navigate", isOverPrompt: b, onDone: i }), s[18] = b, s[19] = i, s[20] = x, s[21] = f, s[22] = E;
  else E = s[22];
  let O;
  if (s[23] !== q || s[24] !== E) O = (0, import_chunk_a46xeenj.e)(import_chunk_jczdrj4v.zi, { scope: "Tabs", bindings: q, children: E }), s[23] = q, s[24] = E, s[25] = O;
  else O = s[25];
  let z;
  if (s[26] !== O || s[27] !== Q || s[28] !== h) z = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", gap: 1, children: [Q, h, O] }), s[26] = O, s[27] = Q, s[28] = h, s[29] = z;
  else z = s[29];
  return z;
}
