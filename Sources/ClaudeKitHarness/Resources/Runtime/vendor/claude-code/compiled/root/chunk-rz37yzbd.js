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
var chunk_rz37yzbd_exports = {};
__export(chunk_rz37yzbd_exports, {
  L3r: () => L3r,
  Ytr: () => Ytr,
  fCn: () => fCn
});
module.exports = __toCommonJS(chunk_rz37yzbd_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_cy0ck7w2 = require("/$bunfs/root/chunk-cy0ck7w2.js");
var import_chunk_9ehfvk1q = require("/$bunfs/root/chunk-9ehfvk1q.js");
var import_chunk_ga36k9j5 = require("/$bunfs/root/chunk-ga36k9j5.js");
function Ytr(e) {
  let r = (0, import_chunk_cy0ck7w2.Ife)();
  if (!r.five_hour && !r.seven_day) {
    let o = (0, import_chunk_cy0ck7w2.lss)(e);
    return o ? { utilization: o.utilization, source: "persisted", fetchedAtMs: o.fetchedAtMs } : null;
  }
  let s = (o) => o ? { utilization: (0, import_chunk_f64qna2j.Sze)(o.utilization), resets_at: new Date(o.resets_at * 1e3).toISOString() } : void 0, n = z((0, import_chunk_cy0ck7w2.iyi)().seven_day_overage_included, e);
  return { utilization: { five_hour: s(r.five_hour), seven_day: s(r.seven_day), ...n && { limits: [n] } }, source: "headers" };
}
function z(e, r) {
  if (!e) return;
  let s = (0, import_chunk_cy0ck7w2.X3e)();
  if (!s[0]) return;
  let n = (0, import_chunk_cy0ck7w2.aHn)((0, import_chunk_cy0ck7w2.lss)(r)?.utilization.limits, s), o = n.length === 1 ? n[0].displayName : s[0];
  return { kind: "weekly_scoped", group: "weekly", percent: (0, import_chunk_f64qna2j.Sze)(e.utilization), resets_at: new Date(e.resets_at * 1e3).toISOString(), scope: { model: { display_name: o } } };
}
function g(e, r, s) {
  return { status: "seeded", utilization: e.utilization, rateLimitedVia: r, seedSource: e.source, seedFetchedAtMs: e.fetchedAtMs, heldUntilMs: s };
}
var y = 200;
function h(e) {
  if (e.length <= y) return e;
  return `${e.slice(0, y).replace(/[\uD800-\uDBFF]$/, "")}\u2026`;
}
async function fCn(e, r) {
  let s = await R(e, r);
  if (s.status !== "ok" && s.status !== "seeded" && s.status !== "no_profile_scope") return s;
  if (s.status === "no_profile_scope" || s.status === "seeded" && s.seedSource === "headers") {
    let n = (0, import_chunk_cy0ck7w2.iyi)().seven_day_overage_included;
    if (n) {
      await (0, import_chunk_cy0ck7w2.V_i)();
      let o = z(n, e), { limits: c, ...a } = s.utilization;
      return { ...s, utilization: o ? { ...a, limits: [o] } : a };
    }
  }
  if ((0, import_chunk_cy0ck7w2.afr)(s.utilization.limits)) await (0, import_chunk_cy0ck7w2.V_i)();
  return s;
}
async function R(e, r) {
  let s = (0, import_chunk_865at33z.Sn)()?.accountUuid;
  if ((0, import_chunk_865at33z.Rt)() && (0, import_chunk_865at33z.Qf)()) {
    let n = (0, import_chunk_cy0ck7w2.c8a)(e);
    if (n) return (0, import_chunk_w578pjby.t)(`Usage read answered from a snapshot ${Math.round(n.ageMs / 1e3)}s old; endpoint not asked`), { status: "ok", utilization: n.utilization };
  }
  try {
    let n = await (0, import_chunk_cy0ck7w2.DO)(r);
    if (!n) return { status: "empty_response" };
    let o = (0, import_chunk_865at33z.Rt)() && (0, import_chunk_865at33z.Qf)(), c = (0, import_chunk_cy0ck7w2.t8a)(n), a = (0, import_chunk_cy0ck7w2.zBe)(n);
    if (!c || o && !a) {
      (0, import_chunk_w578pjby.t)("Usage fetch returned a fieldless or non-object body (in-band error)", { level: "error" });
      let u = c && "error" in n ? n.error : void 0, p = typeof u === "object" && u !== null && "type" in u && u.type === "rate_limit_error" ? "envelope" : null, m = Ytr(e);
      if (m) return g(m, p);
      return { status: "unavailable", rateLimitedVia: p, responseBody: h((0, import_chunk_w578pjby._)(n)) };
    }
    if (!a) {
      let u = Ytr(e);
      return { status: "no_profile_scope", utilization: u?.source === "headers" ? u.utilization : n };
    }
    return (0, import_chunk_cy0ck7w2.d8a)(n, s, e), { status: "ok", utilization: n };
  } catch (n) {
    if ((0, import_chunk_jv7av99m.M_)(n)) (0, import_chunk_w578pjby.t)(`Failed to load usage data: ${(0, import_chunk_jv7av99m.d)(n)}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(n);
    let o = n, c = o.response?.status === 429 ? "http_429" : null, a = c === null ? void 0 : await (0, import_chunk_cy0ck7w2.o8a)(r).catch((p) => {
      (0, import_chunk_k449cc64.i)(p);
      return;
    }), u = Ytr(e);
    if (u) return g(u, c, a);
    return { status: "unavailable", rateLimitedVia: c, heldUntilMs: a, responseBody: o.response?.data ? h((0, import_chunk_w578pjby._)(o.response.data)) : void 0 };
  }
}
function v(e, r, s) {
  let n = (0, import_chunk_ga36k9j5.iDt)(e, r, s);
  return { recommendations: n.map(({ key: o, pct: c, title: a, detail: u }) => ({ key: o, pct: c, title: a, detail: u })), fix: s && (0, import_chunk_ga36k9j5.Xtr)(n), request_count: e.requestCount, session_count: e.sessionCount, behaviors: e.behaviors.filter((o) => e.totalCost > 0 && o.cost / e.totalCost * 100 >= import_chunk_ga36k9j5.oDt).map((o) => ({ key: o.key, pct: Math.round(o.cost / e.totalCost * 100), count: o.count })), agents: e.agents, skills: e.skills, plugins: e.plugins, mcp_servers: e.mcpServers };
}
async function L3r({ includeBehaviors: e = true, storageV5: r, credentials: s, live: n }) {
  let o = (0, import_chunk_865at33z.Rt)(), c = o && (0, import_chunk_865at33z.Qf)(), [a, u] = await Promise.all([c ? fCn(r, s) : Promise.resolve(null), e && o && (0, import_chunk_9ehfvk1q.xqe)().allowed ? (0, import_chunk_ga36k9j5.rDt)(r).then((l) => ({ day: v(l.day, l.evidence.day, n), week: v(l.week, l.evidence.week, n) }), (l) => ((0, import_chunk_k449cc64.i)(l), null)) : Promise.resolve(null)]), p = a?.status === "ok" || a?.status === "seeded" ? a.utilization : null, m;
  if (p !== null) try {
    m = (0, import_chunk_cy0ck7w2.aHn)(p.limits, (0, import_chunk_cy0ck7w2.X3e)()).map((l) => ({ display_name: l.displayName, utilization: l.limit.utilization ?? null, resets_at: typeof l.limit.resets_at === "number" ? new Date(l.limit.resets_at * 1e3).toISOString() : l.limit.resets_at ?? null }));
  } catch (l) {
    (0, import_chunk_w578pjby.t)(`model_scoped projection failed: ${(0, import_chunk_jv7av99m.d)(l)}`, { level: "error" });
  }
  let f = p;
  if (p !== null && a?.status === "seeded") {
    let { limits: l, ...U } = p;
    f = U;
  }
  let S = m !== void 0 && a?.status === "ok" && (a.utilization.five_hour != null || a.utilization.seven_day != null) && Array.isArray(a.utilization.limits) && !(0, import_chunk_cy0ck7w2.r8a)(a.utilization.limits);
  return { session: { total_cost_usd: (0, import_chunk_f9x2f6cx.Eb)(), total_api_duration_ms: (0, import_chunk_f9x2f6cx.WK)(), total_duration_ms: (0, import_chunk_f9x2f6cx.J6e)(), total_lines_added: (0, import_chunk_f9x2f6cx.v1e)(), total_lines_removed: (0, import_chunk_f9x2f6cx.T1e)(), model_usage: (0, import_chunk_f9x2f6cx.k$)() }, subscription_type: (0, import_chunk_865at33z.or)(), rate_limits_available: c, rate_limits: p === null ? null : m !== void 0 && m.length > 0 ? { ...f, model_scoped: m } : S ? { ...f, model_scoped: [] } : f, behaviors: u };
}
