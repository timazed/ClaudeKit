const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_mwseevff_exports = {};
__export(chunk_mwseevff_exports, {
  F9l: () => F9l,
  N9l: () => N9l,
  r$o: () => r$o
});
module.exports = __toCommonJS(chunk_mwseevff_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_vfyns8ja = require("/$bunfs/root/chunk-vfyns8ja.js");
var import_chunk_c1hnv4fm = require("/$bunfs/root/chunk-c1hnv4fm.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_yg9g0473 = require("/$bunfs/root/chunk-yg9g0473.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var p = __toESM(require("fs/promises"));
var u = __toESM(require("path"));
async function r$o(n, e) {
  if (e === "builtin") {
    let g = (0, import_chunk_vfyns8ja.iI)(n.name);
    if (!g) throw Error(`Built-in plugin ${n.name} not found`);
    return { commands: [], agents: [], skills: g.skills?.map((T) => ({ name: T.name })) ?? [], hooks: g.hooks ? Object.keys(g.hooks) : [], mcpServers: g.mcpServers ? Object.keys(g.mcpServers) : [], lspServers: [] };
  }
  let r = (0, import_chunk_xcgcdx61.sg)(e), o = (0, import_chunk_xcgcdx61.Kn)(n.source).name || n.name, m = e === import_chunk_xcgcdx61.qn ? (await (0, import_chunk_bzyb60p0.ANt)(`${o}@${e}`, void 0, "load"))?.entry ?? (await (0, import_chunk_bzyb60p0.Gno)(o, void 0, true))?.entry : void 0, c = r ? void 0 : m ?? (await (0, import_chunk_bzyb60p0.Rcr)(e, void 0)).plugins.find((g) => g.name === o);
  if (!c && !r) throw Error(`Plugin ${o} not found in marketplace ${e}`);
  let [a, f, l] = await Promise.all([O([n.commandsPath, ...n.commandsPaths ?? []]), O([n.agentsPath, ...n.agentsPaths ?? []]), x([n.skillsPath, ...n.skillsPaths ?? []], n.name, n.entriesAnchor)]), y = n.hooksConfig ? Object.keys(n.hooksConfig) : k(c?.hooks), s = n.mcpServers ? Object.keys(n.mcpServers) : (0, import_chunk_4smdap7r.M)(await _(n)), P = s.length > 0 ? s : k(c?.mcpServers), h = n.lspServers ? Object.keys(n.lspServers) : (await A(n)).concat(k(n.manifest.lspServers)), w = h.length > 0 ? (0, import_chunk_4smdap7r.M)(h) : k(c?.lspServers);
  return { commands: a, agents: f, skills: l, hooks: y, mcpServers: P, lspServers: w };
}
async function N9l(n, e, r) {
  let [o, m, c] = await Promise.all([Promise.all(n.skills.map((s) => S(s.path ? u.join(s.path, "SKILL.md") : void 0, j(s, r)))), Promise.all(n.agents.map((s) => S(s.path, s.name, "agent"))), Promise.all(n.commands.map((s) => S(s.path, j(s, r))))]), a = [...o, ...m, ...c], f = a.map((s) => s.alwaysOn).filter(Boolean).join(`
`), l = a.map((s) => s.onInvoke).filter(Boolean).join(`

`), y = {};
  for (let s of e) {
    let [P, h] = await Promise.all([I(f, s), I(l, s)]);
    if (P !== null && h !== null) y[s] = { always_on: P, on_invoke: h };
  }
  return { tokens: y, inventory: { ...n, skills: v(n.skills, o), agents: v(n.agents, m), commands: v(n.commands, c) } };
}
function F9l(n, e, r, o = 4) {
  if (r !== void 0 && e > 0) return Math.round(n / e * r);
  return (0, import_chunk_c1hnv4fm.Ul)(" ".repeat(n), o);
}
var b = 1048576;
function j(n, e) {
  if (!e) return n.name;
  return `${e}:${n.name.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
}
async function S(n, e, r = "skill") {
  if (!n) return { alwaysOn: "", onInvoke: "" };
  let o;
  try {
    o = await C(n, b);
  } catch (s) {
    return E(n, s), { alwaysOn: "", onInvoke: "" };
  }
  let { frontmatter: m, content: c } = (0, import_chunk_p1ewvgeh.zd)(o, n, { normalizeKeys: true }), a = { description: (0, import_chunk_p1ewvgeh.TRe)(m.description, e) ?? (0, import_chunk_bzyb60p0.f_t)(c, "Skill"), whenToUse: m.when_to_use != null ? String(m.when_to_use) : void 0 }, { description: f, whenToUse: l } = r === "agent" ? a : (0, import_chunk_4vsz8a99.Ndn)({ ...a, argumentHint: void 0, argumentNames: [] });
  return { alwaysOn: (0, import_chunk_bzyb60p0.E_i)({ name: e, description: f, whenToUse: l }), onInvoke: c.trim() };
}
async function C(n, e) {
  let r = await p.open(n, "r");
  try {
    let { size: o } = await r.stat(), m = Math.min(o, e), c = Buffer.alloc(m), { bytesRead: a } = await r.read(c, 0, m, 0);
    return c.toString("utf8", 0, a);
  } finally {
    await r.close();
  }
}
function v(n, e) {
  return n.map((r, o) => {
    let m = e[o];
    if (!m) return r;
    return { ...r, chars: { always_on: m.alwaysOn.length, on_invoke: m.onInvoke.length } };
  });
}
async function I(n, e) {
  if (!n) return 0;
  return (0, import_chunk_bzyb60p0.mQt)([{ role: "user", content: n }], [], e);
}
function k(n) {
  return [n].flat().filter((e) => e != null && typeof e === "object").flatMap(Object.keys);
}
async function _(n) {
  if (n.isBuiltin) return [];
  let e = [await F(await L(n, ".mcp.json"))];
  for (let r of [n.manifest.mcpServers ?? []].flat()) if (typeof r !== "string") e.push(k(r));
  else if (!(0, import_chunk_yg9g0473.B6)(r) && !(0, import_chunk_n2dbhmj2.RM)(r) && !(0, import_chunk_z6pfqf6e.Cpt)(r)) e.push(await F(n.filesAnchor === void 0 ? await (0, import_chunk_bzyb60p0.IQt)(n, r) : await (0, import_chunk_bzyb60p0.U7o)(n.filesAnchor, n.path, r) ? null : u.join(n.path, r)));
  return e.flat();
}
async function F(n) {
  if (n === null) return [];
  try {
    let e = (0, import_chunk_w578pjby.te)(await C(n, b));
    if (e == null || typeof e !== "object") return [];
    let r = "mcpServers" in e && typeof e.mcpServers === "object" ? e.mcpServers : e;
    return r == null ? [] : Object.keys(r);
  } catch {
    return [];
  }
}
async function A(n) {
  try {
    let e = await L(n, ".lsp.json");
    if (e === null) return [];
    let r = await p.readFile(e, "utf-8"), o = (0, import_chunk_w578pjby.te)(r);
    if (o == null || typeof o !== "object") return [];
    return Object.keys(o);
  } catch {
    return [];
  }
}
async function L(n, e) {
  if ((0, import_chunk_xcgcdx61.PK)(n)) return (0, import_chunk_bzyb60p0.IQt)(n, e);
  if (n.filesAnchor !== void 0 && await (0, import_chunk_bzyb60p0.U7o)(n.filesAnchor, n.path, e)) return null;
  return u.join(n.path, e);
}
async function O(n) {
  let e = [], r = /* @__PURE__ */ new Set();
  for (let o of n) {
    if (!o) continue;
    let m;
    try {
      m = await p.readdir(o, { withFileTypes: true });
    } catch (c) {
      E(o, c);
      continue;
    }
    for (let c of m) if (c.isFile() && c.name.endsWith(".md")) {
      let a = u.join(o, c.name), f = u.resolve(a);
      if (r.has(f)) continue;
      r.add(f), e.push({ name: u.basename(c.name, ".md"), path: a });
    }
  }
  return e;
}
async function x(n, e, r) {
  let o = [], m = /* @__PURE__ */ new Set(), c = (a, f) => {
    let l = u.resolve(f);
    if (m.has(l)) return;
    m.add(l), o.push({ name: a, path: f });
  };
  for (let a of n) {
    if (!a) continue;
    try {
      let l = u.join(a, "SKILL.md");
      if ((await p.stat(l)).isFile() && (r === void 0 || await (0, import_chunk_bzyb60p0.WY)(r, a, "SKILL.md") === void 0)) {
        let s = "";
        try {
          let P = await C(l, b), { frontmatter: h } = (0, import_chunk_p1ewvgeh.zd)(P, l), w = typeof h.name === "string" ? h.name.trim() : "";
          s = w.startsWith(`${e}:`) ? w.slice(e.length + 1) : w;
        } catch {
        }
        c(s || u.basename(a), a);
        continue;
      }
    } catch {
    }
    let f;
    try {
      f = await p.readdir(a, { withFileTypes: true });
    } catch (l) {
      E(a, l);
      continue;
    }
    for (let l of f) {
      if (!l.isDirectory() && !l.isSymbolicLink()) continue;
      let y = u.join(a, l.name);
      try {
        if ((await p.stat(u.join(y, "SKILL.md"))).isFile() && (r === void 0 || await (0, import_chunk_bzyb60p0.WY)(r, a, u.join(l.name, "SKILL.md")) === void 0)) c(l.name, y);
      } catch {
      }
    }
  }
  return o;
}
function E(n, e) {
  if ((0, import_chunk_w578pjby.t)(`Failed to read plugin components from ${n}: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "error" }), (0, import_chunk_jv7av99m.pa)(e)) return;
  (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(e));
}
