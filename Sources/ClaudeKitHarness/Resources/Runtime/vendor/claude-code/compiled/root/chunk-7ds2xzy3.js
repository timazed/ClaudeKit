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
var chunk_7ds2xzy3_exports = {};
__export(chunk_7ds2xzy3_exports, {
  MP: () => MP
});
module.exports = __toCommonJS(chunk_7ds2xzy3_exports);
var import_chunk_n5qd9b6p = require("/$bunfs/root/chunk-n5qd9b6p.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var n = 3;
var _ = "tengu_hazel_trellis";
function MP() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH;
  if (e !== void 0) return e;
  let t = (0, import_chunk_n5qd9b6p.Ar)();
  if (t.maxSubagentSpawnDepthFromGrowthBook === void 0) {
    let { getFeatureValue_CACHED_MAY_BE_STALE: a } = require("/$bunfs/root/chunk-vgvexp78.js"), { getCachedClientData: A } = require("/$bunfs/root/chunk-zd7jjspn.js"), o = A()?.[_], r = u(o) ? o : a(_, n);
    t.maxSubagentSpawnDepthFromGrowthBook = u(r) ? r : n;
  }
  return t.maxSubagentSpawnDepthFromGrowthBook;
}
function u(e) {
  return typeof e === "number" && Number.isInteger(e) && e >= 1;
}
