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
var chunk_hk9jjzx6_exports = {};
__export(chunk_hk9jjzx6_exports, {
  U0a: () => U0a,
  gtt: () => gtt
});
module.exports = __toCommonJS(chunk_hk9jjzx6_exports);
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
function U0a(t) {
  if ((0, import_chunk_wtm85h0y.Nf)()) return;
  return t.remoteSessionName ?? t.standaloneAgentContext?.name;
}
function gtt(t, e) {
  let n = t.standaloneAgentContext;
  if (!Object.keys(e).some((o) => n?.[o] !== e[o])) return t;
  return { ...t, standaloneAgentContext: { ...n, name: n?.name ?? "", ...e } };
}
