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
var chunk_y9ea9enw_exports = {};
__export(chunk_y9ea9enw_exports, {
  eIa: () => eIa,
  fer: () => fer,
  i7t: () => i7t,
  mer: () => mer,
  per: () => per,
  tIa: () => tIa,
  uer: () => uer
});
module.exports = __toCommonJS(chunk_y9ea9enw_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_cy0ck7w2 = require("/$bunfs/root/chunk-cy0ck7w2.js");
var import_chunk_0tkterak = require("/$bunfs/root/chunk-0tkterak.js");
var import_chunk_3qfhffks = require("/$bunfs/root/chunk-3qfhffks.js");
var import_chunk_dd5safr0 = require("/$bunfs/root/chunk-dd5safr0.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var l = new import_chunk_2904xtvq.j(() => ({ notedWallResetsAt: null, shownWallResetsAt: null, withheldWallResetsAt: null, sessionSwitchSubscribed: false }));
function i() {
  return l.of((0, import_chunk_f9x2f6cx.N)().host);
}
function i7t(t, e = Date.now()) {
  return (0, import_chunk_3qfhffks.vHt)(t) && t.lowPriorityOffer === "treatment" && t.resetsAt !== void 0 && t.resetsAt * 1e3 > e && !(0, import_chunk_gq1dr8pm._ms)(e) && (0, import_chunk_gq1dr8pm.cBt)(e) === void 0 && !(0, import_chunk_gq1dr8pm.r1)() && (0, import_chunk_gq1dr8pm.Cin)();
}
function s(t, e = Date.now()) {
  let o = (0, import_chunk_gq1dr8pm.ycl)(e);
  return (0, import_chunk_3qfhffks.aMe)() && t.status !== "rejected" && o !== void 0 && !u(o) && !(0, import_chunk_gq1dr8pm._ms)(e) && (0, import_chunk_gq1dr8pm.cBt)(e) === void 0 && (0, import_chunk_gq1dr8pm.Cin)();
}
function u(t) {
  let e = (0, import_chunk_0tkterak.$qe)();
  switch (e.phase) {
    case "idle":
      return false;
    case "armed":
      return e.resetsAtSeconds !== t;
    case "stale":
      return true;
  }
}
function eIa(t) {
  if (t.lowPriorityOffer === void 0 || !(0, import_chunk_3qfhffks.vHt)(t)) return;
  let e = t.resetsAt ?? null;
  if (e === null) return;
  let o = i();
  if (o.notedWallResetsAt !== e) o.notedWallResetsAt = e, (0, import_chunk_y53wbr8a.a)("tengu_lowpri_offer_capable", { arm: (0, import_chunk_78g0060s.f)(t.lowPriorityOffer), tier: (0, import_chunk_78g0060s.f)((0, import_chunk_3qfhffks.pqe)()), limit_type: (0, import_chunk_78g0060s.fe)(t.rateLimitType) ?? void 0, auto_armed: (0, import_chunk_0tkterak.xY)(), client_enabled: (0, import_chunk_gq1dr8pm.Cin)(), config_version: (0, import_chunk_gq1dr8pm.Gyr)() });
  if (t.lowPriorityOffer === "treatment" && (0, import_chunk_gq1dr8pm.cBt)() !== void 0 && o.withheldWallResetsAt !== e) o.withheldWallResetsAt = e, (0, import_chunk_y53wbr8a.a)("tengu_lowpri_offer_withheld", { arm: (0, import_chunk_78g0060s.f)(t.lowPriorityOffer), reason: (0, import_chunk_78g0060s.f)("cooloff"), client_enabled: (0, import_chunk_gq1dr8pm.Cin)(), config_version: (0, import_chunk_gq1dr8pm.Gyr)() });
}
function uer(t, e) {
  let o = t.resetsAt ?? null, r = i();
  if (o === null || r.shownWallResetsAt === o) return;
  r.shownWallResetsAt = o, (0, import_chunk_y53wbr8a.a)("tengu_lowpri_offer_shown", { arm: (0, import_chunk_78g0060s.fe)(t.lowPriorityOffer) ?? void 0, surface: (0, import_chunk_78g0060s.f)(e), config_version: (0, import_chunk_gq1dr8pm.Gyr)() });
}
function fer(t) {
  let e = (0, import_chunk_cy0ck7w2.Ki)();
  if (i7t(e) && e.resetsAt !== void 0) {
    if ((0, import_chunk_0tkterak.PY)("low_priority"), n(), !(0, import_chunk_gq1dr8pm._cl)({ resetsAtSeconds: e.resetsAt, arm: e.lowPriorityOffer, entry: t, retryAfterSeconds: e.lowPriorityRetryAfterSeconds, maxWaitSeconds: e.lowPriorityMaxWaitSeconds })) return "unavailable";
    return (0, import_chunk_3qfhffks.a7t)(), "accepted";
  }
  if (s(e)) {
    let o = (0, import_chunk_0tkterak.xY)();
    if (o) (0, import_chunk_0tkterak.PY)("low_priority");
    if (n(), !(0, import_chunk_gq1dr8pm.Scl)(t)) return "unavailable";
    if (o) (0, import_chunk_3qfhffks.a7t)();
    return "resumed";
  }
  return "unavailable";
}
function per(t) {
  let e = (0, import_chunk_gq1dr8pm.Ain)(), o = e.phase === "active" ? (0, import_chunk_dd5safr0.PA)(e.resetsAtSeconds) : void 0, r = o ? `until your limit resets at ${o}` : "until your limit resets";
  return `${t === "resumed" ? `Lower-priority mode is back on ${r}` : `Continuing now at lower priority ${r}`}. Your weekly limit still applies, and responses may pause while waiting for spare capacity. Run /${import_chunk_gq1dr8pm.a8e} to stop.`;
}
function mer(t = Date.now()) {
  if ((0, import_chunk_gq1dr8pm._ms)(t)) return `${(0, import_chunk_gq1dr8pm.NAe)().budgetExhaustedCopy}. Lower-priority mode is offered again after your weekly limit resets.`;
  let e = (0, import_chunk_gq1dr8pm.cBt)(t);
  if (e !== void 0) return `Lower-priority mode is taking a break until ${(0, import_chunk_dd5safr0.PA)(Math.ceil(e / 1e3)) ?? "later"}, after waiting too long for spare capacity. Try /${import_chunk_gq1dr8pm.a8e} again then.`;
  return "Lower-priority mode isn't available right now.";
}
function tIa() {
  let t = (0, import_chunk_cy0ck7w2.Ki)();
  return `Lower-priority mode is off. New messages wait for your usage limit as usual${i7t(t) || s(t) ? `; run /${import_chunk_gq1dr8pm.a8e} again to turn it back on` : ""}.`;
}
function n() {
  let t = i();
  if (t.sessionSwitchSubscribed) return;
  t.sessionSwitchSubscribed = true, (0, import_chunk_f9x2f6cx.Bp)((e, o) => {
    if ((0, import_chunk_0tkterak.vtt)(o)) (0, import_chunk_gq1dr8pm.q5)("conversation_reset");
  });
}
