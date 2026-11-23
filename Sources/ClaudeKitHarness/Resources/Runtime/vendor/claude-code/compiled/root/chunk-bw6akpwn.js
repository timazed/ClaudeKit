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
var chunk_bw6akpwn_exports = {};
__export(chunk_bw6akpwn_exports, {
  kIt: () => kIt
});
module.exports = __toCommonJS(chunk_bw6akpwn_exports);
function kIt({ isFramed: e, isFocused: o, isInvalid: r = false }) {
  return { flexShrink: 0, borderStyle: e ? "round" : void 0, borderColor: r ? "error" : o ? "suggestion" : void 0, borderDimColor: !o && !r, paddingX: e ? 1 : 0 };
}
