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
var chunk_nfjf2gy4_exports = {};
__export(chunk_nfjf2gy4_exports, {
  HELPER_DTS: () => O
});
module.exports = __toCommonJS(chunk_nfjf2gy4_exports);
var import_chunk_0vw1gz5c = require("/$bunfs/root/chunk-0vw1gz5c.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var e = "/$bunfs/root/core.bash.async.d.ts-6ecbb55e.txt.zst";
var t = (0, import_chunk_0vw1gz5c.Wt)(e, __dirname);
var n = (0, import_chunk_w1d7ygsk.ft)("/$bunfs/root/core.bash.sync.d.ts-6rvmmj6c.txt");
var r = "/$bunfs/root/core.powershell.async.d.ts-550adb89.txt.zst";
var o = (0, import_chunk_0vw1gz5c.Wt)(r, __dirname);
var s = (0, import_chunk_w1d7ygsk.ft)("/$bunfs/root/core.powershell.sync.d.ts-nzdrax8t.txt");
var i = (0, import_chunk_w1d7ygsk.ft)("/$bunfs/root/team.async.d.ts-t0nj35ss.txt");
var a = (0, import_chunk_w1d7ygsk.ft)("/$bunfs/root/team.sync.d.ts-w4kr6kyy.txt");
var O = { core: { bash: { async: t, sync: n }, powershell: { async: o, sync: s } }, team: { async: i, sync: a } };
