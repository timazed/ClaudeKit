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
var chunk_b1ejc6w6_exports = {};
__export(chunk_b1ejc6w6_exports, {
  dMa: () => dMa,
  lMa: () => lMa
});
module.exports = __toCommonJS(chunk_b1ejc6w6_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_crypto = require("crypto");
var lMa = (e, t) => ({ type: "system", subtype: "informational", content: `Started in the background: ${t}`, isMeta: false, timestamp: (/* @__PURE__ */ new Date()).toISOString(), uuid: (0, import_crypto.randomUUID)(), level: "info", launchedAgentId: e });
function dMa(e) {
  let n = e.type === "system" && e.subtype === "informational" ? e.launchedAgentId : void 0;
  return n !== void 0 && (0, import_chunk_mzmcvr6c.tm)(n) !== null ? n : void 0;
}
