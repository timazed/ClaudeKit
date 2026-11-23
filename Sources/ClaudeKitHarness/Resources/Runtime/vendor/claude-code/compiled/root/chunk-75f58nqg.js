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
var chunk_75f58nqg_exports = {};
__export(chunk_75f58nqg_exports, {
  Qml: () => Qml,
  Zml: () => Zml,
  ehl: () => ehl,
  nhl: () => nhl,
  o_o: () => o_o,
  r_o: () => r_o,
  thl: () => thl
});
module.exports = __toCommonJS(chunk_75f58nqg_exports);
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
function Qml(e) {
  let n = { ...e, consumed: false };
  return (0, import_chunk_0rkwgmhx.se)().pipelineReplyOrigins.set(e.expectedToolUseId, n), n;
}
function Zml(e, n, t) {
  let i = t === void 0 ? void 0 : (0, import_chunk_0rkwgmhx.se)().pipelineReplyOrigins.get(t);
  if (i === void 0 || i.consumed || i.slug !== e || i.threadId !== n) return false;
  return i.consumed = true, true;
}
function ehl(e) {
  return e !== void 0 && (0, import_chunk_0rkwgmhx.se)().pipelineReplyOrigins.has(e);
}
function r_o(e, n) {
  return (0, import_chunk_0rkwgmhx.se)().autoReact.chainToolUseIds.set(e, n), e;
}
function o_o(e) {
  let n = (0, import_chunk_0rkwgmhx.se)();
  n.autoReact.chainToolUseIds.delete(e), n.askClassFirstWords.delete(e), n.publishCommentCards.delete(e);
}
function thl(e, n) {
  return e !== void 0 && (0, import_chunk_0rkwgmhx.se)().autoReact.chainToolUseIds.get(e) === n;
}
function nhl(e) {
  let n = (0, import_chunk_0rkwgmhx.se)().pipelineReplyOrigins;
  if (n.get(e.expectedToolUseId) === e) n.delete(e.expectedToolUseId);
}
