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
var chunk_saksne64_exports = {};
__export(chunk_saksne64_exports, {
  JMt: () => JMt
});
module.exports = __toCommonJS(chunk_saksne64_exports);
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_bne5t4g3 = require("/$bunfs/root/chunk-bne5t4g3.js");
function JMt(s, r) {
  let { tools: n, toolAliases: i } = s, t = n.filter((e) => e.mcpInfo?.serverName === import_chunk_bne5t4g3.Xct && e.mcpInfo.toolName === r && e.mcpInfo.serverType === "sdk"), o = t.length === 1 ? t[0] : void 0;
  if (!o || (0, import_chunk_4vsz8a99.tn)(n, o.name, i) !== o) return;
  return o;
}
