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
var chunk_ed372ykp_exports = {};
__export(chunk_ed372ykp_exports, {
  $o: () => $o,
  Abt: () => Abt,
  Lq: () => Lq,
  OT: () => OT,
  Xki: () => Xki,
  Yki: () => Yki,
  Zao: () => Zao,
  nrn: () => nrn,
  qki: () => qki,
  tb: () => tb,
  uG: () => uG,
  uls: () => uls
});
module.exports = __toCommonJS(chunk_ed372ykp_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_4f4ysf31 = require("/$bunfs/root/chunk-4f4ysf31.js");
var import_crypto = require("crypto");
function $o(e) {
  return e === "completed" || e === "failed" || e === "killed";
}
var qki = /* @__PURE__ */ new Set(["local_agent", "remote_agent", "in_process_teammate", "local_workflow"]);
function Lq(e) {
  return Object.values(e).some(nrn);
}
function Abt(e) {
  return Object.values(e).some((t) => nrn(t) && t.status !== "paused" && !(t.type === "in_process_teammate" && t.identity?.resumableAgentId === void 0) && !(t.type === "remote_agent" && (t.ultraplanPhase === "needs_input" || t.ultraplanPhase === "plan_ready" || t.isUltraplan && t.restoredOnResume)));
}
function nrn(e) {
  return qki.has(e.type) && !$o(e.status) && !(e.type === "in_process_teammate" && e.isIdle) && !(e.type === "remote_agent" && e.isLongRunning);
}
function Yki(e) {
  return Object.values(e).some(uls);
}
function uls(e) {
  return e.type === "local_bash" && !$o(e.status);
}
var l = { local_bash: "b", local_agent: "a", remote_agent: "r", in_process_teammate: "t", local_workflow: "w", monitor_mcp: "m", monitor_ws: "s", mcp_task: "k", dream: "d", auto_mode_scan: "e", post_turn_memory: "p" }, n = "0123456789abcdefghijklmnopqrstuvwxyz";
function uG(e, t) {
  let s = l[e];
  return s !== void 0 && t.length === 9 && t.startsWith(s) && t.slice(s.length).split("").every((a) => n.includes(a));
}
function Xki(e) {
  return e.length <= 1024 && /^(?:\/(?!\.{1,2}(?:\/|$))[A-Za-z0-9_.-]+)+$/.test(e);
}
function Zao(e, t) {
  return Xki(t) && t.endsWith(`/${e}.output`);
}
function OT(e) {
  let t = l[e] ?? "x", s = (0, import_crypto.randomBytes)(8), a = t;
  for (let r = 0; r < 8; r++) a += n[s[r] % n.length];
  return a;
}
function tb(e, t, s, a, r = e) {
  let o = (0, import_chunk_xfj2cwfv.Amn)();
  return { id: e, type: t, status: "pending", description: s, toolUseId: a, startTime: Date.now(), ...!(0, import_chunk_f9x2f6cx.Y)() && { outputFile: (0, import_chunk_4f4ysf31.cp)(r) }, outputOffset: 0, notified: false, ...o !== void 0 && { startedUnderUseCase: o } };
}
