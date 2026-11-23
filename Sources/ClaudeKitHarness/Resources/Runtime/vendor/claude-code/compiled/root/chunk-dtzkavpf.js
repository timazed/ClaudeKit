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
var chunk_dtzkavpf_exports = {};
__export(chunk_dtzkavpf_exports, {
  zZn: () => zZn
});
module.exports = __toCommonJS(chunk_dtzkavpf_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_5zps0wmn = require("/$bunfs/root/chunk-5zps0wmn.js");
var zZn = () => (0, import_chunk_5zps0wmn.Qi)("vcs.list", {}, (0, import_chunk_865at33z.ce)().loadedModules.filter((o) => !(0, import_chunk_5zps0wmn.Lh)(o) && o.standingFor("vcs.list").some(({ pattern: s }) => s.startsWith("vcs."))));
