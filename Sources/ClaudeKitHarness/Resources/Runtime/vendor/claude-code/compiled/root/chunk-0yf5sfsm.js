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
var chunk_0yf5sfsm_exports = {};
__export(chunk_0yf5sfsm_exports, {
  BACKGROUND_EXIT_CAUSE_SESSION_IN_USE: () => import_chunk_ndrgvsn7.KLr,
  BACKGROUND_EXIT_CAUSE_SIGN_IN_UNAVAILABLE: () => import_chunk_ndrgvsn7.qLr,
  discardBackgroundExitSidecars: () => import_chunk_ndrgvsn7.a3n,
  readAndClearBackgroundExitCause: () => import_chunk_ndrgvsn7.bsa,
  readAndClearBackgroundExitDetail: () => import_chunk_ndrgvsn7.wsa,
  setBackgroundExitCause: () => import_chunk_ndrgvsn7.ix,
  setBackgroundExitDetail: () => import_chunk_ndrgvsn7.KLs
});
module.exports = __toCommonJS(chunk_0yf5sfsm_exports);
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
