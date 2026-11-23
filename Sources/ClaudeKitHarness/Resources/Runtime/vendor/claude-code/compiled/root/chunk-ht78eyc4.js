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
var chunk_ht78eyc4_exports = {};
__export(chunk_ht78eyc4_exports, {
  Fg: () => Fg
});
module.exports = __toCommonJS(chunk_ht78eyc4_exports);
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
function Fg() {
  let t = (0, import_chunk_0rkwgmhx.se)();
  if (t.toolsetLatch === null) t.toolsetLatch = import_chunk_c203g5kd.s.CLAUDE_CODE_ARTIFACT_TOOLSET ?? (0, import_chunk_865at33z.b)("tengu_cobalt_plinth_damson", false) === true, (0, import_chunk_y53wbr8a.a)("tengu_artifact_toolset", { on: t.toolsetLatch });
  return t.toolsetLatch;
}
