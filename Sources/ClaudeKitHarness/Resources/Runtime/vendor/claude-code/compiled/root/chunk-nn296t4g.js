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
var chunk_nn296t4g_exports = {};
__export(chunk_nn296t4g_exports, {
  ls: () => ls
});
module.exports = __toCommonJS(chunk_nn296t4g_exports);
var import_chunk_1tyxkk56 = require("/$bunfs/root/chunk-1tyxkk56.js");
function ls(o, e, r = "foreground") {
  return (t) => (0, import_chunk_1tyxkk56.I5e)(t, (0, import_chunk_1tyxkk56.NCe)(o, typeof e === "string" ? (0, import_chunk_1tyxkk56.LQ)(e) : e), r);
}
