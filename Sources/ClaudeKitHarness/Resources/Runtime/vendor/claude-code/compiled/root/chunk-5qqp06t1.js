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
var chunk_5qqp06t1_exports = {};
__export(chunk_5qqp06t1_exports, {
  Gst: () => Gst,
  SUt: () => SUt,
  bsn: () => bsn,
  wsn: () => wsn,
  zst: () => zst
});
module.exports = __toCommonJS(chunk_5qqp06t1_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_path = require("path");
var import_zlib = require("zlib");
var d = { MAX_FILE_SIZE: 536870912, MAX_TOTAL_SIZE: 1073741824, MAX_FILE_COUNT: 1e5, MAX_COMPRESSION_RATIO: 50 };
function bsn(e) {
  if ((0, import_chunk_n2dbhmj2.RM)(e)) return false;
  for (let r of e.split(/[/\\]/)) if (/^\.\. [ .]*$/.test(r)) return false;
  let n = (0, import_path.normalize)(e);
  if ((0, import_path.isAbsolute)(n)) return false;
  return true;
}
function v(e, n) {
  n.fileCount++;
  let r;
  if (n.fileCount > d.MAX_FILE_COUNT) r = `Archive contains too many files: ${n.fileCount} (max: ${d.MAX_FILE_COUNT})`;
  let o = (0, import_chunk_tp3c5q2s.Ft)(e.name, 120);
  if (!bsn(e.name)) r = `Unsafe file path detected: "${o}". Path traversal or absolute paths are not allowed.`;
  let s = e.originalSize || 0;
  if (s > d.MAX_FILE_SIZE) r = `File "${o}" is too large: ${Math.round(s / 1024 / 1024)}MB (max: ${Math.round(d.MAX_FILE_SIZE / 1024 / 1024)}MB)`;
  if (n.totalUncompressedSize += s, n.totalUncompressedSize > d.MAX_TOTAL_SIZE) r = `Archive total size is too large: ${Math.round(n.totalUncompressedSize / 1024 / 1024)}MB (max: ${Math.round(d.MAX_TOTAL_SIZE / 1024 / 1024)}MB)`;
  let i = n.totalUncompressedSize / n.compressedSize;
  if (i > d.MAX_COMPRESSION_RATIO) r = `Suspicious compression ratio detected: ${i.toFixed(1)}:1 (max: ${d.MAX_COMPRESSION_RATIO}:1). This may be a zip bomb.`;
  return r ? { isValid: false, error: r } : { isValid: true };
}
async function Gst(e) {
  let n = { fileCount: 0, totalUncompressedSize: 0, compressedSize: e.length }, r = SUt(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), (o) => {
    let s = v(o, n);
    if (!s.isValid) throw new import_chunk_jv7av99m.A(s.error, "MCPB zip entry validation failed");
    return true;
  });
  return (0, import_chunk_w578pjby.t)(`Zip extraction completed: ${n.fileCount} files, ${Math.round(n.totalUncompressedSize / 1024)}KB uncompressed`), r;
}
var D = 101010256, B = 101075792, V = 117853008, N = 33639248, P = 65557, H = 2048, R = 0, G = 8;
function u(e) {
  return e === void 0 ? Error("invalid zip data") : new import_chunk_jv7av99m.A(`invalid zip data: ${e}`, "invalid zip data");
}
function a(e, n) {
  if (n + 2 > e.length) throw u();
  return e[n] | e[n + 1] << 8;
}
function l(e, n) {
  if (n + 4 > e.length) throw u();
  return (e[n] | e[n + 1] << 8 | e[n + 2] << 16 | e[n + 3] << 24) >>> 0;
}
function z(e, n) {
  return l(e, n) + l(e, n + 4) * 4294967296;
}
function k(e) {
  let n = "";
  for (let r = 0; r < e.length; r += 16384) n += String.fromCharCode(...e.subarray(r, r + 16384));
  return n;
}
function SUt(e, n) {
  let r = {}, o = e.length - 22;
  while (o < 0 || l(e, o) !== D) {
    if (o <= 0 || e.length - o > P) throw u();
    o--;
  }
  let s = a(e, o + 8);
  if (s === 0) return r;
  let i = l(e, o + 16), f = false;
  if ((i === 4294967295 || s === 65535) && o >= 20 && l(e, o - 20) === V) {
    let h = l(e, o - 12);
    if (h + 56 <= e.length && l(e, h) === B) f = true, s = l(e, h + 32), i = l(e, h + 48);
  }
  let m = new TextDecoder();
  for (let h = 0; h < s; h++) {
    if (l(e, i) !== N) throw u();
    let I = a(e, i + 8), g = a(e, i + 10), b = a(e, i + 28), y = a(e, i + 30), L = a(e, i + 32), p = i + 46;
    if (p + b > e.length) throw u();
    let C = e.subarray(p, p + b), M = I & H ? m.decode(C) : k(C), S = l(e, i + 20), _ = l(e, i + 24), x = l(e, i + 42), U = p + b;
    if (f && S === 4294967295) {
      let E = U + y, c = U;
      while (c + 4 <= E && a(e, c) !== 1) c += 4 + a(e, c + 2);
      if (c + 28 > E) throw u();
      _ = z(e, c + 4), S = z(e, c + 12), x = z(e, c + 20);
    }
    if (i = U + y + L, !n({ name: M, originalSize: _, bytesToInflate: g === R ? 0 : S })) continue;
    let T = x + 30 + a(e, x + 26) + a(e, x + 28);
    if (T + S > e.length) throw u();
    let w = e.subarray(T, T + S);
    if (g === R) {
      if (S !== _) throw u("stored entry size mismatch");
      r[M] = w.slice();
    } else if (g === G) {
      if (S === 0 && _ === 0) {
        r[M] = new Uint8Array(0);
        continue;
      }
      let E;
      try {
        E = (0, import_zlib.inflateRawSync)(w, { maxOutputLength: Math.max(_, 1), chunkSize: Math.min(Math.max(_, 64), 1048576) });
      } catch (c) {
        let O = c.code;
        throw u(typeof O === "string" && O.startsWith("Z_") ? O : "entry larger than declared");
      }
      r[M] = new Uint8Array(E.buffer, E.byteOffset, E.byteLength);
    } else throw u(`unsupported compression method ${g}`);
  }
  return r;
}
var zst = 493;
function wsn(e) {
  let n = Buffer.from(e.buffer, e.byteOffset, e.byteLength), r = {}, o = Math.max(0, n.length - 22 - 65535), s = -1;
  for (let m = n.length - 22; m >= o; m--) if (n.readUInt32LE(m) === 101010256) {
    s = m;
    break;
  }
  if (s < 0) return r;
  let i = n.readUInt16LE(s + 10), f = n.readUInt32LE(s + 16);
  for (let m = 0; m < i; m++) {
    if (f + 46 > n.length || n.readUInt32LE(f) !== 33639248) break;
    let h = n.readUInt16LE(f + 4), I = n.readUInt16LE(f + 28), g = n.readUInt16LE(f + 30), b = n.readUInt16LE(f + 32), y = n.readUInt32LE(f + 38), L = n.toString("utf8", f + 46, f + 46 + I);
    if (h >> 8 === 3) {
      let p = y >>> 16 & 65535;
      if (p) r[L] = p;
    }
    f += 46 + I + g + b;
  }
  return r;
}
