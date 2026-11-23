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
var chunk_3syjdhqg_exports = {};
__export(chunk_3syjdhqg_exports, {
  CGl: () => CGl,
  TGl: () => TGl,
  jVo: () => jVo,
  mYs: () => mYs
});
module.exports = __toCommonJS(chunk_3syjdhqg_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_qk25vh5t = require("/$bunfs/root/chunk-qk25vh5t.js");
var import_chunk_m417dzmj = require("/$bunfs/root/chunk-m417dzmj.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var mYs = {};
(0, import_chunk_w1d7ygsk.jr)(mYs, { default: () => mYs, endsInARowOf: () => TGl, unsettledBy: () => jVo, workerEndingOf: () => CGl });
function TGl(e) {
  let n = Number(e);
  return Number.isSafeInteger(n) && n > 0 ? n : 0;
}
var jVo = (e) => ({ reason: `Error: ${(0, import_chunk_jv7av99m.d)(e)}`, kind: e instanceof import_chunk_qk25vh5t.W6n ? "passing" : "lasting" });
var o = 5, m = `It did not pass in ${o} tries`, p = "it is held for good, or refused to this process", t = "Start the daemon again once this is mended.", a = `${m}: ${p}. ${t}`;
function CGl(e, n) {
  let r = e.kind === "passing", s = r && n + 1 < o, i = r ? a : t;
  return s ? { code: import_chunk_m417dzmj.CFe, said: `${e.reason}
` } : { code: import_chunk_m417dzmj.n2, said: `${e.reason}
${i}
` };
}
