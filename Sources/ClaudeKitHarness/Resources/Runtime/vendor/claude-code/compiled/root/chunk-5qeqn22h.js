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
var chunk_5qeqn22h_exports = {};
__export(chunk_5qeqn22h_exports, {
  BZn: () => BZn,
  N_e: () => N_e,
  b8s: () => b8s,
  oOa: () => oOa
});
module.exports = __toCommonJS(chunk_5qeqn22h_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_210k8f6q = require("/$bunfs/root/chunk-210k8f6q.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_e4jbq56j = require("/$bunfs/root/chunk-e4jbq56j.js");
var import_chunk_vfyns8ja = require("/$bunfs/root/chunk-vfyns8ja.js");
var import_chunk_vcnr02by = require("/$bunfs/root/chunk-vcnr02by.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_57sd0ak5 = require("/$bunfs/root/chunk-57sd0ak5.js");
var import_chunk_6zh1j84y = require("/$bunfs/root/chunk-6zh1j84y.js");
var import_chunk_0pb268nk = require("/$bunfs/root/chunk-0pb268nk.js");
var import_chunk_m3wvjg0t = require("/$bunfs/root/chunk-m3wvjg0t.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_tqcvacgp = require("/$bunfs/root/chunk-tqcvacgp.js");
var import_chunk_hhx1bdcf = require("/$bunfs/root/chunk-hhx1bdcf.js");
var import_chunk_abrbwf3y = require("/$bunfs/root/chunk-abrbwf3y.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
(0, import_chunk_adx6804h.B)();
function BZn(o, e, s) {
  return o.some((r) => r !== e && (0, import_chunk_e4jbq56j.f6)(r) < s);
}
(0, import_chunk_adx6804h.B)();
var k = /^[a-z][a-z0-9-]{0,39}$/, Y = /^(?!mcp__)[A-Za-z][A-Za-z0-9_]{0,63}$/, Q = ["agentsView", "backgroundTask", "btw", "planMode", "promptQueue", "remoteControl", "stash"], R = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.zn)("kind", [(0, import_chunk_adx6804h.Ae)({ kind: (0, import_chunk_adx6804h.v)("minStartups"), count: (0, import_chunk_adx6804h.E)().int().positive() }), (0, import_chunk_adx6804h.Ae)({ kind: (0, import_chunk_adx6804h.v)("minSessionTokens"), tokens: (0, import_chunk_adx6804h.E)().int().positive() }), (0, import_chunk_adx6804h.Ae)({ kind: (0, import_chunk_adx6804h.v)("toolUsedThisSession"), tool: (0, import_chunk_adx6804h.n)().regex(Y) }), (0, import_chunk_adx6804h.Ae)({ kind: (0, import_chunk_adx6804h.v)("devIntent"), intent: (0, import_chunk_adx6804h.F)(import_chunk_xfj2cwfv.b6n) }), (0, import_chunk_adx6804h.Ae)({ kind: (0, import_chunk_adx6804h.v)("commandOffered"), command: (0, import_chunk_adx6804h.n)().regex(k) }), (0, import_chunk_adx6804h.Ae)({ kind: (0, import_chunk_adx6804h.v)("neverUsedCommand"), command: (0, import_chunk_adx6804h.n)().regex(k) }), (0, import_chunk_adx6804h.Ae)({ kind: (0, import_chunk_adx6804h.v)("neverUsedFeature"), feature: (0, import_chunk_adx6804h.F)(Q) }), (0, import_chunk_adx6804h.Ae)({ kind: (0, import_chunk_adx6804h.v)("canAddHooks") }), (0, import_chunk_adx6804h.Ae)({ kind: (0, import_chunk_adx6804h.v)("canAddMcp") }), (0, import_chunk_adx6804h.Ae)({ kind: (0, import_chunk_adx6804h.v)("canUseMods") }), (0, import_chunk_adx6804h.Ae)({ kind: (0, import_chunk_adx6804h.v)("canEnableAutoMode") })]));
class U {
  mcpServersConfigured = void 0;
  commandsByPick = /* @__PURE__ */ new WeakMap();
  get hasReadMcpServers() {
    return this.mcpServersConfigured !== void 0;
  }
  hasMcpServersConfigured(o) {
    return this.mcpServersConfigured ??= (0, import_chunk_bzyb60p0.Ik)({}, { storageV5: o }).then(({ servers: e }) => Object.keys(e).length > 0), this.mcpServersConfigured;
  }
  forgetMcpServers() {
    this.mcpServersConfigured = void 0;
  }
}
var x = new import_chunk_2904xtvq.j(() => (0, import_chunk_t57w17k7.de)(new U(), (o) => o.forgetMcpServers()));
async function H(o, e) {
  for (let s of o) if (!await Z(s, e)) return false;
  return true;
}
async function Z(o, e) {
  switch (o.kind) {
    case "minStartups":
      return (0, import_chunk_865at33z.ge)().numStartups >= o.count;
    case "minSessionTokens":
      return (0, import_chunk_f9x2f6cx.uPt)() + (0, import_chunk_f9x2f6cx.fPt)() >= o.tokens;
    case "toolUsedThisSession":
      return (e.toolsUsed?.has(o.tool) ?? false) && ((0, import_chunk_4vsz8a99.OU)() ?? []).some((s) => s.name === o.tool);
    case "devIntent":
      return e.devIntents?.has(o.intent) ?? false;
    case "commandOffered":
      return (await M(o.command, e)).length > 0;
    case "neverUsedCommand": {
      if ((0, import_chunk_t7fzcstv.bt)()) return false;
      let s = await M(o.command, e);
      return s[0] !== void 0 && s.every((r) => r.type === "prompt") && (0, import_chunk_bzyb60p0.hen)(s[0].name) === null;
    }
    case "neverUsedFeature":
      return !(0, import_chunk_t7fzcstv.bt)() && q(o.feature);
    case "canAddHooks":
      return !(0, import_chunk_t7fzcstv.bt)() && !z() && !(0, import_chunk_0pb268nk.Lr)("hooks") && !(0, import_chunk_6zh1j84y.ub)() && !(0, import_chunk_6zh1j84y.Qh)() && !(0, import_chunk_57sd0ak5.Dl)("hooks");
    case "canAddMcp":
      return !(0, import_chunk_t7fzcstv.bt)() && !(0, import_chunk_0pb268nk.Lr)("mcpAutoDiscovered") && !(0, import_chunk_57sd0ak5.Dl)("mcp") && !(0, import_chunk_bzyb60p0.yh)() && !(0, import_chunk_bzyb60p0.D3e)() && (0, import_chunk_sjqze7qg.ibt)().size === 0 && ![...e.toolsUsed ?? []].some((s) => (0, import_chunk_px0hhsq7.mr)(s)) && !await x.of(e.session.host).hasMcpServersConfigured(e.storageV5);
    case "canUseMods": {
      let s = (0, import_chunk_2yx6c1y2.zr)(), r = s.statusLine !== void 0 || z() || Object.entries(s.enabledPlugins ?? {}).some(([d, S]) => Boolean(S) && !(0, import_chunk_vfyns8ja.Jf)(d)), f = (0, import_chunk_2yx6c1y2._e)("policySettings")?.pluginConfigs?.[import_chunk_vcnr02by.RZ]?.options?.allowManagedModsOnly;
      return r && !(0, import_chunk_t7fzcstv.bt)() && (f === void 0 || f === false) && (0, import_chunk_m3wvjg0t.i0n)();
    }
    case "canEnableAutoMode":
      return !(0, import_chunk_xfj2cwfv.gu)() && (0, import_chunk_bzyb60p0.JS)();
  }
}
function q(o) {
  let e = (0, import_chunk_865at33z.ge)();
  switch (o) {
    case "agentsView":
      return !e.hasOpenedAgentsView && !e.hasUsedAgentsFleet;
    case "backgroundTask":
      return !e.hasUsedBackgroundTask;
    case "btw":
      return e.btwUseCount <= 0;
    case "planMode":
      return !e.lastPlanModeUse;
    case "promptQueue":
      return e.promptQueueUseCount <= 0;
    case "remoteControl":
      return !(0, import_chunk_hhx1bdcf.E8s)();
    case "stash":
      return !e.hasUsedStash;
  }
}
async function M(o, e) {
  let { builtInCommandNames: s, getCommands: r } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-qmrygjz0.js"))), { commandsByPick: f } = x.of(e.session.host), d = f.get(e) ?? r((0, import_chunk_f9x2f6cx.Ed)(), e.storageV5);
  f.set(e, d);
  let S = await d, m = (0, import_chunk_t7fzcstv.bt)() ? (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-fjww1egf.js")))).filterCommandsForRemoteMode(S) : S, a = s();
  return m.filter((u) => (u.name === o || u.aliases?.includes(o)) && (u.type === "prompt" ? u.source === "builtin" || u.source === "bundled" : u.registeredBy === void 0 && a.has(u.name)));
}
function z() {
  return Object.keys((0, import_chunk_2yx6c1y2.zr)().hooks ?? {}).length > 0;
}
var J = "content_link_tips", ee = ["docs", "article", "guide", "video"], y = { docs: "Read the docs", article: "Read the article", guide: "Read the guide", video: "Watch the video" }, W = ["claude.com", "code.claude.com", "claude.dev", "academy.claude.com"], K = "clau.de", te = [...W, "www.youtube.com", K], ne = 32, se = ["/docs/", "/resources/"], re = /^\?v=[\w-]+$/, ae = /^\/[\w./-]*$/, ce = /^(#[\w-]+)?$/, me = new RegExp("\\p{Cc}", "u"), I = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).nullable()), w = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ url: (0, import_chunk_adx6804h.n)().refine((o) => {
  let e = URL.parse(o);
  return e !== null && !me.test(o) && e.protocol === "https:" && te.includes(e.hostname) && ae.test(e.pathname) && !e.pathname.includes("..") && ce.test(e.hash) && (e.hostname === "www.youtube.com" ? e.pathname === "/watch" && re.test(e.search) : e.search === "" && (e.hostname !== "claude.com" || se.some((s) => `${e.pathname}/`.startsWith(s)))) && e.username === "" && e.password === "" && e.port === "";
}), label: (0, import_chunk_adx6804h.F)(ee) })), le = (0, import_chunk_2cbgkbm2.p)(() => w().optional()), pe = ["content-link-hooks", "content-link-mcp", "content-link-mods", "content-link-long-sessions", "content-link-auto-mode", "content-link-team-workflows"], ue = 5, O = 20, L = 3, fe = 21, Se = 11, Te = 11, ke = 101, Ce = 15e4;
function N_e(o, e, s) {
  let r = G(o, s.session.host);
  if (r === void 0) return e;
  let f = e.replace(/\.$/, "");
  if (!(0, import_chunk_210k8f6q.XE)()) {
    let m = _(r.url);
    return m === void 0 ? e : `${f} \xB7 ${m}`;
  }
  let d = new URL(r.url);
  if (W.includes(d.hostname)) d.searchParams.set("utm_source", "claude_code"), d.searchParams.set("utm_medium", "tip"), d.searchParams.set("utm_campaign", J), d.searchParams.set("utm_content", o);
  let S = (0, import_chunk_tqcvacgp.YE)(d.toString(), y[r.label], { themeName: s.theme });
  return `${f} \xB7 ${S}`;
}
function _(o) {
  let e = URL.parse(o);
  if (e?.hostname !== K) return;
  let s = `${e.hostname}${e.pathname}${e.hash}`;
  return s.length <= ne ? s : void 0;
}
class V {
  reasons = /* @__PURE__ */ new Set();
  get reported() {
    return this.reasons.size > 0;
  }
  reportOnce(o) {
    if (!this.reasons.has(o)) this.reasons.add(o), (0, import_chunk_w578pjby.t)(`Rejected a served link table value: ${o}`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("tips_content_link_table", o);
  }
  forget() {
    this.reasons.clear();
  }
}
var N = new import_chunk_2904xtvq.j(() => (0, import_chunk_t57w17k7.de)(new V(), (o) => o.forget())), oOa = [h({ id: "content-link-hooks", text: "Run your own scripts on Claude Code events with hooks", conditions: [{ kind: "minStartups", count: fe }, { kind: "canAddHooks" }] }), h({ id: "content-link-mcp", text: "Connect Claude to your tools and data with MCP", conditions: [{ kind: "minStartups", count: Se }, { kind: "canAddMcp" }] }), h({ id: "content-link-mods", text: "Change how Claude Code looks and behaves with a mod", conditions: [{ kind: "canUseMods" }] }), h({ id: "content-link-long-sessions", text: "Long session? Run /context to see what fills it", advertisedCommand: "context", conditions: [{ kind: "minSessionTokens", tokens: Ce }] }), h({ id: "content-link-auto-mode", text: "Skip most permission prompts with auto mode", conditions: [{ kind: "minStartups", count: Te }, { kind: "canEnableAutoMode" }] }), h({ id: "content-link-team-workflows", text: "See how the Claude Code team works day to day", conditions: [{ kind: "minStartups", count: ke }] })];
function G(o, e) {
  if ((0, import_chunk_865at33z.wf)()) return;
  let s = I().safeParse((0, import_chunk_865at33z.b)(import_chunk_865at33z.SAs, null)), r = le().safeParse(s.data?.[o]);
  if (!s.success || !r.success) (0, import_chunk_w578pjby.t)(`Ignoring an invalid content link for tip ${o}`, { level: "warn" }), N.of(e).reportOnce(s.success ? "invalid_entry" : "invalid_table");
  return r.data;
}
function A({ id: o, text: e, advertisedCommand: s, conditions: r, cooldownSessions: f, maxLifetimeShows: d, siblingIds: S, printsShortLink: m }) {
  return { id: o, cooldownSessions: f, maxLifetimeShows: d, advertisedCommand: s, content: async (a) => N_e(o, e, a), isRelevant: async (a) => {
    if (!m && !(0, import_chunk_210k8f6q.XE)() || !await H(r, a)) return false;
    let u = G(o, a.session.host);
    return u !== void 0 && ((0, import_chunk_210k8f6q.XE)() || _(u.url) !== void 0) && !BZn(S, o, ue);
  } };
}
function h(o) {
  return A({ ...o, cooldownSessions: O, maxLifetimeShows: L, siblingIds: pe, printsShortLink: false });
}
(0, import_chunk_adx6804h.B)();
var ye = 20, Ee = 8, X = 70, be = /^(?:[("'\u2018\u201C]*(?:\/[a-z][a-z0-9-]*|-{0,2}[A-Za-z0-9]+(?:[-+'\u2019\u2013][A-Za-z0-9]+)*%?)[,?!)"'\u2019\u201D]*|[&\u2013\u2014])$/, ve = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ ...w().shape, text: (0, import_chunk_adx6804h.n)().refine((o) => o.replace(/\.$/, "").split(" ").every((e) => be.test(e))), cooldownSessions: (0, import_chunk_adx6804h.E)().int().positive(), maxLifetimeShows: (0, import_chunk_adx6804h.E)().int().positive(), advertisedCommand: (0, import_chunk_adx6804h.n)().regex(k).optional(), conditions: (0, import_chunk_adx6804h.C)(R()).min(1).max(Ee) }).refine(({ text: o, label: e, url: s }) => {
  let r = _(s);
  return (0, import_chunk_mgh1y10w.oe)(`${o} \xB7 ${y[e]}`) <= X && (r === void 0 || (0, import_chunk_mgh1y10w.oe)(`${o} \xB7 ${r}`) <= X);
}));
function b8s(o) {
  try {
    if ((0, import_chunk_2yx6c1y2.zr)().spinnerTipsEnabled === false || (0, import_chunk_865at33z.wf)()) return [];
    let e = N.of(o), s = I().safeParse((0, import_chunk_865at33z.xX)(import_chunk_865at33z.SAs) ?? null);
    if (!s.success) return e.reportOnce("invalid_table"), [];
    let r = [], f = 0;
    for (let [m, a] of Object.entries(s.data ?? {})) {
      if (!m.startsWith(import_chunk_abrbwf3y.bOa)) {
        if (typeof a === "object" && a !== null && "text" in a) e.reportOnce("invalid_id");
        continue;
      }
      if (!(0, import_chunk_abrbwf3y.hHt)(m)) {
        e.reportOnce("invalid_id");
        continue;
      }
      if (f === ye) {
        e.reportOnce("too_many_entries");
        break;
      }
      f++;
      let u = ve().safeParse(a, { reportInput: true });
      if (u.success) r.push([m, u.data]);
      else e.reportOnce(u.error.issues.every((g) => g.code === "unrecognized_keys" || g.path[0] === "conditions" && (g.code === "invalid_value" && typeof g.input === "string" || g.code === "invalid_union" && (0, import_chunk_ma3kja9f.T)(g.input) && typeof g.input.kind === "string")) ? "unreadable_entry" : "invalid_entry");
    }
    let d = Object.keys((0, import_chunk_865at33z.ge)().tipsHistory ?? {}).filter(import_chunk_abrbwf3y.hHt), S = (0, import_chunk_210k8f6q.XE)();
    return r.filter(([, m]) => S || _(m.url) !== void 0).map(([m, a]) => A({ id: m, text: a.text, advertisedCommand: a.advertisedCommand, conditions: a.advertisedCommand === void 0 ? a.conditions : [...a.conditions, { kind: "commandOffered", command: a.advertisedCommand }], cooldownSessions: Math.max(a.cooldownSessions, O), maxLifetimeShows: Math.min(a.maxLifetimeShows, L), siblingIds: d, printsShortLink: true }));
  } catch (e) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(e), "served tips read threw")), [];
  }
}
