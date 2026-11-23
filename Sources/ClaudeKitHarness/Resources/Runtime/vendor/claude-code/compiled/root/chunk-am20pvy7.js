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
var chunk_am20pvy7_exports = {};
__export(chunk_am20pvy7_exports, {
  F9o: () => F9o,
  Wri: () => Wri,
  aRn: () => aRn
});
module.exports = __toCommonJS(chunk_am20pvy7_exports);
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_1hg0ytx8 = require("/$bunfs/root/chunk-1hg0ytx8.js");
var import_chunk_nq3exp5d = require("/$bunfs/root/chunk-nq3exp5d.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
function F9o(e, t) {
  if (t) return "program";
  return (0, import_chunk_1hg0ytx8.nls)(e) ? "modelOfAppTool" : "model";
}
function m() {
  return (0, import_chunk_865at33z.Lt)("tengu_expressive_quail", false) === true;
}
function p(e) {
  if (e === "modelOfAppTool" && m()) return true;
  return (0, import_chunk_3t7ve0wy.Dm)() && (0, import_chunk_865at33z.Lt)("tengu_eventual_noodle", false) === true;
}
function aRn() {
  return p("program");
}
function a(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "text";
}
async function Wri(e, t, c) {
  let n = typeof t === "function" ? t() : t;
  if (!p(n)) return;
  if (n === "modelOfAppTool" && !p("model") && ((0, import_chunk_1hg0ytx8.Lki)(e.structuredContent, import_chunk_1hg0ytx8.Bao) !== void 0 || (0, import_chunk_ma3kja9f.T)(e._meta) && (0, import_chunk_xcgcdx61.ko)(e._meta, import_chunk_nq3exp5d.mpo) !== void 0)) return;
  let o = await c([...e.content.filter((r) => !a(r)), ...e.content.filter(a)]), i = n === "modelOfAppTool", d = o.content.filter((r) => r.type !== "text" || r.text.trim() !== "");
  if (d.length === 0) {
    if (o.content.length > 0) (0, import_chunk_cqa9hrgx.l)("mcp_content_over_structured", "blank_text", { isAppTool: i });
    return;
  }
  return (0, import_chunk_cqa9hrgx.u)("mcp_content_over_structured", { isAppTool: i }), n !== "program" && m() ? { ...o, content: d } : o;
}
