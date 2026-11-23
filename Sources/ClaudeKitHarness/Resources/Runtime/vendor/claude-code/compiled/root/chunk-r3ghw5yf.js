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
var chunk_r3ghw5yf_exports = {};
__export(chunk_r3ghw5yf_exports, {
  RUN_EXAMPLE_FILES: () => F,
  SKILL_MD: () => q
});
module.exports = __toCommonJS(chunk_r3ghw5yf_exports);
var import_chunk_0vw1gz5c = require("/$bunfs/root/chunk-0vw1gz5c.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var e = (0, import_chunk_w1d7ygsk.ft)("/$bunfs/root/cli-40vh1c3p.md");
var t = "/$bunfs/root/electron-8035775b.md.zst";
var a = (0, import_chunk_0vw1gz5c.Wt)(t, __dirname);
var s = (0, import_chunk_w1d7ygsk.ft)("/$bunfs/root/library-yywvyb11.md");
var n = (0, import_chunk_w1d7ygsk.ft)("/$bunfs/root/playwright-g4wwbqeh.md");
var r = (0, import_chunk_w1d7ygsk.ft)("/$bunfs/root/server-z4ytjptt.md");
var i = (0, import_chunk_w1d7ygsk.ft)("/$bunfs/root/tui-93b0fcsh.md");
var o = (0, import_chunk_w1d7ygsk.ft)("/$bunfs/root/SKILL-9ddmsnpa.md");
var q = o, F = { "examples/cli.md": e, "examples/electron.md": a, "examples/library.md": s, "examples/playwright.md": n, "examples/server.md": r, "examples/tui.md": i };
