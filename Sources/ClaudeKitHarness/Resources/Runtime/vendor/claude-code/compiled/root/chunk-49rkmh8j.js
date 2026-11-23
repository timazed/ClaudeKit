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
var chunk_49rkmh8j_exports = {};
__export(chunk_49rkmh8j_exports, {
  $8i: () => $8i,
  ADl: () => ADl,
  B8i: () => B8i,
  CDl: () => CDl,
  CIr: () => CIr,
  EDl: () => EDl,
  F8i: () => F8i,
  G8i: () => G8i,
  IDl: () => IDl,
  MOs: () => MOs,
  N8i: () => N8i,
  ODl: () => ODl,
  PDl: () => PDl,
  QPo: () => QPo,
  RDl: () => RDl,
  SVt: () => SVt,
  TDl: () => TDl,
  TIr: () => TIr,
  U8i: () => U8i,
  W8i: () => W8i,
  ZPo: () => ZPo,
  _Vt: () => _Vt,
  bDl: () => bDl,
  eFe: () => eFe,
  eOo: () => eOo,
  j8i: () => j8i,
  kDl: () => kDl,
  nOo: () => nOo,
  nhn: () => nhn,
  ohn: () => ohn,
  rOo: () => rOo,
  rhn: () => rhn,
  tFe: () => tFe,
  tOo: () => tOo,
  vDl: () => vDl,
  vIr: () => vIr,
  wDl: () => wDl,
  xDl: () => xDl,
  yVt: () => yVt
});
module.exports = __toCommonJS(chunk_49rkmh8j_exports);
var import_chunk_8jsh3ct2 = require("/$bunfs/root/chunk-8jsh3ct2.js");
var import_async_hooks = require("async_hooks");
var import_async_hooks2 = require("async_hooks");
var import_async_hooks3 = require("async_hooks");
var M = "tengu_tingly_pearl";
class x {
  reader = null;
  register(e) {
    let t = this.reader;
    return this.reader = e, t;
  }
}
var R = new x();
function bDl(e) {
  return R.register(e);
}
function QPo() {
  let e = R.reader;
  if (!e) return true;
  try {
    let { value: t, source: n, defaultHost: r } = e(M, true);
    return t !== false || n !== "payload" || !r;
  } catch {
    return true;
  }
}
var s = new import_async_hooks.AsyncLocalStorage();
async function nhn(e, t) {
  let n = { off: e, fired: false };
  return { result: await s.run(n, t), fired: n.fired };
}
function _Vt(e) {
  return s.run({ off: true, fired: false }, e);
}
function yVt() {
  return s.getStore()?.off === true;
}
function vIr() {
  let e = s.getStore();
  if (e) e.fired = true;
}
var k = "tengu_foamy_heron", L = "tengu_deep_locket", N = "bot_protected_tengu_gilded_abacus", H = "bot_protected_tengu_compressed_axolotl", B = "bot_protected_tengu_synthetic_scone", K = "bot_protected_tengu_ticklish_clock", I = "bot_protected_tengu_replicated_mitten", TIr = /\$\$[({[]/, U = "tengu_moonlit_crayon", C = new Set("cat tee echo mkdir cd ls pwd touch cp mv chmod head tail wc grep jq diff true date sleep node python python3".split(" ")), v = { head_shell: "sh bash zsh dash ksh", head_wrapper: "timeout env nice nohup sudo xargs find time command exec", head_script_tool: "sed awk perl printf", head_git: "git", head_package_tool: "npm npx pnpm yarn bun pip pip3 make", head_fetch: "curl wget", head_keyword: "if for while until case" };
function Q(e, t) {
  if (e === void 0) return /^\w+\+?=/.test(t) ? "head_assignment" : "head_not_bare";
  for (let [n, r] of Object.entries(v)) if (r.split(" ").includes(e)) return n;
  return "head_other";
}
var Z = /[\w.-]+(?=[ \t\n;|&<>]|$)/y, T = /&&(?![&|!])|\|\|?(?![|&])|;(?![;&])/y, W = /(?:[ \t\w%+,./:=@~^-]|\$(?:\w+(?!\w)|\{[A-Za-z_]\w*\})(?![[:])|"(?:[\n\t !#%-[\]-_a-~]|\$(?:\w+(?!\w)|\{[A-Za-z_]\w*\})(?![[:]))*"|>>?(?![>&|(])|<(?![<>&(\d-])|>&\d+(?=[ \t\n;|]|$))+/y, A = /<<(-?)[ \t]*(['"])(\w+)\2(?=[ \t\n;|&<>]|$)/y;
function N8i(e) {
  if (/[\0-\x08\x0b-\x1f\x7f]/.test(e)) return "control_byte";
  let t = [], n = true, r = 0;
  while (r < e.length) {
    let u = e[r];
    if (u === `
`) {
      r++;
      for (let { name: o, stripsTabs: a } of t.splice(0)) for (; ; ) {
        if (r >= e.length) return "open_heredoc";
        let _ = e.indexOf(`
`, r), h = _ === -1 ? e.length : _, g = e.slice(r, h);
        if (r = Math.min(h + 1, e.length), (a ? g.replace(/^\t+/, "") : g) === o) break;
      }
      n = true;
    } else if (n && (u === " " || u === "	")) r++;
    else if (n && u === "#") {
      let o = e.lastIndexOf(`
`, r - 1) + 1;
      if (/[^ \t]/.test(e.slice(o, r))) return "comment";
      let a = e.indexOf(`
`, r);
      r = a === -1 ? e.length : a;
    } else if (!n && u === "'") {
      let o = e.indexOf("'", r + 1);
      if (o === -1) return "open_quote";
      r = o + 1;
    } else {
      let o = n ? Z : u === "<" && e[r + 1] === "<" ? A : "&|;".includes(u) ? T : W;
      o.lastIndex = r;
      let a = o.exec(e);
      if (n && !C.has(a?.[0] ?? "")) return Q(a?.[0], e.slice(r, r + 80));
      if (a === null) return "construct";
      if (o === A) t.push({ name: a[3], stripsTabs: a[1] === "-" });
      n = o === T, r += a[0].length;
    }
  }
  return t.length === 0 ? void 0 : "open_heredoc";
}
var l = new import_chunk_8jsh3ct2.ex();
function wDl(e) {
  l.register(e);
}
function i(e) {
  return l.read(e, true);
}
function kDl() {
  return i(k);
}
function ZPo() {
  return i(B);
}
function F8i() {
  return i(H);
}
function EDl() {
  return i(I);
}
var j = /\$(?:\{\s*(?:['"]|[\^=~]|\\\n?)*|(?:[\^=~]|\\\n?)*)~/;
function b(e) {
  return j.test(e) && F8i();
}
function vDl() {
  return i(K);
}
var rhn = /\((?:\\+\n)*\(|\$(?:\\+\n)*\[/, y = new import_async_hooks2.AsyncLocalStorage(), m = new import_async_hooks2.AsyncLocalStorage();
function TDl(e) {
  return m.run(true, e);
}
function eOo() {
  return m.getStore() === true;
}
var G = new import_async_hooks2.AsyncLocalStorage();
async function MOs(e) {
  let t = { mayDiffer: false };
  return { result: await G.run(t, e), mayDiffer: t.mayDiffer };
}
function tOo() {
  let e = G.getStore();
  if (e) e.mayDiffer = true;
}
function nOo(e) {
  return y.run(true, e);
}
function $8i() {
  return y.getStore() === true;
}
function CIr() {
  return !$8i() && i(N);
}
var P = new import_async_hooks2.AsyncLocalStorage();
function U8i(e) {
  return P.run(true, e);
}
function B8i() {
  return P.getStore() === true;
}
function W8i() {
  return !B8i() && i(L);
}
function j8i() {
  return l.read(U, false);
}
function eFe(e) {
  return TIr.test(e) && W8i() && !(j8i() && N8i(e) === void 0);
}
function E(e, t) {
  return eFe(e) ? U8i(t) : t();
}
function SVt(e, t) {
  return rhn.test(e) ? nOo(() => E(e, t)) : E(e, t);
}
var X = "tengu_sturdy_lantern", z = "bot_protected_tengu_splendid_melody", V = "bot_protected_tengu_reflective_marble", q = "bot_protected_tengu_adaptive_robin", d = new import_chunk_8jsh3ct2.ex();
function CDl(e) {
  return d.register(e);
}
var f = new import_async_hooks3.AsyncLocalStorage();
function tFe(e) {
  return f.run(true, e);
}
function ADl() {
  return d.read(V, true);
}
function RDl() {
  return d.read(q, true);
}
function xDl() {
  return f.getStore() !== true && d.read(X, true);
}
var p = new import_async_hooks3.AsyncLocalStorage();
async function PDl(e) {
  let t = {};
  return { result: await p.run(t, e), ...t };
}
function G8i() {
  return p.getStore() !== void 0;
}
function ohn(e) {
  return S(e.misreading);
}
function rOo(e) {
  return S(b(e) ? "pattern_flag" : void 0);
}
function S(e) {
  if (e === void 0 || f.getStore() === true || !d.read(z, true)) return;
  let t = p.getStore();
  if (t === void 0) return e;
  t.misreading ??= e;
  return;
}
class F {
  reader = null;
  register(e) {
    let t = this.reader;
    return this.reader = e, t;
  }
}
var O = new F();
function ODl(e) {
  return O.register(e);
}
function IDl() {
  let e = O.reader;
  if (!e) return true;
  try {
    let { value: t, source: n, defaultHost: r } = e("tengu_calm_nautilus", true);
    return t !== false || n !== "payload" || !r;
  } catch {
    return true;
  }
}
