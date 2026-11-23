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
var chunk_1cd88bge_exports = {};
__export(chunk_1cd88bge_exports, {
  aXt: () => aXt,
  n3o: () => n3o,
  nLa: () => nLa,
  oLa: () => oLa,
  rLa: () => rLa,
  t3o: () => t3o,
  ygt: () => ygt
});
module.exports = __toCommonJS(chunk_1cd88bge_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_h4xqg980 = require("/$bunfs/root/chunk-h4xqg980.js");
var import_chunk_8m5q5cts = require("/$bunfs/root/chunk-8m5q5cts.js");
var import_chunk_em52jhgp = require("/$bunfs/root/chunk-em52jhgp.js");
var D = /* @__PURE__ */ new Map();
function ygt() {
  let t = import_chunk_c203g5kd.s.LC_ALL || import_chunk_c203g5kd.s.LC_TIME || import_chunk_c203g5kd.s.LANG || "";
  if (D.has(t)) return D.get(t);
  let e = I(t);
  return D.set(t, e), e;
}
var b = 64;
function I(t) {
  if (!t || t === "C" || t === "POSIX" || t.length > b) return;
  let e = (0, import_chunk_7cfjrnwy.nt)((0, import_chunk_7cfjrnwy.nt)(t, "."), "@");
  if (!e) return;
  let r = e.replaceAll("_", "-");
  try {
    return new Intl.DateTimeFormat(r), r;
  } catch {
    return;
  }
}
var M = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23", timeZoneName: "short" }, N = { weekday: "short", calendar: "gregory" }, _ = { weekday: "long", calendar: "gregory" }, A = { month: "short", calendar: "gregory" }, L = { month: "long", calendar: "gregory" };
function S(t, e, { locale: r, timeZone: o }) {
  let g = (0, import_chunk_em52jhgp.Eee)("en-US", (0, import_chunk_em52jhgp.Rct)(M, o)).formatToParts(e), i = {};
  for (let T of g) i[T.type] = T.value;
  let u = Number(i.year), n = Number(i.month), c = Number(i.day), m = Number(i.hour), p = (m + 11) % 12 + 1, h = new Date(Date.UTC(u, n - 1, c)).getUTCDay();
  return t.replace(/%(-?)([\s\S])/g, (T, f, F) => {
    switch (F) {
      case "Y":
        return String(u);
      case "y":
        return a(u % 100, f);
      case "C":
        return a(Math.floor(u / 100), f);
      case "m":
        return a(n, f);
      case "d":
        return a(c, f);
      case "e":
        return y(c, f);
      case "j":
        return x(Z(u, n, c), f);
      case "u":
        return String(h === 0 ? 7 : h);
      case "w":
        return String(h);
      case "H":
        return a(m, f);
      case "k":
        return y(m, f);
      case "I":
        return a(p, f);
      case "l":
        return y(p, f);
      case "M":
        return a(Number(i.minute), f);
      case "S":
        return a(Number(i.second), f);
      case "p":
        return m < 12 ? "AM" : "PM";
      case "P":
        return m < 12 ? "am" : "pm";
      case "s":
        return String(Math.floor(e.getTime() / 1e3));
      case "a":
        return d(e, r, o, N);
      case "A":
        return d(e, r, o, _);
      case "b":
      case "h":
        return d(e, r, o, A);
      case "B":
        return d(e, r, o, L);
      case "Z":
        return i.timeZoneName ?? "";
      case "z":
        return k(e, u, n, c, m, i);
      case "F":
        return `${u}-${a(n, "")}-${a(c, "")}`;
      case "D":
        return `${a(n, "")}/${a(c, "")}/${a(u % 100, "")}`;
      case "T":
        return `${a(m, "")}:${i.minute}:${i.second}`;
      case "R":
        return `${a(m, "")}:${i.minute}`;
      case "r":
        return `${a(p, "")}:${i.minute}:${i.second} ${m < 12 ? "AM" : "PM"}`;
      case "%":
        return "%";
      default:
        return T;
    }
  });
}
function a(t, e) {
  return e ? String(t) : String(t).padStart(2, "0");
}
function x(t, e) {
  return e ? String(t) : String(t).padStart(3, "0");
}
function y(t, e) {
  return e ? String(t) : String(t).padStart(2, " ");
}
function Z(t, e, r) {
  return (Date.UTC(t, e - 1, r) - Date.UTC(t, 0, 1)) / 864e5 + 1;
}
function d(t, e, r, o) {
  return (0, import_chunk_em52jhgp.Eee)(e, (0, import_chunk_em52jhgp.Rct)(o, r)).format(t);
}
function k(t, e, r, o, g, i) {
  let u = Date.UTC(e, r - 1, o, g, Number(i.minute), Number(i.second)), n = Math.floor(t.getTime() / 1e3) * 1e3, c = Math.round((u - n) / 6e4), m = c < 0 ? "-" : "+", p = Math.abs(c);
  return `${m}${String(Math.floor(p / 60)).padStart(2, "0")}${String(p % 60).padStart(2, "0")}`;
}
var P = 100;
function t3o(t) {
  return (0, import_chunk_7cfjrnwy.ee)((0, import_chunk_7cfjrnwy.lC)((0, import_chunk_7cfjrnwy.I_)(t)), P);
}
function C(t, e) {
  let r = import_chunk_h4xqg980.pqt.find((i) => i === t);
  if (r === "24-hour-utc") return { kind: "preset", preset: r, timeZone: "UTC" };
  let o = E(e);
  if (r) return { kind: "preset", preset: r, timeZone: o };
  let g = t3o(t);
  return g.includes("%") ? { kind: "pattern", pattern: g, timeZone: o } : { kind: "preset", preset: "auto", timeZone: o };
}
function E(t) {
  if (!t) return;
  try {
    return (0, import_chunk_em52jhgp.Eee)("en-US", { timeZone: t }), t;
  } catch {
    return;
  }
}
function O(t, e, r) {
  switch (e) {
    case "auto":
      return (0, import_chunk_em52jhgp.Rct)(t, r);
    case "12-hour":
      return (0, import_chunk_em52jhgp.Rct)({ ...t, hourCycle: "h12" }, r);
    case "24-hour":
    case "24-hour-utc":
      return (0, import_chunk_em52jhgp.Rct)({ ...t, hourCycle: "h23" }, r);
  }
}
function n3o(t, e, r, o) {
  let g = (0, import_chunk_em52jhgp.Eee)(r, O(e, t.preset, t.timeZone));
  if (t.preset !== "24-hour-utc") return g.format(o);
  let i = g.formatToParts(o), u = i.findLastIndex((n) => n.type === "minute" || n.type === "second");
  return i.map((n, c) => c === u ? `${n.value}Z` : n.value).join("");
}
function l(t, e, r, o) {
  return (0, import_chunk_7cfjrnwy.ee)(S(t, r, { locale: o, timeZone: e }), P);
}
var R = { "2-digit": { hour: "2-digit", minute: "2-digit", hourCycle: "h12" }, numeric: { hour: "numeric", minute: "2-digit", hourCycle: "h12" } };
function nLa(t, e, r, o = "2-digit") {
  return t.kind === "pattern" ? l(t.pattern, t.timeZone, e, r) : n3o(t, R[o], "en-US", e);
}
var U = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23", timeZoneName: "short" };
function rLa(t, e, r, o) {
  let g = t.timeZone ?? o;
  if (t.kind === "pattern") return l(t.pattern, g, e, r);
  let i = O(U, t.preset, g), u = (0, import_chunk_em52jhgp.Eee)("en-US", i).formatToParts(e), n = {};
  for (let p of u) n[p.type] = p.value;
  let c = n.dayPeriod ? ` ${n.dayPeriod}` : "", m = "";
  if (t.preset === "24-hour-utc") m = "Z";
  else if (n.timeZoneName) m = ` ${n.timeZoneName}`;
  return `${n.year}-${n.month}-${n.day} ${n.hour}:${n.minute}:${n.second}${c}${m}`;
}
function aXt() {
  return C((0, import_chunk_8m5q5cts.ll)("timeFormat", "auto").value, (0, import_chunk_8m5q5cts.ll)("timeZone", "").value);
}
function oLa(t, e, r) {
  return l(t, e, r, ygt());
}
