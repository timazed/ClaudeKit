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
var chunk_drb2187g_exports = {};
__export(chunk_drb2187g_exports, {
  FD: () => FD,
  nR: () => nR
});
module.exports = __toCommonJS(chunk_drb2187g_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
var o = (0, import_chunk_bs4h6795.an)(0);
function FD(r) {
  let i = (0, import_chunk_sng02qpc.k)(3), { count: f, children: t } = r;
  const c = (0, import_chunk_bs4h6795.be)(o) + f;
  let n;
  if (i[0] !== t || i[1] !== c) n = (0, import_chunk_a46xeenj.e)(o, { value: c, children: t }), i[0] = t, i[1] = c, i[2] = n;
  else n = i[2];
  return n;
}
function nR() {
  let { columns: r } = (0, import_chunk_6n6exvyx.Qo)((0, import_chunk_6n6exvyx.qe)());
  return Math.max(1, r - (0, import_chunk_bs4h6795.be)(o));
}
