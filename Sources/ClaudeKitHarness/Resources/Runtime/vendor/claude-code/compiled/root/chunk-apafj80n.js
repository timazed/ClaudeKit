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
var chunk_apafj80n_exports = {};
__export(chunk_apafj80n_exports, {
  IJ: () => IJ
});
module.exports = __toCommonJS(chunk_apafj80n_exports);
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_vj6gt5th = require("/$bunfs/root/chunk-vj6gt5th.js");
var import_chunk_1tyxkk56 = require("/$bunfs/root/chunk-1tyxkk56.js");
var import_chunk_em52jhgp = require("/$bunfs/root/chunk-em52jhgp.js");
var o = "\x1B[0m";
function r(e) {
  return import_chunk_d57v19zt.Re.level > 0 && e.includes(o) ? o + e.replace(/\r?\n/g, `${o}$&${o}`) + o : import_chunk_d57v19zt.Re.reset(e);
}
var s = import_chunk_d57v19zt.Re.blueBright, h = new Map(Object.entries({ keyword: s, built_in: import_chunk_d57v19zt.Re.cyan, type: import_chunk_d57v19zt.Re.cyan.dim, literal: s, number: import_chunk_d57v19zt.Re.green, regexp: import_chunk_d57v19zt.Re.red, string: import_chunk_d57v19zt.Re.red, subst: r, symbol: r, class: s, function: import_chunk_d57v19zt.Re.yellow, title: r, "title.function": import_chunk_d57v19zt.Re.yellow, "title.class": s, params: r, comment: import_chunk_d57v19zt.Re.green, doctag: import_chunk_d57v19zt.Re.green, meta: import_chunk_d57v19zt.Re.grey, "meta-keyword": r, "meta-string": r, "meta.keyword": r, "meta.string": r, section: r, tag: import_chunk_d57v19zt.Re.grey, name: s, attr: import_chunk_d57v19zt.Re.cyan, attribute: r, variable: r, bullet: r, code: r, emphasis: import_chunk_d57v19zt.Re.italic, strong: import_chunk_d57v19zt.Re.bold, link: import_chunk_d57v19zt.Re.underline, quote: r, addition: import_chunk_d57v19zt.Re.green, deletion: import_chunk_d57v19zt.Re.red })), f = new Map(Array.from(h, ([e, t]) => [e, t === s ? import_chunk_d57v19zt.Re.blue : t]));
function d(e, t) {
  let i = (0, import_chunk_7cfjrnwy.sA)(e, "hljs-");
  for (; ; ) {
    let n = t.get(i);
    if (n) return n;
    let l = i.lastIndexOf(".");
    if (l < 0) return;
    i = i.slice(0, l);
  }
}
function S(e) {
  let t = [], i = [];
  u(e, t, i);
  let n = (0, import_chunk_em52jhgp.oOo)(i);
  if (n === i) return;
  t.forEach(({ siblings: l, at: g }, a) => {
    l[g] = n[a];
  });
}
function u(e, t, i) {
  e.children.forEach((n, l) => {
    if (typeof n === "string") t.push({ siblings: e.children, at: l }), i.push(n);
    else u(n, t, i);
  });
}
function y(e, t) {
  if (typeof e === "string") return e;
  let i = e.children.map((g) => y(g, t)).join(""), n = e.scope, l = n ? d(n, t) : void 0;
  return l ? l(i) : i;
}
function b(e, t) {
  let i = t?.language;
  if (!i) return e;
  try {
    let n = (0, import_chunk_vj6gt5th.OIe)(i);
    if (!n) return e;
    let l = t?.work, a = (l ? (0, import_chunk_vj6gt5th.Uya)(l, (p) => p.highlight(e, { language: n, ignoreIllegals: true })) : (0, import_chunk_vj6gt5th.h7n)().highlight(e, { language: n, ignoreIllegals: true })).tree;
    S(a);
    let m = t?.theme && (0, import_chunk_1tyxkk56.ASe)(t.theme) ? f : h;
    return a.children.map((p) => y(p, m)).join("");
  } catch {
    return e;
  }
}
function H(e) {
  return (0, import_chunk_vj6gt5th.OIe)(e) !== null;
}
var L = { highlight: b, supportsLanguage: H };
function IJ() {
  return L;
}
