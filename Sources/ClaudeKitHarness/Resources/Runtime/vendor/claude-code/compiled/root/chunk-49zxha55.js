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
var chunk_49zxha55_exports = {};
__export(chunk_49zxha55_exports, {
  Ce: () => Ce,
  O4n: () => O4n,
  hLs: () => hLs
});
module.exports = __toCommonJS(chunk_49zxha55_exports);
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_rwa52046 = require("/$bunfs/root/chunk-rwa52046.js");
var e = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function hLs(n) {
  return (0, import_chunk_rwa52046.yO)(n) || typeof n === "string" && e.test(n);
}
function Ce(n) {
  if (n == null) return;
  return /^[A-Za-z0-9_-]{1,128}$/.test(n) && (hLs(n) || (0, import_chunk_sah8dzn4.As)(n) === n) ? (0, import_chunk_78g0060s.Fr)(n) : (0, import_chunk_78g0060s.S)("nonconforming");
}
function O4n(n) {
  return (0, import_chunk_78g0060s.Fr)(n.map((t) => Ce(t)).join(","));
}
