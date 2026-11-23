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
var chunk_3ccq0r9v_exports = {};
__export(chunk_3ccq0r9v_exports, {
  Ier: () => Ier,
  QYs: () => QYs
});
module.exports = __toCommonJS(chunk_3ccq0r9v_exports);
var import_chunk_vc58gmrj = require("/$bunfs/root/chunk-vc58gmrj.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
function QYs(e) {
  return (0, import_chunk_sghy0qej.Pe)("tengu_harmonic_bumblebee", { safe: false }) && (0, import_chunk_vc58gmrj.zp)(e, { peek: true }) === "arbiter";
}
async function Ier(e, r) {
  let s = await (0, import_chunk_vc58gmrj.GWe)(e, r), t = (0, import_chunk_vc58gmrj.XSe)(s, r);
  if (t.kind !== "verdict") return;
  return t.outcome === "flagged" ? { flagged: true, reason: (0, import_chunk_vc58gmrj.Y$t)(s, r, () => {
    return;
  }).reason } : { flagged: false };
}
