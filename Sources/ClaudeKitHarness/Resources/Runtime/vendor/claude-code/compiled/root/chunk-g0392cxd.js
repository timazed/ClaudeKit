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
var chunk_g0392cxd_exports = {};
__export(chunk_g0392cxd_exports, {
  b7s: () => b7s
});
module.exports = __toCommonJS(chunk_g0392cxd_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_n25gt70y = require("/$bunfs/root/chunk-n25gt70y.js");
var import_chunk_wzdjp7c0 = require("/$bunfs/root/chunk-wzdjp7c0.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_v8 = require("v8");
async function T(r) {
  let e = process.memoryUsage(), s = (0, import_v8.getHeapStatistics)(), n = process.resourceUsage(), c = process.uptime(), d;
  try {
    d = (0, import_v8.getHeapSpaceStatistics)();
  } catch {
  }
  let m = process._getActiveHandles().length, l = process._getActiveRequests().length, p;
  try {
    p = (await (0, import_promises.readdir)("/proc/self/fd")).length;
  } catch {
  }
  let f;
  try {
    f = await (0, import_promises.readFile)("/proc/self/smaps_rollup", "utf8");
  } catch {
  }
  let b, y, S;
  try {
    let { heapStats: u } = await Promise.resolve().then(() => __toESM(require("bun:jsc"))), h = u(true);
    b = h.objectTypeCounts, y = h.protectedObjectTypeCounts, S = h.mimalloc || void 0;
  } catch {
  }
  let w = e.rss - e.heapUsed, v = c > 0 ? e.rss / c : 0, g = v * 3600 / 1048576, o = [];
  if (s.number_of_detached_contexts > 0) o.push(`${s.number_of_detached_contexts} detached context(s) - possible iframe/context leak`);
  if (m > 100) o.push(`${m} active handles - possible timer/socket leak`);
  if (w > e.heapUsed) o.push("Native memory > heap - leak may be in native addons (node-pty, etc.)");
  if (g > 100) o.push(`High memory growth rate: ${g.toFixed(1)} MB/hour`);
  if (p && p > 500) o.push(`${p} open file descriptors - possible file/socket leak`);
  return { timestamp: (/* @__PURE__ */ new Date()).toISOString(), sessionId: (0, import_chunk_f9x2f6cx.W)(), trigger: r, dumpNumber: 0, uptimeSeconds: c, runtime: (0, import_chunk_wzdjp7c0.f_)() ? "bun" : "node", memoryUsage: { heapUsed: e.heapUsed, heapTotal: e.heapTotal, external: e.external, arrayBuffers: e.arrayBuffers, rss: e.rss }, memoryGrowthRate: { bytesPerSecond: v, mbPerHour: g }, v8HeapStats: { heapSizeLimit: s.heap_size_limit, mallocedMemory: s.malloced_memory, peakMallocedMemory: s.peak_malloced_memory, detachedContexts: s.number_of_detached_contexts, nativeContexts: s.number_of_native_contexts }, v8HeapSpaces: d?.map((u) => ({ name: u.space_name, size: u.space_size, used: u.space_used_size, available: u.space_available_size })), resourceUsage: { maxRSS: n.maxRSS * ((0, import_chunk_cg8dqz0a.x)() === "macos" ? 1 : 1024), userCPUTime: n.userCPUTime, systemCPUTime: n.systemCPUTime }, activeHandles: m, activeRequests: l, openFileDescriptors: p, analysis: { potentialLeaks: o, recommendation: o.length > 0 ? `WARNING: ${o.length} potential leak indicator(s) found. See potentialLeaks array.` : "No obvious leak indicators. Check heap snapshot for retained objects." }, smapsRollup: f, objectTypeCounts: b, protectedObjectTypeCounts: y, mimalloc: S, platform: "darwin", nodeVersion: process.version, ccVersion: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION };
}
async function b7s() {
  if ((0, import_chunk_n25gt70y.iYi)()) return { success: false, error: "heap dumps are unavailable in a launcher-started session" };
  try {
    let r = (0, import_chunk_f9x2f6cx.W)(), e = await T("manual"), s = (p) => (p / 1024 / 1024 / 1024).toFixed(3);
    (0, import_chunk_w578pjby.t)(`[HeapDump] Memory state:
  heapUsed: ${s(e.memoryUsage.heapUsed)} GB (in snapshot)
  external: ${s(e.memoryUsage.external)} GB (${e.runtime === "bun" ? "part of heapUsed, in snapshot" : "NOT in snapshot"})
  rss: ${s(e.memoryUsage.rss)} GB (total process)
  ${e.analysis.recommendation}`);
    let n = await (0, import_chunk_2yx6c1y2.QXi)();
    await (0, import_chunk_w578pjby.le)().mkdir(n);
    let c = `${r}.heapsnapshot`, d = `${r}-diagnostics.json`, m = (0, import_path.join)(n, c), l = (0, import_path.join)(n, d);
    return await (0, import_promises.writeFile)(l, (0, import_chunk_w578pjby._)(e, null, 2), { mode: 384 }), (0, import_chunk_w578pjby.t)(`[HeapDump] Diagnostics written to ${l}`), await B(m), (0, import_chunk_w578pjby.t)(`[HeapDump] Heap dump written to ${m}`), (0, import_chunk_y53wbr8a.a)("tengu_heap_dump", { triggerManual: true, triggerAuto15GB: false, dumpNumber: 0, success: true }), { success: true, heapPath: m, diagPath: l, diagnostics: e };
  } catch (r) {
    let e = (0, import_chunk_jv7av99m.D)(r);
    if ((0, import_chunk_jv7av99m.pa)(e)) (0, import_chunk_w578pjby.t)(`[HeapDump] Failed to write dump: ${e.message}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(e);
    return (0, import_chunk_y53wbr8a.a)("tengu_heap_dump", { triggerManual: true, triggerAuto15GB: false, dumpNumber: 0, success: false }), { success: false, error: e.message };
  }
}
async function B(r) {
  (0, import_fs.writeFileSync)(r, Bun.generateHeapSnapshot("v8", "arraybuffer"), { mode: 384 }), Bun.gc(true);
}
