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
var chunk_924etrq7_exports = {};
__export(chunk_924etrq7_exports, {
  $ue: () => $ue
});
module.exports = __toCommonJS(chunk_924etrq7_exports);
var import_chunk_fpcs74d2 = require("/$bunfs/root/chunk-fpcs74d2.js");
function $ue(r, s) {
  let o = (0, import_chunk_fpcs74d2.jRe)(r), n = s.map((e) => e.mcpInfo === void 0 || e.mcpInfo.scope === o.scope && e.mcpInfo.pluginSource === o.pluginSource && e.mcpInfo.agentSource === o.agentSource && e.mcpInfo.isBehindGateway === o.isBehindGateway ? e : { ...e, mcpInfo: o });
  return n.every((e, p) => e === s[p]) ? s : n;
}
