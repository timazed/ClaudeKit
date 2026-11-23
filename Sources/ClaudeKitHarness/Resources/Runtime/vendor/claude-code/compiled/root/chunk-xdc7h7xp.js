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
var chunk_xdc7h7xp_exports = {};
__export(chunk_xdc7h7xp_exports, {
  Ago: () => Ago,
  Cgo: () => Cgo,
  Dan: () => Dan,
  Iml: () => Iml,
  Mml: () => Mml,
  Rgo: () => Rgo,
  Tgo: () => Tgo
});
module.exports = __toCommonJS(chunk_xdc7h7xp_exports);
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_crypto = require("crypto");
var a = 256;
function Tgo(e = (0, import_crypto.randomUUID)(), t) {
  if (t !== void 0) {
    let n = (0, import_chunk_0rkwgmhx.se)().laneNoticeSlugs;
    n.set(e, t), i(n);
  }
  return e;
}
function Iml(e) {
  return (0, import_chunk_0rkwgmhx.se)().laneNoticeSlugs.get(e);
}
function Dan() {
  return (0, import_chunk_sghy0qej.Pe)("tengu_woolly_honey", { safe: true });
}
function Mml(e, t, n, r) {
  let o = (0, import_chunk_0rkwgmhx.se)(), s = Date.now();
  if (e !== void 0) o.commentReads.set(e, { slug: t, ownWordsOnly: n, ownAccount: r }), i(o.commentReads);
  if (o.commentReadAtBySlug.delete(t), o.commentReadAtBySlug.set(t, s), i(o.commentReadAtBySlug) || !n) o.lastOthersCommentReadAt = s;
}
function Cgo(e) {
  return (0, import_chunk_0rkwgmhx.se)().commentReads.get(e);
}
function Ago(e, t) {
  for (let [n, r] of (0, import_chunk_0rkwgmhx.se)().commentReadAtBySlug) if (n !== e && !(Number.isFinite(t) && r < t)) return true;
  return false;
}
function Rgo() {
  return (0, import_chunk_0rkwgmhx.se)().lastOthersCommentReadAt;
}
function i(e) {
  if (e.size <= a) return false;
  let t = e.keys().next().value;
  if (t !== void 0) e.delete(t);
  return true;
}
