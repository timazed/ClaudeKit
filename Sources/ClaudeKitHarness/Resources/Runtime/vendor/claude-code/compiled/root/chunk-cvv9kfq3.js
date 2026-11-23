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
var chunk_cvv9kfq3_exports = {};
__export(chunk_cvv9kfq3_exports, {
  Bul: () => Bul,
  Uul: () => Uul,
  m0: () => m0,
  qf: () => qf
});
module.exports = __toCommonJS(chunk_cvv9kfq3_exports);
var o = Symbol.for("claude-code.hostOnlyNativeTool");
function Uul(e) {
  return Object.defineProperty(e, o, { value: true, enumerable: true }), e;
}
function m0(e) {
  return o in e;
}
function qf(e) {
  return e.name?.startsWith("mcp__") || e.isMcp === true;
}
function Bul(e) {
  return e.mcpInfo?.serverName ?? (e.name?.startsWith("mcp__") ? e.name.split("__")[1] : void 0);
}
