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
var chunk_5h92z04c_exports = {};
__export(chunk_5h92z04c_exports, {
  Bse: () => Bse,
  Dte: () => Dte,
  O9t: () => O9t,
  ln: () => ln
});
module.exports = __toCommonJS(chunk_5h92z04c_exports);
var import_chunk_7r4ehpnw = require("/$bunfs/root/chunk-7r4ehpnw.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_gdmb039p = require("/$bunfs/root/chunk-gdmb039p.js");
var import_chunk_0t7st4dz = require("/$bunfs/root/chunk-0t7st4dz.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_dv7h0mb5 = require("/$bunfs/root/chunk-dv7h0mb5.js");
var Bse = { success: { icon: import_chunk_7r4ehpnw.xe.tick, color: "success", ariaLabel: "done:" }, error: { icon: import_chunk_7r4ehpnw.xe.cross, color: "error", ariaLabel: "failed:" }, warning: { icon: import_chunk_7r4ehpnw.xe.warning, color: "warning", ariaLabel: "warning:" }, info: { icon: import_chunk_7r4ehpnw.xe.info, color: "suggestion", ariaLabel: "note:" }, pending: { icon: import_chunk_7r4ehpnw.xe.circle, color: void 0, ariaLabel: "pending:" }, loading: { icon: "\u2026", color: void 0, ariaLabel: "loading:" }, running: { icon: import_chunk_xcgcdx61.Fc, color: void 0, ariaLabel: "running:" }, on: { icon: import_chunk_7r4ehpnw.xe.tick, color: "success", ariaLabel: "on:" }, off: { icon: import_chunk_7r4ehpnw.xe.circle, color: void 0, ariaLabel: "off:" }, working: { icon: import_chunk_xcgcdx61.Hut, color: void 0, ariaLabel: "working:" }, needsYou: { icon: import_chunk_xcgcdx61.Hut, color: "warning", ariaLabel: "needs you:" }, idle: { icon: import_chunk_xcgcdx61.Hut, color: void 0, ariaLabel: "idle:" }, failed: { icon: import_chunk_xcgcdx61.Hut, color: "error", ariaLabel: "error:" } }, I = { working: import_chunk_xcgcdx61.Hut, needsYou: "!", idle: "\u25E6", failed: "\xD7" }, L = 8, Y = 200;
function O9t() {
  return Math.max(...Object.values(Bse).map((l) => (0, import_chunk_mgh1y10w.oe)(l.icon)));
}
function Dte() {
  return O9t() + 1;
}
function ln(l) {
  let a = (0, import_chunk_sng02qpc.k)(20), { status: i, "aria-label": s, withSpace: u, slot: t } = l, c = u === void 0 ? false : u;
  if (i === void 0) {
    let p2;
    if (a[0] !== t) p2 = t && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: " ".repeat(Dte()) }), a[0] = t, a[1] = p2;
    else p2 = a[1];
    return p2;
  }
  let n = Bse[i], p;
  if (a[2] !== s || a[3] !== n || a[4] !== t) p = s ?? (t === "trailing" ? (0, import_chunk_7cfjrnwy.Lm)(n.ariaLabel, ":") : n.ariaLabel), a[2] = s, a[3] = n, a[4] = t, a[5] = p;
  else p = a[5];
  let d = p;
  if (B(i)) {
    let f2;
    if (a[6] !== t || a[7] !== d || a[8] !== i || a[9] !== c) f2 = (0, import_chunk_a46xeenj.e)(M, { status: i, spoken: d, slot: t, withSpace: c }), a[6] = t, a[7] = d, a[8] = i, a[9] = c, a[10] = f2;
    else f2 = a[10];
    return f2;
  }
  const f = n.color, m = !n.color;
  let g;
  if (a[11] !== n.icon || a[12] !== t || a[13] !== d || a[14] !== c) g = x(n.icon, d, t, c), a[11] = n.icon, a[12] = t, a[13] = d, a[14] = c, a[15] = g;
  else g = a[15];
  let h;
  if (a[16] !== n.color || a[17] !== m || a[18] !== g) h = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: f, dimColor: m, children: g }), a[16] = n.color, a[17] = m, a[18] = g, a[19] = h;
  else h = a[19];
  return h;
}
function x(l, i, s, u) {
  let t = s === void 0 ? u && " " : (0, import_chunk_7cfjrnwy.xd)(" ", Dte() - (0, import_chunk_mgh1y10w.oe)(l));
  return (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [s === "trailing" && t, (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-label": i, children: l }), s !== "trailing" && t] });
}
function B(l) {
  return l in I;
}
function M(l) {
  let a = (0, import_chunk_sng02qpc.k)(17), { status: i, spoken: s, slot: u, withSpace: t } = l, c = (0, import_chunk_3jkk3v3z.mC)(), p;
  if (a[0] !== c.subtle) p = (0, import_chunk_gdmb039p.XK)(c.subtle), a[0] = c.subtle, a[1] = p;
  else p = a[1];
  let n = p, d;
  if (a[2] !== c.inactive) d = (0, import_chunk_gdmb039p.XK)(c.inactive), a[2] = c.inactive, a[3] = d;
  else d = a[3];
  let f = d, { color: m } = Bse[i], g = import_chunk_d57v19zt.Re.level >= 2 && n !== null && f !== null;
  const h = g ? import_chunk_xcgcdx61.Hut : I[i];
  let K;
  if (a[4] !== u || a[5] !== s || a[6] !== h || a[7] !== t) K = x(h, s, u, t), a[4] = u, a[5] = s, a[6] = h, a[7] = t, a[8] = K;
  else K = a[8];
  let b = K;
  if (g && i === "working") {
    let S2;
    if (a[9] !== f || a[10] !== n || a[11] !== b) S2 = (0, import_chunk_a46xeenj.e)(N, { dimmer: n, dim: f, children: b }), a[9] = f, a[10] = n, a[11] = b, a[12] = S2;
    else S2 = a[12];
    return S2;
  }
  const S = !m;
  let Q;
  if (a[13] !== m || a[14] !== b || a[15] !== S) Q = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: m, dimColor: S, children: b }), a[13] = m, a[14] = b, a[15] = S, a[16] = Q;
  else Q = a[16];
  return Q;
}
function N(l) {
  let d = (0, import_chunk_sng02qpc.k)(8), { dimmer: i, dim: s, children: u } = l, t = (0, import_chunk_0t7st4dz.Kh)(), c = (0, import_chunk_8bkqeb5d.Xe)(), a = t || c, p = Math.ceil((0, import_chunk_8bkqeb5d.jmt)(Y) / import_chunk_dv7h0mb5.L_) * import_chunk_dv7h0mb5.L_, [, n] = (0, import_chunk_8bkqeb5d.gc)(a ? null : p), f;
  if (d[0] !== s || d[1] !== i || d[2] !== a || d[3] !== n) f = a ? "subtle" : (0, import_chunk_gdmb039p.dH)((0, import_chunk_gdmb039p.$D)(i, s, (0, import_chunk_gdmb039p.PIt)(Math.floor(n / p) % L, L))), d[0] = s, d[1] = i, d[2] = a, d[3] = n, d[4] = f;
  else f = d[4];
  let m = f, g;
  if (d[5] !== u || d[6] !== m) g = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: m, children: u }), d[5] = u, d[6] = m, d[7] = g;
  else g = d[7];
  return g;
}
