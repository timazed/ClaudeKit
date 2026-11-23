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
var chunk_rdv6n6jy_exports = {};
__export(chunk_rdv6n6jy_exports, {
  Cmt: () => Cmt
});
module.exports = __toCommonJS(chunk_rdv6n6jy_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_9js1xpg4 = require("/$bunfs/root/chunk-9js1xpg4.js");
var import_chunk_6fvsq616 = require("/$bunfs/root/chunk-6fvsq616.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_09dxdt5c = require("/$bunfs/root/chunk-09dxdt5c.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_1tyxkk56 = require("/$bunfs/root/chunk-1tyxkk56.js");
var import_chunk_ghhxe1kj = require("/$bunfs/root/chunk-ghhxe1kj.js");
var import_chunk_8m5q5cts = require("/$bunfs/root/chunk-8m5q5cts.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_74h6kcya = require("/$bunfs/root/chunk-74h6kcya.js");
var import_chunk_wvchre07 = require("/$bunfs/root/chunk-wvchre07.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_vh9td94q = require("/$bunfs/root/chunk-vh9td94q.js");
var import_chunk_8n6jzsq4 = require("/$bunfs/root/chunk-8n6jzsq4.js");
var import_chunk_5h92z04c = require("/$bunfs/root/chunk-5h92z04c.js");
var import_chunk_dfcadv0m = require("/$bunfs/root/chunk-dfcadv0m.js");
var import_chunk_40j5bbmz = require("/$bunfs/root/chunk-40j5bbmz.js");
var import_chunk_kat5c1mk = require("/$bunfs/root/chunk-kat5c1mk.js");
var import_chunk_9nejjte0 = require("/$bunfs/root/chunk-9nejjte0.js");
var import_chunk_vx3fbgjb = require("/$bunfs/root/chunk-vx3fbgjb.js");
var import_chunk_jczdrj4v = require("/$bunfs/root/chunk-jczdrj4v.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function zt(io) {
  return io.settings.syntaxHighlightingDisabled;
}
function Wt(se) {
  return { label: se.name, origin: se.source === "user" ? "custom" : `from ${se.source.plugin}`, value: (0, import_chunk_ghhxe1kj.wCe)(se.slug) };
}
var ke = "__new_custom_theme__", He = "Choose the text style that looks best with your terminal";
function Cmt(Yt) {
  let t = (0, import_chunk_sng02qpc.k)(91), { onThemeSelect: he, showIntroText: We, helpText: Ye, hideEscToCancel: je, isTitledByHost: Je, onCancel: N, onCustomTheme: i } = Yt, U = We === void 0 ? false : We, P = Ye === void 0 ? "" : Ye, ue = je === void 0 ? false : je, a = Je === void 0 ? false : Je, { storageV5: ge } = (0, import_chunk_3jkk3v3z.Ve)(), [pe] = (0, import_chunk_3jkk3v3z.Os)(), p = (0, import_chunk_3jkk3v3z.Ave)(), { columns: jt } = (0, import_chunk_6n6exvyx.qe)(), qt = (0, import_chunk_6n6exvyx.rl)() ? import_chunk_dfcadv0m.__e + import_chunk_dfcadv0m.IF : import_chunk_dfcadv0m.wS, Qe;
  if (t[0] === import_chunk_w1d7ygsk.R) Qe = (0, import_chunk_40j5bbmz.p7n)(), t[0] = Qe;
  else Qe = t[0];
  let fe = Qe, Ze;
  if (t[1] !== pe) Ze = fe === null ? (0, import_chunk_40j5bbmz.C2s)(pe) : null, t[1] = pe, t[2] = Ze;
  else Ze = t[2];
  let F = Ze, { setPreviewTheme: Te, cancelPreview: n } = (0, import_chunk_3jkk3v3z.Sjr)(), c = (0, import_chunk_bs4h6795.I)(void 0), Ke;
  if (t[3] !== n) Ke = (Jt) => {
    let et = Symbol("commit");
    c.current = et;
    let tt = () => {
      if (c.current === et) c.current = void 0, n();
    };
    Promise.resolve(Jt).then(tt, tt);
  }, t[3] = n, t[4] = Ke;
  else Ke = t[4];
  let f = Ke, ot, nt;
  if (t[5] !== n) ot = () => () => {
    if (c.current === void 0) n();
  }, nt = [n], t[5] = n, t[6] = ot, t[7] = nt;
  else ot = t[6], nt = t[7];
  (0, import_chunk_bs4h6795.H)(ot, nt);
  let V = (0, import_chunk_74h6kcya.X)(zt) ?? false, ve = (0, import_chunk_74h6kcya.Kr)();
  (0, import_chunk_9js1xpg4.ZK)("ThemePicker");
  let xe = (0, import_chunk_09dxdt5c.cu)("theme:toggleSyntaxHighlighting", "ThemePicker", "ctrl+t"), st;
  if (t[8] !== ve || t[9] !== ge || t[10] !== V) st = () => {
    if (fe === null) {
      let lt = !V;
      (0, import_chunk_2yx6c1y2.Mr)("userSettings", { syntaxHighlightingDisabled: lt }, void 0, ge).then(import_chunk_8m5q5cts.KP), ve((mt) => ({ ...mt, settings: { ...mt.settings, syntaxHighlightingDisabled: lt } }));
    }
  }, t[8] = ve, t[9] = ge, t[10] = V, t[11] = st;
  else st = t[11];
  let rt;
  if (t[12] === import_chunk_w1d7ygsk.R) rt = { context: "ThemePicker" }, t[12] = rt;
  else rt = t[12];
  (0, import_chunk_6fvsq616.In)("theme:toggleSyntaxHighlighting", st, rt);
  let at;
  if (t[13] !== n || t[14] !== N) at = () => {
    c.current = void 0, n(), N?.();
  }, t[13] = n, t[14] = N, t[15] = at;
  else at = t[15];
  let ct = at, dt;
  if (t[16] === import_chunk_w1d7ygsk.R) dt = { context: "Select" }, t[16] = dt;
  else dt = t[16];
  (0, import_chunk_6fvsq616.In)("select:cancel", ct, dt);
  let z = (0, import_chunk_vs99e3g5.$l)(ct, void 0, N !== void 0), { customThemes: T } = (0, import_chunk_3jkk3v3z._Ke)(), ht, ut, gt, pt, ft, Tt, vt;
  if (t[17] === import_chunk_w1d7ygsk.R) ht = { label: "Auto (match terminal)", value: "auto" }, ut = { label: "Dark mode", value: "dark" }, gt = { label: "Light mode", value: "light" }, pt = { label: "Dark mode (colorblind-friendly)", value: "dark-daltonized" }, ft = { label: "Light mode (colorblind-friendly)", value: "light-daltonized" }, Tt = { label: "Dark mode (ANSI colors only)", value: "dark-ansi" }, vt = { label: "Light mode (ANSI colors only)", value: "light-ansi" }, t[17] = ht, t[18] = ut, t[19] = gt, t[20] = pt, t[21] = ft, t[22] = Tt, t[23] = vt;
  else ht = t[17], ut = t[18], gt = t[19], pt = t[20], ft = t[21], Tt = t[22], vt = t[23];
  let xt;
  if (t[24] !== T || t[25] !== i) {
    const W2 = T.map(Wt);
    let O2;
    if (t[27] !== i) O2 = i ? [{ label: "New custom theme\u2026", value: ke }] : [], t[27] = i, t[28] = O2;
    else O2 = t[28];
    xt = [ht, ut, gt, pt, ft, Tt, vt, ...W2, ...O2];
    t[24] = T, t[25] = i, t[26] = xt;
  } else xt = t[26];
  let l = xt, Y = l.findIndex((Qt) => Qt.value === p), [v, Ct] = (0, import_chunk_bs4h6795.y)(l[Math.max(0, Y)]?.value ?? p), [Zt, Kt] = (0, import_chunk_bs4h6795.y)(false), [St, eo] = (0, import_chunk_bs4h6795.y)(Y !== -1);
  if (!St && !Zt && Y !== -1) eo(true), Ct(p);
  let W;
  if (t[29] !== v) W = (0, import_chunk_ghhxe1kj.lG)(v), t[29] = v, t[30] = W;
  else W = t[30];
  let j = W, O;
  if (t[31] !== T || t[32] !== j) O = j ? T.find((to) => to.slug === j) : void 0, t[31] = T, t[32] = j, t[33] = O;
  else O = t[33];
  let d = O, Ce = (0, import_chunk_09dxdt5c.cu)("theme:editCustom", "ThemePicker", "ctrl+e"), yt;
  if (t[34] !== d || t[35] !== f || t[36] !== i) yt = () => {
    if (d && i && c.current === void 0) f(i(d));
  }, t[34] = d, t[35] = f, t[36] = i, t[37] = yt;
  else yt = t[37];
  let bt;
  if (t[38] === import_chunk_w1d7ygsk.R) bt = { context: "ThemePicker" }, t[38] = bt;
  else bt = t[38];
  (0, import_chunk_6fvsq616.In)("theme:editCustom", yt, bt);
  let q;
  if (t[39] !== P || t[40] !== a || t[41] !== U) q = a ? P && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: P }) : (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [U ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "Let's get started." }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, color: "permission", children: "Theme" }), (0, import_chunk_a46xeenj.e)(import_chunk_vx3fbgjb.Es, { subtitle: P, children: He })] }), t[39] = P, t[40] = a, t[41] = U, t[42] = q;
  else q = t[42];
  const Se = St ? "on-saved-theme" : "on-first-theme", ye = Math.max(0, Y);
  let J;
  if (t[43] !== n || t[44] !== v || t[45] !== Te || t[46] !== l) J = (oo) => {
    let D = l[oo]?.value;
    if (D === void 0 || D === v || c.current !== void 0) {
      return;
    }
    if (Ct(D), Kt(true), (0, import_chunk_1tyxkk56.prn)(D)) Te(D);
    else n();
  }, t[43] = n, t[44] = v, t[45] = Te, t[46] = l, t[47] = J;
  else J = t[47];
  let Q;
  if (t[48] !== n || t[49] !== f || t[50] !== i || t[51] !== he || t[52] !== l) Q = (no) => {
    let be = l[no]?.value;
    if (be === void 0 || c.current !== void 0) {
      return;
    }
    if (!(0, import_chunk_1tyxkk56.prn)(be)) {
      n(), i?.(void 0);
      return;
    }
    f(he(be));
  }, t[48] = n, t[49] = f, t[50] = i, t[51] = he, t[52] = l, t[53] = Q;
  else Q = t[53];
  let Z;
  if (t[54] !== l || t[55] !== p) Z = l.map((_) => (0, import_chunk_a46xeenj.e)(import_chunk_8n6jzsq4.Qn.Item, { label: _.label, icon: _.value === p ? (0, import_chunk_a46xeenj.e)(import_chunk_5h92z04c.ln, { status: "success", "aria-label": "current:" }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-hidden": true, children: " ".repeat((0, import_chunk_5h92z04c.O9t)()) }), meta: _.origin === void 0 ? void 0 : [_.origin] }, _.value)), t[54] = l, t[55] = p, t[56] = Z;
  else Z = t[56];
  let K;
  if (t[57] !== Se || t[58] !== ye || t[59] !== J || t[60] !== Q || t[61] !== Z) K = (0, import_chunk_a46xeenj.e)(import_chunk_8n6jzsq4.Qn, { defaultFocusIndex: ye, wrap: false, onFocus: J, onSelect: Q, children: Z }, Se), t[57] = Se, t[58] = ye, t[59] = J, t[60] = Q, t[61] = Z, t[62] = K;
  else K = t[62];
  let ee;
  if (t[63] !== q || t[64] !== K) ee = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", gap: 1, children: [q, K] }), t[63] = q, t[64] = K, t[65] = ee;
  else ee = t[65];
  let wt;
  if (t[66] === import_chunk_w1d7ygsk.R) wt = { oldStart: 1, newStart: 1, oldLines: 3, newLines: 3, lines: [" function greet() {", '-  console.log("Hello, World!");', '+  console.log("Hello, Claude!");', " }"] }, t[66] = wt;
  else wt = t[66];
  const we = jt - 2 * qt;
  let te;
  if (t[67] !== we) te = (0, import_chunk_a46xeenj.e)(import_chunk_9nejjte0.nu, { paddingX: 0, children: (0, import_chunk_a46xeenj.e)(import_chunk_kat5c1mk.h_e, { patch: wt, dim: false, filePath: "demo.js", firstLine: null, width: we }) }), t[67] = we, t[68] = te;
  else te = t[68];
  const Pe = fe === "env" ? `Syntax highlighting disabled (via CLAUDE_CODE_SYNTAX_HIGHLIGHT=${import_chunk_c203g5kd.s.CLAUDE_CODE_SYNTAX_HIGHLIGHT})` : V ? `Syntax highlighting disabled (${xe} to enable)` : F ? `Syntax theme: ${F.theme}${F.source ? ` (from ${F.source})` : ""} (${xe} to disable)` : `Syntax highlighting enabled (${xe} to disable)`;
  let oe;
  if (t[69] !== Pe) oe = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [" ", Pe] }), t[69] = Pe, t[70] = oe;
  else oe = t[70];
  let ne;
  if (t[71] !== te || t[72] !== oe) ne = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", width: "100%", children: [te, oe] }), t[71] = te, t[72] = oe, t[73] = ne;
  else ne = t[73];
  let Pt;
  if (t[74] !== ee || t[75] !== ne) Pt = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", gap: 1, children: [ee, ne] }), t[74] = ee, t[75] = ne, t[76] = Pt;
  else Pt = t[76];
  let x = Pt;
  if (U) {
    let h2;
    if (t[77] !== x) h2 = (0, import_chunk_a46xeenj.e)(import_chunk_vh9td94q.HIe, { reserve: import_chunk_vh9td94q.$2, children: x }), t[77] = x, t[78] = h2;
    else h2 = t[78];
    return h2;
  }
  let h;
  if (t[79] !== Ce || t[80] !== z || t[81] !== d || t[82] !== ue || t[83] !== a || t[84] !== i) h = !ue && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, italic: true, children: z.pending ? (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: ["Press ", z.keyName, " again to cancel"] }) : (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "enter", action: "select", ...(0, import_chunk_jczdrj4v.Qy)(a) }), d && i && (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: Ce, action: "edit", ...(0, import_chunk_jczdrj4v.Qy)(a) }), (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "escape", action: "cancel", ...(0, import_chunk_jczdrj4v.Qy)(a) })] }) }) }), t[79] = Ce, t[80] = z, t[81] = d, t[82] = ue, t[83] = a, t[84] = i, t[85] = h;
  else h = t[85];
  let ie;
  if (t[86] !== h) ie = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { marginTop: 1, children: h }), t[86] = h, t[87] = ie;
  else ie = t[87];
  let kt;
  if (t[88] !== x || t[89] !== ie) kt = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: [x, ie] }), t[88] = x, t[89] = ie, t[90] = kt;
  else kt = t[90];
  return kt;
}
