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
var chunk_y192p33y_exports = {};
__export(chunk_y192p33y_exports, {
  AZe: () => AZe,
  CZe: () => CZe,
  Eya: () => Eya,
  Fse: () => Fse,
  KUo: () => KUo,
  RZe: () => RZe,
  SIt: () => SIt,
  SWr: () => SWr,
  Sya: () => Sya,
  Tya: () => Tya,
  XYn: () => XYn,
  YYn: () => YYn,
  bWr: () => bWr,
  bya: () => bya,
  c9t: () => c9t,
  d9t: () => d9t,
  g2s: () => g2s,
  h2s: () => h2s,
  kya: () => kya,
  m2s: () => m2s,
  nKe: () => nKe,
  qYn: () => qYn,
  rKe: () => rKe,
  vya: () => vya,
  wya: () => wya,
  yWr: () => yWr
});
module.exports = __toCommonJS(chunk_y192p33y_exports);
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_bp9b0hd8 = require("/$bunfs/root/chunk-bp9b0hd8.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var h = { assistant: true, user: true, result: true, system: true, stream_event: true, tool_progress: true, tool_use_summary: true, rate_limit_event: true, prompt_suggestion: true, conversation_reset: true, command_lifecycle: true, transcript_mirror: false, auth_status: false, active_goal: false, autocompact_state: false, keep_alive: false, control_request: false, control_response: false, control_cancel_request: false };
function m2s(e) {
  return Object.hasOwn(h, e) ? h[e] : void 0;
}
function SIt(e) {
  return m2s(e) !== void 0;
}
var qYn = 3e4, YYn = 12e4;
function b(e) {
  return typeof e === "string" ? (0, import_chunk_kx2fp6pc.Ji)(e, { maxCodeUnits: 512 }) : void 0;
}
function y(e) {
  return (0, import_chunk_kx2fp6pc.Ji)(e, { maxCodeUnits: 64 });
}
var R = 32, B = 1e3, A = 864e5, C = 5;
function _(e) {
  if (typeof e !== "string") return;
  let t = (0, import_chunk_kx2fp6pc.oLo)(e, C);
  return t.length === 0 ? void 0 : t;
}
function k(e) {
  if (typeof e === "number") return Number.isSafeInteger(e) ? e : void 0;
  return typeof e === "string" && /^-?\d{1,15}$/.test(e) ? Number(e) : void 0;
}
var L = 3e5;
function d9t(e, t) {
  let n = e.data?.timestamp;
  if (typeof n !== "string") return false;
  let o = Date.parse(n);
  return !Number.isNaN(o) && t - o > L;
}
var x = ["provision", "clone", "setup_script", "start_cc"];
function Sya(e) {
  return x.includes(e);
}
var E = 6e4, F = 5e3;
function D(e, t, n) {
  let o = e.data?.timestamp;
  if (typeof o !== "string") return false;
  let r = Date.parse(o);
  return Number.isFinite(r) && Math.abs(t - r) <= E && r >= n - F;
}
function Fse(e, { wake: t, seededFor: n, hasNothingToClone: o = false }) {
  return { steps: x.filter((r) => n !== "pool" || r !== "setup_script" && (r !== "clone" || !o)).map((r) => (n === "hosted" || n === "pool") && r === "provision" ? { id: r, status: "running", startedAt: e, awaitsMachine: n === "pool" } : { id: r, status: "pending" }), sessionMode: null, setupSource: null, wake: t, startedAt: e, hasStructuredSteps: false, seededFor: n ?? null, isWaitGivenUp: false, terminal: false, dismissed: false, sawLiveFrame: false, hadLiveCycle: false, queuedCount: 0 };
}
function bya(e, t) {
  let n = Fse(e, { wake: true, seededFor: "pool" });
  return { ...n, steps: n.steps.filter((o) => o.status === "running"), sessionMode: "resume", followsWake: true, hadLiveCycle: t?.hadLiveCycle ?? false, queuedCount: t?.queuedCount ?? 0 };
}
function wya(e, t, n) {
  return e?.followsWake === true && !e.terminal && t !== void 0 && t > n - e.startedAt;
}
function nKe(e) {
  let t = e.data?.extra;
  return { stepId: typeof t?.step_id === "string" ? y(t.step_id) : null, stepStatus: typeof t?.step_status === "string" ? t.step_status : null };
}
function kya(e) {
  return e !== null && e.hasStructuredSteps && !e.terminal && !e.hadLiveCycle && !e.steps.some((t) => t.status === "failed");
}
function rKe(e) {
  return e.status !== "skipped" && (e.id !== "start_cc" || e.status === "failed");
}
function XYn(e) {
  let t = e.steps.some((n) => n.id === "start_cc" && n.status === "running");
  return e.hasStructuredSteps && !e.terminal && e.steps.filter(rKe).every((n) => n.status === "completed" || t && n.status === "pending");
}
function Eya(e, t) {
  if (e === null || e.terminal || !e.hasStructuredSteps && (e.seededFor === null || t.type === "system" && t.subtype === "informational")) return null;
  return KUo(t);
}
function KUo(e) {
  switch (e.type) {
    case "system":
      return e.subtype === "init_milestone" || e.subtype === "informational" ? "notice" : null;
    case "assistant":
      return e.isApiErrorMessage === true && (0, import_chunk_ma3kja9f.T)(e.message) && e.message.model === import_chunk_bp9b0hd8.xs ? "notice" : null;
    case "result":
      return (0, import_chunk_ma3kja9f.T)(e.runner_exit) && "phase" in e.runner_exit ? "failed" : null;
    default:
      return null;
  }
}
function yWr(e) {
  return SIt(e.type) && KUo(e) === null;
}
function vya(e, t) {
  let o = e.steps.findLast((r) => r.status === "running") ?? e.steps.find((r) => r.status === "pending");
  if (o === void 0 || e.steps.some((r) => r.status === "failed")) return e;
  return { ...e, steps: e.steps.map((r) => r === o ? { ...r, status: "failed", completedAt: t, detail: void 0 } : r) };
}
function SWr(e, t, n, o, r) {
  let p = t.data?.extra, { stepId: c, stepStatus: u } = nKe(t), s = (e.terminal || c === "provision" && u !== "failed" && e.steps.some((a) => a.status === "failed")) && c !== null && u !== null ? { ...Fse(o, { wake: true }), dismissed: e.hadLiveCycle, hadLiveCycle: e.hadLiveCycle, ...e.followsWake && !e.terminal && { followsWake: true, sessionMode: "resume", dismissed: false, startedAt: e.startedAt } } : e;
  if (c !== null && u !== null && !s.sawLiveFrame && D(t, o, r)) s = { ...s, sawLiveFrame: true };
  if (typeof p?.session_mode === "string") {
    let a = p.session_mode;
    if ((a === "new" || a === "resume" || a === "resume-cached" || a === "setup-only") && s.sessionMode !== a) s = { ...s, sessionMode: a };
  }
  let m = p?.setup_source;
  if ((m === "checkpoint" || m === "building_checkpoint" || m === "checkpoint_restore_failed") && s.setupSource !== m) s = { ...s, setupSource: m };
  let l = k(p?.setup_script_duration_ms);
  if (l !== void 0 && l >= B && l <= A && s.setupScriptDurationMs !== l && !s.steps.some((a) => a.id === "setup_script" && a.status === "completed")) s = { ...s, setupScriptDurationMs: l };
  if (typeof p?.expected_steps === "string") {
    let a = (0, import_chunk_4smdap7r.M)(p.expected_steps.split(",").map((d) => y(d)).filter((d) => d !== "")).slice(0, R);
    if (a.length > 0) {
      let d = new Map(s.steps.map((f) => [f.id, f])), i = a.map((f) => d.get(f) ?? { id: f, status: "pending" }), g = s.steps.filter((f) => !a.includes(f.id) && f.status !== "pending");
      s = { ...s, steps: [...g, ...i] };
    }
  }
  if (c !== null && u !== null) s = W(s, { stepId: c, stepStatus: u, extra: p, line: n, now: o });
  else if (n !== "") {
    let a = s.steps.findIndex((d) => d.status === "running");
    if (a !== -1 && s.steps[a].detail !== n) {
      let d = s.steps.slice();
      d[a] = { ...d[a], detail: n }, s = { ...s, steps: d };
    }
  }
  return s;
}
function W(e, { stepId: t, stepStatus: n, extra: o, line: r, now: p }) {
  let c = y(t), u = e.steps, S = u.findIndex((i) => i.id === c);
  if (S === -1) {
    if (u.length >= R) return e;
    let i = b(o?.step_label) || r;
    u = [...u, { id: c, label: i, status: "pending" }], S = u.length - 1;
  }
  let s = u[S], m = typeof o?.progress_label === "string" && r !== "" ? r : b(o?.step_detail), l = null;
  switch (n) {
    case "started":
      if (s.status === "pending") l = { ...s, status: "running", startedAt: p, detail: m, output: _(o?.output) };
      else {
        let i = m ?? s.detail, g = (s.status === "running" ? _(o?.output) : void 0) ?? s.output;
        if (i !== s.detail || !(0, import_chunk_4smdap7r.Xy)(g, s.output)) l = { ...s, detail: i, output: g };
      }
      break;
    case "completed":
      if (c === "clone" && (m || typeof o?.clone_phase === "string")) break;
      if (s.status !== "completed") l = { ...s, status: "completed", completedAt: p, completedMode: CZe(e), detail: void 0, output: void 0 };
      break;
    case "failed": {
      let i = { ...s, status: "failed", completedAt: s.status === "failed" ? s.completedAt : p, error: r || void 0, output: _(o?.output) ?? s.output, exitCode: k(o?.exit_code) ?? s.exitCode };
      if (s.status !== "failed" || s.error !== i.error || s.exitCode !== i.exitCode || !(0, import_chunk_4smdap7r.Xy)(s.output, i.output)) l = i;
      break;
    }
    case "skipped":
      if (s.status === "pending" || s.status === "running") l = { ...s, status: "skipped", detail: void 0 };
      break;
    default:
      break;
  }
  if (l !== null) u = u === e.steps ? e.steps.slice() : u, u[S] = l;
  let a = e.hasStructuredSteps ? void 0 : e.steps.find((i) => i.status === "running");
  if (u === e.steps && a !== s) return e;
  if (a === s && n === "started") u = u.map((i) => i.id === s.id ? { ...i, awaitsMachine: false } : i);
  else if (a !== void 0 && a !== s) u = u.map((i) => i === a ? { ...i, status: "completed", completedAt: p, completedMode: CZe(e) } : i);
  let d = { ...e, steps: u, hasStructuredSteps: true, seededFor: null };
  if (c === "start_cc" && n === "completed") d = h2s(d, p);
  return d;
}
function h2s(e, t) {
  if (e.terminal) return e;
  let n = CZe(e), o = e.steps.map((r) => r.status === "pending" ? { ...r, status: "skipped" } : r.status === "running" ? { ...r, status: "completed", completedAt: t, completedMode: n } : r);
  return { ...e, steps: o, terminal: true, completedAt: t, hadLiveCycle: e.hadLiveCycle || e.sawLiveFrame };
}
function CZe(e) {
  switch (e.sessionMode) {
    case "resume":
      return "resume";
    case "resume-cached":
      switch (e.setupSource) {
        case "checkpoint":
          return "restored";
        case "checkpoint_restore_failed":
        case "building_checkpoint":
          return "new";
        case null:
          break;
      }
      return e.wake ? "resume" : "new";
    case "new":
    case "setup-only":
    case null:
      return "new";
  }
}
function AZe(e, t) {
  let n = e.status === "completed";
  if (e.awaitsMachine) return n ? "Got a machine" : e.status === "failed" ? "Couldn't start on a machine" : "Waiting for a machine";
  let o = (n ? e.completedMode : void 0) ?? t;
  switch (e.id) {
    case "provision":
      if (o === "resume") return n ? "Resumed your cloud container" : "Resuming your cloud container";
      return n ? "Set up a cloud container" : "Setting up a cloud container";
    case "clone":
      if (o !== "new") return n ? "Refreshed repository" : "Refreshing repository";
      return n ? "Cloned repository" : "Cloning repository";
    case "setup_script":
      if (e.status === "failed") return "Setup script failed";
      if (n) return o === "restored" ? "Restored from snapshot" : "Ran setup script";
      return "Running setup script";
    case "start_cc":
      return e.status === "failed" ? "Couldn't start Claude in the cloud" : "";
    default:
      return e.label || e.id;
  }
}
function RZe(e, t = false) {
  if (t) return e === "resume" ? "Cloud session didn't resume" : "Cloud session didn't start";
  switch (e) {
    case "new":
      return "Setting up remote session";
    case "resume":
      return "Resuming remote session";
    case "restored":
      return "Restored from snapshot of setup script";
  }
}
function g2s(e, t, n) {
  if (t.status === "completed") return (t.completedMode ?? n) === "restored" && e.setupScriptDurationMs !== void 0 ? ` \xB7 saved about ${(0, import_chunk_f64qna2j.vy)(e.setupScriptDurationMs)}` : "";
  if (t.status !== "pending" && t.status !== "running") return "";
  switch (e.setupSource) {
    case "building_checkpoint":
      return " \xB7 saving so your next session skips this";
    case "checkpoint_restore_failed":
      return " \xB7 couldn't use snapshot";
    case "checkpoint":
    case null:
      return "";
  }
}
function Tya(e) {
  let t = e.terminal ? null : e.sessionMode, n = CZe({ sessionMode: t ?? (e.hadLiveCycle ? "resume" : null), setupSource: e.setupSource, wake: e.wake }), o = e.steps.findLast((r) => r.status === "running" && rKe(r));
  return o && AZe(o, n) || RZe(n);
}
function bWr(e) {
  let t = CZe(e), n = (e.completedAt ?? e.startedAt) - e.startedAt, o = w(n);
  switch (t) {
    case "new":
      return `Remote session ready in ${o}`;
    case "resume":
      return `Remote session resumed in ${o}`;
    case "restored":
      return `Remote session ready in ${o} \xB7 restored from snapshot`;
  }
}
function c9t(e, t) {
  if (e.startedAt === void 0) return "";
  if (e.status === "completed") return e.completedAt === void 0 ? "" : ` (${w(e.completedAt - e.startedAt)})`;
  let n = Math.max(0, t - e.startedAt);
  return e.status === "running" && n >= 5e3 ? ` (${Math.round(n / 1e3)}s)` : "";
}
function w(e) {
  if (e < 1e4) return `${(Math.max(e, 100) / 1e3).toFixed(1)}s`;
  let t = Math.round(e / 1e3);
  if (t < 60) return `${t}s`;
  return `${Math.floor(t / 60)}m ${t % 60}s`;
}
