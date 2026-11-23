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
var chunk_92aeg133_exports = {};
__export(chunk_92aeg133_exports, {
  F5t: () => F5t,
  Gga: () => Gga
});
module.exports = __toCommonJS(chunk_92aeg133_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_pkzhb7kv = require("/$bunfs/root/chunk-pkzhb7kv.js");
var import_chunk_9jr493jm = require("/$bunfs/root/chunk-9jr493jm.js");
var import_chunk_w50zedgp = require("/$bunfs/root/chunk-w50zedgp.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
function F5t(o, e = false) {
  return r(o, [...(0, import_chunk_w50zedgp.Oa)() ? (0, import_chunk_bzyb60p0.dfe)() : [], ...(0, import_chunk_bzyb60p0.Par)() ? [import_chunk_bzyb60p0.qw] : [], ...(0, import_chunk_pkzhb7kv.rd)() ? ((0, import_chunk_4vsz8a99.OU)() ?? []).filter(import_chunk_9jr493jm.Yqs) : [], ...e ? l() : []]);
}
function l() {
  return [];
}
function Gga(o, e) {
  return r(o, [...(0, import_chunk_w50zedgp.Oa)() ? (0, import_chunk_bzyb60p0.dfe)() : [], ...(0, import_chunk_bzyb60p0.Par)() && !import_chunk_c203g5kd.s.CLAUDE_CODE_SIMPLE ? [import_chunk_bzyb60p0.qw] : []].filter((t) => t.isEnabled() && !(0, import_chunk_ht27b0vz.Tr)(e, t)));
}
function r(o, e) {
  if (e.length === 0) return o;
  let t = new Set(o.map((i) => i.name)), n = e.filter((i) => !t.has(i.name));
  return n.length > 0 ? [...o, ...n] : o;
}
