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
var chunk_2xzsqthj_exports = {};
__export(chunk_2xzsqthj_exports, {
  Qz: () => Qz
});
module.exports = __toCommonJS(chunk_2xzsqthj_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_8m5q5cts = require("/$bunfs/root/chunk-8m5q5cts.js");
var import_chunk_p78dm83c = require("/$bunfs/root/chunk-p78dm83c.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_path = require("path");
var y = "active-time.json";
var w = 31536e6, m = 10;
function l() {
  return { version: 1, windows: [] };
}
function v() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), y);
}
function f() {
  return import_chunk_hkvzj051.at.state("active-time-ledger");
}
async function M(e) {
  let i;
  if ((0, import_chunk_m15w38ag.ne)() && e !== void 0) {
    let r = await e.readText([f()]);
    if (!r.ok) throw (0, import_chunk_w578pjby.t)(`Failed to read active-time ledger: ${(0, import_chunk_7n1spq36.un)(r.error)}`), Error("active-time ledger read failed");
    let s = r.value.items[0];
    if (!s.found) return l();
    i = s.value;
  } else try {
    i = await (0, import_chunk_8j3h6yzg.Vn)().read(v());
  } catch (r) {
    if ((0, import_chunk_jv7av99m.J)(r)) return l();
    throw (0, import_chunk_w578pjby.t)(`Failed to read active-time ledger: ${(0, import_chunk_jv7av99m.d)(r)}`), r;
  }
  try {
    let r = (0, import_chunk_w578pjby.te)(i);
    if (r.version !== 1 || !Array.isArray(r.windows)) return l();
    return { version: 1, windows: r.windows.filter((n) => typeof n?.start === "number" && typeof n?.end === "number" && typeof n?.userSeconds === "number" && n.end >= n.start) };
  } catch {
    return l();
  }
}
class g {
  pendingSeconds = 0;
  activeStretch = null;
  cachedBreakThresholdMs = m * 6e4;
  flushTimer = null;
  cleanupHandle = null;
  flushInFlight = null;
  #t = void 0;
  noteUserActivity(e, i) {
    if (e <= 0) return;
    if (this.activeStretch === null || i - this.activeStretch.lastActivityMs >= this.cachedBreakThresholdMs) this.activeStretch = { windowStartMs: i - e * 1e3, lastActivityMs: i };
    else this.activeStretch.lastActivityMs = i;
    this.pendingSeconds += e, this.ensureFlushTimer();
  }
  getCurrentContinuousUse(e) {
    if (this.activeStretch === null) return null;
    if (e - this.activeStretch.lastActivityMs >= this.cachedBreakThresholdMs) return null;
    return { startMs: this.activeStretch.windowStartMs, durationMs: Math.max(0, e - this.activeStretch.windowStartMs) };
  }
  armStorage(e) {
    this.#t ??= e;
  }
  flush(e, i) {
    if (this.flushInFlight) return this.flushInFlight;
    return this.flushInFlight = this.doFlush(e, i).finally(() => {
      this.flushInFlight = null;
    }), this.flushInFlight;
  }
  async doFlush(e, i) {
    let r = (0, import_chunk_8m5q5cts.ll)("breakReminder", { enabled: false }).value;
    if (this.cachedBreakThresholdMs = (r.breakThresholdMinutes ?? m) * 6e4, this.pendingSeconds <= 0) return;
    let s = this.pendingSeconds;
    try {
      let n = await M(i), o = n.windows.at(-1);
      if (o && e - o.end < this.cachedBreakThresholdMs) {
        if (o.end = Math.max(o.end, e), o.userSeconds = Math.min(o.userSeconds + s, (o.end - o.start) / 1e3), this.activeStretch) this.activeStretch.windowStartMs = o.start;
      } else {
        let c = this.activeStretch?.windowStartMs ?? e - s * 1e3, u = o ? Math.max(c, o.end) : c, h = Math.max(u, e);
        if (n.windows.push({ start: u, end: h, userSeconds: Math.min(s, (h - u) / 1e3) }), this.activeStretch) this.activeStretch.windowStartMs = u;
      }
      let T = e - w;
      if (n.windows = n.windows.filter((c) => c.end >= T), (0, import_chunk_m15w38ag.ne)() && i !== void 0) {
        let c = await i.write(f(), (0, import_chunk_w578pjby._)(n), { mode: 384 });
        if (!c.ok) {
          (0, import_chunk_w578pjby.t)(`Failed to flush active-time ledger: ${(0, import_chunk_7n1spq36.un)(c.error)}`);
          return;
        }
      } else {
        let c = (0, import_chunk_2gtmjt3y.Ze)();
        await (0, import_chunk_8j3h6yzg.Vn)().mkdir(c), await (0, import_chunk_8j3h6yzg.Vn)().atomicWrite(v(), (0, import_chunk_w578pjby._)(n), 384);
      }
      this.pendingSeconds -= s;
    } catch (n) {
      (0, import_chunk_w578pjby.t)(`Failed to flush active-time ledger: ${(0, import_chunk_jv7av99m.d)(n)}`);
    }
  }
  ensureFlushTimer() {
    if (this.flushTimer) return;
  }
  reset() {
    if (this.pendingSeconds = 0, this.activeStretch = null, this.cachedBreakThresholdMs = m * 6e4, this.flushTimer) clearInterval(this.flushTimer), this.flushTimer = null;
    this.cleanupHandle?.(), this.cleanupHandle = null, this.flushInFlight = null, this.#t = void 0;
  }
}
var V = new import_chunk_2904xtvq.j(() => new g());
class a {
  activeOperations = /* @__PURE__ */ new Set();
  lastUserActivityTime = 0;
  lastCLIRecordedTime;
  isCLIActive = false;
  uncountedUserSeconds = 0;
  USER_ACTIVITY_TIMEOUT_MS = 5e3;
  getNow;
  getActiveTimeCounter;
  constructor(e) {
    this.getNow = e?.getNow ?? (() => Date.now()), this.getActiveTimeCounter = e?.getActiveTimeCounter ?? import_chunk_p78dm83c.Nel, this.lastCLIRecordedTime = this.getNow();
  }
  static getInstance() {
    let e = S();
    return e.current ??= new a(), e.current;
  }
  static resetInstance() {
    S().current = null;
  }
  recordUserActivity() {
    if (!this.isCLIActive && this.lastUserActivityTime !== 0) {
      let i = (this.getNow() - this.lastUserActivityTime) / 1e3;
      if (i > 0) {
        let r = this.USER_ACTIVITY_TIMEOUT_MS / 1e3;
        if (i < r) this.uncountedUserSeconds += i;
      }
    }
    if (this.uncountedUserSeconds >= 1 || this.getNow() - this.lastUserActivityTime >= this.USER_ACTIVITY_TIMEOUT_MS) this.countUserSeconds();
    this.lastUserActivityTime = this.getNow();
  }
  countUserSeconds() {
    if (this.uncountedUserSeconds > 0) this.getActiveTimeCounter()?.add(this.uncountedUserSeconds, { type: "user" }), this.uncountedUserSeconds = 0;
  }
  startCLIActivity(e) {
    if (this.activeOperations.has(e)) this.endCLIActivity(e);
    let i = this.activeOperations.size === 0;
    if (this.activeOperations.add(e), i) this.countUserSeconds(), this.isCLIActive = true, this.lastCLIRecordedTime = this.getNow();
  }
  endCLIActivity(e) {
    if (this.activeOperations.delete(e), this.activeOperations.size === 0) {
      let i = this.getNow(), r = (i - this.lastCLIRecordedTime) / 1e3;
      if (r > 0) {
        let s = this.getActiveTimeCounter();
        if (s) s.add(r, { type: "cli" });
      }
      this.lastCLIRecordedTime = i, this.isCLIActive = false;
    }
  }
  getActivityStates() {
    return { isUserActive: (this.getNow() - this.lastUserActivityTime) / 1e3 < this.USER_ACTIVITY_TIMEOUT_MS / 1e3, isCLIActive: this.isCLIActive, activeOperationCount: this.activeOperations.size };
  }
}
class p {
  current = null;
}
var I = new import_chunk_2904xtvq.j(() => new p());
function S() {
  return I.of((0, import_chunk_f9x2f6cx.N)().host);
}
var Qz = { recordUserActivity: () => a.getInstance().recordUserActivity(), startCLIActivity: (e) => a.getInstance().startCLIActivity(e), endCLIActivity: (e) => a.getInstance().endCLIActivity(e) };
