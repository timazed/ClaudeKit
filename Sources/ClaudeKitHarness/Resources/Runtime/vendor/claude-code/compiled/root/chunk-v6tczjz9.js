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
var chunk_v6tczjz9_exports = {};
__export(chunk_v6tczjz9_exports, {
  iGe: () => iGe
});
module.exports = __toCommonJS(chunk_v6tczjz9_exports);
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
function iGe() {
  if (!(0, import_chunk_2yx6c1y2.oEe)()) throw Error("the MDM settings have not been read yet");
  if ((0, import_chunk_2yx6c1y2.e$)()) throw Error("an admin-owned settings document could not be read");
  if ((0, import_chunk_6mfepmbb.sQi)() !== void 0) throw Error("the managed-settings path was overridden");
  let e = (0, import_chunk_2yx6c1y2.ece)()[0]?.forceLoginOrgUUID;
  if (e === void 0) return;
  return typeof e === "string" ? [e] : e;
}
