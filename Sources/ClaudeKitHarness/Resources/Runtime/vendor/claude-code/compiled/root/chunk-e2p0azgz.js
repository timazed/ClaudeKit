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
var chunk_e2p0azgz_exports = {};
__export(chunk_e2p0azgz_exports, {
  $$a: () => $$a,
  AYr: () => AYr
});
module.exports = __toCommonJS(chunk_e2p0azgz_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
class AYr extends import_chunk_jv7av99m.A {
}
function $$a(t, e) {
  if (!t) throw new AYr("redirectUriOnly is set and the request names no redirectUri.", "MCP OAuth refused: redirectUriOnly with no redirectUri");
  if (e.oauth?.clientId || e.oauth?.xaa) throw new AYr("This server's configuration sets oauth.clientId or oauth.xaa, so sign-in may need a callback on this computer, which redirectUriOnly does not allow.", "MCP OAuth refused: redirectUriOnly with a configured client");
}
