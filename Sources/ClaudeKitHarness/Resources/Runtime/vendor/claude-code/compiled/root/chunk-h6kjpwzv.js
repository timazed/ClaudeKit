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
var chunk_h6kjpwzv_exports = {};
__export(chunk_h6kjpwzv_exports, {
  EGe: () => EGe,
  XTo: () => XTo,
  YTo: () => YTo,
  qTo: () => qTo
});
module.exports = __toCommonJS(chunk_h6kjpwzv_exports);
function EGe(n, e, i) {
  if (typeof i !== "function") return;
  Object.defineProperty(n, e, { get: i, enumerable: true, configurable: true });
}
function qTo(n, e, i) {
  if (typeof i !== "function") return;
  Object.defineProperty(n, e, { get: i, enumerable: true, configurable: true });
}
function YTo(n, e) {
  if (e === void 0 || n.isHidden) return;
  Object.defineProperty(n, "isHidden", { get: e, enumerable: true, configurable: true });
}
function XTo(n, e) {
  if (typeof e !== "function") return;
  Object.defineProperty(n, "policyGate", { get: e, enumerable: true, configurable: true });
}
