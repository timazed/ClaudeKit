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
var chunk_3yqv1vr5_exports = {};
__export(chunk_3yqv1vr5_exports, {
  SKILL_FILES: () => y,
  SKILL_MD: () => g
});
module.exports = __toCommonJS(chunk_3yqv1vr5_exports);
var import_chunk_0vw1gz5c = require("/$bunfs/root/chunk-0vw1gz5c.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var e = (0, import_chunk_w1d7ygsk.ft)("/$bunfs/root/cli-f091jpwx.md");
var t = (0, import_chunk_w1d7ygsk.ft)("/$bunfs/root/server-6cyhjq09.md");
var s = "/$bunfs/root/SKILL-cf37e4b8.md.zst";
var i = (0, import_chunk_0vw1gz5c.Wt)(s, __dirname);
var g = i, y = { "examples/cli.md": e, "examples/server.md": t };
