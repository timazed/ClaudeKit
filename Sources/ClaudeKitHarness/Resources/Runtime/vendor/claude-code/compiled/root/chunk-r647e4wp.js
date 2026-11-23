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
var chunk_r647e4wp_exports = {};
__export(chunk_r647e4wp_exports, {
  Iqs: () => Iqs,
  K2l: () => K2l
});
module.exports = __toCommonJS(chunk_r647e4wp_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_zddv3vvj = require("/$bunfs/root/chunk-zddv3vvj.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_54j6k3fn = require("/$bunfs/root/chunk-54j6k3fn.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_ha5g7ewh = require("/$bunfs/root/chunk-ha5g7ewh.js");
var import_chunk_xs8rc77k = require("/$bunfs/root/chunk-xs8rc77k.js");
var R = 5e3, C = [2e3, 8e3, 3e4];
async function K2l(o = /* @__PURE__ */ new Set(), s, g) {
  let h = /* @__PURE__ */ new Set(), y = (0, import_chunk_865at33z.khe)();
  if (g === void 0 && y) return h;
  try {
    let k = g ?? await (0, import_chunk_zddv3vvj.PBt)();
    if (k.length === 0) return h;
    let r = await (0, import_chunk_bzyb60p0.Bd)(s), M = (0, import_chunk_bzyb60p0.tN)(), n = Object.keys((0, import_chunk_2yx6c1y2.KR)()?.extraKnownMarketplaces ?? {}).map(import_chunk_xcgcdx61.Kt), p = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map();
    for (let c of k) {
      let { name: b, marketplace: e } = (0, import_chunk_xcgcdx61.Kn)(c), w = e && Object.hasOwn(r, e) ? r[e] : void 0;
      if (!b || !e || !w || (0, import_chunk_xcgcdx61.fL)(e.toLowerCase()) || o.has(e) || w.source.source === "settings" || (0, import_chunk_xcgcdx61.hS)(w.source) || !(0, import_chunk_wj4me9k5.wm)(w.source) || (0, import_chunk_bzyb60p0.vS)(w.installLocation) !== void 0 || (g === void 0 ? !(0, import_chunk_xcgcdx61.$Fe)(e, w, (0, import_chunk_bzyb60p0.Sfe)(e, M)) : !n.includes((0, import_chunk_xcgcdx61.Kt)(e)) && (y || ((0, import_chunk_bzyb60p0.Sfe)(e, M) ?? w.autoUpdate) === false))) continue;
      let S = P.get(e);
      if (S === void 0) S = await (0, import_chunk_bzyb60p0.AT)(e, s), P.set(e, S);
      if (S === null) continue;
      if (!S.plugins.some((_) => _.name === b)) {
        let _ = p.get(e);
        if (_) _.push(c);
        else p.set(e, [c]);
      }
    }
    if (p.size === 0) return h;
    if ((0, import_chunk_w578pjby.t)(`refresh-on-miss: ${p.size} marketplace(s) have enabled plugins missing from local catalog; refreshing`), g === void 0) await (0, import_chunk_5appeerh.K)(Math.floor(Math.random() * R), void 0, { unref: true });
    for (let [c, b] of p) {
      let e;
      try {
        await (0, import_chunk_bzyb60p0.Eq)(c, s, void 0, { skipIfRecent: true });
      } catch (_) {
        e = _, (0, import_chunk_w578pjby.t)(`refresh-on-miss: failed to refresh marketplace '${c}': ${(0, import_chunk_jv7av99m.d)(_)}`, { level: "warn" });
      }
      let w = e !== void 0 ? null : await (0, import_chunk_bzyb60p0.AT)(c, s), S = false;
      for (let _ of b) {
        let { name: E } = (0, import_chunk_xcgcdx61.Kn)(_), A = w !== null && w.plugins.some((O) => O.name === E);
        S ||= A;
        let I = e !== void 0 ? "refresh_failed" : A ? "resolved" : "still_missing";
        (0, import_chunk_w578pjby.t)(`refresh-on-miss: ${_} \u2192 ${I}`), (0, import_chunk_y53wbr8a.a)("tengu_plugin_refresh_on_miss", { outcome: (0, import_chunk_78g0060s.f)(I), ...e !== void 0 && { error_kind: (0, import_chunk_78g0060s.f)((0, import_chunk_54j6k3fn.wpe)(e)) }, ...(0, import_chunk_54j6k3fn.aj)(_) });
      }
      if (S) h.add(c);
    }
  } catch (k) {
    (0, import_chunk_w578pjby.t)(`refresh-on-miss: unexpected error: ${(0, import_chunk_jv7av99m.d)(k)}`, { level: "warn" });
  }
  return h;
}
async function z(o, s = C) {
  let g = /* @__PURE__ */ new Set();
  try {
    let { errors: h } = await (0, import_chunk_bzyb60p0.pi)(o), y = new Set(h.flatMap((n) => (n.type === "marketplace-load-failed" || n.type === "marketplace-not-found") && (0, import_chunk_mgntjepj.Pxe)(n) ? [n.marketplace] : []));
    if (y.size === 0) return g;
    let k = await (0, import_chunk_bzyb60p0.Bd)(o), r = new Set([...y].filter((n) => Object.hasOwn(k, n))), M = [...s];
    while (r.size > 0) {
      for (let p of [...r]) if (await (0, import_chunk_bzyb60p0.AT)(p, o, { registryEntry: k[p], registryEntryIsSaved: true }) !== null) r.delete(p), g.add(p);
      let n = M.shift();
      if (r.size === 0 || n === void 0) break;
      await (0, import_chunk_5appeerh.K)(n, void 0, { unref: true });
    }
  } catch (h) {
    (0, import_chunk_k449cc64.i)(h);
  }
  return g;
}
async function Iqs(o, s) {
  (0, import_chunk_w578pjby.t)("performBackgroundPluginInstallations called");
  try {
    let g = (0, import_chunk_bzyb60p0.tN)(), h = await (0, import_chunk_bzyb60p0.zf)(s).catch(() => ({})), y = (0, import_chunk_xs8rc77k.Mqs)(g, h), k = [...y.missing, ...y.sourceChanged.map((e) => e.name)];
    if (o.setPendingMarketplaces(k), k.length > 0) (0, import_chunk_w578pjby.t)(`Installing ${k.length} marketplace(s) in background`);
    let r = await (0, import_chunk_xs8rc77k.Xzr)({ storageV5: s, onProgress: (e) => {
      switch (e.type) {
        case "installing":
          o.setMarketplaceStatus(e.name, "installing");
          break;
        case "installed":
          o.setMarketplaceStatus(e.name, "installed");
          break;
        case "failed":
          o.setMarketplaceStatus(e.name, "failed", e.error);
          break;
      }
    } });
    if (r.installed.length > 0 || r.updated.length > 0 || r.failed.length > 0) {
      let e = { installed_count: r.installed.length, updated_count: r.updated.length, failed_count: r.failed.length, up_to_date_count: r.upToDate.length };
      (0, import_chunk_y53wbr8a.a)("tengu_marketplace_background_install", e), (0, import_chunk_42tcgre6.q)("info", "tengu_marketplace_background_install", e);
    }
    let M = await K2l(/* @__PURE__ */ new Set([...r.installed, ...r.updated]), s), n = (0, import_chunk_865at33z.ce)(), p = n.pluginSyncChangeOwed;
    n.pluginSyncChangeOwed = false;
    let P = p || r.installed.length > 0 || M.size > 0, c = await z(s, P ? [] : C), b = (0, import_chunk_bzyb60p0.Mxn)() && (await (0, import_chunk_bzyb60p0.pi)(s)).errors.some(import_chunk_mgntjepj.Sfn);
    if (P || c.size > 0 || b) {
      (0, import_chunk_bzyb60p0.yfe)(), (0, import_chunk_w578pjby.t)(`Auto-refreshing plugins (installed: ${r.installed.length}, stale-refreshed: ${M.size}, missed at session start: ${c.size}, copy held out: ${b})`);
      try {
        if (await (0, import_chunk_ha5g7ewh.c6)(o, s, void 0, { applyStagedInstalls: P }), c.size > 0) (0, import_chunk_y53wbr8a.a)("tengu_plugin_load_refresh_window_recovered", { marketplace_count: c.size });
      } catch (e) {
        (0, import_chunk_w578pjby.t)(`Auto-refresh failed, falling back to needsRefresh: ${e}`, { level: "error" }), (0, import_chunk_bzyb60p0.N_)("performBackgroundPluginInstallations: auto-refresh failed"), o.markNeedsRefresh("not-loaded"), (0, import_chunk_cqa9hrgx.l)("plugin_marketplace_bg_install", "auto_refresh_failed");
        return;
      }
    } else if (r.updated.length > 0) (0, import_chunk_bzyb60p0.yfe)(), (0, import_chunk_bzyb60p0.N_)("performBackgroundPluginInstallations: marketplaces reconciled"), o.markNeedsRefresh();
    if (r.failed.length > 0) (0, import_chunk_cqa9hrgx.l)("plugin_marketplace_bg_install", "reconcile_partial_failure");
    else (0, import_chunk_cqa9hrgx.u)("plugin_marketplace_bg_install");
  } catch (g) {
    (0, import_chunk_k449cc64.i)(g), (0, import_chunk_cqa9hrgx.m)("plugin_marketplace_bg_install", "reconcile_error");
  }
}
