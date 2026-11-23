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
var chunk_b0t73t01_exports = {};
__export(chunk_b0t73t01_exports, {
  Gjr: () => Gjr,
  Rkn: () => Rkn,
  c8l: () => c8l,
  jjr: () => jjr,
  s8t: () => s8t,
  vKe: () => vKe,
  wzs: () => wzs,
  zjr: () => zjr
});
module.exports = __toCommonJS(chunk_b0t73t01_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var E = [import_chunk_865at33z.vIl, import_chunk_865at33z.exo];
function s8t(e) {
  if (e === null) return { tagsRead: false, rcChild: false, projectThreadChild: false, attended: false, mayBeAttended: true };
  let o = false;
  o = e.includes("hearth-rc-child");
  let r = e.includes(import_chunk_865at33z.EIl);
  return { tagsRead: true, rcChild: r, projectThreadChild: o, attended: e.some((s) => E.includes(s)) && !r && !e.includes(import_chunk_865at33z.g6t), mayBeAttended: !r && !o && !e.includes(import_chunk_865at33z.g6t) };
}
function jjr(e) {
  return !e.tagsRead || !e.mayBeAttended;
}
function Gjr(e) {
  if ((0, import_chunk_7d2qr9z5.rms)() || (0, import_chunk_7d2qr9z5.oms)() || e === "spawn" && (0, import_chunk_7d2qr9z5.kFn)()) return true;
  return (0, import_chunk_7d2qr9z5.ims)() || (0, import_chunk_7d2qr9z5.ams)() || e === "spawn" && (0, import_chunk_7d2qr9z5.sms)();
}
function zjr(e) {
  let o = e.roles.rcChild && !e.modePinned && (0, import_chunk_7d2qr9z5.rms)(), r = o && (0, import_chunk_7d2qr9z5.bIi)() && (0, import_chunk_k67pwqya.BBn)(e.settings()), s = e.roles.attended, a = false, l = false, h = false;
  s = s || e.roles.projectThreadChild, a = e.roles.projectThreadChild && (0, import_chunk_7d2qr9z5.sms)(), l = e.roles.projectThreadChild && (0, import_chunk_7d2qr9z5.ims)(), h = e.roles.projectThreadChild && (0, import_chunk_7d2qr9z5.ams)();
  let R = s && (0, import_chunk_7d2qr9z5.oms)();
  return { autoDefault: o, autoOverSettings: r, artifact: R, machineSettings: a, autoCompact: l, projectsEntrypoint: h, cliEntrypoint: e.roles.mayBeAttended && (0, import_chunk_7d2qr9z5.kFn)() };
}
(0, import_chunk_adx6804h.B)();
var u = "2.1.270", g = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ minVersion: (0, import_chunk_adx6804h.n)().refine((e) => e === "" || (0, import_chunk_tvttgr51.Kde)(e)).optional() }));
function f() {
  let { value: e, source: o } = (0, import_chunk_865at33z.gn)("tengu_bridge_min_version", { minVersion: u });
  if (o === "disabled") return null;
  if (o === "fallback" && !(0, import_chunk_865at33z.ni)()) return { minVersion: u, unknown: "unanswered" };
  let r = g().safeParse(e);
  if (!r.success) return { minVersion: u, unknown: "malformed" };
  let s = r.data.minVersion;
  return { minVersion: s && (0, import_chunk_tvttgr51.cT)(s, u) ? s : u, unknown: null };
}
function c8l(e = { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION) {
  let o = f();
  if (o === null) return null;
  if ((0, import_chunk_tvttgr51._I)((0, import_chunk_tvttgr51.Zke)(e), o.minVersion)) return `Your version of Claude Code (${e}) is too old for Remote Control.
Version ${o.minVersion} or higher is required. Run \`claude update\` to update.`;
  return null;
}
function vKe(e = { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION) {
  let o = f();
  if (o === null) return (0, import_chunk_k449cc64.X4n)() === "no-telemetry" ? { reason: "floor_unreachable", message: `This computer's Claude Code (${e}) cannot take a session started remotely on it: the version such sessions require cannot be received while feature-flag evaluation is off (DISABLE_TELEMETRY or DO_NOT_TRACK is set).` } : null;
  switch (o.unknown) {
    case "unanswered":
      return { reason: "floor_unanswered", message: `This computer's Claude Code (${e}) cannot take a session started remotely on it: the version such sessions require has not been received from the server.` };
    case "malformed":
      return { reason: "floor_malformed", message: `This computer's Claude Code (${e}) cannot take a session started remotely on it: the version such sessions require could not be read.` };
    case null:
      if ((0, import_chunk_tvttgr51._I)((0, import_chunk_tvttgr51.Zke)(e), o.minVersion)) return { reason: "below_floor", message: `This computer's Claude Code (${e}) is below the version a session started remotely on it requires (${o.minVersion}). Run \`claude update\` to update.` };
      return null;
  }
}
var _ = 1e4, C = 500;
async function wzs(e, o, r, s = { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION) {
  try {
    if (!(0, import_chunk_865at33z.Lc)() || !(0, import_chunk_865at33z.Wdt)()) return e;
    r.inFlight ??= (0, import_chunk_865at33z.z0)().catch((a) => (0, import_chunk_w578pjby.t)(`[bridge:floor] Flag refresh failed: ${(0, import_chunk_jv7av99m.d)(a)}`, { level: "error" })).finally(() => {
      r.inFlight = void 0;
    });
    for (let a = 0; a < _ && !o.aborted; a += C) {
      await (0, import_chunk_5appeerh.K)(C, o);
      let l = f();
      if (o.aborted || l === null) break;
      if (l.unknown !== "unanswered") return vKe(s);
      if (r.inFlight === void 0 && !(0, import_chunk_865at33z.wde)()) break;
    }
  } catch (a) {
    if ((0, import_chunk_jv7av99m.Fe)(a) || a instanceof import_chunk_jv7av99m.JB) (0, import_chunk_w578pjby.t)(`[bridge:floor] Hold ended without an answer: ${(0, import_chunk_jv7av99m.d)(a)}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(a);
  }
  return e;
}
function Rkn(e, o) {
  if (e === null) return o.reason !== "floor_unreachable";
  return s8t(e).projectThreadChild;
}
