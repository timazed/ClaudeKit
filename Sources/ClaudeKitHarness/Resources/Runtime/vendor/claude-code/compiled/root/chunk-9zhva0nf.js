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
var chunk_9zhva0nf_exports = {};
__export(chunk_9zhva0nf_exports, {
  osr: () => osr
});
module.exports = __toCommonJS(chunk_9zhva0nf_exports);
var import_chunk_dfyba0ch = require("/$bunfs/root/chunk-dfyba0ch.js");
var import_chunk_qyhf6bts = require("/$bunfs/root/chunk-qyhf6bts.js");
var import_chunk_w1zyy3zs = require("/$bunfs/root/chunk-w1zyy3zs.js");
var import_chunk_wpyz5pav = require("/$bunfs/root/chunk-wpyz5pav.js");
var import_chunk_86sakbrd = require("/$bunfs/root/chunk-86sakbrd.js");
var import_chunk_wbm3qtjx = require("/$bunfs/root/chunk-wbm3qtjx.js");
var import_chunk_ts09sys6 = require("/$bunfs/root/chunk-ts09sys6.js");
function osr(e) {
  if ((0, import_chunk_wpyz5pav.WWe)(e.client, e.name) !== void 0) return "file_reference";
  if ((0, import_chunk_wbm3qtjx.bJt)(e.meta) !== void 0 && import_chunk_w1zyy3zs.D9e.some((o) => (0, import_chunk_ts09sys6.kme)(e.client, o))) return "listed_mark";
  if ((0, import_chunk_qyhf6bts.eh)(e.client.config) === void 0 && (0, import_chunk_dfyba0ch.kTe)(e.client) === void 0) return;
  let { marked: r, unfilled: n, everyCall: i } = (0, import_chunk_86sakbrd.l4e)(e.schema);
  return r.length > 0 || n.length > 0 || i || (0, import_chunk_86sakbrd.snt)(e.schema).length > 0 ? "schema_mark" : void 0;
}
