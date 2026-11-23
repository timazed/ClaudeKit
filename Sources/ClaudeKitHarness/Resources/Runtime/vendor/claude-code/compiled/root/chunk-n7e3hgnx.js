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
var chunk_n7e3hgnx_exports = {};
__export(chunk_n7e3hgnx_exports, {
  ECn: () => ECn,
  Kte: () => Kte,
  R0a: () => R0a,
  R4o: () => R4o,
  dq: () => dq,
  gnr: () => gnr,
  kCn: () => kCn,
  sXt: () => sXt,
  x0a: () => x0a,
  x4o: () => x4o
});
module.exports = __toCommonJS(chunk_n7e3hgnx_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_839h1d5e = require("/$bunfs/root/chunk-839h1d5e.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var S = 864e5, x = 36e5, G = 3e3;
function k() {
  return { "anthropic-client-os": (0, import_chunk_c203g5kd.Ift)() };
}
var dq = (0, import_chunk_839h1d5e.Co)(async (o) => {
  try {
    return { success: true, data: (await (0, import_chunk_865at33z.jx)(async () => {
      let r = await import_chunk_865at33z.zt.get("/api/oauth/account/settings", { timeout: G, credentials: o });
      if (!r.ok) throw Error(`Failed to get Grove settings: ${r.reason}`);
      if (h(r.status), r.data?.grove_enabled !== null && typeof r.data?.grove_enabled !== "boolean") throw Error("Grove settings answer has no boolean or null grove_enabled");
      return r;
    }, { credentials: o })).data };
  } catch (e) {
    if (!(e instanceof Error) || !/data-residency|essential-traffic-only|no-auth/.test(e.message)) (0, import_chunk_w578pjby.t)(`Failed to fetch Grove settings: ${e}`, { level: "error" });
    return dq.cache.clear?.(), { success: false };
  }
}, () => "account");
async function R4o(o) {
  try {
    await (0, import_chunk_865at33z.jx)(async () => {
      let e = await import_chunk_865at33z.zt.post("/api/oauth/account/grove_notice_viewed", {}, { credentials: o, headers: k() });
      if (!e.ok) throw Error(`Failed to mark Grove notice viewed: ${e.reason}`);
      return h(e.status), e;
    }, { credentials: o }), (0, import_chunk_cqa9hrgx.u)("api_grove_notice_mark_viewed");
  } catch (e) {
    (0, import_chunk_w578pjby.t)(`Failed to mark Grove notice viewed: ${e instanceof Error ? e.message : String(e)}`, { level: "error" }), (0, import_chunk_cqa9hrgx.m)("api_grove_notice_mark_viewed", "request_failed");
  } finally {
    dq.cache.clear?.();
  }
}
async function kCn(o, e, { onlyIfUnset: r = false } = {}) {
  try {
    let { data: c } = await (0, import_chunk_865at33z.jx)(async () => {
      let d = await import_chunk_865at33z.zt.patch(r ? "/api/oauth/account/settings?opt_in_only_if_unset=grove_enabled" : "/api/oauth/account/settings", { grove_enabled: o }, { credentials: e, headers: k() });
      if (!d.ok) throw Error(`Failed to update Grove settings: ${d.reason}`);
      return h(d.status), d;
    }, { credentials: e });
    return (0, import_chunk_cqa9hrgx.u)("api_grove_settings_update"), typeof c === "object" && c !== null && "grove_enabled" in c && typeof c.grove_enabled === "boolean" ? c.grove_enabled : void 0;
  } catch (c) {
    (0, import_chunk_w578pjby.t)(`updateGroveSettings failed: ${String(c)}`, { level: "error" }), (0, import_chunk_cqa9hrgx.m)("api_grove_settings_update", "request_failed");
    return;
  } finally {
    dq.cache.clear?.();
  }
}
async function sXt(o, e) {
  if (!(0, import_chunk_865at33z.BR)()) return false;
  if (!(0, import_chunk_865at33z.Bzt)()) return false;
  let r = (0, import_chunk_865at33z.Sn)()?.accountUuid;
  if (!r) return false;
  let d = (0, import_chunk_865at33z.ge)().groveConfigCache?.[r], f = Date.now();
  if (!d) return (0, import_chunk_w578pjby.t)("Grove: No cache, fetching config in background (dialog skipped this session)"), y(r, o, e), false;
  if (f - d.timestamp > S) return (0, import_chunk_w578pjby.t)("Grove: Cache stale, returning cached data and refreshing in background"), y(r, o, e), d.grove_enabled;
  return (0, import_chunk_w578pjby.t)("Grove: Using fresh cached config"), d.grove_enabled;
}
async function y(o, e, r) {
  try {
    let c = (0, import_chunk_865at33z.Vg)(), d = await Kte(r);
    if (!d.success) {
      if (d.errorStatus !== void 0 && d.errorStatus !== 401 && c && (0, import_chunk_865at33z.ge)().groveConfigCache?.[o]) await (0, import_chunk_865at33z.Ke)((l) => {
        let _ = l.groveConfigCache?.[o];
        return _ ? { ...l, groveConfigCache: { ...l.groveConfigCache, [o]: { ..._, timestamp: Date.now() } } } : l;
      }, e);
      return;
    }
    let f = d.data.grove_enabled, g = (0, import_chunk_865at33z.ge)().groveConfigCache?.[o];
    if (g?.grove_enabled === f && Date.now() - g.timestamp <= S) return;
    await (0, import_chunk_865at33z.Ke)((l) => ({ ...l, groveConfigCache: { ...l.groveConfigCache, [o]: { grove_enabled: f, timestamp: Date.now() } } }), e);
  } catch (c) {
    (0, import_chunk_w578pjby.t)(`Grove: Failed to fetch and store config: ${c}`);
  }
}
async function O(o) {
  let { data: e } = await (0, import_chunk_865at33z.jx)(async () => {
    let r = await import_chunk_865at33z.zt.get("/api/claude_code_grove", { timeout: G, credentials: o });
    if (!r.ok) throw Error(`Failed to fetch Grove notice config: ${r.reason}`);
    if (h(r.status), typeof r.data?.grove_enabled !== "boolean") throw Error("Grove notice config answer has no boolean grove_enabled");
    return r;
  }, { credentials: o });
  return e;
}
async function R0a(o) {
  try {
    let { notice_is_grace_period: e } = await O(o);
    return typeof e === "boolean";
  } catch {
    return (0, import_chunk_w578pjby.t)("Failed to read whether the Grove notice is on"), false;
  }
}
var Kte = (0, import_chunk_839h1d5e.Co)(async (o) => {
  try {
    let e = await O(o), { grove_enabled: r, domain_excluded: c, notice_is_grace_period: d, notice_reminder_frequency: f, grove_locked_by_claude_science: g } = e;
    return { success: true, data: { grove_enabled: r, domain_excluded: c ?? false, notice_is_grace_period: d ?? true, notice_reminder_frequency: f, grove_locked_by_claude_science: g === true } };
  } catch (e) {
    return (0, import_chunk_w578pjby.t)(`Failed to fetch Grove notice config: ${e}`), Kte.cache.clear?.(), e instanceof b ? { success: false, errorStatus: e.status } : { success: false };
  }
}, () => "config");
function x4o(o, e, r) {
  if (!o.success || !e.success) return false;
  let c = o.data, d = e.data;
  if (c.grove_enabled !== null) return false;
  if (r) return true;
  if (!d.notice_is_grace_period) return true;
  let g = d.notice_reminder_frequency;
  if (g !== null && c.grove_notice_viewed_at) {
    let l = new Date(c.grove_notice_viewed_at).getTime();
    if (isNaN(l)) return (0, import_chunk_k449cc64.i)(Error(`Invalid grove_notice_viewed_at from API: ${c.grove_notice_viewed_at}`)), true;
    return Math.floor((Date.now() - l) / 864e5) >= g;
  } else {
    let l = c.grove_notice_viewed_at;
    return l === null || l === void 0;
  }
}
async function gnr(o) {
  let e = await P(o), r = e !== void 0 && v(w((0, import_chunk_865at33z.ge)())[e]);
  if (r) (0, import_chunk_w578pjby.t)("Grove: the server recently confirmed a Consumer Terms answer; not asking again");
  return r;
}
async function ECn(o, e, r) {
  let c = Date.now();
  try {
    let d = o.grove_enabled;
    if (typeof d !== "boolean" && d !== null) return;
    let f = d !== null, g = await P(r);
    if (g === void 0 || f === v(w((0, import_chunk_865at33z.ge)())[g])) return;
    await (0, import_chunk_865at33z.Ke)((l) => {
      let _ = w(l);
      if (f === v(_[g])) return l;
      let C = Object.entries(_).filter(([T, H]) => T !== g && v(H));
      return { ...l, groveChoiceSeenAt: Object.fromEntries(f ? [...C, [g, c]] : C) };
    }, e);
  } catch (d) {
    (0, import_chunk_w578pjby.t)(`Grove: could not save the Consumer Terms check: ${d}`);
  }
}
async function x0a(o, e) {
  if (await gnr(e)) return;
  let [r, c] = await Promise.all([dq(e), Kte(e)]);
  if (r.success) ECn(r.data, o, e);
  if (x4o(r, c, false)) {
    let f = c.success ? c.data : null;
    if ((0, import_chunk_y53wbr8a.a)("tengu_grove_print_viewed", { dismissable: f?.notice_is_grace_period }), f === null || f.notice_is_grace_period) (0, import_chunk_ndrgvsn7.$E)(`
An update to our Consumer Terms and Privacy Policy will take effect on October 8, 2025. Run \`claude\` to review the updated terms.

`), await R4o(e);
    else (0, import_chunk_ndrgvsn7.$E)(`
[ACTION REQUIRED] An update to our Consumer Terms and Privacy Policy has taken effect on October 8, 2025. You must run \`claude\` to review the updated terms.

`), await (0, import_chunk_bzyb60p0.Yr)(1);
  }
}
function v(o) {
  if (o === void 0) return false;
  let e = Date.now() - o;
  return e >= 0 && e < x;
}
var F = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.E)()));
function w(o) {
  let e = F().safeParse(o.groveChoiceSeenAt);
  return e.success ? e.data : {};
}
async function P(o) {
  try {
    switch (await (0, import_chunk_865at33z.v_)(o)) {
      case "store":
        return (0, import_chunk_mzmcvr6c.ht)((0, import_chunk_865at33z.Sn)()?.accountUuid)?.toLowerCase();
      case "env":
      case "fd":
        return (0, import_chunk_mzmcvr6c.ht)(import_chunk_c203g5kd.s.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();
      case "none":
        return;
    }
  } catch (e) {
    (0, import_chunk_w578pjby.t)(`Grove: account unknown, so asking the server: ${e}`);
    return;
  }
}
class b extends import_chunk_jv7av99m.A {
  status;
  constructor(o) {
    super(`HTTP ${o}`, "Grove request answered with an error status");
    this.status = o;
  }
}
function h(o) {
  if (o < 200 || o >= 300) throw new b(o);
}
