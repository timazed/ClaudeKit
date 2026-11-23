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
var chunk_dvkg7v5x_exports = {};
__export(chunk_dvkg7v5x_exports, {
  AEe: () => AEe,
  DM: () => DM,
  P_: () => P_,
  REe: () => REe,
  i0r: () => i0r,
  qee: () => qee
});
module.exports = __toCommonJS(chunk_dvkg7v5x_exports);
var f = /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/, p = /^[0-9a-f]{1,4}$/i, g = /%[0-9a-z.:-]+$/i;
function qee(e) {
  if (!e.includes(":")) {
    let s = e.split(".");
    return s.length === 4 && s.every((l) => f.test(l)) ? s.map(Number) : void 0;
  }
  let n = e.replace(g, ""), t = n.lastIndexOf(":") + 1, i = qee(n.slice(t)), r = (i ? n.slice(0, t) + "0:0" : n).split("::").map((s) => s ? s.split(":") : []), [a = [], c] = r, o = 8 - r.flat().length;
  if (r.length > 2 || (c ? o < 1 : o !== 0) || !r.flat().every((s) => p.test(s))) return;
  let d = [...a, ...Array(o).fill("0"), ...c ?? []].flatMap((s) => [parseInt(s, 16) >> 8, parseInt(s, 16) & 255]);
  return i ? [...d.slice(0, 12), ...i] : d;
}
function u(e) {
  return e.length === 16 && e.slice(0, 12).every((n, t) => n === (t < 10 ? 0 : 255));
}
function AEe(e, n) {
  let t = qee(e.replace(/^([^%:]*:[^%]*)%.*$|%$/s, "$1")), i = t && u(t) ? t.slice(12) : t, [, r = "", a] = /^([^%/]*)%?\/(\d+)$/.exec(n) ?? [], c = qee(r), o = Number(a);
  return c !== void 0 && c.length === i?.length && o <= c.length * 8 && c.every((d, s) => {
    let l = Math.min(8, Math.max(0, (s + 1) * 8 - o));
    return d >> l === (i[s] ?? 0) >> l;
  });
}
function i0r(e) {
  let n = qee(e);
  return n && u(n) ? n.slice(12).join(".") : void 0;
}
function REe(e) {
  let n = qee(e) ?? [], t = u(n) ? n.slice(12) : n, [i, r = 0] = t;
  if (t.length === 16) {
    if (i === 252 || i === 253) return "unique_local";
    if (i === 254 && r >= 128 && r <= 191) return "link_local";
    if (t.slice(0, 15).some((a) => a !== 0)) return;
    return t[15] === 0 ? "unspecified" : t[15] === 1 ? "loopback" : void 0;
  }
  switch (i) {
    case 0:
      return "this_network";
    case 10:
      return "private";
    case 100:
      return r >= 64 && r <= 127 ? "carrier_nat" : void 0;
    case 127:
      return "loopback";
    case 169:
      return r === 254 ? "link_local" : void 0;
    case 172:
      return r >= 16 && r <= 31 ? "private" : void 0;
    case 192:
      return r === 168 ? "private" : void 0;
    default:
      return;
  }
}
var b = /* @__PURE__ */ new Set(["localhost", "127.0.0.1", "::1", "[::1]"]);
function DM(e) {
  return b.has(e);
}
function P_(e) {
  return DM(e) || e.startsWith("127.") && qee(e) !== void 0;
}
