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
var chunk_98tjd856_exports = {};
__export(chunk_98tjd856_exports, {
  Bce: () => Bce,
  Gma: () => Gma,
  HVe: () => HVe,
  Kma: () => Kma,
  U1e: () => U1e,
  Vma: () => Vma,
  Wma: () => Wma,
  aUr: () => aUr,
  iUr: () => iUr,
  j9n: () => j9n,
  jma: () => jma,
  n5t: () => n5t,
  oUr: () => oUr,
  qma: () => qma,
  rUr: () => rUr,
  sUr: () => sUr,
  t5t: () => t5t,
  zma: () => zma
});
module.exports = __toCommonJS(chunk_98tjd856_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_w4dc83v7 = require("/$bunfs/root/chunk-w4dc83v7.js");
var import_chunk_ag2pf657 = require("/$bunfs/root/chunk-ag2pf657.js");
var import_chunk_qmb4q514 = require("/$bunfs/root/chunk-qmb4q514.js");
var import_chunk_rts2v6y0 = require("/$bunfs/root/chunk-rts2v6y0.js");
var import_chunk_ara52wcx = require("/$bunfs/root/chunk-ara52wcx.js");
var import_chunk_yvba4101 = require("/$bunfs/root/chunk-yvba4101.js");
var import_chunk_mh32mevx = require("/$bunfs/root/chunk-mh32mevx.js");
var import_chunk_qwbhh2k3 = require("/$bunfs/root/chunk-qwbhh2k3.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_os = require("os");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var O = import_chunk_syr33dp2.gBi, P = import_chunk_syr33dp2.mvr;
class T extends import_chunk_jv7av99m.A {
  verdict;
  constructor(e, r, o) {
    super(r, o, e.code);
    this.verdict = e;
    this.name = "PassthroughCallError";
  }
}
function Wma(e, r) {
  return e?.onToolVerdict?.({ kind: "refused", code: "not_served" }, r.message), { result: false, message: r.message, errorCode: 1 };
}
function jma(e, r, o) {
  let i = new T({ kind: "refused", code: "not_served" }, r, o);
  throw e?.onToolVerdict?.(i.verdict, i.message), i;
}
function Gma(e, r, o, i) {
  let a = new Set(i.values()), s = P.filter((m) => !a.has(m));
  return async (m, f) => {
    if (f.remoteCall === void 0) throw new T({ kind: "refused", code: "invalid_request" }, b, b);
    let l = e.toolTimeoutMs(r), { onToolVerdict: u, onMcpTask: g } = f.remoteCall, y, h = await e.callTool(r, { name: o, arguments: (0, import_chunk_qwbhh2k3.Pn)(m, s) }, { signal: f.abortController.signal, timeout: l, imageLimits: { ...(0, import_chunk_yvba4101.ac)(f.modelFacts.model), allowWebp: false }, callingModel: f.modelFacts.model, ...g && { taskToCaller: (w) => {
      y = g(r, w, (E, Q) => e.taskRequest(r, E, w.taskId, Q, () => true));
    } } }).catch((w) => {
      let E = re(w, r);
      if (E instanceof T) u?.(E.verdict, E.message);
      throw E;
    });
    if (y !== void 0) return await y, { data: Z };
    return { data: h.content, ...(h._meta || h.structuredContent) && { mcpMeta: { ...h._meta && { _meta: (0, import_chunk_w4dc83v7.PH)(h._meta) }, ...h.structuredContent && { structuredContent: h.structuredContent } } } };
  };
}
var Z = "The tool started a background task on the linked computer; its result is not in yet.", b = "MCP passthrough tools run only for a remote tool call; the call did not run";
function re(e, r) {
  if ((0, import_chunk_jv7av99m.Fe)(e) || e instanceof T) return e;
  if (e instanceof import_chunk_yz5b8aaa.Bm) return new import_chunk_yz5b8aaa.Bm(`MCP server "${r}" on this machine returned an error for the call (it reached the server and may have had effects): ${e.message}`, "MCP passthrough tool returned an error", e.mcpMeta);
  if (ie(e)) return new T({ kind: "refused", code: "not_served" }, `MCP server "${r}" on this machine needs a consent step in a browser there before this tool can run; the call did not run`, "MCP passthrough call needs URL consent on this machine");
  if (e instanceof import_chunk_qmb4q514.pY) return new T({ kind: "refused", code: "not_served" }, `MCP server "${r}" on this machine: ${e.message}; the call did not run`, e.message);
  return (0, import_chunk_w578pjby.t)(`[deviceBridge] passthrough MCP call on ${r} failed: ${(0, import_chunk_jv7av99m.D)(e).message}`), new T({ kind: "failed", code: "tool_error" }, `MCP server "${r}" on this machine gave no usable result for the call (timeout, lost connection, or a protocol-level error); it may have run and had effects`, "MCP tool call failed on this machine");
}
var oe = -32042;
function ie(e) {
  return e !== null && typeof e === "object" && "code" in e && e.code === oe;
}
var se = import_chunk_syr33dp2.vBi, ae = import_chunk_syr33dp2.lwo - 262144, ce = import_chunk_syr33dp2.Gbs, de = 65536, ue = 256, me = 512, le = { enterprise: 0, managed: 1, local: 2, user: 3, dynamic: 4, project: 5, claudeai: 6, agent: 7 }, I = /* @__PURE__ */ new Set(["enterprise", "managed"]);
async function zma(e, r) {
  let o = j(e), i = await Promise.all(o.map((l) => Promise.all(l.tools.map((u) => Se(l.name, u, r.target))))), a = pe(o, i, r.configured), { tools: s, dropped: m, byServer: f } = o.reduce((l, u, g) => {
    let y = L(u.scope) ? { reason: "enterprise_scope" } : a.server(u);
    return (i[g] ?? []).reduce((h, w) => fe(h, w, y, a, r), l);
  }, { announced: /* @__PURE__ */ new Set(), bytes: 0, tools: [], dropped: [], byServer: /* @__PURE__ */ new Map() });
  return { tools: s, dropped: m, byServer: f };
}
function pe(e, r, o) {
  let i = j([...e, ...o.filter((u) => !e.some((g) => g.name === u.name))]), a = new Set(i.filter((u) => I.has(u.scope)).map((u) => u.name)), s = [...a].map((u) => `${(0, import_chunk_3f4m74y6.mT)((0, import_chunk_px0hhsq7.rC)(u))}_`), m = (u, g) => !a.has(u) && s.some((y) => `${g}_`.startsWith(y)), f = H(i.map((u) => [(0, import_chunk_3f4m74y6.mT)((0, import_chunk_px0hhsq7.rC)(u.name)), { server: u.name, admin: a.has(u.name) }])), l = H(r.flat().map((u) => [(0, import_chunk_3f4m74y6.mT)(u.name), { server: u.server, admin: a.has(u.server), rawName: u.rawName }]));
  return { server: (u) => (0, import_chunk_3f4m74y6.kqt)(u.name) || (0, import_chunk_3f4m74y6.ZFe)(u.name) || m(u.name, (0, import_chunk_3f4m74y6.mT)((0, import_chunk_px0hhsq7.rC)(u.name))) ? { reason: "collision" } : x(f.get((0, import_chunk_3f4m74y6.mT)((0, import_chunk_px0hhsq7.rC)(u.name))) ?? [], u.name, (g) => g.server === u.name), tool: (u) => (0, import_chunk_rts2v6y0.b4o)(u.name) ? { reason: "service_reserved" } : !(0, import_chunk_rts2v6y0.utt)(u.name) || (0, import_chunk_3f4m74y6.kqt)(u.name) || (0, import_chunk_3f4m74y6.ZFe)(u.name) || m(u.server, (0, import_chunk_3f4m74y6.mT)(u.name)) ? { reason: "collision" } : x(l.get((0, import_chunk_3f4m74y6.mT)(u.name)) ?? [], u.server, (g) => g.server === u.server && g.rawName === u.rawName) };
}
function x(e, r, o) {
  let i = e.find((a) => a.admin) ?? (e.length === 1 ? e[0] : void 0);
  if (i === void 0) return { reason: "alias_collision", contenders: e.map((a) => a.server).filter((a) => a !== r) };
  return o(i) ? void 0 : { reason: "collision" };
}
function H(e) {
  return e.reduce((r, [o, i]) => {
    let a = r.get(o) ?? [];
    if (!a.some((s) => s.server === i.server)) r.set(o, [...a, i]);
    return r;
  }, /* @__PURE__ */ new Map());
}
function fe(e, r, o, i, { isDenied: a, serve: s }) {
  let m = o ?? i.tool(r) ?? (r.tool.mcpInfo?.effectiveMaxPermission === "blocked" ? { reason: "permission_ceiling" } : a(r.tool) ? { reason: "deny_rule" } : ge(r, e));
  if ("reason" in m) return e.dropped.push({ server: r.server, tool: r.rawName, ...m }), e;
  e.announced.add(r.name), e.bytes += m.bytes, e.tools.push(s({ ...r, definition: m.definition, wireArguments: m.wireArguments }));
  let f = e.byServer.get(r.server);
  if (f === void 0) f = [], e.byServer.set(r.server, f);
  return f.push(m.definition), e;
}
function ge({ name: e, definition: r, wireArguments: o }, { announced: i, bytes: a }) {
  if (o === "reserved_argument") return { reason: "reserved_argument" };
  if (e.length > se) return { reason: "name_length" };
  if (i.has(e)) return { reason: "collision" };
  if (r === void 0) return { reason: "definition_error" };
  let s = Buffer.byteLength((0, import_chunk_w578pjby._)(r));
  if (s > de) return { reason: "definition_size" };
  if (!(0, import_chunk_syr33dp2.Dat)(r.inputSchema, import_chunk_syr33dp2.cwo)) return { reason: "schema_depth" };
  if (a + s > ae) return { reason: "announce_budget" };
  if (i.size >= ce) return { reason: "announce_count" };
  return { definition: r, bytes: s, wireArguments: o };
}
function j(e) {
  return e.map((r, o) => ({ server: r, index: o, rank: he(r.scope) })).sort((r, o) => r.rank - o.rank || r.index - o.index).map((r) => r.server);
}
function he(e) {
  return le[e] ?? Number.MAX_SAFE_INTEGER;
}
async function Se(e, r, o) {
  let i = r.mcpInfo?.toolName ?? r.name, a = _e(e, i), s = ye(r.inputJSONSchema), m = s === "reserved_argument" ? (0, import_chunk_ara52wcx.DXn)() : s;
  try {
    return { server: e, rawName: i, name: a, tool: r, definition: await we(a, r, o, m), wireArguments: s };
  } catch (f) {
    return (0, import_chunk_w578pjby.t)(`[deviceBridge] passthrough cannot describe '${a}': ${(0, import_chunk_jv7av99m.D)(f).message}`, { level: "error" }), { server: e, rawName: i, name: a, tool: r, definition: void 0, wireArguments: s };
  }
}
function _e(e, r) {
  return (0, import_chunk_px0hhsq7.lr)(e, r).slice(5);
}
function k(e) {
  return `${e}_arg`;
}
var ve = /* @__PURE__ */ new Set(["$schema", "$comment", "type", "title", "description", "properties", "required", "additionalProperties", "unevaluatedProperties", "$defs", "definitions", "default", "examples", "minProperties", "maxProperties"]), Te = /* @__PURE__ */ new Set(["$ref", "$dynamicRef", "$recursiveRef", "$anchor", "$dynamicAnchor", "$recursiveAnchor", "$id"]);
function ye(e) {
  let r = e?.properties, o = e?.required, i = /* @__PURE__ */ new Set([...typeof r === "object" && r !== null ? Object.keys(r) : [], ...Array.isArray(o) ? o.filter((l) => typeof l === "string") : []]), a = P, s = O;
  if (s.some((l) => i.has(k(l)))) return "reserved_argument";
  let m = a.filter((l) => i.has(l));
  if (m.length === 0) return (0, import_chunk_ara52wcx.DXn)();
  if (m.some((l) => !s.includes(l)) || e === void 0 || !W(e.type) || Object.keys(e).some((l) => !ve.has(l)) || Ae(e) || m.some((l) => typeof r === "object" && r !== null && Object.hasOwn(r, l) && !G(Reflect.get(r, l)))) return "reserved_argument";
  let f = new Map(m.map((l) => [k(l), l]));
  return [...f.keys()].some((l) => a.includes(l)) ? "reserved_argument" : f;
}
function Ae(e) {
  let r = (o, i) => {
    if (i > import_chunk_syr33dp2.cwo) return true;
    if (Array.isArray(o)) return o.some((a) => r(a, i + 1));
    if (typeof o !== "object" || o === null) return false;
    return Object.entries(o).some(([a, s]) => Te.has(a) || r(s, i + 1));
  };
  return r(e, 0);
}
async function we(e, r, o, i) {
  let a = await r.description({}, { isNonInteractiveSession: false, toolPermissionContext: (0, import_chunk_4vsz8a99.Vd)(), tools: [] }), s = Me(r), m = (0, import_chunk_bzyb60p0.tfe)();
  return { name: e, description: a.length <= Math.min(m, import_chunk_syr33dp2.dwo) ? a : M(a, Math.min(m, import_chunk_syr33dp2.dwo - U.length)), inputSchema: De(r, i), ...s && { annotations: s }, _meta: Ne(r, o) };
}
var U = "\u2026 [truncated]";
function M(e, r) {
  return e.length > r ? (0, import_chunk_7cfjrnwy.ee)(e, r) + U : e;
}
function De(e, r) {
  let o = e.inputJSONSchema;
  if (o === void 0 || !W(o.type)) return { type: "object", properties: {} };
  let i = typeof o.properties === "object" && o.properties !== null && !Array.isArray(o.properties) ? Pe(o.properties) : {};
  return Ee({ ...o, type: "object", properties: i }, r);
}
function Ee(e, r) {
  if (r.size === 0) return e;
  let o = new Map([...r].map(([s, m]) => [m, s])), i = (0, import_chunk_khxw3ng0.er)((0, import_chunk_9zdrdv25.iP)(e.properties, (s, m) => o.get(m) ?? m), (s, m) => {
    let f = r.get(m);
    return f === void 0 ? s : { ...s, description: Ce(f, s) };
  }), a = Array.isArray(e.required) ? e.required.map((s) => o.get(s) ?? s) : void 0;
  return { ...e, properties: i, ...a && { required: a } };
}
function Ce(e, r) {
  let o = Reflect.get(r, "description"), i = `(The tool's own "${e}" parameter, passed under this name.)`;
  return typeof o === "string" && o !== "" ? `${o} ${i}` : i;
}
function W(e) {
  return e === void 0 || e === "object" || Array.isArray(e) && e.includes("object");
}
function Pe(e) {
  return Object.fromEntries(Object.entries(e).flatMap(([r, o]) => G(o) ? [[r, o === true ? {} : o]] : []));
}
function G(e) {
  return e === true || typeof e === "object" && e !== null && !Array.isArray(e);
}
function Me(e) {
  let r = e.mcpInfo?.title, o = { ...r !== void 0 && { title: M(r, ue) }, ...e.readOnlyHint !== void 0 && { readOnlyHint: e.readOnlyHint }, ...e.isDestructive?.({}) === true && { destructiveHint: true }, ...e.isOpenWorld?.({}) === true && { openWorldHint: true } };
  return Object.keys(o).length > 0 ? o : void 0;
}
function Ne(e, r) {
  let { inventory: o, ...i } = r, a = { v: import_chunk_rts2v6y0.S4o, tool: e.name, target: i };
  return { [import_chunk_rts2v6y0.Pqe]: a, ...e.searchHint !== void 0 && { [import_chunk_syr33dp2.J7.searchHint]: M(e.searchHint, me) }, ...e.alwaysLoad === true && { [import_chunk_syr33dp2.J7.alwaysLoad]: true }, ...e.persistenceThresholdCeiling !== void 0 && { [import_chunk_syr33dp2.J7.maxResultSizeChars]: e.maxResultSizeChars }, ...e.requiresUserInteraction?.() === true && { [import_chunk_syr33dp2.J7.requiresUserInteraction]: true } };
}
var Vma = (0, import_chunk_78g0060s.S)("mcp_passthrough");
function L(e) {
  return I.has(e);
}
var N = false;
function Kma(e) {
  return !L(e) && (N || e !== "project");
}
var z = 1;
function V() {
  return [import_chunk_qmb4q514.zWo ? "each-call-asked" : "local-rules-decide", N ? "project-servers" : "no-project-servers"].join("+");
}
var xe = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ version: (0, import_chunk_adx6804h.v)(z), choice: (0, import_chunk_adx6804h.F)(["accepted", "declined"]), terms: (0, import_chunk_adx6804h.n)(), decidedAt: (0, import_chunk_adx6804h.n)(), hostname: (0, import_chunk_adx6804h.n)() })), K = "device-mcp-consent", X = "device-mcp-consent-not-now", q = 1;
function qma() {
  return `delete ${(0, import_chunk_n2dbhmj2.os)(He())} to be asked again`;
}
function rUr() {
  return `delete ${(0, import_chunk_n2dbhmj2.os)(ke())}, then start a new claude --cloud session`;
}
function R(e) {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "state", `${e}.json`);
}
function He() {
  return R(K);
}
function ke() {
  return R(X);
}
async function j9n(e) {
  let r;
  try {
    r = await e.readText();
  } catch (o) {
    return (0, import_chunk_w578pjby.t)(`device-mcp consent: store unreadable (${(0, import_chunk_jv7av99m.d)(o)})`, { level: "warn" }), "unreadable";
  }
  if (r === void 0) return "unset";
  try {
    let o = xe().safeParse((0, import_chunk_w578pjby.te)(r));
    return o.success && (0, import_chunk_ag2pf657.zJ)(o.data.hostname) === (0, import_chunk_ag2pf657.zJ)(e.hostname()) && (o.data.choice === "declined" || o.data.terms === V()) ? o.data.choice : "unset";
  } catch {
    return "unset";
  }
}
async function oUr(e) {
  let r = await j9n(e);
  return r === "unreadable" ? "unset" : r;
}
async function sUr(e, r) {
  try {
    return await r.writeText((0, import_chunk_w578pjby._)({ version: z, choice: e, terms: V(), decidedAt: r.now().toISOString(), hostname: (0, import_chunk_ag2pf657.zJ)(r.hostname()) }, null, 2) + `
`), true;
  } catch (o) {
    return (0, import_chunk_w578pjby.t)(`device-mcp consent: answer not saved (${(0, import_chunk_jv7av99m.d)(o)})`, { level: "warn" }), false;
  }
}
var Ie = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ version: (0, import_chunk_adx6804h.v)(q), servers: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), decidedAt: (0, import_chunk_adx6804h.n)(), hostname: (0, import_chunk_adx6804h.n)() }));
async function t5t(e) {
  let r;
  try {
    r = await e.readText();
  } catch (o) {
    return (0, import_chunk_w578pjby.t)(`device-mcp not-now: store unreadable (${(0, import_chunk_jv7av99m.d)(o)})`, { level: "warn" }), [];
  }
  if (r === void 0) return [];
  try {
    let o = Ie().safeParse((0, import_chunk_w578pjby.te)(r));
    return o.success && (0, import_chunk_ag2pf657.zJ)(o.data.hostname) === (0, import_chunk_ag2pf657.zJ)(e.hostname()) ? o.data.servers : [];
  } catch {
    return [];
  }
}
async function iUr(e, r) {
  try {
    return await r.writeText((0, import_chunk_w578pjby._)({ version: q, servers: e, decidedAt: r.now().toISOString(), hostname: (0, import_chunk_ag2pf657.zJ)(r.hostname()) }, null, 2) + `
`), true;
  } catch (o) {
    return (0, import_chunk_w578pjby.t)(`device-mcp not-now: not saved (${(0, import_chunk_jv7av99m.d)(o)})`, { level: "warn" }), false;
  }
}
async function aUr(e) {
  try {
    await e.removeText();
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`device-mcp not-now: not cleared (${(0, import_chunk_jv7av99m.d)(r)})`, { level: "warn" });
  }
}
function n5t(e, r) {
  if (e.length === 0) return false;
  let o = new Set(e);
  return r.every((i) => o.has(i));
}
function Y(e, r) {
  let o = (0, import_chunk_m15w38ag.ne)() && r !== void 0 ? r : void 0, i = import_chunk_hkvzj051.at.state(e), a = R(e);
  return { readText: async () => {
    if (o) {
      let s = await o.readText([i]);
      if (!s.ok) throw Error("device-mcp state read failed");
      let m = s.value.items[0];
      return m.found ? m.value : void 0;
    }
    try {
      return await (0, import_chunk_8j3h6yzg.Vn)().read(a);
    } catch (s) {
      if ((0, import_chunk_jv7av99m.J)(s)) return;
      throw s;
    }
  }, writeText: async (s) => {
    if (o) {
      if (!(await o.write(i, s, { mode: 384 })).ok) throw Error("device-mcp state write failed");
      return;
    }
    await (0, import_chunk_8j3h6yzg.Vn)().mkdir((0, import_path.dirname)(a), 448), await (0, import_chunk_8j3h6yzg.Vn)().atomicWrite(a, s, 384);
  }, removeText: async () => {
    if (o) {
      if (!(await o.delete(i)).ok) throw Error("device-mcp state delete failed");
      return;
    }
    try {
      await (0, import_chunk_8j3h6yzg.Vn)().delete(a);
    } catch (s) {
      if (!(0, import_chunk_jv7av99m.J)(s)) throw s;
    }
  }, now: () => /* @__PURE__ */ new Date(), hostname: import_os.hostname };
}
function HVe(e) {
  return Y(K, e);
}
function U1e(e) {
  return Y(X, e);
}
function Bce(e) {
  return (0, import_chunk_mh32mevx.oGe)(e);
}
