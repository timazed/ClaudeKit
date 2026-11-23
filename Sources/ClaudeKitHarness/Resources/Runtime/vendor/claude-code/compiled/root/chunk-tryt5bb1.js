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
var chunk_tryt5bb1_exports = {};
__export(chunk_tryt5bb1_exports, {
  P8r: () => P8r,
  q5o: () => q5o,
  sor: () => sor
});
module.exports = __toCommonJS(chunk_tryt5bb1_exports);
var import_chunk_rg2p81t1 = require("/$bunfs/root/chunk-rg2p81t1.js");
var import_chunk_tzhcnzkd = require("/$bunfs/root/chunk-tzhcnzkd.js");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
var U = { "image/png": "png", "image/jpeg": "jpg", "image/webp": "webp", "image/gif": "gif" }, me = "Screenshot saved to: ", ye = 0, R;
function W() {
  return R ??= (0, import_promises.mkdtemp)((0, import_path.join)((0, import_os.tmpdir)(), "claude-chrome-screenshots-")).catch((e) => {
    throw R = void 0, e;
  }), R;
}
async function Te(e) {
  if (e.getScreenshotSaveDir) {
    let t = e.getScreenshotSaveDir();
    if (t === void 0) return;
    return await (0, import_promises.mkdir)(t, { recursive: true, mode: 448 }), t;
  }
  let n = await W();
  try {
    let t = await (0, import_promises.lstat)(n), o = process.getuid;
    if (t.isDirectory() && (o === void 0 || t.uid === o() && (t.mode & 511) === 448)) return n;
  } catch {
  }
  return R = void 0, W();
}
async function z(e, n) {
  if (e.isError || !e.content.some((a) => a.type === "image")) return e;
  let t;
  try {
    t = await Te(n);
  } catch (a) {
    return n.logger.warn(`[${n.serverName}] save_to_disk: could not prepare screenshot directory: ${a instanceof Error ? a.message : String(a)}`), { ...e, content: [...e.content, { type: "text", text: "Note: save_to_disk failed \u2014 the screenshot directory could not be created. The image is included inline above." }] };
  }
  if (t === void 0) return { ...e, content: [...e.content, { type: "text", text: "Note: save_to_disk had no effect \u2014 screenshots are not persisted to disk in this session. The image is included inline above; refer to it directly. Do not retry with save_to_disk." }] };
  let o = [], r = false, i = false;
  for (let a of e.content) {
    if (o.push(a), a.type !== "image") continue;
    let s = Object.hasOwn(U, a.mimeType) ? U[a.mimeType] : "png", d = (0, import_path.join)(t, `screenshot-${Date.now()}-${ye++}.${s}`);
    try {
      await (0, import_promises.writeFile)(d, Buffer.from(a.data, "base64"), { flag: "wx", mode: 384 }), r = true, o.push({ type: "text", text: `${me}${d}` });
    } catch (u) {
      i = true, n.logger.warn(`[${n.serverName}] save_to_disk: failed to write screenshot: ${u instanceof Error ? u.message : String(u)}`);
    }
  }
  if (r) o.push({ type: "text", text: "Include the saved path(s) in your response so they can be attached for the user." });
  if (i) o.push({ type: "text", text: "Note: save_to_disk failed for at least one screenshot \u2014 it could not be written to disk. The image is included inline above." });
  return { ...e, content: o };
}
var k = /* @__PURE__ */ new WeakMap();
function q5o(e) {
  k.delete(e), P(e), e.clearSelection?.();
}
var _e = 500, I = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap(), re = 0;
function P(e) {
  I.delete(e), A.set(e, re);
}
function K(e, n, t) {
  let o = N.get(e);
  if (!o) o = /* @__PURE__ */ new Map(), N.set(e, o);
  let r = (o.get(n) ?? 0) + t;
  if (r > 0) o.set(n, r);
  else o.delete(n);
}
function se(e, n, t) {
  let o = I.get(e);
  if (!o) o = /* @__PURE__ */ new Map(), I.set(e, o);
  if (o.delete(n), o.set(n, t), o.size > _e) {
    let r = o.keys().next().value;
    if (r !== void 0) {
      let i = o.get(r)?.seq ?? 0;
      A.set(e, Math.max(A.get(e) ?? 0, i)), o.delete(r);
    }
  }
}
function Ce(e) {
  let n = typeof e === "string" && e.trim() !== "" ? Number(e) : e;
  return typeof n === "number" && Number.isInteger(n) ? n : void 0;
}
function Se(e) {
  return typeof e?.input === "object" && e.input !== null ? e.input : {};
}
function ve(e) {
  return e === void 0 || e === null ? "default" : Ce(e);
}
function X(e, n) {
  if (typeof e !== "string") return;
  let t = ve(n.tabId);
  if (e === "navigate" && (0, import_chunk_rg2p81t1.zoi)(e, n)) return { historyMove: t ?? "default" };
  return t !== void 0 && import_chunk_rg2p81t1.eBa.has(e) && !(0, import_chunk_rg2p81t1.zoi)(e, n) ? { set: t } : void 0;
}
function ke(e, n) {
  if (e !== "browser_batch") {
    let r = X(e, n);
    return r ? [r] : [];
  }
  let o = (Array.isArray(n.actions) ? n.actions : []).flatMap((r) => X(r?.name, Se(r)) ?? []);
  return n.tabId === void 0 || n.tabId === null || typeof n.tabId === "number" ? o : o.filter((r) => "historyMove" in r);
}
var q = (e) => e?.hostSessionId ?? e?.sessionScope?.sessionId;
function Q(e, n, t, o) {
  let r = t.flatMap((d) => "historyMove" in d ? [d.historyMove] : []);
  if (!n || r.length === 0) return;
  let i = I.get(e)?.get(n), a = Math.max(i?.seq ?? 0, o), s = i?.tabId === void 0 || r.some((d) => d === "default" || d === i.tabId);
  se(e, n, s ? { historyMoved: true, seq: a } : { ...i, seq: a });
}
function Ie(e, n, t, { ownerBefore: o, ...r }) {
  let i = q(n);
  if (!i || !t.some((u) => "set" in u)) return;
  let a = I.get(e)?.get(i);
  if (a && a.seq > r.seq || r.seq <= (A.get(e) ?? 0)) return;
  let s = a?.tabId, d = a?.historyMoved;
  for (let u of t) if ("set" in u) s = u.set === "default" ? void 0 : u.set, d = void 0;
  else if (s === void 0 || u.historyMove === "default" || u.historyMove === s) s = void 0, d = true;
  se(e, i, { ...r, ...e.browserOfTab && { deviceId: s !== void 0 && e.browserOfTab(s) === o ? o : void 0 }, ...s !== void 0 && { tabId: s }, ...d && { historyMoved: d }, tabGroupId: n?.sessionScope?.tabGroupId });
}
function M(e, n) {
  return G(e, n).replace(/[\p{Cc}\p{Cf}\p{Default_Ignorable_Code_Point}]/gu, " ").replace(/[\p{Quotation_Mark}\u02BA\u02DD\u02EE\u05F4\u2033\u3003]+/gu, "'").replace(/\s+/g, " ").replace(/this\s*computer/giu, "[?]").trim() || `Browser ${n + 1}`;
}
function G(e, n) {
  let t = (e.name ?? "").replace(/[\r\n\t\u0000-\u001f]/g, " ").trim();
  if (!t) return `Browser ${n + 1}`;
  return t.length > 50 ? `${t.slice(0, 50)}\u2026` : t;
}
var ie = /* @__PURE__ */ new Map([["macOS", "macOS"], ["Windows", "Windows"], ["Linux", "Linux"], ["Chrome OS", "Chrome OS"], ["Chromium OS", "Chromium OS"], ["Android", "Android"], ["iOS", "iOS"], ["MacIntel", "macOS"], ["Win32", "Windows"], ["Linux x86_64", "Linux"], ["Linux aarch64", "Linux"], ["Linux armv8l", "Linux"]]);
function xe(e) {
  return e !== void 0 && ie.get(e) || "unknown OS";
}
async function ae(e, n) {
  if (!n.listConnectedExtensions) return k.set(n, true), null;
  if (k.get(n) && n.hasActiveSelection?.()) return null;
  k.delete(n), P(n);
  let t = await n.listConnectedExtensions();
  if (t.length === 0) return null;
  if (await n.awaitPreviousBrowser?.()) return ae(e, n);
  let o = t.length > 1 ? await (0, import_chunk_tzhcnzkd.zXt)(e.getLocalDeviceIds) : void 0, r = (0, import_chunk_tzhcnzkd.MAn)(t, n.getSelectedDeviceId?.(), o);
  if (r.kind !== "ask") return k.set(n, true), null;
  let { candidates: i, localCount: a } = r, s = i.slice(0, 8), d = (f, g) => `${g + 1}. "${M(f, g)}" (${xe(f.osPlatform)}) \u2014 deviceId: ${f.deviceId}`, u = s.slice(0, a).map(d), l = s.slice(a).map((f, g) => d(f, g + u.length)), c = a > 0 ? `Browsers on this computer:
${u.join(`
`)}

Other connected browsers:
${l.join(`
`) || (i.length === a ? "(none)" : "")}` : `Connected browsers:
${l.join(`
`)}`, b = i.length > s.length ? `
\u2026and ${i.length - s.length} more not shown` : "";
  return { content: [{ type: "text", text: `${a > 0 ? `${i.length} Chrome browsers are connected to this account, ${a} of them on this computer, and none has been selected for this session. ` : "Multiple Chrome browsers are connected to this account and none has been selected for this session. "}${(0, import_chunk_rg2p81t1.u8o)(e.askUserToolName)}${a > 0 ? " List the browsers on this computer first, in the order below." : ""}

${c}${b}` }], isError: true, _meta: _("no_browser_selected") };
}
function de(e) {
  return JSON.stringify(e, (n, t) => typeof t === "string" && t.length > 256 ? `<${t.length} chars elided>` : t);
}
function F(e, n, t, o, r, i) {
  if (e.isDisabled?.()) return Promise.reject(new import_chunk_tzhcnzkd.qDt(`disabled: ${t} not sent`));
  return i ? n.callTool(t, o, r, i) : n.callTool(t, o, r);
}
async function B(e, n, t, o) {
  if (e.isDisabled?.()) return;
  try {
    if (!await n.ensureConnected()) return;
    let i = (await F(e, n, "tabs_context_mcp", {}, t ? { ...t, permissionMode: "ask" } : void 0, o))?.result?.content;
    if (!Array.isArray(i)) return;
    let a;
    for (let s of i) {
      if (typeof s !== "object" || s === null || s.type !== "text" || typeof s.text !== "string") continue;
      try {
        let d = JSON.parse(s.text);
        if (Array.isArray(d.availableTabs)) {
          a = { ...d, availableTabs: d.availableTabs };
          break;
        }
      } catch {
      }
    }
    if (!a) return;
    return { tabs: a.availableTabs.filter((s) => typeof s === "object" && s !== null && typeof s.tabId === "number" && typeof s.url === "string"), ...typeof a.selectedTabId === "number" && { selectedTabId: a.selectedTabId }, ...typeof a.tabGroupId === "number" && { tabGroupId: a.tabGroupId } };
  } catch (r) {
    e.logger.debug(`[${e.serverName}] tab lookup failed`, r);
    return;
  }
}
function j(e, n) {
  try {
    return { tabId: e.tabId, origin: new URL(e.url).origin, ...n !== void 0 && { deviceId: n } };
  } catch {
    return;
  }
}
function O(e) {
  return e.hasActiveSelection?.() === false ? void 0 : e.getSelectedDeviceId?.();
}
async function ue(e, n, t) {
  let o = async (s) => {
    let d = await B(e, n, t, s !== void 0 ? { requireDeviceId: s } : void 0);
    return d && { probe: d, deviceId: s };
  }, r = O(n);
  if (r !== void 0) return o(r);
  let i = await o(void 0), a = O(n);
  if (a !== void 0) return o(a);
  return n.getSelectedDeviceId ? void 0 : i;
}
async function Ee(e, n, t, o) {
  let r = await ue(e, n, t);
  if (!r) return;
  let { probe: i, deviceId: a } = r, { tabs: s, selectedTabId: d } = i, u = q(t), l = e.useLastActedTab?.() ?? true, c = u && l ? I.get(n)?.get(u) : void 0, b = u !== void 0 && N.get(n)?.has(u) === true, p = !b && c?.tabId !== void 0 && (n.browserOfTab ? c.deviceId !== void 0 && c.deviceId === n.browserOfTab(c.tabId) : c.deviceId === a) && (c.tabGroupId === void 0 || i.tabGroupId === void 0 || c.tabGroupId === i.tabGroupId) ? s.find((T) => T.tabId === c.tabId) : void 0, f = p ? void 0 : !u ? "no_session" : !l ? "switched_off" : !c ? "never_acted" : b || c.historyMoved ? "history_moved" : c.tabId === void 0 ? "acted_on_main_tab" : "not_in_group", [g, y] = p ? [p, "agent_last_tab"] : d !== void 0 ? [s.find((T) => T.tabId === d), "group_main_tab"] : [s.length === 1 ? s[0] : void 0, "only_tab"], w = a ?? (g && n.browserOfTab?.(g.tabId)), C = g && (w !== void 0 || !n.browserOfTab) ? j(g, w) : void 0;
  return o?.({ ...C && { target: y }, ...f && { fallback: f } }), C;
}
async function Re(e, n, t, o, r) {
  if (n.browserOfTab) {
    let d = (await B(e, n, t))?.tabs.find((u) => u.tabId === o);
    return d && n.browserOfTab(o) === r ? j(d, r) : void 0;
  }
  let i = r !== void 0 ? await B(e, n, t, { requireDeviceId: r }).then((s) => s && { probe: s, deviceId: r }) : await ue(e, n, t);
  if (!i || i.deviceId !== r) return;
  let a = i.probe.tabs.find((s) => s.tabId === o);
  return a && j(a, r);
}
function Ae(e) {
  if (typeof e !== "object" || e === null) return "";
  let t = e.error?.content;
  return typeof t === "string" || Array.isArray(t) ? t : "";
}
function ce(e) {
  let n = typeof e === "object" && e !== null && !("error" in e) ? e.result : void 0, t = typeof n === "object" && n !== null && (n.isError === true || n.is_error === true);
  return { ok: n !== void 0 && n !== null && n !== false && !t, result: n, resultErrored: t };
}
async function $e(e, n, t, o, r, i, a) {
  if (e.isDisabled?.()) return { ok: false, reason: "disabled" };
  try {
    if (!await n.ensureConnected()) return { ok: false, reason: "disconnected" };
    let s = await F(e, n, "computer", { action: "type", text: r, tabId: o, ...i !== void 0 ? { expected_origin: i } : {} }, { ...t, permissionMode: "skip_all_permission_checks", onPermissionRequest: void 0 }, { singleBrowser: true, ...a !== void 0 && { requireDeviceId: a } }), { ok: d, result: u, resultErrored: l } = ce(s);
    if (d) return { ok: true };
    let c = l ? u.content ?? "" : "";
    if ((H(Ae(s)) || H(c)).startsWith("Origin mismatch")) return { ok: false, reason: "origin_mismatch" };
    return { ok: false, reason: "tool_error" };
  } catch (s) {
    return e.logger.debug(`[${e.serverName}] typeIntoTab failed`, s), { ok: false, reason: s instanceof import_chunk_tzhcnzkd.qDt ? "disabled" : s instanceof import_chunk_tzhcnzkd.Hgt ? "browser_changed" : "transport" };
  }
}
function V(e, n, t, o) {
  return { sessionId: o, getActiveTab: (r) => Ee(e, n, t, r), getSessionTab: (r, i) => Re(e, n, t, r, i), typeIntoTab: (r, i, a, s) => $e(e, n, t, r, i, a, s) };
}
function Oe(e, n) {
  if (e === "browser_batch" && Array.isArray(n.actions)) {
    let { save_to_disk: r, ...i } = n, a = r === true, s = n.actions.map((d) => {
      if (typeof d !== "object" || d === null) return d;
      let u = d;
      if (typeof u.input !== "object" || u.input === null) return d;
      let { save_to_disk: l, ...c } = u.input;
      if (l === true && u.name === "computer") a = true;
      return { ...u, input: c };
    });
    return { args: { ...i, actions: s }, wantsSave: a };
  }
  if (!("save_to_disk" in n)) return { args: n, wantsSave: false };
  let { save_to_disk: t, ...o } = n;
  return { args: o, wantsSave: e === "computer" && t === true };
}
function Pe(e, n, t) {
  let o = (0, import_chunk_rg2p81t1.h7r)(n, t).find((r) => typeof r === "string" && (import_chunk_rg2p81t1.tBa.has(r) || e.excludedTools?.has(r) === true));
  if (o === void 0) return;
  return o === n ? `Unknown tool: ${o}` : `Unknown tool: ${o}. None of this browser_batch's actions ran; send the others again without it.`;
}
var D = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Set(["javascript_tool"]);
function Fe(e, n) {
  if ((0, import_chunk_rg2p81t1.Voi)(e, n) !== void 0) return e;
  return (0, import_chunk_rg2p81t1.h7r)(e, n).find((t) => typeof t === "string" && Me.has(t));
}
function De(e, n, t) {
  let o = /* @__PURE__ */ new Set([...import_chunk_rg2p81t1.nye.map((r) => r.name), ...(e.hostTools?.() ?? []).map((r) => r.name)]);
  return (0, import_chunk_rg2p81t1.h7r)(n, t).find((r) => typeof r === "string" && !o.has(r));
}
function Y(e, n, t, o, r = { done: false }) {
  if (!e.hostToolPutsSecretInPage) return;
  let i = e.fillExcludesPageCode?.() !== false, a = e.hostToolPutsSecretInPage(n), s = !a && e.hostToolPreparesFill?.(n) === true, d = a || s ? void 0 : Fe(n, t), u = a || s ? void 0 : d === "browser_batch" && n === "browser_batch" ? "browser_batch" : De(e, n, t);
  if (!a && !s && d === void 0 && u === void 0) return;
  let l = [o?.hostSessionId, o?.sessionScope?.sessionId].map((p) => p?.trim()).filter((p) => Boolean(p));
  if (l.length === 0) return;
  let c = (p) => l.some((f) => D.get(f)?.has(p) === true), b = (p) => {
    for (let f of l) {
      let g = D.get(f) ?? /* @__PURE__ */ new Set();
      D.set(f, g.add(p));
    }
  };
  if (u !== void 0) {
    if (i) return u === "browser_batch" ? "This browser_batch was refused and none of its actions ran: a batch must be a list of named actions with no browser_batch inside it." : Le(n, u);
    if (u !== "browser_batch") b("script");
    return;
  }
  if (a || s) {
    if (c("script")) {
      if (!r.done) r.done = true, e.onHostToolRefusedForPageCode?.(n, i);
      if (i) return `${n} was refused: this session has already run code in a page, and the two can't be combined in one session. Don't ask the person to send anything private in this chat or type it in this session's tabs instead: code already run in those tabs could capture it. If they want to do it themselves, ask them to open a new tab on their own. To use ${n}, ask the person to start a new session.`;
    }
    if (a) b("fill");
    return;
  }
  if (c("fill")) {
    if (!r.done) r.done = true, e.onPageCodeAfterFill?.(d ?? n, i);
    if (i) return Ne(n, d);
  }
  b("script");
  return;
}
var Z = "A tool used earlier in this session can't be combined with code run in a page.";
function Le(e, n) {
  let t = JSON.stringify(n);
  return e === "browser_batch" ? `This browser_batch was refused and none of its actions ran, because ${t} isn't a browser tool this app knows, and it might run code in a page. Send the other actions again without ${t}.` : `${t} was refused: it isn't a browser tool this app knows, and it might run code in a page. Other browser tools still work.`;
}
function Ne(e, n) {
  return e === "browser_batch" ? `This browser_batch was refused and none of its actions ran, because it includes ${n}. ${Z} Send the other actions again without ${n}. To run code in a page, ask the person to start a new session.` : `${e} was refused. ${Z} Other browser tools still work. To run code in a page, ask the person to start a new session.`;
}
function Be(e, n) {
  let t = n?.onPermissionRequest, o = e.isDisabled;
  if (!n || !t || !o) return n;
  return { ...n, onPermissionRequest: async (r) => !o() && await t(r) && !o() };
}
var P8r = async (e, n, t, o, r) => {
  let { args: i, wantsSave: a } = Oe(t, o);
  if (e.isDisabled?.()) return h(`Unknown tool: ${t}`);
  let s = Be(e, r), d = Pe(e, t, i);
  if (d !== void 0) return h(d);
  let u = s?.sessionScope;
  if (t === "switch_browser") return Je(e, n, u);
  if (t === "list_connected_browsers") return ze(e, n, u);
  if (t === "select_browser") return Xe(e, n, i, u);
  let l = s?.hostSessionId ?? s?.sessionScope?.sessionId ?? "", c = { done: false }, b = Y(e, t, i, s, c);
  if (b !== void 0) return h(b);
  let p = (0, import_chunk_rg2p81t1.Voi)(t, i);
  if (p !== void 0) return h(p);
  if (e.handleHostTool && e.hostToolBypassesBrowser?.(t, i)) {
    let y = await e.handleHostTool(t, i, V(e, n, s, l));
    if (y !== void 0) return y;
  }
  let f = { args: i }, g = "connecting";
  try {
    let y = await n.ensureConnected();
    if (e.logger.silly(`[${e.serverName}] Server is connected: ${y}. Received tool call: ${(0, import_chunk_tzhcnzkd.XJ)(t)} with args: ${de(i)}.`), y) {
      if (g = "connected", e.isDisabled?.()) return h(`Unknown tool: ${t}`);
      let w = await ae(e, n);
      if (w) return w;
      if (e.isDisabled?.()) return h(`Unknown tool: ${t}`);
      if (e.handleHostTool) {
        let T = Y(e, t, i, s, c);
        if (T !== void 0) return h(T);
        let S = await e.handleHostTool(t, i, V(e, n, s, l));
        if (S !== void 0) return S;
      }
      if (g = "tabLookup", f = await Ge(e, n, t, i, s), g = "connected", f.error) return L(f, f.error);
      let C = await Ue(e, n, t, f.args, s);
      if (a) C = await z(C, e);
      return L(f, C);
    }
    return x(e, "not_connected", { toolName: t, sessionScope: u });
  } catch (y) {
    return L(f, je(y, t, e, u, g));
  }
};
function _(e) {
  return { [import_chunk_tzhcnzkd.aor]: e };
}
function h(e, n) {
  return { content: [{ type: "text", text: e }], isError: true, ...n && { _meta: n } };
}
function je(e, n, t, o, r) {
  let i = r !== "tabLookup";
  if (t.logger.info(`[${t.serverName}] Error calling tool:`, e), e instanceof import_chunk_tzhcnzkd.qDt) return h(`Unknown tool: ${n}`);
  if (e instanceof import_chunk_tzhcnzkd.Ftt && i) return h(ne(n), _("connection_lost_mid_call"));
  if (e instanceof import_chunk_tzhcnzkd.Ftt || e instanceof import_chunk_tzhcnzkd.CP && r !== "connecting" && t.bridgeConfig) return h(ee(n), _("connection_lost_before_call"));
  if (e instanceof import_chunk_tzhcnzkd.CP) return x(t, "socket_error", { toolName: n, sessionScope: o });
  if (e instanceof import_chunk_tzhcnzkd.$tt) return x(t, "no_extension_selected", { toolName: n, sessionScope: o });
  if (e instanceof import_chunk_tzhcnzkd.Utt && e.routingAckReceived === false) return h(`The "${n}" call was never delivered to the Chrome extension: the computer running that browser appears to be offline or asleep, or Chrome is not running there. This is a connection problem, not a permission or site-access issue. Ask the user to make sure that computer is awake and Chrome is open with the Claude extension, then retry.`, { isBridgeTimeout: true, ..._("bridge_timeout_not_acked") });
  if (e instanceof import_chunk_tzhcnzkd.Utt) return h(He(n, e), { isBridgeTimeout: true, ..._(e.routingAckReceived ? "bridge_timeout_acked" : "bridge_timeout_ack_unavailable") });
  if (e instanceof import_chunk_tzhcnzkd.dor) return h(`The "${n}" tool call was displaced by a newer call on the same browser connection before its result arrived. The action may already have executed \u2014 check the page state (e.g. "get_page_text") before repeating it.`, _("superseded"));
  if (e instanceof import_chunk_tzhcnzkd.RMe) return h(i && e.routingAckReceived === true ? ne(n) : `The "${n}" tool call failed because the Chrome extension disconnected mid-operation. This is usually transient (Chrome service worker restart, tab closed, network blip) and the extension often reconnects automatically. Retry the same tool call in a few seconds. If it keeps failing, ask the user to switch to Chrome (which wakes the extension) or check that the extension is still logged in.`, _("extension_disconnected_mid_call"));
  if (e instanceof import_chunk_tzhcnzkd.IAn) return h(`The "${n}" tool call was not sent: ${e.message} Do not retry the identical call.`, _("request_too_large"));
  return h(ee(n), _("unknown"));
}
function ee(e) {
  return `The "${e}" tool call failed unexpectedly. This is usually transient \u2014 retry the same call in a few seconds.`;
}
function ne(e) {
  return `The "${e}" tool call was sent, but the connection was lost before its result came back. The action may have happened, may still be in progress or waiting for the user in Chrome, or may not have happened. If the call only reads the page, call it again. Otherwise do not repeat it yet: first check the page's current state (for example with "get_page_text" or a screenshot), and repeat the action only if it clearly did not take effect.`;
}
function He(e, n) {
  let t = `The "${e}" tool did not respond in time.`, o = 'a lighter operation (e.g., "get_page_text" instead of a screenshot)';
  if (n.routingAckReceived === void 0) return `${t} The page or Chrome may be unresponsive, or Chrome may be waiting for the user. Try a lighter operation (e.g., "get_page_text" instead of a screenshot), or ask the user to check Chrome.`;
  return `${t} If Chrome is on another computer, that computer may be closed or asleep. The page may also be loading or unresponsive, or Chrome may be waiting for the user. Try a lighter operation (e.g., "get_page_text" instead of a screenshot) once. If that also gets no response, ask the user to check that the computer running Chrome is awake, that Chrome is open, and that nothing in Chrome is waiting for them.`;
}
function sor(e) {
  let n = e?.result?.content;
  if (!Array.isArray(n)) return {};
  for (let t of n) {
    if (typeof t !== "object" || t === null || t.type !== "text" || typeof t.text !== "string") continue;
    let o = t.text;
    try {
      let r = JSON.parse(o);
      if (!Array.isArray(r.availableTabs)) continue;
      let i = r.availableTabs.find((s) => typeof s?.tabId === "number")?.tabId, a = typeof r.tabGroupId === "number" ? r.tabGroupId : void 0;
      return { tabId: i, tabGroupId: a, json: o };
    } catch {
    }
  }
  return {};
}
var le = Symbol("timed-out");
async function qe(e, n) {
  let t;
  try {
    return await Promise.race([e, new Promise((o) => {
      t = setTimeout(() => o(le), n);
    })]);
  } finally {
    if (t !== void 0) clearTimeout(t);
  }
}
var te = /* @__PURE__ */ new WeakMap(), oe = 8e3;
async function Ge(e, n, t, o, r) {
  if (t !== "navigate" || o.tabId !== null && o.tabId !== void 0) return { args: o };
  let i = typeof o.url === "string" ? o.url.trim().toLowerCase() : "";
  if (i === "back" || i === "forward") return { args: o, error: h('tabId is required for url:"back"/"forward". Call tabs_context_mcp first to get a tab ID.') };
  let a = r?.sessionScope?.sessionId;
  if (!i || !a) return { args: o };
  let s = te.get(n);
  if (!s) s = /* @__PURE__ */ new Map(), te.set(n, s);
  let d = s.get(a);
  if (!d) d = F(e, n, "tabs_context_mcp", { createIfEmpty: true }, { ...r, permissionMode: "ask" }).finally(() => {
    if (s.get(a) === d) s.delete(a);
  }), s.set(a, d);
  let u = await qe(d, oe);
  if (u === le) return { args: o, error: h(`The hidden tabs_context_mcp lookup did not respond within ${oe / 1e3}s. The Chrome extension may be slow to start, or the computer running that browser may be offline or asleep. Retry navigate, or call tabs_context_mcp explicitly to get a tabId first.`, { isFrontLoadBoundExceeded: true, ..._("front_load_bound_exceeded") }) };
  let l = u?.error;
  if (l) {
    let f = Array.isArray(l.content) ? l.content : [{ type: "text", text: "tabs_context_mcp returned an error." }];
    if (fe(f)) e.onAuthenticationError();
    return { args: o, error: { content: f, isError: true } };
  }
  let { tabId: c, tabGroupId: b, json: p } = sor(u);
  if (c === void 0) return { args: o, tabGroupId: b };
  return { args: { ...o, tabId: c }, tabContextJson: p, tabGroupId: b };
}
function L(e, n) {
  let t = n;
  if (e.tabContextJson && !t.isError) t = { ...t, content: [...Array.isArray(t.content) ? t.content : [], { type: "text", text: `
Tab context (from front-loaded tabs_context_mcp):
${e.tabContextJson}
Tabs in this group were opened for this task and are yours to clean up: close each with tabs_close_mcp once you no longer need it and before finishing, unless the user asked to see it or wants it kept open.` }] };
  if (e.tabGroupId !== void 0) t = { ...t, _meta: { ...t._meta, frontLoadedTabGroupId: e.tabGroupId } };
  return t;
}
async function Ue(e, n, t, o, r) {
  let i = ++re, a = q(r), s = a ? ke(t, o) : [], d = s.some((E) => "historyMove" in E), u = O(n), l = [...s].reverse().find((E) => "set" in E), c = l && "set" in l && typeof l.set === "number" ? n.browserOfTab?.(l.set) : void 0;
  if (Q(n, a, s, i), d && a) K(n, a, 1);
  let b;
  try {
    b = await F(e, n, t, o, r);
  } finally {
    if (d && a) K(n, a, -1);
    Q(n, a, s, i);
  }
  let p = O(n);
  if (ce(b).ok && (u === void 0 || u === p)) Ie(n, r, s, { seq: i, deviceId: p, ownerBefore: c });
  if (e.logger.silly(`[${e.serverName}] Received result from socket bridge: ${de(b)}`), b === null || b === void 0) return { content: [{ type: "text", text: "Tool execution completed" }] };
  let { result: f, error: g, notices: y } = b, w = Array.isArray(y) && y.length > 0 ? { notices: y } : void 0, C = g || f, T = !!g;
  if (!C) return { content: [{ type: "text", text: "Tool execution completed" }], ...w && { _meta: w } };
  if (T && fe(C.content)) e.onAuthenticationError();
  let { content: S } = C;
  if (S && Array.isArray(S)) {
    if (T) return { content: S.map((m) => {
      if (typeof m === "object" && m !== null && "type" in m) return m;
      return { type: "text", text: String(m) };
    }), isError: true, ...w && { _meta: w } };
    return { content: S.map((m) => {
      if (typeof m === "object" && m !== null && "type" in m && "source" in m) {
        let v = m;
        if (v.type === "image" && typeof v.source === "object" && v.source !== null && "data" in v.source) return { type: "image", data: v.source.data, mimeType: "media_type" in v.source ? v.source.media_type || "image/png" : "image/png" };
      }
      if (typeof m === "object" && m !== null && "type" in m) return m;
      return { type: "text", text: String(m) };
    }), isError: T, ...w && { _meta: w } };
  }
  if (typeof S === "string") return { content: [{ type: "text", text: S }], isError: T, ...w && { _meta: w } };
  return e.logger.warn(`[${e.serverName}] Unexpected result format from socket bridge`, b), { content: [{ type: "text", text: JSON.stringify(b) }], isError: T, ...w && { _meta: w } };
}
var We = new Set(import_chunk_rg2p81t1.nye.map((e) => e.name));
function x(e, n, { toolName: t, sessionScope: o }) {
  return e.trackEvent?.("chrome_bridge_tool_call_disconnected", { tool_name: `browser:${We.has(t) ? t : "unknown"}`, session_id: o?.sessionId, user_message_uuid: o?.userMessageUuid, transport: e.bridgeConfig ? "bridge" : "native", cause: n }), { content: [{ type: "text", text: e.onToolCallDisconnected() }], _meta: _(n) };
}
async function Je(e, n, t) {
  if (!e.bridgeConfig) return { content: [{ type: "text", text: "Browser switching is only available with bridge connections." }], isError: true };
  if (!await n.ensureConnected()) return x(e, "not_connected", { toolName: "switch_browser", sessionScope: t });
  if (e.isDisabled?.()) return h("Unknown tool: switch_browser");
  let r = await n.switchBrowser?.() ?? null;
  if (r === "no_other_browsers") return { content: [{ type: "text", text: "No other browsers available to switch to. Open Chrome with the Claude extension in another browser to switch." }], isError: false };
  if (r) return k.set(n, true), P(n), { content: [{ type: "text", text: `Selected browser "${M(r, 0)}".` }] };
  return { content: [{ type: "text", text: "No browser responded within the timeout. Make sure Chrome is open with the Claude extension installed, then try again." }], isError: true };
}
async function ze(e, n, t) {
  if (!e.bridgeConfig || !n.listConnectedExtensions) return { content: [{ type: "text", text: "Listing browsers is only available with bridge connections." }], isError: true };
  if (!await n.ensureConnected()) return x(e, "not_connected", { toolName: "list_connected_browsers", sessionScope: t });
  if (e.isDisabled?.()) return h("Unknown tool: list_connected_browsers");
  let r = await n.listConnectedExtensions(), i = (0, import_chunk_tzhcnzkd.MAn)(r, n.getSelectedDeviceId?.(), r.length > 1 ? await (0, import_chunk_tzhcnzkd.zXt)(e.getLocalDeviceIds) : void 0), a = i.kind === "select" ? i.extension.deviceId : void 0, s = r.map((u, l) => ({ ...u, name: G(u, l), osPlatform: u.osPlatform === void 0 ? void 0 : ie.get(u.osPlatform), ...u.deviceId === a && { inUse: true } })), d = [{ type: "text", text: JSON.stringify(s) }];
  if (r.length > 1) d.push({ type: "text", text: Ke(e, n, s, i) });
  return { content: d };
}
function Ke(e, n, t, o) {
  if (o.kind === "select") {
    let i = "is the one on this computer and will be used";
    if (o.reason === "persisted") i = n.hasActiveSelection?.() ? "is the one in use for this session" : "is the one picked last and will be used";
    let a = t.findIndex((s) => s.deviceId === o.extension.deviceId);
    return `${t.length} browsers are connected; "${M(o.extension, a)}" (deviceId ${o.extension.deviceId}) ${i}. No question is needed unless the user wants a different browser (then select_browser with its deviceId, or switch_browser).`;
  }
  let r = t.filter((i) => i.onThisComputer).length;
  if (o.kind === "ask" && r > 0) return `${t.length} browsers are connected, ${r} of them on this computer (onThisComputer: true), and none is selected for this session. ${(0, import_chunk_rg2p81t1.u8o)(e.askUserToolName)} List the browsers on this computer first.`;
  return `${t.length} browsers are connected and none is selected for this session. ${(0, import_chunk_rg2p81t1.u8o)(e.askUserToolName)}`;
}
async function Xe(e, n, t, o) {
  let r = typeof t.deviceId === "string" ? t.deviceId : "";
  if (!e.bridgeConfig || !n.selectExtensionById || !n.listConnectedExtensions || !r) return { content: [{ type: "text", text: "select_browser requires a bridge connection and a deviceId argument." }], isError: true };
  if (!await n.ensureConnected()) return x(e, "not_connected", { toolName: "select_browser", sessionScope: o });
  let a = await n.listConnectedExtensions(), s = a.find((u) => u.deviceId === r);
  if (!s) return { content: [{ type: "text", text: `No connected browser has deviceId "${r}". Call list_connected_browsers to see currently connected browsers.` }], isError: true };
  if (e.isDisabled?.()) return h("Unknown tool: select_browser");
  let d = a.indexOf(s);
  return n.selectExtensionById(r, G(s, d)), k.set(n, true), P(n), { content: [{ type: "text", text: `Selected browser "${M(s, d)}".` }] };
}
function H(e) {
  if (!Array.isArray(e)) return String(e);
  return e.map((n) => {
    if (typeof n === "string") return n;
    if (typeof n === "object" && n !== null && "text" in n && typeof n.text === "string") return n.text;
    return "";
  }).join(" ");
}
function fe(e) {
  return H(e).toLowerCase().includes("re-authenticated");
}
