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
var chunk_s4tz6qdb_exports = {};
__export(chunk_s4tz6qdb_exports, {
  omt: () => omt
});
module.exports = __toCommonJS(chunk_s4tz6qdb_exports);
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_2t5dst6n = require("/$bunfs/root/chunk-2t5dst6n.js");
var import_chunk_mfm58fyw = require("/$bunfs/root/chunk-mfm58fyw.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_6fvsq616 = require("/$bunfs/root/chunk-6fvsq616.js");
var import_chunk_wvchre07 = require("/$bunfs/root/chunk-wvchre07.js");
var import_chunk_z8dyhx9v = require("/$bunfs/root/chunk-z8dyhx9v.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_65494s25 = require("/$bunfs/root/chunk-65494s25.js");
var import_chunk_v65a0pbg = require("/$bunfs/root/chunk-v65a0pbg.js");
var import_chunk_gw2m8pf7 = require("/$bunfs/root/chunk-gw2m8pf7.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function bt(Dt) {
  return Dt + 1;
}
function vt(Ot, _t) {
  return (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { paddingLeft: 2, flexDirection: "row", children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "\xB7 " }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: Ot })] }, _t);
}
function Ct(jt, zt) {
  return (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { paddingLeft: 2, flexDirection: "row", children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "\xB7 " }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: jt })] }, `tail-${zt}`);
}
var N = 20, jn = 40, zn = 14, Nn = 4, Wn = 6;
function V(n, s) {
  let a = Math.max(1, s - Wn);
  return (0, import_chunk_7cfjrnwy.Mt)((0, import_chunk_8bkqeb5d.Ud)(n, a, "wrap"), `
`) + 1;
}
function rn(n, s, a) {
  let c = zn + a.reduce((l, u) => l + V(u, s), 0);
  return Math.min(jn, n - c);
}
function Q(n, s, a, c, l, u) {
  let h = a ? `(at most ${N} are listed)` : "(list trimmed to fit the screen)", d = (c > 0 ? `, ${c} executing ${(0, import_chunk_7cfjrnwy.O)(c, "a command", "commands")}` : "") + (l > 0 ? `, ${l} ${(0, import_chunk_7cfjrnwy.O)(l, "sandbox setting")}` : "") + (u > 0 ? `, ${u} ${(0, import_chunk_7cfjrnwy.O)(u, "isolation setting")}` : "");
  return s ? `\u22EF and ${n} more not shown ${h}${d} \u2014 choose No unless you expected every one of these settings` : `${n} ${(0, import_chunk_7cfjrnwy.O)(n, "setting")} not shown ${h}${d} \u2014 choose No unless you expected every one of these settings`;
}
function an(n, s, a) {
  if (n.length === 0) return { head: [], tail: [], elided: 0 };
  let c = n.map((p) => V(p, s)), l = c.reduce((p, i) => p + i, 0), u = Math.max(V(Q(n.length, true, false, n.length, n.length, n.length), s), V(Q(n.length, true, true, n.length, n.length, n.length), s));
  if (n.length <= N && l <= Math.max(a, u)) return { head: n, tail: [], elided: 0 };
  let h = u, d = 0, t = n.length, m = (p) => h + c[p] <= a;
  if (m(0)) h += c[0], d = 1;
  while (t - 1 >= Math.max(d, n.length - Nn) && t - 1 > 0 && m(t - 1)) t--, h += c[t];
  while (d < t && d + (n.length - t) < N && m(d)) h += c[d], d++;
  return { head: n.slice(0, d), tail: n.slice(t), elided: t - d };
}
function dn(n, { commandRows: s, sandboxRows: a, isolationRows: c, envRows: l, categoryRows: u }) {
  let h = (0, import_chunk_4smdap7r.U)(Object.values(n.payloadSlots), (m) => m?.shellSettings.hooks !== void 0), d = s.length - h, t = [];
  if (d > 0) t.push(`${(0, import_chunk_7cfjrnwy.O)(d, "command setting")} \xD7${d}`);
  if (a.length > 0) t.push(`${(0, import_chunk_7cfjrnwy.O)(a.length, "sandbox setting")} \xD7${a.length}`);
  if (c.length > 0) t.push(`${(0, import_chunk_7cfjrnwy.O)(c.length, "isolation setting")} \xD7${c.length}`);
  if (l.length > 0) t.push(`${(0, import_chunk_7cfjrnwy.O)(l.length, "env var")} \xD7${l.length}`);
  if (u.length > 0 || h > 0) t.push("hooks");
  return t.join(", ");
}
var M = { intro: "Your organization has configured managed settings that could allow execution of arbitrary code or interception of your prompts and responses.", listLabel: "Settings requiring approval:", advice: "Only accept if you trust your organization's IT administration and expect these settings to be configured.", risk: "these can run code or redirect traffic on this machine." }, cn = { intro: "Your organization has configured Claude Code to send telemetry to the destination below. Depending on your organization's settings, this can include the content of your prompts and responses.", listLabel: "Telemetry destination:", advice: "Only accept if you recognize this as your organization's telemetry collector.", risk: "this redirects where telemetry from this machine is sent." }, ln = { intro: "Your organization has configured virtual machine (VM) isolation settings for Claude Code on this machine.", listLabel: M.listLabel, advice: M.advice, risk: "these can change where Claude Code runs or what it can connect to." }, un = { intro: "Your organization's settings name a Google Cloud project, region, or Foundry resource for Claude Code.", listLabel: M.listLabel, advice: M.advice, risk: "these can change where your prompts and Claude's responses go." }, w = import_chunk_2t5dst6n._s;
function omt(n) {
  let s = (0, import_chunk_sng02qpc.k)(2), a;
  if (s[0] !== n) a = (0, import_chunk_a46xeenj.e)(_e, { ...n }, n.reveal), s[0] = n, s[1] = a;
  else a = s[1];
  return a;
}
function _e(n) {
  let i = (0, import_chunk_sng02qpc.k)(98), { settings: s, baseline: a, reveal: c, onAccept: l, onReject: u, wouldTakeAnswer: h, answerWindowMs: d } = n, t = c !== "default", { columns: m, rows: p } = (0, import_chunk_6n6exvyx.qe)(), W, C, T, je, A, Y, ze, Ne, $n;
  if (i[0] !== a || i[1] !== m || i[2] !== s || i[3] !== p) {
    let kn = (0, import_chunk_xcgcdx61.Iz)(s);
    let F = (0, import_chunk_xcgcdx61.iea)(a, kn);
    let D = (0, import_chunk_xcgcdx61.uce)(F.changed) ? F.changed : kn;
    C = (0, import_chunk_xcgcdx61.aea)(D, s) ? cn : (0, import_chunk_xcgcdx61.lea)(D, s) ? ln : (0, import_chunk_xcgcdx61.TDs)(D, s) ? un : M;
    let We = D === F.changed ? F.unchangedCount : 0;
    let _ = F.removedCount;
    T = We > 0 ? `\uFF0B ${We} other active ${(0, import_chunk_7cfjrnwy.O)(We, "setting")} unchanged since your last approval` : null;
    let P2;
    if (i[13] !== _) P2 = _ > 0 ? `\u2212 ${_} previously approved ${(0, import_chunk_7cfjrnwy.O)(_, "setting")} no longer ${_ === 1 ? "requires" : "require"} approval` : null, i[13] = _, i[14] = P2;
    else P2 = i[14];
    A = P2;
    let En = (0, import_chunk_xcgcdx61.dea)(D);
    Y = `Approving applies: ${dn(D, En)} \u2014 ${C.risk}`;
    let xt = rn(p, m, [C.intro, C.advice, Y, ...T ? [T] : [], ...A ? [A] : []]);
    let { commandRows: Z2, sandboxRows: ee2, isolationRows: ne2, envRows: Lt, categoryRows: Rt } = En;
    W = Z2;
    Ne = ee2;
    je = ne2;
    ze = [...W, ...Ne, ...je, ...Lt, ...Rt];
    $n = an(ze, m, xt);
    i[0] = a, i[1] = m, i[2] = s, i[3] = p, i[4] = W, i[5] = C, i[6] = T, i[7] = je, i[8] = A, i[9] = Y, i[10] = ze, i[11] = Ne, i[12] = $n;
  } else W = i[4], C = i[5], T = i[6], je = i[7], A = i[8], Y = i[9], ze = i[10], Ne = i[11], $n = i[12];
  let q = $n, Ye = q.head.length, Fe = ze.length - q.tail.length, Ge = Math.max(0, Math.min(W.length, Fe) - Ye), Pe = W.length + Ne.length, Je = Math.max(0, Math.min(Pe, Fe) - Math.max(W.length, Ye)), $t = Pe + je.length, Be = Math.max(0, Math.min($t, Fe) - Math.max(Pe, Ye)), P;
  if (i[15] !== C || i[16] !== Ge || i[17] !== Be || i[18] !== Je || i[19] !== T || i[20] !== A || i[21] !== Y || i[22] !== q) P = { ...q, elidedCommandCount: Ge, elidedSandboxCount: Je, elidedIsolationCount: Be, copy: C, riskLine: Y, hiddenLine: T, removedLine: A }, i[15] = C, i[16] = Ge, i[17] = Be, i[18] = Je, i[19] = T, i[20] = A, i[21] = Y, i[22] = q, i[23] = P;
  else P = i[23];
  let { head: x, tail: L, elided: te, elidedCommandCount: Xe, elidedSandboxCount: Ke, elidedIsolationCount: Ve, copy: f, riskLine: Qe, hiddenLine: oe, removedLine: ie } = P, Z;
  if (i[24] !== l || i[25] !== u) Z = (kt) => kt === "confirm" ? l() : u(), i[24] = l, i[25] = u, i[26] = Z;
  else Z = i[26];
  let j = (0, import_chunk_mfm58fyw.mg)(Z), Ue = (0, import_chunk_z8dyhx9v.Ns)(w), { refusedWithin: Ze, noteRefused: He, epoch: Et } = (0, import_chunk_z8dyhx9v.po)(), en = (0, import_chunk_z8dyhx9v.Zu)(), [St, It] = (0, import_chunk_bs4h6795.y)(0), ee;
  if (i[27] === import_chunk_w1d7ygsk.R) ee = () => {
    It(bt);
  }, i[27] = ee;
  else ee = i[27];
  let ne;
  if (i[28] !== s) ne = [s], i[28] = s, i[29] = ne;
  else ne = i[29];
  (0, import_chunk_bs4h6795.H)(ee, ne);
  let Tt = (0, import_chunk_z8dyhx9v.jf)(`${Et}:${St}`, w), Sn;
  if (i[30] !== t || i[31] !== Ue || i[32] !== He || i[33] !== Ze) Sn = function E2() {
    if (!t) {
      return false;
    }
    if (Ue() || Ze(w)) {
      return He(), true;
    }
    return false;
  }, i[30] = t, i[31] = Ue, i[32] = He, i[33] = Ze, i[34] = Sn;
  else Sn = i[34];
  let E = Sn, Mn;
  if (i[35] !== E || i[36] !== h) Mn = function se2() {
    if (E()) {
      return true;
    }
    return h?.() === false;
  }, i[35] = E, i[36] = h, i[37] = Mn;
  else Mn = i[37];
  let se = Mn, Tn;
  if (i[38] !== j || i[39] !== E) Tn = function v2(At) {
    if (E()) {
      return;
    }
    j.answer(At);
  }, i[38] = j, i[39] = E, i[40] = Tn;
  else Tn = i[40];
  let v = Tn, An;
  if (i[41] !== v) An = () => v("cancel"), i[41] = v, i[42] = An;
  else An = i[42];
  let Dn;
  if (i[43] === import_chunk_w1d7ygsk.R) Dn = { context: "Confirmation" }, i[43] = Dn;
  else Dn = i[43];
  (0, import_chunk_6fvsq616.In)("confirm:no", An, Dn);
  let ae;
  if (i[44] !== f.intro) ae = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: f.intro }), i[44] = f.intro, i[45] = ae;
  else ae = i[45];
  let de;
  if (i[46] !== f.listLabel) de = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: f.listLabel }), i[46] = f.listLabel, i[47] = de;
  else de = i[47];
  let ce;
  if (i[48] !== x) ce = x.map(vt), i[48] = x, i[49] = ce;
  else ce = i[49];
  let le;
  if (i[50] !== te || i[51] !== Xe || i[52] !== Ve || i[53] !== Ke || i[54] !== x.length || i[55] !== L.length) le = te > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: 2, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "warning", children: Q(te, x.length + L.length > 0, x.length + L.length === N, Xe, Ke, Ve) }) }), i[50] = te, i[51] = Xe, i[52] = Ve, i[53] = Ke, i[54] = x.length, i[55] = L.length, i[56] = le;
  else le = i[56];
  let ue;
  if (i[57] !== L) ue = L.map(Ct), i[57] = L, i[58] = ue;
  else ue = i[58];
  let he;
  if (i[59] !== oe) he = oe && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: 2, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: oe }) }), i[59] = oe, i[60] = he;
  else he = i[60];
  let me;
  if (i[61] !== ie) me = ie && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: 2, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ie }) }), i[61] = ie, i[62] = me;
  else me = i[62];
  let ge;
  if (i[63] !== de || i[64] !== ce || i[65] !== le || i[66] !== ue || i[67] !== he || i[68] !== me) ge = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: [de, ce, le, ue, he, me] }), i[63] = de, i[64] = ce, i[65] = le, i[66] = ue, i[67] = he, i[68] = me, i[69] = ge;
  else ge = i[69];
  let pe;
  if (i[70] !== f.advice) pe = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: f.advice }), i[70] = f.advice, i[71] = pe;
  else pe = i[71];
  let fe;
  if (i[72] !== Qe) fe = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "warning", children: Qe }), i[72] = Qe, i[73] = fe;
  else fe = i[73];
  const nn = t ? `${j.attempts}:${Tt.remountKey}` : `${j.attempts}`, tn = t ? w : d, on = t ? "cancel" : j.refused ?? "confirm";
  let we, ye;
  if (i[74] !== v) we = () => v("confirm"), ye = () => v("cancel"), i[74] = v, i[75] = we, i[76] = ye;
  else we = i[75], ye = i[76];
  let be;
  if (i[77] !== t || i[78] !== se || i[79] !== en || i[80] !== nn || i[81] !== tn || i[82] !== on || i[83] !== we || i[84] !== ye) be = (0, import_chunk_a46xeenj.e)(import_chunk_65494s25.ar, { openedAt: en, windowMs: tn, refuseInput: se, confirmLabel: "Yes, I trust these settings", cancelLabel: "No, exit Claude Code", cancelFirst: t, focus: on, hideIndexes: t, disablePrintableKeybindings: t, onConfirm: we, onCancel: ye }, nn), i[77] = t, i[78] = se, i[79] = en, i[80] = nn, i[81] = tn, i[82] = on, i[83] = we, i[84] = ye, i[85] = be;
  else be = i[85];
  const sn = t ? "select" : "confirm";
  let ve;
  if (i[86] !== sn) ve = (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "enter", action: sn }), i[86] = sn, i[87] = ve;
  else ve = i[87];
  let On;
  if (i[88] === import_chunk_w1d7ygsk.R) On = (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "escape", action: "exit" }), i[88] = On;
  else On = i[88];
  let Ce;
  if (i[89] !== ve) Ce = (0, import_chunk_a46xeenj.e)(import_chunk_gw2m8pf7.Nbn, { children: (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [ve, On] }) }), i[89] = ve, i[90] = Ce;
  else Ce = i[90];
  let _n;
  if (i[91] !== ae || i[92] !== ge || i[93] !== pe || i[94] !== fe || i[95] !== be || i[96] !== Ce) _n = (0, import_chunk_a46xeenj.e)(import_chunk_v65a0pbg.tl, { color: "warning", titleColor: "warning", title: "Managed settings require approval", children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", gap: 1, paddingTop: 1, children: [ae, ge, pe, fe, be, Ce] }) }), i[91] = ae, i[92] = ge, i[93] = pe, i[94] = fe, i[95] = be, i[96] = Ce, i[97] = _n;
  else _n = i[97];
  return _n;
}
