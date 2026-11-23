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
var chunk_bvjx6p9k_exports = {};
__export(chunk_bvjx6p9k_exports, {
  LLa: () => LLa,
  NLa: () => NLa,
  O3o: () => O3o,
  cXl: () => cXl,
  d9r: () => d9r,
  dXl: () => dXl,
  nzl: () => nzl,
  tzl: () => tzl,
  uXl: () => uXl
});
module.exports = __toCommonJS(chunk_bvjx6p9k_exports);
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z9f6hbhp = require("/$bunfs/root/chunk-z9f6hbhp.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_4x1jja6d = require("/$bunfs/root/chunk-4x1jja6d.js");
var import_chunk_cee6q0wn = require("/$bunfs/root/chunk-cee6q0wn.js");
var import_chunk_rnad4hj1 = require("/$bunfs/root/chunk-rnad4hj1.js");
var import_chunk_1dkksxs0 = require("/$bunfs/root/chunk-1dkksxs0.js");
var import_chunk_ckp7gqrb = require("/$bunfs/root/chunk-ckp7gqrb.js");
var import_chunk_6qaevejb = require("/$bunfs/root/chunk-6qaevejb.js");
var import_chunk_s1btam0h = require("/$bunfs/root/chunk-s1btam0h.js");
var import_chunk_9xt9z453 = require("/$bunfs/root/chunk-9xt9z453.js");
var import_chunk_0djtvg5h = require("/$bunfs/root/chunk-0djtvg5h.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_path = require("path");
var y = (0, import_chunk_w1d7ygsk.ft)("/$bunfs/root/loopAutonomousPreamble-07qcyhv4.md");
var k = (0, import_chunk_w1d7ygsk.ft)("/$bunfs/root/loopAutonomousPreamblePersistent-3zqtkrvg.md");
function c() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_LOOP_PERSISTENT) return true;
  return (0, import_chunk_865at33z.b)("tengu_kairos_loop_persistent", false);
}
function LLa() {
  let e = c() ? k : y, t = (0, import_chunk_ckp7gqrb.hXt)({ forCloudSession: Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) });
  return t ? `${e.trimEnd()}

${t}
` : e;
}
function NLa() {
  (0, import_chunk_y53wbr8a.a)("tengu_kairos_loop_persistent_activated", { variant: c() });
}
function l(e = false) {
  if (!(0, import_chunk_rnad4hj1.EDe)()) return "";
  let o = !e && c() ? "newly blocked on a decision you won't make alone, you're ending the loop" : "newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";
  return `

Use ${import_chunk_cee6q0wn.qx} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`;
}
function P() {
  return `# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${import_chunk_xfj2cwfv.bl} from this tick.${l()}`;
}
function d() {
  let e = (0, import_chunk_865at33z.dt)(), t = (0, import_chunk_0djtvg5h.CV)((0, import_chunk_865at33z.St)(e), e), o = (0, import_chunk_1dkksxs0.Ax)(), n = o ? `send a brief status update for this tick via ${import_chunk_4x1jja6d.Ac}` : "write a brief status update for this tick", i = t ? `Immediately before re-arming, ${n}.` : `After re-arming, ${n}.`;
  return `

If a ${import_chunk_9xt9z453.Xo} is armed (check ${import_chunk_6qaevejb.Nk}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${import_chunk_9xt9z453.Xo} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. ${i} ${(0, import_chunk_xfj2cwfv.Tmn)({ preArmStatus: t, briefMode: o })} To stop the loop, call ${import_chunk_xfj2cwfv.bl} with \`stop: true\` and ${import_chunk_s1btam0h.Ra} the monitor (use ${import_chunk_6qaevejb.Nk} to find its task ID if no longer in context).`;
}
function R() {
  return `# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${import_chunk_xfj2cwfv.bl} tool (not a recurring cron). To keep the loop alive, call ${import_chunk_xfj2cwfv.bl} again this turn with \`prompt\` set to the literal sentinel \`${import_chunk_xfj2cwfv.ect}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${l()}`;
}
function g(e) {
  return e === import_chunk_xfj2cwfv.D6t || e === import_chunk_xfj2cwfv.ect;
}
function _(e, t) {
  if (!g(t)) return null;
  NLa();
  let o = t === import_chunk_xfj2cwfv.ect ? R() : P();
  if (e.autonomousPreambleDelivered || e.lastLoopFileDelivered !== null) return o;
  return e.autonomousPreambleDelivered = true, `${LLa()}

---

${o}`;
}
var v = "__autonomous_preamble__", tzl = "<<loop.md>>", O3o = "<<loop.md-dynamic>>";
function C() {
  return `# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${import_chunk_xfj2cwfv.bl} from this tick.${l(true)}`;
}
function x() {
  return `# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${import_chunk_xfj2cwfv.bl} tool (not a recurring cron). To keep the loop alive, call ${import_chunk_xfj2cwfv.bl} again this turn with \`prompt\` set to the literal sentinel \`${O3o}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${l(true)}`;
}
function M() {
  return `# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${import_chunk_xfj2cwfv.bl} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${import_chunk_xfj2cwfv.bl} again this turn with \`prompt\` set to the literal sentinel \`${O3o}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${l()}`;
}
var r = 25e3, m = (r + 1) * 3;
function N(e, t) {
  if (e.length <= r && !t) return e;
  let o = e.lastIndexOf(`
`, r);
  return `${e.slice(0, o > 0 ? o : r)}

> WARNING: loop.md was truncated to ${r} bytes. Keep the task list concise.`;
}
function D() {
  return I(S()) ?? I(T());
}
function S() {
  return (0, import_path.join)((0, import_chunk_f9x2f6cx.us)() ?? (0, import_chunk_f9x2f6cx.Oo)(), ".claude", "loop.md");
}
function T() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "loop.md");
}
function I(e) {
  let t;
  try {
    let o = (0, import_chunk_w578pjby.le)();
    t = (0, import_chunk_xfj2cwfv.e5i)(o, e, Number.POSITIVE_INFINITY).verdict === "read" ? o.readSync(e, { length: m }).buffer.toString("utf8") : null;
  } catch (o) {
    return A(o);
  }
  return t === null ? null : f(e, t);
}
async function u(e) {
  let t;
  try {
    let o = (0, import_chunk_w578pjby.le)(), { verdict: n } = await (0, import_chunk_xfj2cwfv.Ydt)(o, e, Number.POSITIVE_INFINITY);
    t = n === "read" ? (await o.readFileBytes(e, m)).toString("utf8") : null;
  } catch (o) {
    return A(o);
  }
  return t === null ? null : f(e, t);
}
function A(e) {
  if ((0, import_chunk_jv7av99m.fn)(e) || (0, import_chunk_jv7av99m.w)(e) === "EISDIR") return null;
  throw e;
}
function f(e, t) {
  let o = t.trim();
  if (o.length === 0) return null;
  let n = Buffer.byteLength(t) >= m;
  return { path: e, content: N(o, n) };
}
async function nzl(e) {
  let t = await u(S());
  if (t) return t;
  let o = T();
  if (!e) return u(o);
  let n = await e.read([import_chunk_hkvzj051.at.state("loop-file")]);
  if (!n.ok) return u(o);
  let i = n.value.items[0];
  if (!i.found) return null;
  return f(o, Buffer.from(i.value.buffer, i.value.byteOffset, i.value.byteLength).toString("utf-8"));
}
function h(e) {
  return e === tzl || e === O3o;
}
function q(e, t) {
  if (!h(t)) return null;
  return O(e, t, D());
}
async function j(e, t, o) {
  if (!h(t)) return null;
  return O(e, t, await nzl(o));
}
function O(e, t, o) {
  let n = t === O3o;
  if (o) {
    let p = n ? x() : C();
    if (e.lastLoopFileDelivered === o.content) return p;
    return e.lastLoopFileDelivered = o.content, `# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${p}`;
  }
  NLa();
  let i = n ? M() : P();
  if (e.lastLoopFileDelivered === v || e.autonomousPreambleDelivered) return i;
  return e.lastLoopFileDelivered = v, e.autonomousPreambleDelivered = true, `${LLa()}

---

${i}`;
}
function dXl(e) {
  return g(e) || h(e);
}
function d9r(e) {
  if (h(e)) return "/loop (loop.md)";
  return g(e) ? "/loop" : (0, import_chunk_z9f6hbhp.QCe)(e);
}
function cXl(e, t) {
  return _(e, t) ?? q(e, t) ?? t;
}
async function uXl(e, t, o) {
  return _(e, t) ?? await j(e, t, o) ?? t;
}
