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
var chunk_ydqx1fa1_exports = {};
__export(chunk_ydqx1fa1_exports, {
  BXr: () => BXr,
  cai: () => cai
});
module.exports = __toCommonJS(chunk_ydqx1fa1_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_os = require("os");
var import_path = require("path");
function cai() {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows" && import_chunk_c203g5kd.s.APPDATA) return (0, import_path.join)(import_chunk_c203g5kd.s.APPDATA, "gcloud");
  return (0, import_path.join)((0, import_os.homedir)(), ".config", "gcloud");
}
function BXr() {
  return import_chunk_c203g5kd.s.CLOUDSDK_CONFIG || cai();
}
