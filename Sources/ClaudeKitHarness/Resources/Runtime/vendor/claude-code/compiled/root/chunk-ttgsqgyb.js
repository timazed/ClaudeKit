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
var chunk_ttgsqgyb_exports = {};
__export(chunk_ttgsqgyb_exports, {
  Asr: () => Asr,
  Csr: () => Csr,
  Jsi: () => Jsi,
  K7r: () => K7r,
  O8o: () => O8o,
  Qsi: () => Qsi,
  Rsr: () => Rsr,
  V7r: () => V7r,
  Zsi: () => Zsi,
  eii: () => eii,
  nii: () => nii,
  rii: () => rii,
  tii: () => tii
});
module.exports = __toCommonJS(chunk_ttgsqgyb_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_hvkyrv0z = require("/$bunfs/root/chunk-hvkyrv0z.js");
var import_chunk_kt20mjaj = require("/$bunfs/root/chunk-kt20mjaj.js");
var import_os = require("os");
async function V7r() {
  if ((await (0, import_chunk_7fsmgfxx.kt)("which", ["uv"])).code === 0) return (0, import_chunk_w578pjby.t)("[it2Setup] Found uv (will use uv tool install)"), "uvx";
  if ((await (0, import_chunk_7fsmgfxx.kt)("which", ["pipx"])).code === 0) return (0, import_chunk_w578pjby.t)("[it2Setup] Found pipx package manager"), "pipx";
  if ((await (0, import_chunk_7fsmgfxx.kt)("which", ["pip"])).code === 0) return (0, import_chunk_w578pjby.t)("[it2Setup] Found pip package manager"), "pip";
  if ((await (0, import_chunk_7fsmgfxx.kt)("which", ["pip3"])).code === 0) return (0, import_chunk_w578pjby.t)("[it2Setup] Found pip3 package manager"), "pip";
  return (0, import_chunk_w578pjby.t)("[it2Setup] No Python package manager found"), null;
}
async function w() {
  return (await (0, import_chunk_7fsmgfxx.kt)("which", ["it2"])).code === 0;
}
async function Jsi(e) {
  (0, import_chunk_w578pjby.t)(`[it2Setup] Installing it2 using ${e}`);
  let n;
  switch (e) {
    case "uvx":
      n = await (0, import_chunk_7fsmgfxx.ut)("uv", ["tool", "install", "it2"], { cwd: (0, import_os.homedir)() });
      break;
    case "pipx":
      n = await (0, import_chunk_7fsmgfxx.ut)("pipx", ["install", "it2"], { cwd: (0, import_os.homedir)() });
      break;
    case "pip":
      if (n = await (0, import_chunk_7fsmgfxx.ut)("pip", ["install", "--user", "it2"], { cwd: (0, import_os.homedir)() }), n.code !== 0) n = await (0, import_chunk_7fsmgfxx.ut)("pip3", ["install", "--user", "it2"], { cwd: (0, import_os.homedir)() });
      break;
  }
  if (n.code !== 0) {
    let i = n.stderr || "Unknown installation error";
    return (0, import_chunk_w578pjby.t)(`[it2Setup] Failed to install it2: ${i}`, { level: "error" }), (0, import_chunk_cqa9hrgx.m)("swarm_iterm2_it2_install", `${e}_install_failed`), { success: false, error: i, packageManager: e };
  }
  return (0, import_chunk_w578pjby.t)("[it2Setup] it2 installed successfully"), (0, import_chunk_cqa9hrgx.u)("swarm_iterm2_it2_install"), { success: true, packageManager: e };
}
async function Qsi() {
  if ((0, import_chunk_w578pjby.t)("[it2Setup] Verifying it2 setup..."), !await w()) return (0, import_chunk_cqa9hrgx.m)("swarm_iterm2_it2_verify", "not_installed"), { success: false, error: "it2 CLI is not installed or not in PATH" };
  let n = await (0, import_chunk_7fsmgfxx.kt)("it2", ["session", "list"]);
  if (n.code !== 0) {
    let i = n.stderr.toLowerCase();
    if (i.includes("api") || i.includes("python") || i.includes("connection refused") || i.includes("not enabled")) return (0, import_chunk_w578pjby.t)("[it2Setup] Python API not enabled in iTerm2"), (0, import_chunk_cqa9hrgx.l)("swarm_iterm2_it2_verify", "python_api_not_enabled"), { success: false, error: "Python API not enabled in iTerm2 preferences" };
    return (0, import_chunk_cqa9hrgx.m)("swarm_iterm2_it2_verify", "communication_failed"), { success: false, error: n.stderr || "Failed to communicate with iTerm2" };
  }
  return (0, import_chunk_w578pjby.t)("[it2Setup] it2 setup verified successfully"), (0, import_chunk_cqa9hrgx.u)("swarm_iterm2_it2_verify"), { success: true };
}
function Zsi() {
  return ["Almost done! Enable the Python API in iTerm2:", "", "  iTerm2 \u2192 Settings \u2192 General \u2192 Magic \u2192 Enable Python API", "", "After enabling, you may need to restart iTerm2."];
}
function eii(e) {
  if ((0, import_chunk_865at33z.ge)().iterm2It2SetupComplete !== true) (0, import_chunk_865at33z.Ke)((i) => ({ ...i, iterm2It2SetupComplete: true }), e), (0, import_chunk_w578pjby.t)("[it2Setup] Marked it2 setup as complete");
}
function tii(e, n) {
  if ((0, import_chunk_865at33z.ge)().preferTmuxOverIterm2 !== e) (0, import_chunk_865at33z.Ke)((s) => ({ ...s, preferTmuxOverIterm2: e }), n), (0, import_chunk_w578pjby.t)(`[it2Setup] Set preferTmuxOverIterm2 = ${e}`);
}
function f() {
  return (0, import_chunk_865at33z.ge)().preferTmuxOverIterm2 === true;
}
async function O8o(e = import_chunk_hvkyrv0z.t8e) {
  if (e.backendsRegistered) return;
  let { TmuxBackend: n } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-h4vss2hr.js"))), { ITermBackend: i } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-1p3tg6f5.js")));
  e.TmuxBackendClass = n, e.ITermBackendClass = i, e.backendsRegistered = true;
}
function c(e) {
  if (e.tmuxBackend) return e.tmuxBackend;
  if (!e.TmuxBackendClass) throw Error("TmuxBackend not registered. Import TmuxBackend.ts before using the registry.");
  return e.tmuxBackend = new e.TmuxBackendClass(), e.tmuxBackend;
}
function d(e) {
  if (e.itermBackend) return e.itermBackend;
  if (!e.ITermBackendClass) throw Error("ITermBackend not registered. Import ITermBackend.ts before using the registry.");
  return e.itermBackend = new e.ITermBackendClass(), e.itermBackend;
}
async function K7r(e = import_chunk_hvkyrv0z.t8e) {
  if (await O8o(e), e.cachedDetectionResult) return (0, import_chunk_w578pjby.t)(`[BackendRegistry] Using cached backend: ${e.cachedDetectionResult.backend.type}`), e.cachedDetectionResult;
  if ((0, import_chunk_w578pjby.t)("[BackendRegistry] Starting backend detection..."), (0, import_chunk_kt20mjaj.c$n)() === "iterm2") {
    if (!(0, import_chunk_hvkyrv0z.n8e)(e)) throw (0, import_chunk_cqa9hrgx.m)("swarm_backend_detect", "iterm2_explicit_not_in_iterm2"), Error('teammateMode is set to "iterm2" but this session is not running inside iTerm2. Launch Claude from iTerm2, or change teammateMode in settings.');
    if (!await (0, import_chunk_hvkyrv0z.qps)(e)) throw (0, import_chunk_cqa9hrgx.m)("swarm_backend_detect", "iterm2_explicit_no_it2"), Error('teammateMode is set to "iterm2" but the it2 CLI is not reachable. Install it with `pip install it2` and enable the Python API in iTerm2 (Preferences > General > Magic > Enable Python API).');
    (0, import_chunk_w578pjby.t)("[BackendRegistry] Selected: iterm2 (explicit teammateMode)");
    let a = d(e);
    return e.cachedDetectionResult = { backend: a, isNative: true, needsIt2Setup: false }, (0, import_chunk_cqa9hrgx.u)("swarm_backend_detect"), e.cachedDetectionResult;
  }
  let n = await (0, import_chunk_hvkyrv0z.HAe)(), i = (0, import_chunk_hvkyrv0z.n8e)(e);
  if ((0, import_chunk_w578pjby.t)(`[BackendRegistry] Environment: insideTmux=${n}, inITerm2=${i}`), n) {
    (0, import_chunk_w578pjby.t)("[BackendRegistry] Selected: tmux (running inside tmux session)");
    let a = c(e);
    return e.cachedDetectionResult = { backend: a, isNative: true, needsIt2Setup: false }, (0, import_chunk_cqa9hrgx.u)("swarm_backend_detect"), e.cachedDetectionResult;
  }
  if (i) {
    let a = f();
    if (a) (0, import_chunk_w578pjby.t)("[BackendRegistry] User prefers tmux over iTerm2, skipping iTerm2 detection");
    else {
      let r = await (0, import_chunk_hvkyrv0z.qps)(e);
      if ((0, import_chunk_w578pjby.t)(`[BackendRegistry] iTerm2 detected, it2 CLI available: ${r}`), r) {
        (0, import_chunk_w578pjby.t)("[BackendRegistry] Selected: iterm2 (native iTerm2 with it2 CLI)");
        let k = d(e);
        return e.cachedDetectionResult = { backend: k, isNative: true, needsIt2Setup: false }, (0, import_chunk_cqa9hrgx.u)("swarm_backend_detect"), e.cachedDetectionResult;
      }
    }
    let p = await (0, import_chunk_hvkyrv0z._Fn)();
    if ((0, import_chunk_w578pjby.t)(`[BackendRegistry] it2 not available, tmux available: ${p}`), p) {
      (0, import_chunk_w578pjby.t)("[BackendRegistry] Selected: tmux (fallback in iTerm2, it2 setup recommended)");
      let r = c(e);
      return e.cachedDetectionResult = { backend: r, isNative: false, needsIt2Setup: !a }, (0, import_chunk_cqa9hrgx.l)("swarm_backend_detect", a ? "fallback_to_tmux" : "needs_it2_setup"), e.cachedDetectionResult;
    }
    throw (0, import_chunk_w578pjby.t)("[BackendRegistry] ERROR: iTerm2 detected but no it2 CLI and no tmux"), (0, import_chunk_cqa9hrgx.m)("swarm_backend_detect", "iterm2_no_it2_no_tmux"), Error("iTerm2 detected but it2 CLI not installed. Install it2 with: pip install it2");
  }
  let s = await (0, import_chunk_hvkyrv0z._Fn)();
  if ((0, import_chunk_w578pjby.t)(`[BackendRegistry] Not in tmux or iTerm2, tmux available: ${s}`), s) {
    (0, import_chunk_w578pjby.t)("[BackendRegistry] Selected: tmux (external session mode)");
    let a = c(e);
    return e.cachedDetectionResult = { backend: a, isNative: false, needsIt2Setup: false }, (0, import_chunk_cqa9hrgx.u)("swarm_backend_detect"), e.cachedDetectionResult;
  }
  throw (0, import_chunk_w578pjby.t)("[BackendRegistry] ERROR: No pane backend available"), (0, import_chunk_cqa9hrgx.m)("swarm_backend_detect", "no_backend_available"), Error(b());
}
function b() {
  switch ((0, import_chunk_cg8dqz0a.x)()) {
    case "macos":
      return `To use agent swarms, install tmux:
  brew install tmux
Then start a tmux session with: tmux new-session -s claude`;
    case "linux":
    case "wsl":
      return `To use agent swarms, install tmux:
  sudo apt install tmux    # Ubuntu/Debian
  sudo dnf install tmux    # Fedora/RHEL
Then start a tmux session with: tmux new-session -s claude`;
    case "windows":
      return `To use agent swarms, you need tmux which requires WSL (Windows Subsystem for Linux).
Install WSL first, then inside WSL run:
  sudo apt install tmux
Then start a tmux session with: tmux new-session -s claude`;
    default:
      return `To use agent swarms, install tmux using your system's package manager.
Then start a tmux session with: tmux new-session -s claude`;
  }
}
function Csr(e, n = import_chunk_hvkyrv0z.t8e) {
  switch (e) {
    case "tmux":
      return c(n);
    case "iterm2":
      return d(n);
  }
}
function nii(e = import_chunk_hvkyrv0z.t8e) {
  return e.cachedDetectionResult;
}
function rii(e = import_chunk_hvkyrv0z.t8e) {
  (0, import_chunk_w578pjby.t)("[BackendRegistry] Marking in-process fallback as active"), e.inProcessFallbackActive = true;
}
function g() {
  return (0, import_chunk_kt20mjaj.c$n)();
}
function Asr(e = import_chunk_hvkyrv0z.t8e) {
  if ((0, import_chunk_f9x2f6cx.Se)()) return (0, import_chunk_w578pjby.t)("[BackendRegistry] isInProcessEnabled: true (non-interactive session)"), true;
  if ((0, import_chunk_trq47kfh.m9)()) return (0, import_chunk_w578pjby.t)("[BackendRegistry] isInProcessEnabled: true (permissions.blockFileToolReadsOutsideWorkingDirectories)"), true;
  let n = g(), i;
  if (n === "in-process") i = true;
  else if (n === "tmux" || n === "iterm2") i = false;
  else {
    if (e.inProcessFallbackActive) return (0, import_chunk_w578pjby.t)("[BackendRegistry] isInProcessEnabled: true (fallback after pane backend unavailable)"), true;
    let s = (0, import_chunk_hvkyrv0z.ymo)(), a = (0, import_chunk_hvkyrv0z.n8e)(e);
    i = !s && !a;
  }
  return (0, import_chunk_w578pjby.t)(`[BackendRegistry] isInProcessEnabled: ${i} (mode=${n}, insideTmux=${(0, import_chunk_hvkyrv0z.ymo)()}, inITerm2=${(0, import_chunk_hvkyrv0z.n8e)(e)})`), i;
}
function Rsr(e = import_chunk_hvkyrv0z.t8e) {
  e.cachedDetectionResult = null, e.backendsRegistered = false, e.inProcessFallbackActive = false;
}
