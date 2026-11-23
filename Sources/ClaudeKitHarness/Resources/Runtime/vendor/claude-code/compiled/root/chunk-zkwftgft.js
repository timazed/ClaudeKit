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
var chunk_zkwftgft_exports = {};
__export(chunk_zkwftgft_exports, {
  f1i: () => f1i,
  u1i: () => u1i,
  u_l: () => u_l
});
module.exports = __toCommonJS(chunk_zkwftgft_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_ht78eyc4 = require("/$bunfs/root/chunk-ht78eyc4.js");
var import_chunk_z1z1qsrb = require("/$bunfs/root/chunk-z1z1qsrb.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
function u1i(t) {
  let r = import_chunk_865at33z._ke.get(t) ?? import_chunk_865at33z.Exs.get(t);
  if (r === void 0) return [import_chunk_r8478wtb.Vt, import_chunk_r8478wtb.sh, import_chunk_r8478wtb.Zf, import_chunk_r8478wtb.G1];
  return r === import_chunk_r8478wtb.Vt ? [import_chunk_r8478wtb.Vt] : (0, import_chunk_ht78eyc4.Fg)() ? [import_chunk_r8478wtb.Vt, r] : [r, import_chunk_r8478wtb.Vt];
}
function f1i() {
  return (0, import_chunk_sghy0qej.Pe)("tengu_tidy_toast", { safe: true });
}
function u_l(t, r) {
  if (r.mcpInfo === void 0 || !((0, import_chunk_z1z1qsrb.tSo)(t) || (0, import_chunk_f9x2f6cx.st)() && (0, import_chunk_865at33z.oD)(t.config))) return;
  let o = r.mcpInfo.toolName;
  r.mcpInfo = { ...r.mcpInfo, standsInForBuiltIn: true }, r.hookMatcherFamilyNames = () => (0, import_chunk_f9x2f6cx.st)() && !f1i() ? [] : u1i(o);
}
