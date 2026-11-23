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
var chunk_2xk5sedb_exports = {};
__export(chunk_2xk5sedb_exports, {
  hXr: () => hXr,
  vii: () => vii
});
module.exports = __toCommonJS(chunk_2xk5sedb_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var r = { init_retry_max_attempts: 3, init_retry_base_delay_ms: 500, init_retry_jitter_fraction: 0.25, init_retry_max_delay_ms: 4e3, http_timeout_ms: 1e4, uuid_dedup_buffer_size: 2e3, heartbeat_interval_ms: 2e4, heartbeat_jitter_fraction: 0.1, token_refresh_buffer_ms: 3e5, teardown_archive_timeout_ms: 1500, connect_timeout_ms: 15e3, oauth_retry_max_attempts: 3, oauth_retry_base_delay_ms: 2e3, min_version: "0.0.0" }, _ = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ init_retry_max_attempts: (0, import_chunk_adx6804h.E)().int().min(1).max(10).default(3), init_retry_base_delay_ms: (0, import_chunk_adx6804h.E)().int().min(100).default(500), init_retry_jitter_fraction: (0, import_chunk_adx6804h.E)().min(0).max(1).default(0.25), init_retry_max_delay_ms: (0, import_chunk_adx6804h.E)().int().min(500).default(4e3), http_timeout_ms: (0, import_chunk_adx6804h.E)().int().min(2e3).default(1e4), uuid_dedup_buffer_size: (0, import_chunk_adx6804h.E)().int().min(100).max(5e4).default(2e3), heartbeat_interval_ms: (0, import_chunk_adx6804h.E)().int().min(5e3).max(3e4).default(2e4), heartbeat_jitter_fraction: (0, import_chunk_adx6804h.E)().min(0).max(0.5).default(0.1), token_refresh_buffer_ms: (0, import_chunk_adx6804h.E)().int().min(3e4).max(18e5).default(3e5), teardown_archive_timeout_ms: (0, import_chunk_adx6804h.E)().int().min(500).max(2e3).default(1500), connect_timeout_ms: (0, import_chunk_adx6804h.E)().int().min(5e3).max(6e4).default(15e3), oauth_retry_max_attempts: (0, import_chunk_adx6804h.E)().int().min(0).max(6).default(3), oauth_retry_base_delay_ms: (0, import_chunk_adx6804h.E)().int().min(100).max(1e4).default(2e3), min_version: (0, import_chunk_adx6804h.n)().refine((e) => {
  try {
    return (0, import_chunk_tvttgr51._I)(e, "0.0.0"), true;
  } catch {
    return false;
  }
}).default("0.0.0") }));
async function vii() {
  let e = await (0, import_chunk_865at33z.Zxs)("tengu_bridge_repl_v2_config", r), t = _().safeParse(e);
  return t.success ? t.data : r;
}
async function hXr() {
  let e = await vii();
  if (e.min_version && (0, import_chunk_tvttgr51._I)({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, e.min_version)) return `Your version of Claude Code (${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}) is too old for Remote Control.
Version ${e.min_version} or higher is required. Run \`claude update\` to update.`;
  return null;
}
