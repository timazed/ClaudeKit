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
var chunk_5wkdkesy_exports = {};
__export(chunk_5wkdkesy_exports, {
  g9t: () => g9t
});
module.exports = __toCommonJS(chunk_5wkdkesy_exports);
var import_chunk_7r4ehpnw = require("/$bunfs/root/chunk-7r4ehpnw.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_3j73ps7b = require("/$bunfs/root/chunk-3j73ps7b.js");
var import_chunk_zvx9zp0y = require("/$bunfs/root/chunk-zvx9zp0y.js");
var import_chunk_6qkpxgbg = require("/$bunfs/root/chunk-6qkpxgbg.js");
var import_chunk_fv4zcby7 = require("/$bunfs/root/chunk-fv4zcby7.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function ut(Mt) {
  return (0, import_chunk_mgh1y10w.oe)(Mt.label);
}
var ge = 10, Ce = 64, Me = 22;
function g9t(pt) {
  let a = (0, import_chunk_sng02qpc.k)(53), { label: w, stops: s, value: T, onChange: de, reading: ft, note: c } = pt, Fe = (0, import_chunk_6n6exvyx.qe)(), { columns: ce } = (0, import_chunk_6n6exvyx.Qo)(Fe), me = (0, import_chunk_bs4h6795.I)(null), Ke;
  if (a[0] !== ce) Ke = () => me.current && (0, import_chunk_8bkqeb5d.Gr)(me.current).width || ce, a[0] = ce, a[1] = Ke;
  else Ke = a[1];
  let Q = (0, import_chunk_8bkqeb5d.Wo)(Ke), vt = (0, import_chunk_8bkqeb5d.Xe)(), ue = (0, import_chunk_3j73ps7b.Ab)(), [j, S] = (0, import_chunk_bs4h6795.y)(null), He;
  if (a[2] === import_chunk_w1d7ygsk.R) He = [{ on: ["left", "right"], hint: "adjust" }], a[2] = He;
  else He = a[2];
  (0, import_chunk_zvx9zp0y.nl)(He);
  let ze;
  if (a[3] !== T) ze = (ht) => ht.value === T, a[3] = T, a[4] = ze;
  else ze = a[4];
  let t = s.findIndex(ze), n = s.length - 1, f = ft ?? s[t]?.label ?? "", Y, D, Je, F, v;
  if (a[5] !== n || a[6] !== s) v = s.map(ut), D = Math.floor(((v[0] ?? 1) - 1) / 2), F = Math.ceil(((v[n] ?? 1) - 1) / 2), Y = D + 1 + F, Je = Math.max(0, ...v), a[5] = n, a[6] = s, a[7] = Y, a[8] = D, a[9] = Je, a[10] = F, a[11] = v;
  else Y = a[7], D = a[8], Je = a[9], F = a[10], v = a[11];
  let Pe = Je, E = Math.max(Pe + (Y + (Pe + 2) * n <= Q ? 2 : 1), Math.min(ge, Math.floor((Math.min(Q, Ce) - Y) / Math.max(1, n)))), K = vt, H = !K && Y + E * n <= Q && Fe.rows >= Me, X = (0, import_chunk_mgh1y10w.oe)(`${w}: `), pe = c !== void 0 && X + (0, import_chunk_mgh1y10w.oe)(`${import_chunk_xcgcdx61.IKt} ${f} ${import_chunk_xcgcdx61.MKt} (${c})`) <= Q;
  const fe = H ? 1 : 0, ve = H ? D + E * Math.max(0, t) : X + (K ? 0 : 2);
  let Qe;
  if (a[12] !== fe || a[13] !== ve) Qe = { line: fe, column: ve, active: true }, a[12] = fe, a[13] = ve, a[14] = Qe;
  else Qe = a[14];
  let he = (0, import_chunk_8bkqeb5d.EP)(Qe), Ye;
  if (a[15] !== n || a[16] !== de || a[17] !== s || a[18] !== T) Ye = function h2(xt) {
    let be = s[Math.max(0, Math.min(n, xt))];
    if (be !== void 0 && be.value !== T) de(be.value);
  }, a[15] = n, a[16] = de, a[17] = s, a[18] = T, a[19] = Ye;
  else Ye = a[19];
  let h = Ye, Ue;
  if (a[20] !== h || a[21] !== ue) Ue = function A2(bt, Be) {
    if (!ue(Be)) Be.endClickChain(), h(bt);
  }, a[20] = h, a[21] = ue, a[22] = Ue;
  else Ue = a[22];
  let A = Ue, Ie;
  if (a[23] !== t || a[24] !== n || a[25] !== h) Ie = function U2(x) {
    if (x.ctrl || x.meta) {
      return;
    }
    let Ne = x.name === "left" ? t - 1 : x.name === "right" ? t + 1 : x.name === "home" ? 0 : x.name === "end" ? n : void 0;
    if (Ne !== void 0) x.preventDefault(), h(Ne);
  }, a[23] = t, a[24] = n, a[25] = h, a[26] = Ie;
  else Ie = a[26];
  let U = Ie, Re;
  if (a[27] !== f) Re = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, color: "suggestion", children: f }), a[27] = f, a[28] = Re;
  else Re = a[28];
  let B = Re, N;
  if (a[29] !== t || a[30] !== A || a[31] !== B || a[32] !== H || a[33] !== j || a[34] !== K || a[35] !== w || a[36] !== n || a[37] !== D || a[38] !== c || a[39] !== pe || a[40] !== f || a[41] !== E || a[42] !== s || a[43] !== F || a[44] !== X || a[45] !== v) N = K ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [w, ": ", f, (0, import_chunk_a46xeenj.e)(import_chunk_fv4zcby7.hs, { when: c !== void 0, children: c }), t === -1 ? "" : `, ${t + 1} of ${s.length}`] }) : H ? (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [w, ": ", B, (0, import_chunk_a46xeenj.e)(import_chunk_fv4zcby7.hs, { when: c !== void 0, children: c })] }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { children: s.map((Ve, b) => {
    let ke = b === 0 ? D : Math.floor((E - 1) / 2);
    let Ze = b === n ? F : Math.ceil((E - 1) / 2);
    let L = b === t;
    return (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", flexShrink: 0, width: ke + 1 + Ze, onClick: (kt) => A(b, kt), onMouseEnter: () => S(b), onMouseLeave: () => S(null), children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: import_chunk_xcgcdx61.ace.repeat(ke) }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: L, dimColor: !L, children: L ? import_chunk_7r4ehpnw.xe.triangleUp : import_chunk_xcgcdx61.ace }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: import_chunk_xcgcdx61.ace.repeat(Ze) })] }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: ke - Math.floor(((v[b] ?? 1) - 1) / 2), backgroundColor: j === b ? import_chunk_6qkpxgbg.XS : void 0, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: L, dimColor: !L, color: L ? "suggestion" : void 0, children: Ve.label }) })] }, Ve.value);
  }) })] }) : (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, width: X, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [w, ":"] }) }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, width: 2, onClick: (gt) => A(t - 1, gt), onMouseEnter: () => S(-1), onMouseLeave: () => S(null), backgroundColor: j === -1 && t > 0 ? import_chunk_6qkpxgbg.XS : void 0, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: t > 0 ? import_chunk_xcgcdx61.IKt : " " }) }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { wrap: "truncate-end", children: B }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, width: 2, paddingLeft: 1, onClick: (Ct) => A(t + 1, Ct), onMouseEnter: () => S(s.length), onMouseLeave: () => S(null), backgroundColor: j === s.length && t < n ? import_chunk_6qkpxgbg.XS : void 0, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: t < n ? import_chunk_xcgcdx61.MKt : " " }) }), (0, import_chunk_a46xeenj.e)(import_chunk_fv4zcby7.hs, { when: pe, children: c })] }), a[29] = t, a[30] = A, a[31] = B, a[32] = H, a[33] = j, a[34] = K, a[35] = w, a[36] = n, a[37] = D, a[38] = c, a[39] = pe, a[40] = f, a[41] = E, a[42] = s, a[43] = F, a[44] = X, a[45] = v, a[46] = N;
  else N = a[46];
  let V;
  if (a[47] !== he || a[48] !== N) V = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: he, flexDirection: "column", children: N }), a[47] = he, a[48] = N, a[49] = V;
  else V = a[49];
  let Ge;
  if (a[50] !== U || a[51] !== V) Ge = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: me, flexDirection: "column", tabIndex: 0, autoFocus: true, onKeyDown: U, children: V }), a[50] = U, a[51] = V, a[52] = Ge;
  else Ge = a[52];
  return Ge;
}
