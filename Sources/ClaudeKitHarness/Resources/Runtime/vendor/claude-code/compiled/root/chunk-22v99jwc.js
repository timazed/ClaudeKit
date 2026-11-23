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
var chunk_22v99jwc_exports = {};
__export(chunk_22v99jwc_exports, {
  ZDt: () => ZDt
});
module.exports = __toCommonJS(chunk_22v99jwc_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
function ZDt() {
  if ((0, import_chunk_sjqze7qg._Xa)()) return;
  let e = false, i;
  (0, import_chunk_sjqze7qg.gXa)(() => {
    if (!e) e = true, i = (0, import_chunk_865at33z.b)("tengu_mcp_discovery_cache_enable", null) ?? void 0;
    return i;
  });
}
