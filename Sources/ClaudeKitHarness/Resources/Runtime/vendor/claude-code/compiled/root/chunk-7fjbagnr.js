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
var chunk_7fjbagnr_exports = {};
__export(chunk_7fjbagnr_exports, {
  A6i: () => A6i,
  BGt: () => BGt,
  ICl: () => ICl,
  JLe: () => JLe,
  MCl: () => MCl,
  P1: () => P1,
  R6i: () => R6i,
  kTo: () => kTo,
  x6i: () => x6i,
  yTs: () => yTs
});
module.exports = __toCommonJS(chunk_7fjbagnr_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_n5qd9b6p = require("/$bunfs/root/chunk-n5qd9b6p.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var A6i = 25e3, ICl = ` To read it anyway, up to what still fits in your context, call ${import_chunk_k883m4fq.De} again with ${import_chunk_k883m4fq.Mke}: true \u2014 only if you genuinely need all of it or the user asked for the whole file.`, R6i = ` Even with ${import_chunk_k883m4fq.Mke}, this is more than fits in the context you have left this turn (other large reads in the same turn share that room).`, MCl = ` ${import_chunk_k883m4fq.Mke} is not available where this read runs; read it in parts with offset and limit.`, x6i = 128;
class JLe extends Error {
  tokenCount;
  maxTokens;
  constructor(e, t, r = "") {
    super(`File content (${e} tokens) exceeds maximum allowed tokens (${t}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.${r}`);
    this.tokenCount = e;
    this.maxTokens = t;
    this.name = "MaxFileReadTokenExceededError";
  }
}
var n = /* @__PURE__ */ new WeakMap();
function yTs(e, t) {
  n.set(e, t);
}
function kTo(e) {
  return n.get(e);
}
function i() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;
  if (e !== void 0 && e > 0) return e;
  return;
}
function P1() {
  let e = (0, import_chunk_n5qd9b6p.Ar)();
  return e.defaultFileReadingLimits ??= { maxSizeBytes: import_chunk_2yx6c1y2.nKt, maxTokens: i() ?? A6i }, e.defaultFileReadingLimits;
}
function BGt() {
  return (0, import_chunk_865at33z.Lt)("tengu_tab_read_sep", false);
}
