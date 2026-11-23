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
var chunk_zc3emgcg_exports = {};
__export(chunk_zc3emgcg_exports, {
  Eyo: () => Eyo
});
module.exports = __toCommonJS(chunk_zc3emgcg_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
function r() {
  if ((0, import_chunk_3t7ve0wy.Yg)() || (0, import_chunk_3t7ve0wy.nx)()) return null;
  if ((0, import_chunk_6e68m1dj.hn)()) {
    let t = (0, import_chunk_3t7ve0wy.Li)();
    if (t === void 0 || !t.startsWith("remote") || import_chunk_3t7ve0wy.I4n.has(t)) return null;
    return (0, import_chunk_865at33z.wzt)() ? null : "cloud";
  }
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) return null;
  return (0, import_chunk_3t7ve0wy.Wu)() ? "desktop" : null;
}
function Eyo() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_ARTIFACT_SHARE === true && r() !== null;
}
