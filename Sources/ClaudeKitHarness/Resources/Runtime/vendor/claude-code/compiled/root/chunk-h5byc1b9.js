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
var chunk_h5byc1b9_exports = {};
__export(chunk_h5byc1b9_exports, {
  L7l: () => L7l,
  UKo: () => UKo,
  X3: () => X3,
  h4r: () => h4r,
  oXs: () => oXs,
  otr: () => otr,
  rtr: () => rtr
});
module.exports = __toCommonJS(chunk_h5byc1b9_exports);
var import_chunk_s21rfs5b = require("/$bunfs/root/chunk-s21rfs5b.js");
var import_chunk_0ha8wex8 = require("/$bunfs/root/chunk-0ha8wex8.js");
var import_chunk_3grsnd7a = require("/$bunfs/root/chunk-3grsnd7a.js");
var import_chunk_h4t4qfaq = require("/$bunfs/root/chunk-h4t4qfaq.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
function X3(t) {
  return typeof t === "string" && ((0, import_chunk_h4t4qfaq.li)(t) || t === import_chunk_3grsnd7a.Vo);
}
var o = /(<tools-used-before-summary>)([^<]*)(<\/tools-used-before-summary>)/g;
function rtr(t) {
  if (typeof t === "string") return t.replace(o, (n, s, e, r) => s + e.split(", ").filter((i) => !X3(i)).join(", ") + r);
  return Array.isArray(t) ? t.map((n) => (0, import_chunk_ma3kja9f.T)(n) ? { ...n, ..."text" in n && { text: rtr(n.text) }, ..."content" in n && { content: rtr(n.content) } } : n) : t;
}
function h4r(t) {
  let n = (0, import_chunk_ma3kja9f.T)(t) ? t.description : void 0;
  return { command: "", description: `A step that was refused as a whole; nothing in it ran: ${typeof n === "string" ? n : ""}` };
}
var UKo = /\n\nThe script did not run, [^\n]*$/;
function otr(t) {
  return t.replace(UKo, "").replace(/\w+/g, (n) => X3(n) ? import_chunk_hn3cwwzt.ke : n);
}
function a(t) {
  let [n, ...s] = Array.isArray(t.message.content) ? t.message.content.filter((e) => e.type === "tool_result") : [];
  return typeof n?.content === "string" && s.length === 0 && t.isVirtual !== true && t.toolDenialKind !== void 0 && !import_chunk_3grsnd7a.Qj.includes(t.toolDenialKind) && t.toolDenialAfterRun !== true && !n.content.startsWith(import_chunk_0ha8wex8.hp) ? { ...n, content: otr(n.content) } : void 0;
}
function oXs(t) {
  return rtr(typeof t === "string" ? t.split(`
`).filter((n) => !(0, import_chunk_s21rfs5b.sXs)(n)).join(`
`) : t);
}
function L7l(t) {
  if ("sessionId" in t) return t;
  if (t.type === "user") {
    let e = a(t);
    return e === void 0 ? t : { ...t, hostContent: [e] };
  }
  if (t.type !== "assistant" || !Array.isArray(t.message.content)) return t;
  let n = t.message.content.flatMap((e) => e.type === "tool_use" && X3(e.name) ? [e] : []), [s] = n;
  return s === void 0 ? t : { ...t, hostHiddenToolUseIds: n.map((e) => e.id), ...(0, import_chunk_h4t4qfaq.li)(s.name) && t.isVirtual !== true && { hostContent: [{ type: "tool_use", id: s.id, name: import_chunk_hn3cwwzt.ke, input: h4r(s.input) }] } };
}
