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
var chunk_0abx9x8z_exports = {};
__export(chunk_0abx9x8z_exports, {
  K5l: () => K5l,
  L1s: () => L1s,
  V5l: () => V5l,
  pSn: () => pSn,
  q5l: () => q5l,
  sfa: () => sfa,
  z5l: () => z5l
});
module.exports = __toCommonJS(chunk_0abx9x8z_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_nr0e9cdy = require("/$bunfs/root/chunk-nr0e9cdy.js");
var import_chunk_axd2vhx2 = require("/$bunfs/root/chunk-axd2vhx2.js");
var import_chunk_w4dc83v7 = require("/$bunfs/root/chunk-w4dc83v7.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_gpach6z0 = require("/$bunfs/root/chunk-gpach6z0.js");
var import_chunk_khpf2df1 = require("/$bunfs/root/chunk-khpf2df1.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_s2gxs18a = require("/$bunfs/root/chunk-s2gxs18a.js");
var import_chunk_9mfdhvae = require("/$bunfs/root/chunk-9mfdhvae.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var P = { first: "listen", later: "full", restDelayMs: 1500, minGrowthMib: 8, betweenGrowthMib: 8 }, E = 250, x = ["runtime_module_missing", "setting_unreadable", "collection_threw", "collection_slow", "memory_unreadable"];
function G(e, o, n) {
  let r = o ? P : void 0;
  if (!e) return r;
  let u = e.split(",").map((a) => a.trim());
  if (u.includes("first=never")) return;
  let l = { ...P };
  for (let [a, m] of u.entries()) {
    let [d, c = "", b] = m.split("="), f = b === void 0 ? d : void 0, p = /^\d{1,6}$/.test(c);
    if (f === "first" && (c === "listen" || c === "rest" || c === "skip")) l.first = c;
    else if (f === "later" && (c === "young" || c === "full")) l.later = c;
    else if (f === "rest_delay_ms" && p) l.restDelayMs = Number(c);
    else if (f === "min_growth_mib" && p) l.minGrowthMib = Number(c);
    else if (f === "between_growth_mib" && (p || c === "off")) l.betweenGrowthMib = p ? Number(c) : void 0;
    else return (0, import_chunk_w578pjby.t)(`mcp serve: cannot read part ${a + 1} of the ${u.length} in CLAUDE_CODE_MCP_SERVE_GARBAGE_COLLECTIONS, so ${o ? "the tool server makes its own garbage collections by the default settings" : "the tool server makes no garbage collections of its own"}, as if it were unset: each part between commas must be first=listen|rest|skip|never, later=young|full, rest_delay_ms=N, min_growth_mib=N or between_growth_mib=N|off, with N of one to six digits`, { level: "warn" }), n(), r;
  }
  return l;
}
class O {
  first;
  anonMib;
  collect;
  clock;
  onDegraded;
  restRule;
  rules;
  openPosts = 0;
  firstIsDone;
  collections = 0;
  youngCollections = 0;
  collectionMs = 0;
  longestCollectionMs = 0;
  kindsEnded = /* @__PURE__ */ new Set();
  constructor({ settings: e, anonMib: o, collect: n, clock: r, onDegraded: u }) {
    this.first = e.first, this.firstIsDone = e.first === "skip", this.anonMib = o, this.collect = n, this.clock = r, this.onDegraded = u, this.restRule = { kind: e.later, delayMs: e.restDelayMs, minGrowthMib: e.minGrowthMib, floorMib: void 0, cancelLook: void 0 }, this.rules = e.betweenGrowthMib === void 0 ? [this.restRule] : [this.restRule, { kind: "young", delayMs: 0, minGrowthMib: e.betweenGrowthMib, floorMib: void 0, cancelLook: void 0 }];
  }
  aboutToListen() {
    if (this.first === "listen") this.collectNow("full");
  }
  postOpened() {
    this.openPosts++;
    for (let e of this.rules) e.cancelLook?.(), e.cancelLook = void 0;
    this.lowerFloors(this.anonMib());
  }
  postClosed() {
    if (this.openPosts--, this.openPosts > 0) return;
    for (let e of this.rules) e.cancelLook = this.clock.setTimeout(() => {
      e.cancelLook = void 0, this.look(e);
    }, e.delayMs, { unref: true });
  }
  reported() {
    return { collections: this.collections, youngCollections: this.youngCollections, collectionMs: Math.floor(this.collectionMs), longestCollectionMs: Math.floor(this.longestCollectionMs) };
  }
  look(e) {
    if (!this.firstIsDone) {
      if (e === this.restRule) this.collectNow("full");
      return;
    }
    if (this.kindsEnded.has(e.kind)) return;
    let o = this.anonMib();
    if (o === void 0) {
      (0, import_chunk_w578pjby.t)("mcp serve: no garbage collection after the last request: anonymous memory cannot be read here"), this.onDegraded("memory_unreadable");
      return;
    }
    let n = e.floorMib ?? o;
    if (o - n >= e.minGrowthMib) {
      this.collectNow(e.kind);
      return;
    }
    this.lowerFloors(o), (0, import_chunk_w578pjby.t)(`mcp serve: no ${e.kind} garbage collection ${e.delayMs} ms after the last request: anonymous memory is ${o} MiB, and a collection needs ${Math.min(n, o) + e.minGrowthMib} MiB (${e.minGrowthMib} MiB above the lowest reading since the first request or the server's last ${e.kind === "full" ? "full " : ""}collection)`);
  }
  lowerFloors(e) {
    if (e !== void 0) for (let o of this.rules) o.floorMib = Math.min(o.floorMib ?? e, e);
  }
  collectNow(e) {
    if (this.firstIsDone = true, this.collections++, e === "young") this.youngCollections++;
    let o = this.clock.monotonicNow();
    try {
      this.collect(e);
    } catch (r) {
      (0, import_chunk_k449cc64.i)(r), this.onDegraded("collection_threw");
      return;
    }
    let n = this.clock.monotonicNow() - o;
    if (this.collectionMs += n, this.longestCollectionMs = Math.max(this.longestCollectionMs, n), n > E) this.kindsEnded.add("full").add(e), this.onDegraded("collection_slow"), (0, import_chunk_w578pjby.t)(`mcp serve: a ${e} garbage collection blocked the tool server for ${n.toFixed(1)} ms, over the limit of ${E} ms, so the tool server makes no more ${e === "full" ? "full collections" : "collections"} of its own in this process; the runtime's own collections go on`, { level: "warn" });
    for (let r of this.rules) if (e === "full" || r.kind === "young") r.floorMib = void 0;
    (0, import_chunk_w578pjby.t)(`mcp serve: a ${e} garbage collection took ${n.toFixed(1)} ms`);
  }
}
var pSn = new import_chunk_2904xtvq.j(() => ({ troubles: 0 }));
function sfa(e) {
  let o = G(import_chunk_nr0e9cdy.zb.CLAUDE_CODE_MCP_SERVE_GARBAGE_COLLECTIONS, (0, import_chunk_axd2vhx2.gvo)() === true, () => C(e, "setting_unreadable"));
  if (o === void 0) return;
  let n;
  try {
    n = (0, import_chunk_w1d7ygsk.ft)("bun:jsc");
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r), C(e, "runtime_module_missing");
    return;
  }
  pSn.of(e).started = new O({ settings: o, anonMib: () => (0, import_chunk_w4dc83v7.Y1t)()?.anonMib, collect: (r) => r === "full" ? n.fullGC() : n.edenGC(), clock: e.clock, onDegraded: (r) => C(e, r) });
}
function C(e, o) {
  pSn.of(e).troubles |= 1 << x.indexOf(o);
}
var k = `${import_chunk_w4dc83v7.uhr}toolContainerCpu`, T = "anthropic/toolContainerCpu", F = 1, B = `${import_chunk_w4dc83v7.uhr}toolContainerOtherPrograms`, H = 864e5, X = 31 * H;
var Me = X / 1e3;
function w(e) {
  return (0, import_chunk_0jve1fep.Le)(e) && e[k] === F;
}
function L(e) {
  return w(e) && (0, import_chunk_0jve1fep.Le)(e) && e[B] === true;
}
var Z = 1e3, V = 5e3, h = new import_chunk_2904xtvq.j(() => ({}));
function L1s(e, o) {
  if (o !== "tool-container" || !(0, import_chunk_6e68m1dj.hn)() || import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted") return;
  let n;
  try {
    n = (0, import_fs.readFileSync)("/proc/self/cgroup", "utf8");
  } catch {
    return;
  }
  let r = (0, import_chunk_w4dc83v7.fdo)(n);
  if (r === void 0) return;
  let u = g(0), l = (0, import_chunk_w4dc83v7.pdo)(r);
  if (u !== void 0) {
    let a = l === void 0 ? void 0 : import_path.posix.join(l, "cpuacct.usage"), m = a === void 0 ? void 0 : (0, import_chunk_w4dc83v7.kDe)(a), d = { machineMsAtZero: u.cpuMs - u.daemonCpuMs, callsBeingServed: 0, atCallsStart: void 0, inCallMs: 0, inCallCpuMs: 0, shell: a === void 0 || m === void 0 ? void 0 : { usageFile: a, msAtZero: m }, lastLoopTickMs: performance.now(), loopStallMs: 0, isDiskReadPending: false };
    h.of(e).meter = d, import_chunk_w4dc83v7.J1t.enableCounting(), import_chunk_khpf2df1.wVo.enableCounting(), setInterval(W, Z, d).unref();
  }
  (0, import_chunk_w4dc83v7.ahr)(l);
}
function W(e) {
  let o = performance.now();
  if (o - e.lastLoopTickMs >= V) e.loopStallMs += o - e.lastLoopTickMs;
  e.lastLoopTickMs = o;
}
function z5l(e) {
  let { meter: o } = h.of(e);
  if (o === void 0) return;
  if (o.callsBeingServed++ === 0) o.atCallsStart = g(o.machineMsAtZero);
  return { [Symbol.dispose]() {
    if (--o.callsBeingServed === 0) {
      let n = N(o, g(o.machineMsAtZero));
      o.inCallMs = n.ms, o.inCallCpuMs = n.cpuMs, o.atCallsStart = void 0;
    }
  } };
}
var D = 100;
async function V5l(e, o) {
  return h.of(e).meter === void 0 || !L(o) ? void 0 : (0, import_chunk_5appeerh.me)(import_chunk_khpf2df1.wVo.look().catch(() => {
    return;
  }), D);
}
async function q() {
  let e = await (0, import_promises.statfs)((0, import_chunk_w578pjby.le)().cwd(), { bigint: true });
  return import_chunk_9mfdhvae.g1r.has(import_chunk_9mfdhvae.I3t.get(Number(e.type)) ?? "other") ? (0, import_chunk_w4dc83v7.Fvi)(e)?.availMB : void 0;
}
async function K5l(e, o) {
  let { meter: n } = h.of(e);
  if (n === void 0 || n.isDiskReadPending || !w(o)) return;
  return n.isDiskReadPending = true, (0, import_chunk_5appeerh.me)(q().catch(() => {
    return;
  }).finally(() => {
    n.isDiskReadPending = false;
  }), D);
}
function q5l(e, o, n, r, u) {
  let { meter: l } = h.of(o);
  if (l === void 0 || !w(n)) return e;
  let a = l.shell === void 0 ? void 0 : (0, import_chunk_w4dc83v7.kDe)(l.shell.usageFile), m = g(l.machineMsAtZero);
  if (m === void 0) return e;
  let d = (0, import_chunk_w4dc83v7.Y1t)(), c = (0, import_chunk_w4dc83v7.U0n)()?.process_start_tuning, b = (0, import_chunk_gpach6z0.bzi)(), f = (0, import_chunk_axd2vhx2.gvo)(), { started: p, troubles: v } = pSn.of(o), _ = p?.reported(), S = N(l, m), y = Math.floor(m.cpuMs), M = l.shell === void 0 || a === void 0 ? void 0 : Math.floor(a - l.shell.msAtZero), R = import_chunk_w4dc83v7.J1t.followedSessions(), U = { start_time_unix_ms: Math.floor(performance.timeOrigin), up_ms: Math.floor(m.upMs), cpu_ms: y, daemon_cpu_ms: Math.floor(m.daemonCpuMs), in_call_ms: Math.floor(S.ms), in_call_cpu_ms: Math.floor(S.cpuMs), ...M !== void 0 && M >= 1 && M <= y && { shell_cpu_ms: M }, left_running_programs: import_chunk_w4dc83v7.J1t.countRunning(R), ...import_chunk_khpf2df1.wVo.count(r, R), started_mcp_servers: import_chunk_9mfdhvae.h1r.of(o).size, loop_stall_ms: Math.floor(l.loopStallMs), ...d !== void 0 && { daemon_rss_mib: d.rssMib, ...d.anonMib !== void 0 && { daemon_anon_mib: d.anonMib }, ...d.peakRssMib !== void 0 && { daemon_peak_rss_mib: d.peakRssMib } }, ...c !== void 0 && { ...b !== void 0 && { jit_policy: b }, ...f !== void 0 && { collection_timer_off: f ? 1 : 0 }, ..._ !== void 0 && { own_collections: _.collections, own_young_collections: _.youngCollections, own_collection_ms: _.collectionMs, own_longest_collection_ms: _.longestCollectionMs }, ...(_ !== void 0 || v !== 0) && { own_collection_trouble_bits: v }, start_tuning: c }, ...u !== void 0 && { disk_free_mib: u }, ...import_chunk_s2gxs18a.pue.of(o) }, I = e.isError === true ? T : k;
  return { ...e, _meta: { ...e._meta, [I]: U } };
}
function N({ atCallsStart: e, inCallMs: o, inCallCpuMs: n }, r) {
  return e === void 0 || r === void 0 ? { ms: o, cpuMs: n } : { ms: o + r.upMs - e.upMs, cpuMs: n + Math.max(0, r.cpuMs - e.cpuMs) };
}
function g(e) {
  let o = (0, import_chunk_w4dc83v7.kDe)(import_path.posix.join(import_chunk_w4dc83v7.lhr, "cpuacct.usage"));
  if (o === void 0) return;
  try {
    let { user: n, system: r } = process.cpuUsage();
    return { cpuMs: Math.max(0, o - e), daemonCpuMs: (n + r) / 1e3, upMs: performance.now() };
  } catch {
    return;
  }
}
