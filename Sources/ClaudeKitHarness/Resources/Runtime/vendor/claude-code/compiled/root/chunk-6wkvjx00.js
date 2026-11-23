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
var chunk_6wkvjx00_exports = {};
__export(chunk_6wkvjx00_exports, {
  Xle: () => Xle
});
module.exports = __toCommonJS(chunk_6wkvjx00_exports);
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_qwbhh2k3 = require("/$bunfs/root/chunk-qwbhh2k3.js");
var import_chunk_vyaqbqge = require("/$bunfs/root/chunk-vyaqbqge.js");
var import_chunk_v6yexwhb = require("/$bunfs/root/chunk-v6yexwhb.js");
var import_chunk_04nf05xp = require("/$bunfs/root/chunk-04nf05xp.js");
function A(n, r) {
  var f = -1, m = (0, import_chunk_v6yexwhb.DEe)(n) ? Array(n.length) : [];
  return (0, import_chunk_6mfepmbb.EKn)(n, function(p, i, o) {
    m[++f] = r(p, i, o);
  }), m;
}
var c = A;
function B(n, r) {
  var f = n.length;
  n.sort(r);
  while (f--) n[f] = n[f].value;
  return n;
}
var g = B;
function M(n, r) {
  if (n !== r) {
    var f = n !== void 0, m = n === null, p = n === n, i = (0, import_chunk_04nf05xp.Uz)(n), o = r !== void 0, d = r === null, t = r === r, u = (0, import_chunk_04nf05xp.Uz)(r);
    if (!d && !u && !i && n > r || i && o && t && !d && !u || m && o && t || !f && t || !p) return 1;
    if (!m && !i && !u && n < r || u && f && p && !m && !i || d && f && p || !o && p || !t) return -1;
  }
  return 0;
}
var a = M;
function y(n, r, f) {
  var m = -1, p = n.criteria, i = r.criteria, o = p.length, d = f.length;
  while (++m < o) {
    var t = a(p[m], i[m]);
    if (t) {
      if (m >= d) return t;
      var u = f[m];
      return t * (u == "desc" ? -1 : 1);
    }
  }
  return n.index - r.index;
}
var b = y;
function C(n, r, f) {
  if (r.length) r = (0, import_chunk_04nf05xp.cJ)(r, function(i) {
    if ((0, import_chunk_04nf05xp.tE)(i)) return function(o) {
      return (0, import_chunk_v6yexwhb.A6e)(o, i.length === 1 ? i[0] : i);
    };
    return i;
  });
  else r = [import_chunk_v6yexwhb.xge];
  var m = -1;
  r = (0, import_chunk_04nf05xp.cJ)(r, (0, import_chunk_v6yexwhb.iQe)(import_chunk_vyaqbqge.aP));
  var p = c(n, function(i, o, d) {
    var t = (0, import_chunk_04nf05xp.cJ)(r, function(u) {
      return u(i);
    });
    return { criteria: t, index: ++m, value: i };
  });
  return g(p, function(i, o) {
    return b(i, o, f);
  });
}
var x = C;
var k = (0, import_chunk_6mfepmbb.jze)(function(n, r) {
  if (n == null) return [];
  var f = r.length;
  if (f > 1 && (0, import_chunk_6mfepmbb.gut)(n, r[0], r[1])) r = [];
  else if (f > 2 && (0, import_chunk_6mfepmbb.gut)(r[0], r[1], r[2])) r = [r[0]];
  return x(n, (0, import_chunk_qwbhh2k3.BRt)(r, 1), []);
}), Xle = k;
