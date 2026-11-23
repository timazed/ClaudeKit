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
var chunk_n74jpb9a_exports = {};
__export(chunk_n74jpb9a_exports, {
  $Nn: () => $Nn,
  Jfs: () => Jfs,
  KDe: () => KDe,
  Kxi: () => Kxi,
  L9e: () => L9e,
  Qfs: () => Qfs,
  Uwt: () => Uwt,
  Vxi: () => Vxi,
  Xal: () => Xal,
  Xfs: () => Xfs,
  Yxi: () => Yxi,
  _Ut: () => _Ut,
  qxi: () => qxi
});
module.exports = __toCommonJS(chunk_n74jpb9a_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_74mx55jd = require("/$bunfs/root/chunk-74mx55jd.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_5sjwf92x = require("/$bunfs/root/chunk-5sjwf92x.js");
var import_chunk_73gwqz1r = require("/$bunfs/root/chunk-73gwqz1r.js");
var import_chunk_7e12xj51 = require("/$bunfs/root/chunk-7e12xj51.js");
var import_string_decoder = require("string_decoder");
var import_stream = require("stream");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_fs2 = require("fs");
var import_promises2 = require("fs/promises");
var L = 10485760, Vxi = 134217728;
class Uwt extends Error {
  sizeInBytes;
  maxSizeBytes;
  constructor(n, e, t = "") {
    super(`File content (${(0, import_chunk_7e12xj51.dn)(n)}) exceeds maximum allowed size (${(0, import_chunk_7e12xj51.dn)(e)}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.${t}`);
    this.sizeInBytes = n;
    this.maxSizeBytes = e;
    this.name = "FileTooLargeError";
  }
}
var Kxi = "The requested line range contains over";
class _Ut extends Error {
  selectedBytes;
  maxSelectedBytes;
  constructor(n, e, t = "") {
    super(`${Kxi} ${(0, import_chunk_7e12xj51.dn)(e)} of text, more than a read can return. Use a smaller limit \u2014 or, if a single line is this large, no limit will fit it: search for specific content instead.${t}`);
    this.selectedBytes = n;
    this.maxSelectedBytes = e;
    this.name = "SelectedRangeTooLargeError";
  }
}
async function L9e(n, e = 0, t, i, s, a) {
  s?.throwIfAborted();
  let r = a?.truncateOnByteLimit ?? false, u = a?.maxSelectedBytes, o = a?.handle, d = o ? a?.handleStats ?? await o.stat() : await (0, import_promises.stat)(n);
  if (u !== void 0 && d.isFile() && d.size < L && d.size <= u) u = void 0;
  if (d.isDirectory()) throw Object.assign(Error(`EISDIR: illegal operation on a directory, read '${n}'`), { code: "EISDIR", errno: -21, syscall: "read", path: n });
  if (d.isFile() && d.size < L) {
    if (!r && i !== void 0 && d.size > i) throw new Uwt(d.size, i);
    let f = o ? await o.readFile({ signal: s }) : await (0, import_promises.readFile)(n, { signal: s });
    if (!r && i !== void 0) {
      if (f.length > i) throw new Uwt(f.length, i);
    }
    let { encoding: c, notText: l } = (0, import_chunk_73gwqz1r.yft)(f);
    return { ...Jfs(f.toString(c), d.size, d.mtimeMs, e, t, r ? i : void 0, u), ...l && { notText: l } };
  }
  return v(n, e, t, i, u, d.isFile() ? void 0 : Vxi, d.isFile() ? d.size : 0, r, s, o ? { handle: o, mtimeMs: d.mtimeMs, positional: d.isFile() } : void 0);
}
function Xfs(n) {
  let e = n.join(`
`);
  return n.length === 1 ? (0, import_chunk_7cfjrnwy.K6e)(e) : e;
}
function Jfs(n, e, t, i, s, a, r) {
  let u = n.charCodeAt(0) === 65279;
  if (u) e -= 3;
  let o = u ? n.slice(1) : n;
  if (i === 0 && s === void 0 && a === void 0 && r === void 0) {
    let m = o.includes("\r") ? o.replaceAll(`\r
`, `
`) : o;
    if (m.endsWith("\r")) m = m.slice(0, -1);
    let S = 1, p = m.indexOf(`
`);
    while (p !== -1) S++, p = m.indexOf(`
`, p + 1);
    return { content: m, lineCount: S, totalLines: S, totalBytes: e, readBytes: Buffer.byteLength(m, "utf8"), mtimeMs: t, truncatedByBytes: false };
  }
  let d = s !== void 0 ? i + s : 1 / 0, f = [], c = 0, l = 0, h, y = 0, b = false;
  function g(m) {
    if (r !== void 0 || a !== void 0) {
      let S = f.length > 0 ? 1 : 0, p = y + S + Buffer.byteLength(m);
      if (a !== void 0 && p > a) {
        b = true;
        return;
      }
      if (r !== void 0 && p > r) throw new _Ut(p, r);
      y = p;
    }
    f.push(m);
  }
  while ((h = o.indexOf(`
`, l)) !== -1) {
    if (c >= i && c < d && !b) {
      let m = o.slice(l, h);
      if (m.endsWith("\r")) m = m.slice(0, -1);
      g(m);
    }
    c++, l = h + 1;
  }
  if (c >= i && c < d && !b) {
    let m = o.slice(l);
    if (m.endsWith("\r")) m = m.slice(0, -1);
    g(m);
  }
  c++;
  let B = Xfs(f);
  return { content: B, lineCount: f.length, totalLines: c, totalBytes: e, readBytes: Buffer.byteLength(B, "utf8"), mtimeMs: t, truncatedByBytes: b };
}
function A(n) {
  (0, import_fs.fstat)(n, (e, t) => {
    this.resolveMtime(e ? 0 : t.mtimeMs);
  });
}
function M(n) {
  if (this.isFirstChunk && (0, import_chunk_73gwqz1r.Cge)(n) === "utf16le") this.decoder = new import_string_decoder.StringDecoder("utf16le");
  let e = this.decoder.write(n);
  if (e.length > 0) R.call(this, e);
}
function R(n) {
  let e = n;
  if (this.isFirstChunk) {
    if (this.isFirstChunk = false, e.charCodeAt(0) === 65279) e = e.slice(1);
  }
  let t = Buffer.byteLength(e);
  if (this.totalBytesRead += t, this.hardCapBytes !== void 0 && this.totalBytesRead > this.hardCapBytes) {
    this.stream.destroy(new Uwt(this.totalBytesRead, this.hardCapBytes));
    return;
  }
  if (!this.truncateOnByteLimit && this.maxBytes !== void 0 && this.totalBytesRead > this.maxBytes) {
    this.stream.destroy(new Uwt(Math.max(this.sizeOnDisk, this.totalBytesRead), this.maxBytes));
    return;
  }
  let i = this.partial, s = this.partialBytes + t;
  this.partial = "", this.partialBytes = 0;
  let a = 0, r;
  while ((r = e.indexOf(`
`, a)) !== -1) {
    if (this.currentLineIndex >= this.offset && this.currentLineIndex < this.endLine) {
      let u = (a === 0 ? i : "") + e.slice(a, r);
      if (u.endsWith("\r")) u = u.slice(0, -1);
      let o = this.truncateOnByteLimit && this.maxBytes !== void 0;
      if (o || this.maxSelectedBytes !== void 0) {
        let d = this.selectedLines.length > 0 ? 1 : 0, f = this.selectedBytes + d + Buffer.byteLength(u);
        if (o && f > this.maxBytes) this.truncatedByBytes = true, this.endLine = this.currentLineIndex;
        else if (this.maxSelectedBytes !== void 0 && f > this.maxSelectedBytes) {
          this.stream.destroy(new _Ut(f, this.maxSelectedBytes));
          return;
        } else this.selectedBytes = f, this.selectedLines.push(u);
      } else this.selectedLines.push(u);
    }
    this.currentLineIndex++, a = r + 1;
  }
  if (a < e.length) {
    if (this.currentLineIndex >= this.offset && this.currentLineIndex < this.endLine) {
      let u = a === 0 ? i + e : e.slice(a), o = a === 0 ? s : Buffer.byteLength(u), d = this.truncateOnByteLimit && this.maxBytes !== void 0;
      if (d || this.maxSelectedBytes !== void 0) {
        let f = this.selectedLines.length > 0 ? 1 : 0, c = this.selectedBytes + f + o;
        if (d && c > this.maxBytes) {
          this.truncatedByBytes = true, this.endLine = this.currentLineIndex;
          return;
        }
        if (this.maxSelectedBytes !== void 0 && c > this.maxSelectedBytes) {
          this.stream.destroy(new _Ut(c, this.maxSelectedBytes));
          return;
        }
      }
      this.partial = u, this.partialBytes = o;
    }
  }
}
function _() {
  let n = this.decoder.end();
  if (n.length > 0) {
    if (R.call(this, n), this.stream.destroyed) return;
  }
  let e = this.partial;
  if (e.endsWith("\r")) e = e.slice(0, -1);
  if (this.currentLineIndex >= this.offset && this.currentLineIndex < this.endLine) if (this.truncateOnByteLimit && this.maxBytes !== void 0) {
    let s = this.selectedLines.length > 0 ? 1 : 0;
    if (this.selectedBytes + s + Buffer.byteLength(e) > this.maxBytes) this.truncatedByBytes = true;
    else this.selectedLines.push(e);
  } else this.selectedLines.push(e);
  this.currentLineIndex++;
  let t = Xfs(this.selectedLines), i = this.truncatedByBytes;
  this.mtimeReady.then((s) => {
    this.resolve({ content: t, lineCount: this.selectedLines.length, totalLines: this.currentLineIndex, totalBytes: this.totalBytesRead, readBytes: Buffer.byteLength(t, "utf8"), mtimeMs: s, truncatedByBytes: i });
  });
}
function v(n, e, t, i, s, a, r, u, o, d) {
  return new Promise((f, c) => {
    let l = { stream: d ? qxi(d.handle, d.positional, o) : (0, import_fs.createReadStream)(n, { highWaterMark: 524288, ...o ? { signal: o } : void 0 }), decoder: new import_string_decoder.StringDecoder("utf8"), offset: e, endLine: t !== void 0 ? e + t : 1 / 0, maxBytes: i, maxSelectedBytes: s, hardCapBytes: a, sizeOnDisk: r, truncateOnByteLimit: u, resolve: f, totalBytesRead: 0, selectedBytes: 0, truncatedByBytes: false, currentLineIndex: 0, selectedLines: [], partial: "", partialBytes: 0, isFirstChunk: true, resolveMtime: () => {
    }, mtimeReady: null };
    if (l.mtimeReady = new Promise((h) => {
      l.resolveMtime = h;
    }), d) l.resolveMtime(d.mtimeMs);
    else l.stream.once("open", A.bind(l));
    l.stream.on("data", z.bind(l)), l.stream.once("end", H.bind(l)), l.stream.once("error", c);
  });
}
function F(n) {
  return function(...e) {
    try {
      n.apply(this, e);
    } catch (t) {
      this.stream.destroy((0, import_chunk_jv7av99m.D)(t));
    }
  };
}
var z = F(M), H = F(_);
function qxi(n, e, t) {
  let s = Buffer.allocUnsafe(524288), a = e ? 0 : null, r = false, u = new import_stream.Readable({ read() {
    if (r) return;
    r = true, n.read(s, 0, 524288, a).then(({ bytesRead: o }) => {
      if (r = false, u.destroyed) return;
      if (o === 0) {
        u.push(null);
        return;
      }
      if (a !== null) a += o;
      u.push(Buffer.from(s.subarray(0, o)));
    }).catch((o) => {
      r = false, u.destroy((0, import_chunk_jv7av99m.D)(o));
    });
  } });
  if (t) {
    let o = () => {
      u.destroy(t.reason instanceof Error ? t.reason : new import_chunk_jv7av99m.Ie());
    };
    if (t.aborted) o();
    else t.addEventListener("abort", o, { once: true }), u.once("close", () => t.removeEventListener("abort", o));
  }
  return u;
}
async function $Nn(n, e, t = {}) {
  if ((0, import_chunk_f9x2f6cx.Y)()) {
    if (n.has(e)) (0, import_chunk_74mx55jd.KQ)("file_state_resync");
    return null;
  }
  let i = P(n, e);
  if (!i) return null;
  try {
    let s = await (0, import_chunk_2yx6c1y2._D)(e);
    if (s <= i.timestamp) return null;
    let a = (0, import_chunk_5sjwf92x.IR)((await (0, import_chunk_73gwqz1r.wk)(e)).content);
    if (n.get(e) !== i) return null;
    return j(n, e, i, s, a, t.requireReadBeforeWrite === true);
  } catch {
    return null;
  }
}
function P(n, e) {
  let t = n.get(e);
  if (!t) return null;
  let i = t.isPartialView === true && (t.offset ?? 1) <= 1 && t.limit === void 0;
  return (0, import_chunk_5sjwf92x.AU)(t) || i ? t : null;
}
function j(n, e, t, i, s, a) {
  let r = (0, import_chunk_5sjwf92x.c9)(t, s);
  return n.set(e, { content: s, timestamp: i, offset: void 0, limit: void 0, ...(!r || t.contentNotInModelContext) && { contentNotInModelContext: true }, ...(t.isPartialView || a && !r) && { isPartialView: true }, ...(a && !r || t.refreshedBehindModel) && { refreshedBehindModel: true }, ...t.startupMemorySeed && { startupMemorySeed: true }, ...r && t.seededFromContext && { seededFromContext: true } }), r ? "unchanged" : "changed";
}
function G(n, e) {
  if (n.content === "" && n.contentHash !== void 0) {
    let s = n.contentLength ?? 0;
    return e < s || e > s * 4 + 3;
  }
  let t = Buffer.byteLength(n.content), i = 0;
  for (let s = n.content.indexOf(`
`); s !== -1; ) i++, s = n.content.indexOf(`
`, s + 1);
  return e < t || e > t + i + 3;
}
function Yxi() {
  return (0, import_chunk_6e68m1dj.hn)() ? { product: import_chunk_6mfepmbb.qR, attach: import_chunk_6mfepmbb.p3 } : void 0;
}
function KDe(n, e, t) {
  let i = `${t.product}/`;
  if (!n.startsWith(i)) return false;
  let s = n.slice(i.length);
  return s.split("/").every((r) => r !== "" && r !== "." && r !== "..") && e === `${t.attach}/${s}`;
}
function Qfs(n, e, t) {
  let i = Yxi();
  if (i === void 0) return false;
  return KDe(n, e, i) || t?.orTheLinkItself === true && n === i.product && e === i.attach;
}
async function Xal(n, e, t, i, s, a = {}) {
  let r = false, u = (o, d) => {
    if (!r && !s.aborted) r = true, a.onOutcome?.(o, d);
  };
  try {
    return await V(n, e, t, i, s, u);
  } catch (o) {
    throw u("other"), o;
  }
}
async function V(n, e, t, i, s, a) {
  let r = (l) => (a(l), false);
  if (!(0, import_chunk_5sjwf92x.AU)(t)) return r("partial_view");
  if (t.touchCompared) return r("already_compared");
  s.throwIfAborted();
  let u = (0, import_chunk_w578pjby.G8)(), o = (0, import_chunk_cg8dqz0a.x)(), d = o === "linux" || o === "wsl", f = typeof u === "number" && (d || o === "macos" && !await (0, import_chunk_6mfepmbb.hKt)()), c;
  try {
    if (!f && await (0, import_chunk_865at33z.Yzt)(e) === void 0) return r("other");
    c = typeof u === "number" ? await (0, import_chunk_865at33z.dz)(e, u | import_fs2.constants.O_NOFOLLOW, o) : await (0, import_promises2.open)(e, u);
  } catch (l) {
    let h = (0, import_chunk_jv7av99m.w)(l);
    if (h === "ENOENT" || h === "ELOOP") return r(h === "ENOENT" ? "enoent" : "leaf_link");
    throw l;
  }
  try {
    let l = await c.stat(), h = d ? await (0, import_promises2.readlink)(`/proc/self/fd/${c.fd}`).catch(() => {
      return;
    }) : e;
    if (!l.isFile()) return r("not_regular");
    if (l.size > i) return r("oversize");
    if (l.nlink > 1) return r("nlink");
    if (h === void 0) return r("other");
    if (h !== e) return r("link_on_path");
    if (!f) {
      let g = await c.stat({ bigint: true }), B = await (0, import_chunk_865at33z.Yzt)(e);
      if (B === void 0 || B.dev !== g.dev || B.ino !== g.ino || (0, import_chunk_kpby9tcv.ia)(B.ino)) return r("link_on_path");
    }
    let y = false, b = false;
    try {
      y = !G(t, l.size) && (0, import_chunk_5sjwf92x.c9)(t, (await L9e(e, 0, void 0, i, s, { handle: c, handleStats: l })).content), b = true;
    } finally {
      if (!s.aborted && n.get(e) === t) {
        if (n.set(e, { ...t, ...y && { timestamp: Math.floor(l.mtimeMs) }, touchCompared: true }), b) a(y ? "same" : "differs", l.size);
      } else y = false, a("other");
    }
    return y;
  } finally {
    let l = c.close();
    if (s.aborted) l.catch(() => {
    });
    else await l;
  }
}
