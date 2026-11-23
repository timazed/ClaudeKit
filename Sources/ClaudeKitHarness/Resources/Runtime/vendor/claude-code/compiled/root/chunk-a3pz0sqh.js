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
var chunk_a3pz0sqh_exports = {};
__export(chunk_a3pz0sqh_exports, {
  $8l: () => $8l,
  AKs: () => AKs,
  B8l: () => B8l,
  CKs: () => CKs,
  G2o: () => G2o,
  RKs: () => RKs,
  U8l: () => U8l,
  W8l: () => W8l,
  j2o: () => j2o,
  j8l: () => j8l
});
module.exports = __toCommonJS(chunk_a3pz0sqh_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_0ha8wex8 = require("/$bunfs/root/chunk-0ha8wex8.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_jar84hn9 = require("/$bunfs/root/chunk-jar84hn9.js");
var import_chunk_xggvpcqr = require("/$bunfs/root/chunk-xggvpcqr.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_0vvtfqck = require("/$bunfs/root/chunk-0vvtfqck.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_bp9b0hd8 = require("/$bunfs/root/chunk-bp9b0hd8.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
(0, import_chunk_adx6804h.B)();
var z = "tengu_rc_thread_reply_gate";
function j2o() {
  return (0, import_chunk_865at33z.b)(z, true);
}
var H = "tengu_candid_wren", $8l = 5e3, U8l = 1e3, N = (0, import_chunk_px0hhsq7.lr)(import_chunk_epy4sc29.bd, "no_reply_needed"), Y = "rc_owner", A = 4, G = 64, F = (0, import_chunk_2cbgkbm2.p)(() => {
  let t = (0, import_chunk_adx6804h.n)().min(1).max(256), e = (0, import_chunk_adx6804h.n)().trim().min(1).max(4096), r = (0, import_chunk_adx6804h.Zc)().min(0).max(A);
  return (0, import_chunk_adx6804h.c)({ terminal_tools: (0, import_chunk_adx6804h.C)(t).min(1).max(G), ask_text: e, max_asks_after_person: r, max_asks_after_server_event: r, max_asks_after_own_task: r.optional(), skip_while_worker_out: (0, import_chunk_adx6804h.P)().optional(), max_asks_after_error: r.optional(), ask_texts_after_error: (0, import_chunk_adx6804h.he)(t, e).refine((o) => Object.keys(o).length <= G).optional(), skip_retry_while_server_down: (0, import_chunk_adx6804h.P)().optional(), status_nudge: (0, import_chunk_adx6804h.ie)().optional(), prompt_reminder: (0, import_chunk_adx6804h.ie)().optional() });
}), K = 60, J = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ seconds: (0, import_chunk_adx6804h.Zc)().min(1).max(86400), visible_tools: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().min(1).max(128)).min(1).max(32), text: (0, import_chunk_adx6804h.n)().trim().min(1).max(2048) })), V = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.n)().trim().min(1).max(2048));
function CKs(t) {
  let e = F().safeParse((0, import_chunk_0jve1fep.et)(t, false));
  if (!e.success) return { invalidField: (e.error.issues[0]?.path ?? []).filter((l, s) => s === 0 || typeof l === "number").join(".") };
  let r = J().safeParse(e.data.status_nudge), o = V().safeParse(e.data.prompt_reminder);
  return { policy: { terminalTools: e.data.terminal_tools, askText: e.data.ask_text, maxAsksAfterPerson: e.data.max_asks_after_person, maxAsksAfterServerEvent: e.data.max_asks_after_server_event, ...e.data.max_asks_after_own_task !== void 0 && { maxAsksAfterOwnTask: e.data.max_asks_after_own_task }, ...e.data.skip_while_worker_out !== void 0 && { skipWhileWorkerOut: e.data.skip_while_worker_out }, ...e.data.max_asks_after_error !== void 0 && { maxAsksAfterError: e.data.max_asks_after_error }, ...e.data.ask_texts_after_error !== void 0 && { askTextsAfterError: new Map(Object.entries(e.data.ask_texts_after_error)) }, ...e.data.skip_retry_while_server_down !== void 0 && { skipRetryWhileServerDown: e.data.skip_retry_while_server_down }, ...r.success && { statusNudge: { seconds: Math.max(K, r.data.seconds), visibleTools: r.data.visible_tools, text: r.data.text } }, ...o.success && { promptReminder: o.data } }, unreadBlocks: [...e.data.status_nudge !== void 0 && !r.success ? ["status_nudge"] : [], ...e.data.prompt_reminder !== void 0 && !o.success ? ["prompt_reminder"] : []] };
}
function AKs(t, e) {
  let r = "longerThan" in e ? `its text is over the limit of ${e.longerThan} characters` : e.invalidField === "" ? "it is not a JSON object" : `its ${e.invalidField} is missing or invalid`;
  return `ignoring ${t}: ${r}, so Claude will not be re-prompted when a turn ends without a reply tool call`;
}
var X = [import_chunk_060xwhvh._t, import_chunk_060xwhvh.Df, import_chunk_jar84hn9.xc], q = /* @__PURE__ */ new Set(["max_tokens", "model_context_window_exceeded", "pause_turn", "refusal"]);
function G2o(t) {
  let e = t.mcp.clients.find((r) => r.name === import_chunk_epy4sc29.bd);
  return e !== void 0 && e.type === "connected" && (0, import_chunk_qdcbcsg7.Pl)(e.config);
}
async function B8l(t, e, r) {
  if (!j2o()) return;
  let o = performance.now(), l = await (0, import_chunk_5appeerh.me)(t.then(() => true), r);
  (0, import_chunk_y53wbr8a.a)("tengu_bridge_projects_mount_wait", { waited_ms: Math.round(performance.now() - o), settled: l === true, connected: G2o(e()) });
}
function RKs(t) {
  let e = (0, import_chunk_865at33z.PE)(t).decider, r = e === null ? void 0 : t[e.index];
  if (e === null || r === void 0) return false;
  return (g(r)?.startsWith(import_chunk_0ha8wex8.cVt) === true || j(r)) && !k(t.slice(e.index + 1), import_chunk_epy4sc29.DVn).answered;
}
function W8l(t, e, r, o) {
  let l = (0, import_chunk_865at33z.PE)(t).decider, s = 0, i = l;
  while (i !== null) {
    let u = t[i.index];
    if (g(u)?.startsWith(import_chunk_0ha8wex8.cVt) === true) s++;
    else if (r.kind !== "policy" || u === void 0 || !(0, import_chunk_0ha8wex8.q1)(u)) break;
    i = (0, import_chunk_865at33z.PE)(t.slice(0, i.index)).decider;
  }
  let _ = i === null ? void 0 : t[i.index], d = Q(_, i), T = d === "person", E = Z(r, _, d);
  if (s === 0 && E === 0) return o?.({ verdict: "skip", why: "not_held", opener: d }), { kind: "skip" };
  let w = [...t.slice(l === null ? 0 : l.index + 1), ...e];
  if (!w.some(L)) return o?.({ verdict: "skip", why: "no_completion", opener: d }), { kind: "skip" };
  let R = [...t.slice(i === null ? 0 : i.index + 1), ...e], f = r.kind === "policy" ? R : w, O = r.kind === "remote_control" && (R.some((u) => u.type === "assistant" && u.message.content.some((v) => v.type === "tool_use" && r.workOutFrom.has(v.id))) || (0, import_chunk_865at33z.b)(H, false) === true), { answered: W, noReplyOnly: I, erroredTerminalTool: S, firstErroredAt: M } = k(f, r.kind === "policy" ? r.policy.terminalTools : O ? import_chunk_epy4sc29.DVn : import_chunk_epy4sc29.T7i);
  if (W) return o?.({ verdict: "answered", opener: d }), { kind: "answered", noReplyOnly: I, personOpened: T };
  if (r.kind === "policy" && r.replMode === true) return o?.({ verdict: "skip", why: "repl_mode", opener: d }), { kind: "skip" };
  if (r.kind === "policy" && ((0, import_chunk_bzyb60p0._g)(e)?.isApiErrorMessage === true || q.has(w.findLast(L)?.message.stop_reason ?? null))) return o?.({ verdict: "skip", why: "unclean_stop", opener: d }), { kind: "skip" };
  if (r.kind === "policy" && r.policy.skipWhileWorkerOut === true && r.coordinatorMode === true && r.workerStillRunning === true && (d === "own_task" || i !== null && k(f, X).answered)) return o?.({ verdict: "skip", why: "worker_out", opener: d }), { kind: "skip" };
  let m = S !== void 0 ? "reply_errored" : "silent_turn", y = r.kind === "policy" && r.policy.maxAsksAfterError !== void 0 && M !== void 0 ? { used: (0, import_chunk_4smdap7r.U)(f.slice(M + 1), (u) => g(u)?.startsWith(import_chunk_0ha8wex8.cVt) === true), cap: r.policy.maxAsksAfterError, cap_of: "after_error" } : { used: s, cap: E, cap_of: "opener" }, h = y.used >= y.cap ? y : s >= A ? { used: s, cap: A, cap_of: "turn" } : void 0;
  if (h !== void 0 && s === 0) return o?.({ verdict: "skip", why: "no_ask_after_error", opener: d }), { kind: "skip" };
  if (h !== void 0) return o?.({ verdict: "still_silent", reason: m, opener: d, ...h }), { kind: "still_silent", reason: m, personOpened: T };
  o?.({ verdict: "bounce", reason: m, opener: d, ...y });
  let x = r.kind === "remote_control" && m === "silent_turn" && k(f, import_chunk_epy4sc29.HVn).answered;
  return { kind: "bounce", reason: m, text: `${import_chunk_0ha8wex8.cVt} ${ee(r, S, O, x)}`, personOpened: T, ...x && { afterChecklist: x } };
}
function Z(t, e, r) {
  switch (t.kind) {
    case "remote_control":
      return e !== void 0 && j(e) ? 1 : 0;
    case "policy":
      switch (r) {
        case "person":
          return t.policy.maxAsksAfterPerson;
        case "own_task":
          return t.policy.maxAsksAfterOwnTask ?? t.policy.maxAsksAfterServerEvent;
        case "other":
          return t.policy.maxAsksAfterServerEvent;
      }
  }
}
function Q(t, e) {
  if (t !== void 0 && (e?.userDriven === true || D(t))) return "person";
  return (0, import_chunk_xfj2cwfv.cze)(e?.origin, t?.type === "user" ? t[import_chunk_865at33z.fke] : void 0) ? "own_task" : "other";
}
function j8l(t, e, r) {
  let o = r.filter((s) => s.type === "failed" || s.type === "needs-auth" || s.type === "disabled"), l = e.filter((s) => t.terminalTools.some((i) => (0, import_chunk_4vsz8a99.gt)(s, i)));
  return l.length > 0 && l.every((s) => s.isMcp === true && o.some((i) => (0, import_chunk_px0hhsq7.Bu)(s, i.name)));
}
function ee(t, e, r, o) {
  switch (t.kind) {
    case "remote_control":
      return e !== void 0 ? `Your \`${e}\` call this turn returned an error, so it did not reach the project thread. Call \`${t.toolNames.reply}\` again with what the thread should see, or \`${N}\` if no reply is warranted.` : `Your last turn ended without a reply to the project thread: plain text is not delivered there${o ? ", and a checklist is not a reply" : ""}. Call \`${t.toolNames.reply}\` now with what the thread should see, ${r ? `\`${t.toolNames.status}\` if you dispatched work that reports back later, ` : ""}or \`${N}\` if no reply is warranted.`;
    case "policy":
      return (e !== void 0 ? t.policy.askTextsAfterError?.get(e) : void 0) ?? t.policy.askText;
  }
}
function L(t) {
  return t.type === "assistant" && t.message.model !== import_chunk_bp9b0hd8.xs;
}
function g(t) {
  return t?.type === "user" && t.isMeta === true && typeof t.message.content === "string" ? t.message.content : void 0;
}
function j(t) {
  if (D(t)) return true;
  if (t.type !== "user") return false;
  let e = t.message.content, r = typeof e === "string" ? e : e[0]?.type === "text" ? e[0].text : void 0;
  if (r === void 0) return false;
  let o = (0, import_chunk_xggvpcqr.lUe)(r);
  return o !== null && (0, import_chunk_xggvpcqr.Igt)(o) && o.data.sender_kind === Y;
}
function D(t) {
  return t.type === "attachment" ? t.attachment.type === "queued_command" && t.attachment.projectsUserTurn === true : t.type === "user" && t.projectsUserTurn === true;
}
function k(t, e) {
  let r = /* @__PURE__ */ new Set();
  for (let i of t) {
    if (i.type !== "user" || !Array.isArray(i.message.content)) continue;
    for (let _ of i.message.content) if (_.type === "tool_result" && _.is_error === true) r.add(_.tool_use_id);
  }
  let o = false, l, s;
  for (let [i, _] of t.entries()) {
    if (_.type !== "assistant") continue;
    for (let d of _.message.content) {
      if (d.type !== "tool_use" || !e.includes(d.name)) continue;
      if (r.has(d.id)) {
        l = d.name, s ??= i;
        continue;
      }
      if (!d.name.endsWith(import_chunk_0vvtfqck.UFn)) return { answered: true, noReplyOnly: false, erroredTerminalTool: void 0, firstErroredAt: void 0 };
      o = true;
    }
  }
  return { answered: o, noReplyOnly: o, erroredTerminalTool: o ? void 0 : l, firstErroredAt: o ? void 0 : s };
}
