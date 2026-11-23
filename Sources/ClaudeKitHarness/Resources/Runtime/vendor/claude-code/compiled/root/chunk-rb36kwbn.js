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
var chunk_rb36kwbn_exports = {};
__export(chunk_rb36kwbn_exports, {
  A0l: () => A0l,
  AYi: () => AYi,
  Aee: () => Aee,
  C0l: () => C0l,
  CVt: () => CVt,
  CYi: () => CYi,
  DYi: () => DYi,
  Dct: () => Dct,
  Dt: () => Dt,
  E0l: () => E0l,
  EOo: () => EOo,
  Ef: () => Ef,
  Fct: () => Fct,
  GC: () => GC,
  GIr: () => GIr,
  HE: () => HE,
  HYi: () => HYi,
  I0l: () => I0l,
  IYi: () => IYi,
  JXe: () => JXe,
  KIr: () => KIr,
  Ks: () => Ks,
  Lct: () => Lct,
  M0l: () => M0l,
  MYi: () => MYi,
  Nct: () => Nct,
  O0l: () => O0l,
  OPe: () => OPe,
  OYi: () => OYi,
  P0l: () => P0l,
  PPe: () => PPe,
  PYi: () => PYi,
  QXe: () => QXe,
  R0l: () => R0l,
  RYi: () => RYi,
  S0l: () => S0l,
  SOo: () => SOo,
  SVn: () => SVn,
  T0l: () => T0l,
  TVt: () => TVt,
  Tze: () => Tze,
  UX: () => UX,
  VIr: () => VIr,
  WIr: () => WIr,
  Wm: () => Wm,
  XOs: () => XOs,
  XXe: () => XXe,
  YOs: () => YOs,
  _Oo: () => _Oo,
  _hn: () => _hn,
  aFe: () => aFe,
  b0l: () => b0l,
  bOo: () => bOo,
  bVn: () => bVn,
  dFe: () => dFe,
  fK: () => fK,
  gOo: () => gOo,
  ghn: () => ghn,
  hOo: () => hOo,
  hhn: () => hhn,
  i8: () => i8,
  iFe: () => iFe,
  jIr: () => jIr,
  jhe: () => jhe,
  k0l: () => k0l,
  kOo: () => kOo,
  kVn: () => kVn,
  lFe: () => lFe,
  lt: () => lt,
  mD: () => mD,
  mS: () => mS,
  mhn: () => mhn,
  nRt: () => nRt,
  pk: () => pk,
  qOs: () => qOs,
  sFe: () => sFe,
  tRt: () => tRt,
  ui: () => ui,
  v0l: () => v0l,
  w0l: () => w0l,
  wOo: () => wOo,
  wVn: () => wVn,
  x0l: () => x0l,
  xYi: () => xYi,
  yOo: () => yOo,
  yt: () => yt,
  zC: () => zC,
  zIr: () => zIr
});
module.exports = __toCommonJS(chunk_rb36kwbn_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_gjzwg6ck = require("/$bunfs/root/chunk-gjzwg6ck.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_va7s0d6d = require("/$bunfs/root/chunk-va7s0d6d.js");
var import_path = require("path");
var import_fs = require("fs");
var m = 4096, F = import_fs.constants.O_RDONLY | import_chunk_09gzjq1e.Fo | import_fs.constants.O_NOCTTY;
function Dct(e) {
  let t = (0, import_fs.openSync)(e, F);
  try {
    let n = Buffer.allocUnsafe(m), r = (0, import_fs.readSync)(t, n, 0, m, null);
    return n.toString("latin1", 0, r);
  } finally {
    (0, import_fs.closeSync)(t);
  }
}
class h {
  #e = false;
  get forcedUnavailable() {
    return this.#e;
  }
  forceUnavailable(e) {
    this.#e = e;
  }
}
var q = new h();
function d() {
  return false;
}
function CYi(e) {
  if (!Number.isInteger(e) || e <= 0) return;
  try {
    return Bun.ant.windowsProcessCreationTime(e) ?? void 0;
  } catch {
    return;
  }
}
async function qOs(e) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "linux" && (0, import_chunk_cg8dqz0a.x)() !== "wsl") return;
  if (!Aee(e)) return;
  try {
    let t = await (0, import_chunk_w578pjby.le)().readFile(`/proc/${e}/stat`, { encoding: "utf8" });
    return (0, import_chunk_va7s0d6d.R2)(t);
  } catch {
    return;
  }
}
async function sFe(e) {
  return (0, import_chunk_va7s0d6d.AF)(await qOs(e));
}
async function XXe(e) {
  if (!c(e)) return false;
  if ((0, import_chunk_cg8dqz0a.x)() !== "macos") return sFe(e);
  let { code: t, stdout: n } = await (0, import_chunk_7fsmgfxx.kt)("ps", ["-o", "stat=", "-p", String(e)], { timeout: 1e3 });
  return t === 0 && n.trim().startsWith("Z");
}
var L = 2147483647;
function Aee(e) {
  return Number.isInteger(e) && e > 1 && e <= L;
}
function c(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e > 0;
}
function Wm(e) {
  if (!Aee(e)) return false;
  try {
    return process.kill(e, 0), false;
  } catch (t) {
    return (0, import_chunk_jv7av99m.w)(t) === "ESRCH";
  }
}
var W = 16;
async function Lct() {
  let e = (0, import_chunk_cg8dqz0a.x)();
  if (e !== "linux" && e !== "wsl") return true;
  let t = (0, import_chunk_w578pjby.le)(), n = await t.readlink("/proc/self").catch(() => null);
  if (n === null || n !== String(process.pid)) return false;
  let r = await t.readdir("/proc").catch(() => null);
  if (!r) return false;
  return r.filter((o) => /^\d+$/.test(o.name)).length >= W;
}
function PPe(e, t) {
  let n = e.filter((r) => Math.abs(r) > 1);
  for (let r of n) {
    try {
      process.kill(r, "SIGTERM");
    } catch {
      continue;
    }
    return setTimeout((s, o, a) => {
      if (!gOo(o, a)) return;
      try {
        process.kill(s, "SIGKILL");
      } catch {
      }
    }, 5e3, r, Math.abs(n[0]), t).unref(), true;
  }
  return false;
}
async function Tze(e, t, n = "SIGTERM") {
  if (!e || e <= 1 || t === void 0) return false;
  if (await g(e, t) === "other") return false;
  try {
    process.kill(-e, n);
  } catch {
    return false;
  }
  if (n !== "SIGKILL") setTimeout((r, s) => {
    g(r, s).then((o) => {
      if (o === "other") return;
      try {
        process.kill(-r, "SIGKILL");
      } catch {
      }
    });
  }, 5e3, e, t).unref();
  return true;
}
async function g(e, t) {
  let n = await jhe(e);
  if (n !== void 0) return JXe(t, n) ? "same" : "other";
  try {
    return process.kill(e, 0), "other";
  } catch (r) {
    return (0, import_chunk_jv7av99m.w)(r) === "ESRCH" ? "gone" : "other";
  }
}
function mhn(e) {
  return;
}
function AYi(e, t = 12) {
  return [];
}
async function RYi(e, t = 10) {
  return (await hOo(e, t)).ancestors;
}
async function hOo(e, t = 10) {
  if (!c(e) || !Number.isSafeInteger(t)) return { ancestors: [], readFailed: true, truncated: false };
  let n = `pid=${String(e)}; for i in $(seq 1 ${t}); do ppid=$(ps -o ppid= -p $pid 2>/dev/null | tr -d ' '); if [ -z "$ppid" ]; then echo FAIL; exit 0; fi; if [ "$ppid" = "0" ] || [ "$ppid" = "1" ]; then echo END; exit 0; fi; echo $ppid; pid=$ppid; done`, r = await (0, import_chunk_7fsmgfxx.ut)("sh", ["-c", n], { timeout: 3e3 }), s = (r.stdout ?? "").trim().split(`
`).filter(Boolean);
  return { ancestors: s.filter((o) => o !== "END" && o !== "FAIL").map((o) => parseInt(o, 10)).filter((o) => !isNaN(o)), readFailed: r.code !== 0 || s.at(-1) === "FAIL", truncated: r.code === 0 && s.at(-1) !== "END" && s.at(-1) !== "FAIL" };
}
function xYi(e) {
  if (!c(e)) return null;
  try {
    let n = `ps -o command= -p ${String(e)}`, r = (0, import_chunk_7fsmgfxx.pft)(n, { timeout: 1e3 });
    return r ? r.trim() : null;
  } catch {
    return null;
  }
}
function tRt(e) {
  if (!c(e)) return;
  try {
    let t = (0, import_chunk_7fsmgfxx.pft)(`LC_ALL=C TZ=UTC ps -o lstart= -p ${e}`, { timeout: 1e3 });
    return t ? t.trim() : void 0;
  } catch {
    return;
  }
}
function gOo(e, t) {
  if (t === void 0) return true;
  return y(t, tRt(e));
}
function JXe(e, t) {
  if (t === e) return true;
  return false;
}
function y(e, t) {
  return t === void 0 || t === e || U(e, t);
}
function U(e, t) {
  if (!d()) return false;
  let n = Number(e), r = Number(t);
  return Number.isFinite(n) && Number.isFinite(r) && n > 3e17 !== r > 3e17;
}
async function GC(e, t) {
  if (t === void 0) return true;
  return y(t, await Ef(e));
}
async function mS(e, t) {
  let n = await Ef(e, { skipCache: true });
  return n === void 0 ? void 0 : JXe(t, n);
}
class T {
  #e = void 0;
  get token() {
    return this.#e;
  }
  set(e) {
    return this.#e = e, e;
  }
  reset() {
    this.#e = void 0;
  }
}
var iFe = new T();
class E {
  #e = /* @__PURE__ */ new Map();
  get(e) {
    return this.#e.get(e);
  }
  set(e, t) {
    this.#e.set(e, t);
  }
}
var D = new import_chunk_2904xtvq.j(() => new E());
function aFe() {
  return iFe.token ?? iFe.set(tRt(process.pid));
}
var M = 1e3;
async function HE() {
  return iFe.token ?? await (0, import_chunk_5appeerh.me)(Ef(process.pid).then((e) => iFe.token ?? iFe.set(e)), M);
}
function fK(e) {
  if (d()) return e.procStart !== void 0 ? void 0 : e.procStartFt;
  return e.procStart;
}
function OPe(e) {
  return d() ? { procStart: void 0, procStartFt: e } : { procStart: e, procStartFt: void 0 };
}
var B = 6e4, H = 5e3;
async function Ef(e, t) {
  let n = Date.now(), r = D.of((0, import_chunk_f9x2f6cx.N)().host);
  if (t?.env !== void 0) return _(e, t.env);
  if (!t?.skipCache) {
    let u = r.get(e), l = u?.miss ? H : B;
    if (u && n - u.at < l) return u.p;
  }
  let s = _(e), o = { at: n, p: s };
  r.set(e, o);
  let a = await s;
  if (a === void 0 && r.get(e) === o) o.miss = true, o.at = Date.now();
  return a;
}
var S = 250, b = 2500;
async function jhe(e) {
  let t = Date.now() + b, n = false, r = await (0, import_chunk_5appeerh.me)(Ef(e, { skipCache: true }).finally(() => {
    n = true;
  }), b);
  if (r !== void 0 || !n) return r;
  let s = S + Math.floor(Math.random() * S), o = t - Date.now() - s;
  if (o <= 0) return;
  return await (0, import_chunk_5appeerh.K)(s), (0, import_chunk_5appeerh.me)(Ef(e, { skipCache: true }), o);
}
function G(e) {
  let t = (0, import_chunk_c203g5kd.S4t)((0, import_chunk_khxw3ng0.Zi)(e, "PATH") ?? "").split(import_path.delimiter);
  return t.filter((r) => /^\/bin\/*$/.test(r)).join(import_path.delimiter);
}
async function _(e, t) {
  if (!c(e)) return;
  let n = t === void 0 ? {} : { env: t, extendEnv: false };
  try {
    let r = t === void 0 ? "ps" : (0, import_chunk_c203g5kd.dse)("ps", G(t));
    if (r === null) return;
    let s = await (0, import_chunk_7fsmgfxx.ut)(r, ["-o", "lstart=", "-p", String(e)], { timeout: 1e3, ...n, env: { ...t ?? process.env, LC_ALL: "C", TZ: "UTC" } });
    return s.code === 0 && s.stdout ? s.stdout.trim() : void 0;
  } catch {
    return;
  }
}
async function lFe(e) {
  if (!c(e)) return null;
  try {
    let t = await (0, import_chunk_7fsmgfxx.ut)("/bin/ps", ["-o", "lstart=", "-p", String(e)], { timeout: 1e3, env: { ...process.env, LC_ALL: "C", TZ: "UTC" } });
    if (t.code !== 0 || !t.stdout?.trim()) return null;
    let n = Date.parse(`${t.stdout.trim()} UTC`);
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}
var Ks = "NotebookEdit";
var lt = "Edit", TVt = 1073741824, WIr = "/.claude/**", jIr = "~/.claude/**", CVt = "File has not been read yet. Read it first before writing to it.", _Oo = "String to replace not found in file.", S0l = "String not found in file. Failed to apply edit.", PYi = `You were given only the start of this file, and nothing shows that you have since read all of it in one call, so a Write could lose the rest. To change part of it, use ${lt}. To replace it whole, first Read it in one call with no offset or limit. If Read returns only a page or says the file is too large, Read it again with ${import_chunk_k883m4fq.Mke}: true. If even that cannot return all of it, use ${lt}.`, b0l = `Only the start of this file was given in this session, so a Write could lose the rest. Nothing was written. To change it, use ${lt}. If ${lt} says that the path is a link, use it on the link's target.`, w0l = `Nothing was written. Only the start of a file was given in this session, and it could not be checked that this path is a different file. To change this file, use ${lt}.`, YOs = "File is in a directory that is denied by your permission settings.", yOo = "File is covered by a Read deny rule in your permission settings and cannot be edited.", SOo = "File is covered by a Read deny rule in your permission settings and cannot be written.", SVn = "File content has changed since it was last read. This commonly happens when a linter or formatter run via Bash rewrites the file. Call Read on this file to refresh, then retry the edit.", k0l = "Cannot create new file - file already exists.", E0l = `File is a Jupyter Notebook. Use the ${Ks} to edit this file.`, C = { not_utf8: "is not valid UTF-8: it uses a legacy encoding such as Windows-1252, Shift-JIS or GBK, or it is binary", nul: "has NUL bytes in its first 8 KB: binary data, UTF-16/UTF-32 without a byte-order mark, or text with embedded NULs", utf16be: "is UTF-16 big-endian (it starts FE FF), which these tools cannot write" };
function bVn(e) {
  return `File ${C[e]}. These tools write UTF-8 (or UTF-16LE behind its byte-order mark) and never convert a file's encoding on their own, so nothing was written. If the file is text, make the change with a shell command that reads and writes it in its own encoding (iconv, or PowerShell Get-Content/Set-Content -Encoding), or ask the user whether to convert it to UTF-8 first. To replace the whole file with new UTF-8 text anyway, delete it first, then Write it.`;
}
function v0l(e) {
  let t = e === "not_utf8" ? " Its undecodable bytes show above as U+FFFD." : "";
  return `[This file ${C[e]}.${t} Edit and Write will refuse it: change it with a shell command that keeps its encoding, or ask the user whether to convert it to UTF-8.]`;
}
class mD extends Error {
  constructor(e) {
    super(e);
    this.name = "FileStateError";
  }
}
var Dt = "Write";
var yt = "PowerShell";
function OYi(e) {
  switch (e) {
    case "sandbox_confines_writes":
      return "moving it to the current base would run outside the Bash sandbox, which is restricting file writes";
    case "sandbox_set_for_checkout":
      return "the worktree's or the repository's own settings files enable the Bash sandbox (or could not be read), and moving it to the current base would run outside that sandbox";
    case "ref_target_not_plain":
      return "git could write outside this repository through an entry in its git folder";
  }
}
function Y(e) {
  return e === "ref_target_not_plain" ? "a different worktree name may be refused for the same reason, and that refusal names the entry" : "a different worktree name gives a fresh one from the current base";
}
function T0l(e) {
  return e === "ref_target_not_plain" ? "tell the user that updating it was refused and why, and leave the update to them" : "pass a different name for a fresh worktree, or tell the user and leave the update to them";
}
function hhn(e, t) {
  return `Resumed worktree "${e}" on its earlier base instead of updating it, because ${OYi(t)}; ${Y(t)}.`;
}
var Nct = Symbol("sync copies"), Fct = Symbol("sync held"), ghn = Symbol("release note"), bOo = Symbol("resumed into");
function nRt(e) {
  return !e.hookBased && (!e.enteredExisting || e.madeElsewhere === "resumedByName");
}
class I {
  spawned = /* @__PURE__ */ new Set();
  cleanlyRemoved = /* @__PURE__ */ new Set();
  recordSpawned(e) {
    this.spawned.add(e);
  }
  recordCleanlyRemoved(e) {
    this.cleanlyRemoved.add(e);
  }
  clear() {
    this.spawned.clear(), this.cleanlyRemoved.clear();
  }
}
function IYi(e) {
  return e.vcsCopy?.madeBy === "mod" && e.realPath === void 0 && !e.enteredExisting;
}
function R(e) {
  return IYi(e) ? null : e.worktreeName;
}
class k {
  currentSession = null;
  resumeHintWorktreeName = null;
  hasBeenInWorktree = false;
  movedOutOf = null;
  backgroundTakeover = null;
  agentIsolationEvidence = new I();
  isolationUnavailableCwd = null;
  ownCopies = { byPath: /* @__PURE__ */ new Map(), turns: (0, import_chunk_gjzwg6ck.GS)() };
  vcsCopies = /* @__PURE__ */ new Map();
  listedCopies = /* @__PURE__ */ new Set();
  isolateInputs = /* @__PURE__ */ new Map();
  resumedCopies = /* @__PURE__ */ new Set();
  coreCopies = /* @__PURE__ */ new Map();
  inPlaceCopies = /* @__PURE__ */ new Set();
  setCurrentSession(e) {
    if (this.currentSession = e, this.hasBeenInWorktree ||= e !== null, e && !e.enteredExisting) this.resumeHintWorktreeName = R(e);
  }
  getResumeHintWorktreeName() {
    if (this.currentSession) return this.currentSession.enteredExisting ? null : R(this.currentSession);
    return this.resumeHintWorktreeName;
  }
  clearResumeHintWorktreeName() {
    this.resumeHintWorktreeName = null;
  }
  setBackgroundTakeover(e) {
    this.backgroundTakeover = e;
  }
  markIsolationUnavailable(e) {
    this.isolationUnavailableCwd = e;
  }
}
var V = new import_chunk_2904xtvq.j(() => new k());
function i() {
  return (0, import_chunk_f9x2f6cx.kr)(V);
}
function ui() {
  return i().currentSession;
}
function wVn(e) {
  i().setCurrentSession(e);
}
function C0l() {
  return i().getResumeHintWorktreeName();
}
function i8() {
  i().clearResumeHintWorktreeName();
}
function QXe() {
  return i().hasBeenInWorktree;
}
function zC() {
  return _hn() ? (0, import_chunk_f9x2f6cx.Ed)() : (0, import_chunk_f9x2f6cx.ns)();
}
function kVn() {
  let { currentSession: e, movedOutOf: t } = i();
  return e !== null && e !== t;
}
function _hn() {
  return kVn() && ui()?.extensionRoot === (0, import_chunk_f9x2f6cx.Ed)();
}
function A0l() {
  let e = i();
  e.movedOutOf = e.currentSession;
}
function pk() {
  return i().backgroundTakeover;
}
function wOo(e) {
  i().agentIsolationEvidence.recordSpawned(e);
}
function MYi(e) {
  return i().agentIsolationEvidence.spawned.has(e);
}
function R0l(e) {
  i().agentIsolationEvidence.recordCleanlyRemoved(e);
}
function x0l(e) {
  return i().agentIsolationEvidence.cleanlyRemoved.has(e);
}
function P0l(e) {
  return i().isolationUnavailableCwd === e;
}
function GIr(e) {
  i().markIsolationUnavailable(e);
}
function HYi(e, t, n) {
  if (i().vcsCopies.set(e, t), n) i().isolateInputs.set(e, n);
}
function O0l(e) {
  return i().isolateInputs.get(e)?.input;
}
function XOs(e) {
  i().vcsCopies.delete(e), i().isolateInputs.delete(e), i().coreCopies.delete(e), i().listedCopies.delete(e);
}
function kOo(e, t) {
  let { isolateInputs: n, resumedCopies: r } = i(), s = [e, t ?? e], o = [...n].filter(([, a]) => s.some((u) => u === a.realPath)).map(([a]) => a);
  for (let a of [...s, ...o]) XOs(a), r.delete(a);
}
function dFe(e) {
  return e === void 0 ? void 0 : i().vcsCopies.get(e);
}
function UX() {
  return i().inPlaceCopies;
}
function EOo() {
  return i().resumedCopies;
}
function zIr(e, t) {
  if (i().listedCopies.add(e), !dFe(e) && !VIr(e)) HYi(e, t);
}
function DYi(e) {
  if (e && i().listedCopies.delete(e)) i().vcsCopies.delete(e);
}
function I0l(e) {
  let { listedCopies: t, currentSession: n } = i();
  return t.has(e) || n?.enteredExisting === true && n.realPath === e;
}
function M0l(e) {
  DYi(e.realPath), XOs(e.worktreePath), i().coreCopies.set(e.worktreePath, e);
}
function VIr(e) {
  return [...i().coreCopies.values()].find((t) => t.worktreePath === e || t.realPath === e);
}
function KIr() {
  return i().ownCopies;
}
