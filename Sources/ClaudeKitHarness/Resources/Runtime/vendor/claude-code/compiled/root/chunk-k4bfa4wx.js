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
var chunk_k4bfa4wx_exports = {};
__export(chunk_k4bfa4wx_exports, {
  Ox: () => Ox,
  fbr: () => fbr,
  k0e: () => k0e,
  ubr: () => ubr,
  xml: () => xml
});
module.exports = __toCommonJS(chunk_k4bfa4wx_exports);
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_f2vegtjy = require("/$bunfs/root/chunk-f2vegtjy.js");
var import_chunk_qtg8rez4 = require("/$bunfs/root/chunk-qtg8rez4.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var t = "tengu_glowing_nygaard";
function Ox() {
  if ((0, import_chunk_0rkwgmhx.se)().readOthersWriting = true, (0, import_chunk_xfj2cwfv.tct)() !== void 0 && (0, import_chunk_sghy0qej.Pe)(t, { safe: true })) (0, import_chunk_xfj2cwfv.zMl)();
}
function k0e(e) {
  let r = (0, import_chunk_qtg8rez4.Bt)(e);
  return r?.mode === "owner" && !r.isSharedLive && !(0, import_chunk_qtg8rez4.tme)(r);
}
function ubr(e, r, n) {
  return (0, import_chunk_f2vegtjy.cRe)(n, e, r) && (0, import_chunk_0rkwgmhx.se)().readOthersWriting !== true;
}
function fbr(e, r, n) {
  if (!k0e(e) && !ubr(e, r, n)) Ox();
}
function xml(e) {
  return (0, import_chunk_ma3kja9f.T)(e) && Object.values(e).some((r) => (0, import_chunk_ma3kja9f.T)(r) && (r.foreign === true || Array.isArray(r.pulled) && r.pulled.length > 0));
}
