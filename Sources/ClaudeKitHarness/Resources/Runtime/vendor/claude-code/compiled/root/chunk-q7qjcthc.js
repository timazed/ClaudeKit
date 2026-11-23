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
var chunk_q7qjcthc_exports = {};
__export(chunk_q7qjcthc_exports, {
  Dz: () => Dz,
  ED: () => ED,
  Ege: () => Ege,
  FM: () => FM,
  LM: () => LM,
  Lz: () => Lz,
  NM: () => NM,
  QDs: () => QDs,
  QJe: () => QJe,
  R_n: () => R_n,
  ZDs: () => ZDs,
  ZR: () => ZR,
  _Do: () => _Do,
  a0r: () => a0r,
  ana: () => ana,
  b3: () => b3,
  cna: () => cna,
  dna: () => dna,
  e0s: () => e0s,
  fUl: () => fUl,
  fna: () => fna,
  gDo: () => gDo,
  gL: () => gL,
  gOe: () => gOe,
  hDo: () => hDo,
  hUl: () => hUl,
  iJ: () => iJ,
  ina: () => ina,
  l0r: () => l0r,
  l2: () => l2,
  lna: () => lna,
  mF: () => mF,
  mUl: () => mUl,
  n0s: () => n0s,
  ona: () => ona,
  pUl: () => pUl,
  qoe: () => qoe,
  ra: () => ra,
  sJ: () => sJ,
  sna: () => sna,
  t0s: () => t0s,
  uUl: () => uUl,
  una: () => una,
  vI: () => vI,
  wxt: () => wxt,
  x_n: () => x_n,
  yr: () => yr
});
module.exports = __toCommonJS(chunk_q7qjcthc_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_crypto = require("crypto");
var pe = __toESM(require("fs"));
var ge = __toESM(require("fs/promises"));
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_fs2 = require("fs");
var import_promises2 = require("fs/promises");
var import_path2 = require("path");
var import_promises3 = require("stream/promises");
async function wxt(e, t, n) {
  let r = import_fs2.constants.O_NOFOLLOW;
  if (r === void 0 || (0, import_chunk_cg8dqz0a.x)() === "windows") {
    if (!(await (0, import_promises2.lstat)(e)).isFile()) throw QDs(e);
    await (0, import_promises2.copyFile)(e, t, n?.exclusive ? import_fs2.constants.COPYFILE_EXCL : 0);
    return;
  }
  let o = await (0, import_promises2.open)(e, import_fs2.constants.O_RDONLY | r | (n?.nonBlocking ? import_fs2.constants.O_NONBLOCK ?? 0 : 0));
  try {
    let i = await o.stat();
    if (!i.isFile()) throw QDs(e);
    if (n?.exactMode) {
      let a = await (0, import_promises2.open)(t, n.exclusive ? "wx" : "w", i.mode);
      try {
        await (0, import_promises3.pipeline)(o.createReadStream(), (0, import_fs2.createWriteStream)(t, { fd: a.fd, autoClose: false })), await a.chmod(i.mode & 4095);
      } finally {
        await a.close();
      }
    } else await (0, import_promises3.pipeline)(o.createReadStream(), (0, import_fs2.createWriteStream)(t, { mode: i.mode, flags: n?.exclusive ? "wx" : "w" }));
  } finally {
    await o.close();
  }
}
function QDs(e) {
  return new import_chunk_jv7av99m.A(`Refusing to copy ${e}: it is no longer a regular file (swapped during the copy).`, "plugin copy source swapped for a non-regular file mid-copy");
}
var Qe = /* @__PURE__ */ new Set(["ENOENT", "ENOTDIR", "ELOOP", "EMLINK", "EFTYPE", "EISDIR", "ENAMETOOLONG", "EINVAL"]);
async function Dz(e, t, n) {
  let r = (l) => {
    let u = (0, import_chunk_jv7av99m.w)(l);
    if (n?.throwTransient && (u === void 0 || !Qe.has(u))) throw l;
    return null;
  }, o = (0, import_chunk_cg8dqz0a.x)() === "windows", i = o ? void 0 : import_fs2.constants.O_NOFOLLOW, a = o ? 0 : import_fs2.constants.O_NONBLOCK ?? 0;
  if (i === void 0) {
    let l = await (0, import_promises2.lstat)(e).catch(r);
    if (l === null || !l.isFile()) return null;
  }
  let s;
  try {
    s = await (0, import_promises2.open)(e, import_fs2.constants.O_RDONLY | (i ?? 0) | a);
  } catch (l) {
    return r(l);
  }
  try {
    let l = await s.stat();
    if (!l.isFile() || l.size > t || n?.oneName && l.nlink > 1) return null;
    let { buffer: u, bytesRead: R } = await s.read(Buffer.alloc(t + 1), 0, t + 1, 0);
    if (R > t) return null;
    return u.subarray(0, R).toString("utf-8");
  } catch (l) {
    return r(l);
  } finally {
    await s.close();
  }
}
async function sJ(e, t) {
  let n = (0, import_path2.join)(e, t);
  try {
    return await (0, import_promises2.readlink)(n), false;
  } catch (r) {
    if ((0, import_chunk_jv7av99m.w)(r) === "EINVAL") return !(await (0, import_promises2.lstat)(n)).isSymbolicLink();
    throw r;
  }
}
var ue = false;
function uUl() {
  ue = true;
}
function we() {
  return ue;
}
function qe() {
  return false;
}
function ZDs({ served: e }) {
  if (!we()) return false;
  return e ? false : qe();
}
var me = new Set("drvfs 9p virtiofs cifs smb3 smbfs nfs nfs4 ntfs ntfs3 fuseblk vfat exfat msdos".split(" ")), Ze = new Set(["ext2 ext3 ext4 xfs btrfs zfs f2fs jfs reiserfs nilfs2 bcachefs tmpfs ramfs rootfs squashfs erofs", "proc sysfs devtmpfs devpts mqueue hugetlbfs cgroup cgroup2 pstore bpf debugfs tracefs securityfs", "configfs fusectl binfmt_misc nsfs rpc_pipefs efivarfs selinuxfs nfsd"].flatMap((e) => e.split(" ")));
function fUl(e) {
  let t = (0, import_chunk_7cfjrnwy.nt)(e.fstype, "."), n = gOe(e.source ?? "");
  return me.has(e.fstype) || me.has(t) || t === "fuse" || !Ze.has(e.fstype) || /^[A-Za-z]:/.test(n) || /^(\\\\|\/\/)/.test(n) || /^[^/\s]+:\//.test(n) || /(^|,)aname=drvfs/.test(e.options ?? "");
}
function pUl(e, t) {
  return e === "drvfs" || e === "9p" && /(^|,)aname=drvfs(?=[,;]|$)/.test(t);
}
function gOe(e) {
  return e.replace(/\\([0-7]{3})/g, (t, n) => String.fromCharCode(parseInt(n, 8)));
}
function QJe(e, t) {
  return e === t || e.startsWith(t === "/" ? "/" : `${t}/`);
}
var ED = ".cc-writes", mF = /* @__PURE__ */ new Set(["EXDEV", "EPERM", "EEXIST", "EBUSY"]);
function hDo() {
  return ZDs({ served: false });
}
function ona(e, t) {
  return `Could not rewrite ${e} in place: this file has other names on disk (it is hard-linked, ${t} names in all), and writing it in place would change the file under every one of those names. Remove the extra links, then try again.`;
}
function Ne(e, t) {
  return Object.assign(new import_chunk_jv7av99m.A(ona(e, t), "in-place write refused: the target has other names (a hard link)"), { code: "EMLINK", path: e });
}
var Lz = /* @__PURE__ */ new Set(["EPERM", "EBUSY", "EACCES"]);
function LM(e) {
  return `${e}.tmp.${(0, import_crypto.randomBytes)(4).toString("hex")}`;
}
function NM(e, t) {
  let n = `${t}.tmp.`;
  return e.startsWith(n) && /^[0-9a-f]{8}$/.test(e.slice(n.length));
}
function R_n(e) {
  return /\.tmp\.(?:[0-9a-f]{8}|\d+\.[0-9a-f]{12})$/.test(e);
}
var _e = 4, J = 50, Te = Array.from({ length: _e - 1 }, () => J), e0s = [100, 500, 2e3], ie = [100, 200, 400], Kt = ie.length + 2, Re = Te.slice(1), V = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Set(), (e) => e.clear()), Fe = 26985, Ae = 50, Pe = "/proc/self/mounts", ve = 1048576, xe = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Set(), (e) => e.clear()), ct = new Int32Array(new SharedArrayBuffer(4));
function a0r(e) {
  Atomics.wait(ct, 0, 0, e);
}
function W(e, t, n = _e - 1) {
  return false;
}
var j = 128;
async function lt(e) {
  try {
    return ((await (0, import_promises.lstat)(e)).mode & j) === 0;
  } catch {
    return false;
  }
}
async function ZR(e, t, n = Te) {
  let r = false;
  for (let o = 0; ; o++) try {
    return await e(), r;
  } catch (i) {
    if (W(i, o, n.length)) {
      if (o === 0 && t !== void 0 && await lt(t)) throw i;
      r = true, await (0, import_chunk_5appeerh.K)(n[o]);
      continue;
    }
    throw i;
  }
}
function ra(e, t, n = import_promises.rename) {
  return ZR(() => n(e, t), t);
}
function iJ(e, t, n = import_promises.rename) {
  return ZR(() => n(e, t), t, e0s);
}
function ke(e, t) {
  let n = (0, import_chunk_jv7av99m.w)(e);
  if (n !== void 0 && Lz.has(n) && (0, import_path.isAbsolute)(t)) V.add(t);
}
async function sna(e, t, n = import_promises.rename, r = false) {
  let o = async () => n(e, t), i = !r && !V.has(t);
  try {
    await o();
    return;
  } catch (a) {
    if (!W(a, 0)) throw a;
    try {
      if (((await (0, import_promises.lstat)(t)).mode & j) === 0) throw a;
    } catch (s) {
      if (s === a) throw a;
      i &&= (0, import_chunk_jv7av99m.w)(s) !== "ENOENT";
    }
  }
  await (0, import_chunk_5appeerh.K)(J);
  try {
    await ZR(o, void 0, i ? ie : Re);
  } catch (a) {
    if (i) ke(a, t);
    throw a;
  }
}
function ft(e) {
  try {
    return ((0, import_fs.lstatSync)(e).mode & j) === 0;
  } catch {
    return false;
  }
}
function mUl(e, t, n = import_fs.renameSync) {
  let r = false;
  for (let o = 0; ; o++) try {
    return n(e, t), r;
  } catch (i) {
    if (W(i, o)) {
      if (o === 0 && ft(t)) throw i;
      r = true, a0r(J);
      continue;
    }
    throw i;
  }
}
function ina(e, t, n = import_fs.renameSync) {
  let r = !V.has(t);
  try {
    n(e, t);
    return;
  } catch (i) {
    if (!W(i, 0)) throw i;
    try {
      if (((0, import_fs.lstatSync)(t).mode & j) === 0) throw i;
    } catch (a) {
      if (a === i) throw i;
      r &&= (0, import_chunk_jv7av99m.w)(a) !== "ENOENT";
    }
  }
  a0r(J);
  let o = r ? ie : Re;
  for (let i = 0; ; i++) try {
    n(e, t);
    return;
  } catch (a) {
    if (!W(a, i, o.length)) {
      if (r) ke(a, t);
      throw a;
    }
    a0r(o[i]);
  }
}
var ana = /* @__PURE__ */ new Set(["ENOSPC", "EIO", "EDQUOT", "EFBIG"]), gDo = /* @__PURE__ */ new Set([...ana, "EROFS", "ENOENT"]), l0r = 67108864, Ege = import_fs.constants.O_NONBLOCK;
async function Le(e, t, n = "darwin") {
  return (await lna(e, t, n)).kind === "pass";
}
async function lna(e, t, n = "darwin") {
  if (n !== "win32") return { kind: "pass" };
  try {
    return { kind: (await (0, import_promises.lstat)(e)).isFile() ? "pass" : "refuse" };
  } catch (r) {
    if ((0, import_chunk_jv7av99m.w)(r) === "ENOENT") return { kind: t ? "pass" : "refuse" };
    return { kind: "failed", error: r };
  }
}
function Ce(e, t, n = "darwin") {
  if (n !== "win32") return true;
  try {
    return (0, import_fs.lstatSync)(e).isFile();
  } catch (r) {
    return t && (0, import_chunk_jv7av99m.w)(r) === "ENOENT";
  }
}
async function Ie(e, t = false) {
  if (!t && !await Le(e, true)) return { kind: "unavailable" };
  let n;
  try {
    n = await (0, import_promises.open)(e, import_fs.constants.O_RDONLY | (t ? 0 : import_fs.constants.O_NOFOLLOW) | Ege);
  } catch (r) {
    return (0, import_chunk_jv7av99m.w)(r) === "ENOENT" ? { kind: "absent" } : { kind: "unavailable" };
  }
  try {
    let r = await n.stat();
    if (!r.isFile() || r.size > l0r) return { kind: "unavailable" };
    return { kind: "snapshot", bytes: new Uint8Array(await n.readFile()), mode: r.mode & 4095 };
  } catch {
    return { kind: "unavailable" };
  } finally {
    await n.close().catch(() => {
    });
  }
}
async function ut(e, t, n = false) {
  if (!n && !await Le(e, true)) return false;
  let r;
  try {
    r = await (0, import_promises.open)(e, import_fs.constants.O_WRONLY | import_fs.constants.O_CREAT | import_fs.constants.O_TRUNC | (n ? 0 : import_fs.constants.O_NOFOLLOW) | Ege, t.mode);
  } catch {
    return false;
  }
  try {
    if (!(await r.stat()).isFile()) return await r.close().catch(() => {
    }), false;
    return await r.writeFile(t.bytes), await r.chmod(t.mode).catch(() => {
    }), await r.close(), true;
  } catch {
    return await r.close().catch(() => {
    }), false;
  }
}
async function t0s(e, t, n, r) {
  try {
    let o = await (0, import_promises.lstat)(e, { bigint: true });
    if (!o.isFile()) return false;
    if ((0, import_chunk_kpby9tcv.RF)(o, t)) return true;
    if ((0, import_chunk_jv7av99m.w)(r) !== "ESTALE") return false;
    let i = await Ie(e);
    return i.kind === "snapshot" && !Me(i.bytes, n);
  } catch {
    return false;
  }
}
function n0s(e, t, n, r) {
  try {
    let o = (0, import_fs.lstatSync)(e, { bigint: true });
    if (!o.isFile()) return false;
    if ((0, import_chunk_kpby9tcv.RF)(o, t)) return true;
    if ((0, import_chunk_jv7av99m.w)(r) !== "ESTALE") return false;
    let i = He(e);
    return i.kind === "snapshot" && !Me(i.bytes, n);
  } catch {
    return false;
  }
}
function Me(e, t) {
  let n = typeof t === "string" ? Buffer.from(t) : t;
  return e.length <= n.length && Buffer.compare(e, n.subarray(0, e.length)) === 0;
}
var dt = { restored: "original target restored", removed: "partial target removed", partial: "target left partial \u2014 treat contents as torn", untouched: "target untouched", replaced: "another writer's file left at the target" };
function T(e, t, n) {
  try {
    if (e instanceof Error) e.message = `${e.message}; ${t !== void 0 ? `new contents preserved at ${t}; ` : ""}${dt[n]}`, Object.assign(e, { ...t !== void 0 && { preservedTmp: t }, targetOutcome: n });
  } catch {
  }
  return e;
}
function qoe(e) {
  let t = (0, import_chunk_jv7av99m.w)(e);
  return t === "EINVAL" || t === "ENOTSUP" || t === "EPERM" || t === "ENOSYS";
}
async function he(e, t) {
  try {
    await e.sync();
  } catch (n) {
    if (!qoe(n) && !(t && (0, import_chunk_jv7av99m.w)(n) === "EBADF")) throw n;
  }
}
class x_n extends Error {
  target;
  constructor(e) {
    super("beforePublish refused the write; nothing was published");
    this.target = e;
    this.name = "PublishRefusedError";
  }
}
async function wt(e, t) {
  if (t === void 0) return e;
  try {
    await (await (0, import_promises.open)(t, import_fs.constants.O_RDONLY | import_fs.constants.O_DIRECTORY | import_fs.constants.O_NOFOLLOW)).close();
  } catch (n) {
    switch ((0, import_chunk_jv7av99m.w)(n)) {
      case "ENOENT":
      case "ELOOP":
      case "ENOTDIR":
        return e;
      case "EACCES":
      case "EPERM":
        if (await mt(t)) return e;
        throw n;
      default:
        throw n;
    }
  }
  return (0, import_path.join)(t, (0, import_path.basename)(e));
}
async function mt(e) {
  let t = process.getuid?.();
  if (t === void 0) return false;
  try {
    return (await (0, import_promises.lstat)(e)).uid !== t;
  } catch {
    return false;
  }
}
var D = 3;
async function We(e, t) {
  if (t !== "win32") return false;
  try {
    return await (0, import_promises.lstat)(e), true;
  } catch (n) {
    return (0, import_chunk_jv7av99m.w)(n) === "ENOENT" ? false : { cause: n };
  }
}
function G(e, t) {
  return Object.assign(Error("EEXIST: name already taken (exclusive create)", typeof t === "object" ? { cause: t.cause } : void 0), { code: "EEXIST", syscall: "lstat", path: e });
}
async function oe(e, t, n) {
  for (let r = 1; ; r++) {
    let o = LM(e), i = await We(o, t);
    if (i !== false) {
      if (r < D) continue;
      throw G(o, i);
    }
    try {
      return await n(o);
    } catch (a) {
      if ((0, import_chunk_jv7av99m.w)(a) === "EEXIST" && r < D) continue;
      throw a;
    }
  }
}
async function gL(e, t, n, r = "darwin") {
  return oe(e, r, async (o) => {
    try {
      return await (0, import_promises.writeFile)(o, t, { encoding: "utf8", mode: n, flag: "wx" }), o;
    } catch (i) {
      if ((0, import_chunk_jv7av99m.w)(i) !== "EEXIST") await (0, import_promises.unlink)(o).catch(() => {
      });
      throw i;
    }
  });
}
var Be = { exclusive: true, exactMode: false, nonBlocking: true };
async function dna(e, t, n = "darwin") {
  return oe(t, n, async (r) => {
    try {
      return await wxt(e, r, Be), r;
    } catch (o) {
      if ((0, import_chunk_jv7av99m.w)(o) !== "EEXIST") await (0, import_promises.unlink)(r).catch(() => {
      });
      throw o;
    }
  });
}
async function ht(e, t, n = "darwin") {
  return oe(e, n, async (r) => ({ fh: await (0, import_promises.open)(r, n === "win32" ? "wx" : import_fs.constants.O_WRONLY | import_fs.constants.O_CREAT | import_fs.constants.O_EXCL, t), tmp: r }));
}
async function l2(e, t, n, r = "darwin") {
  await vI(e, r), await (0, import_promises.writeFile)(e, t, { encoding: "utf8", mode: n, flag: "wx" });
}
async function cna(e, t, n = "darwin") {
  await vI(t, n), await wxt(e, t, Be);
}
async function vI(e, t = "darwin") {
  let n = await We(e, t);
  if (n === true) throw G(e, n);
  if (n !== false) throw n.cause;
}
function ae(e) {
  if ((0, import_path.isAbsolute)(e) && !e.startsWith("/proc/")) xe.add(e);
}
function _Do(e) {
  xe.delete(e), V.delete(e);
}
function Ue(e, t, n, r) {
  return false;
}
function De(e, t) {
  return e.split(`
`).some((n) => gOe(n.split(" ")[1] ?? "") === t);
}
async function una(e, t, n, r) {
  if (!Ue(e, t, n, r)) return false;
  try {
    if ((await ge.statfs((0, import_path.dirname)(n))).type !== Fe) return false;
  } catch {
    return false;
  }
  let o = false;
  try {
    let i = await (0, import_promises.open)(Pe, import_fs.constants.O_RDONLY | import_chunk_jxja0v0z.cr);
    try {
      let a = Buffer.allocUnsafe(ve), s = 0;
      while (s < a.length) {
        let { bytesRead: u } = await i.read(a, s, a.length - s, null);
        if (u === 0) break;
        s += u;
      }
      let l = (0, import_path.join)(await (0, import_promises.realpath)((0, import_path.dirname)(n)), (0, import_path.basename)(n));
      o = De(a.toString("utf8", 0, s), l);
    } finally {
      await i.close();
    }
  } catch {
  }
  if (o) return ae(n), false;
  return await (0, import_promises.unlink)(t).catch(() => {
  }), await (0, import_chunk_5appeerh.K)(Ae), true;
}
async function yr(e, t, n, r) {
  return FM(e, t, { mode: n, renameFn: r });
}
function FM(e, t, n) {
  return Ye(e, t, n, false);
}
async function Ye(e, t, n, r) {
  let { mode: o, createMode: i, exactMode: a, flush: s, flushForgivesEbadf: l, followSymlinks: u, inPlaceOnTempCreateRefused: R, stagingDir: g, renameFn: F, beforePublish: y } = n, k = o ?? i, L = () => {
    if (y !== void 0 && !y()) throw new x_n(e);
  }, N = await wt(e, g), z = u === true ? 0 : import_fs.constants.O_NOFOLLOW, E, O = false, M = false, se = async (m) => {
    let f = await Ie(e, u === true), h = f.kind === "snapshot" ? f : void 0;
    L();
    let d = await (0, import_promises.open)(e, import_fs.constants.O_WRONLY | import_fs.constants.O_CREAT | z | Ege, a ?? k), S;
    try {
      S = await d.stat({ bigint: true });
    } catch (_) {
      throw await d.close().catch(() => {
      }), O = m !== void 0, T(_, m, "untouched");
    }
    let p = S.isCharacterDevice();
    if (!S.isFile() && !p) throw await d.close().catch(() => {
    }), Object.assign(Error("refusing the in-place arm on a non-regular target"), { code: "ENXIO", path: e });
    if (!p && S.nlink > 1n && hDo()) throw await d.close().catch(() => {
    }), Ne(e, Number(S.nlink));
    if (y !== void 0 && !y()) {
      if (await d.close().catch(() => {
      }), f.kind === "absent" && S.size === 0n && !p) await (0, import_promises.unlink)(e).catch(() => {
      });
      throw new x_n(e);
    }
    let Q = false;
    try {
      if (!p) await d.truncate(0), Q = true;
      await d.writeFile(t, { encoding: "utf8" });
      let _ = p ? void 0 : a ?? (f.kind !== "absent" ? o : void 0);
      if (_ !== void 0) await d.chmod(_).catch(() => {
      });
      if (s === true) await he(d, l === true);
      await d.close();
    } catch (_) {
      let Ke = Q && await t0s(e, S, t, _);
      if (await d.close().catch(() => {
      }), !Q) throw O = m !== void 0, T(_, m, "untouched");
      if (O = m !== void 0, Ke) throw T(_, m, "replaced");
      let $e = h !== void 0 && await ut(e, h, u === true) ? "restored" : await (0, import_promises.unlink)(e).then(() => true, (Ve) => (0, import_chunk_jv7av99m.w)(Ve) === "ENOENT") ? "removed" : "partial";
      throw T(_, m, $e);
    }
    let ce = m ?? E;
    if (ce !== void 0) await (0, import_promises.unlink)(ce).catch(() => {
    });
  };
  try {
    try {
      if (a !== void 0 || s === true) {
        let f = await ht(N, a ?? k), h = f.fh;
        E = f.tmp;
        let d = false, S;
        try {
          if (await h.writeFile(t, { encoding: "utf8" }), a !== void 0) try {
            await h.chmod(a);
          } catch (p) {
            if (!qoe(p)) throw p;
          }
          if (s === true) await he(h, l === true);
        } catch (p) {
          d = true, S = p;
        }
        if (!d) M = true;
        try {
          await h.close();
        } catch (p) {
          if (!d) throw O = true, T(p, E, "untouched");
        }
        if (d) throw S;
      } else E = await gL(N, t, k), M = true;
    } catch (f) {
      if (R !== true) throw f;
      if (M) throw f;
      if ((0, import_chunk_jv7av99m.w)(f) !== "EACCES") throw f;
      if (!await (0, import_promises.stat)(e).then(() => true, () => false)) throw f;
      await se(void 0);
      return;
    }
    if (E === void 0) throw Error("staging block exited without a staging file");
    let m = E;
    try {
      let f = F ?? import_promises.rename;
      await sna(m, e, (h, d) => (L(), f(h, d))), _Do(e);
    } catch (f) {
      let h = (0, import_chunk_jv7av99m.w)(f);
      if (h === void 0 || !(mF.has(h) || r && !gDo.has(h))) throw f;
      if (await una(f, m, e, r)) {
        E = void 0, await Ye(e, t, n, true);
        return;
      }
      await se(m);
    }
  } catch (m) {
    if (E !== void 0 && !O) await (0, import_promises.unlink)(E).catch(() => {
    });
    throw m;
  }
}
function Y(e) {
  try {
    (0, import_fs.unlinkSync)(e);
  } catch {
  }
}
function fna(e, t, n, r) {
  if (!Ue(e, t, n, r)) return false;
  try {
    if (pe.statfsSync((0, import_path.dirname)(n)).type !== Fe) return false;
  } catch {
    return false;
  }
  let o = false;
  try {
    let i = (0, import_fs.openSync)(Pe, import_fs.constants.O_RDONLY | import_chunk_jxja0v0z.cr);
    try {
      let a = Buffer.allocUnsafe(ve), s = 0;
      while (s < a.length) {
        let u = (0, import_fs.readSync)(i, a, s, a.length - s, null);
        if (u === 0) break;
        s += u;
      }
      let l = (0, import_path.join)((0, import_fs.realpathSync)((0, import_path.dirname)(n)), (0, import_path.basename)(n));
      o = De(a.toString("utf8", 0, s), l);
    } finally {
      (0, import_fs.closeSync)(i);
    }
  } catch {
  }
  if (o) return ae(n), false;
  return Y(t), a0r(Ae), true;
}
function He(e) {
  if (!Ce(e, true)) return { kind: "unavailable" };
  let t;
  try {
    t = (0, import_fs.openSync)(e, import_fs.constants.O_RDONLY | import_fs.constants.O_NOFOLLOW | Ege);
  } catch (n) {
    return (0, import_chunk_jv7av99m.w)(n) === "ENOENT" ? { kind: "absent" } : { kind: "unavailable" };
  }
  try {
    let n = (0, import_fs.fstatSync)(t);
    if (!n.isFile() || n.size > l0r) return { kind: "unavailable" };
    return { kind: "snapshot", bytes: new Uint8Array((0, import_fs.readFileSync)(t)), mode: n.mode & 4095 };
  } catch {
    return { kind: "unavailable" };
  } finally {
    try {
      (0, import_fs.closeSync)(t);
    } catch {
    }
  }
}
function pt(e, t) {
  if (!Ce(e, true)) return false;
  let n;
  try {
    n = (0, import_fs.openSync)(e, import_fs.constants.O_WRONLY | import_fs.constants.O_CREAT | import_fs.constants.O_TRUNC | import_fs.constants.O_NOFOLLOW | Ege, t.mode);
  } catch {
    return false;
  }
  let r = false;
  try {
    if (!(0, import_fs.fstatSync)(n).isFile()) return r = true, (0, import_fs.closeSync)(n), false;
    (0, import_fs.writeFileSync)(n, t.bytes);
    try {
      (0, import_fs.fchmodSync)(n, t.mode);
    } catch {
    }
    return r = true, (0, import_fs.closeSync)(n), true;
  } catch {
    if (!r) try {
      (0, import_fs.closeSync)(n);
    } catch {
    }
    return false;
  }
}
function Xe(e, t) {
  if (t !== "win32") return false;
  try {
    return (0, import_fs.lstatSync)(e), true;
  } catch (n) {
    return (0, import_chunk_jv7av99m.w)(n) === "ENOENT" ? false : { cause: n };
  }
}
function hUl(e, t = "darwin") {
  let n = Xe(e, t);
  if (n === true) throw G(e, n);
  if (n !== false) throw n.cause;
}
function gt(e, t, n, r = "darwin") {
  for (let o = 1; ; o++) {
    let i = LM(e), a = Xe(i, r);
    if (a !== false) {
      if (o < D) continue;
      throw G(i, a);
    }
    try {
      return (0, import_fs.writeFileSync)(i, t, { encoding: "utf8", mode: n, flag: "wx" }), i;
    } catch (s) {
      if ((0, import_chunk_jv7av99m.w)(s) === "EEXIST") {
        if (o < D) continue;
        throw s;
      }
      throw Y(i), s;
    }
  }
}
function b3(e, t, n, r) {
  Je(e, t, n, r, false);
}
function Je(e, t, n, r, o) {
  let i = false, a;
  try {
    a = gt(e, t, n);
    try {
      ina(a, e, r), _Do(e);
    } catch (s) {
      let l = (0, import_chunk_jv7av99m.w)(s);
      if (l === void 0 || !(mF.has(l) || o && !gDo.has(l))) throw s;
      if (fna(s, a, e, o)) {
        a = void 0, Je(e, t, n, r, true);
        return;
      }
      let u = He(e), R = u.kind === "snapshot" ? u : void 0, g = (0, import_fs.openSync)(e, import_fs.constants.O_WRONLY | import_fs.constants.O_CREAT | import_fs.constants.O_NOFOLLOW | Ege, n), F = false, y;
      {
        try {
          y = (0, import_fs.fstatSync)(g, { bigint: true });
        } catch (N) {
          try {
            (0, import_fs.closeSync)(g);
          } catch {
          }
          throw i = true, T(N, a, "untouched");
        }
        if (F = y.isCharacterDevice(), !y.isFile() && !F) {
          try {
            (0, import_fs.closeSync)(g);
          } catch {
          }
          throw Object.assign(Error("refusing the in-place arm on a non-regular target"), { code: "ENXIO", path: e });
        }
        if (!F && y.nlink > 1n && hDo()) {
          try {
            (0, import_fs.closeSync)(g);
          } catch {
          }
          throw Ne(e, Number(y.nlink));
        }
      }
      let k = false, L = false;
      try {
        if (!F) (0, import_fs.ftruncateSync)(g, 0), L = true;
        if ((0, import_fs.writeFileSync)(g, t, { encoding: "utf8" }), n !== void 0 && u.kind !== "absent" && !F) try {
          (0, import_fs.fchmodSync)(g, n);
        } catch {
        }
        k = true, (0, import_fs.closeSync)(g);
      } catch (N) {
        let z = L && n0s(e, y, t, N);
        if (!k) try {
          (0, import_fs.closeSync)(g);
        } catch {
        }
        if (!L) throw i = true, T(N, a, "untouched");
        if (i = true, z) throw T(N, a, "replaced");
        let E = R !== void 0 && pt(e, R), O = "partial";
        if (E) O = "restored";
        else try {
          (0, import_fs.unlinkSync)(e), O = "removed";
        } catch (M) {
          O = (0, import_chunk_jv7av99m.w)(M) === "ENOENT" ? "removed" : "partial";
        }
        throw T(N, a, O);
      }
      Y(a);
    }
  } catch (s) {
    if (a !== void 0 && !i) Y(a);
    throw s;
  }
}
