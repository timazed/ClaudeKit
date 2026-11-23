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
var chunk_2e99ehkv_exports = {};
__export(chunk_2e99ehkv_exports, {
  CUe: () => CUe
});
module.exports = __toCommonJS(chunk_2e99ehkv_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_d775ds6c = require("/$bunfs/root/chunk-d775ds6c.js");
function CUe(e, o) {
  if (e !== "launched_from_home") return {};
  try {
    return { ...(0, import_chunk_d775ds6c.SPi)(o) && { only_refused_by: (0, import_chunk_78g0060s.S)("windows_profile_on_mount_without_drive") }, ...(0, import_chunk_d775ds6c.bPi)(o) && { on_volume_mounted_twice: true }, ...(0, import_chunk_d775ds6c.wPi)(o) && { mount_source_unread: true } };
  } catch (r) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(r)), {};
  }
}
