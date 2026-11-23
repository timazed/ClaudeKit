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
var chunk_tpy0ym8s_exports = {};
__export(chunk_tpy0ym8s_exports, {
  wBr: () => wBr
});
module.exports = __toCommonJS(chunk_tpy0ym8s_exports);
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
function wBr(e, o = /* @__PURE__ */ new Date(), n = "stored") {
  let r = a(o), t = g(p(e, n));
  return t ? `${r}-${t}.txt` : `conversation-${r}.txt`;
}
function a(e) {
  let o = e.getFullYear(), n = String(e.getMonth() + 1).padStart(2, "0"), r = String(e.getDate()).padStart(2, "0"), t = String(e.getHours()).padStart(2, "0"), s = String(e.getMinutes()).padStart(2, "0"), i = String(e.getSeconds()).padStart(2, "0");
  return `${o}-${n}-${r}-${t}${s}${i}`;
}
function p(e, o = "stored") {
  let n = e.find((s) => s.type === "user" && s.turnCompanion !== true);
  if (!n || n.type !== "user") return "";
  let r = n.message?.content, t = "";
  if (typeof r === "string") t = (o === "shown" ? (0, import_chunk_q3a5dy2r.Hhe)(r, n.pluginPrompt) : r).trim();
  else if (Array.isArray(r)) {
    let s = r.findLast((i) => i.type === "text");
    if (s && "text" in s) t = s.text.trim();
  }
  if (t = (0, import_chunk_7cfjrnwy.Ir)(t), t.length > 50) t = t.substring(0, 49) + "\u2026";
  return t;
}
function g(e) {
  return e.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
