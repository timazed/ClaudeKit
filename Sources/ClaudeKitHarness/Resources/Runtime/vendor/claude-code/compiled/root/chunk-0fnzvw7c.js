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
var chunk_0fnzvw7c_exports = {};
__export(chunk_0fnzvw7c_exports, {
  getMcpErrorCode: () => import_chunk_akez6ycw.cJl,
  isMcpMethodNotFoundError: () => import_chunk_akez6ycw.soi,
  isMcpNotADirectoryError: () => import_chunk_akez6ycw.pJl,
  isMcpResourceNotFoundError: () => import_chunk_akez6ycw.fJl,
  isMcpUnknownMethodError: () => import_chunk_akez6ycw.uJl,
  isUrlElicitationRequiredMcpError: () => import_chunk_akez6ycw.mJl
});
module.exports = __toCommonJS(chunk_0fnzvw7c_exports);
var import_chunk_akez6ycw = require("/$bunfs/root/chunk-akez6ycw.js");
var import_chunk_racn22qq = require("/$bunfs/root/chunk-racn22qq.js");
var import_chunk_6d79247d = require("/$bunfs/root/chunk-6d79247d.js");
