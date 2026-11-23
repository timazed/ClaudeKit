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
var chunk_b67vf457_exports = {};
__export(chunk_b67vf457_exports, {
  $Ws: () => $Ws,
  E2l: () => E2l
});
module.exports = __toCommonJS(chunk_b67vf457_exports);
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_ffh9jsxe = require("/$bunfs/root/chunk-ffh9jsxe.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_74h6kcya = require("/$bunfs/root/chunk-74h6kcya.js");
var import_chunk_k9trh041 = require("/$bunfs/root/chunk-k9trh041.js");
var import_chunk_t7wkkwx8 = require("/$bunfs/root/chunk-t7wkkwx8.js");
var import_chunk_z4vemndw = require("/$bunfs/root/chunk-z4vemndw.js");
var import_chunk_h4m8apfn = require("/$bunfs/root/chunk-h4m8apfn.js");
var import_chunk_dak4322a = require("/$bunfs/root/chunk-dak4322a.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var se = { [import_chunk_k449cc64.lu]: "artifact content written by others", [import_chunk_trwykz8a.jb]: "content from another device" };
function W(t) {
  let n = t, s = [];
  for (let l of import_chunk_trwykz8a.Th.toReversed()) {
    let p = (0, import_chunk_k9trh041.Rzo)(l);
    if (n.endsWith(p)) {
      let d = se[l];
      if (d === void 0) return null;
      n = n.slice(0, -p.length), s.unshift(d);
    }
  }
  return s.length > 0 && n.endsWith(`
`) ? { body: n.slice(0, -1), label: `May include ${s.join(" and ")}` } : null;
}
function Te(he) {
  return he.verbose;
}
var O = "</cross-session-message>", j = "peer";
function F(t) {
  let n = import_chunk_865at33z.lPe.find((h) => t.startsWith(h)), l = (n ? t.slice(n.length) : t).match(/^<cross-session-message\b([^>]*)>/)?.[1] ?? "", p = l.match(/\bfrom="([^"]+)"/)?.[1], d = l.match(/\bfrom-name="([^"]+)"/)?.[1];
  return te(d, p);
}
function te(t, n) {
  return t && (0, import_chunk_xfj2cwfv.iT)(t) || n && (0, import_chunk_xfj2cwfv.iT)(Re(n)) || j;
}
function G(t, n) {
  let s = t, l = import_chunk_865at33z.lPe.find((d) => s.startsWith(d));
  if (l) s = s.slice(l.length);
  let p = s.lastIndexOf(O) + O.length;
  if (p > O.length - 1) {
    let d = s.slice(p);
    if (import_chunk_865at33z.Hzn.includes(d) || n && import_chunk_865at33z.A4i.includes(d)) s = s.slice(0, p);
  }
  return s.replace(/^<cross-session-message[^>]*>\n/, "").replace(/\n<\/cross-session-message>$/, "");
}
function $Ws(t, n) {
  let s = G(t, n), l = (0, import_chunk_kx2fp6pc.FE)((0, import_chunk_wbk1hf21.Tl)(s.replace(new RegExp("\\p{Cs}", "gu"), "\u200B")), " ", { keepEmojiJoiners: true }).replace(/\s+/g, " ").trim();
  return (0, import_chunk_xfj2cwfv.N6n)(s) !== l;
}
function E2l(t) {
  let m = (0, import_chunk_sng02qpc.k)(23), { addMargin: n, param: s, hostInjected: l, verbose: p, isTranscriptMode: d, messageId: h, origin: a, followsSpeakerLabel: D } = t, { text: S } = s, u = D === void 0 ? false : D, i = (0, import_chunk_ffh9jsxe.YK)(p, d), w;
  if (m[0] !== S) w = F(S), m[0] = S, m[1] = w;
  else w = m[1];
  let x = w;
  const I = l === true;
  let M;
  if (m[2] !== I || m[3] !== S) M = G(S, I), m[2] = I, m[3] = S, m[4] = M;
  else M = m[4];
  let E = M, y;
  if (m[5] !== a) y = a?.kind === "peer" && a.plugin !== void 0 ? (0, import_chunk_xfj2cwfv.iT)(a.plugin) : "", m[5] = a, m[6] = y;
  else y = m[6];
  let T = y;
  const b = i || u;
  let c;
  if (m[7] !== x) c = { name: x }, m[7] = x, m[8] = c;
  else c = m[8];
  let f;
  if (m[9] !== n || m[10] !== E || m[11] !== x || m[12] !== i || m[13] !== u || m[14] !== T) f = (P) => (0, import_chunk_a46xeenj.e)(q, { addMargin: n, displayName: x, senderPlugin: T, expanded: i, followsSpeakerLabel: u, delivered: E, body: P }), m[9] = n, m[10] = E, m[11] = x, m[12] = i, m[13] = u, m[14] = T, m[15] = f;
  else f = m[15];
  let N;
  if (m[16] !== E || m[17] !== h || m[18] !== a || m[19] !== b || m[20] !== c || m[21] !== f) N = { messageId: h, stored: a, text: E, isExpanded: b, sender: c, draw: f }, m[16] = E, m[17] = h, m[18] = a, m[19] = b, m[20] = c, m[21] = f, m[22] = N;
  else N = m[22];
  return import_chunk_h4m8apfn.Yce.useUserMessageSite(N);
}
function q(t) {
  let i = (0, import_chunk_sng02qpc.k)(35), { addMargin: n, displayName: s, senderPlugin: l, expanded: p, followsSpeakerLabel: d, delivered: h, body: a } = t, D = (0, import_chunk_74h6kcya.Ps)(Te) === true, S = (0, import_chunk_ffh9jsxe.bve)(), u = D || S;
  if (!p && !d) {
    let m2;
    if (i[0] !== n || i[1] !== a || i[2] !== s) m2 = (0, import_chunk_a46xeenj.e)(import_chunk_z4vemndw.TIe, { displayName: s, addMargin: n, fallbackLabel: j, body: a }), i[0] = n, i[1] = a, i[2] = s, i[3] = m2;
    else m2 = i[3];
    return m2;
  }
  let m;
  if (i[4] !== a || i[5] !== u) m = u ? null : v(a), i[4] = a, i[5] = u, i[6] = m;
  else m = i[6];
  let w = m, x;
  if (i[7] !== h || i[8] !== u || i[9] !== w) x = u ? void 0 : (v(h) ?? w)?.label, i[7] = h, i[8] = u, i[9] = w, i[10] = x;
  else x = i[10];
  let I = x, M = w !== null && w.label === I ? w.body : a, E;
  if (i[11] !== I) E = I === void 0 ? null : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { marginTop: 1, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: I }) }), i[11] = I, i[12] = E;
  else E = i[12];
  let y = E, T = y === null ? void 0 : "blockquote";
  if (d) {
    let b2;
    if (i[13] !== M) b2 = (0, import_chunk_a46xeenj.e)(import_chunk_h4m8apfn.HL, { text: M }), i[13] = M, i[14] = b2;
    else b2 = i[14];
    let c2;
    if (i[15] !== T || i[16] !== b2) c2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { "aria-role": T, children: b2 }), i[15] = T, i[16] = b2, i[17] = c2;
    else c2 = i[17];
    let f2;
    if (i[18] !== y || i[19] !== c2) f2 = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [c2, y] }), i[18] = y, i[19] = c2, i[20] = f2;
    else f2 = i[20];
    return f2;
  }
  let b;
  if (i[21] === import_chunk_w1d7ygsk.R) b = (0, import_chunk_z4vemndw.H2)(void 0), i[21] = b;
  else b = i[21];
  const c = l ? `<${l} plugin>` : void 0;
  let f;
  if (i[22] !== s || i[23] !== c) f = (0, import_chunk_a46xeenj.e)(import_chunk_z4vemndw.d_e, { name: s, color: b, source: c }), i[22] = s, i[23] = c, i[24] = f;
  else f = i[24];
  let P;
  if (i[25] !== M) P = (0, import_chunk_a46xeenj.e)(import_chunk_t7wkkwx8.ru, { stripPromptTags: false, children: M }), i[25] = M, i[26] = P;
  else P = i[26];
  let N;
  if (i[27] !== T || i[28] !== P) N = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: 2, "aria-role": T, children: P }), i[27] = T, i[28] = P, i[29] = N;
  else N = i[29];
  let oe;
  if (i[30] !== n || i[31] !== y || i[32] !== f || i[33] !== N) oe = (0, import_chunk_a46xeenj.o)(import_chunk_dak4322a.fi, { addMargin: n, children: [f, N, y] }), i[30] = n, i[31] = y, i[32] = f, i[33] = N, i[34] = oe;
  else oe = i[34];
  return oe;
}
function v(t) {
  let n = W(t);
  return n !== null && (0, import_chunk_xfj2cwfv.N6n)(n.body) !== "" ? n : null;
}
function Re(t) {
  let { scheme: n, target: s } = (0, import_chunk_xfj2cwfv.Wb)(t);
  switch (n) {
    case "uds":
      return s.slice(Math.max(s.lastIndexOf("/"), s.lastIndexOf("\\")) + 1).replace(/\.sock$/, "");
    case "bridge":
      return "(untitled)";
    case "did":
    case "other":
      return t;
  }
}
