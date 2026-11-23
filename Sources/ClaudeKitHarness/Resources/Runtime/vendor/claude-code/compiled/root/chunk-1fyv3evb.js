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
var chunk_1fyv3evb_exports = {};
__export(chunk_1fyv3evb_exports, {
  openWin32Backend: () => pe
});
module.exports = __toCommonJS(chunk_1fyv3evb_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xppq9kzc = require("/$bunfs/root/chunk-xppq9kzc.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_dc6nb19r = require("/$bunfs/root/chunk-dc6nb19r.js");
var import_chunk_0bsjxp14 = require("/$bunfs/root/chunk-0bsjxp14.js");
var import_chunk_p6rv87rz = require("/$bunfs/root/chunk-p6rv87rz.js");
var import_chunk_y2bpkgdh = require("/$bunfs/root/chunk-y2bpkgdh.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_fs = require("fs");
var x = import_chunk_0bsjxp14.tI.FILE_LIST_DIRECTORY | import_chunk_0bsjxp14.tI.FILE_TRAVERSE | import_chunk_0bsjxp14.tI.FILE_READ_ATTRIBUTES | import_chunk_0bsjxp14.tI.SYNCHRONIZE, oe = import_chunk_0bsjxp14.tI.FILE_TRAVERSE | import_chunk_0bsjxp14.tI.FILE_READ_ATTRIBUTES | import_chunk_0bsjxp14.tI.SYNCHRONIZE, H = import_chunk_0bsjxp14.Gre.FILE_DIRECTORY_FILE | import_chunk_0bsjxp14.Gre.FILE_OPEN_REPARSE_POINT | import_chunk_0bsjxp14.Gre.FILE_SYNCHRONOUS_IO_NONALERT, g = import_chunk_0bsjxp14.Gre.FILE_OPEN_REPARSE_POINT | import_chunk_0bsjxp14.Gre.FILE_SYNCHRONOUS_IO_NONALERT, ae = 4096, ce = 4194304, le = /* @__PURE__ */ new Set([2147483693, 3221226763]);
function Q(s) {
  return (s & ce) !== 0 || (s & ae) !== 0 && (s & import_chunk_0bsjxp14.qG.REPARSE_POINT) !== 0;
}
var Ee = /[. ]+$/, C = import_chunk_0bsjxp14.tI.FILE_READ_ATTRIBUTES | import_chunk_0bsjxp14.tI.SYNCHRONIZE, D = 1048576, ee = 262144, de = import_fs.constants.O_WRONLY | import_fs.constants.O_RDWR | import_fs.constants.O_APPEND | import_fs.constants.O_TRUNC, ue = (import_fs.constants.O_NOFOLLOW ?? 0) | (import_fs.constants.O_NONBLOCK ?? 0), ne = 116444736000000000n;
function Ne(s) {
  switch (s) {
    case "EBADF":
      return Error("the file is closed");
    case "EEXIST":
      return Error("the name is taken");
    case "EINVAL":
      return Error("write(): offset, length and position must be whole numbers of at least 0, and offset plus length must not pass the end of the buffer");
    case "WORKING_NAME_NOT_PLAIN":
      return Error("not a plain file name here");
    case "WORKING_FILE_HELD":
      return Error("another program holds the file");
    case "ELOOP":
      return Error("a link stands at the name");
    case "EISDIR":
      return Error("a directory stands at the name");
    case "ENOTDIR":
      return Error("a link stands where a directory should be");
    case "WORKING_ROOT_NOT_CANONICAL":
      return Error("tree anchor root is not a canonical path");
    case "WORKING_FILE_NOT_SERVED":
      return Error("this file is stored through a Windows storage feature (cloud sync, deduplication) and could not be reopened to read its real contents; it is skipped this round");
    case "WORKING_FILE_OFFLINE":
      return Error("this file is online-only (its data is not on this machine); it is not downloaded, so it is skipped this round");
  }
}
function m(s) {
  let e = Ne(s);
  return e.code = s, e;
}
function S(s, e = false) {
  if (s === "" || s === "." || s === ".." || /[\\/:*?"<>|\x00-\x1f]/.test(s) || Ee.test(s) || (0, import_chunk_z6pfqf6e.lx)(s) || (0, import_chunk_p6rv87rz.Aji)(s) || !e && (0, import_chunk_p6rv87rz.TTr)(s)) throw m("WORKING_NAME_NOT_PLAIN");
  return s;
}
function B(s) {
  return (s - ne) * 100n;
}
function W(s) {
  return BigInt(Math.round(s * 1e6)) * 10n + ne;
}
function Ie(s, e, E, T) {
  let R = (e.attributes & import_chunk_0bsjxp14.qG.REPARSE_POINT) !== 0 && (0, import_chunk_0bsjxp14.oks)(e.reparseTag), O = !R && (e.attributes & import_chunk_0bsjxp14.qG.DIRECTORY) !== 0, _ = R ? 0o120000n : O ? 0o040000n : 0o100000n, b = (e.attributes & import_chunk_0bsjxp14.qG.READONLY) !== 0 ? 0o444n : 0o666n, h = (y) => y / 1000000n, L = (y) => new Date(Number(y / 1000000n));
  return { dev: s, ino: e.ino, mode: _ | b, nlink: e.nlink, uid: 0n, gid: 0n, rdev: 0n, size: O ? 0n : e.size, blksize: 4096n, blocks: T / 512n, atimeMs: h(E.atimeNs), mtimeMs: h(e.mtimeNs), ctimeMs: h(e.ctimeNs), birthtimeMs: h(E.birthtimeNs), atimeNs: E.atimeNs, mtimeNs: e.mtimeNs, ctimeNs: e.ctimeNs, birthtimeNs: E.birthtimeNs, atime: L(E.atimeNs), mtime: L(e.mtimeNs), ctime: L(e.ctimeNs), birthtime: L(E.birthtimeNs), isFile: () => !R && !O, isDirectory: () => O, isSymbolicLink: () => R, isBlockDevice: () => false, isCharacterDevice: () => false, isFIFO: () => false, isSocket: () => false };
}
function me(s) {
  let e = (E) => Number(E);
  return { dev: e(s.dev), ino: e(s.ino), mode: e(s.mode), nlink: e(s.nlink), uid: 0, gid: 0, rdev: 0, size: e(s.size), blksize: e(s.blksize), blocks: e(s.blocks), atimeMs: e(s.atimeNs) / 1e6, mtimeMs: e(s.mtimeNs) / 1e6, ctimeMs: e(s.ctimeNs) / 1e6, birthtimeMs: e(s.birthtimeNs) / 1e6, atime: s.atime, mtime: s.mtime, ctime: s.ctime, birthtime: s.birthtime, isFile: () => s.isFile(), isDirectory: () => s.isDirectory(), isSymbolicLink: () => s.isSymbolicLink(), isBlockDevice: () => false, isCharacterDevice: () => false, isFIFO: () => false, isSocket: () => false };
}
function A(s, e) {
  let E = s.queryInformation(e), T = (E.attributes & import_chunk_0bsjxp14.qG.REPARSE_POINT) !== 0 ? s.queryAttributeTag(e).reparseTag : 0, R = s.queryId(e), O = s.queryVolume(e), _ = { dev32: BigInt(O.serialNumber), dev64: R?.volumeSerialNumber ?? null, ino: E.indexNumber, size: E.size, nlink: BigInt(E.numberOfLinks), mtimeNs: B(E.lastWriteTime), ctimeNs: B(E.changeTime), attributes: E.attributes, reparseTag: T }, b = { atimeNs: B(E.lastAccessTime), birthtimeNs: B(E.creationTime) };
  return { ..._, stats: (h) => Ie(h === "serial64" && _.dev64 !== null ? _.dev64 : _.dev32, _, b, E.allocationSize) };
}
function F(s) {
  return (s.attributes & import_chunk_0bsjxp14.qG.REPARSE_POINT) !== 0 && (0, import_chunk_0bsjxp14.oks)(s.reparseTag);
}
function U(s, e) {
  let E = s.queryAttributes(e);
  return (E & import_chunk_0bsjxp14.qG.REPARSE_POINT) !== 0 ? s.queryAttributeTag(e) : { attributes: E, reparseTag: 0 };
}
function Oe(s, e) {
  let E = (R) => R !== null && e.ino !== 0n && e.dev === R && (0, import_chunk_y2bpkgdh.$vt)(e.ino, s.ino), T = E(s.dev32) ? "serial32" : E(s.dev64) ? "serial64" : null;
  return (0, import_chunk_w578pjby.t)(`anchor (win32): identity bridge ${T ?? "none"} \u2014 bun dev=${e.dev} ino=${e.ino}; nt serial32=${s.dev32} serial64=${s.dev64 ?? "n/a"} index=${s.ino}`), T;
}
function te(s) {
  return /^\\\\\?\\UNC\\/i.test(s) || s.startsWith("\\\\") && !s.startsWith("\\\\?\\") && !s.startsWith("\\\\.\\");
}
async function pe(s, e, E) {
  let { fs: T } = s, { realRoot: R } = E;
  if (te(R)) return (0, import_chunk_w578pjby.t)("anchor (win32): the root is on a network share: no anchored backend here"), { unanchored: "remote_volume" };
  let O = 0, _;
  try {
    if (O = e.open(0, (0, import_chunk_0bsjxp14.CTr)(R), { access: x, disposition: import_chunk_0bsjxp14.Uvt.FILE_OPEN, options: H }), (e.queryDevice(O).characteristics & import_chunk_0bsjxp14.rks) !== 0) return e.close(O), (0, import_chunk_w578pjby.t)("anchor (win32): the root is on a remote volume: no anchored backend here"), { unanchored: "remote_volume" };
    let n = A(e, O);
    if (F(n)) throw m("ELOOP");
    if (await (0, import_chunk_dc6nb19r.RTr)(s, E) !== R) throw m("WORKING_ROOT_NOT_CANONICAL");
    let r = Oe(n, await T.lstat(R, { bigint: true }));
    if (r === null) return e.close(O), { unanchored: "unstable_identity" };
    _ = r;
  } catch (n) {
    if (O !== 0) e.close(O);
    let r = (0, import_chunk_jv7av99m.w)(n);
    if (r === "ENOENT" || r === "ENOTDIR" || r === "ELOOP" || r === "EPERM" || r === "WORKING_ROOT_NOT_CANONICAL" || r === "EBUSY" || r === "EMFILE" || r === "ENFILE" || r === "ENOMEM" || r === "EAGAIN" || r === "ETIMEDOUT" || r === "EIO") throw n;
    return (0, import_chunk_w578pjby.t)(`anchor (win32): bring-up failed (${r ?? "no code"}, status 0x${((0, import_chunk_0bsjxp14.jYe)(n) ?? 0).toString(16)}): no anchored backend here`, { level: "warn" }), { unanchored: "bring_up_failed" };
  }
  let b = (n, r, o, a, c = false) => e.open(n, S(r, c), { access: o, disposition: import_chunk_0bsjxp14.Uvt.FILE_OPEN, options: a }), h = async (n, r, o, a, c) => {
    let u = b(n, r, o, a);
    try {
      return await c(u);
    } finally {
      e.close(u);
    }
  }, L = (n, r) => h(n, r, C, g, (o) => A(e, o).stats(_)), y = async (n, r, o) => {
    if ((o & ~ue & de) !== 0) throw Error("anchored open never writes on this backend");
    let a = K(n, r, g, false);
    try {
      let c = U(e, a);
      if (F(c)) throw m("ELOOP");
      if ((c.attributes & import_chunk_0bsjxp14.qG.DIRECTORY) !== 0) throw m("EISDIR");
      if (Q(c.attributes)) throw m("WORKING_FILE_OFFLINE");
      if ((c.attributes & import_chunk_0bsjxp14.qG.REPARSE_POINT) === 0) return V(a);
    } catch (c) {
      throw e.close(a), c;
    }
    return V(ie(n, r, a));
  }, K = (n, r, o, a) => {
    let c = (u) => e.open(n, S(r), { access: u, disposition: import_chunk_0bsjxp14.Uvt.FILE_OPEN, options: o, dontReparse: a });
    try {
      return c(import_chunk_0bsjxp14.nks | import_chunk_0bsjxp14.tI.FILE_WRITE_ATTRIBUTES);
    } catch (u) {
      let I = (0, import_chunk_jv7av99m.w)(u);
      if (I !== "EPERM" && I !== "EROFS") throw u;
      return c(import_chunk_0bsjxp14.nks);
    }
  }, ie = (n, r, o) => {
    try {
      let a;
      try {
        a = K(n, r, import_chunk_0bsjxp14.Gre.FILE_SYNCHRONOUS_IO_NONALERT, true);
      } catch (c) {
        if (le.has((0, import_chunk_0bsjxp14.jYe)(c) ?? 0)) throw (0, import_chunk_w578pjby.t)(`anchor (win32): a filter-served file's second open met a link refusal (status 0x${((0, import_chunk_0bsjxp14.jYe)(c) ?? 0).toString(16)}); reported as a link`), c;
        throw (0, import_chunk_w578pjby.t)(`anchor (win32): a filter-served file could not be reopened for its bytes (${(0, import_chunk_jv7av99m.w)(c) ?? "no code"}, status 0x${((0, import_chunk_0bsjxp14.jYe)(c) ?? 0).toString(16)}); unreadable this round`), m("WORKING_FILE_NOT_SERVED");
      }
      try {
        let c = e.queryInformation(a);
        if (Q(c.attributes)) throw m("WORKING_FILE_OFFLINE");
        if (c.indexNumber !== e.queryInformation(o).indexNumber || e.queryVolume(a).serialNumber !== e.queryVolume(o).serialNumber) throw (0, import_chunk_w578pjby.t)("anchor (win32): a filter-served file reopened as another file; unreadable this round"), m("WORKING_FILE_NOT_SERVED");
        return a;
      } catch (c) {
        throw e.close(a), c;
      }
    } finally {
      e.close(o);
    }
  }, V = (n) => {
    let r = false, o = () => {
      if (r) throw m("EBADF");
      return n;
    }, a = () => A(e, o()).stats(_);
    async function c(d) {
      return d?.bigint === true ? a() : me(a());
    }
    let u = (d, l) => e.read(o(), d, BigInt(l));
    async function* I() {
      for (let d = 0; ; ) {
        let l = Buffer.allocUnsafe(ee), N = u(l, d);
        if (N === 0) return;
        d += N, yield l.subarray(0, N), await new Promise((f) => setImmediate(f));
      }
    }
    return { stat: c, read: async (d, l, N, f) => {
      let k = u(d.subarray(l, l + Math.min(N, ee)), f);
      return await new Promise((p) => setImmediate(p)), { bytesRead: k };
    }, readFile: async () => {
      let d = [];
      for await (let l of I()) d.push(l);
      return Buffer.concat(d);
    }, createReadStream: () => I(), chmod: async (d) => {
      let l = e.queryAttributes(o()), N = (d & 128) === 0 ? l | import_chunk_0bsjxp14.qG.READONLY : l & ~import_chunk_0bsjxp14.qG.READONLY;
      if (N !== l) e.setAttributes(o(), N === 0 ? import_chunk_0bsjxp14.qG.NORMAL : N);
    }, utimes: async (d, l) => e.setTimes(o(), W(d), W(l)), close: async () => {
      if (!r) r = true, e.close(n);
    } };
  }, q = async (n) => {
    try {
      await n();
    } catch (r) {
      throw (0, import_chunk_jv7av99m.w)(r) === "EBUSY" ? Object.assign(m("WORKING_FILE_HELD"), { cause: r }) : r;
    }
  }, G = (n) => q(async () => {
    await (0, import_chunk_q7qjcthc.ZR)(n);
  }), Y = import_chunk_0bsjxp14.tI.DELETE | import_chunk_0bsjxp14.tI.FILE_WRITE_ATTRIBUTES | C, z = (n) => {
    try {
      return A(e, n).stats(_);
    } catch (r) {
      return re("a new file's stat could not be read through its handle, so the folder check goes on without it", r), null;
    }
  }, v = (n, r, o, a, c, u) => (c ? q : G)(() => h(n, r, u === void 0 ? import_chunk_0bsjxp14.tI.DELETE | C : Y, g, async (I) => {
    e.renameByHandle(I, o, S(a), c);
    try {
      if (await u?.(z(I)) === true) e.deleteByHandle(I);
    } catch (d) {
      re("a renamed file could not be removed through its handle after its folder failed the check, so it stays at its new name", d);
    }
  })), Z = (n, r, o, a) => G(() => h(n, r, import_chunk_0bsjxp14.tI.FILE_WRITE_ATTRIBUTES | import_chunk_0bsjxp14.tI.SYNCHRONIZE, g, (c) => e.linkByHandle(c, o, S(a)))), X = (n, r) => G(() => h(n, r, Y, g, (o) => {
    let a = U(e, o);
    if ((a.attributes & import_chunk_0bsjxp14.qG.DIRECTORY) !== 0 && !F(a)) throw m("EISDIR");
    e.deleteByHandle(o);
  })), j = (n, r, o, a = false) => {
    let c = b(n, r, o, H, a);
    try {
      if (F(U(e, c))) throw m("ENOTDIR");
      return c;
    } catch (u) {
      throw e.close(c), u;
    }
  }, J = { openDir: async (n, r, o) => j(n, r, x, o), openDirToPass: async (n, r, o) => j(n, r, oe, o), mkdir: async (n, r) => {
    e.close(e.open(n, S(r), { access: C, disposition: import_chunk_0bsjxp14.Uvt.FILE_CREATE, options: H, attributes: import_chunk_0bsjxp14.qG.NORMAL }));
  }, closeDir: async (n) => e.close(n), create: async (n, r, o, a, c, u, I, d) => {
    let l = e.open(n, S(r), { access: import_chunk_0bsjxp14.Qko | import_chunk_0bsjxp14.tI.FILE_READ_ATTRIBUTES | import_chunk_0bsjxp14.tI.DELETE, disposition: import_chunk_0bsjxp14.Uvt.FILE_CREATE, options: import_chunk_0bsjxp14.Gre.FILE_NON_DIRECTORY_FILE | import_chunk_0bsjxp14.Gre.FILE_OPEN_REPARSE_POINT | import_chunk_0bsjxp14.Gre.FILE_SYNCHRONOUS_IO_NONALERT | (u ? import_chunk_0bsjxp14.Gre.FILE_WRITE_THROUGH : 0), attributes: (c & 128) === 0 ? import_chunk_0bsjxp14.qG.READONLY : import_chunk_0bsjxp14.qG.NORMAL });
    try {
      for (let N = 0; N < a.length; N += D) if (e.write(l, a.subarray(N, N + D), BigInt(N)), N + D < a.length) await new Promise((f) => setImmediate(f));
      await d?.(z(l));
    } catch (N) {
      try {
        e.deleteByHandle(l);
      } catch {
      }
      throw e.close(l), N;
    }
    e.close(l);
  }, createAndOpen: async (n, r, o, a) => {
    let c = e.open(n, S(r), { access: import_chunk_0bsjxp14.Qko | import_chunk_0bsjxp14.tI.FILE_READ_ATTRIBUTES, disposition: import_chunk_0bsjxp14.Uvt.FILE_CREATE, options: import_chunk_0bsjxp14.Gre.FILE_NON_DIRECTORY_FILE | import_chunk_0bsjxp14.Gre.FILE_OPEN_REPARSE_POINT | import_chunk_0bsjxp14.Gre.FILE_SYNCHRONOUS_IO_NONALERT | import_chunk_0bsjxp14.Gre.FILE_WRITE_THROUGH, attributes: (a & 128) === 0 ? import_chunk_0bsjxp14.qG.READONLY : import_chunk_0bsjxp14.qG.NORMAL }), u = false, I = () => {
      if (u) throw m("EBADF");
      return c;
    };
    return { stat: async () => A(e, I()).stats(_), writeFile: async (d) => {
      for (let l = 0; l < d.length; l += D) e.write(I(), d.subarray(l, l + D), BigInt(l)), await new Promise((N) => setImmediate(N));
    }, write: async (d, l, N, f) => {
      if (![l, N, f].every((p) => Number.isSafeInteger(p) && p >= 0) || l + N > d.length) throw m("EINVAL");
      let k = d.subarray(l, l + Math.min(N, D));
      return e.write(I(), k, BigInt(f)), await new Promise((p) => setImmediate(p)), { bytesWritten: k.length };
    }, utimes: async (d, l) => e.setTimes(I(), W(d), W(l)), sync: async () => {
    }, close: async () => {
      if (!u) u = true, e.close(c);
    } };
  }, link: Z, rename: (n, r, o, a) => v(n, r, o, a, true), renameNoReplace: (n, r, o, a, c) => v(n, r, o, a, false, c), symlink: async (n, r, o) => {
    (0, import_chunk_0bsjxp14.Rji)(n);
    let a;
    try {
      a = e.open(r, S(o), { access: import_chunk_0bsjxp14.Qko | import_chunk_0bsjxp14.tI.FILE_READ_ATTRIBUTES | import_chunk_0bsjxp14.tI.DELETE, disposition: import_chunk_0bsjxp14.Uvt.FILE_CREATE, options: import_chunk_0bsjxp14.Gre.FILE_NON_DIRECTORY_FILE | import_chunk_0bsjxp14.Gre.FILE_OPEN_REPARSE_POINT | import_chunk_0bsjxp14.Gre.FILE_SYNCHRONOUS_IO_NONALERT, attributes: import_chunk_0bsjxp14.qG.NORMAL });
    } catch (c) {
      throw (0, import_chunk_jv7av99m.w)(c) === "EISDIR" ? m("EEXIST") : c;
    }
    try {
      e.setSymlink(a, n);
    } catch (c) {
      try {
        e.deleteByHandle(a);
      } catch {
      }
      throw e.close(a), c;
    }
    e.close(a);
  }, readlink: (n, r) => h(n, r, C, g, (o) => e.readSymlink(o)), unlink: X, rmdir: (n, r) => h(n, r, Y, H, (o) => {
    if (F(U(e, o))) throw m("ENOTDIR");
    e.deleteByHandle(o);
  }), list: async (n, r) => e.listDirectory(n, r), lstat: L, open: (n, r, o, a) => y(n, r, a), hold: async (n) => {
    let r = await T.realpath(n).catch(() => null), o = r !== null && /^[a-zA-Z]:$/.test(r) ? `${r}\\` : r;
    if (o === null || te(o)) return null;
    let a;
    try {
      a = e.open(0, (0, import_chunk_0bsjxp14.CTr)(o), { access: x, disposition: import_chunk_0bsjxp14.Uvt.FILE_OPEN, options: H });
    } catch {
      return null;
    }
    try {
      if ((e.queryDevice(a).characteristics & import_chunk_0bsjxp14.rks) !== 0) return e.close(a), null;
      let [c, u] = await Promise.all([A(e, a), T.lstat(o, { bigint: true })]), I = c.stats(_);
      if (F(c) || !I.isDirectory() || !u.isDirectory() || I.ino === 0n || I.dev !== u.dev || !(0, import_chunk_y2bpkgdh.$vt)(I.ino, u.ino)) return e.close(a), null;
    } catch {
      return e.close(a), null;
    }
    return J.holdOpenedDir(a, o);
  }, getHeldDir: (n) => n.dir, holdOpenedDir: (n, r) => {
    let o = false;
    return { realPath: r, dir: n, stat: async () => A(e, n).stats(_), close: async () => {
      if (!o) o = true, e.close(n);
    } };
  }, renameOut: (n, r, o, a) => v(n, r, o.dir, a, true), renameIn: (n, r, o, a) => v(n.dir, r, o, a, true), linkIn: (n, r, o, a) => Z(n.dir, r, o, a), renameInNoReplace: (n, r, o, a, c) => v(n.dir, r, o, a, false, c), statIn: (n, r) => L(n.dir, r), openIn: (n, r, o) => y(n.dir, r, o), unlinkIn: (n, r) => X(n.dir, r) }, M = false, se = { stat: async () => {
    if (M) throw m("EBADF");
    return A(e, O).stats(_);
  }, close: async () => {
    if (!M) M = true, e.close(O);
  } };
  return (0, import_chunk_w578pjby.t)("anchor (win32): held-handle backend up"), { root: se, held: O, ops: J };
}
function re(s, e) {
  let E = (0, import_chunk_0bsjxp14.jYe)(e);
  if (E === void 0) {
    (0, import_chunk_k449cc64.i)(e);
    return;
  }
  (0, import_chunk_w578pjby.t)(`anchor (win32): ${s} (${(0, import_chunk_jv7av99m.w)(e) ?? "no code"}, status 0x${E.toString(16)})`);
}
