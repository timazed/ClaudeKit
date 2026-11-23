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
var chunk_1jt9kh92_exports = {};
__export(chunk_1jt9kh92_exports, {
  bVs: () => bVs
});
module.exports = __toCommonJS(chunk_1jt9kh92_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_hrmqj4hy = require("/$bunfs/root/chunk-hrmqj4hy.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
async function bVs(r, o) {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_SYNC_PLUGIN_INSTALL || !(0, import_chunk_hrmqj4hy.tX)()) return (0, import_chunk_w578pjby.t)("plugin worktree hooks not registered ahead of the worktree: startup lists no plugins here"), "skipped";
  try {
    if (await (0, import_chunk_bzyb60p0.CNt)(r)) (0, import_chunk_bzyb60p0.yfe)(), (0, import_chunk_bzyb60p0.N_)("registerWorktreeHooksAhead: seed marketplaces registered");
  } catch (e) {
    (0, import_chunk_w578pjby.t)(`seed marketplaces not registered ahead of the worktree: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "warn" });
  }
  try {
    return await (0, import_chunk_bzyb60p0.Qpi)(r, o), "registered";
  } catch (e) {
    return (0, import_chunk_w578pjby.t)(`plugin worktree hooks not registered ahead of the worktree (a plugin's WorktreeCreate or WorktreeRemove hook will not run): ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "warn" }), "failed";
  }
}
