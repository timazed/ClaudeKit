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
var chunk_65n8xf8m_exports = {};
__export(chunk_65n8xf8m_exports, {
  child_process: () => import_chunk_bx427yq2.KGi,
  crypto: () => import_chunk_bx427yq2.wun,
  fs: () => import_chunk_bx427yq2.SGt,
  path: () => import_chunk_bx427yq2.V_,
  stream: () => import_chunk_bx427yq2.MEs,
  util: () => import_chunk_bx427yq2.qGi
});
module.exports = __toCommonJS(chunk_65n8xf8m_exports);
var import_chunk_bx427yq2 = require("/$bunfs/root/chunk-bx427yq2.js");
