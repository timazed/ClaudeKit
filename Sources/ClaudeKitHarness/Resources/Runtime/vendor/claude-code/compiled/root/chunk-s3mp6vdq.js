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
var chunk_s3mp6vdq_exports = {};
__export(chunk_s3mp6vdq_exports, {
  N4r: () => N4r,
  YXs: () => YXs
});
module.exports = __toCommonJS(chunk_s3mp6vdq_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var YXs = 255, t = 255, e = /[\x00-\x20\x7f~^:?*[\\]/, o = /[\p{Cc}\p{Cf}\uFFFD]/u, i = 250;
function N4r(n) {
  return Buffer.byteLength(n, "utf8") <= t && l(n);
}
function l(n) {
  return n.length <= YXs && n !== "@" && n !== "HEAD" && (0, import_chunk_7cfjrnwy.Cf)(n) && s(n) && !o.test(n) && !n.startsWith("-") && n.split("/").every((r) => Buffer.byteLength(r, "utf8") <= i);
}
function s(n) {
  return !e.test(n) && !n.endsWith(".") && !n.includes("..") && !n.includes("@{") && n.split("/").every((r) => r !== "" && !r.startsWith(".") && !r.endsWith(".lock"));
}
