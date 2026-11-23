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
var chunk_hp8nm0bk_exports = {};
__export(chunk_hp8nm0bk_exports, {
  AZl: () => AZl,
  CZl: () => CZl,
  Kgs: () => Kgs,
  TZl: () => TZl,
  lql: () => lql
});
module.exports = __toCommonJS(chunk_hp8nm0bk_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_13h3tw8q = require("/$bunfs/root/chunk-13h3tw8q.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var i = 1e3, p = 32;
function TZl(e) {
  let { data: t } = e;
  if (t.type !== "repl_tool_call") return e;
  try {
    return { ...e, data: Kgs(t) };
  } catch {
    return;
  }
}
function Kgs(e) {
  let t = c(e.toolInput), o = { type: e.type, toolName: e.toolName, toolInput: t, toolUseId: e.toolUseId, phase: e.phase, ...e.nativeTimeoutMs !== void 0 && { nativeTimeoutMs: e.nativeTimeoutMs }, ...e.scriptStartedAt !== void 0 && { scriptStartedAt: e.scriptStartedAt }, ...e.shellProgress !== void 0 && { shellProgress: e.shellProgress }, ...typeof e.error === "string" && { error: n(e.error) }, ...e.scriptHelper === true && { scriptHelper: true } };
  return l.set(o, t), o;
}
function lql(e) {
  let t = /* @__PURE__ */ new Map();
  for (let { data: o } of e) if (o.type === "repl_tool_call") {
    let r = l.get(o);
    if (r === void 0) {
      try {
        r = c(o.toolInput);
      } catch {
        r = {};
      }
      l.set(o, r);
    }
    t.set(o.toolUseId, { id: o.toolUseId, name: o.toolName, input: r, phase: o.phase, ...o.shellProgress !== void 0 && { shellProgress: o.shellProgress } });
  }
  return [...t.values()];
}
function CZl(e) {
  return e === "start" || e === "executing";
}
function AZl(e) {
  let t = lql(e), o = t.findLast((s) => s.phase === "executing") ?? t.at(-1);
  if (o === void 0) return;
  let r = e.findLast((s) => s.data.type === "repl_tool_call" && s.data.toolUseId === o.id)?.data;
  return { call: o, scriptStartedAt: r?.type === "repl_tool_call" ? r.scriptStartedAt : void 0 };
}
var l = /* @__PURE__ */ new WeakMap();
function c(e) {
  let t = {};
  if (!(0, import_chunk_ma3kja9f.T)(e)) return t;
  for (let o of Object.keys(e).slice(0, p)) {
    let r = e[o];
    if (typeof r === "string") t[n(o)] = n(r);
    else if (typeof r === "number" || typeof r === "boolean") t[n(o)] = r;
  }
  return t;
}
function n(e) {
  let t = e.length > i ? `${(0, import_chunk_7cfjrnwy.ee)(e, i)}\u2026` : e;
  return (0, import_chunk_13h3tw8q.js)(t);
}
