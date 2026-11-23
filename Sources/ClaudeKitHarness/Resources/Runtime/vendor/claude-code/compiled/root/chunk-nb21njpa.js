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
var chunk_nb21njpa_exports = {};
__export(chunk_nb21njpa_exports, {
  $5: () => $5,
  DP: () => DP,
  QW: () => QW,
  _G: () => _G,
  sAi: () => sAi
});
module.exports = __toCommonJS(chunk_nb21njpa_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_g9ztbtfd = require("/$bunfs/root/chunk-g9ztbtfd.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_promises = require("fs/promises");
var d = __toESM(require("path"));
var p = 65536;
async function _G(e) {
  return (await (0, import_promises.lstat)(e).catch(() => null))?.isDirectory() === true && !await (0, import_chunk_c203g5kd.ELr)(e);
}
async function DP(e, t) {
  let r = e;
  for (let o of d.relative(e, t).split(d.sep).filter(Boolean)) {
    r = d.join(r, o);
    let n;
    try {
      n = await (0, import_promises.lstat)(r);
    } catch (l) {
      let s = (0, import_chunk_jv7av99m.w)(l);
      return s === "ENOENT" || s === "ENOTDIR" ? "absent" : "refused";
    }
    if (!n.isDirectory()) return n.isSymbolicLink() ? "refused" : "not-a-directory";
    if (await (0, import_chunk_c203g5kd.ELr)(r)) return "refused";
  }
  let [i, a] = await Promise.all([(0, import_promises.realpath)(e).catch(() => null), (0, import_promises.realpath)(t).catch(() => null)]);
  if (i === null || a === null) return "refused";
  return (0, import_chunk_g9ztbtfd.ti)(i, a, true) ? "ok" : "refused";
}
async function QW(e) {
  let t = await $5(e);
  return t.kind === "ok" ? t.content : void 0;
}
async function $5(e, t = import_chunk_xcgcdx61.aF) {
  let r = await sAi(e, t);
  return r.kind === "ok" ? { kind: "ok", content: r.bytes.toString("utf-8") } : r;
}
async function sAi(e, t) {
  let r;
  try {
    r = await (0, import_promises.lstat)(e);
  } catch (a) {
    let o = (0, import_chunk_jv7av99m.w)(a);
    if (o === "ENOENT" || o === "ENOTDIR") return { kind: "absent", code: o };
    throw a;
  }
  if (!r.isFile()) return { kind: "refused" };
  let i;
  try {
    if (i = await (0, import_promises.open)(e, (0, import_chunk_6mfepmbb.Xu)()), !(await i.stat()).isFile()) return { kind: "refused" };
    let o = [], n = 0;
    while (n <= t) {
      let l = Buffer.alloc(Math.min(p, t + 1 - n)), { bytesRead: s } = await i.read(l, 0, l.length);
      if (s === 0) break;
      o.push(l.subarray(0, s)), n += s;
    }
    if (n > t) return { kind: "too-large" };
    return { kind: "ok", bytes: Buffer.concat(o, n) };
  } finally {
    await i?.close().catch(() => {
      return;
    });
  }
}
