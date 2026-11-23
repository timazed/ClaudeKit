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
var chunk_4xgvg9z4_exports = {};
__export(chunk_4xgvg9z4_exports, {
  Eml: () => Eml,
  I7: () => I7,
  San: () => San,
  oZ: () => oZ,
  qBt: () => qBt,
  tbr: () => tbr,
  vml: () => vml
});
module.exports = __toCommonJS(chunk_4xgvg9z4_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var tbr = `# Reporting outcomes

Report what actually happened, not what you intended. When you say something is done, sent, saved, fixed, or verified, that claim must rest on a result you observed in this session \u2014 tool output, the file as it now reads, the page as it now loads \u2014 not on what the step should have produced. If you did not check, say you did not check. If any step failed, was skipped, or came back different from what you expected, say so in the first sentence of your report, before anything else, even when the rest of the work succeeded. Never quietly work around a failure in a way that makes it look resolved; a problem the user can see is recoverable, one your summary hides is not. When you stop before the task is complete, your first line says so plainly and names what is left. Do not describe partial work as done, and do not let a summary read as more certain than the evidence behind it.`;
var qBt = "x-anthropic-billing-header:";
function Eml(e) {
  let t = e.text;
  return typeof t === "string" && t.startsWith(qBt);
}
function I7(e) {
  let t = e.text;
  return typeof t === "string" && (t.startsWith(qBt) || t === tbr);
}
function oZ(e) {
  let t = Bun.hash((0, import_chunk_w578pjby._)(e));
  return typeof t === "bigint" ? Number(t & 0xffffffffn) : t;
}
var a = /* @__PURE__ */ new Set(["type", "text", "thinking", "id", "tool_use_id", "name", "input", "source", "content", "cache_control"]);
function i(e, t) {
  if (typeof e === "string") {
    t.push("s", String(e.length), e.slice(0, 32), e.slice(-32));
    return;
  }
  switch (e.type) {
    case "text":
    case "image":
    case "document":
    case "search_result":
    case "thinking":
    case "redacted_thinking":
    case "tool_use":
    case "tool_result":
    case "tool_reference":
    case "server_tool_use":
    case "web_search_tool_result":
    case "web_fetch_tool_result":
    case "advisor_tool_result":
    case "code_execution_tool_result":
    case "bash_code_execution_tool_result":
    case "text_editor_code_execution_tool_result":
    case "tool_search_tool_result":
    case "mcp_tool_use":
    case "mcp_tool_result":
    case "mcp_tool_listing":
    case "container_upload":
    case "compaction":
    case "fallback":
    case "browser_state":
      break;
    default: {
      let s = e;
      break;
    }
  }
  if (t.push(e.type), "text" in e && typeof e.text === "string") t.push("t", String(e.text.length), e.text.slice(0, 32), e.text.slice(-32));
  if ("thinking" in e && typeof e.thinking === "string") t.push("k", String(e.thinking.length));
  if ("id" in e && typeof e.id === "string") t.push("i", e.id);
  if ("tool_use_id" in e && typeof e.tool_use_id === "string") t.push("u", e.tool_use_id);
  if ("name" in e && typeof e.name === "string") t.push("n", e.name);
  if ("input" in e && e.input !== void 0) t.push("p", (0, import_chunk_w578pjby._)(e.input));
  if ("source" in e && e.source && typeof e.source === "object") {
    let s = e.source;
    if (t.push("m", String(s.type ?? ""), String(s.media_type ?? "")), typeof s.data === "string") t.push(String(s.data.length));
  }
  let n = "content" in e ? e.content : void 0;
  if (Array.isArray(n)) {
    t.push("[", String(n.length));
    for (let s of n) i(s, t);
    t.push("]");
  } else if (typeof n === "string") t.push("c", String(n.length), n.slice(0, 32), n.slice(-32));
  for (let [s, o] of Object.entries(e)) {
    if (a.has(s) || o === void 0) continue;
    let r = typeof o === "string" ? o : (0, import_chunk_w578pjby._)(o);
    t.push(s, r.length > 256 ? `len:${r.length}` : r);
  }
}
var San = -1;
function vml(e) {
  return e.map((t) => {
    if ((t.type === "api_system" || t.type === "user") && t.ephemeral) return San;
    let n = [t.message.role];
    if (t.type === "api_system" && t.outputConfig !== void 0) {
      let r = t.outputConfig.timing;
      n.push(`oc:${t.outputConfig.effort ?? ""}${r ? `:${r.now}` : ""}`);
    }
    let s = t.message.content;
    if (Array.isArray(s)) {
      n.push(String(s.length));
      for (let r of s) i(r, n);
    } else i(s, n);
    let o = Bun.hash(n.join("|"));
    return typeof o === "bigint" ? Number(o & 0xffffffffn) : o;
  });
}
