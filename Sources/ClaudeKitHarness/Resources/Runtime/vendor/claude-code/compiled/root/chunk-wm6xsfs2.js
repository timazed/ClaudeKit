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
var chunk_wm6xsfs2_exports = {};
__export(chunk_wm6xsfs2_exports, {
  Htt: () => Htt,
  yti: () => yti
});
module.exports = __toCommonJS(chunk_wm6xsfs2_exports);
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var E = 3e5;
async function yti(a, e, n = 384, s = true) {
  let r = s ? await (0, import_promises.readdir)(a.at).catch(() => []) : [];
  await Promise.all(r.filter((t) => (0, import_chunk_q7qjcthc.NM)(t, (0, import_path.basename)(e))).map(async (t) => {
    let l = (0, import_path.join)(a.at, t), u = await (0, import_promises.lstat)(l).catch(() => {
      return;
    });
    if (u !== void 0 && u.mtimeMs < Date.now() - E) await (0, import_promises.rm)(l, { force: true }).catch(() => {
    });
  }));
  let o = (0, import_path.join)(a.at, (0, import_path.basename)((0, import_chunk_q7qjcthc.LM)(e))), i = await (0, import_promises.open)(o, import_fs.constants.O_WRONLY | import_fs.constants.O_CREAT | import_fs.constants.O_EXCL | import_chunk_jxja0v0z.cr, 384).catch(async (t) => {
    throw await a.release(), t;
  }), f = (0, import_crypto.createHash)("sha256"), p = 0, d = false;
  return { async write(t) {
    f.update(t), p += t.byteLength, await i.writeFile(t);
  }, async finish() {
    if (n !== 384) await i.chmod(n);
    let { dev: t, ino: l } = await i.stat();
    return await i.close(), d = true, { path: o, placeAt: (0, import_path.join)(a.at, (0, import_path.basename)(e)), target: e, size: p, sha256: f.digest("hex"), identity: `${t}:${l}`, release: a.release };
  }, async discard() {
    if (!d) await i.close().catch(() => {
    }), await (0, import_promises.rm)(o, { force: true }).catch(() => {
    }), await a.release();
  } };
}
async function Htt(a, e, n) {
  let s = await (0, import_chunk_xfj2cwfv.Qdt)(a).catch(() => null);
  if (s === null) return null;
  try {
    let r = await s.stat();
    if (!r.isFile() || r.size !== e || n !== void 0 && (r.dev !== n.dev || r.ino !== n.ino)) return null;
    let o = (0, import_crypto.createHash)("sha256");
    for await (let i of s.createReadStream({ autoClose: false, end: e - 1, highWaterMark: 1048576 })) o.update(i);
    return o.digest("hex");
  } catch {
    return null;
  } finally {
    await s.close().catch(() => {
    });
  }
}
