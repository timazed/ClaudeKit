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
var chunk_d28sbgqz_exports = {};
__export(chunk_d28sbgqz_exports, {
  IGl: () => IGl,
  OGl: () => OGl,
  PGl: () => PGl,
  RGl: () => RGl,
  c7l: () => c7l,
  f7l: () => f7l,
  p7l: () => p7l,
  qVo: () => qVo,
  u7l: () => u7l,
  xGl: () => xGl
});
module.exports = __toCommonJS(chunk_d28sbgqz_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_r60bafc1 = require("/$bunfs/root/chunk-r60bafc1.js");
var import_chunk_5w3q7h0v = require("/$bunfs/root/chunk-5w3q7h0v.js");
var import_chunk_h4t4qfaq = require("/$bunfs/root/chunk-h4t4qfaq.js");
var import_chunk_8c111j67 = require("/$bunfs/root/chunk-8c111j67.js");
var import_chunk_r3wrey46 = require("/$bunfs/root/chunk-r3wrey46.js");
var import_chunk_mh32mevx = require("/$bunfs/root/chunk-mh32mevx.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var l = /* @__PURE__ */ new Set(["remote", "remote_cowork", "remote_desktop", "remote_mobile", "remote_projects"]);
function RGl(e) {
  if ((0, import_chunk_865at33z.Qt)()) return /* @__PURE__ */ new Set(["bg"]);
  let r = /* @__PURE__ */ new Set();
  if ((e ?? (0, import_chunk_865at33z.APr)()) || (0, import_chunk_rb36kwbn.pk)() !== null) r.add("watched");
  if (qVo()) r.add("ccr");
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge" || (0, import_chunk_f9x2f6cx.Od)()) r.add("bridge");
  let o = import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT;
  if (o !== void 0 && import_chunk_3t7ve0wy.F6e.has(o)) r.add("desktop");
  if (IGl()) r.add("cli");
  if (!(0, import_chunk_f9x2f6cx.Se)() && (0, import_chunk_8c111j67.Mf)()) r.add("repl");
  return r;
}
function qVo() {
  if ((0, import_chunk_t7fzcstv.CI)("fanout")) return true;
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc") return true;
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) return l.has(import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT ?? "") && !process.env.BUGHUNTER_FLEET_SIZE;
  return false;
}
async function c7l(e) {
  return (0, import_chunk_m15w38ag.ne)() && e !== void 0 ? (0, import_chunk_865at33z.RPr)(e) : void 0;
}
var u = { bg: ["state"], watched: ["state"], ccr: ["summary"], bridge: ["summary"], desktop: ["summary"], cli: ["summary"], repl: ["headline"] };
function xGl(e) {
  let r = /* @__PURE__ */ new Set(), o = PGl();
  for (let n of e) {
    if (o.has(n)) continue;
    for (let i of u[n]) r.add(i);
  }
  if (e.has("bg")) r.delete("summary");
  if ((0, import_chunk_865at33z.b)("tengu_classifier_summary_kill", false)) r.delete("summary");
  return r;
}
function PGl() {
  return d((0, import_chunk_865at33z.b)("tengu_classifier_disabled_surfaces", ""));
}
function d(e) {
  let r = /* @__PURE__ */ new Set();
  for (let o of e.split(",")) {
    let n = o.trim();
    if (!n) continue;
    if (n in u) r.add(n);
    else if (!(0, import_chunk_r3wrey46.Lne)().warnedUnknownDisabledSurface) (0, import_chunk_r3wrey46.Lne)().warnedUnknownDisabledSurface = true, (0, import_chunk_w578pjby.t)(`[classifier] tengu_classifier_disabled_surfaces: unknown surface '${n}' ignored`);
  }
  return r;
}
function OGl(e) {
  if (e.size === 0) return null;
  let r = e.has("state") ? "llm" : !e.has("summary") ? "heuristic" : process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY !== void 0 ? (0, import_chunk_69qhefwa.Ne)(process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY) ? "llm" : "heuristic" : f();
  return r === "llm" && (0, import_chunk_865at33z.b)("tengu_cobalt_wren", false) ? "heuristic" : r;
}
function f() {
  if ((0, import_chunk_865at33z.b)("tengu_classifier_summary_llm_emit", false)) return "llm";
  return "heuristic";
}
function IGl() {
  return false;
}
function u7l(e) {
  return (0, import_chunk_5w3q7h0v.Dne)() && (0, import_chunk_5w3q7h0v.$fe)(e) && (0, import_chunk_865at33z.b)("tengu_projects_thread_recap", false);
}
var a = /* @__PURE__ */ new Map([["blocked", "blocked"], ["done", "completed"], ["working", "review_ready"]]);
function f7l(e, r) {
  if (e.recap) return { status_category: e.state === "failed" ? "failed" : a.get(e.state) ?? "review_ready", status_detail: e.recap.headline, needs_action: e.state === "blocked" ? e.recap.needs : "", recent_action: e.recap.needsYou, description: e.recap.happened, reply: e.recap.reply };
  return { status_category: a.get(e.state) ?? "review_ready", status_detail: e.detail, needs_action: e.state === "blocked" ? e.needs ?? "" : "", recent_action: e.output.result ?? "", ...r?.projectsRecap && { description: (0, import_chunk_r3wrey46.wao)(e.detail).text } };
}
function p7l(e, r) {
  let o = xGl(RGl(false));
  if (!o.has("summary") || OGl(o) === null) return;
  let n = (0, import_chunk_px0hhsq7.mr)(e.tool_name), i = !n?.toolName || n.serverName === import_chunk_qdcbcsg7.$n ? (0, import_chunk_h4t4qfaq.Cwe)(e.tool_name) : (0, import_chunk_mh32mevx.MEo)({ serverName: n.serverName, toolName: n.toolName }), c = e.tool_name.startsWith("dialog:") ? { status_category: "blocked", status_detail: "Waiting on a user dialog", needs_action: e.action_description } : { status_category: "blocked", status_detail: `Waiting on permission: ${i}`, needs_action: `Approve or deny ${i}` };
  (0, import_chunk_r60bafc1.dat)(r, c);
}
