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
var chunk_pbbjnb48_exports = {};
__export(chunk_pbbjnb48_exports, {
  E1n: () => E1n,
  Ibe: () => Ibe,
  Sml: () => Sml,
  XAe: () => XAe,
  ZSr: () => ZSr,
  _ml: () => _ml,
  gU: () => gU,
  gml: () => gml,
  yml: () => yml
});
module.exports = __toCommonJS(chunk_pbbjnb48_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var gU = 1500, ZSr = 3e3;
function XAe() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && (0, import_chunk_f9x2f6cx.Se)();
}
function E1n() {
  return XAe() && (0, import_chunk_3t7ve0wy.Gm)();
}
function gml({ eventLoggingEnabled: e, growthBookEnabled: n, cacheEmpty: o, relaunches: i }) {
  let t = e && o ? gU : 0, r = n && i ? import_chunk_c203g5kd.s.CLAUDE_CODE_FLAG_FETCH_WAIT_MS ?? ZSr : 0, a = Math.max(t, r);
  return a > 0 ? a : void 0;
}
function _ml({ site: e, nonInteractive: n, budgetMs: o, settingsEnvPending: i, cacheEmpty: t, warmCacheKick: r }) {
  if (!n || o === void 0) return "not_eligible";
  if (!t && !r) return "not_asked_warm";
  if (i) return t ? "settings_pending_empty" : "settings_pending_warm";
  if (e === "init") return t ? "started_in_init_empty" : "started_in_init_warm";
  return t ? "started_after_init_empty" : "started_after_init_warm";
}
function yml(e) {
  switch (e) {
    case "started_in_init_empty":
    case "started_in_init_warm":
    case "started_after_init_empty":
    case "started_after_init_warm":
      return true;
    case "not_asked_warm":
    case "settings_pending_empty":
    case "settings_pending_warm":
    case "launch_excluded":
    case "not_eligible":
      return false;
  }
}
function Sml({ nonInteractive: e, budgetMs: n, settingsEnvPending: o, cacheEmpty: i, relaunches: t, autoModeKillSwitchOnDisk: r, warmWakeEarlyFetch: a }) {
  if (n === void 0) return;
  if (e && !o && (i || t && (r || !a))) return "gb-before-mode";
  return t ? "gb-before-context" : "gb-before-tools";
}
async function Ibe({ initialize: e, budgetMs: n }) {
  let o = performance.now(), i = await (0, import_chunk_5appeerh.me)(e().then(() => true, () => true), n);
  return { waitMs: performance.now() - o, timedOut: i === void 0 };
}
