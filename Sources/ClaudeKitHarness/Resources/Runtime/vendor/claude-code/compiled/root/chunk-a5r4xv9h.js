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
var chunk_a5r4xv9h_exports = {};
__export(chunk_a5r4xv9h_exports, {
  TBa: () => TBa,
  p0t: () => p0t,
  vBa: () => vBa
});
module.exports = __toCommonJS(chunk_a5r4xv9h_exports);
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_anfdrvmv = require("/$bunfs/root/chunk-anfdrvmv.js");
var import_chunk_ye486ddj = require("/$bunfs/root/chunk-ye486ddj.js");
function p0t(o) {
  return o === "cache_miss" || o === "route_missing" ? "policy_unread" : "policy_denied";
}
function vBa(o) {
  try {
    let e = (0, import_chunk_2nv4wrez.ba)(import_chunk_anfdrvmv.ont);
    return e === null || p0t(e) === "policy_unread" && !o;
  } catch {
    return false;
  }
}
function TBa(o, e) {
  let n = (0, import_chunk_2nv4wrez.ba)(o);
  if (n !== null) return p0t(n);
  return e() ? "uploads_off" : (0, import_chunk_ye486ddj.EW)();
}
