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
var chunk_hxkxv1jf_exports = {};
__export(chunk_hxkxv1jf_exports, {
  deriveRootSessionIdFromRemoteEnv: () => import_chunk_kr68f0mb.OFr,
  deriveStableSessionIdFromCse: () => import_chunk_kr68f0mb.Nce,
  deriveStableSessionIdFromRemoteEnv: () => import_chunk_kr68f0mb.Zyn,
  isNestedStartInCloudSession: () => import_chunk_kr68f0mb.$Fs,
  parseSessionIdentifier: () => import_chunk_kr68f0mb.UFs
});
module.exports = __toCommonJS(chunk_hxkxv1jf_exports);
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
