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
var chunk_0954qjq0_exports = {};
__export(chunk_0954qjq0_exports, {
  x1r: () => x1r
});
module.exports = __toCommonJS(chunk_0954qjq0_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_child_process = require("child_process");
var import_path = require("path");
var import_readline = require("readline");
var _ = "/root/.local/bin/vitals-emitter-guest", y = "vitals-emitter-guest", o = 5e3, p = 1e3, c = 3e4;
async function x1r(e) {
  let { log: n } = e;
  try {
    if (import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_VITALS_EMITTER || (0, import_chunk_k449cc64.wt)()) return n("[vitals] kill switch or essential-traffic-only set; guest vitals disabled"), null;
    let t = await b(e);
    if (!t) return null;
    let i = new h(t.binary, t.viaFallback, e);
    return await i.launch(), i.disabled ? null : i;
  } catch (t) {
    return n(`[vitals] not started: ${(0, import_chunk_jv7av99m.d)(t)}`), null;
  }
}
async function b({ binaryResolution: e, log: n }) {
  let t = import_chunk_c203g5kd.s.VITALS_EMITTER_BIN;
  if (t && !(0, import_path.isAbsolute)(t)) return n(`[vitals] VITALS_EMITTER_BIN must be an absolute path (got ${t}); guest vitals disabled`), null;
  switch (e) {
    case "pinned":
      if (!t) return n("[vitals] VITALS_EMITTER_BIN not set; guest vitals disabled (this launcher does not search PATH)"), null;
      return { binary: t, viaFallback: false };
    case "search": {
      let i = t || await (0, import_chunk_c203g5kd.Bf)(y);
      return i ? { binary: i, viaFallback: false } : { binary: _, viaFallback: true };
    }
  }
}
class h {
  binary;
  binaryViaFallback;
  options;
  child = null;
  spawnedAt = 0;
  respawnTimer = null;
  nextBackoffMs = p;
  stopping = false;
  disabled = false;
  reportedOk = false;
  reportedUnexpectedExit = false;
  constructor(e, n, t) {
    this.binary = e;
    this.binaryViaFallback = n;
    this.options = t;
  }
  async stop() {
    if (this.stopping = true, this.respawnTimer) clearTimeout(this.respawnTimer), this.respawnTimer = null;
    let e = this.child;
    if (!e) return;
    let n = new Promise((i) => {
      e.once("exit", () => i()), e.once("error", () => i());
    });
    e.kill("SIGTERM");
    let t = setTimeout((i) => i.kill("SIGKILL"), o, e);
    t.unref(), await (0, import_chunk_5appeerh.me)(n, 2 * o), clearTimeout(t);
  }
  async launch() {
    let { sessionId: e, apiBaseUrl: n, tokenFilePath: t, log: i } = this.options, r;
    try {
      r = (0, import_child_process.spawn)(this.binary, ["--session-id", e, "--api-url", n, "--token-file", t], { cwd: void 0, env: g(), stdio: ["pipe", "ignore", "pipe"], windowsHide: true });
    } catch (a) {
      i(`[vitals] spawn threw: ${(0, import_chunk_jv7av99m.d)(a)}; guest vitals disabled for this session`), this.disabled = true;
      return;
    }
    if ((0, import_chunk_9zdrdv25.AB)(r.pid), this.child = r, this.spawnedAt = Date.now(), r.stdin?.on("error", () => {
    }), r.on("error", (a) => this.onChildGone(r, a)), r.on("exit", (a, f) => this.onChildGone(r, null, `exited (code=${a} signal=${f})`)), r.on("spawn", () => {
      if (i(`[vitals] spawned ${this.binary} pid=${r.pid}`), !this.reportedOk) this.reportedOk = true, (0, import_chunk_cqa9hrgx.u)("ccr_vitals_emitter");
    }), r.stderr) (0, import_readline.createInterface)({ input: r.stderr }).on("line", (a) => i(`[vitals] ${a}`));
    await new Promise((a) => {
      r.once("spawn", () => a()), r.once("error", () => a());
    });
  }
  onChildGone(e, n, t = `spawn error: ${n?.message}`) {
    if (this.child !== e) return;
    this.child = null, e.stdin?.destroy();
    let { log: i } = this.options;
    if (this.stopping) {
      i(`[vitals] emitter stopped (${t})`);
      return;
    }
    if (n) {
      let r = (0, import_chunk_jv7av99m.w)(n);
      if (r === "EAGAIN" || r === "ENOMEM") {
        i(`[vitals] transient spawn failure (${r}); respawning`), this.scheduleRespawn();
        return;
      }
      if (this.disabled = true, r === "ENOENT" || r === "EACCES" && this.binaryViaFallback) i(`[vitals] ${this.binary} not found; guest vitals disabled for this session`);
      else i(`[vitals] ${t}; guest vitals disabled for this session`), (0, import_chunk_cqa9hrgx.m)("ccr_vitals_emitter", "spawn_failed");
      return;
    }
    if (i(`[vitals] emitter ${t}`), !this.reportedUnexpectedExit) this.reportedUnexpectedExit = true, (0, import_chunk_cqa9hrgx.l)("ccr_vitals_emitter", "exited_unexpectedly");
    if (Date.now() - this.spawnedAt > c) this.nextBackoffMs = p;
    this.scheduleRespawn();
  }
  scheduleRespawn() {
    let e = this.nextBackoffMs;
    this.nextBackoffMs = Math.min(e * 2, c), this.options.log(`[vitals] respawning in ${e}ms`), this.respawnTimer = setTimeout(() => {
      this.respawnTimer = null, this.launch();
    }, e), this.respawnTimer.unref();
  }
}
function g() {
  let e = { USER_TYPE: "external", NODE_ENV: "production", VITALS_CLI_VERSION: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION }, n = { PATH: import_chunk_c203g5kd.s.PATH, HOME: import_chunk_c203g5kd.s.HOME, TMPDIR: import_chunk_c203g5kd.s.TMPDIR, HTTPS_PROXY: import_chunk_c203g5kd.s.HTTPS_PROXY, https_proxy: import_chunk_c203g5kd.s.https_proxy, HTTP_PROXY: import_chunk_c203g5kd.s.HTTP_PROXY, http_proxy: import_chunk_c203g5kd.s.http_proxy, NO_PROXY: import_chunk_c203g5kd.s.NO_PROXY, no_proxy: import_chunk_c203g5kd.s.no_proxy, SSL_CERT_FILE: import_chunk_c203g5kd.s.SSL_CERT_FILE };
  for (let [t, i] of Object.entries(n)) if (i !== void 0) e[t] = i;
  return e;
}
