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
var chunk_w1d7ygsk_exports = {};
__export(chunk_w1d7ygsk_exports, {
  Mn: () => Mn,
  R: () => R,
  V: () => V,
  a5l: () => a5l,
  bo: () => bo,
  ft: () => ft,
  jE: () => jE,
  jr: () => jr,
  rt: () => rt
});
module.exports = __toCommonJS(chunk_w1d7ygsk_exports);
var l = Object.create;
var { getPrototypeOf: m, defineProperty: e, getOwnPropertyNames: n } = Object;
var j = Object.prototype.hasOwnProperty;
function o(a) {
  return this[a];
}
var p, q, rt = (a, b, c) => {
  var d = a != null && typeof a === "object";
  if (d) {
    var h = b ? p ??= /* @__PURE__ */ new WeakMap() : q ??= /* @__PURE__ */ new WeakMap(), i = h.get(a);
    if (i) return i;
  }
  c = a != null ? l(m(a)) : {};
  let f = b || !a || !a.__esModule || !j.call(a, "default") ? e(c, "default", { value: a, enumerable: true }) : c;
  if (a && typeof a === "object" || typeof a === "function") {
    for (let g of n(a)) if (!j.call(f, g)) e(f, g, { get: o.bind(a, g), enumerable: true });
  }
  if (d) h.set(a, f);
  return f;
};
var V = (a, b) => () => (b || a((b = { exports: {} }).exports, b), b.exports);
var r = (a) => a;
function s(a, b) {
  this[a] = r.bind(null, b);
}
var jr = (a, b) => {
  for (var c in b) e(a, c, { get: b[c], enumerable: true, configurable: true, set: s.bind(b, c) });
};
var bo = (a, b, c) => () => {
  if (a) try {
    b = a(a = 0);
  } catch (d) {
    c = [d];
  }
  if (c) throw c[0];
  return b;
};
var k, jE = (a) => (b) => {
  var c = (k ??= /* @__PURE__ */ new WeakMap()).get(b);
  if (!c) c = Object.freeze(e(b.slice(), "raw", { value: Object.freeze(a) })), k.set(b, c);
  return c;
}, R = Symbol.for("react.memo_cache_sentinel"), Mn = Symbol.for("react.early_return_sentinel"), a5l = (a, b, c) => {
  for (var d in b) e(a, d, { get: b[d], set: c[d], enumerable: true, configurable: true });
}, ft = require;
