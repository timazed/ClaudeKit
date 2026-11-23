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
var chunk_n5r4gqb4_exports = {};
__export(chunk_n5r4gqb4_exports, {
  Dxa: () => Dxa,
  LVr: () => LVr
});
module.exports = __toCommonJS(chunk_n5r4gqb4_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_z2xw6net = require("/$bunfs/root/chunk-z2xw6net.js");
var import_chunk_jgsh7w3m = require("/$bunfs/root/chunk-jgsh7w3m.js");
var import_chunk_4f4ysf31 = require("/$bunfs/root/chunk-4f4ysf31.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var Dxa = { async kill(n, a, m, l, r) {
  let { memberRemoval: i, osTeardown: o } = LVr(n, a, m, r);
  await Promise.all([i, o]);
} }, p = 1e4;
function LVr(n, a, m, l) {
  let r = (0, import_chunk_bzyb60p0.Eye)(a, n, "killed", (e) => (e.abortController?.abort(), e.onIdleCallbacks?.forEach((s) => s()), { notified: true, onIdleCallbacks: [], pendingUserMessages: [], abortController: void 0, currentWorkAbortController: void 0, paneTeardown: void 0, evictAfter: void 0 })), { teamName: i, agentId: o } = r?.identity ?? {}, f = r?.paneTeardown, k = f ? (0, import_chunk_5appeerh.qt)(f(), p, `pane teardown did not settle within ${p}ms`).then((e) => {
    if (!e) (0, import_chunk_w578pjby.t)(`[killInProcessTeammate] pane teardown for ${n} reported failure \u2014 the backend could not find/kill the pane; its separate \`claude --agent-id\` process may still be running`, { level: "warn" });
    return e;
  }, (e) => ((0, import_chunk_w578pjby.t)(`[killInProcessTeammate] pane teardown for ${n} did not complete cleanly: ${(0, import_chunk_jv7av99m.d)(e)}. Not blocking the stop result on it; the backend kill continues in the background and the separate \`claude --agent-id\` process may still be running`, { level: "warn" }), false)) : Promise.resolve(void 0);
  if (o) m((e) => {
    if (!e.teamContext?.teammates?.[o]) return e;
    let { [o]: s, ...T } = e.teamContext.teammates;
    return { ...e, teamContext: { ...e.teamContext, teammates: T } };
  });
  let c = Promise.resolve();
  if (i && o) c = (0, import_chunk_jgsh7w3m.Yhr)(i, o, { onlyIfJoinedBefore: Date.now() }, l);
  if (r) (0, import_chunk_4f4ysf31.Lg)(n), setTimeout((e, s) => e.evictTerminal(s), import_chunk_4yjj7pjs.RHn, a, n);
  if (o) (0, import_chunk_z2xw6net.Ekt)(o);
  return (0, import_chunk_cqa9hrgx.u)("swarm_in_process_kill"), { killed: r !== void 0, memberRemoval: c, osTeardown: k };
}
