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
var chunk_wtre73q2_exports = {};
__export(chunk_wtre73q2_exports, {
  GPa: () => GPa,
  SKr: () => SKr,
  VPa: () => VPa,
  bKr: () => bKr,
  gVo: () => gVo,
  zPa: () => zPa
});
module.exports = __toCommonJS(chunk_wtre73q2_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_k5jn5rx9 = require("/$bunfs/root/chunk-k5jn5rx9.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_8c111j67 = require("/$bunfs/root/chunk-8c111j67.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_os = require("os");
var D = 2, O = 1e4, R = 6e5, w = 2592e6;
function S() {
  try {
    return (0, import_os.hostname)();
  } catch {
    return "unknown";
  }
}
function P(e) {
  return { now: e, version: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, host: S(), platform: (0, import_chunk_cg8dqz0a.x)(), ownPid: process.pid, isGone: import_chunk_rb36kwbn.Wm };
}
function _(e, n) {
  let o = n.stickyStrikes ?? D, l = { ...e.fullscreenBootPending }, u = e.fullscreenAutoDisabled, d = e.fullscreenBootStrikes?.version === n.version ? e.fullscreenBootStrikes.count : 0;
  if (u && u.version !== n.version) u = void 0;
  let r = 0, c = false, y = Number.POSITIVE_INFINITY;
  for (let [m, p] of Object.entries(l)) {
    let k = Number(m);
    if (!Number.isInteger(k) || k < 1 || typeof p !== "object" || !p) {
      delete l[m];
      continue;
    }
    let g = Math.max(0, n.now - p.startedAt);
    if (p.host !== n.host || p.platform !== n.platform) {
      if (g > w) delete l[m];
      continue;
    }
    if (p.died !== void 0 || k === n.ownPid || n.isGone(k)) {
      if (delete l[m], p.version === n.version) r += 1, y = Math.min(y, g);
    } else if (g > R) delete l[m];
    else c = true;
  }
  let h = { kind: "none" };
  if (u) h = { kind: "disabled" };
  else if (r > 0) {
    d += r;
    let m = Number.isFinite(y) ? y : 0;
    if (d >= o) u = { version: n.version, at: n.now, strikes: d }, h = { kind: "tripped", strikes: d, newStrikes: r, pendingAgeMs: m }, d = 0;
    else h = { kind: "strike", strikes: d, newStrikes: r, pendingAgeMs: m };
  } else if (c) h = { kind: "pending_alive" };
  return { next: { fullscreenBootPending: Object.keys(l).length > 0 ? l : void 0, fullscreenBootStrikes: d > 0 ? { count: d, version: n.version } : void 0, fullscreenAutoDisabled: u }, decision: h };
}
function B(e, n) {
  let o = (l) => Object.keys(l.fullscreenBootPending ?? {}).sort().join(",");
  return o(e) !== o(n) || (e.fullscreenBootStrikes?.count ?? 0) !== (n.fullscreenBootStrikes?.count ?? 0) || e.fullscreenBootStrikes?.version !== n.fullscreenBootStrikes?.version || e.fullscreenAutoDisabled?.version !== n.fullscreenAutoDisabled?.version || e.fullscreenAutoDisabled?.at !== n.fullscreenAutoDisabled?.at;
}
function SKr() {
  let e = (0, import_chunk_865at33z.ge)();
  return e.fullscreenAutoDisabled?.version === { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION || e.fullscreenBootStrikes?.version === { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION && e.fullscreenBootStrikes.count > 0;
}
var T = `Claude Code's fullscreen renderer didn't finish starting last time on this machine, so this launch is using the classic renderer. It will try fullscreen again next launch; /tui classic keeps the classic renderer.
`, M = `Claude Code's fullscreen renderer has repeatedly failed to start on this machine, so it has been turned off here. Run /tui fullscreen to try it again (this also resets after an update).
`;
function GPa(e) {
  let n = e?.state ?? import_chunk_8c111j67._5e, o = (0, import_chunk_8c111j67.a7)(n);
  if (o === "env_on" || o === "bg_forced_on" || import_chunk_c203g5kd.s.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER) return { kind: "none" };
  let l = P(Date.now()), u = (0, import_chunk_865at33z.ge)(), { next: d, decision: r } = _(u, l);
  if (B(u, d)) (0, import_chunk_865at33z.Ke)((c) => {
    let y = _(c, l).next;
    return B(c, y) ? { ...c, ...y } : c;
  }, e?.storageV5);
  if (r.kind === "strike" || r.kind === "tripped" || r.kind === "disabled") {
    n.crashAutoOff = true;
    let c = (0, import_chunk_8c111j67.DDn)(o) === "fullscreen";
    if (r.kind !== "disabled") {
      if ((0, import_chunk_y53wbr8a.a)("tengu_fullscreen_crash_auto_off", { sticky: r.kind === "tripped", strikes: r.strikes, new_strikes: r.newStrikes, pending_age_ms: r.pendingAgeMs, would_be_entry_path: (0, import_chunk_78g0060s.f)(o), overrides_fullscreen: c }), c) process.stderr.write(r.kind === "tripped" ? M : T);
    }
    (0, import_chunk_w578pjby.t)(`fullscreen disabled: a previous fullscreen launch on this machine died before it was healthy (${r.kind}) \xB7 /tui fullscreen or CLAUDE_CODE_NO_FLICKER=1 to override`);
  } else if (r.kind !== "none") (0, import_chunk_w578pjby.t)(`fullscreen boot canary: ${r.kind}`);
  return r;
}
function gVo(e) {
  return (0, import_chunk_865at33z.Ke)((n) => n.fullscreenAutoDisabled === void 0 && n.fullscreenBootStrikes === void 0 ? n : { ...n, fullscreenAutoDisabled: void 0, fullscreenBootStrikes: void 0 }, e);
}
var F = /* @__PURE__ */ new Set(["settings_on", "upsell_trial_on", "ant_default", "fresh_install_on", "gb_on"]);
class C {
  canary = { status: "idle" };
  recordMaybeOnDisk = void 0;
  exitHook = void 0;
  retire() {
    if (this.canary.status === "armed") {
      if (this.canary.cleanup(), this.canary.timer !== void 0) clearTimeout(this.canary.timer);
    }
    if (this.canary = { status: "idle" }, this.recordMaybeOnDisk = void 0, this.exitHook !== void 0) process.off("exit", this.exitHook), this.exitHook = void 0;
  }
}
var I = new import_chunk_2904xtvq.j(() => new C());
function b() {
  return I.of((0, import_chunk_f9x2f6cx.N)().host);
}
function E(e, n, o) {
  let l = e.fullscreenBootPending?.[String(n)] !== void 0;
  if (!l && !(o && e.fullscreenBootStrikes)) return e;
  let u = e.fullscreenBootPending;
  if (l && u) {
    let { [String(n)]: d, ...r } = u;
    u = Object.keys(r).length > 0 ? r : void 0;
  }
  return { ...e, fullscreenBootPending: u, fullscreenBootStrikes: o ? void 0 : e.fullscreenBootStrikes };
}
function H(e) {
  if (e.exitHook !== void 0) return;
  e.exitHook = () => {
    if (e.recordMaybeOnDisk !== void 0 && (0, import_chunk_bzyb60p0.Zr)()) {
      let n = e.recordMaybeOnDisk;
      (0, import_chunk_865at33z.zPr)((o) => E(o, n, false));
    }
  }, process.on("exit", e.exitHook);
}
async function zPa(e) {
  let n = e?.state ?? import_chunk_8c111j67._5e, o = b();
  if (o.canary.status !== "idle") return o.canary.status === "armed";
  if (!(0, import_chunk_f9x2f6cx.Cl)() || import_chunk_c203g5kd.s.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER) return false;
  if (!n.crashAutoOff && (0, import_chunk_8c111j67.Nnn)() && F.has((0, import_chunk_8c111j67.a7)(n))) n.crashAutoOff = true, (0, import_chunk_w578pjby.t)("fullscreen disabled: turned off on this machine after repeated failed starts (recorded sticky auto-disable, honoured at REPL mount) \xB7 /tui fullscreen or CLAUDE_CODE_NO_FLICKER=1 to override");
  if (!(0, import_chunk_8c111j67.Mf)(n)) return false;
  if (!F.has((0, import_chunk_8c111j67.a7)(n))) return false;
  let l = process.pid, u = { startedAt: Date.now(), version: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, host: S(), platform: (0, import_chunk_cg8dqz0a.x)() }, d = (0, import_chunk_w578pjby.Ct)(() => A(o, o.canary.status === "armed" && o.canary.firstFrameAt !== void 0 && (process.exitCode === void 0 || process.exitCode === 0) && !(0, import_chunk_ndrgvsn7.Esa)() ? "healthy" : "withdrawn"));
  H(o), o.canary = { status: "armed", pid: l, cleanup: d, onHealthy: e?.onHealthy, healthyAfterMs: e?.healthyAfterMs ?? O, firstFrameAt: void 0, timer: void 0, storageV5: e?.storageV5 }, o.recordMaybeOnDisk = l, (0, import_chunk_k5jn5rx9.ts)("fullscreen_canary_arm_start");
  try {
    await (0, import_chunk_865at33z.Ke)((r) => ({ ...r, fullscreenBootPending: { ...r.fullscreenBootPending, [String(l)]: u } }), e?.storageV5);
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r);
  } finally {
    (0, import_chunk_k5jn5rx9.ts)("fullscreen_canary_armed");
  }
  return o.canary.status === "armed";
}
function VPa(e = Date.now()) {
  let n = b();
  if (n.canary.status !== "armed" || n.canary.firstFrameAt !== void 0) return;
  n.canary.firstFrameAt = e, n.canary.timer = setTimeout((o) => {
    A(o, "healthy").catch(import_chunk_k449cc64.i);
  }, n.canary.healthyAfterMs, n), n.canary.timer.unref?.();
}
async function A(e, n) {
  if (e.canary.status !== "armed") return;
  let { pid: o, cleanup: l, timer: u, onHealthy: d, storageV5: r } = e.canary;
  if (e.canary = { status: "settled" }, l(), u !== void 0) clearTimeout(u);
  if (await (0, import_chunk_865at33z.Ke)((c) => E(c, o, n === "healthy"), r), e.recordMaybeOnDisk === o) e.recordMaybeOnDisk = void 0;
  if ((0, import_chunk_w578pjby.t)(`fullscreen boot canary: ${n}`), n === "healthy" && d) try {
    await d();
  } catch (c) {
    (0, import_chunk_k449cc64.i)(c);
  }
}
async function bKr() {
  let e = b();
  if (e.canary.status !== "armed") return false;
  let { pid: n, cleanup: o, timer: l, storageV5: u } = e.canary;
  if (e.canary = { status: "settled" }, o(), l !== void 0) clearTimeout(l);
  if (e.recordMaybeOnDisk === n) e.recordMaybeOnDisk = void 0;
  let d = false;
  return await (0, import_chunk_865at33z.Ke)((r) => {
    let c = r.fullscreenBootPending?.[String(n)];
    if (c === void 0 || c.died !== void 0) return r;
    return d = true, { ...r, fullscreenBootPending: { ...r.fullscreenBootPending, [String(n)]: { ...c, died: "render_error" } } };
  }, u), (0, import_chunk_w578pjby.t)("fullscreen boot canary: failure recorded"), d;
}
