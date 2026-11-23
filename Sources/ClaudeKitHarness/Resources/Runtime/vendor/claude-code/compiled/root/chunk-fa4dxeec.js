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
var chunk_fa4dxeec_exports = {};
__export(chunk_fa4dxeec_exports, {
  qUi: () => qUi
});
module.exports = __toCommonJS(chunk_fa4dxeec_exports);
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_ge3qft6b = require("/$bunfs/root/chunk-ge3qft6b.js");
function qUi(e, o) {
  if ((0, import_chunk_ge3qft6b.R0)({ model: e, leanPrompt: o })) return 'Fast file pattern matching. Supports glob patterns like "**/*.js" or "src/**/*.ts". Returns matching file paths sorted by modification time.';
  return (0, import_chunk_865at33z.B9)() === "default" ? n : t;
}
var t = `- Fast file pattern matching tool that works with any codebase size
- Supports glob patterns like "**/*.js" or "src/**/*.ts"
- Returns matching file paths sorted by modification time
- Use this tool when you need to find files by name patterns`, n = `${t}
- When you are doing an open ended search that may require multiple rounds of globbing and grepping, use the ${import_chunk_060xwhvh._t} tool instead (if available)`;
