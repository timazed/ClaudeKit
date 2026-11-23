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
var chunk_8dmvk15g_exports = {};
__export(chunk_8dmvk15g_exports, {
  OJt: () => OJt,
  dnt: () => dnt,
  q7r: () => q7r,
  qgt: () => qgt,
  sii: () => sii
});
module.exports = __toCommonJS(chunk_8dmvk15g_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_kcy9vg4b = require("/$bunfs/root/chunk-kcy9vg4b.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_qesvcmqe = require("/$bunfs/root/chunk-qesvcmqe.js");
var import_chunk_stxr0bw4 = require("/$bunfs/root/chunk-stxr0bw4.js");
var import_chunk_6qsjjx4s = require("/$bunfs/root/chunk-6qsjjx4s.js");
var import_chunk_a6xqvbh2 = require("/$bunfs/root/chunk-a6xqvbh2.js");
var OJt = /^file_[A-Za-z0-9_]{8,80}$/, I = 8e3, S = 16e3, y = 64, A = 512, E = 40, D = /^https:\/\/([a-z0-9-]+\.)*slack\.com\/archives\/[\x21-\x7e]+$/;
function h(e, r) {
  let n = (0, import_chunk_kx2fp6pc.Og)(e);
  return r ? n.replace(/(?![\n\t])[\p{Cc}\p{Zl}\p{Zp}]/gu, " ") : n.replace(/[\p{Cc}\p{Zl}\p{Zp}]/gu, " ").trim();
}
function dnt(e) {
  return e.replace(new RegExp("(?!\\()\\p{Ps}|<", "gu"), "(").replace(new RegExp("(?!\\))\\p{Pe}|>", "gu"), ")").replace(/[\p{Pi}\p{Pf}]/gu, "'").replace(new RegExp("(?![\\p{Sc}\\p{Extended_Pictographic}\\p{ASCII}])\\p{S}", "gu"), "");
}
function qgt(e) {
  return e === "rc_owner" ? "your user \xB7 Remote Control" : "third-party";
}
async function sii(e) {
  let { sessionId: r, fileId: n, baseUrl: p, getAccessToken: c, getTrustedDeviceToken: s } = e;
  if (!OJt.test(n)) return (0, import_chunk_cqa9hrgx.m)("bridge_inbox_fetch", "malformed_id"), { ok: false, reason: "malformed", detail: "file_id must be a Files API id (file_\u2026)" };
  try {
    (0, import_chunk_t39bs2jr.Mw)(r, "session id");
  } catch {
    return (0, import_chunk_cqa9hrgx.m)("bridge_inbox_fetch", "malformed_session_id"), { ok: false, reason: "malformed", detail: "session id contains unsafe characters" };
  }
  let i = c();
  if (!i) return (0, import_chunk_w578pjby.t)("[bridge] No access token for inbox fetch"), (0, import_chunk_cqa9hrgx.m)("bridge_inbox_fetch", "no_token"), { ok: false, reason: "no_token" };
  let l = `${p}/v1/code/sessions/${(0, import_chunk_t39bs2jr.Pu)(r)}/inbox/${n}`, o;
  try {
    o = await import_chunk_kcy9vg4b.LS.get(l, { headers: (0, import_chunk_6qsjjx4s.pmo)(i, { trustedDeviceToken: await s?.() }), timeout: 1e4, maxContentLength: 262144, validateStatus: (a) => a < 500 });
  } catch (a) {
    return (0, import_chunk_w578pjby.t)(`[bridge] inbox fetch request failed: ${(0, import_chunk_jv7av99m.d)(a)}`), (0, import_chunk_cqa9hrgx.m)("bridge_inbox_fetch", "request_failed"), { ok: false, reason: "request_failed" };
  }
  if (o.status !== 200) {
    let a = (0, import_chunk_6qsjjx4s.pFn)(o.data), f = (0, import_chunk_qesvcmqe.k1)(o.data);
    (0, import_chunk_w578pjby.t)(`[bridge] inbox fetch failed ${o.status}${a ? ` [${a}]` : ""}${f ? `: ${f}` : ""}`);
    let _ = o.status === 403 ? (0, import_chunk_stxr0bw4.oxe)(o.data) : void 0, b = o.status === 404 ? "not_found" : _ === "untrusted_device" ? "untrusted_device" : _ === "session_stale_relogin" ? "relogin" : a === "feature_disabled" ? "feature_disabled" : o.status === 403 ? "forbidden" : "http_error";
    return (0, import_chunk_cqa9hrgx.m)("bridge_inbox_fetch", b), { ok: false, reason: b, detail: (0, import_chunk_qesvcmqe.E1)(o.data) };
  }
  let g = N(o.data, r, n);
  if (g === "wrong_session") return (0, import_chunk_w578pjby.t)("[bridge] inbox fetch: the message names another session \u2014 refusing to relay it"), (0, import_chunk_cqa9hrgx.m)("bridge_inbox_fetch", "wrong_session"), { ok: false, reason: "wrong_session", detail: "that inbox message is not addressed to this session" };
  if (!g) return (0, import_chunk_w578pjby.t)("[bridge] inbox fetch: 200 with an unusable body (missing message/body, a non-UUID message_id, or a file_id other than the one requested)"), (0, import_chunk_cqa9hrgx.m)("bridge_inbox_fetch", "malformed_response"), { ok: false, reason: "malformed", detail: "unexpected response shape" };
  return (0, import_chunk_cqa9hrgx.u)("bridge_inbox_fetch"), { ok: true, message: g.message, envelopedText: q7r(g.message), download: { baseUrl: p, accessToken: i } };
}
function q7r(e, r) {
  let n = { message_id: e.messageId, source: e.source, sender_kind: e.senderKind, body: e.body };
  if (e.senderDisplay) n.sender_display = e.senderDisplay;
  if (e.slackPermalink) n.slack_permalink = e.slackPermalink;
  if (e.createdAt) n.received_at = e.createdAt;
  if (r) n.attachments = r;
  let p = S, c = `<event source="session-inbox" kind="message.content" from="${e.senderKind}" trust="relay" untrusted-keys="body,sender_display,slack_permalink,attachments">
`, s = `
</event>`, i = (0, import_chunk_hr2stdq7.uK)("event", JSON.stringify(n));
  if (c.length + i.length + s.length > p) {
    let l = I;
    do
      l = Math.floor(l / 2), n.body = w(e.bodyHead, l, e.bodyDroppedAtIngest), i = (0, import_chunk_hr2stdq7.uK)("event", JSON.stringify(n));
    while (l > 64 && c.length + i.length + s.length > p);
  }
  return `${c}${i}${s}`;
}
function w(e, r, n = 0) {
  return e.length > r ? `${(0, import_chunk_7cfjrnwy.ee)(e, r)} [\u2026truncated ${e.length - r + n} chars]` : n > 0 ? `${e} [\u2026truncated ${n} chars]` : e;
}
function N(e, r, n) {
  if (!e || typeof e !== "object") return null;
  let c = e.message;
  if (!c || typeof c !== "object") return null;
  let s = c;
  if (s.file_id !== n || typeof s.message_id !== "string" || (0, import_chunk_mzmcvr6c.ht)(s.message_id) === null || typeof s.body !== "string") return null;
  if (typeof s.session_id !== "string" || s.session_id === "") return null;
  let i;
  try {
    (0, import_chunk_t39bs2jr.Mw)(s.session_id, "session id"), i = (0, import_chunk_t39bs2jr.Pu)(s.session_id);
  } catch {
    return null;
  }
  if (i !== (0, import_chunk_t39bs2jr.Pu)(r)) return "wrong_session";
  let l = s.message_id.toLowerCase(), o = C(s.sender_kind), g = o === "rc_owner" ? (0, import_chunk_a6xqvbh2.NH)({ file_attachments: s.attachments }) : [], a = s.slack && typeof s.slack === "object" ? s.slack : void 0, f = a && typeof a.permalink === "string" ? h(a.permalink, false) : void 0, _ = typeof s.created_at === "string" ? s.created_at : void 0, b = typeof s.sender_display === "string" ? dnt(h(s.sender_display, false)) : "", x = b.length > y ? `${(0, import_chunk_7cfjrnwy.ee)(b, y)}\u2026` : b;
  return { message: { messageId: l, senderKind: o, senderDisplay: x || void 0, ...g.length > 0 && { attachments: g }, source: k(s.source, "SESSION_INBOX_SOURCE_"), ...P(h(s.body, true)), slackPermalink: f && f.length <= A && D.test(f) ? f : void 0, createdAt: _ && _.length <= E && /^\d{4}-\d{2}-\d{2}T[0-9:.]+(Z|[+-]\d{2}:\d{2})$/.test(_) ? _ : void 0 } };
}
var R = ["slack_user", "account", "rc_owner"];
function C(e) {
  let r = k(e, "SESSION_INBOX_SENDER_KIND_");
  return R.find((n) => n === r) ?? "unknown";
}
function k(e, r) {
  if (typeof e !== "string") return "";
  let n = e.startsWith(r) ? e.slice(r.length) : e;
  return /^[A-Za-z_]{1,32}$/.test(n) && !n.endsWith("UNSPECIFIED") ? n.toLowerCase() : "";
}
function P(e) {
  if (e.length <= I) return { body: e, bodyHead: e, bodyDroppedAtIngest: 0 };
  let r = (0, import_chunk_7cfjrnwy.ee)(e, I), n = e.length - r.length;
  return { body: `${r} [\u2026truncated ${n} chars]`, bodyHead: r, bodyDroppedAtIngest: n };
}
