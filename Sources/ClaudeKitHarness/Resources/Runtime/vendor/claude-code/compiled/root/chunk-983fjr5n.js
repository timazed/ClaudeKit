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
var chunk_983fjr5n_exports = {};
__export(chunk_983fjr5n_exports, {
  Dht: () => Dht,
  rOa: () => rOa
});
module.exports = __toCommonJS(chunk_983fjr5n_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var e = "tengu_omelette_fouet";
function Dht() {
  if (!(0, import_chunk_2nv4wrez.Rn)("allow_design_sync")) return false;
  if ((0, import_chunk_k449cc64.wt)()) return false;
  if (!(0, import_chunk_zhr7rpv7.jn)()) return false;
  return (0, import_chunk_865at33z.b)(e, false);
}
var r = "tengu_omelette_grant_watch";
function rOa() {
  return (0, import_chunk_865at33z.b)(r, false);
}
