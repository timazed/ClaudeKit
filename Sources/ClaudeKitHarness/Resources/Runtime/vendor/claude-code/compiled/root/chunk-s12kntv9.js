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
var chunk_s12kntv9_exports = {};
__export(chunk_s12kntv9_exports, {
  S_: () => S_,
  Sys: () => Sys,
  TEt: () => TEt,
  Z$n: () => Z$n,
  b_l: () => b_l,
  d4: () => d4,
  t2e: () => t2e,
  w_l: () => w_l
});
module.exports = __toCommonJS(chunk_s12kntv9_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
function d4(n, e) {
  let t = /^(\d{1,15})-/.exec(n)?.[1], r = /^(\d{1,15})-/.exec(e)?.[1];
  return t === void 0 || r === void 0 ? null : Number(t) - Number(r);
}
var t2e = /^\d{1,15}-[0-9a-f]{1,32}$/;
var A = 100;
function Z$n(n) {
  return (0, import_chunk_r8478wtb.GR)(d(n));
}
function d(n) {
  let e = n.normalize("NFC");
  return Array.from(e, (r) => (0, import_chunk_r8478wtb.KN)(r.codePointAt(0) ?? 0) ? " " : r).join("").replace(import_chunk_r8478wtb.yee, " ").replace(F, " ").replace(/[\u0300-\u036F\u0483-\u0489\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20F0\uA66F-\uA67D\uFE20-\uFE2F]/g, " ");
}
function TEt(n, e) {
  let t = Array.from(d(n), (o) => {
    let i = o.codePointAt(0) ?? 0;
    return i <= 31 || i >= 127 && i <= 159 ? " " : o;
  }).join("").replace(/\s+/g, " ").trim();
  if (t === "") return null;
  let r = (0, import_chunk_7cfjrnwy.Ea)(t, e);
  return (0, import_chunk_r8478wtb.qu)((r === t ? t : `${r.trimEnd()}\u2026`).replace(import_chunk_r8478wtb.oVt, import_chunk_r8478wtb.jmn));
}
var F = /[\u20DD-\u20E4\u23FA\u25C9\u25CB\u25CE\u25CF\u25EF\u26AA\u26AB\u26AC\u29BE\u29BF\u2B24\u2B55\u2B58\u{1F534}\u{1F535}\u{1F785}-\u{1F78B}\u{1F7E0}-\u{1F7E4}]/gu;
function Sys(n) {
  return (0, import_chunk_r8478wtb.GR)(p(n.normalize("NFC"), false));
}
function b_l(n) {
  return p(n, true);
}
function p(n, e) {
  let t = Array.from(n), r = [];
  for (let o = 0; o < t.length; o++) {
    let i = t[o], u = i.codePointAt(0) ?? 0, c = r.at(-1), s = c?.codePointAt(0), a = c === void 0 ? e : !/\s/u.test(c);
    if (u === 127988) {
      let l = (0, import_chunk_xfj2cwfv.Q3i)(t, o);
      if (l !== -1) {
        r.push(...t.slice(o, l + 1)), o = l;
        continue;
      }
    }
    if (E(u)) {
      if (a && (s === void 0 || !g(s))) r.push(i);
      continue;
    }
    if (f(u)) {
      if (a && (s === void 0 || !f(s))) r.push(i);
      continue;
    }
    r.push((0, import_chunk_r8478wtb.KN)(u) || import_chunk_r8478wtb.hct.test(i) ? " " : i);
  }
  return r.join("");
}
function E(n) {
  return n >= 6155 && n <= 6157 || n === 6159 || n >= 65024 && n <= 65039 || n >= 917760 && n <= 917999;
}
function f(n) {
  return n === 8204 || n === 8205;
}
function g(n) {
  return f(n) || E(n);
}
function w_l(n) {
  let e = Array.from(n.normalize("NFC"), (t) => (0, import_chunk_r8478wtb.KN)(t.codePointAt(0) ?? 0) ? " " : t).join("");
  return (0, import_chunk_r8478wtb.GR)(e.replace(import_chunk_r8478wtb.yee, " "));
}
function S_(n) {
  let e = Z$n(n);
  if (e === null) return null;
  let t = (0, import_chunk_7cfjrnwy.Ea)(e, A);
  return (0, import_chunk_r8478wtb.qu)((t === e ? e : `${t}\u2026`).replace(import_chunk_r8478wtb.oVt, import_chunk_r8478wtb.jmn));
}
