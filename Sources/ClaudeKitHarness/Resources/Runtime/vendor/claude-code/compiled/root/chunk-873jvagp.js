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
var chunk_873jvagp_exports = {};
__export(chunk_873jvagp_exports, {
  $3r: () => $3r,
  Jtr: () => Jtr,
  U3r: () => U3r,
  X7t: () => X7t,
  agt: () => agt,
  mCn: () => mCn
});
module.exports = __toCommonJS(chunk_873jvagp_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_tfs0ssqe = require("/$bunfs/root/chunk-tfs0ssqe.js");
var import_chunk_9ehfvk1q = require("/$bunfs/root/chunk-9ehfvk1q.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_r7rdkntg = require("/$bunfs/root/chunk-r7rdkntg.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
function $3r(n, s) {
  return n + " ".repeat(Math.max(0, s - (0, import_chunk_mgh1y10w.oe)(n)));
}
function mCn(n, s) {
  return " ".repeat(Math.max(0, s - (0, import_chunk_mgh1y10w.oe)(n))) + n;
}
function Jtr(n) {
  let s = n.map((o) => ({ context: o.listingTokens === null ? "-" : (0, import_chunk_f64qna2j.FX)(o.listingTokens), week: o.weekTokens === null ? "-" : (0, import_chunk_f64qna2j.go)(o.weekTokens), lastUsed: o.daysSinceUse === null ? "never" : o.daysSinceUse === 0 ? "today" : `${o.daysSinceUse} ${(0, import_chunk_7cfjrnwy.O)(o.daysSinceUse, "day")}` }));
  return { cells: s, widths: { name: Math.max(5, ...n.map((o) => (0, import_chunk_mgh1y10w.oe)(o.name))), source: Math.max(6, ...n.map((o) => (0, import_chunk_mgh1y10w.oe)(o.source))), context: Math.max(7, ...s.map((o) => (0, import_chunk_mgh1y10w.oe)(o.context))), week: Math.max(9, ...s.map((o) => (0, import_chunk_mgh1y10w.oe)(o.week))), uses: Math.max(4, ...n.map((o) => (0, import_chunk_mgh1y10w.oe)(String(o.usageCount)))) } };
}
class agt extends Error {
  featureErrorCode;
  constructor(n, s) {
    super("skill-doctor stage failed", { cause: s });
    this.featureErrorCode = n;
  }
}
function X7t(n) {
  return { commands: n.options.commands, mcpCommands: n.getMcp().commands, mcpClients: n.getMcp().clients, agentId: n.agentId, mainLoopModel: n.options.mainLoopModel, permissionMode: (0, import_chunk_bz1f2qnq.Z)(n).mode, storageV5: n.storageV5 };
}
async function U3r(n) {
  let s = (0, import_chunk_r7rdkntg.aDt)();
  s.catch(() => {
  });
  let o = (0, import_chunk_9ehfvk1q.Qtr)(), c = o.allowed ? (0, import_chunk_9ehfvk1q.qDa)(n.storageV5).catch((e) => {
    throw new agt("scan_failed", e);
  }) : Promise.resolve(/* @__PURE__ */ new Map());
  c.catch(() => {
  });
  let { included: k } = await (0, import_chunk_bzyb60p0.ees)(n.mcpCommands, n.agentId, n.storageV5).catch((e) => {
    throw new agt("skill_set_failed", e);
  }), S = (0, import_chunk_865at33z.lI)({ permissionMode: n.permissionMode, setting: (0, import_chunk_865at33z.Ld)(), mainLoopModel: n.mainLoopModel }), y = (0, import_chunk_bzyb60p0.ZZo)(k, S, n.mainLoopModel), p = await c, r = [], l = (0, import_chunk_tfs0ssqe.dAe)([...n.commands]), w = new Set(l.map((e) => e.name)), h = new Set(n.commands.filter((e) => (0, import_chunk_tfs0ssqe.U$t)(e) && !w.has(e.name)).map((e) => e.name)), m = /* @__PURE__ */ new Map();
  for (let e of l) {
    let t = e.type === "prompt" && e.loadedFrom !== "syncedSkills" ? e.name.lastIndexOf(":") : -1;
    if (t > 0) {
      let i = e.name.slice(t + 1);
      m.set(i, (m.get(i) ?? 0) + 1);
    }
  }
  for (let e of l) {
    if (e.type !== "prompt") continue;
    if (e.source === "bundled" || e.source === "builtin" || e.source === "policySettings") continue;
    if (e.source === "mcp" && e.loadedFrom !== "mcp") continue;
    let t = e.name.lastIndexOf(":"), i = t > 0 ? e.name.slice(t + 1) : void 0, u = i !== void 0 && e.loadedFrom !== "syncedSkills" && h.has(i) && m.get(i) === 1 ? i : void 0, f = (0, import_chunk_bzyb60p0.hen)(e.name, u ?? (0, import_chunk_tfs0ssqe.Swt)(e));
    r.push({ name: e.pluginInfo ? (0, import_chunk_xcgcdx61.dh)(e.name) : e.name, source: e.pluginInfo ? (0, import_chunk_ht27b0vz.Dre)(e.pluginInfo.repository) ? import_chunk_xzvhvaa2.b8 : (0, import_chunk_xcgcdx61.dh)(e.pluginInfo.pluginManifest.name) : e.loadedFrom === "syncedSkills" ? import_chunk_xzvhvaa2.b8 : e.source, owner: e.source === "plugin" ? "plugin" : e.source === "mcp" ? "mcp" : e.loadedFrom === "syncedSkills" ? "synced" : "settings", pluginKey: e.pluginInfo?.pluginManifest.name, usageCount: f?.usageCount ?? 0, daysSinceUse: f?.daysSinceUse ?? null, listingTokens: y.get(e.name) ?? null, weekTokens: p.get((0, import_chunk_tfs0ssqe.V6)(e)) ?? (u ? p.get(u) : void 0) ?? null });
  }
  r.sort((e, t) => (t.daysSinceUse ?? 1 / 0) - (e.daysSinceUse ?? 1 / 0));
  let a = r.filter((e) => e.usageCount === 0 && e.listingTokens !== null), b = a.filter((e) => e.owner === "settings"), x = a.filter((e) => e.owner === "synced"), C = new Set(r.filter((e) => e.usageCount > 0 && e.pluginKey !== void 0).map((e) => e.pluginKey)), I = a.filter((e) => e.owner === "plugin" && (e.pluginKey === void 0 || !C.has(e.pluginKey))), d = (e) => {
    let t = e.name.indexOf(":");
    return t > 0 ? e.name.slice(0, t) : void 0;
  }, L = new Set(r.filter((e) => e.owner === "mcp" && e.usageCount > 0).map(d).filter((e) => e !== void 0)), g = a.filter((e) => {
    if (e.owner !== "mcp") return false;
    let t = d(e);
    return t === void 0 || !L.has(t);
  }), T = (0, import_chunk_4smdap7r.M)(g.map(d).filter((e) => e !== void 0)).map((e) => (0, import_chunk_xcgcdx61.dh)(n.mcpClients.find((t) => (0, import_chunk_3f4m74y6.xn)(t.name) === e)?.name ?? e));
  return { rows: r, unusedOwned: b, unusedFromPlugins: I, unusedFromMcp: g, unusedSynced: x, unusedMcpServers: T, disusedPlugins: await s, weekTokensNote: o.allowed ? null : o.reason };
}
