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
  var E2 = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m, _2) {
    return _2 = Error(m), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s2, _2;
  };
  var fail = (e) => error = hasError ? new E2(e, error, "An error was suppressed during disposal") : (hasError = true, e);
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
var chunk_4yjj7pjs_exports = {};
__export(chunk_4yjj7pjs_exports, {
  $ss: () => $ss,
  $yi: () => $yi,
  AHn: () => AHn,
  Afr: () => Afr,
  An: () => An,
  Aq: () => Aq,
  Bss: () => Bss,
  CHn: () => CHn,
  EH: () => EH,
  Fss: () => Fss,
  Fyi: () => Fyi,
  Jtn: () => Jtn,
  LO: () => LO,
  Lss: () => Lss,
  NO: () => NO,
  Nss: () => Nss,
  Nyi: () => Nyi,
  PHn: () => PHn,
  Py: () => Py,
  Qtn: () => Qtn,
  RHn: () => RHn,
  Rfr: () => Rfr,
  SFt: () => SFt,
  SYa: () => SYa,
  THn: () => THn,
  Uss: () => Uss,
  XSt: () => XSt,
  Xtn: () => Xtn,
  YSt: () => YSt,
  Ytn: () => Ytn,
  Z3e: () => Z3e,
  aG: () => aG,
  bFt: () => bFt,
  bYa: () => bYa,
  dae: () => dae,
  dot: () => dot,
  e5e: () => e5e,
  eU: () => eU,
  eso: () => eso,
  kH: () => kH,
  lw: () => lw,
  nso: () => nso,
  qSt: () => qSt,
  rso: () => rso,
  tso: () => tso,
  vHn: () => vHn,
  xHn: () => xHn,
  yYa: () => yYa
});
module.exports = __toCommonJS(chunk_4yjj7pjs_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_4f4ysf31 = require("/$bunfs/root/chunk-4f4ysf31.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var import_chunk_z6hn62tj = require("/$bunfs/root/chunk-z6hn62tj.js");
var import_chunk_w71cxznt = require("/$bunfs/root/chunk-w71cxznt.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
class R {
  liveProcessesByAgentId = /* @__PURE__ */ new Map();
  leftoversByAgentId = /* @__PURE__ */ new Map();
  stopPendingAgentIds = /* @__PURE__ */ new Set();
  everRegisteredTaskIds = /* @__PURE__ */ new Set();
  loopsByTaskId = /* @__PURE__ */ new Map();
  pendingEscalationsByTaskId = /* @__PURE__ */ new Map();
  inFlightProcessSweeps = /* @__PURE__ */ new Set();
  dispose() {
    for (let e of this.pendingEscalationsByTaskId.values()) for (let n of e.timers) clearTimeout(n);
    this.pendingEscalationsByTaskId.clear(), this.inFlightProcessSweeps.clear(), this.loopsByTaskId.clear(), this.everRegisteredTaskIds.clear(), this.liveProcessesByAgentId.clear(), this.leftoversByAgentId.clear(), this.stopPendingAgentIds.clear();
  }
}
var B = new import_chunk_2904xtvq.j(() => new R());
function aG() {
  return (0, import_chunk_f9x2f6cx.kr)(B);
}
function eso(e) {
  return aG().everRegisteredTaskIds.has(e);
}
function Ytn(e, n, r = {}) {
  let { everRegisteredTaskIds: a, loopsByTaskId: o } = aG();
  a.add(e);
  let d = o.get(e);
  if (d) o.delete(e), T(d);
  let c = { killController: n, agentControllersByAgentId: /* @__PURE__ */ new Map(), settleCallbacks: [], settleRequiresEmptyAgentAssociations: r.settleRequiresEmptyAgentAssociations ?? false, chainSettled: false };
  return o.set(e, c), () => {
    if (o.get(e) !== c) return;
    if (c.chainSettled = true, c.settleRequiresEmptyAgentAssociations && c.agentControllersByAgentId.size > 0) return;
    o.delete(e), T(c);
  };
}
function T(e) {
  for (let n of e.settleCallbacks) try {
    n();
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r);
  }
}
function kH(e) {
  return !aG().loopsByTaskId.has(e);
}
function SFt(e) {
  return aG().loopsByTaskId.get(e);
}
function vHn(e, n) {
  let r = aG().loopsByTaskId.get(e);
  if (!r) {
    try {
      n();
    } catch (a) {
      (0, import_chunk_k449cc64.i)(a);
    }
    return;
  }
  r.settleCallbacks.push(n);
}
function tso(e) {
  return aG().loopsByTaskId.get(e)?.killController;
}
function nso(e, n, r) {
  aG().loopsByTaskId.get(e)?.agentControllersByAgentId.set(n, r);
}
function yYa(e, n) {
  let { loopsByTaskId: r } = aG(), a = r.get(e);
  if (!a) return;
  if (a.agentControllersByAgentId.delete(n), a.chainSettled && a.settleRequiresEmptyAgentAssociations && a.agentControllersByAgentId.size === 0) r.delete(e), T(a);
}
function qSt(e) {
  let n = aG().loopsByTaskId.get(e);
  return n ? [...n.agentControllersByAgentId.keys()] : [];
}
function Xtn(e) {
  let n = aG().loopsByTaskId.get(e);
  if (!n) return [];
  let r = [];
  for (let a of n.agentControllersByAgentId.values()) if (a && !a.signal.aborted) r.push(a);
  return r;
}
function Aq(e) {
  return e.type === "local_agent" && e.status === "completed" && "agentType" in e && e.agentType !== "main-session" && "isBackgrounded" in e && e.isBackgrounded === true && !("isObserver" in e && e.isObserver === true) && !("evictAfter" in e && e.evictAfter === 0) && "chatEngaged" in e && e.chatEngaged === true && !("chatPinForfeited" in e && e.chatPinForfeited === true);
}
var M = 200, k = 100, E = "tengu_memoized_turtle", w = 3600;
function Lss() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION ?? M;
}
function C({ refillsByDefault: e }) {
  let n = import_chunk_c203g5kd.s.CLAUDE_CODE_WEB_SEARCH_REFILLS_PER_HOUR;
  if (n !== void 0) return n;
  if (!e) return 0;
  let { getFeatureValue_CACHED_MAY_BE_STALE: r } = require("/$bunfs/root/chunk-vgvexp78.js"), a = r(E, k), o = typeof a === "string" && /^\d+$/.test(a) ? Number(a) : a;
  if (typeof o === "number" && Number.isInteger(o) && o >= 0 && o <= w) return o;
  return (0, import_chunk_w578pjby.t)(`WebSearch budget: ignoring the served ${E} value ${(0, import_chunk_w578pjby._)(a)} (not an integer from 0 to ${w}); using ${k} refills per hour`, { level: "warn" }), k;
}
var O = 4, S = 36e5;
function P({ refillsByDefault: e, now: n = () => Date.now() }) {
  let r = 0, a = 0, o = n(), d = C({ refillsByDefault: e });
  function c() {
    let p = n(), u = C({ refillsByDefault: e }), l = Math.min(u, d);
    d = u;
    let f = Math.max(0, p - o);
    if (o = p, r === 0) {
      a = 0;
      return;
    }
    a += f * l;
    let m = Math.floor(a / S);
    if (m >= r) {
      r = 0, a = 0;
      return;
    }
    r -= m, a -= m * S;
  }
  return { tryConsume() {
    if (c(), r >= Lss()) return false;
    return r++, true;
  }, msUntilNextCall() {
    c();
    let p = r - Lss();
    if (p < 0) return 0;
    if (d === 0) return 1 / 0;
    let u = (p + 1) * S - a;
    return Math.max(1, Math.ceil(u / d));
  }, refillsPerHour() {
    return d;
  }, acquireDirectSearchSlot: (0, import_chunk_w71cxznt.kLe)(O).acquire };
}
var bFt = [], L = /* @__PURE__ */ new Set(), YSt = { messages: bFt, inProgressToolUseIDs: L };
function THn(e, n) {
  return e.size === 0 && n.size > 0 ? { inProgressToolUseIDs: n, toolWindowStartTime: Date.now() } : { inProgressToolUseIDs: n };
}
function Nss(e, n, r) {
  let a = e[n] ?? YSt, o = a.inProgressToolUseIDs, d;
  switch (r.action) {
    case "add": {
      d = new Set(o);
      for (let c of r.ids) d.add(c);
      break;
    }
    case "remove": {
      d = new Set(o);
      for (let c of r.ids) d.delete(c);
      if (d.size === o.size) return e;
      break;
    }
    case "clear":
      if (o.size === 0) return e;
      d = /* @__PURE__ */ new Set();
      break;
    default:
      return e;
  }
  return { ...e, [n]: { ...a, ...THn(o, d) } };
}
function CHn(e) {
  return (0, import_chunk_z6hn62tj.lSr)(e) && !(0, import_chunk_f9x2f6cx.st)();
}
var y = 16, AHn = 5e3, v = 300;
function I(e, n) {
  let r = (0, import_chunk_trwykz8a.mn)().tokenReadings.get(e.id) ?? { readings: [], dueAt: e.startTime + v }, a = Math.floor((n - r.dueAt) / AHn) + 1;
  if (!(a > 0)) return r;
  return { readings: [...r.readings, ...Array(Math.min(a, y)).fill(e.progress?.tokenCount ?? 0)].slice(-y), dueAt: r.dueAt + a * AHn };
}
function b(e, n, r) {
  if (e.evictAfter === 0 || n.evictAfter === 0 || Aq(e)) h(n.id, r);
  else if (e.progress?.tokenCount !== n.progress?.tokenCount) (0, import_chunk_trwykz8a.mn)().tokenReadings.set(n.id, I(e, r));
}
function h(e, n) {
  (0, import_chunk_trwykz8a.mn)().tokenReadings.set(e, { readings: [], dueAt: n + v });
}
function rso(e, n) {
  let { readings: r, dueAt: a } = I(e, n);
  return [...n - (a - AHn) < AHn / 2 ? r.slice(0, -1) : r, e.progress?.tokenCount ?? 0].slice(-y);
}
var RHn = 3e3, eU = 3e4, Jtn = 3e4;
function Afr(e, n) {
  for (let r of Object.values(e)) if (r.id !== n && (r.type === "in_process_teammate" || r.type === "local_agent" && r.agentType !== "main-session") && !(0, import_chunk_ed372ykp.$o)(r.status) && !r.isIdle) return true;
  return false;
}
function Py(e, n, { refillWebSearchBudgetByDefault: r = false } = {}) {
  let a;
  return { register(o) {
    z(o, n);
  }, update(o, d) {
    D(o, n, d);
  }, updateTranscript(o, d) {
    n((c) => {
      let p = (0, import_chunk_z6hn62tj.d8e)(c.transcripts, o) ?? YSt, u = d(p);
      if (u === p) return c;
      return { ...c, transcripts: { ...c.transcripts, [o]: u } };
    });
  }, getTranscript(o) {
    return (0, import_chunk_z6hn62tj.d8e)(e().transcripts, o);
  }, remove(o) {
    (0, import_chunk_trwykz8a.mn)().taskEvicted.emit(o), n((d) => {
      if (!Object.hasOwn(d.tasks, o)) return d;
      let { [o]: c, ...p } = d.tasks, u = d.transcripts ?? {}, { [o]: l, ...f } = u;
      return { ...d, tasks: p, transcripts: o in u ? f : u };
    });
  }, evictTerminal(o) {
    K(o, n);
  }, applyOffsetsAndEvict(o, d) {
    q(n, o, d);
  }, get(o) {
    return (0, import_chunk_z6hn62tj.d8e)(e().tasks, o);
  }, all() {
    return e().tasks;
  }, getWebSearchBudget() {
    return a ??= P({ refillsByDefault: r });
  }, resetWebSearchBudget() {
    a = void 0;
  }, takeConcurrencySlot() {
    n((d) => ({ ...d, runningSubagents: d.runningSubagents + 1 }));
    let o = false;
    return () => {
      if (o) return;
      o = true, n((d) => {
        let c = Math.max(0, d.runningSubagents - 1);
        if (c === d.runningSubagents) return d;
        return { ...d, runningSubagents: c };
      });
    };
  }, getConcurrentSubagents() {
    return e().runningSubagents;
  } };
}
function g(e) {
  return e.type === "local_agent" || e.type === "in_process_teammate";
}
function D(e, n, r) {
  var _stack = [];
  try {
    let a = null, o = null, d = false;
    const c = __using(_stack, (0, import_chunk_865at33z.ARl)());
    if (n((p) => {
      let u = (0, import_chunk_z6hn62tj.d8e)(p.tasks, e);
      if (!u) return p;
      let l = r(u);
      if (l === u) return p;
      if (a = U(u, l), g(u) && g(l)) b(u, l, Date.now());
      if (d = (0, import_chunk_r3kja8v6.ue)() && (0, import_chunk_z6hn62tj.SBt)(l) || (0, import_chunk_z6hn62tj.Kf)(l), !(0, import_chunk_ed372ykp.$o)(u.status) && (0, import_chunk_ed372ykp.$o)(l.status)) o = { status: l.status === "completed" ? "completed" : l.status === "failed" && !l.terminal?.hosts_read_stopped ? "failed" : "stopped", opts: { toolUseId: l.toolUseId, summary: l.terminal?.summary ?? l.description, summaryIsReport: l.terminal?.summary_is_report, failureKind: (0, import_chunk_865at33z.jCo)(l.terminal) ?? (l.terminal?.hosts_read_stopped ? "stopped" : void 0), outputFile: "webFetchSavedFiles" in l && l.webFetchSavedFiles !== void 0 ? void 0 : l.terminal?.output_file ?? l.outputFile, usage: l.terminal?.usage, resourceLinks: l.terminal?.resource_links, result: l.terminal?.result, handback: l.terminal?.handback, handbackReport: l.terminal?.handback_report, workflowProgress: l.terminal?.workflow_progress, workflowProgressOmitted: l.terminal?.workflow_progress_omitted, skipTranscript: l.skipTranscript, ambient: (0, import_chunk_z6hn62tj.lj)(l) } };
      return { ...p, tasks: { ...p.tasks, [e]: l } };
    }), o === null) c.release();
    if (a !== null && !d) {
      let p = { type: "system", subtype: "task_updated", task_id: e, run_id: (0, import_chunk_trwykz8a.WR)(e), patch: a };
      (0, import_chunk_865at33z.Fs)((0, import_chunk_865at33z.Gfn)(p, o?.opts?.failureKind));
    }
    if (o !== null && !d) (0, import_chunk_865at33z.dk)(e, o.status, o.opts);
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function U(e, n) {
  let r = {};
  if (n.status !== e.status) r.status = n.terminal?.hosts_read_stopped ? "killed" : n.status;
  if (n.description !== e.description) r.description = n.description;
  if (n.endTime !== e.endTime) r.end_time = n.endTime;
  if (n.totalPausedMs !== e.totalPausedMs) r.total_paused_ms = n.totalPausedMs;
  let a = "error" in e ? e.error : void 0, o = "error" in n ? n.error : void 0;
  if (o !== a && o !== void 0) r.error = o;
  let d = "isBackgrounded" in e ? e.isBackgrounded : void 0, c = "isBackgrounded" in n ? n.isBackgrounded : void 0;
  if (c !== d && c !== void 0) r.is_backgrounded = c;
  return Object.keys(r).length > 0 ? r : null;
}
function N(e) {
  if (e.type === "local_bash") return "agentId" in e && e.agentId !== void 0 ? true : void 0;
  return;
}
function W(e, n) {
  if (e.type !== "local_agent") return false;
  for (let r of ["parentAgentId", "ownerAgentId"]) {
    let a = r in e ? e[r] : void 0;
    if (typeof a !== "string" || !Object.hasOwn(n, a)) continue;
    if (n[a].chatPinForfeited === true) return true;
  }
  return false;
}
function H(e) {
  let n = e.type === "local_agent" && "agentId" in e ? e.agentId : void 0;
  return typeof n === "string" && (0, import_chunk_trwykz8a.mn)().chatPinForfeitedAgentIds.has(n);
}
function Nyi(e, n) {
  return W(e, n) || H(e);
}
function z(e, n) {
  let a = (0, import_chunk_865at33z.iKi)(e.id) && !(0, import_chunk_ed372ykp.$o)(e.status);
  if (a || !(0, import_chunk_trwykz8a.mn)().runIds.has(e.id)) (0, import_chunk_trwykz8a.SPo)(e.id);
  let o = false, d = e, c;
  if (n((p) => {
    let u = p.tasks[e.id];
    if (o = u !== void 0, g(e)) if (u !== void 0 && g(u)) b(u, e, Date.now());
    else h(e.id, Date.now());
    let l = u && "retain" in u ? { ...e, retain: u.retain, startTime: u.startTime, diskLoaded: u.diskLoaded, pendingMessages: u.pendingMessages, keepaliveReasons: u.keepaliveReasons, ownerAgentId: u.ownerAgentId, parentAgentId: u.parentAgentId, ...u.startedUnderUseCase !== e.startedUnderUseCase && { startedUnderUseCase: void 0 }, ...u.spawnDepth !== void 0 && { spawnDepth: u.spawnDepth }, ...u.isObserver !== void 0 && { isObserver: u.isObserver }, ...u.forkedSkillName !== void 0 && { forkedSkillName: u.forkedSkillName }, ...u.chatEngaged !== void 0 && { chatEngaged: u.chatEngaged }, ...u.chatPinForfeited !== void 0 && { chatPinForfeited: u.chatPinForfeited }, ...u.userStopCount !== void 0 && { userStopCount: u.userStopCount }, ...u.handbackRecipient !== void 0 && { handbackRecipient: u.handbackRecipient }, ...u.status === "completed" && u.waitingNoticeRecipient !== void 0 && { waitingNoticeRecipient: u.waitingNoticeRecipient, waitingNoticeText: u.waitingNoticeText }, ...u.status === "completed" && u.askers !== void 0 && { askers: u.askers }, ...u.ownerCanContinueAgents !== void 0 && { ownerCanContinueAgents: u.ownerCanContinueAgents }, ...u.handbackReport !== void 0 && { handbackReport: u.handbackReport }, ...u.webFetchSavedFiles !== void 0 && { webFetchSavedFiles: u.webFetchSavedFiles }, ...u.spawnedSubagent !== void 0 && { spawnedSubagent: u.spawnedSubagent }, ..."progress" in u && u.progress !== void 0 && { progress: u.progress } } : Nyi(e, p.tasks) ? { ...e, chatPinForfeited: true } : e;
    return d = l, c = (0, import_chunk_z6hn62tj.uho)(l, p.tasks), { ...p, tasks: { ...p.tasks, [e.id]: l } };
  }), o && !a) return;
  if ((0, import_chunk_r3kja8v6.ue)() && (0, import_chunk_z6hn62tj.SBt)(e) || (0, import_chunk_z6hn62tj.Kf)(e)) return;
  if (CHn(e)) return;
  (0, import_chunk_865at33z.Fs)({ type: "system", subtype: "task_started", task_id: e.id, run_id: (0, import_chunk_trwykz8a.WR)(e.id), owned_by_subagent: N(e), tool_use_id: e.toolUseId, description: e.description, subagent_type: (0, import_chunk_z6hn62tj._it)(e), is_backgrounded: "isBackgrounded" in d ? d.isBackgrounded : void 0, ...(0, import_chunk_z6hn62tj.fho)(d) && { awaited: true }, spawn_depth: "spawnDepth" in d ? d.spawnDepth : void 0, parent_task_id: c, task_type: e.type, workflow_name: "workflowName" in e ? e.workflowName : void 0, prompt: "prompt" in e && !(e.type === "local_agent" && e.promptIsNotice) ? e.prompt : void 0, skip_transcript: e.skipTranscript, ...(0, import_chunk_z6hn62tj.lj)(e) && { ambient: true } });
}
function x(e) {
  if (!(0, import_chunk_ed372ykp.$o)(e.status) || !e.notified) return false;
  let n = Date.now();
  if ("retain" in e) return (e.evictAfter ?? 1 / 0) <= n && !e.keepaliveReasons?.size;
  if (e.type === "local_workflow") return (e.evictAfter ?? 0) <= n && kH(e.id);
  if (e.type === "mcp_task") return (e.endTime ?? 0) + eU <= n;
  return true;
}
function K(e, n) {
  let r = false;
  if (n((a) => {
    let o = (0, import_chunk_z6hn62tj.d8e)(a.tasks, e);
    if (!o || !x(o)) return a;
    r = true;
    let { [e]: d, ...c } = a.tasks, p = a.transcripts ?? {}, { [e]: u, ...l } = p;
    return { ...a, tasks: c, transcripts: e in p ? l : p };
  }), r) (0, import_chunk_w578pjby.t)(`evictTerminalTask: evicted task ${e}`), (0, import_chunk_trwykz8a.mn)().taskEvicted.emit(e);
}
function dae(e) {
  let n = e.tasks ?? {};
  return Object.values(n).filter((r) => r.status === "running");
}
async function Fss(e) {
  let n = [], r = {}, a = [];
  for (let o of Object.values(e)) {
    if (o.notified) switch (o.status) {
      case "completed":
      case "failed":
      case "killed":
        if (Aq(o)) continue;
        a.push(o.id);
        continue;
      case "pending":
        continue;
      case "running":
        break;
    }
    if (o.status === "running" && o.outputFile !== void 0 && !(o.type === "local_bash" && o.elsewhere)) {
      let d = await (0, import_chunk_4f4ysf31.kDi)(o.id, o.outputOffset);
      if (d.content) r[o.id] = d.newOffset;
    }
  }
  return { attachments: n, updatedTaskOffsets: r, evictedTaskIds: a };
}
var SYa = "tengu_splendid_zephyr", A = /* @__PURE__ */ new WeakSet();
async function bYa(e) {
  if (A.has(e)) return;
  A.add(e);
  try {
    let { updatedTaskOffsets: n } = await Fss(e.all());
    e.applyOffsetsAndEvict(n, []);
  } catch (n) {
    (0, import_chunk_k449cc64.i)(n);
  } finally {
    A.delete(e);
  }
}
function q(e, n, r) {
  let a = Object.keys(n);
  if (a.length === 0 && r.length === 0) return;
  let o = [];
  e((d) => {
    let c = false, p = { ...d.tasks };
    for (let l of a) {
      let f = p[l];
      if (f?.status === "running") p[l] = { ...f, outputOffset: n[l] }, c = true;
    }
    for (let l of r) {
      let f = p[l];
      if (!f || !x(f)) continue;
      delete p[l], (0, import_chunk_865at33z.iKi)(l), o.push(l), c = true;
    }
    if (!c) return d;
    let u;
    for (let l of o) if (d.transcripts && l in d.transcripts) u ??= { ...d.transcripts }, delete u[l];
    return { ...d, tasks: p, ...u && { transcripts: u } };
  });
  for (let d of o) (0, import_chunk_w578pjby.t)(`applyTaskOffsetsAndEvictions: evicted task ${d}`), (0, import_chunk_trwykz8a.mn)().taskEvicted.emit(d);
}
function An(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "local_agent";
}
function lw(e) {
  return An(e) && e.agentType !== "main-session" && !e.forkWorker;
}
function xHn(e) {
  return lw(e) && e.evictAfter !== 0;
}
function $ss(e, n) {
  return An(e) && e.status === "running" && !e.isBackgrounded && e.parentAgentId === n;
}
function PHn(e) {
  return $ss(e, void 0);
}
function Fyi(e) {
  return PHn(e) && e.autoBackgroundArmed === true && e.directCall === true;
}
function Z3e(e, { userInitiated: n = false } = {}) {
  if (!An(e)) return false;
  if (n) return true;
  return e.stoppedByUser !== true && (e.status === "running" || e.status === "completed");
}
function Rfr(e) {
  return An(e) ? e.userStopCount ?? 0 : 0;
}
function dot(e, n) {
  if (!An(e)) return false;
  let r = Rfr(e);
  return (n ?? e.pendingMessages).some((a) => a.userInitiatedAt === r);
}
var Uss = "kill-unsettled";
function $yi(e) {
  return (0, import_chunk_r3kja8v6.ue)() ? `repl:${e}` : "";
}
function XSt(e) {
  return (0, import_chunk_r3kja8v6.ue)() && e.startsWith("repl:");
}
function e5e(e) {
  let { parkedTeardowns: n, mainThreadContexts: r } = (0, import_chunk_trwykz8a.mn)();
  r.delete(e);
  let a = n.get(e);
  if (a !== void 0) n.delete(e), a();
}
function Qtn(e, n) {
  let r = n.get(e);
  if (An(r) && LO(r).size === 0 && (0, import_chunk_ed372ykp.$o)(r.status) && r.resuming !== true && r.finalizing !== true) e5e(e);
}
function LO(e) {
  return e.keepaliveReasons ?? /* @__PURE__ */ new Set();
}
function EH(e, n, r) {
  if (!e) return;
  r.update(e, (a) => {
    if (!An(a) || LO(a).has(n)) return a;
    return { ...a, keepaliveReasons: new Set(LO(a)).add(n) };
  });
}
function NO(e, n, r) {
  if (!e) return;
  let a = r.get(e), o = An(a) && LO(a).has(n);
  if (r.update(e, (d) => {
    if (!An(d) || !LO(d).has(n)) return d;
    let c = new Set(LO(d));
    c.delete(n);
    let p = Aq(d), u = c.size === 0 && (0, import_chunk_ed372ykp.$o)(d.status) && !d.retain && !p;
    return { ...d, keepaliveReasons: c, ...c.size === 0 && p && d.quietlyParked === true && { quietlyParked: false }, ...u && d.evictAfter === void 0 && { evictAfter: Date.now() + eU } };
  }), o) Qtn(e, r);
}
function Bss(e) {
  return Aq(e) ? void 0 : Date.now() + eU;
}
