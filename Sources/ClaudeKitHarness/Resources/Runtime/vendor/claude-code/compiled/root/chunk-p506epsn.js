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
var chunk_p506epsn_exports = {};
__export(chunk_p506epsn_exports, {
  eqr: () => eqr
});
module.exports = __toCommonJS(chunk_p506epsn_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_4hz7p0re = require("/$bunfs/root/chunk-4hz7p0re.js");
var import_chunk_49zxha55 = require("/$bunfs/root/chunk-49zxha55.js");
function p() {
  return import_chunk_c203g5kd.s.CLAUDE_JOB_DIR;
}
async function eqr(i, e, n) {
  (0, import_chunk_y53wbr8a.a)("tengu_bg_agent_action", { action: (0, import_chunk_78g0060s.S)("stop"), source: (0, import_chunk_78g0060s.f)(i), jobSessionId: (0, import_chunk_49zxha55.Ce)((0, import_chunk_f9x2f6cx.W)()) }), (0, import_chunk_f9x2f6cx.N3n)(void 0);
  let o = p();
  if ((0, import_chunk_865at33z.Qt)() && o) {
    let r = (/* @__PURE__ */ new Date()).toISOString(), t = await (0, import_chunk_9e5mdyfk.Is)(o, e);
    if (t && !(0, import_chunk_9e5mdyfk.Wd)(t)) await (0, import_chunk_9e5mdyfk.Hf)(o, { ...t, state: "stopped", detail: "stopped from session", tempo: "idle", needs: void 0, block: void 0, inFlight: void 0, updatedAt: r, firstTerminalAt: t.firstTerminalAt ?? r }, e).catch(import_chunk_9e5mdyfk.Lu);
    else await (0, import_chunk_4hz7p0re.aer)(o, e);
    if ((0, import_chunk_865at33z.yke)()) process.stdout.write((0, import_chunk_9e5mdyfk.dDe)(n ?? "Session stopped."));
  }
  return (0, import_chunk_cqa9hrgx.u)("job_stop_self"), (0, import_chunk_bzyb60p0.Yr)(0, "prompt_input_exit", { suppressResumeHint: true });
}
