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
var chunk_sq8gf26a_exports = {};
__export(chunk_sq8gf26a_exports, {
  KJt: () => KJt,
  P0t: () => P0t,
  gYo: () => gYo,
  jXr: () => jXr,
  mai: () => mai,
  o_t: () => o_t,
  qJt: () => qJt,
  s_t: () => s_t
});
module.exports = __toCommonJS(chunk_sq8gf26a_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_hazyxdac = require("/$bunfs/root/chunk-hazyxdac.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_g03qj0bk = require("/$bunfs/root/chunk-g03qj0bk.js");
var import_chunk_y6h5d62w = require("/$bunfs/root/chunk-y6h5d62w.js");
var import_chunk_07asyfb3 = require("/$bunfs/root/chunk-07asyfb3.js");
var import_chunk_3jer9ns5 = require("/$bunfs/root/chunk-3jer9ns5.js");
var import_chunk_thchq5z2 = require("/$bunfs/root/chunk-thchq5z2.js");
var import_chunk_mmvajxhx = require("/$bunfs/root/chunk-mmvajxhx.js");
var import_chunk_rnm2beqc = require("/$bunfs/root/chunk-rnm2beqc.js");
var import_chunk_wzdjp7c0 = require("/$bunfs/root/chunk-wzdjp7c0.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
var import_path2 = require("path");
var import_promises2 = require("fs/promises");
var q = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ timestamp: (0, import_chunk_rnm2beqc.we)(), path: (0, import_chunk_rnm2beqc.df)(["npm-global", "npm-local", "native"]), outcome: (0, import_chunk_rnm2beqc.df)(["success", "failed"]), status: (0, import_chunk_rnm2beqc.we)(), version_from: (0, import_chunk_rnm2beqc.we)(), version_to: (0, import_chunk_rnm2beqc.we)().nullable(), error_code: (0, import_chunk_rnm2beqc.we)().nullable() }));
function M() {
  return (0, import_path2.join)((0, import_chunk_2gtmjt3y.Ze)(), ".last-update-result.json");
}
function I() {
  return import_chunk_hkvzj051.at.state("last-update-result");
}
async function P0t(e, n) {
  if ((0, import_chunk_m15w38ag.ne)() && n) {
    let a = await n.write(I(), (0, import_chunk_w578pjby._)(e), { mode: 438 & ~process.umask() });
    if (!a.ok) (0, import_chunk_w578pjby.t)(`Failed to record update result: ${a.error.code}`, { level: "error" });
    return;
  }
  if ((0, import_chunk_f9x2f6cx.Y)()) return;
  try {
    await (0, import_chunk_8j3h6yzg.Vn)().atomicWrite(M(), (0, import_chunk_w578pjby._)(e));
  } catch (a) {
    (0, import_chunk_w578pjby.t)(`Failed to record update result: ${a}`, { level: "error" });
  }
}
async function gYo(e) {
  let n;
  if ((0, import_chunk_m15w38ag.ne)() && e) {
    let a = await e.read([I()]);
    if (!a.ok) return (0, import_chunk_w578pjby.t)(`Failed to read update result: ${a.error.code}`, { level: "error" }), null;
    let o = a.value.items[0];
    if (!o.found) return null;
    n = Buffer.from(o.value).toString("utf8");
  } else {
    if ((0, import_chunk_f9x2f6cx.Y)()) return null;
    try {
      n = await (0, import_chunk_8j3h6yzg.Vn)().read(M());
    } catch (a) {
      if (!(0, import_chunk_jv7av99m.J)(a)) (0, import_chunk_w578pjby.t)(`Failed to read update result: ${a}`, { level: "error" });
      return null;
    }
  }
  try {
    let a = q().safeParse((0, import_chunk_w578pjby.te)(n));
    return a.success ? a.data : null;
  } catch {
    return null;
  }
}
function Q(e, n) {
  return n.includes(e.id) || e.idLike.some((a) => n.includes(a));
}
class L {
  sources;
  osRelease;
  pacman;
  deb;
  rpm;
  apk;
  packageManager;
  constructor(e) {
    this.sources = e;
  }
  getOsRelease() {
    return this.osRelease ??= this.sources.readOsRelease().then((e) => {
      let n = e.match(/^ID=["']?(\S+?)["']?\s*$/m), a = e.match(/^ID_LIKE=["']?(.+?)["']?\s*$/m);
      return { id: n?.[1] ?? "", idLike: a?.[1]?.split(" ") ?? [] };
    }, () => null);
  }
  detectPacman() {
    return this.pacman ??= this.ownsExecutable(["arch"], "pacman", ["-Qo"]);
  }
  detectDeb() {
    return this.deb ??= this.ownsExecutable(["debian"], "dpkg", ["-S"]);
  }
  detectRpm() {
    return this.rpm ??= this.ownsExecutable(["fedora", "rhel", "suse"], "rpm", ["-qf"]);
  }
  detectApk() {
    return this.apk ??= this.ownsExecutable(["alpine"], "apk", ["info", "--who-owns"]);
  }
  async ownsExecutable(e, n, a) {
    if (this.sources.platform() !== "linux") return false;
    let o = await this.getOsRelease();
    if (o && !Q(o, e)) return false;
    let r = await this.sources.execFileNoThrow(n, [...a, this.sources.execPath()], { timeout: 5e3, useCwd: false, useToolMemoryCgroup: false });
    if (r.code === 0 && r.stdout) return (0, import_chunk_w578pjby.t)(`Detected ${n} installation: ${r.stdout.trim()}`), true;
    return false;
  }
  detectHomebrew() {
    let e = this.sources.platform();
    if (e !== "macos" && e !== "linux" && e !== "wsl") return false;
    let n = this.sources.execPath();
    if (n.includes("/Caskroom/")) return (0, import_chunk_w578pjby.t)(`Detected Homebrew cask installation: ${n}`), true;
    return false;
  }
  getHomebrewCaskName() {
    return this.sources.execPath().match(/\/Caskroom\/([^/]+)\//)?.[1] ?? null;
  }
  detectWinget() {
    if (this.sources.platform() !== "windows") return false;
    let e = this.sources.execPath();
    for (let n of [/Microsoft[/\\]WinGet[/\\]Packages/i, /Microsoft[/\\]WinGet[/\\]Links/i]) if (n.test(e)) return (0, import_chunk_w578pjby.t)(`Detected winget installation: ${e}`), true;
    return false;
  }
  detectMise() {
    let e = this.sources.execPath();
    if (/[/\\]mise[/\\]installs[/\\]/i.test(e)) return (0, import_chunk_w578pjby.t)(`Detected mise installation: ${e}`), true;
    return false;
  }
  detectAsdf() {
    let e = this.sources.execPath();
    if (/[/\\]\.?asdf[/\\]installs[/\\]/i.test(e)) return (0, import_chunk_w578pjby.t)(`Detected asdf installation: ${e}`), true;
    return false;
  }
  getPackageManager() {
    return this.packageManager ??= this.detectPackageManager();
  }
  async detectPackageManager() {
    if (this.detectHomebrew()) return "homebrew";
    if (this.detectWinget()) return "winget";
    if (this.detectMise()) return "mise";
    if (this.detectAsdf()) return "asdf";
    if (await this.detectPacman()) return "pacman";
    if (await this.detectApk()) return "apk";
    if (await this.detectDeb()) return "deb";
    if (await this.detectRpm()) return "rpm";
    return "unknown";
  }
}
var Z = new import_chunk_2904xtvq.j(() => new L({ platform: import_chunk_cg8dqz0a.x, readOsRelease: () => (0, import_promises2.readFile)("/etc/os-release", "utf8"), execFileNoThrow: import_chunk_7fsmgfxx.kt, execPath: () => process.execPath || process.argv[0] || "" }));
function y() {
  return Z.of((0, import_chunk_f9x2f6cx.N)().host);
}
function D() {
  return y().detectPacman();
}
function T() {
  return y().detectDeb();
}
function E() {
  return y().detectRpm();
}
function O() {
  return y().detectApk();
}
function jXr() {
  return y().detectHomebrew();
}
function KJt() {
  return y().getHomebrewCaskName();
}
function H() {
  return y().detectWinget();
}
function U() {
  return y().detectMise();
}
function W() {
  return y().detectAsdf();
}
function o_t() {
  return y().getPackageManager();
}
function ie() {
  let e = process.argv[1] || "", n = process.execPath || process.argv[0] || "";
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") e = e.split(import_path.win32.sep).join(import_path.posix.sep), n = n.split(import_path.win32.sep).join(import_path.posix.sep);
  return [e, n];
}
async function se() {
  let [e, n] = ie();
  if ((0, import_chunk_wzdjp7c0.dg)()) {
    let l = (0, import_chunk_2gtmjt3y.Ze)().replace(/\\/g, "/").replace(/\/+$/, "") + "/local/node_modules/";
    if (n.startsWith(l)) return "npm-local";
    if (n.includes("/node_modules/@anthropic-ai/")) return "npm-global";
    if (jXr() || H() || U() || W() || await D() || await T() || await E() || await O()) return "package-manager";
    return "native";
  }
  if ((0, import_chunk_y6h5d62w.XWa)()) return "npm-local";
  if (["/usr/local/lib/node_modules", "/usr/lib/node_modules", "/opt/homebrew/lib/node_modules", "/opt/homebrew/bin", "/usr/local/bin", "/.nvm/versions/node/"].some((l) => e.includes(l))) return "npm-global";
  if (e.includes("/npm/") || e.includes("/nvm/")) return "npm-global";
  let o = await (0, import_chunk_9zdrdv25.c$)("npm config get prefix", { reject: false }), r = o.exitCode === 0 ? o.stdout.trim() : null;
  if (r && e.startsWith(r)) return "npm-global";
  return "unknown";
}
class F {
  attempted = false;
}
var K = new import_chunk_2904xtvq.j(() => new F());
function mai() {
  return K.of((0, import_chunk_f9x2f6cx.N)().host).attempted;
}
async function s_t() {
  return K.of((0, import_chunk_f9x2f6cx.N)().host).attempted = true, await se();
}
async function oe() {
  if ((0, import_chunk_wzdjp7c0.dg)()) {
    try {
      return await (0, import_promises.realpath)(process.execPath);
    } catch {
    }
    try {
      let e = await (0, import_chunk_c203g5kd.Bf)("claude");
      if (e) return e;
    } catch {
    }
    try {
      return await (0, import_chunk_w578pjby.le)().stat((0, import_path.join)((0, import_os.homedir)(), ".local/bin/claude")), (0, import_path.join)((0, import_os.homedir)(), ".local/bin/claude");
    } catch {
    }
    return "native";
  }
  try {
    return process.argv[0] || "unknown";
  } catch {
    return "unknown";
  }
}
function re() {
  try {
    if ((0, import_chunk_wzdjp7c0.dg)()) return process.execPath || "unknown";
    return process.argv[1] || "unknown";
  } catch {
    return "unknown";
  }
}
async function ce() {
  let e = (0, import_chunk_w578pjby.le)(), n = [], a = (0, import_path.join)((0, import_os.homedir)(), ".claude", "local");
  if (await (0, import_chunk_y6h5d62w.a_t)()) n.push({ type: "npm-local", path: a });
  let o = ["@anthropic-ai/claude-code"];
  if ({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.PACKAGE_URL && { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.PACKAGE_URL !== "@anthropic-ai/claude-code") o.push({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.PACKAGE_URL);
  let r = await (0, import_chunk_7fsmgfxx.kt)("npm", ["-g", "config", "get", "prefix"], { cwd: (0, import_chunk_t7fzcstv.E6e)((0, import_chunk_18rsj2ts.pe)(), (0, import_os.homedir)()) });
  if (r.code === 0 && r.stdout) {
    let i = r.stdout.trim(), b = (0, import_chunk_cg8dqz0a.x)() === "windows", f = b ? (0, import_path.join)(i, "claude") : (0, import_path.join)(i, "bin", "claude"), R = false;
    try {
      await e.stat(f), R = true;
    } catch {
    }
    if (R) {
      let h = false;
      try {
        if ((await (0, import_promises.realpath)(f)).includes("/Caskroom/")) h = jXr();
      } catch {
      }
      if (!h) {
        let g = false;
        for (let w of o) {
          let k = b ? (0, import_path.join)(i, "node_modules", w) : (0, import_path.join)(i, "lib", "node_modules", w);
          try {
            await e.stat(k), g = true;
            break;
          } catch {
          }
        }
        if (g) n.push({ type: "npm-global", path: f });
      }
    } else for (let h of o) {
      let g = b ? (0, import_path.join)(i, "node_modules", h) : (0, import_path.join)(i, "lib", "node_modules", h);
      try {
        await e.stat(g), n.push({ type: "npm-global-orphan", path: g });
      } catch {
      }
    }
  }
  let l = (0, import_path.join)((0, import_os.homedir)(), ".local", "bin", "claude");
  try {
    await e.stat(l), n.push({ type: "native", path: l });
  } catch {
  }
  if ((0, import_chunk_865at33z.ge)().installMethod === "native") {
    let i = (0, import_path.join)((0, import_os.homedir)(), ".local", "share", "claude");
    try {
      if (await e.stat(i), !n.some((b) => b.type === "native")) n.push({ type: "native", path: i });
    } catch {
    }
  }
  return n;
}
function ue(e, n) {
  let a = (0, import_chunk_cg8dqz0a.x)() === "windows", o = n;
  if (a) o = n.split(import_path.win32.sep).join(import_path.posix.sep).toLowerCase();
  return e.some((r) => {
    let l = r;
    if (a) l = r.split(import_path.win32.sep).join(import_path.posix.sep).toLowerCase();
    let c = l.replace(/\/+$/, ""), i = r.replace(/[/\\]+$/, "");
    return c === o || i === "~/.local/bin" || i === "$HOME/.local/bin";
  });
}
async function de(e) {
  let n = [], a = (0, import_chunk_865at33z.$xr)();
  if (a) n.push({ issue: `otelHeadersHelper is configured but its last invocation failed: ${(0, import_chunk_7cfjrnwy.y2)(a, import_chunk_7cfjrnwy.lLo)}`, fix: "Run the configured helper manually and confirm it prints a JSON object of string header values. If the value is a file path, confirm the file exists and is executable." });
  let o = (0, import_chunk_865at33z.ge)();
  if (e === "development") return n;
  if (e === "native") {
    let c = (import_chunk_c203g5kd.s.PATH || "").split(import_path.delimiter), i = (0, import_os.homedir)(), b = (0, import_path.join)(i, ".local", "bin"), f = (0, import_path.join)((0, import_chunk_thchq5z2.Tme)(), "claude");
    if (!await (0, import_chunk_sjqze7qg.VHn)(f) && !await (0, import_chunk_sjqze7qg.OFt)(f).catch(() => false)) n.push({ issue: `${f} was not created by the native installer (it is not a symlink into the versions/ directory), so auto-update leaves it untouched.`, fix: `If you put a launcher wrapper there on purpose, this is expected \u2014 new versions still install under $XDG_DATA_HOME/claude/versions, your launcher decides what runs, and automatic version cleanup is disabled on this machine (the installer cannot tell which version your launcher needs, so it keeps them all). To let Claude Code manage the launcher again, remove ${f} and run \`claude update\`.` });
    if (!ue(c, b)) if ((0, import_chunk_cg8dqz0a.x)() === "windows") {
      let h = b.split(import_path.posix.sep).join(import_path.win32.sep);
      n.push({ issue: `Native installation exists but ${h} is not in your PATH`, fix: "Add it by opening: System Properties \u2192 Environment Variables \u2192 Edit User PATH \u2192 New \u2192 Add the path above. Then restart your terminal." });
    } else {
      let h = (0, import_chunk_y6h5d62w.KXr)(), w = (0, import_chunk_y6h5d62w.M0t)()[h], k = w ? w.replace((0, import_os.homedir)(), "~") : "your shell config file";
      n.push({ issue: "Native installation exists but ~/.local/bin is not in your PATH", fix: `Run: echo 'export PATH="$HOME/.local/bin:$PATH"' >> ${k} then open a new terminal or run: source ${k}` });
    }
  }
  if (!(0, import_chunk_69qhefwa.Ne)(process.env.DISABLE_INSTALLATION_CHECKS)) {
    if (e === "npm-local" && o.installMethod !== "local") n.push({ issue: `Running from local installation but config install method is '${o.installMethod ?? "not set"}'`, fix: "Consider using native installation: `claude install`" });
    if (e === "native" && o.installMethod !== "native") n.push({ issue: `Running native installation but config install method is '${o.installMethod ?? "not set"}'`, fix: "Run `claude install` to update configuration" });
  }
  if (e === "npm-global" && await (0, import_chunk_y6h5d62w.a_t)()) n.push({ issue: "Local installation exists but not being used", fix: "Consider using native installation: `claude install`" });
  let r = await (0, import_chunk_y6h5d62w._ai)(), l = await (0, import_chunk_y6h5d62w.JWa)();
  if (e === "npm-local") {
    if (!await (0, import_chunk_c203g5kd.Bf)("claude") && !l) if (r) n.push({ issue: "Local installation not accessible", fix: `Alias exists but points to invalid target: ${r}. Update alias: alias claude="~/.claude/local/claude"` });
    else n.push({ issue: "Local installation not accessible", fix: 'Create alias: alias claude="~/.claude/local/claude"' });
  }
  return n;
}
async function me() {
  let e = "Claude Code-doctor-probe", n = (0, import_chunk_hazyxdac.J1)(), a = Buffer.from("probe", "utf-8").toString("hex"), o = `add-generic-password -U -a "${n}" -s "${e}" -X "${a}"
`, r = await (0, import_chunk_9zdrdv25.gS)("security", ["-i"], { input: o, reject: false, timeout: 5e3 });
  if (r.exitCode === 0) return (0, import_chunk_9zdrdv25.gS)("security", ["delete-generic-password", "-a", n, "-s", e], { reject: false, timeout: 5e3 }), null;
  let l = (r.stderr || r.stdout || "").trim().replace(/\s*\n\s*/g, "; "), c = `macOS Keychain is not writable${l ? ` (${l})` : ""}. Console login will fail to save your API key.`;
  if (/\breturned 100001\b/.test(l)) return { issue: `${c} A login stored in the Keychain can't be renewed here.`, fix: "In a sandbox, run `claude` outside it, or set CLAUDE_CODE_OAUTH_TOKEN from `claude setup-token`. Unlocking the Keychain won't help." };
  return { issue: c, fix: "Run: security unlock-keychain ~/Library/Keychains/login.keychain-db \u2014 if that doesn't fix it, your login keychain password may be out of sync with your account password: open Keychain Access, select the 'login' keychain, then Edit \u2192 Change Password for Keychain 'login'." };
}
function fe() {
  if (!import_chunk_ha393e1n.Ue.isSandboxingEnabled()) return [];
  if (import_chunk_ha393e1n.Ue.canMaskCredentialWarningFire()) import_chunk_ha393e1n.Ue.checkDependencies();
  let e = import_chunk_ha393e1n.Ue.getMaskCredentialWarning();
  if (!e) return [];
  return e.split(" \xB7 ").map((n) => {
    if (n.includes("have an empty injectHosts")) return { issue: n.replace(/\.\s*If the adapter forced this.*$/, ""), fix: "If the adapter forced this (a filesystem.allowRead entry re-opened a denied credential path), remove the conflicting allowRead entry or the deny; if a parent/managed settings tier supplied this mask, sentinel-only is its intended posture (that channel cannot grant injection, so an injectHosts set there is stripped on load) and the entry can only be removed in the parent settings; otherwise set injectHosts or remove the entry" };
    if (n.includes("degrade to deny on macOS")) return { issue: n.replace(/\.\s*Note that switching them.*$/, ""), fix: "Set sandbox.filesystem.disabled: false in user or managed settings (overrides the policy from Anthropic's feature flags; ignored if managed settings pin the filesystem layer), or remove the mask entries \u2014 a deny provides no protection while the relaxed filesystem policy is active" };
    return { issue: n.replace(/\s*Enable sandbox\.network\.tlsTerminate.*$/, ""), fix: (0, import_chunk_ha393e1n.wAe)() ? "Set sandbox.enabled: true plus sandbox.network.tlsTerminate, or remove the mask entries \u2014 TLS termination is never enabled in scrub-only mode" : import_chunk_ha393e1n.Ue.getWindowsSandboxBackend() === "mxc" ? 'The MXC backend does not support sandbox.network.tlsTerminate yet. Remove the mask entries, or set sandbox.windows.backend to "sandboxuser", run claude sandbox install, and enable it' : "Enable sandbox.network.tlsTerminate (or remove the mask entries)" };
  });
}
function he() {
  if ((0, import_chunk_cg8dqz0a.x)() !== "linux") return [];
  let e = [], n = import_chunk_ha393e1n.Ue.getLinuxGlobPatternWarnings();
  if (n.length > 0) {
    let a = (0, import_chunk_07asyfb3.ynt)(n);
    e.push({ issue: "Glob patterns in sandbox permission rules are not fully supported on Linux", fix: `Found ${n.length} pattern(s): ${a}. On Linux, glob patterns in Edit/Read rules will be ignored.` });
  }
  return e;
}
async function be() {
  let e = (0, import_chunk_cg8dqz0a.x)();
  if (e !== "linux" && e !== "wsl") return [];
  if (!import_chunk_ha393e1n.Ue.isSandboxingEnabled()) return [];
  let n = import_chunk_ha393e1n.Ue.getConfig();
  if (n === void 0 || n.filesystem.disabled) return [];
  let { denyWithinAllow: a } = import_chunk_ha393e1n.Ue.getFsWriteConfig(), o = await Promise.all(a.map(async (l) => {
    try {
      let c = await (0, import_promises.lstat)(l);
      return c.isFile() && c.size === 0 && (c.mode & 146) === 0 && c.nlink === 1;
    } catch {
      return false;
    }
  })), r = new Set(a.filter((l, c) => o[c]));
  if (r.size === 0) return [];
  return [{ issue: `Sandbox mask files left behind at write-deny paths: ${(0, import_chunk_07asyfb3.ynt)([...r])}`, fix: 'A session leaves one where it was killed, or where it exited while a sandboxed command was still running. Remove each with `rm <path>` while no other Claude Code session is running in that project \u2014 a 0-byte read-only file where a settings file belongs makes "Yes, and don\'t ask again" fail to save, and the sandbox binds it read-only again on every start' }];
}
function ye() {
  let e = import_chunk_ha393e1n.Ue.getUnbracketedIpv6DomainWarnings();
  if (e.length === 0) return [];
  return [{ issue: "Sandbox network domain entries have unreliable spellings", fix: `Found: ${(0, import_chunk_07asyfb3.ynt)(e)}. IPv6 literals must be bracketed, with any port 1-65535 and no leading zeros ("[::1]", "[::1]:443"); non-IPv6 entries must not contain wildcards in brackets, extra colons, "@", or path/query characters, and must use their canonical spelling (lowercase, no trailing dot, punycode). Until fixed, enforcement is conservative: a denied entry denies at least what any parseable reading denies (an entry with no parseable reading denies nothing); an allowed entry never allows more than written and may be removed entirely; bracketed IPv6-glob entries apply to in-process checks only, not the sandbox proxy.` }];
}
function xe() {
  let e = import_chunk_ha393e1n.Ue.getUnbracketedIpv6InjectHostWarnings();
  if (e.length === 0) return [];
  return [{ issue: "Sandbox credential injectHosts entries can never match their destination", fix: `Found: ${(0, import_chunk_07asyfb3.ynt)(e)}. Credential injection matches the bare, canonically-compressed destination address exactly and ignores ports \u2014 rewrite each entry as that bare form (e.g. "::1", "2001:db8::1"). Bracketed, zone-id, or non-canonical IPv6 spellings never match, so the credential is never injected there.` }];
}
async function Pe() {
  if (!(0, import_chunk_ha393e1n.Yq)() || !import_chunk_ha393e1n.Ue.isPlatformInEnabledList() || !import_chunk_ha393e1n.Ue.isSandboxEnabledInSettings()) return [];
  let e = await (0, import_chunk_3jer9ns5.zXr)();
  return e === void 0 ? [] : [{ issue: "The sandbox is turned on but can't start, because of the Windows Secondary Logon service", fix: e }];
}
async function qJt({ probeKeychain: e = false, storageV5: n } = {}) {
  let a = await s_t(), o = typeof { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" } < "u" && { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION ? `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}${(0, import_chunk_mmvajxhx.Qle)()}` : "unknown", r = await oe(), l = re(), c = await ce(), i = await de(a), { checkInstall: b } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-7bwbb9q1.js")));
  for (let m of await b()) if (m.type === "error") i.push({ issue: m.message, fix: "Run claude install to repair the installation." });
  if (i.push(...he()), i.push(...ye()), import_chunk_ha393e1n.Ue.isSandboxingEnabled()) await import_chunk_ha393e1n.Ue.checkDependenciesAsync();
  let f = (0, import_chunk_07asyfb3._Yo)();
  if (f) i.push(f);
  if (i.push(...xe()), i.push(...fe()), i.push(...await be()), i.push(...await Pe()), e) {
    let m = await me();
    if (m) i.push(m);
  }
  if (a === "native") {
    let m = c.filter((u) => u.type === "npm-global" || u.type === "npm-global-orphan" || u.type === "npm-local"), C = (0, import_chunk_cg8dqz0a.x)() === "windows";
    for (let u of m) if (u.type === "npm-global") {
      let S = "npm -g uninstall @anthropic-ai/claude-code";
      if ({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.PACKAGE_URL && { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.PACKAGE_URL !== "@anthropic-ai/claude-code") S += ` && npm -g uninstall ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.PACKAGE_URL}`;
      i.push({ issue: `Leftover npm global installation at ${u.path}`, fix: `Run: ${S}` });
    } else if (u.type === "npm-global-orphan") i.push({ issue: `Orphaned npm global package at ${u.path}`, fix: C ? `Run: rmdir /s /q "${u.path}"` : `Run: rm -rf ${u.path}` });
    else if (u.type === "npm-local") i.push({ issue: `Leftover npm local installation at ${u.path}`, fix: C ? `Run: rmdir /s /q "${u.path}"` : `Run: rm -rf ${u.path}` });
  }
  let h = (0, import_chunk_865at33z.ge)().installMethod || "not set", g = null;
  if (a === "npm-global") {
    if (g = (await (0, import_chunk_y6h5d62w.eja)()).hasPermissions, !g && !(0, import_chunk_865at33z.zdt)()) i.push({ issue: "Can't auto-update: npm global folder isn't writable", fix: "Run `claude install` to switch to the native installer (no sudo)\nOr reinstall with a sudo-free npm (e.g. via nvm)\nOr `npm config set prefix ~/.npm-global`, add ~/.npm-global/bin to PATH, then reinstall" });
  }
  let w = (0, import_chunk_g03qj0bk.zal)(), k = { working: w.working ?? true, mode: w.mode, systemPath: w.mode === "system" ? w.path : null }, G = a === "package-manager" ? await o_t() : void 0, z = await gYo(n);
  return { installationType: a, version: o, installationPath: r, invokedBinary: l, configInstallMethod: h, autoUpdates: (() => {
    let m = (0, import_chunk_865at33z.zdt)();
    return m ? `disabled (${(0, import_chunk_865at33z.KPr)(m)})` : "enabled";
  })(), hasUpdatePermissions: g, lastUpdateResult: z, multipleInstallations: c, warnings: i, packageManager: G, ripgrepStatus: k };
}
