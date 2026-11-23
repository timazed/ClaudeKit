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
var chunk_8nvd6fqx_exports = {};
__export(chunk_8nvd6fqx_exports, {
  Fp: () => Fp,
  LVt: () => LVt,
  P7i: () => P7i,
  R7i: () => R7i,
  SIs: () => SIs,
  Yct: () => Yct,
  _Is: () => _Is,
  _K: () => _K,
  cMr: () => cMr,
  dJe: () => dJe,
  fMr: () => fMr,
  gMr: () => gMr,
  hMr: () => hMr,
  iIo: () => iIo,
  ih: () => ih,
  lJe: () => lJe,
  mMr: () => mMr,
  pMr: () => pMr,
  uMr: () => uMr,
  x7i: () => x7i,
  yIs: () => yIs
});
module.exports = __toCommonJS(chunk_8nvd6fqx_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_os = require("os");
var import_path = require("path");
function Fp() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_TMPDIR;
  if (e) return e;
  return "/tmp";
}
var iIo = 44, cMr = "claude-pdf-", uMr = "claude-preview-", fMr = "cc-history-prefetch-", pMr = "claude-paste-", R7i = "claude-host-";
function _K(e) {
  let r = process.getuid?.();
  if (r === void 0) return;
  let t = e.replace(/[\/]+$/, "") || e, o = "Set CLAUDE_CODE_TMPDIR to a directory you control, or ask an administrator to remove it.", i;
  try {
    i = (0, import_fs.openSync)(t, import_fs.constants.O_RDONLY | import_fs.constants.O_DIRECTORY | import_fs.constants.O_NOFOLLOW);
  } catch (n) {
    let a = (0, import_chunk_jv7av99m.w)(n);
    if (a === "ELOOP" || a === "ENOTDIR") throw Error(`Temp directory ${e} is not a directory (may be an attacker-planted symlink). Refusing to use it. ${o}`);
    if (a === "EACCES") {
      let d;
      try {
        let m = (0, import_fs.lstatSync)(t);
        if (m.uid !== r) d = m.uid;
      } catch {
      }
      if (d !== void 0) throw new import_chunk_jv7av99m.A(`Temp directory ${e} is owned by uid ${d}, expected ${r}. Refusing to use it \u2014 another user may have pre-created it. ${o}`, "temp dir owned by another uid (EACCES at open); refusing to use it");
      throw new import_chunk_jv7av99m.A(`Temp directory ${e} is not readable (its mode may have been altered, or a path component denies search). Refusing to use it \u2014 restore its permissions (chmod 0700) or remove it. ${o}`, "temp dir unreadable (owner-read or path search bit missing); refusing to use it");
    }
    throw n;
  }
  try {
    let n = (0, import_fs.fstatSync)(i);
    if (n.uid !== r) {
      if (r === 0 && import_chunk_c203g5kd.s.CLAUDE_CODE_CONTAINER_ID) return (0, import_chunk_42tcgre6.q)("warn", "tempdir_owner_mismatch", { observed_uid: n.uid }), n;
      throw Error(`Temp directory ${e} is owned by uid ${n.uid}, expected ${r}. Refusing to use it \u2014 another user may have pre-created it. ${o}`);
    }
    if ((n.mode & 511) !== 448) return (0, import_fs.fchmodSync)(i, 448), (0, import_fs.fstatSync)(i);
    return n;
  } finally {
    (0, import_fs.closeSync)(i);
  }
}
class l {
  ensured = void 0;
  childProcessTmpDirMemo = void 0;
  markEnsured(e) {
    this.ensured = e;
  }
  setChildProcessTmpDirMemo(e) {
    this.childProcessTmpDirMemo = e;
  }
}
var h = new import_chunk_2904xtvq.j(() => new l()), _Is = "temp_root_volume_full";
function Yct() {
  return `claude-${process.getuid?.() ?? 0}`;
}
function x7i() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_SHORT_TEMP_DIRS ?? !(0, import_chunk_3t7ve0wy.Ol)();
}
function mMr(e) {
  return e;
}
function hMr(e) {
  return [e];
}
function ih() {
  return _(h.of((0, import_chunk_f9x2f6cx.N)().host));
}
function _(e) {
  if ((0, import_chunk_f9x2f6cx.Y)()) throw Error("The temp directory is unavailable in a diskless session: nothing is created, verified or written under the shared per-uid temp root");
  let r = Fp(), t = (0, import_path.join)(r, Yct());
  if (t !== e.ensured) {
    if (typeof process.getuid === "function") {
      try {
        (0, import_fs.mkdirSync)(t, { recursive: true, mode: 448 });
      } catch (o) {
        if ((0, import_chunk_jv7av99m.nH)(o)) {
          let i = (0, import_chunk_jv7av99m.w)(o), n = i === "EDQUOT" ? `your disk quota on the volume holding ${r} is used up (${i})` : `the volume holding ${r} is full (${i})`;
          throw new import_chunk_jv7av99m.A(`Claude Code's temporary directory ${t} could not be created: ${n}. Free space on that volume, or set CLAUDE_CODE_TMPDIR to a directory on another one, then try again.`, "claude temp dir not created: volume full (ENOSPC/EDQUOT)", _Is);
        }
        throw o;
      }
      _K(t);
    } else try {
      (0, import_fs.mkdirSync)(t, { recursive: true, mode: 448 });
    } catch {
    }
    e.markEnsured(t);
  }
  return t;
}
var yIs = "plugin-tool-staging", gMr = "bot_protected_tengu_graceful_dream";
function LVt() {
  let e = ih();
  (0, import_fs.mkdirSync)(e, { recursive: true, mode: 448 }), _K(e);
  let r = (0, import_path.join)(e, yIs);
  return (0, import_fs.mkdirSync)(r, { recursive: true, mode: 448 }), _K(r), r;
}
function lJe() {
  let e = h.of((0, import_chunk_f9x2f6cx.N)().host), r = _(e);
  if (Buffer.byteLength(r) <= iIo) return r;
  let t = e.childProcessTmpDirMemo;
  if (t?.forDir === r) return t.result;
  let o;
  try {
    o = SIs();
  } catch {
    o = r;
  }
  return e.setChildProcessTmpDirMemo({ forDir: r, result: o }), o;
}
function SIs() {
  if ((0, import_chunk_f9x2f6cx.Y)()) throw Error("The default temp directory is unavailable in a diskless session");
  let r = (0, import_path.join)("/tmp", Yct());
  return (0, import_fs.mkdirSync)(r, { recursive: true, mode: 448 }), _K(r), r;
}
function P7i() {
  let e = Fp();
  if (Buffer.byteLength(e) <= iIo) return e;
  return "/tmp";
}
function dJe(e = "claude-prompt", r = ".md", t) {
  let o = t?.contentHash ? (0, import_crypto.createHash)("sha256").update(t.contentHash).digest("hex").slice(0, 16) : (0, import_crypto.randomUUID)();
  return (0, import_path.join)(ih(), `${e}-${o}${r}`);
}
