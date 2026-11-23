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
var chunk_xs8rc77k_exports = {};
__export(chunk_xs8rc77k_exports, {
  Mqs: () => Mqs,
  Xzr: () => Xzr
});
module.exports = __toCommonJS(chunk_xs8rc77k_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_z688m88d = require("/$bunfs/root/chunk-z688m88d.js");
var import_path = require("path");
function Mqs(r, c, s) {
  let a = [], n = [], p = [];
  for (let [o, i] of Object.entries(r)) {
    let l = (0, import_chunk_bzyb60p0.Zy)(c, o), g = y(i.source, s?.projectRoot);
    if (!l) a.push(o);
    else if (i.sourceIsFallback) p.push(o);
    else if (!(0, import_chunk_z688m88d.Zt)(g, l.source)) n.push({ name: o, declaredSource: g, materializedSource: l.source });
    else p.push(o);
  }
  return { missing: a, sourceChanged: n, upToDate: p };
}
async function Xzr(r) {
  let c = r?.storageV5;
  await (0, import_chunk_bzyb60p0.Tcr)(c).catch((e) => {
    (0, import_chunk_w578pjby.t)(`reconciler: could not clear lapsed declarations: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "warn" });
  });
  let s = (0, import_chunk_bzyb60p0.tN)();
  if (Object.keys(s).length === 0) return { installed: [], updated: [], failed: [], upToDate: [], skipped: [] };
  let a;
  try {
    a = await (0, import_chunk_bzyb60p0.zf)(c);
  } catch (e) {
    (0, import_chunk_w578pjby.t)(`reconciler: failed to load known_marketplaces.json, treating as empty: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "error" }), a = {};
  }
  let n = Mqs(s, a, { projectRoot: (0, import_chunk_f9x2f6cx.Te)() });
  await (0, import_chunk_bzyb60p0.dmi)(n.upToDate, a, c).catch((e) => {
    (0, import_chunk_w578pjby.t)(`reconciler: could not record declared sources: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "warn" });
  });
  let p = [...n.missing.map((e) => ({ name: e, source: y(s[e].source), action: "install" })), ...n.sourceChanged.map(({ name: e, declaredSource: u }) => ({ name: e, source: u, action: "update" }))], o = [], i = [], l = [];
  for (let e of p) {
    if ((0, import_chunk_bzyb60p0.omi)(e.name)) {
      (0, import_chunk_w578pjby.t)(`[reconcile] '${e.name}' is the built-in ${import_chunk_xcgcdx61.ss}'s name: a settings entry under it adds no marketplace. Only an autoUpdate from ${import_chunk_bzyb60p0.UIn} counts, and only while the Directory is turned on.`), o.push(e.name);
      continue;
    }
    let u = (0, import_chunk_bzyb60p0.ttn)(e.name);
    if ((0, import_chunk_xcgcdx61.wD)(e.name) || u !== void 0) {
      let f = `${u === void 0 ? (0, import_chunk_xcgcdx61.o6e)(e.name) : (0, import_chunk_bzyb60p0.Cns)(e.name, u)} This marketplace was not added. Remove it from extraKnownMarketplaces in settings.`;
      (0, import_chunk_w578pjby.t)(`[reconcile] '${e.name}' ${f}`, { level: "warn" }), l.push({ name: e.name, error: f }), r?.onProgress?.({ type: "failed", name: e.name, error: f });
      continue;
    }
    if (r?.skip?.(e.name, e.source)) {
      o.push(e.name);
      continue;
    }
    if ((0, import_chunk_wj4me9k5.Pvt)(e.name)) {
      let m = `not materialized: names starting with "${import_chunk_xcgcdx61.UFe}" are reserved for marketplaces hosted on claude.ai \u2014 rename the declaration`;
      (0, import_chunk_w578pjby.t)(`[reconcile] '${e.name}' ${m}`, { level: "warn" }), l.push({ name: e.name, error: m }), r?.onProgress?.({ type: "failed", name: e.name, error: m });
      continue;
    }
    if (e.action === "update" && (0, import_chunk_xcgcdx61.x_)(e.source) && !await (0, import_chunk_2yx6c1y2.ep)(e.source.path)) {
      (0, import_chunk_w578pjby.t)(`[reconcile] '${e.name}' declared path does not exist; keeping materialized entry`), o.push(e.name);
      continue;
    }
    i.push(e);
  }
  let g = [], h = [];
  if (i.length > 0) {
    (0, import_chunk_w578pjby.t)(`[reconcile] ${i.length} marketplace(s): ${i.map((e) => `${e.name}(${e.action})`).join(", ")}`);
    for (let { name: e, source: u, action: m } of i) {
      r?.onProgress?.({ type: "installing", name: e });
      try {
        if (await (0, import_chunk_bzyb60p0.Xie)(u, void 0, c, e), m === "install") g.push(e);
        else h.push(e);
        r?.onProgress?.({ type: "installed", name: e });
      } catch (f) {
        let k = (0, import_chunk_jv7av99m.d)(f);
        l.push({ name: e, error: k }), r?.onProgress?.({ type: "failed", name: e, error: k }), (0, import_chunk_w578pjby.t)(`[reconcile] failed to ${m} marketplace '${e}': ${k}`, { level: "error" });
      }
    }
  }
  return await (0, import_chunk_bzyb60p0.hmi)(c), { installed: g, updated: h, failed: l, upToDate: n.upToDate, skipped: o };
}
function y(r, c) {
  if ((r.source === "directory" || r.source === "file") && !(0, import_path.isAbsolute)(r.path)) {
    let s = (0, import_chunk_f9x2f6cx.us)(), a = s ?? c ?? (0, import_chunk_f9x2f6cx.Te)(), n = (0, import_chunk_f9x2f6cx.qia)(), p = n !== void 0 ? n : s === null ? (0, import_chunk_2yx6c1y2.CM)(a) : null;
    return { ...r, path: (0, import_path.resolve)(p ?? a, r.path) };
  }
  return r;
}
