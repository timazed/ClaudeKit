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
var chunk_1jfwdjvf_exports = {};
__export(chunk_1jfwdjvf_exports, {
  Lue: () => Lue,
  Ugt: () => Ugt,
  eye: () => eye
});
module.exports = __toCommonJS(chunk_1jfwdjvf_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_vcnr02by = require("/$bunfs/root/chunk-vcnr02by.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_54j6k3fn = require("/$bunfs/root/chunk-54j6k3fn.js");
var import_chunk_5qhr9bm2 = require("/$bunfs/root/chunk-5qhr9bm2.js");
var import_chunk_tpax7jmw = require("/$bunfs/root/chunk-tpax7jmw.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_qyhf6bts = require("/$bunfs/root/chunk-qyhf6bts.js");
var import_chunk_ts09sys6 = require("/$bunfs/root/chunk-ts09sys6.js");
function Lue(e) {
  let r = e.type === "sdk" && (0, import_chunk_ts09sys6.P0)(e) && e.connectorId !== void 0 ? (0, import_chunk_qyhf6bts.TV)(e.connectorId) : (0, import_chunk_qyhf6bts.eh)(e), t = e.type === void 0 || e.type === "stdio" || e.type === "sdk", n = null;
  try {
    n = t ? null : (0, import_chunk_bzyb60p0.GXo)(e);
  } catch (o) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(o));
  }
  let p = n === null ? null : URL.parse(n);
  return { describedOrigin: p !== null && p.origin.startsWith(`${p.protocol}//`) && p.hostname.replace(/\.+$/, "") !== import_chunk_5qhr9bm2.NLi ? p.origin : void 0, describedConnectorId: r };
}
var l = 128, g = /^[a-z0-9._:-]+$/;
function m(e) {
  let r = e?.trim().toLowerCase();
  if (!r || r.length > l || !g.test(r)) return;
  return r;
}
function Ugt(e, r) {
  if (r.type !== "http" || (0, import_chunk_ts09sys6.XH)(e, r) !== "dynamic") return;
  let t = m((0, import_chunk_qdcbcsg7.Moe)(r));
  if (t) return t;
  let n = import_chunk_qdcbcsg7.Ohn.peek((0, import_chunk_f9x2f6cx.N)())?.read?.();
  return m(n?.[e]);
}
var u = (e, r) => ({ ...r, scope: e.config.scope, pluginSource: e.config.pluginSource, source: (0, import_chunk_ts09sys6.XH)(e.name, e.config), displayName: (0, import_chunk_tpax7jmw.E7r)(e.config), pluginTelemetry: void 0, ...e.config.pluginSource !== void 0 && { pluginTelemetry: (0, import_chunk_54j6k3fn.aj)(e.config.pluginSource, (0, import_chunk_vcnr02by.Bg)()) }, serverIdStamp: Ugt(e.name, e.config), ...Lue(e.config), ...e.config.type !== "sdk" && (0, import_chunk_5qhr9bm2.Bpe)(e) });
function eye(e, r) {
  let t = (0, import_chunk_qyhf6bts.mLe)(e.name, e.config), n = r.map((o) => {
    if (o.mcpInfo === void 0) return o;
    let c = t && ((0, import_chunk_px0hhsq7.mL)() || o.ignoresWholeToolAllowRule?.({}) !== true) ? { ...o, ignoresWholeToolAllowRule() {
      return true;
    }, suppressesAlwaysAllowRule() {
      return true;
    }, async checkPermissions(f, d) {
      let s = await o.checkPermissions(f, d);
      return s.behavior === "ask" || s.behavior === "passthrough" ? { ...s, suggestions: [] } : s;
    } } : o;
    return o.mcpInfo.scope === e.config.scope && o.mcpInfo.pluginSource === e.config.pluginSource ? c : { ...c, mcpInfo: u(e, o.mcpInfo) };
  });
  return n.every((o, c) => o === r[c]) ? r : n;
}
