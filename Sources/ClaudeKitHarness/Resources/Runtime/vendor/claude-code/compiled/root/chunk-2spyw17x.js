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
var chunk_2spyw17x_exports = {};
__export(chunk_2spyw17x_exports, {
  UQs: () => UQs,
  w5r: () => w5r
});
module.exports = __toCommonJS(chunk_2spyw17x_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_util = require("util");
var UQs = "tengu_moonlit_locket", z = 1048576;
async function w5r(t, h) {
  let p = (0, import_path.join)(t, "info"), m = (0, import_path.join)(p, "exclude"), l = (0, import_chunk_sghy0qej.Pe)(UQs, { safe: true }), g = (0, import_chunk_cg8dqz0a.x)() === "windows", E, s, y, r;
  try {
    let A = import_fs.constants.O_RDWR | import_fs.constants.O_APPEND | (0, import_chunk_6mfepmbb.m3)() | import_chunk_jxja0v0z.cr, C = g || !l ? void 0 : globalThis.Bun?.ant?.posixFsAt, d = typeof C?.openat === "function" && typeof C.mkdirat === "function" && typeof C.lstatat === "function" ? C : void 0, B = import_fs.constants.O_RDONLY | import_fs.constants.O_DIRECTORY | (0, import_chunk_6mfepmbb.m3)() | import_chunk_jxja0v0z.cr, f, O = [import_fs.constants.O_CREAT];
    if (d !== void 0) {
      try {
        E = await (0, import_promises.open)(t, B);
      } catch (e) {
        let n = (0, import_chunk_jv7av99m.w)(e);
        if (n === "ELOOP" || n === "ENOTDIR") return { kind: "skipped", reason: "the git folder is a link or not a folder" };
        throw e;
      }
      try {
        d.mkdirat(E.fd, "info");
      } catch (e) {
        if ((0, import_chunk_jv7av99m.w)(e) !== "EEXIST") throw e;
      }
      try {
        s = d.openat(E.fd, "info", B);
      } catch (e) {
        let n = (0, import_chunk_jv7av99m.w)(e);
        if (n === "ELOOP" || n === "ENOTDIR") return { kind: "skipped", reason: "its parent folder is a link or not a folder" };
        throw e;
      }
    } else {
      let e = null;
      if (l && g) {
        let [n, u] = await Promise.all([(0, import_chunk_z6pfqf6e.T$)(t), (0, import_chunk_z6pfqf6e.T$)((0, import_path.dirname)(t))]);
        if (u === null || !H(n, (0, import_path.join)(u, (0, import_path.basename)(t)))) return { kind: "skipped", reason: "the git folder is a link or could not be resolved" };
        e = n;
      }
      if (await (0, import_promises.mkdir)(p).catch((n) => {
        if ((0, import_chunk_jv7av99m.w)(n) !== "EEXIST") throw n;
      }), f = await (0, import_promises.lstat)(p, { bigint: true }), !f.isDirectory() || e !== null && !H(await (0, import_chunk_z6pfqf6e.T$)(p), (0, import_path.join)(e, "info"))) return { kind: "skipped", reason: "its parent folder is a link or not a folder" };
      if (l && (0, import_chunk_kpby9tcv.ia)(f.ino)) return { kind: "skipped", reason: "this drive gives folders no file id, so Claude Code cannot confirm afterwards that the info folder was not swapped" };
      try {
        let n = await (0, import_promises.lstat)(m);
        if (!n.isFile()) return { kind: "skipped", reason: n.isSymbolicLink() ? "it is a symlink" : "it is not a regular file" };
        O = [0];
      } catch (n) {
        if (!(0, import_chunk_jv7av99m.J)(n)) return { kind: "skipped", reason: `Claude Code could not check it (${(0, import_chunk_jv7av99m.w)(n) ?? String(n)})` };
        O = [import_fs.constants.O_CREAT | import_fs.constants.O_EXCL, 0];
      }
    }
    for (let [e, n] of O.entries()) try {
      if (d !== void 0 && s !== void 0) r = d.openat(s, "exclude", A | n, 420);
      else y = await (0, import_promises.open)(m, A | n, 420), r = y.fd;
      break;
    } catch (u) {
      let i = (0, import_chunk_jv7av99m.w)(u);
      if (i === "EEXIST" && e < O.length - 1) continue;
      if (i === "ELOOP") return { kind: "skipped", reason: "it is a symlink" };
      if (i === "EISDIR" || i === "ENXIO") return { kind: "skipped", reason: "it is not a regular file" };
      if (i === "EEXIST" || i === "ENOENT") return { kind: "skipped", reason: "it was replaced or removed while Claude Code was opening it" };
      if (i === "EACCES" || i === "EPERM" || i === "EROFS") {
        let v = await (0, import_promises.open)(m, import_fs.constants.O_RDONLY | (0, import_chunk_6mfepmbb.m3)() | import_chunk_jxja0v0z.cr);
        try {
          let R = await v.stat();
          if (!R.isFile() || R.nlink > 1 || R.size > z) return { kind: "skipped", reason: "it cannot be written to" };
          let L = Buffer.alloc(R.size), { bytesRead: K } = await v.read(L, 0, L.length, 0);
          return h(L.subarray(0, K)) === null ? { kind: "present" } : { kind: "skipped", reason: "it cannot be written to" };
        } finally {
          await v.close();
        }
      }
      throw u;
    }
    if (r === void 0) return { kind: "skipped", reason: "it was replaced or removed while Claude Code was opening it" };
    let o = await (0, import_util.promisify)(import_fs.fstat)(r, { bigint: true }), c;
    try {
      c = d !== void 0 && s !== void 0 ? d.lstatat(s, "exclude") : await (0, import_promises.lstat)(m, { bigint: true });
    } catch (e) {
      if (!(0, import_chunk_jv7av99m.J)(e)) throw e;
      return { kind: "skipped", reason: "it was replaced or removed while Claude Code was opening it" };
    }
    if (!o.isFile() || !c.isFile()) return { kind: "skipped", reason: "it is not a regular file" };
    if (l && (0, import_chunk_kpby9tcv.ia)(o.ino)) return { kind: "skipped", reason: "this drive gives files no id, so Claude Code cannot confirm it is writing to the file it checked" };
    if ((l || g) && (c.dev !== o.dev || c.ino !== o.ino)) return { kind: "skipped", reason: "it was replaced or removed while Claude Code was opening it" };
    if (o.nlink > 1n || c.nlink > 1n) return { kind: "skipped", reason: "it has more than one hard link" };
    if (o.size > z) return { kind: "skipped", reason: "it is larger than 1 MiB" };
    if (l && f !== void 0) {
      let e = await (0, import_promises.lstat)(p, { bigint: true });
      if (!e.isDirectory() || e.dev !== f.dev || e.ino !== f.ino) return { kind: "skipped", reason: "its parent folder was replaced while Claude Code was opening it" };
    }
    let _ = Buffer.alloc(Number(o.size)), { bytesRead: Y } = await (0, import_util.promisify)(import_fs.read)(r, _, 0, _.length, 0), N = _.subarray(0, Y), X = h(N);
    if (X === null) return { kind: "present" };
    let M = N.length > 0 && N.at(-1) !== 10 ? `
` : "", S = Buffer.from(M + X), T = g ? Number(o.size) : null, b = 0;
    while (b < S.length) {
      let { bytesWritten: e } = await (0, import_util.promisify)(import_fs.write)(r, S, b, S.length - b, T);
      if (e <= 0) throw Error("info/exclude: the write stopped making progress");
      if (b += e, T !== null) T += e;
    }
    return { kind: "written" };
  } finally {
    await Promise.all([E?.close(), s !== void 0 ? (0, import_util.promisify)(import_fs.close)(s) : void 0, y !== void 0 ? y.close() : r !== void 0 ? (0, import_util.promisify)(import_fs.close)(r) : void 0]).catch(() => {
    });
  }
}
function H(t, h) {
  return t !== null && t === h;
}
