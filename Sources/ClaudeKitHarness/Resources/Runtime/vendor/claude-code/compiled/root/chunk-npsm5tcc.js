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
var chunk_npsm5tcc_exports = {};
__export(chunk_npsm5tcc_exports, {
  $Ut: () => $Ut,
  BUt: () => BUt,
  FUt: () => FUt,
  Jpo: () => Jpo,
  Ksn: () => Ksn,
  Qpo: () => Qpo,
  Tps: () => Tps,
  UUt: () => UUt,
  WUt: () => WUt,
  Xpo: () => Xpo,
  Zpo: () => Zpo,
  adl: () => adl,
  cOi: () => cOi,
  cdl: () => cdl,
  cyr: () => cyr,
  dOi: () => dOi,
  ddl: () => ddl,
  dyr: () => dyr,
  fOi: () => fOi,
  fyr: () => fyr,
  hOi: () => hOi,
  hbe: () => hbe,
  iFn: () => iFn,
  idl: () => idl,
  lOi: () => lOi,
  ldl: () => ldl,
  mOi: () => mOi,
  oFn: () => oFn,
  pOi: () => pOi,
  pyr: () => pyr,
  rFn: () => rFn,
  sFn: () => sFn,
  uOi: () => uOi,
  uje: () => uje,
  uyr: () => uyr,
  vG: () => vG,
  xAe: () => xAe
});
module.exports = __toCommonJS(chunk_npsm5tcc_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_a6xqvbh2 = require("/$bunfs/root/chunk-a6xqvbh2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_8hfdvrr1 = require("/$bunfs/root/chunk-8hfdvrr1.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_1ek4hhs6 = require("/$bunfs/root/chunk-1ek4hhs6.js");
var import_chunk_kzzkh06w = require("/$bunfs/root/chunk-kzzkh06w.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var j = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("text"), text: (0, import_chunk_adx6804h.n)() }), (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.n)() })]))]))), h = 1e3;
function Tps(e) {
  if (e == null) return { texts: [] };
  if (Array.isArray(e)) {
    let s = e.length;
    for (let d = 0; d < e.length && s <= h; d++) {
      let g = e[d];
      if (Array.isArray(g)) s += g.length;
    }
    if (s > h) return { texts: [], problem: "too_many_items" };
  }
  let r = j().safeParse(e);
  if (!r.success) return { texts: [], problem: "malformed" };
  let i = false, o = r.data.map((s) => {
    if (typeof s === "string") return s;
    let d = [];
    for (let g of s) if (g.type === "text" && "text" in g && typeof g.text === "string") d.push(g.text);
    else i = true;
    return d.join(`
`);
  }).filter((s) => s.trim() !== "");
  return i ? { texts: o, problem: "non_text_ignored" } : { texts: o };
}
var K = 100;
function idl(e) {
  if (e == null) return { texts: [] };
  if (!Array.isArray(e)) return { texts: [], problem: "malformed_inline_pastes" };
  let r = [];
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    if (typeof o !== "string") return { texts: [], problem: "malformed_inline_pastes" };
    if (o.trim() === "") continue;
    if (r.length === K) return { texts: r, problem: "inline_pastes_cut" };
    r.push(o);
  }
  return { texts: r };
}
var P = /* @__PURE__ */ new Set(["ios", "android", "web_claude_ai", "desktop_app"]);
function R(e) {
  return P.has(e) || false;
}
function vG(e) {
  return e !== void 0 && P.has(e);
}
function FUt(e) {
  return e === "claude_code_cli" || e === "claude_code_vscode";
}
function b(e, r) {
  return false;
}
function lOi(e, r) {
  if (r) return;
  return FUt(e) ? { kind: "human" } : void 0;
}
var M = /* @__PURE__ */ new Set(["scheduled_trigger", "force_run_trigger", "github_webhook_trigger", "fire_routine", "pr_steward"]), W = /* @__PURE__ */ new Set(["trigger_fire"]);
function dyr(e) {
  return e !== void 0 && W.has(e);
}
var Ksn = "session_inbox", T = /* @__PURE__ */ new Set(["github_webhook", "pr_steward", "signal_subscription"]);
function Xpo(e) {
  return e !== void 0 && (T.has(e) || e === Ksn);
}
var w = Object.freeze({ kind: "task-notification", subkind: "external-event" }), z = "projects-relay";
function dOi({ relayMessageIds: e, isSynthetic: r, coordinatorNote: i }) {
  return e !== void 0 || r !== true || i;
}
var Y = "triggerFireReason";
function adl(e, r) {
  if (e?.kind !== "task-notification" || e.subkind !== "scheduled-trigger") return e;
  let i = rFn(r);
  return i === void 0 ? e : { ...e, fireReason: i };
}
function N(e) {
  if (dyr(e)) return { kind: "task-notification", subkind: "scheduled-trigger" };
  if (e === Ksn) return { kind: "task-notification", subkind: "session-inbox" };
  if (e === import_chunk_865at33z.tO) (0, import_chunk_1ek4hhs6.TG)();
  return { kind: "task-notification" };
}
var Q = /* @__PURE__ */ new Set(["scheduled_trigger", "force_run_trigger", "fire_routine"]);
function rFn(e) {
  return I(e, Y);
}
function cyr(e, r, i, o) {
  if (e === "now") return e;
  let s = i !== void 0 && q.has(i) && (i !== "trigger_fire" || o !== void 0);
  return r && Q.has(r) || s ? "later" : e;
}
var L = /* @__PURE__ */ new Set(["claude-in-slack", "claude_in_slack"]), U = /* @__PURE__ */ new Set([import_chunk_865at33z.vNe]), D = "claude-in-teams", oFn = "email_human", V = "email_turn_text", X = ["sender_only", "sender_reply"];
function uyr(e) {
  if (e.inbound_origin !== oFn) return;
  let r = I(e, V);
  return X.find((i) => i === r);
}
function Jpo(e) {
  return e === import_chunk_865at33z.tPe;
}
function fyr(e) {
  return e === import_chunk_865at33z.tPe || e === import_chunk_865at33z.Z7e;
}
function cOi(e) {
  if (e === import_chunk_865at33z.tPe || e === import_chunk_865at33z.Z7e) return true;
  return e !== void 0 && e.startsWith("hearth");
}
var q = /* @__PURE__ */ new Set(["trigger_fire", "plugin_fire"]), J = "receiver_grouping_id";
function uOi(e) {
  return I(e, J);
}
function I(e, r) {
  let i = e[r];
  return typeof i === "string" ? i : void 0;
}
var Z = "activity_observation";
function fOi(e) {
  return I(e, Z);
}
function G() {
  return (0, import_chunk_3t7ve0wy.lse)();
}
function ee() {
  return (0, import_chunk_3t7ve0wy.h4t)();
}
function ne(e, r) {
  return e !== void 0 && L.has(e) && r === import_chunk_865at33z.Gxr && G();
}
function re(e, r) {
  return e === D && r === import_chunk_865at33z.zxr && ee();
}
function uje(e, r) {
  return ne(e, r) || re(e, r);
}
function x(e, r) {
  return r === void 0 && e !== void 0 && R(e) || uje(e, r);
}
function Qpo(e, r, i) {
  return e ? e.kind === "human" : x(r, i);
}
function ldl(e, r, i, o) {
  if (e) return e.kind === "human";
  if (!r) return true;
  return x(i, o) || lOi(i, o) !== void 0;
}
function sFn(e, r, i = false) {
  let o;
  try {
    o = WUt(e);
  } catch {
    return false;
  }
  if (!o || iFn(o.content)) return false;
  let { clientPlatform: s, inboundOrigin: d } = o;
  if (d !== void 0) return r === "bridge" ? uje(s, d) : $Ut(d, i);
  return x(s, void 0) || r === "remote-worker" && (FUt(s) || b(s, (0, import_chunk_xfj2cwfv.J4)(e)));
}
function $Ut(e, r = false, i = false) {
  return e === import_chunk_865at33z.Gxr || e === import_chunk_865at33z.zxr || e === import_chunk_865at33z.Tpn || r && e === import_chunk_865at33z.tPe || i && e === oFn;
}
var te = /* @__PURE__ */ new Set([import_chunk_865at33z.nRo, import_chunk_865at33z.rRo, import_chunk_865at33z.oRo, import_chunk_865at33z.Apn]);
function ddl(e) {
  return $Ut(e, true, true) || te.has(e);
}
function Zpo({ isRelayHuman: e, isSynthetic: r, ccrTurnId: i, isProjectsUser: o = false, emailSenderTurn: s, turnEffortCap: d }) {
  if (!e) return {};
  let g = import_chunk_8hfdvrr1.ea.find((_) => _ === d);
  if (d !== void 0 && g === void 0) (0, import_chunk_w578pjby.t)("[relay] turn_effort_cap is not an effort level, so it was ignored");
  return { ...!r && { verifiedSlackHumanTurn: true }, ...!r && o && { projectsUserTurn: true }, ...!r && s !== void 0 && { emailSenderTurn: s }, ...i !== void 0 && { ccrTurnId: i }, ...g !== void 0 && { turnEffortCap: g } };
}
function pyr(e, r, i, o, s, d, g) {
  let _ = iFn(e);
  if (_) return { kind: "peer", from: _, inbound_origin: i, ...g !== void 0 && { plugin: g }, ...(0, import_chunk_xfj2cwfv.pze)(e) };
  if (i === Ksn) return N(i);
  if (i && T.has(i)) return w;
  let m = cOi(i);
  if (!m && i === void 0 && r && R(r)) return { kind: "human" };
  if (!m && uje(r, i)) return { kind: "human" };
  if (!m && r && M.has(r)) return N(i);
  if (i === import_chunk_865at33z.tO && o) return { kind: "task-notification", subkind: "peer-send-message" };
  (0, import_chunk_w578pjby.t)(`[bridge] demoting unwrapped inbound message to peer origin: client_platform=${r || "(absent)"}`, { level: "warn" });
  let y = !r ? "absent" : r.startsWith("claude_code") ? "claude_code" : L.has(r) ? i === import_chunk_865at33z.vNe && G() ? "slack_bot_observation" : "slack_relay" : r === D ? "teams_relay" : "other";
  return (0, import_chunk_y53wbr8a.a)("tengu_bridge_ingress_demoted", { platform_class: (0, import_chunk_78g0060s.f)(y) }), { kind: "peer", from: "unknown", inbound_origin: i, ...(0, import_chunk_xfj2cwfv.pze)(e), ...d !== void 0 && i !== void 0 && U.has(i) && { activityObservation: d } };
}
function UUt(e, r, i) {
  if (e && e.kind !== "peer" && e.kind !== "slack-ping") return e;
  if (r && M.has(r)) return N(i);
  if (r && R(r)) return { kind: "human" };
  return;
}
function pOi(e, r, i, o, s, d = false, g = false, _, m = false, y) {
  let k = iFn(e);
  if (k) return { kind: "peer", from: k, inbound_origin: i, ...(0, import_chunk_xfj2cwfv.pze)(e), ..._ !== void 0 && { plugin: _ } };
  if (i && !U.has(i)) {
    if (i === import_chunk_865at33z.tPe) if (d) (0, import_chunk_cqa9hrgx.u)("bridge_projects_human_origin");
    else (0, import_chunk_cqa9hrgx.l)("bridge_projects_human_origin", "disabled_by_flag");
    if ($Ut(i, d, m)) return { kind: "human" };
    if (i === import_chunk_865at33z.Z7e && g) return { kind: "task-notification", subkind: z };
    if (i === import_chunk_865at33z.tO && o) return { kind: "task-notification", subkind: "peer-send-message" };
    if (T.has(i)) return w;
    return N(i);
  }
  if (FUt(r)) return { kind: "human" };
  if (i === void 0 && b(r, y)) return { kind: "human" };
  if (r?.startsWith("claude_code")) return;
  return pyr(e, r, i, o, void 0, s, _);
}
function BUt(e) {
  return e.verifiedSlackHumanTurn === true && e.priority !== "now";
}
function cdl(e, r) {
  if (e === "now") return e;
  return r ? "later" : e;
}
function hbe(e) {
  let o = e.trimStart(), s = false;
  while (o.startsWith("<system-reminder>")) {
    let g = o.indexOf("</system-reminder>");
    if (g < 0) break;
    o = o.slice(g + 18).trimStart(), s = true;
  }
  let d = (s ? o : e).trimEnd();
  while (d.endsWith("</system-reminder>")) {
    let g = d.lastIndexOf(`
`);
    if (!(g < 0 ? d : d.slice(g + 1)).startsWith("<system-reminder>")) break;
    d = (g < 0 ? "" : d.slice(0, g)).trimEnd(), s = true;
  }
  if (!s) return e;
  return d === "" ? e : d;
}
function mOi(e) {
  let r;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    if (o.type !== "text") continue;
    let s = hbe(o.text);
    if (s === o.text) continue;
    r ??= [...e], r[i] = { ...o, text: s };
  }
  return r ?? e;
}
function WUt(e) {
  if (e.type !== "user") return;
  let r = "pasted_content" in e ? e.pasted_content : void 0, i = "inline_pastes" in e ? e.inline_pastes : void 0, o = (0, import_chunk_a6xqvbh2.NH)(e).length > 0 || Tps(r).texts.length > 0, s = e.message?.content;
  if (!s && !o) return;
  if (Array.isArray(s) && s.length === 0 && !o) return;
  let d = "uuid" in e && typeof e.uuid === "string" ? e.uuid : void 0, g = I(e, "client_platform"), _ = I(e, "inbound_origin"), m = "wake_envelope" in e ? e.wake_envelope : void 0, y = uOi(e), k = fOi(e), H = (0, import_chunk_xfj2cwfv.uze)("from_plugin" in e ? e.from_plugin : void 0), F, E = Array.isArray(s) ? hOi(mOi(ie(s))) : hbe(s ?? "");
  if (Array.isArray(E) && E.length === 0 && !o) return;
  return { content: E, uuid: d, clientPlatform: g, inboundOrigin: _, wakeEnvelope: m, receiverGroupingId: y, slackOrigin: F, activityObservation: k, pastedContent: r, inlinePastes: i, fromPlugin: H };
}
function iFn(e) {
  if (typeof e !== "string") return;
  return e.match(import_chunk_xfj2cwfv.dPo)?.[1];
}
function xAe(e) {
  if (typeof e === "string") return iFn(e) !== void 0;
  if (!Array.isArray(e)) return false;
  return e.some((r) => typeof r === "object" && r !== null && "type" in r && r.type === "text" && "text" in r && typeof r.text === "string" && iFn(r.text) !== void 0);
}
function hOi(e) {
  if (!e.some(A)) return e;
  return e.filter((r) => !A(r));
}
function A(e) {
  if (e.type !== "text") return false;
  return typeof e.text !== "string" || e.text.trim() === "";
}
function ie(e) {
  if (!e.some(O)) return e;
  return e.map((r) => {
    if (!O(r)) return r;
    let i = r.source, o = typeof i.mediaType === "string" && i.mediaType ? i.mediaType : (0, import_chunk_kzzkh06w.QUt)(r.source.data);
    return { ...r, source: { type: "base64", media_type: o, data: r.source.data } };
  });
}
function O(e) {
  if (e.type !== "image" || e.source?.type !== "base64") return false;
  return !e.source.media_type;
}
