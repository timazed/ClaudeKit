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
var chunk_kvavrh0f_exports = {};
__export(chunk_kvavrh0f_exports, {
  Azs: () => Azs,
  Czs: () => Czs,
  DWo: () => DWo,
  EXn: () => EXn,
  HWo: () => HWo,
  IWo: () => IWo,
  Ikn: () => Ikn,
  Kjr: () => Kjr,
  LWo: () => LWo,
  MWo: () => MWo,
  OWo: () => OWo,
  Okn: () => Okn,
  Ozs: () => Ozs,
  PWo: () => PWo,
  Pzs: () => Pzs,
  Rzs: () => Rzs,
  TXn: () => TXn,
  Tzs: () => Tzs,
  ow: () => ow,
  vXn: () => vXn,
  xzs: () => xzs
});
module.exports = __toCommonJS(chunk_kvavrh0f_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_6zh1j84y = require("/$bunfs/root/chunk-6zh1j84y.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_nwerbvyn = require("/$bunfs/root/chunk-nwerbvyn.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_path = require("path");
function l(t) {
  return (0, import_chunk_xzvhvaa2.rn)(t) ? (0, import_chunk_gbskgz33.PYe)(t) : (0, import_chunk_gbskgz33.k4)((0, import_chunk_2yx6c1y2.vl)(t), t);
}
function a() {
  return { sources: R(), read: import_chunk_2yx6c1y2.vl, rules: l };
}
var R = () => {
  let { gateProject: t } = (0, import_chunk_gbskgz33.Xat)(), e = (0, import_chunk_865at33z.F1)({ onIndeterminate: "tracked" });
  return [...t ? [["projectSettings", ".claude/settings.json"]] : [], ...e ? [["localSettings", ".claude/settings.local.json"]] : []];
};
function PWo(t) {
  if (t === null) return false;
  if (t.statusLine) return true;
  if (t.fileSuggestion) return true;
  if (t.subagentStatusLine) return true;
  if (!t.hooks) return false;
  for (let e of Object.values(t.hooks)) if (e.length > 0) return true;
  return false;
}
function Kjr(t = { sources: [["projectSettings", ".claude/settings.json"], ["localSettings", ".claude/settings.local.json"]], read: import_chunk_2yx6c1y2.vl, rules: l }, e = (0, import_chunk_f9x2f6cx.Te)()) {
  let o = [];
  for (let [s, i] of t.sources) if (PWo(t.read(s))) o.push(i);
  let r = (0, import_chunk_6zh1j84y.iko)(e);
  if (r !== null) o.push((0, import_chunk_xfj2cwfv.Gj)(r));
  return o;
}
function EXn(t = a(), e = (0, import_chunk_f9x2f6cx.Te)()) {
  return (0, import_chunk_4smdap7r.M)([...t.sources.filter(([o]) => t.read(o) !== null).map(([, o]) => o), ...Kjr(t, e)]);
}
function Tzs(t, e, { backstop: o }) {
  let r = e.some(import_chunk_nwerbvyn.MZn) ? [".claude/agents"] : [];
  if (o) return r;
  let s = t.filter(import_chunk_nwerbvyn.MZn);
  return [...Kjr(a()), ...s.some((i) => !g(i)) ? [".claude/skills"] : [], ...s.some(g) ? [".claude/commands"] : [], ...r];
}
function g(t) {
  return t.type === "prompt" && t.loadedFrom === "commands_DEPRECATED";
}
function p(t) {
  return t.some((e) => e.ruleBehavior === "allow" && (e.ruleValue.toolName === import_chunk_hn3cwwzt.ke || e.ruleValue.toolName.startsWith(import_chunk_hn3cwwzt.ke + "(")));
}
var x = new RegExp("[\\x00-\\x1f\\x7f-\\x9f\\u2028\\u2029]|\\p{Cf}", "gu"), f = 60;
function OWo(t) {
  let e = (0, import_chunk_wbk1hf21.w1e)(t).replace(x, "").trim();
  return e.length > f ? `${(0, import_chunk_7cfjrnwy.ee)(e, f)}\u2026` : e;
}
var y = /* @__PURE__ */ new Set([import_chunk_hn3cwwzt.ke, "PowerShell", "Write", "Edit", "MultiEdit", "NotebookEdit", "WebFetch", "WebSearch"]);
function S(t) {
  let { toolName: e, ruleContent: o } = t.ruleValue, r = y.has(e) || e.startsWith("mcp__"), s = o === void 0;
  if (r) return s ? 0 : 1;
  return s ? 2 : 3;
}
function Okn(t = a()) {
  let e = [], o = [];
  for (let [c, n] of t.sources) {
    let u = t.rules(c).filter((h) => h.ruleBehavior === "allow");
    if (u.length > 0) e.push(n), o.push(...u);
  }
  let r = o.length;
  o.sort((c, n) => S(c) - S(n));
  let s = /* @__PURE__ */ new Set(), i = [];
  for (let c of o) {
    let n = OWo((0, import_chunk_qebpc5de.yn)(c.ruleValue));
    if (n.length > 0 && !s.has(n)) s.add(n), i.push(n);
  }
  return { rules: i, sources: e, rawCount: r };
}
function d(t) {
  if ((0, import_path.isAbsolute)(t) || t.startsWith("~")) return 0;
  if (t.includes("..")) return 1;
  return 2;
}
function Ikn(t = a()) {
  let e = [], o = [];
  for (let [c, n] of t.sources) {
    let u = t.read(c)?.permissions?.additionalDirectories ?? [];
    if (u.length > 0) e.push(n), o.push(...u);
  }
  let r = o.length, s = /* @__PURE__ */ new Set(), i = [];
  for (let c of o) {
    let n = OWo(c);
    if (n.length > 0 && !s.has(n)) s.add(n), i.push(n);
  }
  return i.sort((c, n) => d(c) - d(n)), { dirs: i, sources: e, rawCount: r };
}
function Czs() {
  let t = [], e = l("projectSettings");
  if (p(e)) t.push(".claude/settings.json");
  let o = l("localSettings");
  if (p(o)) t.push(".claude/settings.local.json");
  return t;
}
function ow(t, e) {
  if (t.length === 0) return "";
  let o = e === 0 ? void 0 : e;
  if (!o || t.length <= o) {
    if (t.length === 1) return t[0];
    if (t.length === 2) return `${t[0]} and ${t[1]}`;
    let i = t.at(-1);
    return `${t.slice(0, -1).join(", ")}, and ${i}`;
  }
  let r = t.slice(0, o), s = t.length - o;
  if (r.length === 1) return `${r[0]} and ${s} more`;
  return `${r.join(", ")}, and ${s} more`;
}
function IWo(t) {
  return !!t?.otelHeadersHelper;
}
function Azs() {
  let t = [], e = (0, import_chunk_2yx6c1y2.vl)("projectSettings");
  if (IWo(e)) t.push(".claude/settings.json");
  let o = (0, import_chunk_2yx6c1y2.vl)("localSettings");
  if (IWo(o)) t.push(".claude/settings.local.json");
  return t;
}
function vXn() {
  let t = [];
  if ((0, import_chunk_2yx6c1y2.vl)("projectSettings")?.autoMemoryDirectory !== void 0) t.push(".claude/settings.json");
  if ((0, import_chunk_2yx6c1y2.vl)("localSettings")?.autoMemoryDirectory !== void 0) t.push(".claude/settings.local.json");
  return t;
}
function MWo(t) {
  return !!t?.apiKeyHelper;
}
function Rzs() {
  let t = [], e = (0, import_chunk_2yx6c1y2.vl)("projectSettings");
  if (MWo(e)) t.push(".claude/settings.json");
  let o = (0, import_chunk_2yx6c1y2.vl)("localSettings");
  if (MWo(o)) t.push(".claude/settings.local.json");
  return t;
}
function HWo(t) {
  return !!(t?.awsAuthRefresh || t?.awsCredentialExport);
}
function xzs() {
  let t = [], e = (0, import_chunk_2yx6c1y2.vl)("projectSettings");
  if (HWo(e)) t.push(".claude/settings.json");
  let o = (0, import_chunk_2yx6c1y2.vl)("localSettings");
  if (HWo(o)) t.push(".claude/settings.local.json");
  return t;
}
function DWo(t) {
  return !!t?.gcpAuthRefresh;
}
function Pzs() {
  let t = [], e = (0, import_chunk_2yx6c1y2.vl)("projectSettings");
  if (DWo(e)) t.push(".claude/settings.json");
  let o = (0, import_chunk_2yx6c1y2.vl)("localSettings");
  if (DWo(o)) t.push(".claude/settings.local.json");
  return t;
}
function LWo(t) {
  return !!t?.proxyAuthHelper;
}
function Ozs() {
  let t = [], e = (0, import_chunk_2yx6c1y2.vl)("projectSettings");
  if (LWo(e)) t.push(".claude/settings.json");
  let o = (0, import_chunk_2yx6c1y2.vl)("localSettings");
  if (LWo(o)) t.push(".claude/settings.local.json");
  return t;
}
function m(t) {
  if (!t?.env) return false;
  return Object.entries(t.env).some(([e, o]) => !(0, import_chunk_gd77dyw4.ROe)(e, o));
}
function TXn() {
  let t = [], e = (0, import_chunk_2yx6c1y2.vl)("projectSettings");
  if (m(e)) t.push(".claude/settings.json");
  let o = (0, import_chunk_2yx6c1y2.vl)("localSettings");
  if (m(o)) t.push(".claude/settings.local.json");
  return t;
}
