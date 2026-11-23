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
var chunk_jnrh77bs_exports = {};
__export(chunk_jnrh77bs_exports, {
  Awt: () => Awt,
  BDe: () => BDe,
  BRi: () => BRi,
  GRi: () => GRi,
  J$t: () => J$t,
  JSe: () => JSe,
  KWe: () => KWe,
  Kil: () => Kil,
  UDe: () => UDe,
  URi: () => URi,
  VWe: () => VWe,
  Vil: () => Vil,
  WRi: () => WRi,
  Yus: () => Yus,
  _Nn: () => _Nn,
  ffo: () => ffo,
  gNn: () => gNn,
  gfo: () => gfo,
  hNn: () => hNn,
  hfo: () => hfo,
  j5: () => j5,
  jRi: () => jRi,
  mfo: () => mfo,
  pfo: () => pfo,
  t_r: () => t_r,
  yNn: () => yNn
});
module.exports = __toCommonJS(chunk_jnrh77bs_exports);
var import_chunk_1frjyv5h = require("/$bunfs/root/chunk-1frjyv5h.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_pmryp5f3 = require("/$bunfs/root/chunk-pmryp5f3.js");
var import_chunk_4ssv8fte = require("/$bunfs/root/chunk-4ssv8fte.js");
var import_chunk_a9nnd83v = require("/$bunfs/root/chunk-a9nnd83v.js");
var import_chunk_g5kcfqmg = require("/$bunfs/root/chunk-g5kcfqmg.js");
var import_chunk_vhsysgcd = require("/$bunfs/root/chunk-vhsysgcd.js");
var import_chunk_jk26f2gn = require("/$bunfs/root/chunk-jk26f2gn.js");
var E = 8192, l, u = new Int32Array(512), f = new Int32Array(512);
function c(e) {
  if (l === void 0 || l.graphemes.length > import_chunk_mgh1y10w.Eqt) l = (0, import_chunk_mgh1y10w.Bqn)(import_chunk_4ssv8fte.vTt);
  let n = l.segment(e, u, f, false);
  if (n < 0) u = new Int32Array(2 * -n), f = new Int32Array(2 * -n), n = l.segment(e, u, f, false);
  let o = "";
  for (let r = 0; r < n; r++) o += (0, import_chunk_g5kcfqmg._fo)(l.graphemes[u[2 * r]]);
  if (u.length > E) u = new Int32Array(512), f = new Int32Array(512);
  return o;
}
var URi = `uses ${import_chunk_xcgcdx61.Vut.map((e) => `"${e}"`).join(" or ")}, the names reserved for the skills synced from your claude.ai account`, N = /^[ -~]*$/, _ = /[\u001B\u0080-\u009F\n\u000B\f\r\u2028\u2029]/;
function hNn(e) {
  return p(e) ?? (N.test(e) ? void 0 : T(e));
}
var A;
function T(e) {
  if (e.length > import_chunk_mgntjepj.uCo) return S(e);
  let n = A ??= (0, import_chunk_jk26f2gn.f$)(new import_chunk_1frjyv5h.Uf({ max: 8192, maxSize: 4194304, sizeCalculation: (s, a) => a.length })), o = n.get(e);
  if (o !== void 0) return o || void 0;
  let r = S(e);
  return n.set((0, import_chunk_7cfjrnwy.K6e)(e), r ?? ""), r;
}
function S(e) {
  let n = e.trimEnd();
  if (!_.test(n)) return p(c(n));
  let o = (0, import_chunk_mgntjepj.vg)(n);
  return import_chunk_xcgcdx61.Vut.find((r) => {
    let s = 0;
    for (let a of r) if (s = o.indexOf(a, s) + 1, s === 0) return false;
    return true;
  });
}
var m = import_chunk_xcgcdx61.Vut.map((e) => [e, (0, import_chunk_pmryp5f3.tlt)(`${e}:`)]), y = m.every(([e]) => /^[a-z]/.test(e)) ? new Set(m.flatMap(([e]) => [e.charAt(0), e.charAt(0).toUpperCase()])) : void 0;
function p(e) {
  if (typeof e === "string" && import_chunk_mgntjepj.bVi.test(e) && y !== void 0 && !y.has(e.charAt(0))) return;
  let n = (0, import_chunk_mgntjepj.vg)(e);
  for (let [o, r] of m) {
    if (n === o || n.startsWith(`${o}:`)) return o;
    let s = r.length;
    if ((0, import_chunk_pmryp5f3.tlt)(e.slice(0, s)).toLowerCase().startsWith(r) || n !== e && (0, import_chunk_pmryp5f3.tlt)(n.slice(0, s)).startsWith(r)) return o;
  }
  return;
}
function j5(e) {
  return hNn(e) !== void 0;
}
function J$t(...e) {
  for (let n of e) {
    let o = hNn(n);
    if (o !== void 0) return `uses "${o}", a name reserved for the skills synced from your claude.ai account`;
  }
  return URi;
}
function g(e) {
  return e.repository === import_chunk_xcgcdx61.dDr && e.accountSkillsWrapper === true;
}
function BRi(e) {
  return e.type === "prompt" && e.source === "plugin" && e.pluginInfo !== void 0 && g(e.pluginInfo) && e.pluginInfo.hostNamedSkillsFolder === true;
}
function JSe(e) {
  return e.loadedFrom === "syncedSkills" || e.type === "prompt" && e.source === "plugin" && e.pluginInfo !== void 0 && g(e.pluginInfo);
}
function UDe(e) {
  if (JSe(e)) return false;
  if (j5(e.name)) return true;
  let n = (0, import_chunk_vhsysgcd.Zs)(e);
  return n !== e.name && j5(n);
}
var x = "tengu_plaid_harbor";
function VWe() {
  return (0, import_chunk_865at33z.b)(x, true) !== false;
}
function Vil(e, n) {
  let o = new Set(n.filter(JSe).map((r) => (0, import_chunk_mgntjepj.vg)(r.name)));
  return e.filter((r) => JSe(r) || !(o.has((0, import_chunk_mgntjepj.vg)(r.name)) || [r.name, (0, import_chunk_vhsysgcd.Zs)(r)].some((s) => p(s) === void 0 && j5(s))));
}
function gNn(e) {
  return !(e.type === "prompt" && e.source === "plugin") && UDe(e) && VWe();
}
function BDe(e, n) {
  if (n.length === 0 || !e.some((r) => r.loadedFrom === "syncedSkills")) return [...e];
  let o = /* @__PURE__ */ new Set();
  return yNn(o, n), hfo(e, o);
}
function _Nn(e, n, o = false) {
  if (typeof n !== "string") return;
  if (!o && j5(n)) return;
  e.add((0, import_chunk_mgntjepj.vg)(n));
}
function KWe(e, n) {
  let o = JSe(n);
  _Nn(e, n.name, o);
  let r = (0, import_chunk_vhsysgcd.Zs)(n);
  if (r !== n.name) _Nn(e, r, o);
  for (let s of n.aliases ?? []) _Nn(e, s, o);
}
function WRi(e, n) {
  e.add((0, import_chunk_mgntjepj.vg)(n.name));
  for (let o of n.aliases ?? []) e.add((0, import_chunk_mgntjepj.vg)(o));
}
function yNn(e, n) {
  for (let o of n) if (o.loadedFrom !== "syncedSkills") KWe(e, o);
}
function R(e, n) {
  return (0, import_chunk_mgntjepj.vg)((0, import_chunk_xcgcdx61.Pw)(e.name)) === "" || n.has((0, import_chunk_mgntjepj.vg)(e.name)) || n.has((0, import_chunk_mgntjepj.vg)((0, import_chunk_xcgcdx61.n6e)((0, import_chunk_vhsysgcd.Zs)(e))));
}
var ffo = import_chunk_mgntjepj.uCo;
function pfo(e, n) {
  let o = [];
  for (let r of e) {
    let s = (0, import_chunk_vhsysgcd.Zs)(r);
    if (typeof r.name !== "string" || typeof s !== "string") {
      let a = [r.name, s].map((d) => Array.isArray(d) ? "array" : typeof d), h = [r.type, r.type === "prompt" ? r.source : void 0, r.loadedFrom, r.kind].map((d) => typeof d === "string" && /^[\w-]{1,24}$/.test(d) ? d : typeof d);
      (0, import_chunk_k449cc64.i)(Error(`Command not listed: its name or display name is not a string. Types of its name and display name: ${a.join(", ")}. Its command type, source, loadedFrom and kind: ${h.join(", ")}`));
      continue;
    }
    if (r.isMcp === true && [r.name, s, ...r.aliases ?? []].some((a) => a.length > ffo)) {
      (0, import_chunk_w578pjby.t)(`MCP command not listed: its name, display name or an alias has over ${ffo} characters`);
      continue;
    }
    if (gNn(r)) {
      n(r);
      continue;
    }
    o.push(JSe(r) ? r : C(r, j5));
  }
  return o;
}
function C(e, n) {
  let o = e.aliases;
  if (!o) return e;
  let r = o.filter((s) => !n(s));
  if (r.length === o.length) return e;
  return { ...e, aliases: r.length ? r : void 0 };
}
function Yus(e, n) {
  return e.includes(":") || e.startsWith("mcp__") || n.has(e);
}
function jRi(e) {
  return mfo(e, () => true);
}
function GRi(e, n) {
  if (e.loadedFrom !== "syncedSkills") return e;
  if (R(e, n)) return null;
  return mfo(e, (o) => Yus((0, import_chunk_mgntjepj.vg)(o), n));
}
function mfo(e, n) {
  let o = C(e, n);
  if (o.loadedFrom !== "syncedSkills") return o;
  let r = (0, import_chunk_vhsysgcd.Zs)(o);
  if ((0, import_chunk_xcgcdx61.n6e)(r) === r || Awt(o) !== void 0) return o;
  let s = (0, import_chunk_xcgcdx61.n6e)(r);
  return { ...o, userFacingName: () => s };
}
function Awt(e) {
  return e.type === "prompt" && e.loadedFrom === "syncedSkills" && e.unqualifiedName != null && (e.aliases?.includes(e.unqualifiedName) ?? false) ? e.unqualifiedName : void 0;
}
function t_r(e) {
  let n = Awt(e);
  return n !== void 0 && (0, import_chunk_xcgcdx61.r6e)(n) ? n : void 0;
}
function hfo(e, n, o) {
  let r = [];
  for (let s of e) {
    let a = GRi(s, n);
    if (a === null) {
      o?.(s);
      continue;
    }
    if (a.loadedFrom === "syncedSkills") WRi(n, a);
    r.push(a);
  }
  return r;
}
function Kil(e, n) {
  let o = /* @__PURE__ */ new Set();
  for (let r of n) if ((0, import_chunk_a9nnd83v.BO)(r)) o.add((0, import_chunk_mgntjepj.vg)(r.name));
  return e.filter((r) => !(0, import_chunk_a9nnd83v.ej)(r) || !o.has((0, import_chunk_mgntjepj.vg)(r.name)));
}
function gfo(e) {
  return e.filter((n) => n.type === "prompt" && (n.loadedFrom === "mcp" || n.isMcp === true));
}
