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
var chunk_m6dmdtdc_exports = {};
__export(chunk_m6dmdtdc_exports, {
  KIt: () => KIt,
  VIt: () => VIt,
  YIt: () => YIt,
  mWo: () => mWo,
  mXn: () => mXn,
  nzs: () => nzs,
  qIt: () => qIt,
  rzs: () => rzs,
  vkn: () => vkn,
  wKe: () => wKe
});
module.exports = __toCommonJS(chunk_m6dmdtdc_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_8704k7wd = require("/$bunfs/root/chunk-8704k7wd.js");
var import_chunk_jnrh77bs = require("/$bunfs/root/chunk-jnrh77bs.js");
var import_chunk_tfs0ssqe = require("/$bunfs/root/chunk-tfs0ssqe.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_vhsysgcd = require("/$bunfs/root/chunk-vhsysgcd.js");
var vkn = ["on", "name-only", "user-invocable-only", "off"];
function x(e) {
  return e.type === "prompt" && e.hiddenBehindPlugin === void 0 && (e.loadedFrom === "skills" || e.loadedFrom === "syncedSkills" || e.loadedFrom === "commands_DEPRECATED" || e.loadedFrom === "plugin" || e.loadedFrom === "mcp");
}
function nzs(e) {
  let n = (0, import_chunk_tfs0ssqe.N$t)(e);
  if (n) {
    let t = e.source === "plugin" ? (0, import_chunk_tfs0ssqe.MDe)(e) : n.value;
    return { value: t, source: t !== n.value ? "plugin" : n.source === "policySettings" ? "policy" : "flag" };
  }
  if (!(0, import_chunk_tfs0ssqe.d9e)(e.name)) return { value: e.disableModelInvocation ? "user-invocable-only" : "on", source: "reserved-name" };
  if (e.disableModelInvocation) return { value: "user-invocable-only", source: "author" };
  if (e.source === "plugin") return { value: (0, import_chunk_tfs0ssqe.MDe)(e), source: "plugin" };
  return;
}
function F(e, { skipLocalBareKey: n = false } = {}) {
  if (e.loadedFrom === "mcp") {
    let a = [e.name, ...(0, import_chunk_tfs0ssqe.Mgr)(e)];
    for (let y of ["projectSettings", "userSettings"]) {
      if (!(0, import_chunk_xzvhvaa2.rn)(y)) continue;
      let m = (0, import_chunk_tfs0ssqe.bwt)((0, import_chunk_2yx6c1y2._e)(y)?.skillOverrides, a);
      if (m !== void 0) return m;
    }
    return;
  }
  let t = (a) => (0, import_chunk_xzvhvaa2.rn)(a) ? (0, import_chunk_2yx6c1y2._e)(a)?.skillOverrides : void 0, o = (a) => (0, import_chunk_tfs0ssqe.IH)(t("projectSettings"), a) ?? (0, import_chunk_tfs0ssqe.IH)(t("userSettings"), a), i = (0, import_chunk_tfs0ssqe.Swt)(e), f = n ? void 0 : (0, import_chunk_tfs0ssqe.IH)((0, import_chunk_2yx6c1y2._e)("localSettings")?.skillOverrides, i);
  return o(e.name) ?? (i != null ? f ?? o(i) : void 0);
}
function b(e, n) {
  return e.loadedFrom === "mcp" ? (0, import_chunk_tfs0ssqe.bwt)(n, [e.name, ...(0, import_chunk_tfs0ssqe.Mgr)(e)]) : (0, import_chunk_tfs0ssqe.IH)(n, e.name);
}
function wKe({ source: e, loadedFrom: n, pluginInfo: t }) {
  if (n === "syncedSkills" || (0, import_chunk_ht27b0vz.Dre)(t?.repository)) return import_chunk_xzvhvaa2.b8;
  switch (e) {
    case "mcp":
    case "plugin":
      return e;
    case "memoryStore":
      return "memory store";
    case "bundled":
    case "builtin":
      return "built-in";
    default:
      return (0, import_chunk_xzvhvaa2.PM)(e);
  }
}
function VIt(e) {
  let n = (0, import_chunk_jnrh77bs.t_r)(e);
  return n !== void 0 && (0, import_chunk_vhsysgcd.Zs)(e) === n ? n : e.name;
}
function rzs(e, n) {
  let t = n.filter((l) => l.loadedFrom !== "syncedSkills"), o = [];
  for (let l of e) {
    let S = l.unqualifiedName;
    if (l.loadedFrom !== "syncedSkills" || S === void 0 || (0, import_chunk_jnrh77bs.Awt)(l) !== void 0) continue;
    let r = (0, import_chunk_7cfjrnwy.I_)(S), u = (0, import_chunk_8704k7wd.zs)(S, t), O = (0, import_chunk_mgntjepj.vg)(S), v = (g) => [g.name, (0, import_chunk_vhsysgcd.Zs)(g), ...g.aliases ?? []], C = (g) => v(g).find((R) => (0, import_chunk_mgntjepj.vg)(R) === O), d = u ?? t.find((g) => C(g));
    if (!d) {
      o.push({ bare: r, sentence: `Your claude.ai skill can't use /${r} in this session.`, held: false, userCanFree: false, renameNeedsNameLine: false });
      continue;
    }
    let p = d.type === "prompt" ? d : void 0, k = p?.skillRoot !== void 0 ? "skill" : `command file ${(0, import_chunk_7cfjrnwy.I_)(d.name)}.md`, c, s = "", h = false;
    if (d.kind === "workflow") c = "a workflow";
    else if (d.loadedFrom === "plugin") c = "a command from a plugin";
    else switch ((0, import_chunk_xzvhvaa2.kMo)(d)) {
      case "user": {
        let g = p?.skillRoot !== void 0 ? ` in ${(0, import_chunk_7cfjrnwy.I_)((0, import_chunk_n2dbhmj2.os)(p.skillRoot))}` : "";
        c = `your own ${k}${g}`, h = d.loadedFrom === "skills", s = h ? " Rename it (folder and SKILL.md name) or delete it to use the claude.ai one." : " Rename or delete it to use the claude.ai one.";
        break;
      }
      case "project":
        c = `this project's ${k}`;
        break;
      case "managed":
        c = `a ${k} your organization manages`;
        break;
      case "plugin":
        c = "a command from a plugin";
        break;
      case "remote":
        c = d.loadedFrom === "mcp" ? "a skill from an MCP server" : d.isMcp ? "a prompt from an MCP server" : "another command";
        break;
      case "builtin":
      case "bundled":
        c = "a built-in Claude Code command";
        break;
      default:
        c = "another command";
    }
    let w = `/${(0, import_chunk_7cfjrnwy.I_)(C(d) ?? d.name)}`, N = u !== void 0 ? `/${r} runs ${c}${s ? `.${s}` : ", not your claude.ai skill."}` : `/${r} is too close to ${w}, ${c}${s ? `.${s}` : ", so your claude.ai skill can't use it."}`;
    o.push({ bare: r, sentence: N, held: true, userCanFree: s !== "", renameNeedsNameLine: h });
  }
  if (o.length === 0) return;
  if (o.length === 1) return o[0].sentence;
  let i = o.every((l) => l.held) ? "are taken by other commands" : "are taken by other commands or unavailable in this session", f = `${L(o)} ${i}, so they don't run your claude.ai skills.`, a = o.filter((l) => l.userCanFree);
  if (a.length === 0) return f;
  let y = a.some((l) => l.renameNeedsNameLine) ? "Rename (folder and SKILL.md name)" : "Rename", m = a.length === 1 ? "one" : "ones";
  return `${f} ${y} or delete your own ${L(a)} to use the claude.ai ${m}.`;
}
function L(e) {
  let n = e.map((t) => `/${t.bare}`);
  if (n.length === 1) return n[0];
  if (n.length <= 4) return `${n.slice(0, -1).join(", ")} and ${n.at(-1)}`;
  return `${n.slice(0, 3).join(", ")} and ${n.length - 3} more`;
}
function KIt(e, { sortByTokens: n = false } = {}) {
  let t = e.filter(x);
  if (n) {
    let o = new Map(t.map((i) => [i, (0, import_chunk_bzyb60p0.lFt)(i)]));
    return t.sort((i, f) => (o.get(f) ?? 0) - (o.get(i) ?? 0) || VIt(i).localeCompare(VIt(f)));
  }
  return t.sort((o, i) => wKe(o).localeCompare(wKe(i)) || VIt(o).localeCompare(VIt(i)));
}
function mWo() {
  return Object.assign(/* @__PURE__ */ Object.create(null), (0, import_chunk_2yx6c1y2._e)("localSettings")?.skillOverrides);
}
function qIt(e, n = mWo()) {
  let t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  for (let i of e) {
    let f = F(i);
    if (f) t.set(i.name, f);
    let a = nzs(i);
    if (a) o.set(i, a);
  }
  return { localOverrides: n, lowerTier: t, locked: o };
}
function YIt(e, n) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let o of e) {
    if (Object.hasOwn(t, o.name)) continue;
    t[o.name] = n.locked.get(o)?.value ?? b(o, n.localOverrides) ?? n.lowerTier.get(o.name) ?? "on";
  }
  return t;
}
function mXn(e, n, t) {
  let { localOverrides: o, lowerTier: i, locked: f } = t, a = new Set(Array.from(f.keys(), (r) => r.name)), y = new Set(a), m = /* @__PURE__ */ Object.create(null), l = 0, S = 0;
  for (let r of e) {
    if (y.has(r.name)) continue;
    y.add(r.name);
    let u = (0, import_chunk_tfs0ssqe.IH)(n, r.name) ?? "on", O = i.get(r.name) ?? "on", v = b(r, o) ?? O;
    if (r.loadedFrom === "mcp") {
      if (u === v) continue;
      let p = false, k = u === O ? void 0 : u;
      if (k !== (0, import_chunk_tfs0ssqe.IH)(o, r.name) || Object.hasOwn(m, r.name)) m[r.name] = k, p = true;
      for (let c of (0, import_chunk_tfs0ssqe.Mgr)(r)) {
        if ((0, import_chunk_tfs0ssqe.IH)(o, c) === void 0) continue;
        for (let s of e) {
          if (s.name === r.name || s.loadedFrom !== "mcp" || !(0, import_chunk_tfs0ssqe.Mgr)(s).includes(c) || Object.hasOwn(m, s.name)) continue;
          let h = b(s, o);
          if ((a.has(s.name) || ((0, import_chunk_tfs0ssqe.IH)(n, s.name) ?? "on") === (h ?? i.get(s.name) ?? "on")) && h !== void 0) m[s.name] = h;
        }
        m[c] = void 0, p = true;
      }
      if (p) l++;
      S++;
      continue;
    }
    let C = r.loadedFrom === "syncedSkills" ? (0, import_chunk_tfs0ssqe.Swt)(r) : void 0;
    if (C != null && (0, import_chunk_tfs0ssqe.IH)(o, C) !== void 0 && u !== v) {
      let p = F(r, { skipLocalBareKey: true }) ?? "on", k = u === p ? void 0 : u;
      if (k !== (0, import_chunk_tfs0ssqe.IH)(o, r.name)) m[r.name] = k;
      m[C] = void 0, l++, S++;
      continue;
    }
    if (r.loadedFrom === "syncedSkills" && u === v) continue;
    let d = u === O ? void 0 : u;
    if (d !== (0, import_chunk_tfs0ssqe.IH)(o, r.name)) m[r.name] = d, l++;
    if (u !== v) S++;
  }
  return { diff: m, writes: l, effectiveChanged: S };
}
