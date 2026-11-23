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
var chunk_amkshz08_exports = {};
__export(chunk_amkshz08_exports, {
  HEl: () => HEl,
  MEl: () => MEl
});
module.exports = __toCommonJS(chunk_amkshz08_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var u = /* @__PURE__ */ new Set(["update", "install", "doctor"]);
function l({ currentVersion: e, requiredMinimumVersion: r, requiredMaximumVersion: n, topLevelCommand: a }) {
  if (!r && !n) return null;
  if (a !== void 0 && u.has(a)) return null;
  if (!(0, import_chunk_tvttgr51.$A)(e)) return null;
  if (r) {
    let o = (0, import_chunk_tvttgr51.$A)(r)?.version;
    if (!o) (0, import_chunk_w578pjby.t)(`requiredMinimumVersion '${r}' is not a valid semver version \u2014 ignoring`, { level: "error" });
    else if (!(0, import_chunk_tvttgr51.Vb)(e, o)) return `Claude Code ${e} is older than the minimum version required by your organization (${r}).
Update Claude Code using your organization's approved method, then try again. If automatic updates are available, \`claude update\` may also work.`;
  }
  if (n) {
    let o = (0, import_chunk_tvttgr51.$A)(n)?.version;
    if (!o) (0, import_chunk_w578pjby.t)(`requiredMaximumVersion '${n}' is not a valid semver version \u2014 ignoring`, { level: "error" });
    else if (!(0, import_chunk_tvttgr51.Qct)(e, o)) return `Claude Code ${e} is newer than the maximum version allowed by your organization (${n}).
Your organization requires version ${n} or older. Install an approved version using your organization's approved method. \`claude install <version>\` may also work.`;
  }
  return null;
}
function MEl(e) {
  try {
    let r = e.parent ? e : null;
    while (r?.parent?.parent) r = r.parent;
    let n = (0, import_chunk_2yx6c1y2._e)("policySettings");
    return l({ currentVersion: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, requiredMinimumVersion: n?.requiredMinimumVersion, requiredMaximumVersion: n?.requiredMaximumVersion, topLevelCommand: r?.name() });
  } catch (r) {
    return (0, import_chunk_k449cc64.i)(r), null;
  }
}
function HEl() {
  try {
    let e = (0, import_chunk_2yx6c1y2._e)("policySettings");
    return l({ currentVersion: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, requiredMinimumVersion: e?.requiredMinimumVersion, requiredMaximumVersion: e?.requiredMaximumVersion, topLevelCommand: void 0 });
  } catch (e) {
    return (0, import_chunk_k449cc64.i)(e), null;
  }
}
