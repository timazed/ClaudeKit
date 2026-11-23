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
var chunk_63s07fe6_exports = {};
__export(chunk_63s07fe6_exports, {
  Ere: () => Ere,
  Qje: () => Qje,
  Ryo: () => Ryo,
  n_l: () => n_l,
  xyo: () => xyo
});
module.exports = __toCommonJS(chunk_63s07fe6_exports);
var n_l = ["host", "none"], Ryo = "none";
function Qje(n) {
  return n === "none";
}
function xyo({ permissionPromptTool: n, sdkUrl: e }) {
  return e ? "stdio" : n;
}
function Ere(n) {
  return n !== void 0 && n !== "none";
}
