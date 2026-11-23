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
var chunk_r3mm3x33_exports = {};
__export(chunk_r3mm3x33_exports, {
  Br: () => Br,
  PDs: () => PDs,
  S$l: () => S$l,
  _$l: () => _$l,
  b$l: () => b$l,
  g$l: () => g$l,
  kDr: () => kDr,
  pr: () => pr,
  vB: () => vB,
  y$l: () => y$l
});
module.exports = __toCommonJS(chunk_r3mm3x33_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
function Br() {
  return import_chunk_f9x2f6cx.pLo.of((0, import_chunk_f9x2f6cx.N)().host);
}
function vB() {
  return Br().mergedSettings;
}
function pr(t) {
  Br().invalidateAll(t);
}
function kDr() {
  return Br().pluginBase;
}
function g$l(t) {
  Br().setPluginBase(t);
}
function _$l() {
  return Br().pluginAgentSettingProvider;
}
function y$l(t) {
  Br().pluginAgentSettingProvider = t;
}
function PDs() {
  return Br().subagentStatusLinePluginContext;
}
function S$l(t) {
  Br().subagentStatusLinePluginContext = t;
}
function b$l() {
  Br().clearPluginBase();
}
