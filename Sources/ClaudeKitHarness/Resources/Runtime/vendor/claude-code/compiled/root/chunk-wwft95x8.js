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
var chunk_wwft95x8_exports = {};
__export(chunk_wwft95x8_exports, {
  Duo: () => Duo,
  Gd: () => Gd,
  Huo: () => Huo,
  K6: () => K6,
  Muo: () => Muo,
  cRi: () => cRi,
  dp: () => dp,
  fRi: () => fRi,
  uRi: () => uRi,
  vR: () => vR,
  vus: () => vus
});
module.exports = __toCommonJS(chunk_wwft95x8_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_n5qd9b6p = require("/$bunfs/root/chunk-n5qd9b6p.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_b9qnxh4s = require("/$bunfs/root/chunk-b9qnxh4s.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_wn8z7ghn = require("/$bunfs/root/chunk-wn8z7ghn.js");
var import_fs = require("fs");
var import_path = require("path");
async function S(e) {
  try {
    return (0, import_fs.accessSync)(e, import_fs.constants.X_OK), true;
  } catch (o) {
    if ((0, import_chunk_cg8dqz0a.x)() !== "windows" && (0, import_path.isAbsolute)(e) && (0, import_chunk_jv7av99m.kn)(o)) return false;
    let { code: r } = await (0, import_chunk_7fsmgfxx.kt)(e, ["--version"], { timeout: 1e3, useCwd: false });
    return r === 0;
  }
}
function a(e, o) {
  let r = [import_chunk_c203g5kd.s.CLAUDE_CODE_SHELL, import_chunk_c203g5kd.s.SHELL].filter((l) => l !== void 0 && (l.includes("bash") || l.includes("zsh"))), n = (0, import_chunk_b9qnxh4s.GEr)(import_chunk_c203g5kd.s.SHELL ?? "") === "bash", i = ["/bin", "/usr/bin", "/usr/local/bin", "/opt/homebrew/bin"], h = n ? ["bash", "zsh"] : ["zsh", "bash"], [u, f] = n ? [o, e] : [e, o];
  return [...r, u, ...h.flatMap((l) => i.map((c) => `${c}/${l}`)), f].filter((l) => l !== null);
}
async function g() {
  let [e, o] = await Promise.all([(0, import_chunk_c203g5kd.Bf)("zsh"), (0, import_chunk_c203g5kd.Bf)("bash")]), r;
  for (let i of a(e, o)) if (await S(i)) {
    r = i;
    break;
  }
  let n = import_chunk_c203g5kd.s.CLAUDE_CODE_SHELL;
  if (n) (0, import_chunk_w578pjby.t)(r === n ? `Using shell override: ${n}` : `CLAUDE_CODE_SHELL="${n}" is not a valid bash/zsh path, falling back to detection`);
  if (!r) {
    let i = "No suitable shell found. Claude CLI requires a Posix shell environment. Please ensure you have a valid shell installed and the SHELL environment variable set.";
    throw (0, import_chunk_w578pjby.t)(i, { level: "error" }), Error(i);
  }
  return r;
}
function Muo() {
  if ((0, import_chunk_wn8z7ghn.ZC)()) return;
  return a((0, import_chunk_c203g5kd.p2)("zsh"), (0, import_chunk_c203g5kd.p2)("bash")).find((e) => {
    try {
      return (0, import_chunk_c203g5kd.B6e)(e, import_chunk_c203g5kd.s.PATH ?? "") !== null;
    } catch {
      return false;
    }
  });
}
function vus() {
  return (0, import_chunk_n2dbhmj2.u3)().resolvedBashToolShellPath ?? Muo();
}
async function Huo() {
  return (0, import_chunk_wn8z7ghn.iC)(), cRi((0, import_chunk_n2dbhmj2.u3)());
}
function cRi(e) {
  return e.bashToolShellPath ??= g().then((o) => (e.resolvedBashToolShellPath = o, o), (o) => {
    throw e.bashToolShellPath = null, o;
  }), e.bashToolShellPath;
}
var dp = [import_chunk_hn3cwwzt.ke, import_chunk_rb36kwbn.yt];
function vR() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_USE_POWERSHELL_TOOL;
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows") return e === true;
  if (e !== void 0) return e;
  if (import_chunk_ha393e1n.Ue.isBashToolWithheldForMxcBackend() || import_chunk_ha393e1n.Ue.isBashRefusedByMxcBackend()) return true;
  if ((0, import_chunk_n2dbhmj2.Nee)() === null) return true;
  return (0, import_chunk_865at33z.b)("tengu_cobalt_ridge", false);
}
function Gd() {
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows") return true;
  if (import_chunk_ha393e1n.Ue.isBashToolWithheldForMxcBackend()) return false;
  return (0, import_chunk_n2dbhmj2.Nee)() !== null;
}
function uRi() {
  let e = (0, import_chunk_n5qd9b6p.Ar)();
  return e.bashTeachesHeredocOnStdin ??= import_chunk_c203g5kd.s.platform === "darwin" && Muo() === "/bin/bash" && (0, import_chunk_865at33z.b)("tengu_mossy_anvil", true), e.bashTeachesHeredocOnStdin;
}
function Duo(e, o) {
  return (0, import_chunk_f9x2f6cx.Cl)() || e || o || !(0, import_chunk_6e68m1dj.hn)() || (0, import_chunk_865at33z.b)("tengu_wiggly_locket", false) !== true;
}
var fRi = `Claude Code on Windows requires either Git for Windows (for bash) or PowerShell. Install one of:
  - Git for Windows: https://git-scm.com/downloads/win
  - PowerShell 7: https://aka.ms/powershell
Or set CLAUDE_CODE_GIT_BASH_PATH to your bash.exe location.`;
function K6() {
  return (0, import_chunk_cg8dqz0a.x)() !== "windows" || (0, import_chunk_n2dbhmj2.Nee)() !== null ? "bash" : "powershell";
}
