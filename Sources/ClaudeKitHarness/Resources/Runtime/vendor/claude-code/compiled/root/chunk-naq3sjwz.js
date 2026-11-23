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
var chunk_naq3sjwz_exports = {};
__export(chunk_naq3sjwz_exports, {
  Oet: () => Oet
});
module.exports = __toCommonJS(chunk_naq3sjwz_exports);
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_0kyr8hth = require("/$bunfs/root/chunk-0kyr8hth.js");
function Oet() {
  try {
    if ((0, import_chunk_xfj2cwfv.BS)() || (0, import_chunk_xfj2cwfv.Ade)() && !(0, import_chunk_865at33z.cl)()) return import_chunk_0kyr8hth.t$t;
    let i = (0, import_chunk_2nv4wrez.aX)();
    if (i?.kind === "org" || i?.kind === "wif") return (0, import_chunk_2nv4wrez.Pwe)(i);
    return (i === null ? (0, import_chunk_zhr7rpv7.ve)() !== "firstParty" || (0, import_chunk_2nv4wrez.T1)() !== void 0 || (0, import_chunk_865at33z.U4)() || (0, import_chunk_865at33z.eg)() !== void 0 && !(0, import_chunk_865at33z.eee)() : i.kind === "key" ? !(0, import_chunk_865at33z.eee)() : i.kind === "token" && !i.unclassified && !i.storedLoginOrgless && !(0, import_chunk_865at33z.aoe)()) ? import_chunk_0kyr8hth.t$t : null;
  } catch {
    return null;
  }
}
