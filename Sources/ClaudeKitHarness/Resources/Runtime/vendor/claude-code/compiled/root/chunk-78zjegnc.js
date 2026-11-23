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
var chunk_78zjegnc_exports = {};
__export(chunk_78zjegnc_exports, {
  orgConfigGateFlagOnHand: () => u
});
module.exports = __toCommonJS(chunk_78zjegnc_exports);
var import_chunk_rvyhd8z3 = require("/$bunfs/root/chunk-rvyhd8z3.js");
var import_chunk_9m1fff32 = require("/$bunfs/root/chunk-9m1fff32.js");
function u(o, r) {
  let e = (0, import_chunk_9m1fff32.vz)(o);
  if (typeof e !== "object" || e === null || Array.isArray(e) || Object.keys(e).length === 0) return true;
  let n = o.growthBookOverrides;
  return import_chunk_rvyhd8z3.rze in e || typeof n === "object" && n !== null && import_chunk_rvyhd8z3.rze in n || r !== void 0 && r.includes(import_chunk_rvyhd8z3.rze);
}
