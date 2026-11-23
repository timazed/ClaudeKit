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
var chunk_mmh7d122_exports = {};
__export(chunk_mmh7d122_exports, {
  a0a: () => a0a,
  dQs: () => dQs,
  g4o: () => g4o,
  h4o: () => h4o,
  i0a: () => i0a,
  lDt: () => lDt,
  rnr: () => rnr,
  s0a: () => s0a
});
module.exports = __toCommonJS(chunk_mmh7d122_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_46fskppy = require("/$bunfs/root/chunk-46fskppy.js");
var import_chunk_8hfdvrr1 = require("/$bunfs/root/chunk-8hfdvrr1.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_qaaqd1gd = require("/$bunfs/root/chunk-qaaqd1gd.js");
var import_chunk_yzcgh8yd = require("/$bunfs/root/chunk-yzcgh8yd.js");
var import_chunk_37zqqqnw = require("/$bunfs/root/chunk-37zqqqnw.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var m = 128, f = 16, y = 256, R = 4096, h = ["background_operator", "unresolved_shell_write", "as_in_local_session", "shell_in_plan_mode", "mod_own_call"];
function s0a(e) {
  switch (e.step) {
    case "check":
    case "decline":
      return false;
    case "run":
      return e.approval !== void 0;
  }
}
function i0a(e) {
  switch (e.step) {
    case "check":
    case "decline":
      return false;
    case "run":
      return e.agent_id === void 0;
  }
}
var i = { step: { check: { tool_container: "honoured", attached_computer: "refused" }, run: { tool_container: "honoured", attached_computer: "honoured" }, decline: { tool_container: "honoured", attached_computer: "honoured" } }, member: { agent_id: { tool_container: "honoured", attached_computer: "honoured" }, classifier_may_approve: { tool_container: "honoured", attached_computer: "refused" }, agent_has_read_tool: { tool_container: "honoured", attached_computer: "refused" }, agent_effort_level: { tool_container: "honoured", attached_computer: "refused" }, conversation_id: { tool_container: "refused", attached_computer: "honoured" }, compaction_id: { tool_container: "refused", attached_computer: "honoured" }, server_verdict: { tool_container: "refused", attached_computer: "honoured" }, approval: { tool_container: "honoured", attached_computer: "honoured" } }, approval_member: { attested: { tool_container: "refused", attached_computer: "honoured" }, permission_updates: { tool_container: "refused", attached_computer: "honoured" }, approver: { tool_container: "honoured", attached_computer: "never_believed" }, permission_context: { tool_container: "honoured", attached_computer: "never_believed" } } }, c = { check: true, run: true, decline: false }, lDt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.n)().max(m).regex(/^[\w.:@-]+$/).regex(/[^.]/)), dQs = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.n)().refine(import_chunk_mzmcvr6c.DD)), T = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().max(m)).max(f).transform((e) => h.filter((o) => e.includes(o)))), l = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.n)().regex(import_chunk_syr33dp2.uwe)), k = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.n)().max(y).regex(new RegExp("^\\P{Cc}+$", "u"))), h4o = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.n)().regex(import_chunk_ccm69jjy.fm));
function u(e) {
  let o = { tool_host_interface: (0, import_chunk_46fskppy.PBn)(), tool_use_id: lDt() }, t = { ...o, agent_id: dQs().optional(), main_loop_model: k(), classifier_may_approve: T().optional(), agent_has_read_tool: (0, import_chunk_adx6804h.v)(true).optional(), agent_effort_level: (0, import_chunk_adx6804h.F)(import_chunk_8hfdvrr1.ea).optional(), conversation_id: l().optional(), compaction_id: l().optional(), permission_context: e, server_verdict: (0, import_chunk_adx6804h.ie)().refine((r) => !(0, import_chunk_xcgcdx61.DFe)(r) && (0, import_chunk_syr33dp2.pw)(r) <= R).optional() };
  return (0, import_chunk_adx6804h.zn)("step", [(0, import_chunk_adx6804h.Ae)({ ...t, step: (0, import_chunk_adx6804h.v)("check") }), (0, import_chunk_adx6804h.Ae)({ ...t, step: (0, import_chunk_adx6804h.v)("run"), approval: (0, import_chunk_adx6804h.Ae)({ ask_digest: h4o(), approver: (0, import_chunk_adx6804h.F)(import_chunk_37zqqqnw.krl), permission_context: e, attested: (0, import_chunk_adx6804h.P)().optional(), permission_updates: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.ie)()).max(import_chunk_syr33dp2.Wbs).refine((r) => !(0, import_chunk_xcgcdx61.DFe)(r)).optional() }).optional() }), (0, import_chunk_adx6804h.Ae)({ ...o, step: (0, import_chunk_adx6804h.v)("decline"), ask_digest: h4o() })]);
}
var g = { tool_container: (0, import_chunk_2cbgkbm2.p)(() => u((0, import_chunk_qaaqd1gd.AY)())), attached_computer: (0, import_chunk_2cbgkbm2.p)(() => u((0, import_chunk_qaaqd1gd.uQs)())) };
function a0a(e) {
  let o = (0, import_chunk_0jve1fep.Le)(e) ? e[import_chunk_yzcgh8yd.dDt] : void 0;
  return (0, import_chunk_0jve1fep.Le)(o) && o.step === "run" ? lDt().safeParse(o.tool_use_id).data : void 0;
}
function g4o(e, o = import_chunk_46fskppy._vr) {
  let t = (0, import_chunk_0jve1fep.Le)(e) ? e[import_chunk_yzcgh8yd.dDt] : void 0;
  if (t === void 0) return { kind: "absent" };
  if (!(0, import_chunk_yzcgh8yd.z3r)(t)) return { kind: "other_request" };
  return rnr(t, o, "tool_container");
}
function rnr(e, o, t) {
  let r = (0, import_chunk_46fskppy.Vdn)(e.tool_host_interface);
  if (r === void 0) return { kind: "malformed" };
  let s = o === "compared_elsewhere" ? void 0 : S(o, r);
  if (s !== void 0 && H(e.step)) return s;
  let d = x(e, t);
  return d.kind === "declined" ? d : s ?? d;
}
function x(e, o) {
  let t = (0, import_chunk_0jve1fep.Le)(e.approval) ? e.approval : void 0;
  if ((0, import_chunk_qaaqd1gd.J3)(e.permission_context) || (0, import_chunk_qaaqd1gd.J3)(t?.permission_context)) return { kind: "too_large" };
  let [r] = O(e, t ?? {}, o);
  if (r !== void 0) return { kind: "not_honoured", part: r };
  let s = g[o]().safeParse(e);
  if (s.success) return E(s.data);
  return { kind: (0, import_chunk_qaaqd1gd.cQs)(e.permission_context) || (0, import_chunk_qaaqd1gd.cQs)(t?.permission_context) ? "unlisted_restriction_on" : "malformed" };
}
function S(e, o) {
  let { kind: t } = (0, import_chunk_46fskppy.Lat)(e, o);
  switch (t) {
    case "peer_too_old":
      return { kind: "session_too_old", session: o };
    case "self_too_old":
      return { kind: "daemon_too_old", session: o };
    case "agreed":
      return;
    default:
      return t;
  }
}
function H(e) {
  let o = a(c).find((t) => t === e);
  return o === void 0 || c[o];
}
function O(e, o, t) {
  return [...a(i.step).filter((r) => e.step === r && i.step[r][t] === "refused"), ...a(i.member).filter((r) => Object.hasOwn(e, r) && i.member[r][t] === "refused"), ...a(i.approval_member).filter((r) => Object.hasOwn(o, r) && i.approval_member[r][t] === "refused").map((r) => `approval.${r}`), ..._(t, e.permission_context) ? [] : ["permission_context"], ..._(t, o.permission_context) ? [] : ["approval.permission_context"]];
}
function _(e, o) {
  switch (e) {
    case "tool_container":
      return true;
    case "attached_computer":
      return o === void 0 || (0, import_chunk_qaaqd1gd.l0a)(o);
  }
}
function E(e) {
  switch (e.step) {
    case "check":
    case "run":
      return { kind: "requested", request: e };
    case "decline":
      return { kind: "declined", request: e };
  }
}
function a(e) {
  return Object.keys(e);
}
