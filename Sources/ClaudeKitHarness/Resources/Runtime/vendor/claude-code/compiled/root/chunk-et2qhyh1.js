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
var chunk_et2qhyh1_exports = {};
__export(chunk_et2qhyh1_exports, {
  armProcessTimer: () => import_chunk_5appeerh.m5n,
  fullJitterBackoffMs: () => import_chunk_5appeerh.LI,
  raceWithAbortSignal: () => import_chunk_5appeerh.Tn,
  sleep: () => import_chunk_5appeerh.K,
  withDeadline: () => import_chunk_5appeerh.me,
  withTimeout: () => import_chunk_5appeerh.qt
});
module.exports = __toCommonJS(chunk_et2qhyh1_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
