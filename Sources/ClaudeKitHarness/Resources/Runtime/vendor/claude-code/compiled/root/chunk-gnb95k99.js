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
var chunk_gnb95k99_exports = {};
__export(chunk_gnb95k99_exports, {
  Rwe: () => Rwe
});
module.exports = __toCommonJS(chunk_gnb95k99_exports);
function Rwe(o) {
  let { status: e, data: r } = o;
  return e >= 400 && e < 500 && typeof r === "object" && r !== null && "error" in r && typeof r.error === "object" && r.error !== null && "reason" in r.error && r.error.reason === "sessions_v1_retired";
}
