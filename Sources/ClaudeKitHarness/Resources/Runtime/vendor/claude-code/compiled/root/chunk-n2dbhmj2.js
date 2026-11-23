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
var chunk_n2dbhmj2_exports = {};
__export(chunk_n2dbhmj2_exports, {
  Az: () => Az,
  Fa: () => Fa,
  Fee: () => Fee,
  MRt: () => MRt,
  Nee: () => Nee,
  Noe: () => Noe,
  OMs: () => OMs,
  PMs: () => PMs,
  RM: () => RM,
  aHr: () => aHr,
  aMo: () => aMo,
  f3: () => f3,
  iMo: () => iMo,
  lMo: () => lMo,
  nF: () => nF,
  nOe: () => nOe,
  oce: () => oce,
  os: () => os,
  rce: () => rce,
  sMo: () => sMo,
  u3: () => u3,
  xt: () => xt,
  xw: () => xw
});
module.exports = __toCommonJS(chunk_n2dbhmj2_exports);
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ds5wjsjg = require("/$bunfs/root/chunk-ds5wjsjg.js");
var import_chunk_jk26f2gn = require("/$bunfs/root/chunk-jk26f2gn.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_os = require("os");
var import_path = require("path");
var l = __toESM(require("path/win32"));
class c {
  shellConfig = null;
  pluginBinCheck = null;
  snapshotStartedAheadAt = null;
  snapshotHeadStartSkip = null;
  bashToolShellPath = null;
  resolvedBashToolShellPath = void 0;
  powerShellProvider = null;
  powerShellPluginBinPaths = null;
  powerShellPath = null;
  resolvedPowerShellPath = void 0;
  organizationsPowerShellPath = null;
  gitBashPath = void 0;
  windowsShellLauncherUsable = null;
  isPowerShellHeadStartAsked = false;
  lastPowerShellLaunch = void 0;
  inheritedAtLastPowerShellLaunch = void 0;
  waitingPowerShell = void 0;
  isStartingWaitingPowerShell = false;
  unfitWaitingPowerShells = 0;
  failedWaitingPowerShells = 0;
  onPowerShellCommandLost = void 0;
  idleWaitingPowerShells = 0;
  powerShellStartsToSkip = 0;
  commandsEnded = 0;
  warnedShortTmpDir = false;
}
var w = new import_chunk_2904xtvq.j(() => new c());
function u3() {
  return w.of((0, import_chunk_f9x2f6cx.N)().host);
}
function sMo() {
  return u3().resolvedBashToolShellPath;
}
function iMo() {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") {
    let e = Nee();
    if (e) import_chunk_c203g5kd.s.set("SHELL", e), (0, import_chunk_w578pjby.t)(`Using bash path: "${e}"`);
    else (0, import_chunk_w578pjby.t)("Git Bash not found; BashTool will be unavailable");
  }
}
function Nee() {
  let e = u3();
  if (e.gitBashPath === void 0) e.gitBashPath = b();
  return e.gitBashPath;
}
function b() {
  let { existsSync: e } = (0, import_chunk_w578pjby.le)();
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_GIT_BASH_PATH) {
    let i = l.basename(import_chunk_c203g5kd.s.CLAUDE_CODE_GIT_BASH_PATH).toLowerCase(), o = ["bash.exe", "sh.exe", "bash", "sh"].includes(i);
    if (o && e(import_chunk_c203g5kd.s.CLAUDE_CODE_GIT_BASH_PATH)) return import_chunk_c203g5kd.s.CLAUDE_CODE_GIT_BASH_PATH;
    (0, import_chunk_w578pjby.t)(`CLAUDE_CODE_GIT_BASH_PATH "${import_chunk_c203g5kd.s.CLAUDE_CODE_GIT_BASH_PATH}" ${o ? "not found" : "is not a bash/sh binary"}; falling back to auto-detection`, { level: "warn" });
  }
  let n = ["C:\\Program Files\\Git\\bin\\bash.exe", "C:\\Program Files (x86)\\Git\\bin\\bash.exe"];
  for (let i of n) if (e(i)) return i;
  let r = (0, import_chunk_ds5wjsjg.ALs)("git");
  if (r) {
    let i = l.join(r, "..", "..", "bin", "bash.exe");
    if (e(i)) return i;
  }
  return null;
}
function aMo(e, n) {
  if (!l.isAbsolute(n)) return;
  let r = l.dirname(n), i = Object.keys(e).find((a) => a.toUpperCase() === "PATH") ?? "PATH", o = e[i];
  e[i] = o ? r + l.delimiter + o : r;
}
function lMo(e) {
  let n = e.trim(), r = "", i = 0;
  while (i < n.length) {
    let o = n[i];
    if (o === '"' || o === "'") {
      let a = n.indexOf(o, i + 1);
      if (a === -1) {
        r += n.slice(i + 1);
        break;
      }
      r += n.slice(i + 1, a), i = a + 1;
    } else if (o === "\\" && i + 1 < n.length) r += n[i + 1], i += 2;
    else if (/\s/.test(o)) break;
    else r += o, i++;
  }
  return r.endsWith(".sh") ? `bash ${e}` : e;
}
var Az = (0, import_chunk_jk26f2gn.u$)((e) => {
  if (e.startsWith("\\\\")) return e.replaceAll("\\", "/");
  let n = e.match(/^([A-Za-z]):[/\\]/);
  if (n) return "/" + n[1].toLowerCase() + e.slice(2).replaceAll("\\", "/");
  return e.replaceAll("\\", "/");
}, (e) => e, 500), rce = (0, import_chunk_jk26f2gn.u$)((e) => {
  if (e.startsWith("//")) return e.replaceAll("/", "\\");
  let n = e.match(/^\/cygdrive\/([A-Za-z])(\/|$)/);
  if (n) {
    let i = n[1].toUpperCase(), o = e.slice(("/cygdrive/" + n[1]).length);
    return i + ":" + (o || "\\").replaceAll("/", "\\");
  }
  let r = e.match(/^\/([A-Za-z])(\/|$)/);
  if (r) {
    let i = r[1].toUpperCase(), o = e.slice(2);
    return i + ":" + (o || "\\").replaceAll("/", "\\");
  }
  return e.replaceAll("/", "\\");
}, (e) => e, 500);
class f3 extends Error {
  constructor() {
    super("Path contains null bytes");
    this.name = "NullBytePathError";
  }
}
function aHr(e) {
  if (e.includes("\0")) throw new f3();
}
function xt(e, n) {
  let r = P(e, n ?? (0, import_chunk_18rsj2ts.oa)());
  if (r === null) throw new import_chunk_f9x2f6cx.$B();
  return r;
}
function P(e, n) {
  if (typeof e !== "string") throw TypeError(`Path must be a string, received ${typeof e}`);
  if (n !== null && typeof n !== "string") throw TypeError(`Base directory must be a string, received ${typeof n}`);
  if (aHr(e), n !== null) aHr(n);
  let r = e.trim();
  if (!r) return n === null ? null : (0, import_chunk_z6pfqf6e.pn)((0, import_path.normalize)(n));
  if (r === "~") return (0, import_chunk_z6pfqf6e.pn)((0, import_os.homedir)());
  if (r.startsWith("~/")) return (0, import_chunk_z6pfqf6e.pn)((0, import_path.join)((0, import_os.homedir)(), r.slice(2)));
  let i = r;
  if ((0, import_chunk_cg8dqz0a.x)() === "windows" && r.match(/^\/[a-z]\//i)) try {
    i = rce(r);
  } catch {
    i = r;
  }
  if ((0, import_path.isAbsolute)(i)) return (0, import_chunk_z6pfqf6e.pn)((0, import_path.normalize)(i));
  return n === null ? null : (0, import_chunk_z6pfqf6e.pn)((0, import_path.resolve)(n, i));
}
class oce extends Error {
  constructor() {
    super('Path ends in white space once its "." and ".." are resolved');
    this.name = "UnstablePathError";
  }
}
function xw(e, n) {
  let r = xt(e, n);
  if (xt(r, n) !== r) throw new oce();
  return r;
}
function Fee(e) {
  return (0, import_path.isAbsolute)(e) && (import_path.sep === import_path.posix.sep || (0, import_path.parse)(e).root.length > 1);
}
function Fa(e, n) {
  try {
    return P(e, n ?? (0, import_chunk_18rsj2ts.oa)());
  } catch {
    return null;
  }
}
function MRt(e) {
  let n = (0, import_path.relative)((0, import_chunk_18rsj2ts.pe)(), e);
  return n.startsWith("..") ? e : n;
}
function S(e, n) {
  return (0, import_chunk_w578pjby.ig)(e, n, { ...(0, import_chunk_w578pjby.sy)(), launchAncestry: (0, import_chunk_w578pjby.kL)(e) }) !== void 0;
}
function PMs(e) {
  let n = xt(e);
  if (!(0, import_chunk_z6pfqf6e.ja)(n) && S((0, import_chunk_w578pjby.le)(), n)) return (0, import_chunk_w578pjby.Rce)(n);
  return (0, import_chunk_w578pjby.Rce)(nOe(e));
}
function nOe(e) {
  let n = xt(e);
  if ((0, import_chunk_z6pfqf6e.ja)(n)) {
    let i = (0, import_path.dirname)(n);
    return (0, import_chunk_z6pfqf6e.mc)(n) || i === import_path.posix.sep ? i : n;
  }
  let r = (0, import_chunk_w578pjby.le)();
  if (S(r, n)) return n;
  try {
    if (r.statSync(n).isDirectory()) return n;
  } catch {
  }
  return (0, import_path.dirname)(n);
}
function RM(e) {
  return /(?:^|[\\/])\.\.(?:[\\/]|$)/.test(e);
}
function os(e) {
  let n = (0, import_os.homedir)();
  if (e === n) return "~";
  if (e.startsWith(n + import_path.sep)) return "~" + e.slice(n.length);
  return e;
}
function Noe(e) {
  let n = (0, import_path.normalize)(e);
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") return n.replaceAll("\\", "/");
  return n;
}
function nF(e) {
  return (0, import_path.extname)(e).toLowerCase() === ".ipynb";
}
function OMs(e, n = "darwin") {
  if ((n === "win32" ? import_path.win32.isAbsolute : import_path.posix.isAbsolute)(e)) return e;
  if (e === "~" || e.startsWith("~/") || n === "win32" && e.startsWith("~\\")) return g((0, import_os.homedir)(), e.slice(2), n);
  if (n === "win32" && /^[a-zA-Z]:/.test(e)) return e;
  return g((0, import_chunk_18rsj2ts.pe)(), e, n);
}
function g(e, n, r) {
  if (n === "") return e;
  if (r === "win32" ? /[\\/]$/.test(e) : e.endsWith("/")) return e + n;
  return e + (r === "win32" ? "\\" : "/") + n;
}
