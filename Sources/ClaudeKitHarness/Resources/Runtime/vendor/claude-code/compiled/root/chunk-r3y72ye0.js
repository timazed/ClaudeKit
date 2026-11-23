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
var chunk_r3y72ye0_exports = {};
__export(chunk_r3y72ye0_exports, {
  Rzr: () => Rzr,
  aTa: () => aTa,
  lTa: () => lTa
});
module.exports = __toCommonJS(chunk_r3y72ye0_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_7f901c6t = require("/$bunfs/root/chunk-7f901c6t.js");
var import_crypto = require("crypto");
function u(t) {
  let n = (0, import_chunk_bzyb60p0.KMn)([...t]).findLast((e) => e.type !== "attachment" && !(0, import_chunk_f9x2f6cx.Hu)(e));
  if (!(n?.type === "user" && Array.isArray(n.message.content) && n.message.content.some((e) => e.type === "tool_result"))) return "beside";
  return (0, import_chunk_bzyb60p0.ZD)("PostToolUse") === "none" ? "system" : void 0;
}
function aTa(t, n, o) {
  let e = u(n);
  return t.map(({ rowUuid: s, plugin: r, content: a, isRestored: l }) => {
    let d = l && e === "system" ? void 0 : e;
    return (0, import_chunk_bzyb60p0.Ut)({ type: "plugin_note", ...r !== void 0 && { plugin: r }, rowUuid: s, content: [...a], ...d !== void 0 && { sentAs: d } }, { now: o, uuid: () => l ? (0, import_crypto.randomUUID)() : s });
  });
}
function lTa(t, n, { tools: o, model: e }) {
  let s = (0, import_chunk_bzyb60p0.KMn)([...n]), r = s.findLast((i) => i.type === "assistant" && !(0, import_chunk_f9x2f6cx.Hu)(i)), a = s.slice(Math.max(0, s.findIndex((i) => i.type === "assistant" && r?.type === "assistant" && i.message.id === r.message.id))), l = (0, import_chunk_bzyb60p0.USt)(n), d = (i) => {
    let p = (0, import_chunk_bzyb60p0.tv)(i, o, e, { reminderFold: l }).findLast((m) => m.type !== "api_system");
    return p?.type === "user" && Array.isArray(p.message.content) && p.message.content.at(-1)?.type === "tool_result";
  };
  return !d([...a, ...t]) && d(a);
}
function Rzr(t) {
  let { agentId: n, notes: o } = t;
  if (o.isServed() || o.waiting().length === 0 || n === void 0 && (0, import_chunk_7f901c6t.DQ)(t.rows())) return;
  let e = o.takenToHold().map(({ rowUuid: s, plugin: r, content: a }) => (0, import_chunk_bzyb60p0.Ut)({ type: "plugin_note", ...r !== void 0 && { plugin: r }, rowUuid: s, content: [], heldContent: [...a] }));
  if (e.length > 0) (t.keepArrived ?? t.keep)(e);
}
