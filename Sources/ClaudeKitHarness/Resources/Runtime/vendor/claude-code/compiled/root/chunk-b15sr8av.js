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
var chunk_b15sr8av_exports = {};
__export(chunk_b15sr8av_exports, {
  A5t: () => A5t,
  B3: () => B3,
  D_: () => D_,
  FOt: () => FOt,
  R5t: () => R5t,
  mBr: () => mBr,
  x5t: () => x5t,
  xh: () => xh
});
module.exports = __toCommonJS(chunk_b15sr8av_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_m4hfkeet = require("/$bunfs/root/chunk-m4hfkeet.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_f3ymc800 = require("/$bunfs/root/chunk-f3ymc800.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_wvchre07 = require("/$bunfs/root/chunk-wvchre07.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_jczdrj4v = require("/$bunfs/root/chunk-jczdrj4v.js");
var import_chunk_5h92z04c = require("/$bunfs/root/chunk-5h92z04c.js");
var import_chunk_s73318k8 = require("/$bunfs/root/chunk-s73318k8.js");
var import_chunk_65494s25 = require("/$bunfs/root/chunk-65494s25.js");
var import_chunk_sxscgpaq = require("/$bunfs/root/chunk-sxscgpaq.js");
var import_chunk_46p385kd = require("/$bunfs/root/chunk-46p385kd.js");
var import_chunk_fcw9a1xz = require("/$bunfs/root/chunk-fcw9a1xz.js");
var import_chunk_dw56fm8m = require("/$bunfs/root/chunk-dw56fm8m.js");
var import_chunk_zj98tvrk = require("/$bunfs/root/chunk-zj98tvrk.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
var ue = (0, import_chunk_bs4h6795.an)(null);
function FOt(v) {
  let u = (0, import_chunk_sng02qpc.k)(24), { steps: t, stepProps: a, initialData: d, onCancel: l, title: n, exitOnCtrlCD: i } = v, f;
  if (u[0] !== d) f = d === void 0 ? {} : d, u[0] = d, u[1] = f;
  else f = u[1];
  let p = f, x = i === void 0 ? false : i, m = (0, import_chunk_m4hfkeet.Nse)(0, l), [g, b] = (0, import_chunk_bs4h6795.y)(p), S = (0, import_chunk_vs99e3g5.$l)(x ? void 0 : l), c = S.pending ? `Press ${S.keyName} again to ${x ? "exit" : "cancel"}` : null, F;
  if (u[2] === import_chunk_w1d7ygsk.R) F = (N) => b((W) => ({ ...W, ...N })), u[2] = F;
  else F = u[2];
  let A;
  if (u[3] !== m) A = () => m.push(m.top + 1), u[3] = m, u[4] = A;
  else A = u[4];
  let L;
  if (u[5] !== m) L = (Je) => m.push(Je), u[5] = m, u[6] = L;
  else L = u[6];
  let se;
  if (u[7] !== c || u[8] !== m.back || u[9] !== m.top || u[10] !== A || u[11] !== L || u[12] !== n || u[13] !== g) se = { currentStepIndex: m.top, wizardData: g, updateWizardData: F, goNext: A, goBack: m.back, goToStep: L, title: n, pendingExitHint: c }, u[7] = c, u[8] = m.back, u[9] = m.top, u[10] = A, u[11] = L, u[12] = n, u[13] = g, u[14] = se;
  else se = u[14];
  let J = se, P;
  if (u[15] !== a || u[16] !== t) P = (w) => {
    let h = t[w];
    return h && (0, import_chunk_a46xeenj.e)(h, { ...a });
  }, u[15] = a, u[16] = t, u[17] = P;
  else P = u[17];
  let M;
  if (u[18] !== m || u[19] !== P) M = (0, import_chunk_a46xeenj.e)(import_chunk_f3ymc800.EIt, { value: true, children: (0, import_chunk_a46xeenj.e)(import_chunk_m4hfkeet.vZe, { stack: m, children: P }) }), u[18] = m, u[19] = P, u[20] = M;
  else M = u[20];
  let O;
  if (u[21] !== J || u[22] !== M) O = (0, import_chunk_a46xeenj.e)(ue.Provider, { value: J, children: M }), u[21] = J, u[22] = M, u[23] = O;
  else O = u[23];
  return O;
}
function xh() {
  let v = (0, import_chunk_bs4h6795.be)(ue);
  if (!v) throw Error("useWizard must be used within a WizardProvider");
  return v;
}
function D_(v) {
  let S = (0, import_chunk_sng02qpc.k)(18), { color: t, children: a, subtitle: d, enterAction: l, takesEscape: n } = v, i = l === void 0 ? "select" : l, u = n === void 0 ? false : n, { currentStepIndex: f, title: p, goBack: x, pendingExitHint: m } = xh(), g = p || "Wizard", b = f > 0 ? "go back" : "cancel", c;
  if (S[0] !== b || S[1] !== x || S[2] !== u) c = u ? [{ action: "confirm:no", hint: b, run: x }] : void 0, S[0] = b, S[1] = x, S[2] = u, S[3] = c;
  else c = S[3];
  let F;
  if (S[4] !== m) F = m && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, italic: true, children: m }), S[4] = m, S[5] = F;
  else F = S[5];
  let N;
  if (S[6] !== i || S[7] !== b || S[8] !== F) N = (0, import_chunk_a46xeenj.e)(import_chunk_jczdrj4v.Rm, { enterAction: i, escapeAction: b, marginTop: 0, children: F }), S[6] = i, S[7] = b, S[8] = F, S[9] = N;
  else N = S[9];
  let W;
  if (S[10] !== a || S[11] !== t || S[12] !== x || S[13] !== d || S[14] !== c || S[15] !== N || S[16] !== g) W = (0, import_chunk_a46xeenj.o)(import_chunk_vs99e3g5.Oe, { title: g, subtitle: d, onCancel: x, color: t, keys: c, hideInputGuide: true, isCancelActive: false, children: [a, N] }), S[10] = a, S[11] = t, S[12] = x, S[13] = d, S[14] = c, S[15] = N, S[16] = g, S[17] = W;
  else W = S[17];
  return W;
}
function gn(v) {
  let [c, F] = v;
  return (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "suggestion", children: c }), " = ", F] }, c);
}
function A5t(v) {
  let l = (0, import_chunk_sng02qpc.k)(27), { result: t } = v, { goNext: a, goBack: d } = xh();
  if (t.status === "ok") {
    let n2;
    if (l[0] !== t.identity) n2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: t.identity }), l[0] = t.identity, l[1] = n2;
    else n2 = l[1];
    let i2;
    if (l[2] !== t.note || l[3] !== n2) i2 = (0, import_chunk_a46xeenj.o)(import_chunk_zj98tvrk.tt, { status: "success", detail: t.note, children: ["Authenticated as ", n2] }), l[2] = t.note, l[3] = n2, l[4] = i2;
    else i2 = l[4];
    let u2;
    if (l[5] === import_chunk_w1d7ygsk.R) u2 = [{ label: "Continue", value: "continue" }], l[5] = u2;
    else u2 = l[5];
    let f2;
    if (l[6] !== a) f2 = () => a(), l[6] = a, l[7] = f2;
    else f2 = l[7];
    let p2;
    if (l[8] !== d || l[9] !== f2) p2 = (0, import_chunk_a46xeenj.e)(import_chunk_s73318k8.ct, { hideIndexes: true, options: u2, onChange: f2, onCancel: d }), l[8] = d, l[9] = f2, l[10] = p2;
    else p2 = l[10];
    let x;
    if (l[11] !== i2 || l[12] !== p2) x = (0, import_chunk_a46xeenj.o)(D_, { subtitle: "Verification", enterAction: "continue", children: [i2, p2] }), l[11] = i2, l[12] = p2, l[13] = x;
    else x = l[13];
    return x;
  }
  let n;
  if (l[14] !== t.error) n = (0, import_chunk_a46xeenj.e)(import_chunk_zj98tvrk.tt, { status: "error", children: t.error }), l[14] = t.error, l[15] = n;
  else n = l[15];
  let i;
  if (l[16] !== t.command) i = t.command && (0, import_chunk_a46xeenj.e)(import_chunk_fcw9a1xz.ks, { children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, color: "suggestion", children: t.command }) }), l[16] = t.command, l[17] = i;
  else i = l[17];
  let u;
  if (l[18] !== n || l[19] !== i) u = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [n, i] }), l[18] = n, l[19] = i, l[20] = u;
  else u = l[20];
  let f;
  if (l[21] !== d || l[22] !== a) f = (0, import_chunk_a46xeenj.e)(import_chunk_65494s25.ar, { hideIndexes: true, cancelFirst: true, focus: "cancel", confirmLabel: "Save anyway (skip verification)", cancelLabel: "Go back and fix", onConfirm: a, onCancel: d }), l[21] = d, l[22] = a, l[23] = f;
  else f = l[23];
  let p;
  if (l[24] !== u || l[25] !== f) p = (0, import_chunk_a46xeenj.o)(D_, { subtitle: "Verification failed", color: "error", children: [u, f] }), l[24] = u, l[25] = f, l[26] = p;
  else p = l[26];
  return p;
}
function R5t(v) {
  let u = (0, import_chunk_sng02qpc.k)(19), { settingsPath: t, entries: a, verifiedIdentity: d, saveError: l, onSave: n } = v, { goBack: i } = xh(), f;
  if (u[0] !== t) f = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["These will be written to ", t, " under env:"] }), u[0] = t, u[1] = f;
  else f = u[1];
  let p;
  if (u[2] !== a) p = a.map(gn), u[2] = a, u[3] = p;
  else p = u[3];
  let x;
  if (u[4] !== p) x = (0, import_chunk_a46xeenj.e)(import_chunk_fcw9a1xz.ks, { children: p }), u[4] = p, u[5] = x;
  else x = u[5];
  let m;
  if (u[6] !== d) m = d && (0, import_chunk_a46xeenj.o)(import_chunk_zj98tvrk.tt, { status: "success", children: ["Verified as ", d] }), u[6] = d, u[7] = m;
  else m = u[7];
  let g;
  if (u[8] !== l) g = (0, import_chunk_a46xeenj.e)(import_chunk_dw56fm8m.Ca, { error: l }), u[8] = l, u[9] = g;
  else g = u[9];
  let b;
  if (u[10] !== i || u[11] !== n) b = (0, import_chunk_a46xeenj.e)(import_chunk_65494s25.ar, { confirmLabel: "Save", cancelLabel: "Cancel", onConfirm: n, onCancel: i }), u[10] = i, u[11] = n, u[12] = b;
  else b = u[12];
  let S;
  if (u[13] !== f || u[14] !== x || u[15] !== m || u[16] !== g || u[17] !== b) S = (0, import_chunk_a46xeenj.o)(D_, { subtitle: "Confirm and save", children: [f, x, m, g, b] }), u[13] = f, u[14] = x, u[15] = m, u[16] = g, u[17] = b, u[18] = S;
  else S = u[18];
  return S;
}
var B3 = ["sonnet", "opus", "haiku", "fable"];
function Ne() {
  return { sonnet: import_chunk_c203g5kd.s.ANTHROPIC_DEFAULT_SONNET_MODEL, opus: import_chunk_c203g5kd.s.ANTHROPIC_DEFAULT_OPUS_MODEL, haiku: import_chunk_c203g5kd.s.ANTHROPIC_DEFAULT_HAIKU_MODEL, fable: import_chunk_c203g5kd.s.ANTHROPIC_DEFAULT_FABLE_MODEL };
}
(0, import_chunk_bs4h6795.G)();
function Gn(ce) {
  return [ce, "pending"];
}
function x5t(v) {
  let i = (0, import_chunk_sng02qpc.k)(68), { provider: t, onPins: a } = v, { goBack: d, goNext: l, wizardData: n } = xh(), u;
  if (i[0] !== t || i[1] !== n) u = () => t.resolveTierDefaults(n), i[0] = t, i[1] = n, i[2] = u;
  else u = i[2];
  let [f] = (0, import_chunk_bs4h6795.y)(u), [p] = (0, import_chunk_bs4h6795.y)(Ne), x;
  if (i[3] !== f || i[4] !== p) x = () => Object.fromEntries(B3.map((m) => [m, p[m] ?? f[m].auto ?? f[m].fallback])), i[3] = f, i[4] = p, i[5] = x;
  else x = i[5];
  let [g, b] = (0, import_chunk_bs4h6795.y)(x), S;
  if (i[6] === import_chunk_w1d7ygsk.R) S = { sonnet: "pending", opus: "pending", haiku: "pending", fable: "pending" }, i[6] = S;
  else S = i[6];
  let [c, F] = (0, import_chunk_bs4h6795.y)(S), [N, W] = (0, import_chunk_bs4h6795.y)("summary"), A;
  if (i[7] !== g || i[8] !== t || i[9] !== n) A = B3.map((L) => (0, import_chunk_a46xeenj.e)(qe, { candidate: g[L], probe: (Je) => t.probe(n, Je), onState: (se) => F((J) => ({ ...J, [L]: se })) }, L)), i[7] = g, i[8] = t, i[9] = n, i[10] = A;
  else A = i[10];
  let P = A;
  if (N !== "summary") {
    let w = N.picking;
    const h2 = f[w];
    const M2 = g[w];
    const O2 = p[w];
    let C2;
    if (i[11] !== w) C2 = (Qe) => {
      b((It) => ({ ...It, [w]: Qe }));
      let Wt = B3.indexOf(w);
      let E = B3[Wt + 1];
      W(E ? { picking: E } : "summary");
    }, i[11] = w, i[12] = C2;
    else C2 = i[12];
    let T2;
    if (i[13] === import_chunk_w1d7ygsk.R) T2 = () => W("summary"), i[13] = T2;
    else T2 = i[13];
    let z2;
    if (i[14] !== t || i[15] !== h2.fallback || i[16] !== M2 || i[17] !== O2 || i[18] !== C2 || i[19] !== w || i[20] !== n) z2 = (0, import_chunk_a46xeenj.e)(Ge, { tier: w, provider: t, wizardData: n, fallback: h2.fallback, current: M2, existingPin: O2, onPick: C2, onCancel: T2 }, w), i[14] = t, i[15] = h2.fallback, i[16] = M2, i[17] = O2, i[18] = C2, i[19] = w, i[20] = n, i[21] = z2;
    else z2 = i[21];
    let D2;
    if (i[22] !== P || i[23] !== z2) D2 = (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [P, z2] }), i[22] = P, i[23] = z2, i[24] = D2;
    else D2 = i[24];
    return D2;
  }
  let h;
  if (i[25] !== c) h = B3.every((ye) => c[ye] !== "pending"), i[25] = c, i[26] = h;
  else h = i[26];
  let he = h, M;
  if (i[27] !== he || i[28] !== c) M = he && B3.some((Ce) => c[Ce] !== "pending" && c[Ce].ok), i[27] = he, i[28] = c, i[29] = M;
  else M = i[29];
  let I = M, O;
  if (i[30] !== I || i[31] !== g || i[32] !== c) O = I && B3.some((de) => {
    let X = c[de];
    return X !== "pending" && X.ok && ve(g[de]);
  }), i[30] = I, i[31] = g, i[32] = c, i[33] = O;
  else O = i[33];
  let _ = O, C;
  if (i[34] !== g || i[35] !== l || i[36] !== a || i[37] !== c) C = (B) => {
    if (B === "manual") {
      W({ picking: "sonnet" });
      return;
    }
    if (B === "pin" || B === "pin1m") {
      let ce = (Y) => {
        let Z = c[Y];
        if (Z === "pending" || !Z.ok) {
          return;
        }
        let le = g[Y];
        return B === "pin1m" && ve(le) ? Ct(le) : le;
      };
      a({ pinSonnet: ce("sonnet"), pinOpus: ce("opus"), pinHaiku: ce("haiku"), pinFable: ce("fable") });
    } else a({ pinSonnet: void 0, pinOpus: void 0, pinHaiku: void 0, pinFable: void 0 });
    l();
  }, i[34] = g, i[35] = l, i[36] = a, i[37] = c, i[38] = C;
  else C = i[38];
  let Xe = C, T;
  if (i[39] !== t.intro) T = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: t.intro }), i[39] = t.intro, i[40] = T;
  else T = i[40];
  let z;
  if (i[41] === import_chunk_w1d7ygsk.R) z = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "Each candidate is tested with a one-token request:" }), i[41] = z;
  else z = i[41];
  let D;
  if (i[42] !== g || i[43] !== c || i[44] !== t.reasonLabel) D = B3.map((we) => {
    let pe = c[we];
    return (0, import_chunk_a46xeenj.e)(import_chunk_46p385kd.ND, { status: pe === "pending" ? "running" : pe.ok ? "completed" : "failed", label: import_chunk_sxscgpaq.vW[we], annotation: ` \xB7 ${g[we]}${pe === "pending" || pe.ok ? "" : ` \xB7 ${t.reasonLabel[pe.reason]}`}` }, we);
  }), i[42] = g, i[43] = c, i[44] = t.reasonLabel, i[45] = D;
  else D = i[45];
  let De;
  if (i[46] !== D) De = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [z, D] }), i[46] = D, i[47] = De;
  else De = i[47];
  let Se;
  if (i[48] !== I) Se = I ? [{ label: "Pin the working models", value: "pin" }] : [], i[48] = I, i[49] = Se;
  else Se = i[49];
  let Re;
  if (i[50] !== _) Re = _ ? [{ label: "Pin the working models with 1M context", value: "pin1m" }] : [], i[50] = _, i[51] = Re;
  else Re = i[51];
  let At, Lt;
  if (i[52] === import_chunk_w1d7ygsk.R) At = { label: "Choose different models\u2026", value: "manual" }, Lt = { label: "Skip \u2014 use Claude Code defaults (auto-updates)", value: "skip" }, i[52] = At, i[53] = Lt;
  else At = i[52], Lt = i[53];
  let ze;
  if (i[54] !== Se || i[55] !== Re) ze = [...Se, ...Re, At, Lt], i[54] = Se, i[55] = Re, i[56] = ze;
  else ze = i[56];
  let Me;
  if (i[57] !== d || i[58] !== Xe || i[59] !== ze) Me = (0, import_chunk_a46xeenj.e)(import_chunk_s73318k8.ct, { declineValue: "skip", options: ze, onChange: Xe, onCancel: d }), i[57] = d, i[58] = Xe, i[59] = ze, i[60] = Me;
  else Me = i[60];
  let Fe;
  if (i[61] !== De || i[62] !== Me || i[63] !== T) Fe = (0, import_chunk_a46xeenj.o)(D_, { subtitle: "Pin model versions", children: [T, De, Me] }), i[61] = De, i[62] = Me, i[63] = T, i[64] = Fe;
  else Fe = i[64];
  let Et;
  if (i[65] !== P || i[66] !== Fe) Et = (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [P, Fe] }), i[65] = P, i[66] = Fe, i[67] = Et;
  else Et = i[67];
  return Et;
}
function ve(v) {
  return (0, import_chunk_865at33z.LGe)(v) && !(0, import_chunk_865at33z.dI)(v, { byItsOwnName: true });
}
function Ct(v) {
  return /\[1m\]$/i.test(v) ? v : `${v}[1m]`;
}
function qe(v) {
  let l = (0, import_chunk_sng02qpc.k)(6), { candidate: t, probe: a, onState: d } = v, n;
  if (l[0] !== t || l[1] !== d || l[2] !== a) n = () => {
    let i = false;
    return d("pending"), a(t).then((u) => {
      if (!i) d(u);
    }), () => {
      i = true;
    };
  }, l[0] = t, l[1] = d, l[2] = a, l[3] = n;
  else n = l[3];
  let f;
  if (l[4] !== t) f = [t], l[4] = t, l[5] = f;
  else f = l[5];
  return (0, import_chunk_bs4h6795.H)(n, f), null;
}
function Ge(v) {
  let p = (0, import_chunk_sng02qpc.k)(64), { tier: t, provider: a, wizardData: d, fallback: l, current: n, existingPin: i, onPick: u, onCancel: f } = v, x;
  if (p[0] !== n || p[1] !== i || p[2] !== l || p[3] !== a || p[4] !== t || p[5] !== d) x = () => {
    let m = a.listTierCandidates(t, d);
    for (const g of [l, n, i]) {
      if (g && !m.includes(g)) m.push(g);
    }
    return m;
  }, p[0] = n, p[1] = i, p[2] = l, p[3] = a, p[4] = t, p[5] = d, p[6] = x;
  else x = p[6];
  let [b] = (0, import_chunk_bs4h6795.y)(x), S;
  if (p[7] !== b) S = () => Object.fromEntries(b.map(Gn)), p[7] = b, p[8] = S;
  else S = p[8];
  let [c, F] = (0, import_chunk_bs4h6795.y)(S), N;
  if (p[9] !== b || p[10] !== a || p[11] !== d) N = () => {
    let W = false;
    for (const A of b) a.probe(d, A).then((L) => {
      if (!W) F((Je) => ({ ...Je, [A]: L }));
    });
    return () => {
      W = true;
    };
  }, p[9] = b, p[10] = a, p[11] = d, p[12] = N;
  else N = p[12];
  let se;
  if (p[13] === import_chunk_w1d7ygsk.R) se = [], p[13] = se;
  else se = p[13];
  (0, import_chunk_bs4h6795.H)(N, se);
  let J;
  if (p[14] !== b || p[15] !== c) {
    let P2;
    if (p[17] !== c) P2 = (w) => c[w] !== "pending", p[17] = c, p[18] = P2;
    else P2 = p[18];
    J = b.every(P2);
    p[14] = b, p[15] = c, p[16] = J;
  } else J = p[16];
  let h = J, P;
  if (p[19] !== c) P = (M) => {
    let O = c[M];
    return O !== void 0 && O !== "pending" && O.ok;
  }, p[19] = c, p[20] = P;
  else P = p[20];
  let C = P, Qe;
  if (p[21] !== h || p[22] !== b || p[23] !== C) Qe = h ? b.toSorted((It, Wt) => (C(It) ? 0 : 1) - (C(Wt) ? 0 : 1)) : b, p[21] = h, p[22] = b, p[23] = C, p[24] = Qe;
  else Qe = p[24];
  let E = Qe, T;
  if (p[25] !== n || p[26] !== i || p[27] !== l || p[28] !== c || p[29] !== a.reasonLabel || p[30] !== E) {
    let z2;
    if (p[32] !== n || p[33] !== i || p[34] !== l || p[35] !== c || p[36] !== a.reasonLabel) z2 = (D) => ({ value: D, label: (0, import_chunk_a46xeenj.e)(Ke, { id: D, state: c[D] ?? "pending", reasonLabel: a.reasonLabel, suffix: D === i ? "currently pinned" : D === l ? "built-in default" : D === n ? "selected" : void 0 }) }), p[32] = n, p[33] = i, p[34] = l, p[35] = c, p[36] = a.reasonLabel, p[37] = z2;
    else z2 = p[37];
    T = E.map(z2);
    p[25] = n, p[26] = i, p[27] = l, p[28] = c, p[29] = a.reasonLabel, p[30] = E, p[31] = T;
  } else T = p[31];
  let ye = T, z;
  if (p[38] !== n || p[39] !== l || p[40] !== C || p[41] !== a.preferOnSettle || p[42] !== E) z = () => {
    for (const he of a.preferOnSettle ?? []) {
      let Ce = he === "current" ? n : l;
      if (C(Ce)) {
        return Ce;
      }
    }
    return E.find(C);
  }, p[38] = n, p[39] = l, p[40] = C, p[41] = a.preferOnSettle, p[42] = E, p[43] = z;
  else z = p[43];
  let I = z;
  const de = `Pin ${import_chunk_sxscgpaq.vW[t]} model`;
  let X;
  if (p[44] !== a || p[45] !== t || p[46] !== d) X = a.pickerSubtitle(t, d), p[44] = a, p[45] = t, p[46] = d, p[47] = X;
  else X = p[47];
  let _;
  if (p[48] !== X) _ = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: X }), p[48] = X, p[49] = _;
  else _ = p[49];
  const B = h ? "settled" : "pending";
  let Y;
  if (p[50] !== h || p[51] !== n || p[52] !== I) Y = h ? I() : n, p[50] = h, p[51] = n, p[52] = I, p[53] = Y;
  else Y = p[53];
  let Z;
  if (p[54] !== f || p[55] !== u || p[56] !== ye || p[57] !== B || p[58] !== Y) Z = (0, import_chunk_a46xeenj.e)(import_chunk_s73318k8.ct, { options: ye, defaultValue: Y, onChange: u, onCancel: f }, B), p[54] = f, p[55] = u, p[56] = ye, p[57] = B, p[58] = Y, p[59] = Z;
  else Z = p[59];
  let le;
  if (p[60] !== de || p[61] !== _ || p[62] !== Z) le = (0, import_chunk_a46xeenj.o)(D_, { subtitle: de, children: [_, Z] }), p[60] = de, p[61] = _, p[62] = Z, p[63] = le;
  else le = p[63];
  return le;
}
function Ke(v) {
  let u = (0, import_chunk_sng02qpc.k)(12), { id: t, state: a, suffix: d, reasonLabel: l } = v, n = a !== "pending" && !a.ok;
  const i = a === "pending" ? "pending" : a.ok ? "success" : "error";
  let f;
  if (u[0] !== i) f = (0, import_chunk_a46xeenj.e)(import_chunk_5h92z04c.ln, { status: i, withSpace: true }), u[0] = i, u[1] = f;
  else f = u[1];
  const p = n && l[a.reason];
  let x;
  if (u[2] !== d) x = d && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: d }), u[2] = d, u[3] = x;
  else x = u[3];
  let m;
  if (u[4] !== t || u[5] !== p || u[6] !== x) m = (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [t, p, x] }), u[4] = t, u[5] = p, u[6] = x, u[7] = m;
  else m = u[7];
  let g;
  if (u[8] !== n || u[9] !== f || u[10] !== m) g = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: n, children: [f, m] }), u[8] = n, u[9] = f, u[10] = m, u[11] = g;
  else g = u[11];
  return g;
}
async function mBr(v, t, a) {
  let d;
  try {
    d = await v();
  } catch (l) {
    return { ok: false, reason: a(l) };
  }
  try {
    return await d.messages.create({ model: (0, import_chunk_zmb62hr5.Yt)(t), max_tokens: 1, messages: [{ role: "user", content: "." }] }), { ok: true };
  } catch (l) {
    let n = l?.status;
    if (n === 401) return { ok: false, reason: "auth" };
    if (n === 403) return { ok: false, reason: "permission" };
    if (n === 400 || n === 404) return { ok: false, reason: "model" };
    if (n === 429) return { ok: true };
    if (n === void 0) return { ok: false, reason: "network" };
    return { ok: false, reason: "other" };
  }
}
