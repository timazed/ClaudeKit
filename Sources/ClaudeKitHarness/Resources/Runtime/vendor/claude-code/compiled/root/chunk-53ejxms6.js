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
var chunk_53ejxms6_exports = {};
__export(chunk_53ejxms6_exports, {
  RHt: () => RHt
});
module.exports = __toCommonJS(chunk_53ejxms6_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_0yc3wy8b = require("/$bunfs/root/chunk-0yc3wy8b.js");
async function RHt() {
  await Promise.all([(0, import_chunk_5appeerh.qt)((0, import_chunk_w578pjby._Qe)(), 2e3, "debug flush timeout (exec)").catch(() => {
  }), (0, import_chunk_5appeerh.qt)((0, import_chunk_42tcgre6.uft)(), 2e3, "diag flush timeout (exec)").catch(() => {
  }), (0, import_chunk_5appeerh.qt)((0, import_chunk_w578pjby.q0o)(), 2e3, "pre-exit flush timeout (exec)").catch(() => {
  }), (0, import_chunk_5appeerh.qt)((0, import_chunk_0yc3wy8b.AM)(), 2e3, "write queue drain timeout (exec)").catch(() => {
  })]);
}
