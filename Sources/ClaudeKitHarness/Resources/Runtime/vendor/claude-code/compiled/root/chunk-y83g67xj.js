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
var chunk_y83g67xj_exports = {};
__export(chunk_y83g67xj_exports, {
  GXl: () => GXl,
  T9o: () => T9o,
  jni: () => jni,
  wzl: () => wzl,
  zXl: () => zXl
});
module.exports = __toCommonJS(chunk_y83g67xj_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_gk0jv3qt = require("/$bunfs/root/chunk-gk0jv3qt.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_bt5spb39 = require("/$bunfs/root/chunk-bt5spb39.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_1dwdshew = require("/$bunfs/root/chunk-1dwdshew.js");
var import_chunk_jbjjrhxt = require("/$bunfs/root/chunk-jbjjrhxt.js");
var import_chunk_ag73x1p3 = require("/$bunfs/root/chunk-ag73x1p3.js");
var import_chunk_5fa0b8dm = require("/$bunfs/root/chunk-5fa0b8dm.js");
var import_chunk_wbm3qtjx = require("/$bunfs/root/chunk-wbm3qtjx.js");
var import_chunk_adxkgb36 = require("/$bunfs/root/chunk-adxkgb36.js");
var import_chunk_6ft3g9m6 = require("/$bunfs/root/chunk-6ft3g9m6.js");
var import_chunk_w1zyy3zs = require("/$bunfs/root/chunk-w1zyy3zs.js");
var import_chunk_1re1dxt8 = require("/$bunfs/root/chunk-1re1dxt8.js");
var import_chunk_q1sh0fgd = require("/$bunfs/root/chunk-q1sh0fgd.js");
var import_chunk_ye486ddj = require("/$bunfs/root/chunk-ye486ddj.js");
var import_chunk_e1ww8aev = require("/$bunfs/root/chunk-e1ww8aev.js");
var import_chunk_1pan7v6b = require("/$bunfs/root/chunk-1pan7v6b.js");
var import_chunk_ts09sys6 = require("/$bunfs/root/chunk-ts09sys6.js");
var import_chunk_z688m88d = require("/$bunfs/root/chunk-z688m88d.js");
var import_path = require("path");
var v = [[import_chunk_6mfepmbb.TKn, "home_claude"], [import_chunk_6mfepmbb.qR, "outputs"], [import_chunk_6mfepmbb.p3, "outputs"], [import_chunk_6mfepmbb.yD, "uploads"]];
function wzl(e) {
  let n = import_path.posix.normalize(e);
  return v.find(([o]) => n.startsWith(o + import_path.posix.sep))?.[1] ?? "other";
}
function g(e, n) {
  let o = (0, import_chunk_wbm3qtjx.bJt)(e.meta);
  if (o === void 0) return;
  let { client: r } = e, i = (0, import_chunk_f9x2f6cx.Y)() ? import_chunk_gk0jv3qt.pq.peek(n)?.host : void 0, a = (0, import_chunk_f9x2f6cx.Y)() ? (0, import_chunk_gk0jv3qt.wUe)(i, r) : r.config.scope === "claudeai" || (0, import_chunk_qdcbcsg7.nJe)(r.config) !== void 0 || (0, import_chunk_865at33z.oD)(r.config) ? import_chunk_w1zyy3zs.D9e.find((d) => (0, import_chunk_ts09sys6.kme)(r, d)) : void 0;
  if (a === void 0 || !(0, import_chunk_865at33z.b)("tengu_walnut_tiller", true)) return;
  return { fileInput: { tool: e.name, arg: o.arg, feature: "mcp_file_input_upload", local: o.local, ref: o.ref, refWord: o.ref, maxFiles: import_chunk_1re1dxt8.ztt, nothingDone: `${e.name} was not called.` }, server: a, host: i };
}
async function GXl(e, n, ...[o, r]) {
  let i = n ? await n(o, r) : { result: true }, a = i.result ? g(e, r.session) : void 0, d = a && (0, import_chunk_6ft3g9m6.$1a)(o, e.schema, a.fileInput, r);
  if (d === void 0) return i;
  return T(d.code), { result: false, message: d.error, errorCode: 2 };
}
async function jni(e) {
  let n = g(e.listed, e.session);
  if (n === void 0) return e.input;
  let o = {}, r = w(e, n, o), { fileInput: i } = n, a = (0, import_chunk_adxkgb36.qni)(e.session, e.toolUseId), d = a !== void 0 && (0, import_chunk_z688m88d.Zt)(a.input, e.input), s, y = n.server.serverId === import_chunk_qdcbcsg7.aO ? import_chunk_bt5spb39.Qtt.peek(e.session) : void 0;
  if (d) await y?.filesHashed?.(e.toolUseId, a.files), s = { ...await (0, import_chunk_6ft3g9m6.iri)(r, a), input: e.input };
  else if (a !== void 0) s = { error: `The arguments of this call changed while it waited for approval. Call ${i.tool} again, giving each file by its "${i.local}". ${i.nothingDone}`, code: "input_changed" };
  else {
    let c;
    if (s = await (0, import_chunk_6ft3g9m6.ori)({ ...r, slugFor: async (_) => c = await y?.filesHashed?.(e.toolUseId, _) }), s.error !== void 0) {
      let _ = c !== void 0 && s.error.includes("HTTP 404");
      if (y?.reservedPageLeft?.(e.toolUseId, _), _) o.facts = void 0, s = await (0, import_chunk_6ft3g9m6.ori)({ ...r, slugFor: async (p) => {
        await y?.filesHashed?.(e.toolUseId, p);
        return;
      } });
    }
  }
  if (s.error !== void 0) {
    let c = e.allowGivenBy?.toolUseId === e.toolUseId ? e.allowGivenBy?.approver : void 0, _ = e.permissionPhase?.pipeline?.result, p = c === "hook" || c === "classifier" ? c : c === "user" ? "host_prompt" : _?.behavior === "ask" ? "prompt" : void 0, F = { ...o.facts, ...p !== void 0 && { approved_by: (0, import_chunk_78g0060s.f)(p) }, decisionReasonType: (0, import_chunk_78g0060s.f)(_?.decisionReason?.type ?? "unknown") };
    throw T(s.code, { ...F, permissionMode: (0, import_chunk_78g0060s.f)(e.toolPermissionContext.mode) }), new import_chunk_yz5b8aaa.EXe(s.error, s.code ?? "unexpected", F);
  }
  if (s.input === void 0) return e.input;
  return (0, import_chunk_cqa9hrgx.u)("mcp_file_input_upload"), s.input;
}
function zXl(e) {
  let n = g(e.listed, e.session), o = n && e.input[n.fileInput.arg];
  if (n === void 0 || !Array.isArray(o) || !o.some((i) => (0, import_chunk_0jve1fep.Le)(i) && n.fileInput.local in i)) return;
  let r = async (i, a) => {
    let d = {}, s = await (0, import_chunk_6ft3g9m6.sri)(w({ ...e, input: i }, n, d));
    if (s === void 0 || "error" in s) return T(s?.code, { ...d.facts, ...a !== void 0 && { approved_by: (0, import_chunk_78g0060s.f)(a) }, permissionMode: (0, import_chunk_78g0060s.f)(e.toolPermissionContext.mode) }), { error: s?.error ?? `${n.fileInput.tool} names no files.` };
    let y = (0, import_chunk_1pan7v6b.val)(s.files);
    return (0, import_chunk_adxkgb36.Vni)(e.session, e.toolUseId, s), { input: s.input, description: y, release: async () => (0, import_chunk_adxkgb36.Q8r)(e.session, e.toolUseId), files: s.files.map(({ path: c, sha256: _ }) => ({ sha256: _, folder: wzl(c) })) };
  };
  return { prepare: () => r(e.input), prepareAgain: ({ slug: i }) => r(!(0, import_chunk_6ft3g9m6.QXt)(e.input.slug) || typeof i !== "string" || i === "" ? e.input : { ...e.input, slug: i }, "host_prompt") };
}
function w({ listed: e, input: n, toolPermissionContext: o, callTool: r, signal: i, toolUseId: a, nobodyAsked: d }, { fileInput: s, server: y, host: c }, _) {
  return { input: n, schema: e.schema, words: s, maxFileBytes: import_chunk_1re1dxt8.QAn, toolPermissionContext: o, workingFolderElsewhere: () => c === void 0 ? void 0 : (0, import_chunk_f9x2f6cx.VS)()?.directory?.path, gate: () => {
    let p = (0, import_chunk_2nv4wrez.ba)(y.policy);
    if (p !== null) return p === "cache_miss" || p === "route_missing" ? "policy_unread" : "policy_denied";
    if (!(0, import_chunk_qdcbcsg7.mLl)(e.client.config)) return "uploads_off";
    return (0, import_chunk_ye486ddj.EW)() ?? (c?.ruleItCannotApply(o) === void 0 ? c === void 0 || T9o({ serverName: e.client.name, toolName: e.name }, o) ? void 0 : "no_server_policy" : "rule_not_applicable");
  }, files: c?.files ?? (0, import_chunk_5fa0b8dm.ysr)({ screen: async (p) => {
    try {
      return await (0, import_chunk_e1ww8aev.D7r)(p, o);
    } catch (F) {
      _.facts = (0, import_chunk_e1ww8aev.bsr)(p, (0, import_chunk_e1ww8aev.L7r)(F), o), (0, import_chunk_w578pjby.t)(`[file inputs] a path was rejected: ${F instanceof import_chunk_jv7av99m.A ? F.telemetryMessage : "not readable"}`);
      return;
    }
  }, maxFileBytes: import_chunk_1re1dxt8.QAn, maxTotalBytes: import_chunk_1re1dxt8.Eor, uploadPathPrefix: y.uploadPathPrefix, namesResolvedPaths: true, acceptsOwnJobTmp: y.acceptsOwnJobTmp, onRejectedPastScreen: (p, F) => {
    _.facts = (0, import_chunk_e1ww8aev.bsr)(p, F, o);
  }, onPutRequestError: (p) => {
    _.facts = p;
  } }), uploadsMayOverlap: y.toolsWhoseUploadsMayOverlap.includes(e.name), authorize: (p) => {
    let F = performance.now();
    return (0, import_chunk_ag73x1p3.yBa)(a, import_chunk_q1sh0fgd.wJt, () => P(r, p, i), d === true ? { [import_chunk_gk0jv3qt.rye]: true } : void 0).catch((I) => {
      throw _.facts = (0, import_chunk_1dwdshew.vyo)(I, F), (0, import_chunk_6ft3g9m6.kor)(I) ? I : new import_chunk_jv7av99m.A((0, import_chunk_jbjjrhxt.gl)(I, e.client.config), "MCP tool file input: the ask of the server failed");
    });
  }, signal: i };
}
function T9o(e, { alwaysAllowRules: n, alwaysAskRules: o, alwaysDenyRules: r }) {
  let i = (0, import_chunk_px0hhsq7.lr)(e.serverName, e.toolName);
  return [n, o, r].some((a) => (a.mcpServerPolicy ?? []).some((d) => d === i || (0, import_chunk_px0hhsq7.bqt)(d, { name: i, mcpInfo: e })));
}
async function P(e, n, o) {
  try {
    return await e(import_chunk_q1sh0fgd.wJt, n);
  } catch (r) {
    if (!(r instanceof import_chunk_yz5b8aaa.iK)) throw r;
    (0, import_chunk_cqa9hrgx.l)("mcp_session_recovery", r.expiryKind);
  }
  try {
    let r = await e(import_chunk_q1sh0fgd.wJt, n);
    return (0, import_chunk_cqa9hrgx.u)("mcp_session_recovery"), r;
  } catch (r) {
    if (r instanceof import_chunk_yz5b8aaa.iK) (0, import_chunk_cqa9hrgx.m)("mcp_session_recovery", "session_retry_exhausted");
    else if (!o.aborted) (0, import_chunk_cqa9hrgx.m)("mcp_session_recovery", "retry_failed_other");
    throw r;
  }
}
function T(e, n) {
  if ((0, import_chunk_w578pjby.t)(`[file inputs] not attached: ${e ?? "unexpected"}`), e === "input_schema" || e === "resolves_elsewhere" || e === "write_failed_same_response") (0, import_chunk_cqa9hrgx.l)("mcp_file_input_upload", e);
  else if (e !== "canceled") (0, import_chunk_cqa9hrgx.m)("mcp_file_input_upload", e ?? "unexpected", n);
}
