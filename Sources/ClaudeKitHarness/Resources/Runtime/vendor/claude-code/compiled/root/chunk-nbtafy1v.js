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
var chunk_nbtafy1v_exports = {};
__export(chunk_nbtafy1v_exports, {
  O8n: () => O8n
});
module.exports = __toCommonJS(chunk_nbtafy1v_exports);
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
function O8n(i) {
  if (i.toolName === import_chunk_hn3cwwzt.ke) {
    if (!i.ruleContent) return { prefix: "Any Bash command" };
    if (i.ruleContent.endsWith(":*") || i.ruleContent.endsWith(" *")) return { prefix: "Any Bash command starting with ", emphasis: i.ruleContent.slice(0, -2) };
    return { prefix: "The Bash command ", emphasis: i.ruleContent };
  }
  if ((0, import_chunk_gbskgz33.AV)(i)) return { prefix: `This rule ${(0, import_chunk_gbskgz33.k2t)((0, import_chunk_qebpc5de.yn)(i), i.toolName)}` };
  if (!i.ruleContent) return { prefix: "Any use of the ", emphasis: i.toolName, suffix: " tool" };
  return null;
}
