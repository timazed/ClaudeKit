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
var chunk_bmzkpe8r_exports = {};
__export(chunk_bmzkpe8r_exports, {
  nWs: () => nWs,
  oBr: () => oBr,
  rWs: () => rWs,
  w5t: () => w5t
});
module.exports = __toCommonJS(chunk_bmzkpe8r_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_akwvpp7y = require("/$bunfs/root/chunk-akwvpp7y.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_57sd0ak5 = require("/$bunfs/root/chunk-57sd0ak5.js");
var import_chunk_4wb31q07 = require("/$bunfs/root/chunk-4wb31q07.js");
var import_chunk_jhdsf4g3 = require("/$bunfs/root/chunk-jhdsf4g3.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_sppbt6xz = require("/$bunfs/root/chunk-sppbt6xz.js");
var import_chunk_3bjtjsgp = require("/$bunfs/root/chunk-3bjtjsgp.js");
var import_net = require("net");
var import_os = require("os");
async function nWs(e) {
  return w5t(e) && await rWs(e);
}
function w5t(e) {
  return (0, import_chunk_bzyb60p0.tHe)(e) && e.errorCode !== void 0 && (e.config.type === "claudeai-proxy" ? i((0, import_chunk_bzyb60p0.JQt)(e.config)) : (e.config.type === "http" || e.config.type === "sse") && i(e.config.url)) && !(0, import_chunk_3jjr3wje.BNl)() && (0, import_chunk_865at33z.b)("tengu_smooth_lark", true) === true;
}
async function rWs(e) {
  try {
    return await p(e) && await a(e, import_chunk_yz5b8aaa.aK);
  } catch (r) {
    return s(r), true;
  }
}
async function oBr(e) {
  try {
    return await a(e, y) && await a(e, import_chunk_yz5b8aaa.aK) && await p(e) && w5t(e);
  } catch (r) {
    return s(r), false;
  }
}
async function p(e) {
  try {
    let r = await f(e);
    return r?.scope === e.config.scope && l(e.name, r) === l(e.name, e.config);
  } catch (r) {
    return s(r), false;
  }
}
function l(e, r) {
  return (0, import_chunk_3bjtjsgp.Uo)(e, { ...r, ...(0, import_chunk_bzyb60p0.Fns)(r) });
}
async function f({ name: e, config: r }) {
  let { scope: n, pluginSource: o } = r;
  switch (n) {
    case "claudeai":
      return (0, import_chunk_bzyb60p0.NHe)() ? null : r;
    case "dynamic":
      if ((0, import_chunk_bzyb60p0.yh)()) return null;
      if (o === void 0) return (0, import_chunk_wj4me9k5.RN)() ? null : r;
      return (0, import_chunk_bzyb60p0.nMn)(e, r) || (0, import_chunk_57sd0ak5.Ure)("skills", { source: "plugin", plugin: o }) || (0, import_chunk_xcgcdx61.NJe)(r) && (0, import_chunk_jhdsf4g3.W5)() ? null : (0, import_chunk_bzyb60p0.Nmi)(e);
    default:
      return (0, import_chunk_bzyb60p0.xP)(e);
  }
}
async function y() {
  let e = await (0, import_chunk_zzrn5zap.Er)().readAsyncStrict?.(void 0, { inaccessibleAs: "failureIfTransient", unreadableFileAs: "failure", unparsableEntryAs: "failure" });
  if (e === import_chunk_zzrn5zap.bs) throw Object.assign(Error("It could not be read"), { code: "READ_FAILED" });
  return e?.mcpOAuth;
}
function s(e) {
  (0, import_chunk_w578pjby.t)(`[mcp] A reconnect could not read the credential store or the server's entry: ${(0, import_chunk_jv7av99m.op)(e)}`, { level: "warn" });
}
async function a({ name: e, config: r }, n) {
  if (r.type !== "http" && r.type !== "sse") return true;
  if (r.oauth?.xaa) return false;
  let o = (await n())?.[(0, import_chunk_yz5b8aaa.kc)(e, r)];
  if (!o) return true;
  let c = o.discoveryState, u = c?.authorizationServerMetadata;
  return !(0, import_chunk_sppbt6xz.s1)() && !r.oauth?.authServerMetadataUrl && i(c?.authorizationServerUrl) && (u === void 0 || i(u.token_endpoint));
}
function i(e) {
  let r = typeof e === "string" ? URL.parse(e) : null;
  if (r?.protocol !== "https:") return false;
  let n = r.hostname.replace(/\.+$/, "");
  return (0, import_net.isIP)(n.replace(/^\[|\]$/g, "")) === 0 && !(0, import_chunk_akwvpp7y.pF)(n) && !(0, import_chunk_4wb31q07.vrr)(n) && !(0, import_chunk_4wb31q07.F9r)((0, import_chunk_7cfjrnwy.nt)(n, "."), (0, import_os.hostname)());
}
