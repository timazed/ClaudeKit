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
var chunk_m9badjcf_exports = {};
__export(chunk_m9badjcf_exports, {
  EKo: () => EKo,
  _qe: () => _qe,
  dMe: () => dMe,
  eMa: () => eMa,
  kKo: () => kKo,
  qht: () => qht,
  t4r: () => t4r,
  tMa: () => tMa,
  v7t: () => v7t,
  wKo: () => wKo
});
module.exports = __toCommonJS(chunk_m9badjcf_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_rnm2beqc = require("/$bunfs/root/chunk-rnm2beqc.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var A = "tengu_lilac_loom", y = "feature_of_the_week", _ = 864e5, b = () => (0, import_chunk_rnm2beqc.we)().refine((e) => !Number.isNaN(Date.parse(e)) && /(z|[+-]\d{2}:?\d{2})$/i.test(e), "must be ISO 8601 with timezone, e.g. 2026-06-04T16:00:00Z"), f = () => (0, import_chunk_rnm2beqc.we)().optional().transform((e) => e === "" ? void 0 : e), v = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ feature: (0, import_chunk_rnm2beqc.we)().min(1), command: (0, import_chunk_rnm2beqc.we)().optional().transform((e) => e === "" ? void 0 : e), startsAt: b(), endsAt: b(), hideCommandChip: (0, import_chunk_rnm2beqc.Ci)().optional(), creditless: (0, import_chunk_rnm2beqc.Ci)().optional(), titleLabel: f(), commandBlurb: f(), tipBlurb: f(), isTopPriorityAnnouncement: (0, import_chunk_rnm2beqc.Ci)().optional(), announcementLines: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.on)({ text: (0, import_chunk_rnm2beqc.we)(), style: (0, import_chunk_rnm2beqc.df)(["bold", "dim"]).optional() })).optional().transform((e) => {
  let n = e?.filter((i) => i.text !== "");
  return n?.length ? n : void 0;
}).catch(void 0), tips: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)()).optional().transform((e) => {
  let n = e?.filter(Boolean);
  return n?.length ? n : void 0;
}).catch(void 0), redeemBy: f() }));
class w {
  parsedCampaign = null;
  inFlightEligibilityRefresh = null;
}
var x = new import_chunk_2904xtvq.j(() => new w());
function C() {
  return x.of((0, import_chunk_f9x2f6cx.N)().host);
}
function dMe() {
  let e = (0, import_chunk_865at33z.sD)(A, null);
  if (e === null || e === void 0) return null;
  let n = C();
  if (n.parsedCampaign === null || n.parsedCampaign.raw !== e) {
    let r = v().safeParse(e);
    if (!r.success) (0, import_chunk_w578pjby.t)(`Promo campaign payload failed validation: ${r.error.message}`, { level: "warn" });
    n.parsedCampaign = r.success ? { raw: e, campaign: r.data, startsAtMs: Date.parse(r.data.startsAt), endsAtMs: Date.parse(r.data.endsAt) } : { raw: e, campaign: null, startsAtMs: 0, endsAtMs: 0 };
  }
  if (n.parsedCampaign.campaign === null) return null;
  let i = Date.now();
  if (i < n.parsedCampaign.startsAtMs) return null;
  if (i > n.parsedCampaign.endsAtMs) return null;
  return n.parsedCampaign.campaign;
}
function wKo() {
  return dMe()?.command ?? null;
}
function S(e) {
  if (!(0, import_chunk_865at33z.Rt)()) return "excluded";
  let n = (0, import_chunk_865at33z.or)();
  if (!n) return "excluded";
  if (e.creditless) return "viewer";
  if ((0, import_chunk_865at33z.BR)()) return "claimant";
  if (n === "team") {
    if (!(0, import_chunk_865at33z.Sn)()?.organizationRole) return "excluded";
    return (0, import_chunk_gq1dr8pm.sb)() ? "claimant" : "viewer";
  }
  return "excluded";
}
function c() {
  let e = dMe();
  if (!e) return null;
  let n = (0, import_chunk_865at33z.Sn)()?.organizationUuid;
  if (!n) return null;
  let i = S(e);
  if (i === "excluded") return null;
  if (i === "claimant" && I(n, e.feature)) return null;
  return { campaign: e, orgId: n, audience: i };
}
function kKo(e) {
  let n = wKo();
  return n !== null && e === n;
}
function EKo(e) {
  return kKo(e) && qht();
}
function qht() {
  let e = c();
  if (!e || e.audience !== "claimant") return false;
  if (!e.campaign.command) return false;
  let n = g(e.orgId, e.campaign.feature);
  return n !== null && n.eligible && n.available;
}
function v7t() {
  let e = c();
  if (!e || e.audience !== "viewer") return false;
  if (!e.campaign.command) return false;
  return !P(e.orgId, e.campaign.feature);
}
function _qe() {
  let e = dMe(), n = (0, import_chunk_865at33z.Sn)()?.organizationUuid;
  if (!e || !n) return null;
  let i = g(n, e.feature);
  if (!i || i.amount_minor_units === null || !i.currency) return null;
  return { amountMinorUnits: i.amount_minor_units, currency: i.currency };
}
function t4r(e) {
  let n = C();
  return n.inFlightEligibilityRefresh ??= E(e).catch((i) => ((0, import_chunk_w578pjby.t)(`FotW eligibility refresh failed: ${i}`, { level: "warn" }), null)).finally(() => {
    n.inFlightEligibilityRefresh = null;
  }), n.inFlightEligibilityRefresh;
}
async function E(e) {
  let n = c();
  if (!n || n.audience !== "claimant") return null;
  let { campaign: i, orgId: r } = n;
  if (g(r, i.feature) !== null) return null;
  let a;
  try {
    a = await import_chunk_865at33z.zt.get(`/api/oauth/organizations/:orgUUID/overage_credit_grant?campaign=${y}`, { auth: "teleport-org", timeout: 1e4, validateStatus: (o) => o < 500, credentials: e });
  } catch (o) {
    return (0, import_chunk_cqa9hrgx.l)("api_fotw_eligibility_fetch", "request_failed"), (0, import_chunk_w578pjby.t)(`FotW eligibility fetch failed: ${o}`, { level: "warn" }), null;
  }
  if (!a.ok || a.status >= 400) return (0, import_chunk_cqa9hrgx.l)("api_fotw_eligibility_fetch", "unavailable"), null;
  if ((0, import_chunk_cqa9hrgx.u)("api_fotw_eligibility_fetch"), a.data.granted) h(r, i.feature);
  if (a.data.eligible && a.data.needs_payment_setup === true) {
    if (a.data.amount_minor_units == null || !a.data.currency) return null;
    return { amountMinorUnits: a.data.amount_minor_units, currency: a.data.currency };
  }
  if (g(r, i.feature) !== null) return null;
  return F(r, i.feature, { available: a.data.available, eligible: a.data.eligible, granted: a.data.granted, amount_minor_units: a.data.amount_minor_units ?? null, currency: a.data.currency ?? null }, { onlyIfAbsent: true }), null;
}
function g(e, n) {
  let r = (0, import_chunk_865at33z.ge)().fotwEligibilityCache?.[e]?.[n];
  if (!r) return null;
  if (Date.now() - r.timestamp > _) return null;
  return r.info;
}
async function eMa(e, n) {
  if (!EKo(e)) return { outcome: "skipped" };
  let i = c();
  if (!i) return { outcome: "skipped" };
  let { campaign: r, orgId: a } = i, o = _qe(), s;
  try {
    s = await import_chunk_865at33z.zt.post("/api/oauth/organizations/:orgUUID/overage_credit_grant", { campaign: y, feature: r.feature, enable_overages: true }, { auth: "teleport-org", timeout: 6e4, validateStatus: (d) => d < 500, credentials: n });
  } catch (d) {
    return (0, import_chunk_cqa9hrgx.m)("api_fotw_claim", "request_failed"), (0, import_chunk_w578pjby.t)(`FotW claim failed: ${d}`, { level: "warn" }), { outcome: "failed" };
  }
  if (!s.ok) return { outcome: "failed" };
  if (s.status >= 400) {
    if (U(s.data) === "Failed to grant credit") return (0, import_chunk_cqa9hrgx.m)("api_fotw_claim", "grant_failed"), { outcome: "failed" };
    return (0, import_chunk_cqa9hrgx.l)("api_fotw_claim", "not_available"), F(a, r.feature, { available: false, eligible: false, granted: false, amount_minor_units: null, currency: null }), { outcome: "not_available" };
  }
  if (!s.data.success) return (0, import_chunk_cqa9hrgx.m)("api_fotw_claim", "grant_failed"), { outcome: "failed" };
  return (0, import_chunk_cqa9hrgx.u)("api_fotw_claim"), h(a, r.feature), { outcome: "granted", amountMinorUnits: s.data.amount_minor_units ?? o?.amountMinorUnits ?? 0, currency: s.data.currency ?? o?.currency ?? "USD", expiresAt: s.data.expires_at ?? null };
}
var M = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ error: (0, import_chunk_rnm2beqc.on)({ message: (0, import_chunk_rnm2beqc.we)() }) }));
function U(e) {
  let n = M().safeParse(e);
  return n.success ? n.data.error.message : void 0;
}
function I(e, n) {
  let i = (0, import_chunk_865at33z.ge)().fotwClaimedFeatures;
  return Boolean(i?.[e]?.includes(n));
}
function h(e, n) {
  (0, import_chunk_865at33z.Ke)((i) => {
    let r = i.fotwClaimedFeatures?.[e] ?? [];
    if (r.includes(n)) return i;
    return { ...i, fotwClaimedFeatures: { ...i.fotwClaimedFeatures, [e]: [...r, n] } };
  });
}
function P(e, n) {
  let i = (0, import_chunk_865at33z.ge)().fotwUpsellFulfilled;
  return Boolean(i?.[e]?.includes(n));
}
function tMa(e) {
  let n = c();
  if (!n || n.audience !== "viewer" || !kKo(e)) return;
  let { orgId: i, campaign: r } = n;
  (0, import_chunk_865at33z.Ke)((a) => {
    let o = a.fotwUpsellFulfilled?.[i] ?? [];
    if (o.includes(r.feature)) return a;
    return { ...a, fotwUpsellFulfilled: { ...a.fotwUpsellFulfilled, [i]: [...o, r.feature] } };
  });
}
function F(e, n, i, { onlyIfAbsent: r = false } = {}) {
  (0, import_chunk_865at33z.Ke)((a) => {
    let o = a.fotwEligibilityCache?.[e]?.[n], s = o && Date.now() - o.timestamp <= _;
    if (r && s) return a;
    if (o && o.info.available === i.available && o.info.eligible === i.eligible && o.info.granted === i.granted && o.info.amount_minor_units === i.amount_minor_units && o.info.currency === i.currency && s) return a;
    return { ...a, fotwEligibilityCache: { ...a.fotwEligibilityCache, [e]: { ...a.fotwEligibilityCache?.[e], [n]: { info: i, timestamp: Date.now() } } } };
  });
}
