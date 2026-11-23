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
var chunk_anfdrvmv_exports = {};
__export(chunk_anfdrvmv_exports, {
  h8o: () => h8o,
  ont: () => ont,
  ssi: () => ssi
});
module.exports = __toCommonJS(chunk_anfdrvmv_exports);
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_m0xr8k74 = require("/$bunfs/root/chunk-m0xr8k74.js");
var i = 128;
function n(o) {
  return (0, import_chunk_xcgcdx61.Ign)(o) && o.length <= i;
}
var ont = "allow_connector_file_uploads";
function ssi(o) {
  if (!n(o)) return;
  let { MCP_PROXY_URL: t, MCP_PROXY_PATH: r } = (0, import_chunk_ephf358x.cn)(), e = r.replace("{server_id}", o);
  return { host: "mcp-proxy", pathPrefix: `${e.replace(/\/$/, "")}${import_chunk_m0xr8k74.e1n}`, mcpAddress: `${t}${e}`, policy: ont };
}
var h8o = 523239424;
