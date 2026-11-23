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
var chunk_s63fwq28_exports = {};
__export(chunk_s63fwq28_exports, {
  fireRawRead: () => import_chunk_7n1tpv84.tMo,
  getMdmRawReadPromise: () => import_chunk_7n1tpv84.ZJi,
  hiveQueryMayPassNextTime: () => import_chunk_7n1tpv84.JJi,
  mdmQueryWorthRepeating: () => import_chunk_7n1tpv84.XJi,
  startMdmRawRead: () => import_chunk_7n1tpv84.QJi
});
module.exports = __toCommonJS(chunk_s63fwq28_exports);
var import_chunk_7n1tpv84 = require("/$bunfs/root/chunk-7n1tpv84.js");
var import_chunk_dqanqm2x = require("/$bunfs/root/chunk-dqanqm2x.js");
