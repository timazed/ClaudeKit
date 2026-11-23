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
var chunk_keytq914_exports = {};
__export(chunk_keytq914_exports, {
  Bqr: () => Bqr,
  PHt: () => PHt,
  S7s: () => S7s,
  Xve: () => Xve,
  y7s: () => y7s
});
module.exports = __toCommonJS(chunk_keytq914_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_zddv3vvj = require("/$bunfs/root/chunk-zddv3vvj.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_fraf4m31 = require("/$bunfs/root/chunk-fraf4m31.js");
var import_chunk_vcnr02by = require("/$bunfs/root/chunk-vcnr02by.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
async function y7s(o, s) {
  return o.some((l) => l.endsWith(`@${import_chunk_xcgcdx61.qn}`)) ? (0, import_chunk_bzyb60p0.fmi)(s) : "not_needed";
}
var I = ["user", "project", "local"];
async function Xve(o, s, l, i) {
  let r = /* @__PURE__ */ new Map();
  for (let e of o) {
    if (e.type !== "dependency-unsatisfied" || e.reason !== "not-found") continue;
    let u = r.get(e.dependency);
    if (!u) u = /* @__PURE__ */ new Set(), r.set(e.dependency, u);
    u.add(e.source);
  }
  if (r.size === 0) return { installed: [], stillUnresolved: [], marketplaceMissing: [] };
  let g = await (0, import_chunk_bzyb60p0.Bd)(s), m = I.filter((e) => !i || (0, import_chunk_xzvhvaa2.rn)((0, import_chunk_xcgcdx61.kD)(e))).map((e) => [e, (0, import_chunk_vcnr02by.E2t)((0, import_chunk_xcgcdx61.kD)(e))]), f = [], n = [], h = [], w = [], c = /* @__PURE__ */ new Map();
  for (let [e, u] of r) {
    let y = b(u, m), a = i ? b(/* @__PURE__ */ new Set([e]), m) : void 0, D = y ?? a ?? "user";
    if (i && ((0, import_chunk_fraf4m31.O0)(e) !== void 0 || a === void 0 && (0, import_chunk_bzyb60p0.Ncr)(e))) {
      n.push(e);
      continue;
    }
    if (i && !(0, import_chunk_xzvhvaa2.rn)((0, import_chunk_xcgcdx61.kD)(D))) {
      if (n.push(e), !(0, import_chunk_bzyb60p0.kmi)(e)) w.push(e);
      continue;
    }
    let k = (0, import_chunk_xcgcdx61.Kn)(e).marketplace, R = k ? (0, import_chunk_bzyb60p0.Zy)(g, k) : void 0;
    if (!k || !R) {
      n.push(e), h.push(e);
      continue;
    }
    if (!(0, import_chunk_wj4me9k5.wm)(R.source)) {
      (0, import_chunk_w578pjby.t)(`resolveMissingDependencies: skipping "${e}" \u2014 marketplace "${k}" is blocked by enterprise policy`), n.push(e);
      continue;
    }
    let P = false;
    for (let p of u) {
      let S = (0, import_chunk_xcgcdx61.Kn)(p).marketplace;
      if (S === k) {
        P = true;
        break;
      }
      if (!S) continue;
      if ((await (0, import_chunk_bzyb60p0.AT)(S, s))?.allowCrossMarketplaceDependenciesOn?.includes(k)) {
        P = true;
        break;
      }
    }
    if (!P) {
      (0, import_chunk_w578pjby.t)(`resolveMissingDependencies: skipping "${e}" \u2014 cross-marketplace dependency not in any declaring marketplace's allowlist`), n.push(e);
      continue;
    }
    try {
      let p = await (0, import_chunk_bzyb60p0.ANt)(e, s, "install");
      if (!p) {
        n.push(e);
        continue;
      }
      let S = p.entry.source;
      if (typeof S === "object" && S.source === "archive" && (0, import_chunk_zddv3vvj.wit)((0, import_chunk_zddv3vvj.Ckt)({ entry: p.entry, archiveUrl: S.url, marketplaceSource: (0, import_chunk_zddv3vvj.GAe)(e, g), trustedSettingsEntryAuth: (0, import_chunk_bzyb60p0.Lrt)((0, import_chunk_zddv3vvj.AR)(e), p.entry.name) }).entry)) {
        (0, import_chunk_w578pjby.t)(`resolveMissingDependencies: skipping "${e}" \u2014 it fetches its archive through an entry headersHelper, which only an explicit install from /plugin may run`), n.push(e);
        continue;
      }
      let E = await (0, import_chunk_bzyb60p0.Xdr)({ pluginId: e, entry: p.entry, scope: D, marketplaceInstallLocation: p.marketplaceInstallLocation, trigger: "dependency-resolution", explicit: false, auto: y !== void 0, requiredByEnabledDependent: true, storageV5: s, installedOnDisk: l });
      if (E.ok) {
        for (let v of E.closure) if (!f.includes(v)) f.push(v);
      } else if ((0, import_chunk_w578pjby.t)(`resolveMissingDependencies: install of "${e}" did not complete (${E.reason})`, { level: "warn" }), n.push(e), E.reason === "engine-range") c.set(e, E.refusal);
    } catch (p) {
      (0, import_chunk_w578pjby.t)(`resolveMissingDependencies: install of "${e}" threw: ${(0, import_chunk_sah8dzn4.ag)((0, import_chunk_jv7av99m.d)(p))}`, { level: "warn" }), n.push(e);
    }
  }
  return { installed: f, stillUnresolved: n, marketplaceMissing: h, ...w.length > 0 && { settingsUnread: w }, ...c.size > 0 && { outsideRange: c } };
}
async function Bqr(o, s, l) {
  let { errors: i } = l ?? await (0, import_chunk_bzyb60p0.pi)(s);
  return i.filter(import_chunk_mgntjepj.zme).filter((r) => r.source === o);
}
async function PHt(o, s, l) {
  let i = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), m = [], f = [], n = /* @__PURE__ */ new Map();
  for (; ; ) {
    let c = l?.fromDisk ? await (0, import_chunk_bzyb60p0.Q$)(s) : void 0, e = await Bqr(o, s, c);
    g = new Set(e.map((a) => a.dependency).filter((a) => r.has(a)));
    let u = e.filter((a) => !i.has(a.dependency));
    if (u.length === 0) break;
    for (let a of u) i.add(a.dependency);
    let y = await Xve(u, s, c, l?.forListedMods);
    for (let a of y.installed) r.add(a);
    m.push(...y.marketplaceMissing), f.push(...y.settingsUnread ?? []);
    for (let [a, D] of y.outsideRange ?? []) n.set(a, D);
    if (c === void 0 || y.installed.length === 0) break;
  }
  if (i.size === 0) return null;
  let h = [...i].filter((c) => !r.has(c) || g.has(c)), w = [...r].filter((c) => !g.has(c));
  return { suffix: `${(0, import_chunk_vcnr02by.VRe)(w)}${(0, import_chunk_vcnr02by.MWi)(h, m)}`, changed: r.size > 0, unresolved: h.length > 0, ...f.length > 0 && { settingsUnread: f }, ...n.size > 0 && { outsideRange: n } };
}
async function S7s(o, s) {
  let l = await (0, import_chunk_bzyb60p0.Q$)(s, { leavesOutPluginUrls: true }), i = await Bqr(o, s, l);
  if (i.length === 0) return null;
  let g = (l.disabled.find((n) => n.source === o)?.manifest.dependencies ?? []).map((n) => (0, import_chunk_vcnr02by._1)(n, o)).filter((n) => !l.enabled.some((h) => (0, import_chunk_vcnr02by.ycn)(n, h.source, o))), m = (0, import_chunk_4smdap7r.M)([...i.map((n) => n.dependency), ...g]), f = i.some((n) => n.type === "dependency-unsatisfied" && n.reason === "not-found");
  return { suffix: `${(0, import_chunk_vcnr02by.MWi)(m, [])}${f ? " Dependencies are not installed while non-essential traffic is turned off." : ""}`, changed: false, unresolved: true };
}
function b(o, s) {
  for (let [l, i] of s) for (let r of o) if (i.has(r)) return l;
  return;
}
