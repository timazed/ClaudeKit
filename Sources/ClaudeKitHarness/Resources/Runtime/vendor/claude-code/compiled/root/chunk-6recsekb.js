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
var chunk_6recsekb_exports = {};
__export(chunk_6recsekb_exports, {
  Gko: () => Gko,
  jko: () => jko,
  zko: () => zko
});
module.exports = __toCommonJS(chunk_6recsekb_exports);
var import_crypto = require("crypto");
function r(e) {
  return e.toString("base64").replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}
function jko() {
  return r((0, import_crypto.randomBytes)(32));
}
function Gko(e) {
  let t = (0, import_crypto.createHash)("sha256");
  return t.update(e), r(t.digest());
}
function zko() {
  return r((0, import_crypto.randomBytes)(32));
}
