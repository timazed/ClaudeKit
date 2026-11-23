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
var chunk_00egnvdb_exports = {};
__export(chunk_00egnvdb_exports, {
  G9a: () => G9a,
  Itn: () => Itn,
  Otn: () => Otn,
  V3e: () => V3e,
  WSt: () => WSt,
  Yos: () => Yos,
  j9a: () => j9a,
  rot: () => rot,
  uFt: () => uFt,
  x_i: () => x_i,
  z9a: () => z9a
});
module.exports = __toCommonJS(chunk_00egnvdb_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_tap4sdsz = require("/$bunfs/root/chunk-tap4sdsz.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_2172r9j8 = require("/$bunfs/root/chunk-2172r9j8.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_promises2 = require("fs/promises");
var import_path2 = require("path");
var import_crypto = require("crypto");
var import_fs2 = require("fs");
var import_promises3 = require("fs/promises");
var import_path3 = require("path");
var Oe = 65536, Et = 4096, $t = (e, n) => (0, import_chunk_7fsmgfxx.ut)((0, import_chunk_w5s307zm.Ht)(), e, n);
async function Otn(e, { dotGitLink: n = "refuse", run: o = $t } = {}) {
  let r = (k, _) => ((0, import_chunk_w578pjby.t)(`Could not vet the worktree registrations of ${e}: ${_}`, { level: "warn" }), { skipped: k, why: _ }), i = (0, import_chunk_cg8dqz0a.x)() === "windows", a = async (k) => {
    let _ = await (0, import_promises2.readlink)(k).then(() => "link", (E) => (0, import_chunk_jv7av99m.w)(E) === "EINVAL" ? "clear" : (0, import_chunk_jv7av99m.J)(E) ? "missing" : "unknown");
    if (_ !== "missing") return _;
    return await (0, import_chunk_2172r9j8.X7i)(k) ? "missing" : "unknown";
  }, l = (0, import_path2.join)(e, ".git"), c = await (0, import_chunk_2172r9j8.f8)(l, e), u, m;
  if (c === "clear") {
    let [k, _] = await Promise.all([(0, import_promises2.lstat)(l).catch(() => null), (0, import_promises2.stat)(e).then((E) => E, (E) => (0, import_chunk_jv7av99m.J)(E) ? null : void 0)]);
    if (_ === null) return r("gone", "the repository root is gone");
    if (_ === void 0) return r("unvettable", "the repository root cannot be stat'd");
    if (k === null) return r("unvettable", ".git vanished");
    if (!k.isDirectory()) return r("pointer", ".git is not a real directory (a pointer file)");
    u = l, m = [k.uid, _.uid];
  } else if (c === "missing") {
    let [k, _, E] = await Promise.all([(0, import_promises2.lstat)((0, import_path2.join)(e, "HEAD")).catch(() => null), (0, import_promises2.lstat)((0, import_path2.join)(e, "objects")).catch(() => null), (0, import_promises2.stat)(e).then((y) => y, (y) => (0, import_chunk_jv7av99m.J)(y) ? null : void 0)]);
    if (E === null) return r("gone", "the repository root is gone");
    if (E === void 0) return r("unvettable", "the repository root cannot be stat'd");
    if (k === null || !k.isFile() || _ === null || !_.isDirectory()) return r("not-a-repository", "no .git, and the root is not a bare git directory");
    u = e, m = [E.uid];
  } else if (c === "link" && n === "vet") {
    let k = await he(l, e);
    if ("refused" in k) return r("unvettable", `.git is a link whose text ${k.refused}`);
    let _ = k.text, E = (0, import_chunk_2172r9j8.gp)((0, import_path2.resolve)(e, _)), y = (0, import_chunk_2172r9j8.gp)((0, import_path2.normalize)(e));
    if (await (0, import_chunk_2172r9j8.f8)(E, E.startsWith(y + import_path2.sep) ? y : void 0) !== "clear") return r("unvettable", ".git is a link whose target is missing, goes through another link, or cannot be probed");
    let [P, C, z, U] = await Promise.all([(0, import_promises2.lstat)(E).catch(() => null), (0, import_promises2.lstat)((0, import_path2.join)(E, "HEAD")).catch(() => null), (0, import_promises2.lstat)((0, import_path2.join)(E, "objects")).catch(() => null), (0, import_promises2.stat)(e).then((D) => D, (D) => (0, import_chunk_jv7av99m.J)(D) ? null : void 0)]);
    if (U === null) return r("gone", "the repository root is gone");
    if (U === void 0) return r("unvettable", "the repository root cannot be stat'd");
    if (P === null || !P.isDirectory() || C === null || !C.isFile() || z === null || !z.isDirectory()) return r("unvettable", ".git is a link to something other than a git directory");
    u = E, m = [P.uid, U.uid];
  } else return r("unvettable", ".git is a link, a mount point, or cannot be probed");
  if (await a((0, import_path2.join)(u, "commondir")) !== "missing") return r("unvettable", `${u}/commondir exists, which git never writes into a main git dir`);
  let f = i || !m.every(Pt) ? await Tt(e, u, o) : null;
  if (f !== null) return r("unvettable", f);
  let g = (0, import_path2.join)(u, "worktrees"), b = await (0, import_chunk_2172r9j8.f8)(g, e), v = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
  if (b === "missing") return { gitDir: u, vetted: v, refused: p };
  let h = b === "clear" ? await (0, import_promises2.readdir)(g, { encoding: "buffer" }).catch(() => null) : null;
  if (h === null) return r("unvettable", `${g} is a link or cannot be read`);
  for (let k of h) {
    let _ = xe(k);
    if (_ === null) {
      let S = (0, import_path2.join)(g, `<${k.toString("hex")}>`), P = "has a name this check and git would read differently";
      p.set(S, "has a name this check and git would read differently"), (0, import_chunk_w578pjby.t)(`Refused worktree admin entry ${S}: has a name this check and git would read differently`, { level: "warn" });
      continue;
    }
    let E = (0, import_path2.join)(g, _), y = await _t(E, e, a, i);
    if (y === "missing") continue;
    if (y === null) continue;
    if (typeof y === "object") v.set(E, y.worktree);
    else p.set(E, y), (0, import_chunk_w578pjby.t)(`Refused worktree admin entry ${E}: ${y}`, { level: "warn" });
  }
  return { gitDir: u, vetted: v, refused: p };
}
async function ne(e) {
  for (let n of ["objects", "config", "packed-refs", "hooks", "worktrees"]) if (await e(n).catch(() => "unchecked") !== null) return true;
  return false;
}
async function _t(e, n, o, r) {
  let i = await (0, import_chunk_2172r9j8.f8)(e, n);
  if (i === "missing") return "missing";
  if (i !== "clear") return "is a link, a mount point, or cannot be probed";
  let a = await (0, import_promises2.lstat)(e).then((p) => p, (p) => (0, import_chunk_jv7av99m.J)(p) ? null : void 0);
  if (a === void 0) return "cannot be probed";
  if (a === null) return "missing";
  if (a.isSymbolicLink()) return "became a link";
  if (!a.isDirectory()) return r ? "is not a directory" : null;
  let l = await At(e, o, r ? 1 / 0 : 1);
  if (l !== null) return l;
  if (await ne((p) => (0, import_promises2.lstat)((0, import_path2.join)(e, p)).catch((h) => {
    if ((0, import_chunk_jv7av99m.J)(h)) return null;
    throw h;
  }))) return "holds a git directory's own files (objects, config, packed-refs, hooks or worktrees), or could not be checked for them";
  let c = (0, import_path2.join)(e, "gitdir"), u = await (0, import_promises2.lstat)(c).then((p) => p, (p) => (0, import_chunk_jv7av99m.J)(p) ? null : void 0);
  if (u === void 0) return "gitdir cannot be probed";
  if (u === null) return await o(c) === "missing" ? { worktree: null } : "gitdir is absent to lstat but not to the probe (a shortcut beside it, or a race)";
  if (!u.isFile()) return "gitdir is not a regular file";
  if (u.size > Oe) return "gitdir is larger than any git writes";
  let m = await (0, import_chunk_w5s307zm.$M)(c, Oe, { noFollow: true }).catch(() => null);
  if (m === null) return "gitdir cannot be read";
  let f = m.replace(/[\r\n]+$/, "");
  if (f === "") return { worktree: null };
  let g = fe(f, n, r);
  if (g !== null) return g;
  let b, v;
  if ((0, import_path2.isAbsolute)(f)) {
    let p = (0, import_path2.normalize)(f), h = (0, import_chunk_2172r9j8.gp)((0, import_path2.normalize)(n));
    b = [p];
    let k = (y, S) => r && S === 0 ? y.toLowerCase() : y, _ = p.split(import_path2.sep), E = h.split(import_path2.sep);
    v = _.length > E.length && E.every((y, S) => k(y, S) === k(_[S] ?? "", S)) ? _.slice(0, E.length).join(import_path2.sep) : void 0;
  } else {
    let p = await (0, import_promises2.realpath)(n).catch(() => null);
    if (p === null) return "the repository root does not resolve";
    v = p;
    let h = (0, import_chunk_2172r9j8.gp)((0, import_path2.normalize)(n)), k = e.startsWith(h + import_path2.sep) ? (0, import_path2.join)(p, (0, import_path2.relative)(n, e)) : e;
    b = [(0, import_path2.resolve)(k, f), (0, import_path2.resolve)(p, f)];
  }
  for (let p of b) {
    if ((0, import_chunk_z6pfqf6e.fa)(p, v ?? n)) return "gitdir names another host";
    let h = await (0, import_chunk_2172r9j8.f8)((0, import_path2.dirname)(p), v);
    if (h === "link" || h === "unknown") return "gitdir walks through a link, or a component cannot be probed";
    if (h === "clear") {
      let k = await o(p);
      if (k === "link" || k === "unknown") return "gitdir names a link, or one that cannot be probed";
    }
  }
  return { worktree: b[0] ?? null };
}
async function Tt(e, n, o) {
  let r = {};
  for (let u of ["GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM"]) {
    let m = process.env[u];
    if (m !== void 0) r[u] = m;
  }
  let i = await o([...import_chunk_gd77dyw4.Nn, "-C", e, "rev-parse", "--git-dir"], { cwd: e, env: (0, import_chunk_gd77dyw4.ms)({ ...r, ...(0, import_chunk_2yx6c1y2.CRt)() }), timeout: 1e4 }).catch((u) => ((0, import_chunk_w578pjby.t)(`Could not run git to check the ownership of ${n}: ${(0, import_chunk_jv7av99m.d)(u)}`, { level: "error" }), null));
  if (i === null) return `git could not be run to check the ownership of ${n}`;
  if (i.code !== 0) return `git's ownership check for ${n} failed (exit ${i.code}); if another user owns it, it needs a safe.directory entry`;
  let a = i.stdout.trim();
  if (a === "") return `git gave no answer when checking the ownership of ${n}`;
  let [l, c] = await Promise.all([(0, import_promises2.realpath)((0, import_path2.resolve)(e, a)).catch(() => null), (0, import_promises2.realpath)(n).catch(() => null)]);
  return l !== null && c !== null && (0, import_chunk_2172r9j8.gp)(l) === (0, import_chunk_2172r9j8.gp)(c) ? null : `git's ownership check did not name ${n}`;
}
function Pt(e) {
  let n = process.geteuid?.();
  if (n === void 0 || e === n) return true;
  if (n !== 0) return false;
  let o = import_chunk_c203g5kd.s.SUDO_UID;
  return e === 0 || o !== void 0 && e === o;
}
function fe(e, n, o) {
  if (e.includes("\uFFFD") || new RegExp("\\p{Cc}", "u").test(e) || /^[A-Za-z]:(?![\\/])/.test(e)) return "gitdir holds bytes git would read differently";
  let r = o ? /[\\/]+/ : /\/+/;
  if (o && e.split(r).some((i) => i !== "." && i !== ".." && /[. ]$/.test(i))) return "gitdir holds a component ending in a dot or space";
  if (!(0, import_path2.isAbsolute)(e)) {
    let i = e.split(r), a = i.findIndex((c) => c !== "..");
    return (a < 0 ? [] : i.slice(a)).some((c) => c === "" || c === "." || c === "..") ? "gitdir is a relative value git would not write" : null;
  }
  if (e.split(r).some((i) => i === "." || i === "..")) return "gitdir holds a dot segment git would not write";
  if (!(0, import_chunk_2172r9j8.YVn)(e)) return "gitdir is rooted without a drive or a host";
  if ((0, import_chunk_z6pfqf6e.fa)(e, n)) return "gitdir names another host";
  return r.test(e.slice(-1)) ? "gitdir ends in a separator git would not write" : null;
}
async function he(e, n) {
  let o = await (0, import_promises2.readlink)(e, { encoding: "buffer" }).then((a) => {
    let l = a.toString("utf-8");
    return l.includes("\0") || !Buffer.from(l, "utf-8").equals(a) ? null : l;
  }, () => null);
  if (o === null) return { refused: "cannot be read" };
  if (/[\p{Cc}\uFFFD]/u.test(o)) return { refused: "holds a control character or U+FFFD" };
  if ((0, import_chunk_z6pfqf6e.fa)(o, n)) return { refused: "names another host" };
  let r = (0, import_chunk_cg8dqz0a.x)() === "windows", i = r ? /[\\/]+/ : /\/+/;
  if (o === "" || i.test(o.slice(-1)) || o.split(i).some((a) => a === "." || a === "..") || (0, import_path2.isAbsolute)(o) && !(0, import_chunk_2172r9j8.YVn)(o) || r && /^[A-Za-z]:(?![\\/])/.test(o)) return { refused: "is empty, ends in a separator, holds a dot segment, or is rooted or drive-relative in a way git would read differently" };
  return { text: o };
}
function xe(e) {
  let n = e.toString("utf8");
  return !n.includes("\uFFFD") && !new RegExp("\\p{Cc}", "u").test(n) && !((0, import_chunk_cg8dqz0a.x)() === "windows" && /[. ]$/.test(n)) && Buffer.from(n, "utf8").equals(e) ? n : null;
}
async function At(e, n, o) {
  let r = (0, import_chunk_cg8dqz0a.x)() === "windows", i = Et, a = async (l, c) => {
    let u = await (0, import_promises2.readdir)(l, { encoding: "buffer" }).catch(() => null);
    if (u === null) return `${l} cannot be read`;
    for (let m of u) {
      if (--i < 0) return "holds more files than any entry git writes";
      let f = xe(m);
      if (f === null) return `${l} holds a name that is not valid UTF-8`;
      if (r && f.toLowerCase().endsWith(".lnk")) return `${(0, import_path2.join)(l, f)} is named as a shortcut, which git never writes here`;
      let g = (0, import_path2.join)(l, f), b = await (0, import_promises2.lstat)(g).catch(() => null);
      if (b === null) return `${g} cannot be probed`;
      let v = r && b.isDirectory() ? await (0, import_chunk_2172r9j8.f8)(g, l) : await n(g);
      if (v === "link" || v === "unknown") return `${g} is a link or cannot be probed`;
      if (b.isDirectory() && c > 1) {
        let p = await a(g, c - 1);
        if (p !== null) return p;
      }
    }
    return null;
  };
  return a(e, o);
}
var je = 65536, Ue = 65536, Rt = "bot_protected_tengu_drifting_zephyr", pe = (0, import_chunk_t57w17k7.de)({ afterMatch: null, beforeMutation: null }, (e) => {
  e.afterMatch = null, e.beforeMutation = null;
});
async function x_i(e) {
  let n = await Otn(e, { dotGitLink: "vet" });
  if ("skipped" in n) return null;
  let o = await WSt(e, n.gitDir);
  if ("refused" in o) return (0, import_chunk_w578pjby.t)(`Could not vet the worktree registrations of ${e}: ${o.refused}`, { level: "warn" }), null;
  return o.gitDir;
}
async function WSt(e, n) {
  let o = q(e), r = q(n);
  if (r === o) return await (0, import_promises.lstat)((0, import_path.join)(o, ".git")).then(() => true, (l) => !(0, import_chunk_jv7av99m.J)(l)) ? { refused: `the repository's .git is a link to its own root, ${o}, which cannot be used as a git directory safely` } : Ce(o, "");
  if (r === q((0, import_path.join)(e, ".git"))) return Ce(o, ".git");
  let i = await Ot(r, o);
  return i === "elsewhere" ? { gitDir: r } : { refused: i === "inside" ? `the repository's .git is a link to ${r}, inside its own working tree, which cannot be opened safely` : `the repository's .git is a link to ${r}, which could not be checked against the working tree` };
}
async function Ce(e, n) {
  let o = await (0, import_promises.realpath)(e).catch(() => null);
  return o === null ? { refused: `${e} could not be resolved` } : { gitDir: (0, import_path.join)(o, n) };
}
function q(e) {
  let n = (0, import_path.normalize)(e);
  return (0, import_path.parse)(n).root === n ? n : (0, import_chunk_2172r9j8.gp)(n);
}
async function Ot(e, n) {
  if (ve((0, import_chunk_2172r9j8.a3)(e), (0, import_chunk_2172r9j8.a3)(n))) return "inside";
  let o = await (0, import_promises.stat)(n, { bigint: true }).catch(() => null);
  if (o === null) return "unknown";
  for (let r = e; ; r = (0, import_path.dirname)(r)) {
    let i = await (0, import_promises.lstat)(r, { bigint: true }).catch(() => null);
    if (i === null) return "unknown";
    if (i.dev === o.dev && i.ino === o.ino) return "inside";
    if ((0, import_path.dirname)(r) === r) return "elsewhere";
  }
}
async function Ke(e) {
  let n = q(e), o = await (0, import_promises.realpath)(n).catch(() => null);
  return { root: n, tops: [n, o].filter((r) => r !== null) };
}
async function Nt(e, n) {
  let o = /* @__PURE__ */ new Set(), r = [], { root: i, tops: a } = await Ke(n);
  for (let l of e) {
    let c = (0, import_chunk_2172r9j8.gp)((0, import_path.normalize)(l));
    if (o.add((0, import_path.join)(c, ".git")), (0, import_chunk_z6pfqf6e.fa)(c, i)) continue;
    let u = (0, import_path.dirname)(c), m = await Ft(u, Ve(u, a));
    if ("refused" in m) {
      r.push(`${c}: ${m.refused}`);
      continue;
    }
    o.add((0, import_path.join)(m.resolved, (0, import_path.basename)(c), ".git"));
  }
  return { gitdirs: o, unresolved: r, tops: a };
}
var De = 16;
async function Ft(e, n) {
  let o = e, r = n;
  for (let i = 0; i <= De; i++) {
    let a = o === r ? { verdict: "clear", at: void 0 } : await (0, import_chunk_2172r9j8.Y7i)(o, r);
    if (a.verdict === "clear" || a.verdict === "missing") {
      if (r === void 0) return { resolved: o };
      let u = await (0, import_promises.realpath)(r).catch(() => null);
      return u === null ? { refused: `${r} could not be resolved` } : { resolved: (0, import_path.join)(u, (0, import_path.relative)(r, o)) };
    }
    if (a.verdict !== "link" || a.at === void 0) return { refused: `a component of ${o} cannot be probed` };
    let l = await he(a.at, (0, import_path.dirname)(a.at));
    if ("refused" in l) return { refused: `the text of the link ${a.at} ${l.refused}` };
    let c = (0, import_path.resolve)((0, import_path.dirname)(a.at), l.text);
    if (o = (0, import_path.join)(c, (0, import_path.relative)(a.at, o)), r !== void 0 && !ve(c, r)) r = void 0;
  }
  return { refused: `more than ${De} links lead to ${e}` };
}
function ve(e, n) {
  return e === n || e.startsWith(n.endsWith(import_path.sep) ? n : n + import_path.sep);
}
function Ye(e, n) {
  let o = e.replace(/[\r\n]+$/, "");
  if (o === "" || fe(o, n, (0, import_chunk_cg8dqz0a.x)() === "windows") !== null || (0, import_chunk_z6pfqf6e.fa)(o, n)) return null;
  let r = (0, import_path.normalize)((0, import_path.isAbsolute)(o) ? o : (0, import_path.resolve)(n, o));
  return (0, import_path.basename)(r) === ".git" && (0, import_chunk_2172r9j8.YVn)(r) ? r : null;
}
function Ve(e, n) {
  let o;
  for (let r of n) for (let i = r; ; i = (0, import_path.dirname)(i)) {
    if (ve(e, i)) {
      if (o === void 0 || i.length > o.length) o = i;
      break;
    }
    if ((0, import_path.dirname)(i) === i) break;
  }
  return o;
}
async function ze(e, n, o) {
  let r = o?.tops ?? (await Ke(n.repoSpelled)).tops;
  return await (0, import_chunk_2172r9j8.f8)(e, Ve((0, import_path.dirname)(e), r)) === "missing";
}
function Xe(e) {
  return e !== "" && e !== "." && e !== ".." && !/[\\/\p{Cc}\uFFFD]/u.test(e);
}
function Ze(e) {
  let n = /* @__PURE__ */ new Set();
  for (let o of e) {
    let r = (0, import_path.basename)((0, import_chunk_2172r9j8.gp)((0, import_path.normalize)(o)));
    for (let i of [xt(r), r]) {
      if (i === "") continue;
      n.add(i);
      for (let a = 1; a <= 99; a++) n.add(`${i}${a}`);
    }
  }
  return [...n];
}
function xt(e) {
  let n = "";
  for (let o = 0; o < e.length; o++) {
    let r = e[o], i = r.charCodeAt(0);
    if (r === "." && (o === 0 || e[o - 1] === ".")) n += o === 0 ? "-" : "";
    else if (r === "{" && e[o - 1] === "@") n += "-";
    else if (i < 32 || i === 127 || " :?[\\^~*".includes(r)) n += "-";
    else n += r;
  }
  while (n.endsWith(".lock")) n = n.slice(0, -5);
  return n;
}
async function Lt() {
  let [e, n] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-s69qvmrf.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-0xmafpjw.js")))]);
  return { ...e, host: n.createDeviceTreeHost() };
}
async function qe(e, n) {
  let o = await Lt().catch((c) => ({ failed: (0, import_chunk_jv7av99m.d)(c) }));
  if ("failed" in o) return { unavailable: `its module did not load: ${o.failed}`, modules: null };
  let r = await (0, import_promises.realpath)(q(n)).catch(() => null), i = r !== null && (0, import_path.parse)(r).root !== r && e === (0, import_path.join)(r, ".git"), a = i ? r : e, l = await (i || (0, import_path.parse)(e).root === e ? o.openTreeAnchor(o.host, { gitRoot: a, realRoot: a }) : o.openTreeAnchorAtName(o.host, e)).catch((c) => ({ unavailable: (0, import_chunk_jv7av99m.d)(c) }));
  if ("unavailable" in l) return { unavailable: l.unavailable, modules: o };
  if (!i) return l;
  try {
    let c = await l.anchorBeneath(".git"), u = await c.lstat("").catch(() => null);
    if (u === null || u.ino === 0n) return await c.close().catch(() => {
    }), { refused: u === null ? `${e}: its file id could not be read once it was opened` : `${e} is on a volume that reports no file ids` };
    return c;
  } catch (c) {
    return { refused: `could not open ${e} from ${a} without following a link: ${(0, import_chunk_jv7av99m.d)(c)}` };
  } finally {
    await l.close().catch(() => {
    });
  }
}
async function Je(e, n, o) {
  let r = await e.open(n, import_fs.constants.O_RDONLY | import_fs.constants.O_NONBLOCK).catch((i) => (0, import_chunk_jv7av99m.w)(i) ?? "EIO");
  if (typeof r === "string") {
    if (r !== "ENOENT") return { unread: ye(r) };
    let i = await e.lstat(n).then(() => "present", (a) => (0, import_chunk_jv7av99m.w)(a) ?? "EIO");
    return i === "ENOENT" ? "absent" : { unread: i === "present" ? "could not be opened where the held folder has it" : ye(i) };
  }
  try {
    let i = await r.stat({ bigint: true });
    if (e.backend === "darwin_at") {
      let l = await e.lstat(n);
      if (i.dev !== l.dev || i.ino !== l.ino) return { unread: "was replaced as it was opened" };
    }
    if (!i.isFile()) return { unread: "is not a regular file" };
    let a = await ke(r, o);
    return a === null ? { unread: "is larger than git writes" } : { text: a };
  } catch {
    return { unread: "could not be read" };
  } finally {
    await r.close().catch(() => {
    });
  }
}
async function ke(e, n) {
  let o = Buffer.alloc(n + 1), r = 0;
  for (; ; ) {
    let { bytesRead: i } = await e.read(o, r, o.length - r, r);
    if (i === 0) break;
    if (r += i, r > n) return null;
  }
  return o.subarray(0, r).toString("utf-8");
}
function Ee(e) {
  return typeof e.worktreePath === "string" ? [e.worktreePath] : e.worktreePath;
}
async function $e(e) {
  return "worktreePath" in e ? Nt(Ee(e), e.repoSpelled) : null;
}
function L(e, n) {
  e.unchecked++, e.kinds.add(n);
}
function ye(e) {
  return e === "ELOOP" ? "is a link" : e === "EISDIR" ? "is not a regular file" : "could not be opened";
}
function Qe(e) {
  return e.replace(/[\r\n]+$/, "") === "";
}
function _e(e, n, o) {
  let r = (0, import_path.join)(e, "worktrees"), { unchecked: i, kinds: a } = o, l = [...n === null || n.unresolved.length === 0 ? [] : [`a folder on the way to the worktree could not be resolved safely (${n.unresolved.join("; ")}), so a registration recorded under its resolved path could not be matched`], ...o.guessed ? [`${r} cannot be listed here without following links, so only the names git would have given this worktree were checked, and a registration under another name may remain`] : [], ...i === 0 ? [] : [o.guessed ? `some of the names tried in ${r} could not be checked (${[...a].join(", ")}), so one of them may still register this worktree` : `${i === 1 ? "one entry" : `${i} entries`} in ${r} could not be checked (${[...a].join(", ")}), so ${i === 1 ? "it" : "one of them"} may still register this worktree`]];
  return l.length === 0 ? { outcome: "none" } : { unmatched: l.join("; ") };
}
function et(e, n) {
  return n === null || (0, import_chunk_2172r9j8.qVn)(Be(e), [...n.gitdirs].map(Be));
}
function Be(e) {
  return (0, import_chunk_cg8dqz0a.x)() === "windows" ? e.replace(/^[a-z](?=:)/, (n) => n.toUpperCase()) : e;
}
async function tt(e, n, o, r) {
  let i = { guessed: false, unchecked: 0, kinds: /* @__PURE__ */ new Set() }, a = "entryId" in o ? [o.entryId] : await e.list("worktrees").catch((l) => {
    if ((0, import_chunk_jv7av99m.J)(l)) return [];
    if ((0, import_chunk_jv7av99m.w)(l) === "WORKING_LIST_UNSUPPORTED") return i.guessed = true, Ze(Ee(o));
    throw l;
  });
  for (let l of a) {
    if (!Xe(l)) {
      if (!i.guessed) L(i, "an entry name this check cannot read exactly");
      continue;
    }
    let c = `worktrees/${l}`, u = await e.lstat(c).catch((b) => (0, import_chunk_jv7av99m.J)(b) ? null : void 0);
    if (u === void 0) {
      L(i, "an entry that could not be inspected");
      continue;
    }
    if (u === null || !u.isDirectory()) {
      if (u?.isSymbolicLink()) L(i, "an entry that is a link");
      else if (u !== null && (0, import_chunk_cg8dqz0a.x)() === "windows") L(i, "an entry that is not a folder");
      continue;
    }
    let m = await Je(e, `${c}/gitdir`, je);
    if (m === "absent") continue;
    if ("unread" in m) {
      L(i, `a gitdir file that ${m.unread}`);
      continue;
    }
    let f = Ye(m.text, (0, import_path.join)(n, "worktrees", l));
    if (f === null && !Qe(m.text)) L(i, "a gitdir file whose path could not be checked safely");
    if (f === null || !et(f, r)) continue;
    let g = await e.lstat(`${c}/locked`).then(() => true, (b) => !(0, import_chunk_jv7av99m.J)(b));
    return { entryId: l, locked: g, recordedGitdir: f, rel: c, identity: { dev: u.dev, ino: u.ino } };
  }
  return i;
}
async function Te(e, n) {
  return Gt(e, n).catch((o) => ({ unavailable: (0, import_chunk_jv7av99m.d)(o) }));
}
async function Gt(e, n) {
  let o = await qe(e, n.repoSpelled);
  if ("refused" in o) return { unavailable: o.refused };
  if ("unavailable" in o) return { unavailable: o.unavailable };
  try {
    let r = await $e(n), i = await tt(o, e, n, r);
    if ("unchecked" in i) {
      let a = _e(e, r, i);
      return "unmatched" in a ? { unavailable: a.unmatched } : null;
    }
    return { entryId: i.entryId, locked: i.locked, recordedGitdir: i.recordedGitdir };
  } finally {
    await o.close().catch(() => {
    });
  }
}
async function V3e(e, n, o) {
  return Ct(e, n, o).catch((r) => I(e, (0, import_chunk_jv7av99m.d)(r)));
}
async function Ct(e, n, o) {
  let r = await qe(e, n.repoSpelled);
  if ("refused" in r) return I(e, r.refused);
  if ("unavailable" in r) {
    let { modules: i } = r;
    return r.unavailable === "no_ffi" && i !== null && i.host.platform() === "macos" ? Vt(e, n, o, await i.darwinNoFollowAnyEnforced(i.host)) : I(e, `this build cannot open files here without following links (${r.unavailable})`);
  }
  try {
    let i = await $e(n), a = await tt(r, e, n, i);
    if ("unchecked" in a) {
      let u = _e(e, i, a);
      return "unmatched" in u ? I(e, u.unmatched) : u;
    }
    if (!await ze(a.recordedGitdir, n, i)) return I(e, `could not confirm the worktree is gone: ${a.recordedGitdir} exists, or a link or unreadable folder is on the way to it`);
    await pe.afterMatch?.(a.entryId);
    let l = async () => {
      let u = await r.lstat(a.rel).catch(() => null);
      return u !== null && ie(u, a.identity);
    };
    if (!await l()) return I(e, `worktrees/${a.entryId} changed since it was read, or this volume cannot show it is the same folder`);
    if (await Me(r, a.rel)) return I(e, `${nt(a.entryId)}, so nothing in it was removed`);
    if (a.locked) {
      if (!await Yt(r, a.rel, o.locked)) return I(e, `worktrees/${a.entryId} is locked`);
    }
    if (await pe.beforeMutation?.(a.entryId), await r.unlink(`${a.rel}/gitdir`), !await l()) return { outcome: "dropped", entryId: a.entryId, adminRemoved: false };
    if (await Me(r, a.rel)) return (0, import_chunk_w578pjby.t)(`Dropped the registration worktrees/${a.entryId} in ${e} (git no longer lists it) but left its folder, which now has a git directory's own files (objects, config, packed-refs, hooks or worktrees) in it, or could not be checked for them. git's next \`git worktree prune\` or \`git gc\` deletes that folder whole; move out anything you need first.`, { level: "warn" }), { outcome: "dropped", entryId: a.entryId, adminRemoved: false };
    let c = await Mt(r, a.rel, a.identity);
    if (!(0, import_chunk_sghy0qej.Pe)(Rt, { safe: true })) await r.rmdir("worktrees").catch(() => {
    });
    return { outcome: "dropped", entryId: a.entryId, adminRemoved: c };
  } catch (i) {
    return I(e, (0, import_chunk_jv7av99m.d)(i));
  } finally {
    await r.close().catch(() => {
    });
  }
}
async function uFt(e, n, o = { locked: "keep" }) {
  let r = await x_i(e);
  return r === null ? I(e, 'the repository could not be vetted (see the "Could not vet the worktree registrations" line above)') : V3e(r, { worktreePath: n, repoSpelled: e }, o);
}
function I(e, n) {
  return (0, import_chunk_w578pjby.t)(`Left a git worktree registration in ${e} in place: ${n}`, { level: "warn" }), { outcome: "kept", reason: n };
}
var Dt = ["logs/HEAD", "HEAD", "ORIG_HEAD", "FETCH_HEAD", "AUTO_MERGE", "MERGE_HEAD", "MERGE_MSG", "MERGE_RR", "MERGE_AUTOSTASH", "MERGE_MODE", "SQUASH_MSG", "COMMIT_EDITMSG", "REBASE_HEAD", "CHERRY_PICK_HEAD", "REVERT_HEAD", "BISECT_LOG", "BISECT_START", "BISECT_TERMS", "BISECT_NAMES", "BISECT_EXPECTED_REV", "BISECT_ANCESTORS_OK", "BISECT_RUN", "BISECT_FIRST_PARENT", "BISECT_HEAD", "index", "index.lock", "commondir", "locked", "config.worktree", "info/sparse-checkout", "CLAUDE_BASE"], Bt = ["refs/bisect", "refs/worktree", "refs/rewritten", "refs", "logs", "info", import_chunk_tap4sdsz.Qq];
function Me(e, n) {
  return ne((o) => e.lstat(`${n}/${o}`).catch((r) => {
    if ((0, import_chunk_jv7av99m.J)(r)) return null;
    throw r;
  }));
}
function nt(e) {
  return `worktrees/${e} has a git directory's own files (objects, config, packed-refs, hooks or worktrees) in it, or could not be checked for them`;
}
async function Mt(e, n, o) {
  return await Ae(e, n, o), e.rmdir(n).then(() => true, (r) => ((0, import_chunk_w578pjby.t)(`Dropped the registration ${n} but left its folder: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "warn" }), false));
}
function ie(e, n) {
  return e.isDirectory() && e.dev !== 0n && !(0, import_chunk_kpby9tcv.ia)(e.ino) && e.dev === n.dev && e.ino === n.ino;
}
async function Ae(e, n, o) {
  for (let r of Dt) await e.unlink(`${n}/${r}`).catch(() => {
  });
  await Kt(e, n, o);
  for (let r of Bt) await e.rmdir(`${n}/${r}`).catch(() => {
  });
}
var Wt = /^(?:tables\.list(?:\.lock)?|0x[0-9a-f]{12,16}-0x[0-9a-f]{12,16}-[0-9a-f]{8}\.(?:(?:ref|log)(?:\.lock)?|temp\.[A-Za-z0-9]{6}))$/, jt = 1024, Ut = "refs/heads", we = "reftable";
async function Kt(e, n, o) {
  let r = await Promise.resolve().then(() => e.anchorBeneath(n)).catch(() => null);
  if (r === null) return;
  try {
    let i = await r.lstat("").catch(() => null);
    if (i === null || !ie(i, o)) return;
    let a = await r.anchorBeneath(we).catch(() => null);
    if (a === null) return;
    try {
      let [l, c] = await Promise.all([a.lstat("").catch(() => null), e.lstat(we).catch(() => null)]);
      if (l === null || c === null || !l.isDirectory() || !c.isDirectory() || l.dev === c.dev && l.ino === c.ino) return;
      let u = await a.list("", jt).catch((m) => (0, import_chunk_jv7av99m.w)(m) === "WORKING_LIST_UNSUPPORTED" ? a.list("").catch(() => null) : null);
      if (u === null) return;
      for (let m of u) if (Wt.test(m)) await a.unlink(m).catch(() => {
      });
    } finally {
      await a.close().catch(() => {
      });
    }
    await r.unlink(Ut).catch(() => {
    }), await r.rmdir(we).catch(() => {
    });
  } finally {
    await r.close().catch(() => {
    });
  }
}
async function Yt(e, n, o) {
  if (o === "drop") return true;
  if (o === "keep") return false;
  let r = await Je(e, `${n}/locked`, Ue);
  if (r === "absent" || "unread" in r || !o.unlockIf(r.text.replace(/[\r\n]+$/, ""))) return false;
  return await e.unlink(`${n}/locked`), true;
}
async function Vt(e, n, o, r) {
  if (!r) return I(e, "this macOS version does not enforce O_NOFOLLOW_ANY, so links cannot be refused");
  let i = await $e(n), a = "entryId" in n ? [n.entryId] : Ze(Ee(n)), l = { guessed: !("entryId" in n), unchecked: 0, kinds: /* @__PURE__ */ new Set() }, c = import_fs.constants.O_NONBLOCK | import_chunk_jxja0v0z.oC | import_chunk_jxja0v0z.cr;
  for (let m of a) {
    if (!Xe(m)) {
      if (!l.guessed) L(l, "an entry name this check cannot read exactly");
      continue;
    }
    let f = (0, import_path.join)(e, "worktrees", m), g = await (0, import_promises.open)((0, import_path.join)(f, "gitdir"), import_fs.constants.O_RDWR | c).catch((b) => (0, import_chunk_jv7av99m.w)(b) ?? "EIO");
    if (typeof g === "string") {
      if (g !== "ENOENT" && g !== "ENOTDIR") L(l, g === "ELOOP" ? "a gitdir file that is a link, or a link on the way to it" : `a gitdir file that ${ye(g)}`);
      continue;
    }
    try {
      let b = await g.stat();
      if (!b.isFile() || b.nlink !== 1) {
        L(l, !b.isFile() ? "a gitdir file that is not a regular file" : b.nlink > 1 ? "a gitdir file with more than one name" : "a gitdir file that was removed after it was opened");
        continue;
      }
      let v = await ke(g, je), p = v === null ? null : Ye(v, f);
      if (v === null) L(l, "a gitdir file that is larger than git writes");
      else if (p === null && !Qe(v)) L(l, "a gitdir file whose path could not be checked safely");
      if (p === null || !et(p, i)) continue;
      let h = await (0, import_promises.open)((0, import_path.join)(f, "locked"), import_fs.constants.O_RDONLY | c).catch((k) => (0, import_chunk_jv7av99m.J)(k) ? null : void 0);
      if (h !== null) {
        let k = await h?.stat().catch(() => null), _ = h !== void 0 && k?.isFile() === true ? await ke(h, Ue).catch(() => null) : null;
        if (await h?.close().catch(() => {
        }), _ === null || o.locked === "keep" || o.locked !== "drop" && !o.locked.unlockIf(_.replace(/[\r\n]+$/, ""))) return I(e, `worktrees/${m} is locked`);
      }
      if (!await ze(p, n, i)) return I(e, `could not confirm the worktree is gone: ${p} exists, or a link or unreadable folder is on the way to it`);
      if (await ne(async (k) => {
        let _ = await (0, import_promises.open)((0, import_path.join)(f, k), import_fs.constants.O_RDONLY | c).catch((E) => {
          if ((0, import_chunk_jv7av99m.J)(E)) return null;
          throw E;
        });
        if (_ === null) return null;
        try {
          return await _.stat();
        } finally {
          await _.close().catch(() => {
          });
        }
      })) return I(e, `${nt(m)}, so nothing in it was changed`);
      return await pe.beforeMutation?.(m), await g.truncate(0), { outcome: "dropped", entryId: m, adminRemoved: false };
    } catch (b) {
      return I(e, (0, import_chunk_jv7av99m.d)(b));
    } finally {
      await g.close().catch(() => {
      });
    }
  }
  let u = _e(e, i, l);
  return "unmatched" in u ? I(e, u.unmatched) : u;
}
var Qt = 65536, en = 3, rt = null;
function tn() {
  return rt ??= Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-s69qvmrf.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-0xmafpjw.js")))]).then(([e, n]) => ({ tree: e, host: n.createDeviceTreeHost() })).catch((e) => {
    throw rt = null, e;
  });
}
function nn() {
  return (0, import_chunk_cg8dqz0a.x)() === "windows" ? import_fs2.constants.O_RDONLY : import_fs2.constants.O_RDONLY | import_fs2.constants.O_NONBLOCK;
}
async function Itn(e, n, { forceTwice: o = false, git: r, trustedRoot: i, resolveAboveParent: a = false, deregisterIfStopped: l = false, pointerFirst: c = false } = {}) {
  let u = await gt(i === void 0 ? [e] : [e, i], n, { parentLinkToRoot: a });
  if (u === null) return { outcome: "refused", reason: `${n} has no parent directory` };
  if ("refused" in u) return { outcome: "refused", reason: u.refused };
  let { base: m, rel: f, underRoot: g } = u, b = r ?? await cn(e);
  if ("why" in b) return { outcome: "refused", reason: `the repository's git directory failed its safety checks (${b.why})` };
  let v = b.dir, p = await j(m, g ? "root" : a ? "not_a_link" : "canonical");
  if (!("held" in p)) return p.outcome === "unanchored" ? p : { outcome: "refused", reason: p.reason };
  let { held: h, realBase: k } = p;
  try {
    let _ = await h.lstat(f).then((T) => T.isDirectory(), () => false);
    if (_ && await h.list(f).then(() => false, (T) => Ie(T))) return { outcome: "unanchored", reason: "no_descriptor_listing" };
    let E = g || a ? [n, (0, import_path3.join)(k, ...f.split("/"))] : [n], y = await Te(v, { worktreePath: E, repoSpelled: b.root });
    if (_ && y !== null && !("unavailable" in y)) {
      let T = await gn(h, f, [n, (0, import_path3.join)(k, ...f.split("/"))], e, v);
      if (T !== null && T !== y.entryId) {
        let X = await Te(v, { entryId: T, worktreePath: E, repoSpelled: b.root });
        if (X !== null && !("unavailable" in X)) y = X;
      }
    }
    if (y !== null && "unavailable" in y) return { outcome: "refused", reason: `git's records of worktrees in ${v} could not be checked safely (${y.unavailable})` };
    if (y === null) return { outcome: "not_registered" };
    if (!g && !ft(y.recordedGitdir, [n, (0, import_path3.join)(k, ...f.split("/"))].map((T) => (0, import_path3.join)((0, import_path3.normalize)(T), ".git")))) return { outcome: "refused", reason: `the folder holding ${n} resolved to a different place while it was being checked (a link may have been swapped in)` };
    if (y.locked && !o) return { outcome: "locked" };
    let S = o ? "drop" : "keep", P = await h.lstat(f).then((T) => T, (T) => ({ error: T }));
    if ("error" in P && (0, import_chunk_jv7av99m.J)(P.error) && await h.lstat(rn(f)).then((T) => T.isDirectory(), () => false)) return at(n, await V3e(v, { entryId: y.entryId, repoSpelled: b.root }, { locked: S }), v, y.entryId);
    if ("error" in P || !P.isDirectory()) return { outcome: "refused", reason: "error" in P && (0, import_chunk_jv7av99m.J)(P.error) ? `the directory holding ${n} is missing` : `${n} is not a directory reachable without a link (${"error" in P ? (0, import_chunk_jv7av99m.w)(P.error) ?? "unknown error" : "not a directory"})` };
    let C = await pt(h, `${f}/.git`);
    if ("error" in C) return { outcome: "refused", reason: `the .git file in ${n} could not be read (${C.error})` };
    if (C.value === null || !await mt(C.value, [n, (0, import_path3.join)(k, ...f.split("/"))], e, v, y.entryId)) return { outcome: "not_pointing_back" };
    let z = l ? await dt(v, y.entryId) : null, U = typeof z === "object" ? z : null, D = { deleted: false };
    try {
      await mn(h, f, C.bytes, D, { pointerFirst: c });
    } catch (T) {
      if (!D.deleted && Ie(T)) return { outcome: "unanchored", reason: "no_descriptor_listing" };
      let X = dn(T);
      (0, import_chunk_w578pjby.t)(`Worktree checkout ${n} not fully deleted: ${(0, import_chunk_jv7av99m.d)(T)}`, { level: "warn" });
      let yt = U !== null && D.deleted && await un(v, y.entryId, U, S);
      return { outcome: "delete_failed", reason: X, started: D.deleted, deregistered: yt };
    }
    return at(n, await V3e(v, { entryId: y.entryId, repoSpelled: b.root }, { locked: S }), v, y.entryId);
  } finally {
    await h.close().catch(() => {
    });
  }
}
async function Yos(e, n, { rootIsCanonical: o = false } = {}) {
  let r = n === void 0 ? wt(e) : await gt([n], e);
  if (r === null) throw new import_chunk_jv7av99m.A(`${e} has no parent directory`, "the path to delete has no parent directory");
  if ("refused" in r) throw new import_chunk_jv7av99m.A(r.refused, "the path to delete reaches its root by a spelling that cannot be checked safely");
  let i = await j(r.base, n === void 0 || !r.underRoot ? "not_a_link" : o ? "canonical" : "root");
  if (!("held" in i)) {
    if (i.outcome === "unanchored") return { unanchored: i.reason };
    if (i.absent === true) return "absent";
    throw new import_chunk_jv7av99m.A(`could not open the directory above ${e}: ${i.reason}`, "the directory above the path to delete could not be opened");
  }
  try {
    return await kt(i.held, r.rel) ? "deleted" : "absent";
  } catch (a) {
    if (Ie(a)) return { unanchored: "no_descriptor_listing" };
    throw a;
  } finally {
    await i.held.close().catch(() => {
    });
  }
}
async function j9a(e) {
  let n = await j(e, "root", { holdBase: true }), o = "held" in n || n.outcome === "unanchored" ? n : await j(e, "root");
  if ("held" in o) return o.held;
  if (o.outcome === "refused") throw new import_chunk_jv7av99m.A(o.reason, "the folder could not be opened without following links");
  return { unanchored: o.reason };
}
async function G9a(e, n, o = {}) {
  if (typeof await Yos(e, n, o) === "object") await (0, import_promises3.rm)(e, { recursive: true, force: true });
}
async function z9a(e, n, o) {
  let r = await j(e, "not_a_link", { holdBase: true });
  if (!("held" in r)) throw new import_chunk_jv7av99m.A(r.reason, "the folder could not be opened without following links");
  try {
    await r.held.rename(n, o);
  } finally {
    await r.held.close().catch(() => {
    });
  }
}
function rot(e) {
  switch (e.outcome) {
    case "removed":
      return "removed";
    case "not_registered":
      return "git has no usable record of a worktree at this path; nothing was deleted";
    case "locked":
      return "the worktree is locked (by `git worktree lock`); nothing was deleted. `git worktree unlock <path>` unlocks it";
    case "not_pointing_back":
      return "the worktree's .git file is missing or does not point to git's record of it; nothing was deleted";
    case "refused":
      return `${e.reason}; nothing was deleted`;
    case "delete_failed":
      if (e.reason === ot) return `${ot}; try removing it again once nothing is writing to it`;
      if (e.reason === "WORKING_NAME_NOT_PLAIN") return "it holds a file name that Windows cannot delete this way; some of its other files may already be deleted";
      if (e.reason === "ENOTEMPTY") return "a folder in it could not be emptied: it may be unreadable, or something may still be writing to it; check its permissions and try removing it again";
      if (e.reason === "WORKING_FILE_HELD") return "a program has one of its files open; try removing it again once that program closes it";
      return e.reason === "EBUSY" ? "some of its files could not be deleted: EBUSY; a program may have them open, so try removing it again" : `some of its files could not be deleted: ${e.reason}`;
    case "registration_kept":
      return `its files were deleted, but git still lists it (${e.reason})`;
    case "unanchored":
      return e.reason === "no_descriptor_listing" ? "this machine cannot list a folder it holds open, so it cannot delete it without following links" : `this machine cannot open folders without following links (${e.reason})`;
  }
}
var ot = "files kept appearing in the worktree while it was being deleted";
function Ie(e) {
  return (0, import_chunk_jv7av99m.w)(e) === "WORKING_LIST_UNSUPPORTED";
}
function rn(e) {
  return e.includes("/") ? e.slice(0, e.lastIndexOf("/")) : "";
}
async function j(e, n, { holdBase: o = false } = {}) {
  let r = (h, k = false) => ({ outcome: "refused", reason: h, absent: k }), a = await (async () => {
    if (n === "root") return (0, import_promises3.realpath)(e);
    let h = (0, import_path3.join)(await (0, import_promises3.realpath)((0, import_path3.dirname)(e)), (0, import_path3.basename)(e));
    return n === "not_a_link" && (0, import_chunk_cg8dqz0a.x)() !== "windows" && await an(h) ? (0, import_promises3.realpath)(h) : h;
  })().catch((h) => (0, import_chunk_jv7av99m.J)(h) ? void 0 : (0, import_chunk_jv7av99m.w)(h) === "ELOOP" ? "link" : null);
  if (a === "link") return r(`${e} is a link, or its spelling differs from the one on disk`);
  if (a === void 0 || a === null) return r(`${e} does not exist or cannot be read`, a === void 0);
  if (n === "canonical" && !se(a, e)) return r(`${e} is reached through a link, or its spelling differs from the one on disk (it resolves to ${a})`);
  let l = (0, import_path3.parse)(a).root, c = (0, import_chunk_cg8dqz0a.x)() === "windows" || o ? a : await on(a);
  if (c === null) return r(`a directory above ${e} cannot be read`);
  let u = await tn().catch((h) => ({ failed: (0, import_chunk_jv7av99m.d)(h) }));
  if ("failed" in u) return r(`${e} could not be opened safely (${u.failed})`);
  let { tree: m, host: f } = u, g = await m.openTreeAnchor(f, { gitRoot: c, realRoot: c }).catch((h) => ({ failed: (0, import_chunk_jv7av99m.d)(h), code: (0, import_chunk_jv7av99m.w)(h) }));
  if ("failed" in g) {
    let h = c === a;
    return h && g.code === "ENOENT" ? r(`${e} does not exist`, true) : h && (g.code === "ELOOP" || g.code === "ENOTDIR") ? r(`${e} is a link, or changed while it was being opened`) : h && g.code === "WORKING_ROOT_NOT_CANONICAL" ? r(`${e} is reached through a link, or its spelling differs from the one on disk`) : r(`${e} could not be opened safely (${g.failed})`);
  }
  if ("unavailable" in g) {
    let h = m.getUnavailableReason(await m.checkAnchoring(l, { host: f })), k = h === "no_ffi" || h === "remote_volume" && (n !== "not_a_link" || await sn(e, l));
    return h !== null && ((0, import_chunk_cg8dqz0a.x)() !== "windows" || k) ? { outcome: "unanchored", reason: h } : r(`${e} could not be opened safely (${g.unavailable})`);
  }
  let b = c === a ? "" : a.slice((0, import_chunk_2172r9j8.gp)(c).length).split(import_path3.sep).filter(Boolean).join("/"), v = ln(g, b), p = await v.lstat("").then((h) => h, (h) => ({ error: h }));
  if ("error" in p || !p.isDirectory()) return await g.close().catch(() => {
  }), "error" in p && (0, import_chunk_jv7av99m.J)(p.error) ? r(`${e} does not exist`, true) : r(`${e} is a link, or changed while it was being opened`);
  return { held: v, realBase: a };
}
async function on(e) {
  let n = (0, import_path3.parse)(e).root, o = e.slice(n.length).split(import_path3.sep).filter(Boolean), r = n, i = n, a = false, l = [];
  for (let c of o) {
    let u = await Re(i, import_fs2.constants.R_OK), m = await Re(i, import_fs2.constants.W_OK);
    if (u === null || m === null) return null;
    if (!u) {
      let f = await (0, import_promises3.lstat)(i).catch(() => null);
      if (f === null || f.uid === process.getuid?.() || m) return null;
      if (a) {
        if (![...await Promise.all(l.map((v) => (0, import_promises3.lstat)(v.dir).catch(() => null))), f].every((v, p) => v?.uid === 0 && (l[p]?.writable ? (v.mode & 512) !== 0 : (v.mode & 18) === 0))) return null;
      }
      r = (0, import_path3.join)(i, c);
    }
    l.push({ dir: i, writable: m }), a ||= m, i = (0, import_path3.join)(i, c);
  }
  return r;
}
async function sn(e, n) {
  let o = await (0, import_promises3.realpath)((0, import_path3.parse)(e).root).catch(() => null);
  return o !== null && (0, import_chunk_2172r9j8.Ff)((0, import_chunk_2172r9j8.gp)((0, import_path3.parse)(o).root)) === (0, import_chunk_2172r9j8.Ff)((0, import_chunk_2172r9j8.gp)(n));
}
async function Re(e, n) {
  return (0, import_promises3.access)(e, n).then(() => true, (o) => ["EACCES", "EPERM", "EROFS"].includes((0, import_chunk_jv7av99m.w)(o) ?? "") ? false : null);
}
async function an(e) {
  let n = await (0, import_promises3.lstat)(e).catch(() => null);
  if (n === null || !n.isSymbolicLink()) return false;
  for (let o = (0, import_path3.dirname)(e); ; o = (0, import_path3.dirname)(o)) {
    if (await (0, import_promises3.lstat)(o).then((i) => i.uid, () => null) !== 0 || await Re(o, import_fs2.constants.W_OK) !== false) return false;
    if ((0, import_path3.dirname)(o) === o) return true;
  }
}
function ln(e, n) {
  let o = (r) => n === "" ? r : r === "" ? n : `${n}/${r}`;
  return { lstat: (r) => e.lstat(o(r)), list: (r, i) => e.list(o(r), i), unlink: (r) => e.unlink(o(r)), rmdir: (r) => e.rmdir(o(r)), rename: (r, i) => e.rename(o(r), o(i)), removeTree: (r, i) => e.removeTree(o(r), i), open: (r, i) => e.open(o(r), i), create: (r, i, a) => e.create(o(r), i, a), close: () => e.close(), anchorBeneath: (r) => e.anchorBeneath(o(r)) };
}
async function cn(e) {
  let n = e, o = await Otn(e, { dotGitLink: "vet" });
  if ("skipped" in o && o.skipped === "pointer") {
    let i = (0, import_chunk_w5s307zm.Gy)(e);
    if (i !== null && i !== e) n = i, o = await Otn(i, { dotGitLink: "vet" });
    else {
      let a = await (0, import_chunk_w5s307zm.SOe)(e);
      if (a === null) return { why: "its .git file names no usable git directory" };
      if ("refused" in await WSt(e, a)) return { why: `its .git file names ${a}, which is inside the working tree, or could not be checked against it` };
      let [l, c] = await Promise.all([a, e].map((m) => (0, import_promises3.realpath)(m).catch(() => null)));
      if (l == null || c == null) return { why: l == null ? `its .git file names ${a}, which does not exist or cannot be resolved` : "the repository root cannot be resolved" };
      if (ht((0, import_chunk_2172r9j8.KVn)(l), (0, import_chunk_2172r9j8.KVn)(c))) return { why: `its .git file names ${a}, which resolves into the working tree` };
      return await (0, import_promises3.lstat)((0, import_path3.join)(l, "commondir")).then(() => false, (m) => (0, import_chunk_jv7av99m.J)(m)) ? { dir: l, root: e } : { why: "its .git file names another worktree" };
    }
  }
  if ("skipped" in o) return { why: o.why };
  let r = await WSt(n, o.gitDir);
  return "refused" in r ? { why: r.refused } : { dir: r.gitDir, root: n };
}
async function it(e, n, o) {
  return e.lstat(n).then((r) => ie(r, o), () => false);
}
async function st(e, n) {
  for (let o of ["objects", "config", "packed-refs", "hooks", "worktrees"]) if (await e.lstat(`${n}/${o}`).then(() => true, (i) => !(0, import_chunk_jv7av99m.J)(i))) return true;
  return false;
}
async function un(e, n, o, r) {
  let i = await j(e, "canonical", { holdBase: true });
  if (!("held" in i)) return (0, import_chunk_w578pjby.t)(`Kept the registration ${n} in ${e}: ${i.reason}`, { level: "warn" }), false;
  try {
    let a = `worktrees/${n}`;
    if (!await it(i.held, a, o)) throw Error("its folder changed after it was checked, or this volume cannot show it is the same folder");
    if (r === "keep" && await i.held.lstat(`worktrees/${n}/locked`).then(() => true, (u) => !(0, import_chunk_jv7av99m.J)(u))) throw Error("it was locked while the checkout was being deleted");
    let l = new import_chunk_jv7av99m.A(`${a} has a git directory's own files (objects, config, packed-refs, hooks or worktrees) in it, or could not be checked for them, so nothing in it was removed`, "the registration entry has a git directory's own files in it, or could not be checked for them");
    if (await st(i.held, a)) throw l;
    if (await i.held.unlink(`${a}/gitdir`).catch((u) => {
      if (!(0, import_chunk_jv7av99m.J)(u)) throw u;
    }), await st(i.held, a)) return (0, import_chunk_w578pjby.t)(`Dropped the registration ${a} in ${e} (git no longer lists it) but left its folder, which now has a git directory's own files (objects, config, packed-refs, hooks or worktrees) in it, or could not be checked for them. git's next \`git worktree prune\` or \`git gc\` deletes that folder whole; move out anything you need first.`, { level: "warn" }), false;
    if (await Ae(i.held, a, o), await i.held.rmdir(a).then(() => true, (u) => (0, import_chunk_jv7av99m.J)(u))) return true;
    if (!await it(i.held, a, o)) return (0, import_chunk_w578pjby.t)(`Dropped the registration ${a} in ${e} (git no longer lists it) but left its folder: it changed while it was being emptied`, { level: "warn" }), false;
    let c = `${a}.claude-dropped-${(0, import_crypto.randomBytes)(4).toString("hex")}`;
    return await i.held.rename(a, c).then(() => ((0, import_chunk_w578pjby.t)(`Dropped the registration ${a} in ${e}; its folder held files Claude Code does not delete (such as a submodule's git directory), so it was moved to ${c}; git worktree prune removes it`, { level: "warn" }), true), (u) => ((0, import_chunk_w578pjby.t)(`Dropped the registration ${a} in ${e} (git no longer lists it) but could not move its folder aside (${(0, import_chunk_jv7av99m.d)(u)}); git worktree prune removes it`, { level: "warn" }), false));
  } catch (a) {
    return (0, import_chunk_w578pjby.t)(`Kept the registration ${n} in ${e}: ${(0, import_chunk_jv7av99m.d)(a)}`, { level: "warn" }), false;
  } finally {
    await i.held.close().catch(() => {
    });
  }
}
async function at(e, n, o, r) {
  let i = (0, import_path3.join)(o, "worktrees", r);
  if (n.outcome === "dropped" || n.outcome === "none" && await dt(o, r) === "absent") return { outcome: "removed" };
  let a = n.outcome === "kept" ? n.reason : `git's record of it at ${i} could not be read`;
  return (0, import_chunk_w578pjby.t)(`Worktree ${e} is gone but git still lists it: ${a}`, { level: "warn" }), { outcome: "registration_kept", reason: a };
}
async function dt(e, n) {
  let o = await j(e, "canonical", { holdBase: true });
  if (!("held" in o)) return null;
  try {
    return await o.held.lstat(`worktrees/${n}`).then((r) => ({ dev: r.dev, ino: r.ino }), (r) => (0, import_chunk_jv7av99m.J)(r) ? "absent" : null);
  } finally {
    await o.held.close().catch(() => {
    });
  }
}
function dn(e) {
  return (0, import_chunk_jv7av99m.w)(e) === "ENOTEMPTY" && !("syscall" in Object(e)) ? (0, import_chunk_jv7av99m.d)(e) : (0, import_chunk_jv7av99m.w)(e) ?? "an unknown error";
}
function se(e, n) {
  return ae(e) === ae(n);
}
function ft(e, n) {
  return (0, import_chunk_2172r9j8.qVn)(ae(e), n.map(ae));
}
function ae(e) {
  return (0, import_chunk_cg8dqz0a.x)() === "windows" ? e.replace(/^[a-z](?=:)/, (n) => n.toUpperCase()) : e;
}
function lt(e, n) {
  return e.length > n.length + 1 && se(e.slice(0, n.length + 1), n + import_path3.sep);
}
function ht(e, n) {
  return e === n || e.startsWith(n.endsWith(import_path3.sep) ? n : n + import_path3.sep);
}
async function fn(e, n) {
  let [o, r, i] = await Promise.all([(0, import_promises3.lstat)(e, { bigint: true }).catch(() => null), (0, import_promises3.lstat)(n, { bigint: true }).catch(() => null), (0, import_promises3.lstat)((0, import_path3.dirname)(n), { bigint: true }).catch(() => null)]);
  return o !== null && r !== null && i !== null && o.dev !== 0n && !(0, import_chunk_kpby9tcv.ia)(o.ino) && o.dev === r.dev && o.ino === r.ino && !(i.dev === r.dev && i.ino === r.ino);
}
async function gt(e, n, { parentLinkToRoot: o = false } = {}) {
  let r = (0, import_chunk_2172r9j8.gp)((0, import_path3.normalize)(n)), i = (f, g) => f.slice(g.length + 1).split(import_path3.sep).join("/"), a = [], l = [];
  for (let f of e) {
    let g = await (0, import_promises3.realpath)(f).catch(() => null);
    if (a.push(f, ...g === null ? [] : [g]), g !== null) l.push((0, import_chunk_2172r9j8.gp)(g));
  }
  let c = a.map((f) => (0, import_chunk_2172r9j8.gp)((0, import_path3.normalize)(f)));
  for (let f of c) if (lt(r, f)) {
    let g = r.slice(0, f.length);
    return { base: g.endsWith(":") ? g + import_path3.sep : g, rel: i(r, f), underRoot: true };
  }
  let u = (f) => (0, import_chunk_2172r9j8.Ff)(f.normalize("NFC")), m = c.find((f) => lt(u(r), u(f)));
  if (m !== void 0) {
    let f = r.split(import_path3.sep), g = m.split(import_path3.sep).length;
    if ((0, import_chunk_cg8dqz0a.x)() !== "windows" && await fn(f.slice(0, g).join(import_path3.sep), m)) return { base: m, rel: f.slice(g).join("/"), underRoot: true };
    return { refused: `${n} spells the repository folder ${m} in another letter case or Unicode form (use the path as git records it)` };
  }
  if (l.length > 0) {
    let f = r.split(import_path3.sep), g = null;
    for (let h = 1; h < f.length - 1; h++) {
      let k = f.slice(0, h).join(import_path3.sep), _ = k === "" || k.endsWith(":") ? k + import_path3.sep : k, E = await (0, import_promises3.realpath)(_).catch(() => null);
      g = E;
      let y = E === null ? null : (0, import_chunk_2172r9j8.gp)(E), S = y === null ? void 0 : l.find((P) => se(y, P));
      if (S !== void 0) return { base: S, rel: f.slice(h).join("/"), underRoot: true };
      if (y !== null && l.some((P) => ht(y, P))) return { refused: `${n} is reached through a link into the repository at ${_}` };
    }
    let b = g === null ? null : (0, import_path3.join)(g, f.at(-2)), v = b === null || !o ? null : await hn(b), p = [b, v].flatMap((h) => h === null ? [] : [h]).map((h) => l.find((k) => se(h, k))).find((h) => h !== void 0);
    if (p !== void 0) return { base: p, rel: f.at(-1), underRoot: true };
  }
  return wt(r);
}
async function hn(e) {
  let n = await (0, import_promises3.readlink)(e).catch(() => null);
  if (n === null) return null;
  let o = (0, import_chunk_cg8dqz0a.x)() === "windows" && /^\\\\\?\\[A-Za-z]:\\/.test(n);
  if (o && n.includes("/")) return null;
  let r = o ? n.slice(4) : n, i = r.split(import_path3.sep === "\\" ? /[\\/]/ : /\//);
  if (((0, import_path3.isAbsolute)(r) ? i : i.slice(Math.max(0, i.findIndex((l) => l !== "..")))).some((l) => l === "." || l === "..")) return null;
  return (0, import_chunk_2172r9j8.gp)((0, import_path3.normalize)((0, import_path3.isAbsolute)(r) ? r : (0, import_path3.join)((0, import_path3.dirname)(e), r)));
}
function wt(e) {
  let n = (0, import_chunk_2172r9j8.gp)((0, import_path3.normalize)(e)), o = (0, import_path3.parse)(n).root, r = n.lastIndexOf(import_path3.sep);
  if (n === o || r === n.length - 1 || r < 0) return null;
  return { base: r < o.length ? o : n.slice(0, r), rel: n.slice(r + 1), underRoot: false };
}
async function mt(e, n, o, r, i) {
  let a = (0, import_path3.isAbsolute)(e) ? [(0, import_path3.normalize)(e)] : n.map((u) => (0, import_path3.normalize)((0, import_path3.resolve)(u, e))), l = await (0, import_promises3.realpath)(o).catch(() => null), c = [r, (0, import_path3.join)(o, ".git")].concat(l === null ? [] : [(0, import_path3.join)(l, ".git")]).map((u) => (0, import_path3.join)(u, "worktrees", i));
  return a.some((u) => ft(u, c));
}
async function gn(e, n, o, r, i) {
  let a = await pt(e, `${n}/.git`);
  if ("error" in a || a.value === null) return null;
  let l = (0, import_path3.basename)((0, import_path3.normalize)(a.value));
  return await mt(a.value, o, r, i, l) ? l : null;
}
async function wn(e, n) {
  let o = Buffer.alloc(n + 1), r = 0;
  for (; ; ) {
    let { bytesRead: i } = await e.read(o, r, o.length - r, r);
    if (i === 0) return o.subarray(0, r);
    if (r += i, r > n) return null;
  }
}
async function pt(e, n) {
  let o = { value: null, bytes: Buffer.alloc(0) }, r;
  try {
    r = await e.open(n, nn());
  } catch (i) {
    let a = (0, import_chunk_jv7av99m.w)(i);
    return a === "ENOENT" || a === "ELOOP" || a === "EISDIR" ? o : { error: a ?? (0, import_chunk_jv7av99m.d)(i) };
  }
  try {
    if (!(await r.stat()).isFile()) return o;
    let i = await wn(r, Qt);
    if (i === null) return o;
    let a = /^gitdir: ([^\r\n]+)[\r\n]*$/.exec(i.toString("utf8"));
    return { value: a ? a[1] : null, bytes: i };
  } catch (i) {
    return { error: (0, import_chunk_jv7av99m.w)(i) ?? (0, import_chunk_jv7av99m.d)(i) };
  } finally {
    await r.close().catch(() => {
    });
  }
}
async function kt(e, n, o = { deleted: false }) {
  try {
    return await e.unlink(n), o.deleted = true, true;
  } catch (r) {
    let i = (0, import_chunk_jv7av99m.w)(r);
    if (i === "ENOENT") return false;
    if (i !== "EISDIR" && i !== "EPERM" && i !== "EACCES") throw r;
    let a = await e.lstat(n).catch(() => null);
    if (a === null || !a.isDirectory()) throw r;
    return await e.removeTree(n, { onDeleted: () => {
      o.deleted = true;
    } }), true;
  }
}
async function mn(e, n, o, r = { deleted: false }, { pointerFirst: i = false } = {}) {
  if (i) await e.unlink(`${n}/.git`), r.deleted = true;
  for (let a = 0; ; a++) {
    let l = (await e.list(n)).filter((c) => c !== ".git");
    if (l.length === 0) break;
    if (a === en) {
      let c = Error("files kept appearing in the worktree while it was being deleted");
      throw c.code = "ENOTEMPTY", c;
    }
    if (l.some((c) => c.includes("\uFFFD"))) {
      await e.removeTree(n, { keep: ".git", onDeleted: () => {
        r.deleted = true;
      } });
      continue;
    }
    for (let c of l) await kt(e, `${n}/${c}`, r);
  }
  if (!i) await e.unlink(`${n}/.git`), r.deleted = true;
  try {
    await e.removeTree(n);
  } catch (a) {
    if (!i) await e.create(`${n}/.git`, o, 420).catch(() => {
    });
    throw a;
  }
}
