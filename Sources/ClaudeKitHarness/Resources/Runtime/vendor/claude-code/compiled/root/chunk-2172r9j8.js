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
var chunk_2172r9j8_exports = {};
__export(chunk_2172r9j8_exports, {
  AIs: () => AIs,
  Ff: () => Ff,
  KVn: () => KVn,
  RIs: () => RIs,
  TMr: () => TMr,
  X7i: () => X7i,
  Y7i: () => Y7i,
  YVn: () => YVn,
  a3: () => a3,
  f8: () => f8,
  gp: () => gp,
  pRt: () => pRt,
  q7i: () => q7i,
  qVn: () => qVn,
  uIo: () => uIo,
  vMr: () => vMr,
  xIs: () => xIs,
  yNl: () => yNl
});
module.exports = __toCommonJS(chunk_2172r9j8_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_promises = require("fs/promises");
var import_path = require("path");
function Ff(n) {
  return n.toLowerCase().replace(/\u0131/g, "i").replace(/\u017F/g, "s");
}
function AIs(n) {
  let e = "";
  for (let o of n) e += o.toLowerCase();
  return Ff(e).replace(/\u03C2/g, "\u03C3");
}
function KVn(n) {
  let e = (0, import_chunk_cg8dqz0a.x)();
  return e === "windows" || e === "macos" ? Ff(n) : n;
}
function yNl(n, e) {
  let o = null, s = 0, r = [];
  for (let a of n.split("\0\0")) {
    let u = a.split("\0"), c = u.find((N) => N.startsWith("worktree "));
    if (c === void 0) continue;
    let f = c.slice(9);
    if (!YVn(f)) return null;
    let y = (0, import_path.normalize)(f);
    if (r.push(a3(y)), u.includes(`branch refs/heads/${e}`)) s++, o ??= y;
  }
  if (o === null || s !== 1) return null;
  let l = a3(o), i = 0;
  for (let a of r) if (a === l) i++;
  return i === 1 ? o : null;
}
function RIs(n) {
  return (0, import_chunk_cg8dqz0a.x)() === "windows" ? n.replaceAll("\\", "/") : n;
}
function gp(n) {
  let e = n.replace((0, import_chunk_cg8dqz0a.x)() === "windows" ? /[\\/]+$/ : /\/+$/, "");
  return e === "" ? n : e;
}
function a3(n) {
  let e = gp(n);
  return KVn((0, import_chunk_cg8dqz0a.x)() === "macos" ? e.normalize("NFC") : e);
}
function qVn(n, e) {
  let o = p(n);
  return e.some((s) => p((0, import_path.normalize)(s)) === o);
}
function vMr(n, e) {
  let o = a3(n);
  return e.find((s) => a3((0, import_path.normalize)(s)) === o) ?? null;
}
function p(n) {
  let e = gp(n);
  return (0, import_chunk_cg8dqz0a.x)() === "macos" ? e.normalize("NFC") : e;
}
var L = new RegExp("\\p{Cc}", "u");
function YVn(n) {
  if (L.test(n) || !(0, import_path.isAbsolute)(n) || (0, import_chunk_z6pfqf6e.YB)(n)) return false;
  return (0, import_chunk_cg8dqz0a.x)() !== "windows" || /^(?:[A-Za-z]:[\\/]|[\\/]{2})/.test(n);
}
function q7i(n) {
  let e = /* @__PURE__ */ new Set();
  for (let o of n.split("\0\0")) {
    let s = o.split("\0").find((a) => a.startsWith("worktree "));
    if (s === void 0) continue;
    let r = s.slice(9);
    if (!YVn(r)) return false;
    let l = (0, import_path.normalize)(r), i = gp((0, import_chunk_cg8dqz0a.x)() === "macos" ? l.normalize("NFC") : l);
    if (e.has(i)) return false;
    e.add(i);
  }
  return true;
}
function xIs(n, e) {
  if (!q7i(n)) return null;
  let o = (r, l) => (0, import_chunk_cg8dqz0a.x)() === "macos" ? r.normalize("NFC") === l.normalize("NFC") : r === l, s = null;
  for (let r of n.split("\0\0")) {
    let l = r.split("\0").find((a) => a.startsWith("worktree "));
    if (l === void 0) continue;
    let i = (0, import_path.normalize)(l.slice(9));
    if (s === null && e.some((a) => o(gp(i), gp((0, import_path.normalize)(a))))) s = i;
  }
  return s;
}
async function f8(n, e) {
  return (await Y7i(n, e)).verdict;
}
async function Y7i(n, e) {
  let o = [];
  for (let l = gp(n); (0, import_path.dirname)(l) !== l && l !== e; l = (0, import_path.dirname)(l)) o.push(l);
  if (o.length === 0) return { verdict: "unknown" };
  let s = (0, import_chunk_cg8dqz0a.x)() === "windows", r = null;
  for (let l of o.reverse()) {
    let i = gp(l), a = await (0, import_promises.readlink)(i).then(() => "link", (u) => {
      let c = (0, import_chunk_jv7av99m.w)(u);
      return c === "EINVAL" ? "clear" : c === "ENOENT" || c === "ENOTDIR" ? "missing" : "unknown";
    });
    if (a === "clear") {
      if (s) {
        let u = await (0, import_promises.lstat)(i).catch(() => null);
        if (u === null || !u.isDirectory()) return { verdict: "unknown", at: i };
        let c = r ?? await (0, import_promises.realpath)((0, import_path.dirname)(i)).catch(() => null), f = await (0, import_promises.realpath)(i).catch(() => null);
        if (c === null || f === null || AIs(gp(f)) !== AIs((0, import_path.join)(gp(c), (0, import_path.basename)(i)))) return { verdict: "unknown", at: i };
        r = f;
      }
      continue;
    }
    if (a === "missing" && !await X7i(i)) return { verdict: "unknown", at: i };
    return { verdict: a, at: i };
  }
  return { verdict: "clear" };
}
async function X7i(n) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows") return true;
  return (0, import_promises.lstat)(`${n}.lnk`).then(() => false, (e) => (0, import_chunk_jv7av99m.J)(e));
}
async function uIo(n, e) {
  return await f8(n, e) === "clear";
}
async function TMr(n, e, o) {
  if (!await uIo(n, o)) return false;
  let s = await (0, import_promises.realpath)(n).catch(() => null);
  if (s === null || p(s) !== p(e)) return false;
  let r = await (0, import_promises.lstat)(gp(n)).catch(() => null);
  if (r === null || !r.isDirectory()) return false;
  return pRt(n);
}
async function pRt(n) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows") return true;
  let e = await (0, import_promises.realpath)((0, import_path.dirname)(n)).catch(() => null);
  return !await C(n, e == null ? null : Ff((0, import_path.join)(e, (0, import_path.basename)(n))));
}
async function C(n, e) {
  try {
    return await (0, import_promises.unlink)(n), (0, import_chunk_w578pjby.t)(`[worktree] unlinked reparse point before removal: ${n}`), false;
  } catch {
  }
  try {
    return await (0, import_promises.rmdir)(n), (0, import_chunk_w578pjby.t)(`[worktree] removed reparse point or empty directory before removal: ${n}`), false;
  } catch (r) {
    if ((0, import_chunk_jv7av99m.J)(r)) return false;
    if ((0, import_chunk_jv7av99m.w)(r) !== "ENOTEMPTY") {
      let i = await (0, import_promises.readlink)(n).then(() => "link", (a) => (0, import_chunk_jv7av99m.w)(a) === "EINVAL" || (0, import_chunk_jv7av99m.J)(a) ? "not-link" : "unknown") !== "not-link" || e == null ? null : await (0, import_promises.realpath)(n).then((a) => Ff(a)).catch(() => null);
      if (i == null || i !== e && !i.startsWith(e + import_path.sep)) return (0, import_chunk_w578pjby.t)(`[worktree] refusing to enumerate unremovable entry before removal: ${n}`, { level: "warn" }), true;
    }
  }
  let o = await (0, import_promises.readdir)(n, { withFileTypes: true }).catch((r) => (0, import_chunk_jv7av99m.J)(r) ? [] : null);
  if (o == null) return (0, import_chunk_w578pjby.t)(`[worktree] could not enumerate ${n} before removal; not certifying`, { level: "warn" }), true;
  let s = false;
  for (let r of o) if (r.isSymbolicLink() || r.isDirectory()) s = await C((0, import_path.join)(n, r.name), e) || s;
  return s;
}
