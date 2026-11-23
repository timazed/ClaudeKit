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
var chunk_qqb44g89_exports = {};
__export(chunk_qqb44g89_exports, {
  Hxa: () => Hxa,
  a6o: () => a6o
});
module.exports = __toCommonJS(chunk_qqb44g89_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var p = ["userSettings", "projectSettings", "localSettings", "flagSettings", "cliArg", "session"];
function s(l) {
  if (l === import_chunk_hn3cwwzt.ke) return import_chunk_hn3cwwzt.ke;
  if (l === import_chunk_rb36kwbn.yt) return import_chunk_rb36kwbn.yt;
  return null;
}
function m(l, e) {
  let o = s(l);
  if (o === null) return null;
  if (e === void 0 || e === "" || /^[\s*]+$/.test(e)) return "bare";
  return (o === import_chunk_hn3cwwzt.ke ? (0, import_chunk_bz1f2qnq.DBn)(o, e) : (0, import_chunk_bz1f2qnq.Qbs)(o, e)) ? "dangerous_prefix" : "scoped";
}
function y(l) {
  let e = {}, o = 0;
  for (let r of p) for (let t of l[r] ?? []) {
    let { toolName: c, ruleContent: S } = (0, import_chunk_qebpc5de.Ur)(t), n = s(c);
    if (n === null) continue;
    let i = m(n, S);
    if (i === null) continue;
    let u = `${r}_${n}_${i}`;
    e[u] = (e[u] ?? 0) + 1, o++;
  }
  return e.total_shell_allow_rules = o, e;
}
function Hxa(l) {
  (0, import_chunk_y53wbr8a.a)("tengu_shell_allow_rules_at_init", y(l));
}
function a6o(l) {
  for (let e of l) {
    if (e.type !== "addRules" || e.behavior !== "allow") continue;
    for (let o of e.rules) {
      let r = s(o.toolName);
      if (r === null) continue;
      let t = m(o.toolName, o.ruleContent);
      if (t === null) continue;
      (0, import_chunk_y53wbr8a.a)("tengu_shell_allow_rule_added", { toolName: (0, import_chunk_78g0060s.f)(r), category: (0, import_chunk_78g0060s.f)(t), destination: (0, import_chunk_78g0060s.f)(e.destination) });
    }
  }
}
