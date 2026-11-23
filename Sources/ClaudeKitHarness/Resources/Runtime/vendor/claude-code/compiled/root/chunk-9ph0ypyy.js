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
var chunk_9ph0ypyy_exports = {};
__export(chunk_9ph0ypyy_exports, {
  S8t: () => S8t,
  ret: () => ret,
  wka: () => wka,
  y8t: () => y8t
});
module.exports = __toCommonJS(chunk_9ph0ypyy_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_dgdc791t = require("/$bunfs/root/chunk-dgdc791t.js");
function wka(o) {
  if ((0, import_chunk_865at33z.Qt)()) return false;
  if ((0, import_chunk_f9x2f6cx.np)() !== void 0 && o.every((r) => r.unattendedSafe)) return false;
  return true;
}
function ret(o) {
  return o.filter((r) => !r.mcpErrorMetadata && !r.statusOnly && !r.startupFatal);
}
function y8t(o) {
  let r = [], i = [];
  for (let n of o) (n.statusOnly ? r : i).push(n);
  return { statusNotices: r, invalidEntries: i };
}
function S8t(o) {
  for (let r of o) (0, import_chunk_w578pjby.t)(`Invalid setting skipped without dialog (automated session): ${(0, import_chunk_7cfjrnwy.el)((0, import_chunk_dgdc791t.TXt)(r.file))}: ${r.path}: ${r.message}`, { level: "error" });
}
