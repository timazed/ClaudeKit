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
var chunk_ekqrvjr9_exports = {};
__export(chunk_ekqrvjr9_exports, {
  Oua: () => Oua,
  s1r: () => s1r
});
module.exports = __toCommonJS(chunk_ekqrvjr9_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5k07m56e = require("/$bunfs/root/chunk-5k07m56e.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var s1r = new import_chunk_2904xtvq.j(() => ({ route: void 0 }));
function Oua({ api_base_url: e, session_id: o, session_token: n }) {
  return { address: `${e}/v2/ccr-sessions/${encodeURIComponent(o)}/mcp`, token: () => (0, import_chunk_f9x2f6cx.kr)(import_chunk_5k07m56e._Y).renewedToken ?? n };
}
