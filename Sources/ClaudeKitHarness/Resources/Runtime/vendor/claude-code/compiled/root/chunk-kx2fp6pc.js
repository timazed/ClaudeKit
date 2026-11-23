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
var chunk_kx2fp6pc_exports = {};
__export(chunk_kx2fp6pc_exports, {
  $4t: () => $4t,
  $c: () => $c,
  BLr: () => BLr,
  BLs: () => BLs,
  Cm: () => Cm,
  EWl: () => EWl,
  Ek: () => Ek,
  F4t: () => F4t,
  FE: () => FE,
  FOe: () => FOe,
  GLs: () => GLs,
  Iu: () => Iu,
  Ji: () => Ji,
  K8: () => K8,
  L4t: () => L4t,
  LOe: () => LOe,
  N4t: () => N4t,
  NOe: () => NOe,
  O3: () => O3,
  Og: () => Og,
  P3: () => P3,
  Pce: () => Pce,
  Qft: () => Qft,
  Syn: () => Syn,
  TWl: () => TWl,
  UK: () => UK,
  ULr: () => ULr,
  ULs: () => ULs,
  V6e: () => V6e,
  V8: () => V8,
  WLr: () => WLr,
  WLs: () => WLs,
  Yn: () => Yn,
  Z0o: () => Z0o,
  _2: () => _2,
  aPt: () => aPt,
  b1e: () => b1e,
  bQe: () => bQe,
  byn: () => byn,
  eLo: () => eLo,
  g2: () => g2,
  hse: () => hse,
  jLr: () => jLr,
  jLs: () => jLs,
  kWl: () => kWl,
  kyn: () => kyn,
  lg: () => lg,
  mh: () => mh,
  msa: () => msa,
  n3n: () => n3n,
  nLo: () => nLo,
  nw: () => nw,
  oLo: () => oLo,
  psa: () => psa,
  qM: () => qM,
  r3n: () => r3n,
  rLo: () => rLo,
  sLo: () => sLo,
  tLo: () => tLo,
  vWl: () => vWl,
  wWl: () => wWl,
  wn: () => wn,
  wyn: () => wyn,
  xce: () => xce,
  y$: () => y$,
  yyn: () => yyn,
  z6e: () => z6e
});
module.exports = __toCommonJS(chunk_kx2fp6pc_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var y = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF]|[\uDC00-\uDFFF]/g;
function K(e) {
  return e.replace(y, (n) => n.length === 2 ? n : "");
}
var m = new RegExp("[\\p{Cc}\\p{Cf}\\p{Zl}\\p{Zp}\\p{Default_Ignorable_Code_Point}\\u2800]|(?!\\u0020)\\p{Zs}", "gu"), O = 1024;
function wn(e) {
  if (typeof e !== "string") return "";
  return (0, import_chunk_7cfjrnwy.ee)(ULr(e.length > 4096 ? e.slice(0, 4096) : e), O);
}
function ULr(e) {
  if (typeof e !== "string") return "";
  let n = e;
  for (let t = 0; t < 64; t++) {
    let r = K(n).replace(m, "");
    if (r === n) return r;
    n = r;
  }
  return "";
}
function L4t(e) {
  if (typeof e !== "string") return "";
  return (e.length > 4096 ? e.slice(0, 4096) : e).replace(y, (t) => t.length === 2 ? t : " ").replace(m, " ");
}
function n3n(e) {
  if (e.length > 16384) return null;
  let n = e;
  for (let t = 0; t < 64; t++) {
    let r = K(n).replace(m, "");
    if (r === n) return [...r].length <= 8192 ? r : null;
    n = r;
  }
  return null;
}
function wWl(e) {
  let n = e.slice(0, 3).map((r) => n3n(r) ?? "[elicitation URL too long to relay]"), t = e.length > 3 ? ` \u2026and ${e.length - 3} more \u2014 re-run in the terminal to see all` : "";
  return `${n.join(", ")}${t}`;
}
var T = /^[\t\n\r ]*[[{]/;
function xce(e, n, t = n) {
  if (!T.test(e)) return { members: 0, outsideStringsOnly: true };
  let r = 0, u = e.indexOf(":");
  while (u !== -1 && r <= t) r++, u = e.indexOf(":", u + 1);
  if (r <= t) return { members: r, outsideStringsOnly: false };
  let s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e.charCodeAt(o);
    if (i === 58) {
      if (++s > n) return;
    } else if (i === 34) o = C(e, o);
  }
  return { members: s, outsideStringsOnly: true };
}
var Y = 1024, Z = 2e5, q = 8, ne = 4;
function ULs(e, n) {
  return te(e, n, 0);
}
function te(e, n, t) {
  if (!T.test(e)) return n < t ? void 0 : t;
  let r = t, u = 0, s = [], o = [], i = [];
  for (let c = 0; c < e.length && r <= n; c++) {
    let l = e.charCodeAt(c);
    if (l === 44 || l === 58) r += t;
    else if (l === 91 || l === 123) r += t, u++;
    else if (l === 93 || l === 125) {
      if (s.at(-1) === u) s.pop(), r += I(i, o.pop());
      u--;
    } else if (l === 34) {
      let f = c;
      c = C(e, f);
      let A = e.charCodeAt(f + 1);
      if ((M(A) || A === 92) && c - f <= 61 && re(e, c)) {
        let E = 0, a = 0;
        for (let p = f + 1; p < c && a >= 0; p++) {
          let _ = e.charCodeAt(p);
          if (_ === 92 && e.startsWith("\\u003", p)) p += 5, _ = e.charCodeAt(p);
          a = !M(_) || a === 10 || E === 0 && a > 0 ? -1 : a + 1, E = E * 10 + (_ - 48);
        }
        if (a > 0 && E < 4294967295) {
          if (s.at(-1) !== u) s.push(u), o.push(i.length);
          i.push(E);
        }
      }
    }
  }
  if (r > n) return;
  while (o.length > 0) r += I(i, o.pop());
  return r > n ? void 0 : r;
}
function I(e, n = 0) {
  let t = true;
  for (let i = n + 1; i < e.length && t; i++) t = e[i - 1] <= e[i];
  if (!t && e.length - n <= 32) {
    for (let i = n + 1; i < e.length; i++) {
      let c = e[i], l = i;
      for (; l > n && e[l - 1] > c; l--) e[l] = e[l - 1];
      e[l] = c;
    }
    t = true;
  }
  let r = e;
  if (!t) {
    r = new Uint32Array(e.length - n);
    for (let i = n; i < e.length; i++) r[i - n] = e[i];
    r.sort();
  }
  let u = t ? n : 0, s = 0, o = 0;
  for (let i = u; i < r.length; i++) {
    let c = r[i], l = i - u;
    if (c >= Y && c > 1.75 * s + 64 || c >= Z && c > 8 * l) o = ne;
    else s = c + 1;
  }
  return e.length = n, Math.ceil(s / q) + o;
}
function yyn(e, n) {
  if (!T.test(e)) return true;
  let t = 0;
  for (let u of ["[", "{"]) {
    let s = e.indexOf(u);
    while (s !== -1 && t <= n) t++, s = e.indexOf(u, s + 1);
  }
  if (t <= n) return true;
  let r = 0;
  for (let u = 0; u < e.length; u++) {
    let s = e.charCodeAt(u);
    if (s === 91 || s === 123) {
      if (++r > n) return false;
    } else if (s === 93 || s === 125) r--;
    else if (s === 34) u = C(e, u);
  }
  return true;
}
function Z0o(e, n, t) {
  let r = e.length, u = 0;
  for (let s = 0; s < e.length && r <= t; s++) {
    let o = e.charCodeAt(s);
    if (o === 34) s = C(e, s);
    else if (o === 91 || o === 123) {
      let i = e.charCodeAt(s + 1);
      if (i === 93 || i === 125) s++;
      else r += 1 + n * ++u;
    } else if (o === 93 || o === 125) r += 1 + n * --u;
    else if (o === 44) r += 1 + n * u;
    else if (o === 58) r++;
  }
  return r <= t;
}
function L(e) {
  return /^(?:0|[1-9]\d{0,9})$/.test(e) && Number(e) < 4294967295;
}
function psa(e, n = 1 / 0) {
  if (n < 0) return 0;
  let t = [];
  for (let r in e) {
    if (!L(r) || t.length > n) break;
    t.push(Number(r));
  }
  return t.length === 0 ? 0 : I(t);
}
var kWl = 64;
function C(e, n) {
  for (let t = e.indexOf('"', n + 1); t !== -1; t = e.indexOf('"', t + 1)) {
    let r = 0;
    while (e.charCodeAt(t - 1 - r) === 92) r++;
    if (r % 2 === 0) return t;
  }
  return e.length - 1;
}
function BLs(e) {
  return e === 32 || e === 9 || e === 10 || e === 13;
}
function re(e, n) {
  let t = n + 1;
  while (BLs(e.charCodeAt(t))) t++;
  return e.charCodeAt(t) === 58;
}
var ie = 16, Ge = 6 * ie;
function M(e) {
  return e >= 48 && e <= 57;
}
var H = (0, import_chunk_t57w17k7.de)({}, (e) => {
  e.limits = void 0;
});
function G() {
  return H.limits !== void 0;
}
function eLo(e) {
  return H.limits?.onPast(e), G();
}
function EWl(e, n) {
  return G() && e.length >= n / 512 && ULs(e, n) === void 0 && eLo("mcp_message");
}
var oe = "\\u05C8\\u05C9\\u1ADE\\u1ADF\\u1AEC-\\u1AF0\\u{10ECB}-\\u{10ECF}\\u{10EF0}-\\u{10EF9}\\u{1D127}\\u{1D128}\\u{1D250}-\\u{1D252}\\u{1D25B}\\u{1D25C}\\u{1D25F}\\u{1D280}\\u{1D281}", P = `[\\p{M}\\uFF9E\\uFF9F${oe}]`, ue = new RegExp(`${P}{32,}`, "gu"), se = new RegExp(P, "u");
var N = /* @__PURE__ */ new Map(), g = [], b = /* @__PURE__ */ new Map();
function S(e, n) {
  return e !== n && (e + n).normalize("NFD") === n + e;
}
function W(e) {
  let n = N.get(e);
  if (n !== void 0) return n;
  let t = String.fromCodePoint(e), r = null;
  if (t === "\u0334" || S(t, "\u0334") || S("\u0345", t)) {
    let u = 0, s = g.length;
    while (u < s && r === null) {
      let o = u + s >> 1, i = g[o];
      if (S(t, i.sample)) u = o + 1;
      else if (S(i.sample, t)) s = o;
      else r = i;
    }
    if (r === null) {
      r = { order: u, sample: t }, g.splice(u, 0, r);
      for (let o = u + 1; o < g.length; o++) g[o].order = o;
    }
  }
  return N.set(e, r), r;
}
function k(e) {
  let n = b.get(e);
  if (n === void 0) n = Array.from(String.fromCodePoint(e).normalize("NFKD"), (t) => t.codePointAt(0)), b.set(e, n);
  return n;
}
var w = 4096;
function ce(e, n) {
  let t = "";
  for (let r = 0; r < n; r += w) t += String.fromCodePoint(...e.subarray(r, Math.min(r + w, n)));
  return t;
}
function le(e) {
  let n = new Int32Array(e.length + 16), t = 0;
  for (let o = 0; o < e.length; ) {
    let i = e.codePointAt(o);
    o += i > 65535 ? 2 : 1;
    for (let c of k(i)) {
      if (t === n.length) {
        let l = new Int32Array(n.length * 2);
        l.set(n), n = l;
      }
      n[t++] = c, W(c);
    }
  }
  let r = new Int16Array(t);
  for (let o = 0; o < t; o++) r[o] = N.get(n[o])?.order ?? -1;
  let u = n.slice(0, t), s = new Int32Array(g.length);
  for (let o = 0; o < t; ) {
    let i = o, c = true;
    while (i < t && r[i] >= 0) c &&= i === o || r[i - 1] <= r[i], i++;
    if (c) {
      o = i + 1;
      continue;
    }
    s.fill(0);
    for (let f = o; f < i; f++) s[r[f]]++;
    let l = o;
    for (let f = 0; f < s.length; f++) {
      let A = s[f];
      s[f] = l, l += A;
    }
    for (let f = o; f < i; f++) u[s[r[f]]++] = n[f];
    o = i;
  }
  return ce(u, t);
}
function BLr(e) {
  return e.length < 32 ? e : e.replace(ue, le);
}
var U = 128;
function J(e) {
  if (e < 768) return true;
  let n = b.get(e);
  if (n === void 0 && !se.test(String.fromCodePoint(e))) return true;
  return W((n ?? k(e))[0]) === null;
}
function fe(e, n) {
  let t = n;
  if (t < e.length && (e.charCodeAt(t) & 64512) === 56320 && (e.charCodeAt(t - 1) & 64512) === 55296) t++;
  while (t < e.length) {
    let r = e.codePointAt(t);
    if (J(r)) break;
    t += r > 65535 ? 2 : 1;
  }
  return Math.min(t, e.length);
}
function ae(e) {
  let n = e.length;
  while (n > 0) {
    if (n--, n > 0 && (e.charCodeAt(n) & 64512) === 56320 && (e.charCodeAt(n - 1) & 64512) === 55296) n--;
    if (J(e.codePointAt(n))) return n;
  }
  return 0;
}
function j(e, n) {
  let t = BLr(e);
  if (t.length <= U) return t.normalize(n);
  let r = [], u = "";
  for (let s = 0; s < t.length; ) {
    let o = fe(t, s + U), i = (u + t.slice(s, o)).normalize(n), c = o === t.length ? i.length : ae(i);
    r.push(i.slice(0, c)), u = i.slice(c), s = o;
  }
  return r.join("");
}
function lg(e) {
  return j(e, "NFKC");
}
function tLo(e) {
  return j(e, "NFKD");
}
var LOe = "\u02F9-\u02FC\u230C-\u230F\u231C-\u231F\u239B-\u23CC\u23DC-\u23E1\u2E00-\u2E0D\u2E1C\u2E1D\u2500-\u257F", pe = /* @__PURE__ */ new Map([["\u02C2", "<"], ["\u02C3", ">"], ["\u1433", ">"], ["\u1438", "<"], ["\u16B2", "<"], ["\u2039", "<"], ["\u203A", ">"], ["\u226E", "<"], ["\u226F", ">"], ["\u227A", "<"], ["\u227B", ">"], ["\u2280", "<"], ["\u2281", ">"], ["\u22D6", "<"], ["\u22D7", ">"], ["\u2329", "<"], ["\u232A", ">"], ["\u276C", "<"], ["\u276D", ">"], ["\u276E", "<"], ["\u276F", ">"], ["\u2770", "<"], ["\u2771", ">"], ["\u27E8", "<"], ["\u27E9", ">"], ["\u2991", "<"], ["\u2992", ">"], ["\u2993", "<"], ["\u2994", ">"], ["\u29FC", "<"], ["\u29FD", ">"], ["\u2A79", "<"], ["\u2A7A", ">"], ["\u2AA6", "<"], ["\u2AA7", ">"], ["\u3008", "<"], ["\u3009", ">"], ["\uFE3F", "<"], ["\uFE40", ">"], ["\uFE64", "<"], ["\uFE65", ">"], ["\uFF1C", "<"], ["\uFF1E", ">"], ["\u{16F3F}", ">"], ["\u{1D236}", "<"], ["\u{1D237}", ">"]]);
var UK = new Map([...pe, ...Array.from("\u226A\u22D8\u2AA1\u2AF7\u27EA\uFE3D", (e) => [e, "<"]), ...Array.from("\u226B\u22D9\u2AA2\u2AF8\u27EB\uFE3E", (e) => [e, ">"])]), WLr = new Map([...UK, ["\u300A", "<"], ["\u300B", ">"]]), vWl = new Set(`\u2992\u2994\u2A7A\u2AA7${"\u226B\u22D9\u2AA2\u2AF8\u27EB\uFE3E"}`);
function NOe(e) {
  let n = e;
  for (let [t, r] of WLr) if (r === e) n += t;
  return n;
}
var V = /[\x00-\x1f\x7f-\x9f\u2028\u2029]/g, g2 = 256, nLo = /[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;
function ge(e) {
  return e.length <= g2 && !nLo.test(e);
}
function V8(e) {
  return e.length > 0 && ge(e);
}
function bQe(e) {
  return e.length <= g2 && /^[A-Za-z0-9_:.-]+$/.test(e);
}
function Syn(e) {
  return e.length <= g2 && /^[\p{L}\p{M}\p{N}_:.-]+$/u.test(e);
}
function z6e(e) {
  return e.length <= g2 && /^(?:\/(?!\.\.?(?:\/|$))[A-Za-z0-9._+@-]+)+$/.test(e);
}
function _2(e) {
  return Iu(e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
}
function Iu(e) {
  return e.replace(V, (n) => `&#${n.charCodeAt(0)};`);
}
function P3(e) {
  return e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function mh(e) {
  return Iu(P3(String(e ?? "")));
}
function WLs(e) {
  return mh(e).replaceAll('"', "&quot;");
}
var z = 2e3, Ee = /[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{Default_Ignorable_Code_Point}\u2800]/gu, Ae = new RegExp(`[${LOe}]|(?![\\x00-\\x7f])[\\p{Sm}\\p{Sk}\\p{So}]`, "gu"), _e = new RegExp(`[${[...UK.keys()].join("")}]`, "gu"), Ce = new RegExp("(?![({\\u201A\\u201E\\u2E42])\\p{Ps}", "gu"), Se = new RegExp("(?![)}])\\p{Pe}", "gu");
function aPt(e) {
  if (typeof e !== "string" || e.length > z) return null;
  let n = P3(lg(e.replace(Ee, "")).replace(V, " ").replace(Ae, " ").replace(/\s+/g, " ").replace(_e, (t) => UK.get(t) ?? t).replace(Ce, "(").replace(Se, ")")).trim();
  return n === "" || n.length > z ? null : n;
}
var jLs = [[173, 173], [847, 847], [1564, 1564], [4447, 4448], [6068, 6069], [6155, 6159], [8203, 8207], [8234, 8238], [8288, 8303], [12644, 12644], [65024, 65039], [65279, 65279], [65440, 65440], [65520, 65531], [69759, 69759], [78896, 78911], [94180, 94180], [113824, 113827], [119155, 119162], [917504, 921599]], V6e = jLs.map(([e, n]) => e === n ? `\\u{${e.toString(16)}}` : `\\u{${e.toString(16)}}-\\u{${n.toString(16)}}`).join("");
var byn = `${V6e}\\u2800`, nw = `\\p{Cc}\\p{Cf}\\p{Cs}\\p{Co}\\p{Cn}\\u2028\\u2029${byn}`, b1e = String.raw`\u00ad\u034f\u061c\u115f\u1160\u17b4\u17b5\u180b-\u180f\u200b-\u200f\u202a-\u202e\u2060-\u206f\u2800\u3164\ufe00-\ufe0f\uffa0\ufff0-\ufffb\uDC00-\uDFFF\uDB40-\uDB43`, GLs = String.raw`\u0600-\u0605\u06dd\u070f\u0890\u0891\u08e2`, r3n = `[${b1e}${GLs}\\ufeff]*`, rLo = new RegExp(`[${b1e}${GLs}\\ufeff]`);
function Qft(e, n = r3n) {
  return e.replace(/([a-z)])(?=[a-z(\[])/gi, `$1${n}`).replace(/\[_-\]\?/g, `(?:[_-]${n})?`);
}
var F = new RegExp(`[${nw}]+`, "gu"), B = "\\u200D\\uFE0E\\uFE0F", Re = new RegExp(`(?:(?![${B}])[${nw}])+`, "gu"), xe = new RegExp(`(?:(?![${B}\\n])[${nw}])+`, "gu"), he = new RegExp(`(?<!\\S)[${B}]+`, "gu"), me = new RegExp("\\p{Cs}", "gu");
function FE(e, n, t) {
  let r = (0, import_chunk_wbk1hf21.Dr)(e.replace(me, "\u200B"));
  if (t !== void 0 && "keepSpelledJoiners" in t) {
    let o = /* @__PURE__ */ new Set();
    if (r.length <= Fe && X.test(r)) {
      h ??= new RegExp("\\p{RGI_Emoji}", "gv");
      for (let i of [h, v]) for (let { index: c, 0: l } of r.matchAll(i)) for (let f = c; f < c + l.length; f++) o.add(f);
    }
    return r.replace(F, (i, c) => {
      let l = "";
      for (let f = 0; f < i.length; f++) l += o.has(c + f) ? i.charAt(f) : l.endsWith(n) ? "" : n;
      return l;
    });
  }
  let u = t?.keepNewlines === true || t?.keepEmojiJoiners === true, s = r.replace(t?.keepNewlines ? xe : u ? Re : F, n);
  return u ? s.replace(he, "") : s;
}
var Oe = new RegExp(`[${nw}]`, "u"), Ie = new RegExp("(?! )\\p{Zs}|[\\uFFFC\\u{1D159}\\u{13441}\\u{13442}\\u{16910}\\u{16FE4}]|^ | $", "u"), d = "[\\p{M}\\u1160-\\u11FF\\uD7B0-\\uD7FF]", Te = new RegExp(`(?<![\\p{L}\\p{N}\\p{M}])${d}|${d}{9}|\\p{Soft_Dotted}\\p{M}*\\u0307|[\\u0131\\u0237]\\p{M}|(?<=[\\p{sc=Latin}\\p{sc=Common}]${d}*)(?!\\p{sc=Inherited})${d}`, "u"), v = Ne(), Le = new RegExp(`\\u20E3|\\u263A${d}`, "u"), X = /[\u200C\u200D\uFE0F\u{E007F}]/u, h;
function Ne() {
  let e = String.raw`\u0620\u0626\u0628\u062A-\u062E\u0633-\u063F\u0641-\u0647\u0649\u064A\u066E\u066F\u0678-\u0687\u069A-\u06BF\u06C1\u06C2\u06CC\u06CE\u06D0\u06D1\u06FA-\u06FC\u06FF\u0750-\u0758\u075C-\u076A\u076D-\u0770\u0772\u0775-\u0777\u077A-\u077F\u0886\u0889-\u088D\u088F\u08A0-\u08A9\u08AF\u08B0\u08B3-\u08B8\u08BA-\u08C8`, n = String.raw`\u0620\u0622-\u063F\u0641-\u064A\u066E\u066F\u0671-\u0673\u0675-\u06D3\u06D5\u06EE\u06EF\u06FA-\u06FC\u06FF\u0750-\u077F\u0870-\u0882\u0886\u0889-\u088F\u08A0-\u08AC\u08AE-\u08C8`, t = [2304, 2432, 2688, 2816, 3072, 3200, 3328].map(be), r = String.raw`[\u0D9A-\u0DC6]`;
  return new RegExp([...t, `\\u200D(?<=${r}\\u0DCA.)(?=${r})`, `\\u200C(?<=[${e}](?:(?=[\\p{sc=Arabic}\\p{sc=Inherited}])(?!\\p{Default_Ignorable_Code_Point})\\p{Mn}){0,8}.)(?=[${n}])`].join("|"), "gu");
}
function be(e) {
  let n = `[${R(e + 21)}-${R(e + 57)}]`, t = e === 3328 ? "" : `${R(e + 60)}?`;
  return `[\\u200C\\u200D](?<=${n}${t}${R(e + 77)}.)(?=${n})`;
}
function R(e) {
  return `\\u{${e.toString(16)}}`;
}
function D(e) {
  if (!X.test(e)) return e;
  return h ??= new RegExp("\\p{RGI_Emoji}", "gv"), e.replace(h, "\u263A").replace(v, "");
}
var Fe = 4096;
function jLr(e) {
  return De(e) && !e.includes("  ") && !Te.test(D(e));
}
function De(e) {
  return V8(e) && !Oe.test(D(e)) && !Le.test(D(e)) && !/\uFE0F[\u{1F3FB}-\u{1F3FF}]/u.test(e) && !Ie.test(e);
}
var Be = new RegExp(`[\\p{Cf}\\p{Co}\\p{Cn}\\u2028\\u2029\\u007F-\\u009F${byn}]`, "gu");
function ye(e) {
  let n = e.replace(/[\p{Cf}\p{Co}\p{Cn}]/gu, "");
  return n = n.replace(/[\u200B-\u200F]/g, "").replace(/[\u202A-\u202E]/g, "").replace(/[\u2066-\u2069]/g, "").replace(/[\uFEFF]/g, "").replace(/[\uE000-\uF8FF]/g, ""), n;
}
function Og(e) {
  let n = (0, import_chunk_7cfjrnwy.qy)(e);
  for (let t = 0; t < 10; t++) {
    let r = ye(n);
    if (r === n) return n;
    n = r;
  }
  return n;
}
var Ke = new RegExp("\\p{Default_Ignorable_Code_Point}", "gu");
function $c(e) {
  return (0, import_chunk_7cfjrnwy.Wr)(Og(e).replace(Ke, ""));
}
function msa(e) {
  return !/[^\0-\x7f]/.test(e);
}
function N4t(e) {
  if (msa(e)) return e;
  let n = e, t = "", r = 0, u = 10;
  while (n !== t && r < u) t = n, n = lg(n), n = Og(n), r++;
  if (r >= u) throw Error(`Unicode sanitization reached maximum iterations (${u}) for input: ${e.slice(0, 100)}`);
  return n;
}
function qM(e) {
  if (typeof e === "string") return N4t(e);
  if (Array.isArray(e)) return e.map(qM);
  if (e !== null && typeof e === "object") {
    let n = {};
    for (let [t, r] of Object.entries(e)) {
      let u = qM(t);
      if (u !== "__proto__" && (u === t || !L(u) || Number(u) < 64 || !eLo("cleaned_key"))) n[u] = qM(r);
    }
    return n;
  }
  return e;
}
function Cm(e) {
  return F4t(e.replace(/\\(?=u[0-9a-fA-F]{4})/g, "\\u005c"));
}
function F4t(e) {
  return e.replace(/[^\x20-\x7e]/g, O3);
}
function Yn(e) {
  return e.replace(/[\p{Cc}\p{Cf}\u2028\u2029]+/gu, " ");
}
function y$(e) {
  return e.replace(Be, (n) => Array.from({ length: n.length }, (t, r) => `\\u${n.charCodeAt(r).toString(16).padStart(4, "0")}`).join(""));
}
function FOe(e) {
  return (0, import_chunk_7cfjrnwy.qy)((0, import_chunk_wbk1hf21.Dr)(e)).replace(F, " ");
}
function Ji(e, n) {
  let t = FOe(e);
  if (n?.drop) t = t.replace(n.drop, "");
  if (t = t.replace(/\s+/g, " ").trim(), n?.maxCodeUnits !== void 0) t = (0, import_chunk_7cfjrnwy.ee)(t, n.maxCodeUnits).trim();
  return t;
}
function wyn(e, { maxCodeUnits: n, maxLines: t }) {
  let r = e.replace(/\r\n?/g, `
`).split(`
`), u = r.slice(0, t).map((s) => FOe(s.replace(/\t/g, " "))).join(`
`);
  return { text: (0, import_chunk_7cfjrnwy.ee)(u, n).replace(/\n+$/, ""), truncated: r.length > t || u.length > n };
}
function TWl(e) {
  return Ji(e) === e;
}
var x = 8192;
function oLo(e, n) {
  let t = e;
  if (e.length > x) {
    let s = e.length - x, o = e.slice(s).search(/[\r\n]/);
    if (o !== -1) t = e.slice(s + o + 1);
    else {
      let i = Math.max(e.lastIndexOf(`
`), e.lastIndexOf("\r")) + 1;
      t = (0, import_chunk_7cfjrnwy.ee)(e.slice(i, i + x + 1), x);
    }
  }
  let r = t.split(/\r?\n/), u = [];
  for (let s = r.length - 1; s >= 0 && u.length < n; s--) {
    let o = r[s].split("\r");
    for (let i = o.length - 1; i >= 0; i--) {
      let c = Ji(o[i], { maxCodeUnits: 512 });
      if (c !== "") {
        u.push(c);
        break;
      }
    }
  }
  return u.reverse();
}
var Pce = 255;
function Ek(e) {
  return Q(e, Pce);
}
function $4t(e) {
  return Q(e, O);
}
function Q(e, n) {
  let t = Ji(e, { drop: /[`<>]/g }).replace(/\]\(/g, "] (").replace(/!\[/g, "! [").replace(/\]\[/g, "] [").replace(/\]:/g, "] :");
  return (0, import_chunk_7cfjrnwy.ee)(t, n).trim();
}
var kyn = 2048, sLo = /[`\[\]<>]/g;
function hse(e) {
  let n = Ji(e).replace(/\]\(/g, "] (").replace(/!\[/g, "! [").replace(/\]\[/g, "] [").replace(/\]:/g, "] :").replace(/</g, "< ").replace(/\s+/g, " ").trim();
  return (0, import_chunk_7cfjrnwy.ee)(n, kyn).trim();
}
function K8(e) {
  return e.replace(/[\u007F-\u009F\u2028\u2029\p{Cf}]/gu, O3);
}
function O3(e) {
  return e.split("").map((n) => "\\u" + n.charCodeAt(0).toString(16).padStart(4, "0")).join("");
}
