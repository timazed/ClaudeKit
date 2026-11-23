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
var chunk_b25qtggm_exports = {};
__export(chunk_b25qtggm_exports, {
  UYn: () => UYn,
  oWr: () => oWr
});
module.exports = __toCommonJS(chunk_b25qtggm_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
function oWr() {
  (0, import_chunk_f9x2f6cx.fla)(structuredClone((0, import_chunk_2yx6c1y2._e)("policySettings")));
}
function UYn() {
  let t = (0, import_chunk_f9x2f6cx.ula)();
  if (t === void 0) return true;
  return !Bun.deepEquals(t, (0, import_chunk_2yx6c1y2._e)("policySettings"));
}
