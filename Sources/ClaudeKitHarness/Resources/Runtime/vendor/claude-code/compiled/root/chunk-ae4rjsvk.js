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
var chunk_ae4rjsvk_exports = {};
__export(chunk_ae4rjsvk_exports, {
  Gjn: () => Gjn,
  Pun: () => Pun,
  Pzi: () => Pzi,
  RGt: () => RGt,
  Rzi: () => Rzi,
  xzi: () => xzi,
  yvo: () => yvo
});
module.exports = __toCommonJS(chunk_ae4rjsvk_exports);
var import_chunk_va7s0d6d = require("/$bunfs/root/chunk-va7s0d6d.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_fs = require("fs");
function C(e) {
  switch (e) {
    case "HeapHelper":
      return "gc";
    case "JITWorker":
      return "jit";
    case "JSCWarmUp":
      return "warm_up";
    case "mi-scavenger":
      return "allocator";
    case "HTTP Client":
      return "http";
    default:
      return e.startsWith("Bun Pool") ? "pool" : "other";
  }
}
var N = ["main_cpu_ms", "main_system_ms", "gc_cpu_ms", "gc_system_ms", "jit_cpu_ms", "jit_system_ms", "warm_up_cpu_ms", "warm_up_system_ms", "allocator_cpu_ms", "allocator_system_ms", "http_cpu_ms", "http_system_ms", "pool_cpu_ms", "pool_system_ms", "other_cpu_ms", "other_system_ms", "process_cpu_ms", "process_system_ms", "run_wait_ms", "guest_steal_ms"], u = { main_cpu_ms: 0, main_system_ms: 1, gc_cpu_ms: 2, gc_system_ms: 3, jit_cpu_ms: 4, jit_system_ms: 5, warm_up_cpu_ms: 6, warm_up_system_ms: 7, allocator_cpu_ms: 8, allocator_system_ms: 9, http_cpu_ms: 10, http_system_ms: 11, pool_cpu_ms: 12, pool_system_ms: 13, other_cpu_ms: 14, other_system_ms: 15, process_cpu_ms: 16, process_system_ms: 17, run_wait_ms: 18, guest_steal_ms: 19, standstills: 20 }, S = u.process_cpu_ms, m = 10, p = 1e6, b = 20, _ = 5e3, E = _ + 1e4, h = { mainThreadId: () => (0, import_fs.readlinkSync)("/proc/self"), threadIds: () => (0, import_fs.readdirSync)("/proc/self/task"), threadFile: (e, r) => (0, import_fs.readFileSync)(`/proc/self/task/${e}/${r}`, "utf8"), machineStat: () => (0, import_fs.readFileSync)("/proc/stat", "utf8"), cpuUsage: () => process.cpuUsage(), nowMs: () => performance.now() };
function I(e) {
  let r = /^cpu +(?:\d+ +){7}(\d+)/.exec(e)?.[1];
  return r === void 0 ? NaN : Number(r) * m;
}
function l() {
  return Array(u.standstills + 1).fill(0);
}
var M = { runNs: 0, waitNs: 0, systemTicks: 0 };
class f {
  source;
  seen = /* @__PURE__ */ new Map();
  groups = l();
  mainThreadId = void 0;
  lastReadAtMs;
  constructor(e = h) {
    this.source = e;
    this.lastReadAtMs = e.nowMs();
  }
  read() {
    let e = this.source.cpuUsage(), r = this.source.nowMs();
    if (r - this.lastReadAtMs > E) this.groups[u.standstills]++;
    this.lastReadAtMs = r, this.mainThreadId ??= this.source.mainThreadId();
    let t = false;
    for (let a of this.source.threadIds()) {
      let i = this.readThread(a);
      if (i === void 0) continue;
      t ||= a === this.mainThreadId;
      let o = this.seen.get(a);
      this.seen.set(a, i.counters);
      let d = o !== void 0 && o.runNs <= i.counters.runNs ? o : M;
      this.groups[u[`${i.group}_cpu_ms`]] += (i.counters.runNs - d.runNs) / p, this.groups[u[`${i.group}_system_ms`]] += Math.max(0, i.counters.systemTicks - d.systemTicks) * m, this.groups[u.run_wait_ms] += Math.max(0, i.counters.waitNs - d.waitNs) / p;
    }
    if (!t) throw Error("could not read the main thread's CPU time from /proc, so this reading by thread is lost");
    let s = [...this.groups];
    return s[u.process_cpu_ms] = (e.user + e.system) / 1e3, s[u.process_system_ms] = e.system / 1e3, s[u.guest_steal_ms] = this.readGuestStealMs(), s;
  }
  readThread(e) {
    try {
      let r = (0, import_chunk_va7s0d6d.cNo)(this.source.threadFile(e, "stat")), [t, s] = this.source.threadFile(e, "schedstat").split(" ", 2).map(Number);
      if (r === void 0 || t === void 0 || s === void 0 || Number.isNaN(t + s)) return;
      return { group: e === this.mainThreadId ? "main" : C(r.name), counters: { runNs: t, waitNs: s, systemTicks: r.systemTicks } };
    } catch {
      return;
    }
  }
  readGuestStealMs() {
    try {
      return I(this.source.machineStat());
    } catch {
      return NaN;
    }
  }
}
function Pun(e, r) {
  return r.map((t, s) => t - (e[s] ?? NaN));
}
function yvo(e, r) {
  return e === void 0 ? r : e.map((t, s) => t + (r[s] ?? NaN));
}
function RGt(e, r) {
  if (e[u.standstills] !== 0 || (e[u.main_cpu_ms] ?? NaN) > r + b) return;
  let t = { one_in: n.oneIn };
  for (let s of N) {
    let a = Math.round(e[u[s]] ?? NaN);
    if (s === "guest_steal_ms" && Number.isNaN(a)) continue;
    if (!Number.isSafeInteger(a) || a < 0) return;
    if (a > 0 || u[s] >= S) t[s] = a;
  }
  return t;
}
var n = (0, import_chunk_t57w17k7.de)({ isDecided: false, isSpare: false, isFailureLogged: false, meter: void 0, atStart: void 0, atClaim: void 0, oneIn: void 0, keepUp: void 0 }, (e) => {
  clearInterval(e.keepUp), e.isDecided = false, e.isSpare = false, e.isFailureLogged = false, e.meter = void 0, e.atStart = void 0, e.atClaim = void 0, e.oneIn = void 0, e.keepUp = void 0;
});
function Rzi(e = Math.random(), r = h) {
  if (n.isDecided) return;
  if (process.argv[2] === "--preload") {
    n.isSpare = true;
    return;
  }
  n.isDecided = true;
  try {
    if (process.env.CLAUDE_CODE_REMOTE !== "true" || process.env.CLAUDE_CODE_ENVIRONMENT_KIND || process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted") return;
    let t = Number(process.env.CLAUDE_CODE_THREAD_CPU_ONE_IN);
    if (!Number.isSafeInteger(t) || t < 1 || e * t >= 1) return;
    let { isNestedStartInCloudSession: s } = require("/$bunfs/root/chunk-hxkxv1jf.js");
    if (s()) return;
    let a = new f(r);
    if (n.isSpare) n.atClaim = a.read();
    else {
      let i = l();
      i[u.guest_steal_ms] = a.readGuestStealMs(), n.atStart = i;
    }
    n.meter = a, n.oneIn = t, n.keepUp = setInterval(Gjn, _), n.keepUp.unref();
  } catch (t) {
    if (n.isSpare) g(t);
  }
}
function xzi() {
  return n.atStart;
}
function Pzi() {
  return n.atClaim;
}
function Gjn() {
  try {
    return n.meter?.read();
  } catch (e) {
    g(e);
    return;
  }
}
function g(e) {
  if (n.isFailureLogged) return;
  n.isFailureLogged = true;
  try {
    let { logError: r } = require("/$bunfs/root/chunk-whpp3713.js");
    r(e);
  } catch {
  }
}
