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
var chunk_54j6k3fn_exports = {};
__export(chunk_54j6k3fn_exports, {
  AOi: () => AOi,
  COi: () => COi,
  Ddl: () => Ddl,
  Dps: () => Dps,
  Fdl: () => Fdl,
  HOi: () => HOi,
  Hdl: () => Hdl,
  Hps: () => Hps,
  IOi: () => IOi,
  Idl: () => Idl,
  Ips: () => Ips,
  Ldl: () => Ldl,
  MOi: () => MOi,
  Mdl: () => Mdl,
  Mps: () => Mps,
  Ndl: () => Ndl,
  OAe: () => OAe,
  OOi: () => OOi,
  Odl: () => Odl,
  POi: () => POi,
  Pdl: () => Pdl,
  ROi: () => ROi,
  Rdl: () => Rdl,
  Syr: () => Syr,
  Vae: () => Vae,
  Y9e: () => Y9e,
  aj: () => aj,
  bpe: () => bpe,
  byr: () => byr,
  cFn: () => cFn,
  fje: () => fje,
  gbe: () => gbe,
  ij: () => ij,
  imo: () => imo,
  jO: () => jO,
  nM: () => nM,
  nin: () => nin,
  nit: () => nit,
  o0e: () => o0e,
  oin: () => oin,
  omo: () => omo,
  pje: () => pje,
  qUt: () => qUt,
  rin: () => rin,
  smo: () => smo,
  tin: () => tin,
  uFn: () => uFn,
  wpe: () => wpe,
  xOi: () => xOi,
  xdl: () => xdl
});
module.exports = __toCommonJS(chunk_54j6k3fn_exports);
var import_chunk_vcnr02by = require("/$bunfs/root/chunk-vcnr02by.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_an3w1y1q = require("/$bunfs/root/chunk-an3w1y1q.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_tvq790h1 = require("/$bunfs/root/chunk-tvq790h1.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_path = require("path");
var R = /* @__PURE__ */ new Set(["plugin command source printed a network path", "plugin command source path resolves to a network path", "plugin command source printed a path through a suspect link", "plugin command source entry traverses a suspect link", "plugin command source link escapes producer directory", "plugin command source relink entry not canonical", "plugin command source relink entry unreadable", "plugin command source relink target resolves to a network path", "plugin command source relink target traverses a suspect link", "plugin command source link marker not a small regular file", "plugin command source printed cwd or an ancestor", "plugin command source printed a relative path", "plugin command source printed nothing", "plugin command source printed multiple lines", "plugin command source exceeded the stdout cap", "plugin command source directory has no plugin content", "plugin command source directory has too many files", "plugin command source directory too large", "plugin command source link mode unsupported on windows", "plugin command source disabled by managed policy", "plugin command source held for the organization answer", "plugin command source not started by a tool server daemon", "plugin command source command changed since consent", "plugin command source never consented for an installed plugin", "plugin command source changed between display and run", "plugin command source without consent", "plugin command source declined at the prompt"]), Syr = "plugin update refused during cli update: ";
class D {
  nameRegistration;
  catalogEntryNames;
  reviewerMarkedEntryNames;
  isAccessAllowed;
  lastFailedWalk;
  staleCatalogFetchedAt;
  catalogLoadInFlight;
  bindingsWriteTail = Promise.resolve();
  marketplaceChoice;
  blockedLogged = /* @__PURE__ */ new Set();
}
var ae = new import_chunk_2904xtvq.j(() => new D());
function jO() {
  return ae.of((0, import_chunk_f9x2f6cx.N)().host);
}
function Rdl(e) {
  jO().nameRegistration = e === void 0 ? "none" : e === "pluginDirectory" ? "built-in" : "other";
}
function omo(e) {
  if (e !== import_chunk_xcgcdx61.qn) return false;
  let { nameRegistration: n } = jO();
  return n === "built-in" || n === "none";
}
function P() {
  let e = jO();
  return e.nameRegistration === "built-in" && e.isAccessAllowed?.() === true;
}
function qUt(e) {
  return jO().reviewerMarkedEntryNames?.has(e) === true;
}
function w(e) {
  return P() && jO().catalogEntryNames?.has(e) === true;
}
function L(e, n) {
  return n ? `${e}@${n.toLowerCase()}` : e;
}
class O {
  #e = /* @__PURE__ */ new Map();
  #n = 0;
  generation() {
    return this.#n;
  }
  register(e, n, t, r) {
    if (r !== void 0 && r !== this.#n) return;
    this.#e.set(L(e, n), t);
  }
  get(e, n) {
    if (n === void 0) return;
    return this.#e.get(L(e, n));
  }
  clear() {
    this.#e.clear(), this.#n++;
  }
}
var le = new import_chunk_2904xtvq.j(() => new O());
function m() {
  return le.of((0, import_chunk_f9x2f6cx.N)().host);
}
function xdl() {
  return m().generation();
}
function Pdl(e, n, t, r) {
  m().register(e, n, t, r);
}
function k(e, n) {
  return m().get(e, n);
}
function Odl() {
  m().clear();
}
class B {
  pendingUsage = /* @__PURE__ */ new Map();
  flushTimer = null;
  exitFlushesInFlight = [];
  flushStorageV5 = void 0;
}
var G = new import_chunk_2904xtvq.j(() => new B());
class H {
  flushers = null;
  exitFlushRegistered = false;
}
var p = new H();
var ue = 6e4;
function V(e) {
  p.flushers = e;
  let n = c();
  if (n.pendingUsage.size > 0) z(n, e);
}
function c() {
  return G.of((0, import_chunk_f9x2f6cx.N)().host);
}
function ij(e) {
  let n = Date.now(), t = c(), r = t.pendingUsage.get(e);
  if (r) r.count++, r.lastUsedAt = n;
  else t.pendingUsage.set(e, { count: 1, lastUsedAt: n });
  if (p.flushers) z(t, p.flushers);
}
function z(e, n) {
  if (!p.exitFlushRegistered) p.exitFlushRegistered = true, process.on("exit", n.flushAtExit);
  if (!e.flushTimer) e.flushTimer = setTimeout(n.flush, ue), e.flushTimer.unref?.();
}
function Y(e) {
  c().exitFlushesInFlight.push(e);
}
function W(e) {
  let n = c().exitFlushesInFlight, t = n.indexOf(e);
  if (t !== -1) n.splice(t, 1);
}
function K() {
  let e = c(), n = e.exitFlushesInFlight.flat();
  return e.exitFlushesInFlight = [], n.length > 0 ? n : null;
}
function q(e) {
  c().flushStorageV5 = e;
}
function J() {
  return c().flushStorageV5;
}
function _() {
  let e = c();
  if (e.flushTimer) clearTimeout(e.flushTimer), e.flushTimer = null;
  if (e.pendingUsage.size === 0) return null;
  let n = [...e.pendingUsage.entries()];
  return e.pendingUsage.clear(), n;
}
function COi(e) {
  return c().pendingUsage.has(e);
}
function X(e) {
  let { pendingUsage: n } = c();
  for (let t of n.keys()) if (e.has(t.toLowerCase())) n.delete(t);
}
function de() {
  let e = _();
  if (!e) return;
  (0, import_chunk_865at33z.Ke)(E(e), J());
}
async function Z(e) {
  let n = _();
  if (!n) return;
  Y(n), await (0, import_chunk_865at33z.Ke)(E(n), e), W(n);
}
function Idl(e) {
  if ((0, import_chunk_m15w38ag.ne)() && e !== void 0) q(e), (0, import_chunk_w578pjby.Ct)(() => Z(e)), (0, import_chunk_w578pjby.oA)(() => Z(e));
}
function ce() {
  let e = [...K() ?? [], ..._() ?? []];
  if (e.length === 0) return;
  (0, import_chunk_865at33z.zPr)(E(e));
}
V({ flush: de, flushAtExit: ce });
function E(e) {
  return (n) => {
    let t = { ...n.pluginUsage };
    for (let [r, s] of e) {
      let l = t[r];
      t[r] = { usageCount: (l?.usageCount ?? 0) + s.count, lastUsedAt: s.lastUsedAt, lastUsedNumStartups: n.numStartups };
    }
    return { ...n, pluginUsage: t };
  };
}
function Ips(e, n) {
  let t = Date.now();
  (0, import_chunk_865at33z.Ke)((r) => {
    let s = e.filter((u) => !r.pluginUsage?.[u]);
    if (s.length === 0) return r;
    let l = { ...r.pluginUsage };
    for (let u of s) l[u] = { usageCount: 0, lastUsedAt: t, lastUsedNumStartups: r.numStartups };
    return { ...r, pluginUsage: l };
  }, n);
}
function tin(e, n) {
  let t = new Set(e.map((r) => r.toLowerCase()));
  X(t), (0, import_chunk_865at33z.Ke)((r) => {
    let l = Object.keys(r.pluginUsage ?? {}).filter((d) => t.has(d.toLowerCase()));
    if (l.length === 0) return r;
    let u = { ...r.pluginUsage };
    for (let d of l) delete u[d];
    return { ...r, pluginUsage: u };
  }, n);
}
function smo(e) {
  let n = (0, import_chunk_865at33z.ge)().pluginUsage;
  return [e, ...(0, import_chunk_xcgcdx61.EB)(e)].map((t) => n?.[t]).find((t) => t !== void 0);
}
function Mdl(e, n) {
  let t = Date.now();
  (0, import_chunk_865at33z.Ke)((r) => {
    let s = e.filter((u) => r.pluginUsage?.[u]);
    if (s.length === 0) return r;
    let l = { ...r.pluginUsage };
    for (let u of s) {
      let d = l[u];
      if (!d) continue;
      l[u] = { ...d, lastUsedAt: t, lastUsedNumStartups: r.numStartups };
    }
    return { ...r, pluginUsage: l };
  }, n);
}
function Q(e, n) {
  let t = (0, import_chunk_865at33z.ge)().pluginUsageLspGraceAppliedIds;
  if (e.every((s) => t?.includes(s))) return;
  let r = Date.now();
  (0, import_chunk_865at33z.Ke)((s) => {
    let l = new Set(s.pluginUsageLspGraceAppliedIds), u = e.filter((g) => !l.has(g));
    if (u.length === 0) return s;
    let d = { ...s.pluginUsage };
    for (let g of u) {
      let o = d[g];
      if (!o || o.usageCount > 0) continue;
      d[g] = { ...o, lastUsedAt: r, lastUsedNumStartups: s.numStartups };
    }
    return { ...s, pluginUsage: d, pluginUsageLspGraceAppliedIds: [...l, ...u] };
  }, n);
}
function imo(e, n, t) {
  return { sessionsSinceLastUse: Math.max(0, n - e.lastUsedNumStartups), daysSinceLastUse: Math.max(0, Math.floor((t - e.lastUsedAt) / 864e5)) };
}
function Mps(e, n, t) {
  return { "plugin.name": t ? e : import_chunk_865at33z.bM, ...n && { "marketplace.name": t ? n : import_chunk_865at33z.bM } };
}
function nM(e, n) {
  let t = k(e, n) ?? n, r = t ? `${e}@${t.toLowerCase()}` : e;
  return (0, import_chunk_78g0060s.Fr)((0, import_chunk_865at33z.Tdt)(r));
}
function o0e(e) {
  let { name: n, marketplace: t } = (0, import_chunk_xcgcdx61.uf)(e);
  return (0, import_chunk_xcgcdx61.t_n)(t) || ie(n, t) ? (0, import_chunk_78g0060s.Fr)(e) : (0, import_chunk_78g0060s.S)("third-party");
}
function te(e) {
  return e === import_chunk_xcgcdx61.qn && (0, import_chunk_865at33z.b)("tengu_wise_kite", false);
}
function ie(e, n) {
  return te(n) && w(e);
}
function Hdl(e, n) {
  return e.length > 0 ? (0, import_chunk_78g0060s.lE)(e.map((t) => n(t) ? o0e(t) : (0, import_chunk_78g0060s.S)("third-party")).sort()) : void 0;
}
function nit(e) {
  if (te(e) && P()) return (0, import_chunk_78g0060s.S)(import_chunk_xcgcdx61.qn);
  return (0, import_chunk_xcgcdx61.t_n)(e) ? (0, import_chunk_78g0060s.Fr)(e.toLowerCase()) : (0, import_chunk_78g0060s.S)("third-party");
}
function AOi(e) {
  let n = /* @__PURE__ */ new Map();
  for (let { pluginId: t } of e) {
    if (!t) continue;
    let { name: r, marketplace: s } = (0, import_chunk_xcgcdx61.uf)(t), l = nM(r, s);
    n.set(l, (n.get(l) ?? 0) + 1);
  }
  return n.size > 0 ? (0, import_chunk_865at33z.HCt)(n) : void 0;
}
function OAe(e, n, t) {
  if (n === import_chunk_xcgcdx61.Ds) return "default-bundle";
  if ((0, import_chunk_xcgcdx61.iu)(n)) return "official";
  if (n !== void 0 && import_chunk_xcgcdx61.XMo.has(n.toLowerCase())) return "community";
  if (t?.has(e)) return "org";
  return "user-local";
}
function Y9e(e) {
  return e === "official" || e === "default-bundle";
}
function pe(e) {
  return Y9e(e) || e === "community";
}
function ROi(e) {
  return Y9e(e) || (0, import_chunk_865at33z.vh)();
}
function cFn(e, n, t, r) {
  let s = n?.type === "prompt" ? n.source : void 0, l = n?.type === "prompt" ? n.pluginInfo : void 0, u = l ? (0, import_chunk_xcgcdx61.uf)(l.repository).marketplace : void 0, g = s === "builtin" || s === "bundled" || s === "plugin" && (0, import_chunk_xcgcdx61.iu)(u) || (0, import_chunk_865at33z.vh)();
  (0, import_chunk_xfr8663h.ql)("skill_activated", { "skill.name": g ? e : "custom_skill", invocation_trigger: t, ...s && { "skill.source": s }, ...n?.kind && { "skill.kind": n.kind }, ...g && l && { "plugin.name": l.pluginManifest.name }, ...g && u && { "marketplace.name": u } }, r);
}
function fje(e, n, t, r) {
  return { ...e && { skill_source: (0, import_chunk_78g0060s.f)(e) }, ...n && { skill_loaded_from: (0, import_chunk_78g0060s.f)(n) }, ...t && { skill_kind: (0, import_chunk_78g0060s.f)(t) }, ...r && { skill_created_by: (0, import_chunk_78g0060s.f)(r) } };
}
function xOi(e) {
  return { skill_name_hash: (0, import_chunk_78g0060s.Fr)((0, import_chunk_865at33z.Tdt)(e)) };
}
function POi(e, n) {
  if (!e) return {};
  return { parent_skill_name_hash: (0, import_chunk_78g0060s.Fr)((0, import_chunk_865at33z.Tdt)(e)), parent_command_name: OOi(e, n) };
}
function OOi(e, n) {
  return (0, import_chunk_78g0060s.Fr)(n ? e : "custom");
}
function bpe({ rawName: e, canonicalName: n, isMcp: t, isBuiltIn: r, isBundled: s, isOfficial: l }) {
  let u = t ? "mcp" : r || s || l ? e : "custom";
  return { sanitizedName: (0, import_chunk_78g0060s.Fr)(u), skillNameHash: u === "custom" ? xOi(n) : {} };
}
function gbe(e) {
  if (e.source !== "plugin" || !e.pluginInfo?.repository) return false;
  return (0, import_chunk_xcgcdx61.iu)((0, import_chunk_xcgcdx61.uf)(e.pluginInfo.repository).marketplace);
}
function byr(e) {
  let n = e.pluginInfo;
  if (!n || !gbe(e)) return { plugin_name: (0, import_chunk_78g0060s.S)(import_chunk_865at33z.bM), plugin_repository: (0, import_chunk_78g0060s.S)(import_chunk_865at33z.bM) };
  return { plugin_name: (0, import_chunk_78g0060s.Fr)(n.pluginManifest.name), plugin_repository: (0, import_chunk_78g0060s.Fr)(n.repository) };
}
function IOi(e, n, t) {
  if (e.isBuiltin) return "default-enable";
  if (n?.has(e.name)) return "org-policy";
  if (e.installationPreference === "required" || e.installationPreference === "auto_install") return "admin-install";
  if (t.some((r) => e.path.startsWith(r.endsWith(import_path.sep) ? r : r + import_path.sep))) return "seed-mount";
  return "user-install";
}
function nin(e, n, t = null) {
  let r = OAe(e, n, t), s = pe(r) || (0, import_chunk_xcgcdx61.KKt)(e, n) || ie(e, n), l = n === import_chunk_xcgcdx61.Ds ? (0, import_chunk_xcgcdx61.d$l)(e) : void 0;
  return { plugin_id_hash: nM(e, n), plugin_scope: omo(n) ? (0, import_chunk_78g0060s.f)("directory") : (0, import_chunk_78g0060s.f)(r), plugin_name_redacted: s ? (0, import_chunk_78g0060s.Fr)(e) : (0, import_chunk_78g0060s.S)(import_chunk_865at33z.bM), marketplace_name_redacted: s && n ? (0, import_chunk_78g0060s.Fr)(n) : (0, import_chunk_78g0060s.S)(import_chunk_865at33z.bM), is_official_plugin: Y9e(r), ...l !== void 0 && { plugin_name_previous: (0, import_chunk_78g0060s.Fr)(l), plugin_id_hash_previous: nM(l, n) } };
}
function Vae(e, n, t = null) {
  let r = k(e, n) ?? n;
  return { _PROTO_plugin_name: e, ...r && { _PROTO_marketplace_name: r }, ...nin(e, n, t) };
}
function y(e) {
  if (e === void 0 || !(0, import_chunk_mgntjepj.Oxe)(e)) return;
  return (0, import_chunk_78g0060s.Fr)(e);
}
function me(e) {
  if (e === void 0 || !(0, import_chunk_tvq790h1.$Oi)(e)) return;
  return (0, import_chunk_78g0060s.Fr)(e);
}
var _e = /^[0-9a-f]{40}$/;
function ye(e, n) {
  if (e === void 0 || !(0, import_chunk_xcgcdx61.t_n)(n)) return;
  let t = e.toLowerCase();
  return _e.test(t) ? (0, import_chunk_78g0060s.Fr)(t) : void 0;
}
function uFn(e, n) {
  let t = ye(n, (0, import_chunk_xcgcdx61.uf)(e).marketplace);
  return t !== void 0 ? { plugin_version_sha: t } : {};
}
function rin(e) {
  return e.pluginSource !== void 0 ? aj(e.pluginSource, (0, import_chunk_vcnr02by.Bg)()) : {};
}
function Hps(e, n, t) {
  (0, import_chunk_y53wbr8a.a)("tengu_plugin_folder_shadowed", { component: (0, import_chunk_78g0060s.f)(t), ...Vae(e, n) });
}
function Dps(e, n, t) {
  (0, import_chunk_y53wbr8a.a)("tengu_plugin_renamed", { outcome: (0, import_chunk_78g0060s.f)(t.kind), chain_depth: t.kind === "unresolved" ? void 0 : t.chainDepth, reason: t.kind === "unresolved" ? (0, import_chunk_78g0060s.f)(t.reason) : void 0, ...Vae(e, n) });
}
function oin(e, n, t) {
  let r = /* @__PURE__ */ new Map();
  for (let { name: s, source: l } of n) {
    let u = r.get(s);
    if (u === void 0) r.set(s, [l]);
    else u.push(l);
  }
  for (let [s, l] of r) {
    let u = (0, import_chunk_4smdap7r.M)(l);
    if (u.length < 2) continue;
    (0, import_chunk_y53wbr8a.a)("tengu_plugin_name_collision", { item_type: (0, import_chunk_78g0060s.f)(e), _PROTO_skill_name: s, item_name_hash: nM(s), source_count: u.length, sources: (0, import_chunk_78g0060s.sl)(u), ...t.resolves && { winner_source: (0, import_chunk_78g0060s.fe)(l.at(-1)) } });
  }
}
function aj(e, n = null, t) {
  let { name: r, marketplace: s } = (0, import_chunk_xcgcdx61.uf)(e), l = y(t);
  return { ...Vae(r, s, n), ...l !== void 0 && { server_plugin_id: l } };
}
function he(e, n = (0, import_chunk_vcnr02by.Bg)()) {
  let { marketplace: t } = (0, import_chunk_xcgcdx61.uf)(e.repository), r = y(e.serverPluginId);
  return { ...Vae(e.pluginManifest.name, t, n), ...r !== void 0 && { server_plugin_id: r } };
}
function pje(e, n) {
  let t = me(e.serverAttribution?.skillId), r = y(e.serverAttribution?.pluginId);
  return { ...e.pluginInfo && he(e.pluginInfo, n), ...t !== void 0 && { skill_id: t }, ...r !== void 0 && { server_plugin_id: r } };
}
function Ddl(e, n) {
  for (let t of e) try {
    let { marketplace: r } = (0, import_chunk_xcgcdx61.uf)(t.repository);
    if (Y9e(OAe(t.name, r, n))) (0, import_chunk_865at33z.iIl)(t.name, r);
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r);
  }
}
function re(e) {
  let n = (0, import_chunk_xcgcdx61.is)(e);
  return n === void 0 || (0, import_chunk_xcgcdx61.sg)(n);
}
function Se(e) {
  return e.isBuiltin === true || re(e.repository);
}
function MOi(e) {
  return e.type === "prompt" && e.loadedFrom === "plugin" && e.pluginInfo !== void 0 && !re(e.pluginInfo.repository);
}
function Ldl(e) {
  let n = /* @__PURE__ */ new Map();
  for (let t of e) {
    if (!MOi(t)) continue;
    let r = n.get(t.pluginInfo.repository);
    if (r) r.push(t.name);
    else n.set(t.pluginInfo.repository, [t.name]);
  }
  return n;
}
function Pe(e, n) {
  if (e === null) return {};
  let t = e.get(n) ?? [];
  return { skill_name_hash_count: t.length, ...t.length > 0 && { skill_name_hashes: (0, import_chunk_78g0060s.Fr)(t.map((r) => (0, import_chunk_865at33z.Tdt)(r)).sort().join(",")) } };
}
function ke(e) {
  let n = OAe(e.name, e.marketplace, e.managedNames), t = ROi(n);
  (0, import_chunk_xfr8663h.ql)("plugin_loaded", { ...Mps(e.name, e.marketplace, t), ...t && e.version && { "plugin.version": e.version }, "plugin.scope": n, enabled_via: e.enabledVia, plugin_id_hash: nM(e.name, e.marketplace), has_hooks: e.hasHooks, has_mcp: e.hasMcp, host_owned_mcp: e.hostOwnedMcp, skill_path_count: e.skillPathCount, command_path_count: e.commandPathCount, agent_path_count: e.agentPathCount, safe_mode: String((0, import_chunk_2gtmjt3y.as)()) });
}
function Ndl(e, n, t, r, s) {
  let l = (0, import_chunk_865at33z.ge)().numStartups, u = Date.now(), d = [], g = e.filter((o) => o.lspServers && Object.keys(o.lspServers).length > 0).map((o) => o.repository);
  if (g.length > 0) Q(g, s);
  for (let o of e) {
    if (o.repository === import_chunk_an3w1y1q._Le || o.repository === import_chunk_vcnr02by.RZ && import_chunk_vcnr02by.iWn.get() === "by-mark") continue;
    let { marketplace: x } = (0, import_chunk_xcgcdx61.uf)(o.repository), h = smo(o.repository);
    if (!h) d.push(o.repository);
    let { sessionsSinceLastUse: oe, daysSinceLastUse: se } = h ? imo(h, l, u) : { sessionsSinceLastUse: 0, daysSinceLastUse: 0 }, I = IOi(o, n, t), v = (o.skillsPath ? 1 : 0) + (o.skillsPaths?.length ?? 0), A = (o.commandsPath ? 1 : 0) + (o.commandsPaths?.length ?? 0), C = (o.agentsPath ? 1 : 0) + (o.agentsPaths?.length ?? 0), T = y(o.serverPluginId), F = o.hooksConfig !== void 0 || o.modulePath !== void 0;
    ke({ name: o.name, marketplace: x, version: o.manifest.version, managedNames: n, enabledVia: I, hasHooks: F, hasMcp: !o.skipMcpDiscovery && o.mcpServers !== void 0, hostOwnedMcp: o.skipMcpDiscovery === true, skillPathCount: v, commandPathCount: A, agentPathCount: C }), (0, import_chunk_y53wbr8a.a)("tengu_plugin_enabled_for_session", { ...Vae(o.name, x, n), ...T !== void 0 && { server_plugin_id: T }, enabled_via: (0, import_chunk_78g0060s.f)(I), ...o.installationPreference !== void 0 && { installation_preference: (0, import_chunk_78g0060s.f)(o.installationPreference) }, skill_path_count: v, command_path_count: A, agent_path_count: C, ...Pe(Se(o) ? null : r, o.repository), has_mcp: !o.skipMcpDiscovery && o.mcpServers !== void 0, host_owned_mcp: o.skipMcpDiscovery === true, has_lsp: o.lspServers !== void 0, has_hooks: F, has_settings: o.settings !== void 0, sessions_since_last_use: oe, days_since_last_use: se, safe_mode: (0, import_chunk_2gtmjt3y.as)(), ...o.settings && { settings_keys: (0, import_chunk_78g0060s.sl)(Object.keys(o.settings).filter(import_chunk_mgntjepj.lAl)) }, ...o.manifest.version && { version: (0, import_chunk_865at33z.Ad)(o.manifest.version) }, ...uFn(o.repository, o.gitCommitSha) });
  }
  if (d.length > 0) Ips(d, s);
}
var Ee = ["network", "not-found", "permission", "policy", "validation", "in-use", "unknown"], be = new Set(Ee);
function Ue(e) {
  return typeof e === "string" && be.has(e);
}
function wpe(e) {
  if (typeof e === "object" && e !== null && "pluginCommandErrorCategory" in e && Ue(e.pluginCommandErrorCategory)) return e.pluginCommandErrorCategory;
  let n = String(e?.message ?? e), t = (0, import_chunk_jv7av99m.QB)(e);
  if (typeof t === "string" && (R.has(t) || t.startsWith(Syr))) return "policy";
  if (/ENOTFOUND|ECONNREFUSED|EAI_AGAIN|ETIMEDOUT|ECONNRESET|network|Could not resolve|Connection refused|timed out/i.test(n)) return "network";
  if (/\b404\b|not found|does not exist|no such plugin/i.test(n)) return "not-found";
  if (/\b40[13]\b|EACCES|EPERM|permission denied|unauthorized/i.test(n)) return "permission";
  if (/blocked by your organization'?s policy|required by your organization/i.test(n)) return "policy";
  if (/(?:the command|it|nothing) was not run|nothing was run|command that installs it was not run|is ignored inside a Claude Code session|Command-sourced plugins are disabled|not supported on Windows yet/i.test(n)) return "policy";
  if (/invalid|malformed|schema|validation|parse error/i.test(n)) return "validation";
  return "unknown";
}
function HOi(e) {
  let n = e.toLowerCase();
  return import_chunk_xcgcdx61.lce.has(n) ? (0, import_chunk_78g0060s.Fr)(n) : (0, import_chunk_78g0060s.S)(import_chunk_865at33z.bM);
}
function Fdl(e, n, t) {
  for (let r of e) {
    let { name: s, marketplace: l } = (0, import_chunk_xcgcdx61.uf)(r.source), u = "plugin" in r && r.plugin ? r.plugin : s;
    (0, import_chunk_y53wbr8a.a)("tengu_plugin_load_failed", { error_category: (0, import_chunk_78g0060s.f)(r.type), cache_only: t?.cacheOnly ?? false, ..."component" in r && { component: (0, import_chunk_78g0060s.f)(r.component) }, ..."errno" in r && { errno: (0, import_chunk_jv7av99m.Cy)(r.errno) }, ...{ is_directory: omo(l), removed_from_directory: "removedFromDirectory" in r && r.removedFromDirectory === true }, ...Vae(u, l, n), ...r.type === "marketplace-load-failed" && r.untrustedReservedName === true && { plugin_name_redacted: (0, import_chunk_78g0060s.S)(import_chunk_865at33z.bM), marketplace_name_redacted: HOi(r.marketplace), plugin_scope: (0, import_chunk_78g0060s.f)("user-local"), is_official_plugin: false } });
  }
}
