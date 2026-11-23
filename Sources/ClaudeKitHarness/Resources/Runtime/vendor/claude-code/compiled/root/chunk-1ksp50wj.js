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
var chunk_1ksp50wj_exports = {};
__export(chunk_1ksp50wj_exports, {
  ELn: () => ELn,
  Ecs: () => Ecs,
  Ico: () => Ico,
  Oae: () => Oae,
  Oco: () => Oco,
  aol: () => aol,
  lol: () => lol,
  wst: () => wst,
  xCi: () => xCi
});
module.exports = __toCommonJS(chunk_1ksp50wj_exports);
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_z12zbtvr = require("/$bunfs/root/chunk-z12zbtvr.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_0dht3xy7 = require("/$bunfs/root/chunk-0dht3xy7.js");
var import_chunk_jgsh7w3m = require("/$bunfs/root/chunk-jgsh7w3m.js");
var import_crypto = require("crypto");
var b = 32;
function Oae(e, r) {
  return (0, import_crypto.createHash)("sha256").update(e).update("\0").update((0, import_chunk_w578pjby._)(g(r))).digest("hex");
}
function g(e, r = 0) {
  if (r > b) return e;
  if (Array.isArray(e)) return e.map((n) => g(n, r + 1));
  if (typeof e === "object" && e !== null) return Object.fromEntries(Object.entries(e).sort(([n], [s]) => n < s ? -1 : n > s ? 1 : 0).map(([n, s]) => [n, g(s, r + 1)]));
  return e;
}
function ELn(e, r, n = {}) {
  let s = n.tool_kind === "mcp_skill" || n.mcp_skill !== void 0 ? { name: `${e}#mcp_skill`, wire: { input: r, mcp_server: n.mcp_server, mcp_skill: n.mcp_skill, description: n.description, permission_suggestions: n.permission_suggestions } } : void 0, o = (0, import_chunk_w578pjby.te)((0, import_chunk_w578pjby._)(s?.wire ?? r));
  return Oae(s?.name ?? e, o);
}
function P() {
  return `perm-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
function Oco(e) {
  let r = e.teamName || (0, import_chunk_wtm85h0y.Nf)(), n = e.workerId || (0, import_chunk_wtm85h0y.iB)(), s = e.workerName || (0, import_chunk_wtm85h0y.jR)(), o = e.workerColor || (0, import_chunk_wtm85h0y.Y0)();
  if (!r) throw Error("Team name is required for permission requests");
  if (!n) throw Error("Worker ID is required for permission requests");
  if (!s) throw Error("Worker name is required for permission requests");
  return { id: P(), workerId: n, workerName: s, workerColor: o, teamName: r, toolName: e.toolName, toolUseId: e.toolUseId, description: e.askMetadata?.mcpSkill?.summary ?? e.description, input: e.input, permissionSuggestions: e.permissionSuggestions || [], ...{ mcpSkillFields: (0, import_chunk_z12zbtvr.pAe)(e.askMetadata) } };
}
function y(e) {
  if (!(e || (0, import_chunk_wtm85h0y.Nf)())) return false;
  let n = (0, import_chunk_wtm85h0y.iB)();
  return !n || n === "team-lead";
}
function wst() {
  let e = (0, import_chunk_wtm85h0y.Nf)(), r = (0, import_chunk_wtm85h0y.iB)();
  return !!e && !!r && !y();
}
async function S(e, r) {
  let n = e || (0, import_chunk_wtm85h0y.Nf)();
  if (!n) return null;
  if (!await (0, import_chunk_jgsh7w3m.$k)(n, r)) return (0, import_chunk_w578pjby.t)(`[PermissionSync] Team file not found for team: ${n}`), null;
  return import_chunk_xfj2cwfv.cd;
}
async function l(e, r, n, s, o) {
  if (await (0, import_chunk_0dht3xy7.$O)(e, r, n, o) === void 0) return (0, import_chunk_w578pjby.t)(`[PermissionSync] FAILED to deliver ${s}`, { level: "error" }), false;
  return (0, import_chunk_w578pjby.t)(`[PermissionSync] Sent ${s}`), true;
}
async function Ico(e, r) {
  let n = await S(e.teamName, r);
  if (!n) return (0, import_chunk_w578pjby.t)("[PermissionSync] Cannot send permission request: leader name not found"), false;
  try {
    let s = (0, import_chunk_0dht3xy7.GCi)({ request_id: e.id, agent_id: e.workerName, tool_name: e.toolName, tool_use_id: e.toolUseId, description: e.description, input: e.input, permission_suggestions: e.permissionSuggestions, ...{ mcp_skill_fields: e.mcpSkillFields } });
    return await l(n, { from: e.workerName, text: (0, import_chunk_w578pjby._)(s), timestamp: (/* @__PURE__ */ new Date()).toISOString(), color: e.workerColor }, e.teamName, `permission request ${(0, import_chunk_w578pjby._)(e.id)} to leader ${(0, import_chunk_w578pjby._)(n)} via mailbox`, r);
  } catch (s) {
    return (0, import_chunk_w578pjby.t)(`[PermissionSync] Failed to send permission request via mailbox: ${s}`), (0, import_chunk_k449cc64.i)(s), false;
  }
}
async function xCi(e, r, n, s, o, d) {
  let p = s || (0, import_chunk_wtm85h0y.Nf)();
  if (!p) return (0, import_chunk_w578pjby.t)("[PermissionSync] Cannot send permission response: team name not found"), false;
  try {
    let a = (0, import_chunk_0dht3xy7.zCi)({ request_id: n, subtype: r.decision === "approved" ? "success" : "error", error: r.feedback, updated_input: r.updatedInput, permission_updates: r.permissionUpdates, tool_use_id: d, approved_request: r.approvedRequest });
    return await l(e, { from: import_chunk_xfj2cwfv.cd, text: (0, import_chunk_w578pjby._)(a), timestamp: (/* @__PURE__ */ new Date()).toISOString() }, p, `permission response for ${(0, import_chunk_w578pjby._)(n)} to worker ${(0, import_chunk_w578pjby._)(e)} via mailbox`, o);
  } catch (a) {
    return (0, import_chunk_w578pjby.t)(`[PermissionSync] Failed to send permission response via mailbox: ${a}`), (0, import_chunk_k449cc64.i)(a), false;
  }
}
function aol() {
  return `sandbox-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
async function lol(e, r, n, s) {
  let o = n || (0, import_chunk_wtm85h0y.Nf)();
  if (!o) return (0, import_chunk_w578pjby.t)("[PermissionSync] Cannot send sandbox permission request: team name not found"), (0, import_chunk_cqa9hrgx.m)("swarm_sandbox_permission_request", "no_team_name"), false;
  let d = await S(o, s);
  if (!d) return (0, import_chunk_w578pjby.t)("[PermissionSync] Cannot send sandbox permission request: leader name not found"), (0, import_chunk_cqa9hrgx.m)("swarm_sandbox_permission_request", "no_leader"), false;
  let p = (0, import_chunk_wtm85h0y.iB)(), a = (0, import_chunk_wtm85h0y.jR)(), k = (0, import_chunk_wtm85h0y.Y0)();
  if (!p || !a) return (0, import_chunk_w578pjby.t)("[PermissionSync] Cannot send sandbox permission request: worker ID or name not found"), (0, import_chunk_cqa9hrgx.m)("swarm_sandbox_permission_request", "no_worker_identity"), false;
  try {
    let c = (0, import_chunk_0dht3xy7.VCi)({ requestId: r, workerId: p, workerName: a, workerColor: k, host: e }), w = await l(d, { from: a, text: (0, import_chunk_w578pjby._)(c), timestamp: (/* @__PURE__ */ new Date()).toISOString(), color: k }, o, `sandbox permission request ${(0, import_chunk_w578pjby._)(r)} for host ${(0, import_chunk_w578pjby._)(e)} to leader ${(0, import_chunk_w578pjby._)(d)} via mailbox`, s);
    if (w) (0, import_chunk_cqa9hrgx.u)("swarm_sandbox_permission_request");
    else (0, import_chunk_cqa9hrgx.m)("swarm_sandbox_permission_request", "mailbox_write_failed");
    return w;
  } catch (c) {
    return (0, import_chunk_w578pjby.t)(`[PermissionSync] Failed to send sandbox permission request via mailbox: ${c}`), (0, import_chunk_k449cc64.i)(c), (0, import_chunk_cqa9hrgx.m)("swarm_sandbox_permission_request", "mailbox_write_failed"), false;
  }
}
async function Ecs(e, r, n, s, o, d) {
  let p = o || (0, import_chunk_wtm85h0y.Nf)();
  if (!p) return (0, import_chunk_w578pjby.t)("[PermissionSync] Cannot send sandbox permission response: team name not found"), false;
  try {
    let a = (0, import_chunk_0dht3xy7.KCi)({ requestId: r, host: n, allow: s });
    return await l(e, { from: import_chunk_xfj2cwfv.cd, text: (0, import_chunk_w578pjby._)(a), timestamp: (/* @__PURE__ */ new Date()).toISOString() }, p, `sandbox permission response for ${(0, import_chunk_w578pjby._)(r)} (host: ${(0, import_chunk_w578pjby._)(n)}, allow: ${(0, import_chunk_w578pjby._)(s)}) to worker ${(0, import_chunk_w578pjby._)(e)} via mailbox`, d);
  } catch (a) {
    return (0, import_chunk_w578pjby.t)(`[PermissionSync] Failed to send sandbox permission response via mailbox: ${a}`), (0, import_chunk_k449cc64.i)(a), false;
  }
}
