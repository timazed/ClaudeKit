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
var chunk_z7aq90j5_exports = {};
__export(chunk_z7aq90j5_exports, {
  sweepCheckoutSessionTrash: () => xe
});
module.exports = __toCommonJS(chunk_z7aq90j5_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xppq9kzc = require("/$bunfs/root/chunk-xppq9kzc.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_chunk_fp3vnecp = require("/$bunfs/root/chunk-fp3vnecp.js");
var import_chunk_dc6nb19r = require("/$bunfs/root/chunk-dc6nb19r.js");
var import_chunk_n1eez895 = require("/$bunfs/root/chunk-n1eez895.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_c6crdb6n = require("/$bunfs/root/chunk-c6crdb6n.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_y2bpkgdh = require("/$bunfs/root/chunk-y2bpkgdh.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_fs = require("fs");
var import_path = require("path");
var B = 9e4, S = "writer-locks";
function R(e) {
  return Date.now() - e < B;
}
var h = 8192, L = ".git", U = import_path.sep === "\\" ? /[\\/]+/ : /\/+/;
async function xe(e, n, t = (0, import_chunk_dc6nb19r.ATr)()) {
  let r = { removed: 0, errors: 0, newestKeptMs: null };
  try {
    let s = await H(t, (0, import_path.join)(e, import_chunk_fp3vnecp.ubo, "objects", "info", "alternates"), e, (a) => a.split(/\r?\n/, 1)[0] ?? "");
    if (s === "absent" || s === "leads_nowhere" || s === "malformed" || s !== "refused" && (0, import_path.basename)(s) !== "objects") return r;
    if (s === "refused") return l(r), r;
    let i = (0, import_path.dirname)(s), o = await t.fs.lstat(i, { bigint: true }), c = await t.fs.lstat((0, import_path.join)(i, "HEAD")).catch(() => null);
    if (!c?.isFile() && !c?.isSymbolicLink()) return l(r), r;
    await x(t, { kind: "git_dir", dir: i, identity: o }, { cutoffMs: n, isLive: await A(t, e, (0, import_path.dirname)(i)), tally: r });
    for (let a of await V(t, i, r)) await x(t, a, { cutoffMs: n, isLive: await A(t, e, a.dir), tally: r }).catch(() => l(r));
  } catch {
    l(r);
  }
  return r;
}
function p(e) {
  e.newestKeptMs = Date.now();
}
function _(e, n, t = import_path.sep) {
  let [r, s] = [e, n].map((i) => (0, import_chunk_z6pfqf6e.pn)((t === "\\" ? i.replaceAll("/", t) : i).replace(/^[a-z](?=:)/, (o) => o.toUpperCase())));
  return r === s;
}
function q(e, n) {
  let t = (r) => r.replace(/[A-Z]/g, (s) => s.toLowerCase());
  return _(e, n) || _(t(e), t(n));
}
function l(e) {
  e.errors++, p(e);
}
var W = (e) => e.replace(/(?<![\r\n])[\r\n]+$/, "");
async function H(e, n, t, r, s) {
  let i = await C(e, n, r);
  if (i === "absent" || i === "malformed" || i === "refused") return i;
  if ((0, import_chunk_z6pfqf6e.fa)(i, t)) return "refused";
  let o = s === void 0 ? i : (0, import_path.resolve)(s, i);
  if (!(0, import_path.isAbsolute)(o)) return "refused";
  let c = await E(e, o);
  return c === "plainly" ? o : c === "missing" && !/[\r\n]/.test(i) ? "leads_nowhere" : "refused";
}
async function E(e, n) {
  let { root: t } = (0, import_path.parse)(n), r = t;
  for (let s of n.slice(t.length).split(U)) {
    if (s === "") continue;
    r = (0, import_path.join)(r, s);
    try {
      if ((await e.fs.lstat(r)).isSymbolicLink()) return "refused";
    } catch (i) {
      return (0, import_chunk_jv7av99m.kn)(i) ? "missing" : "refused";
    }
  }
  return "plainly";
}
async function C(e, n, t) {
  try {
    let r = await (0, import_chunk_w578pjby.le)().readFileFdGated(n, h);
    if (r === null) {
      let i = await e.fs.lstat(n);
      return i.isFile() && i.size <= h ? "refused" : "malformed";
    }
    let s = t(r.content);
    return s === "" || s.includes("\0") ? "malformed" : s;
  } catch (r) {
    return (0, import_chunk_jv7av99m.J)(r) ? "absent" : "refused";
  }
}
async function A(e, n, t) {
  let r = (0, import_path.dirname)((0, import_path.dirname)(n)), s = (0, import_path.join)((0, import_chunk_q3a5dy2r.jC)(await (0, import_chunk_q3a5dy2r.vw)(t, void 0), r), import_chunk_fp3vnecp.hBn), i = await Promise.all([...(0, import_chunk_4smdap7r.M)([n, s]).map((o) => Q(e, o)), ...[]]);
  return (o) => i.some((c) => c(o));
}
async function Q(e, n) {
  let t = (0, import_path.join)(n, S), r;
  try {
    r = await e.fs.readdir(t);
  } catch (i) {
    return (0, import_chunk_jv7av99m.J)(i) ? () => false : () => true;
  }
  let s = /* @__PURE__ */ new Set();
  for (let i of r) {
    let o = i.endsWith(".writer") ? await e.fs.lstat((0, import_path.join)(t, i)).catch(() => null) : null;
    if (o !== null && R(o.mtimeMs)) s.add(i.slice(0, -7));
  }
  return (i) => s.has(i);
}
async function V(e, n, t) {
  let r = (0, import_path.join)(n, "worktrees"), s = await e.fs.lstat(r).catch((c) => (0, import_chunk_jv7av99m.J)(c) ? "absent" : null);
  if (s === "absent") {
    if (!(await e.fs.lstat(n).catch(() => null))?.isDirectory()) l(t);
    return [];
  }
  let i = s?.isDirectory() && await E(e, r) === "plainly" ? await e.fs.readdir(r).catch(() => null) : null;
  if (i === null) return l(t), [];
  let o = [];
  for (let c of i) {
    let a = (0, import_path.join)(r, c), u = await e.fs.lstat(a).catch(() => null);
    if (u === null || u.isSymbolicLink()) {
      l(t);
      continue;
    }
    if (!u.isDirectory()) continue;
    let f = await H(e, (0, import_path.join)(a, "gitdir"), a, (k) => k.trimEnd(), a);
    if (f === "leads_nowhere") continue;
    if (f === "absent" || f === "refused" || f === "malformed" || (0, import_path.basename)(f) !== L) {
      l(t);
      continue;
    }
    let d = (0, import_path.dirname)(f);
    if ((0, import_chunk_z6pfqf6e.rp)(d)) {
      l(t);
      continue;
    }
    let m = await C(e, f, W);
    if (m === "absent" || m === "refused") {
      l(t);
      continue;
    }
    if (m === "malformed" || !m.startsWith("gitdir: ")) {
      p(t);
      continue;
    }
    let y = m.slice(8);
    if ((0, import_chunk_z6pfqf6e.fa)(y, d)) {
      p(t);
      continue;
    }
    let P = await E(e, (0, import_path.resolve)(d, y));
    if (P === "refused") {
      l(t);
      continue;
    }
    if (P === "missing") {
      p(t);
      continue;
    }
    if (_((0, import_path.resolve)(d, y), a)) o.push({ kind: "linked_worktree", dir: d, gitFileLine: m });
    else {
      let [k, O] = await Promise.all([(0, import_path.resolve)(d, y), a].map((Y) => e.fs.lstat(Y, { bigint: true }).catch(() => null)));
      if (k?.ino && k.dev === O?.dev && k.ino === O.ino) l(t);
      else p(t);
    }
  }
  return o;
}
async function X(e, n) {
  switch (n.kind) {
    case "git_dir": {
      let t = await e.lstat("");
      return t.dev === n.identity.dev && (0, import_chunk_y2bpkgdh.$vt)(t.ino, n.identity.ino);
    }
    case "linked_worktree":
      return ee(e, n.gitFileLine);
  }
}
var Z = { git_dir: { trashName: import_chunk_sjqze7qg.pJa, ignoreFile: void 0 }, linked_worktree: { trashName: import_chunk_sjqze7qg.mJa, ignoreFile: import_chunk_sjqze7qg.hJa } };
async function ee(e, n) {
  let t = await e.open(L, import_fs.constants.O_RDONLY | import_fs.constants.O_NONBLOCK).catch(() => null);
  if (t === null) return false;
  try {
    let [r, s] = await Promise.all([t.stat({ bigint: true }), e.lstat(L)]);
    if (r.dev !== s.dev || r.ino !== s.ino) return false;
    let i = Buffer.alloc(h + 1), { bytesRead: o } = await t.read(i, 0, i.length, 0);
    return o <= h && W(i.toString("utf8", 0, o)) === n;
  } catch {
    return false;
  } finally {
    await t.close().catch(() => {
    });
  }
}
function te(e, n, t) {
  let { root: r, dir: s, base: i } = e.path.parse(e.path.normalize(t));
  return n.holdOutside(r, [...s.slice(r.length).split(e.path.sep), i].filter((o) => o !== "").join("/"), true);
}
async function N(e, n, t = n.realRoot, r) {
  let s = import_fs.constants.O_DIRECTORY | import_chunk_jxja0v0z.cr, i = s | import_chunk_jxja0v0z.mO | import_fs.constants.O_NOFOLLOW, o = await (n.backend === "win32_handle" ? te(e, n, t) : n.backend === "darwin_at" ? e.fs.open(t, s | import_chunk_jxja0v0z.oC) : t.split("/").filter((c) => c !== "").reduce(async (c, a) => {
    let u = await c;
    return e.fs.open(`/proc/self/fd/${u.fd}/${a}`, i).finally(() => u.close().catch(() => {
    }));
  }, e.fs.open("/", i))).catch(() => null);
  if (o === null) return false;
  try {
    let [c, a] = await Promise.all(["fd" in o ? o.stat({ bigint: true }) : o.stat(), r ?? n.lstat("")]);
    return !(0, import_chunk_kpby9tcv.ia)(a.ino) && c.dev === a.dev && c.ino === a.ino;
  } catch {
    return false;
  } finally {
    await o.close().catch(() => {
    });
  }
}
async function x(e, n, { cutoffMs: t, isLive: r, tally: s }) {
  let i = n.dir, { trashName: o, ignoreFile: c } = Z[n.kind];
  try {
    if (!(await e.fs.lstat(e.path.join(i, o))).isDirectory()) {
      l(s);
      return;
    }
  } catch (m) {
    if (!(0, import_chunk_jv7av99m.J)(m) || await E(e, i) !== "plainly") l(s);
    return;
  }
  let a = await e.fs.realpath(i).catch(() => null);
  if (a === null || !q(a, i)) {
    l(s);
    return;
  }
  let u = e.path.join(a, o), f = await (0, import_chunk_n1eez895.Zko)(e, { gitRoot: i, realRoot: a }).catch(() => null);
  if (f === null || "unavailable" in f) {
    l(s);
    return;
  }
  let d = f;
  try {
    if (!await N(e, d) || !_(a, i) && !await N(e, d, i) || !await X(d, n) || !(await d.lstat(o)).isDirectory()) {
      l(s);
      return;
    }
    await ie(e, d, o, u, { cutoffMs: t, isLive: r, tally: s }), await ne(e, d, o, u, s, c);
  } catch (m) {
    if (!(0, import_chunk_jv7av99m.J)(m)) l(s);
  } finally {
    await d.close().catch(() => {
    });
  }
}
async function ie(e, n, t, r, { cutoffMs: s, isLive: i, tally: o }) {
  let c = await e.fs.readdir(r);
  for (let a of c) {
    let u = `${t}/${a}`;
    try {
      if (!(await n.lstat(u)).isDirectory()) continue;
      if (i(a.replace(/\.(?:staging|set-aside)$/, ""))) {
        p(o);
        continue;
      }
      let f = await j(e, e.path.join(r, a));
      if (f < s) await K(n, e, u, s), o.removed++;
      else o.newestKeptMs = Math.max(o.newestKeptMs ?? -1 / 0, f);
    } catch (f) {
      if (f instanceof D) p(o);
      else if (!(0, import_chunk_jv7av99m.J)(f)) l(o);
    }
  }
}
async function ne(e, n, t, r, s, i) {
  let o = await e.fs.readdir(r).catch(() => ["?"]);
  try {
    if (i !== void 0 && o.length === 1 && o[0] === i) {
      if ((await n.lstat(`${t}/${i}`)).isFile()) await n.unlink(`${t}/${i}`), await n.rmdir(t).catch(async (c) => {
        if ((0, import_chunk_jv7av99m.w)(c) !== "ENOTEMPTY") throw c;
        await n.create(`${t}/${i}`, Buffer.from(`*
`), 384);
      });
    } else if (o.length === 0) await n.rmdir(t);
  } catch (c) {
    if (!(0, import_chunk_jv7av99m.J)(c) && (0, import_chunk_jv7av99m.w)(c) !== "ENOTEMPTY") s.errors++;
  }
}
async function j(e, n) {
  let t = (await e.fs.lstat(n)).mtimeMs, r = await e.fs.readdir(n);
  for (let s of r) {
    let i = e.path.join(n, s);
    try {
      let o = await e.fs.lstat(i);
      if (t = Math.max(t, o.mtimeMs), o.isDirectory()) t = Math.max(t, await j(e, i));
    } catch (o) {
      if (!(0, import_chunk_jv7av99m.J)(o)) throw o;
    }
  }
  return t;
}
class D extends Error {
}
async function K(e, n, t, r) {
  if (!(Number((await e.lstat(t)).mtimeMs) < r)) throw new D();
  let s = await n.fs.readdir(n.path.join(e.realRoot, ...t.split("/"))).catch(() => []), i = [];
  for (let o of s) {
    let c = `${t}/${o}`;
    try {
      if ((await e.lstat(c)).isDirectory()) await K(e, n, c, r);
      else await e.unlink(c);
    } catch (a) {
      if (a instanceof D || (0, import_chunk_jv7av99m.w)(a) === "ENOTEMPTY") throw a;
      if (!(0, import_chunk_jv7av99m.J)(a)) i.push(a);
    }
  }
  if (i.length > 0) throw i[0];
  await e.rmdir(t);
}
