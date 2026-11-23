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
var chunk_1dkksxs0_exports = {};
__export(chunk_1dkksxs0_exports, {
  Ax: () => Ax,
  GQl: () => GQl,
  gdo: () => gdo,
  zQl: () => zQl
});
module.exports = __toCommonJS(chunk_1dkksxs0_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_4x1jja6d = require("/$bunfs/root/chunk-4x1jja6d.js");
var import_chunk_02cqsykt = require("/$bunfs/root/chunk-02cqsykt.js");
var t = 3e5;
function gdo() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_BRIEF || (0, import_chunk_865at33z.yoe)("tengu_kairos_brief", false, t);
}
function GQl(e) {
  if (!e.includes(import_chunk_4x1jja6d.Ac) && !e.includes(import_chunk_4x1jja6d.Ooe)) return false;
  if ((0, import_chunk_02cqsykt.vWe)()) return false;
  return gdo();
}
function Ax() {
  return (0, import_chunk_f9x2f6cx.gte)() && gdo() || (0, import_chunk_02cqsykt.Wvi)();
}
var r = `In brief mode, plain assistant text is hidden from the user \u2014 only ${import_chunk_4x1jja6d.Ac} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;
function zQl() {
  let e = (0, import_chunk_865at33z.b)("tengu_kairos_brief_stop_hook_text", "");
  return typeof e === "string" && e.length > 0 ? e : r;
}
