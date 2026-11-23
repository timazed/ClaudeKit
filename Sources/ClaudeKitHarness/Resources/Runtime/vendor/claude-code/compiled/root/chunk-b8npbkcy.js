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
var chunk_b8npbkcy_exports = {};
__export(chunk_b8npbkcy_exports, {
  noteProcessStartTuning: () => import_chunk_axd2vhx2.Eed,
  processStartCollectionTimerOff: () => import_chunk_axd2vhx2.gvo,
  processStartPurgeDelayMs: () => import_chunk_axd2vhx2.$Cr,
  processStartTuning: () => import_chunk_axd2vhx2.FCr
});
module.exports = __toCommonJS(chunk_b8npbkcy_exports);
var import_chunk_axd2vhx2 = require("/$bunfs/root/chunk-axd2vhx2.js");
