const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_3nqvc94p_exports = {};
__export(chunk_3nqvc94p_exports, {
  E4o: () => E4o,
  Oqe: () => Oqe,
  RY: () => RY,
  S0a: () => S0a,
  T4o: () => T4o,
  X$e: () => X$e,
  Y$e: () => Y$e,
  Z3r: () => Z3r,
  _0a: () => _0a,
  _Cn: () => _Cn,
  _f: () => _f,
  b0a: () => b0a,
  e5r: () => e5r,
  ftt: () => ftt,
  hnr: () => hnr,
  nXt: () => nXt,
  p6: () => p6,
  sTe: () => sTe,
  v4o: () => v4o,
  wQs: () => wQs,
  y0a: () => y0a
});
module.exports = __toCommonJS(chunk_3nqvc94p_exports);
var import_chunk_nett2qjd = require("/$bunfs/root/chunk-nett2qjd.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_0wh73s24 = require("/$bunfs/root/chunk-0wh73s24.js");
var import_crypto = require("crypto");
var _Cn = 15e3, j = 12e4, O = 6e4, H = 3e4, k = 50;
function U(e) {
  return e === "public" || e === "private" ? e : void 0;
}
function C(e) {
  if (e.closed === true) return "that project is paused or archived. Pick one of your personal projects, or create a new one";
  if (e.visibility === "private") return null;
  return typeof e.visibility === "string" && e.visibility !== "" ? "that project is shared. Pick one of your personal projects, or create a new one" : "the server did not say whether that project is personal. Pick one of your personal projects, or create a new one";
}
class _f extends import_chunk_jv7av99m.A {
  status;
  telemetryCode;
  detail;
  serverWord;
  constructor(e, n, t, o = "request_failed", i) {
    super(`Could not ${e}: ${t}`, "projects channel request failed");
    this.name = "ChannelApiError", this.status = n, this.telemetryCode = o, this.detail = t, this.serverWord = i;
  }
}
function p6(e) {
  return !(e instanceof _f) || e.telemetryCode === "request_failed" && (e.status === null || e.status >= 500 || e.status === 408 || e.status === 429);
}
var L = /* @__PURE__ */ new Set(["ECONNREFUSED", "ENOTFOUND", "EAI_AGAIN", "EHOSTUNREACH", "ENETUNREACH", "EADDRNOTAVAIL", "ERR_PROXY_TUNNEL"]);
function hnr(e) {
  return e instanceof import_chunk_865at33z.U0 || L.has((0, import_chunk_jv7av99m.w)(e) ?? "");
}
function _0a(e) {
  if (hnr(e)) return true;
  if (!(e instanceof _f)) return false;
  switch (e.telemetryCode) {
    case "policy_disabled":
    case "invalid_input":
    case "not_a_target":
      return true;
    case "bad_response":
      return false;
    case "auth_or_access":
    case "request_failed":
      return e.status === null ? e.telemetryCode === "auth_or_access" : e.status >= 400 && e.status < 500 && e.status !== 408 && e.status !== 429;
  }
}
function D(e) {
  switch (e.reason) {
    case "data-residency":
      return "Projects are only available on the first-party Anthropic API provider.";
    case "essential-traffic-only":
      return "Projects are disabled when only essential traffic is allowed (CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC).";
    case "no-auth":
      return `${e.detail}. Projects require a Claude.ai login (/login).`;
  }
}
var RY = /^chan_[A-Za-z0-9_-]{1,120}$/, B = /^[a-z]{2,12}_[A-Za-z0-9_-]{1,120}$/;
function E4o(e, n, t) {
  if (!RY.test(e)) throw new _f(t, null, "the project id has an unexpected shape", "invalid_input");
  return `/v1/code/channels/${encodeURIComponent(e)}${n}`;
}
function v4o(e) {
  let n = e;
  if (typeof n === "string") try {
    n = (0, import_chunk_w578pjby.te)(n);
  } catch {
    n = null;
  }
  let t = n?.error;
  return typeof t === "object" && t !== null ? t : null;
}
function b(e) {
  return typeof e === "string" && /^[a-z][a-z0-9_]{0,63}$/.test(e) ? e : void 0;
}
function I(e) {
  let n = v4o(e);
  return b(n?.resource) ?? b(n?.reason);
}
async function Y$e(e) {
  return { headers: { ...e, ...await (0, import_chunk_865at33z.YU)() }, maxRedirects: 0 };
}
function F(e, n) {
  let t = e === 403 ? I(n) : void 0;
  if (t !== "untrusted_device" && t !== "session_stale_relogin") return;
  Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-y8vskpae.js"))).then(({ clearTrustedDeviceTokenCache: o }) => o()).catch(() => {
  });
}
function z(e, n, t) {
  let o = v4o(n)?.message;
  return typeof o === "string" && o !== "" ? (0, import_chunk_tp3c5q2s.Ft)(o, t) : `the server responded with status ${e}`;
}
function sTe(e, n) {
  if (!e.ok) throw new _f(n, null, D(e), e.reason === "no-auth" ? "auth_or_access" : "policy_disabled");
  if (e.status >= 300) throw F(e.status, e.data), new _f(n, e.status, z(e.status, e.data), e.status === 401 || e.status === 403 ? "auth_or_access" : "request_failed", I(e.data));
  return { status: e.status, data: e.data };
}
function q(e, n) {
  let { data: t } = sTe(e, n);
  if (!(0, import_chunk_0jve1fep.Le)(t)) throw new _f(n, null, "the server returned an unexpected shape", "bad_response");
  return t;
}
function W(e) {
  if (typeof e !== "string") return null;
  let n = Date.parse(e);
  return Number.isNaN(n) ? null : n;
}
function p(e) {
  return typeof e === "string" && e !== "";
}
function x(e) {
  return (0, import_chunk_0jve1fep.Le)(e) && p(e.account_id) ? e.account_id : void 0;
}
function G(e) {
  let n = e, o = (Array.isArray(n?.data) ? n.data : []).flatMap((s) => {
    let r = s, c = x(r?.membership);
    return typeof r?.id === "string" && typeof r.name === "string" ? [{ id: r.id, name: r.name, lastMessageAtMs: W(r.last_message_at), coordinatorSessionId: T(r), visibility: U(r.visibility), ...(r.archived_at != null || r.disabled_at != null) && { closed: true }, ...Array.isArray(r.caller_relations) && { callerOwns: r.caller_relations.some((d) => typeof d === "string" && d.toLowerCase() === "owner") }, ...c !== void 0 && { callerAccountId: c }, ...p(r.topic) && { topic: r.topic }, ...p(r.icon) && { icon: r.icon }, ...p(r.color) && { color: r.color }, ...p(r.disabled_at) && { pausedAt: r.disabled_at }, ...p(r.last_activity_at) && { lastActivityAt: r.last_activity_at }, ...p(r.created_at) && { createdAt: r.created_at }, ...false, ...typeof r.tasks_enabled === "boolean" && { tasksEnabled: r.tasks_enabled }, ...typeof r.has_unread === "boolean" && { hasUnread: r.has_unread }, ...typeof r.has_working_session === "boolean" && { hasWorkingSession: r.has_working_session } }] : [];
  }), i = b(n?.create_refusal_reason), a = n?.create_refusal_message;
  return { channels: o, nextCursor: typeof n?.next_cursor === "string" && n.next_cursor !== "" ? n.next_cursor : null, ...i !== void 0 && { createRefusal: { reason: i, message: (typeof a === "string" && a !== "" ? (0, import_chunk_tp3c5q2s.Ft)(a, 200) : "the server would refuse a new project for this account").replace(/\.+$/, "") } } };
}
async function T4o(e, n, t, o, i) {
  let a = new URLSearchParams({ scope: "joined", limit: String(k), ...e !== null && { cursor: e }, ...o && { check_create: "true" } }), s = await import_chunk_865at33z.zt.get(`/v1/code/channels?${a}`, { auth: "teleport-org", ...await Y$e(i), validateStatus: () => true, timeout: _Cn, signal: n, credentials: t }), r = q(s, "list your Projects");
  if (!Array.isArray(r.data)) throw new _f("list your Projects", null, "the server's answer has no list of projects", "bad_response");
  return G(r);
}
function ftt(e) {
  return (0, import_chunk_tp3c5q2s.Xb)(e.replace(new RegExp("\\p{Default_Ignorable_Code_Point}", "gu"), "").normalize("NFKC")).replace(/ {2,}/g, " ").trim().toLowerCase();
}
async function y0a(e, n, t, o) {
  try {
    let i = await import_chunk_865at33z.zt.post(`/v1/code/channels/${encodeURIComponent(e)}/messages`, { body: n.body, client_message_id: n.clientMessageId, ...n.replyToMessageId !== void 0 && { reply_to_message_id: n.replyToMessageId }, ...{} }, { auth: "teleport-org", ...await Y$e(), validateStatus: () => true, timeout: n.attachments?.length ? O : _Cn, maxRedirects: 0, signal: t, credentials: o }), { data: a } = sTe(i, "send the message"), s = a;
    if (typeof s?.message_id !== "string" || typeof s.thread_root_id !== "string") throw new _f("send the message", null, "the server response was missing the message id", "bad_response");
    return (0, import_chunk_cqa9hrgx.u)("projects_send"), { messageId: s.message_id, threadRootId: s.thread_root_id, deduplicated: s.deduplicated === true, ...p(s.private_to_account_id) && { isPrivate: true }, ...p(s.owner_type) && { ownerType: s.owner_type } };
  } catch (i) {
    if (t?.aborted !== true) (0, import_chunk_cqa9hrgx.m)("projects_send", i instanceof _f ? i.telemetryCode : "request_failed");
    throw i;
  }
}
function R(e) {
  let n = e, t = n?.channel ?? n;
  if (typeof t?.id !== "string" || !RY.test(t.id)) return null;
  return { id: t.id, name: typeof t.name === "string" ? (0, import_chunk_tp3c5q2s.Ft)(t.name, 80) : "", coordinatorSessionId: T(t) };
}
function T(e) {
  let n = (t) => typeof t === "string" && B.test(t) ? t : null;
  return n(e.channel_session_id) ?? n(e.overview_session_id);
}
async function Z3r(e, n, t) {
  try {
    let o = await import_chunk_865at33z.zt.post("/v1/code/channels", { visibility: "private", name: e.name, icon: e.icon ?? "Code", ...e.color !== void 0 && e.color !== "" && { color: e.color }, ...e.topic !== void 0 && e.topic !== "" && { topic: e.topic }, ...e.instructions !== void 0 && e.instructions !== "" && { system_prompt_addendum: e.instructions }, ...e.defaultEnvironmentId !== void 0 && e.defaultEnvironmentId !== "" && { default_environment_id: e.defaultEnvironmentId } }, { auth: "teleport-org", ...await Y$e(), validateStatus: () => true, timeout: e.waitsForSession ? j : _Cn, ...e.waitsForSession && { maxRedirects: 0 }, signal: n, credentials: t }), { data: i } = sTe(o, "create the project"), a = R(i);
    if (a === null) throw new _f("create the project", null, "the server response was missing the project id", "bad_response");
    return (0, import_chunk_cqa9hrgx.u)("projects_create"), a;
  } catch (o) {
    if (n?.aborted !== true) (0, import_chunk_cqa9hrgx.m)("projects_create", o instanceof _f ? o.telemetryCode : "request_failed");
    throw o;
  }
}
async function Oqe(e, n, t) {
  return (await K(e, "owner", n, t)).channel;
}
var S = "that project was not found, or this login is not a member of it: join it on the web first";
async function K(e, n, t, o, i = false) {
  let s = E4o(e, i ? "?include_members=true" : "", "look up the project");
  try {
    let r = await import_chunk_865at33z.zt.get(s, { auth: "teleport-org", ...await Y$e(), validateStatus: () => true, timeout: _Cn, signal: t, credentials: o });
    if (n === "member" && r.ok && r.status === 404) throw new _f("look up the project", 404, S, "auth_or_access");
    let c = sTe(r, "look up the project").data, d = R(c);
    if (d === null) throw new _f("look up the project", null, "the server returned an unexpected shape", "bad_response");
    let l = c?.channel ?? c, h = (g) => typeof g === "string" ? g.toLowerCase() : "", y = Array.isArray(l?.caller_relations) ? l.caller_relations : [], f = y.some((g) => h(g) === "owner") || h(l?.membership?.role) === "owner";
    if (n === "owner" && !f) throw new _f("look up the project", null, "your Claude account does not own that project", "auth_or_access");
    if (n === "member" && !y.some((g) => h(g) === "member")) throw new _f("look up the project", null, S, "auth_or_access");
    let v = n === "owner" ? C({ visibility: l?.visibility, closed: l?.archived_at != null || l?.disabled_at != null }) : null;
    if (v !== null) throw new _f("look up the project", null, v, "not_a_target");
    if (n === "member" && l?.archived_at != null) throw new _f("look up the project", null, "that project is archived", "auth_or_access", "channel_archived");
    if (n === "member" && l?.disabled_by_plan === true) throw new _f("look up the project", null, "that project's organization is on a plan under which Claude does no work in Projects", "auth_or_access", "channel_disabled_by_plan");
    return (0, import_chunk_cqa9hrgx.u)("projects_channel_get"), { channel: d, disabledAt: l?.disabled_at, agentId: l?.agent_id, visibility: l?.visibility, members: l?.members, membersTruncated: l?.members_truncated, callerAccountId: x(l?.membership), record: l };
  } catch (r) {
    if (t?.aborted !== true) (0, import_chunk_cqa9hrgx.m)("projects_channel_get", r instanceof _f ? r.telemetryCode : "request_failed");
    throw r;
  }
}
function V(e) {
  let n = e, t = n?.config ?? n;
  return { defaultModel: typeof t?.default_model === "string" && t.default_model !== "" ? (0, import_chunk_tp3c5q2s.Ft)(t.default_model, 80) : null, defaultSourceUrls: Array.isArray(t?.default_source_urls) ? t.default_source_urls.filter((o) => typeof o === "string").slice(0, 50).map((o) => (0, import_chunk_tp3c5q2s.Ft)(o, 300)) : [] };
}
async function S0a(e, n, t, o) {
  let i = E4o(e, "/config", "update the project settings");
  try {
    let a = await import_chunk_865at33z.zt.patch(i, { ...n.defaultSourceUrls !== void 0 && { default_source_urls: n.defaultSourceUrls } }, { auth: "teleport-org", ...await Y$e(), validateStatus: () => true, timeout: _Cn, signal: t, credentials: o }), { data: s } = sTe(a, "update the project settings");
    return (0, import_chunk_cqa9hrgx.u)("projects_config_update"), V(s);
  } catch (a) {
    if (t?.aborted !== true) (0, import_chunk_cqa9hrgx.m)("projects_config_update", a instanceof _f ? a.telemetryCode : "request_failed");
    throw a;
  }
}
var P = 1;
function J(e, n) {
  let o = (typeof e === "string" ? e : (0, import_chunk_w578pjby._)(e)).trim();
  if (o === "") throw new _f(n, null, "the server reply was empty", "bad_response");
  let i = o.startsWith("{") || o.startsWith("[") ? [o] : (0, import_chunk_nett2qjd.HMe)(void 0, Buffer.from(`${o}

`)).events.flatMap((d) => d.kind === "event" && d.data?.trim() ? [d.data] : []), a = false, s = null;
  for (let d of i) {
    let l;
    try {
      l = (0, import_chunk_w578pjby.te)(d);
    } catch {
      a = true;
      continue;
    }
    let h = Array.isArray(l) ? l : [l];
    for (let y of h) {
      let f = y;
      if (f !== null && typeof f === "object" && f.id === P && (f.result !== void 0 || f.error !== void 0)) s = f;
    }
  }
  if (s === null) throw new _f(n, null, a ? "the server reply was not JSON" : "the server reply carried no response to the call", "bad_response");
  if (s.error !== void 0) {
    let d = s.error?.message;
    throw new _f(n, null, typeof d === "string" && d !== "" ? (0, import_chunk_tp3c5q2s.Ft)(d) : "the server returned an RPC error", "bad_response");
  }
  let c = (Array.isArray(s.result?.content) ? s.result.content : []).map((d) => {
    let l = d;
    return l?.type === "text" && typeof l.text === "string" ? l.text : "";
  }).join(`
`).trim();
  if (s.result?.isError === true) throw new _f(n, null, c !== "" ? (0, import_chunk_tp3c5q2s.Ft)(c) : "the tool call did not succeed", "bad_response");
  return c;
}
async function b0a(e, n, t, o) {
  try {
    let a = await import_chunk_865at33z.zt.post("/v1/code/mcp/meta", { jsonrpc: "2.0", id: P, method: "tools/call", params: { name: "send_message", arguments: { session_id: e, message: n, priority: "now" } } }, { auth: "teleport-org", validateStatus: () => true, timeout: H, signal: t, credentials: o, ...await Y$e({ Accept: "application/json, text/event-stream" }), responseType: "text" }), { data: s } = sTe(a, "hand the summary to the project");
    J(s, "hand the summary to the project"), (0, import_chunk_cqa9hrgx.u)("projects_handoff");
  } catch (a) {
    if (t?.aborted !== true) (0, import_chunk_cqa9hrgx.m)("projects_handoff", a instanceof _f ? a.telemetryCode : "request_failed");
    throw a;
  }
}
function e5r() {
  return (0, import_crypto.randomUUID)();
}
var M = Math.ceil(import_chunk_0wh73s24.rXt / k);
async function nXt(e, n) {
  let t = [], o = /* @__PURE__ */ new Map(), i = null, a = false, s;
  for (let r = 0; r < M; r++) {
    let c = await T4o(i, e, n, r === 0 ? true : void 0);
    if (r === 0) s = c.createRefusal;
    for (let d of c.channels) if (wQs(d)) t.push({ id: d.id, name: (0, import_chunk_xfj2cwfv.Pi)((0, import_chunk_tp3c5q2s.Ft)(d.name, 80)), lastMessageAtMs: d.lastMessageAtMs }), o.set(d.id, ftt(d.name));
    if (i = c.nextCursor, i === null) break;
    a = r === M - 1;
  }
  return { projects: X(t).slice(0, import_chunk_0wh73s24.rXt), truncated: a, typedNames: o, ...s !== void 0 && { createRefusal: s } };
}
var X$e = "projects_unavailable";
function wQs(e) {
  return e.callerOwns !== false && C(e) === null && RY.test(e.id);
}
function X(e) {
  return e.toSorted((n, t) => (t.lastMessageAtMs ?? -1) - (n.lastMessageAtMs ?? -1));
}
