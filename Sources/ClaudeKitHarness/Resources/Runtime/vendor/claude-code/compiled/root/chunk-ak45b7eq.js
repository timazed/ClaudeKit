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
var chunk_ak45b7eq_exports = {};
__export(chunk_ak45b7eq_exports, {
  $9e: () => $9e,
  YDe: () => YDe,
  aPi: () => aPi,
  aps: () => aps,
  dbe: () => dbe,
  dll: () => dll,
  vUt: () => vUt
});
module.exports = __toCommonJS(chunk_ak45b7eq_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_kypvvv9j = require("/$bunfs/root/chunk-kypvvv9j.js");
var import_chunk_859v5edd = require("/$bunfs/root/chunk-859v5edd.js");
var import_chunk_fbnv54pa = require("/$bunfs/root/chunk-fbnv54pa.js");
var import_chunk_w71cxznt = require("/$bunfs/root/chunk-w71cxznt.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_promises2 = require("stream/promises");
var ne = 15e3, B = 512, ie = 8, re = 1e6, W = 4096, z = 4096, se = 8388608, oe = 74 + 4 * z, U = "submodule inspection deadline";
async function dbe(e, t) {
  let n = t?.deadlineMs ?? ne;
  try {
    return await (0, import_chunk_5appeerh.qt)(de(e, n), n, U);
  } catch (i) {
    return { kind: "unverifiable", reason: i instanceof Error && i.message === U ? "timeout" : "unreadable" };
  }
}
function $9e(e) {
  if (e.kind === "unverifiable") return { kind: "unverifiable", reason: e.reason, path: e.path };
  let t = [...e.withTrackedChanges, ...e.withUntrackedFiles];
  return t.length > 0 ? { kind: "changes", paths: t } : void 0;
}
function YDe(e) {
  if (e.kind === "changes") {
    let n = e.paths.slice(0, 3).map(M).filter(Boolean), i = e.paths.length - n.length;
    return `changes inside ${e.paths.length === 1 ? "submodule" : "submodules"} ${n.join(", ")}${i > 0 ? ` and ${i} more` : ""}`;
  }
  let t = e.path === void 0 ? void 0 : M(e.path) || void 0;
  switch (e.reason) {
    case "nested_repository":
      return `${t ?? "a directory"} is a separate git repository inside the worktree, not a submodule checkout`;
    case "gitdir_outside_modules":
      return `submodule ${t ?? "checkout"} points at a git directory outside this worktree's own, or its object alternates or config lead somewhere this worktree cannot vouch for`;
    case "unconfigured_gitlink":
      return `${t ?? "a directory"} is a nested repository recorded in the index but not a configured submodule`;
    case "nested_submodules":
      return `submodule ${t ?? "checkout"} holds submodules of its own, which can't be inspected`;
    case "too_many":
      return `it records more than ${B} submodules, too many to inspect`;
    case "unreadable":
      return t === void 0 ? "its submodules' state could not be read" : `the state of submodule ${t} could not be read`;
    case "timeout":
      return "inspecting its submodules took too long";
  }
}
var ae = { head: 24, tail: 16 };
function M(e) {
  return (0, import_chunk_tp3c5q2s.Qa)(e, ae);
}
async function de(e, t) {
  let n = { repository: [], env: (0, import_chunk_kypvvv9j.su)(e), deadlineMs: t }, i = await vUt(e, n);
  if (typeof i === "string") return { kind: "unverifiable", reason: i };
  if (i.length === 0) return { kind: "verified", withTrackedChanges: [], withUntrackedFiles: [] };
  let o = await aPi(e, n);
  if (typeof o === "string") return { kind: "unverifiable", reason: o };
  let s = await (0, import_chunk_w5s307zm.UM)(e);
  if (s === null) return { kind: "unverifiable", reason: "unreadable" };
  let r;
  try {
    r = (0, import_path.join)(await (0, import_promises.realpath)(s), "modules");
  } catch {
    return { kind: "unverifiable", reason: "unreadable" };
  }
  let d = { lexical: (0, import_path.join)(s, "modules"), real: r }, c = new Set(o), a = (0, import_chunk_w71cxznt.Rl)(ie, (l) => c.has(l) ? le(e, l, d, n) : fe(e, l)), f = await Promise.all(i.map((l) => a(l))), u = [], h = [];
  for (let [l, g] of f.entries()) {
    let k = i[l];
    switch (g) {
      case "absent":
      case "clean":
        break;
      case "tracked":
        u.push(k);
        break;
      case "untracked":
        h.push(k);
        break;
      default:
        return { kind: "unverifiable", reason: g.unverifiable, path: k };
    }
  }
  return { kind: "verified", withTrackedChanges: u, withUntrackedFiles: h };
}
async function aPi(e, t) {
  let n = await E((0, import_path.join)(e, ".gitmodules"), re);
  switch (n.kind) {
    case "absent":
      return [];
    case "directory":
    case "other":
      return "unreadable";
    case "file":
      break;
  }
  let i = await X(n.text, "^submodule\\..*\\.path$", e, t);
  return i === "unreadable" ? i : H(i.map((o) => o.value));
}
async function X(e, t, n, { repository: i, env: o, deadlineMs: s }) {
  let r = await (0, import_chunk_7fsmgfxx.ut)((0, import_chunk_w5s307zm.Ht)(), [...i, ...import_chunk_gd77dyw4.Nn, "config", "--file", "-", "--no-includes", "-z", "--get-regexp", t], { cwd: n, env: o, input: e, timeout: s, preserveOutputOnError: false }), d = r.exitCode === 1 && r.error === void 0 && !r.timedOut && !r.maxBufferExceeded;
  if (r.code !== 0 && !d) return "unreadable";
  let c = [];
  for (let a of r.stdout.split("\0")) {
    if (a === "") continue;
    let f = a.indexOf(`
`);
    if (f === -1) return "unreadable";
    c.push({ key: a.slice(0, f), value: a.slice(f + 1) });
  }
  return c;
}
async function vUt(e, t, n) {
  return Y(e, t, "160000", n);
}
async function dll(e, t) {
  return Y(e, t, "120000");
}
async function Y(e, t, n, i) {
  let o = [...t.repository, ...import_chunk_gd77dyw4.Nn, "ls-files", "-s", ...i === void 0 ? [] : ["-v"], "-z"], s = await (0, import_chunk_7fsmgfxx.ut)(t.git ?? (0, import_chunk_w5s307zm.Ht)(), o, { cwd: e, env: t.env, timeout: t.deadlineMs, maxBuffer: se, preserveOutputOnError: false, stdin: "ignore" });
  if (s.maxBufferExceeded) return ue(e, o, t, n, i);
  if (s.code !== 0) return "unreadable";
  let r = new D(n, i);
  return r.push(Buffer.from(s.stdout, "utf8")), r.end();
}
async function ue(e, t, { git: n = (0, import_chunk_w5s307zm.Ht)(), env: i, deadlineMs: o }, s, r) {
  let d = (0, import_chunk_7fsmgfxx.Sce)(n, t, i), c = new D(s, r);
  try {
    let a = (0, import_chunk_9zdrdv25.WM)(n, d?.args ?? t, { cwd: e, env: d?.env ?? i, timeout: o, stdin: "ignore", stdout: "pipe", stderr: "ignore" });
    a.stdout?.on("data", (g) => {
      if (c.push(Buffer.isBuffer(g) ? g : Buffer.from(g, "utf8")) !== void 0) a.kill();
    });
    let f = a.stdout ? (0, import_promises2.finished)(a.stdout).catch(() => {
    }) : Promise.resolve(), u = await a, h = !u.timedOut && !u.isCanceled && u.signal === void 0 && u.exitCode === 0;
    if (!h) a.stdout?.destroy();
    await f;
    let l = c.end();
    if (typeof l === "string") return l;
    return h ? l : "unreadable";
  } catch {
    return "unreadable";
  }
}
class D {
  bitsSeen;
  prefix;
  paths = /* @__PURE__ */ new Set();
  record = "none";
  pending = [];
  pendingBytes = 0;
  verdict = void 0;
  letterBytes;
  constructor(e, t) {
    this.bitsSeen = t;
    this.prefix = `${e} `, this.letterBytes = t === void 0 ? 0 : 2;
  }
  push(e) {
    let t = 0;
    while (this.verdict === void 0 && t < e.length) {
      let n = e.indexOf(0, t), i = n === -1 ? e.length : n;
      if (this.append(e.subarray(t, i)), n === -1) break;
      this.completeRecord(), t = n + 1;
    }
    return this.verdict;
  }
  end() {
    if (this.verdict !== void 0) return this.verdict;
    if (this.record !== "none") return "unreadable";
    return H([...this.paths]);
  }
  append(e) {
    if (e.length === 0 || this.record === "other") return;
    if (this.pending.push(e), this.pendingBytes += e.length, this.record === "none") this.record = "undecided";
    let t = this.letterBytes + this.prefix.length;
    if (this.record === "undecided" && this.pendingBytes >= t) {
      let n = this.pending.length === 1 ? e : Buffer.concat(this.pending);
      if (this.noteLetter(n.toString("latin1", 0, this.letterBytes)), n.toString("latin1", this.letterBytes, t) === this.prefix) this.record = "listed", this.pending = [n];
      else this.record = "other", this.pending = [];
    }
    if (this.record === "listed" && this.pendingBytes > oe) this.verdict = "unreadable";
  }
  noteLetter(e) {
    if (this.bitsSeen === void 0) return;
    if (!/^[A-Za-z] $/.test(e)) {
      this.verdict = "unreadable";
      return;
    }
    let t = e[0];
    this.bitsSeen.assumeUnchanged ||= t === t.toLowerCase(), this.bitsSeen.skipWorktree ||= t.toUpperCase() === "S";
  }
  completeRecord() {
    if (this.record === "undecided" && this.bitsSeen !== void 0) this.verdict ??= "unreadable";
    if (this.record === "listed" && this.verdict === void 0) {
      let e = Buffer.concat(this.pending).toString("utf8"), t = e.indexOf("	");
      if (t === -1) this.verdict = "unreadable";
      else if (this.paths.add(e.slice(t + 1)), this.paths.size > B) this.verdict = "too_many";
    }
    this.record = "none", this.pending = [], this.pendingBytes = 0;
  }
}
function H(e) {
  let t = /* @__PURE__ */ new Set();
  for (let n of e) {
    if (n.includes("\uFFFD") || !ce(n)) return "unreadable";
    if (t.add(n), t.size > B) return "too_many";
  }
  return [...t];
}
function ce(e) {
  if (e.length === 0 || e.length > z) return false;
  return e.split("/").every((t) => {
    let n = (0, import_chunk_fbnv54pa.za)(t);
    return t.replace(/[. ]+$/, "") !== "" && n !== ".git" && n !== "git~1" && !import_chunk_fbnv54pa.t0r.test(t) && [...t].every((i) => i !== "\\" && i !== ":" && i !== ";" && i > "" && i !== "\x7F");
  });
}
async function le(e, t, n, i) {
  let { deadlineMs: o } = i, s = await J(e, t);
  if (s.kind !== "directory") return s.kind === "unreadable" ? { unverifiable: "unreadable" } : "absent";
  let r = s.path, d = await E((0, import_path.join)(r, ".git"), W);
  switch (d.kind) {
    case "absent":
      return q(r);
    case "directory":
      return { unverifiable: "nested_repository" };
    case "other":
      return { unverifiable: "unreadable" };
    case "file":
      break;
  }
  let c = d.text.trim();
  if (!c.startsWith("gitdir:")) return { unverifiable: "unreadable" };
  let a = c.slice(7).trim();
  if (a === "" || (0, import_chunk_z6pfqf6e.fa)(a, r)) return { unverifiable: "gitdir_outside_modules" };
  let f = (0, import_path.resolve)(r, a);
  if (!T(f, n.lexical) && !T(f, n.real)) return { unverifiable: "gitdir_outside_modules" };
  if ((0, import_chunk_w5s307zm.Rg)(a, r)) return { unverifiable: "gitdir_outside_modules" };
  let u;
  try {
    u = await (0, import_promises.realpath)(f);
  } catch {
    return { unverifiable: "unreadable" };
  }
  if (!T(u, n.real)) return { unverifiable: "gitdir_outside_modules" };
  try {
    return await (0, import_promises.lstat)((0, import_path.join)(u, "commondir")), { unverifiable: "gitdir_outside_modules" };
  } catch (m) {
    if ((0, import_chunk_jv7av99m.w)(m) !== "ENOENT") return { unverifiable: "unreadable" };
  }
  let h = (0, import_path.join)(u, "objects"), l = await Z(h, 0, /* @__PURE__ */ new Set([h]));
  if (l !== void 0) return { unverifiable: l };
  let g = [(0, import_path.join)(u, "config"), (0, import_path.join)(u, "config.worktree")], k = new Set(g);
  for (let m of g) {
    let R = await j(m, e, i, 0, k);
    if (R !== void 0) return { unverifiable: R };
  }
  let N = (0, import_chunk_7fsmgfxx.E0s)((0, import_path.dirname)(r));
  if (N === null) return { unverifiable: "unreadable" };
  let O = { GIT_CEILING_DIRECTORIES: N, GIT_COMMON_DIR: u }, I = { repository: [`--git-dir=${u}`, `--work-tree=${r}`], env: (0, import_chunk_gd77dyw4.ms)(O), deadlineMs: o };
  if (await ye(r, I)) return { unverifiable: "nested_submodules" };
  let G = await (0, import_chunk_859v5edd.sre)(r, { repository: I.repository, envPins: O });
  if (!G.ok) return { unverifiable: "unreadable" };
  let L = await (0, import_chunk_7fsmgfxx.ut)((0, import_chunk_w5s307zm.Ht)(), [...I.repository, ...G.args, ...import_chunk_gd77dyw4.Nn, ...import_chunk_gd77dyw4.Jee], { cwd: r, env: (0, import_chunk_gd77dyw4.ms)(O, { userLocale: true }), timeout: o, preserveOutputOnError: false });
  if (L.code !== 0) return { unverifiable: "unreadable" };
  let C = L.stdout.split(`
`).filter((m) => m.length > 0);
  if (C.some((m) => !m.startsWith("??"))) return "tracked";
  return C.length > 0 ? "untracked" : "clean";
}
async function fe(e, t) {
  let n = await aps(e, t);
  switch (n) {
    case "absent":
    case "blocked":
      return "absent";
    case "untracked":
      return n;
    case "repository":
      return { unverifiable: "unconfigured_gitlink" };
    case "unreadable":
      return { unverifiable: "unreadable" };
  }
}
function T(e, t) {
  return e.startsWith(t + import_path.sep);
}
var he = 5, be = 10, v = 16, ge = /^[A-Za-z]:(?![\\/])/, pe = /^(?:\.\.\/+)*/;
function K(e, t) {
  return e.includes("\uFFFD") || ge.test(e) || (0, import_chunk_z6pfqf6e.ad)((0, import_path.isAbsolute)(e) ? e : e.replace(pe, "")) || (0, import_chunk_z6pfqf6e.fa)(e, t) || (0, import_chunk_w5s307zm.Rg)(e, t);
}
async function Z(e, t, n) {
  if (t > he || n.size > v) return "gitdir_outside_modules";
  try {
    if (!(await (0, import_promises.lstat)(e)).isDirectory()) return "gitdir_outside_modules";
  } catch {
    return "unreadable";
  }
  let i = (0, import_path.join)(e, "info");
  try {
    if (!(await (0, import_promises.lstat)(i)).isDirectory()) return "gitdir_outside_modules";
  } catch (r) {
    return p((0, import_chunk_jv7av99m.w)(r)) ? void 0 : "unreadable";
  }
  try {
    return await (0, import_promises.lstat)((0, import_path.join)(i, "http-alternates")), "gitdir_outside_modules";
  } catch (r) {
    if (!p((0, import_chunk_jv7av99m.w)(r))) return "unreadable";
  }
  let o = await E((0, import_path.join)(i, "alternates"), W);
  switch (o.kind) {
    case "absent":
      return;
    case "directory":
    case "other":
      return "unreadable";
    case "file":
      break;
  }
  let s = 0;
  for (let r of o.text.split(`
`)) {
    if (r === "" || r.startsWith("#")) continue;
    if (s++, s > v || r.startsWith('"') || K(r, e)) return "gitdir_outside_modules";
    let d;
    try {
      d = await (0, import_promises.realpath)((0, import_path.resolve)(e, r));
    } catch (a) {
      if (p((0, import_chunk_jv7av99m.w)(a))) continue;
      return "unreadable";
    }
    if (n.has(d)) continue;
    n.add(d);
    let c = await Z(d, t + 1, n);
    if (c !== void 0) return c;
  }
  return;
}
var me = "^(include\\.path|includeif\\..*\\.path|core\\.excludesfile|core\\.attributesfile)$";
async function j(e, t, n, i, o) {
  if (i > be || o.size > v) return "gitdir_outside_modules";
  let s = await E(e, import_chunk_w5s307zm.Lqt);
  switch (s.kind) {
    case "absent":
      return;
    case "directory":
    case "other":
      return "unreadable";
    case "file":
      break;
  }
  if (!/include|excludesfile|attributesfile/i.test(s.text)) return;
  let r = await X(s.text, me, t, n);
  if (r === "unreadable") return "unreadable";
  if (r.length > v) return "gitdir_outside_modules";
  let d = (0, import_path.dirname)(e);
  for (let { key: c, value: a } of r) {
    let f = c.startsWith("include");
    if (a === "" || a.startsWith("~") || a.startsWith("%(prefix)/") || !f && !(0, import_path.isAbsolute)(a) || K(a, d)) return "gitdir_outside_modules";
    if (!f) continue;
    let u = (0, import_path.resolve)(d, a), h;
    try {
      h = await (0, import_promises.realpath)(u);
    } catch (g) {
      if (p((0, import_chunk_jv7av99m.w)(g))) continue;
      return "unreadable";
    }
    if (h !== u) return "gitdir_outside_modules";
    if (o.has(h)) continue;
    o.add(h);
    let l = await j(h, t, n, i + 1, o);
    if (l !== void 0) return l;
  }
  return;
}
async function ye(e, t) {
  let n = await vUt(e, t);
  if (typeof n === "string") return true;
  return (await Promise.all(n.map((o) => aps(e, o)))).some((o) => o !== "absent" && o !== "blocked");
}
async function aps(e, t) {
  let n = await J(e, t);
  if (n.kind !== "directory") return n.kind;
  try {
    return await (0, import_promises.lstat)((0, import_path.join)(n.path, ".git")), "repository";
  } catch (o) {
    if (!p((0, import_chunk_jv7av99m.w)(o))) return "unreadable";
  }
  let i = await q(n.path);
  return i === "absent" || i === "untracked" ? i : "unreadable";
}
async function q(e) {
  let t;
  try {
    t = await (0, import_promises.opendir)(e);
  } catch (n) {
    return p((0, import_chunk_jv7av99m.w)(n)) ? "absent" : { unverifiable: "unreadable" };
  }
  try {
    return await t.read() === null ? "absent" : "untracked";
  } catch {
    return { unverifiable: "unreadable" };
  } finally {
    try {
      await t.close();
    } catch {
    }
  }
}
async function J(e, t) {
  let n = e;
  for (let i of t.split("/")) {
    n = (0, import_path.join)(n, i);
    try {
      if (!(await (0, import_promises.lstat)(n)).isDirectory()) return { kind: "blocked" };
    } catch (o) {
      return p((0, import_chunk_jv7av99m.w)(o)) ? { kind: "absent" } : { kind: "unreadable" };
    }
  }
  return { kind: "directory", path: n };
}
function p(e) {
  return e === "ENOENT" || e === "ENOTDIR";
}
async function E(e, t) {
  let n = (0, import_chunk_cg8dqz0a.x)() === "windows", i;
  if (n) try {
    let s = await (0, import_promises.lstat)(e, { bigint: true });
    if (s.isDirectory()) return { kind: "directory" };
    if (!s.isFile()) return { kind: "other" };
    i = { dev: s.dev, ino: s.ino };
  } catch (s) {
    return p((0, import_chunk_jv7av99m.w)(s)) ? { kind: "absent" } : { kind: "other" };
  }
  let o;
  try {
    o = await (0, import_promises.open)(e, n ? import_fs.constants.O_RDONLY : import_fs.constants.O_RDONLY | import_fs.constants.O_NOFOLLOW | import_fs.constants.O_NONBLOCK);
  } catch (s) {
    let r = (0, import_chunk_jv7av99m.w)(s);
    if (p(r)) return { kind: "absent" };
    return r === "EISDIR" ? { kind: "directory" } : { kind: "other" };
  }
  try {
    let s = await o.stat({ bigint: true });
    if (i !== void 0 && (s.dev !== i.dev || s.ino !== i.ino)) return { kind: "other" };
    if (s.isDirectory()) return { kind: "directory" };
    if (!s.isFile() || s.size > BigInt(t)) return { kind: "other" };
    let r = Number(s.size), { buffer: d, bytesRead: c } = await o.read(Buffer.alloc(r + 1), 0, r + 1, 0);
    if (c > r) return { kind: "other" };
    return { kind: "file", text: d.toString("utf8", 0, c) };
  } catch {
    return { kind: "other" };
  } finally {
    await o.close();
  }
}
