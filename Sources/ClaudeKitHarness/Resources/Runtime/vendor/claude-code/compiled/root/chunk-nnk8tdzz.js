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
var chunk_nnk8tdzz_exports = {};
__export(chunk_nnk8tdzz_exports, {
  Qk: () => Qk,
  VQi: () => VQi,
  c1l: () => c1l,
  d1l: () => d1l,
  xut: () => xut,
  zQi: () => zQi
});
module.exports = __toCommonJS(chunk_nnk8tdzz_exports);
var import_chunk_44yfdc64 = require("/$bunfs/root/chunk-44yfdc64.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
function l(e) {
  return e;
}
var i = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (e) => e.clear()), s = (0, import_chunk_t57w17k7.de)({ isOpen: false }, (e) => {
  e.isOpen = false;
});
function o(e) {
  return process.env[e];
}
function a(e, n) {
  if (n === void 0) {
    delete process.env[e];
    return;
  }
  process.env[e] = n;
}
function c(e) {
  return (0, import_chunk_44yfdc64.gce)(() => o(e));
}
function g(e) {
  return c(e.name) === e.theirs;
}
function zQi(e) {
  let n = l(e), t = i.get(n);
  if (t !== void 0 && !s.isOpen && !g(t)) i.delete(n);
  let f = i.get(n) ?? v(e) ?? { name: e, before: c(e) };
  return () => {
    i.set(n, { ...f, theirs: o(e) });
  };
}
function VQi(e) {
  i.delete(l(e));
  for (let [n, t] of y(e)) if (o(t.name) === o(e)) i.delete(n);
}
function y(e) {
  return [];
}
function xut(e) {
  return d().filter((n) => e?.(n.name, n.theirs) !== true).map((n) => n.name);
}
function d1l() {
  return d().filter((e) => (e.theirs || void 0) !== (e.before || void 0)).map((e) => e.name);
}
function v(e) {
  for (let [, n] of y(e)) if (o(n.name) === o(e)) return { name: e, before: n.before };
  return;
}
function d() {
  let e = [...i.values()];
  return s.isOpen ? e : e.filter(g);
}
var u = { take: void 0 };
function c1l(e) {
  let n = u.take;
  return u.take = e, { [Symbol.dispose]() {
    u.take = n;
  } };
}
function Qk(e, n) {
  if (s.isOpen) return e();
  return (0, import_chunk_44yfdc64.gce)(() => {
    let t = d(), f = u.take?.();
    if (t.length === 0 && f === void 0) return e();
    let p = t.filter((r) => n?.(r.name, r.theirs) !== true);
    for (let r of p) a(r.name, r.before);
    s.isOpen = true;
    try {
      return e();
    } finally {
      for (let r of p) a(r.name, r.theirs);
      f?.(), s.isOpen = false;
    }
  });
}
