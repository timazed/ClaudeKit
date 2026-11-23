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
var chunk_ccm69jjy_exports = {};
__export(chunk_ccm69jjy_exports, {
  Je: () => Je,
  fm: () => fm
});
module.exports = __toCommonJS(chunk_ccm69jjy_exports);
var import_crypto = require("crypto");
var fm = /^[0-9a-f]{64}$/;
function Je(e) {
  if (typeof e !== "string" && !ArrayBuffer.isView(e)) throw Object.assign(TypeError("sha256Hex: the data is neither text nor bytes"), { code: "ERR_INVALID_ARG_TYPE" });
  return (0, import_crypto.createHash)("sha256").update(e).digest("hex");
}
