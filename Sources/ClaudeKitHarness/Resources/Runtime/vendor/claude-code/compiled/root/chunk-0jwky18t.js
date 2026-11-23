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
var chunk_0jwky18t_exports = {};
__export(chunk_0jwky18t_exports, {
  $pt: () => $pt,
  CVe: () => CVe,
  D3t: () => D3t,
  Fpt: () => Fpt,
  Gfa: () => Gfa,
  H3t: () => H3t,
  a$s: () => a$s,
  i$s: () => i$s,
  l$s: () => l$s,
  s$s: () => s$s,
  sIe: () => sIe
});
module.exports = __toCommonJS(chunk_0jwky18t_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_cee6q0wn = require("/$bunfs/root/chunk-cee6q0wn.js");
var import_chunk_8ewjdpbn = require("/$bunfs/root/chunk-8ewjdpbn.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_v70mn5g6 = require("/$bunfs/root/chunk-v70mn5g6.js");
var import_chunk_aw5nczax = require("/$bunfs/root/chunk-aw5nczax.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_qwbhh2k3 = require("/$bunfs/root/chunk-qwbhh2k3.js");
var sIe = () => (0, import_chunk_v70mn5g6.UIe)({ promptSuggestionEnabled: false });
var d = /* @__PURE__ */ new Set([import_chunk_hn3cwwzt.ke, import_chunk_k883m4fq.De, import_chunk_rb36kwbn.lt, import_chunk_rb36kwbn.Dt, import_chunk_865at33z.Sr, import_chunk_865at33z.Qr, import_chunk_rb36kwbn.Ks, import_chunk_rb36kwbn.yt]), Fpt = /* @__PURE__ */ new Set([import_chunk_cee6q0wn.Yd]), CVe = import_chunk_bzyb60p0.NYo;
function s$s(e, o) {
  return e.coerceInput?.((0, import_chunk_qwbhh2k3.Pn)(o, CVe))?.input;
}
function i$s(e, o) {
  return s$s(e, o) ?? (0, import_chunk_qwbhh2k3.Pn)(o, CVe);
}
function H3t(e, o) {
  return e.inputSchema.safeParse(i$s(e, o));
}
function a$s(e) {
  return e === "http" ? CVe : import_chunk_bzyb60p0.eJr;
}
function D3t(e) {
  return `[serve-mode] Stripped client-supplied privilege field(s): ${e.join(", ")}`;
}
function E(e, o) {
  if (e.properties === void 0 || o.length === 0) return e;
  let n = { ...e.properties };
  for (let i of o) delete n[i];
  let s = Array.isArray(e.required) ? e.required.filter((i) => !o.includes(i)) : e.required;
  return { ...e, properties: n, required: s };
}
function $pt(e, { skipSearchToolRestore: o = false } = {}) {
  (0, import_chunk_2zeyvjwb.WS)();
  let n = (0, import_chunk_aw5nczax.n6)((0, import_chunk_4vsz8a99.Vd)(), { skipReplFilter: true, skipSimpleModeFilter: e, ...e && { onlyNames: d } }).filter((t) => !(0, import_chunk_4vsz8a99.GP)(t));
  if (!e) return n;
  let s = n.filter((t) => d.has(t.name));
  if (o) return s;
  let i = (0, import_chunk_bzyb60p0.b6)(), p = [import_chunk_bzyb60p0.AW, import_chunk_bzyb60p0.RW].filter((t) => i.has(t.name) && d.has(t.name) && !s.includes(t) && t.isEnabled());
  return [...s, ...p];
}
var _ = /* @__PURE__ */ new Set(["remoteExecution", "outputSchemaAcrossProcesses", "outputSchema", "registryToolId"]);
async function Gfa(e, o = {}, n) {
  let s = e === "http", i = (0, import_chunk_4vsz8a99.Vd)(), p = $pt(s, o), t = o.agentDefinitions ?? { activeAgents: [], allAgents: [] }, u = s ? [] : await (0, import_chunk_bzyb60p0.aBe)(t.activeAgents, t.allowedAgentTypes, i), T = u.length > 0 ? `Available agent types:
${u.map((r) => (0, import_chunk_bzyb60p0.Nts)(r, false)).join(`
`)}` : "", a = () => Promise.all(p.map(async (r) => {
    let f = (0, import_chunk_sjqze7qg.Pq)(r.inputSchema), S = Object.fromEntries(Object.keys(r).filter((m) => !_.has(m)).map((m) => [m, Reflect.get(r, m)])), l = await r.prompt({ getToolPermissionContext: async () => i, tools: p, agents: t.activeAgents, ...n !== void 0 && { model: n.model, leanPrompt: n.leanPrompt, bashFirstTrimmed: false } });
    return { ...S, name: r.name, description: (0, import_chunk_4vsz8a99.gt)(r, import_chunk_ht27b0vz.Wc) ? (0, import_chunk_ht27b0vz.YSl)(l) : (0, import_chunk_4vsz8a99.gt)(r, import_chunk_060xwhvh._t) ? l.replace(l.includes(import_chunk_bzyb60p0.Fts) ? import_chunk_bzyb60p0.Fts : import_chunk_bzyb60p0.xpi, () => T) : l, inputSchema: E(f, [...a$s(e), ...(0, import_chunk_4vsz8a99.MA)(r).supported ? [import_chunk_syr33dp2.io] : []]) };
  }));
  if (!s) return a();
  let c = (0, import_chunk_8ewjdpbn.Kp)();
  if (c.backgroundTasksDisabled && c.unsandboxedCommandsDisabled && !c.backgroundShellsKeptElsewhere) return a();
  for (let r of p) r.inputSchema;
  return (0, import_chunk_8ewjdpbn.ATl)(l$s(), a);
}
function l$s(e = new import_chunk_8ewjdpbn.TEs()) {
  return e.disableBackgroundTasks(), e.disableUnsandboxedCommands(), e;
}
