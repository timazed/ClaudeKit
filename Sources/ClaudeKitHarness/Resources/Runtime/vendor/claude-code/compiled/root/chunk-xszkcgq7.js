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
var chunk_xszkcgq7_exports = {};
__export(chunk_xszkcgq7_exports, {
  Cwn: () => Cwn,
  VYn: () => VYn,
  fWr: () => fWr,
  pWr: () => pWr,
  uWr: () => uWr
});
module.exports = __toCommonJS(chunk_xszkcgq7_exports);
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_m3vj3nyt = require("/$bunfs/root/chunk-m3vj3nyt.js");
var import_chunk_74h6kcya = require("/$bunfs/root/chunk-74h6kcya.js");
var import_chunk_5h92z04c = require("/$bunfs/root/chunk-5h92z04c.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_v2br6d1p = require("/$bunfs/root/chunk-v2br6d1p.js");
var import_chunk_sfhx01p4 = require("/$bunfs/root/chunk-sfhx01p4.js");
var import_chunk_2xe3kg3m = require("/$bunfs/root/chunk-2xe3kg3m.js");
var import_chunk_y192p33y = require("/$bunfs/root/chunk-y192p33y.js");
var import_chunk_fv4zcby7 = require("/$bunfs/root/chunk-fv4zcby7.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function uWr(d) {
  return d.remoteBootstrap?.wake === false ? (0, import_chunk_m3vj3nyt.iya)(d.cloudSessionSync, d.cloudMessageHeld !== void 0, d.remoteBootstrap.filesWarning) : void 0;
}
function fWr(d) {
  let t = d.remoteBootstrap;
  return t !== null && (t.hasStructuredSteps || t.seededFor !== null) && !t.dismissed && (!t.terminal && !(0, import_chunk_y192p33y.XYn)(t) || !t.hasClosed && uWr(d)?.status === "running");
}
function VYn(d) {
  let t = uWr(d);
  return t !== void 0 && t.status !== "completed" && fWr(d);
}
function Z(ee) {
  return ee.cloudSessionSync;
}
function z(l) {
  return l !== void 0 && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "wrap", children: l }, l);
}
function Cwn(d) {
  let n = (0, import_chunk_sng02qpc.k)(20), { message: t, addMargin: a } = d, { columns: s } = (0, import_chunk_6n6exvyx.qe)(), i;
  if (n[0] !== t.url) i = (c) => c.remoteSessionUrl === t.url, n[0] = t.url, n[1] = i;
  else i = n[1];
  let L = (0, import_chunk_74h6kcya.X)(i), m = (0, import_chunk_74h6kcya.X)(Z), f = (0, import_chunk_74h6kcya.X)(VYn), h = (0, import_chunk_bs4h6795.be)(import_chunk_v2br6d1p.NL) && f && m !== void 0 ? { ...m, projectFiles: void 0 } : m, [y, l] = (0, import_chunk_sfhx01p4.UI)(h);
  if (!L) {
    return null;
  }
  let p = t.entry !== "create", U;
  if (n[2] !== t.entry || n[3] !== l) U = t.entry === "move" || l === void 0 ? l : (0, import_chunk_m3vj3nyt.p2s)(l), n[2] = t.entry, n[3] = l, n[4] = U;
  else U = n[4];
  let S = U, T;
  if (n[5] !== a || n[6] !== s || n[7] !== p || n[8] !== t.entry || n[9] !== t.url) T = p && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "row", marginTop: a ? 1 : 0, children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { minWidth: 2, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-hidden": true, dimColor: true, children: import_chunk_xcgcdx61.Fc }) }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { width: s - 2, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "wrap", children: [import_chunk_2xe3kg3m.$Uo[t.entry], import_chunk_2xe3kg3m.UUo, (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: t.url, children: t.url })] }) })] }), n[5] = a, n[6] = s, n[7] = p, n[8] = t.entry, n[9] = t.url, n[10] = T;
  else T = n[10];
  let x;
  if (n[11] !== a || n[12] !== p || n[13] !== l || n[14] !== S) x = l !== void 0 && S !== void 0 && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", marginTop: a && !p ? 1 : 0, paddingLeft: 2, children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: import_chunk_m3vj3nyt.jUo }), (0, import_chunk_a46xeenj.e)(pWr, { rows: l, shown: S })] }), n[11] = a, n[12] = p, n[13] = l, n[14] = S, n[15] = x;
  else x = n[15];
  let Y;
  if (n[16] !== y || n[17] !== T || n[18] !== x) Y = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { ref: y, flexDirection: "column", width: "100%", children: [T, x] }), n[16] = y, n[17] = T, n[18] = x, n[19] = Y;
  else Y = n[19];
  return Y;
}
var D = ["projectFiles", "settings", "plugins", "localTools"];
function pWr(d) {
  let n = (0, import_chunk_sng02qpc.k)(14), { rows: t, shown: a } = d, s = a === void 0 ? t : a, i;
  if (n[0] !== s) i = D.map((c) => {
    let L = s[c];
    return L !== void 0 && (0, import_chunk_a46xeenj.e)(H, { label: import_chunk_m3vj3nyt.gWr[c], row: L }, c);
  }), n[0] = s, n[1] = i;
  else i = n[1];
  let m;
  if (n[2] !== t || n[3] !== s.whileClosed) m = s.whileClosed && (0, import_chunk_m3vj3nyt.zUo)(t), n[2] = t, n[3] = s.whileClosed, n[4] = m;
  else m = n[4];
  let f;
  if (n[5] !== t || n[6] !== s.repositoryTrust) f = s.repositoryTrust && (0, import_chunk_m3vj3nyt.VUo)(t), n[5] = t, n[6] = s.repositoryTrust, n[7] = f;
  else f = n[7];
  let h;
  if (n[8] !== m || n[9] !== f) h = [m, f].map(z), n[8] = m, n[9] = f, n[10] = h;
  else h = n[10];
  let y;
  if (n[11] !== i || n[12] !== h) y = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: [i, h] }), n[11] = i, n[12] = h, n[13] = y;
  else y = n[13];
  return y;
}
function H(d) {
  let s = (0, import_chunk_sng02qpc.k)(15), { label: t, row: a } = d;
  switch (a.mark) {
    case "synced": {
      let n;
      if (s[0] === import_chunk_w1d7ygsk.R) n = (0, import_chunk_a46xeenj.e)(import_chunk_5h92z04c.ln, { status: "success", withSpace: true }), s[0] = n;
      else n = s[0];
      let i;
      if (s[1] !== a.note) i = a.note !== void 0 && (0, import_chunk_a46xeenj.e)(import_chunk_fv4zcby7.hs, { children: a.note }), s[1] = a.note, s[2] = i;
      else i = s[2];
      let c;
      if (s[3] !== t || s[4] !== i) c = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [n, t, i, null] }), s[3] = t, s[4] = i, s[5] = c;
      else c = s[5];
      return c;
    }
    case "pending": {
      let n;
      if (s[6] === import_chunk_w1d7ygsk.R) n = (0, import_chunk_a46xeenj.e)(import_chunk_5h92z04c.ln, { status: "loading", withSpace: true }), s[6] = n;
      else n = s[6];
      let i;
      if (s[7] !== t) i = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [n, t, null] }), s[7] = t, s[8] = i;
      else i = s[8];
      return i;
    }
    case "not_synced": {
      let n;
      if (s[9] === import_chunk_w1d7ygsk.R) n = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-label": "not synced:", children: import_chunk_m3vj3nyt.GUo }), s[9] = n;
      else n = s[9];
      let i;
      if (s[10] !== a.words) i = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [" \u2014 ", a.words] }), s[10] = a.words, s[11] = i;
      else i = s[11];
      let c;
      if (s[12] !== t || s[13] !== i) c = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "wrap", children: [n, " ", t, i] }), s[12] = t, s[13] = i, s[14] = c;
      else c = s[14];
      return c;
    }
  }
}
