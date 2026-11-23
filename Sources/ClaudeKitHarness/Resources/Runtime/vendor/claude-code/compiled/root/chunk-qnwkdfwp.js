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
var chunk_qnwkdfwp_exports = {};
__export(chunk_qnwkdfwp_exports, {
  tBo: () => tBo,
  y9t: () => y9t
});
module.exports = __toCommonJS(chunk_qnwkdfwp_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
var t = (0, import_chunk_bs4h6795.an)(void 0);
function y9t() {
  return (0, import_chunk_bs4h6795.be)(t);
}
function tBo(g) {
  let u = (0, import_chunk_sng02qpc.k)(6), { selectionHighlight: o, noticeSystemLines: n, children: i } = g, c;
  if (u[0] !== n || u[1] !== o) c = { isQueued: true, selectionHighlight: o, noticeSystemLines: n }, u[0] = n, u[1] = o, u[2] = c;
  else c = u[2];
  let s = c, l;
  if (u[3] !== i || u[4] !== s) l = (0, import_chunk_a46xeenj.e)(t.Provider, { value: s, children: i }), u[3] = i, u[4] = s, u[5] = l;
  else l = u[5];
  return l;
}
