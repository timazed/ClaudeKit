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
var chunk_2ms4sey3_exports = {};
__export(chunk_2ms4sey3_exports, {
  AJs: () => AJs,
  CJs: () => CJs,
  EJs: () => EJs,
  Ltr: () => Ltr,
  PJs: () => PJs,
  RJs: () => RJs,
  TJs: () => TJs,
  V7t: () => V7t,
  Wqo: () => Wqo,
  XHa: () => XHa,
  YHa: () => YHa,
  eCn: () => eCn,
  g3r: () => g3r,
  h3r: () => h3r,
  jqo: () => jqo,
  m3r: () => m3r,
  vJs: () => vJs,
  xJs: () => xJs,
  z7t: () => z7t
});
module.exports = __toCommonJS(chunk_2ms4sey3_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_e5q83yb8 = require("/$bunfs/root/chunk-e5q83yb8.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_r9ecxfn9 = require("/$bunfs/root/chunk-r9ecxfn9.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_qnq7dhb5 = require("/$bunfs/root/chunk-qnq7dhb5.js");
var import_chunk_j8jktvtq = require("/$bunfs/root/chunk-j8jktvtq.js");
var import_chunk_bkfd2ttj = require("/$bunfs/root/chunk-bkfd2ttj.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_qwbhh2k3 = require("/$bunfs/root/chunk-qwbhh2k3.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_04nf05xp = require("/$bunfs/root/chunk-04nf05xp.js");
var import_chunk_6jhnd2zy = require("/$bunfs/root/chunk-6jhnd2zy.js");
var M = "[object Boolean]";
function x(e) {
  return e === true || e === false || (0, import_chunk_04nf05xp.$z)(e) && (0, import_chunk_6jhnd2zy.rse)(e) == M;
}
var A = x;
var m3r = ["_feedbackMessage", "_targetMode", "_allowAllSites", "_cuGrants", "_toolUseBlockId"];
var v = "create_project", L = "ask_to_use_chrome", R = /^[0-9a-f]{64}$/, j = ["channel", "older_channel"], F = /* @__PURE__ */ new Map([[`${import_chunk_epy4sc29.Ll}/${import_chunk_r9ecxfn9.hCi}`, { content_digest: (e, o) => typeof e === "string" && typeof o === "string" && R.test(e) && R.test(o) }], [`${import_chunk_epy4sc29.bd}/${v}`, { template: (e, o) => typeof o === "string" && j.includes(e) }], [`${import_chunk_epy4sc29.bd}/${L}`, { reason: (e) => e === "other" }]]);
function y(e) {
  let { mcpInfo: o } = e;
  if (o === void 0 || !g(o)) return;
  switch (o.serverName) {
    case import_chunk_epy4sc29.Ll:
    case import_chunk_epy4sc29.bd:
      return { sets: F.get(`${o.serverName}/${o.toolName}`) ?? {}, leavesOut: (n, r) => r === null || !D(e.inputJSONSchema, n) };
    default:
      return;
  }
}
function w(e, o, n) {
  let r = (0, import_chunk_bzyb60p0.cQo)(e);
  return r !== void 0 && e.mcpInfo !== void 0 && g(e.mcpInfo) && (0, import_chunk_bzyb60p0.YVa)(r, n).some((s) => (0, import_chunk_f9x2f6cx.cg)(s, o) || n.device !== void 0 && (0, import_chunk_f9x2f6cx.cg)({ ...s, device: n.device }, o));
}
function g(e) {
  return e.serverType === "http" && e.source === "dynamic" && e.scope === "dynamic" && e.pluginSource === void 0 && (e.cliOwned === true || (0, import_chunk_6e68m1dj.Ru)() && e.serverProvenance === "connector");
}
function D(e, o) {
  let n = e?.properties;
  return n === void 0 || Object.keys(n).length === 0 || Object.hasOwn(n, o);
}
function i() {
  return true;
}
var B = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/, S = /* @__PURE__ */ new Map([[import_chunk_e5q83yb8.so, { sets: { questions: i, answers: i, annotations: i, response: i, followUp: i, afkTimeoutMs: i }, leavesOut: i }], [import_chunk_bkfd2ttj._d, { sets: { plan: (e, o) => typeof e === "string" && typeof o === "string" }, leavesOut: i }], [import_chunk_qnq7dhb5.YCe, { sets: { role: i, dismissed: i, source: i }, leavesOut: i }], [import_chunk_qnq7dhb5.qCe, { sets: { reason: i, outcome: i }, leavesOut: i }], [import_chunk_j8jktvtq.cje, { sets: { connected: A, handoff: A, repo: (e) => e === "" || typeof e === "string" && e.length <= 200 && B.test(e) }, leavesOut: i }]]), U = { sets: { mode: (e, o) => o === void 0 || p(e, o), access: i, people: i, user_uuids: i }, leavesOut: (e) => e === "people" || e === "access" };
function z7t(e, o, n, r) {
  let s;
  try {
    if (s = H(e, o, n), s === "as_answered" && (!(0, import_chunk_0jve1fep.Le)(o) || (0, import_chunk_ht27b0vz.pu)(r, e, o, "deny") !== null)) s = "changed";
  } catch {
    return (0, import_chunk_cqa9hrgx.m)("permission_network_answer", "judge_threw"), "changed";
  }
  if (s === "changed") (0, import_chunk_w578pjby.t)(`an allow for ${e.name} that came over the network changed the call's input`, { level: "warn" }), (0, import_chunk_cqa9hrgx.m)("permission_network_answer", V(e.name));
  else (0, import_chunk_cqa9hrgx.u)("permission_network_answer");
  return s;
}
function EJs(e, o) {
  return e === void 0 || e === null || (0, import_chunk_0jve1fep.Le)(e) && Object.keys(h(e, o)).length === 0;
}
function YHa(e, o, n) {
  if ((0, import_chunk_bzyb60p0.hyt)(n)) return false;
  if (o === void 0 || y(e) !== void 0) return true;
  let r = e.name === import_chunk_e5q83yb8.so ? ["metadata"] : [];
  return N(e, (0, import_chunk_qwbhh2k3.Pn)((0, import_chunk_bzyb60p0.uR)(e.name, { ...o }), r), (0, import_chunk_qwbhh2k3.Pn)((0, import_chunk_bzyb60p0.uR)(e.name, { ...n }), r));
}
function h(e, o) {
  return (0, import_chunk_qwbhh2k3.Pn)(e, m3r.filter((n) => !Object.hasOwn(o, n)));
}
function H(e, o, n) {
  if (o === void 0 || o === null) return "as_shown";
  if (!(0, import_chunk_0jve1fep.Le)(o) || Object.hasOwn(o, "__proto__")) return "changed";
  let r = h(o, n);
  if (Object.keys(r).length === 0) return "as_shown";
  if (w(e, r, n)) return "as_answered";
  let s = J(e, n);
  if (s === void 0) return N(e, r, n) ? "as_shown" : "changed";
  return Object.entries(r).every(([a, d]) => Object.hasOwn(n, a) && p(d, n[a]) || Object.hasOwn(s.sets, a) && s.sets[a](d, n[a])) && Object.entries(n).every(([a, d]) => d === void 0 || Object.hasOwn(r, a) || s.leavesOut(a, d)) ? "as_answered" : "changed";
}
function J(e, o) {
  if (b(e)) return y(e);
  {
    let { CONTINUE_IN_PROJECTS_TOOL_NAME: n } = require("/$bunfs/root/chunk-xc04hevw.js");
    if (e.name === n) return { sets: { project_id: i, project_name: i, attach_git_remote: (r) => r === false, proposal: (r, s) => (0, import_chunk_0jve1fep.Le)(r) && (0, import_chunk_0jve1fep.Le)(s) && Object.entries(r).every(([a, d]) => Object.hasOwn(s, a) && p(d, s[a])), host_outcome: i }, leavesOut: () => false };
  }
  return e.name === import_chunk_r8478wtb.Vt && o.action === "share" ? U : S.get(e.name);
}
function b(e) {
  return e.mcpInfo !== void 0 || e.name.startsWith("mcp__");
}
function N(e, o, n) {
  if (p(o, n)) return true;
  if (b(e)) return false;
  let [r, s] = [o, n].map((a) => {
    let d = e.inputSchema?.safeParse(a);
    if (d === void 0 || !d.success) return;
    let l = { ...d.data };
    return e.backfillObservableInput?.(l), l;
  });
  return r !== void 0 && s !== void 0 && p(r, s);
}
function p(e, o) {
  return (0, import_chunk_f9x2f6cx.cg)(e, o) || (0, import_chunk_f9x2f6cx.cg)(k(e), k(o));
}
function k(e) {
  let o = (0, import_chunk_w578pjby.te)((0, import_chunk_w578pjby._)([e]));
  return (0, import_chunk_7cfjrnwy.aLo)(o), o;
}
function V(e) {
  switch (e) {
    case import_chunk_hn3cwwzt.ke:
    case import_chunk_rb36kwbn.yt:
      return "changed_shell";
    case import_chunk_rb36kwbn.Dt:
    case import_chunk_rb36kwbn.lt:
    case import_chunk_rb36kwbn.Ks:
      return "changed_file_write";
    default:
      return S.has(e) ? "changed_form" : e.startsWith("mcp__") ? "changed_server_tool" : "changed_other";
  }
}
var Wqo = "afkTimeoutOfferedAt", K = 1e3, jqo = 36e5, CJs = 2 * jqo, AJs = /* @__PURE__ */ new Set(["default", "acceptEdits", "plan", "auto"]), I = ["title", "questions"], q = [...I, "metadata"], RJs = "The app reported that nobody answered this question, but Claude Code did not accept the report, so the question has no answer. Ask again if you still need the answer.";
function xJs(e, o, n) {
  return (0, import_chunk_ht27b0vz.Tr)(e, o) !== null || (0, import_chunk_ht27b0vz.Di)(e, o) !== null || (0, import_chunk_ht27b0vz.pu)(e, o, n, "deny") !== null || (0, import_chunk_ht27b0vz.pu)(e, o, n, "ask") !== null;
}
function g3r(e, o, n, r, s, a = () => true) {
  let d = n.updatedInput;
  if (!Ltr(e, n) || !(0, import_chunk_ma3kja9f.T)(d)) return { kind: "none" };
  let l = (0, import_chunk_ma3kja9f.T)(o?.metadata) ? o.metadata[Wqo] : void 0;
  if (o === void 0 || typeof l !== "number" || !(Math.abs(s - l) <= CJs)) return { kind: "refused", reason: "not_offered" };
  let C = r();
  if (!AJs.has(C.mode)) return { kind: "refused", reason: "wrong_mode" };
  let { afkTimeoutMs: f, answers: E = {}, ...P } = d;
  if (typeof f !== "number" || !Number.isInteger(f) || f < K || !(0, import_chunk_ma3kja9f.T)(E) || Object.keys(E).length > 0 || !Object.keys(P).every((c) => q.includes(c)) || n.updatedPermissions !== void 0 && !(Array.isArray(n.updatedPermissions) && n.updatedPermissions.length === 0)) return { kind: "refused", reason: "not_bare" };
  let O = { answers: {}, afkTimeoutMs: Math.min(f, jqo) };
  for (let c of I) if (Object.hasOwn(o, c)) O[c] = o[c];
  if (xJs(C, e, O)) return { kind: "refused", reason: "rule" };
  return a() ? { kind: "admitted", input: O } : { kind: "refused", reason: "switched_off" };
}
function Ltr(e, o) {
  return o.behavior === "allow" && PJs(e) && (0, import_chunk_ma3kja9f.T)(o.updatedInput) && Boolean(o.updatedInput.afkTimeoutMs);
}
function eCn(e, o) {
  return (0, import_chunk_cqa9hrgx.m)("ask_user_question_no_answer_offer", e), { behavior: "deny", message: RJs, ...o !== void 0 && { toolUseID: o }, decisionReason: { type: "other", reason: "Claude Code did not accept a report that nobody answered" }, decideLocation: "ask-path" };
}
function PJs(e) {
  return e.name === import_chunk_e5q83yb8.so && e.isMcp !== true;
}
var G = "tengu_hazel_sluice";
function vJs() {
  return ((0, import_chunk_3t7ve0wy.Gm)() || (0, import_chunk_3t7ve0wy._S)()) && (0, import_chunk_bz1f2qnq.nX)(G) === "on";
}
function TJs(e, o, n) {
  if (o.mcpInfo === void 0 || n.length === 0 || !vJs()) return;
  let r = (0, import_chunk_px0hhsq7.ca)(o);
  if (!n.some((s) => s.type === "addRules" && s.behavior === "allow" && s.destination === "session" && s.rules.some((a) => a.toolName === r && a.ruleContent === void 0))) return;
  e.setSessionToolPermissionContext((s) => s.alwaysAllowRules.session?.includes(r) !== true || s.connectorCardAllows?.has(r) === true ? s : { ...s, connectorCardAllows: /* @__PURE__ */ new Set([...s.connectorCardAllows ?? [], r]) });
}
function XHa(e) {
  let o = h3r(e.toolPermissionContext);
  return o === e.toolPermissionContext ? e : { ...e, toolPermissionContext: o };
}
function h3r(e, o) {
  let n = e.connectorCardAllows;
  if (n === void 0 || o !== void 0 && !n.has(o)) return e;
  let r = new Set(o === void 0 ? [] : n);
  if (o !== void 0) r.delete(o);
  return { ...e, connectorCardAllows: r.size === 0 ? void 0 : r };
}
function V7t(e, o, n) {
  if (n.setSessionToolPermissionContext((r) => h3r(r, e.interrupt || o === void 0 ? void 0 : (0, import_chunk_px0hhsq7.ca)(o))), e.interrupt) (0, import_chunk_w578pjby.t)(`SDK permission prompt deny+interrupt: tool=${o?.name} messageChars=${e.message.length}`), (0, import_chunk_cbnm4p23.JT)(n.abortController).abort();
}
