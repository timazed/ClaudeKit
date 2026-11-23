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
var chunk_wn8z7ghn_exports = {};
__export(chunk_wn8z7ghn_exports, {
  ZC: () => ZC,
  gft: () => gft,
  iC: () => iC
});
module.exports = __toCommonJS(chunk_wn8z7ghn_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var gft = "Programs are unavailable in this session; the command was not run.";
function ZC() {
  return (0, import_chunk_f9x2f6cx.Y)();
}
function iC() {
  if (ZC()) throw new import_chunk_jv7av99m.A(gft, "a program start was refused in a diskless session");
}
