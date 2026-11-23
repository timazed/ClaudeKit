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
var chunk_kzxr3yqp_exports = {};
__export(chunk_kzxr3yqp_exports, {
  VXr: () => VXr,
  gai: () => gai,
  i_t: () => i_t
});
module.exports = __toCommonJS(chunk_kzxr3yqp_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_sgar51s8 = require("/$bunfs/root/chunk-sgar51s8.js");
var import_chunk_thchq5z2 = require("/$bunfs/root/chunk-thchq5z2.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
function gai() {
  return (0, import_path.join)((0, import_chunk_thchq5z2.fvl)(), "claude", "locks");
}
function i_t() {
  return !(0, import_chunk_69qhefwa.Oi)(void 0);
}
async function VXr() {
  let r = (0, import_chunk_sgar51s8.sye)(process.execPath);
  if (r === void 0 || !i_t()) return;
  try {
    let o = gai(), e = (0, import_path.join)(o, `${r}@${process.pid}.lock`), n = { pid: process.pid, version: r, execPath: process.execPath, acquiredAt: Date.now() };
    await (0, import_promises.mkdir)(o, { recursive: true }), await (0, import_chunk_q7qjcthc.yr)(e, (0, import_chunk_w578pjby._)(n, null, 2)), process.on("exit", () => {
      try {
        (0, import_fs.unlinkSync)(e);
      } catch {
      }
    });
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`Could not write this process's version lock, so a later update may delete the app bundle it runs from: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "warn" });
  }
}
