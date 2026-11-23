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
var chunk_ksyt0qhy_exports = {};
__export(chunk_ksyt0qhy_exports, {
  DBr: () => DBr,
  EIe: () => EIe,
  Kce: () => Kce,
  Sjs: () => Sjs,
  W$o: () => W$o,
  _js: () => _js,
  _mt: () => _mt,
  a_a: () => a_a,
  awn: () => awn,
  c_a: () => c_a,
  d_a: () => d_a,
  f_a: () => f_a,
  fjs: () => fjs,
  gjs: () => gjs,
  hjs: () => hjs,
  j$o: () => j$o,
  kIe: () => kIe,
  l_a: () => l_a,
  lwn: () => lwn,
  mjs: () => mjs,
  nIt: () => nIt,
  oIt: () => oIt,
  pjs: () => pjs,
  pve: () => pve,
  q5t: () => q5t,
  qce: () => qce,
  rIt: () => rIt,
  u_a: () => u_a,
  ujs: () => ujs,
  xJ: () => xJ,
  yjs: () => yjs
});
module.exports = __toCommonJS(chunk_ksyt0qhy_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_cy0ck7w2 = require("/$bunfs/root/chunk-cy0ck7w2.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_3qfhffks = require("/$bunfs/root/chunk-3qfhffks.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_49zxha55 = require("/$bunfs/root/chunk-49zxha55.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
(0, import_chunk_adx6804h.B)();
var q = "starry_waterfall", z = ["org_not_eligible", "no_program_running", "holdout", "mobile", "surface", "cli_version", "app_version", "auto_reload", "auto_reload_unknown", "segment_unknown", "not_assigned", "arm_unknown", "unavailable", "unknown"], Q = ["cli_menu", "cli_credits_required", "ide_banner", "alert_band", "overage_band", "code_usage_band", "credits_required", "code_credits_required", "unknown"], R = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.n)().regex(/^[A-Za-z0-9_-]{1,64}$/).nullable().optional().catch(null)), V = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ offer_eligible: (0, import_chunk_adx6804h.P)().nullable().optional().catch(null), offer_reason: (0, import_chunk_adx6804h.F)(z).catch("unknown").nullable().optional(), offer_arm: R(), offer_kind: (0, import_chunk_adx6804h.F)(["none", "pct_off", "extra_credit", "unknown"]).catch("unknown").nullable().optional(), offer_menu: (0, import_chunk_adx6804h.F)(["base", "plus40", "unknown"]).catch("unknown").nullable().optional(), offer_segment: (0, import_chunk_adx6804h.F)(["never", "lapsed", "recent", "unknown"]).catch("unknown").nullable().optional(), offer_days_left: (0, import_chunk_adx6804h.E)().int().nullable().optional().catch(null), offer_surface: (0, import_chunk_adx6804h.F)(Q).catch("unknown").nullable().optional() })), Y = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ eligible: (0, import_chunk_adx6804h.P)(), ineligible_reason: (0, import_chunk_adx6804h.F)(z).catch("unknown").nullable().optional(), active: (0, import_chunk_adx6804h.P)().optional().catch(false), arm_id: R(), kind: (0, import_chunk_adx6804h.F)(["none", "pct_off", "extra_credit"]).nullable().optional().catch(null), headline_pct: (0, import_chunk_adx6804h.E)().int().min(0).max(300).optional().catch(0), menu: (0, import_chunk_adx6804h.F)(["base", "plus40", "unknown"]).catch("unknown").nullable().optional(), default_bundle_id: R(), segment: (0, import_chunk_adx6804h.F)(["never", "lapsed", "recent", "unknown"]).catch("unknown").nullable().optional(), first_offered_at: (0, import_chunk_adx6804h.n)().nullable().optional().catch(null), expires_at: (0, import_chunk_adx6804h.n)().nullable().optional().catch(null), days_left: (0, import_chunk_adx6804h.E)().int().min(0).nullable().optional().catch(null), redeemed: (0, import_chunk_adx6804h.P)().optional().catch(false), event_props: V().nullable().optional().catch(null) }));
function Z(e) {
  if (e === void 0 || e === null) return null;
  let r = Y().safeParse(e);
  if (!r.success) return (0, import_chunk_w578pjby.t)(`[usage-credit-offer] ignoring a malformed status block: ${r.error.message}`), null;
  let o = r.data, l = o.kind ?? null, s = o.event_props;
  return { eligible: o.eligible, ineligibleReason: o.ineligible_reason ?? null, active: (o.active ?? false) && l !== null, armId: o.arm_id ?? null, kind: l, headlinePct: o.headline_pct ?? 0, menu: o.menu ?? null, defaultBundleId: o.default_bundle_id ?? null, segment: o.segment ?? null, firstOfferedAt: o.first_offered_at ?? null, expiresAt: o.expires_at ?? null, daysLeft: o.days_left ?? null, redeemed: o.redeemed ?? false, eventProps: s ? { offerEligible: s.offer_eligible ?? null, offerReason: s.offer_reason ?? null, offerArm: s.offer_arm ?? null, offerKind: s.offer_kind ?? null, offerMenu: s.offer_menu ?? null, offerSegment: s.offer_segment ?? null, offerDaysLeft: s.offer_days_left ?? null, offerSurface: s.offer_surface ?? null } : null };
}
function L(e) {
  return e !== void 0 && e !== null && e.active && !e.redeemed && (e.kind === "pct_off" || e.kind === "extra_credit") && e.headlinePct > 0 && e.daysLeft !== null && e.daysLeft > 0;
}
async function I(e, r) {
  try {
    if (!(0, import_chunk_865at33z.Qf)()) return { kind: "no_profile_scope" };
    let o = await (0, import_chunk_cy0ck7w2.DO)(e, { read: "starry_waterfall", surface: r });
    if (!(0, import_chunk_cy0ck7w2.zBe)(o)) return (0, import_chunk_w578pjby.t)("[usage-credit-offer] status fetch returned a fieldless or non-object body (in-band error)", { level: "warn" }), { kind: "failed" };
    return { kind: "answered", status: Z(o?.[q]) };
  } catch (o) {
    if ((0, import_chunk_w578pjby.t)(`[usage-credit-offer] status fetch failed: ${(0, import_chunk_jv7av99m.D)(o).message}`, { level: "warn" }), (0, import_chunk_cy0ck7w2.oHn)(o)) return { kind: "answered", status: null, notAuthorized: true };
    return { kind: "failed" };
  }
}
function X() {
  return { state: { phase: "idle" }, shown: /* @__PURE__ */ new Set(), pendingAsk: null, changed: (0, import_chunk_69qhefwa.Be)() };
}
var J = new import_chunk_2904xtvq.j(X);
function h() {
  return J.of((0, import_chunk_f9x2f6cx.N)().host);
}
function _mt() {
  return h().state;
}
function g(e) {
  let r = h();
  r.state = e, r.changed.emit();
}
function pve(e) {
  return h().changed.subscribe(e);
}
var M = 3, ee = 12e3, ne = 6e5, te = "credits_required";
function O(e) {
  return (0, import_chunk_bzyb60p0.wx)(e) && e.rateLimitType !== void 0 ? `${e.rateLimitType}:${e.resetsAt}` : null;
}
function W(e) {
  return { key: e, accountEpoch: (0, import_chunk_cy0ck7w2.$_)() };
}
function v(e, r) {
  return e.key === r.key && e.accountEpoch === r.accountEpoch;
}
function re() {
  return (0, import_chunk_865at33z.Rt)() && (0, import_chunk_865at33z.Sn)()?.billingType !== "usage_based" && (0, import_chunk_zhr7rpv7.Ss)();
}
function U() {
  let e = _mt();
  if (e.phase === "idle" || e.wall.accountEpoch !== (0, import_chunk_cy0ck7w2.$_)()) return;
  switch (e.phase) {
    case "answered":
      return e.status;
    case "asking":
      return e.standing;
    case "failed":
      return;
  }
}
function k() {
  let e = U();
  return L(e) && (0, import_chunk_cy0ck7w2.Dtn)() ? e : void 0;
}
function nIt() {
  let e = k();
  if (e === void 0) return;
  let r = (0, import_chunk_cy0ck7w2.sHn)();
  return (0, import_chunk_cy0ck7w2.iHn)(e.kind === "pct_off" ? r.menuSuffixPctOff : r.menuSuffixExtraCredit, { pct: e.headlinePct, daysLeft: e.daysLeft });
}
function mjs() {
  let e = k();
  if (e === void 0) return;
  let r = (0, import_chunk_cy0ck7w2.sHn)();
  return (0, import_chunk_cy0ck7w2.iHn)(e.kind === "pct_off" ? r.hintPctOff : r.hintExtraCredit, { pct: e.headlinePct, daysLeft: e.daysLeft });
}
function ae() {
  let e = k();
  if (e === void 0) return;
  let r = (0, import_chunk_cy0ck7w2.sHn)();
  return (0, import_chunk_cy0ck7w2.iHn)(e.kind === "pct_off" ? r.bannerPillPctOff : r.bannerPillExtraCredit, { pct: e.headlinePct, daysLeft: e.daysLeft });
}
function hjs() {
  let e = k(), r = ae();
  if (e === void 0 || r === void 0) return;
  return { kind: e.kind, headlinePct: e.headlinePct, daysLeft: e.daysLeft, label: r };
}
function rIt() {
  let e = U();
  if (e === void 0 || e === null) return {};
  let r = e.eventProps;
  return { offer_eligible: r?.offerEligible ?? e.eligible, offer_reason: (0, import_chunk_78g0060s.fe)(r?.offerReason ?? e.ineligibleReason) ?? void 0, offer_arm: (0, import_chunk_49zxha55.Ce)(r?.offerArm ?? e.armId), offer_kind: (0, import_chunk_78g0060s.fe)(r?.offerKind ?? e.kind) ?? void 0, offer_menu: (0, import_chunk_78g0060s.fe)(r?.offerMenu ?? e.menu) ?? void 0, offer_segment: (0, import_chunk_78g0060s.fe)(r?.offerSegment ?? e.segment) ?? void 0, offer_days_left: r?.offerDaysLeft ?? e.daysLeft ?? void 0, offer_active: e.active, offer_redeemed: e.redeemed, offer_surface: (0, import_chunk_78g0060s.fe)(r?.offerSurface) ?? void 0 };
}
function d_a(e, r) {
  let o = O(e);
  if (!(0, import_chunk_cy0ck7w2.Dtn)() || !(0, import_chunk_3qfhffks.aMe)() || o === null) return;
  S(o, "cli_menu", r);
}
function c_a(e) {
  if (!(0, import_chunk_cy0ck7w2.Dtn)() || !(0, import_chunk_3qfhffks.aMe)()) return;
  S(te, "cli_credits_required", e);
}
function u_a(e) {
  let r = O(e);
  if (!(0, import_chunk_cy0ck7w2.Dtn)() || !(0, import_chunk_3t7ve0wy.ta)() || !re() || r === null) return;
  S(r, "ide_banner", void 0);
}
function gjs(e, r) {
  let o = O(e);
  if (!(0, import_chunk_cy0ck7w2.Dtn)() || !(0, import_chunk_3qfhffks.aMe)() || o === null) return false;
  let l = _mt();
  if (l.phase === "failed" && v(l.wall, W(o)) && l.failures < M) return S(o, "cli_menu", r), true;
  return false;
}
function S(e, r, o, l = Date.now()) {
  let s = W(e), u = h(), d = u.state, m = 0;
  if (d.phase !== "idle" && v(d.wall, s)) switch (d.phase) {
    case "answered":
      if (l - d.answeredAt < ne) return Promise.resolve();
      break;
    case "asking":
      return u.pendingAsk ?? Promise.resolve();
    case "failed":
      if (d.failures >= M) return Promise.resolve();
      m = d.failures;
  }
  else if (d.phase === "asking") {
    if (d.wall.accountEpoch === s.accountEpoch) return u.pendingAsk ?? Promise.resolve();
  }
  g({ phase: "asking", wall: s, standing: U() });
  let b = (0, import_chunk_5appeerh.me)(I(o, r), ee).then((y) => {
    T({ wall: s, surface: r, failures: m, result: y ?? { kind: "failed" } });
  }).catch((y) => {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(y));
    try {
      T({ wall: s, surface: r, failures: m, result: { kind: "failed" } });
    } catch (G) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(G));
    }
  }).finally(() => {
    if (u.pendingAsk === b) u.pendingAsk = null;
  });
  return u.pendingAsk = b, b;
}
function T({ wall: e, surface: r, failures: o, result: l }) {
  let s = _mt();
  if (s.phase !== "asking" || !v(s.wall, e)) return;
  let u = l.kind === "answered" ? l.status : null;
  if (l.kind === "failed") {
    let d = s.standing;
    if (d !== void 0) g({ phase: "answered", wall: e, status: d, answeredAt: Date.now() });
    else g({ phase: "failed", wall: e, failures: o + 1 });
  } else g({ phase: "answered", wall: e, status: u, answeredAt: Date.now() });
  if ((0, import_chunk_y53wbr8a.a)("tengu_starry_waterfall_asked", { outcome: (0, import_chunk_78g0060s.f)(l.kind === "answered" ? u === null ? l.notAuthorized ? "not_authorized" : "absent" : "block" : l.kind), attempt: o + 1, surface: (0, import_chunk_78g0060s.f)(r), eligible: u?.eligible ?? false, ineligible_reason: (0, import_chunk_78g0060s.fe)(u?.ineligibleReason) ?? void 0, config_version: (0, import_chunk_cy0ck7w2.oss)() }), u === null || !u.eligible) return;
  (0, import_chunk_y53wbr8a.a)("tengu_starry_waterfall_wall", { ...rIt(), surface: (0, import_chunk_78g0060s.f)(r), tier: (0, import_chunk_78g0060s.f)((0, import_chunk_3qfhffks.pqe)()), config_version: (0, import_chunk_cy0ck7w2.oss)() });
}
function EIe(e, r = {}) {
  let o = h(), l = o.state, u = `${l.phase === "idle" ? "none" : l.wall.key}:${e}`;
  if (o.shown.has(u)) return;
  o.shown.add(u), (0, import_chunk_y53wbr8a.a)("tengu_starry_waterfall_shown", { ...rIt(), ...r, surface: (0, import_chunk_78g0060s.f)(e), config_version: (0, import_chunk_cy0ck7w2.oss)() });
}
function _js({ usedOffer: e }) {
  let r = _mt(), o = (l) => e && l.active ? { ...l, active: false, redeemed: true } : l;
  if (r.phase === "answered" && r.status !== null) g({ ...r, answeredAt: 0, status: o(r.status) });
  else if (r.phase === "asking" && r.standing) g({ ...r, standing: o(r.standing) });
}
(0, import_chunk_adx6804h.B)();
var kIe = "allow_promo_offers";
function q5t() {
  return !(0, import_chunk_gq1dr8pm.oBt)() && (0, import_chunk_zhr7rpv7.ve)() === "firstParty" && (0, import_chunk_865at33z.Rt)() && (0, import_chunk_2nv4wrez.Rn)(kIe);
}
(0, import_chunk_adx6804h.B)();
var oe = "cedar_ember", le = 25e3, x = /^[a-z0-9_-]{1,40}$/, se = /^[A-Za-z0-9_-]{1,64}$/, W$o = ["five_hour", "seven_day", "seven_day_overage_included", "seven_day_opus", "seven_day_sonnet", "seven_day_cowork", "seven_day_omelette", "seven_day_oauth_apps"], K = ["config_off", "tier", "seat", "mobile", "surface", "cli_version", "no_grant", "tenure", "other_experiment", "unavailable", "unknown"], ue = ["cooldown", "blocked_five_hour", "blocked_seven_day", "blocked_opus", "blocked_sonnet", "blocked_other", "cannot_clear", "needs_limit", "unavailable"], de = [...K, "paused", "expired", "unknown_grant", "not_next_grant", "grant_id_required", "not_limited", "already_used", "cooldown", "stamp_indeterminate", "reset_unconfirmed"], ce = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ surface: (0, import_chunk_adx6804h.F)(["claude_ai", "claude_code_cli", "unknown"]).catch("unknown"), tier: (0, import_chunk_adx6804h.F)(["claude_pro", "claude_max_5x", "claude_max_20x", "claude_team", "unknown"]).catch("unknown"), tenure_bucket: (0, import_chunk_adx6804h.F)(["under_14", "14-29", "30-89", "90-364", "365+", "unknown"]).catch("unknown"), billing_path: (0, import_chunk_adx6804h.F)(["stripe", "apple", "google_play", "other", "unknown"]).catch("unknown"), billing_period: (0, import_chunk_adx6804h.F)(["monthly", "annual", "unknown"]).catch("unknown"), extra_usage_state: (0, import_chunk_adx6804h.F)(["not_configured", "disabled", "enabled", "unknown"]).catch("unknown") })), w = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.ie)()).catch([]).transform((e) => e.filter((r) => W$o.some((o) => o === r)))), pe = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)().regex(x), label: (0, import_chunk_adx6804h.n)().catch(""), resets_total: (0, import_chunk_adx6804h.E)().int().min(0).catch(0), resets_left: (0, import_chunk_adx6804h.E)().int().min(0), starts_at: (0, import_chunk_adx6804h.n)().nullable().optional().catch(null), ends_at: (0, import_chunk_adx6804h.n)().nullable().optional().catch(null), clears: w(), paused: (0, import_chunk_adx6804h.P)().catch(false), usable_now: (0, import_chunk_adx6804h.P)().catch(false), use_requires_limit: (0, import_chunk_adx6804h.P)().catch(true), percent_used: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).catch({}), blocking: w(), type: (0, import_chunk_adx6804h.F)(["session", "weekly", "full"]).optional().catch(void 0), gives_back_weekly: (0, import_chunk_adx6804h.P)().catch(false), unavailable_reason: (0, import_chunk_adx6804h.F)(ue).nullable().optional().catch(null) }));
function _e(e) {
  let r = {};
  for (let o of W$o) {
    let l = e[o];
    if (typeof l === "number" && Number.isInteger(l) && l >= 0 && l <= 100) r[o] = l;
  }
  return r;
}
var be = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ eligible: (0, import_chunk_adx6804h.P)(), ineligible_reason: (0, import_chunk_adx6804h.F)(K).catch("unknown").nullable().optional(), at_limit: (0, import_chunk_adx6804h.P)().optional().catch(void 0), exhausted: w().optional(), grants: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.ie)()).optional().catch(void 0), next_grant_id: (0, import_chunk_adx6804h.n)().regex(x).nullable().optional().catch(null), weekly_resets_at: (0, import_chunk_adx6804h.n)().nullable().optional().catch(null), cooldown_until: (0, import_chunk_adx6804h.n)().nullable().optional().catch(null), event_props: ce().nullable().optional().catch(null) })), ye = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ result: (0, import_chunk_adx6804h.F)(["reset", "already_used", "not_limited", "cooldown", "ineligible", "unavailable"]).catch("unavailable"), reason: (0, import_chunk_adx6804h.F)(de).catch("unknown").nullable().optional(), resets_left: (0, import_chunk_adx6804h.E)().int().min(0).nullable().optional().catch(null), cleared: w().optional(), weekly_resets_at: (0, import_chunk_adx6804h.n)().nullable().optional().catch(null), cooldown_until: (0, import_chunk_adx6804h.n)().nullable().optional().catch(null) }));
function ke(e) {
  let r = pe().safeParse(e);
  if (!r.success) return (0, import_chunk_w578pjby.t)(`[cedar-ember] ignoring a malformed grant: ${r.error.message}`), null;
  let o = r.data;
  return { id: o.id, label: o.label, resetsTotal: o.resets_total, resetsLeft: o.resets_left, startsAt: o.starts_at ?? null, endsAt: o.ends_at ?? null, clears: o.clears, paused: o.paused, usableNow: o.usable_now, useRequiresLimit: o.use_requires_limit, percentUsed: _e(o.percent_used), blocking: o.blocking, type: o.type ?? null, givesBackWeekly: o.gives_back_weekly, unavailableReason: o.unavailable_reason ?? null };
}
function Se(e) {
  if (e === void 0 || e === null) return null;
  let r = be().safeParse(e);
  if (!r.success) return (0, import_chunk_w578pjby.t)(`[cedar-ember] ignoring a malformed status block: ${r.error.message}`), null;
  let o = r.data, l = (o.grants ?? []).map(ke).filter((d) => d !== null), s = o.next_grant_id !== void 0 && o.next_grant_id !== null && l.some((d) => d.id === o.next_grant_id) ? o.next_grant_id : null, u = o.event_props;
  return { eligible: o.eligible, ineligibleReason: o.ineligible_reason ?? null, atLimit: o.at_limit ?? false, exhausted: o.exhausted ?? [], grants: l, nextGrantId: s, weeklyResetsAt: o.weekly_resets_at ?? null, cooldownUntil: o.cooldown_until ?? null, eventProps: u ? { surface: u.surface, tier: u.tier, tenureBucket: u.tenure_bucket, billingPath: u.billing_path, billingPeriod: u.billing_period, extraUsageState: u.extra_usage_state } : null };
}
function j$o(e, r) {
  if (e === void 0 || e === null || !e.eligible) return;
  let o = e.grants.filter((l) => l.resetsLeft > 0 && !l.paused).map((l) => awn(l.endsAt) ?? 1 / 0).filter((l) => l > r);
  return o.length === 0 ? void 0 : Math.max(...o);
}
async function DBr(e, { read: r = "at_wall", surface: o } = {}) {
  try {
    if (!(0, import_chunk_865at33z.Qf)()) return { kind: "no_profile_scope" };
    let l = await (0, import_chunk_cy0ck7w2.DO)(e, r === "at_wall" ? { read: r, surface: o } : { read: r });
    if (!(0, import_chunk_cy0ck7w2.zBe)(l)) return (0, import_chunk_w578pjby.t)("[cedar-ember] status fetch returned a fieldless or non-object body (in-band error)", { level: "warn" }), { kind: "failed" };
    return { kind: "answered", status: Se(l?.cedar_ember) };
  } catch (l) {
    if ((0, import_chunk_w578pjby.t)(`[cedar-ember] status fetch failed: ${(0, import_chunk_jv7av99m.D)(l).message}`, { level: "warn" }), (0, import_chunk_cy0ck7w2.oHn)(l)) return { kind: "not_authorized" };
    return { kind: "failed" };
  }
}
var _ = { reason: null, resetsLeft: null, cleared: [], weeklyResetsAt: null };
async function ujs(e, r, o) {
  let l = (0, import_chunk_865at33z.Sn)()?.organizationUuid;
  if (!l) return (0, import_chunk_w578pjby.t)("[cedar-ember] no OAuth organization; cannot claim"), { result: "auth_error", ..._ };
  if (!x.test(r) || !se.test(o)) return (0, import_chunk_k449cc64.i)(Error("[cedar-ember] refusing to claim with a malformed grant or request id")), { result: "error", ..._ };
  try {
    let s = await (0, import_chunk_865at33z.jx)(() => import_chunk_865at33z.zt.post(`/api/organizations/${l}/reset_rate_limits`, { program: oe, grant_id: r, request_id: o }, { auth: "async", headers: { "Content-Type": "application/json" }, timeout: le, refreshOAuth: true, credentials: e }), { credentials: e });
    if (!s.ok) return (0, import_chunk_w578pjby.t)(`[cedar-ember] claim not sent: ${s.reason === "no-auth" ? s.detail : s.reason}`, { level: "warn" }), { result: s.reason === "no-auth" ? "auth_error" : "error", ..._ };
    let u = ye().safeParse(s.data);
    if (!u.success) return (0, import_chunk_w578pjby.t)(`[cedar-ember] unreadable claim response: ${u.error.message}`, { level: "error" }), (0, import_chunk_k449cc64.i)(Error("[cedar-ember] unreadable claim response")), { result: "error", ..._ };
    return { result: u.data.result, reason: u.data.reason ?? null, resetsLeft: u.data.resets_left ?? null, cleared: u.data.cleared ?? [], weeklyResetsAt: u.data.weekly_resets_at ?? null };
  } catch (s) {
    if ((0, import_chunk_jv7av99m.M_)(s)) (0, import_chunk_w578pjby.t)(`[cedar-ember] claim failed: ${(0, import_chunk_jv7av99m.D)(s).message}`, { level: "warn" });
    else (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(s));
    if ((0, import_chunk_3jjr3wje.fd)(s)) switch (s.response?.status) {
      case 429:
        return { result: "rate_limited", ..._ };
      case 401:
      case 403:
        return { result: "auth_error", ..._ };
      default:
        break;
    }
    return { result: "error", ..._ };
  }
}
function awn(e) {
  if (e === null) return;
  let r = Date.parse(e);
  return Number.isFinite(r) ? r : void 0;
}
function we() {
  return { state: { phase: "idle" }, shownOfferKey: null, wallRecordKey: null, pendingAsk: null, pendingUnusedResetRead: null, unusedResetAnsweredFor: null, unusedResetDrops: 0, claiming: false, continuableWallResetsAt: null, unsettledClaimGrantId: null, unsettledClaimEpoch: null, unsettledClaimRequestId: null, unsettledClaimAtMs: null, wallSurface: null, sessionSwitchSubscribed: false, changed: (0, import_chunk_69qhefwa.Be)(), events: (0, import_chunk_69qhefwa.Be)() };
}
var Ee = new import_chunk_2904xtvq.j(we);
function xJ() {
  return Ee.of((0, import_chunk_f9x2f6cx.N)().host);
}
function Kce() {
  return xJ().state;
}
function lwn(e) {
  let r = xJ();
  r.state = e, r.changed.emit();
}
function qce(e) {
  return xJ().changed.subscribe(e);
}
function fjs(e) {
  return xJ().events.subscribe(e);
}
var H = 2592e5, Re = 12e3, Oe = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ accountUuid: (0, import_chunk_adx6804h.n)().min(1), holdsUnusedReset: (0, import_chunk_adx6804h.P)(), checkedAt: (0, import_chunk_adx6804h.E)(), validUntil: (0, import_chunk_adx6804h.E)() }));
function a_a(e = Date.now()) {
  try {
    let r = (0, import_chunk_865at33z.Sn)()?.accountUuid, o = Oe().safeParse((0, import_chunk_865at33z.ge)().unusedLimitResetStatusCache).data;
    return (0, import_chunk_3t7ve0wy.fh)() === "cli" && !!r && o?.accountUuid === r && o.holdsUnusedReset && o.checkedAt <= e && e - o.checkedAt < H && e < o.validUntil && (0, import_chunk_865at33z.xa)().source === "claude.ai" && q5t();
  } catch (r) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(r)), false;
  }
}
function l_a(e, r) {
  let o = xJ();
  return o.pendingUnusedResetRead ??= Ue(e, r).catch((l) => (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(l))).finally(() => {
    o.pendingUnusedResetRead = null;
  }), o.pendingUnusedResetRead;
}
function pjs() {
  let e = xJ();
  e.unusedResetAnsweredFor = null, e.unusedResetDrops++, (0, import_chunk_865at33z.Ke)((r) => r.unusedLimitResetStatusCache === void 0 ? r : { ...r, unusedLimitResetStatusCache: void 0 });
}
async function Ue(e, r) {
  let o = xJ(), l = (0, import_chunk_865at33z.Sn)()?.accountUuid;
  if (!l) return;
  let s = `${(0, import_chunk_cy0ck7w2.$_)()}:${l}`;
  if (o.unusedResetAnsweredFor === s || (0, import_chunk_3t7ve0wy.fh)() !== "cli" || (0, import_chunk_865at33z.xa)().source !== "claude.ai" || !(0, import_chunk_3qfhffks.aMe)() || !q5t()) return;
  let u = o.unusedResetDrops, d = await (0, import_chunk_5appeerh.me)(DBr(e, { read: "cedar_ember" }), Re);
  if ((0, import_chunk_865at33z.Sn)()?.accountUuid !== l || o.unusedResetDrops !== u || (0, import_chunk_865at33z.xa)().source !== "claude.ai" || !q5t()) return;
  switch (d?.kind) {
    case "not_authorized":
    case "no_profile_scope":
      o.unusedResetAnsweredFor = s;
      return;
    case "answered":
      break;
    case "failed":
    case void 0:
      return;
  }
  if (d.status?.ineligibleReason === "unavailable") return;
  o.unusedResetAnsweredFor = s;
  let m = Date.now(), b = j$o(d.status, m);
  await (0, import_chunk_865at33z.Ke)((y) => ({ ...y, unusedLimitResetStatusCache: { accountUuid: l, holdsUnusedReset: b !== void 0, checkedAt: m, validUntil: Math.min(m + H, b ?? 1 / 0) } }), r);
}
var oIt = "tengu_wise_bear_copy";
function yjs(e) {
  switch (e) {
    case "five_hour":
      return "session";
    case "seven_day":
      return "weekly";
    case "seven_day_opus":
    case "seven_day_sonnet":
    case "seven_day_overage_included":
      return "model";
    default:
      return;
  }
}
function Sjs(e) {
  return typeof e === "object" && e !== null && Reflect.get(e, "only_if_unused_reset") === true;
}
function f_a(e, r, o, l) {
  if (typeof e !== "object" || e === null) return;
  if (Sjs(e) && l !== true) return;
  let s = Reflect.get(e, `note_${r}`);
  if (typeof s !== "string") return;
  let u = o(s);
  return u && !(u.endsWith("\u2026") && !s.trimEnd().endsWith("\u2026")) ? u : void 0;
}
