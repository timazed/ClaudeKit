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
var chunk_rm1xmh9k_exports = {};
__export(chunk_rm1xmh9k_exports, {
  A8r: () => A8r,
  BXl: () => BXl,
  GFa: () => GFa,
  GXt: () => GXt,
  K5o: () => K5o,
  R8r: () => R8r,
  UXl: () => UXl,
  V5o: () => V5o,
  WFa: () => WFa,
  jFa: () => jFa,
  lni: () => lni,
  nor: () => nor,
  ror: () => ror,
  uUe: () => uUe
});
module.exports = __toCommonJS(chunk_rm1xmh9k_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_p6a07y1c = require("/$bunfs/root/chunk-p6a07y1c.js");
var import_chunk_jbjjrhxt = require("/$bunfs/root/chunk-jbjjrhxt.js");
var import_chunk_a5aq0pxy = require("/$bunfs/root/chunk-a5aq0pxy.js");
var import_chunk_507k3c1m = require("/$bunfs/root/chunk-507k3c1m.js");
var import_chunk_hcjp5g4r = require("/$bunfs/root/chunk-hcjp5g4r.js");
var import_chunk_spnfty7j = require("/$bunfs/root/chunk-spnfty7j.js");
var import_chunk_hy0sycbj = require("/$bunfs/root/chunk-hy0sycbj.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
(0, import_chunk_adx6804h.B)();
var A8r = "Mcp-Name", N = 250, de = 3e4, ue = 2e3, H = 5, le = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ reason: (0, import_chunk_adx6804h.F)(["response_too_large", "sse_line_too_large"]) })), X = 16, ce = (0, import_chunk_p6a07y1c.auo)(["taskId", "status", "statusMessage", "createdAt", "lastUpdatedAt", "ttlMs", "pollIntervalMs", "inputRequests", "method", "params", "result", "error", "code", "message"]), z = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ taskId: (0, import_chunk_adx6804h.n)().min(1).max(import_chunk_spnfty7j.Pbe).regex(import_chunk_spnfty7j.rZ), status: (0, import_chunk_adx6804h.F)(["working", "input_required", "completed", "failed", "cancelled"]), statusMessage: (0, import_chunk_adx6804h.n)().nullish().transform((e) => e ?? void 0).optional(), createdAt: (0, import_chunk_adx6804h.n)().nullish().transform((e) => e ?? void 0).optional(), lastUpdatedAt: (0, import_chunk_adx6804h.n)().nullish().transform((e) => e ?? void 0).optional(), ttlMs: (0, import_chunk_adx6804h.E)().nullish().transform((e) => e ?? void 0).optional(), pollIntervalMs: (0, import_chunk_adx6804h.E)().nullish().transform((e) => e ?? void 0).optional() })), UXl = (0, import_chunk_2cbgkbm2.p)(() => z().extend({ resultType: (0, import_chunk_adx6804h.v)("task") })), nor = "com.anthropic/agent-task", fe = 2e4, pe = 64, me = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ sessionId: (0, import_chunk_adx6804h.n)().max(import_chunk_spnfty7j.Pbe).regex(import_chunk_spnfty7j.rZ).nullish().transform((e) => e ?? void 0).optional(), modelImmediateResponse: (0, import_chunk_adx6804h.n)().max(fe).nullish().transform((e) => e ?? void 0).optional(), taskId: (0, import_chunk_adx6804h.n)().max(import_chunk_spnfty7j.Pbe).regex(import_chunk_spnfty7j.rZ).nullish().transform((e) => e ?? void 0).optional(), merged: (0, import_chunk_adx6804h.P)().nullish().transform((e) => e ?? void 0).optional(), kind: (0, import_chunk_adx6804h.n)().max(pe).regex(import_chunk_spnfty7j.rZ).nullish().transform((e) => e ?? void 0).optional() }));
function BXl(e) {
  let i = V5o(e);
  if (i === void 0) return;
  let o = { ...i.sessionId !== void 0 && { sessionId: i.sessionId }, ...i.taskId !== void 0 && { taskId: i.taskId }, ...i.kind !== void 0 && { kind: i.kind }, ...i.merged !== void 0 && { merged: i.merged } };
  return Object.keys(o).length > 0 ? { [nor]: o } : void 0;
}
function V5o(e) {
  if (typeof e !== "object" || e === null) return;
  let i = e[nor];
  if (i === void 0) return;
  let o = me().safeParse(i);
  return o.success ? o.data : void 0;
}
var ke = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ method: (0, import_chunk_adx6804h.n)().min(1).max(import_chunk_spnfty7j.Pbe).regex(import_chunk_spnfty7j.rZ), params: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).nullish().transform((e) => e ?? void 0).optional() })), K5o = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.zn)("status", [z().extend({ status: (0, import_chunk_adx6804h.v)("working") }), z().extend({ status: (0, import_chunk_adx6804h.v)("input_required"), inputRequests: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)().min(1).max(512), ke()).nullish().transform((e) => e ?? {}) }), z().extend({ status: (0, import_chunk_adx6804h.v)("completed"), result: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).nullish().transform((e) => e ?? {}) }), z().extend({ status: (0, import_chunk_adx6804h.v)("failed"), error: (0, import_chunk_adx6804h.$t)({ code: (0, import_chunk_adx6804h.E)().nullish().transform((e) => e ?? void 0).optional(), message: (0, import_chunk_adx6804h.n)().nullish().transform((e) => e ?? void 0).optional(), data: (0, import_chunk_adx6804h.ie)().optional() }).nullish().transform((e) => e ?? {}) }), z().extend({ status: (0, import_chunk_adx6804h.v)("cancelled") })]));
class WFa extends Error {
  constructor(e) {
    super(e);
    this.name = "TaskInputUnservableError";
  }
}
class jFa extends Error {
  constructor(e) {
    super(e);
    this.name = "TaskInputRefusedError";
  }
}
function GXt(e) {
  return Math.min(de, Math.max(N, e ?? ue));
}
function ror(e) {
  if (typeof e !== "object" || e === null) return false;
  if (Object.prototype.toString.call(e) === "[object DOMException]") return false;
  if (e instanceof Error && (e.name === "AbortError" || e.name === "TimeoutError" || e.message.startsWith("SSE error: ") || e.message.startsWith("Streamable HTTP error: "))) return false;
  return "code" in e && typeof e.code === "number" && "message" in e && typeof e.message === "string";
}
function ge(e) {
  return ror(e) || e instanceof Error && (e.name === "UnauthorizedError" || "status" in e && typeof e.status === "number");
}
function GFa(e) {
  if (Q(e)) return false;
  return e === -32603 || e === -32700 || e >= -32099 && e <= -32e3;
}
function Q(e) {
  return e === -32021 || e === -32003;
}
function R8r(e) {
  return e === -32601 || Q(e);
}
var uUe = Symbol("TASK_DRIVE_QUIET_STOP");
async function lni({ task: e, request: i, signal: o, onStatus: W, resolveInputRequest: J, log: h, errorText: T = import_chunk_jbjjrhxt.Qte, isSignInRefusal: Y, answeredKeys: Z, outstandingInputKeys: ee, sizeRefusal: U = { seen: false }, endsAtFirstFailedPoll: te, isAnswerTooLarge: se, holdsProcess: ne, pollerWait: C, onPollSent: re, pollHeaders: ae, questions: d }) {
  let { taskId: r } = e, q = { [A8r]: r }, O = Z ?? /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Map(), x = ee ?? { served: /* @__PURE__ */ new Set(), capLogged: false }, j = GXt(e.pollIntervalMs), R, b = 0, A = 0, m = () => {
    if (o.reason === uUe) return;
    i("tasks/cancel", { taskId: r }, { headers: q, signal: AbortSignal.timeout(import_chunk_507k3c1m.Rje) }).then(() => h?.(`task ${r}: cancel sent`), (u) => h?.(`task ${r}: cancel failed: ${T(u)}`));
  }, V = true;
  e: for (; ; ) {
    if (V) V = false;
    else {
      let s = R ?? j;
      R = void 0;
      let a = ne === false;
      await (d?.sleep(s, o, { unref: a }) ?? (0, import_chunk_5appeerh.K)(s, o, { unref: a }));
    }
    if (C !== void 0) await C.untilPoll(o), C.polled();
    if (o.aborted) return m(), { status: "error", error: { kind: "cancelled", message: "Task cancelled" } };
    let u;
    try {
      re?.();
      let s = await i("tasks/get", { taskId: r }, { headers: { ...q, ...ae?.() }, signal: o }), a = K5o().safeParse(s);
      if (!a.success) {
        m();
        let k = a.error.issues.slice(0, 3), g = a.error.issues.map((l) => l.code);
        return { status: "error", error: { kind: "malformed", message: `the server's answer about the task was not one this client can read (${g.length === 1 ? "1 fault" : `${g.length} faults`}: ${(0, import_chunk_4smdap7r.M)(g).sort().join(", ")}), so Claude Code asked the server to cancel it`, faults: { issuePath: (0, import_chunk_78g0060s.lE)(k.map((l) => (0, import_chunk_p6a07y1c.Ton)(l.path, () => ce) || (0, import_chunk_78g0060s.S)("root"))), issueCode: (0, import_chunk_78g0060s.lE)(k.map((l) => (0, import_chunk_78g0060s.f)(l.code))), input_type: (0, import_chunk_78g0060s.lE)(k.map((l) => {
          let w = l.path.reduce((_, t) => typeof _ === "object" && _ !== null ? Reflect.get(_, t) : void 0, s);
          return (0, import_chunk_78g0060s.f)(w === null ? "null" : Array.isArray(w) ? "array" : typeof w);
        })), count: g.length } } };
      }
      u = a.data, b = 0, U.seen = false;
    } catch (s) {
      if (o.aborted) return m(), { status: "error", error: { kind: "cancelled", message: "Task cancelled" } };
      let a = ror(s) && le().safeParse(s.data).success;
      if (ror(s) && !GFa(s.code) && !a) return { status: "error", error: { kind: "poll_failed", message: `tasks/get failed for task ${r}: ${s.message}`, code: s.code, data: s.data } };
      let k = s instanceof Error && s.name === "HttpBodyOverflowError";
      if (k || a && U.seen || se?.(s) === true) return h?.(`task ${r}: the answer was too large (${k ? "over this client's size cap" : a ? "refused by Anthropic's MCP proxy" : "the connection closed over the size cap"})`), m(), { status: "error", error: { kind: "answer_too_large", message: "The answer to a status request for the task was too large, so it was not read. The tool may have run: check whether it did before running it again, and when you run it again, ask for less data.", ...!k && !a && { connectionClosed: true } } };
      U.seen ||= a;
      let g = await Y?.(s).catch((w) => (h?.(`task ${r}: could not tell whether the server asks for a sign-in: ${T(w)}`), false));
      if (o.aborted) return m(), { status: "error", error: { kind: "cancelled", message: "Task cancelled" } };
      if (g === true) return { status: "error", error: { kind: "poll_failed", message: `a poll of task ${r} was refused: ${T(s)}`, signInRefused: true } };
      b += 1;
      let l = te?.() === true ? 1 : H;
      if (h?.(`task ${r}: poll failure ${b}/${l}: ${T(s)}`), b >= l) {
        if (ror(s) && s.code === import_chunk_hy0sycbj.uTr && C?.isInForce() !== true) return m(), { status: "error", error: { kind: "poll_failed", message: `tasks/get failed for task ${r}: ${s.message} Claude Code asked the server to cancel the task.`, code: s.code } };
        return { status: "error", error: { kind: "poll_failed", ...ge(s) ? { message: `${b} polls of task ${r} failed in a row, the last with an error answer: ${T(s)}`, answered: true } : { message: `Lost contact with task ${r} after ${b} failed polls: ${T(s)}` } } };
      }
      continue;
    }
    if (W?.(u), j = GXt(u.pollIntervalMs ?? j), u.status !== "input_required") A = 0, d?.takeOpen(), d?.updateHold([]), d?.set(void 0);
    switch (u.status) {
      case "working":
        continue;
      case "completed":
        return { status: "completed", result: u.result };
      case "failed":
        return { status: "error", error: { kind: "failed", message: u.error.message ?? u.statusMessage ?? "Task failed", code: u.error.code, data: u.error.data } };
      case "cancelled":
        return { status: "error", error: { kind: "cancelled", message: u.statusMessage ?? "Task was cancelled by the server" } };
      case "input_required": {
        let s = Object.entries(u.inputRequests), a = s.filter(([, { method: t }]) => t === "elicitation/create").map(([t]) => t), k = a.length > 0 && a.every((t) => O.has(t));
        if (d?.takeOpen() && k) a.forEach((t) => O.delete(t));
        if (d?.updateHold(a)) {
          d.set("off_screen");
          continue;
        }
        let g = s.filter(([t]) => !O.has(t)), l = g.filter(([t]) => !G.has(t));
        if (g.length > 0 && l.length === 0) return m(), { status: "error", error: { kind: "unsupported_input", message: `Task ${r}: the server rejected the submitted answer to ${g.map(([t]) => t).join(", ")} and still requires input` } };
        let w = l.filter(([t]) => {
          if (x.served.has(t)) return true;
          if (x.served.size >= X) {
            if (!x.capLogged) h?.(`task ${r}: reached ${X} distinct input-request keys; ignoring new keys`), x.capLogged = true;
            return false;
          }
          return x.served.add(t), true;
        });
        if (w.length === 0) {
          let t = d?.graceLeftMs() ?? 0;
          if (k && t > 0) R = Math.min(j, GXt(t));
          d?.set(k && t <= 0 ? "off_screen" : void 0);
          continue;
        }
        let _ = {};
        for (let [t, D] of w) {
          if (o.aborted) break;
          let I;
          if (L.has(t)) I = L.get(t);
          else {
            if (a.includes(t)) d?.set("asking");
            try {
              I = await J(t, D);
            } catch (y) {
              if (y instanceof WFa) return m(), { status: "error", error: { kind: "input_unservable", message: "the task asked the user a question that this session cannot show yet, so Claude Code asked the server to cancel it" } };
              if (y instanceof jFa) return m(), { status: "error", error: { kind: "unsupported_input", message: y.message } };
              throw y;
            }
            if (d && I === import_chunk_a5aq0pxy.esr) {
              d.putAside(t);
              continue e;
            }
            if (I === void 0) {
              m();
              let y = import_chunk_hcjp5g4r.o7r.find((oe) => oe === D.method);
              return { status: "error", error: { kind: "unsupported_input", message: y === void 0 ? "the task asked for input of a kind this client does not serve, so Claude Code asked the server to cancel it" : `the task's request for input (${y}) was not one this client could serve, so Claude Code asked the server to cancel it` } };
            }
            L.set(t, I);
          }
          _[t] = I;
        }
        if (d?.set(void 0), o.aborted) return m(), { status: "error", error: { kind: "cancelled", message: "Task cancelled" } };
        try {
          await i("tasks/update", { taskId: r, inputResponses: _ }, { headers: q, signal: o }), A = 0;
          for (let t of Object.keys(_)) O.add(t), L.delete(t);
          d?.answered(), h?.(`task ${r}: answered ${Object.keys(_).join(", ")}`);
        } catch (t) {
          if (o.aborted) return m(), { status: "error", error: { kind: "cancelled", message: "Task cancelled" } };
          if (ror(t) && R8r(t.code)) return { status: "error", error: { kind: "poll_failed", message: `tasks/update failed for task ${r}: ${t.message}`, code: t.code, data: t.data } };
          if (ror(t) && !GFa(t.code)) {
            for (let D of Object.keys(_)) G.add(D);
            h?.(`task ${r}: tasks/update JSON-RPC error ${t.code} (${t instanceof Error ? t.message : String(t)}); re-polling for real state`), R = N;
            continue;
          }
          if (A += 1, h?.(`task ${r}: tasks/update failure ${A}/${H}: ${T(t)}`), A >= H) return { status: "error", error: { kind: "poll_failed", message: `Lost contact with task ${r} after ${A} failed tasks/update attempts: ${T(t)}`, phase: "update" } };
          R = N;
          continue;
        }
        R = N;
        continue;
      }
    }
  }
}
