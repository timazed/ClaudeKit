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
var chunk_z2xw6net_exports = {};
__export(chunk_z2xw6net_exports, {
  Eho: () => Eho,
  Ekt: () => Ekt,
  Gin: () => Gin,
  KMi: () => KMi,
  Sfl: () => Sfl,
  Sit: () => Sit,
  TBt: () => TBt,
  UH: () => UH,
  VMi: () => VMi,
  YMi: () => YMi,
  _fl: () => _fl,
  aV: () => aV,
  afl: () => afl,
  bfl: () => bfl,
  bho: () => bho,
  cfl: () => cfl,
  dfl: () => dfl,
  e4: () => e4,
  eZ: () => eZ,
  fSr: () => fSr,
  ffl: () => ffl,
  g8e: () => g8e,
  gfl: () => gfl,
  h8e: () => h8e,
  hSr: () => hSr,
  hfl: () => hfl,
  ihs: () => ihs,
  jFn: () => jFn,
  kho: () => kho,
  kkt: () => kkt,
  lfl: () => lfl,
  m0e: () => m0e,
  mSr: () => mSr,
  mfl: () => mfl,
  o1: () => o1,
  ohs: () => ohs,
  pSr: () => pSr,
  pfl: () => pfl,
  qMi: () => qMi,
  rhs: () => rhs,
  shs: () => shs,
  ufl: () => ufl,
  wfl: () => wfl,
  who: () => who,
  yfl: () => yfl,
  zMi: () => zMi
});
module.exports = __toCommonJS(chunk_z2xw6net_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_vcnr02by = require("/$bunfs/root/chunk-vcnr02by.js");
var import_chunk_59mwkeke = require("/$bunfs/root/chunk-59mwkeke.js");
var import_chunk_zddv3vvj = require("/$bunfs/root/chunk-zddv3vvj.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_8bq2fhrn = require("/$bunfs/root/chunk-8bq2fhrn.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_crypto = require("crypto");
var p = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv._u)(), 1), It = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_xfj2cwfv.Q_)(), 1);
function fSr() {
  try {
    return (0, import_chunk_vcnr02by.Rvt)();
  } catch (n) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(n)), true;
  }
}
function ot() {
  try {
    return (0, import_chunk_865at33z.ce)().loadedModules.some((n) => !(0, import_chunk_59mwkeke.yd)(n) && n.hooks("command.run"));
  } catch (n) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(n)), true;
  }
}
function Gin(n) {
  try {
    return (0, import_chunk_zddv3vvj.nZ)() || ot() || (0, import_chunk_865at33z.ce)().loadedModules.some((e) => !(0, import_chunk_59mwkeke.yd)(e) && (e.hooks("prompt.submit") || e.hooks("session.append") && !(n === "queue-record" && (0, import_chunk_59mwkeke.hu)(e) && (0, import_chunk_8bq2fhrn.wTs)(e.matcherFor("session.append"), "door", "queue"))));
  } catch (e) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(e)), true;
  }
}
function o1(n) {
  return Gin(n) || fSr();
}
var Ot = 61440;
function qt() {
  return Math.min(import_chunk_c203g5kd.s.CLAUDE_CODE_OTEL_CONTENT_MAX_LENGTH ?? Ot, import_chunk_c203g5kd.s.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT ?? 1 / 0, import_chunk_c203g5kd.s.OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT ?? 1 / 0, import_chunk_c203g5kd.s.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT ?? 1 / 0);
}
function e4(n) {
  let e = qt();
  if (n.length <= e) return { content: n, truncated: false };
  let o = `

[TRUNCATED - Content exceeds ${e >= 1024 ? `${Math.floor(e / 1024)}KB` : `${e} character`} limit]`;
  if (o.length >= e) return { content: n.slice(0, e), truncated: true };
  return { content: n.slice(0, e - o.length) + o, truncated: true };
}
function O() {
  return import_chunk_c203g5kd.s.OTEL_LOG_USER_PROMPTS;
}
class at {
  seenHashes = /* @__PURE__ */ new Set();
  lastReportedMessage = /* @__PURE__ */ new Map();
  emittedUserPromptForSessionId = void 0;
}
var ut = new import_chunk_pzzqg6s3.ze(() => new at());
function afl() {
  let n = ut.of((0, import_chunk_f9x2f6cx.N)());
  n.seenHashes.clear(), n.lastReportedMessage.clear();
}
function UH() {
  if (!(import_chunk_c203g5kd.s.ENABLE_BETA_TRACING_DETAILED && Boolean(process.env.BETA_TRACING_ENDPOINT) && !(0, import_chunk_f9x2f6cx.Y)())) return false;
  return (0, import_chunk_f9x2f6cx.Se)() || (0, import_chunk_865at33z.b)("tengu_trace_lantern", false);
}
function Z(n) {
  return (0, import_crypto.createHash)("sha256").update(n).digest("hex").slice(0, 12);
}
function Ut(n) {
  return `sp_${Z(n)}`;
}
function it(n) {
  let e = (0, import_chunk_w578pjby._)(n.message.content);
  return `msg_${Z(e)}`;
}
function G(n) {
  return /^<system-reminder>\n?([\s\S]*?)\n?<\/system-reminder>$/.exec(n.trim())?.[1]?.trim() || null;
}
function X(n, e) {
  let r = [], o = [];
  for (let a of n) {
    if (a.type === "api_system") {
      o.push(a.message.content);
      continue;
    }
    let u = a.message.content;
    if (typeof u === "string") {
      let c = G(u);
      if (c) o.push(c);
      else if (e) r.push(`[USER]
${u}`);
    } else if (Array.isArray(u)) {
      for (let c of u) if (c.type === "text") {
        let m = G(c.text);
        if (m) o.push(m);
        else if (e) r.push(`[USER]
${c.text}`);
      } else if (c.type === "tool_result") {
        if (typeof c.content === "string") {
          let m = G(c.content);
          if (m) o.push(m);
          else if (e) r.push(`[TOOL RESULT: ${c.tool_use_id}]
${c.content}`);
        } else if (e) r.push(`[TOOL RESULT: ${c.tool_use_id}]
${(0, import_chunk_w578pjby._)(c.content)}`);
      }
    }
  }
  return { contextParts: r, systemReminders: o };
}
function Nt(n, e) {
  let { systemReminders: r } = X(n, false);
  return { contextParts: [e], systemReminders: r.map(() => e) };
}
function Dt(n, e, r) {
  let o = (0, import_chunk_xfr8663h.Xko)(n.map((a) => a.message), r, e.map((a) => a.message));
  return n.map((a, u) => o[u] === a.message ? a : { ...a, message: o[u] });
}
var $t = () => (0, import_chunk_xfr8663h.Nvt)((0, import_chunk_f9x2f6cx.N)().host);
function J(n, e) {
  if (!UH() || !O()) return;
  let { content: r, truncated: o } = e4(`[USER PROMPT]
${(0, import_chunk_xfr8663h.BYe)(() => (0, import_chunk_xfr8663h.Nvt)((0, import_chunk_f9x2f6cx.N)().host), void 0, e)}`);
  n.setAttributes({ new_context: r, ...o && { new_context_truncated: true, new_context_original_length: e.length } });
}
function ct(n, e, r, o, a) {
  if (!UH()) return;
  let u = ut.of((0, import_chunk_f9x2f6cx.N)()), c = (h) => r !== void 0 && o === void 0 ? { withheld: "account_memory_text_not_identified" } : (0, import_chunk_xfr8663h.DWn)(o ?? $t, e?.querySource, h), m = (h) => {
    let f = c((l) => (0, import_chunk_xfr8663h.LWn)(h, l));
    return "withheld" in f ? (0, import_chunk_xfr8663h.jcn)(f.withheld) : f.value;
  };
  if (e?.systemPrompt) {
    let { systemPrompt: h } = e, f = Ut(h), l, g = () => l ??= c((d) => (0, import_chunk_xfr8663h.LWn)(h, d));
    if (n.setAttribute("system_prompt_hash", f), O()) {
      let d = g();
      n.setAttribute("system_prompt_preview", "withheld" in d ? (0, import_chunk_xfr8663h.jcn)(d.withheld) : d.value.slice(0, 500));
    }
    n.setAttribute("system_prompt_length", e.systemPrompt.length);
    let S = O() ? g() : void 0;
    if (S !== void 0 && "value" in S && !u.seenHashes.has(f)) {
      u.seenHashes.add(f);
      let { content: d, truncated: T } = e4(S.value);
      (0, import_chunk_xfr8663h.ql)("system_prompt", { system_prompt_hash: f, system_prompt: d, system_prompt_length: String(e.systemPrompt.length), ...T && { system_prompt_truncated: "true" } }, a);
    }
  }
  if (e?.userSystemPrompt && O()) {
    let h = (0, import_chunk_f9x2f6cx.W)();
    if (u.emittedUserPromptForSessionId !== h) {
      u.emittedUserPromptForSessionId = h;
      let { content: f, truncated: l } = e4(m(e.userSystemPrompt));
      n.setAttributes({ user_system_prompt: f, ...l && { user_system_prompt_truncated: true, user_system_prompt_original_length: e.userSystemPrompt.length } });
    }
  }
  if (e?.tools) try {
    let f = (0, import_chunk_w578pjby.te)(e.tools).map((l) => {
      let g = (0, import_chunk_w578pjby._)(l), S = Z(g);
      return { name: typeof l.name === "string" ? l.name : "unknown", hash: S, json: g };
    });
    n.setAttribute("tools", (0, import_chunk_w578pjby._)(f.map(({ name: l, hash: g }) => ({ name: l, hash: g })))), n.setAttribute("tools_count", f.length);
    for (let { name: l, hash: g, json: S } of f) if (!u.seenHashes.has(`tool_${g}`)) {
      u.seenHashes.add(`tool_${g}`);
      let { content: d, truncated: T } = e4(S);
      (0, import_chunk_xfr8663h.ql)("tool", { tool_name: (0, import_chunk_865at33z.hr)(l), tool_hash: g, tool: d, ...T && { tool_truncated: "true" } }, a);
    }
  } catch {
    n.setAttribute("tools_parse_error", true);
  }
  if (r && r.length > 0 && e?.querySource) {
    let h = e.querySource, f = u.lastReportedMessage.get(h), l = 0;
    if (f) {
      let T = r[f.index];
      if (T && it(T) === f.hash) l = f.index + 1;
    }
    let g = r.slice(l).filter((T) => T.type === "user" || T.type === "api_system");
    if (g.length > 0) {
      let T = O(), I = T ? c((C) => X(Dt(g, r, C), true)) : { value: X(g, false) }, { contextParts: L, systemReminders: M } = "withheld" in I ? Nt(g, (0, import_chunk_xfr8663h.jcn)(I.withheld)) : I.value;
      if (n.setAttribute("new_context_message_count", g.length), M.length > 0) n.setAttribute("system_reminders_count", M.length);
      if (L.length > 0 && T) {
        let C = L.join(`

---

`), { content: z, truncated: V } = e4(C);
        n.setAttributes({ new_context: z, ...V && { new_context_truncated: true, new_context_original_length: C.length } });
      }
      if (M.length > 0 && T) {
        let C = M.join(`

---

`), { content: z, truncated: V } = e4(C);
        n.setAttributes({ system_reminders: z, ...V && { system_reminders_truncated: true, system_reminders_original_length: C.length } });
      }
    }
    let S = r.length - 1, d = r[S];
    if (d) u.lastReportedMessage.set(h, { index: S, hash: it(d) });
  }
}
function pt(n, e) {
  if (!UH() || !O() || !e) return;
  let r = (o) => (0, import_chunk_xfr8663h.BYe)(e.accountMemoryKeys, e.querySource, o);
  if (e.modelOutput !== void 0) {
    let { content: o, truncated: a } = e4(r(e.modelOutput));
    if (n["response.model_output"] = o, a) n["response.model_output_truncated"] = true, n["response.model_output_original_length"] = e.modelOutput.length;
  }
}
function dt(n, e, r, o = false) {
  if (!UH() || !(0, import_chunk_865at33z.vh)()) return;
  let { content: a, truncated: u } = e4(`[TOOL INPUT: ${e}]
${o ? (0, import_chunk_xfr8663h.ZRe)(r) : r}`);
  n.setAttributes({ tool_input: a, ...u && { tool_input_truncated: true, tool_input_original_length: r.length } });
}
function ft(n, e, r, o = false) {
  if (!UH() || !(0, import_chunk_865at33z.Wzn)()) return;
  let { content: a, truncated: u } = e4(`[TOOL RESULT: ${e}]
${o ? (0, import_chunk_xfr8663h.ZRe)(r) : r}`);
  if (n.new_context = a, u) n.new_context_truncated = true, n.new_context_original_length = r.length;
}
class gt {
  recorder = null;
}
var Ft = new import_chunk_2904xtvq.j(() => new gt());
function E() {
  return Ft.of((0, import_chunk_f9x2f6cx.N)().host).recorder;
}
function lfl() {
  let n = import_chunk_c203g5kd.s.CLAUDE_CODE_PERFETTO_TRACE;
  (0, import_chunk_w578pjby.t)(`[Perfetto] initializePerfettoTracing called, env value: ${n}`);
}
function kkt() {
  return E() !== null;
}
function bho(n, e, r) {
  let o = E();
  if (!o) return;
  o.registerAgent(n, e, r);
}
function Ekt(n) {
  let e = E();
  if (!e) return;
  e.unregisterAgent(n);
}
function lt(n) {
  let e = E();
  if (!e) return "";
  return e.startLLMRequestSpan(n);
}
function mt(n, e) {
  let r = E();
  if (!r || !n) return;
  r.endLLMRequestSpan(n, e);
}
function ht(n, e) {
  let r = E();
  if (!r) return "";
  return r.startToolSpan(n, e);
}
function _t(n, e) {
  let r = E();
  if (!r || !n) return;
  r.endToolSpan(n, e);
}
function St(n) {
  let e = E();
  if (!e) return "";
  return e.startUserInputSpan(n);
}
function Tt(n, e) {
  let r = E();
  if (!r || !n) return;
  r.endUserInputSpan(n, e);
}
function bt(n, e, r) {
  let o = E();
  if (!o) return;
  o.emitInstant(n, e, r);
}
function yt(n) {
  let e = E();
  if (!e) return "";
  return e.startInteractionSpan(n);
}
function At(n) {
  let e = E();
  if (!e || !n) return;
  e.endInteractionSpan(n);
}
var x = /* @__PURE__ */ new WeakMap(), v = p.createContextKey("cc.interaction_state"), q = p.createContextKey("cc.tool_state"), U = p.createContextKey("cc.blocked_state"), Q = p.createContextKey("cc.execution_state"), vt = p.createContextKey("cc.subagent_state"), xt = p.createContextKey("cc.turn_trace_contexts");
class Rt {
  lastSequence = 0;
}
var Ht = new import_chunk_2904xtvq.j(() => new Rt());
function pSr() {
  let n = process.env.CLAUDE_CODE_ENHANCED_TELEMETRY_BETA ?? process.env.ENABLE_ENHANCED_TELEMETRY_BETA;
  if ((0, import_chunk_69qhefwa.Ne)(n)) return true;
  if ((0, import_chunk_69qhefwa.Oi)(n)) return false;
  return false;
}
function eZ() {
  return pSr() || UH();
}
function Sit() {
  return false;
}
function who(n, e) {
  return;
}
function jFn(n, e) {
  n.setStatus(H(e));
}
function Pt(n, e) {
  if (!e) return;
  n.setAttribute("tool_use_id", e), n.setAttribute("gen_ai.tool.call.id", e);
}
function Wt(n) {
  switch (n) {
    case "bedrock":
    case "mantle":
      return "aws.bedrock";
    case "vertex":
      return "gcp.vertex_ai";
    case "firstParty":
    case "anthropicAws":
    case "anthropicGoogleCloud":
    case "foundry":
    case "gateway":
      return "anthropic";
  }
}
function aV() {
  return (0, import_chunk_xfr8663h.UYe)() || (0, import_chunk_2zeyvjwb.aIo)();
}
function Kt() {
  let n = {}, e = (0, import_chunk_f9x2f6cx.W)();
  if (B.test(e)) n["session.id"] = e;
  let r = import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (r !== void 0 && B.test(r)) n["ccr.session.id"] = r;
  return n;
}
function Mt() {
  return { ...(0, import_chunk_xfr8663h.UYe)() ? Kt() : (0, import_chunk_xfr8663h.HWn)(), "gen_ai.provider.name": Wt((0, import_chunk_zhr7rpv7.ve)()) };
}
var zt = /* @__PURE__ */ new Set(["rpc.service", "mcp_tool"]), B = /^[A-Za-z0-9_.-]{1,64}$/, Et = { [import_chunk_epy4sc29.bd]: /^[a-z][a-z0-9_]{0,39}$/, [import_chunk_epy4sc29.Ll]: /^[A-Za-z][A-Za-z0-9_]{0,39}$/, playwright: /^browser_[a-z_]{1,40}$/ };
function jt(n) {
  if (n.startsWith("mcp__")) {
    let [, e, ...r] = n.split("__"), o = e !== void 0 && Object.hasOwn(Et, e) ? Et[e] : void 0;
    return o !== void 0 && o.test(r.join("__")) && B.test(n) ? n : "mcp_other";
  }
  return !n.includes("__") && B.test(n) && !(0, import_chunk_865at33z.KRs)(n) ? n : "other";
}
function Vt(n) {
  let e = (0, import_chunk_865at33z.uNe)(n)?.replaceAll(":", ".");
  return e !== void 0 && B.test(e) ? e : void 0;
}
var Yt = /^[A-Za-z][A-Za-z0-9_]{0,47}$/;
function et(n, e) {
  let r = e?.replace(/[^A-Za-z0-9_]/g, "_");
  return { ...n !== void 0 && !aV() && { error: n }, ...r !== void 0 && Yt.test(r) && { error_class: r } };
}
function zMi(n) {
  return `${n.name} (${n.message.length} chars; text not recorded)`;
}
function H(n) {
  return { code: p.SpanStatusCode.ERROR, ...n && !aV() && { message: n } };
}
function A() {
  return p.trace.getTracer("com.anthropic.claude_code.tracing", "1.0.0");
}
function y() {
  return (0, import_chunk_xfr8663h.Zws)();
}
function k(n) {
  let e = y().getValue(n);
  return e && !e.ended ? e : void 0;
}
function R(n, e) {
  x.set(e.span, e);
  let r = p.trace.setSpan(e.priorContext, e.span).setValue(n, e);
  if (import_chunk_xfr8663h.WYe.enterWith(r), n === v) (0, import_chunk_xfr8663h.wji)(r);
}
function P(n, e) {
  if (e.ended = true, n === v && (0, import_chunk_xfr8663h.kji)()?.getValue(n) === e) (0, import_chunk_xfr8663h.wji)(void 0);
  if (y().getValue(n) === e) import_chunk_xfr8663h.WYe.enterWith(e.priorContext);
}
function w(n, e = {}) {
  return { ...Mt(), "span.type": n, ...e };
}
function Gt(n) {
  if (!n) return [];
  return n.linked.flatMap(({ traceparent: e }) => {
    let r = wt(e);
    return r ? [{ context: r, attributes: { "link.type": "queued_send" } }] : [];
  });
}
function nt() {
  return y().getValue(xt);
}
function dfl() {
  return nt()?.contexts;
}
function m0e() {
  let n = nt();
  return (0, import_chunk_f9x2f6cx.st)() && (0, import_chunk_zhr7rpv7.ve)() === "firstParty" && (0, import_chunk_zhr7rpv7.v3)() && !(0, import_chunk_zhr7rpv7.pc)() ? n?.contexts?.parent?.traceparent ?? n?.fallbackTraceparent : void 0;
}
function rhs() {
  let n = nt();
  if (n) n.contexts = void 0;
}
function Ct(n, e) {
  if ((0, import_chunk_865at33z.mp)(e)) return;
  let r = e.agentId !== void 0 ? (0, import_chunk_xfr8663h.vTr)(e.agentId) : void 0;
  if (r !== void 0) n.setAttribute("agent_id", r);
  let o = e.parentAgentId !== void 0 ? (0, import_chunk_xfr8663h.vTr)(e.parentAgentId) : void 0;
  if (o !== void 0) n.setAttribute("parent_agent_id", o);
}
function tt() {
  let n = (0, import_chunk_f9x2f6cx.W)();
  return !(0, import_chunk_xfr8663h.UYe)() || B.test(n) ? { "gen_ai.conversation.id": n } : {};
}
function F(n) {
  switch (n.agentType) {
    case "main":
      return tt();
    case "subagent": {
      if (n.isMainSession) return tt();
      let e = (0, import_chunk_xfr8663h.vTr)(n.agentId);
      return e !== void 0 ? { "gen_ai.conversation.id": e } : {};
    }
    case "teammate":
      return {};
  }
}
function Xt(n, e) {
  let { text: r, origin: o } = typeof n === "string" ? { text: n, origin: void 0 } : n, a = kkt() ? yt(r) : void 0, u = y();
  if (!eZ()) {
    if (a) {
      let M = p.trace.getActiveSpan() || A().startSpan("dummy");
      return R(v, { span: M, startTime: performance.now(), attributes: { "span.type": "interaction" }, perfettoSpanId: a, priorContext: u }), M;
    }
    return p.trace.getActiveSpan() || A().startSpan("dummy");
  }
  let c = A(), m = o1(), h = m ? "<REDACTED>" : kt(r, o), f = ++Ht.of((0, import_chunk_f9x2f6cx.N)().host).lastSequence, l = w("interaction", { "gen_ai.operation.name": "invoke_agent", ...tt(), user_prompt: h, user_prompt_length: m ? 0 : r.length, "interaction.sequence": f }), g = (0, import_chunk_xfr8663h.UYe)() ? e : void 0, S = g?.parent ? K.extract(u, { traceparent: g.parent.traceparent }, p.defaultTextMapGetter) : u, d = S === u && (0, import_chunk_f9x2f6cx.Se)() && import_chunk_c203g5kd.s.TRACEPARENT ? p.propagation.extract(u, { traceparent: import_chunk_c203g5kd.s.TRACEPARENT, tracestate: import_chunk_c203g5kd.s.TRACESTATE }) : u, T = S !== u ? S : d;
  l["parent.source"] = S !== u ? "event" : d !== u ? "env" : "none";
  let I = Gt(g);
  l.queued_sends = I.length;
  let L = c.startSpan("claude_code.interaction", { attributes: l, links: I }, T);
  if (!aV() && !m) J(L, r);
  return R(v, { span: L, startTime: performance.now(), attributes: l, perfettoSpanId: a, priorContext: u, promptHandle: Symbol("interaction prompt"), isPromptHeld: m, promptOrigin: o }), L;
}
function kt(n, e) {
  return import_chunk_c203g5kd.s.OTEL_LOG_USER_PROMPTS && !aV() ? (0, import_chunk_xfr8663h.Eji)(n, e) : "<REDACTED>";
}
function mSr() {
  return k(v)?.promptHandle;
}
function VMi(n, e, r) {
  let o = k(v);
  if (n === void 0 || o?.promptHandle !== n || o.isPromptHeld !== true && r === e) return;
  if (o.isPromptHeld = r === void 0, o.span.setAttributes({ user_prompt: r === void 0 ? "<REDACTED>" : kt(r, o.promptOrigin), user_prompt_length: r?.length ?? 0 }), !aV()) J(o.span, r ?? "<REDACTED>");
}
function kho(n, e, r) {
  let [o, a] = typeof e === "function" ? [void 0, e] : [e, r];
  return Zt(o, () => {
    let u = y();
    Xt(n, o);
    let c = y();
    try {
      return import_chunk_xfr8663h.WYe.with(c, a);
    } finally {
      if (y() === c) import_chunk_xfr8663h.WYe.enterWith(u);
    }
  });
}
function Zt(n, e, r) {
  let o = { contexts: n, fallbackTraceparent: r };
  return import_chunk_xfr8663h.WYe.with(y().setValue(xt, o), e);
}
function h8e() {
  let n = k(v);
  if (!n) return;
  if (n.perfettoSpanId) At(n.perfettoSpanId);
  if (!eZ()) {
    P(v, n);
    return;
  }
  let e = Math.max(0, Math.round(performance.now() - n.startTime));
  n.span.setAttributes({ "interaction.duration_ms": e }), n.span.end(), P(v, n);
}
function ohs(n, e, r, o, a, u, c) {
  let m = kkt() ? lt({ model: n, querySource: u ?? r?.querySource, messageId: void 0 }) : void 0, h = y();
  if (!eZ()) {
    if (m) {
      let I = p.trace.getActiveSpan() || A().startSpan("dummy");
      return x.set(I, { span: I, startTime: performance.now(), attributes: { model: n }, perfettoSpanId: m, priorContext: h }), I;
    }
    return p.trace.getActiveSpan() || A().startSpan("dummy");
  }
  let f = A(), l = y().getValue(q), g = (0, import_chunk_xfr8663h.UYe)() ? (0, import_chunk_zmb62hr5.ur)(n) : n, S = w("llm_request", { model: g, "gen_ai.system": "anthropic", "gen_ai.request.model": g, "llm_request.context": l ? "tool" : k(v) ? "interaction" : "standalone", speed: a ? "fast" : "normal", ...e && F(e) }), d = f.startSpan("claude_code.llm_request", { attributes: S }, h);
  if (r?.querySource && !aV()) d.setAttribute("query_source", r.querySource);
  let T = Vt(u ?? r?.querySource);
  if (T !== void 0) d.setAttribute("query_source_safe", T);
  if (e && !(0, import_chunk_865at33z.mp)(e)) {
    if (Ct(d, e), !aV()) d.setAttributes((0, import_chunk_865at33z.aPr)(e));
  }
  if (!aV()) ct(d, r, o, c, e);
  return x.set(d, { span: d, startTime: performance.now(), attributes: S, perfettoSpanId: m, priorContext: h }), d;
}
function shs(n, { attempt: e, clientRequestId: r }) {
  let o = { attempt: e };
  if (r !== void 0) o.client_request_id = r;
  if (n && eZ()) n.addEvent("gen_ai.request.attempt", o);
  bt("LLM Attempt", "api,attempt", o);
}
var K = new It.W3CTraceContextPropagator();
function wt(n) {
  let e = K.extract(p.ROOT_CONTEXT, { traceparent: n }, p.defaultTextMapGetter);
  return p.trace.getSpanContext(e);
}
function hSr(n, e) {
  if (!n) return;
  let r = x.get(n);
  if (!r || r.ended) return;
  r.ended = true;
  let o = Math.max(0, Math.round(performance.now() - r.startTime));
  if (e?.error !== void 0) e = { ...e, error: (0, import_chunk_xfr8663h.BYe)(e.accountMemoryKeys ?? (() => (0, import_chunk_xfr8663h.Nvt)((0, import_chunk_f9x2f6cx.N)().host)), e.querySource, e.error) };
  if (r.perfettoSpanId) mt(r.perfettoSpanId, { ttftMs: e?.ttftMs, ttltMs: o, promptTokens: e?.inputTokens, outputTokens: e?.outputTokens, cacheReadTokens: e?.cacheReadTokens, cacheCreationTokens: e?.cacheCreationTokens, success: e?.success, error: e?.error, requestSetupMs: e?.requestSetupMs, attemptStartTimes: e?.attemptStartTimes, requestId: e?.requestId, clientRequestId: e?.clientRequestId });
  if (!eZ()) return;
  let a = { duration_ms: o };
  if (e) {
    if (e.inputTokens !== void 0) a.input_tokens = e.inputTokens;
    if (e.outputTokens !== void 0) a.output_tokens = e.outputTokens;
    if (e.cacheReadTokens !== void 0) a.cache_read_tokens = e.cacheReadTokens;
    if (e.cacheCreationTokens !== void 0) a.cache_creation_tokens = e.cacheCreationTokens;
    if (e.success !== void 0) a.success = e.success;
    if (e.statusCode !== void 0) a.status_code = e.statusCode;
    if (Object.assign(a, et(e.error, e.errorClass)), e.attempt !== void 0) a.attempt = e.attempt;
    if (e.hasToolCall !== void 0) a["response.has_tool_call"] = e.hasToolCall;
    if (e.requestId !== void 0) a.request_id = e.requestId, a["gen_ai.response.id"] = e.requestId;
    if (e.clientRequestId !== void 0) a.client_request_id = e.clientRequestId;
    if (e.ttftMs !== void 0) a.ttft_ms = e.ttftMs;
    if (e.firstContentMs !== void 0) a.first_content_ms = e.firstContentMs;
    if (e.effort !== void 0) a.effort = e.effort;
    if (!aV()) pt(a, e);
  }
  if (r.span.setAttributes(a), e?.stopReason !== void 0) r.span.setAttribute("stop_reason", e.stopReason), r.span.setAttribute("gen_ai.response.finish_reasons", [e.stopReason]);
  if (e?.success === false) r.span.setStatus(H(e.error));
  if (e?.traceresponse) {
    let u = wt(e.traceresponse);
    if (u) r.span.addLink({ context: u, attributes: { "link.type": "parent_of" } });
  }
  r.span.end();
}
function cfl(n, e, r, o, a, u = false) {
  let c = kkt() ? ht(n, r) : void 0, m = y();
  if (!eZ()) {
    if (c) {
      let T = p.trace.getActiveSpan() || A().startSpan("dummy");
      return R(q, { span: T, startTime: performance.now(), attributes: { "span.type": "tool", tool_name: n }, perfettoSpanId: c, priorContext: m }), T;
    }
    return p.trace.getActiveSpan() || A().startSpan("dummy");
  }
  let h = A(), f = jt(n), l = aV() ? f : n, g = (0, import_chunk_865at33z.HNe)(l), S = w("tool", { tool_name: l, tool_name_safe: f, "gen_ai.operation.name": "execute_tool", "gen_ai.tool.name": g?.mcpToolName ?? l, ...g && { "anthropic.mcp.server.name": g.serverName }, ...e && F(e), ...r }), d = h.startSpan("claude_code.tool", { attributes: S }, m);
  if (e && !(0, import_chunk_865at33z.mp)(e)) {
    if (Ct(d, e), !aV()) d.setAttributes((0, import_chunk_865at33z.aPr)(e));
  }
  if (Pt(d, a), o && !aV()) dt(d, n, o, u);
  return R(q, { span: d, startTime: performance.now(), attributes: S, perfettoSpanId: c, priorContext: m }), d;
}
function ufl(n) {
  let e = kkt() ? St("tool_permission") : void 0, r = y();
  if (!eZ()) {
    if (e) {
      let c = p.trace.getActiveSpan() || A().startSpan("dummy");
      return R(U, { span: c, startTime: performance.now(), attributes: { "span.type": "tool.blocked_on_user" }, perfettoSpanId: e, priorContext: r }), c;
    }
    return p.trace.getActiveSpan() || A().startSpan("dummy");
  }
  let o = A(), a = w("tool.blocked_on_user", F(n)), u = o.startSpan("claude_code.tool.blocked_on_user", { attributes: a }, r);
  return R(U, { span: u, startTime: performance.now(), attributes: a, perfettoSpanId: e, priorContext: r }), u;
}
function ffl(n, e) {
  let r = k(U);
  if (!r) return;
  if (r.perfettoSpanId) Tt(r.perfettoSpanId, { decision: n, source: e });
  if (!eZ()) {
    P(U, r);
    return;
  }
  let a = { duration_ms: Math.max(0, Math.round(performance.now() - r.startTime)) };
  if (n) a.decision = n;
  if (e) a.source = e;
  r.span.setAttributes(a), r.span.end(), P(U, r);
}
function pfl(n, e) {
  let r = y();
  if (!eZ()) return p.trace.getActiveSpan() || A().startSpan("dummy");
  let o = A(), a = w("tool.execution", F(n)), u = o.startSpan("claude_code.tool.execution", { attributes: a }, r);
  return Pt(u, e), R(Q, { span: u, startTime: performance.now(), attributes: a, priorContext: r }), u;
}
function ihs(n) {
  if (!eZ()) return;
  let e = k(Q);
  if (!e) return;
  let o = { duration_ms: Math.max(0, Math.round(performance.now() - e.startTime)) };
  if (n) {
    if (n.success !== void 0) o.success = n.success;
    if (n.success === false && !n.interrupted) o["error.type"] = "tool_error";
    Object.assign(o, et(n.error, n.errorClass));
  }
  if (e.span.setAttributes(o), n?.success === false) e.span.setStatus(H(n.error));
  e.span.end(), P(Q, e);
}
function g8e(n, e, r, o = false) {
  let a = n ? x.get(n) : k(q);
  if (!a || a.ended) return;
  if (a.perfettoSpanId) _t(a.perfettoSpanId, { success: true, resultTokens: r });
  if (!eZ()) {
    P(q, a);
    return;
  }
  let c = { duration_ms: Math.max(0, Math.round(performance.now() - a.startTime)) };
  if (e && true && !aV()) {
    let m = a.attributes.tool_name || "unknown";
    ft(c, m, e, o);
  }
  if (r !== void 0) c.result_tokens = r;
  a.span.setAttributes(c), a.span.end(), P(q, a);
}
function KMi(n) {
  return eZ() && (0, import_chunk_865at33z.Wzn)() && !aV() && n.isRecording();
}
function mfl(n) {
  if (typeof n === "string") return n;
  if (!Array.isArray(n)) return "";
  return n.map((e) => e?.type === "text" ? String(e.text) : `[${String(e?.type ?? "unknown")}]`).join(`
`);
}
function qMi(n, e, r) {
  if (!KMi(n)) return;
  let o = x.get(n);
  if (!o || o.ended) return;
  let a = {};
  for (let [u, c] of Object.entries(r)) if (typeof c === "string") {
    let { content: m, truncated: h } = e4(c);
    if (a[u] = m, h) a[`${u}_truncated`] = true, a[`${u}_original_length`] = c.length;
  } else a[u] = c;
  o.span.addEvent(e, a);
}
function YMi(n) {
  if (!eZ()) return;
  let e = n.spanContext();
  if (!e.traceId || e.traceId === "00000000000000000000000000000000") return;
  let r = p.trace.setSpan(p.context.active(), n), o = {};
  return K.inject(r, o, p.defaultTextMapSetter), o.traceparent;
}
function TBt(n) {
  let e = eZ() ? p.trace.getSpan(y()) : void 0;
  return (e && YMi(e)) ?? (n !== void 0 && (0, import_chunk_2mwshd9r.Yu)(n) ? m0e() : void 0);
}
function hfl(n) {
  if (!n || !eZ()) return;
  let e = y(), r = K.extract(e, { traceparent: n }, p.defaultTextMapGetter);
  return r === e ? void 0 : r;
}
function gfl(n, e) {
  return n === void 0 ? e() : import_chunk_xfr8663h.WYe.with(n, e);
}
function Eho(n, e) {
  if (!Sit()) return;
  return A().startSpan(n, { attributes: { ...Mt(), "span.type": e.spanType, ...aV() ? (0, import_chunk_xcgcdx61.mi)(e.attrs ?? {}, (r, o) => zt.has(o)) : e.attrs, ...!aV() && e.contentAttrs } }, y());
}
async function _fl(n, e, r) {
  let o = Eho(n, e);
  if (!o) return r(void 0);
  let a = p.trace.setSpan(y(), o);
  return import_chunk_xfr8663h.WYe.with(a, async () => {
    try {
      return await r(o);
    } catch (u) {
      if (!e.isExpectedError?.(u)) {
        let c = u instanceof Error && e.withholdErrorText?.(u) ? zMi(u) : void 0;
        if (u instanceof Error && !aV()) o.recordException(c === void 0 ? u : { name: u.name, message: c });
        jFn(o, c ?? (u instanceof Error ? u.message : String(u)));
      }
      throw u;
    } finally {
      o.end();
    }
  });
}
function yfl(n) {
  if (!Sit()) return;
  let e = y(), r = (0, import_chunk_xfr8663h.vTr)(n.agentId), o = n.parentAgentId !== void 0 ? (0, import_chunk_xfr8663h.vTr)(n.parentAgentId) : void 0, a = w("subagent.spawn", { ...r !== void 0 && { agent_id: r }, agent_type: aV() && !n.isBuiltIn ? "custom" : n.agentType, ...o !== void 0 && { parent_agent_id: o } }), u = A().startSpan("claude_code.subagent.spawn", { attributes: a }, e);
  return R(vt, { span: u, startTime: performance.now(), attributes: a, priorContext: e }), u;
}
function Sfl(n, e) {
  if (!n) return;
  let r = x.get(n);
  if (!r || r.ended) return;
  if (e?.success !== void 0) n.setAttribute("success", e.success);
  if (e?.error) n.setAttributes(et(e.error, e.errorClass)), jFn(n, e.error);
  n.end(), P(vt, r);
}
function Lt() {
  return UH() || Sit();
}
function bfl(n, e, r, o, a) {
  if (!Lt()) return p.trace.getActiveSpan() || A().startSpan("dummy");
  let u = A(), c = y(), { content: m } = e4(o), h = w("hook", { ...F(a), hook_event: n, hook_name: aV() ? n : e, num_hooks: r, ...(0, import_chunk_865at33z.vh)() && !aV() && { hook_definitions: m } }), f = u.startSpan("claude_code.hook", { attributes: h }, c);
  return x.set(f, { span: f, startTime: performance.now(), attributes: h, priorContext: c }), f;
}
function wfl(n, e) {
  if (!Lt()) return;
  let r = x.get(n);
  if (!r || r.ended) return;
  r.ended = true;
  let a = { duration_ms: Math.max(0, Math.round(performance.now() - r.startTime)) };
  if (e) {
    if (e.numSuccess !== void 0) a.num_success = e.numSuccess;
    if (e.numBlocking !== void 0) a.num_blocking = e.numBlocking;
    if (e.numNonBlockingError !== void 0) a.num_non_blocking_error = e.numNonBlockingError;
    if (e.numCancelled !== void 0) a.num_cancelled = e.numCancelled;
  }
  if (r.span.setAttributes(a), e && (e.numNonBlockingError ?? 0) > 0) r.span.setStatus(H(`${e.numNonBlockingError} hook(s) failed`));
  r.span.end();
}
