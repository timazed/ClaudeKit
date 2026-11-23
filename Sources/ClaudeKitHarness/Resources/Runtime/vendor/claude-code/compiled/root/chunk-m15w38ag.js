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
var chunk_m15w38ag_exports = {};
__export(chunk_m15w38ag_exports, {
  Hjl: () => Hjl,
  ne: () => ne
});
module.exports = __toCommonJS(chunk_m15w38ag_exports);
var e;
function ne() {
  return e === true;
}
function Hjl(t) {
  let n = t === true;
  if (e === void 0) return e = n, "pinned";
  return e === n ? "unchanged" : "conflict";
}
