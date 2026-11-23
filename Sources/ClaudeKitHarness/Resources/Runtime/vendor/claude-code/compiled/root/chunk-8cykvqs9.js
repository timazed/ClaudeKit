const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_8cykvqs9_exports = {};
__export(chunk_8cykvqs9_exports, {
  Ajo: () => Ajo,
  V2r: () => V2r,
  aka: () => aka
});
module.exports = __toCommonJS(chunk_8cykvqs9_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_nydsr46r = require("/$bunfs/root/chunk-nydsr46r.js");
var import_chunk_42nfpkzm = require("/$bunfs/root/chunk-42nfpkzm.js");
var import_chunk_9nabvees = require("/$bunfs/root/chunk-9nabvees.js");
var import_chunk_pkz4wjtb = require("/$bunfs/root/chunk-pkz4wjtb.js");
var import_chunk_h70wj3wp = require("/$bunfs/root/chunk-h70wj3wp.js");
async function M(e) {
  if (e.trust.kind === "untrusted") return;
  let o = await (0, import_chunk_bzyb60p0.UJo)(e.cacheKey);
  if (o === void 0) return;
  let n = await ee(o, e);
  if (!n.ok) {
    if (n.reason === "unknown_key" && e.kind !== "hosted" && (0, import_chunk_pkz4wjtb.Dsr)()) {
      (0, import_chunk_w578pjby.t)("[publishedCatalog] cached document names a key this session does not hold while server-managed settings are unconfirmed; not using it this session, keeping the file"), (0, import_chunk_bzyb60p0.rVa)(e.cacheKey);
      return;
    }
    (0, import_chunk_w578pjby.t)(`[publishedCatalog] cached document not re-established (${n.reason}); discarding`), await (0, import_chunk_bzyb60p0.fci)(e.cacheKey);
    return;
  }
  let a = n.entry;
  return await (0, import_chunk_bzyb60p0.BJo)(e.cacheKey, a, { verified: true }), a;
}
async function ee(e, o) {
  let n = o.trust;
  if (n.kind === "untrusted") return { ok: false, reason: "untrusted_source" };
  let a = te(e.documentBytes);
  if (a === void 0) return { ok: false, reason: "undecodable_bytes" };
  let s = await (0, import_chunk_pkz4wjtb.KRn)({ documentBytes: a, sidecar: e.sidecar, roots: n.roots });
  if (!s.ok) return { ok: false, reason: s.reason };
  let r = oe(a);
  if (r === void 0) return { ok: false, reason: "unparseable_document" };
  let d = await x(r, o, void 0, s.rootId);
  if (d !== void 0) return { ok: false, reason: d };
  return await (0, import_chunk_nydsr46r.qRn)(o.cacheKey, r), { ok: true, entry: { ...e, document: r, rootId: s.rootId, source: o.kind } };
}
function te(e) {
  let o = Buffer.from(e, "base64");
  if (o.toString("base64") !== e) return;
  return o.length > 0 && o.length <= import_chunk_865at33z.w7e ? new Uint8Array(o) : void 0;
}
function oe(e) {
  let o = (0, import_chunk_0jve1fep.et)(Buffer.from(e).toString("utf8"), false);
  if ((0, import_chunk_865at33z.ICs)(o) !== import_chunk_865at33z.ECo) return;
  let n = (0, import_chunk_865at33z.pzt)().safeParse(o);
  return n.success ? n.data : void 0;
}
function ae(e, o, n) {
  let a = e.kind === "hosted" || (0, import_chunk_h70wj3wp.Amo)(n) === "compiled_roots";
  return Math.max(o?.document.version ?? 0, a ? (0, import_chunk_865at33z.NAl)() : 0);
}
async function x(e, o, n, a) {
  if (e.version < ae(o, n, a)) return "replayed_version";
  if (e.version < await (0, import_chunk_nydsr46r.bXr)(o.cacheKey)) return "catalog_version_rollback";
  return;
}
function Ajo({ allowNetwork: e }) {
  let o = (0, import_chunk_9nabvees.tGr)();
  if (!(0, import_chunk_9nabvees.oJn)()) return Promise.resolve({ mode: o, source: void 0, fetchStatus: "off", expired: false, entry: void 0 });
  let n = (0, import_chunk_pkz4wjtb.T0t)();
  if (!n.ok) return Promise.resolve({ mode: o, source: void 0, fetchStatus: "invalid_url", expired: false, entry: void 0 });
  let { source: a } = n, s = (0, import_chunk_zhr7rpv7.vr)().publishedCatalogRefreshes, r = s.get(a.cacheKey);
  if (r) return r;
  let d = re({ mode: o, source: a, allowNetwork: e }).finally(() => {
    s.delete(a.cacheKey);
  });
  return s.set(a.cacheKey, d), d;
}
async function re({ mode: e, source: o, allowNetwork: n }) {
  let a, s = () => ({ mode: e, source: o, ...a !== void 0 && { fetchMs: a } }), r, d = (c) => c !== void 0 && (0, import_chunk_bzyb60p0.hci)(c.document);
  try {
    if (o.trust.kind === "untrusted") return (0, import_chunk_w578pjby.t)(`[publishedCatalog] ${o.kind} source skipped: ${o.trust.reason}`), { ...s(), fetchStatus: "skipped", fetchReason: o.trust.reason, expired: false, entry: void 0 };
    if (r = await M(o), r && !(0, import_chunk_bzyb60p0.EZt)(r)) return { ...s(), fetchStatus: "cache_fresh", expired: false, entry: r };
    if (r && d(r)) (0, import_chunk_w578pjby.t)("[publishedCatalog] cached document is past its expires_at; refreshing");
    if (!n && o.kind !== "file") return { ...s(), fetchStatus: "cache_only", expired: d(r), entry: r };
    let c = performance.now(), g = await (0, import_chunk_pkz4wjtb.SXr)(o, { etag: r?.etag });
    if (o.kind !== "file") a = Math.round(performance.now() - c);
    switch (g.status) {
      case "not_modified": {
        let h = r ? (0, import_chunk_bzyb60p0.sVa)(r) : void 0;
        if (h) await (0, import_chunk_bzyb60p0.pci)(o.cacheKey, h);
        return { ...s(), fetchStatus: "not_modified", httpStatus: g.httpStatus, expired: d(h), entry: h };
      }
      case "error":
        return { ...s(), fetchStatus: "error", fetchReason: g.reason, httpStatus: g.httpStatus, expired: d(r), entry: r };
      case "ok": {
        let h = await ne({ source: o, cached: r, result: g });
        if (!h.ok) return (0, import_chunk_w578pjby.t)(`[publishedCatalog] document rejected: ${h.reason}; keeping ${r ? "last good document" : "nothing"}`), { ...s(), fetchStatus: "rejected", fetchReason: h.reason, httpStatus: g.httpStatus, expired: d(r), entry: r };
        let v = (0, import_chunk_bzyb60p0.oVa)({ document: h.document, documentBytes: g.documentBytes, sidecar: g.sidecar, etag: g.etag, source: o.kind, rootId: h.rootId });
        await (0, import_chunk_bzyb60p0.pci)(o.cacheKey, v);
        let C = d(v);
        return (0, import_chunk_w578pjby.t)(`[publishedCatalog] accepted ${o.kind} document v${h.document.version} (verified by ${h.rootId})${C ? ", past its expires_at" : ""}`), { ...s(), fetchStatus: "ok", httpStatus: g.httpStatus, expired: C, entry: v };
      }
    }
  } catch (c) {
    return (0, import_chunk_k449cc64.i)(c), { ...s(), fetchStatus: "error", fetchReason: "exception", expired: d(r), entry: r };
  }
}
async function ne({ source: e, cached: o, result: n }) {
  let a = e.trust;
  if (a.kind === "untrusted") return { ok: false, reason: "unsigned" };
  if (!n.hasSidecar) return { ok: false, reason: "unsigned" };
  let s = await (0, import_chunk_pkz4wjtb.KRn)({ documentBytes: n.documentBytes, sidecar: n.sidecar, roots: a.roots });
  if (!s.ok) return { ok: false, reason: s.reason };
  let r = (0, import_chunk_0jve1fep.et)(Buffer.from(n.documentBytes).toString("utf8"), false), d = (0, import_chunk_865at33z.ICs)(r);
  if (d === void 0) return { ok: false, reason: "parse_failed" };
  if (d !== import_chunk_865at33z.ECo) return { ok: false, reason: "unsupported_schema" };
  let c = (0, import_chunk_865at33z.pzt)().safeParse(r);
  if (!c.success) return { ok: false, reason: "parse_failed" };
  let g = c.data, h = await x(g, e, o, s.rootId);
  if (h !== void 0) return await (0, import_chunk_bzyb60p0.mci)(g), { ok: false, reason: h };
  return await (0, import_chunk_nydsr46r.qRn)(e.cacheKey, g), { ok: true, document: g, rootId: s.rootId };
}
var ie = 1750, se = 1500, de = 4500;
function le(e) {
  if ((0, import_chunk_bzyb60p0.s5)() === "ccr") return de;
  return e ? se : ie;
}
var ue = 2e3;
async function H({ headless: e }) {
  if ((0, import_chunk_zhr7rpv7.vr)().servedCatalogActive !== void 0) return;
  try {
    if ((0, import_chunk_bzyb60p0.wye)() !== "primary" || ce()) {
      he(e);
      return;
    }
    let o = (0, import_chunk_bzyb60p0.tQ)();
    if (o === null) {
      O("no_scope", "no cache scope");
      return;
    }
    let n = (0, import_chunk_bzyb60p0.s5)(), a = await (0, import_chunk_bzyb60p0.$Jo)(o, n), s = "cache", r, d = {}, c, g = false, h;
    if (a === void 0) {
      let m = e ? (0, import_chunk_bzyb60p0.rrt)(o, n) : null;
      if (m !== null && !await (0, import_chunk_bzyb60p0.ort)(m)) g = true;
      else {
        let w = (0, import_chunk_bzyb60p0.vZt)({ allowNetwork: true });
        if (m !== null) w = w.then(async (F) => (await (0, import_chunk_bzyb60p0.fZr)(m, F), F));
        let y = await K(w, { wait: "first_fetch", headless: e, budgetMs: le(e), scope: o });
        c = y.timing, h = y.outcome, a = y.outcome?.entry, r = y.outcome === void 0 ? "timeout" : y.outcome.fetchStatus, d = j(y.outcome), s = `fetch:${r}`;
      }
    } else if (!e && (0, import_chunk_bzyb60p0.wZt)(a)) {
      let m = await K((0, import_chunk_bzyb60p0.vZt)({ allowNetwork: true }), { wait: "stale_refresh", headless: e, budgetMs: ue, scope: o });
      if (c = m.timing, h = m.outcome, r = m.outcome === void 0 ? "timeout" : m.outcome.fetchStatus, m.outcome?.fetchReason === "lane_unavailable") a = void 0;
      else a = m.outcome?.entry ?? a, s = `stale cache: waited ${c.wait_ms}ms for refresh \u2192 ${(0, import_chunk_bzyb60p0.wZt)(a) ? "kept stale" : "refreshed"} (fetch:${r})`;
    }
    if ((0, import_chunk_zhr7rpv7.vr)().servedCatalogActive !== void 0 || !(0, import_chunk_bzyb60p0.Yar)((0, import_chunk_bzyb60p0.tQ)(), o)) return;
    let v = a?.catalog ?? null, C = a?.resolution ?? h?.resolution, P = V(o, C);
    if (v === null) {
      if (a !== void 0) O("surface_not_served", "server serves this surface no rows", { ...P, ...c }, o);
      else if (g) O("headless_held_off", "nothing cached, and a recent headless request failed, so this run does not ask again", P, o);
      else if (h !== void 0 && Se(h)) Ce(h, { headless: e, timing: c, lane: P, scope: o });
      else O(`${e ? "headless_" : ""}fetch_${r ?? "none"}`, `nothing cached, ${s} produced no rows`, { ...P, ...d, ...c }, o);
      return;
    }
    if ((0, import_chunk_865at33z.VTt)(v).length === 0) {
      O((0, import_chunk_865at33z.Zlt)(v).length === 0 ? "no_selectable_rows" : "no_offered_rows", `served rows hold no model this build offers (${(0, import_chunk_865at33z.VT)(v).length} rows via ${s})`, { ...P, ...c }, o);
      return;
    }
    let p = a !== void 0 && (0, import_chunk_bzyb60p0.wZt)(a);
    (0, import_chunk_865at33z.TAl)(v, a?.fetchedAt, p, { route: (0, import_chunk_bzyb60p0.ryt)(o), credential: (0, import_chunk_bzyb60p0.X4e)(o), organizationUuid: a?.organizationUuid, resolution: a?.resolution, scope: o }), (0, import_chunk_cqa9hrgx.u)("model_catalog_primary", { decision: (0, import_chunk_78g0060s.f)("served"), ...P, ...c }), (0, import_chunk_w578pjby.t)(`[servedCatalog] primary: using served rows (${(0, import_chunk_865at33z.VT)(v).length} rows via ${s} over the ${(0, import_chunk_bzyb60p0.ryt)(o)} route${ge((0, import_chunk_bzyb60p0.X4e)(o))}, fetched ${Math.max(0, Math.round((Date.now() - (a?.fetchedAt ?? Date.now())) / 1e3))}s ago${p ? ", stale" : ""}); the served list replaces the compiled picker for this session`);
  } catch (o) {
    if ((0, import_chunk_k449cc64.i)(o), (0, import_chunk_zhr7rpv7.vr)().servedCatalogActive === void 0 && (0, import_chunk_bzyb60p0.wye)() === "primary") O("exception", "exception");
  }
}
async function aka() {
}
function ce() {
  return false;
}
function he(e) {
}
function j(e) {
  let o = (0, import_chunk_78g0060s.fe)(e?.fetchReason), n = e?.httpStatus;
  return { ...o !== void 0 && { fetch_reason: o }, ...n !== void 0 && { http_status: n } };
}
function V(e, o) {
  let n = (0, import_chunk_bzyb60p0.ryt)(e);
  return { route: (0, import_chunk_78g0060s.f)(n), credential: (0, import_chunk_78g0060s.f)((0, import_chunk_bzyb60p0.X4e)(e)), auth_kind: (0, import_chunk_78g0060s.f)((0, import_chunk_bzyb60p0.OLt)()), ...n === "orgless" && { resolution: (0, import_chunk_78g0060s.f)(o ?? "unknown") } };
}
function ge(e) {
  switch (e) {
    case "oauth":
      return "";
    case "api_key":
      return " with the API key";
    case "profile":
      return " with the Console profile";
    case "federation":
      return " with the federation credential";
  }
}
function N(e) {
  return { route: (0, import_chunk_bzyb60p0.ryt)(e), credential: (0, import_chunk_bzyb60p0.X4e)(e) };
}
async function K(e, o) {
  let { budgetMs: n } = o, a = performance.now(), s = await (0, import_chunk_5appeerh.qt)(e, n, `served catalog ${o.wait}`).catch(() => {
    return;
  });
  if (s === void 0) e.then((d) => pe(d, o)).catch((d) => (0, import_chunk_k449cc64.i)(d));
  let r = s?.fetchMs;
  return (0, import_chunk_42tcgre6.q)(s === void 0 ? "warn" : "info", "model_catalog_refresh_wait", { budget_ms: n, waited_ms: Math.round(performance.now() - a), timed_out: s === void 0, first_fetch: o.wait === "first_fetch" }), { outcome: s, timing: { wait_ms: Math.round(performance.now() - a), wait_budget_ms: n, wait_timed_out: s === void 0, ...r !== void 0 && { fetch_ms: r }, startup_ms: Math.round(a) } };
}
function pe(e, { wait: o, headless: n, budgetMs: a, scope: s }) {
  let r = e.fetchStatus === "error" || e.fetchStatus === "skipped", d = { wait: (0, import_chunk_78g0060s.f)(o), headless: n, wait_budget_ms: a, ...V(s, e.resolution), ...e.fetchMs !== void 0 && { fetch_ms: e.fetchMs }, fetch_status: (0, import_chunk_78g0060s.f)(e.fetchStatus), ...j(e), cache_written: !r && e.fetchStatus !== "cache_fresh" && e.fetchStatus !== "cache_only" && e.entry !== void 0 };
  if (r) (0, import_chunk_cqa9hrgx.l)("model_catalog_late_fetch", `fetch_${e.fetchStatus}`, d);
  else (0, import_chunk_cqa9hrgx.u)("model_catalog_late_fetch", d);
  (0, import_chunk_w578pjby.t)(`[servedCatalog] ${o} settled after its ${a}ms wait: fetch:${e.fetchStatus}, request took ${e.fetchMs ?? "?"}ms`);
}
function Se(e) {
  return (0, import_chunk_bzyb60p0.$Pn)(e.fetchReason);
}
var be = { not_permitted: "credential_scope", ip_restricted: "ip_restricted", lane_unavailable: "lane_unavailable" };
function Ce(e, { headless: o, timing: n, lane: a, scope: s }) {
  let r = be[e.fetchReason];
  (0, import_chunk_865at33z.AVi)(r, N(s)), (0, import_chunk_cqa9hrgx.u)("model_catalog_primary", { decision: (0, import_chunk_78g0060s.f)("off"), off_reason: (0, import_chunk_78g0060s.f)(r), ...G(r), headless: o, ...a, ...e.httpStatus !== void 0 && { http_status: e.httpStatus }, ...e.errorCode !== void 0 && { refusal_code: (0, import_chunk_78g0060s.f)(e.errorCode) }, ...n });
  let d = `${e.httpStatus ?? "?"}${e.errorCode !== void 0 ? ` ${e.errorCode}` : ""}`;
  (0, import_chunk_w578pjby.t)(`[servedCatalog] primary: served rows unavailable (${(0, import_chunk_bzyb60p0.uci)(e.fetchReason)}: ${d}); using compiled behavior`);
}
function O(e, o, n, a, s) {
  (0, import_chunk_865at33z.AVi)(e, { ...a !== void 0 && N(a), ...s !== void 0 && { organizationUuid: s } }), (0, import_chunk_cqa9hrgx.l)("model_catalog_primary", e, { ...G(e), ...n }), (0, import_chunk_w578pjby.t)(`[servedCatalog] primary: served rows unavailable (${o}); using compiled behavior`);
}
function G(e) {
  return {};
}
var I = 2e3, _e = 1500;
async function J({ headless: e }) {
  let o = {};
  try {
    let n = (0, import_chunk_865at33z.b7e)();
    if (n !== void 0 && !(0, import_chunk_9nabvees.Ijo)(n)) return;
    let a = !e || (0, import_chunk_9nabvees.eGr)(), s = a && (0, import_chunk_zhr7rpv7.Ss)(), r = !s ? 0 : e ? _e : I, d = Date.now() + r, c = ke() && (0, import_chunk_9nabvees.tGr)() === "primary" && await Re(d), g = (0, import_chunk_9nabvees.Z2r)();
    if (g !== null) {
      if (c && g === "essential_traffic") (0, import_chunk_cqa9hrgx.l)("model_catalog_published", "essential_traffic", b(e, o, c)), (0, import_chunk_w578pjby.t)("[publishedCatalog] primary: nonessential traffic is disabled and the server-managed catalog source is not yet confirmed by the server; published path off this session");
      return;
    }
    let h = (0, import_chunk_9nabvees.sJn)(), v = (0, import_chunk_pkz4wjtb.T0t)();
    if (!v.ok) {
      if (h === "primary") _(v.reason, "configured catalog URL is unusable", b(e, o, c));
      return;
    }
    let { source: C } = v;
    if (C.trust.kind === "untrusted") {
      if (h === "primary") _(C.trust.reason, `custom source is untrusted (${C.trust.reason})`, b(e, o, c));
      return;
    }
    if (h !== "primary") {
      await (0, import_chunk_bzyb60p0.UJo)(C.cacheKey);
      return;
    }
    let P = (0, import_chunk_bzyb60p0.s5)(), p = await M(C), m = p === void 0 ? "nothing cached, no request" : "cache", w, y = false, F = s || C.kind === "file", T = (e || !s) && C.kind === "file", Q = () => T ? I : Math.max(0, d - Date.now()), Z = T ? I : r, E = s && C.kind !== "file" ? (0, import_chunk_bzyb60p0.kZt)(C.cacheKey) : null, D = p === void 0 ? F : (0, import_chunk_bzyb60p0.EZt)(p) && (e ? T : F), B = async (S) => {
      let k = Y(E, a), U = await we(k.refresh, { waitMs: Q(), budgetMs: Z, label: S });
      if (U.outcome === void 0) await k.countSpentWait();
      return U;
    };
    if (D && E !== null && (e ? !await (0, import_chunk_bzyb60p0.ort)(E) : await (0, import_chunk_bzyb60p0.iVa)(E))) {
      if (y = true, o = { held_off: true }, !e) Y(E, a).refresh.catch((S) => (0, import_chunk_k449cc64.i)(S));
      m = `${p === void 0 ? "nothing cached" : "stale cache"}, ${e ? "no request: a recent headless request failed and its hold-off has not passed" : "not waiting: the last request timed out or failed recently, so this one runs in the background"}`;
    } else if (D && p === void 0) {
      let S = await B("published catalog first fetch");
      p = S.outcome?.entry, w = S.fetchStatus, o = S.fields, m = `fetch:${w} after ${S.waitMs}ms`;
    } else if (D && p !== void 0) {
      let S = await B("published catalog stale refresh");
      w = S.fetchStatus, o = S.fields, p = S.outcome?.entry ?? p, m = `stale cache: waited ${S.waitMs}ms for refresh \u2192 ${(0, import_chunk_bzyb60p0.EZt)(p) ? "kept stale" : "refreshed"} (fetch:${w})`;
    }
    if ((0, import_chunk_865at33z.b7e)() !== n) return;
    let L = p?.document ?? (0, import_chunk_865at33z.cRr)();
    if (L !== null && (0, import_chunk_865at33z.LAl)(L, (0, import_chunk_865at33z.Hxe)((0, import_chunk_zhr7rpv7.ve)()))) {
      _("publisher_hold", "the publisher holds this backend on compiled behavior", b(e, o, c));
      return;
    }
    let { catalog: R, kind: A } = Pe(p, P);
    if (R === null) {
      if (p !== void 0) _("surface_not_served", "document serves this surface no rows", b(e, o, c));
      else if (y) _(e ? "headless_held_off" : "held_off", `no seed, ${m}`, b(e, o, c));
      else if (F) _(`${e && E !== null ? "headless_" : ""}fetch_${w ?? "none"}`, `nothing cached and no seed, ${m} produced no rows`, b(e, o, c));
      else _(a ? "deferred_no_cache" : "headless_no_cache", `nothing cached, ${a ? "a third-party launch does not wait for the fetch" : "this headless launch may not fetch"}, no seed`, b(e, o, c));
      return;
    }
    if (A === "seed") {
      let S = (0, import_chunk_865at33z.$Al)(R);
      if (S !== null) {
        _("seed_stale", `${m}; compiled seed resolves ${S.family} to ${S.seed}, this build to ${S.compiled}`, b(e, o, c));
        return;
      }
      let k = (0, import_chunk_zhr7rpv7.Ss)() ? null : ye(R);
      if (k !== null) {
        _("seed_moves_model", `compiled seed would move ${k.what} to ${k.seed}${k.compiled === void 0 ? "" : `, this build's table says ${k.compiled}`}`, b(e, o, c));
        return;
      }
    }
    if ((0, import_chunk_865at33z.VTt)(R).length === 0) {
      _((0, import_chunk_865at33z.Zlt)(R).length === 0 ? "no_selectable_rows" : "no_offered_rows", `published rows hold no model this build offers (${(0, import_chunk_865at33z.VT)(R).length} rows via ${A})`, b(e, o, c));
      return;
    }
    let W = p !== void 0 && (0, import_chunk_bzyb60p0.EZt)(p);
    if ((0, import_chunk_865at33z.vCs)(R, p?.fetchedAt, W), A === "seed") (0, import_chunk_cqa9hrgx.l)("model_catalog_published", "seed", b(e, o, c));
    else if (c) (0, import_chunk_cqa9hrgx.l)("model_catalog_published", "remote_settings_unconfirmed", b(e, o, false));
    else (0, import_chunk_cqa9hrgx.u)("model_catalog_published", b(e, o, false));
    (0, import_chunk_w578pjby.t)(`[publishedCatalog] primary: using ${A} rows (${(0, import_chunk_865at33z.VT)(R).length} rows via ${m}${W ? ", stale" : ""})`);
  } catch (n) {
    (0, import_chunk_k449cc64.i)(n);
    let a = (0, import_chunk_865at33z.b7e)();
    if ((a === void 0 || (0, import_chunk_9nabvees.Ijo)(a)) && (0, import_chunk_9nabvees.sJn)() === "primary") _("exception", "exception", b(e, o, false));
  }
}
function Y(e, o) {
  let n = Ajo({ allowNetwork: o });
  if (e === null) return { refresh: n, countSpentWait: () => Promise.resolve() };
  let a = Promise.resolve(), s = false, r = false;
  return { refresh: n.then(async (g) => {
    s = true;
    let h = (0, import_chunk_bzyb60p0.gci)(g);
    return a = a.then(async () => {
      if (!r || g.fetchStatus === "ok" || g.fetchStatus === "not_modified") await (0, import_chunk_bzyb60p0.pZr)(e, g, h);
    }), await a, g;
  }), countSpentWait: () => (a = a.then(async () => {
    if (!s) r = true, await (0, import_chunk_bzyb60p0.Jar)(e, "back_off", Date.now(), true);
  }), a) };
}
async function we(e, { waitMs: o, budgetMs: n, label: a }) {
  let s = performance.now(), r = await (0, import_chunk_5appeerh.qt)(e, o, a).catch(() => {
    return;
  }), d = r === void 0 ? "timeout" : r.fetchStatus, c = Math.round(performance.now() - s);
  return { outcome: r, fetchStatus: d, waitMs: c, fields: { fetch_status: (0, import_chunk_78g0060s.f)(d), ...r?.fetchReason !== void 0 && { fetch_reason: (0, import_chunk_78g0060s.f)(r.fetchReason) }, ...r?.httpStatus !== void 0 && { http_status: r.httpStatus }, ...r?.fetchMs !== void 0 && { fetch_ms: r.fetchMs }, wait_ms: c, wait_budget_ms: n, wait_timed_out: r === void 0 } };
}
async function X() {
  try {
    if ((0, import_chunk_9nabvees.Z2r)() === "policy") return;
    let { hasManagedModelDenies: e } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-yaftxkc2.js")));
    if (!e()) return;
    let o = /* @__PURE__ */ new Set(), n = [];
    for (let s of [(0, import_chunk_pkz4wjtb.T0t)({ ignoreEnvUrl: true }), (0, import_chunk_pkz4wjtb.T0t)()]) {
      if (!s.ok || o.has(s.source.cacheKey)) continue;
      o.add(s.source.cacheKey);
      let r = await M(s.source);
      if (r !== void 0) n.push(r.document);
    }
    let a = (0, import_chunk_zhr7rpv7.vr)();
    a.publishedDenyDocuments = n, a.publishedRowNames = void 0;
  } catch (e) {
    (0, import_chunk_k449cc64.i)(e);
  }
}
function ye(e) {
  let o = (0, import_chunk_zhr7rpv7.ve)();
  for (let s of [...import_chunk_865at33z.zTt, "fable"]) {
    let r = (0, import_chunk_865at33z.MVi)(e, s);
    if (r === void 0) continue;
    let d = (0, import_chunk_zhr7rpv7.d1e)(s, (0, import_chunk_865at33z.Hxe)(o));
    if (d === void 0 || (0, import_chunk_865at33z.Lxe)(r) !== (0, import_chunk_865at33z.Lxe)(d) || z(r) !== z(d)) return { what: `the ${s} alias`, seed: r, compiled: d };
  }
  let n = (0, import_chunk_865at33z.mzt)() ? (0, import_chunk_865at33z.DCs)(e, "default") : {}, a = n.perProvider ?? n.everywhere ?? (o === "firstParty" ? e.state?.model : void 0);
  return a === void 0 ? null : { what: "the Default", seed: a, compiled: void 0 };
}
function z(e) {
  return /\[1m\]/i.test(e);
}
function Pe(e, o) {
  if (e !== void 0) return { catalog: (0, import_chunk_865at33z.dGn)(e.document, o), kind: e.source };
  return { catalog: (0, import_chunk_865at33z.FAl)(o), kind: "seed" };
}
async function Re(e) {
  if (Fe()) {
    let o = e - Date.now();
    if (o > 0) (0, import_chunk_w578pjby.t)(`[publishedCatalog] waiting up to ${o}ms for server-managed settings to be confirmed`), await Ee(o);
  }
  if (!(0, import_chunk_pkz4wjtb.Dsr)()) return false;
  return (0, import_chunk_w578pjby.t)("[publishedCatalog] server-managed settings name managed model-catalog source settings the server has not confirmed; deciding this session without them"), true;
}
function ke() {
  let e = (0, import_chunk_9nabvees.Z2r)();
  return e === null || e === "essential_traffic" && ((0, import_chunk_pkz4wjtb.$Wa)() || (0, import_chunk_xcgcdx61.Yb)() === null);
}
function Fe() {
  if (!(0, import_chunk_42nfpkzm.Mp)() || (0, import_chunk_xcgcdx61.nc)() || (0, import_chunk_xcgcdx61.Tm)() !== void 0) return false;
  return (0, import_chunk_pkz4wjtb.Dsr)() || (0, import_chunk_xcgcdx61.Yb)() === null;
}
async function Ee(e) {
  let o = () => {
  }, n = new Promise((a) => {
    if (o = (0, import_chunk_xcgcdx61.pce)((s) => {
      if (s !== void 0) a();
    }), (0, import_chunk_xcgcdx61.Tm)() !== void 0) a();
  });
  try {
    await (0, import_chunk_5appeerh.me)(n, e);
  } finally {
    o();
  }
}
function b(e, o, n) {
  return { auth_kind: (0, import_chunk_78g0060s.f)((0, import_chunk_bzyb60p0.OLt)()), headless: e, ...o, ...n && { remote_settings_unconfirmed: true } };
}
function _(e, o, n) {
  (0, import_chunk_865at33z.vCs)(null), (0, import_chunk_cqa9hrgx.l)("model_catalog_published", e, n), (0, import_chunk_w578pjby.t)(`[publishedCatalog] primary: published rows unavailable (${o}); using compiled behavior`);
}
function V2r({ headless: e }) {
  let o = (0, import_chunk_zhr7rpv7.vr)();
  if (o.catalogDecision === void 0) o.catalogDecision = Oe(e).catch((n) => (0, import_chunk_k449cc64.i)(n));
  return o.catalogDecision;
}
async function Oe(e) {
  await H({ headless: e }), await J({ headless: e }), await X(), (0, import_chunk_zhr7rpv7.v4n)((o) => (0, import_chunk_865at33z.Bx)(o, (0, import_chunk_865at33z.Tu)(o)) || (0, import_chunk_865at33z.rz)((0, import_chunk_865at33z.Tu)(o)) !== void 0);
}
