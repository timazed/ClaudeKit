const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
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
var __using = (stack, value, async) => {
  if (value != null) {
    if (typeof value !== "object" && typeof value !== "function") __typeError("Object expected");
    var dispose, inner;
    if (async) dispose = value[__knownSymbol("asyncDispose")];
    if (dispose === void 0) {
      dispose = value[__knownSymbol("dispose")];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") __typeError("Object not disposable");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    stack.push([async, dispose, value]);
  } else if (async) {
    stack.push([async]);
  }
  return value;
};
var __callDispose = (stack, error, hasError) => {
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m2, _) {
    return _ = Error(m2), _.name = "SuppressedError", _.error = e, _.suppressed = s2, _;
  };
  var fail = (e) => error = hasError ? new E(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it) => {
    while (it = stack.pop()) {
      try {
        var result = it[1] && it[1].call(it[2]);
        if (it[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_t6g0rnyw_exports = {};
__export(chunk_t6g0rnyw_exports, {
  B8t: () => B8t,
  LJn: () => LJn,
  W8t: () => W8t,
  iTa: () => iTa
});
module.exports = __toCommonJS(chunk_t6g0rnyw_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_aw5nczax = require("/$bunfs/root/chunk-aw5nczax.js");
var import_chunk_08bv0y93 = require("/$bunfs/root/chunk-08bv0y93.js");
var import_chunk_p90h0hwy = require("/$bunfs/root/chunk-p90h0hwy.js");
var import_chunk_0h9rvfx7 = require("/$bunfs/root/chunk-0h9rvfx7.js");
var import_chunk_49zxha55 = require("/$bunfs/root/chunk-49zxha55.js");
var j = 65536;
function H(e) {
  return Buffer.byteLength((0, import_chunk_w578pjby.cs)((0, import_chunk_w578pjby.cs)(e)).slice(1, -1));
}
function x(e) {
  let n = (0, import_chunk_w578pjby.cs)(e).slice(1, -1);
  return Buffer.byteLength((0, import_chunk_w578pjby.cs)(n).slice(1, -1));
}
function J(e, n, l) {
  let { start: c, keptBytes: r, oversized: p } = (0, import_chunk_08bv0y93.u2o)(n, l), b = e.slice(c);
  return { transcript: p.size === 0 ? b : b.filter((T, g) => !p.has(c + g)), keptBytes: r };
}
function iTa(e) {
  var _stack = [];
  try {
    const n = __using(_stack, import_chunk_w578pjby.tw`fitTranscriptAloneToBudget(${e.length})`);
    let { transcript: l } = J(e, e.map((c) => H(c) + 1), import_chunk_08bv0y93.BKe - j);
    return l.length === 0 || l.length === e.length ? null : l;
  } catch (_) {
    var _error = _, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function K(e) {
  var _stack = [];
  try {
    let n = (0, import_chunk_08bv0y93.AGr)(e);
    if (n <= import_chunk_08bv0y93.BKe) return { payload: e, trim: null };
    const l = __using(_stack, import_chunk_w578pjby.tw`fitFeedbackPayloadToBudget(${n})`);
    let c = n - (import_chunk_08bv0y93.BKe - j), r = e.transcript.map((h) => H(h) + 1), p = r.reduce((h, M) => h + M, 0), b = e.rawTranscriptJsonl === void 0 ? 0 : x(e.rawTranscriptJsonl), T = c <= p ? p - c : Math.max(0, p - Math.max(0, c - b)), { transcript: g, keptBytes: w } = J(e.transcript, r, T), y = c - (p - w), i = e.rawTranscriptJsonl, k = i === void 0 ? "absent" : "untouched";
    if (y > 0 && i !== void 0) {
      let h = b - y;
      if (h <= 0) i = void 0, k = "omitted";
      else {
        let M = i.split(`
`), L = M.map((D) => x(D + `
`)), { start: v, oversized: I } = (0, import_chunk_08bv0y93.u2o)(L, h), _2 = M.slice(v), R = (I.size === 0 ? _2 : _2.filter((D, d) => !I.has(v + d))).join(`
`);
        if (R === "") i = void 0, k = "omitted";
        else i = R, k = "reduced";
      }
    }
    let B = { keptMessageCount: g.length, totalMessageCount: e.transcript.length, rawTail: k, rawTailKeptBytes: i === void 0 ? 0 : Buffer.byteLength(i) }, A = B8t(B);
    if (A === null) return { payload: e, trim: null };
    let { rawTranscriptJsonl: F, ...P } = e, o = { ...P, message_count: g.length, description: `${e.description}
${A}`, transcript: g, ...i !== void 0 && { rawTranscriptJsonl: i } }, C = (0, import_chunk_08bv0y93.AGr)(o);
    if (C > import_chunk_08bv0y93.BKe) (0, import_chunk_w578pjby.t)(`fitFeedbackPayloadToBudget: still ${C} bytes after trim (budget ${import_chunk_08bv0y93.BKe})`, { level: "error" });
    return { payload: o, trim: B };
  } catch (_) {
    var _error = _, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function B8t(e) {
  let n = [];
  if (e.keptMessageCount < e.totalMessageCount) n.push(`kept ${e.keptMessageCount} of ${e.totalMessageCount} transcript messages (newest kept first)`);
  if (e.rawTail === "reduced") n.push(`kept ${Math.max(1, Math.round(e.rawTailKeptBytes / 1024))} KiB of the raw session log (newest kept first)`);
  else if (e.rawTail === "omitted") n.push("omitted the raw session log");
  if (e.subagentTranscriptsOmitted) n.push("omitted the sub-agent transcripts");
  if (n.length === 0) return null;
  return `transcript_truncated: ${n.join("; ")} (trimmed client-side to fit the upload size limit)`;
}
function N(e, n = "panel") {
  let l = (0, import_chunk_aw5nczax.K8t)(e.request_ids), c = (0, import_chunk_aw5nczax.uGo)(e.area), r = (0, import_chunk_aw5nczax.xTa)(e.failure_mode), p = (0, import_chunk_aw5nczax.PTa)(e.task_category), b = (0, import_chunk_aw5nczax.fGo)(e.effort), T = (0, import_chunk_aw5nczax.OTa)(e.thinking_type), g = (0, import_chunk_aw5nczax.v$e)(e.thinking_budget), w = (0, import_chunk_aw5nczax.v$e)(e.message_count), y = (0, import_chunk_aw5nczax.v$e)(e.assistant_turn_count), i = (0, import_chunk_aw5nczax.v$e)(e.subagent_count);
  return [`[${e.type}] ${(0, import_chunk_aw5nczax.YJn)(e.title)}`, "", (0, import_chunk_aw5nczax.dGo)(e.details), "", "---", n === "card_send_as_is" ? "Drafted by Claude via the SendFeedback tool; approved by the user from the above-prompt card without full review." : "Drafted by Claude via the SendFeedback tool; reviewed and approved by the user before sending.", `trigger: ${e.trigger}`, ...c !== void 0 ? [`area: ${c}`] : [], ...r !== void 0 ? [`failure_mode: ${r}`] : [], ...p !== void 0 ? [`task_category: ${p}`] : [], `draft_id: ${e.draft_id}`, `drafted_at: ${e.created_at}`, `source_session_id: ${e.source_session_id}`, `model: ${(0, import_chunk_aw5nczax.cGo)(e.model)}`, `cli_version: ${(0, import_chunk_aw5nczax._et)(e.cli_version, import_chunk_aw5nczax.aGo)}`, `os: ${(0, import_chunk_aw5nczax._et)(e.os, import_chunk_aw5nczax.lGo)}`, ...b !== void 0 ? [`effort: ${b}`] : [], ...T !== void 0 ? [`thinking: ${T}${g !== void 0 ? ` (budget ${g})` : ""}`] : [], ...y !== void 0 ? [`turns: ${y} assistant${w !== void 0 ? ` / ${w} messages` : ""}${i !== void 0 && i > 0 ? `, ${i} ${(0, import_chunk_7cfjrnwy.O)(i, "subagent")}` : ""}`] : [], ...l.length > 0 ? [`request_ids: ${l.join(", ")}`] : []].join(`
`);
}
function Y(e) {
  var _stack = [];
  try {
    let n = [];
    const l = __using(_stack, import_chunk_w578pjby.tw`parseDraftTranscriptMessages(${e.length})`);
    for (let c of e.split(`
`)) {
      if (!c) continue;
      let r;
      try {
        r = (0, import_chunk_w578pjby.Cs)(c);
      } catch {
        continue;
      }
      if (typeof r !== "object" || r === null) continue;
      if (r.type !== "user" && r.type !== "assistant") continue;
      if (typeof r.uuid !== "string" || typeof r.timestamp !== "string" || r.isSidechain === true || !r.message) continue;
      n.push(r.type === "user" ? { type: "user", uuid: r.uuid, timestamp: r.timestamp, message: r.message, ...r.isMeta === true && { isMeta: true }, ...r.toolUseResult !== void 0 && { toolUseResult: r.toolUseResult }, ...r.isCompactSummary === true && { isCompactSummary: true }, ...r.repeatsCompactSummary === true && { repeatsCompactSummary: true } } : { type: "assistant", uuid: r.uuid, timestamp: r.timestamp, message: r.message, requestId: r.requestId });
    }
    return n;
  } catch (_) {
    var _error = _, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
var V = "Feedback payload too large. Try again without the transcript, or shorten the details.";
async function W8t({ draft: e, includeTranscript: n, currentSessionMessages: l, surface: c = "cli", via: r = "panel", signal: p, storageV5: b, credentials: T, host: g }) {
  let w = (0, import_chunk_08bv0y93.Lve)();
  if (w.kind === "bundle" && w.cause === "hybrid_organization") return { success: false, error: import_chunk_08bv0y93.FVs };
  let y = e.source_session_id === (0, import_chunk_f9x2f6cx.W)(), i = [], k;
  if (n && e.transcript_ref) {
    let _ = await (0, import_chunk_aw5nczax.fqs)(e);
    if (y) {
      if (i = (0, import_chunk_bzyb60p0.tv)((0, import_chunk_p90h0hwy.P_e)(l, { host: g })), _ !== null) try {
        let { content: E, bytesRead: R, bytesTotal: D } = await (0, import_chunk_w578pjby.LB)(_, import_chunk_08bv0y93.SEn), d = E;
        if (R < D) d = d.slice(d.indexOf(`
`) + 1);
        if ((0, import_chunk_bzyb60p0.VMe)(d)) (0, import_chunk_w578pjby.t)("rawTranscriptJsonl withheld from feedback draft submit: contains_3p_transcript_markers");
        else k = (0, import_chunk_p90h0hwy.GKe)((0, import_chunk_bzyb60p0.C_t)(d), { host: g }).jsonl;
      } catch {
      }
    } else if (_ !== null) try {
      let { content: E, bytesRead: R, bytesTotal: D } = await (0, import_chunk_w578pjby.LB)(_, import_chunk_08bv0y93.SEn), d = E;
      if (R < D) d = d.slice(d.indexOf(`
`) + 1);
      if (!(0, import_chunk_aw5nczax.pGo)(d, e)) (0, import_chunk_w578pjby.t)("draft transcript withheld from feedback submit: identity_not_corroborated");
      else if (R < D) (0, import_chunk_w578pjby.t)("draft transcript withheld from feedback submit: too_large_to_check_account");
      else if (!(0, import_chunk_bzyb60p0.kdr)(d.split(`
`))) (0, import_chunk_w578pjby.t)("draft transcript withheld from feedback submit: not_recorded_by_current_account");
      else {
        let z = Y(d), q = !(0, import_chunk_p1ewvgeh.p4)("own_account", (0, import_chunk_0h9rvfx7.Odn)(d));
        if ((0, import_chunk_bzyb60p0.T_t)(z) || q) (0, import_chunk_w578pjby.t)("draft transcript withheld from feedback submit: contains_3p_transcript_markers");
        else i = (0, import_chunk_p90h0hwy.P_e)(z, { host: void 0 });
        if ((0, import_chunk_bzyb60p0.VMe)(d) || q) (0, import_chunk_w578pjby.t)("rawTranscriptJsonl withheld from feedback draft submit: contains_3p_transcript_markers");
        else k = (0, import_chunk_p90h0hwy.GKe)((0, import_chunk_bzyb60p0.C_t)(d), { host: void 0 }).jsonl;
      }
    } catch {
    }
  }
  let B = (0, import_chunk_aw5nczax.K8t)(e.request_ids).at(-1) ?? null, A = { latestAssistantMessageId: B, latestAssistantAPIMessageId: null, lastInterruptedAssistantAPIMessageId: null, message_count: i.length, datetime: (/* @__PURE__ */ new Date()).toISOString(), description: N(e, r), surface: c, platform: import_chunk_c203g5kd.s.platform, gitRepo: false, commitSha: null, version: e.cli_version, transcript: i, ...k && { rawTranscriptJsonl: k } }, { payload: F, trim: P } = K(A);
  await (0, import_chunk_aw5nczax.tq)();
  let o = await (0, import_chunk_08bv0y93.bEn)(F, p, void 0, T);
  if (o.success) {
    try {
      await (0, import_chunk_aw5nczax.Lzr)(e.draft_id, b);
    } catch (_) {
      (0, import_chunk_w578pjby.t)(`feedbackDrafts: post-submit draft delete failed: ${_ instanceof Error ? _.name : "unknown"}`, { level: "error" }), (0, import_chunk_y53wbr8a.a)("tengu_feedback_draft_delete_failed", { phase: (0, import_chunk_78g0060s.S)("post_submit") });
    }
    if (y) (0, import_chunk_aw5nczax.Nzr)();
    if (r !== "card_send_as_is") (0, import_chunk_aw5nczax.jEn)(e.draft_id);
    return (0, import_chunk_y53wbr8a.a)("tengu_feedback_draft_submitted", { type: (0, import_chunk_78g0060s.f)(e.type), trigger: (0, import_chunk_78g0060s.f)(e.trigger), failure_mode: (0, import_chunk_78g0060s.fe)(e.failure_mode), task_category: (0, import_chunk_78g0060s.fe)(e.task_category), transcript_included: F.transcript.length > 0 || F.rawTranscriptJsonl ? (0, import_chunk_78g0060s.S)("true") : (0, import_chunk_78g0060s.S)("false"), transcript_trimmed: P !== null ? (0, import_chunk_78g0060s.S)("true") : (0, import_chunk_78g0060s.S)("false"), transcript_requested: n ? (0, import_chunk_78g0060s.S)("true") : (0, import_chunk_78g0060s.S)("false"), transcript_available: e.transcriptAvailable ? (0, import_chunk_78g0060s.S)("true") : (0, import_chunk_78g0060s.S)("false"), from_this_session: y ? (0, import_chunk_78g0060s.S)("true") : (0, import_chunk_78g0060s.S)("false"), feedback_id: (0, import_chunk_49zxha55.Ce)(o.feedbackId), last_request_id: (0, import_chunk_49zxha55.Ce)(B) }), (0, import_chunk_cqa9hrgx.u)("feedback_draft_submit"), { success: true, feedbackId: o.feedbackId };
  }
  let C = (0, import_chunk_49zxha55.Ce)(o.requestId);
  (0, import_chunk_cqa9hrgx.m)("feedback_draft_submit", o.failureReason ?? "network_error", { from_this_session: y ? (0, import_chunk_78g0060s.S)("true") : (0, import_chunk_78g0060s.S)("false"), ...o.statusCode !== void 0 && { http_status: o.statusCode }, ...C !== void 0 && { requestId: C } });
  let h = (0, import_chunk_08bv0y93.gJn)(o);
  if (h !== void 0) return { success: false, error: h, orgRefusalReason: (0, import_chunk_08bv0y93.UKe)(o) };
  if (o.failureReason === "auth_error") return { success: false, error: !(0, import_chunk_865at33z.QV)().error && (0, import_chunk_08bv0y93.set)() || "Couldn't send feedback: not signed in. Run /login, then retry." };
  if (o.payloadTooLarge) return { success: false, error: V, payloadTooLarge: true };
  if (o.failureReason === "policy_blocked") return { success: false, error: (0, import_chunk_gq1dr8pm.JQ)() ?? "Feedback is disabled by your organization's policy.", ...(0, import_chunk_gq1dr8pm.bbe)() && { orgRefusalReason: (0, import_chunk_08bv0y93.UKe)({ refusal: { kind: "org", serverMessage: void 0 } }) } };
  let M = (0, import_chunk_08bv0y93._Jn)(o);
  if (M !== void 0) return { success: false, error: `${M} The draft is still queued.` };
  let L = (0, import_chunk_08bv0y93.yEn)(o) ?? (o.failureReason === "timeout" ? " (request timed out)" : " (couldn't reach the service)"), v = F.transcript.length > 0 || Boolean(F.rawTranscriptJsonl), I = o.refusal?.kind === "other" ? "" : o.failureReason === "timeout" && v ? " Try again later, or send it without the transcript." : " Try again later.";
  return { success: false, error: `Couldn't send feedback${L}. The draft is still queued.${I}` };
}
async function LJn(e, n, l) {
  let c = await (0, import_chunk_aw5nczax.Lzr)(e.draft_id, l);
  if ((0, import_chunk_aw5nczax.jEn)(e.draft_id), !c) return;
  if (e.source_session_id === (0, import_chunk_f9x2f6cx.W)()) (0, import_chunk_aw5nczax.Nzr)();
  (0, import_chunk_y53wbr8a.a)("tengu_feedback_draft_discarded", { type: (0, import_chunk_78g0060s.f)(e.type), trigger: (0, import_chunk_78g0060s.f)(e.trigger), discarded_via: (0, import_chunk_78g0060s.f)(n) });
}
