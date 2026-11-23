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
var chunk_mh32mevx_exports = {};
__export(chunk_mh32mevx_exports, {
  BT: () => BT,
  C1: () => C1,
  CLe: () => CLe,
  D0: () => D0,
  DS: () => DS,
  H0: () => H0,
  HEo: () => HEo,
  HS: () => HS,
  HZ: () => HZ,
  IEo: () => IEo,
  Kvt: () => Kvt,
  MEo: () => MEo,
  MR: () => MR,
  MZ: () => MZ,
  OEo: () => OEo,
  PEo: () => PEo,
  T9: () => T9,
  Ta: () => Ta,
  XP: () => XP,
  Zvl: () => Zvl,
  axe: () => axe,
  cun: () => cun,
  dCr: () => dCr,
  dun: () => dun,
  eTl: () => eTl,
  fGt: () => fGt,
  ixe: () => ixe,
  lCr: () => lCr,
  ljn: () => ljn,
  lun: () => lun,
  nI: () => nI,
  nTl: () => nTl,
  oEs: () => oEs,
  oGe: () => oGe,
  oGi: () => oGi,
  of: () => of,
  plt: () => plt,
  rGi: () => rGi,
  sGe: () => sGe,
  tTl: () => tTl,
  uGt: () => uGt,
  v4: () => v4,
  xl: () => xl
});
module.exports = __toCommonJS(chunk_mh32mevx_exports);
var import_chunk_8tg38aha = require("/$bunfs/root/chunk-8tg38aha.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var k = new RegExp("\\p{Default_Ignorable_Code_Point}", "u"), w = new RegExp("\\p{Cf}", "u");
function R(n) {
  return n >= 8204 && n <= 8207 || n === 1564 || n >= 65024 && n <= 65039 || n >= 6155 && n <= 6159 || n === 10240;
}
function d(n, t) {
  return k.test(n) || n === "\u2028" || n === "\u2029" || n === "\u2800" || t >= 55296 && t <= 57343 || t === 1109742 || w.test(n);
}
function CLe(n) {
  for (let t of n) if (d(t, t.codePointAt(0) ?? 0)) return true;
  return false;
}
function T(n, t) {
  return d(n, t) && !R(t);
}
function y(n, t) {
  let e = "";
  for (let r of n) e += t(r, r.codePointAt(0) ?? 0) ? "\uFFFD" : r;
  return e;
}
function M(n, t) {
  let e = Array.from(n), r = "";
  for (let o = 0; o < e.length; o++) {
    let i = e[o] ?? "";
    r += t(i, i.codePointAt(0) ?? 0, e[o - 1]?.codePointAt(0) ?? Number.NaN, e[o + 1]?.codePointAt(0) ?? Number.NaN) ? "\uFFFD" : i;
  }
  return r;
}
function of(n) {
  return (0, import_chunk_xfj2cwfv.Pi)(y(n, T));
}
function uGt(n) {
  return x(b(n));
}
function b(n) {
  return (0, import_chunk_xfj2cwfv.Pi)(y(n, d));
}
var H0 = 2e3, S = 253;
function PEo(n) {
  return S + (n.endsWith(".") && !n.endsWith("..") ? 1 : 0);
}
var nI = 2e5;
function F(n, t = H0) {
  return (0, import_chunk_7cfjrnwy.ee)(n, t) === n;
}
function BT(n) {
  return n.includes(`
`) || (0, import_chunk_mgh1y10w.oe)(n) > 80;
}
function lCr(n) {
  let t = (0, import_chunk_7cfjrnwy.ee)(n, H0), e = t.replace(/\t/g, " ");
  return t === n ? e : `${e}\u2026`;
}
function f(n) {
  return (0, import_chunk_mgh1y10w.oe)(n.replace(/[\uFE0E\uFE0F\u180B-\u180F\u2800]/gu, "").trim()) > 0;
}
function OEo(n) {
  return Array.from(n).filter((t) => E(t)).join("");
}
function E(n) {
  return (0, import_chunk_mgh1y10w.oe)(n.replace(/[\uFE0E\uFE0F\u180B-\u180F]/gu, "")) > 0;
}
var rGi = 8, D = new RegExp("\\p{M}", "u");
function oGi(n) {
  return D.test(n) || !E(n);
}
function HS(n) {
  let t = "", e = 0, r = false;
  for (let o of n) {
    if (o === `
`) {
      if (r) t += "\uFFFD", r = false;
      t += o, e = 0;
      continue;
    }
    if (!oGi(o)) {
      if (r) t += "\uFFFD", r = false;
      t += o, e = 0;
      continue;
    }
    if (e < rGi) {
      t += o, e++;
      continue;
    }
    r = true;
  }
  return r ? `${t}\uFFFD` : t;
}
function x(n) {
  return (0, import_chunk_xfj2cwfv.Pi)(HS(n));
}
function I(n) {
  let t = Array.from(n), e = 0, r = t.length;
  while (e < r && !f(t[e] ?? "")) e++;
  while (r > e && !f(t[r - 1] ?? "")) r--;
  return t.slice(e, r).join("");
}
function p(n, t) {
  let e = Array.from(I(n));
  return t === "end" ? e.at(-1) : e[0];
}
function C(n) {
  return p(n, "end") === "\u2026";
}
function Zvl(n) {
  let t = Array.from(n), e = t.length;
  for (; ; ) {
    let r = e;
    while (r > 0 && !f(t[r - 1] ?? "")) r--;
    if (r > 0 && t[r - 1] === "\u2026") {
      e = r - 1;
      continue;
    }
    break;
  }
  return t.slice(0, e).join("");
}
function MZ(n) {
  let t = [], e = false;
  for (let r of Array.from(n)) {
    if (r !== `
` && !f(r)) {
      e = true;
      continue;
    }
    if (r === "\uFFFD" && e) {
      e = false;
      continue;
    }
    e = false, t.push(r);
  }
  return f(t.join(""));
}
function O(n) {
  return /^[A-Za-z_$][\w$]*$/.test(n);
}
function Kvt(n) {
  return uGt(n);
}
function ljn(n) {
  return x((0, import_chunk_xfj2cwfv.Pi)(M(n, (t, e, r, o) => {
    if (e === 65038 || e === 65039) return !(r > 127 || o === 8419);
    if (e === 8204 || e === 8205) return !(r > 127 && o > 127);
    if (e >= 6155 && e <= 6159) return !(r > 127);
    return d(t, e);
  })));
}
function MR(n) {
  if (n === void 0) return false;
  let t = uGt(n).replace(/\uFFFD/g, "").replace(/\s+/g, " ").trim();
  return t !== "" && (0, import_chunk_mgh1y10w.oe)(t) > 0;
}
var fGt = 48, C1 = 256;
function oGe(n) {
  let t = Kvt((0, import_chunk_7cfjrnwy.ee)(n, C1)), e = t.replace(/\s+/g, " ").trim();
  return (0, import_chunk_f64qna2j.Tt)(IEo(e, t, n.length > C1), fGt);
}
function IEo(n, t, e = false) {
  let r = p(n, "start") === '"' || p(n, "end") === '"' || C(n);
  return n === t && !r && !e ? n : (0, import_chunk_w578pjby._)(t);
}
function A(n) {
  let t = Kvt((0, import_chunk_7cfjrnwy.ee)(n, C1)), e = t.replace(/\s+/g, " ").trim();
  return IEo(e, t, n.length > C1);
}
function ixe(n) {
  return (0, import_chunk_7cfjrnwy.ee)(n, C1) === n;
}
function sGe(n, t) {
  let e = /* @__PURE__ */ new Map(), r = (s) => t(s).normalize("NFC");
  for (let s of n) {
    let a = r(s), u = e.get(a) ?? /* @__PURE__ */ new Set();
    u.add(s), e.set(a, u);
  }
  let o = (s) => (0, import_chunk_w578pjby._)((0, import_chunk_7cfjrnwy.ee)(s, H0)).replace(/[\u007f-\uffff]/g, (a) => `\\u${a.charCodeAt(0).toString(16).padStart(4, "0")}`) + (s.length > H0 ? "\u2026" : ""), i = /* @__PURE__ */ new Map();
  return n.map((s) => {
    let a = r(s);
    if ((e.get(a)?.size ?? 0) <= 1) return t(s);
    let u = o(s), l = i.get(u) ?? /* @__PURE__ */ new Map();
    i.set(u, l);
    let c = l.get(s) ?? l.size + 1;
    return l.set(s, c), c > 1 ? `${u} (#${c})` : u;
  });
}
function dCr(n) {
  let t = /* @__PURE__ */ new Map();
  for (let i of n) t.set(i, O(i) ? i : (0, import_chunk_w578pjby._)(uGt(i)));
  let e = /* @__PURE__ */ new Map();
  for (let i of t.values()) e.set(i, (e.get(i) ?? 0) + 1);
  let r = L(n), o = /* @__PURE__ */ new Map();
  for (let i of n) {
    let s = t.get(i) ?? "", a = (e.get(s) ?? 0) > 1 || r.has(i.normalize("NFC"));
    o.set(i, a ? (0, import_chunk_w578pjby._)(i).replace(/[\u007f-\uffff]/g, (u) => `\\u${u.charCodeAt(0).toString(16).padStart(4, "0")}`) : s);
  }
  return o;
}
function L(n) {
  let t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set();
  for (let r of n) {
    let o = r.normalize("NFC"), i = t.get(o);
    if (i !== void 0 && i !== r) e.add(o);
    else t.set(o, r);
  }
  return e;
}
function XP(n) {
  return typeof n === "string" && lun(n) ? "" : String(axe(n));
}
function axe(n) {
  let t = typeof n === "string" && !lun(n) ? n : import_chunk_8tg38aha.PAt;
  return (0, import_chunk_8tg38aha.bPe)(oGe(t));
}
function lun(n) {
  return n === "" || (0, import_chunk_mgh1y10w.oe)((0, import_chunk_7cfjrnwy.ee)(n, C1)) === 0;
}
function z(n) {
  return n.replace(/_+/g, " ").trim().replace(/\b\w/g, (t) => t.toUpperCase());
}
function MEo(n) {
  let t = (0, import_chunk_7cfjrnwy.ee)((n.scope === "claudeai" ? n.displayName : void 0) ?? "", C1), e = (0, import_chunk_7cfjrnwy.ee)(n.title ?? "", C1), r = ljn((0, import_chunk_7cfjrnwy.ee)(n.serverName, C1)), o = MR(t) ? ljn(t) : MZ(r) ? r : "(unnamed server)", i = (0, import_chunk_7cfjrnwy.ee)(n.toolName, C1), s = Kvt(z(i)), a = Kvt(i), u = MR(e) ? ljn(e) : MZ(s) ? s : MZ(a) ? a : "(unnamed tool)";
  return (0, import_chunk_8tg38aha.bPe)((0, import_chunk_f64qna2j.Tt)(`${o} \u2014 ${u}`.replace(/\s+/g, " ").trim(), fGt));
}
function HEo(n) {
  return (0, import_chunk_8tg38aha.bPe)(plt(n, "(unnamed tool)"));
}
function plt(n, t) {
  let e = oGe(n);
  return MZ(e) ? e : t;
}
function Ta(n) {
  if (typeof n !== "string") return { text: (0, import_chunk_8tg38aha.bPe)(""), needsGutter: false };
  let t = x(of(lCr(n)));
  return { text: (0, import_chunk_8tg38aha.bPe)(t), needsGutter: BT(t) };
}
function D0(n) {
  if (typeof n !== "string") return null;
  if (!ixe(n) || n.trim() === "" || (0, import_chunk_mgh1y10w.oe)(n) === 0) return null;
  if (HS(n) !== n) return null;
  return { display: (0, import_chunk_8tg38aha.bPe)(A(n)) };
}
var g = "(value cannot be shown in full \u2014 approval withheld; one-time options only)", P = 1e4, B = 64;
function m(n, t, e = 0) {
  if (typeof n === "string") {
    if (n.length + 2 > t.unitsRemaining) throw Error("payload exceeds the serialization budget");
    let i = (0, import_chunk_w578pjby._)(n);
    if (t.unitsRemaining -= i.length, t.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
    return i;
  }
  if (typeof n === "number") {
    let i = Number.isFinite(n) ? String(n) : "null";
    if (t.unitsRemaining -= i.length, t.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
    return i;
  }
  if (typeof n === "boolean" || n === null) {
    if (t.unitsRemaining -= String(n).length, t.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
    return String(n);
  }
  if (typeof n === "bigint") throw Error("bigint payload cannot be serialized");
  if (typeof n !== "object") return;
  if (e >= B) throw Error("payload exceeds the serialization depth wall");
  if (Array.isArray(n)) {
    let i = n.length;
    if (typeof i !== "number" || !Number.isSafeInteger(i) || i < 0) throw Error("payload length is not an honest array length");
    if (t.elementsRemaining -= i, t.elementsRemaining < 0) throw Error("payload exceeds the element serialization wall");
    if (t.unitsRemaining -= 2 + (i > 0 ? i - 1 : 0), t.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
    let s = [];
    for (let a = 0; a < i; a++) {
      let u = m(n[a], t, e + 1);
      if (u === void 0) {
        if (t.unitsRemaining -= 4, t.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
        s.push("null");
      } else s.push(u);
    }
    return `[${s.join(",")}]`;
  }
  let r = Object.entries(n);
  if (t.elementsRemaining -= r.length, t.elementsRemaining < 0) throw Error("payload exceeds the element serialization wall");
  if (t.unitsRemaining -= 2, t.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
  let o = [];
  for (let [i, s] of r) {
    let a = m(s, t, e + 1);
    if (a === void 0) continue;
    if (i.length + 2 > t.unitsRemaining) throw Error("payload exceeds the serialization budget");
    let u = (0, import_chunk_w578pjby._)(i);
    if (t.unitsRemaining -= u.length + 1 + (o.length > 0 ? 1 : 0), t.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
    o.push(`${u}:${a}`);
  }
  return `{${o.join(",")}}`;
}
function oEs(n, t = H0, e = P) {
  try {
    return m(n, { unitsRemaining: t, elementsRemaining: e });
  } catch {
    return;
  }
}
function DS(n, t) {
  let e = typeof n === "string" ? n : oEs(n, t?.maxUnits);
  if (e === void 0) return { kind: "withheld", marker: (0, import_chunk_8tg38aha.bPe)(g) };
  if (!F(e, t?.maxUnits)) return { kind: "withheld", marker: (0, import_chunk_8tg38aha.bPe)(g) };
  let r = t?.softWrap ? (0, import_chunk_xfj2cwfv.IMl)(e) : e, o = (t?.scrub === "key" ? b(r) : of(r)).replace(/\t/g, " "), i = t?.softWrap ? o.replaceAll(`
`, "") : o;
  if (import_chunk_xfj2cwfv.Jdt.test(i)) return { kind: "withheld", marker: (0, import_chunk_8tg38aha.bPe)(g) };
  if (HS(o) !== o) return { kind: "withheld", marker: (0, import_chunk_8tg38aha.bPe)(g) };
  return { kind: "full", text: (0, import_chunk_8tg38aha.bPe)(o), needsGutter: BT(o) };
}
function T9(n) {
  let t = of(n);
  return import_chunk_xfj2cwfv.Jdt.test(t) || N(t);
}
function eTl(n) {
  return N(of(n));
}
function N(n) {
  return HS(n) !== n;
}
function dun(n) {
  let t = Kvt((0, import_chunk_7cfjrnwy.ee)(n, C1)), e = t.replace(/\s+/g, " ").trim();
  return IEo(e, t, e.includes(",") || e.includes(";") || OEo(e).includes(" and ") || OEo(e).startsWith("and ") || OEo(e).endsWith(" and") || n.length > C1 || HS((0, import_chunk_7cfjrnwy.ee)(n, C1)) !== (0, import_chunk_7cfjrnwy.ee)(n, C1));
}
function v4(n, t = A) {
  return sGe(n, t).map((e) => (0, import_chunk_8tg38aha.bPe)(e));
}
function xl(n) {
  return n.replace(/[\n\r\u2028\u2029]/g, "\uFFFD");
}
function tTl(n, t) {
  let e = n.map((l) => DS(l, t)), r = /* @__PURE__ */ new Map();
  n.forEach((l, c) => {
    let h = e[c];
    if (h.kind === "full" && !r.has(l)) r.set(l, xl(h.text).replace(/\s+/g, " ").trim());
  });
  let o = n.filter((l, c) => e[c].kind === "full"), i = v4(o, (l) => r.get(l) ?? ""), s = [], a = 0, u = 0;
  for (let l of e) if (l.kind === "full") s.push({ text: String(i[a++]), withheld: false });
  else u += 1, s.push({ text: `${l.marker} (#${u})`, withheld: true });
  return s;
}
function cun(n) {
  if (typeof n !== "string") return (0, import_chunk_8tg38aha.h9i)("");
  return (0, import_chunk_8tg38aha.h9i)(of(n));
}
function HZ(n) {
  if (typeof n !== "string") return null;
  let t = ljn((0, import_chunk_7cfjrnwy.ee)(n, C1)).replace(/\t/g, " ");
  if (!MZ((0, import_chunk_7cfjrnwy.Ir)(t))) return null;
  if (C((0, import_chunk_7cfjrnwy.Ir)(t))) return null;
  return (0, import_chunk_8tg38aha.bPe)((0, import_chunk_f64qna2j.Us)(t, 24, true));
}
function nTl(n, ...t) {
  let e = n[0] ?? "";
  for (let r = 0; r < t.length; r++) e += t[r] ?? "", e += n[r + 1] ?? "";
  return (0, import_chunk_8tg38aha.bPe)(e);
}
