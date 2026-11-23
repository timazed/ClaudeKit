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
var chunk_xyw28hqy_exports = {};
__export(chunk_xyw28hqy_exports, {
  nqr: () => nqr,
  tqr: () => tqr
});
module.exports = __toCommonJS(chunk_xyw28hqy_exports);
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
function tqr(r) {
  if (typeof r === "string") return [{ type: "text", text: r }];
  if (!Array.isArray(r)) return [];
  return r.filter((e) => e !== null && typeof e === "object" && !Array.isArray(e));
}
var p = new RegExp(`<(${import_chunk_k449cc64.w4t.join("|")})>[\\s\\S]*?(?:</\\1>|$)`, "g");
function m(r) {
  return r.replace(p, "").trim();
}
function i(r) {
  return tqr(r).flatMap((e) => e.type === "text" && typeof e.text === "string" ? [e.text] : []).map(m).filter((e) => e !== "");
}
function nqr(r, e) {
  let n = [], o = /* @__PURE__ */ new Set();
  for (let t of r) {
    if (t.type === "attachment" && typeof t.attachment === "object" && t.attachment !== null && (0, import_chunk_bzyb60p0.GHe)(t)) {
      let s = t.attachment.type === "queued_command" ? t.attachment.prompt : "", a = t.attachment.source_uuid;
      if (typeof a === "string") {
        if (o.has(a)) continue;
        o.add(a);
      }
      for (let u of i(s)) n.push(`[User]: ${(0, import_chunk_7cfjrnwy.ee)(u, e.userTextChars)}`);
      continue;
    }
    if (t.type === "user" && t.message) {
      if (t.isCompactSummary) {
        for (let s of i(t.message.content)) n.push(`[Summary of earlier conversation]: ${(0, import_chunk_7cfjrnwy.ee)(s, e.userTextChars)}`);
        continue;
      }
      if (!(0, import_chunk_bzyb60p0.yQ)(t) || typeof t.uuid === "string" && o.has(t.uuid)) continue;
      for (let s of i(t.message.content)) n.push(`[User]: ${(0, import_chunk_7cfjrnwy.ee)(s, e.userTextChars)}`);
    } else if (t.type === "assistant" && t.message) {
      for (let s of tqr(t.message.content)) if (s.type === "text" && typeof s.text === "string") n.push(`[Assistant]: ${(0, import_chunk_7cfjrnwy.ee)(s.text, e.assistantTextChars)}`);
      else if (s.type === "tool_use" && typeof s.name === "string") n.push(`[Tool: ${s.name}]`);
    }
  }
  return n;
}
