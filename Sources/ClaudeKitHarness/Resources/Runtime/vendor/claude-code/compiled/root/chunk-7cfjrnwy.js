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
var chunk_7cfjrnwy_exports = {};
__export(chunk_7cfjrnwy_exports, {
  Am: () => Am,
  B4t: () => B4t,
  BK: () => BK,
  Cf: () => Cf,
  Cyn: () => Cyn,
  Ea: () => Ea,
  FB: () => FB,
  I_: () => I_,
  Ir: () => Ir,
  K6e: () => K6e,
  Lm: () => Lm,
  Mt: () => Mt,
  NB: () => NB,
  O: () => O,
  PD: () => PD,
  S$: () => S$,
  SJ: () => SJ,
  VLr: () => VLr,
  VLs: () => VLs,
  W4t: () => W4t,
  Wr: () => Wr,
  Wz: () => Wz,
  Zft: () => Zft,
  aLo: () => aLo,
  dLo: () => dLo,
  ed: () => ed,
  ee: () => ee,
  el: () => el,
  ept: () => ept,
  fo: () => fo,
  i3n: () => i3n,
  jEe: () => jEe,
  lC: () => lC,
  lLo: () => lLo,
  lPt: () => lPt,
  nt: () => nt,
  pP: () => pP,
  q8: () => q8,
  qa: () => qa,
  qy: () => qy,
  s3n: () => s3n,
  sA: () => sA,
  vc: () => vc,
  wi: () => wi,
  xD: () => xD,
  xd: () => xd,
  y2: () => y2,
  ysa: () => ysa,
  zLr: () => zLr
});
module.exports = __toCommonJS(chunk_7cfjrnwy_exports);
function xd(t, n) {
  return t.repeat(Number.isFinite(n) && n > 0 ? n : 0);
}
function fo(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function wi(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function O(t, n, e = n + "s") {
  return t === 1 ? n : e;
}
function xD(t) {
  let n = 0;
  for (let e = 0; e < t.length; e++) {
    let r = t.charCodeAt(e);
    if (r >= 55296 && r <= 56319 && e + 1 < t.length) {
      let i = t.charCodeAt(e + 1);
      if (i >= 56320 && i <= 57343) e++;
    }
    n++;
  }
  return n;
}
function Ea(t, n) {
  if (t.length <= n) return t;
  let e = [];
  for (let r of t) {
    if (e.length >= n) break;
    e.push(r);
  }
  return e.join("");
}
function ee(t, n) {
  if (n <= 0) return "";
  if (t.length <= n) return t;
  let e = t.slice(0, n), r = e.charCodeAt(n - 1);
  return K6e(r >= 55296 && r <= 56319 ? e.slice(0, -1) : e);
}
function qa(t, n) {
  if (n <= 0) return "";
  if (t.length <= n) return t;
  let e = t.slice(-n), r = e.charCodeAt(0);
  return K6e(r >= 56320 && r <= 57343 ? e.slice(1) : e);
}
function PD(t, n, e, r) {
  if (t.length <= n + e) return t;
  let i = n > 0 ? ee(t, n) : "", o = e > 0 ? qa(t, e) : "";
  return `${i}${r(t.length - i.length - o.length)}${o}`;
}
function K6e(t) {
  if (typeof Buffer < "u") return Buffer.from(t, "utf16le").toString("utf16le");
  return m(t);
}
function m(t) {
  let e = [];
  for (let r = 0; r < t.length; r += 8192) {
    let i = Math.min(r + 8192, t.length), o = new Uint16Array(i - r);
    for (let u = r; u < i; u++) o[u - r] = t.charCodeAt(u);
    e.push(String.fromCharCode(...o));
  }
  return e.join("");
}
var E = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/, p = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/g, l = typeof String.prototype.isWellFormed === "function" ? Function.prototype.call.bind(String.prototype.isWellFormed) : void 0, g = typeof String.prototype.toWellFormed === "function" ? Function.prototype.call.bind(String.prototype.toWellFormed) : void 0;
function Cf(t) {
  if (l) return l(t);
  return !E.test(t);
}
function vc(t) {
  if (g) return g(t);
  return t.replace(p, "\uFFFD");
}
function qy(t) {
  if (l && l(t)) return t;
  return t.replace(p, "");
}
function aLo(t) {
  return d(t, false);
}
function zLr(t) {
  return d(t, true);
}
function d(t, n) {
  let e = false, r = [t];
  while (r.length > 0) {
    let i = r.pop();
    if (Array.isArray(i)) for (let o = 0; o < i.length; o++) {
      let u = i[o];
      if (typeof u === "string") {
        if (!Cf(u)) i[o] = vc(u), e = true;
      } else if (u !== null && typeof u === "object") r.push(u);
    }
    else if (i !== null && typeof i === "object") {
      let o = i, u = Object.keys(o);
      for (let s of u) {
        let c = o[s];
        if (typeof c === "string") {
          if (!Cf(c)) o[s] = vc(c), e = true;
        } else if (c !== null && typeof c === "object") r.push(c);
      }
      if (n && !u.every(Cf) && Object.isExtensible(o) && u.every((s) => Object.getOwnPropertyDescriptor(o, s)?.configurable)) {
        let s = Object.entries(o);
        for (let c of u) delete o[c];
        for (let [c, f] of s) Object.defineProperty(o, vc(c), { value: f, writable: true, enumerable: true, configurable: true });
        e = true;
      }
    }
  }
  return e;
}
function lPt(t, n) {
  let e = [t];
  while (e.length > 0) {
    let r = e.pop();
    if (Array.isArray(r)) for (let i = 0; i < r.length; i++) {
      let o = r[i];
      if (typeof o === "string") {
        if (!Cf(o)) return true;
      } else if (o !== null && typeof o === "object") e.push(o);
    }
    else if (r !== null && typeof r === "object") {
      let i = r;
      for (let o of Object.keys(i)) {
        if (!Cf(o)) return true;
        let u = i[o];
        if (typeof u === "string") {
          if (!Cf(u)) return true;
        } else if (u !== null && typeof u === "object" && n?.has(u) !== true) e.push(u);
      }
    }
  }
  return false;
}
function nt(t, n) {
  let e = t.indexOf(n);
  return e === -1 ? t : t.slice(0, e);
}
function Zft(t, n) {
  if (n.length === 0) return 0;
  let e = 0, r = t.indexOf(n);
  while (r !== -1) e++, r = t.indexOf(n, r + n.length);
  return e;
}
function pP(t, n) {
  let e = t.length;
  while (e > 0 && n.includes(t[e - 1])) e--;
  return t.slice(0, e);
}
function sA(t, n) {
  return t.startsWith(n) ? t.slice(n.length) : t;
}
function Lm(t, n) {
  return t.endsWith(n) ? t.slice(0, t.length - n.length) : t;
}
var a = /^[\x00-\x7f]*$/;
function ept(t, n) {
  let e = a.test(t);
  if (e !== a.test(n)) return e ? -1 : 1;
  if (e) return t.localeCompare(n);
  if (t === n) return 0;
  return t < n ? -1 : 1;
}
function s3n(t) {
  let n = t.search(/[.!?] |\n/);
  if (n === -1) return [t, ""];
  return t[n] === `
` ? [t.slice(0, n), t.slice(n + 1)] : [t.slice(0, n + 1), t.slice(n + 1).trimStart()];
}
function Ir(t) {
  return nt(t, `
`);
}
function Mt(t, n, e = 0) {
  let r = 0, i = t.indexOf(n, e);
  while (i !== -1) r++, i = t.indexOf(n, i + 1);
  return r;
}
function SJ(t) {
  return t.replace(/[\uFF10-\uFF19]/g, (n) => String.fromCharCode(n.charCodeAt(0) - 65248));
}
function jEe(t) {
  return t.replaceAll("\u3000", " ");
}
var h = 33554432;
function VLs(t, n = ",", e = h) {
  let i = "";
  for (let o of t) {
    let u = i ? n : "", s = u + o;
    if (i.length + s.length <= e) i += s;
    else {
      let c = e - i.length - u.length - 14;
      if (c > 0) i += u + o.slice(0, c) + "...[truncated]";
      else i += "...[truncated]";
      return i;
    }
  }
  return i;
}
class VLr {
  maxSize;
  content = "";
  isTruncated = false;
  totalBytesReceived = 0;
  constructor(t = h) {
    this.maxSize = t;
  }
  append(t) {
    let n = typeof t === "string" ? t : t.toString();
    if (this.totalBytesReceived += n.length, this.isTruncated && this.content.length >= this.maxSize) return;
    if (this.content.length + n.length > this.maxSize) {
      let e = this.maxSize - this.content.length;
      if (e > 0) this.content += n.slice(0, e);
      this.isTruncated = true;
    } else this.content += n;
  }
  toString() {
    if (!this.isTruncated) return this.content;
    let t = this.totalBytesReceived - this.maxSize, n = Math.round(t / 1024);
    return this.content + `
... [output truncated - ${n}KB removed]`;
  }
  clear() {
    this.content = "", this.isTruncated = false, this.totalBytesReceived = 0;
  }
  get length() {
    return this.content.length;
  }
  get truncated() {
    return this.isTruncated;
  }
  get totalBytes() {
    return this.totalBytesReceived;
  }
}
function B4t(t, n) {
  let e = t.split(`
`);
  if (e.length <= n) return t;
  return e.slice(0, n).join(`
`) + "\u2026";
}
function ed(t, n) {
  if (t.length <= n) return t;
  let e = ee(t, n);
  return `${e}\u2026 [+${t.length - e.length} chars]`;
}
function NB(t, n) {
  if (t.length <= n) return t;
  let e = ee(t, n - 1), r = e.search(/\s\S*$/), i = r === -1 ? "" : e.slice(0, r).trimEnd();
  return `${i.length > n / 2 ? i : e.trimEnd()}\u2026`;
}
var q8 = /[\x00-\x08\x0E-\x1F\x7F-\x9F]/g, Wz = /[\x00-\x1F\x7F-\x9F]/, Cyn = /^(con|prn|aux|nul|com[0-9\u00B9\u00B2\u00B3]|lpt[0-9\u00B9\u00B2\u00B3])$/;
function Wr(t) {
  return t.replace(q8, "").replace(/\s+/g, " ").trim();
}
var x = /[\t\n\v\f\r\u2028\u2029]/g, y = new RegExp(`${q8.source}|${x.source}`);
function i3n(t) {
  if (!y.test(t)) return t;
  return t.replace(q8, "").replace(x, " ");
}
function lC(t) {
  return t.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Default_Ignorable_Code_Point}\u2028\u2029]/gu, "");
}
var b = /[\u001B\u009B][[\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\d/#&.:=?%@~_]+)*|[a-zA-Z\d]+(?:;[-a-zA-Z\d/#&.:=?%@~_]*)*)?(?:\u0007|\u001B\u005C|\u009C))|(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-nq-uy=><~]))/g;
function I_(t) {
  return qy(t).replace(b, "").replace(/[\p{Cc}\p{Cf}\u2028\u2029]/gu, "");
}
function S$(t) {
  if (!/[\p{Cc}\p{Cf}\p{Default_Ignorable_Code_Point}\u2028\u2029]/gu.test(t)) return t;
  let e = new RegExp("(^\\u{1F3F4}\\u{E0067}\\u{E0062}(?:\\u{E0065}\\u{E006E}\\u{E0067}|\\u{E0073}\\u{E0063}\\u{E0074}|\\u{E0077}\\u{E006C}\\u{E0073})\\u{E007F}$|\\p{Extended_Pictographic}(?:\\uFE0E|[\\uFE0F\\u{1F3FB}-\\u{1F3FF}]?(?:\\u200D(?=\\p{Extended_Pictographic}))?)|^[#*0-9]\\uFE0F(?=\\u20E3$))|[\\p{Cc}\\p{Cf}\\p{Default_Ignorable_Code_Point}\\u2028\\u2029]", "gu"), r = "";
  for (let { segment: i } of new Intl.Segmenter(void 0, { granularity: "grapheme" }).segment(t)) r += i.replace(e, (o, u) => {
    if (u !== void 0 || o === `
` || o === "	") return o;
    let s = o.codePointAt(0) ?? 0;
    if (s === 27) return "\u241B";
    if (s < 32) return String.fromCodePoint(9216 + s);
    if (s === 127) return "\u2421";
    return `\\u{${s.toString(16).toUpperCase()}}`;
  });
  return r;
}
function Am(t) {
  return S$(t).replace(/\n/g, "\u2424").replace(/\t/g, "\u2409");
}
function BK(t) {
  let n = I_(Ir(t));
  return n.length > 200 ? `${ee(n, 200)}\u2026` : n;
}
function y2(t, n) {
  return ee(el(t), n);
}
function el(t) {
  return lC(Wr(t.replace(b, ""))).trim();
}
var F = 8;
function ysa(t, n = 0) {
  if (typeof t === "string") return t;
  if (typeof t === "number" || typeof t === "boolean") return String(t);
  if (Array.isArray(t)) {
    if (n >= F) return;
    let e = [];
    for (let r of t) {
      let i = r === null || r === void 0 ? "" : ysa(r, n + 1);
      if (i === void 0) return;
      e.push(i);
    }
    return e.join(",");
  }
  return typeof t === "object" && t !== null && Object.getPrototypeOf(t) === Object.prototype && !Object.hasOwn(t, "toString") ? "[object Object]" : void 0;
}
var lLo = 500;
function FB(t, n) {
  if (t.length * 3 <= n) return t;
  let e = new TextEncoder(), r = new Uint8Array(Math.max(0, Math.min(n, 4194304))), i = 0, o = 0;
  while (o < t.length) {
    let u = n - i;
    if (u <= 0) break;
    let s = u < r.length ? r.subarray(0, u) : r, { read: c, written: f } = e.encodeInto(t.slice(o), s);
    if (c === 0) break;
    o += c, i += f;
  }
  return o >= t.length ? t : t.slice(0, o);
}
function dLo(t, n = "") {
  let e = (t.match(/`+/g) ?? []).reduce((i, o) => Math.max(i, o.length), 0), r = "`".repeat(Math.max(3, e + 1));
  return `${r}${n.replace(/[`\s].*$/s, "")}
${t}
${r}`;
}
var W4t = /(\u2026|\.\.\.)$/;
