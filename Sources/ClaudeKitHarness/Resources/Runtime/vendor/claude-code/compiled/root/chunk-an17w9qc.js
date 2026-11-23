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
var chunk_an17w9qc_exports = {};
__export(chunk_an17w9qc_exports, {
  $$: () => $$,
  Xqe: () => Xqe,
  nYr: () => nYr,
  rri: () => rri
});
module.exports = __toCommonJS(chunk_an17w9qc_exports);
var import_chunk_em52jhgp = require("/$bunfs/root/chunk-em52jhgp.js");
var $$ = 8;
function nYr(e, n) {
  let o = [], t = "", r = 0;
  for (let u of e) {
    let s = l(u);
    if (r + s > n && t !== "") o.push(t), t = "", r = 0;
    t += u, r += s;
  }
  return o.push(t), o;
}
function rri(e, n) {
  let o = [], t = "", r = 0;
  for (let { segment: u } of (0, import_chunk_em52jhgp.ul)().segment(e)) {
    let s = 0;
    for (let c of u) s += l(c);
    if (s > n) {
      for (let c of nYr(t + u, n)) o.push(c);
      t = o.pop() ?? "", r = Xqe(t);
      continue;
    }
    if (r + s > n && t !== "") o.push(t), t = "", r = 0;
    t += u, r += s;
  }
  return o.push(t), o;
}
function l(e) {
  return e.length === 1 && e < "\x80" ? 1 : 2;
}
function Xqe(e) {
  let n = 0;
  for (let o of e) n += l(o);
  return n;
}
