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
var chunk_53snsm3k_exports = {};
__export(chunk_53snsm3k_exports, {
  $Eo: () => $Eo,
  BEo: () => BEo,
  DZ: () => DZ,
  FEo: () => FEo,
  GEo: () => GEo,
  Mwe: () => Mwe,
  OLe: () => OLe,
  SCr: () => SCr,
  SEs: () => SEs,
  STl: () => STl,
  Sjn: () => Sjn,
  UEo: () => UEo,
  VEo: () => VEo,
  WEo: () => WEo,
  _Es: () => _Es,
  _Gi: () => _Gi,
  _Tl: () => _Tl,
  _jn: () => _jn,
  _lt: () => _lt,
  aTl: () => aTl,
  bCr: () => bCr,
  bEs: () => bEs,
  bTl: () => bTl,
  cEs: () => cEs,
  cTl: () => cTl,
  dTl: () => dTl,
  dxe: () => dxe,
  fEs: () => fEs,
  fTl: () => fTl,
  gEs: () => gEs,
  gGi: () => gGi,
  gTl: () => gTl,
  gjn: () => gjn,
  gun: () => gun,
  hEs: () => hEs,
  hGi: () => hGi,
  hGt: () => hGt,
  hTl: () => hTl,
  hjn: () => hjn,
  hun: () => hun,
  iTl: () => iTl,
  jEo: () => jEo,
  kEs: () => kEs,
  lTl: () => lTl,
  mEs: () => mEs,
  mGi: () => mGi,
  mTl: () => mTl,
  mun: () => mun,
  pEs: () => pEs,
  pGi: () => pGi,
  pTl: () => pTl,
  pun: () => pun,
  uEs: () => uEs,
  uTl: () => uTl,
  wCr: () => wCr,
  wEs: () => wEs,
  wTl: () => wTl,
  yCr: () => yCr,
  yEs: () => yEs,
  yGi: () => yGi,
  yTl: () => yTl,
  yjn: () => yjn,
  ylt: () => ylt,
  zEo: () => zEo
});
module.exports = __toCommonJS(chunk_53snsm3k_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_jg3mepas = require("/$bunfs/root/chunk-jg3mepas.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_xrav2tvh = require("/$bunfs/root/chunk-xrav2tvh.js");
var import_chunk_nynf6rf6 = require("/$bunfs/root/chunk-nynf6rf6.js");
var import_chunk_mx7wawy7 = require("/$bunfs/root/chunk-mx7wawy7.js");
var import_chunk_hym6yzrf = require("/$bunfs/root/chunk-hym6yzrf.js");
var import_chunk_8hfdvrr1 = require("/$bunfs/root/chunk-8hfdvrr1.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_bp9b0hd8 = require("/$bunfs/root/chunk-bp9b0hd8.js");
var import_crypto = require("crypto");
var pEs = 32;
function OLe(e) {
  if (!Array.isArray(e)) return [];
  return e.filter((r) => typeof r === "string" && r.length > 0 && r.length <= 64).slice(0, 32);
}
(0, import_chunk_adx6804h.B)();
var yCr = 8e3;
async function ye({ verdict: e, respond: r, inform: o }) {
  let s = e.then((y) => y ?? { ok: true }), i;
  try {
    i = await s;
  } catch (y) {
    return (0, import_chunk_w578pjby.t)(`set_model verdict rejected: ${(0, import_chunk_jv7av99m.d)(y)}`, { level: "error" }), r({ subtype: "error", error: "set_model failed", error_code: "internal_error" });
  }
  let b = typeof i.model === "string" ? (0, import_chunk_kx2fp6pc.wn)(i.model) : void 0;
  if (i.ok) {
    if (Array.isArray(i.notices)) o(i.notices.filter((y) => typeof y === "string").map(import_chunk_kx2fp6pc.wn));
    return r(b === void 0 ? { subtype: "success" } : { subtype: "success", response: { model: b } });
  }
  let R = i.code, T = import_chunk_xfj2cwfv.P5i.find((y) => y === R);
  return r({ subtype: "error", error: Pe(i.error).map(import_chunk_kx2fp6pc.wn).join(`
`), ...T !== void 0 && { error_code: T }, ...b !== void 0 && { model: b } });
}
function Pe(e) {
  return typeof e === "string" ? e.split(`
`) : [""];
}
var Y = "live_only", _lt = 57344, Me = "The reply is too large to be sent without storing it";
function pun(e, r) {
  return { ...(0, import_chunk_hym6yzrf.P9)(e, r), [Y]: true };
}
function SCr(e) {
  return e.type === "control_response" && e[Y] === true;
}
function iTl(e) {
  if (!(Y in e)) return e;
  let { [Y]: r, ...o } = e;
  return o;
}
function aTl(e, r) {
  if (!SCr(e) || Buffer.byteLength((0, import_chunk_w578pjby._)(e)) <= r) return e;
  let o = e.response;
  return { type: "control_response", [Y]: true, ...typeof e.uuid === "string" && { uuid: e.uuid }, response: { subtype: "error", request_id: o?.request_id, error: Me } };
}
(0, import_chunk_adx6804h.B)();
function cEs(e) {
  if (e == null || e === "") return { valid: true, toolUseId: void 0 };
  if (typeof e === "string") return { valid: true, toolUseId: e };
  return { valid: false };
}
var mun = "Background tasks are disabled in this session.", uEs = "background_tasks: tool_use_id must be a string";
function fEs(e) {
  return { mcpInstructions: void 0, agents: e.agents.map(({ path: r, pluginId: o, ...s }) => s), skills: e.skills && { ...e.skills, skillFrontmatter: e.skills.skillFrontmatter.map(({ path: r, pluginId: o, ...s }) => s) } };
}
(0, import_chunk_adx6804h.B)();
function hjn(e) {
  return Le().safeParse(e).success;
}
var Le = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ max_thinking_tokens: (0, import_chunk_adx6804h.E)().refine((e) => Number.isInteger(e)).nullable().optional(), thinking_display: (0, import_chunk_adx6804h.F)(import_chunk_xfj2cwfv.act).nullable().optional() })), mEs = `set_max_thinking_tokens: max_thinking_tokens must be an integer or null and thinking_display must be ${import_chunk_xfj2cwfv.act.map((e) => `"${e}"`).join(", ")}, or null`;
var pGi = "display_only";
function hEs(e) {
  return (e.type === "user" || e.type === "assistant" || e.type === "system") && e.historical === true && e.display_only === true;
}
function gEs(e) {
  return e !== null && typeof e === "object" && "type" in e && typeof e.type === "string";
}
function Ue(e) {
  return e !== null && typeof e === "object" && "type" in e && e.type === "control_response" && "response" in e && e.response != null;
}
function $e(e) {
  return e !== null && typeof e === "object" && "type" in e && e.type === "control_request" && "request_id" in e && "request" in e && e.request != null;
}
function lTl(e) {
  (0, import_chunk_t39bs2jr.jo)().bridgeStateFramesGate = e;
}
function dxe(e) {
  if (e.type === "user" && e.origin?.kind === "voice-call") return false;
  if ((e.type === "user" || e.type === "assistant") && e.isVirtual && !(0, import_chunk_f9x2f6cx.rpt)(e)) {
    if (!((0, import_chunk_r3kja8v6.ue)() && e.visibleToRemoteClients === true)) return false;
  }
  if (e.type === "attachment") {
    if (e.attachment.type === "hook_system_message") return true;
    if (e.attachment.type === "tool_host_result_lines") return true;
    return e.attachment.type === "queued_command" && e.attachment.commandMode === "prompt" && !e.attachment.isMeta && (0, import_chunk_865at33z.OE)(e.attachment.origin);
  }
  return e.type === "user" || e.type === "assistant" && !(0, import_chunk_xfj2cwfv.boe)(e) || e.type === "system" && (e.subtype === "local_command" || e.subtype === "model_consent_fallback" || e.subtype === "compact_boundary" && ((0, import_chunk_t39bs2jr.jo)().bridgeStateFramesGate?.() ?? true));
}
function FEo(e) {
  if ((0, import_chunk_r3kja8v6.ue)() && e.type === "user" && e.isVirtual && !(0, import_chunk_f9x2f6cx.rpt)(e)) return false;
  return e.type === "user" && !e.isCompactSummary && !(0, import_chunk_xfj2cwfv.sct)(e);
}
function dTl(e) {
  if ((0, import_chunk_r3kja8v6.ue)() && (e.type === "user" || e.type === "assistant") && e.isVirtual === true && !(0, import_chunk_f9x2f6cx.rpt)(e)) return true;
  return e.type === "attachment" || e.type === "system" && e.subtype === "model_consent_fallback";
}
function $Eo(e) {
  return e.type === "conversation_reset" || e.type === "stream_event" || e.type === "system" && e.subtype === "status" || e.subtype === "task_started" || e.subtype === "task_progress" || e.subtype === "task_updated" || e.subtype === "task_notification" || e.subtype === "background_tasks_changed" || e.subtype === "thinking_tokens" || e.subtype === "code_change_published" || e.subtype === "vcs_state_changed" || e.subtype === "file_attachments_missing";
}
function UEo(e) {
  if (!(0, import_chunk_865at33z.uhe)(e)) return;
  let r = e.message.content, o;
  if (typeof r === "string") o = r;
  else for (let i of r) if (i.type === "text") {
    o = i.text;
    break;
  }
  if (!o) return;
  return (0, import_chunk_k449cc64.A4t)(o) || void 0;
}
function cTl(e, r, o, s, i, b, R, T) {
  try {
    let y = (0, import_chunk_mx7wawy7.blt)((0, import_chunk_w578pjby.te)(e));
    if (Ue(y)) {
      (0, import_chunk_w578pjby.t)("[bridge:repl] Ingress message type=control_response"), i?.(y);
      return;
    }
    if ($e(y)) {
      (0, import_chunk_w578pjby.t)(`[bridge:repl] Inbound control_request subtype=${y.request.subtype}`), b?.(y);
      return;
    }
    if (gEs(y) && y.type === "control_cancel_request" && "request_id" in y && typeof y.request_id === "string") {
      (0, import_chunk_w578pjby.t)(`[bridge:repl] Inbound control_cancel_request request_id=${y.request_id}`), R?.(y.request_id);
      return;
    }
    if (rt(y)) {
      let I = nt(y.notification);
      if (I === void 0) {
        if (T) (0, import_chunk_w578pjby.t)("[bridge:repl] Ingress message type=queued_notification"), T({ type: "queued_notification", notification: y.notification });
        else (0, import_chunk_w578pjby.t)("[bridge:repl] Ignoring queued_notification: host has no notification buffer");
        return;
      }
      (0, import_chunk_w578pjby.t)("[bridge:repl] Ingress queued_notification from another session: delivering as its user frame"), y = I;
    }
    if (!gEs(y)) return;
    let A = "uuid" in y && typeof y.uuid === "string" ? y.uuid : void 0;
    if (A && r.has(A)) {
      (0, import_chunk_w578pjby.t)(`[bridge:repl] Ignoring echo: type=${y.type} uuid=${A}`);
      return;
    }
    if ((0, import_chunk_r3kja8v6.ue)()) {
      let I = require("/$bunfs/root/chunk-cmr1hpkw.js");
      if (A !== void 0 && I.isScriptRowUUID(r, A) || y.type === "user" && "is_virtual" in y && y.is_virtual === true) {
        (0, import_chunk_w578pjby.t)(`[bridge:repl] Ignoring a script call's row at ingress: type=${y.type} uuid=${A ?? "none"}`);
        return;
      }
    }
    if (A && o.has(A)) {
      (0, import_chunk_w578pjby.t)(`[bridge:repl] Ignoring re-delivered inbound: type=${y.type} uuid=${A}`);
      return;
    }
    if ((0, import_chunk_w578pjby.t)(`[bridge:repl] Ingress message type=${y.type}${A ? ` uuid=${A}` : ""}`), y.type === "user") {
      if ("isReplay" in y && y.isReplay === true) {
        (0, import_chunk_w578pjby.t)(`[bridge:repl] Ignoring replay echo: uuid=${A ?? "none"}`);
        return;
      }
      if ("parent_tool_use_id" in y && y.parent_tool_use_id != null) {
        (0, import_chunk_w578pjby.t)(`[bridge:repl] Ignoring parented user frame at ingress (echo/replay of a subagent frame): uuid=${A}`);
        return;
      }
      if (hEs(y)) {
        (0, import_chunk_w578pjby.t)(`[bridge:repl] Ignoring fork display frame at ingress: uuid=${A ?? "none"}`);
        return;
      }
      if (A) o.add(A);
      (0, import_chunk_y53wbr8a.a)("tengu_bridge_message_received", { is_repl: true }), (0, import_chunk_cqa9hrgx.u)("bridge_message_receive"), s?.(y);
    } else (0, import_chunk_w578pjby.t)(`[bridge:repl] Ignoring non-user inbound message: type=${y.type}`);
  } catch (y) {
    (0, import_chunk_w578pjby.t)(`[bridge:repl] Failed to parse ingress message: ${(0, import_chunk_jv7av99m.d)(y)}`), (0, import_chunk_cqa9hrgx.m)("bridge_message_receive", "bridge_message_receive_parse_failed");
  }
}
var Ke = /* @__PURE__ */ new Set(["effortLevel", "ultracode"]), Ve = 5, Be = 40, je = "This session is outbound-only. Enable Remote Control locally to allow inbound control.", We = 8e3, ee = "get_workspace_diff timed out: the workspace diff is still being computed; retry shortly", mGi = 66e4, gjn = "side_question timed out: the host did not answer in time", Ge = "(No answer available for this side question. Try again, or ask in the main conversation.)";
function hGi(e) {
  return e.response !== null && e.synthetic !== false ? { ...e, response: Ge, synthetic: true } : e;
}
var Ye = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ question: (0, import_chunk_adx6804h.n)(), history: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ question: (0, import_chunk_adx6804h.n)(), response: (0, import_chunk_adx6804h.n)(), fallback_notice: (0, import_chunk_adx6804h.n)().optional() })).optional() })), ze = "This session is shutting down.", He = /* @__PURE__ */ new Set(["initialize", "file_suggestions", "read_file", "get_workspace_diff", "get_context_usage", "get_usage", "mcp_status"]);
function Se(e, r) {
  if (r instanceof import_chunk_jv7av99m.gr) return (0, import_chunk_kx2fp6pc.wn)((0, import_chunk_jv7av99m.d)(r));
  if ((0, import_chunk_jv7av99m.Fe)(r)) return (0, import_chunk_kx2fp6pc.wn)((0, import_chunk_jv7av99m.d)(r));
  return (0, import_chunk_w578pjby.t)(`${e} failed: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "error" }), `${e} failed`;
}
function uTl(e) {
  if (e.type === "connected") return;
  if (e.type === "failed") {
    if (e.error) (0, import_chunk_w578pjby.t)(`mcp_reconnect failed: ${e.error}`, { level: "error" });
    throw new import_chunk_jv7av99m.gr("Connection failed");
  }
  throw new import_chunk_jv7av99m.gr(`Server status: ${e.type}`);
}
function M(e, r, o, s) {
  ne(e, r, o, s.then((i) => ({ subtype: "success", response: i ?? {} })));
}
function ke(e, r) {
  let o = e.request;
  if (o.subtype === "mcp_status" || o.subtype === "read_file" || o.subtype === "get_task_output") return o.liveReply === true;
  return o.subtype === "mcp_authenticate" && o.liveReply === true && r?.callbackExpected === true;
}
function ne(e, r, o, s) {
  s.catch((i) => ({ subtype: "error", error: Se(e.request.subtype, i), ...i instanceof import_chunk_nynf6rf6.rI && { error_code: i.errorCode } })).then((i) => {
    let R = { ...i.subtype === "error" ? (0, import_chunk_hym6yzrf.A4)(e.request_id, i.error, i.error_code) : ke(e, i.response) ? pun(e.request_id, i.response ?? {}) : (0, import_chunk_hym6yzrf.P9)(e.request_id, i.response ?? {}), session_id: o };
    r(R), (0, import_chunk_w578pjby.t)(`[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${i.subtype}`);
  });
}
function be(e, r) {
  if (r && r.ok === false) return { type: "control_response", response: { subtype: "error", request_id: e, error: (0, import_chunk_kx2fp6pc.wn)(r.error) } };
  return { type: "control_response", response: { subtype: "success", request_id: e } };
}
function x(e, r) {
  return (0, import_chunk_hym6yzrf.A4)(e.request_id, r, "unsupported_request");
}
function fTl(e, r) {
  let { transport: o, sessionId: s, outboundOnly: i, getInitializeState: b, claudeCodeVersion: R, getCommands: T, reportsInboundReadReceipts: y, getPendingPrompts: A, onInterrupt: I, onStopTask: Q, onBackgroundTasks: X, onCancelAsyncMessage: j, onDialogKindsDeclared: V, onClientInitialize: J, onSetModel: P, onSetMaxThinkingTokens: K, onSetPermissionMode: w, onApplyFlagSettings: G, onRenameSession: Te, onSetColor: we, onFileSuggestions: ie, onReadFile: ae, onGetWorkspaceDiff: de, onGetContextUsage: le, onMcpAuthenticate: pe, onMcpOauthCallbackUrl: ce, onMcpReconnect: Oe, onMcpSetServers: _e, onForkConversation: ge, hasPendingPrompts: xe, onSideQuestion: fe, cancellableRequests: Z } = r;
  if (!o) {
    (0, import_chunk_w578pjby.t)("[bridge:repl] Cannot respond to control_request: transport not configured");
    return;
  }
  let O = r.writeFrame ?? ((g) => {
    o.write(g);
  }), S;
  if ((0, import_chunk_xfj2cwfv.nn)() && !He.has(e.request.subtype)) {
    (0, import_chunk_w578pjby.t)(`[bridge] refusing ${e.request.subtype}: this process is exiting`), S = { type: "control_response", response: { subtype: "error", request_id: e.request_id, error: ze } };
    let g = { ...S, session_id: s };
    o.write(g);
    return;
  }
  if (i && e.request.subtype !== "initialize") {
    S = { type: "control_response", response: { subtype: "error", request_id: e.request_id, error: je } };
    let g = { ...S, session_id: s };
    o.write(g), (0, import_chunk_w578pjby.t)(`[bridge:repl] Rejected ${e.request.subtype} (outbound-only) request_id=${e.request_id}`);
    return;
  }
  let N = r.answerSharedControlRequest?.(e.request, e.request_id);
  if (N instanceof Promise) {
    ne(e, O, s, N);
    return;
  }
  if (N !== void 0) {
    let f = { ...N.subtype === "error" ? (0, import_chunk_hym6yzrf.A4)(e.request_id, N.error, N.error_code) : ke(e, N.response) ? pun(e.request_id, N.response) : { type: "control_response", response: { subtype: "success", request_id: e.request_id, ...N.response !== void 0 && { response: N.response } } }, session_id: s };
    o.write(f), (0, import_chunk_w578pjby.t)(`[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${N.subtype}`);
    return;
  }
  switch (e.request.subtype) {
    case "initialize": {
      try {
        let D = OLe(e.request.supportedDialogKinds);
        if (D.length > 0) V?.(D);
      } catch (D) {
        (0, import_chunk_w578pjby.t)(`[bridge:repl] dialog-kind capture failed; acking initialize anyway: ${(0, import_chunk_jv7av99m.d)(D)}`);
      }
      let g = [];
      if (!i) try {
        g = T?.() ?? [];
      } catch (D) {
        (0, import_chunk_cqa9hrgx.m)("bridge_initialize_commands", "get_commands_threw"), (0, import_chunk_w578pjby.t)(`[bridge:repl] getCommands failed; acking initialize with commands: []: ${(0, import_chunk_jv7av99m.d)(D)}`);
      }
      let f = A?.() ?? [], h = f.filter((D) => D.request.subtype === "can_use_tool"), k = f.filter((D) => D.request.subtype === "request_user_dialog");
      S = { type: "control_response", response: { subtype: "success", request_id: e.request_id, response: { commands: g, agents: [], output_style: "normal", available_output_styles: ["normal"], models: [], account: {}, pid: process.pid, ...R !== void 0 && { claude_code_version: R }, ...!i && y?.() === true && { inbound_read_receipts: true }, ...b?.() }, pending_permission_requests: h, pending_user_dialog_requests: k } };
      try {
        J?.();
      } catch (D) {
        (0, import_chunk_w578pjby.t)(`[bridge:repl] onClientInitialize failed; acking initialize anyway: ${(0, import_chunk_jv7av99m.d)(D)}`);
      }
      break;
    }
    case "set_model": {
      let g = e.request.model;
      if (g != null && typeof g !== "string") {
        (0, import_chunk_cqa9hrgx.m)("model_switch", "invalid_model_type"), S = { type: "control_response", response: { subtype: "error", request_id: e.request_id, error: "set_model: model must be a string" } };
        break;
      }
      let f = e.request.only_if_model_is_current;
      if (f !== void 0 && f !== false) {
        (0, import_chunk_cqa9hrgx.m)("model_switch", "only_if_model_is_current_unserved"), S = { type: "control_response", response: { subtype: "error", request_id: e.request_id, error: "set_model: Remote Control does not implement only_if_model_is_current. The request changed nothing." } };
        break;
      }
      let h = P?.(e.request.model ?? void 0);
      if (h && "then" in h) {
        ye({ verdict: h, respond: (k) => {
          let Ne = { ...{ type: "control_response", response: { ...k, request_id: e.request_id } }, session_id: s };
          O(Ne), (0, import_chunk_w578pjby.t)(`[bridge:repl] Sent control_response for set_model request_id=${e.request_id} result=${k.subtype}`);
        }, inform: (k) => {
          for (let D of k) O({ type: "system", subtype: "informational", content: D, level: "notice", uuid: (0, import_crypto.randomUUID)(), session_id: s });
        } });
        return;
      }
      if (h && !h.ok) S = { type: "control_response", response: { subtype: "error", request_id: e.request_id, error: (0, import_chunk_kx2fp6pc.wn)(h.error) } };
      else S = { type: "control_response", response: { subtype: "success", request_id: e.request_id } };
      break;
    }
    case "set_max_thinking_tokens": {
      if (!hjn(e.request)) {
        S = { type: "control_response", response: { subtype: "error", request_id: e.request_id, error: mEs } };
        break;
      }
      let g = K?.(e.request.max_thinking_tokens, e.request.thinking_display);
      if (g && "then" in g) {
        let f = e.request_id, h = e.request.subtype;
        g.then((k) => be(f, k), (k) => ({ type: "control_response", response: { subtype: "error", request_id: f, error: Se(h, k) } })).then((k) => {
          let D = { ...k, session_id: s };
          O(D), (0, import_chunk_w578pjby.t)(`[bridge:repl] Sent control_response for set_max_thinking_tokens request_id=${f} result=${k.response.subtype}`);
        });
        return;
      }
      S = be(e.request_id, g);
      break;
    }
    case "set_permission_mode": {
      let g = (0, import_chunk_pbteexar.a_)(e.request.mode), f = g === void 0 ? { ok: false, error: import_chunk_pbteexar.l6e, code: "invalid_mode" } : w?.(g) ?? { ok: false, error: "set_permission_mode is not supported in this context (onSetPermissionMode callback not registered)", code: "unsupported_request" };
      if (f.ok) S = { type: "control_response", response: { subtype: "success", request_id: e.request_id } };
      else S = { type: "control_response", response: { subtype: "error", request_id: e.request_id, error: (0, import_chunk_kx2fp6pc.wn)(f.error), ...f.code !== void 0 && { error_code: f.code } } };
      break;
    }
    case "rename_session": {
      if (typeof e.request.title !== "string") {
        S = { type: "control_response", response: { subtype: "error", request_id: e.request_id, error: "rename_session: title must be a string" } };
        break;
      }
      let f = Te?.(e.request.title);
      if (!f) S = x(e, "rename_session is not supported in this context (onRenameSession callback not registered)");
      else if (f.ok) S = { type: "control_response", response: { subtype: "success", request_id: e.request_id } };
      else S = { type: "control_response", response: { subtype: "error", request_id: e.request_id, error: (0, import_chunk_kx2fp6pc.wn)(f.error) } };
      break;
    }
    case "set_color": {
      let g = we?.(e.request.color);
      if (!g) S = x(e, "set_color is not supported in this context (onSetColor callback not registered)");
      else if (g.ok) S = { type: "control_response", response: { subtype: "success", request_id: e.request_id } };
      else S = { type: "control_response", response: { subtype: "error", request_id: e.request_id, error: (0, import_chunk_kx2fp6pc.wn)(g.error) } };
      break;
    }
    case "file_suggestions": {
      if (!ie) {
        S = x(e, "file_suggestions is not supported in this context (onFileSuggestions callback not registered)");
        break;
      }
      M(e, O, s, ie(e.request.query).then((g) => ({ suggestions: g })));
      return;
    }
    case "read_file": {
      if (!ae) {
        S = x(e, "read_file is not supported in this context (onReadFile callback not registered)");
        break;
      }
      M(e, O, s, ae(e.request.path, e.request.max_bytes, e.request.encoding, e.request.anchor, e.request.offset).then(/* @__PURE__ */ ((g) => (f) => ({ ...f, absPath: g }))(e.request.path)));
      return;
    }
    case "get_workspace_diff": {
      if (!de) {
        S = x(e, "get_workspace_diff is not supported in this context (onGetWorkspaceDiff callback not registered)");
        break;
      }
      let g = new AbortController();
      ne(e, O, s, (0, import_chunk_5appeerh.qt)(de(g.signal), We, ee).then((f) => ({ subtype: "success", response: f }), (f) => {
        if (g.abort(), (0, import_chunk_jv7av99m.d)(f) === ee) return { subtype: "error", error: ee, error_code: "workspace_diff_pending" };
        throw f;
      }));
      return;
    }
    case "get_context_usage": {
      if (!le) {
        S = x(e, "get_context_usage is not supported in this context (onGetContextUsage callback not registered)");
        break;
      }
      M(e, O, s, le({ detail: e.request.detail }).then((g) => ({ ...g, memoryFiles: [], ...fEs(g) })));
      return;
    }
    case "get_usage":
      S = x(e, "get_usage is not supported in this context");
      break;
    case "mcp_status":
      S = { type: "control_response", response: { subtype: "success", request_id: e.request_id, response: { mcpServers: [] } } };
      break;
    case "mcp_authenticate":
    case "mcp_oauth_callback_url":
    case "mcp_reconnect": {
      let g = e.request, { subtype: f, serverName: h } = g, k = g.subtype === "mcp_authenticate" ? pe && ((D) => pe(D, g.redirectUri, g.redirectUriOnly)) : g.subtype === "mcp_oauth_callback_url" ? ce && ((D) => ce(D, g.callbackUrl)) : Oe;
      if (!k) {
        S = x(e, `${f} is not supported in this context (callback not registered)`);
        break;
      }
      M(e, O, s, k(h));
      return;
    }
    case "interrupt":
      I?.({ sparesBackgroundTasks: e.request.spare_background_tasks === true, ...((0, import_chunk_hym6yzrf.Nwe)(e.request) || (0, import_chunk_hym6yzrf.CGt)(e.request_id, e.request) || (0, import_chunk_hym6yzrf.xun)(e.request_id)) && { isNoStop: true } }), S = { type: "control_response", response: { subtype: "success", request_id: e.request_id } };
      break;
    case "apply_flag_settings": {
      let g = Ze(e.request.settings), f;
      if (!g.ok) f = g;
      else if (!G) {
        (0, import_chunk_cqa9hrgx.m)("bridge_flag_settings", "not_registered"), S = x(e, "apply_flag_settings is not supported in this context (onApplyFlagSettings callback not registered)");
        break;
      } else f = G(g.settings, e.request_id);
      if (f.ok) (0, import_chunk_cqa9hrgx.u)("bridge_flag_settings"), S = { type: "control_response", response: { subtype: "success", request_id: e.request_id } };
      else S = { type: "control_response", response: { subtype: "error", request_id: e.request_id, error: f.error } };
      break;
    }
    case "mcp_set_servers": {
      let g = e.request.servers, f = "hint" in e.request ? e.request.hint : void 0, h;
      if (g === void 0 && typeof f === "string") (0, import_chunk_w578pjby.t)("[bridge:repl] mcp_set_servers carried an advisory hint and no servers; acknowledged, nothing to apply"), h = { ok: true, added: [], removed: [], errors: {}, unknownServerCount: 0 };
      else if (!Ee(g)) h = { ok: false, error: "mcp_set_servers: servers must be an object" };
      else if (!_e) {
        S = x(e, "mcp_set_servers is not supported in this context (onMcpSetServers callback not registered)");
        break;
      } else try {
        h = _e(g);
      } catch (k) {
        (0, import_chunk_w578pjby.t)(`[bridge:repl] mcp_set_servers handler threw: ${(0, import_chunk_jv7av99m.d)(k)}`, { level: "error" }), h = { ok: false, error: "mcp_set_servers failed to apply" };
      }
      S = h.ok ? { type: "control_response", response: { subtype: "success", request_id: e.request_id, response: { added: h.added, removed: h.removed, errors: Xe(h.errors, h.unknownServerCount) } } } : { type: "control_response", response: { subtype: "error", request_id: e.request_id, error: (0, import_chunk_kx2fp6pc.wn)(h.error) } };
      break;
    }
    case "stop_task": {
      let g = e.request.task_id;
      if (typeof g !== "string") {
        (0, import_chunk_cqa9hrgx.m)("task_stop_user", "invalid_task_id"), S = { type: "control_response", response: { subtype: "error", request_id: e.request_id, error: "stop_task: task_id must be a string" } };
        break;
      }
      let f = g;
      if (!Q) {
        (0, import_chunk_cqa9hrgx.m)("task_stop_user", "not_supported"), S = x(e, "stop_task is not supported in this context (callback not registered)");
        break;
      }
      M(e, O, s, Q(f));
      return;
    }
    case "background_tasks": {
      let g = cEs(e.request.tool_use_id);
      if (!g.valid) {
        (0, import_chunk_cqa9hrgx.m)("task_local_shell_background_all", "invalid_tool_use_id"), S = { type: "control_response", response: { subtype: "error", request_id: e.request_id, error: uEs } };
        break;
      }
      let { toolUseId: f } = g;
      if (!X) {
        (0, import_chunk_cqa9hrgx.m)("task_local_shell_background_all", "not_supported"), S = x(e, "background_tasks is not supported in this context (callback not registered)");
        break;
      }
      if ((0, import_chunk_jg3mepas.th)()) {
        (0, import_chunk_cqa9hrgx.m)("task_local_shell_background_all", "disabled"), S = { type: "control_response", response: { subtype: "error", request_id: e.request_id, error: mun } };
        break;
      }
      M(e, O, s, Promise.resolve().then(() => X(f)).then((h) => f === void 0 ? {} : { backgrounded: h }));
      return;
    }
    case "cancel_async_message": {
      let g = e.request.message_uuid;
      if (typeof g !== "string") {
        (0, import_chunk_cqa9hrgx.m)("bridge_cancel_queued_message", "invalid_message_uuid"), S = { type: "control_response", response: { subtype: "error", request_id: e.request_id, error: "cancel_async_message: message_uuid must be a string" } };
        break;
      }
      if (!j) {
        (0, import_chunk_cqa9hrgx.m)("bridge_cancel_queued_message", "not_supported"), S = x(e, "cancel_async_message is not supported in this context (callback not registered)");
        break;
      }
      M(e, O, s, Promise.resolve().then(() => j(g)).then((f) => {
        if (f) (0, import_chunk_cqa9hrgx.u)("bridge_cancel_queued_message");
        else (0, import_chunk_cqa9hrgx.l)("bridge_cancel_queued_message", "not_queued");
        return f === true ? { cancelled: f, message_uuid: g } : { cancelled: f === "read" };
      }, (f) => {
        throw (0, import_chunk_cqa9hrgx.m)("bridge_cancel_queued_message", "failed"), f;
      }));
      return;
    }
    case "side_question": {
      let g = Ye().safeParse(e.request);
      if (!g.success) {
        (0, import_chunk_cqa9hrgx.m)("bridge_side_question", "invalid_request"), S = { type: "control_response", response: { subtype: "error", request_id: e.request_id, error: "side_question: question must be a string and history an array of {question, response} strings" } };
        break;
      }
      if (!fe) {
        (0, import_chunk_cqa9hrgx.m)("bridge_side_question", "not_registered"), S = x(e, "side_question is not supported in this context (onSideQuestion callback not registered)");
        break;
      }
      if (Z?.has(e.request_id)) {
        (0, import_chunk_w578pjby.t)(`[bridge:repl] side_question request_id=${e.request_id} already in flight \u2014 ignoring duplicate delivery`);
        return;
      }
      let f = new AbortController();
      Z?.set(e.request_id, f);
      let h = Promise.resolve().then(() => fe(g.data, { signal: f.signal, onProgress: (k) => {
        O({ type: "system", subtype: "control_request_progress", request_id: e.request_id, ...k, uuid: (0, import_crypto.randomUUID)(), session_id: s });
      } }));
      M(e, O, s, (0, import_chunk_5appeerh.qt)(h, r.sideQuestionDeadlineMs ?? mGi, gjn).then((k) => {
        if (k.response === null) (0, import_chunk_cqa9hrgx.l)("bridge_side_question", "no_response");
        else if (k.synthetic !== false) (0, import_chunk_cqa9hrgx.l)("bridge_side_question", "synthetic");
        else (0, import_chunk_cqa9hrgx.u)("bridge_side_question");
        return hGi(k);
      }, (k) => {
        if ((0, import_chunk_jv7av99m.d)(k) === gjn) throw f.abort(), (0, import_chunk_cqa9hrgx.m)("bridge_side_question", "deadline"), new import_chunk_jv7av99m.gr(gjn);
        if ((0, import_chunk_jv7av99m.Fe)(k)) (0, import_chunk_cqa9hrgx.l)("bridge_side_question", "cancelled");
        else (0, import_chunk_cqa9hrgx.m)("bridge_side_question", "failed");
        throw k;
      }).finally(() => {
        if (Z?.get(e.request_id) === f) Z.delete(e.request_id);
      }));
      return;
    }
    case "fork_conversation": {
      if (ge) {
        M(e, O, s, ge(e.request, { promptPending: xe?.() ?? false, requestId: e.request_id }));
        return;
      }
      let g = { forked: false, error: "unsupported", reason: "requires_remote_control_server" };
      S = { type: "control_response", response: { subtype: "success", request_id: e.request_id, response: g } };
      break;
    }
    default:
      S = x(e, `REPL bridge does not handle control_request subtype: ${(0, import_chunk_kx2fp6pc.wn)(String(e.request.subtype))}`);
  }
  let qe = { ...S, session_id: s };
  o.write(qe), (0, import_chunk_w578pjby.t)(`[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${S.response.subtype}`);
}
function Ee(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var Qe = "(servers not adopted)";
function Xe(e, r) {
  if (r <= 0) return e;
  return { ...e, [Qe]: `${r} server(s) not adopted: a Remote Control bridge only honors the injected Project servers` };
}
function Ze(e) {
  if (!Ee(e)) return (0, import_chunk_cqa9hrgx.m)("bridge_flag_settings", "invalid_shape"), { ok: false, error: "apply_flag_settings: settings must be an object" };
  let r = Object.keys(e).filter((s) => !Ke.has(s));
  if (r.length > 0) {
    (0, import_chunk_cqa9hrgx.m)("bridge_flag_settings", "unsupported_key");
    let s = r.slice(0, Ve).map((b) => (0, import_chunk_tp3c5q2s.Ft)(b, Be)), i = r.length > s.length ? ` (+${r.length - s.length} more)` : "";
    return { ok: false, error: `apply_flag_settings: ${s.join(", ")}${i} cannot be changed over Remote Control (only effortLevel and ultracode can)` };
  }
  let o = {};
  if ("effortLevel" in e) {
    let s = e.effortLevel;
    if (s !== null && typeof s !== "string") return (0, import_chunk_cqa9hrgx.m)("bridge_flag_settings", "invalid_type"), { ok: false, error: "apply_flag_settings: effortLevel must be a string or null" };
    o.effortLevel = s;
  }
  if ("ultracode" in e) {
    let s = e.ultracode;
    if (typeof s !== "boolean") return (0, import_chunk_cqa9hrgx.m)("bridge_flag_settings", "invalid_type"), { ok: false, error: "apply_flag_settings: ultracode must be a boolean" };
    o.ultracode = s;
  }
  if (!("effortLevel" in o) && !("ultracode" in o)) return (0, import_chunk_cqa9hrgx.m)("bridge_flag_settings", "nothing_to_apply"), { ok: false, error: "apply_flag_settings: nothing to apply \u2014 only effortLevel and ultracode can be changed over Remote Control" };
  return { ok: true, settings: o };
}
function Je(e) {
  return !(0, import_chunk_xrav2tvh.WT)(e.terminal_reason);
}
function bCr({ userMessageUuid: e, outcome: r, aborted: o }) {
  let s = r?.terminal_reason, i = (0, import_chunk_xrav2tvh.WT)(s) ? s : o?.guess, b = i === void 0 ? void 0 : { userMessageUuid: e, terminalReason: i, ...r?.stopped_by_permission_check && { stoppedByPermissionCheck: true } };
  if (o === void 0) return r === void 0 || Je(r) ? { userMessageUuid: e, outcome: r } : b;
  if (o.sendRunsAgain) return;
  switch (o.by) {
    case "stop":
      return b;
    case "send-now":
      return { userMessageUuid: e, sendNowCut: true };
    case "other":
      return;
  }
}
function BEo(e, r, o) {
  let s = r?.outcome, i = { type: "result", ...r?.userMessageUuid && { user_message_uuid: r.userMessageUuid }, ...o !== void 0 && { queued_turn_count: o }, duration_ms: 0, duration_api_ms: 0, total_cost_usd: 0, usage: { ...import_chunk_hym6yzrf.Eg }, modelUsage: {}, permission_denials: [], session_id: e, uuid: (0, import_crypto.randomUUID)() };
  if (s === void 0) return { ...i, subtype: "success", is_error: false, num_turns: 0, result: "", stop_reason: null, ...r?.terminalReason !== void 0 && { terminal_reason: r.terminalReason }, ...r?.stoppedByPermissionCheck && { stopped_by_permission_check: true } };
  let b = { is_error: s.is_error, num_turns: s.num_turns, stop_reason: s.stop_reason, ...s.terminal_reason !== void 0 && { terminal_reason: s.terminal_reason } };
  if (s.subtype === "success") return { ...i, ...b, subtype: "success", result: s.is_error && s.structured_output === void 0 ? s.result ?? "" : "", ...s.api_error_status != null && { api_error_status: s.api_error_status }, ...s.api_error_code !== void 0 && { api_error_code: s.api_error_code }, ...s.api_error_type !== void 0 && { api_error_type: s.api_error_type }, ...s.api_error_origin !== void 0 && { api_error_origin: s.api_error_origin }, ...s.api_error !== void 0 && { api_error: s.api_error } };
  return { ...i, ...b, subtype: s.subtype, errors: [] };
}
function gGi(e, r) {
  return { type: "system", subtype: "worker_shutting_down", reason: r, session_id: e, uuid: (0, import_crypto.randomUUID)() };
}
var et = "PushNotification";
function pTl(e, r) {
  return { type: "assistant", message: { diagnostics: null, id: (0, import_crypto.randomUUID)(), container: null, model: import_chunk_bp9b0hd8.xs, role: "assistant", stop_details: null, stop_reason: "tool_use", stop_sequence: null, type: "message", usage: { ...import_chunk_hym6yzrf.Eg }, content: [{ type: "tool_use", id: (0, import_crypto.randomUUID)(), name: et, input: { message: e, status: "proactive" } }], context_management: null }, parent_tool_use_id: null, is_meta: true, session_id: r, uuid: (0, import_crypto.randomUUID)() };
}
function _Es(e, r) {
  return { type: "assistant", message: { diagnostics: null, id: (0, import_crypto.randomUUID)(), container: null, model: import_chunk_bp9b0hd8.xs, role: "assistant", stop_details: null, stop_reason: "stop_sequence", stop_sequence: "", type: "message", usage: { ...import_chunk_hym6yzrf.Eg }, content: [{ type: "text", text: e, citations: null }], context_management: null }, parent_tool_use_id: null, session_id: r, uuid: (0, import_crypto.randomUUID)(), timestamp: (/* @__PURE__ */ new Date()).toISOString() };
}
class DZ {
  capacity;
  ring;
  set = /* @__PURE__ */ new Set();
  writeIdx = 0;
  constructor(e) {
    this.capacity = e, this.ring = Array(e);
  }
  add(e) {
    if (this.set.has(e)) return;
    let r = this.ring[this.writeIdx];
    if (r !== void 0) this.set.delete(r);
    this.ring[this.writeIdx] = e, this.set.add(e), this.writeIdx = (this.writeIdx + 1) % this.capacity;
  }
  has(e) {
    return this.set.has(e);
  }
  clear() {
    this.set.clear(), this.ring.fill(void 0), this.writeIdx = 0;
  }
}
var tt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ notification_id: (0, import_chunk_adx6804h.n)().min(1), origin: (0, import_chunk_adx6804h.v)(import_chunk_865at33z.tO), content: (0, import_chunk_adx6804h.n)() }));
function nt(e) {
  let r = tt().safeParse(e);
  if (!r.success) return;
  return { type: "user", uuid: r.data.notification_id, message: { role: "user", content: r.data.content }, parent_tool_use_id: null, isSynthetic: true, inbound_origin: import_chunk_865at33z.tO };
}
function rt(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "queued_notification";
}
var ot = ["UNSPECIFIED", "ABSENT", "VERIFIED", "VERIFIED_BY_GATE", "INVALID", "UNCHECKED", "VERIFIED_KEYLESS_DEVICE", "SERVICE_VOUCHED", "SERVER_AUTHORED", "SERVER_REPLAYED", "TRANSITIVELY_VOUCHED"], he = "DEVICE_ATTESTATION_STATUS_", st = ["UNSPECIFIED", "ABSENT", "VERIFIED", "VERIFIED_BY_GATE", "INVALID", "UNCHECKED"];
function Mwe(e) {
  if (e === void 0 || e === null) return "UNSPECIFIED";
  if (typeof e === "number") return st[e] ?? "UNSPECIFIED";
  if (typeof e !== "string") return "UNSPECIFIED";
  if (e === "server_authored") return "SERVER_AUTHORED";
  if (e === "server_replayed") return "SERVER_REPLAYED";
  if (e === "transitively_vouched") return "TRANSITIVELY_VOUCHED";
  let r = e.startsWith(he) ? e.slice(he.length) : e;
  return ot.find((o) => o === r) ?? "UNSPECIFIED";
}
var z = ["VERIFIED", "VERIFIED_KEYLESS_DEVICE", "VERIFIED_BY_GATE"];
function mTl(e, r) {
  return z.indexOf(e) <= z.indexOf(r) ? e : r;
}
function yEs(e, r) {
  if (e === "SERVICE_VOUCHED") return true;
  let o = z.findIndex((s) => s === e);
  return o !== -1 && o <= z.indexOf(r);
}
var SEs = { enforce: false, acceptLevel: "VERIFIED", acceptStatuses: /* @__PURE__ */ new Set() }, it = ["UNSPECIFIED", "ABSENT", "INVALID", "UNCHECKED"], at = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ accept_level: (0, import_chunk_adx6804h.F)(z).default("VERIFIED"), accept_statuses: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.F)(it)).default([]) }));
function bEs(e) {
  let r = (0, import_chunk_t39bs2jr.jo)().attestation, o = at().safeParse(e);
  if (!o.success && !r.malformedConfigReported) {
    r.malformedConfigReported = true;
    try {
      (0, import_chunk_w578pjby.t)(`[bridge:attestation] malformed enforce config \u2014 failing closed to accept_level=VERIFIED with no accept_statuses: ${o.error.message}`, { level: "error" }), (0, import_chunk_cqa9hrgx.l)("bridge_event_attestation", "malformed_config");
    } catch (s) {
      (0, import_chunk_w578pjby.t)(`[bridge:attestation] malformed-config report threw: ${(0, import_chunk_jv7av99m.d)(s)}`, { level: "error" });
    }
  }
  return { enforce: true, acceptLevel: o.success ? o.data.accept_level : "VERIFIED", acceptStatuses: new Set(o.success ? o.data.accept_statuses : []) };
}
function hTl(e) {
  try {
    let r = (0, import_chunk_t39bs2jr.jo)().attestation.reportedCloudWorkerCodes;
    if (r.has(e)) return;
    r.add(e), (0, import_chunk_w578pjby.t)(`${q(true)} the attestation policy header could not be read whole (${e})`, { level: "error" }), (0, import_chunk_cqa9hrgx.l)("ccr_worker_attestation_policy", e);
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`${q(true)} policy-fault report threw: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "error" });
  }
}
function hun(e) {
  (0, import_chunk_t39bs2jr.jo)().attestation.filterPolicy = e;
}
function wCr(e) {
  (0, import_chunk_t39bs2jr.jo)().attestation.dropNotifier = e;
}
function gTl(e) {
  let r = (0, import_chunk_t39bs2jr.jo)().attestation;
  if (r.dropNotifier === e) r.dropNotifier = void 0;
}
function WEo(e) {
  (0, import_chunk_t39bs2jr.jo)().attestation.senderDropWriter = e;
}
function jEo(e) {
  let r = (0, import_chunk_t39bs2jr.jo)().attestation;
  if (r.senderDropWriter === e) r.senderDropWriter = void 0;
}
var _jn = "[remote-io] warning: ";
function wEs({ status: e, payloadType: r, subtype: o, isCloud: s }) {
  let i = s ? "The app that sent it doesn't sign its activity. Use an app that does." : "The app that sent it doesn't sign its activity. Use the terminal or an app that does.";
  return { what: r === "control_response" ? "permission response" : r === "control_request" ? `remote command (${o})` : "message", hint: s && e === "ABSENT" ? "It may be an earlier one, delivered again. If you sent it and Claude has not already acted on it, try again." : s && e === "VERIFIED_BY_GATE" ? "If you sent it, send it again from another device that is already verified. If the app asks you to sign in again to verify your device, do that and then send it again." : e === "ABSENT" || e === "INVALID" ? "Re-pair the sending device in Trusted Devices." : e === "VERIFIED_BY_GATE" || e === "VERIFIED_KEYLESS_DEVICE" ? i : e === "TRANSITIVELY_VOUCHED" ? "It came from an automated cloud session, not from a person." : void 0 };
}
function yjn(e) {
  let r = e.isCloud ? "This session" : "Remote Control";
  if (e.windowCapped) return `${r} is rejecting a burst of unsigned remote activity; further warnings for this burst are suppressed.`;
  let { what: o, hint: s } = wEs(e);
  return `${r} ignored a ${o} that arrived without a valid device signature (attestation: ${e.status}).${s ? ` ${s}` : ""}`;
}
function hGt(e) {
  let { what: r, hint: o } = wEs(e);
  return `This ${r} arrived without a valid device signature (attestation: ${e.status}) and was ignored.${o ? ` ${o}` : ""}`;
}
function dt(e) {
  if (e.payloadType === "control_request") return;
  return _Es(e.windowCapped ? yjn(e) : hGt(e), (0, import_chunk_f9x2f6cx.W)());
}
var ut = /* @__PURE__ */ new Set(["set_model", "set_permission_mode", "interrupt", "stop_task", "background_tasks", "cancel_async_message", "update_queued_message", "set_max_thinking_tokens", "rename_session", "set_color", "mcp_authenticate", "mcp_oauth_callback_url", "mcp_reconnect", "apply_flag_settings", "side_question", "reload_plugins"]);
function ylt(e) {
  let r = (0, import_chunk_mx7wawy7.wGi)(e);
  return typeof r === "string" ? r : void 0;
}
function De(e) {
  let r = se(e);
  if (r === void 0 || !ut.has(r)) return;
  return { subtype: r, requestId: e.payload ? ylt(e.payload) : void 0 };
}
function se(e) {
  let r = e.payload?.request, o = typeof r === "object" && r !== null && "subtype" in r ? r.subtype : void 0;
  return typeof o === "string" ? o : void 0;
}
var lt = /* @__PURE__ */ new Set(["interrupt", "end_session"]), pt = /^b[0-9a-z]{8}$/;
function ct(e) {
  return typeof e === "object" && e !== null && Object.keys(e).sort().join() === "subtype,task_id" && "subtype" in e && e.subtype === "stop_task" && "task_id" in e && typeof e.task_id === "string" && pt.test(e.task_id);
}
var _t = 128;
function _Gi(e) {
  let r = se(e), o = e.payload ? ylt(e.payload) : void 0;
  return Mwe(e.device_attestation_status) === "SERVICE_VOUCHED" && e.payload?.type === "control_request" && (r === "set_model" || r === "apply_flag_settings") && typeof o === "string" && o.length <= _t ? o : void 0;
}
function gt(e, r) {
  if (typeof e !== "object" || e === null) return false;
  let o = "subtype" in e ? e.subtype : void 0, s = Object.keys(e).sort().join();
  if (o === "set_model") {
    let R = "model" in e ? e.model : void 0;
    return s === "model,subtype" && typeof R === "string" && r(R);
  }
  let i = "settings" in e ? e.settings : void 0;
  if (o !== "apply_flag_settings" || s !== "settings,subtype" || typeof i !== "object" || i === null) return false;
  let b = Object.entries(i);
  return b.every(([R, T]) => R === "effortLevel" && import_chunk_8hfdvrr1.ea.some((y) => y === T) || R === "ultracode" && T === false) && b.some(([R]) => R === "effortLevel");
}
var ft = 2e3, H = 200, Ae = 128, yt = 256;
function U(e, r, o) {
  if (e.delete(o), e.add(o), e.size > r) for (let s of e) {
    e.delete(s);
    break;
  }
}
function Sjn(e) {
  let r = (0, import_chunk_t39bs2jr.jo)().attestation;
  return e.length > Ae || r.knownInboundRequestIds.has(e) || r.knownOutboundRequestIds.has(e) || r.elicitationOutboundRequestIds.has(e) || r.hostAskOutboundRequestIds.has(e) || r.filePartOutboundRequestIds.has(e);
}
function _Tl(e) {
  let r = (0, import_chunk_t39bs2jr.jo)().attestation;
  return r.knownOutboundRequestIds.has(e) || r.elicitationOutboundRequestIds.has(e);
}
function GEo(e, { automated: r }) {
  let o = (0, import_chunk_t39bs2jr.jo)().attestation;
  if (U(o.knownOutboundRequestIds, H, e), r) U(o.automatedOutboundRequestIds, H, e);
}
var mt = 512;
function yGi(e) {
  U((0, import_chunk_t39bs2jr.jo)().attestation.deviceOutboundRequestIds, mt, e);
}
function yTl(e) {
  U((0, import_chunk_t39bs2jr.jo)().attestation.elicitationOutboundRequestIds, H, e);
}
function STl(e) {
  U((0, import_chunk_t39bs2jr.jo)().attestation.hostAskOutboundRequestIds, H, e);
}
function bTl(e) {
  U((0, import_chunk_t39bs2jr.jo)().attestation.filePartOutboundRequestIds, H, e);
}
function bt(e) {
  let r = e.payload?.response;
  if (typeof r !== "object" || r === null) return false;
  let o = ylt(r), s = (0, import_chunk_t39bs2jr.jo)().attestation;
  return o !== void 0 && (s.automatedOutboundRequestIds.has(o) || s.deviceOutboundRequestIds.has(o) || s.hostAskOutboundRequestIds.has(o) || s.filePartOutboundRequestIds.has(o));
}
function St(e) {
  return e.payload?.inbound_origin === "tool_host_ended_reminder";
}
var kt = 200;
function zEo(e) {
  U((0, import_chunk_t39bs2jr.jo)().attestation.resolvedPromptRequestIds, kt, e);
}
function Et(e) {
  let r = e.payload?.response;
  if (typeof r !== "object" || r === null) return false;
  let o = ylt(r);
  return o !== void 0 && (0, import_chunk_t39bs2jr.jo)().attestation.resolvedPromptRequestIds.has(o);
}
var ht = 6e4, ve = 10;
function Re(e, r) {
  let o = (0, import_chunk_t39bs2jr.jo)().attestation;
  if (o.dropNotifier === void 0 && o.senderDropWriter === void 0) return;
  if (o.recentDropEventIds.has(r)) return;
  U(o.recentDropEventIds, yt, r);
  let s = e.payloadType === "control_request" ? o.commandDropNoticeWindow : o.messageDropNoticeWindow, i = Date.now();
  if (i - s.start >= ht) s.start = i, s.count = 0;
  if (s.count++, s.count <= ve) Ie(e);
  else if (s.count === ve + 1) Ie({ status: e.status, payloadType: e.payloadType, ...e.subtype !== void 0 && { subtype: e.subtype }, windowCapped: true, ...e.isCloud && { isCloud: true } });
}
function Ie(e) {
  let r = (0, import_chunk_t39bs2jr.jo)().attestation;
  if (r.dropNotifier !== void 0) try {
    r.dropNotifier(e);
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`${q(e.isCloud === true)} drop notifier threw: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" });
  }
  if (r.senderDropWriter !== void 0) try {
    let o = dt(e);
    if (o) r.senderDropWriter(o);
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`${q(e.isCloud === true)} drop sender writer threw: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" });
  }
}
function kEs(e) {
  let o = (typeof e.payload?.type === "string" ? e.payload.type : e.event_type) === "control_request" && e.payload ? ylt(e.payload) : void 0;
  if (o !== void 0 && o.length <= Ae) U((0, import_chunk_t39bs2jr.jo)().attestation.knownInboundRequestIds, ft, o);
}
function oe(e, r, o) {
  if (r !== "control_request") return;
  if (kEs(e), De(e) !== void 0) (0, import_chunk_cqa9hrgx.u)(o ? "ccr_worker_control_request_attestation" : "bridge_control_request_attestation");
}
var vt = /* @__PURE__ */ new Set(["bash_command", "update_environment_variables", "assistant", "system"]);
function Rt(e, r, o, s) {
  try {
    let i = (0, import_chunk_t39bs2jr.jo)().attestation, b = s ? i.reportedCloudWorkerCodes : i.reportedStrayDropCodes, R = o === "control_request" ? "control_request_other" : vt.has(o) ? o : "other_payload_type", T = `${r.toLowerCase()}_${R}`;
    if (b.has(T)) return;
    b.add(T), (0, import_chunk_w578pjby.t)(`${q(s)} DROPPING unverified ${o} event_id=${e.event_id} status=${r} (stray payload class ${T}; counted once per process)`, { level: "warn" }), (0, import_chunk_cqa9hrgx.m)(s ? "ccr_worker_stray_event_attestation" : "bridge_stray_event_attestation", T);
  } catch (i) {
    (0, import_chunk_w578pjby.t)(`${q(s)} stray-drop report threw: ${(0, import_chunk_jv7av99m.d)(i)}`, { level: "error" });
  }
}
function q(e) {
  return e ? "[ccr-worker:attestation]" : "[bridge:attestation]";
}
function gun(e, r, { isCloudWorker: o, vouchWithheld: s = false }) {
  let i = !o && (e === "SERVER_AUTHORED" || e === "SERVER_REPLAYED") ? "UNSPECIFIED" : e, b = i === "TRANSITIVELY_VOUCHED" && yEs("VERIFIED_KEYLESS_DEVICE", r.acceptLevel) && !s;
  return { status: i, meetsLevel: b || yEs(i, r.acceptLevel), configException: r.acceptStatuses.has(i) || i === "TRANSITIVELY_VOUCHED" && r.acceptStatuses.has("UNSPECIFIED") };
}
function Ce(e, r, o, s, i) {
  let b = typeof e.payload?.type === "string" ? e.payload.type : e.event_type, R = b === "user" || b === "control_response", T = Mwe(e.device_attestation_status), y = T === "TRANSITIVELY_VOUCHED" && b === "user" && !(typeof e.payload.inbound_origin === "string" && e.payload.inbound_origin !== ""), A = o && T === "TRANSITIVELY_VOUCHED" && (b !== "user" && b !== "queued_notification" || e.payload?.priority === "now" || !s), { status: I, meetsLevel: Q, configException: X } = gun(T, r, { isCloudWorker: o, vouchWithheld: y || A }), j = `${I.toLowerCase()}_${b}${y ? "_unstamped" : ""}`, V = e.payload?.request, J = o && I === "SERVICE_VOUCHED" && b === "control_request" && (!lt.has(se(e) ?? "") && !ct(V) && (i === void 0 || _Gi(e) === void 0 || !gt(V, i)) || typeof V === "object" && V !== null && (0, import_chunk_hym6yzrf.Nwe)(V));
  if (Q && !J) {
    if (R) (0, import_chunk_cqa9hrgx.u)(o ? "ccr_worker_event_attestation" : "bridge_event_attestation");
    return oe(e, b, o), false;
  }
  if (!r.enforce) {
    if (oe(e, b, o), I === "UNSPECIFIED") return false;
    if (R) (0, import_chunk_w578pjby.t)(`${q(o)} accepting unverified ${b} event_id=${e.event_id} status=${I}`, { level: "info" }), (0, import_chunk_cqa9hrgx.l)(o ? "ccr_worker_event_attestation" : "bridge_event_attestation", j);
    return false;
  }
  let P = X, K = false;
  if (R) {
    let w = j;
    if ((0, import_chunk_w578pjby.t)(`${q(o)} ${P ? "accepting (config exception)" : "DROPPING"} unverified ${b} event_id=${e.event_id} status=${I}`, { level: P ? "info" : "warn" }), P) (0, import_chunk_cqa9hrgx.l)(o ? "ccr_worker_event_attestation" : "bridge_event_attestation", w);
    else if (b === "control_response" && bt(e)) K = true, (0, import_chunk_w578pjby.t)(`${q(o)} dropped ${b} event_id=${e.event_id} status=${I} answers an automated outbound request; notice suppressed`, { level: "info" }), (0, import_chunk_cqa9hrgx.m)(o ? "ccr_worker_event_attestation" : "bridge_event_attestation", `${w}_automated_reply`);
    else if (b === "control_response" && Et(e)) K = true, (0, import_chunk_w578pjby.t)(`${q(o)} dropped ${b} event_id=${e.event_id} status=${I} is a duplicate answer to an already-resolved prompt; notice suppressed`, { level: "info" }), (0, import_chunk_cqa9hrgx.m)(o ? "ccr_worker_event_attestation" : "bridge_event_attestation", `${w}_resolved_duplicate`);
    else if (o && b === "user" && St(e)) K = true, (0, import_chunk_w578pjby.t)(`${q(o)} dropped ${b} event_id=${e.event_id} status=${I} is the service's own linked-computer line; notice suppressed`, { level: "info" }), (0, import_chunk_cqa9hrgx.m)("ccr_worker_event_attestation", `${w}_service_line`);
    else K = true, (0, import_chunk_cqa9hrgx.m)(o ? "ccr_worker_event_attestation" : "bridge_event_attestation", w), Re({ status: I, payloadType: b, ...o && { isCloud: true } }, e.event_id);
  } else if (b === "control_request" && !P) {
    let w = De(e);
    if (w) {
      K = true;
      let G = w.requestId !== void 0 && Sjn(w.requestId) ? void 0 : w.requestId;
      (0, import_chunk_w578pjby.t)(`${q(o)} DROPPING unverified control_request subtype=${w.subtype} event_id=${e.event_id} status=${I}${G === void 0 && w.requestId !== void 0 ? " (forged-id refusal suppressed, or the id is too long)" : ""}`, { level: "warn" }), (0, import_chunk_cqa9hrgx.m)(o ? "ccr_worker_control_request_attestation" : "bridge_control_request_attestation", `${I.toLowerCase()}_${w.subtype}`), Re({ status: I, payloadType: b, subtype: w.subtype, requestId: G, ...o && { isCloud: true } }, e.event_id);
    }
  }
  if (!P && !K) Rt(e, I, b, o);
  if (P) oe(e, b, o);
  return !P;
}
function VEo(e) {
  return Ce(e, (0, import_chunk_t39bs2jr.jo)().attestation.filterPolicy?.() ?? SEs, false, true);
}
function wTl(e, r, o = false, s) {
  if (e.source !== "client") {
    try {
      let i = (0, import_chunk_t39bs2jr.jo)().attestation.reportedCloudWorkerCodes;
      if (!i.has("source_not_client")) i.add("source_not_client"), (0, import_chunk_w578pjby.t)(`${q(true)} ${r.enforce ? "DROPPING" : "would drop"} event_id=${e.event_id}: not marked client-written (counted once per process)`, { level: "warn" }), (0, import_chunk_cqa9hrgx.m)("ccr_worker_stray_event_attestation", "source_not_client");
    } catch (i) {
      (0, import_chunk_w578pjby.t)(`${q(true)} source-drop report threw: ${(0, import_chunk_jv7av99m.d)(i)}`, { level: "error" });
    }
    if (!r.enforce) kEs(e);
    return r.enforce;
  }
  return Ce(e, r, true, o, s);
}
