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
var chunk_8704k7wd_exports = {};
__export(chunk_8704k7wd_exports, {
  Bgr: () => Bgr,
  Hst: () => Hst,
  Iuo: () => Iuo,
  LDe: () => LDe,
  Ouo: () => Ouo,
  Ugr: () => Ugr,
  Vsl: () => Vsl,
  f9e: () => f9e,
  fAe: () => fAe,
  nNn: () => nNn,
  p9e: () => p9e,
  uAe: () => uAe,
  zs: () => zs
});
module.exports = __toCommonJS(chunk_8704k7wd_exports);
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_vhsysgcd = require("/$bunfs/root/chunk-vhsysgcd.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_tjdnrbvx = require("/$bunfs/root/chunk-tjdnrbvx.js");
var Hst = "\u2726 Team setup guide", a = String.raw`Pasted text|Image|\.\.\.Truncated text|${"\u2726 Team setup guide"}`, Ouo = new RegExp(String.raw`\[(${a}) #(\d+)(?: \+\d+ lines)?(\.)*\]`, "g");
function f9e(n) {
  return n.startsWith("[Image");
}
function u(n, o) {
  return n.name === o || (0, import_chunk_vhsysgcd.Zs)(n) === o || (n.aliases?.includes(o) ?? false);
}
function zs(n, o) {
  let e, t;
  return o.find((r) => {
    if (r.name === n) return true;
    if (e === void 0 && u(r, n)) e = r;
    if (t !== null && r.type === "prompt" && r.directoryListingName === n) t = t === void 0 || t.name === r.name ? t ?? r : null;
    return false;
  }) ?? e ?? t ?? void 0;
}
function Iuo(n) {
  let o = /* @__PURE__ */ new Map();
  for (let e of n) if (!o.has(e.name)) o.set(e.name, e);
  for (let e of n) for (let t of [(0, import_chunk_vhsysgcd.Zs)(e), ...e.aliases ?? []]) if (!o.has(t)) o.set(t, e);
  return o;
}
function LDe(n, o) {
  return zs(n, o) !== void 0;
}
function p9e(n, o) {
  if (o.trim() === "") return false;
  let { isSensitive: e } = n;
  return typeof e === "function" ? e(o) : e === true;
}
function uAe(n, o, e) {
  let t = e ?? n.registeredBy;
  return { command: (0, import_chunk_vhsysgcd.Zs)(n), args: p9e(n, o) ? "***" : o, ...t !== void 0 && { plugin: t } };
}
var d = new RegExp(String.raw`\[(?:Pasted text|\.\.\.Truncated text|${Hst}) #\d+`), f = new RegExp(String.raw`^(\/[^\s[]+)\[(?=(?:${a}) #\d+)`);
var s = 65536, c = 2 * import_chunk_xfj2cwfv.ZMl;
function nNn(n, o, { pastedTexts: e = [] } = {}) {
  if (e.some(l)) return true;
  let t = n.trim();
  if (t.startsWith("!")) {
    if (t = t.slice(1).trimStart(), l(t)) return true;
  }
  if (!t.startsWith("/")) return false;
  let { name: i, args: r } = (0, import_chunk_tjdnrbvx.fM)(t.replace(f, "$1 [")), m = zs(i, o);
  if (!m?.isSensitive) return l(t.slice(1));
  return p9e(m, r) || e.length > 0 && d.test(r);
}
function fAe(n, o) {
  if (o === void 0) return n;
  return n.filter((e) => o.some((t) => e.name === t || (e.loadedFrom === "syncedSkills" ? e.aliases?.includes(t) ?? false : Ugr(e) && e.name.endsWith(`:${t}`))));
}
function Ugr(n) {
  return !(0, import_chunk_4vsz8a99.iBi)(n) && !(n.type === "prompt" && (n.source === "memoryStore" || n.source === "mcp" || n.allowlistedByFullNameOnly === true));
}
function Vsl(n, o) {
  if (n === "" || n.includes(":")) return { kind: "none" };
  let e = `:${n}`, t = o.filter((r) => r.type === "prompt" && r.loadedFrom !== "syncedSkills" && r.name.endsWith(e));
  if (t.length > 1) return { kind: "ambiguous", candidates: t };
  let i = t[0];
  if (i === void 0 || i.source !== "plugin") return { kind: "none" };
  return { kind: "unique", command: i };
}
function Bgr(n, o) {
  let e = zs(n, o);
  if (!e) throw ReferenceError(`Command ${n} not found. Available commands: ${o.map((t) => {
    let i = (0, import_chunk_vhsysgcd.Zs)(t);
    return t.aliases ? `${i} (aliases: ${t.aliases.join(", ")})` : i;
  }).sort((t, i) => t.localeCompare(i)).join(", ")}`);
  return e;
}
function l(n) {
  if (n.length <= s) return (0, import_chunk_xfj2cwfv.SXe)(n);
  let o = s - c;
  for (let e = 0; e < n.length; e += o) if ((0, import_chunk_xfj2cwfv.SXe)(n.slice(e, e + s))) return true;
  return false;
}
