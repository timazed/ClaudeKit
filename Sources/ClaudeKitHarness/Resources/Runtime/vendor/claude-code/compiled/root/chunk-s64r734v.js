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
var chunk_s64r734v_exports = {};
__export(chunk_s64r734v_exports, {
  aW: () => aW
});
module.exports = __toCommonJS(chunk_s64r734v_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
function aW() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_KB_COHESION_FIXES) return true;
  return false;
}
