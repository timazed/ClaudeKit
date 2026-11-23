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
var chunk_vwnf8vg8_exports = {};
__export(chunk_vwnf8vg8_exports, {
  addThreadCpu: () => import_chunk_ae4rjsvk.yvo,
  readThreadCpu: () => import_chunk_ae4rjsvk.Gjn,
  startThreadCpuMeter: () => import_chunk_ae4rjsvk.Rzi,
  threadCpuAtClaim: () => import_chunk_ae4rjsvk.Pzi,
  threadCpuAtProcessStart: () => import_chunk_ae4rjsvk.xzi,
  threadCpuBetween: () => import_chunk_ae4rjsvk.Pun,
  threadCpuStretch: () => import_chunk_ae4rjsvk.RGt
});
module.exports = __toCommonJS(chunk_vwnf8vg8_exports);
var import_chunk_ae4rjsvk = require("/$bunfs/root/chunk-ae4rjsvk.js");
