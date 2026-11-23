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
var chunk_tbr7tkzm_exports = {};
__export(chunk_tbr7tkzm_exports, {
  Rgt: () => Rgt
});
module.exports = __toCommonJS(chunk_tbr7tkzm_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_tfs0ssqe = require("/$bunfs/root/chunk-tfs0ssqe.js");
var import_chunk_q0fr3q7r = require("/$bunfs/root/chunk-q0fr3q7r.js");
async function Rgt() {
  (0, import_chunk_tfs0ssqe.ZF)(), (0, import_chunk_bzyb60p0.MW)(), (0, import_chunk_bzyb60p0.YTe)(), import_chunk_bzyb60p0.rQ.emit();
  try {
    await import_chunk_q0fr3q7r.kMe.rehome(), (0, import_chunk_cqa9hrgx.u)("skill_directory_reload");
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`directory change: re-targeting the skill watcher failed (continuing with the previous watch): ${r}`, { level: "error" }), (0, import_chunk_cqa9hrgx.l)("skill_directory_reload", "rehome_failed");
  }
}
