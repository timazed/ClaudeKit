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
var chunk_02cqsykt_exports = {};
__export(chunk_02cqsykt_exports, {
  Wvi: () => Wvi,
  vWe: () => vWe
});
module.exports = __toCommonJS(chunk_02cqsykt_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
function n(t) {
  let e = t?.pewter_owl_model;
  if (typeof e === "string" && e !== "") return e;
  return (0, import_chunk_865at33z.b)("tengu_pewter_owl_model", "");
}
function o(t) {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_PEWTER_OWL !== void 0) return import_chunk_c203g5kd.s.CLAUDE_CODE_PEWTER_OWL;
  if ((0, import_chunk_f9x2f6cx.Se)()) return false;
  let e = (0, import_chunk_865at33z.X_)(), r = n(e);
  if (r !== "" && !(0, import_chunk_865at33z.St)((0, import_chunk_865at33z.dt)()).includes(r)) return false;
  return (0, import_chunk_865at33z.b)(`tengu_${t}`, false) || e?.[t] === true;
}
function vWe() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_PEWTER_OWL_TOOL !== void 0) return import_chunk_c203g5kd.s.CLAUDE_CODE_PEWTER_OWL_TOOL;
  return o("pewter_owl_tool");
}
function Wvi() {
  return o("pewter_owl_brief");
}
