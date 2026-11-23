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
var chunk_xt12gd7z_exports = {};
__export(chunk_xt12gd7z_exports, {
  Cei: () => Cei,
  gNa: () => gNa
});
module.exports = __toCommonJS(chunk_xt12gd7z_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var c = "tengu_enchanted_island", O = 1040;
function Cei() {
  return (0, import_chunk_cg8dqz0a.x)() !== "windows" && process.getuid?.() !== 0 && (0, import_chunk_865at33z.b)(c, true);
}
async function gNa() {
  let e = (0, import_chunk_2gtmjt3y.Nl)();
  if (e === null || !Cei()) return;
  for (let n of [(0, import_chunk_q3a5dy2r.Em)(), (0, import_path.join)(e, "plans"), (0, import_path.join)(e, "debug")]) try {
    let o = await (0, import_promises.open)(n, import_fs.constants.O_RDONLY | import_fs.constants.O_DIRECTORY | import_fs.constants.O_NOFOLLOW | import_fs.constants.O_NONBLOCK | import_chunk_jxja0v0z.cr);
    try {
      let { mode: i, uid: m } = await o.stat();
      if ((i & 7) !== 0 && m === process.getuid?.()) {
        let a = (i & O) !== 0;
        await o.chmod(i & 4095 & ~(a ? 7 : 63));
      }
    } finally {
      await o.close();
    }
  } catch (o) {
    if (!(0, import_chunk_jv7av99m.J)(o)) (0, import_chunk_w578pjby.t)(`Did not change the permissions of ${n}: ${(0, import_chunk_jv7av99m.d)(o)}`);
  }
}
