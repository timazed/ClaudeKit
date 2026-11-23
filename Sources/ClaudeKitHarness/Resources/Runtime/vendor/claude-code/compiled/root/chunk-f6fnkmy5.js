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
var chunk_f6fnkmy5_exports = {};
__export(chunk_f6fnkmy5_exports, {
  Ijs: () => Ijs,
  Mjs: () => Mjs,
  QVe: () => QVe,
  wZe: () => wZe
});
module.exports = __toCommonJS(chunk_f6fnkmy5_exports);
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_os = require("os");
async function wZe(e, r, n = "create") {
  if ((0, import_chunk_m15w38ag.ne)() && r !== void 0 && (0, import_chunk_hkvzj051.Ao)(e)) {
    let o = await (n === "create" ? r.ensureScope(c(e)) : r.ensureScope(c(e), { parent: n }));
    if (!o.ok) {
      let m = (0, import_chunk_7n1spq36.Xg)(o.error);
      throw Object.assign(new import_chunk_jv7av99m.A(`job folder not made (${(0, import_chunk_7n1spq36.un)(o.error)})`, "job folder not made"), m !== void 0 ? { code: m } : {});
    }
    return;
  }
  let i = (0, import_path.join)((0, import_chunk_9e5mdyfk.Bs)(e), "tmp");
  await (n === "create" ? (0, import_promises.mkdir)(i, { recursive: true }) : (0, import_promises.mkdir)(i).catch((o) => {
    if ((0, import_chunk_jv7av99m.w)(o) !== "EEXIST") throw o;
  }));
}
function c(e) {
  return { namespace: "job", jobId: e, relPath: ["tmp"] };
}
function Ijs() {
  let e = (0, import_chunk_865at33z.b)("tengu_bg_low_mem_mb", 1024) * 1024 * 1024;
  if (e <= 0) return { lowMem: false, level: void 0 };
  if ((0, import_chunk_cg8dqz0a.x)() !== "macos") return { lowMem: (0, import_os.freemem)() < e, level: void 0 };
  let r = s();
  return { lowMem: r !== void 0 && r >= l, level: r };
}
function QVe() {
  return Ijs().lowMem;
}
var u = { normal: 1, warning: 2, critical: 4 }, l = u.critical;
function s() {
  try {
    let e = Bun.ant.memoryPressureLevel();
    return e === null ? void 0 : u[e];
  } catch (e) {
    (0, import_chunk_w578pjby.t)(`bg low-mem: memoryPressureLevel failed: ${e instanceof Error ? e.message : String(e)}`, { level: "warn" });
    return;
  }
}
function Mjs() {
  return (0, import_chunk_865at33z.b)("tengu_bg_attach_upgrade", true);
}
