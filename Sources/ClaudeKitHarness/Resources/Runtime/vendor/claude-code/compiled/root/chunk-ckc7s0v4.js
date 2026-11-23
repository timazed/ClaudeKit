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
var chunk_ckc7s0v4_exports = {};
__export(chunk_ckc7s0v4_exports, {
  B$e: () => B$e,
  C7t: () => C7t,
  m4r: () => m4r
});
module.exports = __toCommonJS(chunk_ckc7s0v4_exports);
var import_chunk_0ha8wex8 = require("/$bunfs/root/chunk-0ha8wex8.js");
var import_crypto = require("crypto");
var C7t = "This tool call was cancelled.";
function B$e(r, t) {
  let e = (0, import_crypto.createHash)("sha256").update(`${t}:${r}`).digest("hex");
  return `${e.slice(0, 8)}-${e.slice(8, 12)}-4${e.slice(13, 16)}-8${e.slice(17, 20)}-${e.slice(20, 32)}`;
}
function m4r(r) {
  return r === import_chunk_0ha8wex8.hp ? "User rejected tool use" : `Error: ${r.replace(/^<tool_use_error>|<\/tool_use_error>$/g, "")}`;
}
