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
var chunk_tzhcnzkd_exports = {};
__export(chunk_tzhcnzkd_exports, {
  $tt: () => $tt,
  CP: () => CP,
  Dgt: () => Dgt,
  Ftt: () => Ftt,
  Hgt: () => Hgt,
  I8r: () => I8r,
  IAn: () => IAn,
  J5o: () => J5o,
  MAn: () => MAn,
  O8r: () => O8r,
  OAn: () => OAn,
  PAn: () => PAn,
  Q5o: () => Q5o,
  RMe: () => RMe,
  Utt: () => Utt,
  X5o: () => X5o,
  XFa: () => XFa,
  XJ: () => XJ,
  Y5o: () => Y5o,
  YFa: () => YFa,
  Z5o: () => Z5o,
  aor: () => aor,
  bzl: () => bzl,
  dor: () => dor,
  e9o: () => e9o,
  ior: () => ior,
  lor: () => lor,
  pni: () => pni,
  qDt: () => qDt,
  t9o: () => t9o,
  zXt: () => zXt
});
module.exports = __toCommonJS(chunk_tzhcnzkd_exports);
var import_chunk_rg2p81t1 = require("/$bunfs/root/chunk-rg2p81t1.js");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_net = require("net");
var import_os = require("os");
var import_path = require("path");
var import_crypto2 = require("crypto");
function MAn(e, t, n) {
  if (e.length === 0) return { kind: "none" };
  if (t) {
    let o = e.find((a) => a.deviceId === t);
    if (o) return { kind: "select", extension: o, reason: "persisted" };
  }
  if (e.length === 1) return { kind: "select", extension: e[0], reason: "only" };
  let r = n ? e.filter((o) => n.has(o.deviceId)) : [], [i, s] = r;
  if (i && !s && n?.get(i.deviceId) === "live") return { kind: "select", extension: i, reason: "local" };
  return { kind: "ask", candidates: [...r, ...e.filter((o) => !r.includes(o))], localCount: r.length };
}
function XFa(e, t) {
  let n = e.map((r) => r.deviceId).filter((r) => t?.has(r));
  return new Set(n.some((r) => t?.get(r) === "live") ? n : []);
}
function zXt(e) {
  let t;
  try {
    t = e?.();
  } catch {
    return Promise.resolve(void 0);
  }
  if (!t) return Promise.resolve(void 0);
  return new Promise((n) => {
    let r = setTimeout(() => n(void 0), import_chunk_rg2p81t1.QUa);
    t.then((i) => {
      clearTimeout(r), n(i);
    }, () => {
      clearTimeout(r), n(void 0);
    });
  });
}
var dt = ["permission_denied_user", "permission_prompt_timed_out", "permission_prompt_unavailable", "permission_handler_missing", "plan_rejected_user", "authentication_failed", "session_expired", "no_tabs_available", "domain_blocked", "category_lookup_error", "navigation_blocked", "navigation_blocked_mid_call", "tab_not_found", "tab_zero_size", "security_check_failed", "site_not_permitted", "input_invalid", "coordinate_out_of_bounds", "ref_stale", "element_unsupported", "upload_caller_outdated", "injected_script_failed", "chrome_protected_page", "page_loading", "chrome_refused_page_access", "cdp_timeout", "debugger_attach_failed", "debugger_detached", "page_navigated_or_closed", "blocked_by_other_extension", "js_result_not_serializable", "js_permission_denied", "js_timeout", "js_execution_error", "js_exception", "computer_permission_denied", "computer_element_not_found", "computer_action_failed", "computer_exception", "get_page_text_permission_denied", "get_page_text_no_content", "get_page_text_script_error", "get_page_text_exception", "screenshot_bytes_unavailable", "find_permission_denied", "find_no_match", "find_exception", "navigate_permission_denied", "navigate_beforeunload_blocked", "navigate_exception", "tab_create_no_group", "tab_create_group_gone", "tab_create_exception", "tab_close_invalid_params", "tab_close_no_group", "tab_close_group_gone", "tab_close_not_found", "tab_close_not_in_group", "tab_close_beforeunload_blocked", "tab_close_still_open", "tab_close_exception", "batch_disabled", "batch_invalid_input", "batch_no_tools_context", "batch_tab_outside_group", "batch_cancelled", "batch_domain_blocked", "batch_navigation_blocked", "batch_unknown_tool", "batch_permission_required", "batch_exception", "batch_subaction_failed", "tabs_context_exception", "tool_removed", "tool_execution_exception", "execution_error"], ut = /* @__PURE__ */ new Map([["page_zoom_shortcut_unsupported", "computer_zoom_shortcut_unsupported"], ["navigate_blocked_domain", "domain_blocked"], ["navigate_category_lookup_error", "category_lookup_error"]]), pt = new Map([...dt.map((e) => [e, e]), ...ut]), ft = /* @__PURE__ */ new Set(["tool_execution_exception", "execution_error", "navigation_blocked_mid_call", "find_exception", "navigate_exception", "tab_create_exception", "tab_close_exception", "tabs_context_exception", "js_exception", "computer_action_failed", "computer_exception", "get_page_text_exception"]), v = String.raw`(?:No tab with id: \d+|Tab \d+ (?:no longer exists|is not in the same group))`, gt = [{ pattern: /^Permission denied for JavaScript execution/, errorType: "js_permission_denied" }, { pattern: /^JavaScript execution error: Execution timeout: Code exceeded \d+-second limit$/, errorType: "js_timeout" }, { pattern: /^JavaScript execution error:/, errorType: "js_execution_error" }, { pattern: new RegExp(`^Failed to execute JavaScript: ${v}`), errorType: "tab_not_found" }, { pattern: /^Failed to execute JavaScript:/, errorType: "js_exception" }], ht = [{ pattern: /^Permission denied for this action/, errorType: "computer_permission_denied" }, { pattern: /^No element found with reference|^Error getting element coordinates|^Failed to (execute script to get|get) element coordinates/, errorType: "computer_element_not_found" }, { pattern: /^Error (clicking|hovering|scrolling|pressing key|performing drag|capturing)|^Failed to (type|scroll to element)/, errorType: "computer_action_failed" }, { pattern: /^"[^"]*" was not pressed: page zoom keyboard shortcuts are not supported/, errorType: "computer_zoom_shortcut_unsupported" }, { pattern: new RegExp(`^Failed to execute action: ${v}`), errorType: "tab_not_found" }, { pattern: /^Failed to execute action:/, errorType: "computer_exception" }], mt = [{ pattern: /^Permission denied for reading page content/, errorType: "get_page_text_permission_denied" }, { pattern: /^No semantic content element found|^Output exceeds \d+ character limit/, errorType: "get_page_text_too_large" }, { pattern: /^No text content found/, errorType: "get_page_text_no_content" }, { pattern: /^Failed to extract page text: No main text content found/, errorType: "get_page_text_no_content" }, { pattern: /^Failed to extract page text: (Script execution failed|Page script returned empty result)/, errorType: "get_page_text_script_error" }, { pattern: new RegExp(`^Failed to extract page text: ${v}`), errorType: "tab_not_found" }, { pattern: /^Failed to extract page text:/, errorType: "get_page_text_exception" }], _t = [{ pattern: /^Permission denied for reading pages on this domain/, errorType: "find_permission_denied" }, { pattern: /^No matching elements found$/, errorType: "find_no_match" }, { pattern: new RegExp(`^Failed to find element: ${v}`), errorType: "tab_not_found" }, { pattern: /^Failed to find element:/, errorType: "find_exception" }], yt = [{ pattern: /^Navigation to this domain is not allowed/, errorType: "navigate_permission_denied" }, { pattern: /^Navigation was blocked by a "Leave site\?" dialog/, errorType: "navigate_beforeunload_blocked" }, { pattern: new RegExp(`^Failed to navigate: ${v}`), errorType: "tab_not_found" }, { pattern: /^Failed to navigate:/, errorType: "navigate_exception" }], se = /^This session has no tab group of its own|^No MCP tab group exists/, ae = /^(This session's|The MCP) tab group no longer exists/, wt = [{ pattern: se, errorType: "tab_create_no_group" }, { pattern: ae, errorType: "tab_create_group_gone" }, { pattern: new RegExp(`^Failed to create tab: ${v}`), errorType: "tab_not_found" }, { pattern: /^Failed to create tab:/, errorType: "tab_create_exception" }], bt = [{ pattern: /^Expected an object with a tabId integer parameter|^Missing required parameter tabId|^tabId must be an integer/, errorType: "tab_close_invalid_params" }, { pattern: se, errorType: "tab_close_no_group" }, { pattern: ae, errorType: "tab_close_group_gone" }, { pattern: /^Tab \d+ does not exist/, errorType: "tab_close_not_found" }, { pattern: /^Tab \d+ is not in this session's tab group/, errorType: "tab_close_not_in_group" }, { pattern: /^Tab \d+ was not closed because its page asked/, errorType: "tab_close_beforeunload_blocked" }, { pattern: /^Tab \d+ is still open/, errorType: "tab_close_still_open" }, { pattern: new RegExp(`^Failed to close tab: ${v}`), errorType: "tab_not_found" }, { pattern: /^Failed to close tab:/, errorType: "tab_close_exception" }], kt = [{ pattern: new RegExp(`^Failed to query tabs: ${v}`), errorType: "tab_not_found" }, { pattern: /^Failed to query tabs:/, errorType: "tabs_context_exception" }], xt = [{ pattern: /^Permission denied by user\. Domain transition denied/, errorType: "navigation_blocked" }, { pattern: /^Cannot access this page\. Claude cannot assist/, errorType: "navigation_blocked" }, { pattern: /^Permission denied by user/, errorType: "permission_denied_user" }, { pattern: /^No response to the Claude in Chrome permission prompt/, errorType: "permission_prompt_timed_out" }, { pattern: /^The Claude in Chrome permission prompt window couldn't be opened/, errorType: "permission_prompt_unavailable" }, { pattern: /^Permission required but no handler/, errorType: "permission_handler_missing" }, { pattern: /^Authentication failed\. The extension may need to be re-authenticated\. Please check your login status/, errorType: "authentication_failed" }, { pattern: /^Authentication failed\. The extension may need to be re-authenticated\. Open the Claude in Chrome side panel/, errorType: "session_expired" }, { pattern: /^Authentication failed\. The extension may need to be re-authenticated/, errorType: "authentication_failed" }, { pattern: /^No tabs? available/, errorType: "no_tabs_available" }, { pattern: /^This site is blocked/, errorType: "domain_blocked" }, { pattern: /^This site is not allowed due to safety restrictions/, errorType: "domain_blocked" }, { pattern: /^Could not verify this site's safety category\. Blocking as a precaution/, errorType: "category_lookup_error" }, { pattern: /^Claude in Chrome is turned off/, errorType: "domain_blocked" }, { pattern: new RegExp(`^Tab \\d+ (?:no longer exists|is not in Claude's tab group for this session)|^${v}`), errorType: "tab_not_found" }, { pattern: /^This tab's page reports zero size/, errorType: "tab_zero_size" }, { pattern: /^Security check failed|^Unable to verify current URL for security check|^Origin mismatch:/, errorType: "security_check_failed" }], vt = /* @__PURE__ */ new Map([["javascript_tool", gt], ["computer", ht], ["get_page_text", mt], ["find", _t], ["navigate", yt], ["tabs_create_mcp", wt], ["tabs_close_mcp", bt], ["tabs_context_mcp", kt]]);
function ior(e, t) {
  let n = vt.get(e);
  if (n) {
    for (let { pattern: r, errorType: i } of n) if (r.test(t)) return i;
  }
  for (let { pattern: r, errorType: i } of xt) if (r.test(t)) return i;
  return "unclassified_tool_error";
}
function Y5o(e, t, n) {
  let r = typeof n === "string" ? pt.get(n) : void 0;
  if (r && !ft.has(r)) return r;
  let i = ior(e, t);
  return i === "unclassified_tool_error" ? r ?? i : i;
}
function PAn(e) {
  let t = e?.content;
  if (typeof t === "string" && t) return t;
  if (Array.isArray(t)) for (let n of t) {
    let r = n?.text;
    if (typeof r === "string" && r) return r;
  }
  return "Unknown error";
}
class CP extends Error {
  constructor(e) {
    super(e);
    this.name = "SocketConnectionError";
  }
}
class Ftt extends Error {
  constructor(e) {
    super(e);
    this.name = "ToolCallLostError";
  }
}
class qDt extends Error {
}
var ce = ["no_target", "send_failed", "timeout"], aor = "toolCallFailureCause", OAn = /^[A-Za-z0-9-]{1,64}$/;
function X5o(e = "darwin") {
  return e === "darwin" ? "macOS" : e === "win32" ? "Windows" : "Linux";
}
var Et = 3e4;
function Rt(e) {
  return Math.min(typeof e === "number" && Number.isFinite(e) && e > 0 ? e : import_chunk_rg2p81t1.d8o, import_chunk_rg2p81t1.ZUa);
}
function Tt(e) {
  let t = typeof e === "object" && e !== null ? e : {};
  if (t.ok === true) return { ok: true, response: t.response };
  let n = ce.find((r) => r === t.error) ?? "send_failed";
  return { ok: false, error: n, ...n === "no_target" && t.detail === "not_allowlisted" && { detail: "not_allowlisted" } };
}
function O8r(e, t) {
  if (t) return t;
  if (!e.getExternalRelayConfig) return;
  return e.getExternalRelayConfig() ?? { extensionIds: [] };
}
class lor extends Error {
  constructor(e) {
    super(e instanceof Error ? e.message : String(e), { cause: e });
    this.name = "RelayNotSentError";
  }
}
class I8r {
  pending = /* @__PURE__ */ new Map();
  begin(e, t, n, r = Tt) {
    return new Promise((i) => {
      let s = t + Et, o = setTimeout(() => {
        if (this.pending.delete(e)) n?.(), i({ ok: false, error: "timeout" });
      }, s);
      this.pending.set(e, { resolve: i, timer: o, deadline: Date.now() + s, read: r });
    });
  }
  has(e) {
    return this.pending.has(e);
  }
  get size() {
    return this.pending.size;
  }
  msUntilDrained() {
    let e = 0;
    for (let { deadline: t } of this.pending.values()) e = Math.max(e, t);
    return Math.max(0, e - Date.now());
  }
  settle(e, t) {
    let n = this.pending.get(e);
    return n !== void 0 && this.finish(e, n.read(t));
  }
  fail(e, t, n) {
    return this.finish(e, { ok: false, error: t, ...n !== void 0 && { detail: n } });
  }
  drain(e) {
    let t = [...this.pending.keys()];
    for (let n of t) this.fail(n, e);
    return t.length;
  }
  finish(e, t) {
    let n = this.pending.get(e);
    if (!n) return false;
    return this.pending.delete(e), clearTimeout(n.timer), n.resolve(t), true;
  }
}
async function J5o(e, t, n, r, i, s) {
  let { logger: o, serverName: a } = n;
  e.assertOpen();
  let l = e.refuse();
  if (l !== void 0) return o.info(`[${a}] external_message refused: ${l.reason}`), { ok: false, error: l.error, ...l.detail !== void 0 && { detail: l.detail } };
  try {
    e.pushConfig();
  } catch {
  }
  let c = (0, import_crypto2.randomUUID)(), d = Rt(s?.timeoutMs), u = (f) => f instanceof Error ? f.message : String(f), h;
  try {
    let f = e.prepare({ requestId: c, extensionIds: [...r], payload: i, timeoutMs: d });
    h = f instanceof Promise ? await f : f;
  } catch (f) {
    if (f instanceof CP) throw f;
    return o.warn(`[${a}] external_message not sent: ${u(f)}`), { ok: false, error: "no_target", detail: "not_sent" };
  }
  let m = t.begin(c, d, () => o.warn(`[${a}] external_message timed out locally (${c.slice(0, 8)})`));
  o.debug(`[${a}] Sending external_message (${c.slice(0, 8)})`);
  try {
    e.send(h);
  } catch (f) {
    let T = f instanceof lor;
    if (o.warn(`[${a}] external_message ${T ? "not sent" : "send failed"}: ${u(f)}`), T) t.fail(c, "no_target", "not_sent");
    else t.fail(c, "send_failed");
  }
  return m;
}
var St = ["pairing_disabled", "not_signed_in", "managed_org_missing", "malformed", "unknown_kid", "jwks_unavailable", "bad_signature", "wrong_issuer_or_audience", "expired", "not_yet_valid", "wrong_peer_kind", "key_binding_mismatch", "account_mismatch", "org_mismatch", "org_not_permitted", "bad_key_confirmation", "attest_failed", "rate_limited", "unsupported_peer", "unknown_pairing"], Ct = new Set(St);
class p extends Error {
  code;
  httpStatus;
  peerOrg;
  constructor(e, t, n = {}) {
    super(t ? `${e}: ${t}` : e, { cause: n.cause });
    this.name = "PairingError", this.code = e, this.httpStatus = n.httpStatus, this.peerOrg = n.peerOrg;
  }
  wireCode() {
    return this.code === "attest_failed" && this.httpStatus !== void 0 ? `attest_failed:${this.httpStatus}` : this.code;
  }
}
function le(e) {
  if (typeof e !== "string") return "malformed";
  let t = e.startsWith("attest_failed:") ? "attest_failed" : e;
  return Ct.has(t) ? t : "malformed";
}
function g(e) {
  return new p("malformed", e);
}
class P {
  wall;
  mono;
  constructor(e = {}) {
    this.wall = e.now ?? (() => Date.now() / 1e3), this.mono = e.monotonicNow ?? (() => globalThis.performance.now() / 1e3);
  }
  stamp() {
    return { wall: this.wall(), mono: this.mono() };
  }
  since(e) {
    return Math.max(0, this.wall() - e.wall, this.mono() - e.mono);
  }
}
var At = /* @__PURE__ */ new Set(["localhost", "127.0.0.1", "[::1]"]);
function L(e, t = false) {
  let n;
  try {
    n = new URL(e);
  } catch {
    throw TypeError(`pairing apiOrigin is not a URL: ${e}`);
  }
  if (!(n.protocol === "https:" || t && n.protocol === "http:" && At.has(n.hostname)) || n.username || n.password || n.pathname !== "/" && n.pathname !== "" || n.search || n.hash) throw TypeError(`pairing apiOrigin must be a bare https origin: ${e}`);
  let i = `${n.origin}/api/oauth/local_pairing`;
  return { issuer: i, attest: `${i}/attest`, jwks: `${i}/jwks.json` };
}
var N = "claude-local-pairing/v1", It = new TextEncoder(), Ot = new TextDecoder("utf-8", { fatal: true });
function y(e) {
  return It.encode(e);
}
function M(e) {
  return Ot.decode(e);
}
function A(...e) {
  return J(e);
}
function J(e) {
  let t = 0;
  for (let i of e) t += i.length;
  let n = new Uint8Array(t), r = 0;
  for (let i of e) n.set(i, r), r += i.length;
  return n;
}
function k(e) {
  let t = typeof e === "string" ? y(e) : e, n = new Uint8Array(4 + t.length);
  return new DataView(n.buffer).setUint32(0, t.length, false), n.set(t, 4), n;
}
function E(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 0;
}
function D(e) {
  if (!E(e)) throw RangeError("u64be: not a non-negative safe integer");
  let t = new Uint8Array(8);
  return new DataView(t.buffer).setBigUint64(0, BigInt(e), false), t;
}
var Nt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", Mt = /^[A-Za-z0-9_-]*$/;
function x(e) {
  let t = e.length % 4;
  if (!Mt.test(e) || t === 1) throw SyntaxError("not unpadded base64url");
  if (t !== 0) {
    if ((Nt.indexOf(e.charAt(e.length - 1)) & (t === 2 ? 15 : 3)) !== 0) throw SyntaxError("non-canonical base64url");
  }
  let n = e.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((e.length + 3) % 4), r = atob(n), i = new Uint8Array(r.length);
  for (let s = 0; s < r.length; s++) i[s] = r.charCodeAt(s);
  return i;
}
function w(e) {
  let t = "";
  for (let n = 0; n < e.length; n += 32768) t += String.fromCharCode.apply(null, e.subarray(n, n + 32768));
  return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function de(e, t) {
  if (e.length !== t.length) return false;
  let n = 0;
  for (let r = 0; r < e.length; r++) n |= (e[r] ?? 0) ^ (t[r] ?? 0);
  return n === 0;
}
function ue(e) {
  let t = new Uint8Array(e);
  return globalThis.crypto.getRandomValues(t), t;
}
function _(e) {
  return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
}
async function q(e) {
  return new Uint8Array(await globalThis.crypto.subtle.digest("SHA-256", _(e)));
}
var $t = 87;
function pe(e) {
  if (typeof e !== "string" || e.length !== $t) throw g("public_key must be 87 base64url chars");
  let t;
  try {
    t = x(e);
  } catch {
    throw g("public_key is not base64url");
  }
  if (t.length !== 65 || t[0] !== 4) throw g("public_key must be an uncompressed P-256 point");
  return t;
}
function Dt(e) {
  let t = w(e.subarray(1, 33)), n = w(e.subarray(33, 65));
  return `{"crv":"P-256","kty":"EC","x":"${t}","y":"${n}"}`;
}
async function H(e) {
  return w(await q(y(Dt(e))));
}
async function fe(e) {
  try {
    return await globalThis.crypto.subtle.importKey("raw", _(e), { name: "ECDH", namedCurve: "P-256" }, false, []);
  } catch {
    throw g("public_key is not a point on P-256");
  }
}
async function ge(e, t) {
  return globalThis.crypto.subtle.importKey("jwk", { kty: "EC", crv: "P-256", x: e, y: t, ext: true }, { name: "ECDSA", namedCurve: "P-256" }, false, ["verify"]);
}
async function he() {
  let e = await globalThis.crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, false, ["deriveBits"]), t = new Uint8Array(await globalThis.crypto.subtle.exportKey("raw", e.publicKey));
  return { keyPair: e, publicKey: w(t), jkt: await H(t) };
}
var W = 10;
function z(e, t, n) {
  let r, i = new Promise((s, o) => {
    r = setTimeout(() => o(n()), t * 1e3), r.unref?.();
  });
  return Promise.race([e, i]).finally(() => clearTimeout(r));
}
var Ut = 60, me = 300, _e = 3600;
function ye(e, t, n) {
  let r = new RegExp(`(?:^|,)\\s*${t}=(\\d+)`).exec(e ?? "");
  return r ? Number(r[1]) : n;
}
function S(e, t) {
  return new p("jwks_unavailable", e, { cause: t });
}
class G {
  opts;
  keys = /* @__PURE__ */ new Map();
  fetchedAt;
  maxAge = me;
  staleIfError = _e;
  flooredAt;
  inflight;
  clock;
  floor;
  timeoutSec;
  url;
  constructor(e) {
    this.opts = e;
    this.clock = new P(e), this.floor = Ut, this.timeoutSec = e.timeoutSec ?? W, this.url = L(e.apiOrigin, e.allowLoopbackHttp).jwks;
  }
  async getKey(e) {
    let t = this.lookup(e);
    if (!t || this.age() > this.maxAge) {
      if (!this.inflight && !this.floored()) {
        if (!t) this.flooredAt = this.clock.stamp();
        this.inflight = this.fetch().finally(() => {
          this.inflight = void 0;
        });
      }
      await this.inflight, t = this.lookup(e);
    }
    if (t) return t;
    if (this.keys.size === 0) throw S("no verification keys");
    throw new p("unknown_kid", e.slice(0, 32));
  }
  lookup(e) {
    return this.servable().get(e);
  }
  servable() {
    if (this.age() > this.maxAge + this.staleIfError) this.keys = /* @__PURE__ */ new Map();
    return this.keys;
  }
  age() {
    return this.fetchedAt ? this.clock.since(this.fetchedAt) : 1 / 0;
  }
  floored() {
    return this.flooredAt !== void 0 && this.clock.since(this.flooredAt) < this.floor;
  }
  async fetch() {
    try {
      await this.load();
    } catch (e) {
      if (this.flooredAt = this.clock.stamp(), this.servable().size > 0) return;
      throw e instanceof p ? e : S("fetch failed", e);
    }
  }
  async load() {
    let e = await z(this.get(), this.timeoutSec, () => S("timed out"));
    if (e.status !== 200) throw S(`HTTP ${e.status}`);
    let t;
    try {
      t = JSON.parse(e.text);
    } catch {
      throw S("not JSON");
    }
    let n = t?.keys;
    if (!Array.isArray(n)) throw S("no keys array");
    let r = /* @__PURE__ */ new Map();
    for (let i of n) {
      if (i?.kty !== "EC" || i.crv !== "P-256" || typeof i.kid !== "string" || typeof i.x !== "string" || typeof i.y !== "string" || i.alg !== void 0 && i.alg !== "ES256" || i.use !== void 0 && i.use !== "sig") continue;
      try {
        r.set(i.kid, await ge(i.x, i.y));
      } catch {
      }
    }
    if (r.size === 0) throw S("no usable EC P-256 keys");
    this.maxAge = Math.max(ye(e.cacheControl, "max-age", me), this.floor), this.staleIfError = ye(e.cacheControl, "stale-if-error", _e), this.keys = r, this.fetchedAt = this.clock.stamp();
  }
  async get() {
    let e = await this.opts.fetchImpl(this.url, { method: "GET", headers: { accept: "application/json", "cache-control": "no-cache" } }), t = e.status, n = e.headers.get("cache-control");
    return { status: t, cacheControl: n, text: t === 200 ? await e.text() : "" };
  }
}
function R(e) {
  if (e === null || typeof e === "boolean" || typeof e === "string") return JSON.stringify(e);
  if (typeof e === "number") {
    if (!Number.isFinite(e)) throw TypeError("canonicalJson: non-finite number");
    return JSON.stringify(e);
  }
  if (Array.isArray(e)) return "[" + e.map((t) => R(t)).join(",") + "]";
  if (typeof e === "object") {
    let t = e;
    return "{" + Object.keys(t).filter((r) => t[r] !== void 0).sort().map((r) => JSON.stringify(r) + ":" + R(t[r])).join(",") + "}";
  }
  throw TypeError(`canonicalJson: unsupported ${typeof e}`);
}
function V(e) {
  let t = 0, n = (a) => {
    throw SyntaxError(`strict JSON: ${a} at ${t}`);
  }, r = () => {
    while (t < e.length && ` 	
\r`.includes(e.charAt(t))) t++;
  }, i = () => {
    let a = t;
    if (e[t] !== '"') n("expected string");
    t++;
    while (t < e.length && e[t] !== '"') {
      if (e[t] === "\\") t++;
      t++;
    }
    if (t >= e.length) n("unterminated string");
    return t++, JSON.parse(e.slice(a, t));
  }, s = () => {
    r();
    let a = e[t];
    if (a === "{") {
      t++;
      let c = {}, d = /* @__PURE__ */ new Set();
      if (r(), e[t] === "}") return t++, c;
      for (; ; ) {
        r();
        let u = i();
        if (d.has(u)) n(`duplicate key ${JSON.stringify(u)}`);
        if (d.add(u), r(), e[t] !== ":") n("expected ':'");
        if (t++, Object.defineProperty(c, u, { value: s(), enumerable: true, writable: true, configurable: true }), r(), e[t] === ",") {
          t++;
          continue;
        }
        if (e[t] === "}") return t++, c;
        n("expected ',' or '}'");
      }
    }
    if (a === "[") {
      t++;
      let c = [];
      if (r(), e[t] === "]") return t++, c;
      for (; ; ) {
        if (c.push(s()), r(), e[t] === ",") {
          t++;
          continue;
        }
        if (e[t] === "]") return t++, c;
        n("expected ',' or ']'");
      }
    }
    if (a === '"') return i();
    let l = /^(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?|true|false|null)/.exec(e.slice(t));
    if (!l) n("unexpected token");
    return t += l[0].length, JSON.parse(l[0]);
  }, o = s();
  if (r(), t !== e.length) n("trailing data");
  return o;
}
var Bt = "local-pairing+jwt", Lt = 4096, qt = 256;
function Y(e) {
  if (typeof e !== "string" || e.length === 0 || e.length > Lt) throw g("assertion missing or too long");
  let t = e.split("."), [n, r, i] = t;
  if (t.length !== 3 || n === void 0 || r === void 0 || i === void 0) throw g("assertion is not a compact JWS");
  let s, o, a;
  try {
    s = V(M(x(n))), o = V(M(x(r))), a = x(i);
  } catch (c) {
    throw g(`assertion does not decode: ${String(c)}`);
  }
  if (s === null || typeof s !== "object" || Array.isArray(s) || o === null || typeof o !== "object" || Array.isArray(o)) throw g("assertion header/payload are not objects");
  let l = s;
  if (l.alg !== "ES256") throw new p("bad_signature", `alg ${JSON.stringify(l.alg)} is not ES256`);
  if ("crit" in l) throw g("crit header is not accepted");
  if (l.typ !== Bt) throw new p("wrong_issuer_or_audience", `typ ${JSON.stringify(l.typ)}`);
  if (typeof l.kid !== "string" || l.kid.length === 0 || l.kid.length > qt) throw g("kid missing or too long");
  if (a.length !== 64) throw new p("bad_signature", "ES256 signature must be exactly 64 bytes");
  return { header: { kid: l.kid }, payload: o, signingInput: y(`${n}.${r}`), signature: a };
}
async function we(e, t) {
  if (!await globalThis.crypto.subtle.verify({ name: "ECDSA", hash: "SHA-256" }, t, _(e.signature), _(e.signingInput))) throw new p("bad_signature");
}
var Ft = ["desktop", "chrome_extension"];
function jt(e) {
  return Ft.includes(e);
}
var be = "claude-local-pairing/v1", ke = 60, xe = 301, Kt = 30;
function F(e, t) {
  let n = e[t];
  if (typeof n !== "string" || n.length === 0) throw g(`claim ${t} missing`);
  return n;
}
function ve(e, t) {
  let n = e[t];
  if (typeof n !== "number" || !Number.isFinite(n)) throw g(`claim ${t} missing`);
  return n;
}
function Pe(e) {
  let t = F(e, "client_kind");
  if (!jt(t)) throw new p("wrong_peer_kind", t);
  let n = e.cnf;
  if (!n || typeof n !== "object" || Array.isArray(n) || typeof n.jkt !== "string") throw g("cnf.jkt missing");
  return { iss: F(e, "iss"), sub: F(e, "sub"), org: F(e, "org"), azp: typeof e.azp === "string" ? e.azp : void 0, client_kind: t, hybrid: e.hybrid === true, cnf: { jkt: n.jkt }, iat: ve(e, "iat"), exp: ve(e, "exp"), jti: typeof e.jti === "string" ? e.jti : void 0 };
}
async function Ee(e, t, n) {
  let r = Y(e), i = pe(t), s = await n.jwks.getKey(r.header.kid);
  await we(r, s);
  let o = Pe(r.payload), a = r.payload.aud, l = a === be || Array.isArray(a) && a.includes(be);
  if (o.iss !== n.expectedIssuer || !l) throw new p("wrong_issuer_or_audience");
  if (o.exp - o.iat > xe) throw new p("expired", `assertion lifetime exceeds ${xe} s`);
  if (o.client_kind !== n.expectedKind) throw new p("wrong_peer_kind", o.client_kind);
  if (await H(i) !== o.cnf.jkt) throw new p("key_binding_mismatch");
  return { claims: o, peerRaw: i };
}
function Re(e, t) {
  if (e.iat > t + ke) throw new p("not_yet_valid");
  if (e.exp + ke <= t) throw new p("expired");
}
var Jt = 5, Ht = 60;
class X {
  opts;
  current;
  minting;
  lastFailure;
  epoch = 0;
  clock;
  timeoutSec;
  urls;
  constructor(e) {
    this.opts = e;
    this.clock = new P(e), this.timeoutSec = e.timeoutSec ?? W, this.urls = L(e.apiOrigin, e.allowLoopbackHttp);
  }
  get issuer() {
    return this.urls.issuer;
  }
  serverNow(e) {
    return e.claims.iat + this.clock.since(e.minted);
  }
  async get() {
    let e = this.current;
    if (e && e.claims.exp - Kt > this.serverNow(e)) return e;
    let t = this.lastFailure;
    if (t && this.clock.since(t.at) < t.floor) throw t.error;
    let n = this.minting ??= this.mint().finally(() => {
      if (this.minting === n) this.minting = void 0;
    });
    return n;
  }
  isCurrent(e) {
    return e.epoch === this.epoch;
  }
  clear() {
    this.epoch += 1, this.current = void 0, this.minting = void 0, this.lastFailure = void 0;
  }
  async mint() {
    let e = this.epoch;
    try {
      let t = await z(this.attest(e), this.timeoutSec, () => new p("attest_failed", "timed out", { httpStatus: 0 }));
      if (e !== this.epoch) throw new p("not_signed_in", "identity changed during attest");
      return this.current = t, this.lastFailure = void 0, t;
    } catch (t) {
      let n = t instanceof p ? t : new p("attest_failed", "unexpected", { cause: t });
      if (e === this.epoch && n.code !== "not_signed_in") {
        let r = n.code === "rate_limited" || n.code === "pairing_disabled";
        this.lastFailure = { error: n, at: this.clock.stamp(), floor: r ? Ht : Jt };
      }
      throw n;
    }
  }
  async attest(e) {
    let t;
    try {
      t = await this.opts.getBearer();
    } catch (l) {
      throw new p("not_signed_in", "bearer unavailable", { cause: l });
    }
    if (!t) throw new p("not_signed_in");
    let n = await he(), r = this.clock.stamp(), i;
    try {
      i = await this.opts.fetchImpl(this.urls.attest, { method: "POST", headers: { authorization: `Bearer ${t}`, "content-type": "application/json", accept: "application/json" }, body: JSON.stringify({ public_key: n.publicKey }) });
    } catch (l) {
      throw new p("attest_failed", "fetch failed", { httpStatus: 0, cause: l });
    }
    if (i.status === 404) throw new p("pairing_disabled", "attest is not enabled", { httpStatus: 404 });
    if (i.status === 429) throw new p("rate_limited", void 0, { httpStatus: 429 });
    if (i.status !== 200) throw new p("attest_failed", `HTTP ${i.status}`, { httpStatus: i.status });
    let s;
    try {
      s = JSON.parse(await i.text());
    } catch {
      throw new p("attest_failed", "response is not JSON", { httpStatus: 200 });
    }
    let o = s?.assertion;
    if (typeof o !== "string") throw new p("attest_failed", "response lacks assertion", { httpStatus: 200 });
    let a = Pe(Y(o).payload);
    if (a.cnf.jkt !== n.jkt) throw new p("key_binding_mismatch", "server bound a different key");
    return { assertion: o, claims: a, eph: n, minted: r, epoch: e };
  }
}
async function Te(e, t) {
  let { mac: n, ...r } = t;
  return q(A(k(N), k(y(R(e))), k(y(R(r)))));
}
async function Se(e, t) {
  return new Uint8Array(await globalThis.crypto.subtle.deriveBits({ name: "ECDH", public: t }, e, 256));
}
async function U(e, t, n, r) {
  return new Uint8Array(await globalThis.crypto.subtle.deriveBits({ name: "HKDF", hash: "SHA-256", salt: _(t), info: _(y(`${N} ${n}`)) }, e, r * 8));
}
async function Ce(e, t) {
  let n = await globalThis.crypto.subtle.importKey("raw", _(e), "HKDF", false, ["deriveBits"]), [r, i, s, o, a] = await Promise.all([U(n, t, "confirm d", 32), U(n, t, "confirm e", 32), U(n, t, "aead d2e", 32), U(n, t, "aead e2d", 32), U(n, t, "sid", 16)]);
  return { th: t, kcD: r, kcE: i, kD2e: s, kE2d: o, sid: a };
}
async function Z(e, t) {
  let n = await globalThis.crypto.subtle.importKey("raw", _(e), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return new Uint8Array(await globalThis.crypto.subtle.sign("HMAC", n, _(t)));
}
function Ae(e) {
  return Z(e.kcE, e.th);
}
function Ie(e) {
  return Z(e.kcD, e.th);
}
function Oe(e) {
  return Z(e.kcE, A(e.th, y("done")));
}
var Wt = ["execute_tool", "tool_response", "notification:permission_request", "notification:sealed_broadcast", "notification:inference_request", "notification:inference_response"], zt = 3, Gt = 33554432, Vt = 60, Yt = new RegExp("\\p{Surrogate}", "u"), Xt = new Set(Wt);
function Ne(e) {
  return typeof e === "string" && Xt.has(e);
}
function Me(e) {
  return e === void 0 || typeof e === "string" && e !== "" && !Yt.test(e);
}
function Zt(e) {
  if (e === void 0) return true;
  let t = e;
  return !!t && typeof t === "object" && E(t.n) && t.n >= 1 && E(t.i) && t.i < t.n;
}
function $e(e, t, n, r, i, s, o) {
  let a = D(n);
  return { name: "AES-GCM", iv: _(A(new Uint8Array(4), a)), additionalData: _(A(k(N), k(e), k(t), a, k(r), k(i ?? ""), D(s), ...o ? [k("chunk"), D(o.i), D(o.n)] : [])), tagLength: 128 };
}
function De(e) {
  try {
    let t = Math.floor(e());
    return E(t) ? t : Number.NaN;
  } catch {
    return Number.NaN;
  }
}
async function Ue(e, t) {
  return globalThis.crypto.subtle.importKey("raw", _(e), { name: "AES-GCM" }, false, [t]);
}
var Be = () => {
  return;
};
function Le(e) {
  try {
    return { ok: true, inner: JSON.parse(M(e)) };
  } catch {
    return { ok: false, reason: "malformed" };
  }
}
class j {
  sid;
  dirOut;
  kOut;
  kIn;
  clock;
  sidB64;
  ctrOut = 0;
  ctrIn = -1;
  tagFailures = 0;
  tornDown = false;
  q = { send: Promise.resolve(), recv: Promise.resolve() };
  partial;
  stats = { gaps: 0, replays: 0, stale: 0, badTags: 0 };
  born;
  constructor(e, t, n, r, i) {
    this.sid = e;
    this.dirOut = t;
    this.kOut = n;
    this.kIn = r;
    this.clock = i;
    this.sidB64 = w(e), this.born = i.stamp();
  }
  static async create(e, t, n = {}) {
    let [r, i, s] = e === "desktop" ? [t.kD2e, t.kE2d, "d2e"] : [t.kE2d, t.kD2e, "e2d"];
    return new j(t.sid, s, await Ue(r, "encrypt"), await Ue(i, "decrypt"), n.clock ?? new P());
  }
  ownSeconds() {
    return De(() => this.born.wall + this.clock.since(this.born));
  }
  get dirIn() {
    return this.dirOut === "d2e" ? "e2d" : "d2e";
  }
  get isTornDown() {
    return this.tornDown;
  }
  enqueue(e, t) {
    let n = this.q[e].then(t, t);
    return this.q[e] = n.then(Be, Be), n;
  }
  seal(e, t, n) {
    return this.sealFrames(e, t, n, void 0).then(([r]) => {
      if (r === void 0) throw Error("seal: no envelope produced");
      return r;
    });
  }
  sealChunked(e, t, n, r) {
    if (!Number.isSafeInteger(r) || r < 1) return Promise.reject(RangeError("sealChunked: maxChunkBytes must be a positive integer"));
    return this.sealFrames(e, t, n, r);
  }
  sealFrames(e, t, n, r) {
    if (this.tornDown) return Promise.reject(Error("sealed channel torn down"));
    if (!Ne(e)) return Promise.reject(TypeError("seal: unknown frame kind"));
    if (!Me(t)) return Promise.reject(TypeError("seal: toolUseId must be a non-empty well-formed string"));
    let i;
    try {
      let d = JSON.stringify(n);
      if (typeof d !== "string") throw TypeError("not JSON-serialisable");
      i = y(d);
    } catch (d) {
      return Promise.reject(TypeError("seal: inner is not JSON-serialisable", { cause: d }));
    }
    let s = r !== void 0, o = r ?? i.length, a = Math.ceil(i.length / o), l = De(this.clock.wall);
    if (!E(l)) return Promise.reject(Error("seal: clock is not a usable time"));
    let c = this.ctrOut;
    if (this.ctrOut = c + a, !Number.isSafeInteger(this.ctrOut)) return this.tornDown = true, Promise.reject(Error("sealed channel counter exhausted"));
    return this.enqueue("send", async () => {
      let d = [];
      for (let u = 0; u < a; u++) {
        let h = s ? { i: u, n: a } : void 0, m = new Uint8Array(await globalThis.crypto.subtle.encrypt($e(this.dirOut, this.sid, c + u, e, t, l, h), this.kOut, _(i.subarray(u * o, (u + 1) * o))));
        if (this.tornDown) throw Error("sealed channel torn down");
        d.push({ sid: this.sidB64, ctr: c + u, t: l, ct: w(m), ...h && { chunk: h } });
      }
      return d;
    });
  }
  open(e, t, n) {
    return this.enqueue("recv", () => this.openNow(e, t, n));
  }
  async openNow(e, t, n) {
    if (this.tornDown) return { ok: false, reason: "torn_down" };
    let r = n;
    if (!r || typeof r !== "object" || typeof r.sid !== "string" || typeof r.ct !== "string" || !E(r.t) || !Ne(e) || !Me(t) || !Zt(r.chunk)) return { ok: false, reason: "malformed" };
    let { t: i, chunk: s } = r;
    if (r.sid !== this.sidB64) return { ok: false, reason: "foreign_sid" };
    let o = r.ctr;
    if (!E(o)) return { ok: false, reason: "malformed" };
    if (o <= this.ctrIn) return this.stats.replays += 1, { ok: false, reason: "replay" };
    if (!(Math.abs(this.ownSeconds() - i) <= Vt)) return this.stats.stale += 1, { ok: false, reason: "stale" };
    let l;
    try {
      l = x(r.ct);
    } catch {
      return { ok: false, reason: "malformed" };
    }
    if (l.length < 16) return { ok: false, reason: "malformed" };
    let c;
    try {
      c = await globalThis.crypto.subtle.decrypt($e(this.dirIn, this.sid, o, e, t, i, s), this.kIn, _(l));
    } catch {
      if (this.stats.badTags += 1, ++this.tagFailures >= zt) this.tearDown();
      return { ok: false, reason: "bad_tag" };
    }
    if (this.tornDown) return { ok: false, reason: "torn_down" };
    if (o > this.ctrIn + 1) this.stats.gaps += o - this.ctrIn - 1;
    this.ctrIn = o;
    let d = new Uint8Array(c);
    if (!s) return this.partial = void 0, Le(d);
    return this.reassemble(o, s, d);
  }
  reassemble(e, t, n) {
    let r = this.partial;
    if (this.partial = void 0, t.i === 0) r = { firstCtr: e, n: t.n, parts: [], bytes: 0 };
    else if (!r || e !== r.firstCtr + r.parts.length) return { ok: false, reason: "bad_chunk" };
    if (r.bytes + n.length > Gt) return { ok: false, reason: "bad_chunk" };
    if (r.parts.push(n), r.bytes += n.length, r.parts.length < r.n) return this.partial = r, { ok: false, reason: "partial" };
    return Le(J(r.parts));
  }
  tearDown() {
    this.tornDown = true, this.partial = void 0;
  }
}
var ee = 1, Qt = 30, je = { offer: "instance_hint", accept: "instance" }, Ke = 32;
function Q(e, t) {
  return e.toLowerCase() === t.toLowerCase();
}
function en(e, t, n) {
  if (t.sub !== e.sub) throw new p("account_mismatch");
  if (n.requiredOrg !== void 0) {
    if (!Q(e.org, n.requiredOrg)) throw new p("org_not_permitted", "own sign-in is not in the configured org");
  }
  let r = t.hybrid && t.client_kind === "desktop", i = !n.allowedOrgs || n.allowedOrgs.some((s) => Q(s, t.org));
  if (r && !i) throw new p("org_not_permitted", "the managing Desktop's org is outside the configured list");
  if ((n.requiredOrg !== void 0 || r || n.hybridSignIn) && !Q(t.org, e.org)) throw new p("org_mismatch", void 0, i ? { peerOrg: t.org } : {});
}
function te(e, t, n) {
  if (typeof e !== "string") throw g(`${t} missing`);
  let r;
  try {
    r = x(e);
  } catch {
    throw g(`${t} not base64url`);
  }
  if (n !== void 0 && r.length !== n) throw g(`${t} must be ${n} bytes`);
  return r;
}
function Je(e, t) {
  let n = e;
  if (!n || typeof n !== "object" || n.msg !== t) throw g(`pair_${t} malformed`);
  if (n.v !== ee) {
    let r = typeof n.v === "number" ? String(n.v) : typeof n.v;
    throw g(`unsupported v ${r}`);
  }
  return n;
}
function He(e, t) {
  if (e === void 0) return;
  if (!e || typeof e !== "object" || Array.isArray(e) || R(e).length > 1024) throw g(`${t} must be a small object`);
  return e;
}
function tn(e, t) {
  let n = je[t], r = Je(e, t);
  try {
    R(r);
  } catch {
    throw g(`pair_${t} is not canonical JSON`);
  }
  te(r.nonce, "nonce", Ke);
  let i = He(r[n], n);
  return { hello: r, instance: i };
}
function nn(e, t, n) {
  let r = { msg: e, v: ee, assertion: t.assertion, public_key: t.eph.publicKey, nonce: w(ue(Ke)) };
  if (n) r[je[e]] = n;
  return r;
}
function rn(e, t) {
  let n = Je(e, t);
  if (typeof n.sid !== "string") throw g(`pair_${t} sid missing`);
  return { sid: n.sid, mac: te(n.mac, `pair_${t} mac`) };
}
function on(e, t) {
  if (e === void 0) return;
  try {
    return He(JSON.parse(JSON.stringify(e)), t);
  } catch (n) {
    throw TypeError(`${t} must be a small JSON object`, { cause: n });
  }
}
function We(e, t) {
  if (!e.isCurrent(t)) throw new p("not_signed_in", "identity changed during the handshake");
}
function qe(e, t, n) {
  if (!de(e, t)) throw new p("bad_key_confirmation", n);
}
function Fe(e, t, n) {
  if (e.since(t) > Qt) throw new p("expired", `${n} took too long`);
}
async function sn(e, t, n, r) {
  let i = await j.create(e, r.secrets, { clock: n });
  return We(t, r.own), { sidB64: i.sidB64, channel: i, own: r.own.claims, peer: r.peer, peerInstance: r.peerInstance, establishedAt: n.wall() };
}
class ne {
  opts;
  phase = { is: "fresh" };
  clock;
  instanceHint;
  constructor(e) {
    this.opts = e;
    this.clock = new P(e), this.instanceHint = on(e.instanceHint, "instanceHint");
  }
  enter(e, t) {
    let n = this.phase;
    if (n.is !== e) throw g(t);
    return this.phase = { is: "busy" }, n;
  }
  async step(e) {
    try {
      let { next: t, out: n } = await e();
      return this.phase = t, n;
    } catch (t) {
      throw this.phase = { is: "spent" }, t;
    }
  }
  async createOffer() {
    return this.enter("fresh", "createOffer already called; use a new Initiator"), this.step(async () => {
      let e = await this.opts.source.get(), t = nn("offer", e, this.instanceHint);
      return { next: { is: "offered", offer: t, own: e, at: this.clock.stamp() }, out: t };
    });
  }
  async onAccept(e) {
    let t = this.enter("offered", "no offer outstanding");
    return this.step(async () => {
      Fe(this.clock, t.at, "pair_accept");
      let { hello: n, instance: r } = tn(e, "accept"), i = te(n.mac, "pair_accept mac"), { source: s, jwks: o, policy: a } = this.opts, { claims: l, peerRaw: c } = await Ee(n.assertion, n.public_key, { jwks: o, expectedIssuer: s.issuer, expectedKind: "chrome_extension" });
      Re(l, s.serverNow(t.own)), en(t.own.claims, l, a);
      let d = await fe(c), u = await Se(t.own.eph.keyPair.privateKey, d), h = await Te(t.offer, n), m = await Ce(u, h);
      qe(i, await Ae(m));
      let f = await Ie(m);
      We(s, t.own);
      let T = w(m.sid);
      return { next: { is: "finishing", own: t.own, secrets: m, sidB64: T, peer: l, peerInstance: r, at: this.clock.stamp() }, out: { msg: "finish", v: ee, sid: T, mac: w(f) } };
    });
  }
  async onDone(e) {
    let t = this.enter("finishing", "no finish outstanding");
    return this.step(async () => {
      Fe(this.clock, t.at, "pair_done");
      let n = rn(e, "done");
      if (n.sid !== t.sidB64) throw new p("bad_key_confirmation", "pair_done sid differs");
      qe(n.mac, await Oe(t.secrets), "pair_done mac");
      let r = await sn("desktop", this.opts.source, this.clock, t);
      return { next: { is: "spent" }, out: r };
    });
  }
}
function ze(e) {
  let t = e;
  if (!t || typeof t !== "object" || t.msg !== "refuse") return;
  return le(t.code);
}
var re = /* @__PURE__ */ new WeakMap();
function Ge(e) {
  return re.get(e);
}
function Ve(e) {
  let t = re.get(e);
  if (!t) t = { source: new X(e), jwks: new G(e) }, re.set(e, t);
  return t;
}
function an(e) {
  return typeof e === "string" && /^category[0-9a-z_]{1,32}$/.test(e) ? e : void 0;
}
function cn(e) {
  let { _perActionOnly: t, _privateHostReadAlwaysOffer: n, _privateHostReadAlways: r, ...i } = e;
  return i;
}
function Q5o(e, t) {
  return { toolUseId: t.toolUseId, requestId: t.requestId, toolType: typeof e.tool_type === "string" ? e.tool_type : "unknown", url: typeof e.url === "string" ? e.url : "", actionData: e.action_data && typeof e.action_data === "object" ? cn(e.action_data) : void 0, category: an(e.category) };
}
function Z5o(e) {
  return { ...e?.permissionMode ? { permission_mode: e.permissionMode } : {}, ...e?.allowedDomains?.length ? { allowed_domains: e.allowedDomains } : {}, ...e?.onPermissionRequest ? { handle_permission_prompts: true } : {}, ...e?.sessionScope ? { session_scope: e.sessionScope } : {} };
}
function e9o(e) {
  return { ...e && { supports_tool_result_notices: true }, supports_tool_result_error_code: true };
}
var Ye = 4;
function t9o(e, t) {
  if (!Array.isArray(e)) return;
  let n = /* @__PURE__ */ new Map(), r = false, i = (s, o) => {
    if (n.has(s)) {
      n.set(s, o);
      return;
    }
    if (n.size >= Ye) {
      r = true, t?.(`sanitizeBridgeNotices: notice cap (${Ye}) reached; dropping the rest`);
      return;
    }
    n.set(s, o);
  };
  for (let s of e) {
    if (r) break;
    if (typeof s !== "object" || s === null) continue;
    let { kind: o, domain: a } = s;
    if (typeof o !== "string" || !/^[a-z0-9_]{1,64}$/i.test(o)) continue;
    let l = o.toLowerCase();
    if (a === void 0) i(`${l}:`, { kind: l });
    else if (typeof a === "string" && a.length <= 253 && /^[a-z0-9.-]+$/i.test(a)) {
      let c = a.toLowerCase().replace(/\.$/, "");
      if (c.length === 0) continue;
      i(`${l}:${c}`, { kind: l, domain: c });
    }
  }
  return n.size > 0 ? Array.from(n.values()) : void 0;
}
function XJ(e, t = 64) {
  return JSON.stringify(String(e).slice(0, t));
}
class dor extends Error {
  constructor(e) {
    super(e);
    this.name = "ToolCallSupersededError";
  }
}
class $tt extends Error {
  constructor(e) {
    super(e);
    this.name = "NoExtensionConnectedError";
  }
}
class Utt extends Error {
  routingAckReceived;
  constructor(e, t) {
    super(e);
    this.name = "ToolCallTimeoutError", this.routingAckReceived = t?.routingAckReceived;
  }
}
class RMe extends Error {
  routingAckReceived;
  constructor(e, t) {
    super(e);
    this.name = "ExtensionDisconnectedMidCallError", this.routingAckReceived = t?.routingAckReceived;
  }
}
class Hgt extends Error {
  constructor(e) {
    super(e);
    this.name = "BrowserChangedError";
  }
}
class IAn extends Error {
  constructor(e) {
    super(e);
    this.name = "RequestTooLargeError";
  }
}
function Ze(e) {
  return "result" in e || "error" in e;
}
function Qe(e) {
  return "method" in e && typeof e.method === "string";
}
var K = 5e3, pn = 15e3, fn = 15e3, et = 288e5, tt = 1e3, nt = 2e4, rt = 5e3, pni = "can_tell_bridge_identity", gn = 5e3, hn = 3e4, mn = 1e4, O = 1032192, _n = 1024, ie = Math.floor((O - _n) * 3 / 4) - 16;
class B extends p {
  constructor(e, t) {
    super(e, "peer-reported", { httpStatus: t });
    this.name = "PeerRefusedPairing";
  }
}
class I extends Error {
  which;
  constructor(e) {
    super(e === "reply" ? "No reply to a pairing message" : "Our attest/JWKS step overran while pairing");
    this.which = e;
    this.name = "HandshakeTimeout";
  }
}
function it(e, t) {
  let n = e.result;
  if (n && typeof n === "object" && n.local_pairing) {
    if (n.local_pairing.msg === t) return n.local_pairing;
    throw new p("malformed", `expected ${t}`);
  }
  let r = e.error;
  if (r && typeof r === "object" && r.local_pairing) {
    let i = ze(r.local_pairing), s = r.local_pairing.code, o = typeof s === "string" && /^attest_failed:\d{1,3}$/.test(s) ? Number(s.slice(14)) : void 0;
    throw new B(i ?? "malformed", o);
  }
  if (t === "accept" && st(e)) throw new B("unsupported_peer");
  throw new p("malformed", "unrecognised reply to a pairing message");
}
function yn(e) {
  return e === void 0 || e < 400 || e >= 500;
}
var ot = (e) => e === "ENOENT" || e === "ECONNREFUSED";
function YFa(e, t) {
  switch (e) {
    case "pairing_disabled":
    case "org_not_permitted":
    case "unsupported_peer":
    case "wrong_peer_kind":
      return "durable";
    case "account_mismatch":
    case "org_mismatch":
      return "peer_may_move";
    case "not_signed_in":
      return t ? "peer_not_ready" : "awaits_token";
    case "managed_org_missing":
      return "peer_not_ready";
    case "attest_failed":
      return "awaits_token";
    default:
      return "retry";
  }
}
function wn(e) {
  if (!(e instanceof p)) return false;
  switch (e.code) {
    case "jwks_unavailable":
      return true;
    case "attest_failed":
      return yn(e.httpStatus);
    case "not_signed_in":
      return !(e instanceof B) && e.cause !== void 0;
    default:
      return false;
  }
}
function st(e) {
  let t = e.error?.content;
  if (!Array.isArray(t) || t.length !== 1) return false;
  let n = t[0];
  return n?.type === "text" && n.text === "No tool specified";
}
function oe(e, t = O) {
  return new IAn(`Request too large for the local browser connection (${e} bytes; limit ${t}). Send smaller inputs or fewer files per call.`);
}
function bn(e) {
  let t = e.peerInstance?.max_reassembly_bytes;
  return typeof t === "number" && Number.isSafeInteger(t) && t > 0 ? t : void 0;
}
function kn(e) {
  let t = e;
  return !!t && typeof t === "object" && typeof t.max_tokens === "number" && Array.isArray(t.messages);
}
class at {
  socket = null;
  connected = false;
  connecting = false;
  connectEpoch = 0;
  pendingCalls = /* @__PURE__ */ new Map();
  externalRelays = new I8r();
  currentPath;
  handshaking = false;
  pairing = null;
  pairingWaiter = null;
  pairingExpired = false;
  pairingAgeTimer = null;
  pairingGraceTimer = null;
  lastPairingRefuse;
  loggedRefusal;
  pairingStartedAt;
  peerHeardAt = 0;
  sealedId;
  trackedVerdict;
  forcedTeardownAt = 0;
  notificationHandler = null;
  responseBuffer = Buffer.alloc(0);
  responseChunks = [];
  responseChunkBytes = 0;
  reconnectAttempts = 0;
  maxReconnectAttempts = 10;
  reconnectDelay = 1e3;
  reconnectTimer = null;
  connectTimer = null;
  context;
  disableAutoReconnect = false;
  onRedialWanted;
  pairingProbeTimer = null;
  probeToolUseId;
  probeMissedDuringRelay = false;
  probesAnswered = 0;
  clearRequest = null;
  constructor(e) {
    this.context = e;
  }
  askInClearText(e, t, n) {
    if (this.context.localPairing || !this.connected || !this.socket || this.socket.destroyed) return Promise.resolve(void 0);
    return this.settleClearRequest(void 0), new Promise((r) => {
      let i = (0, import_crypto.randomUUID)(), s = (0, import_crypto.randomUUID)(), o = setTimeout(() => this.settleClearRequest(void 0), n);
      o.unref?.(), this.clearRequest = { echo: i, toolUseId: s, resolve: r, timer: o }, this.writeFrame({ method: e, params: { ...t, echo: i, tool_use_id: s } });
    });
  }
  async probeBridgeIdentity(e) {
    let t = await this.askInClearText("get_bridge_identity", {}, e), n = t && "bridge_device_id" in t ? t.bridge_device_id : void 0;
    return typeof n === "string" && OAn.test(n) ? n : void 0;
  }
  async showSessionTab(e, t, n) {
    let r = await this.askInClearText("show_session_tab", { session_keys: e, account_uuid: t }, n);
    return r !== void 0 && "shown" in r && r.shown === true;
  }
  settleClearRequest(e) {
    let t = this.clearRequest;
    if (!t) return;
    this.clearRequest = null, clearTimeout(t.timer), t.resolve(e);
  }
  takeClearReply(e) {
    let { result: t } = e, n = typeof t === "object" && t !== null ? t : void 0, r = this.clearRequest;
    if (r && n && "echo" in n && n.echo === r.echo) return this.settleClearRequest(n), true;
    if (n && "bridge_device_id" in n) return true;
    if (r && e.tool_use_id === r.toolUseId) return this.settleClearRequest(void 0), true;
    return false;
  }
  async connect() {
    let { serverName: e, logger: t } = this.context;
    if (this.connecting) {
      t.info(`[${e}] Already connecting, skipping duplicate attempt`);
      return;
    }
    this.closeSocket(), this.connecting = true, this.lastPairingRefuse = void 0;
    let n = this.connectEpoch, r = this.context.getSocketPath?.() ?? this.context.socketPath;
    this.currentPath = r, this.logDial(`[${e}] Attempting to connect to: ${r}`);
    let i;
    try {
      i = await this.validateSocketSecurity(r);
    } catch (c) {
      if (n === this.connectEpoch) this.connecting = false;
      t.info(`[${e}] Security validation failed:`, c);
      return;
    }
    if (!i) {
      if (n === this.connectEpoch) this.connecting = false, this.scheduleReconnect("dead");
      return;
    }
    if (n !== this.connectEpoch) return;
    let s = this.context.localPairing;
    if (s && !await this.ownIdentityPresent(s, n)) return;
    let o, { connectVerified: a } = this.context;
    if (a) {
      try {
        o = await a(r);
      } catch (c) {
        if (n !== this.connectEpoch) return;
        this.connecting = false;
        let d = c.code;
        if (ot(d)) t.info(`[${e}] Socket not found; not dialing`), this.scheduleReconnect("dead");
        else if (d === "EPERM" || d === "EACCES" || d === "EPEERCRED" || !d) t.info(`[${e}] Security validation failed:`, c);
        else t.info(`[${e}] Verified dial failed:`, c), this.scheduleReconnect();
        return;
      }
      if (n !== this.connectEpoch) {
        o.destroy();
        return;
      }
    } else o = (0, import_net.createConnection)(r);
    this.socket = o;
    let l = () => {
      if (this.clearConnectTimer(), this.clearReconnectTimer(), s) {
        this.reconnectAttempts = Math.min(this.reconnectAttempts, this.maxReconnectAttempts), this.pair(n, s);
        return;
      }
      this.connected = true, this.connecting = false, this.reconnectAttempts = 0, t.info(`[${e}] Successfully connected to bridge server`);
    };
    if (o.on("data", (c) => {
      let d = this.responseBuffer, u = d.length + this.responseChunkBytes + c.length;
      if (d.length >= 4 && u < 4 + d.readUInt32LE(0)) {
        this.responseChunks.push(c), this.responseChunkBytes += c.length;
        return;
      }
      if (this.responseChunks.length > 0) this.responseBuffer = Buffer.concat([d, ...this.responseChunks, c], u), this.responseChunks = [], this.responseChunkBytes = 0;
      else this.responseBuffer = d.length === 0 ? c : Buffer.concat([d, c], u);
      while (this.responseBuffer.length >= 4) {
        let h = this.responseBuffer.readUInt32LE(0);
        if (this.responseBuffer.length < 4 + h) break;
        let m = this.responseBuffer.slice(4, 4 + h);
        this.responseBuffer = this.responseBuffer.slice(4 + h);
        try {
          let f = JSON.parse(m.toString("utf-8"));
          if (s) {
            this.dispatchPairingRail(f, n);
            continue;
          }
          if (Qe(f)) {
            if (t.info(`[${e}] Received notification: ${XJ(f.method)}`), !(f.method === "permission_request" && this.claimPermissionRequest(f.params))) this.notificationHandler?.(f);
          } else if (Ze(f)) {
            if (this.takeClearReply(f)) continue;
            t.info(`[${e}] Received tool response for ${XJ(f.tool_use_id ?? "(untagged)")}`), this.handleResponse(f, h);
          } else t.info(`[${e}] Received a message of unknown shape`);
        } catch (f) {
          t.info(`[${e}] Failed to parse message:`, f);
        }
      }
      this.responseBuffer = Buffer.from(this.responseBuffer);
    }), o.on("error", (c) => {
      t.info(`[${e}] Socket error (code: ${c.code}):`, c), this.closeSocket(), this.scheduleReconnect(ot(c.code) ? "dead" : "transport");
    }), o.on("close", () => {
      this.closeSocket(), this.scheduleReconnect();
    }), a) {
      l();
      return;
    }
    this.connectTimer = setTimeout(() => {
      if (!this.connected) t.info(`[${e}] Connection attempt timed out after ${K}ms`), this.closeSocket(), this.scheduleReconnect();
    }, K), o.on("connect", l);
  }
  scheduleReconnect(e = "transport") {
    let { serverName: t, logger: n } = this.context;
    if (this.disableAutoReconnect) {
      this.onRedialWanted?.(e);
      return;
    }
    if (this.reconnectTimer) {
      n.info(`[${t}] Reconnect already scheduled, skipping`);
      return;
    }
    this.reconnectAttempts++;
    let r = 100;
    if (this.reconnectAttempts > r) {
      n.info(`[${t}] Giving up after ${r} attempts. Will retry on next tool call.`), this.reconnectAttempts = 0;
      return;
    }
    let i = Math.min(this.reconnectDelay * Math.pow(1.5, this.reconnectAttempts - 1), 3e4);
    if (this.reconnectAttempts <= this.maxReconnectAttempts) n.info(`[${t}] Reconnecting in ${Math.round(i)}ms (attempt ${this.reconnectAttempts})`);
    else if (this.reconnectAttempts % 10 === 0) n.info(`[${t}] Still polling for native host (attempt ${this.reconnectAttempts})`);
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.connect();
    }, i);
  }
  dispatchPairingRail(e, t) {
    let { serverName: n, logger: r } = this.context;
    if (!e || typeof e !== "object") {
      r.info(`[${n}] Dropping a non-object frame`);
      return;
    }
    if (!this.connected) {
      if (this.pairingWaiter && Ze(e) && (e.tool_use_id === this.pairingWaiter.toolUseId || e.tool_use_id === void 0 && this.pairingWaiter.acceptsUntagged && st(e))) {
        let i = this.pairingWaiter;
        this.pairingWaiter = null, clearTimeout(i.timer), i.resolve(e);
        return;
      }
      r.info(`[${n}] Dropping frame received before the connection was admitted`);
      return;
    }
    this.dispatchSealed(e, t);
  }
  async pair(e, t) {
    let { serverName: n, logger: r } = this.context, i = this.currentPath ?? this.context.socketPath;
    this.handshaking = true, this.reportPairingState(t, { state: "pairing", socketPath: i });
    try {
      let { source: s, jwks: o } = Ve(t), a = new ne({ source: s, jwks: o, policy: { requiredOrg: t.requiredOrg }, instanceHint: t.instanceHint }), l = Math.min(tt, this.forcedTeardownAt + tt - Date.now());
      if (l > 0) {
        if (await new Promise((f) => setTimeout(f, l).unref?.()), e !== this.connectEpoch) return;
      }
      let c = await this.withPairingStepDeadline(a.createOffer());
      if (e !== this.connectEpoch) return;
      let d = it(await this.exchangePairing({ ...c }, true), "accept");
      if (e !== this.connectEpoch) return;
      let u = await this.withPairingStepDeadline(a.onAccept(d));
      if (e !== this.connectEpoch) return;
      let h = it(await this.exchangePairing({ ...u }, false), "done");
      if (e !== this.connectEpoch) return;
      let m = await a.onDone(h);
      if (e !== this.connectEpoch) {
        m.channel.tearDown();
        return;
      }
      if (!this.socket || this.socket.destroyed) {
        m.channel.tearDown(), this.closeSocket(), this.scheduleReconnect();
        return;
      }
      this.pairing = m, this.pairingExpired = false, this.pairingAgeTimer = setTimeout(() => {
        if (this.pairing !== m) return;
        if (this.pairingExpired = true, !this.hasInflight()) {
          this.expirePairing();
          return;
        }
        this.startAgeGrace();
      }, et), this.pairingAgeTimer.unref?.(), this.handshaking = false, this.connected = true, this.connecting = false, this.reconnectAttempts = 0, this.probesAnswered = 0, this.schedulePairingProbe(), this.loggedRefusal = void 0, r.info(`[${n}] Local pairing established with ${i} (peer ${m.peer.client_kind} ${XJ(m.peerInstance?.extension_version ?? "?", 16)}, external relay ${this.peerCanRelayExternal() ? "supported" : "unsupported"}, sid ${m.sidB64.slice(0, 8)}\u2026)`), this.reportPairingState(t, { state: "established", socketPath: i, peerKind: m.peer.client_kind, peerInstance: m.peerInstance, assertionExp: m.peer.exp }), this.pushExternalConfig();
    } catch (s) {
      if (e !== this.connectEpoch) return;
      if (this.handshaking = false, s instanceof I) {
        r.warn(`[${n}] ${s.message} (${i}); reconnecting`), this.lastPairingRefuse = { code: "timeout", peerReported: false }, this.reportPairingState(t, { state: "refused", socketPath: i, code: "timeout", wire: "timeout", peerReported: false }), this.closeSocket(), this.scheduleReconnect();
        return;
      }
      let o = s instanceof B, a = s instanceof p ? s : void 0, l = a?.code ?? "malformed", c = a?.wireCode() ?? l;
      if (this.logRefusal(`[${n}] Local pairing with ${i} refused: ${c}${o ? " (peer-reported, unauthenticated)" : ""}`, a ? void 0 : s), this.lastPairingRefuse = { code: l, peerReported: o }, this.reportPairingState(t, { state: "refused", socketPath: i, code: l, wire: c, ...a?.httpStatus !== void 0 && { httpStatus: a.httpStatus }, peerReported: o }), this.closeSocket(), wn(s)) this.scheduleReconnect();
    }
  }
  async ownIdentityPresent(e, t) {
    let { serverName: n } = this.context, r = this.currentPath ?? this.context.socketPath, i, s = false;
    try {
      i = await this.withPairingStepDeadline(e.getBearer());
    } catch {
      s = true;
    }
    if (t !== this.connectEpoch) return false;
    if (i) return true;
    if (this.connecting = false, this.lastPairingRefuse = { code: "not_signed_in", peerReported: false }, this.logRefusal(`[${n}] Local pairing with ${r} refused: not_signed_in (no bearer of our own${s ? "; token source failed" : ""}; not dialing)`), this.reportPairingState(e, { state: "refused", socketPath: r, code: "not_signed_in", wire: "not_signed_in", peerReported: false }), s) this.scheduleReconnect();
    return false;
  }
  logRefusal(e, ...t) {
    if (e === this.loggedRefusal) {
      this.context.logger.debug(e, ...t);
      return;
    }
    this.loggedRefusal = e, this.context.logger.warn(e, ...t);
  }
  logDial(e) {
    if (this.loggedRefusal === void 0) this.context.logger.info(e);
    else this.context.logger.debug(e);
  }
  withPairingStepDeadline(e) {
    let t, n = new Promise((r, i) => {
      t = setTimeout(() => i(new I("step")), fn), t.unref?.();
    });
    return Promise.race([e, n]).finally(() => clearTimeout(t));
  }
  reportPairingState(e, t) {
    try {
      e.onPairingState?.(t), this.trackPairingVerdict(t);
    } catch (n) {
      this.context.logger.warn(`[${this.context.serverName}] onPairingState handler threw:`, n);
    }
  }
  trackPairingVerdict(e) {
    if (e.state === "pairing") this.pairingStartedAt = Date.now();
    if (e.state === "closed") this.pairingStartedAt = void 0;
    if (e.state !== "established" && e.state !== "refused") return;
    let t = this.pairingStartedAt;
    this.pairingStartedAt = void 0;
    let n = e.state === "refused" ? `${e.code}:${e.peerReported}` : "paired";
    if (e.state === "refused" && n === this.trackedVerdict) return;
    this.trackedVerdict = n, this.context.trackEvent?.("chrome_local_pairing_result", { paired: e.state === "established", ...e.state === "refused" && { error_type: e.code, peer_reported: e.peerReported }, duration_ms: t === void 0 ? 0 : Date.now() - t });
  }
  exchangePairing(e, t) {
    return new Promise((n, r) => {
      let i = (0, import_crypto.randomUUID)(), s = setTimeout(() => {
        if (this.pairingWaiter?.toolUseId === i) this.pairingWaiter = null, r(new I("reply"));
      }, pn);
      if (this.pairingWaiter) clearTimeout(this.pairingWaiter.timer), this.pairingWaiter.reject(new I("reply"));
      this.pairingWaiter = { toolUseId: i, acceptsUntagged: t, resolve: n, reject: r, timer: s }, this.writeRaw({ method: "execute_tool", params: { client_id: this.context.clientTypeId, tool_use_id: i, local_pairing: e } });
    });
  }
  async writeSealed(e, t, n = true) {
    this.writeFrames(await this.sealFrames(e, t), n);
  }
  async sealFrames(e, t) {
    let n = this.pairing;
    if (!n || !this.connected) throw new CP(`[${this.context.serverName}] Cannot send request: not paired`);
    let r = Buffer.byteLength(JSON.stringify(t), "utf-8"), i = bn(n), s = r > ie && i !== void 0;
    if (s && r > i) throw oe(r, i);
    if (!s && Math.ceil(r * 4 / 3) > O) throw oe(Math.ceil(r * 4 / 3));
    let o;
    try {
      o = s ? await n.channel.sealChunked("execute_tool", e, t, ie) : [await n.channel.seal("execute_tool", e, t)];
    } catch (a) {
      if (this.pairing !== n || n.channel.isTornDown) throw new CP(`[${this.context.serverName}] Pairing changed while sealing`);
      throw a;
    }
    if (this.pairing !== n) throw new CP(`[${this.context.serverName}] Pairing changed while sealing`);
    if (s) this.context.logger.info(`[${this.context.serverName}] Sealed request sliced into ${o.length} frames (${r} bytes, max ${ie} per slice)`);
    return o.map((a) => {
      let l = { method: "execute_tool", params: { tool_use_id: e, sealed: a } }, c = Buffer.from(JSON.stringify(l), "utf-8");
      if (c.length > O) throw oe(c.length);
      return { frame: l, bytes: c };
    });
  }
  writeFrames(e, t = true) {
    if (!this.socket || this.socket.destroyed) throw new CP(`[${this.context.serverName}] Socket closed before the request was written`);
    if (t && this.context.isDisabled?.()) throw new qDt("disabled: request not written");
    for (let { frame: n, bytes: r } of e) this.writeRaw(n, r);
  }
  async answerInferenceRequest(e, t, n) {
    let { serverName: r, logger: i, localPairing: s } = this.context, o;
    try {
      if (!e || !kn(t)) o = { ok: false, error: "malformed" };
      else if (this.context.isDisabled?.() || !s?.onInferenceRequest) o = { ok: false, error: "not_supported" };
      else if (o = await s.onInferenceRequest(t), this.context.isDisabled?.()) o = { ok: false, error: "not_supported" };
      let l = Math.ceil(Buffer.byteLength(JSON.stringify(o), "utf-8") * 4 / 3);
      if (l > O) i.warn(`[${r}] inference_response too large (${l} bytes); answering too_large`), o = { ok: false, error: "too_large" };
    } catch (l) {
      i.warn(`[${r}] inference seam failed:`, l), o = { ok: false, error: "handler_error" };
    }
    let a = this.pairing;
    if (n !== this.connectEpoch || !a) return;
    try {
      let l = await a.channel.seal("notification:inference_response", e, { method: "inference_response", params: { request_id: e, result: o } });
      if (n !== this.connectEpoch || this.pairing !== a) return;
      let c = { method: "inference_response", params: { request_id: e, sealed: l } }, d = Buffer.from(JSON.stringify(c), "utf-8");
      if (d.length > O) {
        i.warn(`[${r}] inference_response frame oversized after seal (${d.length} bytes); dropped`);
        return;
      }
      this.writeRaw(c, d);
    } catch (l) {
      i.warn(`[${r}] Failed to seal inference_response:`, l);
    }
  }
  peerCanRelayExternal() {
    return this.pairing?.peerInstance?.can_relay_external === true;
  }
  hasCallInFlight() {
    return this.pendingCalls.size > 0;
  }
  hasActiveSelection() {
    return this.isPaired();
  }
  pushExternalConfig(e) {
    if (!this.isPaired() || !this.peerCanRelayExternal() || this.pairingAgedOut()) return false;
    let t = O8r(this.context, e);
    if (!t) return false;
    return this.writeExternalConfig(t).catch((n) => {
      this.context.logger.warn(`[${this.context.serverName}] external_config not sent: ${n instanceof Error ? n.message : String(n)}`);
    }), true;
  }
  writeExternalConfig(e) {
    let t = (0, import_crypto.randomUUID)();
    return this.writeSealed(t, { method: "external_config", params: { tool_use_id: t, extension_ids: e.extensionIds, ...e.hooks !== void 0 && { hooks: e.hooks } } });
  }
  sendExternalMessage(e, t, n) {
    let { serverName: r } = this.context;
    if (n?.requireDeviceId !== void 0) return Promise.resolve({ ok: false, error: "no_target", detail: "not_sent" });
    let s = J5o({ assertOpen: () => {
      if (this.pairingAgedOut()) throw this.expireIfAgedAndIdle(), new CP(`[${r}] Cannot relay: the pairing reached its maximum age and is re-pairing`);
      if (!this.isPaired()) throw new CP(`[${r}] Cannot relay: not paired with the extension`);
    }, refuse: () => this.peerCanRelayExternal() ? void 0 : { error: "unsupported", reason: `the paired extension (${XJ(this.pairing?.peerInstance?.extension_version ?? "?", 16)}) does not relay external messages` }, pushConfig: () => {
      this.pushExternalConfig();
    }, prepare: ({ requestId: o, extensionIds: a, payload: l, timeoutMs: c }) => this.sealFrames(o, { method: "external_message", params: { tool_use_id: o, extension_ids: a, payload: l, timeout_ms: c } }), send: (o) => {
      try {
        this.writeFrames(o);
      } catch (a) {
        throw new lor(a);
      }
    } }, this.externalRelays, this.context, e, t, n);
    return s.then(() => this.expireIfAgedAndIdle(), () => {
      return;
    }), s;
  }
  peerAdvertises(e) {
    return this.isPaired() && this.pairing?.peerInstance?.[e] === true;
  }
  sealedDeviceId() {
    let e = this.pairing;
    if (!e || !this.peerAdvertises(pni) || this.pairingAgedOut()) return;
    if (this.sealedId?.of !== e) this.sealedId = { of: e, askedAt: Number.NEGATIVE_INFINITY };
    let t = this.sealedId;
    if (t.deviceId === void 0 && Date.now() - t.askedAt >= hn) t.askedAt = Date.now(), this.sendSealedCall("get_bridge_identity", {}, { mark: pni, timeoutMs: gn }).then(async (n) => {
      if (!n.sent) t.askedAt = Number.NEGATIVE_INFINITY;
      let r = n.sent ? await n.answer : void 0, i = r?.ok ? r.response?.bridge_device_id : void 0;
      if (typeof i === "string" && OAn.test(i)) t.deviceId = i;
    }).catch(() => {
      return;
    });
    return t.deviceId;
  }
  async sendSealedCall(e, t, { mark: n, timeoutMs: r, requireDeviceId: i }) {
    if (i !== void 0 || this.context.isDisabled?.()) return { sent: false };
    if (this.pairingAgedOut()) return this.expireIfAgedAndIdle(), { sent: false };
    if (!this.peerAdvertises(n)) return { sent: false };
    let s = (0, import_crypto.randomUUID)(), o;
    try {
      o = await this.sealFrames(s, { method: e, params: t });
    } catch {
      return { sent: false };
    }
    if (this.context.isDisabled?.()) return { sent: false };
    let a = this.externalRelays.begin(s, r, void 0, (l) => ({ ok: true, response: l }));
    try {
      this.writeFrames(o);
    } catch {
      return this.externalRelays.fail(s, "no_target", "not_sent"), { sent: false };
    }
    return a.then(() => this.expireIfAgedAndIdle()), { sent: true, answer: a.then((l) => l.ok ? l : { ok: false }) };
  }
  takeRelayResponse(e, t) {
    if ("result" in t) this.externalRelays.settle(e, t.result);
    else this.context.logger.info(`[${this.context.serverName}] a relay or sealed call was answered with an error; no verdict was read (${e.slice(0, 8)})`), this.externalRelays.fail(e, "no_target", "not_sent");
  }
  lastPairingRefuseCode() {
    return this.lastPairingRefuse?.code;
  }
  lastPairingRefusePeerReported() {
    return this.lastPairingRefuse?.peerReported ?? false;
  }
  isPaired() {
    return this.connected && this.pairing !== null;
  }
  pairingAgedOut() {
    if (!this.pairing) return false;
    if (Date.now() / 1e3 - this.pairing.establishedAt > et / 1e3) this.pairingExpired = true;
    if (this.pairingExpired && this.hasInflight()) this.startAgeGrace();
    return this.pairingExpired;
  }
  hasPendingCall() {
    return this.pendingCalls.size > (this.probeToolUseId !== void 0 && this.pendingCalls.has(this.probeToolUseId) ? 1 : 0);
  }
  hasInflight() {
    return this.hasPendingCall() || this.externalRelays.size > 0;
  }
  startAgeGrace() {
    if (this.pairingGraceTimer) return;
    let e = Math.max(0, ...[...this.pendingCalls.values()].map((n) => n.timeoutMs), this.externalRelays.msUntilDrained()), t = this.pairing;
    this.pairingGraceTimer = setTimeout(() => {
      if (this.pairing === t) this.expirePairing();
    }, e), this.pairingGraceTimer.unref?.();
  }
  forceRepair(e, t = false) {
    this.forcedTeardownAt = Date.now(), this.failPending(e), this.closeSocket(), this.scheduleReconnect(t ? "peer_dropped" : "transport");
  }
  schedulePairingProbe() {
    this.clearPairingProbe(), this.pairingProbeTimer = setTimeout(() => {
      if (this.pairingProbeTimer = null, !this.connected || !this.pairing) return;
      if (this.pendingCalls.size > 0) {
        this.schedulePairingProbe();
        return;
      }
      if (this.pairingAgedOut()) {
        this.expireIfAgedAndIdle();
        return;
      }
      let e = { method: "execute_tool", params: { client_id: this.context.clientTypeId, tool_use_id: (0, import_crypto.randomUUID)() } };
      this.probeToolUseId = e.params.tool_use_id;
      let t = () => {
        if (this.probeToolUseId = void 0, this.connected && this.pairing) this.schedulePairingProbe();
      };
      this.sendRequest(e, this.context.localPairing?.probeTimeoutMs ?? mn).then(() => {
        if (this.probesAnswered += 1, this.probeMissedDuringRelay = false, this.probesAnswered === 1) this.context.logger.info(`[${this.context.serverName}] Local pairing liveness probe answered; probing every ${(this.context.localPairing?.probeIntervalMs ?? rt) / 1e3} s while idle`);
        else this.context.logger.debug(`[${this.context.serverName}] Local pairing liveness probe ${this.probesAnswered} answered`);
        t();
      }, t);
    }, this.context.localPairing?.probeIntervalMs ?? rt), this.pairingProbeTimer.unref?.();
  }
  probesAnsweredCount() {
    return this.probesAnswered;
  }
  clearPairingProbe() {
    if (this.pairingProbeTimer) clearTimeout(this.pairingProbeTimer), this.pairingProbeTimer = null;
  }
  expirePairing() {
    this.context.logger.info(`[${this.context.serverName}] Local pairing reached its maximum age; re-pairing`), this.closeSocket(), this.scheduleReconnect();
  }
  clearPairing(e, t = false) {
    if (this.pairingWaiter) {
      clearTimeout(this.pairingWaiter.timer);
      let s = this.pairingWaiter;
      this.pairingWaiter = null, s.reject(new I("reply"));
    }
    if (this.pairingAgeTimer) clearTimeout(this.pairingAgeTimer), this.pairingAgeTimer = null;
    if (this.pairingGraceTimer) clearTimeout(this.pairingGraceTimer), this.pairingGraceTimer = null;
    let n = this.pairing, r = !n ? "handshake_aborted" : n.channel.isTornDown ? "forged_frames" : this.pairingExpired ? "expired" : "connection_closed";
    this.pairing?.channel.tearDown(), this.pairing = null, this.pairingExpired = false, this.probeMissedDuringRelay = false;
    let i = this.externalRelays.drain("send_failed");
    if (i > 0) this.context.logger.warn(`[${this.context.serverName}] ${i} external relay(s) failed: the pairing closed (${r})`);
    if ((n || e) && this.context.localPairing) this.reportPairingState(this.context.localPairing, { state: "closed", socketPath: this.currentPath ?? this.context.socketPath, reason: r });
    if (n && !t) this.context.onPeerDisconnected?.({ wasSelected: true });
  }
  async dispatchSealed(e, t) {
    let { serverName: n, logger: r } = this.context, i = this.pairing;
    if (!i) return;
    let s, o, a;
    if (Qe(e)) {
      if (e.method === "permission_request") {
        s = "notification:permission_request";
        let u = e.params?.tool_use_id;
        o = typeof u === "string" ? u : void 0;
      } else if (e.method === "sealed_broadcast") s = "notification:sealed_broadcast", o = void 0;
      else if (e.method === "inference_request") {
        s = "notification:inference_request";
        let u = e.params?.request_id;
        o = typeof u === "string" ? u : void 0;
      } else {
        r.info(`[${n}] Dropping unsealed notification on a paired connection`);
        return;
      }
      a = e.params?.sealed;
    } else {
      let u = e;
      if (typeof u.tool_use_id !== "string") {
        r.info(`[${n}] Dropping a response without a routing id on a paired connection`);
        return;
      }
      if (s = "tool_response", o = u.tool_use_id, a = u.sealed, a === void 0 && (this.pendingCalls.has(o) || this.externalRelays.has(o)) && u.error?.local_pairing) {
        r.warn(`[${n}] Peer reports the pairing is unknown to it${o === this.probeToolUseId ? " (it dropped the pairing; found by the liveness probe)" : ""}; re-pairing`), this.forceRepair(this.lostInFlight(`[${n}] Peer reports the pairing is unknown; re-pairing`), true);
        return;
      }
    }
    if (a === void 0) {
      r.info(`[${n}] Dropping clear-text ${s} on a paired connection`);
      return;
    }
    let l = s === "tool_response" && o !== void 0 && (this.pendingCalls.has(o) || this.externalRelays.has(o));
    if (this.pairingAgedOut() && !l) {
      let u = o === void 0 ? void 0 : this.pendingCalls.get(o);
      if (s === "notification:permission_request" && u?.onPermissionRequest !== void 0) this.failAgedPending("the call needed a permission prompt", u);
      else if (this.hasPendingCall() && s === "notification:inference_request") this.failAgedPending("a call needed a host inference");
      else if (this.hasInflight()) r.info(`[${n}] Dropping sealed ${s} past the pairing's maximum age`);
      else this.expirePairing();
      return;
    }
    let c = await i.channel.open(s, o, a);
    if (t !== this.connectEpoch || this.pairing !== i) return;
    if (!c.ok) {
      if (c.reason !== "foreign_sid") r.warn(`[${n}] Sealed ${s} rejected: ${c.reason}`);
      if (i.channel.isTornDown) r.warn(`[${n}] Sealed channel torn down; re-pairing`), this.forceRepair(this.lostInFlight(`[${n}] Sealed channel to the extension was torn down`));
      return;
    }
    this.peerHeardAt = Date.now();
    let d = c.inner;
    if (!d || typeof d !== "object") return;
    try {
      if (s === "tool_response" && o !== void 0 && this.externalRelays.has(o)) this.takeRelayResponse(o, d);
      else if (s === "tool_response") {
        let u = t9o(d.notices, (h) => r.warn(`[${n}] ${h}`));
        this.handleResponse({ ..."result" in d && { result: d.result }, ..."error" in d && { error: d.error }, ...u && { notices: u }, tool_use_id: o }, Buffer.byteLength(JSON.stringify(d), "utf-8"), d.error_code);
      } else if (s === "notification:permission_request") {
        let u = d.params ?? {};
        if (d.method !== "permission_request" || u.tool_use_id !== o) {
          r.warn(`[${n}] Sealed permission_request mislabelled; dropped`);
          return;
        }
        this.claimPermissionRequest(u);
      } else if (s === "notification:inference_request") {
        let u = d.params ?? {};
        if (d.method !== "inference_request" || u.request_id !== o) {
          r.warn(`[${n}] Sealed inference_request mislabelled; dropped`);
          return;
        }
        this.answerInferenceRequest(o, u.body, t);
      } else if (this.notificationHandler && typeof d.method === "string") this.notificationHandler({ method: d.method, params: d.params ?? void 0 });
    } catch (u) {
      r.error(`[${n}] Error handling a sealed ${s}:`, u);
    }
  }
  handleResponse(e, t, n) {
    let r = typeof e.tool_use_id === "string" ? this.pendingCalls.get(e.tool_use_id) : this.pendingCalls.values().next().value;
    if (!r) return;
    this.pendingCalls.delete(r.toolUseId), clearTimeout(r.timer), r.resolve(e, t, n), this.expireIfAgedAndIdle();
  }
  failAgedPending(e, t) {
    this.failPending(this.lostInFlight(`[${this.context.serverName}] The pairing reached its maximum age while ${e}`), t), this.expireIfAgedAndIdle();
  }
  expireIfAgedAndIdle() {
    if (this.pairingAgedOut() && !this.hasInflight()) return this.expirePairing(), true;
    return false;
  }
  claimPermissionRequest(e) {
    let t = e?.request_id, n = e?.tool_use_id, r = typeof n === "string" ? this.pendingCalls.get(n) : void 0;
    if (!e || !r?.onPermissionRequest || typeof t !== "string") return false;
    return this.answerPermissionRequest(r, r.onPermissionRequest, t, e), true;
  }
  async answerPermissionRequest(e, t, n, r) {
    let i = Q5o(r, { toolUseId: e.toolUseId, requestId: n });
    clearTimeout(e.timer);
    let s = false;
    try {
      s = await t(i);
    } catch (a) {
      this.context.logger.error(`[${this.context.serverName}] Error handling permission request:`, a);
    }
    if (!this.isPending(e)) return;
    if (this.pairingAgedOut()) {
      this.failAgedPending("a permission prompt was open", e);
      return;
    }
    let o = { method: "permission_response", params: { request_id: n, allowed: s } };
    if (this.context.localPairing) {
      let a = { ...o, params: { ...o.params, tool_use_id: e.toolUseId } }, l = (c) => this.context.logger.warn(`[${this.context.serverName}] Could not send permission_response:`, c);
      if (await this.writeSealed(e.toolUseId, a, s).catch(async (c) => {
        if (l(c), c instanceof qDt) a.params.allowed = false, await this.writeSealed(e.toolUseId, a, false).catch(l), this.failPending(new qDt("disabled: permission answer sent as a denial"), e);
      }), !this.isPending(e)) return;
    } else this.writeFrame(o);
    this.armTimeout(e);
  }
  setNotificationHandler(e) {
    this.notificationHandler = e;
  }
  async ensureConnected(e = 500) {
    let { serverName: t } = this.context;
    if (this.connected && this.socket) return true;
    if (!this.socket && !this.connecting) await this.connect();
    return new Promise((n, r) => {
      let i = null, s = K, o = () => {
        if (this.connected) {
          if (i) clearTimeout(i);
          n(true);
          return;
        }
        if (this.context.localPairing && (this.handshaking || this.lastPairingRefuse?.code === "timeout") && s < nt) {
          s = nt, a = setTimeout(o, s - K);
          return;
        }
        if (i) clearTimeout(i);
        r(new CP(`[${t}] Connection attempt timed out after ${s}ms`));
      }, a = setTimeout(o, s), l = () => {
        if (this.connected) clearTimeout(a), n(true);
        else if (!this.socket && !this.connecting && (!this.reconnectTimer || this.context.localPairing && this.lastPairingRefuse !== void 0 && this.lastPairingRefuse.code !== "timeout")) clearTimeout(a), n(false);
        else i = setTimeout(l, e);
      };
      l();
    });
  }
  armTimeout(e) {
    let { logger: t, serverName: n } = this.context;
    clearTimeout(e.timer);
    let r = Date.now();
    e.timer = setTimeout(() => {
      if (!this.isPending(e)) return;
      let i = e.toolUseId === this.probeToolUseId && this.externalRelays.size > 0;
      if (this.failPending(new Utt(`[${n}] Tool request timed out after ${e.timeoutMs}ms`), e), e.ownDeadline || e.toolUseId !== this.probeToolUseId && this.peerHeardAt >= r) return;
      if (i && !this.probeMissedDuringRelay) {
        this.probeMissedDuringRelay = true, t.info(`[${n}] Liveness probe unanswered while an external relay is in flight; probing once more before re-pairing`);
        return;
      }
      this.closeSocket(), this.scheduleReconnect();
    }, e.timeoutMs);
  }
  writeRaw(e, t) {
    if (!this.socket || this.socket.destroyed) return;
    let n = t ?? Buffer.from(JSON.stringify(e), "utf-8"), r = Buffer.allocUnsafe(4);
    r.writeUInt32LE(n.length, 0), this.socket.write(Buffer.concat([r, n]));
  }
  writeFrame(e) {
    if (this.context.localPairing) throw Error("clear-text frames are disabled when local pairing is configured");
    this.writeRaw(e);
  }
  async sendRequest(e, t, n, r = false) {
    let { serverName: i } = this.context;
    if (this.pairingAgedOut()) this.closeSocket();
    if (!this.socket || this.socket.destroyed || this.context.localPairing && !this.connected) throw new CP(`[${i}] Cannot send request: not connected`);
    return new Promise((s, o) => {
      let a = this.pendingCalls.get(this.probeToolUseId ?? "");
      if (!this.context.localPairing || a) this.failPending(new dor(`[${i}] Superseded by a newer tool request on the same connection`), a);
      let l = Date.now(), c = { toolUseId: e.params.tool_use_id, resolve: (d, u, h) => s({ response: d, responseBytes: u, sentAt: l, errorCode: h }), reject: o, timeoutMs: t, ownDeadline: r, onPermissionRequest: n };
      if (this.pendingCalls.set(c.toolUseId, c), this.armTimeout(c), this.context.localPairing) {
        let d = c.toolUseId !== this.probeToolUseId;
        this.writeSealed(c.toolUseId, e, d).catch((u) => {
          this.failPending(u instanceof Error ? u : new CP(String(u)), c);
        });
      } else this.writeFrame(e);
    });
  }
  async callTool(e, t, n, r) {
    if (r?.requireDeviceId !== void 0) throw new Hgt(`[${this.context.serverName}] ${e} not sent: its tab's browser can't be confirmed`);
    let i = { method: "execute_tool", params: { client_id: this.context.clientTypeId, tool: e, args: t, tool_use_id: (0, import_crypto.randomUUID)(), ...Z5o(n), ...this.context.localPairing && e9o(this.context.localPairing.hostDrawsNotices === true) } }, { trackEvent: s } = this.context, o = r?.timeoutMs ?? this.context.getToolCallTimeoutMs?.(e) ?? import_chunk_rg2p81t1.Ggt, a = n?.sessionScope, l = Date.now(), c = { tool_name: `browser:${e}`, tool_use_id: i.params.tool_use_id, session_id: a?.sessionId, user_message_uuid: a?.userMessageUuid, transport: "native" };
    s?.("chrome_bridge_tool_call_started", { ...c, timeout_ms: o, request_bytes: Buffer.byteLength(JSON.stringify(i), "utf-8") });
    let d = (b, ct, lt) => {
      s?.("chrome_bridge_tool_call_error", { ...c, duration_ms: Date.now() - ct, error_type: lt ?? ior(e, b) });
    }, u;
    try {
      u = await this.sendRequestWithRetry(i, o, n?.onPermissionRequest, this.context.localPairing !== void 0 && r?.timeoutMs !== void 0);
    } catch (b) {
      if (b instanceof Utt) s?.("chrome_bridge_tool_call_timeout", { ...c, duration_ms: Date.now() - l, timeout_ms: o });
      else d(b instanceof Error ? b.message : String(b), l, b instanceof IAn ? "request_too_large" : void 0);
      throw b;
    }
    let { response: h, responseBytes: m, sentAt: f, errorCode: T } = u;
    if ("error" in h) {
      let b = PAn(h.error);
      d(b, f, Y5o(e, b, T));
    } else s?.("chrome_bridge_tool_call_completed", { ...c, duration_ms: Date.now() - f, response_bytes: m });
    return h;
  }
  async sendRequestWithRetry(e, t, n, r = false) {
    let { serverName: i, logger: s } = this.context;
    try {
      return await this.sendRequest(e, t, n, r);
    } catch (o) {
      if (!(o instanceof CP)) throw o;
      if (s.info(`[${i}] Connection error, forcing reconnect and retrying: ${o.message}`), !this.connecting) this.closeSocket();
      let a;
      try {
        a = await this.ensureConnected();
      } catch (c) {
        if (!(this.context.localPairing && this.lastPairingRefuse)) throw c;
        a = false;
      }
      let l = this.lastPairingRefuse;
      if (!a && this.context.localPairing && l) {
        let c = l.peerReported ? `reported by the extension, unverified: ${l.code}` : l.code;
        throw new CP(`[${i}] Claude in Chrome isn't paired with your browser (${c})`);
      }
      return await this.sendRequest(e, t, n, r);
    }
  }
  isConnected() {
    return this.connected;
  }
  isConnecting() {
    return this.connecting;
  }
  clearConnectTimer() {
    if (this.connectTimer) clearTimeout(this.connectTimer), this.connectTimer = null;
  }
  closeSocket(e = false) {
    this.connectEpoch += 1, this.clearConnectTimer(), this.clearPairingProbe();
    let t = this.handshaking;
    if (this.handshaking = false, this.socket) this.socket.removeAllListeners(), this.socket.end(), this.socket.destroy(), this.socket = null;
    this.responseBuffer = Buffer.alloc(0), this.responseChunks = [], this.responseChunkBytes = 0, this.connected = false, this.connecting = false, this.clearPairing(t, e), this.settleClearRequest(void 0), this.failPending(this.lostInFlight(`[${this.context.serverName}] Native host connection closed before the tool responded`));
  }
  clearReconnectTimer() {
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
  }
  lostInFlight(e) {
    return new RMe(e, this.context.localPairing && { routingAckReceived: true });
  }
  isPending(e) {
    return this.pendingCalls.get(e.toolUseId) === e;
  }
  failPending(e, t) {
    let n = t ? [t].filter((r) => this.isPending(r)) : [...this.pendingCalls.values()];
    for (let r of n) this.pendingCalls.delete(r.toolUseId), clearTimeout(r.timer), r.reject(e);
  }
  disconnect() {
    this.clearReconnectTimer(), this.failPending(this.lostInFlight(`[${this.context.serverName}] Socket client disconnected`)), this.closeSocket(true), this.reconnectAttempts = 0;
  }
  async validateSocketSecurity(e) {
    let { serverName: t, logger: n } = this.context;
    if ((0, import_os.platform)() === "win32" || this.context.connectVerified) return true;
    try {
      let r = (0, import_path.dirname)(e);
      if ((r.split("/").pop() || "").startsWith("claude-mcp-browser-bridge-")) try {
        let c = await import_fs.promises.lstat(r);
        if (c.isSymbolicLink()) throw Error(`[${t}] Socket directory is a symlink: ${r}. Directory may have been tampered with.`);
        if (c.isDirectory()) {
          let d = c.mode & 511;
          if (d !== 448) throw Error(`[${t}] Insecure socket directory permissions: ${d.toString(8)} (expected 0700). Directory may have been tampered with.`);
          let u = process.getuid?.();
          if (u !== void 0 && c.uid !== u) throw Error(`Socket directory not owned by current user (uid: ${u}, dir uid: ${c.uid}). Potential security risk.`);
        }
      } catch (c) {
        if (c.code !== "ENOENT") throw c;
        return n.info(`[${t}] Socket directory not found; not dialing`), false;
      }
      let o = await import_fs.promises.lstat(e);
      if (!o.isSocket()) throw Error(`[${t}] Path exists but it's not a socket: ${e}`);
      let a = o.mode & 511;
      if (a !== 384) throw Error(`[${t}] Insecure socket permissions: ${a.toString(8)} (expected 0600). Socket may have been tampered with.`);
      let l = process.getuid?.();
      if (l !== void 0 && o.uid !== l) throw Error(`Socket not owned by current user (uid: ${l}, socket uid: ${o.uid}). Potential security risk.`);
      return this.logDial(`[${t}] Socket security validation passed`), true;
    } catch (r) {
      if (r.code === "ENOENT") return n.info(`[${t}] Socket not found; not dialing`), false;
      throw r;
    }
  }
}
function Dgt(e) {
  return new at(e);
}
function bzl(e) {
  let t = Ge(e);
  if (!t) return false;
  return t.source.clear(), true;
}
