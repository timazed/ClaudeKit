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
var chunk_b3gt63am_exports = {};
__export(chunk_b3gt63am_exports, {
  Bfo: () => Bfo,
  Lal: () => Lal,
  O9e: () => O9e,
  P9e: () => P9e,
  Ufo: () => Ufo,
  Wfo: () => Wfo
});
module.exports = __toCommonJS(chunk_b3gt63am_exports);
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var Ufo = "anthropic/chromeUploadFiles", t = "anthropic/chromeUploadMaxBytes", Lal = "anthropic/chromeUploadAutoModeOnly", n = "anthropic/chromeUploadCard", s = "sha256-v1", P9e = "fileDigests";
function Bfo(e) {
  return e?.[n] === s;
}
var O9e = new import_chunk_pzzqg6s3.ze(() => ({}));
function Wfo(e, r) {
  let o = e?.[t];
  return typeof o === "number" && Number.isInteger(o) && o > 0 ? Math.min(o, r) : r;
}
