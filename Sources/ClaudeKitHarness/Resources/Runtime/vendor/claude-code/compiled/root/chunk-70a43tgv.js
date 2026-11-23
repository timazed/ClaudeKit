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
var chunk_70a43tgv_exports = {};
__export(chunk_70a43tgv_exports, {
  localSessionMoveCandidate: () => k,
  savedPlanMode: () => g
});
module.exports = __toCommonJS(chunk_70a43tgv_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_hsqa3g9e = require("/$bunfs/root/chunk-hsqa3g9e.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_path = require("path");
var u = ["environment", "pool", "project", "onBranch", "noMonorepo", "teleport", "attachServe", "persistentVolume", "persistentVolumeFrom", "addRepo", "correlationId", "metadata", "forwardHomeSettings", "fromPr", "forkSession", "sessionId", "worktree"];
function a(e, i) {
  let n = e.cloud ?? e.remote;
  if (n === void 0 || e.continue || i !== void 0 || u.some((d) => e[d] !== void 0)) return;
  let o = typeof n === "string" && n.trim() !== "" ? n.trim() : void 0, t = typeof e.resume === "string" ? e.resume.trim() : void 0, r = o === void 0 ? t : t === void 0 && e.resume === void 0 ? o : t?.toLowerCase() === o.toLowerCase() ? o : void 0;
  return (0, import_chunk_mzmcvr6c.ht)(r?.toLowerCase()) ?? void 0;
}
function k(e) {
  return e.nonInteractive || e.options.print || e.hasOtherBackend || !e.stdinIsTTY ? void 0 : a(e.options, e.prompt);
}
async function g(e, i) {
  let n = await (0, import_chunk_q3a5dy2r.Nhe)((0, import_path.join)((0, import_chunk_hsqa3g9e.Dy)((0, import_chunk_f9x2f6cx.Te)()), `${e}.jsonl`)), o = n === null ? void 0 : (0, import_chunk_q3a5dy2r.NX)(n.tail, "permission-mode", "permissionMode");
  return o === "plan" ? "plan" : void 0;
}
