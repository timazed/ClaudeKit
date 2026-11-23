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
var chunk_9yrg7phs_exports = {};
__export(chunk_9yrg7phs_exports, {
  ASa: () => ASa,
  CSa: () => CSa,
  Ekn: () => Ekn,
  J9t: () => J9t,
  Ojr: () => Ojr,
  Q9t: () => Q9t,
  RSa: () => RSa,
  Z9t: () => Z9t,
  ZGs: () => ZGs,
  dXn: () => dXn,
  fWo: () => fWo,
  lXn: () => lXn,
  uWo: () => uWo
});
module.exports = __toCommonJS(chunk_9yrg7phs_exports);
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_0kyr8hth = require("/$bunfs/root/chunk-0kyr8hth.js");
var import_chunk_d2tjaek4 = require("/$bunfs/root/chunk-d2tjaek4.js");
var import_chunk_ez1sysdb = require("/$bunfs/root/chunk-ez1sysdb.js");
var import_chunk_b7d04a6f = require("/$bunfs/root/chunk-b7d04a6f.js");
var import_chunk_66srb2mf = require("/$bunfs/root/chunk-66srb2mf.js");
var import_chunk_m417dzmj = require("/$bunfs/root/chunk-m417dzmj.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var te = 1e3, q = 10080, J9t = ["dontAsk", "auto", "default", "acceptEdits", "plan", "bypassPermissions"], N = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)().min(1), cron: (0, import_chunk_adx6804h.n)().refine((r) => (0, import_chunk_0kyr8hth.XCe)(r) !== null, { message: "invalid 5-field cron expression" }), prompt: (0, import_chunk_adx6804h.n)().min(1), directory: (0, import_chunk_adx6804h.n)().min(1), enabled: (0, import_chunk_adx6804h.P)().default(true), permissionMode: (0, import_chunk_adx6804h.F)([...J9t, import_chunk_pbteexar.T8]).transform((r) => r === import_chunk_pbteexar.T8 ? "default" : r).default("dontAsk"), model: (0, import_chunk_adx6804h.n)().optional(), runTimeoutMinutes: (0, import_chunk_adx6804h.E)().positive().max(q).default(30), maxQueued: (0, import_chunk_adx6804h.E)().int().positive().default(1) }).strict()), ZGs = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ tasks: (0, import_chunk_adx6804h.C)(N()).default([]).refine((r) => new Set(r.map((e) => e.id)).size === r.length, { message: "task ids must be unique" }), maxConcurrent: (0, import_chunk_adx6804h.E)().int().positive().default(1) }).strict()), j = /\r\n|[\r\n\u2028\u2029]/, CSa = ["start cron=", "result subtype=", "threw:", "refused:", "dropped ("];
function Q9t(r) {
  return r.split(j).join(" ");
}
function uWo() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "daemon.scheduled.status.json");
}
function fWo() {
  return import_chunk_hkvzj051.at.state("scheduled-status");
}
async function re(r, e) {
  let s = { workerPid: process.pid, workerProcStart: (0, import_chunk_rb36kwbn.aFe)(), writtenAt: Date.now(), tasks: r };
  if ((0, import_chunk_m15w38ag.ne)() && e) {
    try {
      let i = await e.write(fWo(), (0, import_chunk_w578pjby._)(s), { mode: 438 & ~process.umask() });
      if (!i.ok) (0, import_chunk_w578pjby.t)(`writeScheduledStatus: ${i.error.code}`);
    } catch (i) {
      (0, import_chunk_w578pjby.t)(`writeScheduledStatus: ${(0, import_chunk_jv7av99m.d)(i)}`);
    }
    return;
  }
  try {
    await (0, import_chunk_q7qjcthc.yr)(uWo(), (0, import_chunk_w578pjby._)(s));
  } catch {
  }
}
async function Ojr(r) {
  let e;
  if ((0, import_chunk_m15w38ag.ne)() && r !== void 0) {
    let u;
    try {
      u = await r.readText([fWo()]);
    } catch {
      return null;
    }
    if (!u.ok) return null;
    let l = u.value.items[0];
    if (!l.found) return null;
    e = l.value;
  } else try {
    e = await (0, import_promises.readFile)(uWo(), "utf8");
  } catch {
    return null;
  }
  let s = (0, import_chunk_0jve1fep.et)(e, false);
  if (!s || typeof s !== "object") return null;
  let i = s;
  if (typeof i.workerPid !== "number" || typeof i.tasks !== "object" || i.tasks === null) return null;
  try {
    process.kill(i.workerPid, 0);
  } catch {
    return null;
  }
  if (!await (0, import_chunk_rb36kwbn.GC)(i.workerPid, i.workerProcStart)) return null;
  return s;
}
var ASa = async (r, e, s, i, u) => {
  let { tasks: l, maxConcurrent: m } = ZGs().parse(r), { initializeErrorLogSink: y } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-f1nswdzb.js"))), { initializeAnalyticsSink: I } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-cyzc43gd.js")));
  if (y(), I(), !i.getAccessToken()) {
    if ((0, import_chunk_xcgcdx61.Wy)()) s("The scheduled tasks worker stopped. It has no login to use under an organization sign-in (not a claude.ai login). It starts again when the daemon restarts or when its entry in daemon.json changes. If the organization sign-in is still stored then, it stops again. To run scheduled tasks, run `claude auth logout`. Then run `claude auth login` and choose the account or organization that has your Claude subscription. Then restart the daemon."), process.exit(import_chunk_m417dzmj.n2);
    s("scheduled worker: not authed \u2014 run `claude auth login`"), process.exit(1);
  }
  let { awaitPolicyLimitsColdStart: z, stopPolicyLimits: T } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-7bg0909g.js")));
  if (e.aborted) return;
  if (e.addEventListener("abort", () => T(), { once: true }), await z(), e.aborted) return;
  let { query: H } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-ekmb99nb.js")));
  if (s(`scheduled worker started tasks=${l.length} maxConcurrent=${m}`), l.length === 0) {
    let a = setInterval(() => {
    }, 6e4);
    await new Promise((o) => {
      if (e.aborted) {
        o();
        return;
      }
      e.addEventListener("abort", () => o(), { once: true });
    }), clearInterval(a);
    return;
  }
  let A = [], R = /* @__PURE__ */ new Set(), S = null;
  function W(a, o) {
    for (let f of o.split(j)) s(`[${Q9t(a)}] ${f}`);
  }
  function v(a, o, f) {
    let [h, ...g] = f.split(j);
    if (s(`task=${Q9t(a)} ${o}${h}`), g.length > 0) W(a, g.join(`
`));
  }
  function Q(a) {
    let o = A.reduce((f, h) => h.task.id === a.id ? f + 1 : f, 0);
    if (o >= a.maxQueued) {
      v(a.id, "dropped (", `queue full: ${o}/${a.maxQueued})`);
      return;
    }
    A.push({ task: a }), S?.(), S = null;
  }
  let M = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Set(), G = Date.now();
  function O() {
    let a = {};
    for (let o of l) {
      let f = M.get(o.id);
      a[o.id] = { running: D.has(o.id), ...f !== void 0 && { lastFiredAt: f } };
    }
    re(a, u);
  }
  O();
  function V(a) {
    let o = M.get(a.id) ?? G;
    return (0, import_chunk_0kyr8hth.yhr)(a.cron, o, a.id, import_chunk_0kyr8hth.Eae);
  }
  let J = setInterval((a, o, f, h) => {
    let g = Date.now();
    for (let w of a) {
      if (!w.enabled) continue;
      let k = o(w);
      if (k === null) continue;
      if (k <= g) f.set(w.id, g), h(w);
    }
  }, te, l, V, M, Q);
  e.addEventListener("abort", () => {
    clearInterval(J);
    for (let a of R) a.abort();
    S?.(), S = null;
  });
  let x = /* @__PURE__ */ new Set();
  async function X(a) {
    let { task: o } = a, f = (0, import_chunk_d2tjaek4.kg)();
    if (f) {
      v(o.id, "refused:", ` ${f}`);
      return;
    }
    let h = new AbortController();
    R.add(h), D.add(o.id), O();
    let g = setTimeout((k) => k.abort(), Math.min(o.runTimeoutMinutes, q) * 6e4, h);
    v(o.id, "start cron=", `'${o.cron}' dir='${o.directory}'`);
    let w = (0, import_chunk_66srb2mf.Vf)({ pinToCurrentBinary: true });
    try {
      let k = H({ prompt: o.prompt, options: { cwd: o.directory, permissionMode: o.permissionMode, ...o.permissionMode === "bypassPermissions" && { allowDangerouslySkipPermissions: true }, ...o.model && { model: o.model }, systemPrompt: { type: "preset", preset: "claude_code" }, settingSources: ["user", "project", "local"], pathToClaudeCodeExecutable: w.cmd, executableArgs: w.prefixArgs, abortController: h, stderr: (b) => W(o.id, b.trimEnd()), workload: import_chunk_xfj2cwfv.xhe } });
      for await (let b of k) if (b.type === "result") v(o.id, "result subtype=", `${b.subtype} duration=${b.duration_ms}ms cost=$${b.total_cost_usd.toFixed(4)}`);
    } catch (k) {
      v(o.id, "threw:", ` ${k}`);
    } finally {
      clearTimeout(g), R.delete(h), D.delete(o.id), O();
    }
  }
  while (!e.aborted) {
    while (x.size < m && A.length > 0 && !e.aborted) {
      let a = A.shift(), o = X(a).finally(() => {
        x.delete(o), S?.(), S = null;
      });
      x.add(o);
    }
    if (e.aborted) break;
    if (A.length === 0 || x.size >= m) await new Promise((a) => {
      S = a;
    });
  }
  await Promise.allSettled(Array.from(x));
};
function K(r) {
  let e = r.scheduled, s = {};
  if (Array.isArray(e) && e.length > 0 && typeof e[0] === "object") s = e[0] ?? {};
  else if (e && typeof e === "object" && !Array.isArray(e)) s = e;
  let i = Array.isArray(s.tasks) ? s.tasks : [];
  return { ...s, tasks: i };
}
function U(r, e) {
  let s = r.scheduled;
  if (Array.isArray(s)) {
    let i = s.slice();
    i[0] = e, r.scheduled = i;
  } else r.scheduled = e;
}
function L(r, e) {
  return typeof r === "object" && r !== null && "id" in r && r.id === e;
}
async function Z9t(r, e, s, i) {
  return (0, import_chunk_cqa9hrgx.qo)("daemon_scheduled_add", async () => {
    N().parse(r);
    let u = false;
    return await (0, import_chunk_ez1sysdb.zIt)((l) => {
      let m = K(l), y = i?.existingId ?? r.id, I = m.tasks.filter((T) => !L(T, y));
      if (i && I.length === m.tasks.length) return false;
      let z = I.filter((T) => !L(T, r.id));
      z.push(r), U(l, { ...m, tasks: z }), u = true;
    }, e, s), u;
  });
}
var lXn = "Removing a scheduled task doesn't delete transcripts of its past runs on this computer, or anything Anthropic stored from those runs.";
async function dXn(r, e, s) {
  return (0, import_chunk_cqa9hrgx.qo)("daemon_scheduled_remove", async () => {
    let i = false;
    return await (0, import_chunk_ez1sysdb.zIt)((u) => {
      if (!("scheduled" in u)) return false;
      let l = K(u), m = l.tasks.filter((y) => !L(y, r));
      if (m.length === l.tasks.length) return false;
      if (m.length === 0) {
        let y = u.scheduled;
        if (Array.isArray(y) && y.length > 1) u.scheduled = y.slice(1);
        else delete u.scheduled;
      } else U(u, { ...l, tasks: m });
      if (!e || (0, import_path.resolve)(e) === (0, import_chunk_b7d04a6f.a6)()) (0, import_chunk_ez1sysdb.xSa)(u, r);
      i = true;
    }, e, s), i;
  });
}
async function Ekn(r, e) {
  let s = await (0, import_chunk_ez1sysdb.uXn)(r, e);
  if (!("scheduled" in s)) return [];
  let i = K(s), u = [];
  for (let l of i.tasks) {
    let m = N().safeParse(l);
    if (m.success) u.push(m.data);
  }
  return u;
}
async function RSa(r) {
  let e = await (0, import_chunk_ez1sysdb.uXn)(void 0, r);
  return (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ tasks: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.ie)()) }).catch({ tasks: [] })).parse([e.scheduled].flat()).flatMap((i) => i.tasks).flatMap((i) => {
    let u = (0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)() }).safeParse(i);
    return u.success ? [u.data.id] : [];
  });
}
