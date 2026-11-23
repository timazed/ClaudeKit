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
var chunk_xgypevhc_exports = {};
__export(chunk_xgypevhc_exports, {
  DIa: () => DIa,
  HIa: () => HIa,
  Iqr: () => Iqr,
  JYs: () => JYs,
  MIa: () => MIa
});
module.exports = __toCommonJS(chunk_xgypevhc_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_yesjd46y = require("/$bunfs/root/chunk-yesjd46y.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_yq00hd9s = require("/$bunfs/root/chunk-yq00hd9s.js");
var import_chunk_2b1wcpvk = require("/$bunfs/root/chunk-2b1wcpvk.js");
var Iqr = 5, MIa = "Structured output was retracted by a model fallback and no retry produced a valid result", a = 600;
function HIa(t, r, e) {
  if (r > 0) return `Failed to provide surviving structured output after ${t} attempts (${r} retracted by a model fallback)`;
  let n = `Failed to provide valid structured output after ${t} attempts`;
  return e === void 0 ? n : `${n} \u2014 last StructuredOutput error: ${e}`;
}
function JYs(t) {
  let r = typeof t === "string" ? t : Array.isArray(t) ? t.flatMap((d) => d.type === "text" ? [d.text] : []).join(`
`) : void 0;
  if (r === void 0) return;
  let n = r.replace(/^<tool_use_error>/, "").replace(/<\/tool_use_error>$/, "").replace(import_chunk_yesjd46y.vze, `
`).split(`
`).map(import_chunk_7cfjrnwy.lC).join(`
`), o = (0, import_chunk_yq00hd9s.k0)(n, { prependMarker: false }).sanitized, u = (0, import_chunk_7cfjrnwy.Wr)(o);
  if (u.length === 0) return;
  let s = u.length > a ? (0, import_chunk_7cfjrnwy.ee)(u, a) + "\u2026" : u;
  return (0, import_chunk_yq00hd9s.k0)(s, { prependMarker: false }).sanitized;
}
function DIa(t, r) {
  try {
    let e = r === void 0 ? 0 : t.lastIndexOf(r) + 1;
    return c(e === 0 ? t : t.slice(e));
  } catch (e) {
    (0, import_chunk_k449cc64.i)(e);
    return;
  }
}
function c(t) {
  let r = /* @__PURE__ */ new Set();
  for (let e of t) {
    if (e?.type !== "assistant") continue;
    let n = e.message.content;
    if (!Array.isArray(n)) continue;
    for (let o of n) if (o.type === "tool_use" && o.name === import_chunk_2b1wcpvk.ga) r.add(o.id);
  }
  if (r.size === 0) return;
  for (let e = t.length - 1; e >= 0; e--) {
    let n = t[e];
    if (n?.type !== "user") continue;
    let o = n.message.content;
    if (!Array.isArray(o)) continue;
    for (let u = o.length - 1; u >= 0; u--) {
      let s = o[u];
      if (s?.type === "tool_result" && s.is_error === true && r.has(s.tool_use_id)) return JYs(s.content);
    }
  }
  return;
}
