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
var chunk_tpn966c0_exports = {};
__export(chunk_tpn966c0_exports, {
  STREAM_GONE_CODES: () => import_chunk_ndrgvsn7.uLo,
  drainStdoutBeforeExit: () => import_chunk_ndrgvsn7.d3n,
  exitWithError: () => import_chunk_ndrgvsn7.kQe,
  getStderrDroppedTotal: () => import_chunk_ndrgvsn7.Tsa,
  getStdoutDrainBudgetMs: () => import_chunk_ndrgvsn7.YLs,
  getStdoutFullDiskCode: () => import_chunk_ndrgvsn7.vsa,
  handleStreamGoneErrors: () => import_chunk_ndrgvsn7.q6e,
  isExitExternallyClocked: () => import_chunk_ndrgvsn7.Esa,
  isStdinUnusableError: () => import_chunk_ndrgvsn7.l3n,
  iterateStreamUntilClose: () => import_chunk_ndrgvsn7.XLr,
  markStdoutDrainExternallyClocked: () => import_chunk_ndrgvsn7.Oce,
  outstandingStdoutBytes: () => import_chunk_ndrgvsn7.qLs,
  peekForStdinData: () => import_chunk_ndrgvsn7.YLr,
  registerProcessIOErrorHandlers: () => import_chunk_ndrgvsn7.ksa,
  writeOut: () => import_chunk_ndrgvsn7.fLo,
  writeToStderr: () => import_chunk_ndrgvsn7.$E,
  writeToStdout: () => import_chunk_ndrgvsn7.es
});
module.exports = __toCommonJS(chunk_tpn966c0_exports);
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
