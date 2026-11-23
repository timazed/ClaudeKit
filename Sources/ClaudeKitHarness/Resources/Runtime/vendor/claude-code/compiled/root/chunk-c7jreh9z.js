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
var chunk_c7jreh9z_exports = {};
__export(chunk_c7jreh9z_exports, {
  Ttt: () => Ttt,
  YZs: () => YZs,
  arr: () => arr,
  f9r: () => f9r,
  qZs: () => qZs,
  rzl: () => rzl,
  u9r: () => u9r
});
module.exports = __toCommonJS(chunk_c7jreh9z_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_g03qj0bk = require("/$bunfs/root/chunk-g03qj0bk.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_waccdnpq = require("/$bunfs/root/chunk-waccdnpq.js");
var import_chunk_6kz2p070 = require("/$bunfs/root/chunk-6kz2p070.js");
var import_chunk_ayyyz8kh = require("/$bunfs/root/chunk-ayyyz8kh.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_fs = require("fs");
var h = __toESM(require("path"));
function B() {
  return { fileIndex: null, fileListRefreshPromise: null, cacheGeneration: 0, untrackedFetchPromise: null, cachedTrackedFiles: [], cachedConfigFiles: [], cachedTrackedDirs: [], ignorePatternsCache: null, ignorePatternsCacheKey: null, ignoreReincludeGlobs: [], lastReincludedFiles: [], reincludeRetryAtMs: 0, trackedBuildPromise: null, lastRefreshMs: 0, lastScanDurationMs: null, lastGitIndexMtime: null, loadedTrackedSignature: null, loadedMergedSignature: null, normalizedTrackedInputs: null, indexBuildComplete: (0, import_chunk_69qhefwa.Be)(), indexBaseDir: null, indexLoadCount: 0 };
}
var Ttt = B();
function qZs(e) {
  e.fileIndex = null, e.fileListRefreshPromise = null, e.cacheGeneration++, e.untrackedFetchPromise = null, e.cachedTrackedFiles = [], e.cachedConfigFiles = [], e.cachedTrackedDirs = [], e.ignorePatternsCache = null, e.ignorePatternsCacheKey = null, e.ignoreReincludeGlobs = [], e.lastReincludedFiles = [], e.reincludeRetryAtMs = 0, e.trackedBuildPromise = null, e.lastRefreshMs = 0, e.lastScanDurationMs = null, e.lastGitIndexMtime = null, e.loadedTrackedSignature = null, e.loadedMergedSignature = null, e.normalizedTrackedInputs = null, e.indexBaseDir = null, e.indexLoadCount++;
}
function b(e, r, o, n) {
  let l = ++e.indexLoadCount, s = r.loadFromFileListAsync(o);
  return s.queryable.then(() => {
    if (e.indexLoadCount === l) e.indexBaseDir = n;
  }), s.done;
}
function E(e) {
  let r = e.length, o = Math.max(1, Math.floor(r / 500)), n = -2128831035;
  for (let l = 0; l < r; l += o) {
    let s = e[l];
    for (let g = 0; g < s.length; g++) n = (n ^ s.charCodeAt(g)) * 16777619 | 0;
    n = n * 16777619 | 0;
  }
  if (r > 0) {
    let l = e[r - 1];
    for (let s = 0; s < l.length; s++) n = (n ^ l.charCodeAt(s)) * 16777619 | 0;
  }
  return `${r}:${(n >>> 0).toString(16)}`;
}
function R(e, r) {
  return `${e}\0${E(r)}`;
}
function j() {
  let e = (0, import_chunk_w5s307zm.dr)((0, import_chunk_18rsj2ts.pe)());
  if (!e) return null;
  try {
    return (0, import_fs.statSync)(h.join(e, ".git", "index")).mtimeMs;
  } catch {
    return null;
  }
}
async function D(e, r, o) {
  if (o === r) return e;
  let n = Array(e.length), l = performance.now();
  for (let s = 0; s < e.length; s++) {
    let g = h.join(r, e[s]);
    if (n[s] = h.relative(o, g), (s & 255) === 255 && performance.now() - l > import_chunk_6kz2p070.mrr) await (0, import_chunk_ayyyz8kh.Kd)(), l = performance.now();
  }
  return n;
}
async function N(e, r, o) {
  if (r.length === 0) return;
  if (!e.fileIndex) return;
  let n = await A(r);
  if (e.normalizedTrackedInputs?.cwd !== o) return;
  let l = [...e.cachedTrackedFiles, ...e.cachedConfigFiles, ...e.cachedTrackedDirs, ...r, ...n], s = R(o, l);
  if (s === e.loadedMergedSignature) {
    (0, import_chunk_w578pjby.t)("[FileIndex] skipped index rebuild \u2014 merged paths unchanged");
    return;
  }
  if (await b(e, e.fileIndex, l, o)) e.loadedMergedSignature = s, (0, import_chunk_w578pjby.t)(`[FileIndex] rebuilt index with ${e.cachedTrackedFiles.length} tracked + ${r.length} untracked files`);
}
async function _(e, r, o) {
  let n = `${r}:${o}`;
  if (e.ignorePatternsCacheKey === n) return e.ignorePatternsCache;
  let l = (0, import_chunk_w578pjby.le)(), s = [".ignore", ".rgignore"], g = (0, import_chunk_4smdap7r.M)([r, o]), p = (0, import_chunk_p1ewvgeh.f4)(), u = false, f = false, c = [], m = [], x = s.flatMap((S) => g.map((C) => h.join(C, S))), F = await Promise.all(x.map((S) => l.readFile(S, { encoding: "utf8" }).catch(() => null)));
  for (let [S, C] of F.entries()) {
    if (C === null) continue;
    let w = (0, import_chunk_p1ewvgeh.gjt)((0, import_chunk_p1ewvgeh.wdn)(C), "file_suggestions_ignore");
    p.add(w), u = true;
    let k = z(w, h.relative(r, h.dirname(x[S])).replaceAll(h.sep, "/"));
    f ||= k.hasNegation, c.push(...k.augmentations), m.push(...k.rules), (0, import_chunk_w578pjby.t)(`[FileIndex] loaded ignore patterns from ${x[S]}`);
  }
  let I = u ? p : null;
  return e.ignorePatternsCache = I, e.ignorePatternsCacheKey = n, e.ignoreReincludeGlobs = f ? [...c, ...m] : [], I;
}
function z(e, r) {
  let o = [], n = [], l = false, s = O(r);
  for (let g of e) {
    let p = g.endsWith("\\ ") ? g : g.trimEnd();
    if (p === "" || p.startsWith("#")) continue;
    let u = p.startsWith("!"), f = u ? p.slice(1) : p;
    if (f === "") continue;
    let c = K(f, s);
    if (u) {
      if (l = true, n.push(c), !c.endsWith("**")) {
        let m = c.replace(/\/+$/, "");
        o.push(T(m) ? `**/${m}/**` : `${m}/**`);
      }
    } else n.push(`!${c}`);
  }
  return { hasNegation: l, augmentations: o, rules: n };
}
function T(e) {
  return !e.startsWith("/") && !e.replace(/\/+$/, "").includes("/");
}
function O(e) {
  return e.replace(/[[\]{}*?\\]/g, "\\$&").replace(/^[!#]/, "\\$&");
}
function K(e, r) {
  if (r === "") return e;
  if (e.startsWith("/")) return `${r}${e}`;
  return T(e) ? `${r}/**/${e}` : `${r}/${e}`;
}
async function G(e, r) {
  let o = [], n = performance.now();
  for (let l = 0; l < r.length; l++) {
    let s = r[l];
    if (!(0, import_chunk_p1ewvgeh.pjt)(s) || !e.ignores(s)) o.push(s);
    if ((l & 255) === 255 && performance.now() - n > import_chunk_6kz2p070.mrr) await (0, import_chunk_ayyyz8kh.Kd)(), n = performance.now();
  }
  return o;
}
async function q(e, r, o, n) {
  let l = Date.now(), s = e.cacheGeneration;
  (0, import_chunk_w578pjby.t)("[FileIndex] getFilesUsingGit called");
  let g = (0, import_chunk_w5s307zm.dr)(n);
  if (!g) return (0, import_chunk_w578pjby.t)("[FileIndex] not a git repo, returning null"), null;
  try {
    let p = Date.now(), u = await (0, import_chunk_7fsmgfxx.ut)((0, import_chunk_w5s307zm.Ht)(), ["-c", "core.quotepath=false", "ls-files", "--recurse-submodules"], { timeout: 5e3, abortSignal: r, cwd: g });
    if ((0, import_chunk_w578pjby.t)(`[FileIndex] git ls-files (tracked) took ${Date.now() - p}ms`), u.code !== 0) return (0, import_chunk_w578pjby.t)(`[FileIndex] git ls-files failed (code=${u.code}, stderr=${u.stderr}), falling back to ripgrep`), null;
    let f = e.normalizedTrackedInputs, c, m = null;
    if (f !== null && f.repoRoot === g && f.cwd === n && f.rawStdout === u.stdout && e.cachedTrackedFiles.length > 0) c = e.cachedTrackedFiles, (0, import_chunk_w578pjby.t)("[FileIndex] skipped path normalization \u2014 raw git paths unchanged");
    else {
      let F = u.stdout.trim().split(`
`).filter(Boolean);
      c = await D(F, g, n);
      let I = await _(e, g, n);
      if (I) {
        let S = c.length;
        c = await G(I, c), (0, import_chunk_w578pjby.t)(`[FileIndex] applied ignore patterns: ${S} -> ${c.length} files`);
      }
      m = { repoRoot: g, cwd: n, rawStdout: u.stdout };
    }
    if (s !== e.cacheGeneration) return (0, import_chunk_w578pjby.t)("[FileIndex] discarding refresh results \u2014 cache was reset mid-refresh"), c;
    if (m !== null) e.normalizedTrackedInputs = m;
    e.cachedTrackedFiles = c;
    let x = Date.now() - l;
    return (0, import_chunk_w578pjby.t)(`[FileIndex] git ls-files: ${c.length} tracked files in ${x}ms`), (0, import_chunk_y53wbr8a.a)("tengu_file_suggestions_git_ls_files", { file_count: c.length, tracked_count: c.length, untracked_count: 0, duration_ms: x }), se(e, g, n, o), c;
  } catch (p) {
    return (0, import_chunk_w578pjby.t)(`[FileIndex] git ls-files error: ${(0, import_chunk_jv7av99m.d)(p)}`), null;
  }
}
async function A(e) {
  let r = /* @__PURE__ */ new Set(), o = performance.now();
  for (let n = 0; n < e.length; n++) if (U(e, n, n + 1, r), (n & 255) === 255 && performance.now() - o > import_chunk_6kz2p070.mrr) await (0, import_chunk_ayyyz8kh.Kd)(), o = performance.now();
  return [...r].map((n) => n + h.sep);
}
function U(e, r, o, n) {
  for (let l = r; l < o; l++) {
    let s = h.dirname(e[l]);
    while (s !== "." && !n.has(s)) {
      let g = h.dirname(s);
      if (g === s) break;
      n.add(s), s = g;
    }
  }
}
async function H(e, r) {
  return (await Promise.all(import_chunk_bzyb60p0.sja.map((n) => (0, import_chunk_bzyb60p0.Eie)(n, e, r)))).flatMap((n) => n.map((l) => l.filePath));
}
var L = [".git", ".svn", ".hg", ".bzr", ".jj", ".sl"], V = L.flatMap((e) => ["--glob", `!${e}/`]), X = L.flatMap((e) => ["--glob", `!${e}`]);
async function J(e, r, o, n) {
  (0, import_chunk_w578pjby.t)(`[FileIndex] getProjectFiles called, respectGitignore=${o}`);
  let l = await q(e, r, o, n);
  if (l !== null) return (0, import_chunk_w578pjby.t)(`[FileIndex] using git ls-files result (${l.length} files)`), l;
  (0, import_chunk_w578pjby.t)("[FileIndex] git ls-files returned null, falling back to ripgrep"), e.normalizedTrackedInputs = null;
  let s = Date.now(), g = ["--files", "--follow", "--hidden", ...V];
  if (!o) g.push("--no-ignore-vcs");
  let u = (await (0, import_chunk_g03qj0bk.rre)(g, n, r, { searchOtherAppsData: true })).map((c) => h.relative(n, c)), f = Date.now() - s;
  return (0, import_chunk_w578pjby.t)(`[FileIndex] ripgrep: ${u.length} files in ${f}ms`), (0, import_chunk_y53wbr8a.a)("tengu_file_suggestions_ripgrep", { file_count: u.length, duration_ms: f }), u;
}
async function Q(e, r) {
  let o = AbortSignal.timeout(1e4), n = e.fileIndex ??= new import_chunk_6kz2p070.b9r(), l = Promise.withResolvers();
  e.trackedBuildPromise = l.promise;
  try {
    let s = (0, import_chunk_2yx6c1y2.vt)(), g = (0, import_chunk_865at33z.ge)(), p = s.respectGitignore ?? g.respectGitignore ?? true, u = (0, import_chunk_18rsj2ts.pe)(), [f, c] = await Promise.all([J(e, o, p, u), H(u, r)]);
    e.cachedConfigFiles = c;
    let m = [...f, ...c], x = await A(m);
    e.cachedTrackedDirs = x;
    let F = [...x, ...m], I = R(u, F);
    if (I !== e.loadedTrackedSignature) {
      if (await b(e, n, F, u)) e.loadedTrackedSignature = I, e.loadedMergedSignature = null;
    } else (0, import_chunk_w578pjby.t)("[FileIndex] skipped index rebuild \u2014 tracked paths unchanged");
  } catch (s) {
    (0, import_chunk_w578pjby.t)(`[FileIndex] getPathsForSuggestions failed: ${(0, import_chunk_jv7av99m.d)(s)}`, { level: "error" });
  } finally {
    l.resolve();
  }
  return n;
}
function Z(e, r) {
  let o = Math.min(e.length, r.length), n = 0;
  while (n < o && e[n] === r[n]) n++;
  return e.substring(0, n);
}
function YZs(e) {
  if (e.length === 0) return "";
  let r = e.map((n) => n.displayText), o = r[0];
  for (let n = 1; n < r.length; n++) {
    let l = r[n];
    if (o = Z(o, l), o === "") return "";
  }
  return o;
}
function P(e, r) {
  return { id: `file-${e}`, displayText: e, metadata: r !== void 0 ? { score: r } : void 0 };
}
function y(e) {
  let r = e.slice(0, import_chunk_waccdnpq._Xt);
  return r.map((o, n) => P(o, n / Math.max(r.length, 1)));
}
var ee = 5e3, te = 1e3, ne = 3e5;
function u9r(e, r) {
  if (e.fileListRefreshPromise || (0, import_chunk_f9x2f6cx.Y)()) return;
  let o = j();
  if (e.fileIndex) {
    if (o === null && e.lastRefreshMs > 0 && e.lastScanDurationMs !== null && e.lastScanDurationMs > te) return;
    if (!(o !== null && o !== e.lastGitIndexMtime) && Date.now() - e.lastRefreshMs < ee) return;
  }
  let n = e.cacheGeneration, l = Date.now();
  e.fileIndex ??= new import_chunk_6kz2p070.b9r(), e.fileListRefreshPromise = Q(e, r).then((s) => {
    if (n !== e.cacheGeneration) return s;
    e.fileListRefreshPromise = null, e.indexBuildComplete.emit(), e.lastGitIndexMtime = o;
    let g = Date.now();
    return e.lastRefreshMs = g, e.lastScanDurationMs = g - l, (0, import_chunk_w578pjby.t)(`[FileIndex] cache refresh completed in ${e.lastScanDurationMs}ms`), s;
  }).catch((s) => {
    if ((0, import_chunk_w578pjby.t)(`[FileIndex] Cache refresh failed: ${(0, import_chunk_jv7av99m.d)(s)}`), (0, import_chunk_k449cc64.i)(s), n === e.cacheGeneration) e.fileListRefreshPromise = null;
    return e.fileIndex ??= new import_chunk_6kz2p070.b9r();
  });
}
async function ie(e) {
  let r = (0, import_chunk_w578pjby.le)();
  try {
    return (await r.readdir(e)).map((n) => {
      let l = h.join(e, n.name), s = h.relative(e, l);
      return n.isDirectory() ? s + h.sep : s;
    });
  } catch (o) {
    return (0, import_chunk_w578pjby.t)(`[FileSuggestions] readdir failed for cwd: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" }), [];
  }
}
async function arr(e, r, o = false, n) {
  let { items: l } = await rzl(e, r, o, n);
  return l;
}
async function rzl(e, r, o, n, l = true) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return { items: [], baseDir: void 0 };
  if ((0, import_chunk_t7fzcstv.bt)()) {
    if (!r && !o) return { items: [], baseDir: void 0 };
    return { items: await re(r), baseDir: void 0 };
  }
  let s = (0, import_chunk_18rsj2ts.pe)();
  if (!r && !o) return { items: [], baseDir: s };
  if ((l ? (0, import_chunk_bzyb60p0.E7o)((0, import_chunk_2yx6c1y2.vt)().fileSuggestion) : void 0)?.type === "command") {
    let u = { id: (0, import_chunk_f9x2f6cx.W)(), project: { originalCwd: (0, import_chunk_f9x2f6cx.Te)(), projectRoot: (0, import_chunk_f9x2f6cx.Oo)() } }, f = { ...(0, import_chunk_bzyb60p0.Ym)(u, s), query: r }, c = await (0, import_chunk_bzyb60p0.Agi)(u, f);
    return { items: y(c), baseDir: s };
  }
  if (r === "" || r === "." || r === "./") {
    let u = await ie(s);
    return u9r(e, n), { items: y(u), baseDir: s };
  }
  let p = Date.now();
  try {
    let u = e.fileListRefreshPromise !== null;
    u9r(e, n);
    let f = r, c = "." + h.sep;
    if (r.startsWith(c)) f = r.substring(2);
    if (f.startsWith("~")) f = (0, import_chunk_n2dbhmj2.xt)(f);
    let m = e.fileIndex ? e.fileIndex.search(f, import_chunk_waccdnpq._Xt).map((I) => P(I.path, I.score)) : [], x = e.indexBaseDir ?? s, F = Date.now() - p;
    return (0, import_chunk_w578pjby.t)(`[FileIndex] generateFileSuggestions: ${m.length} results in ${F}ms (${u ? "partial" : "full"} index)`), (0, import_chunk_y53wbr8a.a)("tengu_file_suggestions_query", { duration_ms: F, cache_hit: !u, result_count: m.length, query_length: r.length }), { items: m, baseDir: x };
  } catch (u) {
    return (0, import_chunk_k449cc64.i)(u), { items: [], baseDir: s };
  }
}
async function re(e) {
  let r = (0, import_chunk_t7fzcstv.br)();
  if (!r || !(0, import_chunk_t7fzcstv.Zl)()) return [];
  try {
    return (await r.sendControlRequest({ subtype: "file_suggestions", query: e })).suggestions.map((n) => P(n.path, n.score));
  } catch (o) {
    return (0, import_chunk_w578pjby.t)(`[FileIndex] remote file_suggestions RPC failed: ${(0, import_chunk_jv7av99m.d)(o)}`), [];
  }
}
function f9r({ suggestion: e, input: r, partialPath: o, startPos: n, onInputChange: l, setCursorOffset: s }) {
  let g = typeof e === "string" ? e : e.displayText, p = r.substring(0, n) + g + r.substring(n + o.length);
  l(p);
  let u = n + g.length;
  return s(u), p;
}
function se(e, r, o, n) {
  if (e.untrackedFetchPromise) return;
  let l = n ? ["-c", "core.quotepath=false", "ls-files", "--others", "--exclude-standard"] : ["-c", "core.quotepath=false", "ls-files", "--others"], s = e.cacheGeneration, g = n && e.ignoreReincludeGlobs.length > 0, p = g && Date.now() >= e.reincludeRetryAtMs ? (0, import_chunk_g03qj0bk.rre)(["--files", "--hidden", ...e.ignoreReincludeGlobs.flatMap((u) => ["--glob", u]), ...X], ".", AbortSignal.timeout(1e4), { cwd: (0, import_chunk_g03qj0bk.mUt)(r, (0, import_chunk_g03qj0bk.nre)().rgPath), rejectOnPartial: true }).then((u) => {
    if (s === e.cacheGeneration) e.lastReincludedFiles = u;
    return u;
  }).catch((u) => {
    if ((0, import_chunk_w578pjby.t)(`[FileIndex] .ignore re-include listing failed: ${(0, import_chunk_jv7av99m.d)(u)}`), s === e.cacheGeneration) e.reincludeRetryAtMs = Date.now() + ne;
    return e.lastReincludedFiles;
  }) : Promise.resolve(g ? e.lastReincludedFiles : []);
  e.untrackedFetchPromise = Promise.all([(0, import_chunk_7fsmgfxx.ut)((0, import_chunk_w5s307zm.Ht)(), l, { timeout: 1e4, cwd: r }), p]).then(async ([u, f]) => {
    if (await e.trackedBuildPromise, s !== e.cacheGeneration) return;
    if (u.code !== 0) return;
    let c = u.stdout.trim().split(`
`).filter(Boolean);
    for (let F of f.map((I) => h.normalize(I).replaceAll(h.sep, "/")).sort()) c.push(F);
    let m = await D(c, r, o), x = await _(e, r, o);
    if (x && m.length > 0) {
      let F = m.length;
      m = await G(x, m), (0, import_chunk_w578pjby.t)(`[FileIndex] applied ignore patterns to untracked: ${F} -> ${m.length} files`);
    }
    return (0, import_chunk_w578pjby.t)(`[FileIndex] background untracked fetch: ${m.length} files (${f.length} re-included by .ignore)`), N(e, m, o);
  }).catch((u) => {
    (0, import_chunk_w578pjby.t)(`[FileIndex] background untracked fetch failed: ${u}`);
  }).finally(() => {
    e.untrackedFetchPromise = null;
  });
}
