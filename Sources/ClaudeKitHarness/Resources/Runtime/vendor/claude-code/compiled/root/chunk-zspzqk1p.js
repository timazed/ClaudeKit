const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_zspzqk1p_exports = {};
__export(chunk_zspzqk1p_exports, {
  $No: () => $No,
  D1s: () => D1s
});
module.exports = __toCommonJS(chunk_zspzqk1p_exports);
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_4f4ysf31 = require("/$bunfs/root/chunk-4f4ysf31.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_mv0px8y8 = require("/$bunfs/root/chunk-mv0px8y8.js");
var import_chunk_yzcgh8yd = require("/$bunfs/root/chunk-yzcgh8yd.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_va7s0d6d = require("/$bunfs/root/chunk-va7s0d6d.js");
var import_promises = require("fs/promises");
(0, import_chunk_adx6804h.B)();
var $No = "RunMonitorCommand", yt = "refuse_under_other_rules", pt = "monitor_input", Rt = "this environment read no permission settings when it started, so it can't tell which rules apply and runs no monitor. Retrying won't help.", Et = "this environment was started with a permission rule that can't be fully applied to a monitor, so it runs none, whatever the command. Retrying won't help.", xt = 6e5, Tt = 4, kt = 1e5, vt = 64, Ot = 1024, mt = 33554432, At = 250, It = 500, Nt = 1500, Pt = 5, Lt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ command: (0, import_chunk_adx6804h.n)().min(1).max(kt).refine(import_chunk_xfj2cwfv.Kx, "command contains control characters"), timeout_ms: (0, import_chunk_adx6804h.E)().int().min(1e3), deny_rules: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().max(Ot)).max(vt).default([]), [pt]: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional(), [yt]: (0, import_chunk_adx6804h.v)(true) })), ae = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ monitor_event: (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.Ae)({ started: (0, import_chunk_adx6804h.v)(true) }), (0, import_chunk_adx6804h.Ae)({ lines: (0, import_chunk_adx6804h.n)(), suppressed: (0, import_chunk_adx6804h.E)().int().positive().optional() })]) })), de = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ ended: (0, import_chunk_adx6804h.F)(["exited", "deadline", "too_much_output", "call_ended"]), exitCode: (0, import_chunk_adx6804h.E)(), finalLines: (0, import_chunk_adx6804h.n)().optional(), suppressed: (0, import_chunk_adx6804h.E)().int().positive().optional(), outputPath: (0, import_chunk_adx6804h.n)().optional() }));
function zt({ tryConsume: w, killAfterMs: h, quietGapMs: t, now: e, send: o, onFlood: a }) {
  let r = 0, m = [], T = (M) => [M, ...m.filter((d) => !M.includes(d))].join(`
`), b, y = 0, R = false;
  return { take: (M) => {
    if (R) return;
    if (w()) {
      if (o({ lines: T(M), ...r > 0 && { suppressed: r } }), r = 0, m = [], e() - y > t) b = void 0;
      return;
    }
    if (r += 1, m = (0, import_chunk_trwykz8a.Sd)([...m, M].join(`
`)), y = e(), b ??= y, y - b > h) R = true, a();
  }, unreported: () => r, withDroppedMarkers: T };
}
var Ut = new import_chunk_2904xtvq.j(() => ({ running: 0 }));
async function Dt(w) {
  let h = await (0, import_promises.readdir)("/proc").catch(() => []), t = /* @__PURE__ */ new Map(), e = 0;
  return await Promise.all(h.filter((o) => /^\d+$/.test(o)).map(async (o) => {
    let a = await (0, import_promises.readFile)(`/proc/${o}/stat`, "utf8").catch(() => ""), r = (0, import_chunk_va7s0d6d.PL)(a);
    if ((0, import_chunk_va7s0d6d.tSn)(a) === w && r !== void 0) t.set(Number(o), r), e += (0, import_chunk_va7s0d6d.AF)((0, import_chunk_va7s0d6d.R2)(a)) ? 0 : 1;
  })), { pinned: t, alive: e };
}
async function Ht(w) {
  let h = w.pid;
  if (h <= 1) return;
  let t = async (o) => {
    if ((0, import_chunk_cg8dqz0a.x)() !== "linux" && (0, import_chunk_cg8dqz0a.x)() !== "wsl") try {
      return process.kill(-h, o);
    } catch {
      return false;
    }
    let { pinned: a, alive: r } = await Dt(h), m = a.get(h);
    if (m !== void 0 && m !== w.startToken) return false;
    if (o !== 0) await (0, import_chunk_865at33z.v7e)(a, o);
    return r > 0;
  }, e = await t("SIGTERM");
  for (let o = Date.now() + Nt; e && Date.now() < o; ) await (0, import_chunk_5appeerh.K)(50), e = await t(0);
  for (let o = 0; e && o < Pt; o++) e = await t("SIGKILL");
}
async function D1s(w, h, t) {
  let { command: e, timeout_ms: o, deny_rules: a, [pt]: r } = Lt().parse(w), m = (0, import_chunk_mv0px8y8.ESn)(t.meta);
  if (r !== void 0 && !m) throw Error("RunMonitorCommand was not run: its monitor_input goes with a ToolHost permission request that this server decides, and it brought none, or this server decides none. Retrying won't help.");
  if (m && (r === void 0 || a.length > 0)) throw Error("RunMonitorCommand was not run: a ToolHost permission request goes with the monitor_input it judged, and with no rules of its own. Retrying won't help.");
  let T = t.reportProgress;
  if (T === void 0) throw Error("RunMonitorCommand was not run: the call sent no progress token, so the command's output would have nowhere to go. Call again with _meta.progressToken set.");
  let b = t.launchPermissionContext;
  if (b === void 0) throw new import_chunk_jv7av99m.A(`RunMonitorCommand was not run: ${Rt}`, "RunMonitorCommand: read no launch settings");
  let y = (0, import_chunk_bzyb60p0.iQ)().filter((l) => (0, import_chunk_yzcgh8yd.mQs)([l]).length === 0);
  if (r === void 0 && [b.alwaysDenyRules, b.alwaysAskRules].flatMap((l) => Object.values(l).flatMap((f) => f ?? [])).some((l) => !a.includes(l) && !y.includes(l))) throw new import_chunk_jv7av99m.A(`RunMonitorCommand was not run: ${Et}`, "RunMonitorCommand: holds a rule that the call did not bring");
  let R = (0, import_chunk_f9x2f6cx.Rs)(t.session).cwd, D = false, M = t.session.subscribe(() => {
    D ||= (0, import_chunk_f9x2f6cx.Rs)(t.session).cwd !== R;
  }), d, H, Z;
  try {
    if (r === void 0) d = await t.checkAsServedTool(import_chunk_hn3cwwzt.ke, { command: e }, a);
    else {
      let { checkMonitorRun: l } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-qb9t3crq.js"))), f = await l({ name: $No, meta: t.meta, input: r, command: e, toolUseContext: t.toolUseContext(), launchPermissionContext: b });
      if (d = f, "claim" in f) H = f;
    }
    Z = "toolUseContext" in d ? (0, import_chunk_f9x2f6cx.Rs)(d.toolUseContext.session).cwd : R;
  } finally {
    M();
  }
  if ("rejection" in d && r !== void 0) throw new import_chunk_jv7av99m.A(d.rejection, "RunMonitorCommand: refused by the ToolHost check");
  if ("rejection" in d) throw new import_chunk_jv7av99m.A(d.rejection, "RunMonitorCommand: refused by the served Bash check");
  let { session: Q, abortController: G } = d.toolUseContext;
  if (D || (0, import_chunk_f9x2f6cx.Rs)(t.session).cwd !== R) throw Error("RunMonitorCommand was not run: another call changed the working directory while this one was being checked. Send it again to have it checked where it would now start.");
  let q = Ut.of(Q.host);
  if (q.running >= Tt) throw Error("RunMonitorCommand was not run: this environment already runs as many monitors as it allows at once. Stop one first.");
  let tt = H?.claim();
  if (tt === "barred") throw Error("RunMonitorCommand was not run: this session was already told that this call had not started, so it can no longer run. Send a new call.");
  if (tt === "started_before") throw Error("RunMonitorCommand was not run again: this very call was already started here once. Check what it did before you send a new call.");
  let u = new AbortController();
  q.running += 1, u.signal.addEventListener("abort", () => {
    q.running -= 1;
  }, { once: true });
  let et = () => G.signal.aborted || t.callerGone?.aborted === true, O = () => u.abort();
  G.signal.addEventListener("abort", O, { once: true }), t.callerGone?.addEventListener("abort", O, { once: true });
  let X = (l) => ({ summary: "stopped with its call", output: { ended: "call_ended", exitCode: l } }), Y, V;
  try {
    if (et()) return X(-1);
    let [{ exec: l }, f, { logFeatureSad: nt }, I, g] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-y3w0kcsd.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-496ce9eh.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-tde77zdh.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-vm00qxjm.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-ffwybfwb.js")))]), k = "exited", N, P = (i) => {
      if (!u.signal.aborted) k = i, N = i === "deadline" ? J.drain() : void 0, u.abort();
    }, ot = (i) => {
      T((0, import_chunk_w578pjby._)({ monitor_event: i })).catch(() => {
      });
    }, rt = false, it = () => {
      if (!rt) rt = true, ot({ started: true });
    }, ft = (i) => {
      it(), ot(i);
    }, ht = g.createTokenBucket(g.BUCKET_CAPACITY, g.TOKEN_REFILL_MS), L = zt({ tryConsume: () => ht.tryConsume(), killAfterMs: I.SUSTAINED_SUPPRESSION_KILL_MS, quietGapMs: g.TOKEN_REFILL_MS * 3, now: Date.now, send: ft, onFlood: () => P("too_much_output") }), J = I.createStreamLineBatcher((i) => {
      if (!u.signal.aborted) L.take(i);
    }), st = Math.min(o, xt), at = 0, { storageV5: wt, sessionEnvVars: _t, toolUseId: Ct, permissionPhase: bt } = d.toolUseContext, dt = (0, import_chunk_bzyb60p0.Ryt)(bt, { command: e }), W = f.shouldUseSandbox({ command: e }, { disableUnsandboxedCommands: dt }), ut = f.sandboxPolicyRefusal(W, e, false, "bash");
    if (ut !== null) throw nt("sandbox_exec", "sandbox_policy_refusal", { tool: (0, import_chunk_78g0060s.S)("monitor") }), new import_chunk_jv7av99m.A(ut, "RunMonitorCommand: refused by the sandbox policy");
    if (dt && !W) throw nt("sandbox_exec", "sandbox_gone_since_check", { tool: (0, import_chunk_78g0060s.S)("monitor") }), new import_chunk_jv7av99m.A(import_chunk_bzyb60p0.xyt, "RunMonitorCommand: the sandbox that the check counted on is gone");
    let s = await l(e, u.signal, "bash", { session: Q, cwd: Z, storageV5: wt, sessionEnvVars: _t, sandboxAttributionId: Ct, preventCwdChanges: true, shouldUseSandbox: W, timeout: st + 6e4, onStdout: (i) => {
      if (u.signal.aborted) return;
      if (at += i.length, at > mt) {
        P("too_much_output");
        return;
      }
      J.onData(i);
    } }), lt = s.pid === void 0 ? void 0 : { pid: s.pid, startToken: (0, import_chunk_va7s0d6d.PL)(await (0, import_promises.readFile)(`/proc/${s.pid}/stat`, "utf8").catch(() => "")) }, z;
    try {
      let i = s.status === "completed" ? (await s.result).preSpawnError : void 0;
      if (i !== void 0) throw new import_chunk_jv7av99m.A(i, "RunMonitorCommand: the shell could not be started");
      if (s.status === "killed") return X(-1);
      it(), s.taskOutput.spillToDisk(), z = "killed", Y = setTimeout(P, st, "deadline"), V = setInterval((St, gt) => {
        if (St.totalBytes > mt) gt("too_much_output");
      }, At, s.taskOutput, P);
      let U = await s.result;
      if (clearTimeout(Y), clearInterval(V), !u.signal.aborted) await Promise.race([s.outputEnded, (0, import_chunk_5appeerh.K)(It, u.signal)]);
      if (et()) return X(U.code);
      if (!u.signal.aborted) N = J.drain(), u.abort();
      if (k === "exited") z = { exitCode: U.code };
      return { summary: k === "exited" ? `exit ${U.code}` : k === "deadline" ? "stopped at its time limit" : "stopped for printing too much", output: { ended: k, exitCode: U.code, ...N !== void 0 && { finalLines: L.withDroppedMarkers(N) }, ...L.unreported() > 0 && { suppressed: L.unreported() }, outputPath: s.taskOutput.path } };
    } finally {
      if (lt !== void 0) await Ht(lt);
      if (await s.taskOutput.flush(), s.cleanup(), z !== void 0) {
        let { taskId: i } = s.taskOutput;
        (0, import_chunk_4f4ysf31.wan)(i, z), await (0, import_chunk_4f4ysf31.Lg)(i);
      }
    }
  } finally {
    clearTimeout(Y), clearInterval(V), u.abort(), H?.release(), G.signal.removeEventListener("abort", O), t.callerGone?.removeEventListener("abort", O);
  }
}
