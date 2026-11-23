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
var chunk_x95829qm_exports = {};
__export(chunk_x95829qm_exports, {
  JGi: () => JGi,
  kun: () => kun,
  rvo: () => rvo
});
module.exports = __toCommonJS(chunk_x95829qm_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_p548ry42 = require("/$bunfs/root/chunk-p548ry42.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var R = 40, E = 5, S = /^\/(?:dev\/(?:stdin|stdout|stderr|fd\/[012])|proc\/self\/fd\/[012])$/;
async function rvo(e, n) {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") {
    if (!await m(e, "program")) return "open";
    for (let l of n.flatMap(b).filter((t) => /^(?:[a-zA-Z]:[\\/]|[\\/]{2}|\\)/.test(t))) if (!await m(import_path.win32.resolve(JGi(), l), "any")) return "open";
    return;
  }
  let i = process.geteuid?.(), r = process.getuid?.();
  if (i === void 0 || i === 0 || r === 0) return "open";
  let s = (0, import_chunk_6mfepmbb.zMs)(i, r), a = e;
  for (let l = 0; ; l += 1) {
    if ((0, import_chunk_p548ry42.Eh)(import_path.posix.basename(a)) === "env") return "env";
    if (!await d(a, s, "program")) return "open";
    let t = Buffer.alloc(512), o;
    try {
      let g = await (0, import_promises.open)(a, "r");
      try {
        o = (await g.read(t, 0, t.length, 0)).bytesRead;
      } finally {
        await g.close();
      }
    } catch {
      return "open";
    }
    let u = (0, import_chunk_p548ry42.svo)(t.subarray(0, o), { childStartsInReach: false });
    if (u === null) break;
    if (u === "unjudgeable" || u.kind === "cwd" || l === E) return "line";
    if (u.kind === "env") return "env";
    let p = t.toString("latin1", 2, o).replace(/^[ \t]+/, "").split(/[ \t\n]/, 1)[0];
    if (p !== void 0 && p !== u.path && !await d(p, s, "program")) return "open";
    a = u.path;
  }
  for (let l of n.flatMap(b)) {
    let t = (0, import_chunk_7cfjrnwy.pP)(l.startsWith("/") ? l : `/${l}`, "/") || "/";
    if (S.test(t) && await d(`/${t.split("/")[1]}`, s, "any")) continue;
    for (let o of t.split("/").includes("..") ? [t, import_path.posix.normalize(t)] : [t]) if (!await d(o, s, "any")) return "open";
  }
  return;
}
function kun(e) {
  switch (e) {
    case "env":
      return { cause: "it starts its program or interpreter through env, which can search your PATH", statusHint: "an administrator can write that program's full path in place of env", errorHint: "Ask an administrator to write that program's full path in place of env." };
    case "line":
      return { cause: "Claude Code can't check what a #! line in its program or interpreter runs", statusHint: "an administrator can leave only the interpreter's full path on that line, with Unix line endings", errorHint: "Ask an administrator to leave only the interpreter's full path on the #! line, with Unix line endings." };
    case "open":
      if ((0, import_chunk_cg8dqz0a.x)() === "windows") return { cause: "its program is missing, or its program or a path its arguments name is outside C:\\Program Files or passes through a link that leads outside it or to nothing", statusHint: "an administrator can install them under C:\\Program Files", errorHint: "Ask an administrator to install them under C:\\Program Files." };
      if (process.geteuid?.() === 0 || process.getuid?.() === 0) return { cause: "Claude Code runs as root, which can change any file", statusHint: "run Claude Code as an ordinary user", errorHint: "Run Claude Code as an ordinary user." };
      return { cause: "your user account can change its program, its interpreter, a path its arguments name, or a folder above one of them, or Claude Code can't find, run, read, or check one of them", statusHint: "an administrator can give them and each folder above them to root, writable by root alone", errorHint: "Ask an administrator to give them and each folder above them to root, writable by root alone." };
  }
}
function JGi() {
  return (0, import_chunk_cg8dqz0a.x)() === "windows" ? import_chunk_2yx6c1y2.KMr : "/";
}
function b(e) {
  let n = e.indexOf("="), i = [];
  for (let r = 2; e[0] === "-" && /[A-Za-z0-9]/.test(e[r - 1] ?? ""); r += 1) if (r < e.length) i.push(e.slice(r));
  return [e, ...n === -1 ? [] : [e.slice(n + 1)], ...i];
}
async function d(e, n, i) {
  if (!e.startsWith("/") || i === "program" && e.endsWith("/")) return false;
  let r = e.split("/").filter(Boolean), s;
  try {
    let a = "/", l = 0;
    if (await f(a, await (0, import_promises.lstat)(a), n)) return false;
    for (s = r.shift(); s !== void 0; s = r.shift()) {
      if (s === "." || s === "..") {
        a = s === ".." ? import_path.posix.dirname(a) : a;
        continue;
      }
      let t = import_path.posix.join(a, s), o = await (0, import_promises.lstat)(t);
      if (o.isSymbolicLink()) {
        if (l += 1, l > R) return false;
        let u = await (0, import_promises.readlink)(t);
        if (i === "program" && r.length === 0 && u.endsWith("/")) return false;
        a = u.startsWith("/") ? "/" : a, r.unshift(...u.split("/").filter(Boolean));
      } else if (r.length > 0) {
        if (!o.isDirectory() || await f(t, o, n)) return false;
        a = t;
      } else return i === "program" ? o.isFile() && !await f(t, o, n) && await (0, import_promises.access)(t, import_fs.constants.X_OK).then(() => true, () => false) : !(o.isFile() || o.isDirectory() || o.isFIFO()) || !await f(t, o, n);
    }
    return i === "any";
  } catch (a) {
    let l = (0, import_chunk_jv7av99m.w)(a);
    return i === "any" && ((0, import_chunk_jv7av99m.kn)(a) || l === "EACCES" || l === "ENAMETOOLONG" && Buffer.byteLength(s ?? "") > 255) && !r.includes("..");
  }
}
async function f(e, n, i) {
  let r = { uid: n.uid, gid: n.gid, mode: n.mode };
  return (0, import_chunk_6mfepmbb.fMo)(i, r, r) !== false || await (0, import_chunk_6mfepmbb.FFl)(e) !== "no";
}
async function m(e, n) {
  if (!A(e)) return false;
  let { real: i, code: r } = await (0, import_chunk_z6pfqf6e.HPt)(e);
  if (i !== void 0) return A(i);
  if (n === "program" || r !== "ENOENT" && r !== "ENOTDIR") return false;
  return await (0, import_promises.readlink)(e).then(() => false, import_chunk_jv7av99m.kn) && m(import_path.win32.dirname(e), n);
}
function A(e) {
  return import_path.win32.normalize(e).toLowerCase().startsWith("c:\\program files\\");
}
