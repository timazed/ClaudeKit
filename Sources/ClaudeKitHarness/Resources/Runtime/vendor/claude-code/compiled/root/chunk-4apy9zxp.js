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
var chunk_4apy9zxp_exports = {};
__export(chunk_4apy9zxp_exports, {
  bYl: () => bYl,
  lQn: () => lQn
});
module.exports = __toCommonJS(chunk_4apy9zxp_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_ky5sghtd = require("/$bunfs/root/chunk-ky5sghtd.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_gygwqn6z = require("/$bunfs/root/chunk-gygwqn6z.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_wx7ffn80 = require("/$bunfs/root/chunk-wx7ffn80.js");
var import_chunk_4dn6vqbv = require("/$bunfs/root/chunk-4dn6vqbv.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_fs = require("fs");
var D = 48, W = 10;
class k {
  fd;
  buffer = Buffer.alloc(32);
  constructor(e) {
    this.fd = e;
  }
  static open(e) {
    if (e === void 0) return null;
    let o = e ?? "/proc/self/timerslack_ns", n;
    try {
      n = (0, import_fs.openSync)(o, import_fs.constants.O_RDONLY | import_chunk_jxja0v0z.cr);
    } catch (r) {
      let m = (0, import_chunk_jv7av99m.w)(r);
      if (m !== "ENOENT" && m !== "ENOTDIR") (0, import_chunk_w578pjby.t)(`[event-loop-stall] could not open ${o} (${m ?? (0, import_chunk_jv7av99m.d)(r)}); stalls will be reported without allowing for timer slack`);
      return null;
    }
    let l = new k(n);
    if (l.readMs() !== null) return l;
    return l.close(), null;
  }
  readMs() {
    try {
      let o = (0, import_fs.readSync)(this.fd, this.buffer, 0, this.buffer.length, 0) - 1;
      if (o < 1 || this.buffer[o] !== W) return null;
      let n = 0;
      for (let l = 0; l < o; l++) {
        let r = this.buffer[l] - D;
        if (r < 0 || r > 9) return null;
        n = n * 10 + r;
      }
      return o > 15 ? Number(this.buffer.toString("latin1", 0, o)) / 1e6 : n / 1e6;
    } catch {
      return null;
    }
  }
  close() {
    try {
      (0, import_fs.closeSync)(this.fd);
    } catch {
    }
  }
}
var g = 200, F = 1e3, O = 1e4, N = 3e4, B = 1e3, P = 3e4, U = "tengu_rusty_orchard", S = 500, H = 1e4, R = 5e3, E = 50, L = 3e5;
function lQn() {
  try {
    let e = process.resourceUsage(), o = (e.userCPUTime + e.systemCPUTime) / 1e3;
    if (!Number.isFinite(o)) return (0, import_chunk_w578pjby.t)(`[event-loop-stall] process.resourceUsage() gave a CPU time that is not a finite number (${o}), so this sample is skipped`, { level: "error" }), null;
    return { cpuTimeMs: o, majorPageFaults: e.majorPageFault };
  } catch (e) {
    return (0, import_chunk_w578pjby.t)(`[event-loop-stall] process.resourceUsage() failed: ${e instanceof Error ? e.message : String(e)}`, { level: "error" }), null;
  }
}
function K() {
  try {
    let e = process.memoryUsage();
    return { rss_mb: Math.round(e.rss / 1024 / 1024), heap_used_mb: Math.round(e.heapUsed / 1024 / 1024), ext_mb: Math.round(e.external / 1024 / 1024) };
  } catch (e) {
    return (0, import_chunk_w578pjby.t)(`[event-loop-stall] process.memoryUsage() failed: ${e instanceof Error ? e.message : String(e)}`, { level: "error" }), null;
  }
}
function V({ prevWallMs: e, prevMonotonicMs: o, nowWallMs: n, nowMonotonicMs: l, intervalMs: r, timerSlackMs: m, cpuMs: v }) {
  let u = n - e, h = l - o, c = u - r, p = Math.round(h - r), _ = c - p, M = Math.min(m ?? 0, H, Math.max(p - v, 0)), f = p - M > S, T = c - M > S || f;
  return { wallElapsedMs: u, wallDriftMs: c, monotonicStallMs: p, clockJumpMs: _, timerSlackMs: m, isStall: T, isLateWithinTimerSlack: !T && (c > S || p > S), isMonotonicStall: f, likelySleep: c > R };
}
function Q({ write: e, isMonotonicStall: o, prevMonotonicMs: n, nowMonotonicMs: l, intervalMs: r }) {
  if (!o || e === void 0 || e.endedMs < n) return { blocked_write: false };
  let m = n + r;
  return { blocked_write: e.startedMs <= m + E && e.endedMs >= l - E, last_write_ms: Math.round(e.endedMs - e.startedMs), last_write_bytes: e.bytes };
}
function bYl(e, o) {
  let n = q.of(e), l = import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE ? import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_STALL_CHECK_INTERVAL_MS ?? F : g, r = import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE ? { intervalMs: O, afterQuietMs: N } : (0, import_chunk_865at33z.b)(U, true) ? { intervalMs: B, afterQuietMs: P, endedByInput: true } : void 0;
  if (o === void 0) n.start(l, r);
  else n.start(l, r, o);
}
class y {
  timer = null;
  intervalMs = g;
  activeIntervalMs = g;
  rest = void 0;
  quietMs = 0;
  stopListeningForWork = () => {
  };
  stopListeningForInput = () => {
  };
  inputSeen = false;
  rssSampleTicks = L / g;
  lastTickMs = 0;
  lastTickMonotonicMs = 0;
  totalStalls = 0;
  totalStallDurationMs = 0;
  totalMonotonicStallMs = 0;
  tickCount = 0;
  lastResourceSample = null;
  timerSlack = null;
  lastTimerSlackMs = null;
  largestTimerSlackMs = 0;
  totalLateWithinTimerSlack = 0;
  sigcontSeen = false;
  listensForSigcont = false;
  onSigcont = () => {
    this.sigcontSeen = true;
  };
  afterTick = (e, o, n, l, r) => {
    let m = this.listensForSigcont ? this.sigcontSeen : void 0;
    if (this.sigcontSeen = false, !e.isStall || o === null) return;
    if ((0, import_chunk_w578pjby.t)(`[event-loop-stall] blocked for ${e.monotonicStallMs}ms monotonic (wall drift ${e.wallDriftMs}ms, clock jump ${e.clockJumpMs}ms, expected ${r}ms). Total stalls: ${this.totalStalls}, cumulative: ${this.totalMonotonicStallMs}ms monotonic / ${this.totalStallDurationMs}ms wall${e.likelySleep ? " [likely sleep/wake]" : ""} blocked_write=${o.blocked_write}` + (o.last_write_ms !== void 0 ? ` last_write=${o.last_write_ms}ms/${o.last_write_bytes}B` : "") + ` sigcont=${m ?? "n/a"} timer_slack=${e.timerSlackMs === void 0 ? "n/a" : `${e.timerSlackMs}ms`}` + (n ? ` cpu=${n.cpu_delta_ms}ms majflt=${n.major_fault_delta}` : "") + (l ? ` rss=${l.rss_mb}MB heap=${l.heap_used_mb}MB ext=${l.ext_mb}MB` : ""), { level: "warn" }), e.clockJumpMs > R && !o.blocked_write && !(0, import_chunk_4dn6vqbv.fXr)()) return;
    (0, import_chunk_y53wbr8a.a)("tengu_event_loop_stall", { stall_duration_ms: e.wallDriftMs, expected_interval_ms: r, actual_interval_ms: e.wallElapsedMs, monotonic_stall_ms: e.monotonicStallMs, clock_jump_ms: e.clockJumpMs, total_stalls: this.totalStalls, total_late_within_timer_slack: (0, import_chunk_f9x2f6cx.Y)() ? void 0 : this.totalLateWithinTimerSlack, cumulative_stall_ms: this.totalStallDurationMs, cumulative_monotonic_stall_ms: this.totalMonotonicStallMs, likely_sleep: e.likelySleep, timer_slack_ms: e.timerSlackMs === void 0 || (0, import_chunk_f9x2f6cx.Y)() ? void 0 : Math.round(e.timerSlackMs), ...n, ...l, ...o, sigcont: m, nonblocking_stdout: (0, import_chunk_gygwqn6z.gqr)() });
  };
  start(e, o, n = { attributeSigcont: true }) {
    if (this.timer !== null) return;
    if (this.activeIntervalMs = e, this.rest = o, this.timerSlack = k.open(), this.openWindow(), n.attributeSigcont) this.listensForSigcont = true, process.on("SIGCONT", this.onSigcont);
    if ((0, import_chunk_w578pjby.t)(`[event-loop-stall] detector started (interval=${e}ms${o ? `, at rest ${o.intervalMs}ms` : ""}, threshold=${S}ms)`), o !== void 0) {
      let l = () => {
        if (this.intervalMs === this.activeIntervalMs) this.quietMs = 0;
        else try {
          this.tick();
        } catch (r) {
          (0, import_chunk_k449cc64.i)(r), this.openWindow(), this.arm(this.activeIntervalMs);
        }
      };
      this.stopListeningForInput = (0, import_chunk_f9x2f6cx.jK)(() => {
        if (this.inputSeen = true, o.endedByInput) l();
      }), this.stopListeningForWork = (0, import_chunk_wx7ffn80.Zcn)(l);
    }
    this.arm(e);
  }
  stop() {
    if (this.stopListeningForWork(), this.stopListeningForInput(), this.listensForSigcont) process.off("SIGCONT", this.onSigcont), this.listensForSigcont = false, this.sigcontSeen = false;
    if (this.timer !== null) clearInterval(this.timer), this.timer = null;
    this.timerSlack?.close(), this.timerSlack = null;
  }
  [Symbol.dispose]() {
    this.stop();
  }
  openWindow() {
    this.lastTickMs = Date.now(), this.lastTickMonotonicMs = performance.now(), this.lastResourceSample = lQn(), this.lastTimerSlackMs = this.timerSlack?.readMs() ?? null;
  }
  arm(e) {
    if (this.quietMs = 0, this.timer !== null) {
      if (this.intervalMs === e) return;
      clearInterval(this.timer);
    }
    this.intervalMs = e, this.rssSampleTicks = Math.round(L / e), this.timer = setInterval(this.tick, e), this.timer.unref();
  }
  tick = () => {
    let e = this.intervalMs, o = Date.now(), n = performance.now(), l = this.timerSlack?.readMs() ?? null, r = Math.max(l ?? 0, this.lastTimerSlackMs ?? 0);
    this.largestTimerSlackMs = Math.max(this.largestTimerSlackMs, r);
    let v = e === this.rest?.intervalMs && !this.inputSeen ? this.largestTimerSlackMs : r, u = lQn(), h = Math.min(e, Math.round(n - this.lastTickMonotonicMs)), c = V({ prevWallMs: this.lastTickMs, prevMonotonicMs: this.lastTickMonotonicMs, nowWallMs: o, nowMonotonicMs: n, intervalMs: h, timerSlackMs: l === null && this.lastTimerSlackMs === null ? void 0 : v, cpuMs: u && this.lastResourceSample ? u.cpuTimeMs - this.lastResourceSample.cpuTimeMs : Number.POSITIVE_INFINITY });
    this.tickCount++;
    let p = (0, import_chunk_ky5sghtd.va)().get(process.stdout)?.takeSlowestFrameWrite();
    if (c.isStall) {
      if (this.totalStalls++, this.totalStallDurationMs += Math.max(c.wallDriftMs, 0), c.isMonotonicStall) this.totalMonotonicStallMs += c.monotonicStallMs;
      let M = K(), f = u && this.lastResourceSample ? { cpu_delta_ms: Math.round(u.cpuTimeMs - this.lastResourceSample.cpuTimeMs), major_fault_delta: u.majorPageFaults - this.lastResourceSample.majorPageFaults } : null, T = Q({ write: p, isMonotonicStall: c.isMonotonicStall, prevMonotonicMs: this.lastTickMonotonicMs, nowMonotonicMs: n, intervalMs: h });
      setImmediate(this.afterTick, c, T, f, M, e);
    }
    if (!c.isStall && this.listensForSigcont) setImmediate(this.afterTick, c, null, null, null, e);
    if (c.isLateWithinTimerSlack) this.totalLateWithinTimerSlack++;
    if (c.likelySleep) (0, import_chunk_ky5sghtd.va)().get(process.stdout)?.reassertTerminalModes();
    this.lastTickMs = o, this.lastTickMonotonicMs = n, this.lastResourceSample = u, this.lastTimerSlackMs = l, this.choosePeriod(), this.inputSeen = false;
    let _ = Math.max(c.wallDriftMs, c.monotonicStallMs) - Math.min(c.timerSlackMs ?? 0, Math.max(c.monotonicStallMs, 0));
    if (_ > import_chunk_4dn6vqbv.jRn) try {
      (0, import_chunk_wx7ffn80.Dvl)(_);
    } catch (M) {
      (0, import_chunk_k449cc64.i)(M);
    }
  };
  choosePeriod() {
    if (this.rest === void 0) return;
    if ((0, import_chunk_wx7ffn80.Vre)() || this.rest.endedByInput && this.inputSeen) {
      this.arm(this.activeIntervalMs);
      return;
    }
    if (this.quietMs += this.intervalMs, this.quietMs >= this.rest.afterQuietMs) this.arm(this.rest.intervalMs);
  }
}
var q = new import_chunk_2904xtvq.j(() => new y());
