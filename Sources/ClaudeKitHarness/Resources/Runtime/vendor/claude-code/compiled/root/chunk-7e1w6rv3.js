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
var chunk_7e1w6rv3_exports = {};
__export(chunk_7e1w6rv3_exports, {
  DIr: () => DIr,
  GOs: () => GOs,
  HIr: () => HIr,
  jOs: () => jOs,
  ud: () => ud
});
module.exports = __toCommonJS(chunk_7e1w6rv3_exports);
var import_chunk_839h1d5e = require("/$bunfs/root/chunk-839h1d5e.js");
var import_chunk_04nf05xp = require("/$bunfs/root/chunk-04nf05xp.js");
var m = /\s/;
function p(r) {
  var t = r.length;
  while (t-- && m.test(r.charAt(t))) ;
  return t;
}
var jOs = p;
var s = /^\s+/;
function d(r) {
  return r ? r.slice(0, jOs(r) + 1).replace(s, "") : r;
}
var i = d;
var o = NaN, c = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, x = /^0o[0-7]+$/i, I = parseInt;
function b(r) {
  if (typeof r == "number") return r;
  if ((0, import_chunk_04nf05xp.Uz)(r)) return o;
  if ((0, import_chunk_839h1d5e.lP)(r)) {
    var t = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = (0, import_chunk_839h1d5e.lP)(t) ? t + "" : t;
  }
  if (typeof r != "string") return r === 0 ? r : +r;
  r = i(r);
  var e = a.test(r);
  return e || x.test(r) ? I(r.slice(2), e ? 2 : 8) : c.test(r) ? o : +r;
}
var HIr = b;
var n = 1 / 0, u = 17976931348623157e292;
function y(r) {
  if (!r) return r === 0 ? r : 0;
  if (r = HIr(r), r === n || r === -n) {
    var t = r < 0 ? -1 : 1;
    return t * u;
  }
  return r === r ? r : 0;
}
var DIr = y;
function E(r) {
  var t = DIr(r), e = t % 1;
  return t === t ? e ? t - e : t : 0;
}
var GOs = E;
var N = "Expected a function";
function T(r, t) {
  var e;
  if (typeof t != "function") throw TypeError(N);
  return r = GOs(r), function() {
    if (--r > 0) e = t.apply(this, arguments);
    if (r <= 1) t = void 0;
    return e;
  };
}
var f = T;
function O(r) {
  return f(2, r);
}
var ud = O;
