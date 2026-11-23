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
var chunk_jejz6sfb_exports = {};
__export(chunk_jejz6sfb_exports, {
  Soi: () => Soi,
  VYr: () => VYr,
  boi: () => boi,
  cUa: () => cUa,
  jor: () => jor,
  kRn: () => kRn,
  koi: () => koi,
  t8o: () => t8o,
  woi: () => woi,
  yoi: () => yoi
});
module.exports = __toCommonJS(chunk_jejz6sfb_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_f2dee02n = require("/$bunfs/root/chunk-f2dee02n.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_0w2wb7gk = require("/$bunfs/root/chunk-0w2wb7gk.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var f = "claudecode/autoModeVerdict", R = "tengu_mighty_brook";
function cUa(e, { client: { name: n, config: t }, tool: { name: o }, args: r, parentMessage: d, context: i }) {
  if (delete e[f], i.autoModeClassified !== true || t.type !== "sdk" || t.autoModeVerdictTools?.includes(o) !== true) return;
  let g = i.options.tools.filter(({ mcpInfo: s }) => s?.serverName === n && s.toolName === o);
  if (g.length === 0 || !g.every(({ mcpInfo: s }) => s?.source === "sdk")) return;
  if ((0, import_chunk_865at33z.b)(R, true) !== true) {
    (0, import_chunk_cqa9hrgx.l)("mcp_auto_mode_verdict", "switched_off");
    return;
  }
  let { toolUseId: p } = i;
  if (p === void 0 || e["claudecode/toolUseId"] !== p) {
    (0, import_chunk_cqa9hrgx.l)("mcp_auto_mode_verdict", "not_own_id");
    return;
  }
  if (i.hookCaller !== void 0 || i.clientRequestedToolUseId === p || d.isVirtual === true || !d.message.content.some((s) => s.type === "tool_use" && s.id === p && g.some(({ name: C }) => C === s.name))) {
    (0, import_chunk_cqa9hrgx.l)("mcp_auto_mode_verdict", "not_model_tool_use");
    return;
  }
  if ((0, import_chunk_865at33z.Kk)(i.agentId, i.agentContext) !== void 0) {
    (0, import_chunk_cqa9hrgx.l)("mcp_auto_mode_verdict", "not_main_conversation");
    return;
  }
  let v = i.permissionPhase?.pipeline?.result;
  if (v?.behavior !== "allow" || v.decisionReason?.type !== "classifier" || v.decisionReason.serverCleared !== true) {
    (0, import_chunk_cqa9hrgx.l)("mcp_auto_mode_verdict", "not_cleared_by_server_classifier");
    return;
  }
  let S = d.wireToolInputs;
  if (S === void 0 || !Object.hasOwn(S, p)) {
    (0, import_chunk_cqa9hrgx.l)("mcp_auto_mode_verdict", "model_input_not_kept");
    return;
  }
  let T = (0, import_chunk_bzyb60p0.B2a)(S[p]);
  if (T === void 0) {
    (0, import_chunk_cqa9hrgx.l)("mcp_auto_mode_verdict", "model_input_text_not_kept");
    return;
  }
  if ((0, import_chunk_w578pjby._)(r) !== T) {
    (0, import_chunk_cqa9hrgx.l)("mcp_auto_mode_verdict", "args_differ_from_model_input");
    return;
  }
  e[f] = "allowed_by_server", (0, import_chunk_cqa9hrgx.u)("mcp_auto_mode_verdict");
}
function a(e) {
  return e.scope === "dynamic" && !(0, import_chunk_xcgcdx61.jl)(e) && import_chunk_f2dee02n.Ql.bridgeCarrier === void 0 && "url" in e && typeof e.url === "string" && (0, import_chunk_2mwshd9r.zhe)(e.url);
}
function yoi(e, n) {
  let t = a(e) ? n : (0, import_chunk_0w2wb7gk.FGt)(n);
  if (t === void 0 || !Object.hasOwn(t, f)) return t;
  let { [f]: o, ...r } = t;
  return r;
}
function t8o(e, n) {
  if (n === void 0 || !Object.hasOwn(n, import_chunk_0w2wb7gk.wxe) || !a(e)) return (0, import_chunk_bzyb60p0.Tza)(e, n);
  return { ...n, [import_chunk_0w2wb7gk.Ilt]: import_chunk_0w2wb7gk.fTo };
}
var m = "approvalTicket", k = "anthropic/approvalTicket", A = 8192;
function Soi(e) {
  let n = typeof e === "object" && e !== null && "behavior" in e && e.behavior === "allow" && m in e ? e[m] : void 0;
  return typeof n === "string" && n !== "" && n.length <= A ? n : void 0;
}
var c = new import_chunk_pzzqg6s3.ze(() => ({ byToolUse: /* @__PURE__ */ new Map(), ofLateAllows: /* @__PURE__ */ new Map() }));
function w(e, n, t, o) {
  if (n === "") return;
  c.of(e).byToolUse.set(n, { serverName: t, ticket: o }), (0, import_chunk_4vsz8a99.xat)(e, n, () => {
    c.peek(e)?.byToolUse.delete(n);
  });
}
function VYr(e, n, t, o) {
  let r = n.mcpInfo?.serverName;
  if (e === void 0 || r === void 0 || o.forRemoteExecution === true) return;
  if (o.permissionRound === void 0 && o.toolUseId !== t) {
    (0, import_chunk_cqa9hrgx.l)("mcp_approval_ticket", "not_own_id");
    return;
  }
  if ((0, import_chunk_865at33z.Kk)(o.agentId, o.agentContext) !== void 0) {
    (0, import_chunk_cqa9hrgx.l)("mcp_approval_ticket", "not_main_conversation");
    return;
  }
  w(o.session, t, r, e);
}
function boi(e, n, t) {
  if (e === void 0) return;
  if (t === void 0) {
    c.peek(e)?.ofLateAllows.delete(n);
    return;
  }
  c.of(e).ofLateAllows.set(n, t);
}
function kRn(e, n) {
  let t = e === void 0 ? void 0 : c.peek(e)?.ofLateAllows, o = t?.get(n);
  return t?.delete(n), o;
}
function jor(e, n, t, o) {
  if (e === void 0 || n === void 0) return;
  let r = c.peek(e)?.byToolUse, d = r?.get(n);
  if (d === void 0) return;
  if (d.serverName !== t) {
    (0, import_chunk_cqa9hrgx.l)("mcp_approval_ticket", "other_server");
    return;
  }
  if (!a(o)) {
    (0, import_chunk_cqa9hrgx.l)("mcp_approval_ticket", "not_own_relay");
    return;
  }
  return r?.delete(n), (0, import_chunk_cqa9hrgx.u)("mcp_approval_ticket"), { [k]: d.ticket };
}
function woi(e, n, t, o, r) {
  delete e[k], Object.assign(e, jor(n, t, o, r));
}
function koi(e) {
  let { response: n } = e;
  if (n.subtype !== "success") return e;
  let t = n.response;
  if (typeof t !== "object" || t === null || !(m in t)) return e;
  let { [m]: o, ...r } = t;
  return { ...e, response: { ...n, response: r } };
}
