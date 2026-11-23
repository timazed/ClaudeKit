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
var chunk_z6hn62tj_exports = {};
__export(chunk_z6hn62tj_exports, {
  $ul: () => $ul,
  BAe: () => BAe,
  Fin: () => Fin,
  Ful: () => Ful,
  Jms: () => Jms,
  Kf: () => Kf,
  Nin: () => Nin,
  OMi: () => OMi,
  Ope: () => Ope,
  PMi: () => PMi,
  Ppe: () => Ppe,
  Qms: () => Qms,
  RMi: () => RMi,
  SBt: () => SBt,
  Skt: () => Skt,
  Xm: () => Xm,
  Xms: () => Xms,
  Yms: () => Yms,
  ZQ: () => ZQ,
  _it: () => _it,
  bBt: () => bBt,
  bkt: () => bkt,
  c8e: () => c8e,
  d8e: () => d8e,
  dre: () => dre,
  f0e: () => f0e,
  fho: () => fho,
  lSr: () => lSr,
  lj: () => lj,
  lre: () => lre,
  p0e: () => p0e,
  pho: () => pho,
  qms: () => qms,
  u8e: () => u8e,
  uho: () => uho,
  uy: () => uy,
  xMi: () => xMi,
  yBt: () => yBt
});
module.exports = __toCommonJS(chunk_z6hn62tj_exports);
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
function Xm(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "in_process_teammate";
}
function Ful(e) {
  let t = "";
  for (let n of Object.values(e)) if (Xm(n)) t += `${n.id}:${n.status};`;
  return t;
}
function RMi(e) {
  return e.status === "running" && !e.isIdle && e.currentWorkAbortController !== void 0;
}
function qms(e) {
  if (!RMi(e)) return false;
  return e.currentWorkAbortController?.abort(), true;
}
function Yms(e) {
  return e.awaitingPlanApproval || e.pendingUserMessages.length > 0;
}
var Xms = 50;
function yBt(e, t) {
  if (e === void 0 || e.length === 0) return [t];
  if (e.length >= Xms) {
    let n = e.slice(-(Xms - 1));
    return n.push(t), n;
  }
  return [...e, t];
}
function $ul(e, t) {
  let n = e === void 0 || e.every((r) => r.uuid !== t.uuid) ? e : e.filter((r) => r.uuid !== t.uuid);
  return yBt(n, t);
}
var p = { tryConsume() {
  return true;
}, msUntilNextCall() {
  return 0;
}, refillsPerHour() {
  return 0;
}, async acquireDirectSearchSlot() {
  return () => {
  };
} }, Ppe = { register() {
}, update() {
}, updateTranscript() {
}, getTranscript() {
  return;
}, remove() {
}, evictTerminal() {
}, applyOffsetsAndEvict() {
}, get() {
  return;
}, all() {
  return {};
}, getWebSearchBudget() {
  return p;
}, resetWebSearchBudget() {
}, takeConcurrencySlot() {
  return () => {
  };
}, getConcurrentSubagents() {
  return 0;
} };
function d8e(e, t) {
  return e !== void 0 && Object.hasOwn(e, t) ? e[t] : void 0;
}
var xMi = { local_agent: "subagent", local_workflow: "workflow", local_bash: "shell", monitor_mcp: "monitor", monitor_ws: "monitor", mcp_task: "MCP task", in_process_teammate: "teammate", dream: "dream", auto_mode_scan: "auto-mode scan", post_turn_memory: "memory save", remote_agent: "cloud session" };
function PMi(e) {
  if ((0, import_chunk_r3kja8v6.ue)() && Skt(e)) return "code";
  return xMi[e] ?? e;
}
function Nin(e) {
  return lre(e) ? "monitor" : PMi(e.type);
}
function lre(e) {
  return e.type === "local_bash" && e.kind === "monitor";
}
function Ope(e) {
  return e.type === "monitor_ws" && e.ambient === true;
}
function BAe(e) {
  switch (e.type) {
    case "local_agent":
      return e.parentAgentId;
    case "local_workflow":
      return e.spawnerAgentId;
    case "local_bash":
    case "monitor_mcp":
    case "monitor_ws":
    case "remote_agent":
    case "in_process_teammate":
    case "mcp_task":
    case "dream":
    case "auto_mode_scan":
    case "post_turn_memory":
      return "agentId" in e ? e.agentId : void 0;
    default:
      return;
  }
}
function Skt(e) {
  return (0, import_chunk_r3kja8v6.ue)() && e === "local_script";
}
function SBt(e) {
  return Skt(e.type) && e.shownToHost !== true;
}
function c8e(e) {
  return Skt(e.type);
}
function Kf(e) {
  return e.type === "local_agent" && "isObserver" in e && e.isObserver === true;
}
function bBt(e, t, n, r) {
  if (r !== void 0 && "agentId" in e && typeof e.agentId === "string" && r(e.agentId)) return false;
  let s = /* @__PURE__ */ new Set(), a = "parentAgentId" in e && typeof e.parentAgentId === "string" ? e.parentAgentId : void 0;
  while (a && !s.has(a)) {
    if (a === t) return true;
    if (r?.(a)) return false;
    s.add(a);
    let o = n[a];
    a = o !== void 0 && o.type === "local_agent" && !("forkWorker" in o && o.forkWorker === true) && "parentAgentId" in o && typeof o.parentAgentId === "string" ? o.parentAgentId : void 0;
  }
  return false;
}
function uho(e, t) {
  let n = BAe(e);
  if (n === void 0) return;
  let r = d8e(t, n);
  return r?.type === "local_agent" && !Kf(r) ? r.id : void 0;
}
function ZQ(e) {
  if (e.type === "local_agent") return !Kf(e);
  return e.type === "local_workflow";
}
function uy(e) {
  if (e.status !== "running" && e.status !== "pending") return false;
  return !OMi(e);
}
function OMi(e) {
  return "isBackgrounded" in e && e.isBackgrounded === false;
}
function fho(e) {
  return e.type === "local_agent" && e.awaitedByCaller === true;
}
function f0e(e) {
  return e.type === "mcp_task" && e.parked === true;
}
function lSr(e) {
  return e.type === "mcp_task" && (e.holdCapped === true || e.polledBy !== void 0);
}
function pho(e) {
  return f0e(e) || lSr(e);
}
function p0e(e) {
  return lre(e) || e.type === "monitor_mcp" || e.type === "monitor_ws" && e.ambient !== true;
}
function Jms(e) {
  return e.type === "local_bash" && e.isBackgrounded === true && e.kind !== "monitor" && e.agentId === void 0;
}
function u(e) {
  return Ope(e) && e.frameLive?.explicit !== true;
}
function u8e(e) {
  return u(e);
}
function lj(e) {
  return e.skipTranscript === true || Ope(e);
}
function _it(e) {
  return e.type === "local_agent" ? e.agentType : void 0;
}
function dre(e) {
  return e.type === "in_process_teammate" && e.isIdle && !Yms(e);
}
function Fin(e) {
  switch (e.type) {
    case "local_agent":
      return e.abortController?.signal.aborted === true;
    case "in_process_teammate":
      return e.currentWorkAbortController?.signal.aborted === true;
    case "local_bash":
      return e.shellCommand?.status === "killed";
    default:
      return false;
  }
}
function Qms(e) {
  return e?.type === "local_workflow";
}
var bkt = /* @__PURE__ */ new Set(["local_agent", "in_process_teammate", "local_workflow", "dream", "post_turn_memory"]);
