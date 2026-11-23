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
var chunk_8c111j67_exports = {};
__export(chunk_8c111j67_exports, {
  DDn: () => DDn,
  HDn: () => HDn,
  JQa: () => JQa,
  KQa: () => KQa,
  Lnn: () => Lnn,
  MDn: () => MDn,
  Mf: () => Mf,
  Nnn: () => Nnn,
  QQa: () => QQa,
  RH: () => RH,
  Sbt: () => Sbt,
  XQa: () => XQa,
  YQa: () => YQa,
  ZQa: () => ZQa,
  _5e: () => _5e,
  _bt: () => _bt,
  a7: () => a7,
  cWe: () => cWe,
  eZa: () => eZa,
  fki: () => fki,
  gbt: () => gbt,
  kao: () => kao,
  n0: () => n0,
  qQa: () => qQa,
  ybt: () => ybt
});
module.exports = __toCommonJS(chunk_8c111j67_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_ds5wjsjg = require("/$bunfs/root/chunk-ds5wjsjg.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_qbrmmydq = require("/$bunfs/root/chunk-qbrmmydq.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_child_process = require("child_process");
function C() {
  return { loggedTmuxCcDisable: false, loggedWinSshDisable: false, checkedTmuxFocusHint: false, tmuxControlModeProbed: void 0, tmuxFocusOptionProbe: void 0, gbGateCached: void 0, gbGateSource: void 0, freshInstallCached: void 0, crashAutoOff: false };
}
var _5e = C();
function a() {
  if (!import_chunk_c203g5kd.s.TMUX) return false;
  if (import_chunk_c203g5kd.s.TERM_PROGRAM !== "iTerm.app") return false;
  let e = import_chunk_c203g5kd.s.TERM ?? "";
  return !e.startsWith("screen") && !e.startsWith("tmux");
}
function h(e) {
  if (e.tmuxControlModeProbed = a(), e.tmuxControlModeProbed) return;
  if (!import_chunk_c203g5kd.s.TMUX) return;
  if (import_chunk_c203g5kd.s.TERM_PROGRAM) return;
  let n = (0, import_chunk_ds5wjsjg.m2)("tmux");
  if (n === null) return;
  let r;
  try {
    r = (0, import_child_process.spawnSync)(n, ["display-message", "-p", "#{client_control_mode}"], { encoding: "utf8", timeout: 2e3, cwd: void 0, env: process.env, windowsHide: true });
  } catch {
    return;
  }
  if (r.status !== 0) return;
  e.tmuxControlModeProbed = r.stdout.trim() === "1";
}
function cWe(e = _5e) {
  if (e.tmuxControlModeProbed === void 0) h(e);
  return e.tmuxControlModeProbed ?? false;
}
function o() {
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows") return false;
  return Boolean(import_chunk_c203g5kd.s.SSH_CONNECTION || import_chunk_c203g5kd.s.SSH_CLIENT || import_chunk_c203g5kd.s.SSH_TTY);
}
class d {
  latched = false;
  mode = void 0;
  persisted = false;
  upsellImpression = void 0;
  asked = void 0;
  kept = void 0;
  latchFromEnv() {
    if (this.latched) return;
    this.latched = true, this.mode = import_chunk_c203g5kd.s.CLAUDE_CODE_TUI_TRIAL === "fullscreen" ? "fullscreen" : void 0, import_chunk_c203g5kd.s.unset("CLAUDE_CODE_TUI_TRIAL");
    let e = import_chunk_c203g5kd.s.CLAUDE_CODE_TUI_ASKED;
    this.asked = e === "fullscreen" || e === "default" ? e : void 0, import_chunk_c203g5kd.s.unset("CLAUDE_CODE_TUI_ASKED");
  }
}
var g = new import_chunk_2904xtvq.j(() => new d());
function Lnn() {
  return g.of((0, import_chunk_f9x2f6cx.N)().host);
}
function KQa() {
  Lnn().latchFromEnv();
}
function qQa() {
  let e = Lnn();
  e.latchFromEnv();
  let { asked: n } = e;
  return e.asked = void 0, n;
}
function MDn() {
  let e = Lnn();
  return e.latchFromEnv(), e.mode;
}
function YQa() {
  Lnn().kept ??= { tui: (0, import_chunk_2yx6c1y2.vt)().tui };
}
function u() {
  return (Lnn().kept ?? (0, import_chunk_2yx6c1y2.vt)()).tui;
}
function Nnn() {
  return (0, import_chunk_865at33z.ge)().fullscreenAutoDisabled?.version === { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION;
}
function i() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_NO_FLICKER === false || import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN;
}
var HDn = 3;
function c() {
  try {
    if ((0, import_chunk_865at33z.Lc)()) return false;
    let e = (0, import_chunk_865at33z.ge)();
    return e.firstStartVersion !== void 0 && (e.fullscreenUpsellSeenCount ?? 0) < HDn;
  } catch {
    return;
  }
}
function S(e) {
  if (e.freshInstallCached !== void 0) return e.freshInstallCached;
  let n = c();
  if (n !== void 0) e.freshInstallCached = n;
  return n ?? false;
}
function Mf(e = _5e) {
  if ((0, import_chunk_3t7ve0wy.fh)() === "local-agent") return false;
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND === "bg") return true;
  if ((0, import_chunk_qbrmmydq.Hm)()) return false;
  if (i()) return false;
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_NO_FLICKER === true) return true;
  if (e.crashAutoOff) return false;
  if (cWe(e)) {
    if (!e.loggedTmuxCcDisable) e.loggedTmuxCcDisable = true, (0, import_chunk_w578pjby.t)("fullscreen disabled: tmux -CC (iTerm2 integration mode) detected \xB7 set CLAUDE_CODE_NO_FLICKER=1 to override");
    return false;
  }
  if (o()) {
    if (!e.loggedWinSshDisable) e.loggedWinSshDisable = true, (0, import_chunk_w578pjby.t)("fullscreen disabled: Windows over SSH (ConPTY re-rendering) detected \xB7 set CLAUDE_CODE_NO_FLICKER=1 to override");
    return false;
  }
  switch (u() ?? MDn()) {
    case "fullscreen":
      return true;
    case "default":
      return false;
  }
  if (S(e)) return true;
  if (e.gbGateCached === void 0) {
    let n = (0, import_chunk_865at33z.gn)("tengu_pewter_brook", false);
    e.gbGateCached = n.value, e.gbGateSource = n.source;
  }
  return e.gbGateCached;
}
function XQa(e = _5e) {
  e.gbGateCached = void 0, e.gbGateSource = void 0, e.freshInstallCached = void 0;
}
function gbt(e = _5e) {
  if ((0, import_chunk_qbrmmydq.Hm)()) return false;
  if (i()) return false;
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_NO_FLICKER === true) return true;
  if (e.crashAutoOff || Nnn()) return false;
  if (o()) return false;
  if (cWe(e)) return false;
  switch (u()) {
    case "fullscreen":
      return true;
    case "default":
      return false;
  }
  return true;
}
function a7(e = _5e) {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND === "bg") return "bg_forced_on";
  if ((0, import_chunk_qbrmmydq.Hm)()) return "sr_auto_off";
  if (i()) return "env_off";
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_NO_FLICKER === true) return "env_on";
  if (e.crashAutoOff) return "crash_auto_off";
  if (cWe(e)) return "tmux_cc_auto_off";
  if (o()) return "win_ssh_auto_off";
  let n = u();
  switch (n ?? MDn()) {
    case "fullscreen":
      return n === "fullscreen" ? "settings_on" : "upsell_trial_on";
    case "default":
      return "settings_off";
  }
  if (e.freshInstallCached ?? c()) return "fresh_install_on";
  return e.gbGateCached ?? (0, import_chunk_865at33z.b)("tengu_pewter_brook", false) ? "gb_on" : "gb_off";
}
function DDn(e) {
  switch (e) {
    case "env_on":
    case "bg_forced_on":
    case "settings_on":
    case "upsell_trial_on":
    case "ant_default":
    case "fresh_install_on":
    case "gb_on":
      return "fullscreen";
    case "env_off":
    case "sr_auto_off":
    case "crash_auto_off":
    case "tmux_cc_auto_off":
    case "win_ssh_auto_off":
    case "settings_off":
    case "gb_off":
      return "default";
  }
}
function kao(e) {
  return e === "env_off" || e === "sr_auto_off" || e === "tmux_cc_auto_off" || e === "win_ssh_auto_off";
}
function JQa(e = _5e) {
  return (0, import_chunk_865at33z.Lc)() && e.gbGateSource === "fallback";
}
function QQa() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_NO_FLICKER === true) return "on";
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_NO_FLICKER === false) return "off";
  return;
}
function n0() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_MOUSE !== void 0) return import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_MOUSE ? "off" : "full";
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_MOUSE_CLICKS !== void 0) return import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_MOUSE_CLICKS ? "scroll" : "full";
  return "full";
}
class _ {
  observed = false;
  changed = (0, import_chunk_69qhefwa.Be)();
  subscribe = this.changed.subscribe;
  get hasObserved() {
    return this.observed;
  }
  note() {
    if (this.observed) return;
    this.observed = true, this.changed.emit();
  }
}
var f = new import_chunk_2904xtvq.j(() => new _());
function fki() {
  f.of((0, import_chunk_f9x2f6cx.N)().host).note();
}
function _bt() {
  return f.of((0, import_chunk_f9x2f6cx.N)().host).hasObserved;
}
function ybt(e) {
  return f.of((0, import_chunk_f9x2f6cx.N)().host).subscribe(e);
}
function RH(e = _5e) {
  return (0, import_chunk_f9x2f6cx.Cl)() && Mf(e);
}
function E(e) {
  return e.tmuxFocusOptionProbe ??= (0, import_chunk_7fsmgfxx.kt)("tmux", ["show", "-gv", "focus-events"], { useCwd: false, timeout: 2e3 }).then(({ stdout: n, code: r }) => r === 0 ? n.trim() : null), e.tmuxFocusOptionProbe;
}
function ZQa(e = _5e) {
  if (!import_chunk_c203g5kd.s.TMUX || a()) return;
  E(e);
}
async function eZa(e = _5e) {
  if (!import_chunk_c203g5kd.s.TMUX) return null;
  if (cWe(e)) return null;
  if (e.checkedTmuxFocusHint) return null;
  e.checkedTmuxFocusHint = true;
  let n = await E(e);
  if (n === null || n === "on") return null;
  return "tmux focus-events off \xB7 add 'set -g focus-events on' to ~/.tmux.conf and reattach for focus tracking";
}
function Sbt(e) {
  return e === "default" ? "classic" : e;
}
