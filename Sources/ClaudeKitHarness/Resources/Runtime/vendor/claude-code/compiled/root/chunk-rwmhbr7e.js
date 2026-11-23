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
var chunk_rwmhbr7e_exports = {};
__export(chunk_rwmhbr7e_exports, {
  I8l: () => I8l,
  Zjo: () => Zjo,
  fGr: () => fGr
});
module.exports = __toCommonJS(chunk_rwmhbr7e_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_vfw28y4s = require("/$bunfs/root/chunk-vfw28y4s.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_j4025zq0 = require("/$bunfs/root/chunk-j4025zq0.js");
var import_chunk_0w2wb7gk = require("/$bunfs/root/chunk-0w2wb7gk.js");
var import_chunk_wvxk15ee = require("/$bunfs/root/chunk-wvxk15ee.js");
var import_chunk_4chf71g6 = require("/$bunfs/root/chunk-4chf71g6.js");
var import_chunk_63nhk7sb = require("/$bunfs/root/chunk-63nhk7sb.js");
var import_chunk_7tyjzrcc = require("/$bunfs/root/chunk-7tyjzrcc.js");
var import_chunk_6cq8bhr8 = require("/$bunfs/root/chunk-6cq8bhr8.js");
var import_chunk_jgeqg4av = require("/$bunfs/root/chunk-jgeqg4av.js");
var import_chunk_r3e8vdzv = require("/$bunfs/root/chunk-r3e8vdzv.js");
var import_chunk_g78kc1rr = require("/$bunfs/root/chunk-g78kc1rr.js");
var import_chunk_a9c4wn56 = require("/$bunfs/root/chunk-a9c4wn56.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_crypto = require("crypto");
(0, import_chunk_adx6804h.B)();
async function Zjo({ toolUseContext: e, canUseTool: r }, _) {
  let { tool: o, tools: s, input: g } = _, a = { ...e.options, tools: s, mcpClients: [...(0, import_chunk_4vsz8a99.Oc)(e)] }, S = e.isolationLatch;
  if ((0, import_chunk_4chf71g6.are)() && (S === void 0 || (0, import_chunk_4chf71g6.rSr)(o, { ...e, options: a }, S) !== null)) return { failure: "isolation_policy", attachments: [] };
  let h = (0, import_chunk_cbnm4p23.sd)(e.abortController), f = setTimeout((i) => i.abort(), _.deadlineMs, h);
  try {
    let { result: i, attachments: y, checkFailed: I } = await (0, import_chunk_63nhk7sb.e2o)({ tool: o, input: g, id: `${e.toolUseId ?? (0, import_crypto.randomUUID)()}_sessions`, toolUseContext: { ...e, abortController: h, requestDialog: void 0, options: a }, canUseTool: (0, import_chunk_63nhk7sb.t2o)(r, { checksFirst: true }), synthesizedBy: e.autoModeClassified && "session-list-read" }), T = i?.message.content, w = Array.isArray(T) ? T.find((v) => v.type === "tool_result") : void 0, [A] = (0, import_chunk_wvxk15ee.Tgr)(w?.content), E = i?.mcpMeta?._meta;
    if (I) return { failure: "not_allowed", attachments: y };
    if (e.abortController.signal.aborted) return { failure: "stopped", attachments: y };
    return w?.is_error === true || A === void 0 ? { failure: "read_failed", meta: E, attachments: y } : { text: A, meta: E, attachments: y };
  } finally {
    clearTimeout(f);
  }
}
var D = 5e3, j = 1e4, O = 100, M = "your user's cloud and Remote Control sessions", x = /^cowork-(?!warm-start$)/, F = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ ccr: (0, import_chunk_adx6804h.c)({ data: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.ie)()).default([]), has_more: (0, import_chunk_adx6804h.P)().default(false), last_id: (0, import_chunk_adx6804h.n)().optional() }) })), U = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)(), title: (0, import_chunk_adx6804h.n)().nullish(), session_status: (0, import_chunk_adx6804h.n)().nullish(), updated_at: (0, import_chunk_adx6804h.n)().nullish(), environment_kind: (0, import_chunk_adx6804h.n)().nullish(), parent_session_id: (0, import_chunk_adx6804h.n)().nullish(), tags: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).nullish(), connection_status: (0, import_chunk_adx6804h.n)().nullish(), external_metadata: (0, import_chunk_adx6804h.c)({ cross_session_inbound: (0, import_chunk_adx6804h.ie)().optional() }).nullish() })), H = /* @__PURE__ */ new Map([["SESSION_STATUS_RUNNING", "running"], ["SESSION_STATUS_IDLE", "idle"], ["SESSION_STATUS_REQUIRES_ACTION", "requires_action"], ["SESSION_STATUS_PENDING", "pending"]]);
async function I8l(e) {
  let { toolUseContext: r } = e, _ = (0, import_chunk_a9c4wn56._le)();
  if (_ === void 0 || (0, import_chunk_jgeqg4av.hG)(r.toolUseId ?? "") || !(0, import_chunk_j4025zq0.Hys)()) return;
  let { options: o } = r, { signal: s } = r.abortController;
  try {
    let g = Date.now() + D, a = (0, import_chunk_4vsz8a99.Oc)(r).find(import_chunk_g78kc1rr.QQ);
    while (a?.type === "pending" && Date.now() < g && !s.aborted) await (0, import_chunk_5appeerh.K)(50, s), a = (0, import_chunk_4vsz8a99.Oc)(r).find(import_chunk_g78kc1rr.QQ);
    if (a?.type === "pending") return (0, import_chunk_cqa9hrgx.l)("list_agents_service_sessions", "connecting"), b(`the ${import_chunk_epy4sc29.Ll} MCP server is still connecting, so ${M} may be missing from this listing`);
    let S = o.refreshTools?.() ?? o.tools, h = [...(0, import_chunk_4vsz8a99.Oc)(r)], f = (0, import_chunk_6cq8bhr8.RYt)(S, h, o.toolAliases, import_chunk_epy4sc29.ULl);
    if (f?.inputJSONSchema?.properties?.live === void 0) return;
    let { text: i = "", meta: y, failure: I, attachments: T } = await Zjo(e, { tool: f, tools: S, input: { live: true, limit: O }, deadlineMs: g + j - Date.now() });
    if (I === "isolation_policy") return (0, import_chunk_cqa9hrgx.l)("list_agents_service_sessions", I), b(`${M} could not be listed here; ${f.name} can list them, but under your organization's policy that counts as connector use, and a session cannot use both connectors and web search`);
    let w = `${M} could not be listed here; ${f.name} lists them, or says why it cannot. If that fails too, the only next step is to try again later, or for your user to tell that session themselves. Say that, and do not ask for or offer to use a session id`, A = F().safeParse((0, import_chunk_0jve1fep.et)(i.slice(i.indexOf("{"), i.lastIndexOf("}") + 1).replaceAll(`
`, " "), false)), E = y?.[import_chunk_0w2wb7gk.wxe] !== void 0;
    if (I === "not_allowed" || E) return (0, import_chunk_cqa9hrgx.l)("list_agents_service_sessions", E ? "stamped" : "not_allowed"), { ...b(w), attachments: T };
    if (!A.success) {
      if (I !== "stopped") (0, import_chunk_cqa9hrgx.m)("list_agents_service_sessions", "read_failed");
      return { ...b(w), attachments: T };
    }
    (0, import_chunk_cqa9hrgx.u)("list_agents_service_sessions");
    let { data: v, has_more: z, last_id: k } = A.data.ccr, N = fGr(k ?? "");
    return { sessions: v.flatMap((L) => G(L, _)), sendTool: (0, import_chunk_7tyjzrcc.KMt)(S, () => h, o.toolAliases), attachments: T, ...z && { note: { kind: "list_truncated", text: `(only the ${O} most recently active of ${M} were read; ${f.name} lists older ones${N === void 0 ? "" : `, given live: true and after_id: "${N}"`})` } } };
  } catch (g) {
    return (0, import_chunk_w578pjby.t)(`[agents:service] list failed: ${(0, import_chunk_jv7av99m.d)(g)}`, { level: "error" }), (0, import_chunk_cqa9hrgx.m)("list_agents_service_sessions", "threw"), b(`${M} could not be listed here`);
  }
}
function fGr(e) {
  return (0, import_chunk_xfj2cwfv.fPo)(e) ? (0, import_chunk_t39bs2jr.Zoe)(e) : void 0;
}
function b(e) {
  return { sessions: [], note: { kind: "cloud_list_failed", text: `(${e})` } };
}
function G(e, r) {
  let _ = U().safeParse(e), o = fGr(_.data?.id ?? "");
  if (!_.success || o === void 0) return [];
  let s = _.data, g = (0, import_chunk_t39bs2jr.Un)(r), a = (s.title ?? "").trim(), S = s.tags ?? [], h = s.environment_kind === "bridge", f = (0, import_chunk_t39bs2jr.Un)(s.parent_session_id ?? "") === g;
  if ((0, import_chunk_t39bs2jr.Un)(o) === g || s.session_status === "SESSION_STATUS_ARCHIVED" || S.some((y) => x.test(y)) || (0, import_chunk_vfw28y4s.sit)(a) || a === "" && !h && !f) return [];
  let i = Date.parse(s.updated_at ?? "");
  return [{ id: o, shownId: S.some(import_chunk_865at33z.AIl) ? void 0 : o, title: (0, import_chunk_865at33z.Fdt)(a) || null, lastActive: Number.isNaN(i) ? void 0 : i, workerStatus: H.get(s.session_status ?? void 0), remoteControl: h, unreachableFromHere: false, ...(0, import_chunk_r3e8vdzv.zsn)(s.external_metadata), ...h && s.connection_status === "disconnected" && { offline: true }, ...f && { startedHere: true } }];
}
