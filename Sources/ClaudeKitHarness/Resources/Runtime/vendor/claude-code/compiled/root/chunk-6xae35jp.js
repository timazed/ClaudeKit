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
var chunk_6xae35jp_exports = {};
__export(chunk_6xae35jp_exports, {
  EUi: () => EUi,
  KSs: () => KSs,
  Pjt: () => Pjt,
  SSl: () => SSl,
  VSs: () => VSs,
  _Sl: () => _Sl,
  bSl: () => bSl,
  gSl: () => gSl,
  qSs: () => qSs,
  rvt: () => rvt,
  v2e: () => v2e,
  vUi: () => vUi,
  wSl: () => wSl,
  xjt: () => xjt,
  ySl: () => ySl
});
module.exports = __toCommonJS(chunk_6xae35jp_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_tvbk4t18 = require("/$bunfs/root/chunk-tvbk4t18.js");
var import_chunk_sqvd6je2 = require("/$bunfs/root/chunk-sqvd6je2.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_fs = require("fs");
var import_path = require("path");
var import_promises = require("fs/promises");
var import_path2 = require("path");
(0, import_chunk_adx6804h.B)();
var D = 4194304, L = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ sourceCommand: (0, import_chunk_adx6804h.n)().optional().catch(void 0), sourceProducerPath: (0, import_chunk_adx6804h.n)().optional().catch(void 0), previousProducerPaths: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.ie)()).transform((e) => e.filter((r) => typeof r === "string")).optional().catch(void 0) }).passthrough());
function EUi(e) {
  return S((0, import_chunk_4smdap7r.M)(e).map(E));
}
async function gSl(e, { maxAgeMs: r }) {
  let o = (0, import_chunk_865at33z.ce)();
  return (0, import_chunk_sqvd6je2.yj)(o.commandProducerDirsScannedAt, r) ? [...o.commandProducerDirsDenied] : S(await Promise.all((0, import_chunk_4smdap7r.M)(e).map(z)));
}
function N(e) {
  return e.isFile() && e.size <= D;
}
function E(e) {
  try {
    let r = (0, import_path.join)(e, "installed_plugins.json");
    if (!N((0, import_fs.statSync)(r))) return;
    return JSON.parse((0, import_fs.readFileSync)(r, "utf8"));
  } catch {
    return;
  }
}
async function z(e) {
  try {
    let r = await (0, import_chunk_w5s307zm.$M)((0, import_path.join)(e, "installed_plugins.json"), D);
    return r === null ? void 0 : JSON.parse(r);
  } catch {
    return;
  }
}
function S(e) {
  let r = (0, import_chunk_865at33z.ce)(), o = r.commandProducerDirsDenied, t = v();
  r.commandProducerDirsWslProviderUndeterminable = t === "undeterminable";
  let s = t === "undeterminable" ? void 0 : t;
  r.commandProducerDirsScannedAt = Date.now(), r.commandProducerDirsComparable = null;
  for (let a of e) {
    let l = typeof a === "object" && a !== null && "plugins" in a ? a.plugins : void 0;
    if (typeof l !== "object" || l === null) continue;
    for (let u of Object.values(l)) {
      if (!Array.isArray(u)) continue;
      for (let P of u) {
        let m = L().safeParse(P);
        if (!m.success) continue;
        for (let f of [m.data.sourceProducerPath, ...m.data.previousProducerPaths ?? []]) {
          let g = f === void 0 ? void 0 : (0, import_chunk_z6pfqf6e.nve)(f), d = g === void 0 ? void 0 : x(g, s);
          if (d !== void 0) o.add(d);
        }
      }
    }
  }
  return [...o];
}
function xjt(e, { emit: r = true } = {}) {
  let o = v(), t = x((0, import_chunk_z6pfqf6e.nve)(e), o === "undeterminable" ? void 0 : o);
  if (t === void 0) return;
  let s = (0, import_chunk_865at33z.ce)().commandProducerDirsDenied;
  if (s.has(t)) return;
  if (s.add(t), (0, import_chunk_865at33z.ce)().commandProducerDirsComparable = null, r) rvt();
}
function rvt() {
  try {
    (0, import_chunk_865at33z.ce)().commandProducerDirsChanged.emit();
  } catch (e) {
    (0, import_chunk_k449cc64.i)(e);
  }
}
var vUi = (0, import_chunk_pzzqg6s3.qB)(() => (0, import_chunk_865at33z.ce)().commandProducerDirsChanged);
function VSs(e) {
  return (0, import_chunk_865at33z.ce)().commandProducerDirsWslProviderUndeterminable && ((0, import_chunk_z6pfqf6e.Q3n)((0, import_chunk_z6pfqf6e.nve)(e)) !== void 0 || (0, import_chunk_z6pfqf6e.Q3n)((0, import_chunk_z6pfqf6e.Ah)(e, { foldCase: true })) !== void 0);
}
function _Sl(e, r, o, { maxAgeMs: t = 0 } = {}) {
  let s = (0, import_chunk_865at33z.ce)();
  if (!(t > 0 && Date.now() - s.commandProducerDirsScannedAt < t) || s.commandProducerDirsComparable === null) {
    let u = { foldCase: true }, P = (0, import_chunk_z6pfqf6e.Ah)((0, import_chunk_f9x2f6cx.Te)(), u), m = (0, import_chunk_z6pfqf6e.Ah)(o, u), f = r.map((d) => (0, import_chunk_z6pfqf6e.Ah)(d, u)).filter((d) => !(0, import_chunk_z6pfqf6e.Ya)(d, P, { alreadyComparable: true })), g = EUi(r).map((d) => (0, import_chunk_z6pfqf6e.Ah)(d, u));
    s.commandProducerDirsComparable = [...f, ...g], s.commandProducerDirsNeedCanonicalCandidate = g.length > 0 || f.some((d) => !(0, import_chunk_z6pfqf6e.Ya)(m, d, { alreadyComparable: true }));
  }
  if (VSs(e)) return true;
  if (s.commandProducerDirsComparable.length === 0) return false;
  if (s.commandProducerDirsNeedCanonicalCandidate && (0, import_chunk_z6pfqf6e.tY)((0, import_path.isAbsolute)(e) ? e : (0, import_path.resolve)(e), { allowLocalWsl: true })) return true;
  let l = s.commandProducerDirsNeedCanonicalCandidate ? (0, import_chunk_z6pfqf6e.Ah)(e, { foldCase: true, knownNotSuspect: true }) : (0, import_path.resolve)(e).normalize("NFC").toLowerCase();
  return s.commandProducerDirsComparable.some((u) => (0, import_chunk_z6pfqf6e.Ya)(u, l, { alreadyComparable: true }));
}
function v() {
  let e = (0, import_chunk_865at33z.ce)(), r = (0, import_chunk_sqvd6je2.$x)(), o = e.wslProviderOfPluginsRootMemo;
  if (o?.root === r && (0, import_chunk_sqvd6je2.yj)(o.at, H)) return o.value;
  let t = (0, import_chunk_wj4me9k5.WWi)(r);
  if (t === "undeterminable") return "undeterminable";
  let s = t === void 0 ? void 0 : { prefix: t.prefix };
  return e.wslProviderOfPluginsRootMemo = { root: r, value: s, at: Date.now() }, s;
}
var H = 3e4;
function x(e, r) {
  let o = (0, import_chunk_z6pfqf6e.aNo)(e, { exactDots: true }) ?? (r === void 0 ? void 0 : (0, import_chunk_z6pfqf6e.iNo)(e, r.prefix));
  if (o !== void 0) return o;
  if ((0, import_path.isAbsolute)(e)) return !(0, import_chunk_z6pfqf6e.rNo)(e) && (!(0, import_chunk_z6pfqf6e.yP)(e) || (0, import_chunk_z6pfqf6e.Apt)(e)) ? e : void 0;
  return (0, import_chunk_z6pfqf6e.lNo)(e, { exactDots: true });
}
var ySl = new RegExp("\\p{Cc}", "u"), KSs = /[\p{Cc}\p{Cf}]/u;
function v2e(e) {
  return (0, import_path2.join)(e, ".claude", "worktrees");
}
function Pjt(e) {
  return { dir: v2e(e), anchor: e, below: [".claude", "worktrees"] };
}
function qSs(e, r) {
  return { dir: (0, import_path2.join)(r, ...e.below), anchor: r, below: e.below };
}
function SSl(e, r) {
  let o = e.split(/[\r\n]/);
  return [`fatal: '${r}' is already used by worktree at `, `fatal: '${r}' is already checked out at `, `fatal: cannot force update the branch '${r}' used by worktree at `, `fatal: cannot force update the branch '${r}' checked out at `].some((t) => o.some((s) => s.startsWith(t)));
}
function bSl(e, r) {
  let o = (0, import_path2.relative)(r, e);
  if (o === ".." || o.startsWith(`..${import_path2.sep}`) || (0, import_path2.isAbsolute)(o)) return "a location outside the repository (not shown)";
  return o === "" || o.split(import_path2.sep).every((t) => I.test(t)) ? (0, import_chunk_tvbk4t18.mM)(e) : "a location inside the repository (not shown)";
}
var I = /^[a-zA-Z0-9._+-]+$/;
function R(e, r) {
  return `${(0, import_chunk_tvbk4t18.mM)((0, import_path2.relative)(e, r))} in the repository`;
}
async function wSl(e, r) {
  let o = [...e.below.map((t, s, a) => (0, import_path2.join)(e.anchor, ...a.slice(0, s + 1))), r];
  for (let t of o) {
    let s;
    try {
      s = await (0, import_promises.lstat)(t);
    } catch (a) {
      if ((0, import_chunk_jv7av99m.J)(a)) continue;
      return { ok: false, reason: "lstat_failed", message: `Cannot create worktree: failed to lstat ${R(e.anchor, t)}: it could not be read${(0, import_chunk_jv7av99m.w)(a) ? ` (${(0, import_chunk_jv7av99m.w)(a)})` : ""}` };
    }
    if (s.isSymbolicLink()) return { ok: false, reason: "symlink", message: `Cannot create worktree: ${R(e.anchor, t)} is a symlink. A repository-committed symlink at .claude, .claude/worktrees, or .claude/worktrees/<name> could redirect worktree creation outside the repository. Remove the symlink and retry.` };
  }
  return { ok: true };
}
