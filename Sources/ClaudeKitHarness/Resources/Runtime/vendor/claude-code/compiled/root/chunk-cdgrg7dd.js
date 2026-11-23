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
var chunk_cdgrg7dd_exports = {};
__export(chunk_cdgrg7dd_exports, {
  bti: () => bti,
  gzl: () => gzl,
  hzl: () => hzl,
  k5o: () => k5o,
  sFa: () => sFa,
  w5o: () => w5o
});
module.exports = __toCommonJS(chunk_cdgrg7dd_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_8khjhfq8 = require("/$bunfs/root/chunk-8khjhfq8.js");
var import_chunk_kypvvv9j = require("/$bunfs/root/chunk-kypvvv9j.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_e15pxvhz = require("/$bunfs/root/chunk-e15pxvhz.js");
var import_chunk_dkc86g0t = require("/$bunfs/root/chunk-dkc86g0t.js");
var import_chunk_tap4sdsz = require("/$bunfs/root/chunk-tap4sdsz.js");
var import_chunk_hvfkrhr2 = require("/$bunfs/root/chunk-hvfkrhr2.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
var z = 65536, T = 1e6, K = 33554432, X = 65536, W = 65536, V = 1e6, q = 67108864, Q = 256, Z = 2e4, ee = 4096, te = [["core.commitGraph", "false"], ["core.multiPackIndex", "false"]], v = { disposition: "skip" }, b = new Map([["config", { disposition: "copy", kind: "file", maxBytes: T }], ["config.worktree", { disposition: "copy", kind: "file", maxBytes: T }], ["HEAD", { disposition: "copy", kind: "file", maxBytes: z }], ["packed-refs", { disposition: "copy", kind: "file", maxBytes: K }], ["shallow", { disposition: "copy", kind: "file", maxBytes: W }], ["refs", { disposition: "copy", kind: "dir", maxFileBytes: X, entries: "all" }], ["info", { disposition: "copy", kind: "dir", maxFileBytes: V, entries: /* @__PURE__ */ new Set(["exclude", "attributes", "sparse-checkout", "grafts"]) }], ["objects", { disposition: "in-place", kind: "dir" }], ["index", { disposition: "in-place", kind: "file" }], ["commondir", { disposition: "refuse" }], ["gitdir", { disposition: "refuse" }], ["reftable", { disposition: "refuse" }], ...["hooks", "logs", "branches", "remotes", "FETCH_HEAD", "ORIG_HEAD", "MERGE_HEAD", "AUTO_MERGE", "REBASE_HEAD", "CHERRY_PICK_HEAD", "REVERT_HEAD", "MERGE_AUTOSTASH", "COMMIT_EDITMSG", "MERGE_MSG", "MERGE_MODE", "MERGE_RR", "SQUASH_MSG", "TAG_EDITMSG", "rebase-merge", "rebase-apply", "sequencer", "rr-cache", "worktrees", "modules", "lfs", "gc.log", "gc.pid", "description", "gitk.cache", import_chunk_tap4sdsz.Qq].map((e) => [e, v])]), ne = /^(?:BISECT_[A-Z_]+|fsmonitor--daemon.*|.+\.lock)$/;
function ie(e) {
  return b.get(e) ?? (ne.test(e) ? v : void 0);
}
var re = [/^(?:commit|tag|pull|push|rebase|init|advice|color|column|help|status|fetch|user|branch)\..+$/, /^core\.(?:repositoryformatversion|filemode|bare|logallrefupdates|ignorecase|precomposeunicode|symlinks|autocrlf|eol|safecrlf|longpaths|sparsecheckout|sparsecheckoutcone|quotepath|abbrev|checkstat|trustctime|untrackedcache)$/, /^remote\..+\.(?:url|pushurl|fetch|promisor|partialclonefilter|tagopt|prune|mirror|gh-resolved)$/, /^submodule\.active$/, /^submodule\..+\.(?:active|branch|url)$/, /^http\.(?:.+\.)?extraheader$/, /^maintenance\..+$/, /^(?:extensions\.(?:objectformat|partialclone|worktreeconfig)|lfs\.repositoryformatversion)$/], oe = [/^http\.(?:.+\.)?(?:sslcainfo|sslcapath|sslverify|proxy)$/, /^lfs\..+\.(?:access|locksverify)$/, /^merge\.conflictstyle$/], se = /* @__PURE__ */ new Set(["checkout", "rebase", "merge", "none"]);
async function bti(e, n, r) {
  let i = (0, import_chunk_kypvvv9j.Tg)(e);
  if (!i?.workTree || i.gitDir !== i.commonDir) return null;
  if ((0, import_chunk_6e68m1dj.cEe)() && (0, import_chunk_2yx6c1y2.ah)(i.workTree) !== (0, import_chunk_2yx6c1y2.ah)(e)) return m("a folder that is no longer the one that was checked", n);
  let { gitDir: o, workTree: a } = i, f;
  try {
    let c = await de(o);
    if (typeof c === "string") return m(c, n);
    let u = await pe((0, import_path.join)(o, "objects"));
    if (u !== void 0) return m(u, n);
    let p = await ae();
    if (p === null) return m(F, n);
    f = await (0, import_promises.mkdtemp)((0, import_path.join)(p, "ccdiff-"));
    let g = f, S = await ge(o, g, c) ?? await me(g, c.has("config.worktree"), o !== (0, import_path.join)(a, ".git"));
    if (S !== void 0) return await _(g), m(S, n);
    let R = k5o(g, o, a);
    if (!await w5o(e, R, r)) return await _(g), m(sFa, n);
    return { spawn: R, dispose: () => _(g) };
  } catch (c) {
    if (f !== void 0) await _(f);
    return m(`unexpected error (${(0, import_chunk_jv7av99m.d)(c)})`, n);
  }
}
var sFa = "git older than 2.32, or its version unread";
async function w5o(e, n, r) {
  let { stdout: i, code: o } = await (0, import_chunk_7fsmgfxx.ut)((0, import_chunk_w5s307zm.Ht)(), ["version"], { ...n, cwd: e, timeout: import_chunk_e15pxvhz.Iq, abortSignal: r, preserveOutputOnError: false, stdin: "ignore" }).catch(() => ({ stdout: "", code: 1 }));
  return o === 0 && (0, import_chunk_hvfkrhr2.fll)((0, import_chunk_hvfkrhr2.EAe)(i));
}
var F = "no folder for the copy";
async function ae() {
  if (!(0, import_chunk_6e68m1dj.cEe)()) return (0, import_os.tmpdir)();
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_DIFF_COPY_ROOT;
  if (e === void 0 || !(0, import_path.isAbsolute)(e)) return null;
  return await (0, import_promises.mkdir)(e, { recursive: true, mode: 448 }), e;
}
async function _(e) {
  await (0, import_promises.rm)(e, { recursive: true, force: true }).catch(() => {
    return;
  });
}
function m(e, n) {
  if ((0, import_chunk_w578pjby.t)(`workspace diff: discovered repository refused (${e})`, { level: "warn" }), n !== void 0) le(e, hzl.of(n));
  return null;
}
var hzl = new import_chunk_2904xtvq.j(() => /* @__PURE__ */ new Set()), ce = 8, D = "", fe = /^[a-z0-9-]{1,40}(?:\.<\.\.\.>)?\.[a-z0-9-]{1,40}$/;
function le(e, n) {
  if (!(0, import_chunk_6e68m1dj.cEe)()) return;
  let r = gzl(e);
  if (n.has(r)) return;
  if (n.size >= ce) {
    if (!n.has(D)) n.add(D), process.stderr.write(`${import_chunk_8khjhfq8.kti}
`);
    return;
  }
  n.add(r), process.stderr.write(`${r}
`);
}
function gzl(e) {
  return `${import_chunk_8khjhfq8.n8r} ${ue(e)} ${import_chunk_8khjhfq8.wti}`;
}
function ue(e) {
  let n = /^(config entry|config value of|multi-line value for) (.+)$/.exec(e);
  if (n !== null) {
    let i = n[2] ?? "";
    if (!fe.test(i)) return "Its own git settings (.git/config or .git/config.worktree) have a setting whose name is not shown: it is too long, or not plain letters, digits and dashes.";
    let o = i.includes("<...>") ? 'shown in lower case, "<...>" for the middle of its name' : "shown in lower case";
    if (n[1] === "config entry") return `Its own git settings (.git/config or .git/config.worktree) have the setting "${i}" (${o}), which is not one Claude Code accepts there.`;
    return n[1] === "config value of" ? `Its own git settings (.git/config or .git/config.worktree) give the setting "${i}" (${o}) a value that is not one Claude Code accepts there.` : `Its own git settings (.git/config or .git/config.worktree) give the setting "${i}" (${o}) a value that runs over several lines.`;
  }
  if (e === F) return import_chunk_8khjhfq8.vti;
  if (e === sFa) return import_chunk_8khjhfq8.Tti;
  let r = (0, import_chunk_7cfjrnwy.nt)(e, " (");
  if (r === "unexpected error") return "An unexpected error stopped the check of its .git folder; the session's debug log has the details.";
  return (0, import_chunk_8khjhfq8.iFa)(r) ? `The check of its .git folder stopped at: ${r}.` : "The check of its .git folder stopped for a reason that is not shown.";
}
function N() {
  return [...(0, import_chunk_7fsmgfxx.Pxt)(), ...te];
}
function k5o(e, n, r) {
  return { env: { ...(0, import_chunk_gd77dyw4.ms)(import_chunk_dkc86g0t.OWe, { base: (0, import_chunk_r6r2wdsw.Hs)(), repository: { gitDir: e, workTree: r, commonDir: e } }), ...import_chunk_dkc86g0t.IWe, ...(0, import_chunk_7fsmgfxx.TB)(void 0, N()), GIT_OBJECT_DIRECTORY: (0, import_path.join)(n, "objects"), GIT_INDEX_FILE: (0, import_path.join)(n, "index"), [import_chunk_7fsmgfxx.$qt]: "1" }, extendEnv: false, gitStartsIn: import_chunk_7fsmgfxx.PEe.filesystemRoot() };
}
async function de(e) {
  let n = /* @__PURE__ */ new Set(), r = 0;
  for await (let i of await (0, import_promises.opendir)(e)) {
    if (++r > Q) return "oversized .git";
    let o = ie(i.name);
    if (o === void 0) return "unknown .git entry";
    switch (o.disposition) {
      case "skip":
        continue;
      case "refuse":
        return `.git/${i.name}`;
      case "copy":
      case "in-place":
        if (i.name === "index") {
          let a = await (0, import_promises.lstat)((0, import_path.join)(e, i.name));
          if (!a.isFile() || a.nlink > 1) return "symlinked, hardlinked or unexpected .git/index";
        } else if (await h(e, i) !== o.kind) return `symlinked or unexpected .git/${i.name}`;
        n.add(i.name);
    }
  }
  if (!n.has("config") || !n.has("HEAD")) return "no .git/config or .git/HEAD";
  return n;
}
async function pe(e) {
  let r = await O(e);
  if (r === null) return "symlinked or oversized .git/objects entry";
  for (let i of r) if (await O((0, import_path.join)(e, i)) === null) return "symlinked or oversized .git/objects entry";
  if (await ye((0, import_path.join)(e, "info", "alternates"))) return ".git/objects/info/alternates";
  return;
}
async function ge(e, n, r) {
  await (0, import_promises.mkdir)((0, import_path.join)(n, "refs"), { recursive: true });
  let i = { entries: 0, bytes: 0 };
  for (let [o, a] of b) {
    if (a.disposition !== "copy" || !r.has(o)) continue;
    let f = (0, import_path.join)(e, o), c = (0, import_path.join)(n, o);
    if (a.kind === "file") {
      if (await L(f, c, a.maxBytes, i) !== "copied") return `unreadable, linked or oversized .git/${o}`;
      continue;
    }
    if (await (0, import_promises.mkdir)(c, { recursive: true }), !await C(f, c, a.maxFileBytes, i, a.entries)) return `unreadable, linked or oversized entry under .git/${o}`;
  }
  return;
}
async function me(e, n, r) {
  let i = new Set(N().map(([a]) => a.toLowerCase()));
  if (r) i.add("core.worktree");
  let o = n ? ["config", "config.worktree"] : ["config"];
  for (let a of o) {
    let f = await (0, import_chunk_7fsmgfxx.kt)((0, import_chunk_w5s307zm.Ht)(), ["config", "--file", (0, import_path.join)(e, a), "--no-includes", "-z", "--list"], { cwd: import_chunk_7fsmgfxx.PEe.filesystemRoot().path, gitStartsIn: import_chunk_7fsmgfxx.PEe.filesystemRoot(), timeout: import_chunk_e15pxvhz.Iq, maxBuffer: 4e6, env: { ...(0, import_chunk_gd77dyw4.ms)(import_chunk_dkc86g0t.OWe, { base: (0, import_chunk_r6r2wdsw.Hs)() }), ...import_chunk_dkc86g0t.IWe, GIT_DIR: (0, import_path.join)(e, "no-repository-here"), [import_chunk_7fsmgfxx.$qt]: "1" }, extendEnv: false, stdin: "ignore" });
    if (f.code !== 0) return `config ${a} unlistable`;
    for (let c of f.stdout.split("\0")) {
      if (c === "") continue;
      let u = c.indexOf(`
`), p = u === -1 ? c : c.slice(0, u), g = u === -1 ? "" : c.slice(u + 1);
      if (g.includes(`
`)) return `multi-line value for ${I(p)}`;
      if (!_e(p, g, i)) return `${Ee(p) ? "config value of" : "config entry"} ${I(p)}`;
    }
  }
  return;
}
var G = /^submodule\..+\.update$/;
function Ee(e) {
  return e === "extensions.refstorage" || G.test(e);
}
function _e(e, n, r) {
  if (e === "extensions.refstorage") return n === "files";
  if (G.test(e)) return se.has(n);
  return r.has(e) || re.some((i) => i.test(e)) || (0, import_chunk_6e68m1dj.cEe)() && oe.some((i) => i.test(e));
}
function I(e) {
  let n = e.split(".");
  return n.length <= 2 ? e : `${n[0]}.<...>.${n.at(-1)}`;
}
async function C(e, n, r, i, o) {
  let a;
  try {
    a = await (0, import_promises.opendir)(e);
  } catch (f) {
    return (0, import_chunk_jv7av99m.J)(f);
  }
  for await (let f of a) {
    if (++i.entries > Z) return false;
    if (o !== "all" && !o.has(f.name)) continue;
    let c = (0, import_path.join)(e, f.name), u = (0, import_path.join)(n, f.name), p = await h(e, f);
    if (p === "dir" && o === "all") {
      if (await (0, import_promises.mkdir)(u, { recursive: true }), !await C(c, u, r, i, "all")) return false;
    } else if (p === "file") {
      if (await L(c, u, r, i) !== "copied") return false;
    } else return false;
  }
  return true;
}
async function h(e, n) {
  if (n.isSymbolicLink()) return "reject";
  if (n.isDirectory()) return "dir";
  if (n.isFile()) return "file";
  try {
    let r = await (0, import_promises.lstat)((0, import_path.join)(e, n.name));
    return r.isSymbolicLink() ? "reject" : r.isDirectory() ? "dir" : r.isFile() ? "file" : "reject";
  } catch {
    return "reject";
  }
}
async function O(e) {
  let n;
  try {
    n = await (0, import_promises.opendir)(e);
  } catch (o) {
    return (0, import_chunk_jv7av99m.J)(o) ? [] : null;
  }
  let r = [], i = 0;
  for await (let o of n) {
    if (++i > ee) return null;
    let a = await h(e, o);
    if (a === "reject") return null;
    if (a === "dir") r.push(o.name);
  }
  return r;
}
function P() {
  return (0, import_chunk_cg8dqz0a.x)() === "windows" ? import_fs.constants.O_RDONLY : import_fs.constants.O_RDONLY | import_fs.constants.O_NONBLOCK | import_fs.constants.O_NOFOLLOW;
}
async function L(e, n, r, i) {
  let o;
  try {
    o = await (0, import_promises.open)(e, P());
  } catch (a) {
    return (0, import_chunk_jv7av99m.J)(a) ? "absent" : "refused";
  }
  try {
    let a = await o.stat();
    if (!a.isFile() || a.nlink > 1 || a.size > r) return "refused";
    if (i.bytes += a.size, i.bytes > q) return "refused";
    let f = Buffer.alloc(a.size), c = 0;
    while (c < a.size) {
      let { bytesRead: u } = await o.read(f, c, a.size - c, c);
      if (u === 0) break;
      c += u;
    }
    if (c !== a.size) return "refused";
    return await (0, import_promises.writeFile)(n, f), "copied";
  } catch {
    return "refused";
  } finally {
    await o.close().catch(() => {
      return;
    });
  }
}
async function ye(e) {
  let n;
  try {
    n = await (0, import_promises.open)(e, P());
  } catch (r) {
    return !(0, import_chunk_jv7av99m.J)(r);
  }
  try {
    let r = await n.stat();
    return !r.isFile() || r.size > 0;
  } finally {
    await n.close().catch(() => {
      return;
    });
  }
}
