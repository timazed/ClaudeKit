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
var chunk_8j3h6yzg_exports = {};
__export(chunk_8j3h6yzg_exports, {
  Vn: () => Vn,
  WVt: () => WVt
});
module.exports = __toCommonJS(chunk_8j3h6yzg_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_async_hooks = require("async_hooks");
var import_fs = require("fs");
var import_promises = require("fs/promises");
class WVt {
  read(r) {
    return (0, import_promises.readFile)(r, "utf8");
  }
  readBytes(r) {
    return (0, import_promises.readFile)(r);
  }
  write(r, e, t) {
    return (0, import_promises.writeFile)(r, e, { encoding: "utf8", mode: t });
  }
  async mkdir(r, e) {
    try {
      await (0, import_promises.mkdir)(r, { recursive: true, mode: e });
    } catch (t) {
      if ((0, import_chunk_jv7av99m.w)(t) !== "EEXIST") throw t;
    }
  }
  atomicWrite(r, e, t) {
    return (0, import_chunk_q7qjcthc.yr)(r, e, t);
  }
  delete(r) {
    return (0, import_promises.unlink)(r);
  }
  list(r) {
    return (0, import_promises.readdir)(r);
  }
  append(r, e, t) {
    return (0, import_promises.appendFile)(r, e, { encoding: "utf8", mode: t });
  }
  writeExclusive(r, e, t) {
    return (0, import_promises.writeFile)(r, e, { encoding: "utf8", flag: "wx", mode: t });
  }
  writeBytesExclusive(r, e, t) {
    return (0, import_promises.writeFile)(r, e, { flag: "wx", mode: t });
  }
  copy(r, e) {
    return (0, import_promises.copyFile)(r, e);
  }
  async stat(r) {
    return { mtimeMs: (await (0, import_promises.stat)(r)).mtimeMs };
  }
  async lstat(r) {
    try {
      let e = await (0, import_promises.lstat)(r);
      return { isSymbolicLink: e.isSymbolicLink(), isFile: e.isFile(), isDirectory: e.isDirectory(), mtimeMs: e.mtimeMs, nlink: e.nlink, size: e.size };
    } catch (e) {
      if ((0, import_chunk_jv7av99m.w)(e) === "ENOENT") return;
      throw e;
    }
  }
  async listEntries(r) {
    return (await (0, import_promises.readdir)(r, { withFileTypes: true })).map((t) => ({ name: t.name, isDirectory: t.isDirectory(), isFile: t.isFile() }));
  }
  async readRange(r, e, t) {
    a("readRange", "offset", e), a("readRange", "length", t);
    let n = await (0, import_promises.open)(r, "r");
    try {
      return await c(n, e, t);
    } finally {
      await n.close();
    }
  }
  async readTail(r, e, t) {
    a("readTail", "maxBytes", e);
    let n = t?.noFollow ? import_fs.constants.O_RDONLY | import_chunk_09gzjq1e.Fo : "r", i = await (0, import_promises.open)(r, n);
    try {
      let s = await i.stat();
      if (t?.noFollow && !s.isFile()) throw Object.assign(Error("ENXIO: not a regular file"), { code: "ENXIO", path: r, isFIFO: s.isFIFO() });
      let { size: m } = s, g = Math.min(e, m);
      return await c(i, m - g, g);
    } finally {
      await i.close();
    }
  }
}
function a(r, e, t) {
  if (!Number.isInteger(t) || t < 0) throw RangeError(`${r}: ${e} must be a non-negative integer, got ${t}`);
}
async function c(r, e, t) {
  if (t === 0) return Buffer.alloc(0);
  let n = Buffer.alloc(t), i = 0;
  while (i < t) {
    let { bytesRead: s } = await r.read(n, i, t - i, e + i);
    if (s === 0) break;
    i += s;
  }
  return i === t ? n : Buffer.from(n.subarray(0, i));
}
var B = new import_async_hooks.AsyncLocalStorage();
function Vn() {
  return B.getStore() ?? new WVt();
}
