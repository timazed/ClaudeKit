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
var chunk_gtx7bw71_exports = {};
__export(chunk_gtx7bw71_exports, {
  BPa: () => BPa
});
module.exports = __toCommonJS(chunk_gtx7bw71_exports);
function BPa(n) {
  let e = new TextEncoder().encode(n);
  if (e.every((r) => r >= 32 && r < 127 && r !== 34 && r !== 92)) return n;
  return `"${Array.from(e, (r) => {
    switch (r) {
      case 34:
        return '\\"';
      case 92:
        return "\\\\";
      case 9:
        return "\\t";
      case 10:
        return "\\n";
      case 13:
        return "\\r";
      default:
        return r >= 32 && r <= 126 ? String.fromCharCode(r) : `\\${r.toString(8).padStart(3, "0")}`;
    }
  }).join("")}"`;
}
