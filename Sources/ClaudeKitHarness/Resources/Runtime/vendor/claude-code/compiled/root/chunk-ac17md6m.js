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
var chunk_ac17md6m_exports = {};
__export(chunk_ac17md6m_exports, {
  ASn: () => ASn,
  apa: () => apa,
  b$s: () => b$s,
  dpa: () => dpa,
  ipa: () => ipa,
  lFo: () => lFo,
  lpa: () => lpa,
  v1r: () => v1r
});
module.exports = __toCommonJS(chunk_ac17md6m_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_z7x7mexq = require("/$bunfs/root/chunk-z7x7mexq.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_zddv3vvj = require("/$bunfs/root/chunk-zddv3vvj.js");
var g = 864e5, m = 3, b = 7 + m;
function v1r() {
  try {
    let r = (0, import_chunk_z7x7mexq.EBr)();
    return r === null ? {} : { credential_expires_at: r.toISOString() };
  } catch (r) {
    return (0, import_chunk_k449cc64.i)(r), {};
  }
}
function ipa(r = Date.now()) {
  try {
    let e = (0, import_chunk_z7x7mexq.EBr)();
    if (e === null) return null;
    let { earliest: n, latest: a, daysToEarliest: c } = S(e, r);
    return `${e.getTime() <= r ? `Sign-in may have ended: between ${n} and ${a}` : c < 1 ? `Sign-in ends: any day now, by ${a}` : `Sign-in ends: between ${n} and ${a}`} (${e.toISOString()})`;
  } catch (e) {
    return (0, import_chunk_k449cc64.i)(e), null;
  }
}
function apa(r = Date.now()) {
  try {
    let e = (0, import_chunk_z7x7mexq.EBr)();
    if (e === null) return;
    let n = e.getTime() - r;
    if (n >= b * g) return;
    let { earliest: a, latest: c, daysToEarliest: p } = S(e, r);
    (0, import_chunk_ndrgvsn7.$E)(n <= 0 ? `Warning: this sign-in may have ended between ${a} and ${c}. If requests are refused, run claude auth login, or use claude setup-token for unattended jobs.
` : p < 1 ? `Warning: this sign-in can end at any time from now until ${c}. Renewing it does not move that date. Run claude auth login now, or use claude setup-token for unattended jobs.
` : `Warning: this sign-in ends between ${a} and ${c} (in ${p} ${(0, import_chunk_7cfjrnwy.O)(p, "day")} at the earliest). Renewing it does not move those dates. Run claude auth login before then, or use claude setup-token for unattended jobs.
`), (0, import_chunk_cqa9hrgx.u)("oauth_expiry_warning");
  } catch (e) {
    (0, import_chunk_k449cc64.i)(e);
  }
}
function S(r, e) {
  let n = r.getTime() - m * g;
  return { earliest: new Date(n).toISOString().slice(0, 10), latest: r.toISOString().slice(0, 10), daysToEarliest: Math.floor(n / g) - Math.floor(e / g) };
}
var y = (r, e) => (0, import_chunk_bzyb60p0.UTe)(e) && !(0, import_chunk_865at33z.iPe)(r, e);
function b$s() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_SPARE_DEFER_ALL_MCP === true || (0, import_chunk_bzyb60p0.YJr)();
}
function ASn(r, e) {
  return y(r, e) || M(e) || e.pluginSource?.endsWith(`@${import_chunk_xcgcdx61.lh}`) === true || e.pluginSource !== void 0 && (0, import_chunk_bzyb60p0.D4e)(e.pluginSource, e.pluginPath) || e.scope === "agent" || b$s();
}
function lFo(r, e) {
  return e.heldForClaim === true || (0, import_chunk_f9x2f6cx.JM)() && ASn(r, e);
}
function lpa(r, { parked: e, refusedNow: n }) {
  if (!e) return { boot: r, held: {}, refused: [] };
  let a = (0, import_chunk_865at33z.fI)(r, (o) => !M(o)), c = Object.entries(a).filter(([o, l]) => {
    if (!ASn(o, l)) return false;
    try {
      return n(o, l);
    } catch (f) {
      return (0, import_chunk_w578pjby.t)(`parked spare: the policy check for MCP server "${o}" threw, so it waits for the claim: ${(0, import_chunk_jv7av99m.d)(f)}`, { level: "error" }), false;
    }
  }).map(([o, l]) => ({ name: o, type: "failed", config: l, ...(0, import_chunk_bzyb60p0.iw)("managed-policy", o, l) })), p = new Set(c.map((o) => o.name));
  return { boot: (0, import_chunk_865at33z.fI)(a, (o, l) => !ASn(l, o)), held: (0, import_chunk_865at33z.fI)(a, (o, l) => !p.has(l) && ASn(l, o)), refused: c };
}
function h(r, e, n) {
  let a = e.filter((o) => C(o.name, o.config, n, "record"));
  if (n.startsNone) return { record: a, start: {} };
  let c = (0, import_chunk_865at33z.fI)(r, (o, l) => C(l, o, n, "start")), p = /* @__PURE__ */ new Set();
  for (let [o, l] of Object.entries(c)) {
    let f = null;
    try {
      f = n.refusedAtClaim?.(o, l) ?? null;
    } catch (P) {
      f = "managed-policy", (0, import_chunk_w578pjby.t)(`claim_session: the policy check for held MCP server "${o}" threw, so it is refused: ${(0, import_chunk_jv7av99m.d)(P)}`, { level: "error" });
    }
    if (f !== null) p.add(o), a.push({ name: o, type: "failed", config: l, ...(0, import_chunk_bzyb60p0.iw)(f, o, l) });
  }
  return { record: a, start: (0, import_chunk_865at33z.fI)(c, (o, l) => !p.has(l)) };
}
function C(r, e, { alreadyPresent: n, suppressed: a, loadsPlugin: c, enabledPlugins: p, marketplaceAdmitted: o }, l) {
  if (n.has(r) || a.includes(r)) return false;
  if (e.pluginSource === void 0) return c === void 0;
  if (c === void 0 || !c(e.pluginSource)) return false;
  if (l === "record") return true;
  let f = (0, import_chunk_xcgcdx61.is)(e.pluginSource);
  return (0, import_chunk_xcgcdx61.zKt)(e.pluginSource, [p])?.enabled !== false && (f === void 0 || o === void 0 || o(f)) && !(0, import_chunk_bzyb60p0.D4e)(e.pluginSource, e.pluginPath) && e.heldForClaim !== true;
}
var v = { sourceDisallowedOrUnverifiable: import_chunk_wj4me9k5.NU, skillFolderPluginsAdmitted: import_chunk_bzyb60p0.vai, sideloadFlagsDisabled: import_chunk_wj4me9k5.RN };
function k(r, e = v) {
  return (n) => {
    switch (n) {
      case import_chunk_xcgcdx61.lh:
        return e.skillFolderPluginsAdmitted();
      case import_chunk_xcgcdx61.$p:
        return !e.sideloadFlagsDisabled();
      case import_chunk_xcgcdx61.qs:
      case import_chunk_xcgcdx61.Ds:
        return true;
      default: {
        let a = Object.hasOwn(r, n) ? r[n] : void 0;
        return !e.sourceDisallowedOrUnverifiable(a?.source);
      }
    }
  };
}
function w() {
  return { ...(0, import_chunk_zddv3vvj.tZ)(), ...(0, import_chunk_2yx6c1y2.vt)().enabledPlugins ?? {} };
}
async function dpa(r, e, n) {
  let a = n.loadsPlugin === void 0 ? void 0 : await n.loadRegistry(), { record: c, start: p } = h(r, e, { alreadyPresent: /* @__PURE__ */ new Set([...n.alreadyPresent, ...n.presentNow()]), suppressed: n.lens.getSuppressedPluginServers(), loadsPlugin: n.loadsPlugin, enabledPlugins: w(), marketplaceAdmitted: a && k(a), startsNone: n.startsNone, refusedAtClaim: n.refusedAtClaim });
  return R(c, n.lens), await n.start(p), Object.keys(p);
}
function R(r, e) {
  if (r.length > 0) e.applyMcpUpdate((n) => ({ ...n, clients: [...n.clients, ...r] }));
}
function M(r) {
  return r.scope === "project" || r.scope === "local";
}
