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
var chunk_c6crdb6n_exports = {};
__export(chunk_c6crdb6n_exports, {
  AOa: () => AOa,
  COa: () => COa,
  xVo: () => xVo,
  z8s: () => z8s
});
module.exports = __toCommonJS(chunk_c6crdb6n_exports);
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_fp3vnecp = require("/$bunfs/root/chunk-fp3vnecp.js");
var import_chunk_nbyg4q5d = require("/$bunfs/root/chunk-nbyg4q5d.js");
var import_path = require("path");
var import_fs = require("fs");
var import_util = require("util");
var h = (0, import_util.promisify)(import_fs.realpath.native);
function c(e) {
  return /^[A-Za-z0-9_-]{1,128}$/.test(e) ? e : (0, import_chunk_q3a5dy2r.qN)(e) || "empty-id";
}
async function d(e, t, { isRootResolved: n = false } = {}) {
  return n ? (0, import_chunk_z6pfqf6e.pn)(e) : (0, import_chunk_q3a5dy2r.vw)(e, (0, import_chunk_nbyg4q5d.kR)(t));
}
async function COa(e, t, n, i) {
  return (0, import_path.join)((0, import_chunk_q3a5dy2r.jC)(await d(e, n, i)), xVo(t));
}
async function AOa(e, t, n, i) {
  let o = await d(e, n, i), p = (0, import_path.join)((0, import_chunk_q3a5dy2r.jC)(o), xVo(t)), r = (0, import_chunk_q3a5dy2r.sO)(o), s = n === void 0 ? void 0 : z8s(r, t);
  return { path: p, projectKey: r, v5: n === void 0 || s === void 0 ? void 0 : { backend: n, key: s } };
}
function z8s(e, t) {
  let n = import_chunk_hkvzj051.at.dirSyncRecord(e, c(t));
  return (0, import_chunk_fp3vnecp.db)(n) === void 0 ? n : void 0;
}
function xVo(e) {
  return `${c(e)}${import_chunk_fp3vnecp.pbs}`;
}
