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
var chunk_8dns2jbk_exports = {};
__export(chunk_8dns2jbk_exports, {
  D$: () => D$,
  I8t: () => I8t,
  KGr: () => KGr,
  Sva: () => Sva,
  T2o: () => T2o,
  qGr: () => qGr,
  sKs: () => sKs,
  sht: () => sht,
  yva: () => yva
});
module.exports = __toCommonJS(chunk_8dns2jbk_exports);
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_cy0ck7w2 = require("/$bunfs/root/chunk-cy0ck7w2.js");
var import_chunk_yvad17bv = require("/$bunfs/root/chunk-yvad17bv.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_wsm915mg = require("/$bunfs/root/chunk-wsm915mg.js");
var import_chunk_rkksytw2 = require("/$bunfs/root/chunk-rkksytw2.js");
var import_chunk_r5rtrbxq = require("/$bunfs/root/chunk-r5rtrbxq.js");
var import_chunk_49zxha55 = require("/$bunfs/root/chunk-49zxha55.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
function T2o(e) {
  return (e ?? (0, import_chunk_cy0ck7w2.Ki)().overageInUse === true) && (0, import_chunk_gq1dr8pm.Ein)();
}
var L = new RegExp("\\p{Script=Han}", "u"), R = /[\p{Script=Hiragana}\p{Script=Katakana}\u30fc\uff70\p{Script=Thai}\p{Script=Lao}\p{Script=Khmer}\p{Script=Myanmar}]/u, x = new RegExp("\\p{Script=Hangul}", "u"), v = /[\p{L}\p{N}]/u;
function w(e) {
  let { han: o, phonetic: t, hangul: n } = P(e);
  return o + t + n;
}
function T(e) {
  let o = e.trim();
  if (o === "") return 0;
  let t = 0;
  for (let n of o.split(/\s+/)) {
    let { han: r, phonetic: l, hangul: c, other: g } = P(n);
    t += r === 0 && l === 0 ? 1 : (g + c > 0 ? 1 : 0) + r / 2 + l / 4;
  }
  return Math.ceil(t);
}
function P(e) {
  let o = 0, t = 0, n = 0, r = 0;
  for (let l of e) if (L.test(l)) o++;
  else if (R.test(l)) t++;
  else if (x.test(l)) n++;
  else if (v.test(l)) r++;
  return { han: o, phonetic: t, hangul: n, other: r };
}
function sht(e) {
  return e.status === "shown" || e.status === "accepted";
}
function KGr(e) {
  return e.status === "empty" ? null : e.text;
}
function k() {
  return (0, import_chunk_865at33z.b)("tengu_chomp_inflection", false);
}
function qGr() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION;
  if (e === false) return (0, import_chunk_y53wbr8a.a)("tengu_prompt_suggestion_init", { enabled: false, source: (0, import_chunk_78g0060s.S)("env") }), false;
  if (e === true) return (0, import_chunk_y53wbr8a.a)("tengu_prompt_suggestion_init", { enabled: true, source: (0, import_chunk_78g0060s.S)("env") }), true;
  if (!k()) return (0, import_chunk_y53wbr8a.a)("tengu_prompt_suggestion_init", { enabled: false, source: (0, import_chunk_78g0060s.S)("growthbook") }), false;
  if ((0, import_chunk_f9x2f6cx.Se)()) return (0, import_chunk_y53wbr8a.a)("tengu_prompt_suggestion_init", { enabled: false, source: (0, import_chunk_78g0060s.S)("non_interactive") }), false;
  if ((0, import_chunk_yvad17bv.xi)() && (0, import_chunk_wtm85h0y.Yc)()) return (0, import_chunk_y53wbr8a.a)("tengu_prompt_suggestion_init", { enabled: false, source: (0, import_chunk_78g0060s.S)("swarm_teammate") }), false;
  let o = (0, import_chunk_2yx6c1y2.vt)()?.promptSuggestionEnabled !== false;
  return (0, import_chunk_y53wbr8a.a)("tengu_prompt_suggestion_init", { enabled: o, source: (0, import_chunk_78g0060s.S)("setting") }), o;
}
function I8t() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION;
  if (e !== void 0) return e;
  if ((0, import_chunk_3t7ve0wy.ta)() && !k()) return false;
  return (0, import_chunk_2yx6c1y2.vt)()?.promptSuggestionEnabled !== false;
}
function O(e, o) {
  if (!e.promptSuggestionEnabled) return "disabled";
  if (e.pendingWorkerRequest || e.pendingSandboxRequest) return "pending_permission";
  if (e.mcp.clients.some((t) => t.type === "connected" && (t.transportErrorState?.pendingElicitations ?? 0) > 0)) return "elicitation_active";
  if (e.toolPermissionContext.mode === "plan") return "plan_mode";
  {
    let { status: t } = (0, import_chunk_cy0ck7w2.Ki)(), n = t === "allowed_warning" && import_chunk_c203g5kd.s.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION === true;
    if (t !== "allowed" && !n) return "rate_limit";
    if (T2o(o)) return "usage_credits";
  }
  return null;
}
var M = 8;
function I(e, o) {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION === true || (0, import_chunk_bzyb60p0.d9a)(o)) return false;
  let t = Math.max((0, import_chunk_f9x2f6cx.ug)(), (0, import_chunk_f9x2f6cx.apt)(), (0, import_chunk_rkksytw2.YGr)());
  if (t !== e.personSeenAt) e.personSeenAt = t, e.unattendedTurns = 0;
  let n = ++e.unattendedTurns, r = (n & n - 1) === 0;
  return n > M && !r;
}
async function sKs(e, o, t, n, r, l) {
  if (e.signal.aborted) return D$("aborted", r), null;
  if ((0, import_chunk_4smdap7r.U)(o, (C) => C.type === "assistant") < 2) return D$("early_conversation", r), null;
  let g = (0, import_chunk_bzyb60p0._g)(o);
  if (g?.isApiErrorMessage) return D$("last_response_error", r), null;
  let d = t(), _ = O(d, n.toolUseContext.queryTracking?.billedToUsageCredits);
  if (_) return D$(_, r), null;
  let h = W(g);
  if (h) return D$("cache_cold", r, { cacheColdBy: h }), null;
  if (l && I(l, o)) return D$("not_user_started", r), null;
  if (l && (0, import_chunk_wsm915mg.Y4o)()) {
    let C = l.eligibleTurns % import_chunk_wsm915mg.eLa === 0;
    if (l.eligibleTurns++, !C) return D$("unused_streak", r), null;
  }
  let { suggestion: p, generationRequestId: y, calledTool: E } = await H(e, n);
  if (e.signal.aborted) return D$("aborted", r), null;
  if (E) return D$("tool_call", r), null;
  if (!p) return D$("empty", r), null;
  if (F(p, r)) return null;
  return { suggestion: p, generationRequestId: y };
}
async function yva(e, o) {
  if (!e.querySource?.startsWith("repl_main_thread")) return;
  let t = (0, import_chunk_rkksytw2.Nve)(), n = (0, import_chunk_865at33z.Qt)(), r = n && o?.tempo === "blocked" && !o.block;
  if (n ? t !== "focused" && !r : t === "blurred") {
    D$(n ? "bg_unattached" : "unfocused", "cli");
    return;
  }
  let l = e.toolUseContext.session.promptSuggestion, c = new AbortController();
  l.abortController = c;
  let g = (0, import_chunk_bzyb60p0.hfe)(e);
  try {
    let d = await sKs(c, e.messages, e.toolUseContext.getAppState, g, "cli", r ? void 0 : l);
    if (!d) return;
    if ((0, import_chunk_wsm915mg.RCn)() && (0, import_chunk_865at33z.mp)(e.toolUseContext.agentContext)) {
      D$("plugin_owns", "cli");
      return;
    }
    let _ = false, { isShown: h } = await (0, import_chunk_bzyb60p0.XGa)({ text: d.suggestion, origin: { kind: "suggestion" }, signal: c.signal, place: (p) => {
      if (c.signal.aborted) return { isShown: false };
      if (_ = true, r) N(p, o?.needs, e.toolUseContext.storageV5).catch(import_chunk_9e5mdyfk.Lu);
      return (0, import_chunk_bzyb60p0.Zli)(p, d.generationRequestId);
    } });
    if (c.signal.aborted) {
      D$("aborted", "cli");
      return;
    }
    if (!h && _) D$("timing", "cli");
  } catch (d) {
    if (d instanceof Error && (d.name === "AbortError" || d.name === "APIUserAbortError")) {
      D$("aborted", "cli");
      return;
    }
    (0, import_chunk_cqa9hrgx.m)("prompt_suggestion_generate", "api_error"), (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(d));
  } finally {
    if (l.abortController === c) l.abortController = null;
  }
}
async function N(e, o, t) {
  if ((0, import_chunk_sah8dzn4.As)(e) !== e) return;
  if (!(0, import_chunk_r5rtrbxq.VJn)(e)) return;
  let n = (0, import_chunk_9e5mdyfk.Bs)((0, import_chunk_9e5mdyfk.TS)());
  (0, import_chunk_9e5mdyfk.Qg)(n);
  let r = await (0, import_chunk_9e5mdyfk.Is)(n, t);
  if (r?.tempo !== "blocked" || r.needs !== o || r.suggestedReply === e) return;
  await (0, import_chunk_9e5mdyfk.Hf)(n, { ...r, suggestedReply: e }, t);
}
var A = 1e4;
function W(e) {
  if (!e) return null;
  let o = e.message.usage, t = (o.input_tokens ?? 0) + (o.output_tokens ?? 0);
  if (t > A) return "uncached";
  let n = o.cache_creation_input_tokens ?? 0;
  if (t + n <= A) return null;
  return (0, import_chunk_865at33z.b)("tengu_chomp_thaw", false) ? null : "cache_write";
}
var q = `[SUGGESTION MODE: Suggest what the user might naturally type next into Claude Code.]

FIRST: Look at the user's recent messages and original request.

Your job is to predict what THEY would type - not what you think they should do.

THE TEST: Would they think "I was just about to type that"?

EXAMPLES:
User asked "fix the bug and run tests", bug is fixed \u2192 "run the tests"
After code written \u2192 "try it out"
Claude offers options \u2192 suggest the one the user would likely pick, based on conversation
Claude asks to continue \u2192 "yes" or "go ahead"
Task complete, obvious follow-up \u2192 "commit this" or "push it"
After error or misunderstanding \u2192 silence (let them assess/correct)

Be specific: "run the tests" beats "continue".

NEVER SUGGEST:
- Evaluative ("looks good", "thanks")
- Questions ("what about...?")
- Claude-voice ("Let me...", "I'll...", "Here's...")
- New ideas they didn't ask about
- Multiple sentences

Stay silent if the next step isn't obvious from what the user said.

Stay silent if a suggestion could be unsafe or inappropriate \u2014 including any sensitive topic (security incidents, credentials, harm, private data). Even when the user is doing legitimate security or cybersecurity work, do not predict potentially unsafe actions.

Format: 2-12 words, match the user's style. Or nothing.

Reply with ONLY the suggestion, no quotes or explanation.`;
async function B(e, o, t) {
  let n = async () => ({ behavior: "deny", message: "No tools needed for suggestion", decisionReason: { type: "other", reason: "suggestion only" } }), r = (0, import_chunk_cbnm4p23.sd)(o), l = false, c = (0, import_chunk_bzyb60p0.yH)({ promptMessages: [(0, import_chunk_bzyb60p0.Me)({ content: e })], cacheSafeParams: t, canUseTool: n, querySource: "prompt_suggestion", forkLabel: "prompt_suggestion", overrides: { abortController: r }, maxTurns: 1, skipTranscript: true, skipCacheWrite: true, onMessage: (p) => {
    if (p.type === "assistant" && p.message.content.some((y) => import_chunk_bzyb60p0.Hen.has(y.type))) l = true, r.abort();
  }, onStreamDelta: (p) => {
    if (p.type === "stream_event" && p.event?.type === "content_block_start" && import_chunk_bzyb60p0.Hen.has(p.event.content_block.type)) l = true, r.abort();
  } }), g;
  try {
    g = (await c).messages;
  } catch (p) {
    if (l) return { candidates: [], generationRequestId: null, calledTool: l };
    throw p;
  }
  if (l) return { candidates: [], generationRequestId: null, calledTool: l };
  let d = g.find((p) => p.type === "assistant"), _ = d?.type === "assistant" ? d.requestId ?? null : null, h = [];
  for (let p of g) {
    if (p.type !== "assistant" || p.isApiErrorMessage) continue;
    let y = p.message.content.find((E) => E.type === "text");
    if (y?.type === "text") h.push(y.text);
  }
  return { candidates: h, generationRequestId: _, calledTool: l };
}
function G(e) {
  return e.trim().replace(/^<(suggestion|response|output|answer|result)>([\s\S]*)<\/\1>$/i, (o, t, n) => n.includes(`</${t.toLowerCase()}>`) || n.includes(`</${t.toUpperCase()}>`) ? o : n).replace(/^\s*(suggested\s+(response|reply|input|prompt)|suggestion|response|reply|answer|output|result|\u63D0\u6848|\u56DE\u7B54|\u8FD4\u4FE1|\u5FDC\u7B54|\u51FA\u529B|\u7D50\u679C|\u5EFA\u8BAE|\u56DE\u590D|\u7B54\u6848|\u8F93\u51FA|\u7ED3\u679C|\uC81C\uC548|\uB2F5\uBCC0|\uC751\uB2F5|\uCD9C\uB825|\uACB0\uACFC)\s*[:\uFF1A]\s*/i, "").trim();
}
async function H(e, o) {
  let { candidates: t, generationRequestId: n, calledTool: r } = await B(q, e, o);
  for (let l of t) {
    let c = G(l);
    if (c) return (0, import_chunk_cqa9hrgx.u)("prompt_suggestion_generate"), { suggestion: c, generationRequestId: n, calledTool: r };
  }
  return (0, import_chunk_cqa9hrgx.u)("prompt_suggestion_generate"), { suggestion: null, generationRequestId: n, calledTool: r };
}
function F(e, o) {
  if (!e) return D$("empty", o), true;
  let t = e.toLowerCase(), n = t.replace(/<[^<>]*>|[^\p{L}\p{N}\s()[\]\uFF08\uFF09\uFF3B\uFF3D\u3010\u3011\u3014\u3015]/gu, " ").trim(), r = T(e), l = [["done", () => t === "done" || new RegExp("^\\P{L}*(\\u5B8C\\u4E86(\\u3057\\u307E\\u3057\\u305F)?|\\u5B8C\\u6210\\u4E86?|\\uC644\\uB8CC\\uB428?)\\P{L}*$", "u").test(e)], ["meta_text", () => n === "nothing found" || n.startsWith("nothing to suggest") || n.startsWith("no suggestion") || /\bsilence is\b|\bstay(s|ing)? silent\b/.test(n) || /^\W*silence\W*$/.test(n) || new RegExp("^\\P{L}*(\\u6C88\\u9ED9|\\u6C89\\u9ED8|\\u9759\\u9ED8|\\uCE68\\uBB35|\\u63D0\\u6848(\\u306A\\u3057|\\u306F\\u3042\\u308A\\u307E\\u305B\\u3093)|\\u7279\\u306B(\\u306A\\u3057|\\u3042\\u308A\\u307E\\u305B\\u3093)|[\\u65E0\\u6CA1\\u6C92]\\u6709?\\u5EFA[\\u8BAE\\u8B70]|(\\uC81C\\uC548|\\uD574\\uB2F9)\\s*\\uC5C6\\uC74C)\\P{L}*$", "u").test(n)], ["meta_wrapped", () => n === "" || /^(\(.*\)|\[.*\]|\uFF08.*\uFF09|\uFF3B.*\uFF3D|\u3010.*\u3011|\u3014.*\u3015)$/.test(n)], ["error_message", () => t.startsWith("api error:") || t.startsWith("prompt is too long") || t.startsWith("request timed out") || t.startsWith("invalid api key") || t.startsWith("image was too large")], ["prefixed_label", () => /^\w+:\s/.test(e)], ["too_few_words", () => {
    if (r >= 2) return false;
    if (e.startsWith("/")) return false;
    let c = w(e);
    if (c > 0) return c < 2;
    return !(/* @__PURE__ */ new Set(["yes", "yeah", "yep", "yea", "yup", "sure", "ok", "okay", "push", "commit", "deploy", "stop", "continue", "check", "exit", "quit", "no"])).has(t);
  }], ["too_many_words", () => r > 12], ["too_long", () => e.length >= 100], ["multiple_sentences", () => /[.!?]\s+[A-Z]|[\u3002\uFF01\uFF1F]\s*[\p{L}\p{N}]/u.test(e)], ["has_formatting", () => /[\n*]|\*\*/.test(e)], ["evaluative", () => /thanks|thank you|looks good|sounds good|that works|that worked|that's all|nice|great|perfect|makes sense|awesome|excellent/.test(t) || new RegExp("^\\P{L}*(\\u3042\\u308A\\u304C\\u3068\\u3046(\\u3054\\u3056\\u3044\\u307E\\u3059|\\u3054\\u3056\\u3044\\u307E\\u3057\\u305F)?|\\u52A9\\u304B\\u308A\\u307E\\u3057\\u305F|[\\u8C22\\u8B1D][\\u8C22\\u8B1D][\\u4F60\\u60A8]?|\\u611F\\u8C22[\\u4F60\\u60A8]?|\\u611F\\u8B1D\\u3057\\u307E\\u3059|\\uAC10\\uC0AC\\uD569\\uB2C8\\uB2E4|\\uACE0\\uB9C8\\uC6CC\\uC694?)(\\P{L}|\\u7684|$)", "u").test(e) || new RegExp("(\\u826F\\u3055\\u305D\\u3046|\\u3088\\u3055\\u305D\\u3046|\\u3044\\u3044\\u3067\\u3059\\u306D|\\u770B\\u8D77\\u6765\\u4E0D\\u9519|\\u592A\\u597D\\u4E86|\\u5B8C\\u74A7|\\u5B8C\\u7F8E|\\uC88B\\uB124\\uC694)(\\u3067\\u3059|\\u3067\\u3059\\u306D|\\u3060\\u306D)?\\P{L}*$", "u").test(e)], ["claude_voice", () => /^(let me|i'll|i've|i'm|i can|i would|i think|i notice|here's|here is|here are|that's|this is|this will|you can|you should|you could|sure,|of course|certainly|\u8BA9\u6211(?!\u4EEC)|\u6211\u6765|\u6211\u4F1A|\u6211\u5C06)/i.test(e)]];
  for (let [c, g] of l) if (g()) return D$(c, o), true;
  return false;
}
function Sva(e, o, t, n) {
  let r = Math.round(o.length / (e.length || 1) * 100) / 100, l = o.toLowerCase() === e.toLowerCase(), c = Math.max(0, Date.now() - t);
  (0, import_chunk_y53wbr8a.a)("tengu_prompt_suggestion", { source: (0, import_chunk_78g0060s.S)("sdk"), outcome: (0, import_chunk_78g0060s.S)(l ? "accepted" : "ignored"), prompt_id: (0, import_chunk_78g0060s.S)("user_intent"), ...n && { generationRequestId: (0, import_chunk_49zxha55.Ce)(n) }, ...l && { timeToAcceptMs: c }, ...!l && { timeToIgnoreMs: c }, similarity: r });
}
function D$(e, o, t) {
  (0, import_chunk_y53wbr8a.a)("tengu_prompt_suggestion", { ...o && { source: (0, import_chunk_78g0060s.f)(o) }, outcome: (0, import_chunk_78g0060s.S)("suppressed"), reason: (0, import_chunk_78g0060s.f)(e), ...t?.cacheColdBy && { cacheColdBy: (0, import_chunk_78g0060s.f)(t.cacheColdBy) }, prompt_id: (0, import_chunk_78g0060s.S)("user_intent") });
}
