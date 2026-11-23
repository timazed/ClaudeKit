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
var chunk_5gh3v8c1_exports = {};
__export(chunk_5gh3v8c1_exports, {
  Esl: () => Esl,
  nRi: () => nRi,
  tRi: () => tRi
});
module.exports = __toCommonJS(chunk_5gh3v8c1_exports);
var import_chunk_w1zyy3zs = require("/$bunfs/root/chunk-w1zyy3zs.js");
var s = require("/$bunfs/root/chunk-gjd6m6ps.js"), tRi = "FILE REFERENCES:";
function nRi() {
  return s?.getTeleportCacheState().status === "active";
}
function a(n, t) {
  return t.some((e) => {
    if (e.type !== "attachment" || e.attachment.type !== "mcp_instructions_delta") return false;
    let { addedNames: o, addedBlocks: i } = e.attachment, r = o?.indexOf(n) ?? -1;
    return r >= 0 && i?.[r]?.includes(import_chunk_w1zyy3zs.jst) === true;
  });
}
function Esl(n, t) {
  try {
    let e = n.mcpInfo?.serverName;
    if (e !== void 0 && a(e, t.messages)) return "in_note";
    if (nRi()) return "relay_text_unread";
    if (t.sentToolDescription === void 0) return "unknown";
    let o = t.sentToolDescription(n.name);
    return o === void 0 ? "no_tool_text" : o.includes(tRi) ? "in_tool_text" : "tool_text_without_hint";
  } catch {
    return "unknown";
  }
}
