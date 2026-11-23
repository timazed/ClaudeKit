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
var chunk_ffh9jsxe_exports = {};
__export(chunk_ffh9jsxe_exports, {
  YK: () => YK,
  a7n: () => a7n,
  bve: () => bve
});
module.exports = __toCommonJS(chunk_ffh9jsxe_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
var o = (0, import_chunk_bs4h6795.an)(false);
function a7n(n) {
  let t = (0, import_chunk_sng02qpc.k)(2), { children: r } = n, a;
  if (t[0] !== r) a = (0, import_chunk_a46xeenj.e)(o.Provider, { value: true, children: r }), t[0] = r, t[1] = a;
  else a = t[1];
  return a;
}
function bve() {
  return (0, import_chunk_bs4h6795.be)(o);
}
function YK(n, r) {
  let t = (0, import_chunk_bs4h6795.be)(o);
  return Boolean(n || r || t);
}
