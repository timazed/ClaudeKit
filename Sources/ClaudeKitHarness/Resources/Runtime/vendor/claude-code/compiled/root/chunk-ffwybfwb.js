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
var chunk_ffwybfwb_exports = {};
__export(chunk_ffwybfwb_exports, {
  BUCKET_CAPACITY: () => import_chunk_1d0hhqv8.Tqe,
  TOKEN_REFILL_MS: () => import_chunk_1d0hhqv8.Cqe,
  createTokenBucket: () => import_chunk_1d0hhqv8.Aqe
});
module.exports = __toCommonJS(chunk_ffwybfwb_exports);
var import_chunk_1d0hhqv8 = require("/$bunfs/root/chunk-1d0hhqv8.js");
