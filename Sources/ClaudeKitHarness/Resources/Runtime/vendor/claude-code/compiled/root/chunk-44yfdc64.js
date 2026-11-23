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
var chunk_44yfdc64_exports = {};
__export(chunk_44yfdc64_exports, {
  JJe: () => JJe,
  Tqt: () => Tqt,
  aUl: () => aUl,
  dUl: () => dUl,
  gce: () => gce,
  iUl: () => iUl,
  lUl: () => lUl,
  sUl: () => sUl
});
module.exports = __toCommonJS(chunk_44yfdc64_exports);
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
function h(e) {
  return e;
}
function a(e) {
  return e;
}
var o = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (e) => e.clear());
function l(e) {
  let n = a(e);
  return [...o].filter(([, t]) => a(t.name) === n);
}
function g(e, n) {
  for (let [t, i] of l(e)) if (d(i.name) === n) o.delete(t);
}
var s = (0, import_chunk_t57w17k7.de)({ isOpen: false }, (e) => {
  e.isOpen = false;
}), f = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (e) => e.clear());
function sUl(e, n, t) {
  f.set(e, { value: n, stands: t });
}
function Tqt() {
  return new Map(s.isOpen ? [] : [...f].flatMap(([e, { value: n, stands: t }]) => t() ? [[e, n]] : []));
}
function d(e) {
  return process.env[e];
}
function c(e, n) {
  if (n === void 0) {
    delete process.env[e];
    return;
  }
  process.env[e] = n;
}
function v(e) {
  return d(e.name) === e.theirs;
}
function p() {
  let e = [...o.values()];
  return s.isOpen ? e : e.filter(v);
}
function iUl(e, n) {
  let t = h(e);
  for (let [r, u] of s.isOpen ? [] : l(e)) if (!v(u)) o.delete(r);
  let i = o.get(t) ?? { name: e, before: d(e) };
  return () => {
    o.set(t, { ...i, theirs: void 0, writer: n });
    for (let [r, u] of l(e)) o.set(r, { ...u, theirs: d(u.name), writer: n });
  };
}
function aUl(e) {
  return () => {
    g(e, d(e));
  };
}
function lUl(e) {
  if (s.isOpen) return;
  for (let [n, t] of Object.entries(e)) if (t !== void 0) g(n, t);
}
function JJe() {
  return [...p().flatMap(({ name: e }) => f.has(e) ? [] : [e]), ...f.keys()];
}
function dUl(e) {
  let n = new Set(e.map(a));
  return p().some((t) => (t.theirs || void 0) !== (t.before || void 0) && n.has(a(t.name)));
}
function gce(e, n) {
  if (s.isOpen) return e();
  let t = p();
  if (t.length === 0 && f.size === 0) return e();
  let i = t.filter((r) => r.writer === void 0 || n === void 0 || !n(r.writer));
  for (let r = i.length - 1; r >= 0; r--) c(i[r].name, i[r].before);
  s.isOpen = true;
  try {
    return e();
  } finally {
    for (let r of i) c(r.name, r.theirs);
    s.isOpen = false;
  }
}
