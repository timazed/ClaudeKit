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
var chunk_xpahn8rx_exports = {};
__export(chunk_xpahn8rx_exports, {
  P5t: () => P5t
});
module.exports = __toCommonJS(chunk_xpahn8rx_exports);
var import_chunk_fpcs74d2 = require("/$bunfs/root/chunk-fpcs74d2.js");
function P5t(m, e) {
  if ((0, import_chunk_fpcs74d2.z_)()) return m.filter((r) => r.type === "prompt" && r.loadedFrom === "mcp" && r.mcpInfo?.serverName === e);
  return [];
}
