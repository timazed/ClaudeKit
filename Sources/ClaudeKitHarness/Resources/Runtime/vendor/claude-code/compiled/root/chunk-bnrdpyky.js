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
var chunk_bnrdpyky_exports = {};
__export(chunk_bnrdpyky_exports, {
  N2o: () => N2o,
  Szr: () => Szr,
  fet: () => fet,
  nTa: () => nTa,
  pet: () => pet,
  tTa: () => tTa
});
module.exports = __toCommonJS(chunk_bnrdpyky_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_kzzkh06w = require("/$bunfs/root/chunk-kzzkh06w.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_mxhw2w5n = require("/$bunfs/root/chunk-mxhw2w5n.js");
var import_chunk_feazds52 = require("/$bunfs/root/chunk-feazds52.js");
var import_chunk_zsz02y6d = require("/$bunfs/root/chunk-zsz02y6d.js");
var import_crypto = require("crypto");
var import_promises = require("fs/promises");
var import_path = require("path");
var I = 200, f = 64;
function m() {
  if ((0, import_chunk_f9x2f6cx.Y)() || (0, import_chunk_bzyb60p0.El)()) return null;
  try {
    return (0, import_path.join)((0, import_chunk_zsz02y6d.PC)(), (0, import_chunk_f9x2f6cx.W)(), import_chunk_feazds52.yrr);
  } catch (e) {
    return (0, import_chunk_w578pjby.t)(`Image store unavailable: ${e}`, { level: "warn" }), null;
  }
}
function N2o() {
  return m() !== null;
}
async function Szr() {
  let e = m();
  if (e === null) return 0;
  let n;
  try {
    n = await (0, import_promises.readdir)(e);
  } catch (a) {
    if (!(0, import_chunk_jv7av99m.fn)(a)) (0, import_chunk_w578pjby.t)(`Could not list stored images: ${a}`, { level: "warn" });
    return 0;
  }
  let r = 0;
  for (let a of n) {
    let i = Number(import_chunk_feazds52.Aei.exec(a)?.[1]);
    if (Number.isSafeInteger(i) && i > r) r = i;
  }
  return r;
}
function g(e) {
  if (!Number.isSafeInteger(e.id) || e.id < 0 || typeof e.content !== "string" || e.content === "") return null;
  let n = m();
  if (n === null) return null;
  let r = (0, import_chunk_kzzkh06w.QUt)(e.content.slice(0, f));
  return (0, import_path.join)(n, `${e.id}.${import_chunk_kzzkh06w.kpe[r]}`);
}
function fet(e, n) {
  if (e.type !== "image") return null;
  let r = g(e);
  if (r !== null) n((a) => u(a, e.id, r));
  return r;
}
async function pet(e, n) {
  let r = await d(e);
  if (r) n((a) => u(a, e.id, r));
  return r;
}
async function tTa(e, n) {
  let r = /* @__PURE__ */ new Map();
  for (let [a, i] of Object.entries(e)) if (i.type === "image") {
    let o = await d(i);
    if (o) r.set(Number(a), o);
  }
  if (r.size > 0) n((a) => {
    let i = a;
    for (let [o, s] of r) i = u(i, o, s);
    return i;
  });
  return r;
}
async function nTa(e) {
  let n = (0, import_chunk_mxhw2w5n.dme)();
  if (n === null || e.type !== "image" || typeof e.content !== "string" || e.content === "") return null;
  let r = Buffer.from(e.content, "base64"), a = (0, import_crypto.createHash)("sha256").update(r).digest("hex"), i = (0, import_chunk_kzzkh06w.QUt)(e.content.slice(0, f)), o = (0, import_path.join)(n, `image-${a}.${import_chunk_kzzkh06w.kpe[i]}`);
  try {
    return await (0, import_chunk_mxhw2w5n.f1)(n, void 0), await (0, import_chunk_mxhw2w5n.cme)(o, r, 384), o;
  } catch (s) {
    return (0, import_chunk_w578pjby.t)(`Failed to save an image for a message: ${s}`, { level: "error" }), null;
  }
}
async function d(e) {
  if (e.type !== "image") return null;
  try {
    let n = g(e);
    if (n === null) return null;
    let r = await (0, import_chunk_865at33z.NC)(n, [n], { createParents: true, leaf: "replace" }), a = (0, import_chunk_q7qjcthc.LM)(r.ioPath), i = false;
    try {
      let o = await (0, import_promises.open)(a, "wx", 384);
      i = true;
      try {
        await o.writeFile(e.content, { encoding: "base64" }), await o.datasync();
      } finally {
        await o.close();
      }
      await r.recheckBeforeWrite();
      try {
        await (0, import_chunk_q7qjcthc.ra)(a, r.ioPath);
      } catch (s) {
        if ((0, import_chunk_jv7av99m.w)(s) !== "EEXIST") throw s;
        await r.recheckBeforeWrite(), await (0, import_promises.unlink)(r.ioPath).catch(() => {
        }), await r.recheckBeforeWrite(), await (0, import_chunk_q7qjcthc.ra)(a, r.ioPath);
      }
      i = false;
    } finally {
      if (i) try {
        await r.recheckBeforeWrite(), await (0, import_promises.unlink)(a);
      } catch {
      }
      await r.close();
    }
    return (0, import_chunk_w578pjby.t)(`Stored image ${e.id} to ${n}`), n;
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`Failed to store image: ${n}`), null;
  }
}
function u(e, n, r) {
  if (e.get(n) === r) return e;
  let a = new Map(e);
  if (!a.has(n)) while (a.size >= I) {
    let i = a.keys().next().value;
    if (i === void 0) break;
    a.delete(i);
  }
  return a.set(n, r), a;
}
