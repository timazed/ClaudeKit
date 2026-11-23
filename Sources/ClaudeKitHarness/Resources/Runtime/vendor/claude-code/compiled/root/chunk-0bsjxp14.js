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
var chunk_0bsjxp14_exports = {};
__export(chunk_0bsjxp14_exports, {
  CTr: () => CTr,
  Gre: () => Gre,
  Qko: () => Qko,
  Rji: () => Rji,
  Uvt: () => Uvt,
  XZl: () => XZl,
  jYe: () => jYe,
  nks: () => nks,
  oks: () => oks,
  qG: () => qG,
  rks: () => rks,
  tI: () => tI
});
module.exports = __toCommonJS(chunk_0bsjxp14_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var tI = { DELETE: 65536, READ_CONTROL: 131072, SYNCHRONIZE: 1048576, FILE_LIST_DIRECTORY: 1, FILE_READ_DATA: 1, FILE_WRITE_DATA: 2, FILE_APPEND_DATA: 4, FILE_READ_EA: 8, FILE_WRITE_EA: 16, FILE_TRAVERSE: 32, FILE_READ_ATTRIBUTES: 128, FILE_WRITE_ATTRIBUTES: 256 }, nks = tI.READ_CONTROL | tI.FILE_READ_DATA | tI.FILE_READ_ATTRIBUTES | tI.FILE_READ_EA | tI.SYNCHRONIZE, Qko = tI.READ_CONTROL | tI.FILE_WRITE_DATA | tI.FILE_WRITE_ATTRIBUTES | tI.FILE_WRITE_EA | tI.FILE_APPEND_DATA | tI.SYNCHRONIZE;
var Uvt = { FILE_OPEN: 1, FILE_CREATE: 2 }, Gre = { FILE_DIRECTORY_FILE: 1, FILE_WRITE_THROUGH: 2, FILE_SYNCHRONOUS_IO_NONALERT: 32, FILE_NON_DIRECTORY_FILE: 64, FILE_OPEN_REPARSE_POINT: 2097152 }, qG = { READONLY: 1, DIRECTORY: 16, NORMAL: 128, REPARSE_POINT: 1024 }, rks = 16, m = 2684354572, F = 16384, A = 8, R = 12;
function oks(e) {
  return (e & 536870912) !== 0;
}
var E = { STOPPED_ON_SYMLINK: 2147483693, NOT_IMPLEMENTED: 3221225474, INVALID_INFO_CLASS: 3221225475, INFO_LENGTH_MISMATCH: 3221225476, INVALID_HANDLE: 3221225480, INVALID_PARAMETER: 3221225485, NO_SUCH_FILE: 3221225487, INVALID_DEVICE_REQUEST: 3221225488, ACCESS_DENIED: 3221225506, OBJECT_NAME_INVALID: 3221225523, OBJECT_NAME_NOT_FOUND: 3221225524, OBJECT_NAME_COLLISION: 3221225525, OBJECT_PATH_NOT_FOUND: 3221225530, OBJECT_PATH_SYNTAX_BAD: 3221225531, SHARING_VIOLATION: 3221225539, FILE_LOCK_CONFLICT: 3221225556, DELETE_PENDING: 3221225558, DISK_FULL: 3221225599, MEDIA_WRITE_PROTECTED: 3221225634, FILE_IS_A_DIRECTORY: 3221225658, NOT_SUPPORTED: 3221225659, NOT_SAME_DEVICE: 3221225684, DIRECTORY_NOT_EMPTY: 3221225729, NOT_A_DIRECTORY: 3221225731, NAME_TOO_LONG: 3221225734, CANNOT_DELETE: 3221225761, FILE_DELETED: 3221225763, INVALID_LEVEL: 3221225800, USER_MAPPED_FILE: 3221226051, TOO_MANY_LINKS: 3221226085, REPARSE_POINT_ENCOUNTERED: 3221226763, BAD_NETWORK_PATH: 3221225662, BAD_NETWORK_NAME: 3221225676, PRIVILEGE_NOT_HELD: 3221225569, IO_REPARSE_TAG_NOT_HANDLED: 3221226105, NOT_A_REPARSE_POINT: 3221226101, IO_REPARSE_DATA_INVALID: 3221226104, NO_MEMORY: 3221225495, INSUFFICIENT_RESOURCES: 3221225626, DEVICE_NOT_READY: 3221225635, IO_TIMEOUT: 3221225653, TOO_MANY_OPENED_FILES: 3221225759, IO_DEVICE_ERROR: 3221225861 }, b = /* @__PURE__ */ new Map([[E.NO_SUCH_FILE, "ENOENT"], [E.OBJECT_NAME_NOT_FOUND, "ENOENT"], [E.OBJECT_PATH_NOT_FOUND, "ENOENT"], [E.OBJECT_NAME_INVALID, "EINVAL"], [E.OBJECT_PATH_SYNTAX_BAD, "EINVAL"], [E.OBJECT_NAME_COLLISION, "EEXIST"], [E.ACCESS_DENIED, "EPERM"], [E.CANNOT_DELETE, "EPERM"], [E.DELETE_PENDING, "EPERM"], [E.SHARING_VIOLATION, "EBUSY"], [E.FILE_LOCK_CONFLICT, "EBUSY"], [E.USER_MAPPED_FILE, "EBUSY"], [E.FILE_DELETED, "ENOENT"], [E.TOO_MANY_LINKS, "EMLINK"], [E.INVALID_HANDLE, "EBADF"], [E.NOT_A_DIRECTORY, "ENOTDIR"], [E.FILE_IS_A_DIRECTORY, "EISDIR"], [E.DIRECTORY_NOT_EMPTY, "ENOTEMPTY"], [E.NOT_SAME_DEVICE, "EXDEV"], [E.STOPPED_ON_SYMLINK, "ELOOP"], [E.REPARSE_POINT_ENCOUNTERED, "ELOOP"], [E.IO_REPARSE_TAG_NOT_HANDLED, "ELOOP"], [E.NOT_A_REPARSE_POINT, "EINVAL"], [E.IO_REPARSE_DATA_INVALID, "EINVAL"], [E.BAD_NETWORK_PATH, "ENOENT"], [E.BAD_NETWORK_NAME, "ENOENT"], [E.PRIVILEGE_NOT_HELD, "EPERM"], [E.DISK_FULL, "ENOSPC"], [E.MEDIA_WRITE_PROTECTED, "EROFS"], [E.NAME_TOO_LONG, "ENAMETOOLONG"], [E.NOT_SUPPORTED, "ENOTSUP"], [E.NOT_IMPLEMENTED, "ENOTSUP"], [E.INVALID_DEVICE_REQUEST, "ENOTSUP"], [E.INVALID_INFO_CLASS, "ENOTSUP"], [E.INVALID_LEVEL, "ENOTSUP"], [E.INVALID_PARAMETER, "EINVAL"], [E.INFO_LENGTH_MISMATCH, "EINVAL"], [E.NO_MEMORY, "ENOMEM"], [E.INSUFFICIENT_RESOURCES, "ENOMEM"], [E.TOO_MANY_OPENED_FILES, "EMFILE"], [E.IO_DEVICE_ERROR, "EIO"], [E.DEVICE_NOT_READY, "EAGAIN"], [E.IO_TIMEOUT, "ETIMEDOUT"]]);
function p(e, n) {
  let N = n >>> 0;
  return Object.assign(Error("Windows file-system call failed"), { code: b.get(N) ?? "EUNKNOWN", syscall: e, status: N });
}
function jYe(e) {
  return typeof e === "object" && e !== null && "status" in e && typeof e.status === "number" ? e.status : void 0;
}
function L(e) {
  let n = jYe(e);
  return n === E.NOT_IMPLEMENTED || n === E.INVALID_INFO_CLASS || n === E.INVALID_PARAMETER || n === E.NOT_SUPPORTED || n === E.INVALID_DEVICE_REQUEST || n === E.INVALID_LEVEL;
}
function CTr(e) {
  let n = e.startsWith("\\\\?\\UNC\\") ? "\\\\" + e.slice(8) : e.startsWith("\\\\?\\") ? e.slice(4) : e, N = !n.includes("/") && !/(^|\\)\.\.?(\\|$)/.test(n);
  if (N && /^[a-zA-Z]:\\/.test(n)) return "\\??\\" + n;
  if (N && /^\\\\[^\\?.][^\\]*\\[^\\]+/.test(n)) return "\\??\\UNC\\" + n.slice(2);
  throw Object.assign(Error("not an absolute Windows drive or network-share path"), { code: "EINVAL" });
}
function Rji(e) {
  let n = Buffer.from(CTr(e), "utf16le"), N = Buffer.from(D(CTr(e)), "utf16le"), s = R + n.length + N.length;
  if (A + s > F) throw Object.assign(Error("symbolic link target too long for a reparse point"), { code: "ENAMETOOLONG" });
  let I = Buffer.alloc(A + s);
  return I.writeUInt32LE(m, 0), I.writeUInt16LE(s, 4), I.writeUInt16LE(0, 8), I.writeUInt16LE(n.length, 10), I.writeUInt16LE(n.length, 12), I.writeUInt16LE(N.length, 14), I.writeUInt32LE(0, 16), n.copy(I, A + R), N.copy(I, A + R + n.length), I;
}
function D(e) {
  if (/^\\\?\?\\UNC\\/i.test(e)) return "\\\\" + e.slice(8);
  return /^\\\?\?\\[A-Za-z]:/.test(e) ? e.slice(4) : e;
}
var T;
function XZl() {
  if (T !== void 0) return T;
  return T = null, T;
}
function _(e) {
  return (...n) => {
    try {
      return e(...n);
    } catch (N) {
      let s = jYe(N);
      if (s === void 0) throw N;
      throw p(typeof N === "object" && N !== null && "syscall" in N && typeof N.syscall === "string" ? N.syscall : "ntdll", s);
    }
  };
}
function y(e) {
  if (typeof e?.open !== "function") throw Error("not in this runtime");
  let n = _(e.deleteByHandle), N = _(e.renameByHandle), s = _(e.queryAttributes), I = _(e.setAttributes), S = _(e.listDirectory), x = _(e.open), f = _(e.linkByHandle), C = _(e.readSymlink), u = (r, o) => {
    (0, import_chunk_w578pjby.t)(`anchor (win32): ${r} failed (status 0x${((jYe(o) ?? 0) >>> 0).toString(16)}); trying the older class`);
  }, c = (r) => r !== "" && r !== "." && r !== ".." && !/[\\/:]/.test(r), l = () => Object.assign(Error("directory-relative names must be a plain file name: not '.', '..', and no separator or ':'"), { code: "EINVAL" });
  return { open: (r, o, i) => {
    if (r !== 0 && !c(o)) throw l();
    return x(r, o, i);
  }, close: _(e.close), write: _(e.write), read: _(e.read), queryInformation: _(e.queryInformation), queryAttributes: s, queryAttributeTag: _(e.queryAttributeTag), queryId: _(e.queryId), queryVolume: _(e.queryVolume), queryDevice: _(e.queryDevice), deleteByHandle: (r) => {
    try {
      n(r, true);
      return;
    } catch (o) {
      if (!L(o) && jYe(o) !== E.CANNOT_DELETE) throw o;
      u("FileDispositionInformationEx", o);
    }
    try {
      n(r, false);
    } catch (o) {
      if (jYe(o) !== E.CANNOT_DELETE) throw o;
      let i = s(r);
      if ((i & qG.READONLY) === 0) throw o;
      I(r, (i & ~qG.READONLY) === 0 ? qG.NORMAL : i & ~qG.READONLY);
      try {
        n(r, false);
      } catch (O) {
        try {
          I(r, i);
        } catch {
        }
        throw O;
      }
    }
  }, renameByHandle: (r, o, i, O) => {
    if (!c(i)) throw l();
    try {
      N(r, o, i, O, true);
      return;
    } catch (a) {
      if (!L(a)) throw a;
      u("FileRenameInformationEx", a);
    }
    N(r, o, i, O, false);
  }, linkByHandle: (r, o, i) => {
    if (!c(i)) throw l();
    f(r, o, i);
  }, setAttributes: I, setTimes: _(e.setTimes), setSymlink: _(e.setSymlink), readSymlink: (r) => D(C(r)), listDirectory: (r, o) => S(r, o === void 0 ? void 0 : o >= 0 ? Math.min(Math.floor(o), 4294967295) : 0), openHandleCount: e.openHandleCount };
}
