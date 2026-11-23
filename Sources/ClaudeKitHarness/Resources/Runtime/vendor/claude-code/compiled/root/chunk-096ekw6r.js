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
var chunk_096ekw6r_exports = {};
__export(chunk_096ekw6r_exports, {
  L2: () => L2,
  OZe: () => OZe,
  Su: () => Su,
  pC: () => pC
});
module.exports = __toCommonJS(chunk_096ekw6r_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_69vbx4w6 = require("/$bunfs/root/chunk-69vbx4w6.js");
var import_chunk_p23qhs14 = require("/$bunfs/root/chunk-p23qhs14.js");
var import_chunk_drb2187g = require("/$bunfs/root/chunk-drb2187g.js");
var import_chunk_6fvsq616 = require("/$bunfs/root/chunk-6fvsq616.js");
var import_chunk_3j73ps7b = require("/$bunfs/root/chunk-3j73ps7b.js");
var import_chunk_zvx9zp0y = require("/$bunfs/root/chunk-zvx9zp0y.js");
var import_chunk_1tbk901f = require("/$bunfs/root/chunk-1tbk901f.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function Qt(Ge) {
  return [Ge.props.id ?? Ge.props.title, Ge.props.title];
}
function Ut(a) {
  let [, Ho] = a;
  return Ho;
}
function Xt(Co) {
  return Co + 1;
}
function Zt(D) {
  return D + 1;
}
function _t(b) {
  return b - 1;
}
var T = (0, import_chunk_bs4h6795.an)({ selectedTab: void 0, headerFocused: false, focusHeader: () => {
}, blurHeader: () => {
}, registerOptIn: () => () => {
}, registerNavigationOwner: () => () => {
} });
function L2(a) {
  let d = (0, import_chunk_sng02qpc.k)(48), { title: s, color: n, defaultTab: i, children: l, hidden: t, selectedTab: u, onTabChange: D, banner: b, disableNavigation: ae, initialHeaderFocused: z, contentHeight: f, stableHeight: se, navFromContent: J } = a, Ne = z === void 0 ? true : z, p = se === void 0 ? false : se, Q = J === void 0 ? false : J, m = l.map(Qt), de = i ? m.findIndex((De) => i === De[0]) : 0, H = u !== void 0, [Oe, $t] = (0, import_chunk_bs4h6795.y)(de !== -1 ? de : 0), Sn = H ? m.findIndex((eo) => eo[0] === u) : -1, O = H ? Sn !== -1 ? Sn : 0 : Oe, ce = (0, import_chunk_bs4h6795.be)(import_chunk_6n6exvyx.Rb), C = (0, import_chunk_6n6exvyx.rR)(), S = (0, import_chunk_6n6exvyx.kve)(), Be = (0, import_chunk_bs4h6795.I)(null), [ue, no] = (0, import_chunk_bs4h6795.y)(0), U = (0, import_chunk_bs4h6795.I)(null), [he, to] = (0, import_chunk_bs4h6795.y)(1), Fn;
  if (d[0] !== ue || d[1] !== he) Fn = () => {
    let In = Be.current ? (0, import_chunk_8bkqeb5d.Gr)(Be.current).height : 0;
    if (In !== ue) no(In);
    let Rn = U.current ? Math.max(1, (0, import_chunk_8bkqeb5d.Gr)(U.current).height) : 1;
    if (Rn !== he) to(Rn);
  }, d[0] = ue, d[1] = he, d[2] = Fn;
  else Fn = d[2];
  (0, import_chunk_bs4h6795.It)(Fn);
  let X = (t ? 0 : he + 1) + ue, Nn, Dn;
  if (d[3] !== S || d[4] !== X) Nn = () => {
    if (!S) {
      return;
    }
    return S(X), () => S(null);
  }, Dn = [S, X], d[3] = S, d[4] = X, d[5] = Nn, d[6] = Dn;
  else Nn = d[5], Dn = d[6];
  (0, import_chunk_bs4h6795.It)(Nn, Dn);
  let On;
  if (d[7] === import_chunk_w1d7ygsk.R) On = { rows: 0, columns: 0 }, d[7] = On;
  else On = d[7];
  let { rows: oo } = (0, import_chunk_6n6exvyx.Qo)(On), ro = (0, import_chunk_drb2187g.nR)(), Z = (0, import_chunk_bs4h6795.I)(null), Bn;
  if (d[8] === import_chunk_w1d7ygsk.R) Bn = () => Z.current === null ? 0 : (0, import_chunk_8bkqeb5d.Gr)(Z.current).width, d[8] = Bn;
  else Bn = d[8];
  let io = (0, import_chunk_8bkqeb5d.Wo)(Bn), Mn = vn(s, m.map(Ut), io || ro), F = S !== null && C !== null, Me = C?.attach, fe = F ? oo - X : void 0, En;
  if (d[9] !== ce || d[10] !== F) En = ce && F ? { ...ce, claimScrollBox: null } : null, d[9] = ce, d[10] = F, d[11] = En;
  else En = d[11];
  let Ee = En, { focus: B, focusDirection: Pe, blur: Ae } = (0, import_chunk_8bkqeb5d.KZe)(), [v, _] = (0, import_chunk_bs4h6795.y)(Ne), Pn;
  if (d[12] !== B) Pn = () => {
    if (U.current) B(U.current);
    _(true);
  }, d[12] = B, d[13] = Pn;
  else Pn = d[13];
  let An = Pn, Ln;
  if (d[14] !== Ae || d[15] !== B) Ln = (Vn) => {
    if (Vn) B(Vn);
    else Ae();
    _(false);
  }, d[14] = Ae, d[15] = B, d[16] = Ln;
  else Ln = d[16];
  let lo = Ln, [w, ao] = q(), [so, co] = q(), M = ae || so, Kn = v || !w, uo = (0, import_chunk_p23qhs14.PIe)(Z), ho = w ? v : !uo, [jn, bo] = (0, import_chunk_bs4h6795.nb)(Xt, 0), Gn = (0, import_chunk_bs4h6795.I)(null), qn = (Le, Wn) => {
    let fo = Wn === void 0 ? false : Wn;
    Gn.current = { epoch: jn, index: Le }, bo();
    let Yn = m[Le]?.[0];
    if (H && D && Yn) D(Yn);
    else $t(Le);
    if (fo) {
      return;
    }
    An();
  }, Jn = (po) => {
    let zn = Gn.current;
    let mo = zn?.epoch === jn ? zn.index : O;
    qn((mo + m.length + po) % m.length, !Kn);
  }, E = !t && !M && (Kn || Q), Qn;
  if (d[17] !== E) Qn = { context: "Tabs", isActive: E }, d[17] = E, d[18] = Qn;
  else Qn = d[18];
  (0, import_chunk_6fvsq616.gs)({ "tabs:next": () => Jn(1), "tabs:previous": () => Jn(-1) }, Qn);
  let Un;
  if (d[19] !== v || d[20] !== w || d[21] !== E) Un = !E ? null : [{ on: "down", hint: v && w ? "navigate" : "" }, { action: "tabs:previous", scope: "Tabs" }, { action: "tabs:next", scope: "Tabs" }], d[19] = v, d[20] = w, d[21] = E, d[22] = Un;
  else Un = d[22];
  (0, import_chunk_zvx9zp0y.nl)(Un);
  let Xn;
  if (d[23] !== M || d[24] !== Pe || d[25] !== v || d[26] !== t || d[27] !== w) Xn = (h) => {
    if (t || M) {
      return;
    }
    if (!v) {
      if (h.key === "left" || h.key === "right" || h.key === "tab" || w && (h.key === "up" || h.key === "down")) h.preventDefault();
      return;
    }
    if (h.key === "left" || h.key === "right" || h.key === "tab") h.preventDefault();
    else if (h.key === "down" && w) h.preventDefault(), Pe("down"), _(false);
  }, d[23] = M, d[24] = Pe, d[25] = v, d[26] = t, d[27] = w, d[28] = Xn;
  else Xn = d[28];
  let go = Xn;
  const vo = { selectedTab: m[O][0], headerFocused: v, focusHeader: An, blurHeader: lo, registerOptIn: ao, registerNavigationOwner: co }, Ve = import_chunk_8bkqeb5d.g, wo = "column", Ke = C ? 0 : void 0, je = !t && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { ref: U, tabIndex: 0, autoFocus: Ne, onFocus: () => _(true), onBlur: () => _(false), onKeyDown: go, flexDirection: "row", flexWrap: "wrap", columnGap: 1, paddingLeft: Mn, flexShrink: C ? 0 : void 0, alignSelf: "flex-start", children: [s !== null && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, marginLeft: -Mn, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, color: n, children: s }) }), m.map((xo, Zn) => {
    let [To, ko] = xo;
    return (0, import_chunk_a46xeenj.e)(Ie, { title: ko, isCurrent: O === Zn, headerFocused: ho && !M, color: n ?? "suggestion", onClick: M ? void 0 : () => qn(Zn) }, To);
  })] });
  let pe;
  if (d[29] !== b) pe = b != null && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: Be, flexDirection: "column", flexShrink: 0, children: b }), d[29] = b, d[30] = pe;
  else pe = d[30];
  let me;
  if (d[31] !== Me || d[32] !== Ee || d[33] !== l || d[34] !== f || d[35] !== t || d[36] !== C || d[37] !== F || d[38] !== fe || d[39] !== O || d[40] !== p) me = F ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: Z, marginTop: t ? 0 : 1, flexShrink: 0, children: (0, import_chunk_a46xeenj.e)(import_chunk_69vbx4w6.lH, { ref: Me, flexDirection: "column", flexShrink: 0, height: p ? fe : void 0, maxHeight: p ? void 0 : fe, stickyScroll: false, children: (0, import_chunk_a46xeenj.e)(import_chunk_6n6exvyx.Rb, { value: Ee, children: l }) }, O) }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: Z, marginTop: t ? 0 : 1, height: p ? void 0 : f, minHeight: p ? f : void 0, overflowY: f !== void 0 && !p ? "hidden" : void 0, flexShrink: C ? 0 : void 0, children: l }), d[31] = Me, d[32] = Ee, d[33] = l, d[34] = f, d[35] = t, d[36] = C, d[37] = F, d[38] = fe, d[39] = O, d[40] = p, d[41] = me;
  else me = d[41];
  let _n;
  if (d[42] !== Ve || d[43] !== Ke || d[44] !== je || d[45] !== pe || d[46] !== me) _n = (0, import_chunk_a46xeenj.o)(Ve, { flexDirection: wo, flexShrink: Ke, children: [je, pe, me] }), d[42] = Ve, d[43] = Ke, d[44] = je, d[45] = pe, d[46] = me, d[47] = _n;
  else _n = d[47];
  return (0, import_chunk_a46xeenj.e)(T.Provider, { value: vo, children: _n });
}
function gn(a, s) {
  let n = 0, i = 0;
  for (let l of a) {
    if (l > i) n++, i = s;
    i -= l + 1;
  }
  return n;
}
function vn(a, s, n) {
  if (a === null) return 0;
  let i = (0, import_chunk_mgh1y10w.oe)(a) + 1, l = s.map((t) => (0, import_chunk_mgh1y10w.oe)(t) + 2);
  return Math.max(...l) <= n - i && gn(l, n - i) <= gn([i - 1, ...l], n) ? i : 0;
}
function Ie(a) {
  let f = (0, import_chunk_sng02qpc.k)(18), { title: s, isCurrent: n, headerFocused: i, color: l, onClick: t } = a, [u, D] = (0, import_chunk_bs4h6795.y)(false), b = (0, import_chunk_3j73ps7b.Ab)(), ae = t !== void 0;
  const z = n && i;
  let se;
  if (f[0] !== z) se = { line: 0, column: 1, active: z }, f[0] = z, f[1] = se;
  else se = f[1];
  let J = (0, import_chunk_8bkqeb5d.EP)(se), Ne = import_chunk_d57v19zt.Re.level === 0, p = l && n && i && !Ne, Q;
  if (f[2] !== t || f[3] !== b) Q = t === void 0 ? void 0 : (m) => {
    if (b(m)) {
      return;
    }
    t();
  }, f[2] = t, f[3] = b, f[4] = Q;
  else Q = f[4];
  let De, de;
  if (f[5] === import_chunk_w1d7ygsk.R) De = () => D(true), de = () => D(false), f[5] = De, f[6] = de;
  else De = f[5], de = f[6];
  let H;
  if (f[7] !== ae || f[8] !== l || f[9] !== p || f[10] !== u || f[11] !== n || f[12] !== s) H = p ? (0, import_chunk_a46xeenj.e)(import_chunk_1tbk901f.cE, { color: l, bold: true, padded: true, children: s }) : (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { inverse: n, bold: n, underline: u && ae, children: [" ", s, " "] }), f[7] = ae, f[8] = l, f[9] = p, f[10] = u, f[11] = n, f[12] = s, f[13] = H;
  else H = f[13];
  let Oe;
  if (f[14] !== J || f[15] !== Q || f[16] !== H) Oe = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: J, flexShrink: 0, onClick: Q, onMouseEnter: De, onMouseLeave: de, children: H }), f[14] = J, f[15] = Q, f[16] = H, f[17] = Oe;
  else Oe = f[17];
  return Oe;
}
function Su(a) {
  let D = (0, import_chunk_sng02qpc.k)(3), { title: s, id: n, children: i } = a, { selectedTab: l } = (0, import_chunk_bs4h6795.be)(T), t = (0, import_chunk_6n6exvyx.rl)();
  if (l !== (n ?? s)) {
    return null;
  }
  const u = t ? 0 : void 0;
  let b;
  if (D[0] !== i || D[1] !== u) b = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { width: "100%", flexShrink: u, children: i }), D[0] = i, D[1] = u, D[2] = b;
  else b = D[2];
  return b;
}
function pC() {
  let l = (0, import_chunk_sng02qpc.k)(6), { headerFocused: a, focusHeader: s, blurHeader: n, registerOptIn: i } = (0, import_chunk_bs4h6795.be)(T), t;
  if (l[0] !== i) t = [i], l[0] = i, l[1] = t;
  else t = l[1];
  (0, import_chunk_bs4h6795.It)(i, t);
  let u;
  if (l[2] !== n || l[3] !== s || l[4] !== a) u = { headerFocused: a, focusHeader: s, blurHeader: n }, l[2] = n, l[3] = s, l[4] = a, l[5] = u;
  else u = l[5];
  return u;
}
function q() {
  let n = (0, import_chunk_sng02qpc.k)(3), [a, s] = (0, import_chunk_bs4h6795.y)(0), i;
  if (n[0] === import_chunk_w1d7ygsk.R) i = () => (s(Zt), () => s(_t)), n[0] = i;
  else i = n[0];
  let l = i;
  const t = a > 0;
  let u;
  if (n[1] !== t) u = [t, l], n[1] = t, n[2] = u;
  else u = n[2];
  return u;
}
function OZe() {
  let s = (0, import_chunk_sng02qpc.k)(2), { registerNavigationOwner: a } = (0, import_chunk_bs4h6795.be)(T), n;
  if (s[0] !== a) n = [a], s[0] = a, s[1] = n;
  else n = s[1];
  (0, import_chunk_bs4h6795.It)(a, n);
}
