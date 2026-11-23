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
var chunk_had7hq7e_exports = {};
__export(chunk_had7hq7e_exports, {
  M2r: () => M2r,
  S6s: () => S6s
});
module.exports = __toCommonJS(chunk_had7hq7e_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var S6s = {};
(0, import_chunk_w1d7ygsk.jr)(S6s, { default: () => S6s, endPluginTest: () => M2r });
async function M2r(e) {
  (0, import_chunk_865at33z.qzn)(), await Promise.all([process.stdout, process.stderr].map((r) => new Promise((o) => r.write("", o)))), await (0, import_chunk_865at33z.bpn)(), process.exit(e);
}
