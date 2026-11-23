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
var chunk_cy6vm0hs_exports = {};
__export(chunk_cy6vm0hs_exports, {
  A2i: () => A2i,
  C2i: () => C2i,
  gEo: () => gEo
});
module.exports = __toCommonJS(chunk_cy6vm0hs_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var t = "tengu_orford_ness", n = "2.1.193";
function i() {
  try {
    return (0, import_chunk_865at33z.b)(t, false);
  } catch {
    return false;
  }
}
function C2i() {
  let e = (0, import_chunk_2nv4wrez.DC)(), r = (0, import_chunk_2nv4wrez.ba)("allow_error_reporting");
  if (r !== null) {
    if (e === null) return "blocked_cache_miss";
    if (r === "cache_miss" || r === "route_missing") return "blocked_no_verdict";
    return e.restrictions.allow_error_reporting?.allowed === false ? "blocked_restriction" : "blocked_tainted";
  }
  let o = (0, import_chunk_2nv4wrez.nEs)();
  if (e !== null) return o ? "allowed_taints_clean" : "blocked_unsettled";
  if ((0, import_chunk_865at33z.dm)() && !(0, import_chunk_865at33z.hde)(import_chunk_ephf358x.uP)) return "blocked_scopeless_oauth";
  if ((0, import_chunk_865at33z.xa)().source === "ANTHROPIC_AUTH_TOKEN") return "blocked_auth_token_env";
  if ((0, import_chunk_865at33z.o_)()) return "blocked_api_key_helper";
  return o ? "allowed_untaintable" : "blocked_unsettled";
}
function A2i() {
  let e = C2i();
  return e === "allowed_taints_clean" || e === "allowed_untaintable";
}
function gEo() {
  if (process.env.DISABLE_ERROR_REPORTING) return false;
  if ((0, import_chunk_f9x2f6cx.Y)()) return false;
  if ((0, import_chunk_865at33z.i_)()) return false;
  if ((0, import_chunk_865at33z.W9)()) return false;
  if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty" || !(0, import_chunk_zhr7rpv7.ya)()) return false;
  if (!(0, import_chunk_tvttgr51.gIo)((0, import_chunk_tvttgr51.hB)({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION)?.version ?? { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, n)) return false;
  if (!A2i()) return false;
  return i();
}
