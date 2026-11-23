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
var chunk_gbskgz33_exports = {};
__export(chunk_gbskgz33_exports, {
  AV: () => AV,
  AWi: () => AWi,
  Bvr: () => Bvr,
  CWi: () => CWi,
  GG: () => GG,
  GRe: () => GRe,
  HC: () => HC,
  HU: () => HU,
  Jwo: () => Jwo,
  PWi: () => PWi,
  PYe: () => PYe,
  Qwo: () => Qwo,
  RWi: () => RWi,
  Sme: () => Sme,
  TWi: () => TWi,
  Tvt: () => Tvt,
  Um: () => Um,
  Wvr: () => Wvr,
  Xat: () => Xat,
  Xwo: () => Xwo,
  _ws: () => _ws,
  eI: () => eI,
  fp: () => fp,
  gws: () => gws,
  hLe: () => hLe,
  hcn: () => hcn,
  jvr: () => jvr,
  k2t: () => k2t,
  k4: () => k4,
  nWn: () => nWn,
  okl: () => okl,
  rWn: () => rWn,
  tWn: () => tWn,
  vvt: () => vvt,
  w2t: () => w2t,
  xWi: () => xWi,
  yws: () => yws
});
module.exports = __toCommonJS(chunk_gbskgz33_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_cee6q0wn = require("/$bunfs/root/chunk-cee6q0wn.js");
var import_chunk_57sd0ak5 = require("/$bunfs/root/chunk-57sd0ak5.js");
var import_chunk_6zh1j84y = require("/$bunfs/root/chunk-6zh1j84y.js");
var import_chunk_vcnr02by = require("/$bunfs/root/chunk-vcnr02by.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_gftn60qp = require("/$bunfs/root/chunk-gftn60qp.js");
var import_chunk_wx2mpa0f = require("/$bunfs/root/chunk-wx2mpa0f.js");
var import_chunk_rr6cvcc3 = require("/$bunfs/root/chunk-rr6cvcc3.js");
var import_chunk_9p9dsn6j = require("/$bunfs/root/chunk-9p9dsn6j.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_13h3tw8q = require("/$bunfs/root/chunk-13h3tw8q.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var HU = "LSP", TWi = `Interact with Language Server Protocol (LSP) servers to get code intelligence features.

Supported operations:
- goToDefinition: Find where a symbol is defined
- findReferences: Find all references to a symbol
- hover: Get hover information (documentation, type info) for a symbol
- documentSymbol: Get all symbols (functions, classes, variables) in a document
- workspaceSymbol: Search for symbols matching a query across the entire workspace
- goToImplementation: Find implementations of an interface or abstract method
- prepareCallHierarchy: Get call hierarchy item at a position (functions/methods)
- incomingCalls: Find all functions/methods that call the function at a position
- outgoingCalls: Find all functions/methods called by the function at a position

All operations require:
- filePath: The file to operate on
- line: The line number (1-based, as shown in editors)
- character: The character offset (1-based, as shown in editors)

The workspaceSymbol operation also takes:
- query: The symbol name or partial name to search for. Always provide it \u2014 most language servers return no results for an empty query.

Note: LSP servers must be configured for the file type. If no server is available, an error will be returned.`;
var h = /* @__PURE__ */ new Set([import_chunk_k883m4fq.De, import_chunk_rb36kwbn.lt, import_chunk_rb36kwbn.Dt, import_chunk_rb36kwbn.Ks, import_chunk_865at33z.Qr, import_chunk_865at33z.Sr, HU, import_chunk_cee6q0wn.Yd]), P = /* @__PURE__ */ new Set([import_chunk_rb36kwbn.lt, import_chunk_rb36kwbn.Dt, import_chunk_rb36kwbn.Ks]);
function okl(e) {
  return P.has(e);
}
function k2t(e, r) {
  return `${P.has(r) ? `lets ${r} run without asking only in the working directories` : `adds nothing to ${r}'s default, which already runs without asking in the working directories`}. "${r}" alone allows every path. Older versions of Claude Code treat "${e}" as "${r}", and this version will too if Anthropic turns this change off.`;
}
function AV(e) {
  return e.ruleContent === "*" && h.has(e.toolName) && Jwo();
}
function Jwo() {
  return (0, import_chunk_865at33z.Lt)("bot_protected_tengu_amber_plover", true);
}
function Um(e, r) {
  if (r === "allow") {
    let o = CWi(e);
    if (o !== void 0 && Jwo()) return { toolName: o, ruleContent: "*" };
  }
  return (0, import_chunk_qebpc5de.Ur)(e);
}
function CWi(e) {
  if (typeof e !== "string" || !(e.endsWith("(*)") || e.endsWith("()"))) return;
  let r = (0, import_chunk_qebpc5de.MM)(e);
  return r.kind === "call" && (r.rawContent === "*" || r.rawContent === "") && h.has(r.toolName) ? r.toolName : void 0;
}
function Sme(e) {
  return (0, import_chunk_qebpc5de.yn)((0, import_chunk_qebpc5de.Ur)(e));
}
function Xwo(e) {
  if (e.source === "plugin") return e.pluginInfo?.repository;
  return e.source === "bundled" ? (0, import_chunk_rr6cvcc3.tAl)(e.hooks) : void 0;
}
var tWn = (e) => (0, import_chunk_9p9dsn6j.gX)(e) || (0, import_chunk_9p9dsn6j.Xlt)(e, (0, import_chunk_vcnr02by.Ux)());
function w2t(e, r) {
  if (!(0, import_chunk_gftn60qp.oWn)() || !(0, import_chunk_xcgcdx61.RK)(e)) return false;
  try {
    if ((0, import_chunk_6zh1j84y.bme)()) return true;
  } catch (n) {
    return (0, import_chunk_k449cc64.i)(n), true;
  }
  if (!(0, import_chunk_gftn60qp.ok)()) return false;
  let o = true;
  try {
    o = r === void 0 || !tWn(r);
  } catch (n) {
    (0, import_chunk_k449cc64.i)(n);
  }
  if (o) (0, import_chunk_gftn60qp.gcn)();
  return o;
}
function fp(e = import_chunk_2yx6c1y2._e) {
  return e("policySettings")?.allowManagedPermissionRulesOnly === true;
}
function GG() {
  return !fp();
}
function I(e, r, o = false) {
  return Bvr(e, r, o) === void 0;
}
function Bvr(e, r, o = false) {
  if (fp()) {
    if (!(e === "plugin" ? L(r) : (0, import_chunk_57sd0ak5.FU)(e))) return "managed_rules_only";
  }
  if ((0, import_chunk_2yx6c1y2.Iee)(e)) return "untrusted_folder";
  return (0, import_chunk_wx2mpa0f.fb)() && !o && m(e, r) ? "personal_config" : void 0;
}
function m(e, r) {
  if (e === void 0 || e === "userSettings") return true;
  if (e !== "plugin") return false;
  let o = r?.marketplaceSource;
  if (o?.source === "claudeai" && o.scope !== "org" && o.scope !== "default") return true;
  let n = r?.id;
  if (n === void 0) return true;
  switch ((0, import_chunk_xcgcdx61.Iw)(n) ?? (0, import_chunk_xcgcdx61.is)(n)) {
    case import_chunk_xcgcdx61.qs:
      return r?.officiallyAttested !== true;
    case import_chunk_xcgcdx61.$p:
      return (0, import_chunk_xcgcdx61.Kt)(n) === import_chunk_xcgcdx61.dDr;
    default:
      return false;
  }
}
function L(e) {
  let r = e?.id;
  if (r === void 0) return false;
  let o = (0, import_chunk_xcgcdx61.Iw)(r) ?? (0, import_chunk_xcgcdx61.is)(r);
  switch (o) {
    case void 0:
    case import_chunk_xcgcdx61.lh:
      return false;
    case import_chunk_xcgcdx61.$p:
      return (0, import_chunk_xcgcdx61.Kt)(r) !== import_chunk_xcgcdx61.dDr && !((0, import_chunk_3t7ve0wy.Ol)() && (0, import_chunk_2yx6c1y2.ege)()?.allowManagedPermissionRulesOnly === true);
    case import_chunk_xcgcdx61.Ds:
      return true;
    case import_chunk_xcgcdx61.qs:
      return e?.officiallyAttested === true;
    default:
      break;
  }
  if (e?.marketplaceSource === void 0) return false;
  return (0, import_chunk_xcgcdx61.iu)(o) && (0, import_chunk_wj4me9k5.P2t)(e.marketplaceSource) || (0, import_chunk_wj4me9k5.yWn)(e.marketplaceSource, e.home);
}
var k = new import_chunk_2904xtvq.j(() => /* @__PURE__ */ new Set());
function AWi() {
  return k.of((0, import_chunk_f9x2f6cx.N)().host);
}
function Qwo(e, r, o, n = "managed_rules_only") {
  let d = "pluginId" in r ? r.pluginId : G(r.source), l = "pluginId" in r ? (0, import_chunk_xcgcdx61.Iw)(r.pluginId) === import_chunk_xcgcdx61.lh ? "plugin_skills_dir" : "plugin_other" : r.source, u = (0, import_chunk_13h3tw8q.js)(`/${e} (${d})`);
  if (n === "untrusted_folder") {
    (0, import_chunk_w578pjby.t)(`Ignoring allowed-tools from ${u}: ${import_chunk_865at33z.mPe}.`, { level: "warn" }), (0, import_chunk_y53wbr8a.a)("tengu_frontmatter_grant_withheld", { origin: (0, import_chunk_78g0060s.f)(l), tool_count: o.length, reason: (0, import_chunk_78g0060s.f)(n) });
    return;
  }
  let c = n === "personal_config";
  if ((0, import_chunk_w578pjby.t)(c ? `Ignoring allowed-tools ${(0, import_chunk_13h3tw8q.js)(o.join(", "))} from ${u}: this session does not let your own skills and commands pre-approve tools (CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG).` : `Ignoring allowed-tools ${(0, import_chunk_13h3tw8q.js)(o.join(", "))} from ${u}: permission rules are restricted to managed settings (allowManagedPermissionRulesOnly).`, { level: "warn" }), !c) k.of((0, import_chunk_f9x2f6cx.N)().host).add(u);
  if ((0, import_chunk_y53wbr8a.a)("tengu_frontmatter_grant_withheld", { origin: (0, import_chunk_78g0060s.f)(l), tool_count: o.length, ...c && { reason: (0, import_chunk_78g0060s.f)(n) } }), (0, import_chunk_f9x2f6cx.dC)() === "text" && !(0, import_chunk_865at33z.Qt)()) console.error(c ? `allowed-tools from ${u} ignored: this session doesn't let your own skills and commands pre-approve tools (CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG), so their tool calls are checked like any other call, and their inline shell commands run only if this session's permission rules already allow them.` : `allowed-tools from ${u} ignored: your organization restricts permission rules to managed settings (allowManagedPermissionRulesOnly). Ask an admin to add the rules it needs to managed settings.`);
}
function G(e) {
  switch (e) {
    case "userSettings":
    case "projectSettings":
    case "localSettings":
    case "flagSettings":
    case "policySettings":
      return (0, import_chunk_xzvhvaa2.PM)(e);
    case "builtin":
    case "bundled":
    case "mcp":
    case "memoryStore":
    case "plugin":
      return e;
  }
}
async function vvt(e) {
  let r = await e.getAllowedTools?.() ?? e.allowedTools ?? [], o = w2t(e.hooks, Xwo(e));
  if (r.length === 0 || o || (0, import_chunk_gftn60qp.skl)()) return [];
  return gws(e) ? r : [];
}
function gws(e) {
  return I(e.source, R(e), e.fromHostCatalog === true);
}
function R(e) {
  return e.source === "plugin" ? { id: e.pluginInfo?.repository, officiallyAttested: e.pluginInfo?.officiallyAttested, marketplaceSource: e.pluginInfo?.marketplaceSource, home: e.pluginInfo?.home } : void 0;
}
function GRe(e) {
  return (0, import_chunk_wx2mpa0f.fb)() && m("plugin", _ws(e));
}
function _ws(e) {
  return { id: e.source, officiallyAttested: e.officialAttestation !== void 0, marketplaceSource: e.marketplaceSource };
}
function RWi(e) {
  return hLe(e) || w2t(e.hooks, e.plugin);
}
function hLe(e) {
  if (!(0, import_chunk_wx2mpa0f.fb)() || e.registeredAtRunTime === true) return false;
  return m(e.source, e.source === "plugin" ? e.pluginProvenance ?? { id: e.plugin } : void 0);
}
function xWi(e) {
  return (0, import_chunk_wx2mpa0f.fb)() && e.fromHostCatalog !== true && m(e.source, R(e));
}
var x = ["allow", "deny", "ask"];
function k4(e, r) {
  if (!e || !e.permissions) return [];
  let { permissions: o } = e, n = [];
  for (let d of x) {
    let l = o[d];
    if (l) for (let u of l) n.push({ source: r, ruleBehavior: d, ruleValue: Um(u, d) });
  }
  return n;
}
function HC() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_EVAL_CONFINED === true;
}
function eI(e = {}, r = import_chunk_2yx6c1y2._e) {
  let o = C(e, r);
  if (HC()) return o.filter((n) => n.ruleBehavior !== "allow");
  return o;
}
function C(e = {}, r = import_chunk_2yx6c1y2._e) {
  if (fp(r)) return PYe("policySettings", r);
  let o = [];
  for (let n of (0, import_chunk_xzvhvaa2.Ko)()) o.push(...PYe(n, r));
  if (!(e.strictPersistedTrust ?? (0, import_chunk_865at33z.wy)())) {
    let { gateProject: n, gateLocal: d } = Xat(), l = /* @__PURE__ */ new Set(), u = o.filter((c) => {
      if (c.ruleBehavior !== "allow") return true;
      if (c.source === "projectSettings" && n) return l.add(".claude/settings.json"), false;
      if (c.source === "localSettings" && d) return l.add(".claude/settings.local.json"), false;
      return true;
    });
    if (u.length !== o.length) v("permissions.allow", o.length - u.length, [...l], r);
    return u;
  }
  return o;
}
function nWn(e) {
  let r = (0, import_chunk_f9x2f6cx.ns)();
  if (r === null) return ["projectSettings", "localSettings"];
  let o = F.of((0, import_chunk_f9x2f6cx.N)().host), n = (0, import_chunk_865at33z.F1)({ onIndeterminate: "tracked" });
  if (n && (0, import_chunk_865at33z.Yi)()) {
    if (o.markTracked(r), !o.persistIssued(r) && (0, import_chunk_865at33z.T6t)()) o.markPersistIssued(r), M(e);
  }
  return n || o.isTracked(r) || D() ? ["projectSettings", "localSettings"] : ["projectSettings"];
}
class E {
  tracked = /* @__PURE__ */ new Set();
  persisted = /* @__PURE__ */ new Set();
  isTracked(e) {
    return this.tracked.has(e);
  }
  markTracked(e) {
    this.tracked.add(e);
  }
  persistIssued(e) {
    return this.persisted.has(e);
  }
  markPersistIssued(e) {
    this.persisted.add(e);
  }
}
var F = new import_chunk_2904xtvq.j(() => new E());
function D() {
  return (0, import_chunk_865at33z.ge)().projects?.[(0, import_chunk_865at33z.iD)()]?.localSettingsSeenGitTracked === true;
}
function M(e) {
  let r = (0, import_chunk_865at33z.iD)();
  (0, import_chunk_865at33z.Ke)((o) => {
    if (o.projects?.[r]?.localSettingsSeenGitTracked === true) return o;
    return { ...o, projects: { ...o.projects, [r]: { ...o.projects?.[r] ?? import_chunk_865at33z.LNe, localSettingsSeenGitTracked: true } } };
  }, e);
}
function Wvr(e, r) {
  let o = nWn(r), n = (u) => new Set(u.flatMap((c) => ((0, import_chunk_2yx6c1y2._e)(c)?.permissions?.additionalDirectories ?? []).flatMap(e))), d = n(o), l = /* @__PURE__ */ new Set([...n((0, import_chunk_xzvhvaa2.Ko)().filter((u) => !o.includes(u))), ...(0, import_chunk_f9x2f6cx.tu)().flatMap(e)]);
  for (let u of l) d.delete(u);
  return { declared: /* @__PURE__ */ new Set([...d, ...l]), repoOnly: d };
}
function Tvt(e = {}) {
  if (HC()) return [];
  let r = e.strictPersistedTrust ?? (0, import_chunk_865at33z.wy)(), { gateProject: o, gateLocal: n } = r ? { gateProject: false, gateLocal: false } : Xat(), d = [], l = 0, u = /* @__PURE__ */ new Set();
  for (let c of (0, import_chunk_xzvhvaa2.Ko)()) {
    let g = (0, import_chunk_2yx6c1y2._e)(c)?.permissions?.additionalDirectories ?? [];
    if (o && c === "projectSettings" && g.length > 0) {
      l += g.length, u.add(".claude/settings.json");
      continue;
    }
    if (n && c === "localSettings" && g.length > 0) {
      l += g.length, u.add(".claude/settings.local.json");
      continue;
    }
    d.push(...g);
  }
  if (l > 0) v("permissions.additionalDirectories", l, [...u]);
  return d;
}
function Xat() {
  return { gateProject: !(0, import_chunk_2yx6c1y2.vm)(), gateLocal: (0, import_chunk_865at33z.F1)({ onIndeterminate: "untracked" }) };
}
function y(e, r) {
  if (!(0, import_chunk_xzvhvaa2.Ko)().includes(e)) return false;
  return PYe(e, r).some((o) => o.ruleBehavior === "allow") || (r(e)?.permissions?.additionalDirectories?.length ?? 0) > 0;
}
function yws() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_SANDBOXED) return true;
  if ((0, import_chunk_f9x2f6cx.JA)()) return true;
  if ((0, import_chunk_f9x2f6cx.MQe)()) return true;
  if ((0, import_chunk_865at33z.Qt)()) return true;
  if ((0, import_chunk_f9x2f6cx.XM)()) return true;
  return (0, import_chunk_865at33z.wy)();
}
function B(e = import_chunk_2yx6c1y2._e) {
  if (yws()) return false;
  return rWn(e);
}
function rWn(e = import_chunk_2yx6c1y2._e) {
  let { gateProject: r, gateLocal: o } = Xat();
  return r && y("projectSettings", e) || o && y("localSettings", e);
}
class w {
  warned = /* @__PURE__ */ new Set();
  firstTimeFor(e) {
    if (this.warned.has(e)) return false;
    return this.warned.add(e), true;
  }
  reset() {
    this.warned.clear();
  }
}
var O = new import_chunk_2904xtvq.j(() => new w());
function hcn(e) {
  return O.of((0, import_chunk_f9x2f6cx.N)().host).firstTimeFor(e);
}
function v(e, r, o, n = import_chunk_2yx6c1y2._e) {
  if (!O.of((0, import_chunk_f9x2f6cx.N)().host).firstTimeFor(e)) return;
  if ((0, import_chunk_w578pjby.t)(`Dropped ${r} project-scoped ${e} entr${r === 1 ? "y" : "ies"} \u2014 workspace not yet trusted`), !(0, import_chunk_f9x2f6cx.Se)() && (!(0, import_chunk_865at33z.Yi)() || B(n))) return;
  let d = o.length > 0 ? o.join(" and ") : ".claude/ settings", l = `Ignoring ${r} ${e} ${r === 1 ? "entry" : "entries"} from ${d}: `;
  if ((0, import_chunk_f9x2f6cx.ns)() === null) {
    console.error(`${l}a session with no working directory is never trusted.`);
    return;
  }
  if ((0, import_chunk_865at33z.mz)()) {
    console.error(`${l}${import_chunk_865at33z.mPe}. Put ${r === 1 ? "it" : "them"} in user or managed settings instead.`);
    return;
  }
  let u = (0, import_chunk_f9x2f6cx.cpt)() ? (0, import_chunk_865at33z.b3i)().map(T) : [];
  if (u.length > 0) {
    console.error(l + `this session has moved and still reads its project settings from the folder that it was launched in, so both folders must be trusted. Run Claude Code interactively in ${u.join(" and ")} once and accept the trust dialog, or set ${u.map((g) => `projects[${g}].hasTrustDialogAccepted`).join(" and ")} to true in ${(0, import_chunk_c203g5kd.DB)()}.`);
    return;
  }
  let c = (0, import_chunk_865at33z.iD)();
  console.error(l + `this workspace has not been trusted. Run Claude Code interactively here once and accept the trust dialog, or set projects[${T(c)}].hasTrustDialogAccepted: true in ${(0, import_chunk_c203g5kd.DB)()}.`);
}
function T(e) {
  return (0, import_chunk_kx2fp6pc.K8)((0, import_chunk_w578pjby._)(e));
}
function PYe(e, r = import_chunk_2yx6c1y2._e) {
  return k4(r(e), e);
}
var H = import_chunk_xzvhvaa2.tp;
async function jvr(e, r) {
  if (!H.includes(e.source)) return false;
  let o = (0, import_chunk_qebpc5de.yn)(e.ruleValue), n = e.ruleBehavior === "allow" ? Sme(o) : o;
  try {
    let d = false;
    if (e.source === "localSettings") {
      let c = (0, import_chunk_2yx6c1y2.A_)();
      if (c) d = !!(0, import_chunk_2yx6c1y2.Sk)(c).settings?.permissions?.[e.ruleBehavior]?.some((p) => Sme(p) === n);
    }
    let l = false, { error: u } = await (0, import_chunk_2yx6c1y2.fl)(e.source, (c) => {
      let g = c?.permissions?.[e.ruleBehavior];
      if (!g || !g.some((p) => Sme(p) === n)) return null;
      return l = true, { permissions: { [e.ruleBehavior]: g.filter((p) => Sme(p) !== n) } };
    }, void 0, r);
    if (u) return false;
    if (!l && d) {
      let c = (0, import_chunk_2yx6c1y2.A_)();
      if (c) return !(0, import_chunk_2yx6c1y2.Sk)(c).settings?.permissions?.[e.ruleBehavior]?.some((p) => Sme(p) === n);
    }
    return l || d;
  } catch (d) {
    return (0, import_chunk_k449cc64.i)(d), false;
  }
}
async function PWi({ ruleValues: e, ruleBehavior: r }, o, n) {
  if (fp()) return false;
  if (e.length < 1) return true;
  let d = e.map(import_chunk_qebpc5de.yn);
  try {
    let l = await (0, import_chunk_2yx6c1y2.fl)(o, (u) => {
      let c = u?.permissions?.[r] || [], g = new Set(c.map((S) => (0, import_chunk_qebpc5de.yn)(Um(S, r)))), p = d.filter((S) => !g.has(S));
      if (p.length === 0) return null;
      return { permissions: { [r]: [...c, ...p] } };
    }, { legacyRevocation: "skip" }, n);
    if (l.error) throw l.error;
    return true;
  } catch (l) {
    return (0, import_chunk_w578pjby.t)(`Failed to add permission rules to ${o} settings: ${l instanceof Error ? l.message : String(l)}`, { level: "error" }), false;
  }
}
