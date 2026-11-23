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
var chunk_9vbqjvhj_exports = {};
__export(chunk_9vbqjvhj_exports, {
  $gt: () => $gt,
  LY: () => LY,
  Wor: () => Wor,
  e8o: () => e8o
});
module.exports = __toCommonJS(chunk_9vbqjvhj_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var o = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ marketplace: (0, import_chunk_adx6804h.n)(), plugin: (0, import_chunk_adx6804h.n)() })));
function e8o() {
  let e = (0, import_chunk_865at33z.b)("tengu_harbor_ledger", []), r = o().safeParse(e);
  return r.success ? r.data : [];
}
function LY() {
  return (0, import_chunk_2nv4wrez.Rn)("allow_channels") && (0, import_chunk_865at33z.b)("tengu_harbor", false);
}
function $gt() {
  if (!(0, import_chunk_865at33z.b)("tengu_harbor", false)) return true;
  let e = (0, import_chunk_2nv4wrez.ba)("allow_channels");
  return e !== null && e !== "cache_miss" && e !== "route_missing";
}
function Wor(e) {
  if (!e) return false;
  let { name: r, marketplace: t } = (0, import_chunk_xcgcdx61.uf)(e);
  if (!t) return false;
  return e8o().some((l) => l.plugin === r && l.marketplace === t);
}
