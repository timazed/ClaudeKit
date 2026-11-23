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
var chunk_tpax7jmw_exports = {};
__export(chunk_tpax7jmw_exports, {
  E7r: () => E7r,
  v7r: () => v7r
});
module.exports = __toCommonJS(chunk_tpax7jmw_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var r = 128;
function E7r(n) {
  let e = "displayName" in n ? n.displayName : void 0;
  if (typeof e !== "string") return;
  if (n.scope === "claudeai") return e;
  if (n.scope !== "dynamic" || (0, import_chunk_xcgcdx61.jl)(n)) return;
  return (0, import_chunk_7cfjrnwy.ee)((0, import_chunk_kx2fp6pc.Ek)(e), r).trimEnd() || void 0;
}
function v7r(n, e) {
  if (n.type !== "claudeai-proxy") return e;
  let i = e.startsWith(import_chunk_3f4m74y6.oJ) ? e.slice(import_chunk_3f4m74y6.oJ.length) : n.displayName;
  return i?.trim() ? i : e;
}
