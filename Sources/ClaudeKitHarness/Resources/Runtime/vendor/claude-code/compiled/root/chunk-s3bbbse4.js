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
var chunk_s3bbbse4_exports = {};
__export(chunk_s3bbbse4_exports, {
  Dlo: () => Dlo,
  Lbt: () => Lbt,
  Llo: () => Llo
});
module.exports = __toCommonJS(chunk_s3bbbse4_exports);
var import_chunk_wwft95x8 = require("/$bunfs/root/chunk-wwft95x8.js");
function* i(n) {
  for (let e of n) if (e.type === "assistant" && Array.isArray(e.message.content)) {
    for (let s of e.message.content) if (s.type === "tool_use" && import_chunk_wwft95x8.dp.includes(s.name)) {
      let { input: t } = s;
      if (typeof t === "object" && t !== null && "command" in t && typeof t.command === "string") yield t.command;
    }
  }
}
function Dlo(n) {
  let e = /* @__PURE__ */ new Set();
  for (let s of i(n)) {
    let t = m(s);
    if (t) e.add(t);
  }
  return e;
}
var a = /https?:\/\/([^\s/?#'"`<>\\)\];&|(,]+)/gi;
function c(n) {
  if (!n) return [];
  let e = [];
  for (let s of n.matchAll(a)) {
    let t = s[1].toLowerCase(), o = t.lastIndexOf("@");
    if (o !== -1) t = t.slice(o + 1);
    let r = t.indexOf(":");
    if (r !== -1) t = t.slice(0, r);
    if (t) e.push(t);
  }
  return e;
}
function Llo(n) {
  let e = /* @__PURE__ */ new Set();
  for (let s of i(n)) for (let t of c(s)) e.add(t);
  return e;
}
function Lbt(n) {
  let e = /* @__PURE__ */ new Set();
  for (let s of n) if (s.type === "assistant" && Array.isArray(s.message.content)) {
    for (let t of s.message.content) if (t.type === "tool_use") e.add(t.name);
  }
  return e;
}
var f = /* @__PURE__ */ new Set(["sudo"]);
function m(n) {
  if (!n) return;
  let e = n.trim().split(/\s+/);
  for (let s of e) {
    if (/^[A-Za-z_]\w*=/.test(s)) continue;
    if (f.has(s)) continue;
    return s;
  }
  return;
}
