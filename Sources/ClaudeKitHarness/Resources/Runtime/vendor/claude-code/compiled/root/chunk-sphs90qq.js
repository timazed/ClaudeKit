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
var chunk_sphs90qq_exports = {};
__export(chunk_sphs90qq_exports, {
  JXs: () => JXs,
  SHa: () => SHa,
  btr: () => btr,
  gqo: () => gqo
});
module.exports = __toCommonJS(chunk_sphs90qq_exports);
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_jar84hn9 = require("/$bunfs/root/chunk-jar84hn9.js");
var import_chunk_9xt9z453 = require("/$bunfs/root/chunk-9xt9z453.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_bne5t4g3 = require("/$bunfs/root/chunk-bne5t4g3.js");
var c = [import_chunk_060xwhvh._t, import_chunk_bne5t4g3.Ln, import_chunk_9xt9z453.Xo, import_chunk_jar84hn9.xc, import_chunk_xfj2cwfv.bl, import_chunk_xfj2cwfv.af, import_chunk_xfj2cwfv.sT, import_chunk_xfj2cwfv.IX];
function T(n) {
  return async (o, r, e, t, i, m) => {
    let s = o.mcpInfo === void 0, a = ((0, import_chunk_4vsz8a99.gt)(o, import_chunk_hn3cwwzt.ke) || (0, import_chunk_4vsz8a99.gt)(o, import_chunk_rb36kwbn.yt)) && (0, import_chunk_xcgcdx61.uO)(r.run_in_background) === true;
    if (s && (a || c.some((u) => (0, import_chunk_4vsz8a99.gt)(o, u)))) return { behavior: "deny", message: "As a background comment agent you cannot start subagents, monitors, background commands or scheduled work, or message other agents. This comment thread is your only job: do what it needs in this run, reply on the thread, report and stop. Anything else belongs to the main session.", decisionReason: { type: "other", reason: "artifact comment agent scope" } };
    return n(o, r, e, t, i, m);
  };
}
var SHa = { outside_text: { runLimitKind: "outside_text", narrowCanUseTool: T, runScope: import_chunk_bz1f2qnq.FBi }, no_turn_grants: { runLimitKind: "no_turn_grants", runScope: import_chunk_bz1f2qnq.NBi } };
function gqo(n) {
  return Object.hasOwn(SHa, n);
}
function JXs(n, o) {
  if (o === void 0 || !gqo(o)) return;
  let r = SHa[o], { runScopes: e, canUseToolNarrowings: t, runLimitKinds: i } = (0, import_chunk_trwykz8a.mn)();
  if (i.set(n, o), !e.has(n)) e.set(n, r.runScope);
  if (r.narrowCanUseTool !== void 0 && !t.has(n)) t.set(n, r.narrowCanUseTool);
}
function btr(n, o) {
  if (n === void 0 || !(0, import_chunk_bz1f2qnq.ews)()) return false;
  let { runScopes: r, canUseToolNarrowings: e, runLimitKinds: t } = (0, import_chunk_trwykz8a.mn)(), i = t.get(n);
  if (i !== void 0) t.set(o, i);
  let m = r.get(n);
  if (m) r.set(o, m);
  let s = e.get(n);
  if (s) e.set(o, s);
  return s !== void 0;
}
