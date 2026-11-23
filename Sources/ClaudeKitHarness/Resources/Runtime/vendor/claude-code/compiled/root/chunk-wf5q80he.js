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
var chunk_wf5q80he_exports = {};
__export(chunk_wf5q80he_exports, {
  WXl: () => WXl,
  dni: () => dni
});
module.exports = __toCommonJS(chunk_wf5q80he_exports);
var import_chunk_rg2p81t1 = require("/$bunfs/root/chunk-rg2p81t1.js");
var import_chunk_tzhcnzkd = require("/$bunfs/root/chunk-tzhcnzkd.js");
var import_chunk_tryt5bb1 = require("/$bunfs/root/chunk-tryt5bb1.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_drk264d0 = require("/$bunfs/root/chunk-drk264d0.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_ddznn4yb = require("/$bunfs/root/chunk-ddznn4yb.js");
var import_chunk_929j4hj9 = require("/$bunfs/root/chunk-929j4hj9.js");
var import_chunk_w50zedgp = require("/$bunfs/root/chunk-w50zedgp.js");
var import_chunk_fbqj9ad4 = require("/$bunfs/root/chunk-fbqj9ad4.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_w4dc83v7 = require("/$bunfs/root/chunk-w4dc83v7.js");
var import_chunk_1w26p6p9 = require("/$bunfs/root/chunk-1w26p6p9.js");
var import_chunk_7z55j6ad = require("/$bunfs/root/chunk-7z55j6ad.js");
var import_chunk_52cad0n6 = require("/$bunfs/root/chunk-52cad0n6.js");
var import_chunk_c2atdz6e = require("/$bunfs/root/chunk-c2atdz6e.js");
var import_chunk_jp3c197c = require("/$bunfs/root/chunk-jp3c197c.js");
var import_chunk_3mgqz62p = require("/$bunfs/root/chunk-3mgqz62p.js");
var import_chunk_31467yzh = require("/$bunfs/root/chunk-31467yzh.js");
var import_chunk_ca9ws28w = require("/$bunfs/root/chunk-ca9ws28w.js");
var import_chunk_2atp9x7j = require("/$bunfs/root/chunk-2atp9x7j.js");
var import_chunk_yvba4101 = require("/$bunfs/root/chunk-yvba4101.js");
var import_chunk_prn6030k = require("/$bunfs/root/chunk-prn6030k.js");
var import_chunk_5rd4zsth = require("/$bunfs/root/chunk-5rd4zsth.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
function N(e) {
  let o;
  try {
    o = new URL(e);
  } catch {
    return;
  }
  if (o.host === "") return;
  return `${o.protocol}//${(0, import_chunk_52cad0n6.B$)(o.host)}`;
}
function se(e, o) {
  let t = N(e), s = N(o);
  return t === void 0 || s === void 0 || t !== s;
}
function H(e, o) {
  let t = (0, import_chunk_929j4hj9.Fi)().lastExecutedTabUrlByScope.get(e);
  if (t === void 0) return;
  return se(t, o) ? { from: t, to: o } : void 0;
}
function D(e, o) {
  (0, import_chunk_929j4hj9.Fi)().lastExecutedTabUrlByScope.set(e, o);
}
var oe = 200;
function G(e, o) {
  let t = (0, import_chunk_929j4hj9.Fi)().resolvedHostByToolUseId;
  if (t.size >= oe) t.clear();
  t.set((0, import_chunk_929j4hj9.fZ)(e), o);
}
function ie(e, o) {
  let t = (0, import_chunk_929j4hj9.Fi)().resolvedUrlByToolUseId;
  if (t.size >= oe) t.clear();
  t.set((0, import_chunk_929j4hj9.fZ)(e), o);
}
function re() {
  let { key: e, fromHost: o } = (0, import_chunk_3mgqz62p.fni)(), t = (0, import_chunk_929j4hj9.Fi)().chromeTabGroupTitle;
  if (t !== void 0 && (0, import_chunk_5rd4zsth._B)() && (0, import_chunk_2nv4wrez.Rn)("allow_chrome_tab_group_title")) return { sessionId: e, displayName: t };
  if (o) return { sessionId: e };
  let s = (0, import_chunk_f9x2f6cx.W)();
  return { sessionId: s };
}
function WXl(e, o) {
  (0, import_chunk_929j4hj9.Fi)().bridgeBinding = { context: e, socketClient: o };
}
function j(e, o) {
  let t = import_chunk_1w26p6p9.d0.slice(0, -2), s = `${import_chunk_1w26p6p9.d0}*`;
  for (let n of Object.values(e.alwaysAllowRules)) for (let r of n ?? []) {
    let p = r.replace(/\(\*?\)$/, "");
    if (p === o || p === t || p === s) return true;
  }
  return false;
}
var ae = /* @__PURE__ */ new Set(["tabs_context_mcp", "tabs_create_mcp", "tabs_close_mcp", "resize_window", "shortcuts_list", "list_connected_browsers"]), le = /* @__PURE__ */ new Set(["switch_browser", "select_browser"]), ce = { tab_missing: import_chunk_prn6030k.eIo, batch_multiple_tabs: import_chunk_prn6030k.nIo, batch_after_navigate: "Claude in Chrome: a browser_batch cannot act on a page after navigating to it. Issue the navigate on its own, then batch the actions on the loaded page.", batch_browser_switch: "Claude in Chrome: switch browsers in its own call, not inside a browser_batch.", batch_malformed_item: "Claude in Chrome: a browser_batch action must be {name, input} and cannot nest another browser_batch." };
function de(e, o) {
  let t = [];
  if (e === "browser_batch") {
    if (!Array.isArray(o.actions)) return { kind: "deny", code: "batch_malformed_item" };
    for (let r of o.actions) {
      if (!(0, import_chunk_ma3kja9f.T)(r) || typeof r.name !== "string" || r.name === "browser_batch") return { kind: "deny", code: "batch_malformed_item" };
      t.push({ name: r.name, input: (0, import_chunk_ma3kja9f.T)(r.input) ? r.input : {} });
    }
  } else t.push({ name: e, input: o });
  let s = /* @__PURE__ */ new Set(), n = false;
  for (let r of t) {
    if (r.name === "navigate") {
      n = true;
      continue;
    }
    if (le.has(r.name)) {
      if (t.length > 1) return { kind: "deny", code: "batch_browser_switch" };
      continue;
    }
    if (ae.has(r.name)) continue;
    if (n) return { kind: "deny", code: "batch_after_navigate" };
    if (typeof r.input.tabId !== "number") return { kind: "deny", code: "tab_missing" };
    s.add(r.input.tabId);
  }
  if (s.size === 0) return { kind: "none" };
  if (s.size > 1) return { kind: "deny", code: "batch_multiple_tabs" };
  return { kind: "tab", tabId: [...s][0] };
}
var ne = 5e3, me = 2500, fe = /* @__PURE__ */ new Set(["connect_timeout", "no_browser_selected_timeout", "browser_selected_late_timeout", "answer_timeout"]);
async function z(e) {
  let o = import_chunk_5appeerh.Gi.monotonicNow(), t = Promise.withResolvers(), s = new AbortController(), n = x({ onSentToSelectedBrowser: t.resolve }).then((c) => (s.abort(), Y(c, e))), r = { sent: false }, p = t.promise.then(async () => {
    await (0, import_chunk_5appeerh.K)(me, s.signal);
    let c = ne - (import_chunk_5appeerh.Gi.monotonicNow() - o), d = (0, import_chunk_929j4hj9.Fi)().bridgeBinding?.socketClient;
    if (s.signal.aborted || c <= 0 || d?.isConnected() !== true || d.hasActiveSelection?.() !== true) return;
    r.sent = true;
    let a = Y(await x({ capMs: c }), e);
    if (F(a)) return a;
    if (a.ok || !fe.has(a.failure)) r.callMs = a.callMs;
    return;
  }).catch((c) => {
    (0, import_chunk_k449cc64.i)(c);
    return;
  }), g = await Promise.race([n.then(() => {
    return;
  }), p]);
  if (g === void 0) {
    let c = await n;
    if (r.sent && !c.ok && c.failure === "answer_timeout") return { ...c, failure: "answer_timeout_after_retry", retryCallMs: r.callMs };
    return c;
  }
  return n.then((c) => {
    let d = { connect_ms: c.connectMs, call_ms: c.callMs, retry_call_ms: g.callMs }, a = F(c);
    if (a) {
      if ((0, import_chunk_52cad0n6.B$)(a.host) !== (0, import_chunk_52cad0n6.B$)(F(g)?.host ?? "")) (0, import_chunk_cqa9hrgx.l)("chrome_permission_prompt", "tab_lookup_hosts_differed", d);
      return;
    }
    let h = c.ok ? "non_web_tab_url" : c.failure;
    if (h === "answer_timeout") {
      (0, import_chunk_cqa9hrgx.l)("chrome_permission_prompt", "tab_lookup_rescued_after_answer_timeout", d);
      return;
    }
    (0, import_chunk_cqa9hrgx.l)("chrome_permission_prompt", "tab_lookup_rescued_after_failure", { ...d, first_lookup_failure: (0, import_chunk_78g0060s.f)(h) });
  }).catch(import_chunk_k449cc64.i), g;
}
function q(e) {
  return { connect_ms: e.connectMs, call_ms: e.callMs, ...!e.ok && e.retryCallMs !== void 0 && { retry_call_ms: e.retryCallMs } };
}
async function V(e, o) {
  let t = "Couldn't determine which page this action targets. Re-read tabs_context_mcp and try again.", s = (0, import_chunk_929j4hj9.Fi)().bridgeBinding;
  if (s && o.toolUseId && o.permissionRound !== void 0 && !e.ok && (e.failure === "not_connected" || e.failure === "no_extension") && (0, import_chunk_865at33z.b)(import_chunk_2atp9x7j.c7r, false)) try {
    let n = s.context.onToolCallDisconnected(), [r] = (await (0, import_chunk_7z55j6ad.$oi)({ content: [{ type: "text", text: n }] }, o)).content;
    if (r?.type === "text") t = r.text;
  } catch (n) {
    (0, import_chunk_k449cc64.i)(n);
  }
  return { behavior: "deny", message: t, decisionReason: { type: "safetyCheck", reason: "Claude in Chrome: tab URL unresolved", classifierApprovable: false } };
}
function F(e) {
  return e.ok ? (0, import_chunk_52cad0n6.SJt)(e.url) : void 0;
}
function Y(e, o) {
  if (!e.ok) return e;
  let { tabs: t, connectMs: s, callMs: n } = e, r = t.findIndex((g) => g == null || g.tabId === o), p = t[r];
  if (r === -1) return { ok: false, failure: t.length === 0 ? "empty_tab_list" : "tab_not_listed", connectMs: s, callMs: n };
  if (p == null || typeof p.url !== "string") return { ok: false, failure: "malformed_tab_list", connectMs: s, callMs: n };
  if (p.url === "") return { ok: false, failure: "tab_url_empty", connectMs: s, callMs: n };
  return { ok: true, url: p.url, connectMs: s, callMs: n };
}
async function Q(e, o) {
  let t = await e.callTool("tabs_context_mcp", { createIfEmpty: false, includePermissionState: false }, { permissionMode: "ask", sessionScope: o });
  if (!t) return "empty_result";
  if (t.error) return `tool_error_${(0, import_chunk_tzhcnzkd.ior)("tabs_context_mcp", (0, import_chunk_tzhcnzkd.PAn)(t.error))}`;
  let s = t.result?.content, n = Array.isArray(s) && s[0] && typeof s[0] === "object" && "text" in s[0] && typeof s[0].text === "string" ? s[0].text : void 0;
  if (!n) return "no_text";
  let r;
  try {
    r = (0, import_chunk_w578pjby.te)(n);
  } catch {
    return n.includes("createIfEmpty") ? "no_tab_group" : "not_json";
  }
  let p = r?.availableTabs;
  return Array.isArray(p) ? p : "no_tab_list";
}
async function x(e) {
  await (0, import_chunk_c2atdz6e.cni)();
  let o = import_chunk_5appeerh.Gi.monotonicNow(), t = {}, s;
  try {
    let g = (0, import_chunk_929j4hj9.Fi)().bridgeBinding;
    if (!g) return { ok: false, failure: "binding_missing", connectMs: 0, callMs: 0 };
    let { socketClient: c } = g;
    s = await (0, import_chunk_5appeerh.qt)((async () => {
      if (!await c.ensureConnected()) return "not_connected";
      if (t.browserSelected = c.hasActiveSelection?.(), t.startedAt = import_chunk_5appeerh.Gi.monotonicNow(), t.browserSelected === true) e?.onSentToSelectedBrowser?.();
      let d = re(), a = await Q(c, d);
      if (a !== "no_tab_group" || d.displayName === void 0) return a;
      return Q(c, { sessionId: d.sessionId });
    })().catch((d) => {
      if (t.startedAt === void 0) return "connect_threw";
      if (d instanceof Error && (d.name === "SocketConnectionError" || d.name === "ToolCallLostError")) return "connection_lost";
      if (d instanceof import_chunk_tzhcnzkd.$tt) return "no_extension";
      if (d instanceof import_chunk_tzhcnzkd.RMe) return "extension_disconnected";
      return "call_threw";
    }), e?.capMs ?? ne, "queryTabUrl bridge call").catch(() => {
      if (t.startedAt === void 0) return "connect_timeout";
      if (c.hasActiveSelection?.() === false) return "no_browser_selected_timeout";
      return t.browserSelected === false ? "browser_selected_late_timeout" : "answer_timeout";
    });
  } catch {
    s = "other_threw";
  }
  let n = import_chunk_5appeerh.Gi.monotonicNow(), r = Math.round((t.startedAt ?? n) - o), p = t.startedAt === void 0 ? 0 : Math.round(n - t.startedAt);
  return typeof s === "string" ? { ok: false, failure: s, connectMs: r, callMs: p } : { ok: true, tabs: s, connectMs: r, callMs: p };
}
(0, import_chunk_jp3c197c.KFa)(async () => {
  let e = await x();
  return e.ok ? e.tabs : void 0;
});
var pe = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]);
function X(e) {
  return { type: "text", text: `[Image from Claude in Chrome \u2014 ${e}; not inlined]` };
}
function _e(e) {
  if (!e) return false;
  let o = (0, import_chunk_7cfjrnwy.nt)(e, ";").trim().toLowerCase();
  return pe.has(o === "image/jpg" ? "image/jpeg" : o);
}
async function be(e, o) {
  let t = (0, import_chunk_yvba4101.ac)(o), s = [];
  for (let n of e.content ?? []) if (n.type === "text") s.push({ type: "text", text: n.text });
  else if (n.type === "image") if (_e(n.mimeType)) try {
    let { block: r } = await (0, import_chunk_fbqj9ad4.EA)({ data: String(n.data), mediaType: n.mimeType, limits: t });
    s.push(r);
  } catch {
    s.push(X("could not be decoded"));
  }
  else s.push(X(`unsupported type ${n.mimeType ?? "unknown"}`));
  return s;
}
function he(e) {
  if (!Array.isArray(e.actions)) return false;
  return e.actions.some((o) => {
    if (!(0, import_chunk_ma3kja9f.T)(o) || typeof o.name !== "string") return true;
    return o.name === "browser_batch" || import_chunk_rg2p81t1.tye.has(o.name) && !(0, import_chunk_sjqze7qg.ACe)(o.name, (0, import_chunk_ma3kja9f.T)(o.input) ? o.input : {});
  });
}
function J(e, o) {
  return { source: o, ruleBehavior: "allow", ruleValue: { toolName: import_chunk_1w26p6p9.g7, ruleContent: e } };
}
function ee(e, o, t) {
  let s = (0, import_chunk_31467yzh.jgt)(e, o);
  return t ? `Allow Claude in Chrome to ${s} on ${t}?` : `Allow Claude in Chrome to ${s}?`;
}
function ge(e, o) {
  return async (t) => {
    let s;
    try {
      s = new URL(t.url);
    } catch {
    }
    let n = !!s?.host && e.has((0, import_chunk_52cad0n6.B$)(s.host)) && !(0, import_chunk_52cad0n6.p7r)(o, (0, import_chunk_52cad0n6.B$)((0, import_chunk_52cad0n6.ARn)({ url: s.href })));
    if (!n) (0, import_chunk_cqa9hrgx.m)("chrome_permission_prompt", "stale_host_mismatch");
    return n;
  };
}
function Ce(e, o) {
  if (e !== "browser_batch") return e === "navigate";
  let t = (0, import_chunk_ma3kja9f.T)(o) ? o.actions : void 0;
  return Array.isArray(t) && t.some((s) => (0, import_chunk_ma3kja9f.T)(s) && s.name === "navigate");
}
async function we(e, o, t, s, n, r, p) {
  let g = (0, import_chunk_929j4hj9.Fi)().bridgeBinding;
  if (!g) throw (0, import_chunk_cqa9hrgx.m)("chrome_permission_prompt", "binding_missing"), Error("Claude in Chrome bridge is not initialized in this session.");
  if (t.aborted) throw new import_chunk_jv7av99m.Ie("Claude in Chrome tool call aborted");
  let c, d = new Promise((I, w) => {
    c = () => w(new import_chunk_jv7av99m.Ie("Claude in Chrome tool call aborted")), t.addEventListener("abort", c, { once: true });
  }), a, h = r?.mark("external");
  try {
    a = await Promise.race([(0, import_chunk_tryt5bb1.P8r)(g.context, g.socketClient, e, (0, import_chunk_sjqze7qg.Yso)(o ?? {}), n), d]);
  } finally {
    if (h?.(), Ce(e, o)) (0, import_chunk_929j4hj9.Fi)().lastNavigateEndedAt = import_chunk_5appeerh.Gi.monotonicNow();
    if (c) t.removeEventListener("abort", c);
  }
  if (a.isError) {
    let I = (a.content ?? []).flatMap((R) => R.type === "text" ? [R.text] : []).join(`
`) || `${e} failed`, w = a._meta, v = w?.toolCallFailureCause, S = w?.isBridgeTimeout === true ? "bridge_timeout" : w?.isFrontLoadBoundExceeded === true ? "front_load_bound_exceeded" : v === "connection_lost_mid_call" || v === "connection_lost_before_call" ? v : void 0, k = (0, import_chunk_ma3kja9f.T)(w) ? (0, import_chunk_w4dc83v7.PH)(w) : void 0;
    throw Object.assign(new import_chunk_yz5b8aaa.Bm(I, "Claude in Chrome tool returned error", k ? { _meta: k } : void 0, `chrome_${S ?? (0, import_chunk_tzhcnzkd.ior)(e, I)}`), { mcpErrorSource: "other" });
  }
  let y = await be(await (0, import_chunk_7z55j6ad.$oi)(a, p), s), M = (0, import_chunk_w4dc83v7.PH)(a._meta);
  return { data: y, ...M && { mcpMeta: { _meta: M } } };
}
function dni(e) {
  let o = `${import_chunk_1w26p6p9.d0}${e}`;
  return { checkPermissions: async (n, r) => {
    (0, import_chunk_ca9ws28w.a7r)(r.options?.messageClientPlatform);
    let p = r.toolUseId, g = import_chunk_rg2p81t1.tye.has(e);
    if (g && (0, import_chunk_sjqze7qg.ACe)(e, n)) {
      let _ = (0, import_chunk_bz1f2qnq.Z)(r);
      if (_?.chromeHostToolAsksEnabled !== false && _?.mcpAskForTools?.[import_chunk_prn6030k.Xi]?.includes(e) === true && !(0, import_chunk_pbteexar.EI)(_) && _.mode !== "dontAsk") return { behavior: "ask", message: "Claude in Chrome requires permission.", suppressAlwaysAllowRule: true, decisionReason: { type: "other", reason: "Claude in Chrome action" }, metadata: { command: { name: o, description: ee(e, n, void 0) } } };
      return { behavior: "allow", updatedInput: n };
    }
    let c = g && !(0, import_chunk_sjqze7qg.ACe)(e, n) || e === "browser_batch" && he(n);
    if (e === "navigate" && typeof n.url === "string" && (n.url.trim().toLowerCase() === "back" || n.url.trim().toLowerCase() === "forward")) return { behavior: "allow", updatedInput: n };
    let d = e === "browser_batch" ? (0, import_chunk_52cad0n6.nsr)(n) : { input: n, toolName: e }, a;
    if (d && d.toolName === "navigate" && typeof d.input.url === "string") {
      if (a = (0, import_chunk_52cad0n6.SJt)(d.input.url), !a) return (0, import_chunk_cqa9hrgx.m)("chrome_permission_prompt", "non_web_url"), { behavior: "deny", message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.", decisionReason: { type: "safetyCheck", reason: "Claude in Chrome: non-web or unparseable URL", classifierApprovable: false } };
    } else if (d && typeof d.input.tabId === "number") {
      let _ = await z(d.input.tabId);
      if (!_.ok) return (0, import_chunk_cqa9hrgx.m)("chrome_permission_prompt", `tab_url_unresolved_${_.failure}`, q(_)), V(_, r);
      if (a = (0, import_chunk_52cad0n6.SJt)(_.url), !a) return (0, import_chunk_cqa9hrgx.m)("chrome_permission_prompt", "non_web_tab_url"), { behavior: "deny", message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.", decisionReason: { type: "safetyCheck", reason: "Claude in Chrome: non-web or unparseable tab URL", classifierApprovable: false } };
    }
    let h = (0, import_chunk_bz1f2qnq.Z)(r), y = (0, import_chunk_xcgcdx61.da)(r.options?.tools?.find((_) => (0, import_chunk_4vsz8a99.gt)(_, o)), h), M = y === "bypassPermissions" || (0, import_chunk_xcgcdx61.OM)(y, h.isBypassPermissionsModeAvailable), I = h.chromeNavigationClassifierEnabled === true && !M && (h.chromeClassifierFloorEnabled === true || (0, import_chunk_xfj2cwfv.Jr)(y)), w, v, S = () => {
      if (!p) return;
      if (v === void 0) (0, import_chunk_929j4hj9.Fi)().resolvedUrlByToolUseId.delete((0, import_chunk_929j4hj9.fZ)(p));
      else ie(p, v);
      if (w === void 0) (0, import_chunk_bzyb60p0.iQt)(p);
    };
    if (I) {
      let _ = de(e, n);
      if (_.kind === "deny") return (0, import_chunk_cqa9hrgx.m)("chrome_permission_prompt", _.code), S(), { behavior: "deny", message: ce[_.code], decisionReason: { type: "safetyCheck", reason: `Claude in Chrome: ${_.code}`, classifierApprovable: false } };
      if (_.kind === "tab") {
        let C = a && d?.toolName !== "navigate" && d?.input.tabId === _.tabId ? { ok: true, url: a.url, connectMs: 0, callMs: 0 } : await z(_.tabId), B = C.ok ? (0, import_chunk_52cad0n6.SJt)(C.url) : void 0;
        if (B === void 0) return (0, import_chunk_cqa9hrgx.m)("chrome_permission_prompt", `tab_url_unresolved_${C.ok ? "non_web_tab_url" : C.failure}`, q(C)), S(), V(C, r);
        if (w = H((0, import_chunk_3mgqz62p.oor)(), B.url), !(c && h.mode === "plan")) v = B.url;
      }
    }
    S();
    let k = e === "browser_batch" ? (0, import_chunk_52cad0n6.a8o)(n) : [];
    if (k === "unvettable") return (0, import_chunk_cqa9hrgx.m)("chrome_permission_prompt", "non_web_url"), { behavior: "deny", message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.", decisionReason: { type: "safetyCheck", reason: "Claude in Chrome: non-web or unparseable URL", classifierApprovable: false } };
    let R = (0, import_chunk_52cad0n6.Fue)(h), L = [...a ? [a.host, (0, import_chunk_52cad0n6.ARn)(a)] : [], ...k].map((_) => (0, import_chunk_52cad0n6.yTe)(R, _)).find((_) => _ !== void 0);
    if (L) return (0, import_chunk_cqa9hrgx.l)("chrome_permission_prompt", "domain_rule_denied"), L;
    let E = false, U;
    if (a) {
      let _ = (0, import_chunk_52cad0n6.B$)(a.host), C = R.sourceOf.get(_) ?? "session";
      if (E = R.allowed.has(_), U = E ? J(a.host, C) : void 0, E && w === void 0 && h.chromeClassifierFloorEnabled !== true && !c) {
        if (p) G(p, a);
        return { behavior: "allow", updatedInput: n, decisionReason: { type: "rule", rule: J(a.host, C) } };
      }
      if (p && (E || h.chromeClassifierFloorEnabled === true || !j(h, o))) G(p, a);
    }
    let P = (0, import_chunk_929j4hj9.Fi)().bridgeBinding;
    if (p && P && !M && !(h.chromeClassifierFloorEnabled !== true && j(h, o)) && await (0, import_chunk_ca9ws28w.zUa)(r.abortController.signal)) return { behavior: "deny", message: P.context.onToolCallDisconnected(), decisionReason: { type: "other", reason: "Claude in Chrome: no browser connected" } };
    let O = await (0, import_chunk_7z55j6ad.s7r)(e, n, r, h, () => (0, import_chunk_ca9ws28w.KUa)(r.abortController.signal));
    if (O !== void 0) return O;
    if (c && h.mode === "plan") return { behavior: "passthrough", message: "Claude in Chrome requires permission.", suggestions: [{ type: "addRules", rules: [{ toolName: o, ruleContent: void 0 }], behavior: "allow", destination: "session" }] };
    return { behavior: "ask", message: "Claude in Chrome requires permission.", suggestions: a ? E ? void 0 : [{ type: "addRules", rules: [{ toolName: import_chunk_1w26p6p9.g7, ruleContent: a.host }], behavior: "allow", destination: "session" }] : [{ type: "addRules", rules: [{ toolName: o, ruleContent: void 0 }], behavior: "allow", destination: "session" }], decisionReason: w ? { type: "safetyCheck", reason: "Claude in Chrome: cross-site navigation pending", classifierApprovable: true } : { type: "other", reason: a ? import_chunk_ddznn4yb.jwo + a.host : "Claude in Chrome action" }, metadata: { command: { name: o, description: ee(e, n, a?.host), chrome: a ? { ...a, domainAllowed: E, navigation: w, ...U && { grantRule: U, classifierUnavailable: h.chromeClassifierFloorEnabled === true && h.canAutoClassifierRun === false } } : void 0 } } };
  }, call: async (n, r, p, g, c, d) => {
    let a = r.toolUseId && (0, import_chunk_929j4hj9.fZ)(r.toolUseId), h = a ? (0, import_chunk_929j4hj9.Fi)().resolvedHostByToolUseId.get(a) : void 0, y = h?.host, M = a ? (0, import_chunk_929j4hj9.Fi)().resolvedUrlByToolUseId.get(a) : void 0;
    if (a) (0, import_chunk_929j4hj9.Fi)().resolvedHostByToolUseId.delete(a), (0, import_chunk_929j4hj9.Fi)().resolvedUrlByToolUseId.delete(a);
    if ((0, import_chunk_r3kja8v6.ue)() && (0, import_chunk_w50zedgp.pV)({ agentId: r.agentId, stickyBetas: r.stickyBetas, namesShownToApi: r.namesShownToApi, toolName: o })) throw new import_chunk_jv7av99m.A((0, import_chunk_w50zedgp.pV)() ? (0, import_chunk_w50zedgp.Nbe)() : (0, import_chunk_w50zedgp.Bbr)(), "Claude in Chrome call refused in REPL mode");
    let I = (0, import_chunk_7z55j6ad.i7r)(r.permissionPhase, n);
    if (I !== void 0) return I;
    await (0, import_chunk_c2atdz6e.cni)();
    let w = (0, import_chunk_bz1f2qnq.Z)(r), v = (0, import_chunk_52cad0n6.Fue)(w), S = v.allowed, k = [...v.allowedRaw], R = h && [h.host, h.url === void 0 ? `${h.host}:80` : (0, import_chunk_52cad0n6.ARn)({ url: h.url })].map((C) => (0, import_chunk_52cad0n6.yTe)(v, C)).find((C) => C !== void 0);
    if (R) throw (0, import_chunk_cqa9hrgx.l)("chrome_permission_prompt", "domain_rule_denied"), new import_chunk_jv7av99m.A(R.message, "Claude in Chrome call refused under a deny rule");
    if (y && !S.has((0, import_chunk_52cad0n6.B$)(y))) S.add((0, import_chunk_52cad0n6.B$)(y)), k.push(y);
    let L = r.options?.tools?.find((C) => (0, import_chunk_4vsz8a99.gt)(C, o)), E = (0, import_chunk_xcgcdx61.da)(L, w), U = E === "bypassPermissions" || E === "auto" && r.autoModeClassified === true && y !== void 0 && v.denied.size === 0 && h?.keepHostPin !== true, P = re(), O = U ? { permissionMode: "skip_all_permission_checks", sessionScope: P } : y ? { permissionMode: "follow_a_plan", allowedDomains: k, onPermissionRequest: ge(S, v.denied), sessionScope: P } : k.length > 0 ? { permissionMode: "follow_a_plan", allowedDomains: k, sessionScope: P } : { permissionMode: "ask", sessionScope: P }, _ = await we(e, n, r.abortController.signal, r.modelFacts.model, O, d?.timing, r);
    if (M !== void 0) {
      let C = (0, import_chunk_3mgqz62p.oor)();
      if ((0, import_chunk_drk264d0.Z_)(r) === void 0 || !(0, import_chunk_929j4hj9.Fi)().lastExecutedTabUrlByScope.has(C)) D(C, M);
    }
    if (y) (0, import_chunk_cqa9hrgx.u)("chrome_permission_prompt");
    return _;
  }, ignoresWholeToolAllowRule: (n) => import_chunk_rg2p81t1.tye.has(e) && (0, import_chunk_sjqze7qg.ACe)(e, n) };
}
