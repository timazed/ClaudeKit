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
var chunk_h9qt07a5_exports = {};
__export(chunk_h9qt07a5_exports, {
  Bi: () => Bi,
  wFt: () => wFt
});
module.exports = __toCommonJS(chunk_h9qt07a5_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var x = /^\s*<tool_use_error>([\s\S]*)<\/tool_use_error>\s*$/i, f = /<\/?tool_use_error\b/i;
function Bi(n, e) {
  if (!n.trim() || !e.trim()) return null;
  let g = (0, import_chunk_7cfjrnwy.fo)(e), l = new RegExp(`<${g}(?=[\\s>])`, "gi"), o = new RegExp(`<\\/${g}>`, "gi"), s = 0;
  for (; ; ) {
    l.lastIndex = s;
    let t = l.exec(n);
    o.lastIndex = s;
    let i = o.exec(n);
    if (!t || !i) return null;
    let c = n.indexOf(">", t.index + t[0].length);
    if (c === -1) return null;
    o.lastIndex = c + 1;
    let r = o.exec(n);
    if (!r) return null;
    let u = i.index + i[0].length <= t.index, d = n.slice(c + 1, r.index);
    if (d && !u) return d;
    s = r.index + r[0].length;
  }
}
function wFt(n) {
  let e = x.exec(n)?.[1];
  return e !== void 0 && !f.test(e) ? e : void 0;
}
