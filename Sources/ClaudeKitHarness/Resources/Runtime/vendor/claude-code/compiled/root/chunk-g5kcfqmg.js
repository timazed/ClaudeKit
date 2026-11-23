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
var chunk_g5kcfqmg_exports = {};
__export(chunk_g5kcfqmg_exports, {
  _fo: () => _fo
});
module.exports = __toCommonJS(chunk_g5kcfqmg_exports);
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_em52jhgp = require("/$bunfs/root/chunk-em52jhgp.js");
function r(n) {
  return (0, import_chunk_mgh1y10w.oe)(n) === 0 && (0, import_chunk_em52jhgp.n3)("a" + n) !== "a";
}
function _fo(n) {
  if (n.length < 2 || n.charCodeAt(0) <= 127) return n;
  let i = 0;
  for (let e of n) {
    if (!r(e)) break;
    i += e.length;
  }
  if (i === 0) return n;
  let o = i;
  while (o < n.length) {
    let e = String.fromCodePoint(n.codePointAt(o));
    if (o += e.length, (0, import_chunk_mgh1y10w.oe)(e) > 0) {
      if (o === n.length && n.charCodeAt(i - 1) === 8205) return n;
      let t = n.slice(i, o) + n.slice(0, i) + n.slice(o);
      return (0, import_chunk_mgh1y10w.oe)(t) === (0, import_chunk_mgh1y10w.oe)(n) ? t : n;
    }
  }
  return n;
}
