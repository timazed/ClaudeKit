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
var chunk_r3e8vdzv_exports = {};
__export(chunk_r3e8vdzv_exports, {
  Eps: () => Eps,
  Jwt: () => Jwt,
  Kpo: () => Kpo,
  Vpo: () => Vpo,
  iyr: () => iyr,
  kps: () => kps,
  nOi: () => nOi,
  oj: () => oj,
  rOi: () => rOi,
  syr: () => syr,
  tdl: () => tdl,
  zsn: () => zsn
});
module.exports = __toCommonJS(chunk_r3e8vdzv_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_jg3mepas = require("/$bunfs/root/chunk-jg3mepas.js");
var import_chunk_wx7ffn80 = require("/$bunfs/root/chunk-wx7ffn80.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_cc0rj9gh = require("/$bunfs/root/chunk-cc0rj9gh.js");
var import_chunk_wc4p32em = require("/$bunfs/root/chunk-wc4p32em.js");
var import_chunk_tt4yhkc0 = require("/$bunfs/root/chunk-tt4yhkc0.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_crypto = require("crypto");
function kps(e) {
  let n = (0, import_crypto.createHash)("sha256");
  return (0, import_chunk_wc4p32em.Uje)([n], e), n.digest("base64url");
}
function nOi(e) {
  return e.decision_reason_type === "classifier" || e.decision_reason_code === "classifier_transcript_too_long" || (e.auto_modes_check_raised ?? false) !== false;
}
function oj(e) {
  for (let n of [e?.request_id, e?.suppressed_request_id, e?.cut_request_id]) if (typeof n === "string" && n.length > 0) return n;
  return;
}
var Vpo = 32, b = 4096, A = 32768, g = /* @__PURE__ */ new WeakMap(), v = 983040;
function Eps(e) {
  let n = (0, import_chunk_w578pjby._)(e), r = Buffer.byteLength(n, "utf8");
  for (let t = 0; t < n.length; t++) {
    let o = n.charCodeAt(t);
    if (o === 60 || o === 62 || o === 38) r += 5;
    else if (o === 8232 || o === 8233) r += 3;
  }
  return r;
}
var f = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap();
function S(e) {
  let n = k.get(e);
  if (n === void 0) n = kps(e.input ?? {}), k.set(e, n);
  return n;
}
function m(e, n) {
  let { display_tool_name: r, raw_command: t } = e, o = n ? e.input : void 0;
  return { tool_name: e.tool_name, ...r === void 0 ? {} : { display_tool_name: r.length <= 4 * import_chunk_tt4yhkc0.Yx ? r : p(r) }, action_description: p(e.action_description), ...t === void 0 ? {} : { raw_command: o === void 0 ? p(t) : t }, tool_use_id: e.tool_use_id, ...o === void 0 ? {} : { input: o }, request_id: e.request_id, ...e.suppressed_request_id === void 0 ? {} : { suppressed_request_id: e.suppressed_request_id }, ...e.cut_request_id === void 0 ? {} : { cut_request_id: e.cut_request_id }, ...e.blanked_for_size === void 0 ? {} : { blanked_for_size: e.blanked_for_size }, ...e.input_sha256 === void 0 ? {} : { input_sha256: e.input_sha256 }, ...o !== void 0 && e.consent_description !== void 0 && { consent_description: e.consent_description, ...e.default_to_no && { default_to_no: true } }, ...e.decision_reason_type === void 0 ? {} : { decision_reason_type: e.decision_reason_type }, ...e.decision_reason_code === void 0 ? {} : { decision_reason_code: e.decision_reason_code }, ...e.auto_modes_check_raised === true && { auto_modes_check_raised: true }, ...e.agent_id === void 0 ? {} : { agent_id: e.agent_id }, ...e.chrome_site === void 0 ? {} : { chrome_site: e.chrome_site }, ...e.asked_in_directory === void 0 ? {} : { asked_in_directory: (0, import_chunk_cc0rj9gh.LUt)(e.asked_in_directory) }, ...e.asked_of_plugin === void 0 ? {} : { asked_of_plugin: e.asked_of_plugin }, ...e.partner_connector === true && { partner_connector: true }, ...e.asked_mcp_skill !== void 0 ? { asked_mcp_skill: e.asked_mcp_skill } : void 0 };
}
function syr(e, n) {
  let r = A;
  return [e, ...n.slice(0, Vpo - 1).map((t) => {
    if (t.input === void 0) return m(t, false);
    let o = g.get(t);
    if (o === void 0) o = Buffer.byteLength((0, import_chunk_w578pjby._)(t.input), "utf8"), g.set(t, o);
    let a = o + Buffer.byteLength(t.raw_command ?? "", "utf8") + Buffer.byteLength(t.consent_description ?? "", "utf8"), d = o <= b && a <= r;
    if (d) r -= a;
    return m(t, d);
  })];
}
function p(e) {
  let n = (0, import_chunk_f64qna2j.Us)(e, import_chunk_tt4yhkc0.Yx);
  return n.length <= 4 * import_chunk_tt4yhkc0.Yx ? n : `${(0, import_chunk_7cfjrnwy.ee)(n, 4 * import_chunk_tt4yhkc0.Yx - 1)}\u2026`;
}
var w = "connector_file_fetch_started";
function tdl(e, n) {
  let r = e?.internal, t = (0, import_chunk_0jve1fep.Le)(r) ? r[w] : void 0;
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_STARTER_MAY_HOLD_CONNECTOR_FILE || t !== void 0 && t !== null && t !== false) return "held";
  return n && e?.readFailed === true ? "unread" : void 0;
}
function zsn(e) {
  switch (e?.cross_session_inbound) {
    case "unavailable":
      return { acceptsPeerMessages: false };
    case "available":
      return { acceptsPeerMessages: true };
    default:
      return;
  }
}
var R = "critical_path_wait_registered", Kpo = 6e4;
class iyr {
  stateChanged = (0, import_chunk_69qhefwa.Be)();
  pendingActionWritten = (0, import_chunk_69qhefwa.Be)();
  promptCutForSize = (0, import_chunk_69qhefwa.Be)();
  userDecisionPendingChanged = (0, import_chunk_69qhefwa.Be)();
  userDecisionsPending = 0;
  onStateChanged;
  getPendingActionDetails;
  leadsWithOldestCard = false;
  nextWorkerKeepsSubagentCard;
  slimsRefusedLead = false;
  slimLeadIdMember = "suppressed_request_id";
  oversizedLeadIs = () => "whole";
  maxPendingActionWriteBytes = v;
  refusedLeads = /* @__PURE__ */ new WeakSet();
  publishedLast;
  writtenSlim = /* @__PURE__ */ new WeakSet();
  emittedCutForSize = /* @__PURE__ */ new WeakSet();
  emittedCutForSizeCount = 0;
  storedAnswerStands = /* @__PURE__ */ new WeakSet();
  writtenLead;
  pendingActionLeadRequestId;
  heldRequiresAction;
  onWaitingOnUserChanged;
  onTurnStarting;
  onTurnBeganBeforeInit;
  onMetadataChanged;
  onInternalMetadataChanged;
  keepsSessionRules;
  onPermissionModeChanged;
  onProactivityLevelChanged;
  onActiveGoalChanged;
  onAutocompactInputsChanged;
  onConversationReset;
  currentState = "idle";
  hasPendingAction = false;
  hasTaskSummary = false;
  hasTerminalGoalSnapshot = false;
  currentTurn = {};
  turnChanged = (0, import_chunk_69qhefwa.Be)();
  mainLoopRefcount = 0;
  nestedBlockedChains = /* @__PURE__ */ Object.create(null);
  nestedBlockedChainCount = 0;
  droppedChainAgentIds = /* @__PURE__ */ Object.create(null);
  nestedChainUnparks = /* @__PURE__ */ Object.create(null);
  criticalPathWaitKeys = /* @__PURE__ */ Object.create(null);
  lastWaitingOnUser = false;
  chainExcessLogged = false;
  beginUserDecision() {
    if (this.userDecisionsPending += 1, this.userDecisionsPending === 1) Jwt(this.userDecisionPendingChanged, true);
  }
  get userDecisionPending() {
    return this.userDecisionsPending > 0;
  }
  endUserDecision() {
    if (this.userDecisionsPending === 0) return;
    if (this.userDecisionsPending -= 1, this.userDecisionsPending === 0) Jwt(this.userDecisionPendingChanged, false);
  }
  getState() {
    return this.currentState;
  }
  get waitingOnUser() {
    return this.currentState === "requires_action" && this.mainLoopRefcount - this.nestedBlockedChainCount <= 0;
  }
  setMainLoopRefcount(e) {
    if (this.mainLoopRefcount = e, e === 0) this.sweepOrphanedCriticalPathWaits();
    if (e > 0 && this.resumableOrphanedAgents.length > 0) this.restartNoticeShown = true;
    this.emitIfWaitingChanged();
  }
  sweepOrphanedCriticalPathWaits() {
    let e = Object.keys(this.criticalPathWaitKeys);
    if (e.length === 0) return;
    for (let n of e) if (delete this.criticalPathWaitKeys[n], this.nestedBlockedChains[n] !== void 0) {
      if (delete this.nestedBlockedChains[n], this.nestedBlockedChainCount > 0) this.nestedBlockedChainCount--;
    }
    (0, import_chunk_42tcgre6.q)("warn", "critical_path_wait_outlived_brackets", { swept: e.length, nested_blocked_chain_count: this.nestedBlockedChainCount, session_state: this.currentState });
  }
  emitIfWaitingChanged() {
    this.checkChainInvariant();
    let e = this.waitingOnUser;
    if (e !== this.lastWaitingOnUser) this.lastWaitingOnUser = e, this.onWaitingOnUserChanged?.(e);
  }
  checkChainInvariant() {
    if (this.nestedBlockedChainCount - this.mainLoopRefcount > 0) {
      if (!this.chainExcessLogged) this.chainExcessLogged = true, (0, import_chunk_42tcgre6.q)("warn", "nested_chain_count_exceeds_refcount", { nested_blocked_chain_count: this.nestedBlockedChainCount, main_loop_refcount: this.mainLoopRefcount, session_state: this.currentState });
    } else this.chainExcessLogged = false;
  }
  reteeWaitingOnUser() {
    this.onWaitingOnUserChanged?.(this.waitingOnUser);
  }
  notifyNestedPromptBlocking(e) {
    this.registerBlockedChain(e, true);
  }
  notifyCriticalPathWaitBlocking(e) {
    if (this.registerBlockedChain(e, false)) this.criticalPathWaitKeys[e] = true, (0, import_chunk_42tcgre6.q)("info", R, { nested_blocked_chain_count: this.nestedBlockedChainCount, main_loop_refcount: this.mainLoopRefcount, session_state: this.currentState });
  }
  notifyCriticalPathWaitUnblocking(e) {
    if (this.notifyNestedPromptUnblocking(e), this.nestedBlockedChains[e] === void 0) delete this.criticalPathWaitKeys[e];
  }
  registerBlockedChain(e, n) {
    if (import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_NESTED_CHAIN_IDLE) return false;
    if (this.droppedChainAgentIds[e]) return false;
    let r = this.nestedBlockedChains[e] ?? 0;
    this.nestedBlockedChains[e] = r + 1;
    let t = r === 0;
    if (t) {
      if (this.nestedBlockedChainCount++, n && this.nestedBlockedChainCount <= this.mainLoopRefcount) this.nestedChainUnparks[e] = (0, import_chunk_wx7ffn80.MV)();
    }
    return this.emitIfWaitingChanged(), t;
  }
  notifyNestedPromptUnblocking(e) {
    let n = (this.nestedBlockedChains[e] ?? 0) - 1;
    if (n > 0) this.nestedBlockedChains[e] = n;
    else if (this.nestedBlockedChains[e] !== void 0) this.removeChain(e);
    this.emitIfWaitingChanged();
  }
  removeChain(e) {
    delete this.nestedBlockedChains[e], this.nestedBlockedChainCount--, this.nestedChainUnparks[e]?.(), delete this.nestedChainUnparks[e];
  }
  dropNestedBlockedChain(e) {
    if (this.droppedChainAgentIds[e] = true, this.nestedBlockedChains[e] !== void 0) this.removeChain(e), this.emitIfWaitingChanged();
  }
  notifyTurnStarting(e, n) {
    this.onTurnStarting?.(e, n);
  }
  notifyTurnBeganBeforeInit() {
    this.onTurnBeganBeforeInit?.();
  }
  get turn() {
    return this.currentTurn;
  }
  openTurn() {
    if (!this.currentTurn.open) this.currentTurn = { open: { started_at: Date.now() } }, Jwt(this.turnChanged);
  }
  closeTurn() {
    if (this.currentTurn.open) this.currentTurn = {}, Jwt(this.turnChanged);
  }
  notifyStateChanged(e, n) {
    if (this.currentState = e, this.lastWaitingOnUser = this.waitingOnUser, this.onStateChanged?.(e, n), Jwt(this.stateChanged, e, n), e === "idle") this.closeTurn();
    if (e === "requires_action" && n) this.republishPendingAction(n);
    else if (this.hasPendingAction) this.hasPendingAction = false, this.pendingActionLeadRequestId = void 0, this.writtenLead = void 0, this.publishedLast = void 0, this.onMetadataChanged?.({ pending_action: null, pending_actions: null }), Jwt(this.pendingActionWritten, null);
    if (e === "running") this.wipeTurnScopedMetadata();
    if (e === "idle" && this.hasTaskSummary) this.hasTaskSummary = false, this.notifyMetadataChanged({ task_summary: null });
    if (import_chunk_c203g5kd.s.CLAUDE_CODE_EMIT_SESSION_STATE_EVENTS) (0, import_chunk_865at33z.Fs)({ type: "system", subtype: "session_state_changed", state: e });
    else if (import_chunk_c203g5kd.s.CLAUDE_CODE_SDK_READS_SESSION_STATE) (0, import_chunk_865at33z.Fs)({ type: "system", subtype: "session_state_changed", state: e, sdk_host_only: true });
  }
  republishPendingAction(e) {
    this.hasPendingAction = true, this.publishedLast = e;
    let { lead: n, patch: r } = this.pendingActionPatch(e);
    this.onMetadataChanged?.(r), Jwt(this.pendingActionWritten, n ?? null);
  }
  leadRecordRefused(e) {
    let n = this.writtenLead;
    if (n === void 0 || e.tool_use_id !== n.tool_use_id || oj(e) !== oj(n)) return false;
    if (this.storedAnswerStands.delete(n), !this.isSlimOnceRefused(n) || this.refusedLeads.has(n) || n.request_id !== "" && e.request_id === "") return false;
    return this.refusedLeads.add(n), this.republishPendingAction(this.publishedLast ?? n), true;
  }
  isSlimOnceRefused(e) {
    let n = this.slimsRefusedLead;
    return (typeof n === "function" ? n(e) : n) && !e.tool_name.startsWith("dialog:");
  }
  givesWay(e) {
    return this.slimLeadIdMember === "cut_request_id" && e.request_id !== "" && !this.refusedLeads.has(e);
  }
  forgetWrittenLead() {
    this.writtenLead = void 0;
  }
  noteStoredAnswerStands(e) {
    this.storedAnswerStands.add(e);
  }
  doesStoredAnswerStand(e) {
    return this.storedAnswerStands.has(e);
  }
  get promptsCutForSize() {
    return this.emittedCutForSizeCount;
  }
  isWrittenSlim(e) {
    return this.writtenSlim.has(e);
  }
  hostHoldsMessage = false;
  hostHoldsMessageChanged = (0, import_chunk_69qhefwa.Be)();
  setHostHoldsMessage(e) {
    this.hostHoldsMessage = e, this.hostHoldsMessageChanged.emit();
  }
  pendingTurnEndSummary;
  hostHoldsBridgeTurnEnd = false;
  followingSummary;
  keptSummary;
  holdTurnEndSummary(e, n) {
    let r = { promise: e, deadlineAt: n, settled: false, superseded: false, endedAt: void 0, ended: Promise.withResolvers() }, t = () => {
      r.settled = true;
    };
    return e.then(t, t), this.pendingTurnEndSummary = r, this.keptSummary = void 0, r;
  }
  turnEndSummaryOutstanding(e = performance.now()) {
    let n = this.pendingTurnEndSummary;
    return n !== void 0 && !n.settled && n.endedAt === void 0 && e < n.deadlineAt;
  }
  endTurnEndSummaryHold() {
    let e = this.pendingTurnEndSummary;
    if (e !== void 0 && this.turnEndSummaryOutstanding()) {
      if (!e.superseded) this.keptSummary = { held: e, summary: void 0 };
      e.superseded = true, e.endedAt = performance.now(), e.ended.resolve();
    }
  }
  supersedeTurnEndSummary() {
    this.keptSummary = void 0;
    let e = this.pendingTurnEndSummary;
    if (e !== void 0 && !e.settled) e.superseded = true;
  }
  keepDroppedSummary(e, n) {
    if (this.keptSummary?.held === e) this.keptSummary.summary = n;
  }
  takeKeptSummary() {
    let e = this.keptSummary;
    return this.keptSummary = void 0, e?.summary;
  }
  discardKeptSummary() {
    this.keptSummary = void 0;
  }
  waitForTurnEndSummary() {
    let e = this.pendingTurnEndSummary;
    if (e === void 0 || !this.turnEndSummaryOutstanding()) return;
    let n = new AbortController();
    return Promise.race([e.promise.catch(() => {
    }), e.ended.promise, (0, import_chunk_5appeerh.K)(Math.max(0, Math.ceil(e.deadlineAt - performance.now()) + 1), n.signal)]).finally(() => n.abort());
  }
  wipeTurnScopedMetadata() {
    if (this.supersedeTurnEndSummary(), this.onMetadataChanged?.({ post_turn_summary: null, recap: null }), this.hasTerminalGoalSnapshot) this.hasTerminalGoalSnapshot = false, this.onMetadataChanged?.({ goal: null });
  }
  adoptRestoredGoalSnapshot() {
    this.hasTerminalGoalSnapshot = true;
  }
  adoptRestoredPendingAction() {
    this.hasPendingAction = true;
  }
  pendingActionPatch(e) {
    let n = this.getPendingActionDetails?.(oj(e) ?? e.request_id) ?? [], r = /* @__PURE__ */ new Map();
    for (let t of n.includes(e) ? n : [...n, e]) {
      let o = this.refusedLeads.has(t) ? "slim" : this.ifItLedWhole(t, []);
      if (o !== "fits") r.set(t, o);
    }
    for (; ; ) {
      let { lead: t, gaveWay: o } = this.leadAmong(e, n, r);
      if (t === void 0) return this.noteWritten(t, r), { lead: t, patch: { pending_action: null, pending_actions: null } };
      let a = o ?? t, d = r.has(a) && (this.givesWay(a) || !this.isSlimOnceRefused(a)), l = [...o === void 0 ? [] : [o], ...n.filter((u) => u !== t && u !== o).reverse()].map((u) => u === o || d && r.has(u) && u.request_id ? this.slimCopy(u) : u), c = syr(r.has(t) ? this.slimCopy(t) : t, this.refusedLeads.has(t) && this.oversizedLeadIs(t) === "whole" ? l.map((u) => ({ ...u, input: void 0 })) : l), h = r.has(t) ? "fits" : this.ifItLedWhole(t, c.slice(1));
      if (h === "fits") return this.noteWritten(t, r, d ? r.keys() : [t]), { lead: t, patch: { pending_action: c[0], pending_actions: c } };
      r.set(t, h);
    }
  }
  noteWritten(e, n, r = n.keys()) {
    this.pendingActionLeadRequestId = oj(e), this.writtenLead = e;
    for (let t of r) {
      let o = n.get(t);
      if (o === void 0) continue;
      if (this.storedAnswerStands.delete(t), e !== void 0) this.writtenSlim.add(t);
      if (!this.refusedLeads.has(t) && !this.emittedCutForSize.has(t)) this.emittedCutForSize.add(t), this.emittedCutForSizeCount++, Jwt(this.promptCutForSize, t, o);
    }
  }
  oldestCardAmong(e, n, r) {
    if (!this.leadsWithOldestCard || !r.includes(n)) return;
    let t = e.filter((o) => !o.tool_name.startsWith("dialog:"));
    return t.find((o) => o.agent_id === void 0) ?? (n.tool_name.startsWith("dialog:") ? void 0 : t.find((o) => this.nextWorkerKeepsSubagentCard?.(o) ?? true) ?? t[0]);
  }
  usualLeadAmong(e, n, r) {
    return this.oldestCardAmong(e, n, r) ?? e.at(-1);
  }
  leadAmong(e, n, r) {
    let t = this.oldestCardAmong(n, e, n) ?? e, o = r.get(t) === "left out";
    if (!o && !(r.has(t) && this.givesWay(t))) return { lead: t };
    let a = this.usualLeadAmong(n.filter((d) => !r.has(d)), e, n) ?? this.usualLeadAmong(n.filter((d) => r.get(d) === "slim" && d.request_id === ""), e, n) ?? (o ? this.usualLeadAmong(n.filter((d) => r.get(d) !== "left out"), e, n) : t);
    return a === t ? { lead: a } : { lead: a, gaveWay: t };
  }
  ifItLedWhole(e, n) {
    let r = this.oversizedLeadIs(e);
    if (r === "whole") return "fits";
    let t = f.get(e);
    if (t === void 0) t = Eps(e), f.set(e, t);
    return 2 * t + Eps(n) <= this.maxPendingActionWriteBytes ? "fits" : r;
  }
  slimCopy(e) {
    let { display_tool_name: n, raw_command: r, action_description: t, ...o } = e, a = { ...o, ...typeof n === "string" && { display_tool_name: n }, ...typeof r === "string" && { raw_command: r }, action_description: typeof t === "string" ? t : "" }, d = a.display_tool_name === void 0 ? void 0 : p(a.display_tool_name), l = p(a.action_description);
    return { ...m(a, false), ...d !== void 0 && { display_tool_name: d }, action_description: l, raw_command: void 0, input: void 0, ...a.request_id && { request_id: "", [this.slimLeadIdMember]: a.request_id, blanked_for_size: true, input_sha256: S(e) }, ...a.request_id && this.slimLeadIdMember === "cut_request_id" && this.oversizedLeadIs(e) !== "whole" && e.raw_command === void 0 && d === e.display_tool_name && l === e.action_description && { shown_texts_whole: true } };
  }
  notifyMetadataChanged(e) {
    if ("post_turn_summary" in e) this.supersedeTurnEndSummary();
    if (this.onMetadataChanged?.(e), "is_ultracode_active" in e && this.onMetadataChanged) this.ultracodeActiveSent = e.is_ultracode_active === true, this.ultracodeActiveWritten = true;
    if ("goal" in e) this.hasTerminalGoalSnapshot = e.goal?.met === true;
    if ("task_summary" in e) {
      if (e.task_summary != null) this.hasTaskSummary = true;
      (0, import_chunk_865at33z.Fs)({ type: "system", subtype: "task_summary", detail: e.task_summary ?? null });
    }
    if ("artifacts" in e) (0, import_chunk_865at33z.Fs)({ type: "system", subtype: "session_metadata", metadata: { artifacts: e.artifacts?.map(({ type_id: n, ...r }) => r) ?? null } });
  }
  ultracodeActiveSent = false;
  ultracodeActiveWritten = false;
  ultracodeActivePatch(e) {
    return e === this.ultracodeActiveSent ? {} : { is_ultracode_active: e || null };
  }
  notifyUltracodeActive(e) {
    let n = this.ultracodeActivePatch(e);
    if ("is_ultracode_active" in n) this.notifyMetadataChanged(n);
  }
  settleUltracodeActive(e, n) {
    if (!this.ultracodeActiveWritten) this.ultracodeActiveSent = n?.readFailed === true ? void 0 : n?.external?.is_ultracode_active === true;
    this.notifyUltracodeActive(e);
  }
  workerPermissionModeRecordEnabled = false;
  get isWorkerPermissionModeRecordEnabled() {
    return this.workerPermissionModeRecordEnabled;
  }
  enableWorkerPermissionModeRecord() {
    this.workerPermissionModeRecordEnabled = true;
  }
  notifyPermissionModeChanged(e) {
    this.onPermissionModeChanged?.(e);
  }
  notifyProactivityLevelChanged() {
    this.onProactivityLevelChanged?.();
  }
  resumableOrphanedAgents = [];
  picturesToHide;
  restartNoticeShown = false;
  markResumableOrphanedAgentsToldAtTurnEnd() {
    if (this.restartNoticeShown && this.resumableOrphanedAgents.some((e) => e.told !== true)) {
      let e = this.resumableOrphanedAgents.map((n) => ({ ...n, told: true }));
      this.resumableOrphanedAgents = e, this.notifyInternalMetadataChanged({ resumable_orphaned_agents: e });
    }
  }
  writeAfterLossesAreTold = {};
  untoldFinishedTasks = [];
  recordUndeliveredFinishedTasks(e) {
    let n = this.writeAfterLossesAreTold;
    if ("finished_background_tasks_pending_notification" in n) n.finished_background_tasks_pending_notification = e;
    this.notifyInternalMetadataChanged({ finished_background_tasks_pending_notification: [...this.untoldFinishedTasks, ...e] });
  }
  noteLossesToldAtTurnEnd() {
    let e = this.writeAfterLossesAreTold;
    if (this.writeAfterLossesAreTold = {}, this.untoldFinishedTasks = [], Object.keys(e).length > 0) this.notifyInternalMetadataChanged(e);
  }
  notifyInternalMetadataChanged(e) {
    this.onInternalMetadataChanged?.(e);
  }
  notifyActiveGoalChanged(e) {
    this.onActiveGoalChanged?.(e);
  }
  notifyAutocompactInputsChanged() {
    this.onAutocompactInputsChanged?.();
  }
  notifyConversationReset() {
    this.onConversationReset?.();
  }
}
var C = /* @__PURE__ */ new Set(["local_bash", "monitor_mcp", "monitor_ws"]), T = "In this session every process left running is likely stopped a few minutes after each reply, so a command you re-create now will likely be stopped after your next reply too: run in the foreground, with a long enough `timeout`, any that must finish and can finish within the foreground maximum, and otherwise tell the user it will likely be stopped a few minutes after your reply.";
function rOi(e, n, r) {
  let t = [];
  if (e.length > 0) {
    let o = e.map((a) => `- ${(0, import_chunk_hr2stdq7.sn)(a.description || "(no description)")} (task ${(0, import_chunk_hr2stdq7.sn)(a.task_id)})`);
    t.push(`The following background tasks were running and are now stopped:
${o.join(`
`)}
${r ? `${r} Re-create anything else` : "Re-create them"} if still needed.${(0, import_chunk_jg3mepas.Ly)() && e.some((a) => C.has(a.task_type ?? "")) ? ` ${T}` : ""}`);
  }
  if (n.length > 0) {
    let o = n.map((l) => (0, import_chunk_f9x2f6cx.Y)() ? void 0 : l.output_file), a = n.map((l, c) => {
      let h = o[c], u = h ? `output: ${(0, import_chunk_hr2stdq7.sn)(h)}` : "no output file";
      return `- ${(0, import_chunk_hr2stdq7.sn)(l.description || "(no description)")} (task ${(0, import_chunk_hr2stdq7.sn)(l.task_id)}), status ${(0, import_chunk_hr2stdq7.sn)(l.status)}, ${u}`;
    }), d = o.some(Boolean) ? "Read the output file to get the result (it is gone if the restart replaced the container); they cannot be stopped or messaged." : "No output file was recorded for them, and they cannot be stopped or messaged; re-create them if still needed.";
    t.push(`These background tasks finished before the restart, but their results were not delivered to you:
${a.join(`
`)}
${d}`);
  }
  return `<system-reminder>
The container was restarted. ${t.join(`
`)}
</system-reminder>`;
}
function Jwt(e, ...n) {
  try {
    e.emit(...n);
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r);
  }
}
