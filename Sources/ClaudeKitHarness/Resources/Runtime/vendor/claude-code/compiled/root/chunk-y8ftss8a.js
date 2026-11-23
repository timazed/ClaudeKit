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
var chunk_y8ftss8a_exports = {};
__export(chunk_y8ftss8a_exports, {
  C5r: () => C5r,
  T5r: () => T5r,
  Y0a: () => Y0a,
  eZs: () => eZs,
  q0a: () => q0a
});
module.exports = __toCommonJS(chunk_y8ftss8a_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
(0, import_chunk_adx6804h.B)();
var g = (0, import_chunk_2cbgkbm2.p)(() => {
  let e = (0, import_chunk_adx6804h.c)({ enable_email: (0, import_chunk_adx6804h.P)().nullish(), enable_push: (0, import_chunk_adx6804h.P)().nullish() }), t = (0, import_chunk_adx6804h.c)({ bogosort: e.nullish(), code_requires_action: e.nullish() }), r = (0, import_chunk_adx6804h.c)({ has_active_channel: (0, import_chunk_adx6804h.P)(), platforms: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).nullish().transform((o) => o ?? []), most_recent_token_refresh: (0, import_chunk_adx6804h.n)().nullish() });
  return (0, import_chunk_adx6804h.c)({ account_id: (0, import_chunk_adx6804h.E)().nullish(), organization_id: (0, import_chunk_adx6804h.E)().nullish(), preferences: (0, import_chunk_adx6804h.c)({ feature_preference: t.nullish() }).nullish(), push_reachability: r.nullish() });
});
var S = 1e4, v = new import_chunk_2904xtvq.j(() => ({ reachability: (0, import_chunk_se72nykz.ps)(void 0), hydrated: (0, import_chunk_69qhefwa.Be)() }));
function s() {
  return v.of((0, import_chunk_f9x2f6cx.N)().host);
}
function T5r() {
  return s().reachability.getState();
}
function C5r(e) {
  return s().reachability.subscribe(e);
}
function q0a(e) {
  return s().hydrated.subscribe(e);
}
function k() {
  let e = (0, import_chunk_2yx6c1y2.vt)(), t = (0, import_chunk_865at33z.ge)();
  return { agentPushNotifEnabled: e.agentPushNotifEnabled ?? (0, import_chunk_865at33z.cXe)("agentPushNotifEnabled", t.agentPushNotifEnabled), inputNeededNotifEnabled: e.inputNeededNotifEnabled ?? (0, import_chunk_865at33z.cXe)("inputNeededNotifEnabled", t.inputNeededNotifEnabled) };
}
var R = "/api/claude_code/notification/preferences";
function _() {
  return (0, import_chunk_865at33z.Rt)();
}
async function z() {
  if (!_()) return { ok: false, reason: "no_auth" };
  try {
    let e = await import_chunk_865at33z.zt.get(R, { timeout: S });
    if (!e.ok) return { ok: false, reason: "fetch_failed" };
    let t = g().safeParse(e.data);
    if (!t.success) return (0, import_chunk_42tcgre6.q)("warn", "notif_prefs_fetch_parse_failed", { issues: t.error.issues.map((r) => r.path.join(".")).join(",") }), { ok: false, reason: "parse_failed" };
    return { ok: true, prefs: t.data };
  } catch (e) {
    let { kind: t } = (0, import_chunk_jv7av99m.$i)(e);
    return (0, import_chunk_42tcgre6.q)("warn", "notif_prefs_fetch_failed", { kind: t }), { ok: false, reason: "fetch_failed" };
  }
}
async function F(e) {
  if (!_()) return;
  try {
    if (!(await import_chunk_865at33z.zt.patch(R, e, { timeout: S })).ok) {
      (0, import_chunk_cqa9hrgx.l)("notif_prefs_patch", "no_auth");
      return;
    }
    (0, import_chunk_42tcgre6.q)("info", "notif_prefs_patch_ok", {}), (0, import_chunk_cqa9hrgx.u)("notif_prefs_patch");
  } catch (t) {
    let { kind: r } = (0, import_chunk_jv7av99m.$i)(t);
    (0, import_chunk_42tcgre6.q)("warn", "notif_prefs_patch_failed", { kind: r }), (0, import_chunk_cqa9hrgx.m)("notif_prefs_patch", "http_error");
  }
}
function eZs() {
  (0, import_chunk_2yx6c1y2.ORt)().then(() => {
    let e = k(), t = {};
    if (typeof e.agentPushNotifEnabled === "boolean") t.bogosort = { enable_push: e.agentPushNotifEnabled };
    if (typeof e.inputNeededNotifEnabled === "boolean") t.code_requires_action = { enable_push: e.inputNeededNotifEnabled };
    if (Object.keys(t).length === 0) return;
    return F({ preferences: { feature_preference: t } });
  }).catch(import_chunk_k449cc64.i);
}
async function Y0a(e) {
  if (!_()) {
    (0, import_chunk_cqa9hrgx.l)("notif_prefs_hydrate", "no_auth"), s().reachability.setState(() => null), (0, import_chunk_42tcgre6.q)("info", "notif_prefs_hydrate_skipped", { reason: "no_auth" });
    return;
  }
  let t = await z();
  if (!t.ok) {
    (0, import_chunk_cqa9hrgx.m)("notif_prefs_hydrate", t.reason), s().reachability.setState(() => null), (0, import_chunk_42tcgre6.q)("info", "notif_prefs_hydrate_skipped", { reason: t.reason });
    return;
  }
  let r = t.prefs, o = r.push_reachability ?? null;
  if (s().reachability.setState(() => o), o) (0, import_chunk_y53wbr8a.a)("tengu_push_reachability", { has_active_channel: o.has_active_channel, platform_count: o.platforms.length });
  let b = r.preferences?.feature_preference, h = b?.bogosort?.enable_push, d = b?.code_requires_action?.enable_push, y = k(), f = {};
  if (y.agentPushNotifEnabled === void 0 && typeof h === "boolean") f.agentPushNotifEnabled = h;
  if (y.inputNeededNotifEnabled === void 0 && typeof d === "boolean") f.inputNeededNotifEnabled = d;
  if ((0, import_chunk_42tcgre6.q)("info", "notif_prefs_hydrate_result", { has_active_channel: o?.has_active_channel, server_bogosort: h, server_code_requires_action: d, seeded: Object.keys(f).length > 0 }), Object.keys(f).length === 0) {
    (0, import_chunk_cqa9hrgx.u)("notif_prefs_hydrate");
    return;
  }
  await (0, import_chunk_2yx6c1y2.Mr)("userSettings", f, void 0, e), s().hydrated.emit(), (0, import_chunk_cqa9hrgx.u)("notif_prefs_hydrate");
}
