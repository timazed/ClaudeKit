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
var chunk_b6k44n0m_exports = {};
__export(chunk_b6k44n0m_exports, {
  ZOt: () => ZOt,
  eIt: () => eIt
});
module.exports = __toCommonJS(chunk_b6k44n0m_exports);
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var r = null, s = null, n = null, e = { name: require("/$bunfs/root/chunk-m68qnx38.js").ARTIFACT_TOOL_NAME, names: require("/$bunfs/root/chunk-m68qnx38.js"), ui: require("/$bunfs/root/chunk-raww94w8.js") }, M = [import_chunk_060xwhvh._t, import_chunk_hn3cwwzt.ke, import_chunk_rb36kwbn.lt, import_chunk_rb36kwbn.Dt, import_chunk_k883m4fq.De, import_chunk_rb36kwbn.Ks, import_chunk_rb36kwbn.yt, ...r ? [r.name] : [], ...s ? [s.name] : [], ...n ? [n.name] : [], ...e ? [e.name, e.names.ARTIFACT_COMMENTS_TOOL_NAME, e.names.ARTIFACT_DATA_TOOL_NAME, e.names.ARTIFACT_CHECK_TOOL_NAME] : []], T = { get [import_chunk_060xwhvh._t]() {
  return require("/$bunfs/root/chunk-ksxbtbzd.js").renderToolUseMessage;
}, get [import_chunk_hn3cwwzt.ke]() {
  return require("/$bunfs/root/chunk-bmcqtr69.js").renderToolUseMessage;
}, get [import_chunk_rb36kwbn.lt]() {
  return require("/$bunfs/root/chunk-c6sqp12q.js").renderToolUseMessage;
}, get [import_chunk_rb36kwbn.Dt]() {
  return require("/$bunfs/root/chunk-vpbb6f67.js").renderToolUseMessage;
}, get [import_chunk_k883m4fq.De]() {
  return require("/$bunfs/root/chunk-d3cshc6y.js").renderToolUseMessage;
}, get [import_chunk_rb36kwbn.Ks]() {
  return require("/$bunfs/root/chunk-8003m6z4.js").renderToolUseMessage;
}, get [import_chunk_rb36kwbn.yt]() {
  return require("/$bunfs/root/chunk-c3wcapr4.js").renderToolUseMessage;
}, ...r && { [r.name]: r.ui.renderToolUseMessage }, ...s && { [s.name]: s.ui.renderToolUseMessage }, ...n && { [n.name]: n.ui.renderToolUseMessage }, ...e && { [e.name]: e.ui.renderToolUseLine, [e.names.ARTIFACT_COMMENTS_TOOL_NAME]: e.ui.renderCommentsToolUseMessage, [e.names.ARTIFACT_DATA_TOOL_NAME]: e.ui.renderDataToolUseMessage, [e.names.ARTIFACT_CHECK_TOOL_NAME]: e.ui.renderCheckToolUseMessage } };
function ZOt(o, t, l) {
  if (o.renderToolUseMessage) return o.renderToolUseMessage(t, l);
  return eIt(o.name, t, l);
}
function eIt(o, t, l) {
  if (Object.hasOwn(T, o)) return T[o]?.(t, l);
  return null;
}
