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
var chunk_p7djm1w8_exports = {};
__export(chunk_p7djm1w8_exports, {
  renderReplMcpNeedsAuthNotice: () => l,
  replMcpNeedsAuthServersOf: () => i
});
module.exports = __toCommonJS(chunk_p7djm1w8_exports);
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
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_418mqjww = require("/$bunfs/root/chunk-418mqjww.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xppq9kzc = require("/$bunfs/root/chunk-xppq9kzc.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_n5qd9b6p = require("/$bunfs/root/chunk-n5qd9b6p.js");
var import_chunk_z8cg6ntt = require("/$bunfs/root/chunk-z8cg6ntt.js");
var import_chunk_72r477hv = require("/$bunfs/root/chunk-72r477hv.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_ds5wjsjg = require("/$bunfs/root/chunk-ds5wjsjg.js");
var import_chunk_pm6bf5qr = require("/$bunfs/root/chunk-pm6bf5qr.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_271xsh6x = require("/$bunfs/root/chunk-271xsh6x.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_8x650tx8 = require("/$bunfs/root/chunk-8x650tx8.js");
var import_chunk_2hdy50wd = require("/$bunfs/root/chunk-2hdy50wd.js");
var import_chunk_4jzbgp2v = require("/$bunfs/root/chunk-4jzbgp2v.js");
var import_chunk_hz25f5zd = require("/$bunfs/root/chunk-hz25f5zd.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
(0, import_chunk_adx6804h.B)();
var t = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)(), authTool: (0, import_chunk_adx6804h.n)() })));
function i(r) {
  let e = t().safeParse(r.servers);
  return e.success ? e.data : [];
}
function l(r) {
  return r.map((e) => `MCP server ${(0, import_chunk_271xsh6x.xr)(e.name)} needs authentication before its tools answer; its ${e.authTool} tool is callable from a script.`).join(`
`);
}
