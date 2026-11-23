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
var chunk_7g0kta79_exports = {};
__export(chunk_7g0kta79_exports, {
  A2l: () => A2l,
  Hte: () => Hte,
  IZe: () => IZe,
  XUo: () => XUo
});
module.exports = __toCommonJS(chunk_7g0kta79_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
function x() {
  return false;
}
var t = (0, import_chunk_bs4h6795.an)(false);
function Hte() {
  return (0, import_chunk_bs4h6795.be)(t);
}
function A2l(c) {
  let { children: o } = c;
  return (0, import_chunk_6n6exvyx.qe)(), (0, import_chunk_bs4h6795.y)(x), o;
}
function XUo(c) {
  let l = (0, import_chunk_sng02qpc.k)(2), { children: o } = c, n;
  if (l[0] !== o) n = (0, import_chunk_a46xeenj.e)(t, { value: true, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", paddingLeft: 1, children: o }) }), l[0] = o, l[1] = n;
  else n = l[1];
  return n;
}
function IZe(c) {
  let { children: o, bold: l, color: n } = c;
  return Hte() ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: o }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: l, color: n, children: o });
}
