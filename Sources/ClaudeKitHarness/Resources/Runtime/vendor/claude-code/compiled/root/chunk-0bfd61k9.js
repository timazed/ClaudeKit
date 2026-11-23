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
var chunk_0bfd61k9_exports = {};
__export(chunk_0bfd61k9_exports, {
  xIo: () => xIo
});
module.exports = __toCommonJS(chunk_0bfd61k9_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_promises = require("fs/promises");
async function xIo(e) {
  if (!(e instanceof Error) || !("preservedTmp" in e) || typeof e.preservedTmp !== "string") return;
  if ("targetOutcome" in e && e.targetOutcome === "untouched") try {
    await (0, import_promises.unlink)(e.preservedTmp);
    return;
  } catch {
  }
  (0, import_chunk_w578pjby.t)(`The login was not saved: a temp file that holds the new one is left at ${e.preservedTmp}`, { level: "error" });
}
