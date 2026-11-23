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
var chunk_ch6321bk_exports = {};
__export(chunk_ch6321bk_exports, {
  $Re: () => $Re,
  ABi: () => ABi,
  CBi: () => CBi,
  Kbs: () => Kbs,
  Kdn: () => Kdn,
  OBn: () => OBn,
  Svr: () => Svr,
  Swl: () => Swl,
  TYe: () => TYe,
  Ydn: () => Ydn,
  dLe: () => dLe,
  fwo: () => fwo,
  qdn: () => qdn,
  uwo: () => uwo,
  yvr: () => yvr
});
module.exports = __toCommonJS(chunk_ch6321bk_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_6zh1j84y = require("/$bunfs/root/chunk-6zh1j84y.js");
var import_chunk_hrmqj4hy = require("/$bunfs/root/chunk-hrmqj4hy.js");
var import_chunk_gftn60qp = require("/$bunfs/root/chunk-gftn60qp.js");
var import_crypto = require("crypto");
function uwo(t, e) {
  return { type: "goal_status", met: t, sentinel: true, condition: e };
}
function yvr(t) {
  if (!t) return null;
  for (let e = t.length - 1; e >= 0; e--) {
    let s = t[e];
    if (s?.type !== "attachment" || s.attachment.type !== "goal_status") continue;
    if (s.attachment.met || s.attachment.failed) return null;
    let o = s.attachment.condition;
    return typeof o === "string" && o.length > 0 ? o : null;
  }
  return null;
}
function $Re(t, e) {
  (0, import_chunk_y53wbr8a.a)("tengu_goal_cleared", { reason: (0, import_chunk_78g0060s.f)(e), iterations: t.iterations, durationMs: Date.now() - t.setAt, origin: (0, import_chunk_78g0060s.fe)(t.origin) });
}
var OBn = 4e3, d = /* @__PURE__ */ new Set(["clear", "stop", "off", "reset", "none", "cancel"]);
function Kdn(t) {
  return d.has(t.toLowerCase());
}
function CBi(t) {
  for (let e = t.length - 1; e >= 0; e--) {
    let s = t[e];
    if (s?.type !== "attachment" || s.attachment.type !== "goal_status") continue;
    let o = s.attachment;
    if (!o.met || o.sentinel) continue;
    return { condition: o.condition, iterations: o.iterations, durationMs: o.durationMs, tokens: o.tokens };
  }
  return null;
}
var fwo = (t) => `A session-scoped Stop hook is now active with condition: "${t}". Briefly acknowledge the goal, then immediately start (or continue) working toward it \u2014 treat the condition itself as your directive and do not pause to ask the user what to do. The hook will block stopping until the condition holds. It auto-clears once the condition is met \u2014 do not tell the user to run \`/goal clear\` after success; that's only for clearing a goal early.`;
function TYe(t, e) {
  let s = [];
  for (let o of t.get(e, "Stop").get("Stop") ?? []) {
    if (o.matcher !== "" || o.skillRoot !== void 0) continue;
    for (let n of o.hooks) if (n.type === "prompt") s.push(n);
  }
  return s;
}
var g = "/goal is only available in trusted workspaces. Restart, accept the trust dialog, and try again.", h = "/goal can't run yet: your organization's settings haven't been read, so it isn't known whether it allows hooks.", y = "/goal can't run while hooks are restricted (disableAllHooks or allowManagedHooksOnly is set in settings or by policy).", Swl = "This message was relayed from Slack, Teams or a project thread and may be someone else's, so /goal didn't set, clear or show the goal. To use /goal, send it yourself from the terminal, the Claude app, claude.ai/code or your own Remote Control app.";
function p() {
  return (0, import_chunk_f9x2f6cx.st)() ? (0, import_chunk_6zh1j84y.Qh)() || (0, import_chunk_6zh1j84y.v2t)() || (0, import_chunk_6zh1j84y.FWi)() : (0, import_chunk_6zh1j84y.bme)();
}
function ABi(t) {
  let e = { type: "prompt", prompt: t };
  return (0, import_chunk_hrmqj4hy.wwl)(e, () => !p()), e;
}
function dLe(t, e) {
  return e !== void 0 && e.prompt === t?.condition && (0, import_chunk_hrmqj4hy.uvt)(e);
}
function Svr() {
  if (p()) return { message: y, code: "hooks_gate" };
  if ((0, import_chunk_gftn60qp.ok)()) return (0, import_chunk_gftn60qp.gcn)(), { message: h, code: "hooks_held" };
  if (!(0, import_chunk_f9x2f6cx.Se)() && !(0, import_chunk_865at33z.Yi)()) return { message: g, code: "trust_gate" };
  return null;
}
function qdn(t, e, s = "user") {
  let o = Svr();
  if (o !== null) return (0, import_chunk_cqa9hrgx.l)("goal_set", o.code, { origin: (0, import_chunk_78g0060s.f)(s) }), o.message;
  let n = (0, import_chunk_f9x2f6cx.W)(), r = e.getAppState().activeGoal;
  if (r !== void 0) $Re(r, "superseded");
  for (let i of TYe(e.sessionHooksRegistry, n)) e.sessionHooksRegistry.remove(n, "Stop", i);
  e.sessionHooksRegistry.add(n, "Stop", "", ABi(t));
  let c = { condition: t, iterations: 0, setAt: Date.now(), origin: s, tokensAtStart: (0, import_chunk_f9x2f6cx.rw)() };
  return e.setAppState((i) => ({ ...i, activeGoal: c })), e.applyMessageOp({ type: "append", messages: [Kbs(false, t)] }), (0, import_chunk_y53wbr8a.a)("tengu_stop_hook_added", { promptLength: t.length, via: (0, import_chunk_78g0060s.S)("goal"), origin: (0, import_chunk_78g0060s.f)(s) }), (0, import_chunk_cqa9hrgx.u)("goal_set"), null;
}
function Ydn(t) {
  let e = (0, import_chunk_f9x2f6cx.W)(), s = TYe(t.sessionHooksRegistry, e), o = t.getAppState().activeGoal, n = o?.condition ?? s[0]?.prompt;
  if (n === void 0) return null;
  for (let r of s) t.sessionHooksRegistry.remove(e, "Stop", r);
  if (o !== void 0) $Re(o, "user_clear");
  return t.setAppState((r) => r.activeGoal === void 0 ? r : { ...r, activeGoal: void 0 }), t.applyMessageOp({ type: "append", messages: [Kbs(true, n)] }), (0, import_chunk_y53wbr8a.a)("tengu_stop_hook_removed", { via: (0, import_chunk_78g0060s.S)("goal") }), n;
}
function Kbs(t, e) {
  return { type: "attachment", uuid: (0, import_crypto.randomUUID)(), timestamp: (/* @__PURE__ */ new Date()).toISOString(), attachment: uwo(t, e) };
}
