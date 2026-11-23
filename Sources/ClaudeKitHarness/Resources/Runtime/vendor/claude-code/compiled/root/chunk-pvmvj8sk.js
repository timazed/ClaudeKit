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
var chunk_pvmvj8sk_exports = {};
__export(chunk_pvmvj8sk_exports, {
  BROWSER_TOOLS: () => import_chunk_rg2p81t1.nye,
  BridgeClient: () => import_chunk_1gevzap3.hYs,
  CHROME_UPLOAD_FILE_SCHEMA: () => import_chunk_rg2p81t1.rBa,
  DEFAULT_EXTERNAL_MESSAGE_TIMEOUT_MS: () => import_chunk_rg2p81t1.d8o,
  DEFAULT_TOOL_CALL_TIMEOUT_MS: () => import_chunk_rg2p81t1.Ggt,
  DISCOVERY_TIMEOUT_MS: () => import_chunk_rg2p81t1.l8o,
  ExtensionDisconnectedMidCallError: () => import_chunk_tzhcnzkd.RMe,
  FILE_UPLOAD_PROXY_INPUT_SCHEMA: () => import_chunk_rg2p81t1.oBa,
  FILE_UPLOAD_PROXY_TOOL: () => import_chunk_rg2p81t1.Pzl,
  NoExtensionConnectedError: () => import_chunk_tzhcnzkd.$tt,
  PEER_WAIT_TIMEOUT_MS: () => import_chunk_rg2p81t1.m7r,
  RequestTooLargeError: () => import_chunk_tzhcnzkd.IAn,
  SocketConnectionError: () => import_chunk_tzhcnzkd.CP,
  TELLS_BRIDGE_IDENTITY: () => import_chunk_tzhcnzkd.pni,
  TOOL_CALL_FAILURE_CAUSE_META_KEY: () => import_chunk_tzhcnzkd.aor,
  ToolCallLostError: () => import_chunk_tzhcnzkd.Ftt,
  ToolCallSupersededError: () => import_chunk_tzhcnzkd.dor,
  ToolCallTimeoutError: () => import_chunk_tzhcnzkd.Utt,
  WAIT_MAX_DURATION_S: () => import_chunk_rg2p81t1.c8o,
  availableBrowserTools: () => C,
  clearBrowserResolution: () => import_chunk_tryt5bb1.q5o,
  clearLocalPairingIdentity: () => import_chunk_tzhcnzkd.bzl,
  createBridgeClient: () => import_chunk_1gevzap3.rer,
  createChromeSocketClient: () => f,
  createClaudeForChromeMcpServer: () => _,
  localPlatformLabel: () => import_chunk_tzhcnzkd.X5o,
  probeLocalDeviceIds: () => O,
  showSessionTabInLocalBrowsers: () => I
});
module.exports = __toCommonJS(chunk_pvmvj8sk_exports);
var import_chunk_tzhcnzkd = require("/$bunfs/root/chunk-tzhcnzkd.js");
var import_chunk_rg2p81t1 = require("/$bunfs/root/chunk-rg2p81t1.js");
var import_chunk_82b20b9x = require("/$bunfs/root/chunk-82b20b9x.js");
var import_chunk_hnhsk56h = require("/$bunfs/root/chunk-hnhsk56h.js");
var import_chunk_tryt5bb1 = require("/$bunfs/root/chunk-tryt5bb1.js");
var import_chunk_1gevzap3 = require("/$bunfs/root/chunk-1gevzap3.js");
var u = /* @__PURE__ */ new Map(), T = "frontLoadedTabGroupId", E = [T, "isBridgeTimeout", "isFrontLoadBoundExceeded", import_chunk_tzhcnzkd.aor];
function C(e) {
  return import_chunk_rg2p81t1.nye.filter((r) => (e.bridgeConfig !== void 0 || !import_chunk_rg2p81t1.nBa.has(r.name)) && !e.excludedTools?.has(r.name));
}
function f(e) {
  return e.bridgeConfig ? (0, import_chunk_1gevzap3.rer)(e) : e.getSocketPaths ? (0, import_chunk_1gevzap3.JKr)(e) : (0, import_chunk_tzhcnzkd.Dgt)(e);
}
function _(e, r) {
  let { serverName: o, logger: s } = e, m = r ?? f(e), c = new import_chunk_82b20b9x.gor({ name: o, version: "1.0.0" }, { capabilities: { tools: { listChanged: true }, logging: {} } });
  return c.setRequestHandler(import_chunk_hnhsk56h.XDt, () => {
    if (e.isDisabled?.()) return { tools: [] };
    let t = (0, import_chunk_rg2p81t1.g7r)(e.askUserToolName);
    return { tools: [...C(e).map((i) => i.name === "list_connected_browsers" ? { ...i, description: `${i.description} ${t}` } : i), ...e.hostTools?.() ?? []] };
  }), c.setRequestHandler(import_chunk_hnhsk56h.JDt, async (t) => {
    s.info(`[${o}] Executing tool: ${(0, import_chunk_tzhcnzkd.XJ)(t.params.name)}`);
    let n = e.getRendererSessionScope?.(t.params._meta), i = n ? { permissionMode: "ask", sessionScope: { ...n, tabGroupId: u.get(n.sessionId) } } : void 0, a = await (0, import_chunk_tryt5bb1.P8r)(e, m, t.params.name, t.params.arguments || {}, i);
    if (n && !a.isError) {
      let l = a._meta?.[T], d = typeof l === "number" ? l : t.params.name === "tabs_context_mcp" ? (0, import_chunk_tryt5bb1.sor)({ result: a }).tabGroupId : void 0;
      if (d !== void 0) u.set(n.sessionId, d);
    }
    if (a._meta) for (let l of E) delete a._meta[l];
    return a;
  }), m.setNotificationHandler((t) => {
    s.info(`[${o}] Forwarding MCP notification: ${(0, import_chunk_tzhcnzkd.XJ)(t.method)}`), c.notification({ method: t.method, params: t.params }).catch((n) => {
      s.info(`[${o}] Failed to forward MCP notification: ${n.message}`);
    });
  }), c;
}
var g = 1500, L = 20;
function b(e) {
  return { silly: (r, ...o) => e.silly(r, ...o), debug: (r, ...o) => e.debug(r, ...o), info: (r, ...o) => e.debug(r, ...o), warn: (r, ...o) => e.warn(r, ...o), error: (r, ...o) => e.error(r, ...o), isDebugEnabled: e.isDebugEnabled?.bind(e) };
}
async function S(e, r, o, s) {
  let { logger: m, serverName: c, timeoutMs: t = g } = e, n = b(m), i;
  try {
    i = await e.getSocketPaths();
  } catch {
    return [];
  }
  let a = [];
  return await Promise.all(i.map(async (l) => {
    let d = (0, import_chunk_tzhcnzkd.Dgt)({ serverName: `${c} ${r}`, logger: n, clientTypeId: e.clientTypeId, connectVerified: e.connectVerified, socketPath: l, getSocketPath: () => l, onToolCallDisconnected: () => "", onAuthenticationError: () => {
      return;
    } });
    d.disableAutoReconnect = true;
    try {
      if (!await d.ensureConnected(s)) return;
      a.push(await o(d, t));
    } catch (p) {
      m.debug(`[${c}] ${r} on ${l} failed:`, p instanceof Error ? p.name : typeof p);
    } finally {
      d.disconnect();
    }
  })), a;
}
async function O(e) {
  let r = await S(e, "identity probe", (o, s) => o.probeBridgeIdentity(s));
  return new Set(r.filter((o) => o !== void 0));
}
async function I(e) {
  return (await S(e, "session tab request", (o, s) => o.showSessionTab(e.sessionKeys, e.accountUuid, s), L)).includes(true);
}
