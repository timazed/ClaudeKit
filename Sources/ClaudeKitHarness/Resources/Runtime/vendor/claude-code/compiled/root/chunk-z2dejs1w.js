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
var chunk_z2dejs1w_exports = {};
__export(chunk_z2dejs1w_exports, {
  AYs: () => AYs,
  QOa: () => QOa,
  ZOa: () => ZOa,
  cer: () => cer,
  der: () => der,
  s7t: () => s7t
});
module.exports = __toCommonJS(chunk_z2dejs1w_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_d28sbgqz = require("/$bunfs/root/chunk-d28sbgqz.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
function s7t() {
  let e = process.env.CLAUDE_CODE_ENABLE_AWAY_SUMMARY;
  if ((0, import_chunk_69qhefwa.Oi)(e)) return false;
  if ((0, import_chunk_69qhefwa.Ne)(e)) return true;
  if ((0, import_chunk_f9x2f6cx.Se)()) return false;
  if ((0, import_chunk_2yx6c1y2.vt)()?.awaySummaryEnabled === false) return false;
  return true;
}
function g() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_ENABLE_REMOTE_RECAP;
  if (e !== void 0) return e;
  return (0, import_chunk_865at33z.b)("tengu_harbor_moth", false);
}
function der(e, a) {
  if (!a.onMetadataChanged) return;
  if ((0, import_chunk_865at33z.Qt)() || !(0, import_chunk_d28sbgqz.qVo)() || !g()) return;
  if (e.startedForTurnEnd) return;
  e.startedForTurnEnd = true, S(e, a);
}
function QOa(e) {
  e.startedForTurnEnd = true;
}
function ZOa(e) {
  e.startedForTurnEnd = false;
}
function AYs(e) {
  e.reset();
}
async function S(e, a) {
  e.inFlight?.abort();
  let r = new AbortController();
  e.inFlight = r;
  let n = await cer(r.signal);
  if (r.signal.aborted) return;
  if (n.kind !== "ok") {
    if (n.kind !== "no-turn") (0, import_chunk_cqa9hrgx.m)("ccr_recap_generate", n.kind);
    return;
  }
  if (a.getState() === "running") {
    (0, import_chunk_w578pjby.t)("[awaySummary] ccr recap dropped: new turn already running");
    return;
  }
  if (a.notifyMetadataChanged({ recap: n.text }), n.capped) (0, import_chunk_cqa9hrgx.l)("ccr_recap_generate", "capped");
  else (0, import_chunk_cqa9hrgx.u)("ccr_recap_generate");
}
var k = "The user stepped away and is coming back. Recap in under 40 words, 1-2 plain sentences, no markdown. Lead with the overall goal and current task, then the one next action. Skip root-cause narrative, fix internals, secondary to-dos, and em-dash tangents.", f = 400;
async function cer(e, a) {
  let r = (0, import_chunk_bzyb60p0.Ex)();
  if (!r && a) {
    if (e.aborted) return { kind: "aborted" };
    try {
      r = await a();
    } catch (o) {
      return (0, import_chunk_w578pjby.t)(`[awaySummary] fallback params rebuild failed: ${o}`), { kind: "failed" };
    }
    if (e.aborted) return { kind: "aborted" };
  }
  if (!r) return (0, import_chunk_w578pjby.t)("[awaySummary] no CacheSafeParams saved, skipping"), { kind: "no-turn" };
  let n = new AbortController();
  e.addEventListener("abort", () => n.abort(), { once: true });
  try {
    let { messages: o } = await (0, import_chunk_bzyb60p0.yH)({ promptMessages: [(0, import_chunk_bzyb60p0.Me)({ content: k })], cacheSafeParams: r, overrides: { abortController: n }, canUseTool: async () => ({ behavior: "deny", message: "Away summary cannot use tools", decisionReason: { type: "other", reason: "away_summary" } }), querySource: "away_summary", forkLabel: "away_summary", maxTurns: 1, skipCacheWrite: true, skipTranscript: true });
    if (e.aborted) return { kind: "aborted" };
    let d = o.find((c) => c.type === "assistant" && c.isApiErrorMessage);
    if (d) return { kind: "api-error", text: y([d], true) };
    let i = y(o, false), p = i.length > f;
    if (p) {
      let c = (0, import_chunk_7cfjrnwy.NB)(i, f);
      (0, import_chunk_w578pjby.t)(`[awaySummary] recap capped from ${i.length} to ${c.length} chars`), i = c;
    }
    return i ? { kind: "ok", text: i, capped: p } : { kind: "failed" };
  } catch (o) {
    if (e.aborted) return { kind: "aborted" };
    return (0, import_chunk_w578pjby.t)(`[awaySummary] generation failed: ${o}`), { kind: "failed" };
  }
}
function y(e, a) {
  return (0, import_chunk_p1ewvgeh.b_)(e.flatMap((r) => r.type === "assistant" && (a || !r.isApiErrorMessage) ? r.message.content : []).filter((r) => r.type === "text").map((r) => "text" in r ? r.text : "").join("")).trim();
}
