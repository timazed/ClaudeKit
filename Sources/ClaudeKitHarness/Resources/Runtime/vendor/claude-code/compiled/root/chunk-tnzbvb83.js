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
var chunk_tnzbvb83_exports = {};
__export(chunk_tnzbvb83_exports, {
  rpe: () => rpe
});
module.exports = __toCommonJS(chunk_tnzbvb83_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
function rpe(o) {
  try {
    let r = o(), e = typeof r === "object" && r !== null && "default" in r ? r.default : r;
    if (typeof e !== "string") throw Error("a bundled text did not load as a string");
    return e;
  } catch (r) {
    let e = r instanceof Error ? r.cause : void 0;
    throw (0, import_chunk_w578pjby.t)(`A bundled text could not be read: ${(0, import_chunk_jv7av99m.d)(r)}; asset: ${(0, import_chunk_jv7av99m.xFr)(r)}; cause: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "error" }), r;
  }
}
