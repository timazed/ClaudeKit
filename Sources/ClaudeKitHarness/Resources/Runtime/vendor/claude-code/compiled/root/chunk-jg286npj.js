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
var chunk_jg286npj_exports = {};
__export(chunk_jg286npj_exports, {
  Val: () => Val,
  x_r: () => x_r
});
module.exports = __toCommonJS(chunk_jg286npj_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_promises = require("fs/promises");
var f = [26985, 4283649346, 4266872130, 12805120, 198183888, 1196443219, 428016422, 1397113167, 1799439955, 1952539503];
async function x_r(r) {
  return Number((await (0, import_promises.statfs)(r)).type) >>> 0;
}
async function Val(r) {
  let o = (0, import_chunk_cg8dqz0a.x)();
  if (o !== "linux" && o !== "wsl") return false;
  try {
    return f.includes(await x_r(r));
  } catch (e) {
    if ((0, import_chunk_jv7av99m.kn)(e) || (0, import_chunk_jv7av99m.w)(e) === "ERR_INVALID_ARG_VALUE") return false;
    return (0, import_chunk_w578pjby.t)(`Could not ask for the file system of ${r}: ${e}`), true;
  }
}
