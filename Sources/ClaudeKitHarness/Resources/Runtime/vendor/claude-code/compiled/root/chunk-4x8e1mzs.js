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
var chunk_4x8e1mzs_exports = {};
__export(chunk_4x8e1mzs_exports, {
  QUs: () => QUs,
  W9n: () => W9n,
  ZUs: () => ZUs,
  eBs: () => eBs,
  qpt: () => qpt,
  tBs: () => tBs,
  tUr: () => tUr
});
module.exports = __toCommonJS(chunk_4x8e1mzs_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_98tjd856 = require("/$bunfs/root/chunk-98tjd856.js");
function W9n() {
  return (0, import_chunk_bzyb60p0.Efe)(import_chunk_qdcbcsg7.$n);
}
async function QUs() {
  await Promise.all([(0, import_chunk_bzyb60p0.hA)(), (0, import_chunk_2yx6c1y2.lut)()]);
}
function ZUs(e, r) {
  return (0, import_chunk_98tjd856.Kma)(r.scope) && !(0, import_chunk_bzyb60p0.gi)(e);
}
function qpt(e, r) {
  return ZUs(e, r) && !t(r);
}
function t(e) {
  return require("/$bunfs/root/chunk-4kvvnjdb.js").mcpClientModule().isFirstPartyDesignServerConfig(e);
}
function eBs(e) {
  switch (e.type) {
    case void 0:
    case "stdio":
    case "http":
    case "sse":
    case "ws":
      return true;
    case "sdk":
    case "sse-ide":
    case "ws-ide":
    case "claudeai-proxy":
      return false;
  }
}
function i(e) {
  return Object.assign((0, import_chunk_bzyb60p0.RT)(), (0, import_chunk_gd77dyw4.Hr)(e, eBs));
}
async function tBs({ storageV5: e } = {}) {
  if ((0, import_chunk_f9x2f6cx.rE)() || (0, import_chunk_2gtmjt3y.Xn)()) return { configs: (0, import_chunk_bzyb60p0.RT)(), deniedBySettings: false };
  await QUs();
  let { servers: r } = await (0, import_chunk_bzyb60p0.Ik)({}, { purpose: "deviceBridge", storageV5: e });
  return { configs: i(r), deniedBySettings: W9n() };
}
async function tUr(e = {}) {
  let { configs: r, deniedBySettings: o } = await tBs(e);
  return o ? (0, import_chunk_bzyb60p0.RT)() : r;
}
