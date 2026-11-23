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
var chunk_apabe2ab_exports = {};
__export(chunk_apabe2ab_exports, {
  _1o: () => _1o,
  iBs: () => iBs,
  sBs: () => sBs
});
module.exports = __toCommonJS(chunk_apabe2ab_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_szvrpg0x = require("/$bunfs/root/chunk-szvrpg0x.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_kypvvv9j = require("/$bunfs/root/chunk-kypvvv9j.js");
var import_chunk_0kyr8hth = require("/$bunfs/root/chunk-0kyr8hth.js");
var import_chunk_bt1rb78k = require("/$bunfs/root/chunk-bt1rb78k.js");
var import_chunk_2spyw17x = require("/$bunfs/root/chunk-2spyw17x.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_v6cdm8tp = require("/$bunfs/root/chunk-v6cdm8tp.js");
var import_chunk_myvyhcm0 = require("/$bunfs/root/chunk-myvyhcm0.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_49zxha55 = require("/$bunfs/root/chunk-49zxha55.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_path = require("path");
var import_promises = require("fs/promises");
var import_path2 = require("path");
var import_promises2 = require("fs/promises");
var import_path3 = require("path");
(0, import_chunk_adx6804h.B)();
var it = ["**/.claude/scheduled_tasks.lock", "**/.claude/scheduled_tasks.json", "**/.claude/routines/.state/", "**/.claude/worktrees/", "**/.claude/checkpoints/", "**/.claude/mailbox/", "**/.claude/agent-registry.json", "**/.claude/agent-memory-local", "**/.claude/first-run", "**/.claude/assistant-daemon-state.json"], we = "# claude-code-runtime", We = [we, ...it, ""].join(`
`);
async function Ue(o) {
  if (!(0, import_chunk_szvrpg0x.Wa)().claim(`claude_runtime_exclude_ensured:${o}`)) return;
  try {
    if (!(0, import_chunk_sghy0qej.Pe)(import_chunk_2spyw17x.UQs, { safe: true })) {
      let N = await (0, import_chunk_w5s307zm.UM)(o);
      if (!N) return;
      let z = await (0, import_chunk_w5s307zm.c2)(N) ?? N, F = (0, import_path3.join)(z, "info", "exclude"), K = "";
      try {
        if (K = await (0, import_promises2.readFile)(F, "utf-8"), K.includes(we)) return;
      } catch (G) {
        if ((0, import_chunk_jv7av99m.w)(G) !== "ENOENT") throw G;
        await (0, import_promises2.mkdir)((0, import_path3.join)(z, "info")).catch((se) => {
          if ((0, import_chunk_jv7av99m.w)(se) !== "EEXIST") throw se;
        });
      }
      let Z = K && !K.endsWith(`
`) ? `
` : "";
      await (0, import_promises2.appendFile)(F, Z + We);
      return;
    }
    let s = (0, import_chunk_w5s307zm.dr)(o);
    if (s === null) return;
    let d = (0, import_chunk_kypvvv9j.Tg)(s);
    if (d === null) {
      ye((0, import_path3.join)(s, ".git", "info", "exclude"), "Claude Code could not confirm that this checkout\u2019s .git belongs to it (the .git holds a commondir file, is a symlink, or is a .git file whose git folder does not point back here, as with --separate-git-dir)");
      return;
    }
    let h = d.commonDir, f = (0, import_path3.join)(h, "info", "exclude"), T = await (0, import_promises2.lstat)((0, import_path3.join)(h, "HEAD")).catch(() => null), k = await (0, import_promises2.lstat)((0, import_path3.join)(h, "objects")).catch(() => null);
    if (!T?.isFile() || !k?.isDirectory()) {
      ye(f, "its git folder lacks a HEAD file or an objects folder of its own (a symbolic link does not count)");
      return;
    }
    let b = await (0, import_chunk_2spyw17x.w5r)(h, (N) => N.toString("utf-8").includes(we) ? null : We);
    if (b.kind === "skipped") ye(f, b.reason);
  } catch (s) {
    (0, import_chunk_w578pjby.t)(`ensureClaudeRuntimeFilesExcluded: ${s}`);
  }
}
function ye(o, s) {
  (0, import_chunk_w578pjby.t)(`Not adding ignore rules for the files Claude Code writes under .claude/ to ${o}: ${s}. Those files may show as untracked in git status.`, { level: "warn" });
}
var lt = (0, import_path2.join)(".claude", "scheduled_tasks.lock"), ut = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ sessionId: (0, import_chunk_adx6804h.n)(), pid: (0, import_chunk_adx6804h.E)(), procStart: (0, import_chunk_adx6804h.n)().optional(), acquiredAt: (0, import_chunk_adx6804h.E)() }));
function oe(o) {
  return (0, import_path2.join)(o ?? (0, import_chunk_f9x2f6cx.Oo)(), lt);
}
async function Xe(o) {
  let s;
  try {
    s = await (0, import_promises.readFile)(oe(o), "utf8");
  } catch {
    return;
  }
  let d = ut().safeParse((0, import_chunk_0jve1fep.et)(s, false));
  return d.success ? d.data : void 0;
}
async function qe(o, s) {
  let d = oe(s), h = (0, import_chunk_w578pjby._)(o);
  try {
    return await (0, import_promises.writeFile)(d, h, { flag: "wx" }), true;
  } catch (f) {
    let T = (0, import_chunk_jv7av99m.w)(f);
    if (T === "EEXIST") return false;
    if (T === "ENOENT") {
      await (0, import_promises.mkdir)((0, import_path2.dirname)(d), { recursive: true });
      try {
        return await (0, import_promises.writeFile)(d, h, { flag: "wx" }), true;
      } catch (k) {
        if ((0, import_chunk_jv7av99m.w)(k) === "EEXIST") return false;
        throw k;
      }
    }
    throw f;
  }
}
function Ie(o, s, d) {
  o.unregisterCleanup?.(), o.ownerKey = s, o.unregisterCleanup = (0, import_chunk_w578pjby.Ct)(async () => {
    await Y(o, d);
  });
}
async function _e(o, s) {
  let d = s?.dir;
  if ((0, import_chunk_0kyr8hth.Edo)(d)) return false;
  await Ue(d ?? (0, import_chunk_f9x2f6cx.Oo)());
  let h = s?.lockIdentity ?? (0, import_chunk_f9x2f6cx.W)(), f = { sessionId: h, pid: process.pid, procStart: (0, import_chunk_rb36kwbn.aFe)(), acquiredAt: Date.now() };
  if (await qe(f, d)) return o.lastBlockedBy = void 0, Ie(o, h, s), (0, import_chunk_w578pjby.t)(`[ScheduledTasks] acquired scheduler lock (PID ${process.pid})`), true;
  let T = await Xe(d);
  if (T?.sessionId === h) {
    if (T.pid !== process.pid || o.ownerKey === void 0) await (0, import_promises.writeFile)(oe(d), (0, import_chunk_w578pjby._)(f)), Ie(o, h, s);
    return true;
  }
  if (T && (0, import_chunk_v6cdm8tp.Rd)(T.pid) && await (0, import_chunk_rb36kwbn.GC)(T.pid, T.procStart)) {
    if (o.lastBlockedBy !== T.sessionId) o.lastBlockedBy = T.sessionId, (0, import_chunk_w578pjby.t)(`[ScheduledTasks] scheduler lock held by session ${T.sessionId} (PID ${T.pid})`);
    return false;
  }
  if (T) (0, import_chunk_w578pjby.t)(`[ScheduledTasks] recovering stale scheduler lock from PID ${T.pid}`);
  if (await (0, import_promises.unlink)(oe(d)).catch(() => {
  }), await qe(f, d)) return o.lastBlockedBy = void 0, Ie(o, h, s), true;
  return false;
}
async function Y(o, s) {
  let { ownerKey: d } = o;
  if (o.reset(), d === void 0) return;
  let h = s?.dir;
  try {
    h ??= (0, import_chunk_f9x2f6cx.Oo)();
  } catch {
    return;
  }
  let f = await Xe(h);
  if (f?.sessionId !== d) return;
  if (f.pid !== process.pid && (0, import_chunk_v6cdm8tp.Rd)(f.pid) && await (0, import_chunk_rb36kwbn.GC)(f.pid, f.procStart)) return;
  try {
    await (0, import_promises.unlink)(oe(h)), (0, import_chunk_w578pjby.t)("[ScheduledTasks] released scheduler lock");
  } catch {
  }
}
class be {
  unregisterCleanup = void 0;
  ownerKey = void 0;
  lastBlockedBy = void 0;
  reset() {
    this.unregisterCleanup?.(), this.unregisterCleanup = void 0, this.ownerKey = void 0, this.lastBlockedBy = void 0;
  }
}
var Qe = require("/$bunfs/root/chunk-08xt8741.js"), ht = 1e3, kt = 300, mt = 5e3;
function gt(o, s, d) {
  if (d === 0) return false;
  return Boolean(o.recurring && !o.permanent && s - o.createdAt >= d);
}
async function pt(o, s, d) {
  let h = (0, import_chunk_q3a5dy2r.jC)(d), f = (0, import_chunk_w578pjby.le)(), T = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set();
  for (let { createdBySessionId: b } of o) if (b !== void 0 && b !== s) k.add(b);
  if (await Promise.all(Array.from(k, async (b) => {
    if ((0, import_chunk_q3a5dy2r.cB)(b) === null) return;
    if (await f.lstat((0, import_path.join)(h, `${b}.jsonl`)).then((z) => z.isFile(), (z) => {
      let F = (0, import_chunk_jv7av99m.w)(z);
      if (F !== "ENOENT" && F !== "ENOTDIR") (0, import_chunk_w578pjby.t)(`[ScheduledTasks] could not look for a transcript of task creator ${b} (${F}); treating it as not found`);
      return false;
    })) T.add(b);
  })), T.size < k.size) (0, import_chunk_w578pjby.t)(`[ScheduledTasks] found no transcript in ${h} for ${k.size - T.size} other session(s) named in scheduled_tasks.json (a file copied from another checkout looks like this); this session will not run their tasks`);
  return T;
}
var ce = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Set(), (o) => o.clear());
function ue(o, s) {
  return `${o ?? ""}\0${s}`;
}
function sBs(o) {
  let { onFire: s, isLoading: d, assistantMode: h = false, onFireTask: f, onMissed: T, dir: k, lockIdentity: b, getJitterConfig: N, isKilled: z, filter: F, getExtraTasks: K, leaseFileTasks: Z = () => true, getSignIn: G, onOtherSignIn: se } = o, J = k || b ? { dir: k, lockIdentity: b } : void 0, X = new be(), ie = k !== void 0 ? b : (0, import_chunk_f9x2f6cx.W)(), fe = /* @__PURE__ */ new Set(), he = null, ee = [], ae = [], v = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Set(), te = /* @__PURE__ */ new Set(), Ee = /* @__PURE__ */ new Set(), q = null, ne = null, H = null, V = null, M = false, j = false, xe = /* @__PURE__ */ new Set(), Le = "", ke = /* @__PURE__ */ new Map();
  function Ze(r, S) {
    if (!(0, import_chunk_v6cdm8tp.Rd)(r)) return ke.delete(r), true;
    if (S === void 0) return false;
    let y = Date.now(), g = ke.get(r);
    if (!g || y - g.at >= 6e4) g = { at: y, token: (0, import_chunk_rb36kwbn.tRt)(r) }, ke.set(r, g);
    return g.token !== void 0 && g.token !== S;
  }
  function je(r) {
    return (0, import_chunk_q3a5dy2r.Fhe)(r, (0, import_chunk_q3a5dy2r.Nke)());
  }
  function tt(r) {
    if (r.createdInProject !== void 0) return je(r.createdInProject) === Le;
    return r.createdBySessionId !== void 0 && xe.has(r.createdBySessionId);
  }
  function Be(r) {
    return G !== void 0 && (0, import_chunk_0kyr8hth.Ado)(r, G(), De(r));
  }
  function me(r) {
    return !Be(r) && Oe(r);
  }
  function De(r) {
    if (r.createdBySessionId === void 0) return false;
    if (r.createdBySessionId === ie) return true;
    return fe.has(r.createdBySessionId) && (0, import_chunk_0kyr8hth.Cdo)(r, import_chunk_rb36kwbn.iFe.token);
  }
  function Oe(r) {
    if (r.createdBySessionId === void 0) return j;
    return De(r) || j && tt(r) && (r.createdByPid === void 0 || Ze(r.createdByPid, r.createdByProcStart));
  }
  function ge(r) {
    if (r.length === 0) return;
    (0, import_chunk_0kyr8hth.n$t)(r.map((S) => S.id), k).catch((S) => (0, import_chunk_w578pjby.t)(`[ScheduledTasks] failed to remove tasks: ${(0, import_chunk_0kyr8hth._hr)(S)}`, { level: "error" }));
  }
  async function Re(r) {
    let S = [], y = (0, import_chunk_0kyr8hth.Qvi)(k) || (0, import_chunk_0kyr8hth.Zvi)(k) ? [] : await (0, import_chunk_0kyr8hth.Cds)(k, S), g = K ? await K().catch((C) => {
      if ((0, import_chunk_szvrpg0x.Wa)().claim("cron_extra_tasks_load_bad")) (0, import_chunk_cqa9hrgx.m)("routine_register_trigger", "extra_tasks_load_failed");
      return (0, import_chunk_w578pjby.t)(`[ScheduledTasks] getExtraTasks failed: ${C}`), [];
    }) : [], x = k ?? (0, import_chunk_f9x2f6cx.Oo)(), R = await pt(y.filter((C) => C.createdInProject === void 0), ie, x);
    if (M) return;
    if (ee = y, ae = g, xe = R, Le = je(x), !r) return;
    let e = false;
    for (let C of y) if (ie !== void 0 && C.createdBySessionId === ie && C.createdByPid !== process.pid) C.createdByPid = process.pid, C.createdByProcStart = (0, import_chunk_rb36kwbn.aFe)(), e = true;
    if (e) await (0, import_chunk_0kyr8hth.Tdo)(y, k, S).catch((C) => (0, import_chunk_w578pjby.t)(`[ScheduledTasks] failed to refresh task pids: ${C}`));
    let A = Date.now(), I = (0, import_chunk_0kyr8hth.hnl)(y, A).filter((C) => !C.recurring && !$e.has(C.id) && !ce.has(ue(k, C.id)) && (!F || F(C)) && me(C));
    if (I.length > 0) {
      for (let L of I) $e.add(L.id), v.set(L.id, 1 / 0);
      (0, import_chunk_y53wbr8a.a)("tengu_scheduled_task_missed", { count: I.length, taskIds: (0, import_chunk_49zxha55.O4n)(I.map((L) => L.id)) });
      let C = /* @__PURE__ */ new Set();
      try {
        if (Ae(I), T) {
          C = new Set(T(I, ge) ?? []);
          for (let L of C) ce.add(ue(k, L));
        } else s(_1o(I));
      } catch (L) {
        (0, import_chunk_w578pjby.t)(`[ScheduledTasks] could not surface ${I.length} missed one-shot task(s); they stay in scheduled_tasks.json for a later session`, { level: "error" }), (0, import_chunk_k449cc64.i)(Fe(L, "handler for missed scheduled tasks threw (message not reported: it may contain user text)"));
        return;
      }
      ge(I.filter((L) => !C.has(L.id))), (0, import_chunk_w578pjby.t)(`[ScheduledTasks] surfaced ${I.length - C.size} missed one-shot task(s), kept back ${C.size}`);
    }
  }
  function Ae(r) {
    if (k === void 0) (0, import_chunk_bt1rb78k.j6r)(r);
  }
  function Ne(r, S) {
    return te.has(r.id) || !S && ce.has(ue(k, r.id));
  }
  function pe() {
    if (z?.()) return;
    if (j && !Z()) j = false, Y(X, J);
    if (d() && !h) return;
    let r = Date.now(), S = /* @__PURE__ */ new Set(), y = [], g = N?.() ?? import_chunk_0kyr8hth.Eae;
    function x(e, A) {
      if (F && !F(e)) return;
      if (S.add(e.id), Ne(e, A)) return;
      let I = v.get(e.id);
      if (I === void 0) {
        let P = (0, import_chunk_0kyr8hth.r$t)(e, g);
        if (P === null) (0, import_chunk_cqa9hrgx.m)("cron_task_fire", "next_fire_unresolvable", { recurring: e.recurring ?? false });
        I = P ?? 1 / 0, v.set(e.id, I), (0, import_chunk_w578pjby.t)(`[ScheduledTasks] scheduled ${e.id} for ${I === 1 / 0 ? "never" : new Date(I).toISOString()}`);
      }
      if (r < I) return;
      (0, import_chunk_w578pjby.t)(`[ScheduledTasks] firing ${e.id}${e.recurring ? " (recurring)" : ""}`);
      let C = e.id.startsWith("routine:") ? (0, import_chunk_myvyhcm0.Zn)(e.id) : (0, import_chunk_49zxha55.Ce)(e.id);
      (0, import_chunk_y53wbr8a.a)("tengu_scheduled_task_fire", { recurring: e.recurring ?? false, taskId: C, autonomousLoopDefault: Qe.isLoopDefaultSentinel(e.prompt) });
      let L = { recurring: e.recurring ?? false, permanent: e.permanent ?? false }, Me = false, Ke = (0, import_chunk_0kyr8hth.zrn)(e, g), Te = gt(e, r, Ke), nt = Te ? { ...e, finalRunNotice: `Recurring job ${(0, import_chunk_w578pjby._)(e.id)} (cron ${(0, import_chunk_w578pjby._)(e.cron)}) has had its last run, just now, and is deleted: a recurring job ends ${(0, import_chunk_f64qna2j.vy)(Ke)} after it is created. Tell the user that it has ended, and that they can ask you to create it again. Do not create it again unless they ask.` } : e;
      try {
        if (!A) Ae([e]);
        if (f) Me = f(nt, () => ge([e])) === true;
        else s(e.prompt);
        (0, import_chunk_cqa9hrgx.u)("cron_task_fire", L);
      } catch (P) {
        let re = !A && !e.recurring;
        if (re) v.set(e.id, 1 / 0);
        if ((0, import_chunk_w578pjby.t)(re ? `[ScheduledTasks] delivering task ${e.id} failed (its handler threw); the task stays in scheduled_tasks.json for a later session` : `[ScheduledTasks] delivering task ${e.id} failed (its handler threw); this run is dropped and will not be retried`, { level: "error" }), (0, import_chunk_cqa9hrgx.m)("cron_task_fire", "handler_threw", L), (0, import_chunk_k449cc64.i)(Fe(P, "scheduled task fire handler threw (message not reported: it may contain user text)")), re) return;
      }
      if (Te) {
        let P = Math.floor((r - e.createdAt) / 1e3 / 60 / 60);
        (0, import_chunk_w578pjby.t)(`[ScheduledTasks] recurring task ${e.id} aged out (${P}h since creation), deleting after final fire`), (0, import_chunk_y53wbr8a.a)("tengu_scheduled_task_expired", { taskId: C, ageHours: P });
      }
      if (e.recurring && !Te) {
        let P = (0, import_chunk_0kyr8hth.yhr)(e.cron, r, e.id, g);
        if (P === null) (0, import_chunk_cqa9hrgx.l)("cron_task_fire", "reschedule_unresolvable");
        let re = P ?? 1 / 0;
        if (v.set(e.id, re), !A) y.push(e.id);
      } else if (A) (0, import_chunk_f9x2f6cx.J8)([e.id]), v.delete(e.id);
      else if (Me) ce.add(ue(k, e.id)), v.set(e.id, 1 / 0);
      else te.add(e.id), v.set(e.id, 1 / 0), (0, import_chunk_0kyr8hth.n$t)([e.id], k).catch((P) => (0, import_chunk_w578pjby.t)(`[ScheduledTasks] failed to remove task ${e.id}: ${(0, import_chunk_0kyr8hth._hr)(P)}`, { level: "error" })).finally(() => te.delete(e.id));
    }
    for (let e of ee) if (me(e)) x(e, false);
    let R = ee.filter((e) => !Ee.has(e.id) && Be(e) && G?.() !== null && (!F || F(e)) && Oe(e));
    if (R.length > 0) {
      for (let e of R) Ee.add(e.id);
      (0, import_chunk_w578pjby.t)(`[ScheduledTasks] not running ${R.map((e) => e.id).join(", ")}: not shown to be made under this session's organization; left in scheduled_tasks.json`), (0, import_chunk_y53wbr8a.a)("tengu_scheduled_task_other_sign_in", { count: R.length });
      try {
        se?.(R);
      } catch (e) {
        (0, import_chunk_k449cc64.i)(Fe(e, "handler for scheduled tasks of another sign-in threw"));
      }
    }
    if (y.length > 0) {
      for (let e of y) te.add(e);
      (0, import_chunk_0kyr8hth.mnl)(y, r, k).catch((e) => (0, import_chunk_w578pjby.t)(`[ScheduledTasks] failed to persist lastFiredAt: ${e}`)).finally(() => {
        for (let e of y) te.delete(e);
      });
    }
    if (k === void 0) for (let e of (0, import_chunk_f9x2f6cx.eu)().slice()) {
      x(e, true);
      let A = v.get(e.id);
      e.nextFireAt = A === 1 / 0 ? void 0 : A;
    }
    for (let e of ae) x(e, true);
    if (S.size === 0) {
      v.clear();
      return;
    }
    for (let e of v.keys()) if (!S.has(e)) v.delete(e);
  }
  async function Se() {
    if (M) return;
    q?.(), q = null;
    let { default: r } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-t3hqhh6s.js")));
    if (M) return;
    if (j = Z() ? await _e(X, J).catch(() => false) : false, M) {
      if (j) j = false, Y(X, J);
      return;
    }
    if (!j) H = setInterval(() => {
      if (!Z()) return;
      _e(X, J).then((y) => {
        if (M) {
          if (y) Y(X, J);
          return;
        }
        if (y) {
          if (j = true, H) clearInterval(H), H = null;
        }
      }).catch((y) => (0, import_chunk_w578pjby.t)(String(y), { level: "error" }));
    }, mt), H.unref?.();
    Re(true).then(pe);
    let S = (0, import_chunk_0kyr8hth.G5e)(k);
    V = ze(() => r.watch(S, { persistent: false, ignoreInitial: true, awaitWriteFinish: { stabilityThreshold: kt }, ignorePermissionErrors: true })), ne = setInterval(pe, ht), ne.unref?.();
  }
  function ze(r) {
    let S = r();
    S.on("error", (g) => (0, import_chunk_w578pjby.t)(`[ScheduledTasks] watcher error: ${g}`, { level: "warn" }));
    let y = () => {
      if (M || V !== S) return;
      V = ze(r), V.once("ready", () => void Re(false)), S.close().catch((g) => (0, import_chunk_w578pjby.t)(`[ScheduledTasks] watcher close failed: ${g}`, { level: "warn" }));
    };
    return S.on("add", y), S.on("change", y), S.on("unlink", () => {
      if (!M) {
        ee = [];
        let g = new Set(ae.map((x) => x.id));
        if (k === void 0) for (let x of (0, import_chunk_f9x2f6cx.eu)()) g.add(x.id);
        for (let x of v.keys()) if (!g.has(x)) v.delete(x);
      }
    }), S;
  }
  return { start() {
    if (M = false, q?.(), q = null, k !== void 0) {
      (0, import_chunk_w578pjby.t)(`[ScheduledTasks] scheduler start() \u2014 dir=${k}, hasTasks=${(0, import_chunk_0kyr8hth.q0n)(k)}`), Se();
      return;
    }
    if ((0, import_chunk_w578pjby.t)(`[ScheduledTasks] scheduler start() \u2014 enabled=${(0, import_chunk_f9x2f6cx.DLo)()}, hasTasks=${(0, import_chunk_0kyr8hth.q0n)()}`), fe.add((0, import_chunk_f9x2f6cx.W)()), he ??= (0, import_chunk_f9x2f6cx.Bp)((r) => {
      fe.add(r);
    }), !(0, import_chunk_f9x2f6cx.DLo)() && (h || K !== void 0 || (0, import_chunk_0kyr8hth.q0n)())) (0, import_chunk_f9x2f6cx.GOe)(true);
    if ((0, import_chunk_f9x2f6cx.DLo)()) {
      Se();
      return;
    }
    q = (0, import_chunk_f9x2f6cx.Dla)(() => void Se());
  }, stop() {
    if (M = true, q?.(), q = null, he?.(), he = null, ne) clearInterval(ne), ne = null;
    if (H) clearInterval(H), H = null;
    if (V?.close(), V = null, j) j = false, Y(X, J);
  }, getNextFireTime() {
    let r = 1 / 0;
    for (let S of v.values()) if (S < r) r = S;
    return r === 1 / 0 ? null : r;
  }, checkNow() {
    pe();
  }, isFireDue() {
    if (z?.()) return false;
    let r = Date.now(), S = N?.() ?? import_chunk_0kyr8hth.Eae, y = (g, x) => {
      let R = v.get(g.id) ?? (0, import_chunk_0kyr8hth.r$t)(g, S);
      return R !== null && r >= R && g.agentId === void 0 && (!F || F(g)) && !Ne(g, x);
    };
    return ee.some((g) => y(g, false) && me(g)) || k === void 0 && (0, import_chunk_f9x2f6cx.eu)().some((g) => y(g, true)) || ae.some((g) => y(g, true));
  } };
}
function _1o(o) {
  let s = o.length > 1, d = `The following one-shot scheduled task${s ? "s were" : " was"} missed while Claude was not running. ${s ? "They have" : "It has"} already been removed from .claude/scheduled_tasks.json.

Do NOT execute ${s ? "these prompts" : "this prompt"} yet. First use the AskUserQuestion tool to ask whether to run ${s ? "each one" : "it"} now. Only execute if the user confirms.`, h = o.map((f) => `${`[${(0, import_chunk_0kyr8hth.j6)(f.cron)}, created ${new Date(f.createdAt).toLocaleString()}]`}
${(0, import_chunk_7cfjrnwy.dLo)(f.prompt)}`);
  return `${d}

${h.join(`

`)}`;
}
function iBs(o) {
  let s = (0, import_chunk_4smdap7r.U)(o, (f) => (f.createdUnderSignIn ?? import_chunk_0kyr8hth.t$t) === import_chunk_0kyr8hth.t$t), d = o.length - s, h = [];
  if (d > 0) {
    let f = (0, import_chunk_7cfjrnwy.O)(d, "it", "them");
    h.push(`${Ve(d)}. Another organization may have created ${f}. To run ${f}, close this session and start Claude Code here signed in to the organization that created ${f}.`);
  }
  if (s > 0) {
    let f = (0, import_chunk_7cfjrnwy.O)(s, "it", "them");
    h.push(`${Ve(s)}. ${(0, import_chunk_7cfjrnwy.O)(s, "It names", "They name")} no organization. An older version or a sign-in without one saved ${f}. To run ${f}, close this session, then start Claude Code here with --resume on the session that created ${f}, signed in the same way as that session. Or schedule ${f} again.`);
  }
  return h.push("To remove a skipped task, ask Claude to list scheduled tasks and cancel it."), h.join(" ");
}
function Ve(o) {
  return `Skipped ${o} scheduled ${(0, import_chunk_7cfjrnwy.O)(o, "task")} in .claude/scheduled_tasks.json`;
}
function Fe(o, s) {
  let d = () => (0, import_chunk_jv7av99m.Ye)(Error("scheduled task handler threw (message not reported: it may contain user text)", { cause: o }), s);
  try {
    let h = (0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(o), s);
    return (0, import_chunk_jv7av99m.QB)(h) === s ? h : d();
  } catch {
    return d();
  }
}
