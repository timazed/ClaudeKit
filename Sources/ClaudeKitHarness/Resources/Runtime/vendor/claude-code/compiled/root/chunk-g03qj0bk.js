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
var chunk_g03qj0bk_exports = {};
__export(chunk_g03qj0bk_exports, {
  A_r: () => A_r,
  Gal: () => Gal,
  Gfs: () => Gfs,
  Kfs: () => Kfs,
  LNn: () => LNn,
  R_r: () => R_r,
  Vfs: () => Vfs,
  Wst: () => Wst,
  apo: () => apo,
  gsn: () => gsn,
  jfs: () => jfs,
  lpo: () => lpo,
  mUt: () => mUt,
  nre: () => nre,
  qfs: () => qfs,
  rre: () => rre,
  zal: () => zal,
  zfs: () => zfs
});
module.exports = __toCommonJS(chunk_g03qj0bk_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_aka192fb = require("/$bunfs/root/chunk-aka192fb.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_jg286npj = require("/$bunfs/root/chunk-jg286npj.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_2567t09g = require("/$bunfs/root/chunk-2567t09g.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_chunk_wn8z7ghn = require("/$bunfs/root/chunk-wn8z7ghn.js");
var import_chunk_wzdjp7c0 = require("/$bunfs/root/chunk-wzdjp7c0.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_path = require("path");
var import_child_process = require("child_process");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_os = require("os");
var m = __toESM(require("path"));
var import_string_decoder = require("string_decoder");
function te(e, n) {
  return { cmd: (0, import_chunk_c203g5kd.p2)(e) ?? e, args: n };
}
var st = "tengu_zippy_cocoa";
function xe() {
  return (0, import_chunk_sghy0qej.Pe)(st, { safe: true });
}
class Ge {
  config = void 0;
  roundedFileCounts = /* @__PURE__ */ new Map();
  #e = null;
  firstUseProbe = void 0;
  heldDirectorySpawnUnavailableReported = false;
  reopenRejectedReported = false;
  get status() {
    return this.#e;
  }
  getConfig() {
    return this.config ??= pt(), this.config;
  }
  clearConfig() {
    this.config = void 0;
  }
  countFilesRounded(e, n, r) {
    let o = `${e}|${r.join(",")}`, c = this.roundedFileCounts.get(o);
    if (c === void 0) c = Nt(e, n, r), this.roundedFileCounts.set(o, c);
    return c;
  }
  setStatus(e) {
    this.#e = e;
  }
  testOnFirstUse() {
    return this.firstUseProbe ??= Dt(), this.firstUseProbe;
  }
  invalidate() {
    if (this.clearConfig(), this.#e?.working !== false) this.firstUseProbe = void 0, this.#e = null;
  }
  reset() {
    this.config = void 0, this.roundedFileCounts.clear(), this.firstUseProbe = void 0, this.heldDirectorySpawnUnavailableReported = false, this.reopenRejectedReported = false;
  }
}
var ut = new import_chunk_2904xtvq.j(() => new Ge());
function H() {
  return ut.of((0, import_chunk_f9x2f6cx.N)().host);
}
function gsn() {
  return H().getConfig();
}
function pt() {
  if ((0, import_chunk_69qhefwa.Oi)(import_chunk_c203g5kd.s.USE_BUILTIN_RIPGREP)) {
    let { cmd: r } = te("rg", []);
    if (r !== "rg") return { mode: "system", command: r, args: [] };
  }
  if ((0, import_chunk_wzdjp7c0.dg)()) {
    let r = { mode: "embedded", command: process.execPath, args: ["--no-config"], argv0: "rg" };
    if ((0, import_chunk_c203g5kd.p2)(process.execPath)) return r;
    let { cmd: o } = te("rg", []);
    if (o !== "rg") return { mode: "system", command: o, args: [] };
    return r;
  }
  let { cmd: n } = te("rg", []);
  return { mode: "system", command: n, args: [] };
}
var ft = "ripgrep not found on PATH. Install it (brew install ripgrep / apt install ripgrep / winget install BurntSushi.ripgrep.MSVC) or use the native claude binary which embeds it.", ht = /* @__PURE__ */ new Set(["spawn", "spawnSync", "posix_spawn", "uv_spawn"]);
function se(e) {
  if ("stdinSourceFailed" in e && e.stdinSourceFailed === true) return Reflect.deleteProperty(e, "cmd"), Reflect.deleteProperty(e, "spawnargs"), e;
  let { name: n, message: r, stack: o, code: c, errno: d, path: u, syscall: R } = e, E = typeof R === "string" ? /^[A-Za-z_]+/.exec(R)?.[0] : void 0, l = Object.assign(Error(r), { name: n, stack: o, ...c !== void 0 && { code: c }, ...typeof d === "number" && { errno: d }, ...E !== void 0 && ht.has(E) && { syscall: E } });
  return typeof u === "string" ? Object.defineProperty(l, "path", { value: u, enumerable: false, writable: true, configurable: true }) : l;
}
function we(e) {
  if (e.code === "ENOENT" && gsn().mode === "system") {
    let n = Error(ft, { cause: e });
    return n.code = "ENOENT", n;
  }
  return e;
}
function nre() {
  let e = gsn();
  return { rgPath: e.command, rgArgs: e.args, argv0: e.argv0 };
}
var z = 2e7, Te = 1048576;
class he {
  maxBytes;
  truncated = false;
  decoder = new import_string_decoder.StringDecoder("utf8");
  pieces = [];
  byteLength = 0;
  constructor(e) {
    this.maxBytes = e;
  }
  append(e) {
    if (this.truncated) return false;
    let n = this.maxBytes - this.byteLength, r = e.length <= n, o = r ? e : e.subarray(0, n);
    this.byteLength += o.length;
    for (let c = 0; c < o.length; c += Te) this.pieces.push(this.decoder.write(o.subarray(c, c + Te)));
    if (!r) this.truncated = true;
    return !r;
  }
  takeText() {
    let e = this.pieces;
    return this.pieces = [], e.push(this.decoder.end()), e.join("");
  }
  release() {
    this.pieces = [];
  }
}
class Ee extends Error {
  name = "RipgrepOutputError";
}
function Ue(e) {
  return (0, import_chunk_jv7av99m.Ye)(new Ee(`Failed to collect ripgrep output: ${e.message}. If the search matches a very large amount of text, try a more specific path or pattern.`, { cause: e }), "ripgrep output collection failed");
}
function gt(e, n) {
  let r = e.at(-1);
  if (r === void 0 || n.endsWith(`
`)) return e;
  let o = r.lastIndexOf("\0");
  return o === -1 ? e.slice(0, -1) : e.with(-1, r.slice(0, o + 1));
}
var mt = /* @__PURE__ */ new Set(["SIGHUP", "SIGINT", "SIGPIPE"]);
function Ae(e) {
  return e.includes("os error 11") || e.includes("Resource temporarily unavailable");
}
var He = /* @__PURE__ */ new Set(["EAGAIN", "ENOMEM", "EMFILE", "ENFILE"]);
function wt(e, n, r) {
  return (0, import_chunk_cg8dqz0a.x)() === "windows" && e !== void 0 && !(0, import_chunk_z6pfqf6e.$r)(n) && !(0, import_chunk_z6pfqf6e.$r)(r) && (0, import_chunk_865at33z.b)("tengu_cuddly_swing", true) !== false;
}
function Et(e) {
  if (e.pid === void 0) return;
  let n = (0, import_chunk_9zdrdv25.Fz)(() => {
    try {
      e.kill();
    } catch {
    }
  }, { alwaysLast: true });
  e.once("close", n);
}
class Wst extends Error {
  partialResults;
  constructor(e, n) {
    super(e);
    this.partialResults = n;
    this.name = "RipgrepTimeoutError";
  }
}
function jfs() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_GLOB_TIMEOUT_SECONDS || 0;
  return e > 0 ? Math.min(e * 1e3, import_chunk_2567t09g.au) : (0, import_chunk_cg8dqz0a.x)() === "wsl" ? 6e4 : 2e4;
}
function je() {
  let e = jfs() / 1e3;
  return `Ripgrep search timed out after ${e} ${(0, import_chunk_7cfjrnwy.O)(e, "second")}`;
}
function Ne(e) {
  if (e.aborted && e.reason?.name !== "TimeoutError") return new import_chunk_jv7av99m.Ie();
  return new Wst(`${je()}. The search may have matched files but did not complete in time. Try searching a more specific path or pattern.`, []);
}
class Ke extends import_chunk_jv7av99m.A {
  constructor() {
    super('The search failed, so this is not a "no matches" result: matches may exist. What happened to the search program (ripgrep) is not known, and no results were read. Run the search once more. If it fails again, tell the user that searches are failing. Do not run a recursive search in the shell instead (for example grep -r, find or rg): it can reach what this tool is set to leave out.', "ripgrep unexpected exit with no results");
    this.name = "RipgrepAbnormalExitError";
  }
}
var ke = /^rg: (?:regex parse error|error parsing glob|unrecognized file type|error parsing flag|compiled regex exceeds size limit|the literal|pattern contains)/m, De = "--no-messages", Fe = "error parsing glob '";
class Xe extends import_chunk_jv7av99m.A {
  constructor(e) {
    super(`Search failed \u2014 ripgrep rejected the pattern, glob, or file type without searching:
${(0, import_chunk_7cfjrnwy.ee)(e.trim(), 2e3)}`, "ripgrep usage error (input rejected, stderr redacted)");
    this.name = "RipgrepUsageError";
  }
}
var Le = "Do not run a recursive search in the shell instead (for example grep -r, find or rg)";
class Je extends import_chunk_jv7av99m.A {
  constructor(e) {
    let n = (0, import_chunk_cg8dqz0a.x)() === "windows", r = n ? e === _t : e === St || e === yt, o = r ? "permission denied" : !n && e === Rt ? "input/output error" : !n && e === Ve ? "the file Claude Code opened was not passed to ripgrep" : "an operating system error", c = r ? `Tell the user that the path could not be read. ${Le}.` : `Run the search once more. If it fails again, tell the user that the search is failing. ${Le}: it can also reach other files, which this tool is set to leave out.`;
    super(`Search failed: ripgrep could not read the path it was given (${o}, os error ${e}), so nothing was searched. This is not a "no matches" result. ${c}`, "ripgrep could not read its target");
    this.name = "RipgrepTargetUnreadableError";
  }
}
var yt = 1, Ve = 2, Rt = 5, St = 13, bt = 20, Ot = 2, vt = 3, _t = 5;
class ze extends import_chunk_jv7av99m.A {
  constructor(e) {
    super(e === "stdout" ? `Ripgrep output passed the ${z / 1e6}MB limit before a single complete line was read, so there are no usable results: at least one matching line is extremely long. Try a more specific pattern or path, or exclude very large files.` : `Ripgrep produced more than ${z / 1e6}MB of error output (for example per-file permission warnings) before any result line, so the search is incomplete. Try a more specific path.`, "ripgrep output over cap before first complete line");
    this.name = "RipgrepOutputTooLargeError";
  }
}
var xt = /* @__PURE__ */ new Map([["EAGAIN", { reason: "a limit on processes or threads was reached", advice: "this machine has reached a limit on processes; closing other programs can help" }], ["ENOMEM", { reason: "there is not enough memory", advice: "this machine is short of memory; closing other programs can help" }], ["EMFILE", { reason: "this Claude Code process has too many files open", advice: "Claude Code needs a restart" }], ["ENFILE", { reason: "the system has too many files open", advice: "this machine has too many files open; closing other programs can help" }]]), Ct = { reason: "the system ran out of a resource", advice: "this machine is short of a resource needed to start programs" };
class q extends import_chunk_jv7av99m.A {
  constructor(e) {
    let { reason: n, advice: r } = xt.get(e) ?? Ct;
    super(`ripgrep could not start, so nothing was searched and matches may still exist: the operating system could not start it because ${n} (${e}). Retry in a moment. If it keeps failing, tell the user that ${r}.`, "ripgrep not started: the OS could not create another process", `rg_spawn_${e.toLowerCase()}`);
    this.name = "RipgrepSpawnResourceError";
  }
  static from(e, n, r) {
    if (!n) return;
    let o = (0, import_chunk_jv7av99m.w)(e), c = e instanceof Error && "syscall" in e && typeof e.syscall === "string" && e.syscall.startsWith("spawn"), d = r === "emitted" || (0, import_chunk_jv7av99m.SS)(e) || (0, import_chunk_jv7av99m.Tk)(e);
    return o !== void 0 && He.has(o) && c && d ? new q(o) : void 0;
  }
}
class qe extends Error {
  name = "RipgrepNullByteError";
}
function ae(e, n, r) {
  let o = e.findIndex((d) => d.includes("\0")), c = r.includes("\0") ? { local: "the session working directory", telemetry: "ripgrep spawn blocked: null byte in session cwd" } : n.includes("\0") ? { local: "the target path", telemetry: "ripgrep spawn blocked: null byte in target path" } : o !== -1 ? { local: `caller argument ${o}`, telemetry: "ripgrep spawn blocked: null byte in argv" } : null;
  if (c) throw (0, import_chunk_jv7av99m.Ye)(new qe(`Cannot spawn ripgrep: ${c.local} contains a null byte (\\0)`), c.telemetry);
}
async function It(e) {
  try {
    return await (0, import_promises.stat)(e), true;
  } catch (n) {
    let r = (0, import_chunk_jv7av99m.w)(n);
    if (r === "ENOENT" || r === "ENOTDIR") return false;
    throw n;
  }
}
async function Gfs(e, n) {
  ae([], e, (0, import_chunk_18rsj2ts.pe)());
  let r = (0, import_chunk_cg8dqz0a.x)(), o = new Set(n), c = () => new import_chunk_2yx6c1y2.TM(`Refusing to search ${e}: its symlink resolution changed after permission was checked. If a link in the working directory is being rewritten concurrently, stop that and retry.`), d = () => {
    let p = (0, import_chunk_w578pjby.ua)(e);
    if (p.unresolved || p.spellings.some((f) => !o.has(f))) throw c();
  };
  d();
  let u = () => {
    let p = (0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), e);
    if (!p.isCanonical) throw c();
    return p.resolvedPath;
  }, R = !m.isAbsolute(nre().rgPath), E = () => {
    throw new import_chunk_2yx6c1y2.TM(`Refusing to search ${e}: ripgrep was found only by name on PATH, and a search outside the working directory cannot apply your Read deny rules in that configuration. Install ripgrep at an absolute path or search under the working directory.`);
  }, l = async (p = e) => {
    let f = mUt(e, nre().rgPath);
    if (R && !(0, import_chunk_p1ewvgeh.Sc)(e, f)) E();
    let T;
    try {
      T = (await (0, import_promises.stat)(e)).isDirectory();
    } catch (P) {
      let C = (0, import_chunk_jv7av99m.w)(P);
      if (C === "ENOENT" || C === "ENOTDIR") return null;
      throw P;
    }
    return { lexical: e, canonical: p, spawnCwd: f, target: e, relativeOutput: false, isDirectory: T, judgeEveryResult: true, recheckBeforeSpawn: d, close: async () => {
    } };
  };
  if ((0, import_chunk_z6pfqf6e.$r)(e) && !(0, import_chunk_z6pfqf6e.mc)(e) || (0, import_chunk_z6pfqf6e.Fl)(e)) return l();
  if (r === "windows") {
    let p = (0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), e);
    if (!p.isCanonical) {
      if (p.isSymlink) {
        if (o.has(p.resolvedPath) && (0, import_chunk_z6pfqf6e.$r)(p.resolvedPath) && !(0, import_chunk_z6pfqf6e.mc)(p.resolvedPath)) return l(p.resolvedPath);
        throw c();
      }
      if (!await It(e)) return null;
      throw c();
    }
    let f = p.resolvedPath;
    if (!o.has(f)) throw c();
    let T = () => {
      if (d(), u() !== f) throw c();
    }, P = mUt(f, nre().rgPath), C;
    try {
      C = (await (0, import_promises.stat)(f)).isDirectory();
    } catch (g) {
      let y = (0, import_chunk_jv7av99m.w)(g);
      if (y === "ENOENT" || y === "ENOTDIR") return null;
      if (y === "EACCES" || y === "EPERM") throw c();
      throw g;
    }
    if (C && R && !(0, import_chunk_p1ewvgeh.Sc)(f, P)) E();
    return { lexical: e, canonical: f, spawnCwd: P, target: f, relativeOutput: false, isDirectory: C, recheckBeforeSpawn: T, close: async () => {
    } };
  }
  let h;
  try {
    h = await (0, import_promises.open)(e, import_fs.constants.O_RDONLY | import_fs.constants.O_NONBLOCK);
  } catch (p) {
    let f = (0, import_chunk_jv7av99m.w)(p);
    if (f === "ENOENT" || f === "ENOTDIR") return null;
    if (f === "EACCES" || f === "EPERM" || f === "ELOOP") throw new import_chunk_2yx6c1y2.TM(`Refusing to search ${e}: it could not be opened (${f}) \u2014 it is unreadable, or is being replaced concurrently.`);
    throw p;
  }
  let v;
  try {
    let p = await h.stat();
    if (!p.isFile() && !p.isDirectory()) throw new import_chunk_2yx6c1y2.TM(`Refusing to search ${e}: it is a pipe or a device, not a file or a folder.`);
    let { landed: f, foundAt: T, cause: P } = await (0, import_chunk_xfj2cwfv.Emn)(e, h, r);
    if (P !== void 0) throw new import_chunk_2yx6c1y2.TM(P === "file" ? `Refusing to search ${e}: it leads to a device or process file.` : `Refusing to search ${e}: what was opened is not what this path names now (a link on the way may lead into another process's view of the files, or to a deleted file), or this could not be checked. Give the file's or folder's own path, without links.`);
    let C = f !== void 0, g = f ?? u();
    if (!o.has(g) || T !== f) throw c();
    let y = h, G = () => {
      if (d(), u() !== g) throw c();
    }, U = C ? () => {
    } : G;
    if (p.isDirectory()) try {
      await (0, import_promises.access)(C ? `/proc/self/fd/${y.fd}` : g, import_fs.constants.X_OK);
    } catch {
      throw new import_chunk_2yx6c1y2.TM(`Cannot search ${e}: the directory is not traversable (no execute permission).`);
    }
    if (p.isDirectory() && m.isAbsolute(nre().rgPath)) {
      if (!C && import_chunk_jxja0v0z.oC !== 0 && xe()) if (typeof Bun < "u" && typeof Bun.ant?.withThreadWorkingDirectory === "function") {
        try {
          v = await (0, import_promises.open)(g, import_fs.constants.O_RDONLY | import_fs.constants.O_DIRECTORY | import_fs.constants.O_NONBLOCK | import_chunk_jxja0v0z.oC | import_chunk_jxja0v0z.cr);
        } catch (F) {
          let B = (0, import_chunk_jv7av99m.w)(F);
          if (B === "ELOOP") throw c();
          if (B === "ENOENT" || B === "ENOTDIR" || B === "EACCES" || B === "EPERM") throw new import_chunk_2yx6c1y2.TM(`Refusing to search ${e}: it was moved, replaced, or had its permissions changed (${B}) while the search was starting, so nothing was searched. Try again.`);
          if (B === "EINVAL") {
            let K = H();
            if (!K.reopenRejectedReported) K.reopenRejectedReported = true, (0, import_chunk_k449cc64.i)(Error("Grep/Glob on macOS: opening an approved search directory with O_NOFOLLOW_ANY failed with EINVAL, so the search was refused (logged once per process)")), (0, import_chunk_y53wbr8a.a)("tengu_darwin_thread_cwd", { outcome: (0, import_chunk_78g0060s.S)("reopen_rejected") });
            throw new import_chunk_2yx6c1y2.TM(`Refusing to search ${e}: the open that keeps symbolic links out of a search was rejected for this folder (EINVAL), so nothing was searched; other folders on the same volume may fail the same way. If this folder is on an ordinary local disk, report it with /bug.`);
          }
          throw F;
        }
        let [k, L] = await Promise.all([y.stat({ bigint: true }), v.stat({ bigint: true })]);
        if (L.ino !== k.ino || L.dev !== k.dev) throw new import_chunk_2yx6c1y2.TM(`Refusing to search ${e}: it was moved or replaced while the search was starting, so nothing was searched. Try again.`);
      } else {
        let k = H();
        if (!k.heldDirectorySpawnUnavailableReported) k.heldDirectorySpawnUnavailableReported = true, (0, import_chunk_w578pjby.t)("Grep/Glob on macOS: this runtime lacks Bun.ant.withThreadWorkingDirectory, so ripgrep starts at the search directory path, re-checked just before it starts, instead of inside the open directory (noted once per process)", { level: "warn" }), (0, import_chunk_y53wbr8a.a)("tengu_darwin_thread_cwd", { outcome: (0, import_chunk_78g0060s.S)("unavailable") });
      }
      let _ = v;
      return { lexical: e, canonical: g, spawnCwd: C ? `/proc/self/fd/${y.fd}` : g, spawnDirFd: _?.fd, target: ".", relativeOutput: true, isDirectory: true, recheckBeforeSpawn: _ === void 0 ? U : () => {
      }, close: _ === void 0 ? () => y.close() : async () => {
        try {
          await _.close();
        } finally {
          await y.close();
        }
      } };
    }
    if (p.isDirectory()) {
      let _ = mUt(g, nre().rgPath);
      if (!(0, import_chunk_p1ewvgeh.Sc)(g, _)) E();
      return { lexical: e, canonical: g, spawnCwd: _, target: g, relativeOutput: false, isDirectory: true, recheckBeforeSpawn: G, close: () => y.close() };
    }
    return { lexical: e, canonical: g, spawnCwd: mUt(g, nre().rgPath), target: C ? import_chunk_7fsmgfxx.mft : g, inheritFd: C ? y.fd : void 0, relativeOutput: false, isDirectory: false, recheckBeforeSpawn: U, close: () => y.close() };
  } catch (p) {
    throw await v?.close().catch(() => {
    }), await h.close().catch(() => {
    }), p;
  }
}
function Gal(e, n) {
  if (!n.isDirectory && e === n.target) return n.lexical;
  if (m.isAbsolute(e)) {
    for (let r of [n.target, n.canonical]) {
      let o = r.endsWith(m.sep) ? r : r + m.sep;
      if (e.startsWith(o) && r !== n.lexical) return m.join(n.lexical, e.slice(o.length));
    }
    return e;
  }
  if (n.relativeOutput) {
    let r = e.startsWith("./") ? e.slice(2) : e;
    return r === "." || r === "" ? n.lexical + (e.endsWith("/") ? m.sep : "") : m.join(n.lexical, r);
  }
  return e;
}
function zfs(e, n, r) {
  let o = LNn(e, n);
  if (o.length !== r.length || o.some((c, d) => c !== r[d])) throw new import_chunk_2yx6c1y2.TM(`Refusing to search ${n.lexical}: a path one of its Read deny rules is written through changed while the search was being prepared. Retry.`);
}
function Ze(e) {
  return (0, import_chunk_4smdap7r.M)(Qe(e) ? [e.canonical, e.lexical] : [e.spawnCwd, Y(e.spawnCwd)]);
}
function Qe(e) {
  return e.relativeOutput || e.spawnCwd === e.canonical;
}
function et(e) {
  return Qe(e) || !e.isDirectory ? "as written" : "looked up";
}
function Vfs(e) {
  return e.relativeOutput || e.spawnCwd === e.canonical ? e.canonical : Y(e.spawnCwd);
}
function Y(e) {
  try {
    return (0, import_fs.realpathSync)(e);
  } catch {
    return e;
  }
}
function LNn(e, n) {
  let r = Ze(n), o = /* @__PURE__ */ new Set(), c = [];
  if (n.isDirectory) for (let d of /* @__PURE__ */ new Set([...r, n.canonical, n.lexical])) for (let [u, R] of e) {
    let E = m.relative(u ?? (0, import_chunk_18rsj2ts.pe)(), d);
    if (E === "" || E === ".." || E.startsWith(`..${m.sep}`) || m.isAbsolute(E)) continue;
    let l = E.replaceAll("\\", "/"), h = (0, import_chunk_p1ewvgeh.gUi)(R);
    if (h.ignores(l) || h.ignores(l + "/")) return ["!**"];
  }
  for (let d of new Set(r)) for (let u of (0, import_chunk_p1ewvgeh.nBn)(e, d, et(n))) {
    if (u.includes("[")) continue;
    let R = Tt(u);
    if (R === "/" || R === "") {
      if (!o.has("!**")) o.add("!**"), c.push("!**");
      continue;
    }
    let E = R.startsWith("/") ? `!${R}` : `!**/${R}`;
    if (!o.has(E)) o.add(E), c.push(E);
    if (E.endsWith("/**") && E.length > 4) {
      let l = E.slice(0, -3);
      if (l !== "!**" && !o.has(l)) o.add(l), c.push(l);
    }
  }
  return c;
}
function A_r(e, n) {
  if (n !== void 0) {
    let r = Ze(n);
    for (let o of new Set(r)) for (let c of (0, import_chunk_p1ewvgeh.nBn)(e, o, et(n))) if ($e(c)) return true;
  }
  for (let r of e.values()) for (let o of r) if ($e(o)) return true;
  return false;
}
function $e(e) {
  return e.includes("[") || e.includes("\\") || /\s$/.test(e);
}
function Tt(e) {
  let n = "", r = false;
  for (let o = 0; o < e.length; o++) {
    let c = e[o];
    if (c === "\\" && o + 1 < e.length) {
      n += c + e[o + 1], o++;
      continue;
    }
    if (r) {
      if (c === "]") r = false;
      n += c;
      continue;
    }
    if (c === "[") r = true, n += c;
    else if (c === "{" || c === "}") n += `[${c}]`;
    else n += c;
  }
  return n;
}
function mUt(e, n) {
  let r = (0, import_chunk_18rsj2ts.oa)();
  if (r === null) {
    if (!m.isAbsolute(e) || !m.isAbsolute(n)) throw new import_chunk_f9x2f6cx.$B();
    return m.parse(m.resolve(e)).root;
  }
  if (!m.isAbsolute(e) || !m.isAbsolute(n)) return r;
  try {
    if ((0, import_chunk_p1ewvgeh.Sc)(e, r)) {
      let c = e.slice(0, r.length);
      if (c !== r && c.toLowerCase() === r.toLowerCase() && (e.length === r.length || e[r.length] === m.sep || e[r.length] === "/")) return c;
      return r;
    }
  } catch {
    return r;
  }
  let o = m.resolve(e);
  try {
    if ((0, import_fs.statSync)(o).isDirectory()) return o;
  } catch {
  }
  return r;
}
function Kfs(e) {
  return (0, import_chunk_m15w38ag.ne)() && e !== void 0 ? (0, import_chunk_18rsj2ts.oa)() ?? void 0 : void 0;
}
var At = ["Containers", "Group Containers", "Mobile Documents"];
function ye(e, n, r) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "macos") return e;
  try {
    let o = Y(r), c = m.isAbsolute(n), d = c ? m.resolve(n) : m.join(o, n), u = d === o ? o : Y(d), R = m.join(Y((0, import_os.homedir)()), "Library"), E = At.flatMap((l) => {
      let h = m.relative(u, m.join(R, l));
      if (!ie(h)) return [];
      let v = m.join(d, h), p = m.relative(o, v);
      if (!ie(p) && !c) return [];
      return ["--glob", `!/${(ie(p) ? p : v).replace(/[\\*?[\]{}]/g, "\\$&")}`];
    });
    if (E.length === 0) return e;
    return (0, import_chunk_w578pjby.t)(`ripgrep: leaving other apps' data out of the walk of ${u}`), e.includes("--") ? [...E, ...e] : [...e, ...E];
  } catch (o) {
    return (0, import_chunk_w578pjby.t)(`ripgrep: other apps' data not excluded: ${o}`, { level: "error" }), e;
  }
}
function ie(e) {
  return e !== "" && e !== ".." && !e.startsWith(`..${m.sep}`) && !m.isAbsolute(e);
}
function Be(e, n, r, o, c = false, d, u, R, E = false, l) {
  (0, import_chunk_wn8z7ghn.iC)();
  let { rgPath: h, rgArgs: v, argv0: p } = nre(), f = d ?? mUt(n, h);
  ae(e, n, f);
  let T = c ? ["-j", "1"] : [], P = [...v, ...T, ...E ? e : ye(e, n, f), n], C = jfs();
  if (p || R !== void 0 || l !== void 0) {
    let _ = wt(p, f, n), k = { ...p && { argv0: p }, ...R !== void 0 && { stdio: ["pipe", "pipe", "pipe", R] }, cwd: l === void 0 ? f : ".", env: (0, import_chunk_9zdrdv25.d$)(), signal: r, windowsHide: true, ..._ && { detached: true }, ...(0, import_chunk_9zdrdv25.hm)("helper") }, L;
    if (l === void 0) L = (0, import_child_process.spawn)(h, P, k);
    else {
      if (!m.isAbsolute(h)) throw Error("The search did not run: ripgrep was found by name rather than at a full path, and starting it that way inside the search folder could run a program planted there. This is an internal error; report it with /bug.");
      try {
        if (typeof Bun < "u") Bun.ant?.withThreadWorkingDirectory?.(l, () => {
          L = (0, import_child_process.spawn)(h, P, k);
        });
      } catch (I) {
        throw L?.once("error", () => {
        }), L?.kill("SIGKILL"), I;
      }
      if (L === void 0) throw Error("The search did not run: this build of Claude Code cannot start ripgrep inside an open directory (Bun.ant.withThreadWorkingDirectory is missing). This is an internal error; report it with /bug.");
    }
    let F = L;
    if (_) Et(F);
    if (u && F.stdin) {
      F.stdin.on("error", () => {
      });
      let I = u();
      I.on("error", (W) => {
        F.kill(), F.emit("error", Object.assign(W, { stdinSourceFailed: true }));
      }).pipe(F.stdin), F.once("close", () => I.destroy());
    }
    let B = new he(z), K = new he(z), Re, Se, be = false, tt = setTimeout(() => {
      be = true, F.kill("SIGTERM"), Re = setTimeout((I, W) => {
        W(), I.kill("SIGKILL");
      }, 5e3, F, ot);
    }, C), X = false, Z = (I, W, J) => {
      if (X) return;
      X = true, clearTimeout(tt), clearTimeout(Re), clearTimeout(Se), o(I, W, J);
    }, Oe = () => {
      try {
        F.kill(ge);
      } catch {
      }
    }, Q = (I) => {
      if (X) return;
      B.release(), K.release(), Z(Ue((0, import_chunk_jv7av99m.D)(I)), "", ""), Oe();
    }, ce = () => {
      let I = Error("stdout maxBuffer length exceeded");
      return I.code = "ERR_CHILD_PROCESS_STDIO_MAXBUFFER", I;
    }, nt = (I) => {
      try {
        if (!X && B.append(I)) Oe();
      } catch (W) {
        Q(W);
      }
    }, rt = (I) => {
      try {
        if (!X) K.append(I);
      } catch (W) {
        Q(W);
      }
    }, ve = (I, W) => {
      try {
        if (X) return;
        let J = B.takeText(), _e = K.takeText();
        if (I === 0 || I === 1) {
          Z(B.truncated ? ce() : null, J, _e);
          return;
        }
        let de = Error(`ripgrep exited with code ${I}${W ? ` (signal ${W})` : ""}`);
        de.code = I ?? void 0, de.signal = W ?? (be ? "SIGTERM" : void 0), Z(B.truncated ? ce() : de, J, _e);
      } catch (J) {
        Q(J);
      }
    }, it = (I) => {
      try {
        if (X) return;
        if (I.code === "ENOENT") H().invalidate();
        Z(B.truncated ? ce() : I, B.takeText(), K.takeText());
      } catch (W) {
        Q(W);
      }
    }, ot = () => {
      Se = setTimeout((I) => {
        (0, import_chunk_w578pjby.t)("rg did not report close after the timeout kill; the search ends without it", { level: "error" }), I(null, null);
      }, me, ve);
    };
    return F.stdout?.on("data", nt), F.stderr?.on("data", rt), F.on("close", ve), F.on("error", it), F;
  }
  let g = {}, y = false, G = (_, k, L) => {
    if (y) return;
    y = true, clearTimeout(g.id), o(_, k, L);
  }, U = (0, import_child_process.execFile)(h, P, { cwd: f, env: (0, import_chunk_9zdrdv25.d$)(), maxBuffer: z, signal: r, timeout: C, killSignal: ge, windowsHide: true, ...(0, import_chunk_9zdrdv25.hm)("helper") }, G);
  if (!y) g.id = setTimeout((_, k) => {
    _.id = setTimeout((L) => {
      (0, import_chunk_w578pjby.t)("rg did not report close after the timeout kill; the search ends without it", { level: "error" });
      let F = Error("ripgrep did not exit after the timeout kill");
      F.signal = "SIGTERM", L(F, "", "");
    }, me, k);
  }, C, g, G);
  if (u && U.stdin) {
    U.stdin.on("error", () => {
    });
    let _ = u();
    _.on("error", (k) => {
      U.kill(), U.emit("error", Object.assign(k, { stdinSourceFailed: true }));
    }).pipe(U.stdin), U.once("close", () => _.destroy());
  }
  return U;
}
async function Pt(e, n, r) {
  (0, import_chunk_wn8z7ghn.iC)();
  let { rgPath: o, rgArgs: c, argv0: d } = nre();
  return new Promise((u, R) => {
    let E = mUt(n, o);
    ae(e, n, E);
    let l = ye(e, n, E), h = (0, import_child_process.spawn)(o, [...c, ...l, n], { argv0: d, cwd: E, env: (0, import_chunk_9zdrdv25.d$)(), signal: r, windowsHide: true, stdio: ["ignore", "pipe", "ignore"], ...(0, import_chunk_9zdrdv25.hm)("helper") }), v = 0;
    h.stdout?.on("data", (f) => {
      v += (0, import_chunk_7cfjrnwy.Mt)(f, `
`);
    });
    let p = false;
    h.on("close", (f) => {
      if (p) return;
      if (p = true, f === 0 || f === 1 || f === null) u(v);
      else R(Error(`rg --files exited ${f}`));
    }), h.on("error", (f) => {
      if (p) return;
      p = true;
      let T = we(se(f));
      if (f.code === "ENOENT" && d) H().invalidate();
      R(T);
    });
  });
}
var ge = "SIGKILL", me = 5e3;
async function apo(e, n, r, o) {
  (0, import_chunk_wn8z7ghn.iC)();
  let { rgPath: c, rgArgs: d, argv0: u } = nre();
  return new Promise((R, E) => {
    let l = mUt(n, c);
    ae(e, n, l);
    let h = ye(e, n, l), v = (0, import_child_process.spawn)(c, [...d, ...h, n], { argv0: u, cwd: l, env: (0, import_chunk_9zdrdv25.d$)(), signal: r, killSignal: ge, windowsHide: true, stdio: ["ignore", "pipe", "ignore"], ...(0, import_chunk_9zdrdv25.hm)("helper") }), p = (g) => g.endsWith("\r") ? g.slice(0, -1) : g, f = new import_string_decoder.StringDecoder("utf8"), T = "";
    v.stdout?.on("data", (g) => {
      if (r.aborted) return;
      let G = (T + f.write(g)).split(`
`);
      if (T = G.pop() ?? "", G.length) o(G.map(p));
    });
    let P = false, C;
    v.on("close", (g) => {
      if (clearTimeout(C), P) return;
      if (r.aborted) {
        P = true, R("aborted");
        return;
      }
      if (P = true, T += f.end(), g === 0 || g === 1) {
        if (T) o([p(T)]);
        R("complete");
      } else if (g === 2) {
        if (T) o([p(T)]);
        R("error-exit-2");
      } else if (g === null) R("external-kill");
      else E(Error(`ripgrep exited with code ${g}`));
    }), v.on("error", (g) => {
      if (P) return;
      if (g.code === "ABORT_ERR" || g.name === "AbortError") {
        if (v.pid === void 0) {
          P = true, R("aborted");
          return;
        }
        C = setTimeout(() => {
          if (!P) P = true, R("aborted");
        }, me), C.unref?.();
        return;
      }
      P = true;
      let y = we(se(g));
      if (g.code === "ENOENT" && u) H().invalidate();
      E(y);
    });
  });
}
function R_r(e, n, r = false) {
  if (n.lexical === n.canonical) return [];
  let o = n.canonical.endsWith(import_path.sep) ? n.canonical : n.canonical + import_path.sep, c = n.lexical.endsWith(import_path.sep) ? n.lexical : n.lexical + import_path.sep, d = [];
  if (r || (0, import_chunk_p1ewvgeh._Ui)()) {
    if (e === n.lexical) d.push(n.canonical);
    else if (e.startsWith(c)) d.push(o + e.slice(c.length));
  }
  if (e === n.canonical) d.push(n.lexical);
  else if (e.startsWith(o)) d.push(c + e.slice(o.length));
  return d;
}
async function rre(e, n, r, o) {
  let c = (0, import_chunk_cg8dqz0a.x)() === "windows" && gsn().mode === "embedded" && (0, import_chunk_865at33z.b)("tengu_toasty_robin", true) !== false;
  if (!c) ue();
  return new Promise((d, u) => {
    let R = (l, h, v, p) => {
      if (!l) {
        if (o?.rejectOnPartial && h.length >= z) {
          u(new Wst("Ripgrep output exceeded the output buffer and was truncated.", []));
          return;
        }
        d(o?.rawLines ? h === "" ? [] : h.replace(/\n$/, "").split(`
`) : h.trim().split(`
`).map((_) => _.replace(/\r$/, "")).filter(Boolean));
        return;
      }
      if (l.code === 1) {
        d([]);
        return;
      }
      if (l instanceof Ee) {
        u(l);
        return;
      }
      if (["ENOENT", "EACCES", "EPERM"].includes(l.code)) {
        u(we(se(l)));
        return;
      }
      let T = l.code === "ERR_CHILD_PROCESS_STDIO_MAXBUFFER";
      if (!p && !T && Ae(v)) {
        (0, import_chunk_w578pjby.t)("rg EAGAIN error detected, retrying with single-threaded mode (-j 1)"), (0, import_chunk_y53wbr8a.a)("tengu_ripgrep_eagain_retry", {});
        try {
          o?.beforeSpawn?.(), Be(e, n, r, (_, k, L) => {
            E(_, k, L, true);
          }, true, o?.cwd, o?.stdin, o?.inheritFd, o?.searchOtherAppsData, o?.spawnDirFd);
        } catch (_) {
          u(q.from(_, o?.rejectOnInputError, "thrown") ?? (0, import_chunk_jv7av99m.D)(_));
        }
        return;
      }
      let P = h && h.trim().length > 0, C = l.signal === "SIGTERM" || l.signal === "SIGKILL" || l.code === "ABORT_ERR", g = l.code === void 0 && (l.signal === void 0 || mt.has(l.signal)), y = [];
      if (P) {
        if (y = o?.rawLines ? h === "" ? [] : h.replace(/\n$/, "").split(`
`) : h.trim().split(`
`).map((_) => _.replace(/\r$/, "")).filter(Boolean), y.length > 0 && (C || T || g)) y = o?.rawLines ? gt(y, h) : y.slice(0, -1);
      }
      let G = v.lastIndexOf(Fe) > 4 || v.includes(`${Fe}(?-u)`);
      if ((0, import_chunk_w578pjby.t)(`rg error (signal=${l.signal}, code=${l.code}, stderr: ${G ? "withheld: it may quote an ignore file" : v}), ${y.length} results`), o?.rejectOnPartial && (C || T || g)) {
        u(r.aborted && r.reason?.name !== "TimeoutError" ? new import_chunk_jv7av99m.Ie() : new Wst("Ripgrep listing is incomplete: it timed out, was killed or exceeded the output buffer.", y));
        return;
      }
      if (o?.rejectOnInputError && l.code === 2 && y.length === 0 && ke.test(v)) {
        if (e[0] !== De) {
          d(rre([De, ...e], n, r, o));
          return;
        }
        if (v.search(ke) === 0) {
          u(new Xe(G ? "(ripgrep's explanation is withheld, because it may quote a file. Check the pattern, glob and file type for a syntax error.)" : v));
          return;
        }
      }
      if (o?.rejectOnInputError && l.code === 2 && y.every((_) => _.endsWith('"type":"summary"}')) && v.startsWith(`rg: ${n}: `) && !v.trimEnd().includes(`
`)) {
        let _ = Number(/\(os error (\d+)\)\s*$/.exec(v)?.[1]), k = n !== import_chunk_7fsmgfxx.mft && ((0, import_chunk_cg8dqz0a.x)() === "windows" ? [Ot, vt] : [Ve, bt]).includes(_);
        if (!Number.isNaN(_) && !k) {
          u(new Je(_));
          return;
        }
      }
      if (o?.rejectOnInputError && "stdinSourceFailed" in l && l.stdinSourceFailed === true) {
        u(se(l));
        return;
      }
      if (l.code !== 2 && l.code !== "ABORT_ERR") {
        let _ = He.has((0, import_chunk_jv7av99m.w)(l) ?? "");
        if (C || T || g || _ || Ae(v)) (0, import_chunk_w578pjby.t)(`rg failed (signal=${l.signal}, code=${l.code}): ${G ? "message withheld: it may quote an ignore file" : l.message}`, { level: "error" });
        else {
          let k = y.length === 0 && o?.rejectOnInputError && l.code !== "ECHILD" ? r.aborted ? Ne(r) : new Ke() : void 0;
          if ((0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Hca)((0, import_chunk_jv7av99m.Ye)(G ? Error("ripgrep unexpected exit; its output is withheld") : (0, import_chunk_jv7av99m.D)(l), "ripgrep unexpected exit (signal or unmodeled code)"), typeof l.code === "number" && !r.aborted && !("stdinSourceFailed" in l) && !(l instanceof DOMException) ? l.code : void 0)), k !== void 0) {
            u(k);
            return;
          }
        }
      }
      let U = y.length === 0 ? q.from(l, o?.rejectOnInputError, "emitted") : void 0;
      if (U) {
        u(U);
        return;
      }
      if (T && y.length === 0 && o?.rejectOnInputError) {
        u(new ze(l.message.startsWith("stderr") ? "stderr" : "stdout"));
        return;
      }
      if (C && y.length === 0) {
        u(Ne(r));
        return;
      }
      if (o?.rejectOnInputError && C && !(r.aborted && r.reason?.name !== "TimeoutError")) {
        u(new Wst(`${je()}, so its results are incomplete: more matches may exist. Try searching a more specific path or pattern.`, y));
        return;
      }
      d(y);
    }, E = (l, h, v, p) => {
      try {
        R(l, h, v, p);
      } catch (f) {
        u(f instanceof RangeError ? Ue(f) : (0, import_chunk_jv7av99m.D)(f));
      }
    };
    try {
      o?.beforeSpawn?.(), Be(e, n, r, (l, h, v) => {
        if (E(l, h, v, false), c && !r.aborted && h === "" && (l === null ? v !== "" : l.code !== 2)) ue();
      }, false, o?.cwd, o?.stdin, o?.inheritFd, o?.searchOtherAppsData, o?.spawnDirFd);
    } catch (l) {
      if (u(q.from(l, o?.rejectOnInputError, "thrown") ?? l), c && !r.aborted && (0, import_chunk_jv7av99m.w)(l) !== void 0) ue();
    }
  });
}
function ue() {
  H().testOnFirstUse().catch((e) => {
    (0, import_chunk_k449cc64.i)(e);
  });
}
function lpo(e, n, r = []) {
  return H().countFilesRounded(e, n, r);
}
async function Nt(e, n, r) {
  let o = Y(e), c = m.relative(o, Y((0, import_os.homedir)()));
  if (c === "" || ie(c)) return;
  for (let d = o; ; d = m.dirname(d)) {
    if ((0, import_chunk_aka192fb.w3)(d)) return;
    if (m.dirname(d) === d) break;
  }
  if ((0, import_chunk_cg8dqz0a.x)() === "windows" && (0, import_chunk_865at33z.b)("tengu_kind_barto", true) !== false && gsn().mode === "embedded") return;
  try {
    if (await (0, import_chunk_5appeerh.Tn)((0, import_chunk_jg286npj.Val)(e), n, () => new import_chunk_jv7av99m.Ie())) return;
    let u = ["--files", "--hidden"];
    r.forEach((h) => {
      u.push("--glob", `!${h}`);
    });
    let R = await Pt(u, e, n);
    if (R === 0) return 0;
    let E = Math.floor(Math.log10(R)), l = Math.pow(10, E);
    return Math.round(R / l) * l;
  } catch (d) {
    if (d?.name !== "AbortError") (0, import_chunk_w578pjby.t)(`countFilesRoundedRg failed: ${d}`, { level: "error" });
  }
}
function zal() {
  let e = gsn();
  return { mode: e.mode, path: e.command, working: H().status?.working ?? null };
}
async function Dt() {
  let e = H();
  if (e.status !== null) return;
  if ((0, import_chunk_wn8z7ghn.ZC)()) return;
  let n = gsn();
  try {
    let r;
    if (n.argv0) {
      let c = Bun.spawn([n.command, "--version"], { argv0: n.argv0, cwd: (0, import_chunk_18rsj2ts.pe)(), env: (0, import_chunk_9zdrdv25.d$)(), stderr: "ignore", stdout: "pipe", windowsHide: true, ...(0, import_chunk_9zdrdv25.hm)("helper") }), [d, u] = await Promise.all([c.stdout.text(), c.exited]);
      r = { code: u, stdout: d };
    } else r = await (0, import_chunk_7fsmgfxx.kt)(n.command, [...n.args, "--version"], { timeout: 5e3, env: (0, import_chunk_9zdrdv25.d$)(), extendEnv: false });
    let o = r.code === 0 && !!r.stdout && r.stdout.startsWith("ripgrep ");
    e.setStatus({ working: o, lastTested: Date.now(), config: n }), (0, import_chunk_w578pjby.t)(`Ripgrep version check: ${o ? "PASSED" : "FAILED"} (mode=${n.mode}, path=${n.command})`), (0, import_chunk_y53wbr8a.a)("tengu_ripgrep_availability", { working: o ? 1 : 0, using_system: n.mode === "system" ? 1 : 0 });
  } catch (r) {
    e.setStatus({ working: false, lastTested: Date.now(), config: n }), (0, import_chunk_w578pjby.t)(`Ripgrep version check threw (mode=${n.mode}, path=${n.command}): ${r instanceof Error ? r.message : String(r)}`, { level: "error" });
  }
}
function qfs(e, n) {
  let r = e.join(`
`);
  if (!r.includes("\0")) return e;
  let o = [];
  if (n === "count") {
    let d = /([^\0]*)\0(\d+)(?:\n|$)/gy;
    for (let u = d.exec(r); u !== null; u = d.exec(r)) if (u[2] !== "0") o.push(`${u[1]}:${u[2]}`);
    return o;
  }
  let c = r.split("\0");
  return c.pop(), c.filter((d) => d !== "");
}
