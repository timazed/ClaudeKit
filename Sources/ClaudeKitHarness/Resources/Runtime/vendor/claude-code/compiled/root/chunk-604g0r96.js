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
var chunk_604g0r96_exports = {};
__export(chunk_604g0r96_exports, {
  YCn: () => YCn,
  w9r: () => w9r
});
module.exports = __toCommonJS(chunk_604g0r96_exports);
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_d0bewyh8 = require("/$bunfs/root/chunk-d0bewyh8.js");
function YCn(r) {
  return (0, import_chunk_ephf358x.cn)().CLAUDE_AI_ORIGIN + "/code/project/" + encodeURIComponent(r);
}
var i = "https://preview.claude.ai";
function w9r(r) {
  let e = /^(chan_[A-Za-z0-9_-]+)(?:\/(cmsg_[A-Za-z0-9_-]+))?$/.exec(r.trim());
  if (e !== null) return { projectId: e[1] ?? "", threadId: e[2] ?? null };
  let t;
  try {
    t = new URL(r.trim());
  } catch {
    return null;
  }
  let o = /^\/code\/project\/(chan_[A-Za-z0-9_-]+)\/?$/.exec(t.pathname), n = t.searchParams.get("thread"), c = (0, import_chunk_ephf358x.cn)().CLAUDE_AI_ORIGIN;
  if (t.origin !== c && !(c === import_chunk_d0bewyh8.cuo && t.origin === i) || o === null || n !== null && !/^cmsg_[A-Za-z0-9_-]+$/.test(n)) return null;
  return { projectId: o[1] ?? "", threadId: n };
}
