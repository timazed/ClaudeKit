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
var chunk_g43y1xn5_exports = {};
__export(chunk_g43y1xn5_exports, {
  drainRegisteredWriteQueues: () => import_chunk_0yc3wy8b.AM,
  registerWriteQueueDrain: () => import_chunk_0yc3wy8b.hut
});
module.exports = __toCommonJS(chunk_g43y1xn5_exports);
var import_chunk_0yc3wy8b = require("/$bunfs/root/chunk-0yc3wy8b.js");
