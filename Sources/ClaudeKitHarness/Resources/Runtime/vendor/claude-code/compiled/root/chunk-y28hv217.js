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
var chunk_y28hv217_exports = {};
__export(chunk_y28hv217_exports, {
  CUo: () => CUo,
  r8l: () => r8l
});
module.exports = __toCommonJS(chunk_y28hv217_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_prn6030k = require("/$bunfs/root/chunk-prn6030k.js");
var CUo = "https://clau.de/chrome/permissions", m = { install: import_chunk_sjqze7qg.NW, reconnect: import_chunk_sjqze7qg.wot, permissions: CUo };
async function r8l({ mcpClients: i, atStartup: a }) {
  let l = await (0, import_chunk_sjqze7qg.mae)().catch((e) => ((0, import_chunk_w578pjby.t)(`[Claude in Chrome] Extension detection failed: ${e instanceof Error ? e.message : String(e)}`, { level: "error" }), false)), o = (0, import_chunk_865at33z.ge)(), r = i.some((e) => e.name === import_chunk_prn6030k.Xi && e.type === "connected"), n = o.chromeExtension?.pairedDeviceName;
  return { allowed: (0, import_chunk_sjqze7qg.sN)(), subscriber: (0, import_chunk_865at33z.Rt)(), wsl: import_chunk_c203g5kd.s.isWslEnvironment(), installed: l, connected: r, ...r && n && { paired_browser: n }, enabled_by_default: o.claudeInChromeDefaultEnabled ?? false, at_startup: await a(o.claudeInChromeDefaultEnabled === true), urls: { ...m } };
}
