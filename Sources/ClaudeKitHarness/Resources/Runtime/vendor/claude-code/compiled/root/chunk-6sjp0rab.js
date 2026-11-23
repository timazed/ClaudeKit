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
var chunk_6sjp0rab_exports = {};
__export(chunk_6sjp0rab_exports, {
  C_n: () => C_n,
  XDs: () => XDs,
  uDo: () => uDo
});
module.exports = __toCommonJS(chunk_6sjp0rab_exports);
var XDs = { ".ts": "ts", ".tsx": "tsx", ".jsx": "jsx", ".js": "js", ".mjs": "js", ".cjs": "js", ".mts": "ts", ".cts": "ts" };
var C_n = Object.keys(XDs);
var uDo = `${C_n.slice(0, -1).join(", ")} or ` + String(C_n.at(-1));
