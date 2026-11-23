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
var chunk_akez6ycw_exports = {};
__export(chunk_akez6ycw_exports, {
  cJl: () => cJl,
  fJl: () => fJl,
  mJl: () => mJl,
  pJl: () => pJl,
  soi: () => soi,
  uJl: () => uJl
});
module.exports = __toCommonJS(chunk_akez6ycw_exports);
var import_chunk_racn22qq = require("/$bunfs/root/chunk-racn22qq.js");
var n = /* @__PURE__ */ new Set([-32002, import_chunk_racn22qq.ld.InvalidParams]);
function cJl(o) {
  return o instanceof import_chunk_racn22qq.ef ? o.code : void 0;
}
function soi(o) {
  return o instanceof import_chunk_racn22qq.ef && o.code === import_chunk_racn22qq.ld.MethodNotFound;
}
function uJl(o) {
  return o instanceof import_chunk_racn22qq.ef && (o.code === import_chunk_racn22qq.ld.MethodNotFound || o.code === import_chunk_racn22qq.ld.InvalidParams);
}
function fJl(o) {
  return o instanceof import_chunk_racn22qq.ef && n.has(o.code);
}
function pJl(o) {
  return o instanceof import_chunk_racn22qq.ef && o.code === import_chunk_racn22qq.ld.InvalidParams;
}
function mJl(o) {
  return o instanceof import_chunk_racn22qq.ef && o.code === import_chunk_racn22qq.ld.UrlElicitationRequired;
}
