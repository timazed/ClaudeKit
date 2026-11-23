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
var chunk_sp2atpe0_exports = {};
__export(chunk_sp2atpe0_exports, {
  aR: () => aR
});
module.exports = __toCommonJS(chunk_sp2atpe0_exports);
var import_promises = require("fs/promises");
async function aR(i, e, t) {
  if (i.isDirectory()) return "dir";
  if (i.isSymbolicLink()) return "symlink";
  if (i.isFile()) return "file";
  if (i.isFIFO() || i.isSocket() || i.isBlockDevice() || i.isCharacterDevice()) return "other";
  try {
    let r = await (0, import_promises.lstat)(e);
    return r.isDirectory() ? "dir" : r.isSymbolicLink() ? "symlink" : r.isFile() ? "file" : "other";
  } catch {
    return t;
  }
}
