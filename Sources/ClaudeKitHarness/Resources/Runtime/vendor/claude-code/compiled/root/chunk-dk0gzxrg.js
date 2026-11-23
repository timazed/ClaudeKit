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
var chunk_dk0gzxrg_exports = {};
__export(chunk_dk0gzxrg_exports, {
  i2s: () => i2s,
  zYn: () => zYn
});
module.exports = __toCommonJS(chunk_dk0gzxrg_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var _ = "tengu_mossy_knuth";
async function zYn(t, i, r, o) {
  let e = (0, import_chunk_8nvd6fqx.ih)();
  if (!(0, import_chunk_sghy0qej.Pe)(_, { safe: true })) {
    let m = o ? (0, import_path.join)(e, o) : e;
    await (0, import_promises.mkdir)(m, { recursive: true, mode: 448 });
    let c = (0, import_path.join)(m, `${t}${Date.now()}${i}`);
    return await (0, import_promises.writeFile)(c, r), c;
  }
  await (0, import_promises.mkdir)(e, { recursive: true, mode: 448 }), (0, import_chunk_8nvd6fqx._K)(e);
  let s = (0, import_path.join)((0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), (0, import_path.dirname)(e)).resolvedPath, (0, import_path.basename)(e), `${t}${(0, import_crypto.randomBytes)(8).toString("hex")}${i}`);
  return await i2s(s, r), s;
}
async function i2s(t, i) {
  let r = await (0, import_chunk_865at33z.NC)(t, [t], { leaf: "replace" });
  try {
    await r.recheckBeforeWrite(), await (0, import_chunk_q7qjcthc.vI)(r.ioPath), await (0, import_promises.writeFile)(r.ioPath, i, { mode: 384, flag: import_fs.constants.O_WRONLY | import_fs.constants.O_CREAT | import_fs.constants.O_EXCL | import_chunk_jxja0v0z.cr | import_chunk_jxja0v0z.oC });
  } catch (o) {
    (0, import_chunk_865at33z.see)(o, r, t);
  } finally {
    await r.close();
  }
}
