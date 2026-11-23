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
var chunk_z3bdjzsf_exports = {};
__export(chunk_z3bdjzsf_exports, {
  ODt: () => ODt,
  iNa: () => iNa,
  sNa: () => sNa
});
module.exports = __toCommonJS(chunk_z3bdjzsf_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_jg3mepas = require("/$bunfs/root/chunk-jg3mepas.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
function ODt() {
  if ((0, import_chunk_jg3mepas.Yle)()) return false;
  if (!import_chunk_c203g5kd.s.CLAUDE_CODE_EXPERIMENTAL_OBSERVER_AGENTS) return false;
  if (!(0, import_chunk_865at33z.b)("tengu_observer_agents_enabled", true)) return false;
  return true;
}
function sNa() {
  if (!ODt()) return false;
  if (!(0, import_chunk_865at33z.b)("tengu_observer_subagent_fanout", true)) return false;
  return true;
}
function iNa() {
  return (0, import_chunk_865at33z.b)("tengu_keen_umbrella", false);
}
