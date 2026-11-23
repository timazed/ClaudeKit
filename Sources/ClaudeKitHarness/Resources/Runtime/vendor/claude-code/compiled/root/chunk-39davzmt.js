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
var chunk_39davzmt_exports = {};
__export(chunk_39davzmt_exports, {
  $Rn: () => $Rn,
  I8o: () => I8o,
  M8o: () => M8o,
  QBa: () => QBa,
  oii: () => oii,
  vUe: () => vUe
});
module.exports = __toCommonJS(chunk_39davzmt_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_kypvvv9j = require("/$bunfs/root/chunk-kypvvv9j.js");
var import_chunk_859v5edd = require("/$bunfs/root/chunk-859v5edd.js");
var import_chunk_ak45b7eq = require("/$bunfs/root/chunk-ak45b7eq.js");
var import_chunk_hvfkrhr2 = require("/$bunfs/root/chunk-hvfkrhr2.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var QBa = 1e4, O = 500;
async function I8o(e, i = QBa) {
  let r = new AbortController();
  try {
    return await Promise.race([e, (0, import_chunk_5appeerh.K)(i, r.signal).then(() => {
      throw Error("worktree probe timed out");
    })]);
  } finally {
    r.abort();
  }
}
class $Rn extends Error {
  bit;
  constructor(e) {
    super("the index hides a file from git status");
    this.bit = e;
  }
}
async function oii(e, i, r = QBa) {
  let n = (0, import_chunk_w5s307zm.jy)(e);
  if (!n) return null;
  try {
    let s = await M8o(n, i, r, {});
    if (s.submodules_unverified) (0, import_chunk_cqa9hrgx.l)("bridge_worktree_state", "submodules_unverifiable");
    else (0, import_chunk_cqa9hrgx.u)("bridge_worktree_state");
    return s;
  } catch (s) {
    return (0, import_chunk_cqa9hrgx.m)("bridge_worktree_state", "collect_failed"), (0, import_chunk_w578pjby.t)(`[bridge:worktree] collectWorktreeState failed: ${(0, import_chunk_jv7av99m.d)(s)}`), null;
  }
}
function M8o(e, i, r, n) {
  return I8o(S(e, i, Date.now() + r, n), r);
}
async function S(e, i, r, n) {
  let s = await (0, import_chunk_w5s307zm.yce)(e);
  if (!s) (0, import_chunk_w5s307zm.Ju)().gitDirByCwd.delete((0, import_path.resolve)(e)), s = await (0, import_chunk_w5s307zm.yce)(e);
  if (!s) throw Error("getGitDir returned null \u2014 cannot verify worktree state");
  let [f, a, o, c, p, g] = await Promise.all([P(e, n), A(e, i, n), I(e, r, n), D(e, s, n), b((0, import_path.join)(e, ".gitmodules")), F(e)]);
  return { branch: i, head_sha: f, unpushed_count: a.count, is_dirty: o.dirty, upstream_exists: a.upstreamExists, mid_operation: c, has_submodules: p, submodules_unverified: o.submodulesUnverified, has_lfs: g, reported_at: (/* @__PURE__ */ new Date()).toISOString() };
}
var T = 4194304;
function vUe(e, i, r, { userLocale: n } = {}) {
  return (0, import_chunk_7fsmgfxx.ut)(e.git ?? (0, import_chunk_w5s307zm.Ht)(), [...import_chunk_gd77dyw4.Nn, ...r], { cwd: i, env: { ...(0, import_chunk_kypvvv9j.su)(i, e.gitEnvPins, { userLocale: n }), ..._(e) }, preserveOutputOnError: false, maxBuffer: T, timeout: 1e4 });
}
var x = ["-c", "core.sparseCheckout=true", "-c", "sparse.expectFilesOutsideOfPatterns=false"], C = ["-c", "core.trustctime=true", "-c", "core.checkStat=default"];
function w({ statusLeavesOut: e = [] }) {
  return e.length === 0 ? [] : ["--", ".", ...e.map((i) => `:(exclude,literal)${i}`)];
}
function _({ unsetInGitChildren: e = [] }) {
  return Object.fromEntries(e.map((i) => [i, void 0]));
}
async function P(e, i) {
  let { code: r, stdout: n } = await vUe(i, e, ["rev-parse", "HEAD"]);
  return r === 0 ? n.trim() : null;
}
async function A(e, i, r) {
  if (!i) return { count: null, upstreamExists: false };
  let n = `refs/remotes/origin/${i}`, s = await vUe(r, e, ["rev-parse", "--verify", "--quiet", `${n}^{commit}`]);
  if (s.code !== 0 || !s.stdout.trim()) return { count: null, upstreamExists: false };
  let { code: f, stdout: a } = await vUe(r, e, ["rev-list", "--count", `${n}..HEAD`]);
  if (f !== 0) return { count: null, upstreamExists: false };
  let o = parseInt(a.trim(), 10);
  return { count: Number.isFinite(o) ? o : null, upstreamExists: true };
}
async function I(e, i, r) {
  let n = await (0, import_chunk_859v5edd.sre)(e, { envPins: r.gitEnvPins, run: (c, p) => (0, import_chunk_7fsmgfxx.ut)(r.git ?? (0, import_chunk_w5s307zm.Ht)(), c, { ...p, env: { ...p.env, ..._(r) }, stdin: "ignore" }) });
  if (!n.ok) throw Error("repository config could not be vetted");
  let s = r.looksBehindIndexBits === true ? x : [], { code: f, stdout: a } = await vUe(r, e, [...n.args, ...s, ...r.looksBehindIndexBits === true ? C : [], "--no-optional-locks", "status", "--porcelain", "-unormal", import_chunk_gd77dyw4.zy, ...w(r)], { userLocale: true });
  if (f !== 0) throw Error("git status failed");
  if (a.trim().length > 0) return { dirty: true, submodulesUnverified: false };
  if (r.ignoresByTheTreeAlone === true) {
    let c = await vUe(r, e, ["ls-files", "--others", "--exclude-per-directory=.gitignore", "--directory", "--no-empty-directory", ...w(r)]);
    if (c.code !== 0) throw Error("git ls-files failed");
    if (c.stdout.trim().length > 0) return { dirty: true, submodulesUnverified: false };
  }
  if (r.entersSubmodules === false) {
    let c = r.looksBehindIndexBits === true ? { assumeUnchanged: false, skipWorktree: false } : void 0, p = await (0, import_chunk_ak45b7eq.vUt)(e, { git: r.git, repository: s, env: { ...(0, import_chunk_kypvvv9j.su)(e, r.gitEnvPins), ..._(r) }, deadlineMs: Math.max(1, i - Date.now()) }, c);
    if (c?.assumeUnchanged === true) throw new $Rn("assume_unchanged");
    if (c?.skipWorktree === true && !await W(e, r)) throw new $Rn("skip_worktree");
    let g = typeof p === "string" || p.length > 0 || await b((0, import_path.join)(e, ".gitmodules"));
    return { dirty: g, submodulesUnverified: g };
  }
  let o = await (0, import_chunk_ak45b7eq.dbe)(e, { deadlineMs: Math.max(0, i - Date.now() - O) });
  if (o.kind === "verified") return { dirty: o.withTrackedChanges.length + o.withUntrackedFiles.length > 0, submodulesUnverified: false };
  switch (o.reason) {
    case "unreadable":
      throw Error("submodule state unreadable \u2014 cannot verify worktree is clean");
    case "nested_submodules":
    case "too_many":
    case "nested_repository":
    case "unconfigured_gitlink":
    case "gitdir_outside_modules":
    case "timeout":
      return (0, import_chunk_w578pjby.t)(`[bridge:worktree] submodules could not be inspected (${o.reason}); reporting is_dirty=true, submodules_unverified=true`, { level: "warn" }), { dirty: true, submodulesUnverified: true };
  }
}
async function W(e, i) {
  let [r, n] = await Promise.all([vUe(i, e, ["version"]), vUe(i, e, ["config", "--type=bool", "--get", "core.sparseCheckout"])]);
  return r.code === 0 && (0, import_chunk_hvfkrhr2.mll)((0, import_chunk_hvfkrhr2.EAe)(r.stdout)) && n.code === 0 && n.stdout.trim() === "true";
}
async function b(e) {
  try {
    let i = await (0, import_promises.lstat)(e);
    return i.isFile() || i.isDirectory();
  } catch (i) {
    if ((0, import_chunk_jv7av99m.J)(i)) return false;
    throw i;
  }
}
var E = [["rebase-merge", "rebase"], ["rebase-apply", "rebase"], ["MERGE_HEAD", "merge"], ["CHERRY_PICK_HEAD", "cherry-pick"], ["REVERT_HEAD", "revert"], ["BISECT_LOG", "bisect"], ["sequencer", "cherry-pick"]];
async function D(e, i, r) {
  let s = (await Promise.all(E.map(([a]) => b((0, import_path.join)(i, a))))).indexOf(true);
  if (s !== -1) return E[s][1];
  let f = await (0, import_chunk_859v5edd.Osn)(i, import_chunk_859v5edd.TUt, async (a) => (await vUe(r, e, a)).exitCode);
  if (f === null) throw Error("git could not say whether a cherry-pick or revert is in progress");
  return f.has("CHERRY_PICK_HEAD") ? "cherry-pick" : f.has("REVERT_HEAD") ? "revert" : null;
}
async function F(e) {
  let i = (0, import_path.join)(e, ".gitattributes");
  try {
    if (!(await (0, import_promises.lstat)(i)).isFile()) return false;
  } catch (n) {
    if ((0, import_chunk_jv7av99m.J)(n)) return false;
    throw n;
  }
  let r;
  try {
    r = await (0, import_promises.open)(i, "r");
    let { buffer: n, bytesRead: s } = await r.read(Buffer.alloc(65536), 0, 65536, 0);
    return n.toString("utf8", 0, s).includes("filter=lfs");
  } catch (n) {
    if ((0, import_chunk_jv7av99m.J)(n)) return false;
    throw n;
  } finally {
    await r?.close();
  }
}
