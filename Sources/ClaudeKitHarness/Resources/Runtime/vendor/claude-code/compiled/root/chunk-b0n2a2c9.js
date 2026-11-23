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
var chunk_b0n2a2c9_exports = {};
__export(chunk_b0n2a2c9_exports, {
  EYr: () => EYr,
  Gri: () => Gri,
  M$a: () => M$a,
  jri: () => jri,
  kYr: () => kYr,
  tJt: () => tJt
});
module.exports = __toCommonJS(chunk_b0n2a2c9_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_e18ra2xv = require("/$bunfs/root/chunk-e18ra2xv.js");
var import_chunk_zptyswqz = require("/$bunfs/root/chunk-zptyswqz.js");
var import_chunk_wvxk15ee = require("/$bunfs/root/chunk-wvxk15ee.js");
var import_chunk_ts09sys6 = require("/$bunfs/root/chunk-ts09sys6.js");
var jri = ["Docs"], d = /* @__PURE__ */ new Set(["claudedocs", "claudepages"]), r = [{ titles: jri, what: "a document", instead: "a page" }, { titles: ["Sheets"], what: "a spreadsheet", instead: "the file you would have made without this listing" }];
function i({ title: e, tier: t }) {
  return t === "core" && typeof e === "string" ? r.find((o) => o.titles.some((n) => (0, import_chunk_e18ra2xv.T0e)(e) === (0, import_chunk_e18ra2xv.T0e)(n))) : void 0;
}
function kYr(e) {
  return i(e) !== void 0;
}
function M$a(e) {
  let t = e.map(i);
  return r.filter((o) => t.includes(o)).map(({ titles: o, what: n, instead: a }) => `The ${o[0]} type is filled only through the first-party Claude Docs connector, which is not attached in this session: for ${n}, make ${a} instead of starting from that type.`);
}
function EYr(e) {
  return e.config.type === "claudeai-proxy" && (0, import_chunk_xcgcdx61.g3)(e.config) && (0, import_chunk_wvxk15ee.von)(e.config) || Gri(e) || (0, import_chunk_zptyswqz.Ioi)() && e.config.type === "sdk" && (0, import_chunk_mzmcvr6c.ht)(e.name) !== null && d.has((0, import_chunk_qdcbcsg7.WX)(e.serverInfo?.name ?? "")) || import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true && e.config.type === "http" && e.config.scope === "dynamic" && (!(0, import_chunk_xcgcdx61.jl)(e.config) || (0, import_chunk_wvxk15ee.von)(e.config)) && ((0, import_chunk_qdcbcsg7.VOo)(e.config) || import_chunk_qdcbcsg7.xze.has(e.name));
}
function Gri(e) {
  return e.config.type === "sdk" && (0, import_chunk_ts09sys6.kme)(e, { path: import_chunk_qdcbcsg7.zct, serverId: import_chunk_qdcbcsg7.Pze });
}
function tJt(e) {
  return e.some((t) => (t.type === "connected" || t.type === "pending" || t.type === "cached") && EYr(t));
}
