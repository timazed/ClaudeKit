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
var chunk_2d2p2t02_exports = {};
__export(chunk_2d2p2t02_exports, {
  a8t: () => a8t
});
module.exports = __toCommonJS(chunk_2d2p2t02_exports);
var a8t = { skillDraws() {
  return;
}, add() {
}, addFunctionHook(e, n, t, s, r, o) {
  return o?.id ?? "function-hook-noop";
}, remove() {
}, clear() {
}, get() {
  return /* @__PURE__ */ new Map();
}, getFunctionHooks() {
  return /* @__PURE__ */ new Map();
}, getEntry() {
  return;
}, has() {
  return false;
} };
