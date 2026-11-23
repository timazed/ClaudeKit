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
var chunk_z0tmmwht_exports = {};
__export(chunk_z0tmmwht_exports, {
  Abn: () => Abn,
  Cbn: () => Cbn,
  Ise: () => Ise,
  Rbn: () => Rbn,
  cZe: () => cZe,
  dZe: () => dZe,
  e$o: () => e$o,
  lZe: () => lZe,
  nmt: () => nmt,
  t$o: () => t$o
});
module.exports = __toCommonJS(chunk_z0tmmwht_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_k59mf0h7 = require("/$bunfs/root/chunk-k59mf0h7.js");
var import_chunk_2t5dst6n = require("/$bunfs/root/chunk-2t5dst6n.js");
var import_chunk_f3ymc800 = require("/$bunfs/root/chunk-f3ymc800.js");
var import_chunk_wvchre07 = require("/$bunfs/root/chunk-wvchre07.js");
var import_chunk_n7e3hgnx = require("/$bunfs/root/chunk-n7e3hgnx.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_9js1xpg4 = require("/$bunfs/root/chunk-9js1xpg4.js");
var import_chunk_6fvsq616 = require("/$bunfs/root/chunk-6fvsq616.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_jczdrj4v = require("/$bunfs/root/chunk-jczdrj4v.js");
var import_chunk_jbkqy09y = require("/$bunfs/root/chunk-jbkqy09y.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_s73318k8 = require("/$bunfs/root/chunk-s73318k8.js");
var import_chunk_d4d82adx = require("/$bunfs/root/chunk-d4d82adx.js");
var import_chunk_8z6a79mx = require("/$bunfs/root/chunk-8z6a79mx.js");
var import_chunk_dw56fm8m = require("/$bunfs/root/chunk-dw56fm8m.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
var Ise = { SAVED: "Saved", ALREADY_SET_ELSEWHERE: "This was already your answer.", NOT_SAVED_CHANGED_ELSEWHERE: "Not saved, because this setting changed somewhere else.", SAVE_FAILED: "Couldn't save your choice. Please try again.", NOT_ELIGIBLE: "Not saved. This choice isn't available to you." };
function lZe(l) {
  return l === "SAVE_FAILED" ? "Couldn't save your choice." : Ise[l];
}
var Cbn = "Your choice may not have been saved. Check it on claude.ai, signed in to the account you chose it for.", Ye = "Not available for this account.", dZe = { ORGANIZATION_TYPE: Ye, ORGANIZATION_POLICY: Ye, ACCOUNT_POLICY: Ye, GENERIC: "Can't be turned on right now." };
(0, import_chunk_bs4h6795.G)();
function Vt(Nn) {
  return Nn + 1;
}
function Kt(Pn) {
  return Pn + 1;
}
var Eo = 4;
function ge() {
  let l = import_chunk_8bkqeb5d.wP.currentEvent;
  return l instanceof import_chunk_8bkqeb5d.pW && l.soloKeypress === false;
}
function nmt(l) {
  let _ = (0, import_chunk_sng02qpc.k)(53), { onLabel: s, offLabel: i, startsOn: n, saved: t, preselection: m, takesKeys: j, isSaving: O, isInSettings: c, movesToOffOnText: S, onChoose: p, onCancel: b, onFocus: D } = l, A = O === void 0 ? false : O, ve = c === void 0 ? false : c, N = S === void 0 ? false : S, P = (0, import_chunk_8bkqeb5d.Xe)(), v = (0, import_chunk_6n6exvyx.rR)(), h = ve && !P ? v : null, d;
  if (_[0] === import_chunk_w1d7ygsk.R) d = { rows: 0, columns: 0 }, _[0] = d;
  else d = _[0];
  let { rows: ne } = (0, import_chunk_6n6exvyx.Qo)(d), V = (0, import_chunk_bs4h6795.I)(null), he;
  if (_[1] !== h?.handle || _[2] !== ne) he = function Y2() {
    let W = h?.handle;
    if (!W) {
      return true;
    }
    let u = W.getDomElement();
    let fe = 0;
    for (let w = V.current ?? void 0; w && w !== u; w = w.parentNode) fe = fe + (w.yogaNode?.getComputedTop() ?? 0);
    let M = V.current?.yogaNode?.getComputedHeight() ?? 0;
    let se = Math.min(W.getViewportHeight(), ne + Eo);
    let q = Math.min(W.getScrollTop(), Math.max(0, W.getFreshScrollHeight() - se));
    return M > 0 && fe >= q && fe + M <= q + se;
  }, _[1] = h?.handle, _[2] = ne, _[3] = he;
  else he = _[3];
  let Y = he, { refuseInput: K } = (0, import_chunk_d4d82adx.sY)(Y), x;
  if (_[4] !== K) x = (J, Q, ie) => /\r\n?\r/.test(ie) && K(true, true) && /^(\r\n?)+$/.test(ie), _[4] = K, _[5] = x;
  else x = _[5];
  const L = !P;
  let re;
  if (_[6] !== L) re = { isActive: L }, _[6] = L, _[7] = re;
  else re = _[7];
  (0, import_chunk_6fvsq616.Pa)(x, re);
  let [Z, T] = (0, import_chunk_bs4h6795.y)(0), C = n ? "CONSENT_STATE_OPTED_IN" : "CONSENT_STATE_OPTED_OUT", F;
  if (_[8] !== A || _[9] !== P || _[10] !== N || _[11] !== D) F = () => {
    if (N && !A && !P) D?.("CONSENT_STATE_OPTED_OUT"), T(Vt);
  }, _[8] = A, _[9] = P, _[10] = N, _[11] = D, _[12] = F;
  else F = _[12];
  let X;
  if (_[13] !== s) X = { label: s, value: "CONSENT_STATE_OPTED_IN" }, _[13] = s, _[14] = X;
  else X = _[14];
  let B;
  if (_[15] !== i) B = { label: i, value: "CONSENT_STATE_OPTED_OUT" }, _[15] = i, _[16] = B;
  else B = _[16];
  let ee;
  if (_[17] !== X || _[18] !== B) ee = [X, B], _[17] = X, _[18] = B, _[19] = ee;
  else ee = _[19];
  const U = t ?? import_chunk_s73318k8.Do, E = N ? "CONSENT_STATE_OPTED_OUT" : void 0, me = !j;
  let oe, ce;
  if (_[20] !== h?.handle) oe = () => h?.handle?.scrollBy(-1), ce = () => h?.handle?.scrollBy(1), _[20] = h?.handle, _[21] = oe, _[22] = ce;
  else oe = _[21], ce = _[22];
  let le;
  if (_[23] !== P || _[24] !== p || _[25] !== m || _[26] !== K || _[27] !== t || _[28] !== n) le = (de) => {
    let ue = de === "CONSENT_STATE_OPTED_IN";
    let be = ue && !P && ge();
    if (K(ue, be, !ue && n && t === "CONSENT_STATE_OPTED_IN" ? import_chunk_2t5dst6n.KE : void 0)) {
      return false;
    }
    p(de, P ? "CONSENT_PRESELECTION_NONE" : m);
  }, _[23] = P, _[24] = p, _[25] = m, _[26] = K, _[27] = t, _[28] = n, _[29] = le;
  else le = _[29];
  let z;
  if (_[30] !== A || _[31] !== Y || _[32] !== D || _[33] !== h?.handle || _[34] !== C || _[35] !== n) z = (ye) => {
    let De = !Y();
    if (ye !== C && (De || A)) {
      if (T(Kt), De) h?.handle?.scrollBy(n ? 1 : -1);
      return;
    }
    D?.(ye);
  }, _[30] = A, _[31] = Y, _[32] = D, _[33] = h?.handle, _[34] = C, _[35] = n, _[36] = z;
  else z = _[36];
  let Re;
  if (_[37] !== Z || _[38] !== b || _[39] !== K || _[40] !== C || _[41] !== ee || _[42] !== U || _[43] !== E || _[44] !== me || _[45] !== oe || _[46] !== ce || _[47] !== le || _[48] !== z) Re = (0, import_chunk_a46xeenj.e)(import_chunk_s73318k8.ct, { options: ee, defaultFocusValue: C, selectedValue: U, hideIndexes: true, disablePrintableKeybindings: true, declineValue: E, disableSelection: me, refuseInput: K, refuseStrayText: true, onUpFromFirstItem: oe, onDownFromLastItem: ce, onChange: le, onCancel: b, onFocus: z }, Z), _[37] = Z, _[38] = b, _[39] = K, _[40] = C, _[41] = ee, _[42] = U, _[43] = E, _[44] = me, _[45] = oe, _[46] = ce, _[47] = le, _[48] = z, _[49] = Re;
  else Re = _[49];
  let St;
  if (_[50] !== Re || _[51] !== F) St = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: V, flexDirection: "column", flexShrink: 0, onPaste: F, children: Re }), _[50] = Re, _[51] = F, _[52] = St;
  else St = _[52];
  return St;
}
(0, import_chunk_bs4h6795.G)();
function tn(Z) {
  return Z.value === "accept_opt_in";
}
function nn(T) {
  return T + 1;
}
var pe = 750;
function Ue() {
  let i = (0, import_chunk_sng02qpc.k)(10), l = (0, import_chunk_8bkqeb5d.si)(), s = (0, import_chunk_9js1xpg4.$d)(), n;
  if (i[0] === import_chunk_w1d7ygsk.R) n = (0, import_chunk_k59mf0h7.kj)(), i[0] = n;
  else n = i[0];
  let t = (0, import_chunk_bs4h6795.I)(n), m = (0, import_chunk_bs4h6795.I)(0), j;
  if (i[1] !== l) j = function O2() {
    return (0, import_chunk_2t5dst6n.Ha)(l, m.current, import_chunk_8bkqeb5d.fkn);
  }, i[1] = l, i[2] = j;
  else j = i[2];
  let O = j, c;
  if (i[3] === import_chunk_w1d7ygsk.R) c = function S2() {
    t.current = true, m.current = Date.now();
  }, i[3] = c;
  else c = i[3];
  let S = c, p;
  if (i[4] !== O || i[5] !== s) p = (b, D, A) => {
    if (D.return) {
      m.current = 0;
      return;
    }
    let ve = !D.ctrl && !D.meta && !D.super && new RegExp("^\\P{Cc}", "u").test(b || A);
    let N = s?.resolve(b, D, ["Select"]);
    let P = (0, import_chunk_7cfjrnwy.SJ)(b) === "1" || N?.type === "match" && N.action === "select:accept";
    if (ve && (!P || O())) S();
  }, i[4] = O, i[5] = s, i[6] = p;
  else p = i[6];
  (0, import_chunk_6fvsq616.Pa)(p);
  let v;
  if (i[7] === import_chunk_w1d7ygsk.R) v = () => t.current, i[7] = v;
  else v = i[7];
  let h;
  if (i[8] !== O) h = { isOpen: v, note: S, end() {
    t.current = O();
  } }, i[8] = O, i[9] = h;
  else h = i[9];
  return h;
}
function qo() {
  let l = import_chunk_8bkqeb5d.wP.currentEvent;
  return l instanceof import_chunk_8bkqeb5d.pW && (0, import_chunk_7cfjrnwy.SJ)(l.shortcutKey) === "1";
}
function We(l) {
  let s = (0, import_chunk_sng02qpc.k)(47), i, n, t, m;
  if (s[0] !== l) ({ isAtStartup: i, typedText: m, onChange: t, ...n } = l), s[0] = l, s[1] = i, s[2] = n, s[3] = t, s[4] = m;
  else i = s[1], n = s[2], t = s[3], m = s[4];
  let j;
  if (s[5] !== n.options) j = n.options.some(tn), s[5] = n.options, s[6] = j;
  else j = s[6];
  let O = j, c;
  if (s[7] !== i || s[8] !== m) c = () => !(i && m.isOpen()), s[7] = i, s[8] = m, s[9] = c;
  else c = s[9];
  let { refuseInput: S } = (0, import_chunk_d4d82adx.sY)(c, O), p = (0, import_chunk_8bkqeb5d.oo)(pe), [b, D] = (0, import_chunk_bs4h6795.y)(import_chunk_s73318k8.Do), [A, ve] = (0, import_chunk_bs4h6795.y)(0), N = (0, import_chunk_bs4h6795.I)(false), P = (0, import_chunk_bs4h6795.I)(false), v = (0, import_chunk_8bkqeb5d.Xe)(), h;
  if (s[10] !== S) h = (_, d, ne) => /\r\n?\r/.test(ne) && S(true, true) && /^(\r\n?)+$/.test(ne), s[10] = S, s[11] = h;
  else h = s[11];
  const V = O && !v;
  let he;
  if (s[12] !== V) he = { isActive: V }, s[12] = V, s[13] = he;
  else he = s[13];
  (0, import_chunk_6fvsq616.Pa)(h, he);
  let W;
  if (s[14] !== S || s[15] !== m) W = function w2(u2) {
    let fe = u2 === void 0 ? false : u2;
    if (!S(true, fe, pe)) {
      return false;
    }
    if (m.end(), !P.current) P.current = true, (0, import_chunk_y53wbr8a.a)("tengu_grove_policy_key_ignored", {});
    return true;
  }, s[14] = S, s[15] = m, s[16] = W;
  else W = s[16];
  let w = W, u;
  if (s[17] !== b || s[18] !== v || s[19] !== t || s[20] !== w) u = function se2(M) {
    if (M === "accept_opt_in") {
      if (b !== import_chunk_s73318k8.Do) {
        return false;
      }
      if (w(!v && ge())) {
        if (N.current) N.current = false, ve(nn);
        return false;
      }
    }
    return D(M), t(M);
  }, s[17] = b, s[18] = v, s[19] = t, s[20] = w, s[21] = u;
  else u = s[21];
  let se = u, q;
  if (s[22] !== w) q = function Y2() {
    if (!qo()) {
      return false;
    }
    if (w()) {
      return true;
    }
    return N.current = true, false;
  }, s[22] = w, s[23] = q;
  else q = s[23];
  let Y = q;
  if (!O) {
    let K2;
    if (s[24] !== n || s[25] !== t) K2 = (0, import_chunk_a46xeenj.e)(import_chunk_s73318k8.ct, { ...n, onChange: t }), s[24] = n, s[25] = t, s[26] = K2;
    else K2 = s[26];
    return K2;
  }
  const K = m.note;
  let x;
  if (s[27] !== p || s[28] !== n.options) {
    let J2;
    if (s[30] !== p) J2 = (Q) => !p && Q.value === "accept_opt_in" ? { ...Q, label: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: Q.label }) } : Q, s[30] = p, s[31] = J2;
    else J2 = s[31];
    x = n.options.map(J2);
    s[27] = p, s[28] = n.options, s[29] = x;
  } else x = s[29];
  let J;
  if (s[32] !== v || s[33] !== S || s[34] !== Y) J = () => v ? Y() : S(), s[32] = v, s[33] = S, s[34] = Y, s[35] = J;
  else J = s[35];
  let ie;
  if (s[36] === import_chunk_w1d7ygsk.R) ie = () => {
    N.current = false;
  }, s[36] = ie;
  else ie = s[36];
  let L;
  if (s[37] !== b || s[38] !== se || s[39] !== n || s[40] !== A || s[41] !== x || s[42] !== J) L = (0, import_chunk_a46xeenj.e)(import_chunk_s73318k8.ct, { ...n, options: x, selectedValue: b, refuseInput: J, onFocus: ie, onChange: se }, A), s[37] = b, s[38] = se, s[39] = n, s[40] = A, s[41] = x, s[42] = J, s[43] = L;
  else L = s[43];
  let re;
  if (s[44] !== L || s[45] !== m.note) re = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", onPaste: K, children: L }), s[44] = L, s[45] = m.note, s[46] = re;
  else re = s[46];
  return re;
}
function In() {
  (0, import_chunk_y53wbr8a.a)("tengu_grove_privacy_settings_viewed", {});
}
var zo = ` _____________
 |          \\  \\
 | NEW TERMS \\__\\
 |              |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |              |
 |______________|`;
function Abn() {
  let l = (0, import_chunk_sng02qpc.k)(1), s;
  if (l[0] === import_chunk_w1d7ygsk.R) s = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.sR, { children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "professionalBlue", children: zo }) }) }), l[0] = s;
  else s = l[0];
  return s;
}
var Me = { label: "Accept terms \xB7 Help improve our AI models: OFF", value: "accept_opt_out" };
function bo() {
  let l = (0, import_chunk_sng02qpc.k)(9), s;
  if (l[0] === import_chunk_w1d7ygsk.R) s = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["An update to our Consumer Terms and Privacy Policy will take effect on", " ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: "October 8, 2025" }), ". You can accept the updated terms today."] }), l[0] = s;
  else s = l[0];
  let i;
  if (l[1] === import_chunk_w1d7ygsk.R) i = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "What's changing?" }), l[1] = i;
  else i = l[1];
  let n, t;
  if (l[2] === import_chunk_w1d7ygsk.R) n = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "\xB7 " }), t = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: "Help improve our AI models " }), l[2] = n, l[3] = t;
  else n = l[2], t = l[3];
  let m;
  if (l[4] === import_chunk_w1d7ygsk.R) m = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: 1, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [n, t, (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["\u2014 Allow the use of your chats and coding sessions to train and improve Anthropic AI models. Change anytime in your Privacy Settings (", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: "https://claude.ai/settings/data-privacy-controls" }), ")."] })] }) }), l[4] = m;
  else m = l[4];
  let j;
  if (l[5] === import_chunk_w1d7ygsk.R) j = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: [i, m, (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: 1, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "\xB7 " }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: "Updates to data retention " }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "\u2014 To help us improve our AI models and safety protections, we're extending data retention to 5 years." })] }) })] }), l[5] = j;
  else j = l[5];
  let O;
  if (l[6] === import_chunk_w1d7ygsk.R) O = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: "https://www.anthropic.com/news/updates-to-our-consumer-terms" }), l[6] = O;
  else O = l[6];
  let c;
  if (l[7] === import_chunk_w1d7ygsk.R) c = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: "https://anthropic.com/legal/terms" }), l[7] = c;
  else c = l[7];
  let S;
  if (l[8] === import_chunk_w1d7ygsk.R) S = (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [s, j, (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["Learn more (", O, ") or read the updated Consumer Terms (", c, ") and Privacy Policy (", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: "https://anthropic.com/legal/privacy" }), ")"] })] }), l[8] = S;
  else S = l[8];
  return S;
}
function cZe(l) {
  let t = (0, import_chunk_sng02qpc.k)(18), { gap: s, sentenceRef: i } = l, n = s === void 0 ? 1 : s, m;
  if (t[0] === import_chunk_w1d7ygsk.R) m = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "We've updated our Consumer Terms and Privacy Policy." }), t[0] = m;
  else m = t[0];
  let j;
  if (t[1] === import_chunk_w1d7ygsk.R) j = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "What's changing?" }), t[1] = j;
  else j = t[1];
  let O;
  if (t[2] === import_chunk_w1d7ygsk.R) O = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: "Help improve our AI models" }), t[2] = O;
  else O = t[2];
  let c;
  if (t[3] !== i) c = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: i }), t[3] = i, t[4] = c;
  else c = t[4];
  let S, p;
  if (t[5] === import_chunk_w1d7ygsk.R) S = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "Allow the use of your chats and coding sessions to train and improve Anthropic AI models. You can change this anytime in Privacy Settings" }), p = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: "https://claude.ai/settings/data-privacy-controls" }), t[5] = S, t[6] = p;
  else S = t[5], p = t[6];
  let b;
  if (t[7] !== c) b = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: [O, c, S, p] }), t[7] = c, t[8] = b;
  else b = t[8];
  let D;
  if (t[9] === import_chunk_w1d7ygsk.R) D = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: "How this affects data retention" }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "Turning ON the improve Claude setting extends data retention from 30 days to 5 years. Turning it OFF keeps the default 30-day data retention. Delete data anytime." })] }), t[9] = D;
  else D = t[9];
  let A;
  if (t[10] !== n || t[11] !== b) A = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", gap: n, children: [j, b, D] }), t[10] = n, t[11] = b, t[12] = A;
  else A = t[12];
  let ve;
  if (t[13] === import_chunk_w1d7ygsk.R) ve = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: "https://www.anthropic.com/news/updates-to-our-consumer-terms" }), t[13] = ve;
  else ve = t[13];
  let N;
  if (t[14] === import_chunk_w1d7ygsk.R) N = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: "https://anthropic.com/legal/terms" }), t[14] = N;
  else N = t[14];
  let P;
  if (t[15] === import_chunk_w1d7ygsk.R) P = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["Learn more (", ve, ") or read the updated Consumer Terms (", N, ") and Privacy Policy (", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: "https://anthropic.com/legal/privacy" }), ")"] }), t[15] = P;
  else P = t[15];
  let v;
  if (t[16] !== A) v = (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [m, A, P] }), t[16] = A, t[17] = v;
  else v = t[17];
  return v;
}
function qe(l) {
  return l.finally((0, import_chunk_w578pjby.Ct)(() => l));
}
function e$o(l) {
  let d = (0, import_chunk_sng02qpc.k)(77), { showIfAlreadyViewed: s, location: i, confirmSave: n, onDone: t, onOffPicked: m } = l, [j, O] = (0, import_chunk_bs4h6795.y)(null), [c, S] = (0, import_chunk_bs4h6795.y)(null), [p, b] = (0, import_chunk_bs4h6795.y)(false);
  (0, import_chunk_f3ymc800.OF)(!c?.domain_excluded && !c?.grove_locked_by_claude_science);
  let D = (0, import_chunk_bs4h6795.I)(false), [A, ve] = (0, import_chunk_bs4h6795.y)(false), [N, P] = (0, import_chunk_bs4h6795.y)(), { credentials: v, storageV5: h } = (0, import_chunk_3jkk3v3z.Ve)(), _ = Ue(), ne, V;
  if (d[0] !== v || d[1] !== i || d[2] !== t || d[3] !== s || d[4] !== h) ne = () => {
    let w = async function w2() {
      let [he, W] = await Promise.all([(0, import_chunk_n7e3hgnx.dq)(v), (0, import_chunk_n7e3hgnx.Kte)(v)]);
      if (he.success) (0, import_chunk_n7e3hgnx.ECn)(he.data, h, v);
      let u = W.success ? W.data : null;
      S(u);
      let fe = (0, import_chunk_n7e3hgnx.x4o)(he, W, s);
      if (O(fe), !fe) {
        t("skip_rendering");
        return;
      }
      (0, import_chunk_n7e3hgnx.R4o)(v), (0, import_chunk_y53wbr8a.a)("tengu_grove_policy_viewed", { location: (0, import_chunk_78g0060s.f)(i), dismissable: u?.notice_is_grace_period });
    };
    w();
  }, V = [s, i, t, v, h], d[0] = v, d[1] = i, d[2] = t, d[3] = s, d[4] = h, d[5] = ne, d[6] = V;
  else ne = d[5], V = d[6];
  if ((0, import_chunk_bs4h6795.H)(ne, V), j === null) {
    let M2;
    if (d[7] !== i || d[8] !== _) M2 = i === "settings" ? null : (0, import_chunk_a46xeenj.e)(import_chunk_8z6a79mx.il, { onKeyDown: (se) => {
      if ((0, import_chunk_8bkqeb5d.kP)(se) || se.name === "return") _.note();
    }, onPaste: _.note, children: null }), d[7] = i, d[8] = _, d[9] = M2;
    else M2 = d[9];
    return M2;
  }
  if (!j) {
    return null;
  }
  let M;
  if (d[10] !== n || d[11] !== v || d[12] !== c?.notice_is_grace_period || d[13] !== t || d[14] !== m) M = async function x2(q) {
    if (q !== "defer" && q !== "escape") {
      if (b(true), q === "accept_opt_out") D.current = true, m?.();
    }
    if ((q === "accept_opt_in" || q === "accept_opt_out") && n && !await n(P)) {
      return;
    }
    K: switch (q) {
      case "accept_opt_in": {
        if (D.current) {
          return;
        }
        let Y = await (0, import_chunk_n7e3hgnx.kCn)(true, v, { onlyIfUnset: true }) === false;
        if ((0, import_chunk_y53wbr8a.a)("tengu_grove_policy_submitted", { state: !Y, dismissable: c?.notice_is_grace_period }), D.current) {
          return;
        }
        if (Y) {
          ve(true);
          return;
        }
        break K;
      }
      case "accept_opt_out": {
        await (0, import_chunk_n7e3hgnx.kCn)(false, v), (0, import_chunk_y53wbr8a.a)("tengu_grove_policy_submitted", { state: false, dismissable: c?.notice_is_grace_period });
        break K;
      }
      case "defer": {
        (0, import_chunk_y53wbr8a.a)("tengu_grove_policy_dismissed", { state: true });
        break K;
      }
      case "escape": {
        (0, import_chunk_y53wbr8a.a)("tengu_grove_policy_escaped", {});
      }
    }
    t(q);
  }, d[10] = n, d[11] = v, d[12] = c?.notice_is_grace_period, d[13] = t, d[14] = m, d[15] = M;
  else M = d[15];
  let x = M, J;
  if (d[16] !== c?.domain_excluded || d[17] !== p) J = c?.domain_excluded ? [{ label: "Accept terms \xB7 Help improve our AI models: OFF (for emails with your domain)", value: "accept_opt_out" }] : [{ label: "Accept terms \xB7 Help improve our AI models: ON", value: "accept_opt_in", disabled: p }, Me], d[16] = c?.domain_excluded, d[17] = p, d[18] = J;
  else J = d[18];
  let Q = J;
  if (c?.grove_locked_by_claude_science) {
    let ie2;
    if (d[19] === import_chunk_w1d7ygsk.R) ie2 = [Me], d[19] = ie2;
    else ie2 = d[19];
    Q = ie2;
  }
  let ie;
  if (d[20] !== c?.notice_is_grace_period || d[21] !== x) ie = function L2() {
    if (c?.notice_is_grace_period) {
      x("defer");
      return;
    }
    x("escape");
  }, d[20] = c?.notice_is_grace_period, d[21] = x, d[22] = ie;
  else ie = d[22];
  let L = ie, re;
  if (d[23] !== t) re = function Z2() {
    t("accept_opt_out");
  }, d[23] = t, d[24] = re;
  else re = d[24];
  let Z = re;
  if (N) {
    let T2;
    if (d[25] !== t) T2 = () => t("escape"), d[25] = t, d[26] = T2;
    else T2 = d[26];
    let C2;
    if (d[27] !== N) C2 = (0, import_chunk_a46xeenj.e)(import_chunk_dw56fm8m.Ca, { error: N }), d[27] = N, d[28] = C2;
    else C2 = d[28];
    let F2;
    if (d[29] !== T2 || d[30] !== C2) F2 = (0, import_chunk_a46xeenj.e)(import_chunk_vs99e3g5.Oe, { title: "Help improve our AI models", color: "professionalBlue", onCancel: T2, escapeAction: "close", children: C2 }), d[29] = T2, d[30] = C2, d[31] = F2;
    else F2 = d[31];
    return F2;
  }
  if (A) {
    const T2 = i !== "settings";
    let C2;
    if (d[32] === import_chunk_w1d7ygsk.R) C2 = (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "enter", action: "continue" }), (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "escape", action: "close" })] }), d[32] = C2;
    else C2 = d[32];
    let F2;
    if (d[33] !== Z) F2 = [{ action: "confirm:yes", run: Z }], d[33] = Z, d[34] = F2;
    else F2 = d[34];
    let X2;
    if (d[35] === import_chunk_w1d7ygsk.R) X2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "This setting wasn't turned on. It's off for your account. You can review it any time with /privacy-settings." }), d[35] = X2;
    else X2 = d[35];
    let B2;
    if (d[36] !== F2) B2 = (0, import_chunk_a46xeenj.e)(import_chunk_jczdrj4v.zi, { scope: "Confirmation", claimFocus: true, bindings: F2, children: X2 }), d[36] = F2, d[37] = B2;
    else B2 = d[37];
    let ee2;
    if (d[38] !== Z || d[39] !== B2 || d[40] !== T2) ee2 = (0, import_chunk_a46xeenj.e)(import_chunk_vs99e3g5.Oe, { title: "Help improve our AI models", color: "professionalBlue", onCancel: Z, exitOnCtrlCD: T2, inputGuide: C2, children: B2 }), d[38] = Z, d[39] = B2, d[40] = T2, d[41] = ee2;
    else ee2 = d[41];
    return ee2;
  }
  const T = i !== "settings" || p;
  let C;
  if (d[42] !== p) C = p ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "Saving\u2026" }) : (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "enter", action: "confirm" }), d[42] = p, d[43] = C;
  else C = d[43];
  let F;
  if (d[44] !== p || d[45] !== i) F = !(p && i === "settings") && (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "escape", action: "cancel" }), d[44] = p, d[45] = i, d[46] = F;
  else F = d[46];
  let X;
  if (d[47] !== C || d[48] !== F) X = (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [C, F] }), d[47] = C, d[48] = F, d[49] = X;
  else X = d[49];
  let B;
  if (d[50] !== c?.notice_is_grace_period) B = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", gap: 1, flexGrow: 1, children: c?.notice_is_grace_period ? (0, import_chunk_a46xeenj.e)(bo, {}) : (0, import_chunk_a46xeenj.e)(cZe, {}) }), d[50] = c?.notice_is_grace_period, d[51] = B;
  else B = d[51];
  let ee;
  if (d[52] === import_chunk_w1d7ygsk.R) ee = (0, import_chunk_a46xeenj.e)(Abn, {}), d[52] = ee;
  else ee = d[52];
  let U;
  if (d[53] !== B) U = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "row", children: [B, ee] }), d[53] = B, d[54] = U;
  else U = d[54];
  let E;
  if (d[55] === import_chunk_w1d7ygsk.R) E = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: "Please select how you'd like to continue" }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "Your choice takes effect immediately upon confirmation." })] }), d[55] = E;
  else E = d[55];
  const me = i !== "settings", oe = c?.notice_is_grace_period ? "defer" : "accept_opt_out";
  let ce;
  if (d[56] !== c?.notice_is_grace_period || d[57] !== p) ce = c?.notice_is_grace_period ? [{ label: "Not now", value: "defer", disabled: p }] : [], d[56] = c?.notice_is_grace_period, d[57] = p, d[58] = ce;
  else ce = d[58];
  let le;
  if (d[59] !== Q || d[60] !== ce) le = [...Q, ...ce], d[59] = Q, d[60] = ce, d[61] = le;
  else le = d[61];
  let de;
  if (d[62] !== x) de = async (ue) => {
    if (ue === "defer" && D.current) {
      return;
    }
    let be = x(ue);
    await (ue === "accept_opt_out" ? qe(be) : be);
  }, d[62] = x, d[63] = de;
  else de = d[63];
  let z;
  if (d[64] !== L || d[65] !== me || d[66] !== oe || d[67] !== le || d[68] !== de || d[69] !== _) z = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", gap: 1, children: [E, (0, import_chunk_a46xeenj.e)(We, { isAtStartup: me, typedText: _, declineValue: oe, options: le, onChange: de, onCancel: L })] }), d[64] = L, d[65] = me, d[66] = oe, d[67] = le, d[68] = de, d[69] = _, d[70] = z;
  else z = d[70];
  let ye;
  if (d[71] !== L || d[72] !== X || d[73] !== U || d[74] !== z || d[75] !== T) ye = (0, import_chunk_a46xeenj.o)(import_chunk_vs99e3g5.Oe, { title: "Updates to Consumer Terms and Policies", color: "professionalBlue", onCancel: L, exitOnCtrlCD: T, inputGuide: X, children: [U, z] }), d[71] = L, d[72] = X, d[73] = U, d[74] = z, d[75] = T, d[76] = ye;
  else ye = d[76];
  return ye;
}
var Rbn = "Couldn't confirm your choice was saved";
function t$o(l) {
  let u = (0, import_chunk_sng02qpc.k)(48), { settings: s, domainExcluded: i, lockedByClaudeScience: n, confirmSave: t, readStored: m, onDone: j, onChoose: O } = l, [c, S] = (0, import_chunk_bs4h6795.y)(s.grove_enabled), { refuseInput: p } = (0, import_chunk_d4d82adx.sY)(), b = (0, import_chunk_8bkqeb5d.oo)(pe), D = (0, import_chunk_bs4h6795.I)(s.grove_enabled), { credentials: A } = (0, import_chunk_3jkk3v3z.Ve)(), [ve, N] = (0, import_chunk_bs4h6795.y)(), [P, v] = (0, import_chunk_bs4h6795.y)(), h = i || n || !!ve, [_, d] = (0, import_chunk_bs4h6795.y)(false), ne = (0, import_chunk_bs4h6795.I)(false), [V, he] = (0, import_chunk_bs4h6795.y)(false), W = (0, import_chunk_bs4h6795.I)(false), fe;
  if (u[0] === import_chunk_w1d7ygsk.R) fe = [], u[0] = fe;
  else fe = u[0];
  (0, import_chunk_bs4h6795.H)(In, fe);
  let w = V && !_, M = (0, import_chunk_bs4h6795.mo)(j), se;
  if (u[1] !== M || u[2] !== w) se = () => {
    if (w) M();
  }, u[1] = M, u[2] = w, u[3] = se;
  else se = u[3];
  let q;
  if (u[4] !== w) q = [w], u[4] = w, u[5] = q;
  else q = u[5];
  (0, import_chunk_bs4h6795.H)(se, q);
  let Y;
  if (u[6] === import_chunk_w1d7ygsk.R) Y = function x2(K) {
    D.current = K, S(K);
  }, u[6] = Y;
  else Y = u[6];
  let x = Y, J;
  if (u[7] !== t || u[8] !== A || u[9] !== m) J = async function re2(Q) {
    if (!await t(N)) {
      x(!Q);
      return;
    }
    v(void 0);
    let ie = await (0, import_chunk_n7e3hgnx.kCn)(Q, A);
    if (W.current) {
      return;
    }
    let L = ie ?? await m();
    if (x(L ?? true), L !== Q) v(L === void 0 ? Rbn : Ise.SAVE_FAILED);
  }, u[7] = t, u[8] = A, u[9] = m, u[10] = J;
  else J = u[10];
  let re = J, Z;
  if (u[11] !== h || u[12] !== O || u[13] !== p || u[14] !== re) Z = function B2(T) {
    if (T.ctrl || T.meta) {
      return;
    }
    if (!h && (T.key === "tab" || T.key === "return" || T.key === " ")) {
      T.preventDefault();
      let C = !D.current;
      let F = p(C, ge(), pe);
      if (C && F || ne.current || W.current) {
        return;
      }
      O?.(C), ne.current = true, d(true), x(C);
      let X = re(C);
      (C ? X : qe(X)).finally(() => {
        ne.current = false, d(false);
      });
    }
  }, u[11] = h, u[12] = O, u[13] = p, u[14] = re, u[15] = Z;
  else Z = u[15];
  let B = Z, ee;
  if (u[16] !== b) ee = b ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "error", children: "false" }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "false" }), u[16] = b, u[17] = ee;
  else ee = u[17];
  let U = ee;
  if (n) {
    let E2;
    if (u[18] === import_chunk_w1d7ygsk.R) E2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "false" }), u[18] = E2;
    else E2 = u[18];
    U = E2;
  } else if (i) {
    let E2;
    if (u[19] === import_chunk_w1d7ygsk.R) E2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "error", children: "false (for emails with your domain)" }), u[19] = E2;
    else E2 = u[19];
    U = E2;
  } else if (P === Rbn) {
    let E2;
    if (u[20] === import_chunk_w1d7ygsk.R) E2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "true" }), u[20] = E2;
    else E2 = u[20];
    U = E2;
  } else if (c) {
    let E2;
    if (u[21] === import_chunk_w1d7ygsk.R) E2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "success", children: "true" }), u[21] = E2;
    else E2 = u[21];
    U = E2;
  }
  let E;
  if (u[22] === import_chunk_w1d7ygsk.R) E = () => {
    W.current = true, he(true);
  }, u[22] = E;
  else E = u[22];
  const me = _ || h ? "close" : "cancel";
  let oe;
  if (u[23] !== V || u[24] !== w || u[25] !== _ || u[26] !== h) oe = w ? "Closing\u2026" : V ? "Saving\u2026" : _ ? (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "Saving\u2026" }), (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "escape", action: "close" })] }) : h ? void 0 : (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: ["enter", "tab", "space"], action: "toggle" }), (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "escape", action: "cancel" })] }), u[23] = V, u[24] = w, u[25] = _, u[26] = h, u[27] = oe;
  else oe = u[27];
  let ce;
  if (u[28] === import_chunk_w1d7ygsk.R) ce = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["Review and manage your privacy settings at", " ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: "https://claude.ai/settings/data-privacy-controls" })] }), u[28] = ce;
  else ce = u[28];
  let le;
  if (u[29] === import_chunk_w1d7ygsk.R) le = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { width: 43, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: "Help improve our AI models" }) }), u[29] = le;
  else le = u[29];
  let de;
  if (u[30] !== U) de = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { gap: 1, children: [le, (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { minWidth: 5, children: U })] }), u[30] = U, u[31] = de;
  else de = u[31];
  let ue;
  if (u[32] !== n) ue = n && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "Not available for this account." }), u[32] = n, u[33] = ue;
  else ue = u[33];
  const be = ve ?? P;
  let z;
  if (u[34] !== be) z = (0, import_chunk_a46xeenj.e)(import_chunk_jbkqy09y.M$, { children: (0, import_chunk_a46xeenj.e)(import_chunk_dw56fm8m.Ca, { error: be }) }), u[34] = be, u[35] = z;
  else z = u[35];
  let ye;
  if (u[36] !== de || u[37] !== ue || u[38] !== z) ye = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: [de, ue, z] }), u[36] = de, u[37] = ue, u[38] = z, u[39] = ye;
  else ye = u[39];
  let De;
  if (u[40] !== B || u[41] !== ye) De = (0, import_chunk_a46xeenj.o)(import_chunk_8z6a79mx.il, { gap: 1, onKeyDown: B, children: [ce, ye] }), u[40] = B, u[41] = ye, u[42] = De;
  else De = u[42];
  let Re;
  if (u[43] !== V || u[44] !== oe || u[45] !== De || u[46] !== me) Re = (0, import_chunk_a46xeenj.e)(import_chunk_vs99e3g5.Oe, { title: "Data privacy", color: "professionalBlue", onCancel: E, exitOnCtrlCD: V, escapeAction: me, inputGuide: oe, children: De }), u[43] = V, u[44] = oe, u[45] = De, u[46] = me, u[47] = Re;
  else Re = u[47];
  return Re;
}
