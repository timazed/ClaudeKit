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
var chunk_538r8e0n_exports = {};
__export(chunk_538r8e0n_exports, {
  Eoi: () => Eoi,
  Nm: () => Nm,
  gTe: () => gTe
});
module.exports = __toCommonJS(chunk_538r8e0n_exports);
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_418mqjww = require("/$bunfs/root/chunk-418mqjww.js");
var import_chunk_271xsh6x = require("/$bunfs/root/chunk-271xsh6x.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_3fqcfedz = require("/$bunfs/root/chunk-3fqcfedz.js");
function C(t) {
  if (!("scope" in t)) return;
  let n = t.scope;
  return import_chunk_bzyb60p0.vfe.find((e) => e === n);
}
function gTe(t, n, e) {
  let r = (0, import_chunk_qdcbcsg7.Pl)(n), i = M(t, n);
  if (i === void 0 && C(n)) return e?.detail === "origin" ? void 0 : (0, import_chunk_2mwshd9r.uFe)(n);
  return (0, import_chunk_2mwshd9r.NOo)({ authoredUnexpanded: i, expanded: n, cliOwned: r, detail: e?.detail });
}
function M(t, n) {
  let e = C(n);
  if (e === void 0) return;
  try {
    let r = (0, import_chunk_bzyb60p0.F_)(e, { expandVars: false }).servers[t];
    return r && Eoi(r, n) ? r : void 0;
  } catch {
    return;
  }
}
function Eoi(t, n) {
  if ((t.type ?? "stdio") !== (n.type ?? "stdio")) return false;
  let e = (0, import_chunk_2mwshd9r.Gde)(t), r = (0, import_chunk_2mwshd9r.Gde)(n);
  if (e !== null || r !== null) {
    if (!(() => {
      if (e === null || r === null) return false;
      let s = (0, import_chunk_418mqjww.Wqn)(e), c = (0, import_chunk_2mwshd9r.Phn)(e, s), l = (0, import_chunk_2mwshd9r.Phn)(r), h = (m) => (0, import_chunk_418mqjww.yxt)(m).every((y) => y === "");
      if (h(e)) return true;
      if (c.scheme === "" && h(c.authority)) return u(e, r);
      let a = (0, import_chunk_2mwshd9r.Phn)(s).authority.lastIndexOf("@"), d = l.authority.lastIndexOf("@");
      if (a === -1 !== (d === -1)) return false;
      if (c.scheme === "") return l.scheme === "" && !(0, import_chunk_2mwshd9r.cIs)(r) && u(e, r);
      if (l.scheme === "") return false;
      return u(c.scheme.toLowerCase(), l.scheme.toLowerCase()) && (a === -1 || u(c.authority.slice(0, a), l.authority.slice(0, d))) && u(c.authority.slice(a + 1), l.authority.slice(d + 1)) && u(c.rest, l.rest);
    })()) return false;
  }
  let i = (0, import_chunk_2mwshd9r.HVt)(t), o = (0, import_chunk_2mwshd9r.HVt)(n);
  if (i !== null || o !== null) {
    if (i === null || o === null || i.length !== o.length || !i.every((f, s) => u(f, o[s] ?? ""))) return false;
  }
  return S(p(t, "headers"), p(n, "headers")) && S(p(t, "env"), p(n, "env"));
}
function p(t, n) {
  let e = t[n];
  return e && typeof e === "object" ? e : void 0;
}
function S(t, n) {
  let e = Object.entries(t ?? {}), r = n ?? {};
  if (e.length !== Object.keys(r).length) return false;
  return e.every(([i, o]) => typeof r[i] === "string" && u(o, r[i]));
}
function u(t, n) {
  let e = (0, import_chunk_418mqjww.yxt)(t);
  if (e.length === 1) return t === n;
  let r = e[0] ?? "", i = e.at(-1) ?? "";
  if (!n.startsWith(r) || !n.endsWith(i)) return false;
  let o = r.length, f = n.length - i.length;
  for (let s = 1; s < e.length - 1; s++) {
    let c = e[s] ?? "", l = n.indexOf(c, o);
    if (l === -1 || l + c.length > f) return false;
    o = l + c.length;
  }
  return o <= f;
}
function Nm(t, n, e) {
  let r = g(t, n, e), i = (0, import_chunk_3fqcfedz.Gor)(e);
  if (i === void 0) return r;
  let o = e.indexOf(i), f = g(t, n, e.slice(0, o)), s = g(t, n, e.slice(o + i.length));
  return r.length >= f.length + s.length && r.startsWith(f) && r.endsWith(s) ? `${f}${i}${s}` : r;
}
function g(t, n, e) {
  try {
    return (0, import_chunk_271xsh6x.Yho)(e, n, gTe(t, n, { detail: "origin" }) ?? (0, import_chunk_2mwshd9r.uFe)(n), M(t, n));
  } catch {
    return "[mcp error detail unavailable: redaction failed]";
  }
}
