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
var chunk_0k16ny5f_exports = {};
__export(chunk_0k16ny5f_exports, {
  jDt: () => jDt
});
module.exports = __toCommonJS(chunk_0k16ny5f_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_promises = require("fs/promises");
async function jDt(r, e, i = false) {
  let n;
  try {
    return await (0, import_promises.link)(r, e), true;
  } catch (t) {
    n = t;
  }
  let a = await (0, import_promises.lstat)(e).catch((t) => {
    if ((0, import_chunk_jv7av99m.J)(t)) return;
    throw t;
  });
  if (a?.isFile() || i && a !== void 0) return false;
  if (i) throw n;
  return await (0, import_chunk_q7qjcthc.ra)(r, e), true;
}
