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
var chunk_bgeb7avm_exports = {};
__export(chunk_bgeb7avm_exports, {
  HOt: () => HOt,
  aBr: () => aBr,
  cBr: () => cBr,
  dBr: () => dBr,
  hga: () => hga,
  iBr: () => iBr,
  lBr: () => lBr,
  mga: () => mga,
  sBr: () => sBr
});
module.exports = __toCommonJS(chunk_bgeb7avm_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_path = require("path");
function c(t) {
  return (0, import_chunk_w5s307zm.dr)(t) !== null;
}
function sBr(t, o, n = "  ") {
  let r = (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "CLAUDE.md"), s = (0, import_path.join)(o, "CLAUDE.md"), i = (0, import_path.join)(o, ".claude", "CLAUDE.md"), p = (0, import_path.join)(o, "CLAUDE.local.md"), f = t.some((e) => e.path === r), g = t.some((e) => e.path === s), y = [...t.filter((e) => e.type !== "AutoMem" && !(0, import_chunk_bzyb60p0.VQt)(e.path)).map((e) => ({ ...e, exists: true })), ...f ? [] : [{ path: r, type: "User", content: "", exists: false }], ...g ? [] : [{ path: s, type: "Project", content: "", exists: false }]], h = c(o), u = /* @__PURE__ */ new Map();
  return y.map((e) => {
    let d = (0, import_chunk_2yx6c1y2.Po)(e.path), a = e.parent ? (u.get(e.parent) ?? 0) + 1 : 0;
    u.set(e.path, a);
    let b = a > 0 ? (0, import_chunk_7cfjrnwy.xd)(n, a - 1) : "", l = e.type === "User" && e.path === r ? "user" : e.type === "Project" && e.path === s ? "project" : a === 0 && e.type === "Project" && e.path === i ? "project-alt" : a === 0 && e.type === "Local" && e.path === p ? "local" : "other", M = l === "user" ? "User instructions" : l === "project" ? "Project instructions" : a > 0 ? `${b}L ${d}` : d, R = e.type === "User" ? "Saved in ~/.claude/CLAUDE.md" : l === "project" ? `${h ? "Checked in at" : "Saved in"} ./CLAUDE.md` : e.parent ? "@-imported" : "";
    return { kind: l, path: e.path, label: M, description: R, exists: e.exists };
  });
}
function iBr() {
  let t = [{ kind: "auto", path: (0, import_chunk_865at33z.wc)(), label: "Open auto-memory folder", description: "" }];
  if ((0, import_chunk_865at33z.kke)() && (0, import_chunk_p1ewvgeh.j$i)()) t.push({ kind: "team", path: (0, import_chunk_p1ewvgeh.IA)(), label: "Open team memory folder", description: "" });
  return t;
}
function aBr(t, o = (n) => n) {
  let n = [];
  for (let r of t) if (r.memory) n.push({ kind: "agent", path: (0, import_chunk_p1ewvgeh.ASs)(r.agentType, r.memory), label: `Open ${o(r.agentType)} agent memory`, description: `${r.memory} scope` });
  return n;
}
function mga() {
  let t = (0, import_chunk_sjqze7qg.Bfr)();
  if (t === "open" || t === "pending") return t;
  if (t === "account_off" || t === "local_memory_off") {
    let o = (0, import_chunk_sjqze7qg.Cso)();
    return o === "denied" ? "closed" : o;
  }
  return "closed";
}
function HOt() {
  return (0, import_chunk_p1ewvgeh.GEt)();
}
function hga() {
  return false;
}
var lBr = "can't be turned on here; use a session started outside Claude Code";
function dBr({ enabled: t, modelDisabled: o, safeMode: n, raiseAllowed: r }) {
  if (o && !t) return { status: "unavailable for current model", detail: "", dim: true, toggleable: false };
  if (n) return { status: "off in safe mode", detail: `${(0, import_chunk_2gtmjt3y.vk)()} to re-enable`, dim: true, toggleable: false };
  if (!t && !r) return { status: "off", detail: lBr, dim: true, toggleable: false };
  return { status: t ? "on" : "off", detail: "", dim: false, toggleable: !o };
}
function cBr({ autoMemoryOn: t, enabled: o, running: n, lastDreamAt: r, raiseAllowed: s, heldDetail: i }) {
  if (!t) return { status: "off while auto-memory is off", detail: "", dim: true, toggleable: false };
  if (i !== void 0) return { status: o ? "on" : "off", detail: i, dim: true, toggleable: false };
  if (!o && !s) return { status: "off", detail: lBr, dim: true, toggleable: false };
  let p = n ? "running" : r === null ? "" : r === 0 ? "never" : `last ran ${(0, import_chunk_f64qna2j.Ty)(new Date(r))}`;
  return { status: o ? "on" : "off", detail: p, dim: false, toggleable: true };
}
