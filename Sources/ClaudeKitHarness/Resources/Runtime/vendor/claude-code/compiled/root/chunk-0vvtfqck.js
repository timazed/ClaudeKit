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
var chunk_0vvtfqck_exports = {};
__export(chunk_0vvtfqck_exports, {
  $in: () => $in,
  BFn: () => BFn,
  HMi: () => HMi,
  IMi: () => IMi,
  MMi: () => MMi,
  UFn: () => UFn,
  kje: () => kje
});
module.exports = __toCommonJS(chunk_0vvtfqck_exports);
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var IMi = "no_reply_needed", UFn = `__${IMi}`, l = `mcp__${import_chunk_qdcbcsg7.mB}${UFn}`, MMi = ["__message_coordinator", "__message_thread"];
function HMi(e) {
  return !MMi.some((r) => e.endsWith(r));
}
function kje() {
  return new Set((import_chunk_c203g5kd.s.CLAUDE_CODE_TERMINAL_MCP_TOOLS || "").split(",").map((e) => e.trim()).filter(Boolean));
}
function BFn() {
  return kje().values().some((e) => e.endsWith(UFn) && e !== l);
}
function $in(e) {
  let r = kje();
  if (r.size === 0) return false;
  let _ = /* @__PURE__ */ new Set();
  for (let n = e.length - 1; n >= 0; n--) {
    let o = e[n];
    if (o.type === "user") {
      if (o.isMeta) continue;
      let t = o.message.content;
      if (!Array.isArray(t)) return false;
      let a = false;
      for (let i of t) if (i.type === "tool_result") {
        if (a = true, !i.is_error) _.add(i.tool_use_id);
      }
      if (!a) return false;
    } else if (o.type === "assistant") {
      for (let t of o.message.content) if (t.type === "tool_use" && _.has(t.id) && r.has(t.name)) return true;
    }
  }
  return false;
}
