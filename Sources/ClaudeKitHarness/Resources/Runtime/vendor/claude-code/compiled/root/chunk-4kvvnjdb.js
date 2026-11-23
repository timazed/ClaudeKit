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
var chunk_4kvvnjdb_exports = {};
__export(chunk_4kvvnjdb_exports, {
  emitTripwireEvent: () => t,
  loadDefaultMcpClientModule: () => m,
  mcpAuthModule: () => v,
  mcpClientModule: () => d,
  mcpDirectoryReadModule: () => k,
  mcpElicitationHandlerModule: () => E,
  mcpIsListAuthErrorModule: () => h,
  mcpSdkErrorClassificationModule: () => y,
  mcpSep2663TaskBinding: () => l,
  mcpSkillsListModule: () => q,
  mcpTaskWatcherModule: () => j,
  mcpXaaIdpLoginModule: () => _
});
module.exports = __toCommonJS(chunk_4kvvnjdb_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_r7skfyeq = require("/$bunfs/root/chunk-r7skfyeq.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_szvrpg0x = require("/$bunfs/root/chunk-szvrpg0x.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xppq9kzc = require("/$bunfs/root/chunk-xppq9kzc.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_72r477hv = require("/$bunfs/root/chunk-72r477hv.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_ds5wjsjg = require("/$bunfs/root/chunk-ds5wjsjg.js");
var import_chunk_pm6bf5qr = require("/$bunfs/root/chunk-pm6bf5qr.js");
var import_chunk_sppbt6xz = require("/$bunfs/root/chunk-sppbt6xz.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
function t(r, e) {
  if (!(0, import_chunk_szvrpg0x.Wa)().claim("mcp_tree_id_tripwire")) return;
  (0, import_chunk_r7skfyeq.Pji)((0, import_chunk_y53wbr8a.Ma)("tengu_mcp_tripwire", { expected: (0, import_chunk_78g0060s.f)(r), loaded: e === "v1" || e === "v2" ? (0, import_chunk_78g0060s.f)(e) : (0, import_chunk_78g0060s.S)("other") }).catch(() => {
  }));
}
function d() {
  (0, import_chunk_sppbt6xz.OG)();
  let r = require("/$bunfs/root/chunk-54d1gdxa.js"), e = r.MCP_TREE_ID;
  if (e !== "v2") throw t("v2", e), Error("MCP runtime accessor tripwire: resolved generation is v2 but the loaded client module does not carry MCP_TREE_ID v2");
  return r;
}
function m() {
  require("/$bunfs/root/chunk-54d1gdxa.js");
}
function l() {
  if ((0, import_chunk_sppbt6xz.OG)(), (0, import_chunk_sppbt6xz.s1)()) return;
  return require("/$bunfs/root/chunk-54d1gdxa.js").createSep2663TaskBinding;
}
function v() {
  return (0, import_chunk_sppbt6xz.OG)(), require("/$bunfs/root/chunk-zx5art09.js");
}
function E() {
  return (0, import_chunk_sppbt6xz.OG)(), require("/$bunfs/root/chunk-tgs1b0e7.js");
}
function j() {
  return (0, import_chunk_sppbt6xz.OG)(), require("/$bunfs/root/chunk-stn5x3wh.js");
}
function y() {
  return (0, import_chunk_sppbt6xz.OG)(), require("/$bunfs/root/chunk-0fnzvw7c.js");
}
function k() {
  return (0, import_chunk_sppbt6xz.OG)(), require("/$bunfs/root/chunk-h864am0v.js");
}
function h() {
  return (0, import_chunk_sppbt6xz.OG)(), require("/$bunfs/root/chunk-xk3mhe7a.js");
}
function _() {
  return (0, import_chunk_sppbt6xz.OG)(), require("/$bunfs/root/chunk-2secn5kn.js");
}
function q() {
  return require("/$bunfs/root/chunk-9tj7q1yn.js");
}
