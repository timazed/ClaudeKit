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
var chunk_2hk3sg53_exports = {};
__export(chunk_2hk3sg53_exports, {
  $1e: () => $1e,
  W5l: () => W5l
});
module.exports = __toCommonJS(chunk_2hk3sg53_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_4gzm04h3 = require("/$bunfs/root/chunk-4gzm04h3.js");
var import_chunk_b18a27zs = require("/$bunfs/root/chunk-b18a27zs.js");
var $1e = "repo_rules_unread";
function W5l(e, o) {
  let t = (0, import_chunk_4gzm04h3.TVe)(e, o.meta);
  return t instanceof Promise ? t.then((r) => s(r, o)) : s(t, o);
}
function s(e, o) {
  if (e.refused !== void 0) return (e.refused.cause === "repo_rules_read_failed" ? import_chunk_cqa9hrgx.m : import_chunk_cqa9hrgx.l)("mcp_serve_file_call", e.refused.cause), $1e;
  return e.repoRules === void 0 ? o.launchPermissionContext : n(o.launchPermissionContext, e.repoRules, o);
}
function n(e, o, { session: t }) {
  let r = e ?? (0, import_chunk_4vsz8a99.Vd)();
  return { ...r, ...(0, import_chunk_b18a27zs.Q1s)({ alwaysDenyRules: {}, alwaysAskRules: {} }, r, (0, import_chunk_f9x2f6cx.Rs)(t).originalCwd, o, "upload") };
}
