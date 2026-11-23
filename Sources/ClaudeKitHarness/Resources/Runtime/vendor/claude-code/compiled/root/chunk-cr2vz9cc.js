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
var chunk_cr2vz9cc_exports = {};
__export(chunk_cr2vz9cc_exports, {
  $$e: () => $$e,
  $qr: () => $qr,
  Fqr: () => Fqr,
  U_e: () => U_e,
  b7t: () => b7t,
  g7s: () => g7s,
  zer: () => zer
});
module.exports = __toCommonJS(chunk_cr2vz9cc_exports);
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_qesvcmqe = require("/$bunfs/root/chunk-qesvcmqe.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_cy0ck7w2 = require("/$bunfs/root/chunk-cy0ck7w2.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_0tkterak = require("/$bunfs/root/chunk-0tkterak.js");
var import_chunk_dd5safr0 = require("/$bunfs/root/chunk-dd5safr0.js");
var import_chunk_h3t3td58 = require("/$bunfs/root/chunk-h3t3td58.js");
async function g(r, n) {
  return (0, import_chunk_cqa9hrgx.qo)("api_admin_request_create", async () => {
    let s = await import_chunk_865at33z.zt.post("/api/oauth/organizations/:orgUUID/admin_requests", r, { auth: "teleport-org", credentials: n });
    if (!s.ok) throw Error(s.reason === "no-auth" ? s.detail : `admin_requests: ${s.reason}`);
    return { request: s.data, created: s.status === 201, status: s.status };
  });
}
async function _(r, n, s) {
  return (0, import_chunk_cqa9hrgx.qo)("api_admin_request_list", async () => {
    let o = new URLSearchParams({ request_type: r });
    for (let l of n) o.append("statuses", l);
    let u = await import_chunk_865at33z.zt.get(`/api/oauth/organizations/:orgUUID/admin_requests/me?${o}`, { auth: "teleport-org", credentials: s });
    if (!u.ok) throw Error(u.reason === "no-auth" ? u.detail : `admin_requests/me: ${u.reason}`);
    return u.data;
  });
}
async function y(r, n) {
  return (0, import_chunk_cqa9hrgx.qo)("api_admin_request_eligibility", async () => {
    let s = await import_chunk_865at33z.zt.get(`/api/oauth/organizations/:orgUUID/admin_requests/eligibility?request_type=${r}`, { auth: "teleport-org", credentials: n });
    if (!s.ok) throw Error(s.reason === "no-auth" ? s.detail : `admin_requests/eligibility: ${s.reason}`);
    return s.data;
  });
}
function Fqr() {
  let r = { ...(0, import_chunk_cy0ck7w2.Ki)(), isUsingOverage: true };
  if (delete r.overageDisabledReason, delete r.memberSpendLimit, r.status === "rejected") r.status = "allowed";
  if (r.overageStatus === "rejected") r.overageStatus = "allowed";
  (0, import_chunk_cy0ck7w2.jSt)(r);
}
function A(r) {
  if (!import_chunk_3jjr3wje.bn.isAxiosError(r)) return null;
  let n = r.response?.status;
  if (typeof n !== "number" || n >= 500) return null;
  let s = r.response?.data;
  if (!s || typeof s !== "object") return null;
  let o = s, u = o.error;
  if (u && typeof u === "object") {
    let l = u.message;
    if (typeof l === "string" && l.length > 0) return l;
  }
  for (let l of ["message", "detail"]) {
    let e = o[l];
    if (typeof e === "string" && e.length > 0) return e;
  }
  return null;
}
var b7t = "Requesting usage credits notifies your organization admins. To review and send the request, run /usage-credits in an interactive Claude Code session.", q = "Couldn't send your request. Try again later.", h = { type: "message", value: import_chunk_cy0ck7w2.q3e }, g7s = 2e3, R = /* @__PURE__ */ new Set(["org_spend_cap_reached", "member_zero_credit_limit", "group_zero_credit_limit", "seat_tier_zero_credit_limit"]);
function E(r) {
  if (r == null || typeof r !== "object" || r.request_type !== "limit_increase") return null;
  let n = r.details;
  if (r.status !== "approved" || n?.approval_type !== "pre_approved" || typeof n.granted_limit !== "number" || !Number.isSafeInteger(n.granted_limit) || n.granted_limit <= 0 || typeof n.currency !== "string" || !/^[A-Za-z]{3}$/.test(n.currency)) return null;
  let s = n.period == null || n.period === "monthly" ? "monthly" : n.period === "weekly" ? "weekly" : "other", o = (0, import_chunk_gq1dr8pm.p0)() ? import_chunk_cy0ck7w2.rss : import_chunk_cy0ck7w2.Aoo, u = (0, import_chunk_bzyb60p0.Ui)(n.granted_limit, n.currency, "fit"), l = typeof n.expires_at === "string" ? Date.parse(n.expires_at) : NaN, e = Number.isFinite(l) && l > Date.now() ? (0, import_chunk_dd5safr0.PA)(l / 1e3, true, true, true) : void 0;
  return { line: e === void 0 ? `Your ${o} is now ${u}` : `Your ${o} is now ${u} until ${e}`, shortLine: `Your ${o} is now ${u}`, fresh: r.approved_now === true, period: s, hasExpiry: e !== void 0 };
}
async function $$e(r, n, s) {
  let o;
  try {
    o = await g({ request_type: "limit_increase", details: null }, n);
  } catch (e) {
    let c = A(e);
    if ((0, import_chunk_jv7av99m.M_)(e, (m) => A(m) !== null)) (0, import_chunk_w578pjby.t)(`Admin request rejected: ${c ?? (0, import_chunk_jv7av99m.d)(e)}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(e);
    if (c) return { type: "message", value: c, filed: false, outcome: import_chunk_3jjr3wje.bn.isAxiosError(e) && e.response !== void 0 ? p(e.response.status) : "failed" };
    return { type: "message", filed: false, outcome: "failed", value: q };
  }
  if (o.status < 200 || o.status >= 300) {
    (0, import_chunk_w578pjby.t)(`Admin request rejected: HTTP ${o.status}`, { level: "error" });
    let e = { type: "message", filed: false, outcome: p(o.status) };
    if ((0, import_chunk_qesvcmqe.llt)(o.request) === "admin_request_admin_can_act") {
      let m = (0, import_chunk_cy0ck7w2.Y3e)() ? "Manage usage credits in admin settings on the web." : `Visit ${(0, import_chunk_865at33z.Qxe)()} to manage usage credits for your organization.`;
      return { ...e, value: `No request sent, because you have billing access. ${m}` };
    }
    let c = o.status < 500 ? (0, import_chunk_qesvcmqe.E1)(o.request) : void 0;
    return { ...e, value: c ?? q };
  }
  let u = null;
  try {
    u = E(o.request);
  } catch (e) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(e));
  }
  if (u === null) return { type: "message", filed: true, outcome: o.created ? "filed" : p(o.status), value: r == null ? "Request sent to your admin for usage credits." : r.is_enabled ? "Request sent to your admin to increase your usage credit limit." : "Request sent to your admin to turn on usage credits." };
  try {
    s?.(`${u.shortLine}.`);
  } catch (e) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(e));
  }
  try {
    if (u.fresh) {
      if ((0, import_chunk_y53wbr8a.a)("tengu_usage_credits_admin_request_granted", { period: (0, import_chunk_78g0060s.f)(u.period), has_expiry: u.hasExpiry }), (0, import_chunk_cy0ck7w2.Ki)().status === "rejected") await (0, import_chunk_5appeerh.K)(g7s);
      let e = (0, import_chunk_cy0ck7w2.Ki)();
      if (e.status === "rejected" && e.isUsingOverage !== true && e.overageScope === void 0 && e.overageDisabledReason !== void 0 && R.has(e.overageDisabledReason)) Fqr();
    }
  } catch (e) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(e));
  }
  let l = false;
  try {
    l = (0, import_chunk_0tkterak.xY)();
  } catch (e) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(e));
  }
  return { type: "message", filed: true, outcome: "granted", grantLine: `${u.line}.`, value: l ? `${u.line}.` : `${u.line} \xB7 send a message to continue` };
}
function zer() {
  if ((0, import_chunk_865at33z.Qt)()) return false;
  let r = (0, import_chunk_865at33z.or)(), n = (0, import_chunk_865at33z.tz)() !== null, s = (0, import_chunk_865at33z.b)("tengu_ember_latch", false) || n, o = (0, import_chunk_865at33z.$0)() && (n || (r === "pro" || r === "max") && !(0, import_chunk_k449cc64.wt)());
  return s && o;
}
async function U_e(r, n) {
  let s = (0, import_chunk_865at33z.or)(), o = s === "team" || s === "enterprise", u = (0, import_chunk_gq1dr8pm.sb)();
  if ((0, import_chunk_cy0ck7w2.Ki)().dailyCapPaused === true) return h;
  if (!u && o) {
    let e, c = true;
    try {
      e = (await (0, import_chunk_cy0ck7w2.DO)(n))?.extra_usage, c &&= e !== void 0;
    } catch (m) {
      c = false, (0, import_chunk_w578pjby.t)(`extra-usage: fetchUtilization failed, falling through to ask user: ${m}`, { level: "error" });
    }
    if (e?.daily_cap_notice) return h;
    switch (e?.disabled_reason) {
      case "out_of_credits":
        return { type: "message", value: "Your organization is out of usage credits. Contact your admin to add more.", reason: "out_of_credits" };
      case "org_level_disabled_until":
      case "org_spend_cap_reached":
        if (e.disabled_reason === "org_level_disabled_until" && e.spend_limit_reached === false) break;
        return { type: "message", value: "Your organization's usage credit cap is reached for this period. Contact your admin to raise it.", reason: "org_cap_reached" };
      default:
    }
    if (e?.is_enabled && e.monthly_limit === null) return { type: "message", value: "Your organization already has unlimited usage credits. No request needed.", reason: "unlimited" };
    try {
      let m = await y("limit_increase", n);
      if (m?.is_allowed === false) return { type: "message", value: "Usage credit requests are turned off for your organization.", reason: "requests_off" };
      c &&= m?.is_allowed === true;
    } catch (m) {
      c = false, (0, import_chunk_w578pjby.t)(`Extra usage eligibility check failed: ${m}`, { level: "error" });
    }
    try {
      let m = await _("limit_increase", ["pending"], n);
      if (m && m.length > 0) return { type: "message", value: "You've already sent a usage credit request to your admin.", reason: "pending" };
      c &&= m !== null;
    } catch (m) {
      c = false, (0, import_chunk_w578pjby.t)(`Failed to fetch pending admin requests: ${m}`, { level: "error" });
    }
    return { type: "confirm-admin-request", extraUsage: e, checked: c };
  }
  let l = (0, import_chunk_865at33z.Qxe)();
  if (!r.openInBrowser || (0, import_chunk_865at33z.Qt)()) return { type: "browser-opened", url: l, opened: false };
  try {
    let e = await (0, import_chunk_h3t3td58.ml)(l);
    return { type: "browser-opened", url: l, opened: e };
  } catch (e) {
    return (0, import_chunk_w578pjby.t)(`Failed to open browser for ${l}: ${e}`, { level: "error" }), { type: "message", value: `Couldn't open your browser. Visit ${l} to manage usage credits.` };
  }
}
function p(r) {
  if (r === 201) return "filed";
  if (r === 200) return "already_filed";
  if (r === 401 || r === 408 || r === 429 || r >= 500) return "failed";
  if (r >= 400) return "refused";
  return r >= 200 && r < 300 ? "filed" : "failed";
}
async function $qr(r) {
  if (!(0, import_chunk_gq1dr8pm.ocl)() || !(0, import_chunk_gq1dr8pm.n1)() || (0, import_chunk_gq1dr8pm.sb)() || (0, import_chunk_865at33z.or)() !== "team" || (0, import_chunk_865at33z.Qt)() || (0, import_chunk_k449cc64.wt)() || (0, import_chunk_cy0ck7w2.Ki)().overageScope === "group_pool") return null;
  let n = await (0, import_chunk_5appeerh.qt)(U_e({ openInBrowser: false }, r), w, "admin request checks").catch(() => null);
  if (n?.type === "message") return { row: "sentence", text: n.value };
  return n?.type === "confirm-admin-request" && n.checked ? { row: "live", extraUsage: n.extraUsage } : { row: "unknown" };
}
var w = 3e3;
