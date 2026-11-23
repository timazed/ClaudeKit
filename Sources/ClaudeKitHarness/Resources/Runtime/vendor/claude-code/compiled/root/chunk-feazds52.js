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
var chunk_feazds52_exports = {};
__export(chunk_feazds52_exports, {
  Aei: () => Aei,
  _Na: () => _Na,
  yrr: () => yrr
});
module.exports = __toCommonJS(chunk_feazds52_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var yrr = "images", Aei = /^(\d+)\.[a-z]+$/;
async function _Na(a, p) {
  let e = { removed: 0, errors: 0 }, r = (0, import_chunk_w578pjby.le)(), n, i;
  try {
    n = await r.realpath(p ?? (0, import_chunk_8nvd6fqx.ih)()), i = await r.readdir(n);
  } catch {
    return e;
  }
  let o = (0, import_chunk_f9x2f6cx.W)();
  for (let t of i) {
    if (!t.isDirectory()) continue;
    let s = (0, import_path.join)(n, t.name), c;
    try {
      c = await r.readdir(s);
    } catch {
      continue;
    }
    for (let m of c) {
      if (!m.isDirectory() || m.name === o || (0, import_chunk_mzmcvr6c.ht)(m.name) === null) continue;
      let d = (0, import_path.join)(s, m.name, yrr);
      try {
        let f = await r.lstat(d);
        if (!f.isDirectory() || f.mtime >= a) continue;
        if (await S(d, a)) e.removed++;
      } catch (f) {
        if (!(0, import_chunk_jv7av99m.fn)(f)) e.errors++;
      }
    }
  }
  return e;
}
async function S(a, p) {
  let e = await (0, import_chunk_865at33z.NC)(a, [a], { leaf: "replace" });
  try {
    await e.recheckBeforeWrite();
    let r = await (0, import_promises.lstat)(e.ioPath);
    if (!r.isDirectory() || r.mtime >= p) return false;
    let n = (0, import_path.join)(a, "any"), i = await (0, import_chunk_865at33z.NC)(n, [n], { leaf: "replace" });
    try {
      let o = (0, import_path.dirname)(i.ioPath);
      await i.recheckBeforeWrite();
      for (let t of await (0, import_promises.readdir)(o)) {
        let s = t.lastIndexOf(".tmp."), c = s === -1 ? t : t.slice(0, s);
        if (!Aei.test(c) || s !== -1 && !(0, import_chunk_q7qjcthc.NM)(t, c)) continue;
        await i.recheckBeforeWrite(), await (0, import_promises.unlink)((0, import_path.join)(o, t)).catch(() => {
        });
      }
    } finally {
      await i.close();
    }
    await e.recheckBeforeWrite();
    try {
      await (0, import_promises.rmdir)(e.ioPath);
    } catch (o) {
      let t = (0, import_chunk_jv7av99m.w)(o);
      if (t === "ENOTEMPTY" || t === "EEXIST") return false;
      throw o;
    }
    return true;
  } finally {
    await e.close();
  }
}
