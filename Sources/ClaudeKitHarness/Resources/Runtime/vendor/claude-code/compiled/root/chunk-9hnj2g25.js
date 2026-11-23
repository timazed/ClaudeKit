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
var chunk_9hnj2g25_exports = {};
__export(chunk_9hnj2g25_exports, {
  $1n: () => $1n,
  $Di: () => $Di,
  $it: () => $it,
  A8e: () => A8e,
  B1n: () => B1n,
  C8e: () => C8e,
  DDi: () => DDi,
  Dje: () => Dje,
  F1n: () => F1n,
  FDi: () => FDi,
  Fit: () => Fit,
  GO: () => GO,
  HDi: () => HDi,
  IDi: () => IDi,
  JAe: () => JAe,
  Jhs: () => Jhs,
  L1n: () => L1n,
  LDi: () => LDi,
  M7: () => M7,
  MDi: () => MDi,
  N1n: () => N1n,
  NDi: () => NDi,
  ODi: () => ODi,
  Pan: () => Pan,
  Qhs: () => Qhs,
  Sbr: () => Sbr,
  U1n: () => U1n,
  Uit: () => Uit,
  Wkt: () => Wkt,
  Xhs: () => Xhs,
  Yhs: () => Yhs,
  Zhs: () => Zhs,
  _br: () => _br,
  _go: () => _go,
  bZl: () => bZl,
  cV: () => cV,
  eWt: () => eWt,
  egs: () => egs,
  ggo: () => ggo,
  hgo: () => hgo,
  jkt: () => jkt,
  mgo: () => mgo,
  pgo: () => pgo,
  sZ: () => sZ,
  tWt: () => tWt,
  tgs: () => tgs,
  xan: () => xan,
  ybr: () => ybr
});
module.exports = __toCommonJS(chunk_9hnj2g25_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_0rbztqww = require("/$bunfs/root/chunk-0rbztqww.js");
var import_chunk_qtg8rez4 = require("/$bunfs/root/chunk-qtg8rez4.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_z1z1qsrb = require("/$bunfs/root/chunk-z1z1qsrb.js");
var import_chunk_ac8t6db0 = require("/$bunfs/root/chunk-ac8t6db0.js");
var import_chunk_qsvts4bv = require("/$bunfs/root/chunk-qsvts4bv.js");
var import_chunk_mha8pjbc = require("/$bunfs/root/chunk-mha8pjbc.js");
var import_chunk_m9439hrw = require("/$bunfs/root/chunk-m9439hrw.js");
var import_chunk_1yn47zgk = require("/$bunfs/root/chunk-1yn47zgk.js");
var import_chunk_xdc7h7xp = require("/$bunfs/root/chunk-xdc7h7xp.js");
var import_chunk_75f58nqg = require("/$bunfs/root/chunk-75f58nqg.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_qwbhh2k3 = require("/$bunfs/root/chunk-qwbhh2k3.js");
var import_chunk_49zxha55 = require("/$bunfs/root/chunk-49zxha55.js");
function L1n(e, n) {
  let s = (0, import_chunk_qtg8rez4.Bt)(e);
  return (0, import_chunk_qtg8rez4.q0e)(s, n.toolUseId) ? N1n(s) : { owned: void 0, public: void 0, outsideOrg: (0, import_chunk_z1z1qsrb.u4)(s) || P(), outsideAudience: void 0, invitedByOtherOrg: s?.external === true };
}
function N1n(e) {
  let n = e?.external === true, s = e?.outsideAudience;
  if (e === void 0 || e.probeFailed === true) return { owned: void 0, public: void 0, outsideOrg: (0, import_chunk_z1z1qsrb.u4)(e) || P(), outsideAudience: void 0, invitedByOtherOrg: n };
  let t = e.mode === "unknown" ? void 0 : e.mode === "public", r = (0, import_chunk_z1z1qsrb.u4)(e);
  if (e.role === void 0) return { owned: t === true ? false : void 0, public: t, outsideOrg: r, outsideAudience: s, invitedByOtherOrg: n };
  return { owned: e.role === "unknown" ? void 0 : e.role === "owner", public: t, outsideOrg: r, outsideAudience: s, invitedByOtherOrg: n, ...(e.role === "owner" || e.role === "writer") && { canWrite: true } };
}
function P() {
  return (0, import_chunk_0rbztqww.zH)() ? void 0 : false;
}
function Yhs(e, n) {
  let { outsideCommentReads: s, outsideCommentsHanded: t } = (0, import_chunk_0rkwgmhx.se)().shareStatus;
  return s.has(e) || t.has(e) && !(0, import_chunk_75f58nqg.thl)(n, e);
}
function C8e(e) {
  return e.startedInSessionUsersTurn !== false && (0, import_chunk_865at33z.Kk)(e.agentId, e.agentContext) !== void 0 && !(0, import_chunk_865at33z.bw)(e.messages) && (0, import_chunk_bz1f2qnq.OS)(e);
}
function GO(e, n, s) {
  let t = L1n(n.slug, s), r = (0, import_chunk_z1z1qsrb.QWt)(), i = { operation: e, owned: t.owned, public: t.public, outsideOrg: t.outsideOrg, outsideAudience: r ? t.outsideAudience : t.outsideAudience === true, ...r && Yhs(n.slug, s.toolUseId) && { outsideCommentRead: true }, invitedByOtherOrg: t.invitedByOtherOrg, networkOff: $1n(n), turnStartedByHuman: (0, import_chunk_865at33z.bw)(s.messages), ...t.canWrite === true && { canWrite: true } };
  if (e !== "write" || !("agentContext" in s) || !C8e(s)) return i;
  let d = (0, import_chunk_z1z1qsrb.vE)({ ...i, turnStartedByHuman: true });
  return (0, import_chunk_z1z1qsrb.Yln)(d) && (0, import_chunk_z1z1qsrb.V0e)(d, n.slug) ? i : { ...i, owedPersonsTurnQuestion: true };
}
function pgo(e, n) {
  return (0, import_chunk_z1z1qsrb.vE)({ ...GO("write", e, n), turnStartedByHuman: true }).ask;
}
function A() {
  return (0, import_chunk_sghy0qej.Pe)("tengu_vellum_godwit", { safe: true });
}
function mgo(e, n) {
  let { reservedMints: s, mcpTriedMints: t } = (0, import_chunk_0rkwgmhx.se)();
  if (!A() || s.has(e) && !t.has(e)) return 0;
  let r = n !== void 0 && B(e, n);
  return (0, import_chunk_qtg8rez4.u$i)(r ? e : void 0);
}
function B(e, n) {
  let s = (0, import_chunk_qtg8rez4.Bt)(e);
  return (0, import_chunk_qtg8rez4.q0e)(s, n.toolUseId) && (0, import_chunk_qtg8rez4.up)(s) && s?.outsideWriter === false && s.outsidersMayHaveWritten !== true && s.markReads !== true;
}
function F1n(e, n, s) {
  let t = (0, import_chunk_qtg8rez4.Gkr)(e.slug, n, mgo(e.slug, s));
  return t !== void 0 && pgo(e, s) && A() ? t : void 0;
}
function JAe(e, n) {
  return ((0, import_chunk_qtg8rez4.f$i)(e.slug) || mgo(e.slug, n) > 0) && A() && (!(0, import_chunk_qtg8rez4.q0e)((0, import_chunk_qtg8rez4.Bt)(e.slug), n.toolUseId) || pgo(e, n));
}
function v(e) {
  return (0, import_chunk_1yn47zgk.x8e)((0, import_chunk_qwbhh2k3.Pn)(e, import_chunk_m9439hrw.ugs.filter((n) => n !== import_chunk_m9439hrw.mre)));
}
function Xhs(e, n, s) {
  if (e.toolUseId === void 0) return;
  let t = (0, import_chunk_0rkwgmhx.se)().publishCommentCards, r = t.get(e.toolUseId) ?? /* @__PURE__ */ new Map(), i = v(n);
  if (r.has(i)) return;
  if (s !== null) (0, import_chunk_cqa9hrgx.l)("artifact_publish", "outward_comment_card");
  r.set(i, s === null ? null : { ...s, askedIn: (0, import_chunk_z1z1qsrb.bRe)(), noClassifier: !Fit(e) }), t.set(e.toolUseId, r);
}
function ODi(e, n) {
  if (n.toolUseId === void 0) return false;
  let s = (0, import_chunk_0rkwgmhx.se)().publishCommentCards, t = s.get(n.toolUseId);
  s.delete(n.toolUseId);
  let r = t?.get(v(e));
  if (r != null && r.askedIn === (0, import_chunk_z1z1qsrb.bRe)() && !(0, import_chunk_865at33z.qi)(n.agentContext) && !(0, import_chunk_bz1f2qnq.TN)(n) && !(0, import_chunk_bz1f2qnq.k_)(n) && !(0, import_chunk_m9439hrw.Dpe)(n) && ((0, import_chunk_m9439hrw.R8e)(n) || r.noClassifier && !Fit(n))) (0, import_chunk_qtg8rez4.zkr)(r.slug, r.seq, r.sources);
  return [...t?.values() ?? []].some((i) => i !== null && !i.showsCreateNotice);
}
var K = /* @__PURE__ */ new Set(["scheduled", "retry", "catch_up", "manual"]);
function T(e) {
  return e?.kind === "task-notification" && e.subkind === "scheduled-trigger" && e.fireReason !== void 0 && K.has(e.fireReason);
}
function A8e(e) {
  if (Fit(e)) return false;
  if (!T((0, import_chunk_865at33z.PE)(e.messages).decider?.origin)) return false;
  let n = (0, import_chunk_0rkwgmhx.se)();
  if (!n.routineRunTainted && !(0, import_chunk_865at33z.B4)(e.messages, (s, t) => (0, import_chunk_865at33z.s_)(t) || T(s))) {
    if ((0, import_chunk_bz1f2qnq.vvr)(e)) return false;
    n.routineRunTainted = true;
  }
  return !n.routineRunTainted;
}
function xan() {
  if ((0, import_chunk_865at33z.Idt)() !== void 0) return false;
  if ((0, import_chunk_6e68m1dj.hn)()) return (0, import_chunk_ac8t6db0.Gbe)() && j() && (0, import_chunk_865at33z.BCo)();
  return !(0, import_chunk_6e68m1dj.Ru)() && (0, import_chunk_z1z1qsrb.OR)() && (0, import_chunk_zhr7rpv7.ve)() === "firstParty" && (0, import_chunk_865at33z.$R)() === "env";
}
function F() {
  return (0, import_chunk_ac8t6db0.$ln)("POST", "/api/frame/deploy/direct");
}
function N(e) {
  return (0, import_chunk_0rkwgmhx.se)().frameRelay.servedUntil.get(e) ?? 0;
}
function j() {
  let e = F();
  if (e === null || (0, import_chunk_ac8t6db0.r9)(e)) return false;
  let n = (0, import_chunk_0rkwgmhx.se)().routineRelayNotCarried;
  return n === null || N(e) > n.servedUntil;
}
function IDi() {
  let e = F();
  (0, import_chunk_0rkwgmhx.se)().routineRelayNotCarried = { servedUntil: e === null ? 0 : N(e) };
}
function Fit(e) {
  let { mode: n, modeBeforeRewrite: s } = (0, import_chunk_bz1f2qnq.Z)(e);
  return (0, import_chunk_xfj2cwfv.Jr)(n) || s !== void 0 && (0, import_chunk_xfj2cwfv.Jr)(s);
}
function eWt(e, n) {
  if (Fit(e)) return false;
  let { messages: s } = e, t = (0, import_chunk_865at33z.PE)(s).decider;
  if (t === null || s[t.index]?.type !== "user" || t.origin?.kind !== "task-notification") return false;
  let r = t.index;
  for (; r > 0; r--) {
    let d = s[r - 1];
    if (d == null || d.type === "assistant" || d.type === "user" && !(0, import_chunk_865at33z.gde)(d) && d.origin?.kind !== "task-notification") break;
  }
  let i = s.slice(r);
  return (0, import_chunk_865at33z.B4)(i, (d, u) => u.type === "user" && d?.kind === "task-notification" && d.subkind === void 0 && (0, import_chunk_xdc7h7xp.Iml)(u.uuid) === n) && x(i, n);
}
function x(e, n) {
  let s = e[0] === void 0 ? NaN : Date.parse(e[0].timestamp), t = (0, import_chunk_xdc7h7xp.Rgo)();
  if (t !== void 0 && !(Number.isFinite(s) && t < s)) return false;
  if ((0, import_chunk_xdc7h7xp.Ago)(n, s)) return false;
  let r = /* @__PURE__ */ new Set();
  for (let i of e) {
    if (i?.type !== "assistant" || !Array.isArray(i.message.content)) continue;
    for (let d of i.message.content) if (d.type === "tool_use" && q(d.name, d.input)) {
      let u = (0, import_chunk_xdc7h7xp.Cgo)(d.id);
      if (u?.ownWordsOnly !== true || u.slug !== n) return false;
      r.add(d.id);
    }
  }
  if (r.size === 0) return false;
  return !(0, import_chunk_xdc7h7xp.Dan)() || !(0, import_chunk_xfj2cwfv._At)(e.filter((i) => i.type !== "user" || !Array.isArray(i.message.content) || !i.message.content.every((d) => d.type === "tool_result" && r.has(d.tool_use_id))));
}
function q(e, n) {
  let s = e === import_chunk_r8478wtb.sh ? (0, import_chunk_qsvts4bv.oat)("comments", n) : e === import_chunk_r8478wtb.Vt ? n : void 0;
  return typeof s === "object" && s !== null && "action" in s && s.action === "comments";
}
var Wkt = true;
function M7(e, n) {
  return e.ask && e.basis === "unattended" || Wkt && (0, import_chunk_bz1f2qnq.Z)(n).mode === "plan";
}
var Jhs = true;
function sZ(e) {
  return Jhs && (0, import_chunk_bz1f2qnq.Z)(e).mode === "plan";
}
function jkt(e, n, s, t, r = () => (0, import_chunk_z1z1qsrb.vE)(GO("read", n, e))) {
  return !s && t && !sZ(e) ? r() : null;
}
function E(e) {
  return (0, import_chunk_z1z1qsrb.OR)() && (0, import_chunk_bz1f2qnq.k_)(e);
}
function Dje(e, n, s) {
  let t = E(e) && !(0, import_chunk_865at33z.bw)(e.messages);
  if (!t && !(0, import_chunk_bz1f2qnq.VP)(e)) return null;
  let r = s.endsWith(".") ? s : `${s}.`;
  return { behavior: "deny", message: `${n}. This needs a yes to: ${r} ${t ? "No one can answer that prompt in this Cowork session, and this turn was not started by the user's own message \u2014 tell the user in chat; do not retry it on this turn." : "No one can answer that prompt from plan mode in this session \u2014 keep planning in the plan file and raise it with the user in chat; do not retry while plan mode is on."}`, decisionReason: { type: "safetyCheck", reason: t ? "Artifact call with a new-comments notice pending, on a turn the user's own message did not start, in a Cowork session that has no one to answer its prompt" : "Notification-triggered artifact call in plan mode has no one to answer its prompt", classifierApprovable: false } };
}
function $it(e, n, s) {
  if (!Qhs(e, s)) return null;
  return { behavior: "deny", message: `${n}. Reading content of an artifact the user does not own, or whose ownership couldn't be confirmed, needs a person's yes, and no one can answer the prompt in this session \u2014 tell the user in chat instead of retrying.`, decisionReason: { type: "safetyCheck", reason: "Reading content of an artifact that is not confirmed to be the user's own requires a live human consent surface in this session", classifierApprovable: false } };
}
function Qhs(e, n) {
  return (0, import_chunk_bz1f2qnq.k_)(e) && ((0, import_chunk_z1z1qsrb.OR)() || n);
}
function $1n(e) {
  return (0, import_chunk_mha8pjbc.Khl)(e?.env);
}
var D = "this artifact", H = "no one was asked first \u2014 nothing was returned; retry the same action so the user is asked", G = "no one can be asked about it in this session \u2014 nothing was returned; do not retry it here", Y = "a PermissionRequest hook answered the permission prompt in the user's place; only the user's own approval allows this read \u2014 nothing was returned; do not retry it here, and tell the user their hook answered for them (to approve it themselves they would narrow the hook so it no longer answers this prompt)";
function Pan(e, n, s, t) {
  if (ee(n, s)) return true;
  if ((0, import_chunk_z1z1qsrb.Vbe)((0, import_chunk_bz1f2qnq.Zdn)(n), t === "page" ? "artifactReadConsentSlugs" : "artifactAssetReadHumanConsentSlugs", s)) return true;
  if ((0, import_chunk_bz1f2qnq.k_)(n) || (0, import_chunk_m9439hrw.Dpe)(n)) return false;
  return (0, import_chunk_m9439hrw.j1n)(e, n) || !(0, import_chunk_xfj2cwfv.Jr)((0, import_chunk_bz1f2qnq.Z)(n).mode) && !z(e) && (0, import_chunk_m9439hrw.Mbe)(e, n);
}
function M(e) {
  let n = e.toolUseId === void 0 ? void 0 : e.toolDecisions?.get(e.toolUseId);
  return n?.source === "hook" && n.decision !== "reject";
}
function U1n(e, n = false, s) {
  let t = M(e), r = n ? !(0, import_chunk_bz1f2qnq.OS)(e) || (0, import_chunk_bz1f2qnq.k_)(e) && !(0, import_chunk_xfj2cwfv.Jr)((0, import_chunk_bz1f2qnq.Z)(e).mode) : (0, import_chunk_bz1f2qnq.k_)(e);
  if (!n) return `this turned out to be a public artifact from outside your organization, and ${r ? G : t ? Y : H}`;
  let i = s === void 0 ? "nothing was copied" : "nothing was published", d = s === void 0 ? "Retry the same action so that question is asked." : s.retryUrl !== void 0 ? `Retry publishing with url: ${(0, import_chunk_w578pjby._)(s.retryUrl)} so that question is asked.` : "Retry the same publish so that question is asked.";
  return r ? `the source artifact belongs to another organization and nobody can be asked about copying from it in this session, so ${i}. Don't retry it here.` : `the source artifact belongs to another organization and nobody was asked whether to copy from another organization's artifact, so ${i}. ${d}`;
}
function hgo(e, n, s) {
  return (0, import_chunk_z1z1qsrb.d1)((0, import_chunk_qtg8rez4.Bt)(n)) && (s || Zhs(e, n));
}
function Zhs(e, n) {
  return (0, import_chunk_z1z1qsrb.W1i)(n) || (0, import_chunk_z1z1qsrb.Vbe)((0, import_chunk_bz1f2qnq.Zdn)(e), "artifactOutsideOrgConsentSlugs", n);
}
function z(e) {
  let n = Reflect.get(e, import_chunk_m9439hrw.fV);
  return typeof n === "object" && n !== null && Reflect.get(n, "classifier") === true;
}
var ggo = "This artifact was created outside your organization.";
function _go(e, n, s) {
  let t = (0, import_chunk_r8478wtb.cK)(n), r = t ? `"${t}"` : D, i = t ? `"${t}"` : "This artifact", d = `Let Claude read it${s ? ` and ${s}` : ""}?`;
  switch (e) {
    case "someone_else":
      return `${i} was made by someone else. ${d}`;
    case "unknown":
      return `Claude couldn't check who made ${r}. ${d}`;
    case "cowritten":
      return `Other people can edit ${r}. ${d}`;
    case "from_type":
      return `${i} was made from someone else's artifact type. ${d}`;
  }
}
function MDi(e) {
  return `Approving covers its files${e ? ", and copying them into other artifacts," : ""} for the rest of the conversation.`;
}
function J(e, n, s) {
  let t = Q(e, n, s);
  if (e.remember !== "artifact") return t;
  let r = (0, import_chunk_z1z1qsrb.Sle)() ? "task" : "conversation";
  return t.replace(/\?$/, ` for the rest of this ${r}?`);
}
function C(e) {
  return e.class === "public_change" && e.basis !== "unattended" && e.about !== "someone_else" && e.about !== "outside_audience" && e.missing !== "public" && e.missing !== "outsideAudience";
}
function Q(e, n, s) {
  let t = (0, import_chunk_r8478wtb.cK)(n), r = t ? `"${t}"` : D, i = t ? `"${t}"` : "This artifact";
  switch (e.class) {
    case "delete":
      return `Permanently delete ${t || s === void 0 ? r : s}?`;
    case "public_change":
      if (C(e)) return `${i} is public. Allow Claude to change it?`;
      if (e.basis === "unattended") return `Allow Claude to change ${r}?`;
      if (e.about === "outside_audience") return `${i} can be seen outside your organization. Allow Claude to change it?`;
      if (e.about === "someone_else") return e.missing === "owned" ? `Claude couldn't check who made ${r}. Allow Claude to change it?` : `${i} was made by someone else. Allow Claude to change it?`;
      return `Claude couldn't check who can see ${r}. Allow Claude to change it?`;
    case "access_change":
      return `Allow Claude to change who can open or comment on ${r}?`;
    case "standing_job":
      return `Allow Claude to keep replying to comments on ${r}?`;
    case "foreign_read":
      return _go(e.missing === "owned" ? "unknown" : "someone_else", n);
  }
}
function V(e) {
  return e.about === "outside_org" ? ggo : void 0;
}
function cV(e) {
  return tWt(e.input, e.context, [e]);
}
function tWt(e, n, s) {
  if (n.toolUseId !== void 0) (0, import_chunk_0rkwgmhx.se)().askClassPending.delete(n.toolUseId), (0, import_chunk_0rkwgmhx.se)().askClassCards.delete(n.toolUseId);
  let t = [];
  for (let o of s) if (!o.ruling.ask) {
    if (o.ruling.foreignRead) B1n(o.action, o.slug, o.ownerAccountId, o.ruling.attested);
  } else if (o.ruling.remember !== "artifact" || !(o.consentHeld ?? (0, import_chunk_z1z1qsrb.V0e)(o.ruling, o.slug, o.userOnly === true)) || o.heldYesDoesNotCover === true) t.push({ ...o, ruling: o.ruling });
  if (t.length === 0) return { behavior: "allow", updatedInput: { ...e, [import_chunk_m9439hrw.RS]: false } };
  let r = (o) => o.ruling.answeredBy === "person" || o.userOnly === true;
  t.sort((o, k) => Number(r(k)) - Number(r(o)));
  let i = t.some(r), d = t.map((o) => ({ display: o.display, question: J(o.ruling, o.display.title, o.display.url), note: V(o.ruling), linked: o.ruling.class === "foreign_read" || o.ruling.about === "someone_else" || o.ruling.missing === "owned", reach: o.note })), u = d.flatMap((o) => o.reach === void 0 ? [o.question] : [o.question, o.reach]).join(" "), c = t.some((o) => (0, import_chunk_r8478wtb.cK)(o.display.title) !== "" && (0, import_chunk_qtg8rez4.s2e)((0, import_chunk_qtg8rez4.Bt)(o.slug))) ? import_chunk_k449cc64.OI : "";
  if (i ? (0, import_chunk_bz1f2qnq.k_)(n) : (0, import_chunk_bz1f2qnq.VP)(n) || t.some((o) => o.ruling.class === "foreign_read") && E(n)) return { behavior: "deny", message: `${c}Nothing was done. This needs a yes to: ${d.map((o) => o.question).join(" ")} No one can answer in this session.`, decisionReason: { type: "safetyCheck", reason: `Artifact ${t.map((o) => o.ruling.class).join(", ")} ask has no one to answer it`, classifierApprovable: false } };
  let w = (0, import_chunk_bz1f2qnq.OS)(n), W = (0, import_chunk_z1z1qsrb.bRe)(), y = t.map((o) => ({ class: o.ruling.class, remember: o.ruling.remember, ...o.ruling.endpoint && { endpoint: true }, slug: o.slug, url: o.display.url, ...o.display.title !== void 0 && { title: o.display.title }, reachable: w, askedIn: W }));
  (0, import_chunk_z1z1qsrb.ZWt)(n, t.filter((o) => "about" in o.ruling && o.ruling.about === "outside_org" && !o.ruling.endpoint).map((o) => o.slug), w);
  let R = y.length === 1 ? y[0] : y;
  if (n.toolUseId !== void 0) {
    let o = t.map((h, g) => `${h.slug} ${(0, import_chunk_z1z1qsrb.SRe)(h.ruling)} ${d[g]?.question}`).join(" "), k = (0, import_chunk_0rkwgmhx.se)().askClassFirstWords, I = (k.get(n.toolUseId) ?? o) === o;
    if (k.set(n.toolUseId, I ? o : ""), (0, import_chunk_1yn47zgk.sle)((0, import_chunk_0rkwgmhx.se)().askClassPending, n.toolUseId, y.map((h, g) => {
      let b = { ...h, ...!I && { remember: "this_call" }, ...h.class === "public_change" && (0, import_chunk_z1z1qsrb.QWt)() && { onlyAPersonsYesLasts: true } }, p = t[g]?.ruling;
      return p?.about === "outside_audience" ? { ...b, about: "outside_audience", consentKey: (0, import_chunk_z1z1qsrb.SRe)(p) } : p?.missing === "outsideAudience" ? { ...b, missing: "outsideAudience", consentKey: (0, import_chunk_z1z1qsrb.SRe)(p) } : p?.about === "someone_else" ? { ...b, consentKey: (0, import_chunk_z1z1qsrb.SRe)(p) } : b;
    })), i) (0, import_chunk_1yn47zgk.sle)((0, import_chunk_0rkwgmhx.se)().askClassPersonAsked, n.toolUseId, true);
    else (0, import_chunk_0rkwgmhx.se)().askClassPersonAsked.delete(n.toolUseId);
    if ((0, import_chunk_xfj2cwfv.Jr)((0, import_chunk_bz1f2qnq.Z)(n).mode)) (0, import_chunk_0rkwgmhx.se)().askClassNoClassifier.delete(n.toolUseId);
    else (0, import_chunk_1yn47zgk.sle)((0, import_chunk_0rkwgmhx.se)().askClassNoClassifier, n.toolUseId, true);
    let U = (0, import_chunk_1yn47zgk.x8e)(R);
    if (U !== void 0) {
      let h = d.flatMap(({ display: g, question: b, note: p, linked: L, reach: S }) => [b, ...p === void 0 ? [] : [p], ...b.includes(g.url) || !L && (0, import_chunk_r8478wtb.cK)(g.title) ? [] : [g.url], ...S === void 0 ? [] : [S]]);
      (0, import_chunk_1yn47zgk.sle)((0, import_chunk_0rkwgmhx.se)().askClassCards, n.toolUseId, { stamp: U, parts: h, saysPublic: t.some((g) => C(g.ruling)), reason: u });
    }
  }
  let O = i ? void 0 : t.some((o) => o.ruling.about === "outside_audience") ? "outside_audience" : t.some((o) => C(o.ruling)) ? "public" : void 0;
  return { behavior: "ask", message: `${c}${u}`, updatedInput: { ...e, [import_chunk_m9439hrw.RS]: false, [import_chunk_m9439hrw.Y1n]: R }, ...t.some((o) => o.ruling.class === "delete" || o.ruling.class === "access_change") && { defaultToNo: true }, ...t.some((o) => o.ruling.class === "access_change") && { personOnly: true }, suppressAlwaysAllowRule: true, localDisplayOnly: true, decisionReason: { type: "safetyCheck", reason: u, classifierApprovable: !i, ...O !== void 0 && { denialNote: O } } };
}
function _br(e) {
  if (e.toolUseId === void 0) return;
  let n = (0, import_chunk_0rkwgmhx.se)(), s = n.askClassPending, t = s.get(e.toolUseId) ?? [];
  s.delete(e.toolUseId);
  let r = n.askClassPersonAsked.get(e.toolUseId);
  n.askClassPersonAsked.delete(e.toolUseId);
  let i = n.askClassNoClassifier.get(e.toolUseId);
  n.askClassNoClassifier.delete(e.toolUseId), n.askClassFirstWords.delete(e.toolUseId);
  let d = (0, import_chunk_m9439hrw.R8e)(e), u = !(0, import_chunk_bz1f2qnq.k_)(e) && !(0, import_chunk_m9439hrw.Dpe)(e) && (d || r === true || i === true && !(0, import_chunk_xfj2cwfv.Jr)((0, import_chunk_bz1f2qnq.Z)(e).mode));
  if (t[0]?.reachable !== true || t[0].askedIn !== (0, import_chunk_z1z1qsrb.bRe)() || !(0, import_chunk_bz1f2qnq.OS)(e)) return;
  if ((0, import_chunk_1yn47zgk.sle)(n.askClassTaken, e.toolUseId, t), u) (0, import_chunk_1yn47zgk.sle)(n.askClassTakenByPerson, e.toolUseId, true);
  if ((0, import_chunk_865at33z.qi)(e.agentContext) || (0, import_chunk_bz1f2qnq.TN)(e)) return;
  if (!u && (0, import_chunk_865at33z.Kk)(e.agentId, e.agentContext) !== void 0) return;
  for (let c of t) if (c.remember === "artifact" && (d || !c.endpoint) && (!c.onlyAPersonsYesLasts || u)) {
    if ((0, import_chunk_z1z1qsrb.W_l)((0, import_chunk_z1z1qsrb.SRe)(c), c.slug, u), !c.endpoint && (0, import_chunk_z1z1qsrb.Xln)(e, c.slug) && (u || r !== true && !M(e))) (0, import_chunk_z1z1qsrb.j_l)(c.slug);
  }
}
function HDi(e, n, s) {
  return X(e, n, s);
}
function X(e, n, s) {
  let t = e.toolUseId === void 0 ? void 0 : (0, import_chunk_0rkwgmhx.se)().askClassTaken.get(e.toolUseId);
  return t !== void 0 && t.some((r) => (0, import_chunk_z1z1qsrb.SRe)(r) === n && r.slug === s && r.remember === "artifact") && (0, import_chunk_z1z1qsrb.yle)(n, s);
}
function ee(e, n) {
  let s = (0, import_chunk_0rkwgmhx.se)();
  return e.toolUseId !== void 0 && s.askClassTakenByPerson.get(e.toolUseId) === true && (s.askClassTaken.get(e.toolUseId)?.some((r) => (0, import_chunk_z1z1qsrb.SRe)(r) === "foreign_read" && r.slug === n) ?? false) || (0, import_chunk_m9439hrw.R8e)(e) || (0, import_chunk_z1z1qsrb.OEt)("foreign_read", n);
}
function bZl(e, n, s) {
  if (e.toolUseId === void 0) return;
  let t = (0, import_chunk_0rkwgmhx.se)();
  (0, import_chunk_1yn47zgk.sle)(t.askClassPending, e.toolUseId, [{ class: "foreign_read", remember: "this_call", slug: n, url: s, reachable: (0, import_chunk_bz1f2qnq.OS)(e), askedIn: (0, import_chunk_z1z1qsrb.bRe)() }]), (0, import_chunk_1yn47zgk.sle)(t.askClassPersonAsked, e.toolUseId, true), t.askClassFirstWords.set(e.toolUseId, "");
}
function ybr(e, n) {
  (0, import_chunk_y53wbr8a.a)("tengu_artifact_routine_write_unasked", { db_op: (0, import_chunk_78g0060s.f)(e), artifact_id: (0, import_chunk_49zxha55.Ce)(n) });
}
function DDi(e, n) {
  (0, import_chunk_y53wbr8a.a)("tengu_artifact_comment_write_unasked", { db_op: (0, import_chunk_78g0060s.f)(e), artifact_id: (0, import_chunk_49zxha55.Ce)(n) });
}
function LDi(e) {
  (0, import_chunk_y53wbr8a.a)("tengu_artifact_comment_publish_unasked", { artifact_id: (0, import_chunk_49zxha55.Ce)(e) });
}
function NDi(e) {
  (0, import_chunk_0rkwgmhx.se)().commentRepublishedPaths.add(e);
}
function egs(e) {
  (0, import_chunk_0rkwgmhx.se)().routineRepublishedPaths.add(e);
}
function Sbr(e) {
  if (e === void 0) return;
  let n = (0, import_chunk_0rkwgmhx.se)();
  n.askClassPending.delete(e), n.askClassCards.delete(e), n.askClassPersonAsked.delete(e), n.askClassNoClassifier.delete(e), n.askNamedOtherOrg.delete(e);
}
function FDi(e) {
  (0, import_chunk_y53wbr8a.a)("tengu_artifact_routine_publish_unasked", { artifact_id: (0, import_chunk_49zxha55.Ce)(e) });
}
function tgs() {
  return (0, import_chunk_sghy0qej.Pe)("tengu_proud_honey", { safe: false });
}
function $Di(e, n) {
  let s = (0, import_chunk_78g0060s.f)(n ?? "absent");
  if ((0, import_chunk_y53wbr8a.a)("tengu_artifact_quiet_caps_publish_unasked", { artifact_id: (0, import_chunk_49zxha55.Ce)(e), mode: s }), n === "owner" || n === "empty") return;
  (0, import_chunk_cqa9hrgx.m)("artifact_publish", "quiet_caps_publish_not_owner_only", { mode: s }), (0, import_chunk_0rkwgmhx.se)().quietCapsCardKept = true;
}
function Uit(e, n, s) {
  let t = (0, import_chunk_78g0060s.f)(n ?? "absent");
  if ((0, import_chunk_y53wbr8a.a)("tengu_artifact_routine_first_publish_unasked", { ...e !== void 0 && { artifact_id: (0, import_chunk_49zxha55.Ce)(e) }, mode: t, ...s?.fromType && { from_type: true } }), n === "owner" || n === "refused_before_send") return;
  if (n !== "stranded" && n !== "refused_shape" && n !== "unknown_outcome") (0, import_chunk_cqa9hrgx.m)("artifact_publish", "routine_first_publish_not_owner_only", { mode: t, ...s?.fromType && { from_type: true } });
  (0, import_chunk_0rkwgmhx.se)().routineRunTainted = true;
}
function B1n(e, n, s, t) {
  (0, import_chunk_y53wbr8a.a)("tengu_artifact_foreign_read_unasked", { action: (0, import_chunk_78g0060s.f)(e), artifact_id: (0, import_chunk_49zxha55.Ce)(n), ...s !== void 0 && { owner_account_id: (0, import_chunk_49zxha55.Ce)(s) }, ...t && { attested: true } });
}
