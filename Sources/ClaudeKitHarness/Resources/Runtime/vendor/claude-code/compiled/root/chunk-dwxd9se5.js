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
var chunk_dwxd9se5_exports = {};
__export(chunk_dwxd9se5_exports, {
  Bpl: () => Bpl,
  GBt: () => GBt,
  JSr: () => JSr,
  Obe: () => Obe,
  Qho: () => Qho,
  Wpl: () => Wpl,
  Zho: () => Zho,
  _an: () => _an,
  cDi: () => cDi,
  ego: () => ego,
  jBt: () => jBt,
  w0e: () => w0e
});
module.exports = __toCommonJS(chunk_dwxd9se5_exports);
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_ta6q9jek = require("/$bunfs/root/chunk-ta6q9jek.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_4eswazsj = require("/$bunfs/root/chunk-4eswazsj.js");
var import_chunk_bp9b0hd8 = require("/$bunfs/root/chunk-bp9b0hd8.js");
function jBt(t) {
  if (!(0, import_chunk_2gtmjt3y.Xn)()) return false;
  let { attachment: e } = t;
  return e.type !== "queued_command" && e.type !== "poll_events" && e.type !== "plugin_note" && (0, import_chunk_trwykz8a.xAt)(e).length === 0;
}
var _an = "claude/";
function GBt(t, e, r, o) {
  return { method: "project_read", path: t, ...e !== void 0 && { version: e }, ...r, ...o };
}
function cDi(t) {
  return { method: "project_read", path: t };
}
var Qho = "tengu_dapper_pancake", f = 500, d = "A doc of this project.";
function Bpl(t) {
  let e = (0, import_chunk_7cfjrnwy.Ea)(t.path, f);
  return { type: "document", source: { type: "text", media_type: "text/plain", data: t.content }, ...e !== "" && { title: e }, context: t.version !== void 0 && import_chunk_ccm69jjy.fm.test(t.version) ? `${d} version: ${t.version}` : d };
}
function Zho(t) {
  return t.type === "document" && typeof t.source === "object" && t.source !== null && "type" in t.source && t.source.type === "text" && typeof t.context === "string" && t.context.startsWith(d);
}
function Wpl(t, e) {
  return t.some((o) => o.type === "attachment" && o.attachment.type === "project_doc_reads" && o.attachment.form === "documents") ? e.some((o) => o.type === "user" && Array.isArray(o.message.content) && o.message.content.some(Zho)) : void 0;
}
function ego({ docId: t, read: e, textWithdrawn: r }) {
  return { input: (0, import_chunk_w578pjby._)(cDi(t)), result: r === true ? import_chunk_bp9b0hd8.ijl : (0, import_chunk_w578pjby._)(e) };
}
var JSr = "tengu_spicy_origami";
function w0e(t) {
  let e = /* @__PURE__ */ new Map(), r, o = 0;
  for (let s = t.length - 1; s >= 0; s--) {
    let n = t[s];
    if (n.type !== "attachment" || n.attachment.type !== "project_doc_reads" || e.size === 0 && n.attachment.changed !== true) continue;
    let a = [...(0, import_chunk_ta6q9jek.a1)(n.attachment) ?? []], m = o;
    for (let c = a.length - 1; c >= 0; c--) {
      let { docId: i, read: p } = a[c], u = e.get(i);
      if (p.changed === "removed") e.set(i, p);
      else if (u !== void 0 && p.content !== "") a[c] = { docId: i, read: u, textWithdrawn: true }, o++;
    }
    if (o > m) r ??= [...t], r[s] = { ...n, attachment: { ...n.attachment, reads: a } };
  }
  return r !== void 0 && (0, import_chunk_865at33z.Lt)(JSr, false) ? { messages: r, count: o } : { messages: t, count: 0 };
}
var g = Object.prototype, y = g.hasOwnProperty, h = (0, import_chunk_6mfepmbb.vKn)(function(t, e, r) {
  if (y.call(t, r)) ++t[r];
  else (0, import_chunk_4eswazsj.nse)(t, r, 1);
}), Obe = h;
