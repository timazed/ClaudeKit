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
var chunk_jwh0etft_exports = {};
__export(chunk_jwh0etft_exports, {
  DCr: () => DCr,
  Fjn: () => Fjn,
  azi: () => azi,
  izi: () => izi
});
module.exports = __toCommonJS(chunk_jwh0etft_exports);
var import_chunk_z3ydstra = require("/$bunfs/root/chunk-z3ydstra.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var n = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_z3ydstra.SL)()), e = typeof Buffer < "u" && Buffer.from ? function(r) {
  return Buffer.from(r, "utf8");
} : n.fromUtf8;
function Fjn(r) {
  if (r instanceof Uint8Array) return r;
  if (typeof r === "string") return e(r);
  if (ArrayBuffer.isView(r)) return new Uint8Array(r.buffer, r.byteOffset, r.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  return new Uint8Array(r);
}
function DCr(r) {
  if (typeof r === "string") return r.length === 0;
  return r.byteLength === 0;
}
function izi(r) {
  return new Uint8Array([(r & 4278190080) >> 24, (r & 16711680) >> 16, (r & 65280) >> 8, r & 255]);
}
function azi(r) {
  if (!Uint32Array.from) {
    var t = new Uint32Array(r.length), f = 0;
    while (f < r.length) t[f] = r[f], f += 1;
    return t;
  }
  return Uint32Array.from(r);
}
