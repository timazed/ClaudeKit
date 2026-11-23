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
var chunk_mj4h1wdm_exports = {};
__export(chunk_mj4h1wdm_exports, {
  $ps: () => $ps,
  MAe: () => MAe,
  Vdl: () => Vdl
});
module.exports = __toCommonJS(chunk_mj4h1wdm_exports);
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
function MAe(e, n) {
  let t = /* @__PURE__ */ new Map();
  return $ps(e, (r, i, c) => {
    if (n.has(r)) t.set(r, e.slice(i, c));
  }) ? t : void 0;
}
function Vdl(e, n) {
  let t = [], r = 0;
  return $ps(e, (i, c, f) => {
    let d = e.slice(c, f), h = n(i, d);
    if (h !== d) t.push(e.slice(r, c), h), r = f;
  }) ? t.join("") + e.slice(r) : void 0;
}
function $ps(e, n) {
  let t = u(e, 0);
  if (e.charCodeAt(t) !== a) return false;
  if (t = u(e, t + 1), e.charCodeAt(t) === l) return g(e, t + 1);
  for (; ; ) {
    if (e.charCodeAt(t) !== s) return false;
    let r = o(e, t);
    if (r === -1) return false;
    let i = e.slice(t + 1, r - 1);
    if (i.includes("\\")) try {
      let d = (0, import_chunk_w578pjby.Cs)(e.slice(t, r));
      if (typeof d !== "string") return false;
      i = d;
    } catch {
      return false;
    }
    if (t = u(e, r), e.charCodeAt(t) !== A) return false;
    t = u(e, t + 1);
    let c = x(e, t);
    if (c === -1) return false;
    n(i, t, c), t = u(e, c);
    let f = e.charCodeAt(t);
    if (f === p) {
      t = u(e, t + 1);
      continue;
    }
    if (f === l) return g(e, t + 1);
    return false;
  }
}
var s = 34, b = 92, p = 44, A = 58, a = 123, l = 125, m = 91, C = 93;
function u(e, n) {
  while ((0, import_chunk_kx2fp6pc.BLs)(e.charCodeAt(n))) n++;
  return n;
}
function g(e, n) {
  return u(e, n) === e.length;
}
function o(e, n) {
  let t = n;
  for (; ; ) {
    if (t = e.indexOf('"', t + 1), t === -1) return -1;
    let r = 0;
    while (e.charCodeAt(t - 1 - r) === b) r++;
    if ((r & 1) === 0) return t + 1;
  }
}
function x(e, n) {
  let t = e.charCodeAt(n);
  if (t === s) return o(e, n);
  if (t === a || t === m) return T(e, n);
  let r = n;
  while (r < e.length) {
    let i = e.charCodeAt(r);
    if (i === p || i === l || i === C || (0, import_chunk_kx2fp6pc.BLs)(i)) break;
    r++;
  }
  return r === n ? -1 : r;
}
function T(e, n) {
  let t = 0, r = n;
  while (r < e.length) {
    let i = e.charCodeAt(r);
    if (i === s) {
      if (r = o(e, r), r === -1) return -1;
      continue;
    }
    if (i === a || i === m) t++;
    else if (i === l || i === C) {
      if (t--, t === 0) return r + 1;
    }
    r++;
  }
  return -1;
}
