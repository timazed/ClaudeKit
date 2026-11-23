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
var chunk_4sncjgqg_exports = {};
__export(chunk_4sncjgqg_exports, {
  L3t: () => L3t,
  aFo: () => aFo,
  c$s: () => c$s,
  c9l: () => c9l,
  d$s: () => d$s,
  f$s: () => f$s,
  g$s: () => g$s,
  h$s: () => h$s,
  m$s: () => m$s,
  p$s: () => p$s,
  u$s: () => u$s
});
module.exports = __toCommonJS(chunk_4sncjgqg_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_jg3mepas = require("/$bunfs/root/chunk-jg3mepas.js");
var import_chunk_37zqqqnw = require("/$bunfs/root/chunk-37zqqqnw.js");
var import_chunk_4f4ysf31 = require("/$bunfs/root/chunk-4f4ysf31.js");
var import_chunk_06pt2b41 = require("/$bunfs/root/chunk-06pt2b41.js");
var import_chunk_mmh7d122 = require("/$bunfs/root/chunk-mmh7d122.js");
var import_chunk_pf5ex2vv = require("/$bunfs/root/chunk-pf5ex2vv.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var import_chunk_zsz02y6d = require("/$bunfs/root/chunk-zsz02y6d.js");
var import_chunk_cd75h1kz = require("/$bunfs/root/chunk-cd75h1kz.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_crypto = require("crypto");
var import_path = require("path");
var import_crypto2 = require("crypto");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path2 = require("path");
(0, import_chunk_adx6804h.B)();
(0, import_chunk_adx6804h.B)();
var ue = 24e4, q = 32, te = 32, ce = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ seen: (0, import_chunk_adx6804h.E)().int().min(0).optional(), life: (0, import_chunk_adx6804h.n)().max(64).optional(), hold_ms: (0, import_chunk_adx6804h.E)().int().min(0).max(ue).optional(), told: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().max(64)).max(q).optional(), tool_use_ids: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().min(1).max(256)).max(te).optional(), tool_host_interface: (0, import_chunk_adx6804h.ie)().optional() }));
function ne(e) {
  let o = { told: q, tool_use_ids: te }, r = (0, import_chunk_ma3kja9f.T)(e) ? Object.entries(o).find(([g, y]) => {
    let h = (0, import_chunk_xcgcdx61.ko)(e, g);
    return Array.isArray(h) && h.length > y;
  }) : void 0;
  if (r !== void 0) {
    let [g, y] = r;
    throw new import_chunk_jv7av99m.A(`ReadCalls: ${g} has more than ${y} entries`, "ReadCalls: a list has more entries than are taken");
  }
  return ce().parse(e);
}
(0, import_chunk_adx6804h.B)();
var se = 6e4, ae = 256, ke = 6048e5, we = 4 * ae, ve = 16, oe = 32768, G = ".json", Re = (0, import_chunk_2cbgkbm2.p)(() => {
  let e = (0, import_chunk_adx6804h.E)().int().min(0).max(Number.MAX_SAFE_INTEGER);
  return (0, import_chunk_adx6804h.c)({ v: (0, import_chunk_adx6804h.v)(1), container_start: (0, import_chunk_adx6804h.n)().min(1).max(64), listed: (0, import_chunk_adx6804h.c)({ taskId: (0, import_chunk_adx6804h.n)().refine((o) => (0, import_chunk_ed372ykp.uG)("local_bash", o)), output_path: (0, import_chunk_adx6804h.n)().max(4096), limit_ms: (0, import_chunk_adx6804h.E)().min(0).max(Number.MAX_SAFE_INTEGER) }).transform((o) => (0, import_chunk_ed372ykp.Zao)(o.taskId, o.output_path) ? o : { ...o, output_path: "" }), started_at: e, written_at: e, ended: (0, import_chunk_adx6804h.c)({ how: (0, import_chunk_adx6804h.zn)("state", [(0, import_chunk_adx6804h.c)({ state: (0, import_chunk_adx6804h.v)("exited"), exit_code: (0, import_chunk_adx6804h.E)().int() }), (0, import_chunk_adx6804h.c)({ state: (0, import_chunk_adx6804h.v)("time_limit") }), (0, import_chunk_adx6804h.c)({ state: (0, import_chunk_adx6804h.v)("stopped"), stopped_by: (0, import_chunk_adx6804h.v)("session") }), (0, import_chunk_adx6804h.c)({ state: (0, import_chunk_adx6804h.v)("killed"), reason: (0, import_chunk_adx6804h.F)(["daemon_exit", "output_limit", "container_stopped"]).optional().catch(void 0) })]).catch({ state: "killed" }), at: e }).optional() });
});
class J {
  #o;
  #e;
  #r;
  #a;
  #n = /* @__PURE__ */ new Map();
  constructor({ folder: e, failed: o, containerStartFile: r = (0, import_path2.join)("/dev/shm", `claude-${process.getuid?.() ?? 0}-container-start`), containerStart: g }) {
    this.#o = e, this.#a = o, this.#e = r, this.#r = g;
  }
  #s() {
    return this.#r ??= (async () => {
      let e = this.#e;
      await (0, import_promises.writeFile)(e, (0, import_crypto2.randomUUID)(), { flag: "wx", mode: 384 }).catch((r) => {
        if ((0, import_chunk_jv7av99m.w)(r) !== "EEXIST") throw r;
      });
      let o = await (0, import_promises.open)(e, import_fs.constants.O_RDONLY | import_fs.constants.O_NOFOLLOW | import_fs.constants.O_NONBLOCK);
      try {
        let r = await o.stat();
        if (!r.isFile() || r.uid !== process.getuid?.()) throw Error("The file that identifies this container start is not a regular file owned by this user.");
        let { buffer: g, bytesRead: y } = await o.read({ buffer: Buffer.alloc(64) }), h = g.subarray(0, y).toString("utf8").trim();
        if (h.length === 0) throw Error("The file that identifies this container start is empty.");
        return h;
      } finally {
        await o.close();
      }
    })().catch((e) => {
      throw this.#r = void 0, e;
    }), this.#r;
  }
  write(e) {
    this.#i(e.listed.taskId, async (o, r) => {
      if (await (0, import_chunk_q7qjcthc.FM)((0, import_path2.join)(o, e.listed.taskId + G), (0, import_chunk_w578pjby._)({ v: 1, ...e, container_start: r }), { flush: true, mode: 384 }), e.ended !== void 0) await re(o);
    });
  }
  remove(e) {
    this.#i(e, async (o) => {
      await (0, import_promises.unlink)((0, import_path2.join)(o, e + G)).catch((r) => {
        if ((0, import_chunk_jv7av99m.w)(r) !== "ENOENT") throw r;
      });
    });
  }
  async settled(e) {
    await this.#n.get(e);
  }
  async settledAll() {
    while (this.#n.size > 0) await Promise.all(this.#n.values());
    await this.#t().then((e) => e === void 0 ? void 0 : re(e)).catch(this.#a);
  }
  async readEarlier() {
    let e = await this.#s().catch((h) => {
      (0, import_chunk_w578pjby.t)(`mcp serve: could not read or make the file that identifies this container start, so commands that earlier daemons started are not listed: ${(0, import_chunk_jv7av99m.d)(h)}`, { level: "error" });
      return;
    }), o = e === void 0 ? void 0 : await this.#t().catch((h) => {
      (0, import_chunk_w578pjby.t)(`mcp serve: could not read the folder of saved background command records, so commands that earlier daemons started are not listed: ${(0, import_chunk_jv7av99m.d)(h)}`, { level: "error" });
      return;
    }), r = [];
    if (o !== void 0) {
      let h = 0;
      try {
        for await (let O of await (0, import_promises.opendir)(o)) {
          if (h++, O.name.endsWith(G) && (0, import_chunk_ed372ykp.uG)("local_bash", O.name.slice(0, -G.length))) r.push({ name: O.name, path: (0, import_path2.join)(o, O.name) });
          if (h >= we || r.length >= ae) break;
        }
      } catch (O) {
        (0, import_chunk_w578pjby.t)(`mcp serve: could not read the folder of saved background command records, so commands that earlier daemons started are not listed: ${(0, import_chunk_jv7av99m.d)(O)}`, { level: "error" });
      }
    }
    let g = Date.now(), y = [];
    for (let h of (0, import_chunk_pf5ex2vv.fnt)(r, ve)) y.push(...await Promise.all(h.map(async ({ name: O, path: M }) => {
      let R = await (0, import_promises.open)(M, import_fs.constants.O_RDONLY | import_fs.constants.O_NOFOLLOW | import_fs.constants.O_NONBLOCK).then(async (b) => {
        try {
          let k = await b.stat();
          if (!k.isFile() || k.size > oe) return;
          let { buffer: z, bytesRead: L } = await b.read({ buffer: Buffer.alloc(oe) });
          return z.subarray(0, L).toString("utf8");
        } finally {
          await b.close();
        }
      }).catch(() => {
        return;
      }), x = Re().safeParse(R === void 0 ? void 0 : (0, import_chunk_0jve1fep.et)(R, false));
      if (!x.success || x.data.listed.taskId + G !== O) return { fate: "unreadable" };
      let { container_start: K, listed: I, started_at: N, written_at: H, ended: Y } = x.data;
      if (g - H > ke) return this.remove(I.taskId), { fate: "too_old" };
      if (K === e && Y === void 0) return { fate: "maybe_still_running" };
      return Y === void 0 ? { fate: "container_stopped", command: { listed: I, started_at: N, ended: { how: { state: "killed", reason: "container_stopped" }, at: H } } } : { fate: "with_end", command: { listed: I, started_at: N, ended: Y } };
    })));
    return { commands: y.flatMap((h) => "command" in h ? [h.command] : []).toSorted((h, O) => h.ended.at - O.ended.at), counted: { with_end: (0, import_chunk_4smdap7r.U)(y, ({ fate: h }) => h === "with_end"), container_stopped: (0, import_chunk_4smdap7r.U)(y, ({ fate: h }) => h === "container_stopped"), maybe_still_running: (0, import_chunk_4smdap7r.U)(y, ({ fate: h }) => h === "maybe_still_running"), too_old: (0, import_chunk_4smdap7r.U)(y, ({ fate: h }) => h === "too_old"), unreadable: (0, import_chunk_4smdap7r.U)(y, ({ fate: h }) => h === "unreadable") } };
  }
  async #t(e = false) {
    let o = this.#o();
    if (e) await (0, import_promises.mkdir)(o, { recursive: true, mode: 448 });
    let r = await (0, import_promises.lstat)(o).catch((g) => {
      if ((0, import_chunk_jv7av99m.w)(g) !== "ENOENT") throw g;
      return;
    });
    if (r === void 0) return;
    if (!r.isDirectory() || r.uid !== process.getuid?.()) throw Error("The folder for background command records is a symbolic link or not a directory owned by this user.");
    return o;
  }
  #i(e, o) {
    let r = (this.#n.get(e) ?? Promise.resolve()).then(async () => {
      let g = await this.#s(), y = g === void 0 ? void 0 : await this.#t(true);
      if (g !== void 0 && y !== void 0) await o(y, g);
    }).catch(this.#a);
    this.#n.set(e, r), r.then(() => {
      if (this.#n.get(e) === r) this.#n.delete(e);
    });
  }
}
async function re(e) {
  let o = await (0, import_promises.open)(e, import_fs.constants.O_RDONLY | import_fs.constants.O_DIRECTORY | import_fs.constants.O_NOFOLLOW);
  try {
    await o.sync();
  } finally {
    await o.close();
  }
}
var aFo = "ReadCalls", d$s = "StopBackgroundCommand", c$s = "MoveRunningCommand", u$s = "AgentsEnded", Ee = 32, Oe = 3 * q, de = 1e3, Q = "anthropic/backgroundCommands";
function c9l(e) {
  return { experimental: { [Q]: { v: 1, life: e, moves: 1 } } };
}
var zt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ experimental: (0, import_chunk_adx6804h.c)({ [Q]: (0, import_chunk_adx6804h.c)({ v: (0, import_chunk_adx6804h.v)(1) }) }) }));
var Dt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ experimental: (0, import_chunk_adx6804h.c)({ [Q]: (0, import_chunk_adx6804h.c)({ moves: (0, import_chunk_adx6804h.v)(1) }) }) }));
var xe = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ taskId: (0, import_chunk_adx6804h.n)().min(1).max(64) })), Ie = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ tool_use_id: (0, import_chunk_mmh7d122.lDt)(), because: (0, import_chunk_adx6804h.F)(["message", "person"]) })), Te = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ tool_use_id: (0, import_chunk_mmh7d122.lDt)(), ended: (0, import_chunk_adx6804h.P)() }));
function ze({ interrupted: e, code: o, outputFileSize: r }) {
  return !e ? { state: "exited", exit_code: o } : { state: "killed", ...r !== void 0 && { reason: "output_limit" } };
}
class me {
  life = (0, import_crypto.randomUUID)();
  #o = 0;
  #e = /* @__PURE__ */ new Map();
  #r = /* @__PURE__ */ new Map();
  #a = /* @__PURE__ */ new Set();
  #n = (0, import_chunk_69qhefwa.Be)();
  #s;
  #t;
  #i = Promise.resolve();
  #d;
  #m;
  constructor(e = () => performance.now()) {
    this.#s = e;
  }
  keepRecordsIn(e, o = Date.now) {
    if (this.#t !== void 0) return;
    this.#t = { store: e, wallNow: o }, this.#i = this.#f(e, o), (0, import_chunk_w578pjby.Ct)(() => e.settledAll());
  }
  get restored() {
    return this.#i;
  }
  get version() {
    return this.#o;
  }
  starterFor(e) {
    return { reserve: () => {
      return;
    }, listMove: (o) => this.#c(e.toolUseId, o), ...e.sleepWatch !== void 0 && { sleepWatch: { mode: e.sleepWatch.mode, ...e.sleepWatch.agents_run && { agentsRun: () => !this.#a.has(e.toolUseId ?? "") }, keptShells: () => [...this.#e.values()].flatMap(({ pid: o, ended: r }) => o === void 0 || r ? [] : [o]) } }, adopt: (o, r, g, y) => {
      try {
        let h = this.#p(o, r, g, e, y);
        return this.#r.delete(e.toolUseId ?? ""), (0, import_chunk_cqa9hrgx.u)("mcp_serve_background_command"), h;
      } catch (h) {
        throw (0, import_chunk_cqa9hrgx.m)("mcp_serve_background_command", "not_kept"), o.kill(), o.cleanup(), h;
      }
    } };
  }
  taskIdOf(e) {
    return [...this.#e.values()].find(({ listed: o }) => o.tool_use_id === e)?.listed.taskId;
  }
  msSinceNewestDropped() {
    return this.#d === void 0 ? void 0 : Math.round(this.#s() - this.#d);
  }
  list() {
    let e = this.#s();
    return { life: this.life, commands_version: this.#o, commands: Array.from(this.#e.values(), ({ listed: o, startedAt: r, ended: g, unwanted: y, stallTail: h }) => ({ ...o, ...g ? { ...g.how, ended_ms_ago: Math.round(e - g.at) } : { state: "running", ...y && { told: true }, ...h !== void 0 && { stalled: true, output_tail: h } }, ran_ms: Math.round((g?.at ?? e) - r) })) };
  }
  forget(e) {
    let o = e.flatMap((r) => this.#e.get(r) ?? []);
    o.filter(({ ended: r }) => r).forEach(({ listed: r }) => {
      this.#e.delete(r.taskId), this.#t?.store.remove(r.taskId);
    }), o.filter(({ ended: r }) => !r).forEach((r) => {
      r.unwanted = true, this.#t?.store.remove(r.listed.taskId);
    });
  }
  stop(e) {
    return this.#e.get(e)?.cut({ state: "stopped", stopped_by: "session" }) ?? false;
  }
  moveRunning(e, o) {
    return this.#r.get(e)?.(o) ?? this.taskIdOf(e) !== void 0;
  }
  noteAgentsEnded(e, o) {
    if (this.#a.delete(e), o) this.#a.add(e);
    Array.from(this.#a).slice(0, -Ee).forEach((r) => this.#a.delete(r));
  }
  #c(e, o) {
    if (e === void 0) return () => {
    };
    return this.#r.set(e, o), () => {
      if (this.#r.get(e) === o) this.#r.delete(e);
    };
  }
  async changedSince(e, o) {
    let { promise: r, resolve: g } = Promise.withResolvers(), y = () => g(), h = this.#n.subscribe(y);
    if (o.addEventListener("abort", y, { once: true }), e !== this.#o || o.aborted) y();
    await r, h(), o.removeEventListener("abort", y);
  }
  #p(e, o, r, g, y) {
    let h = e.taskOutput.taskId, O = (0, import_chunk_4f4ysf31.cp)(h);
    if (!e.background(h, { atExit: "kill" })) throw Error("The command had already ended when it was to be moved to the background, and its output was not kept. Run it again without run_in_background.");
    let M = (0, import_chunk_37zqqqnw.Hhr)(o), R = { listed: { taskId: h, ...g.toolUseId !== void 0 && { tool_use_id: g.toolUseId }, ...g.agentId !== void 0 && { agent_id: g.agentId }, command: (0, import_chunk_7cfjrnwy.ee)(r, de), ...g.description && { description: (0, import_chunk_7cfjrnwy.ee)(g.description, de) }, output_path: O, limit_ms: M }, startedAt: this.#s(), pid: e.pid, cut: (b) => {
      if (R.ended || e.status !== "backgrounded") return false;
      return x(b), true;
    } }, x = (b, k) => {
      if (R.ended) return;
      let z = (0, import_chunk_37zqqqnw.eco)(r, e.taskOutput, k, b.state !== "exited", void 0);
      if (clearTimeout(K), N(), Y(), R.ended = { how: b, at: this.#s() }, this.#e.delete(h), R.unwanted) this.#t?.store.remove(h);
      else this.#e.set(h, R), this.#l(R);
      this.#u().forEach(() => (0, import_chunk_cqa9hrgx.l)("mcp_serve_background_command", "ending_dropped")), H.resolve(), this.#o++, this.#n.emit();
      try {
        if (e.status === "backgrounded") e.kill();
        e.cleanup(), (0, import_chunk_4f4ysf31.Dit)(h, b.state === "exited" ? `
[exited with code ${b.exit_code}]
` : `
[killed]
`), (0, import_chunk_4f4ysf31.Lg)(h), (0, import_chunk_w578pjby.t)(`mcp serve: background command ${h} ended: ${b.state}${b.state === "killed" && b.reason ? ` (${b.reason})` : ""}`);
        let L = { elapsed_ms: Math.round(R.ended.at - R.startedAt), requested_timeout_ms: o ?? 0, deadline_ms: M, outcome: (0, import_chunk_78g0060s.f)(b.state !== "exited" ? "killed" : b.exit_code === 0 ? "completed" : "failed"), stop_cause: b.state === "time_limit" ? (0, import_chunk_78g0060s.S)("deadline") : b.state === "killed" ? (0, import_chunk_78g0060s.fe)(b.reason) : void 0, stopped_by: (0, import_chunk_78g0060s.fe)(b.state === "stopped" ? b.stopped_by : void 0), subagent_owned: g.agentId !== void 0, unwanted: R.unwanted === true, trigger: y === "person" ? (0, import_chunk_78g0060s.S)("user") : y === "message" ? (0, import_chunk_78g0060s.S)("deliver_message") : g.movedAtTimeout ? (0, import_chunk_78g0060s.S)("timeout") : (0, import_chunk_78g0060s.S)("explicit"), ...(0, import_chunk_37zqqqnw.ron)(k?.shellUsage), tool_use_id: (0, import_chunk_37zqqqnw.ewt)(g.toolUseId), bash_command_kinds: z.commandClass?.bash_command_kinds, bash_programs: z.commandClass?.bash_programs, bash_test_scope: z.commandClass?.bash_test_scope, output_total_bytes: k === void 0 ? void 0 : e.taskOutput.outputFileSize };
        if ((0, import_chunk_37zqqqnw.tco)(z.testOutcome, (le) => (0, import_chunk_y53wbr8a.a)("tengu_background_shell_settled", { ...L, bash_test_outcome: le })), b.state === "exited") (0, import_chunk_37zqqqnw.nwt)(r, b.exit_code);
      } catch (L) {
        (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(L));
      }
    }, K = setTimeout(R.cut, M, { state: "time_limit" }).unref(), I = (b) => {
      R.stallTail = b, this.#o++, this.#n.emit();
    }, N = (0, import_chunk_37zqqqnw.nco)(h, (b) => {
      I(b), (0, import_chunk_cqa9hrgx.u)("task_local_shell_stall_detected");
    }, () => I(void 0)), H = Promise.withResolvers(), Y = (0, import_chunk_w578pjby.Ct)(async () => {
      R.cut({ state: "killed", reason: "daemon_exit" });
      let b = this.#t;
      if (b !== void 0) await H.promise, await b.store.settled(h);
    });
    if (this.#e.set(h, R), this.#l(R), this.#t !== void 0) this.#m ??= setInterval(() => {
      let b = [...this.#e.values()].filter(({ ended: k, unwanted: z }) => !k && !z);
      if (b.length === 0) clearInterval(this.#m), this.#m = void 0;
      b.forEach((k) => this.#l(k));
    }, se).unref();
    return e.result.then(async (b) => {
      await e.taskOutput.flush().catch((k) => (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(k))), x(ze(b), b);
    }).catch((b) => {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(b)), x({ state: "killed" });
    }), this.#o++, this.#n.emit(), h;
  }
  #l({ listed: e, startedAt: o, ended: r }) {
    if (this.#t === void 0) return;
    let { store: g, wallNow: y } = this.#t, h = this.#s(), O = y(), { taskId: M, output_path: R, limit_ms: x } = e;
    g.write({ listed: { taskId: M, output_path: R, limit_ms: x }, started_at: Math.round(O - (h - o)), written_at: Math.round(O), ...r && { ended: { how: r.how, at: Math.round(O - (h - r.at)) } } });
  }
  #u() {
    let e = [...this.#e.values()].filter((o) => o.ended).slice(0, -Oe);
    return e.forEach((o) => {
      this.#e.delete(o.listed.taskId), this.#t?.store.remove(o.listed.taskId), this.#d = o.ended?.at;
    }), e;
  }
  async #f(e, o) {
    try {
      let { commands: r, counted: g } = await e.readEarlier(), y = this.#s(), h = o(), O = r.map(({ listed: x, started_at: K, ended: I }) => {
        let N = y - Math.max(0, h - I.at);
        return { listed: x, startedAt: Math.min(N, y - Math.max(0, h - K)), cut: () => false, ended: { how: I.how, at: N } };
      }), M = [...this.#e.values()];
      this.#e.clear(), [...O, ...M].forEach((x) => this.#e.set(x.listed.taskId, x));
      let R = this.#u();
      if (Object.values(g).some((x) => x > 0)) (0, import_chunk_y53wbr8a.a)("tengu_mcp_serve_background_records_read", { ...g, dropped_for_room: R.length });
      if (O.length > 0) this.#o++, this.#n.emit();
    } catch (r) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(r));
    }
  }
}
var L3t = new import_chunk_2904xtvq.j(() => new me());
function f$s(e, o) {
  if (o !== "tool-container" || !(0, import_chunk_6e68m1dj.hn)() || import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted" || (0, import_chunk_jg3mepas.cxe)()) return;
  let r = { said: false };
  L3t.of(e).keepRecordsIn(new J({ folder: () => (0, import_path.join)((0, import_chunk_zsz02y6d.PC)(), "background-commands"), failed: (g) => {
    if ((0, import_chunk_w578pjby.t)(`mcp serve: could not save or delete a background command's record on disk, so after a restart that command may be missing, out of date, or listed again after it was acknowledged: ${(0, import_chunk_jv7av99m.d)(g)}`, { level: "error" }), !r.said) r.said = true, (0, import_chunk_cqa9hrgx.l)("mcp_serve_background_command", "record_failed");
  } }));
}
async function p$s(e, o, { session: r, callerGone: g }) {
  let { seen: y, life: h, hold_ms: O, told: M, tool_use_ids: R } = ne(e ?? {}), [x, ...K] = (R ?? []).filter((k) => !(0, import_chunk_mmh7d122.lDt)().safeParse(k).success);
  if (x !== void 0) throw new import_chunk_jv7av99m.A(`ReadCalls: ${(0, import_chunk_w578pjby._)(x)} is not a valid tool_use_id${K.length > 0 ? ` (and ${K.length} more)` : ""}. An id is 1 to 128 letters, digits or _ . : @ -, and not only dots.`, "ReadCalls: a tool_use_id is not valid");
  let I = L3t.of(r.host);
  await I.restored, I.forget(M ?? []);
  let N = () => R?.some((k) => !(0, import_chunk_06pt2b41.Qfa)(r, k)) ?? false;
  if (y !== void 0 && h === I.life && O !== void 0 && !N()) {
    let k = new AbortController(), z = (0, import_chunk_06pt2b41.Zfa)(r, () => {
      if (N()) k.abort();
    }), L = (0, import_chunk_cd75h1kz.Bo)(o, { signalB: g, timeoutMs: O, refTimer: true });
    try {
      await I.changedSince(y, AbortSignal.any([L.signal, k.signal]));
    } finally {
      L.cleanup(), z();
    }
  }
  let H = (R ?? (0, import_chunk_06pt2b41.epa)(r)).map((k) => {
    let z = I.taskIdOf(k);
    return { tool_use_id: k, ...z === void 0 ? (0, import_chunk_06pt2b41.qfa)(r, k) : { state: "background", taskId: z } };
  });
  if (R !== void 0 && R.length > 0) {
    let k = (z) => (0, import_chunk_4smdap7r.U)(H, (L) => L.state === z);
    (0, import_chunk_y53wbr8a.a)("tengu_mcp_serve_calls_read_by_id", { background: k("background"), running: k("running"), finished: k("finished"), unknown: k("unknown") });
  }
  let Y = [I.msSinceNewestDropped(), (0, import_chunk_06pt2b41.tpa)(r)].filter((k) => k !== void 0), b = { ...I.list(), calls: H, ...Y.length > 0 && { dropped_ended_ms_ago: Math.min(...Y) } };
  return { summary: `${b.commands.length} commands, ${b.calls.length} calls`, output: b };
}
async function m$s(e, o, { session: r }) {
  let { tool_use_id: g, because: y } = Ie().parse(e), h = L3t.of(r.host).moveRunning(g, y);
  return { summary: `moved: ${h}`, output: { moved: h } };
}
async function h$s(e, o, { session: r }) {
  let { tool_use_id: g, ended: y } = Te().parse(e);
  return L3t.of(r.host).noteAgentsEnded(g, y), { summary: "noted", output: {} };
}
async function g$s(e, o, { session: r }) {
  let { taskId: g } = xe().parse(e), y = L3t.of(r.host).stop(g);
  return { summary: `stopped: ${y}`, output: { stopped: y } };
}
