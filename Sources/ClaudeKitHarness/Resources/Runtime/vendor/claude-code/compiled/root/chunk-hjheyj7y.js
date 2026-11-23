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
var chunk_hjheyj7y_exports = {};
__export(chunk_hjheyj7y_exports, {
  Gnr: () => Gnr,
  NCn: () => NCn,
  SLa: () => SLa,
  X5r: () => X5r,
  Y5r: () => Y5r,
  _La: () => _La,
  bLa: () => bLa,
  gLa: () => gLa,
  hLa: () => hLa,
  jnr: () => jnr,
  q5r: () => q5r,
  wLa: () => wLa,
  yLa: () => yLa,
  znr: () => znr
});
module.exports = __toCommonJS(chunk_hjheyj7y_exports);
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var jnr = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE", Gnr = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL", NCn = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED", znr = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON";
function hLa(e) {
  return e.toolPermissionContext.proactivityBaseline === void 0 ? void 0 : e;
}
function q5r({ toolPermissionContext: e }) {
  let t = e.proactivityBaseline;
  return t === void 0 ? {} : { [jnr]: t.mode };
}
function Y5r({ proactivityLevel: e, toolPermissionContext: t }) {
  let n = { [Gnr]: e };
  if (t.startupModeDecidedByProactivityLevel !== void 0) n[NCn] = "1";
  if ((0, import_chunk_4vsz8a99.awe)()) n[znr] = "1";
  return n;
}
function gLa({ toolPermissionContext: e }) {
  return e.startupModeDecidedByProactivityLevel === void 0 ? { [NCn]: "0" } : {};
}
function _La(e) {
  return (0, import_chunk_3t7ve0wy.T0o)(e) !== "fresh" || (0, import_chunk_3t7ve0wy.Vra)(e).some((t) => t === "--permission-mode" || t.startsWith("--permission-mode="));
}
function yLa(e) {
  let t = import_chunk_c203g5kd.s.CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE;
  import_chunk_c203g5kd.s.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE");
  let n = (0, import_chunk_pbteexar.a_)(t);
  if (n === "bypassPermissions" && !e) return;
  return n;
}
function SLa() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL;
  if (import_chunk_c203g5kd.s.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL"), (0, import_chunk_bzyb60p0.T4e)(e)) return e;
  import_chunk_c203g5kd.s.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED"), import_chunk_c203g5kd.s.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON");
  return;
}
function bLa() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON;
  return import_chunk_c203g5kd.s.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON"), (0, import_chunk_69qhefwa.Ne)(e);
}
function wLa() {
  return (0, import_chunk_bzyb60p0.T4e)(import_chunk_c203g5kd.s.CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL) && (0, import_chunk_69qhefwa.Ne)(import_chunk_c203g5kd.s.CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON);
}
function X5r() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED;
  if (import_chunk_c203g5kd.s.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED"), (0, import_chunk_69qhefwa.Ne)(e)) return true;
  if ((0, import_chunk_69qhefwa.Oi)(e)) return false;
  return;
}
