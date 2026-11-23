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
var chunk_hn8k40x7_exports = {};
__export(chunk_hn8k40x7_exports, {
  $_e: () => $_e,
  CHt: () => CHt,
  LYs: () => LYs,
  NYs: () => NYs,
  cqr: () => cqr,
  d6: () => d6,
  gIa: () => gIa,
  hIa: () => hIa,
  jet: () => jet
});
module.exports = __toCommonJS(chunk_hn8k40x7_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_z9f6hbhp = require("/$bunfs/root/chunk-z9f6hbhp.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_w8j62fk4 = require("/$bunfs/root/chunk-w8j62fk4.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_0kyr8hth = require("/$bunfs/root/chunk-0kyr8hth.js");
var import_chunk_6d4w1614 = require("/$bunfs/root/chunk-6d4w1614.js");
var import_chunk_d6e25tyr = require("/$bunfs/root/chunk-d6e25tyr.js");
var import_chunk_6hz903p5 = require("/$bunfs/root/chunk-6hz903p5.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var import_chunk_z6hn62tj = require("/$bunfs/root/chunk-z6hn62tj.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var S = (0, import_chunk_sjqze7qg.His)("toLowerCase"), c = S;
function jet() {
  return !import_chunk_c203g5kd.s.CLAUDE_DISABLE_ADOPT;
}
var l = 50;
function p(e) {
  let r = [];
  for (let n of (0, import_chunk_f9x2f6cx.eu)()) {
    if (e && !e(n)) continue;
    r.push({ label: "scheduled task", detail: `${LYs(n)} \xB7 ${(0, import_chunk_f64qna2j.Us)((0, import_chunk_z9f6hbhp.QCe)(n.prompt), l, true)}` });
  }
  return r;
}
function LYs(e) {
  let r = !e.recurring && (0, import_chunk_0kyr8hth.XCe)(e.cron), n = r && (0, import_chunk_0kyr8hth.K0n)(r, new Date(e.createdAt), { oneShot: true });
  if (!n) return c((0, import_chunk_0kyr8hth.j6)(e.cron));
  let o = Math.max(0, n.getTime() - Date.now());
  return `${e.kind === "loop" ? "wakes" : "runs once"} in ${(0, import_chunk_f64qna2j.Cn)(o, { mostSignificantOnly: true })}`;
}
function cqr(e, { mcpClients: r, backgroundOnly: n = false } = {}) {
  let o = new Set(Object.values(e).flatMap((t) => t.type === "local_agent" && t.agentType !== "main-session" && ((0, import_chunk_z6hn62tj.Fin)(t) || t.status === "killed") ? [t.agentId] : [])), i = (t) => {
    if ((0, import_chunk_ed372ykp.$o)(t.status) || n && !(0, import_chunk_z6hn62tj.uy)(t) || (0, import_chunk_z6hn62tj.Fin)(t)) return false;
    switch (t.type) {
      case "remote_agent":
      case "dream":
      case "post_turn_memory":
        return false;
      case "monitor_ws":
        return !t.ambient;
      case "in_process_teammate":
        return !(0, import_chunk_z6hn62tj.dre)(t);
      case "mcp_task":
        return !_(t, r);
      case "local_bash":
        return !(o.has(t.agentId ?? "") || t.stopsOnExit && C(t.kind));
      default:
        return true;
    }
  };
  return [...Object.values(e).filter(i).map((t) => ({ label: (0, import_chunk_z6hn62tj.p0e)(t) ? import_chunk_z6hn62tj.xMi.monitor_mcp : (0, import_chunk_z6hn62tj.PMi)(t.type), detail: (0, import_chunk_f64qna2j.Us)((0, import_chunk_sah8dzn4.As)(t.description), l, true) })), ...p()];
}
function T(e) {
  return (0, import_chunk_z6hn62tj.Ope)(e) && !(0, import_chunk_6d4w1614.G_e)(e);
}
function m(e) {
  return Object.values(e).filter(import_chunk_z6hn62tj.uy).filter((r) => r.type !== "remote_agent" && r.type !== "dream" && r.type !== "post_turn_memory").filter((r) => !T(r));
}
function d(e) {
  if (e.status !== "running" && e.status !== "pending") return false;
  if ((0, import_chunk_z6hn62tj.u8e)(e)) return false;
  if (e.type === "in_process_teammate" && e.evictAfter === 0 && e.currentWorkAbortController === void 0 && (0, import_chunk_z6hn62tj.dre)(e)) return false;
  if (e.type === "remote_agent" || e.type === "dream" || e.type === "post_turn_memory") return false;
  if (e.type === "mcp_task" && e.abortController === void 0) {
    if (e.protocol === "sep2663") {
      if (e.parked === true) return false;
      return e.sidecarSessionId !== (0, import_chunk_f9x2f6cx.W)() || e.sidecarProjectDir !== (0, import_chunk_w8j62fk4.Iue)();
    }
    return false;
  }
  if ((0, import_chunk_z6hn62tj.Ope)(e)) return false;
  return true;
}
function h(e) {
  return (0, import_chunk_6d4w1614.G_e)(e) && e.frameLive !== void 0;
}
function NYs() {
  return jet() && !import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF;
}
function y(e) {
  return (0, import_chunk_6d4w1614.G_e)(e) && (0, import_chunk_6d4w1614.K7t)(e);
}
function hIa(e) {
  return Object.values(e).some(y) || (0, import_chunk_6hz903p5.JMa)() || (0, import_chunk_6hz903p5.Zht)().size > 0;
}
function $_e(e) {
  return Object.values(e).some(d);
}
function d6(e, { sessionCrons: r = true } = {}) {
  let n = m(e), o = r ? (0, import_chunk_f9x2f6cx.eu)().length : 0, i = (0, import_chunk_4smdap7r.M)(n.map(f)), t = new Set(n.flatMap((u) => h(u) ? [u.frameLive.slug] : [])), a = !jet() ? 0 : (0, import_chunk_4smdap7r.U)((0, import_chunk_4smdap7r.M)([...(0, import_chunk_6hz903p5.R7t)(), ...(0, import_chunk_6hz903p5.Zht)()]), (u) => !t.has(u));
  if (a > 0 && !i.includes("artifact_watch")) i.push("artifact_watch");
  let g = NYs() ? t.size + a : 0;
  if (o > 0) i.push("session_cron");
  let k = (0, import_chunk_4smdap7r.U)(Object.values(e), import_chunk_4yjj7pjs.PHn);
  return { count: n.length + o + a, restartableCount: k, kinds: i, drainableMonitors: g, carriedMonitors: t.size + a };
}
function f(e) {
  if ((0, import_chunk_z6hn62tj.Ope)(e)) return "artifact_watch";
  return (0, import_chunk_z6hn62tj.lre)(e) ? "monitor" : e.type;
}
function CHt(e, r) {
  let n = m(e), o = p(r?.cronFilter), i = n.length + o.length, t = (0, import_chunk_4smdap7r.M)(n.map(f));
  if (o.length > 0) t.push("session_cron");
  let a = [(0, import_chunk_d6e25tyr.m7t)(n), o.length ? `${o.length} ${(0, import_chunk_7cfjrnwy.O)(o.length, "loop")}` : ""];
  return { count: i, kinds: t, summary: a.filter(Boolean).join(", ") };
}
function gIa() {
  let { tasks: e } = (0, import_chunk_9e5mdyfk.FDn)();
  if (e === 0) return;
  return `Detached. ${e} ${(0, import_chunk_7cfjrnwy.O)(e, "task")} still running. Run \`claude agents\` to see your background sessions.`;
}
function _(e, r) {
  if (d(e)) return false;
  let n = r?.find((o) => o.name === e.serverName)?.config.type;
  return n !== void 0 && n !== "stdio" && n !== "sdk";
}
function C(e) {
  return e !== "monitor" || (0, import_chunk_865at33z.b)("tengu_mossy_dijkstra", true);
}
