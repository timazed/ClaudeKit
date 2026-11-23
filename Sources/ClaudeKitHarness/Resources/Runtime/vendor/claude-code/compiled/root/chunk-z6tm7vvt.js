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
var chunk_z6tm7vvt_exports = {};
__export(chunk_z6tm7vvt_exports, {
  N$s: () => N$s,
  qjl: () => qjl
});
module.exports = __toCommonJS(chunk_z6tm7vvt_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_t9k2xeez = require("/$bunfs/root/chunk-t9k2xeez.js");
var import_chunk_9mhdzhnn = require("/$bunfs/root/chunk-9mhdzhnn.js");
var n = "tengu_violin_fret";
async function qjl() {
  try {
    return await (0, import_chunk_865at33z.FC)(n);
  } catch {
    return false;
  }
}
async function N$s() {
  return (0, import_chunk_9mhdzhnn.nMt)() && await (0, import_chunk_t9k2xeez.ON)() && await qjl();
}
