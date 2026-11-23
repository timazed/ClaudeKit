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
var chunk_gpb7vtp4_exports = {};
__export(chunk_gpb7vtp4_exports, {
  E$e: () => E$e,
  GJn: () => GJn,
  Izr: () => Izr,
  QKs: () => QKs,
  ZKs: () => ZKs,
  zJn: () => zJn
});
module.exports = __toCommonJS(chunk_gpb7vtp4_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
class r {
  stampMs = 0;
  detachedSinceLastAttach = false;
  reset() {
    this.stampMs = 0, this.detachedSinceLastAttach = false;
  }
}
var s = new import_chunk_2904xtvq.j(() => new r());
function a() {
  return s.of((0, import_chunk_f9x2f6cx.N)().host);
}
function QKs(e) {
  let t = a();
  if (e === 0) {
    t.reset();
    return;
  }
  if (t.detachedSinceLastAttach || t.stampMs === 0) t.stampMs = e;
  t.detachedSinceLastAttach = false;
}
function GJn() {
  a().detachedSinceLastAttach = true;
}
function ZKs() {
  return a().detachedSinceLastAttach;
}
function E$e() {
  return a().stampMs;
}
function zJn(e) {
  return false;
}
async function Izr() {
  for (; ; ) {
    let e = Date.now();
    if (!zJn(e)) return;
    let { detachedSinceLastAttach: t, stampMs: o } = a(), c = t || o === 0 ? 500 : o + 500 - e;
    await (0, import_chunk_5appeerh.K)(Math.max(25, c) + 25);
  }
}
