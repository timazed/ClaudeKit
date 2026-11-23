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
var chunk_c0frdpwg_exports = {};
__export(chunk_c0frdpwg_exports, {
  CWa: () => CWa,
  TWa: () => TWa,
  Zte: () => Zte
});
module.exports = __toCommonJS(chunk_c0frdpwg_exports);
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var k = new RegExp(`^<${import_chunk_k449cc64.A3}[ \\t>]`), S = `</${import_chunk_k449cc64.A3}>`, B = ["", `
`], x = /\sfrom-plugin\s*(?:=\s*(?:"[^"<>]*"|'[^'<>]*'|[^\s>]*))?/gi, v = /from-plugin/i;
function Zte(e, n) {
  if (typeof e === "string") return d(e, n === import_chunk_865at33z.tO ? "server" : "unknown");
  if (!Array.isArray(e)) return e;
  let t = P(e, import_chunk_865at33z.wPr), r = e.find((o) => o.type === "text");
  return r !== void 0 && h(r.text) ? P(t, import_chunk_865at33z.Mxs) : t;
}
function TWa(e) {
  if (typeof e === "string") return (0, import_chunk_865at33z.O4i)(e);
  return Array.isArray(e) ? P(e, import_chunk_865at33z.Mxs) : e;
}
function P(e, n) {
  let t = e;
  for (let r of B) {
    let o = [], s = [], a = "";
    t.forEach((l, f) => {
      if (l.type === "text") {
        if (s.length > 0) a += r;
        o.push(a.length), s.push(f), a += l.text;
      }
    });
    let i = n(a);
    if (i.length === 0) continue;
    let g = t.slice(), u = 0;
    s.forEach((l, f) => {
      let c = g[l], _ = o[f], C = o[f + 1] ?? 1 / 0;
      if (c.type !== "text") return;
      let p = [], m = 0;
      for (; u < i.length && i[u] < C; u++) {
        let E = i[u] - _;
        p.push(c.text.slice(m, E), "<\\"), m = E + (0, import_chunk_hr2stdq7.mVn)(c.text, E);
      }
      if (p.length > 0) p.push(c.text.slice(m)), g[l] = { ...c, text: p.join("") };
    }), t = g;
  }
  return t;
}
function CWa(e) {
  return d(e, "peer");
}
function d(e, n) {
  let t = e.trimEnd(), r = t.length - S.length, o = h(e), s = o || n === "peer" ? import_chunk_865at33z.h6t : import_chunk_865at33z.bPr;
  if (!(r > 0 && t.endsWith(S) && (o || n !== "unknown" && k.test(e)))) return s(e);
  let i = A(e.slice(1, r));
  return v.test(O(i)) ? s(e) : `<${s(i)}${e.slice(r)}`;
}
function h(e) {
  return import_chunk_xfj2cwfv.dPo.test(e);
}
function A(e) {
  let n = O(e);
  return n.replace(x, "") + e.slice(n.length);
}
function O(e) {
  let n = e.indexOf(">");
  return n < 0 ? e : e.slice(0, n);
}
