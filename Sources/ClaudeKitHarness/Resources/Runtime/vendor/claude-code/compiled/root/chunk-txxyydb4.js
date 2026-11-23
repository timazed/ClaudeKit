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
var chunk_txxyydb4_exports = {};
__export(chunk_txxyydb4_exports, {
  b5t: () => b5t,
  fga: () => fga,
  m$o: () => m$o,
  pga: () => pga,
  rBr: () => rBr,
  rmt: () => rmt,
  tWs: () => tWs
});
module.exports = __toCommonJS(chunk_txxyydb4_exports);
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_54j6k3fn = require("/$bunfs/root/chunk-54j6k3fn.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_zddv3vvj = require("/$bunfs/root/chunk-zddv3vvj.js");
var import_chunk_6xae35jp = require("/$bunfs/root/chunk-6xae35jp.js");
var import_chunk_jhdsf4g3 = require("/$bunfs/root/chunk-jhdsf4g3.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_wxn0h5vf = require("/$bunfs/root/chunk-wxn0h5vf.js");
var import_chunk_p3qkcp6e = require("/$bunfs/root/chunk-p3qkcp6e.js");
var import_chunk_keytq914 = require("/$bunfs/root/chunk-keytq914.js");
var import_chunk_cvbctnmz = require("/$bunfs/root/chunk-cvbctnmz.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_path = require("path");
async function rmt() {
  await (0, import_chunk_865at33z.ce)().landing.land?.();
}
async function rBr() {
  let n = await Promise.all(["installed_plugins.json", "known_marketplaces.json"].map((o) => (0, import_promises.lstat)((0, import_path.join)((0, import_chunk_wj4me9k5.Mc)(), o)).then((c) => c.isSymbolicLink() || c.nlink > 1, (c) => !(0, import_chunk_jv7av99m.J)(c))));
  return (0, import_chunk_865at33z.ce)().landing.sawLinkedRecords ||= n.includes(true);
}
var j = 6e5;
function fga(n) {
  let o = (0, import_chunk_865at33z.ce)();
  if (o.autoUpdateListener = n, o.pendingAutoUpdateNotification !== null) n(o.pendingAutoUpdateNotification.updated, o.pendingAutoUpdateNotification.blocked, o.pendingAutoUpdateNotification.reresolved, o.pendingAutoUpdateNotification.announce), o.pendingAutoUpdateNotification = null;
  return () => {
    o.autoUpdateListener = null;
  };
}
async function x(n) {
  let o = await (0, import_chunk_bzyb60p0.zf)(n), c = (0, import_chunk_bzyb60p0.tN)(), r = /* @__PURE__ */ new Set();
  for (let [u, m] of Object.entries(o)) {
    if (!(0, import_chunk_wj4me9k5.wm)(m.source)) continue;
    if ((0, import_chunk_bzyb60p0.Pie)(m.source) && !(0, import_chunk_jhdsf4g3.tNn)()) continue;
    if ((0, import_chunk_xcgcdx61.$Fe)(u, m, (0, import_chunk_bzyb60p0.Sfe)(u, c))) r.add(u.toLowerCase());
    else if ((0, import_chunk_bzyb60p0.kq)((0, import_chunk_ha393e1n.tre)(), u) !== void 0 && (0, import_chunk_bzyb60p0.etn)(u, m.source)) (0, import_chunk_w578pjby.t)(`Plugin autoupdate: marketplace ${(0, import_chunk_tp3c5q2s.Ft)(u, 200)}, which managed settings declare, has auto-update off, so this pass neither refreshes it nor updates its plugins`);
  }
  if ((!(0, import_chunk_bzyb60p0.$no)() || (0, import_chunk_bzyb60p0.Sfe)(import_chunk_xcgcdx61.qn, c)) && !r.has(import_chunk_xcgcdx61.qn) && !Object.hasOwn(o, import_chunk_xcgcdx61.qn) && (0, import_chunk_bzyb60p0.pQ)() && (0, import_chunk_wj4me9k5.wm)({ source: "pluginDirectory" })) {
    if (Object.keys(((0, import_chunk_m15w38ag.ne)() && n !== void 0 ? await (0, import_chunk_bzyb60p0.Sf)(n) : (0, import_chunk_bzyb60p0.Pk)()).plugins).some((m) => m.endsWith(`@${import_chunk_xcgcdx61.qn}`))) r.add(import_chunk_xcgcdx61.qn);
  }
  if ((0, import_chunk_bzyb60p0.$no)()) (0, import_chunk_w578pjby.t)(`Plugin autoupdate: the host lets only marketplaces that managed settings mark update: ${r.size} of ${Object.keys(o).length}`);
  return r;
}
async function F(n, o, c, r, u) {
  let m = false, g = false, v = null, y = null, C = false, k = false, w = false, b = false;
  for (let p of (0, import_chunk_4smdap7r.M)(o.map((e) => e.scope))) try {
    let e = await (0, import_chunk_p3qkcp6e.KKe)(n, p, r ?? {}, u);
    switch (e.outcome) {
      case "updated":
        if (m = true, (0, import_chunk_w578pjby.t)(`Plugin autoupdate: updated ${n} from ${e.oldVersion} to ${e.newVersion}`), e.claudeCodeRangeMiss !== void 0) y = { type: "autoupdate-blocked-by-engine-range", source: n, plugin: (0, import_chunk_xcgcdx61.Kn)(n).name, heldAt: e.newVersion, newVersion: e.versionOutOfRange, miss: e.claudeCodeRangeMiss };
        break;
      case "skipped": {
        if ((0, import_chunk_w578pjby.t)(`Plugin autoupdate: ${n} ${e.message}`), e.skipReason === "entry_helper_deferred") y = { type: "autoupdate-deferred-entry-helper", source: n, plugin: (0, import_chunk_xcgcdx61.Kn)(n).name, message: e.message };
        else if (e.claudeCodeRangeMiss !== void 0) y = { type: "autoupdate-blocked-by-engine-range", source: n, plugin: (0, import_chunk_xcgcdx61.Kn)(n).name, heldAt: e.oldVersion, newVersion: e.newVersion, miss: e.claudeCodeRangeMiss };
        else if (e.blockedBy && e.blockedBy.length > 0) {
          let h = e.blockedBy.map((P) => (0, import_chunk_xcgcdx61.Kn)(P).name), s = e.blockedBy.filter((P) => c.has(P)).map((P) => (0, import_chunk_xcgcdx61.Kn)(P).name);
          y = { type: "autoupdate-blocked-by-pinner", source: n, plugin: (0, import_chunk_xcgcdx61.Kn)(n).name, heldAt: e.oldVersion, blockedBy: h, disabledPinners: s };
        }
        break;
      }
      case "failed":
        if (C = e.failureCode === "not_found" || e.failureCode === "not_cached", k ||= e.failureCode === "directory_identity_changed", w ||= e.failureCode === "directory_listing_not_installable", b ||= e.failureCode === "directory_unavailable" || e.failureCode === "marketplace_policy_blocked" || e.failureCode === "directory_binding_unreadable", e.failureCode === "command_source_skipped") v = n;
        else if (e.failureCode === "entry_helper_disabled_by_policy" || e.failureCode === "entry_helper_remote_policy_unconsented" || e.failureCode === "entry_helper_organization_unanswered" || e.failureCode === "plugin_policy_blocked" || e.failureCode === "command_source_refused" && ((0, import_chunk_wj4me9k5.bj)() || !(0, import_chunk_wj4me9k5.Tcn)())) y = { type: "autoupdate-disabled-by-policy", source: n, plugin: (0, import_chunk_xcgcdx61.Kn)(n).name, message: e.message };
        else if (e.failureCode === "entry_helper_not_inlined") y = { type: "generic-error", source: n, plugin: (0, import_chunk_xcgcdx61.Kn)(n).name, error: e.message }, g = true;
        else if (e.failureCode !== "command_source_inactive") g = true;
        (0, import_chunk_w578pjby.t)(`Plugin autoupdate: failed to update ${n}: ${e.message}`, { level: "warn" });
        break;
      case "up_to_date":
        break;
    }
  } catch (e) {
    g = true, (0, import_chunk_w578pjby.t)(`Plugin autoupdate: error updating ${n}: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "warn" });
  }
  if (y?.type === "autoupdate-blocked-by-engine-range") (0, import_chunk_cqa9hrgx.l)("plugin_engine_range", m ? "autoupdate_older_version" : "autoupdate_held");
  let _ = g && !C && !k && !w && !b && y === null && n.endsWith(`@${import_chunk_xcgcdx61.qn}`);
  if (_) y = { type: "generic-error", source: n, plugin: (0, import_chunk_xcgcdx61.Kn)(n).name, error: 'The Anthropic Directory lists a different commit, but the background update failed, so this plugin is still on the old one. Choose "Update now" in /plugin \u2192 Installed to retry and see the error' };
  return { updated: m ? n : null, blocked: y, failed: g, directoryStuck: _, directoryIdentityChanged: k, commandSourceSkipped: v };
}
async function tWs(n, o = /* @__PURE__ */ new Set(), { skipCommandSources: c = false } = {}, r) {
  let u = (0, import_chunk_m15w38ag.ne)() && r !== void 0 ? await (0, import_chunk_bzyb60p0.Sf)(r) : (0, import_chunk_bzyb60p0.Pk)(), m = Object.keys(u.plugins);
  if (m.length === 0) return { updated: [], blocked: [], updateFailedCount: 0, commandSourceSkipped: [], directory: { updated: 0, updateFailed: 0, stuck: 0, identityChanged: 0 } };
  let { disabled: g } = await (0, import_chunk_bzyb60p0.pi)(r), v = new Set(g.map((p) => p.source));
  if (n.has(import_chunk_xcgcdx61.qn)) await (0, import_chunk_wxn0h5vf.H1t)(Object.entries(u.plugins));
  let y = await Promise.allSettled(m.map(async (p) => {
    let { marketplace: e } = (0, import_chunk_xcgcdx61.Kn)(p);
    if (!e || !n.has(e.toLowerCase())) return null;
    if (o.has(p)) return null;
    let h = u.plugins[p];
    if (!h || h.length === 0) return null;
    let s = (0, import_chunk_bzyb60p0.fCe)(h);
    if (s.length === 0) return null;
    return F(p, s, v, c ? { skipCommandSources: true } : void 0, r);
  })), C = [], k = [], w = [], b = 0, _ = { updated: 0, updateFailed: 0, stuck: 0, identityChanged: 0 };
  for (let [p, e] of y.entries()) {
    if (e.status !== "fulfilled" || e.value === null) continue;
    let h = (0, import_chunk_wxn0h5vf.jfe)(m[p] ?? "");
    if (e.value.updated !== null) {
      if (C.push(e.value.updated), h) _.updated++;
    }
    if (e.value.blocked !== null) k.push(e.value.blocked);
    if (e.value.failed) {
      if (b++, h) _.updateFailed++;
    }
    if (e.value.directoryStuck) _.stuck++;
    if (e.value.directoryIdentityChanged) _.identityChanged++;
    if (e.value.commandSourceSkipped !== null) w.push(e.value.commandSourceSkipped);
  }
  return { updated: C, blocked: k, updateFailedCount: b, commandSourceSkipped: w, directory: _ };
}
async function I(n, o) {
  let c = { attemptedCount: 0, commandSourced: /* @__PURE__ */ new Set(), updated: [], blocked: [], failedCount: 0 }, r = (0, import_chunk_wj4me9k5.bj)(), u = !(0, import_chunk_zddv3vvj.GFn)();
  if (r || u) (0, import_chunk_w578pjby.t)(r ? `Plugin autoupdate: command-source refresh ${(0, import_chunk_wj4me9k5.cv)() === "unanswered" ? "held for the organization's settings, not yet read" : "disabled by managed settings"} (still excluding command-sourced plugins from the regular pass)` : "Plugin autoupdate: command-source refresh disabled by tengu_plugin_command_source_refresh (still excluding command-sourced plugins from the regular pass)");
  try {
    let m = (0, import_chunk_m15w38ag.ne)() && n !== void 0 ? await (0, import_chunk_bzyb60p0.Sf)(n) : (0, import_chunk_bzyb60p0.Pk)(), g = /* @__PURE__ */ new Map();
    for (let [k, w] of Object.entries(m.plugins)) {
      let b = (0, import_chunk_bzyb60p0.fCe)(w ?? []), { name: _, marketplace: p } = (0, import_chunk_xcgcdx61.Kn)(k);
      if (b.length === 0 || !_ || !p) continue;
      let e = g.get(p) ?? [];
      e.push({ pluginId: k, name: _, installations: b }), g.set(p, e);
    }
    let v, y = /* @__PURE__ */ new Set(), C = g.size > 0 ? await (0, import_chunk_bzyb60p0.Bd)(n) : {};
    for (let [k, w] of g) {
      let b = C[k];
      if ((0, import_chunk_wj4me9k5.NU)(b?.source)) {
        for (let { pluginId: p, installations: e } of w) if (e.some((h) => h.sourceCommand !== void 0)) c.commandSourced.add(p);
        continue;
      }
      let _ = await (0, import_chunk_bzyb60p0.AT)(k, n);
      if (!_) continue;
      for (let { pluginId: p, name: e, installations: h } of w) {
        let s = _.plugins.find((R) => R.name === e);
        if (!s || typeof s.source === "string" || s.source.source !== "command") continue;
        if (c.commandSourced.add(p), r || u) continue;
        if (!v) v = new Set(await (0, import_chunk_zddv3vvj.PBt)()), y = new Set((await (0, import_chunk_bzyb60p0.pi)(n)).disabled.map((R) => R.source));
        if (!v.has(p) || (0, import_chunk_wj4me9k5.lS)(p)) {
          (0, import_chunk_w578pjby.t)(`Plugin autoupdate: not re-resolving ${p} (disabled or blocked by policy)`);
          continue;
        }
        if ((o.beganUnclaimed || (0, import_chunk_f9x2f6cx.JM)()) && (!o.beganParked || !(0, import_chunk_f9x2f6cx.Yy)() || h.some((R) => (0, import_chunk_bzyb60p0.D4e)(p, R.installPath)))) {
          (0, import_chunk_w578pjby.t)(`Plugin autoupdate: not re-resolving ${p}: this pass began while this process was a pre-started spare with no session folder, and the plugin is the repository's (or a claim has begun since, so that can no longer be told)`);
          continue;
        }
        let P = (0, import_chunk_zddv3vvj.Y5)(s.source), O = h.filter((R) => R.sourceCommand !== P);
        if (O.length > 0) {
          let R = O.every((E) => E.sourceCommand === void 0), N = (0, import_chunk_4smdap7r.M)(O.map((E) => E.scope)).map((E) => (0, import_chunk_xcgcdx61.xu)("plugin update", p, `--scope ${E}`)).filter((E) => E !== null).map((E) => `\`${E}\``);
          (0, import_chunk_w578pjby.t)(`Plugin autoupdate: not re-resolving ${p}: marketplace command differs from the accepted one`, { level: "warn" }), c.blocked.push({ type: "generic-error", source: p, plugin: e, error: (R ? `${(0, import_chunk_tp3c5q2s.Ft)(e, 200)}'s marketplace entry now installs it by running a command` : `${(0, import_chunk_tp3c5q2s.Ft)(e, 200)}'s marketplace entry changed the command it runs`) + ` (\`${(0, import_chunk_tp3c5q2s.Ft)(s.source.command, import_chunk_xcgcdx61.Bgn)}${s.source.mode === "link" ? " [mode: link]" : ""}\`). It was not re-run in the background; ${N.length > 0 ? `run ${N.join(" and ")}` : "an explicit per-scope plugin update is needed"} to review and accept it.` });
        }
        let L = h.filter((R) => R.sourceCommand === P);
        if (L.length === 0) continue;
        c.attemptedCount++, (0, import_chunk_w578pjby.t)(`Plugin autoupdate: re-resolving command-sourced plugin ${p}`);
        let A = await F(p, L, y, { skipMarketplaceRefresh: true }, n);
        if (A.updated !== null) c.updated.push(A.updated);
        if (A.blocked !== null) c.blocked.push(A.blocked);
        if (A.failed) c.failedCount++;
      }
    }
  } catch (m) {
    (0, import_chunk_w578pjby.t)(`Plugin autoupdate: command-source refresh failed: ${(0, import_chunk_jv7av99m.d)(m)}`, { level: "warn" });
  }
  return c;
}
function b5t(n, o, c = [], { announce: r = true } = {}) {
  if (n.length === 0 && o.length === 0) return;
  let u = (0, import_chunk_865at33z.ce)();
  if (u.autoUpdateListener) u.autoUpdateListener(n, o, c, r);
  else {
    let m = u.pendingAutoUpdateNotification;
    u.pendingAutoUpdateNotification = { updated: (0, import_chunk_4smdap7r.M)([...m?.updated ?? [], ...n]), blocked: [...m?.blocked ?? [], ...o], reresolved: (0, import_chunk_4smdap7r.M)([...m?.reresolved ?? [], ...c]), announce: (m?.announce ?? false) || r };
  }
}
function G() {
  return { attemptedCount: 0, commandSourced: /* @__PURE__ */ new Set(), updated: [], blocked: [], failedCount: 0 };
}
function m$o(n) {
  let o = (0, import_chunk_865at33z.ce)(), c = (0, import_chunk_bzyb60p0.qJr)();
  return o.commandSourceReresolve ??= (async () => {
    if ((0, import_chunk_t7fzcstv.bt)()) return G();
    if ((0, import_chunk_wj4me9k5.cv)() === "unanswered") await import_chunk_cvbctnmz.oI.wait?.();
    let r = (0, import_chunk_wj4me9k5.cv)() === "unanswered", u = await I(n, c);
    if (r) o.commandSourceReresolve = null;
    if (r && u.commandSourced.size > 0) o.organizationAsk.isCommandHeld = true, o.organizationAsk.heldReresolve = () => m$o(n).then(() => {
    });
    if (u.attemptedCount > 0) (0, import_chunk_6xae35jp.rvt)();
    try {
      b5t(u.updated, u.blocked, u.updated);
    } catch (m) {
      (0, import_chunk_k449cc64.i)(m);
    }
    return u;
  })(), o.commandSourceReresolve;
}
function pga(n) {
  return (async () => {
    let o = await m$o(n), c = Date.now(), r = { marketplaces_refreshed: 0, marketplace_refresh_failed: 0, marketplace_refresh_policy_skipped: 0, plugins_updated: 0, plugin_update_failed: 0, plugins_blocked_by_pin: 0, plugins_helper_deferred: 0, plugins_policy_blocked: 0, command_plugins_refreshed: o.attemptedCount, command_plugin_refresh_failed: o.failedCount }, u = {};
    u = { directory_updated: 0, directory_update_failed: 0, directory_update_stuck: 0, directory_identity_changed: 0 };
    let m = () => {
      if (o.attemptedCount > 0 || o.failedCount > 0) (0, import_chunk_y53wbr8a.a)("tengu_plugin_autoupdate_pass", { outcome: (0, import_chunk_78g0060s.S)("skipped"), ...r, ...u, duration_ms: Date.now() - c });
    };
    if ((0, import_chunk_865at33z.khe)()) {
      (0, import_chunk_w578pjby.t)("Plugin autoupdate: skipped (auto-updater disabled)"), m();
      return;
    }
    try {
      let g = await x(n);
      if (g.size === 0) {
        m();
        return;
      }
      let v = Math.floor(Math.random() * j);
      await (0, import_chunk_5appeerh.K)(v, void 0, { unref: true }), await rBr(), c = Date.now();
      let y = await Promise.allSettled(Array.from(g).map(async (s) => {
        try {
          return await (0, import_chunk_bzyb60p0.Eq)(s, n, void 0, { isBackground: true }), "refreshed";
        } catch (P) {
          if (P instanceof import_chunk_zddv3vvj.Yf) return (0, import_chunk_w578pjby.t)(`Plugin autoupdate: marketplace ${s} not refreshed (managed policy): ${(0, import_chunk_jv7av99m.d)(P)}`), "policy";
          return (0, import_chunk_w578pjby.t)(`Plugin autoupdate: failed to refresh marketplace ${s}: ${(0, import_chunk_jv7av99m.d)(P)}`, { level: "warn" }), "failed";
        }
      }));
      r.marketplace_refresh_failed = (0, import_chunk_4smdap7r.U)(y, (s) => s.status === "fulfilled" && s.value === "failed"), r.marketplace_refresh_policy_skipped = (0, import_chunk_4smdap7r.U)(y, (s) => s.status === "fulfilled" && s.value === "policy"), r.marketplaces_refreshed = g.size - r.marketplace_refresh_failed - r.marketplace_refresh_policy_skipped, (0, import_chunk_w578pjby.t)("Plugin autoupdate: checking installed plugins");
      let { updated: C, blocked: k, updateFailedCount: w, directory: b } = await tWs(g, o.commandSourced, { skipCommandSources: true }, n);
      r.plugins_updated = C.length, r.plugin_update_failed = w, u = { directory_updated: b.updated, directory_update_failed: b.updateFailed, directory_update_stuck: b.stuck, directory_identity_changed: b.identityChanged }, r.plugins_blocked_by_pin = (0, import_chunk_4smdap7r.U)(k, (s) => s.type === "autoupdate-blocked-by-pinner"), r.plugins_helper_deferred = (0, import_chunk_4smdap7r.U)(k, (s) => s.type === "autoupdate-deferred-entry-helper"), r.plugins_policy_blocked = (0, import_chunk_4smdap7r.U)(k, (s) => s.type === "autoupdate-disabled-by-policy");
      let _ = C.length > 0 || o.updated.length > 0 ? await (0, import_chunk_bzyb60p0.Q$)(n) : void 0, { errors: p } = _ ?? await (0, import_chunk_bzyb60p0.pi)(n), e = await (0, import_chunk_keytq914.Xve)(p.filter((s) => {
        if (s.type !== "dependency-unsatisfied") return false;
        let P = (0, import_chunk_xcgcdx61.Kn)(s.source).marketplace;
        return P !== void 0 && g.has(P.toLowerCase());
      }), n, _);
      if (e.installed.length > 0) (0, import_chunk_w578pjby.t)(`Plugin autoupdate: resolved ${e.installed.length} missing plugin dependencies: ${e.installed.join(", ")}`), C.push(...e.installed);
      let h = new Set(k.filter((s) => s.type === "autoupdate-blocked-by-engine-range").map((s) => s.source));
      if (b5t(C.filter((s) => !h.has(s)), k), await (0, import_chunk_bzyb60p0.pi)(n), C.length > 0) rmt();
      (0, import_chunk_y53wbr8a.a)("tengu_plugin_autoupdate_pass", { outcome: r.marketplace_refresh_failed > 0 || r.plugin_update_failed > 0 ? (0, import_chunk_78g0060s.S)("partial") : (0, import_chunk_78g0060s.S)("ok"), ...r, ...u, duration_ms: Date.now() - c });
    } catch (g) {
      (0, import_chunk_w578pjby.t)(`Plugin autoupdate: failed: ${(0, import_chunk_jv7av99m.d)(g)}`, { level: "error" }), (0, import_chunk_y53wbr8a.a)("tengu_plugin_autoupdate_pass", { outcome: (0, import_chunk_78g0060s.S)("failed"), error_kind: (0, import_chunk_78g0060s.f)((0, import_chunk_54j6k3fn.wpe)(g)), ...r, ...u, duration_ms: Date.now() - c });
    }
  })();
}
