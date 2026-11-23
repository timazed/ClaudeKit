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
var chunk_2mm785sn_exports = {};
__export(chunk_2mm785sn_exports, {
  J8t: () => J8t,
  XTa: () => XTa,
  wqs: () => wqs
});
module.exports = __toCommonJS(chunk_2mm785sn_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
function wqs(e) {
  if (!e?.length) return;
  let o = /* @__PURE__ */ Object.create(null);
  for (let r of e) {
    if (!r?.org_max_permission || r.org_max_permission === "allow") continue;
    let n = (0, import_chunk_xcgcdx61.MFe)().safeParse(r.org_max_permission);
    o[r.name] = n.success ? n.data : "blocked";
  }
  return Object.keys(o).length > 0 ? o : void 0;
}
function J8t(e, o) {
  let r = (0, import_chunk_f9x2f6cx.BOe)({ readFrom: o ?? e.readFrom }), n = r === void 0 ? { scope: "dynamic" } : { scope: "project", readFrom: r }, s;
  if (e.type === "http" || e.type === "sse") {
    let { tools: t, ...c } = e, a = (0, import_chunk_xcgcdx61.OHs)(c), i = wqs(t);
    s = { ...a, ...i && { toolPermissions: i }, ...n };
  } else s = { ...e, ...n };
  if (p(e)) delete s.displayName;
  return (0, import_chunk_865at33z.Ddt)(e, s);
}
function XTa(e, o) {
  let r = J8t(e, o);
  if (!p(e)) return r;
  let { scope: n, displayName: s } = e, t = r;
  if (t.scope = n, typeof s === "string") t.displayName = s;
  return t;
}
function p(e) {
  let o = "scope" in e ? e.scope : void 0;
  return o !== void 0 && o !== "dynamic" && o !== "claudeai";
}
