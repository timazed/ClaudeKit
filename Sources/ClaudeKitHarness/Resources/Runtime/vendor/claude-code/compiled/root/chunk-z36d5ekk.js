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
var chunk_z36d5ekk_exports = {};
__export(chunk_z36d5ekk_exports, {
  ECHOED_PROTOCOL_VERSIONS: () => h,
  createChromeSocketClient: () => P,
  createClaudeForChromeMcpServer: () => w
});
module.exports = __toCommonJS(chunk_z36d5ekk_exports);
var import_chunk_tzhcnzkd = require("/$bunfs/root/chunk-tzhcnzkd.js");
var import_chunk_rg2p81t1 = require("/$bunfs/root/chunk-rg2p81t1.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_9n8y2dzw = require("/$bunfs/root/chunk-9n8y2dzw.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xppq9kzc = require("/$bunfs/root/chunk-xppq9kzc.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_1gevzap3 = require("/$bunfs/root/chunk-1gevzap3.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var h = ["2025-11-25", "2025-06-18", "2025-03-26"];
function P(e) {
  return e.bridgeConfig ? (0, import_chunk_1gevzap3.rer)(e) : e.getSocketPaths ? (0, import_chunk_1gevzap3.JKr)(e) : (0, import_chunk_tzhcnzkd.Dgt)(e);
}
function w(e, r) {
  return new s(e, r);
}
class s {
  context;
  socketClient;
  client;
  handshake = [];
  packageServer;
  isClosed = false;
  constructor(e, r) {
    this.context = e;
    this.socketClient = r;
  }
  async connect(e) {
    this.client = e, e.onmessage = (n) => this.receive(n), e.onclose = () => void this.closePackageServer();
    let { logger: r, serverName: o } = this.context;
    this.socketClient.setNotificationHandler(({ method: n, params: a }) => {
      r.info(`[${o}] Forwarding MCP notification: ${(0, import_chunk_tzhcnzkd.XJ)(n)}`), this.handToPackageServer(({ server: t }) => t.notification({ method: n, params: a }).catch((c) => {
        r.info(`[${o}] Failed to forward MCP notification: ${(0, import_chunk_jv7av99m.d)(c)}`);
      }));
    });
  }
  async close() {
    await this.client?.close(), await this.closePackageServer();
  }
  async closePackageServer() {
    this.isClosed = true, await (await this.packageServer?.catch(() => {
      return;
    }))?.server.close();
  }
  sendToClient(e) {
    if (!this.isClosed) this.client?.send(e).catch(import_chunk_k449cc64.i);
  }
  receive(e) {
    let r = this.packageServer === void 0 ? this.ownResultFor(e) : void 0;
    if (r === void 0) this.handToPackageServer(({ transport: o }) => o.send(e));
    else if ("id" in e && e.id !== void 0) this.sendToClient({ result: r, jsonrpc: "2.0", id: e.id });
  }
  ownResultFor(e) {
    if (!("method" in e) || "id" in e && typeof e.id !== "string" && !Number.isInteger(e.id) || e.params !== void 0 && !(0, import_chunk_ma3kja9f.T)(e.params) || e.params?._meta !== void 0 && !(0, import_chunk_ma3kja9f.T)(e.params._meta)) return;
    switch (e.method) {
      case "initialize": {
        let { protocolVersion: r, capabilities: o, clientInfo: n } = e.params ?? {};
        if (this.handshake.length > 0 || typeof r !== "string" || !h.includes(r) || !(0, import_chunk_ma3kja9f.T)(o) || !(0, import_chunk_ma3kja9f.T)(n) || typeof n.name !== "string" || typeof n.version !== "string") return;
        return this.handshake.push(e), { protocolVersion: r, capabilities: { tools: { listChanged: true }, logging: {} }, serverInfo: { name: this.context.serverName, version: "1.0.0" } };
      }
      case "notifications/initialized":
        return this.handshake.push(e), {};
      case "ping":
        return {};
      case "notifications/roots/list_changed":
      case "notifications/cancelled":
      case "notifications/progress":
        return {};
      case "tools/list":
        if (e.params?.cursor !== void 0 || this.context.bridgeConfig === void 0 || this.context.excludedTools !== void 0 || this.context.isDisabled !== void 0 || this.context.hostTools !== void 0) return;
        return { tools: import_chunk_rg2p81t1.nye.map((r) => r.name === "list_connected_browsers" ? { ...r, description: `${r.description} ${(0, import_chunk_rg2p81t1.g7r)(this.context.askUserToolName)}` } : r) };
      default:
        return;
    }
  }
  handToPackageServer(e) {
    if (this.isClosed) return;
    this.packageServer ??= this.startPackageServer(), this.packageServer.then(e).catch((r) => ((0, import_chunk_k449cc64.i)(r), this.close()));
  }
  startPackageServer() {
    return (0, import_chunk_cqa9hrgx.qo)("chrome_late_mcp_server", () => this.packageServerGivenTheHandshake());
  }
  async packageServerGivenTheHandshake() {
    let { createClaudeForChromeMcpServer: e } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-pvmvj8sk.js"))), r = e(this.context, this.socketClient), [o, n] = (0, import_chunk_9n8y2dzw.aYs)(), a = new Set(this.handshake.flatMap((t) => "id" in t ? [t.id] : []));
    o.onmessage = (t) => {
      if ("method" in t || !("id" in t) || !a.delete(t.id)) this.sendToClient(t);
    }, await r.connect(n);
    for (let t of this.handshake) await o.send(t);
    return { server: r, transport: o };
  }
}
