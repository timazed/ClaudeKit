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
var chunk_sak3f2zv_exports = {};
__export(chunk_sak3f2zv_exports, {
  AUe: () => AUe,
  c4e: () => c4e
});
module.exports = __toCommonJS(chunk_sak3f2zv_exports);
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
function c4e() {
  return AUe() === void 0;
}
function AUe() {
  if ((0, import_chunk_k449cc64.wt)() || (0, import_chunk_zhr7rpv7.ve)() !== "firstParty") return "egress";
  return (0, import_chunk_2nv4wrez.Rn)("allow_remote_sessions") && !(0, import_chunk_2zeyvjwb.Ree)() ? void 0 : "policy_org";
}
