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
var chunk_h0704xph_exports = {};
__export(chunk_h0704xph_exports, {
  answersTheScript: () => d,
  asRefusedAtResume: () => y,
  missingResult: () => D
});
module.exports = __toCommonJS(chunk_h0704xph_exports);
var import_chunk_4x1jja6d = require("/$bunfs/root/chunk-4x1jja6d.js");
var import_chunk_0ha8wex8 = require("/$bunfs/root/chunk-0ha8wex8.js");
var import_chunk_s21rfs5b = require("/$bunfs/root/chunk-s21rfs5b.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_3grsnd7a = require("/$bunfs/root/chunk-3grsnd7a.js");
var import_chunk_h4t4qfaq = require("/$bunfs/root/chunk-h4t4qfaq.js");
var import_chunk_h5byc1b9 = require("/$bunfs/root/chunk-h5byc1b9.js");
var import_chunk_ckc7s0v4 = require("/$bunfs/root/chunk-ckc7s0v4.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var l = `

The script had been stopped at a deferred call, and that call did not run. Its earlier calls may have run.`;
function i(e, n) {
  return e.type === "user" && Array.isArray(e.message.content) ? e.message.content.find((t) => t.type === "tool_result" && t.tool_use_id === n) : void 0;
}
function d(e, n) {
  return i(e, n.script?.toolUseID) !== void 0;
}
function c(e, n) {
  let t = i(e, n.script?.toolUseID);
  return t?.type === "tool_result" && t.is_error === true && typeof t.content === "string" && !(0, import_chunk_ma3kja9f.T)(e.toolUseResult) ? t.content : void 0;
}
function y(e, n) {
  let t = e.type === "user" ? c(e, n) : void 0;
  if (t === void 0 || e.type !== "user" || !Array.isArray(e.message.content)) return e;
  let a = i(e, n.script?.toolUseID), r = t.replace(import_chunk_h5byc1b9.UKo, "");
  return { ...e, ...e.toolDenialKind !== void 0 && { toolDenialAfterRun: true }, message: { ...e.message, content: e.message.content.map((o) => o === a && r !== t ? { ...o, content: r + l } : o) } };
}
function D(e, n, t) {
  let a = n.findLast((s) => d(s, e));
  if (a?.type !== "user" || n.some((s) => i(s, e.toolUseID) !== void 0)) return;
  let r = c(a, e), o = t.text ?? (t.aborted ? import_chunk_0ha8wex8.hp : r === void 0 ? import_chunk_ckc7s0v4.C7t : r.replace(l, "").replace(/\w+/g, (s) => (0, import_chunk_h5byc1b9.X3)(s) ? e.toolName : s)), u = (0, import_chunk_ckc7s0v4.B$e)(e.toolUseID, "result");
  return t.notSaved === void 0 ? { uuid: u, content: [{ type: "tool_result", tool_use_id: e.toolUseID, content: o, is_error: true }], toolUseResult: (0, import_chunk_ckc7s0v4.m4r)(o) } : { uuid: u, content: [t.notSaved] };
}
