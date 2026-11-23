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
var chunk_gazdkqyt_exports = {};
__export(chunk_gazdkqyt_exports, {
  EGo: () => EGo,
  Kzr: () => Kzr,
  Vzr: () => Vzr,
  tCa: () => tCa,
  xqs: () => xqs
});
module.exports = __toCommonJS(chunk_gazdkqyt_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_54j6k3fn = require("/$bunfs/root/chunk-54j6k3fn.js");
var import_chunk_vcnr02by = require("/$bunfs/root/chunk-vcnr02by.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_zddv3vvj = require("/$bunfs/root/chunk-zddv3vvj.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_p3qkcp6e = require("/$bunfs/root/chunk-p3qkcp6e.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var C = "flagged-plugins.json", M = 1728e5;
function R() {
  return (0, import_path.join)((0, import_chunk_wj4me9k5.Mc)(), C);
}
function E(r) {
  let n = (0, import_chunk_w578pjby.te)(r);
  if (typeof n !== "object" || n === null || !("plugins" in n) || typeof n.plugins !== "object" || n.plugins === null) return {};
  let s = n.plugins, l = {};
  for (let [o, e] of Object.entries(s)) if (e && typeof e === "object" && "flaggedAt" in e && typeof e.flaggedAt === "string") {
    let g = { flaggedAt: e.flaggedAt };
    if ("seenAt" in e && typeof e.seenAt === "string") g.seenAt = e.seenAt;
    l[o] = g;
  }
  return l;
}
var h = /* @__PURE__ */ new Set(["ENOSPC", "EROFS", "EACCES", "ENOENT", "ENOTDIR"]), B = /* @__PURE__ */ new Set([...h, "EEXIST", "EISDIR", "AbsentParent", "UnexpectedAbsent"]);
function O(r) {
  return (0, import_chunk_m15w38ag.ne)() && r !== void 0 && (0, import_chunk_bzyb60p0.iLt)("flagged") !== null ? r : void 0;
}
async function k(r) {
  let n = O(r);
  if (n) {
    let l = await n.read([import_chunk_hkvzj051.at.pluginRegistry("flagged")]), o = l.ok ? l.value.items[0] : void 0;
    if (!o?.found) return {};
    let e = o.value;
    try {
      return E(Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf-8"));
    } catch {
      return {};
    }
  }
  let s = R();
  try {
    let l = await (0, import_promises.readFile)(s, { encoding: "utf-8" });
    return E(l);
  } catch {
    return {};
  }
}
async function y(r, n) {
  let s = O(n);
  if (s) {
    let o = await s.write(import_chunk_hkvzj051.at.pluginRegistry("flagged"), (0, import_chunk_w578pjby._)({ plugins: r }, null, 2));
    if (o.ok) {
      (0, import_chunk_865at33z.ce)().flaggedPlugins = r;
      return;
    }
    let e = "telemetryCode" in o.error ? o.error.telemetryCode : void 0;
    if (e !== void 0 && B.has(e)) (0, import_chunk_w578pjby.t)(`Failed to persist flagged plugins: ${(0, import_chunk_7n1spq36.un)(o.error)}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`Failed to persist flagged plugins: ${o.error.code}${e === void 0 ? "" : ` ${e}`}`, "flagged plugins v5 write failed"));
    return;
  }
  let l = R();
  try {
    await (0, import_chunk_w578pjby.le)().mkdir((0, import_chunk_wj4me9k5.Mc)());
    let o = (0, import_chunk_w578pjby._)({ plugins: r }, null, 2);
    await (0, import_chunk_q7qjcthc.yr)(l, o, 384), (0, import_chunk_865at33z.ce)().flaggedPlugins = r;
  } catch (o) {
    let e = (0, import_chunk_jv7av99m.w)(o);
    if (e !== void 0 && h.has(e)) (0, import_chunk_w578pjby.t)(`Failed to persist flagged plugins: ${o}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(o);
  }
}
async function D(r) {
  let n = await k(r), s = Date.now(), l = false;
  for (let [o, e] of Object.entries(n)) if (e.seenAt && s - new Date(e.seenAt).getTime() >= M) delete n[o], l = true;
  if ((0, import_chunk_865at33z.ce)().flaggedPlugins = n, l) await y(n, r);
}
function EGo() {
  return (0, import_chunk_865at33z.ce)().flaggedPlugins ?? {};
}
async function b(r, n) {
  let s = (0, import_chunk_865at33z.ce)();
  if (s.flaggedPlugins === null) s.flaggedPlugins = await k(n);
  let l = { ...s.flaggedPlugins, [r]: { flaggedAt: (/* @__PURE__ */ new Date()).toISOString() } };
  await y(l, n), (0, import_chunk_w578pjby.t)(`Flagged plugin: ${r}`);
}
async function tCa(r, n) {
  let s = (0, import_chunk_865at33z.ce)();
  if (s.flaggedPlugins === null) s.flaggedPlugins = await k(n);
  let l = (/* @__PURE__ */ new Date()).toISOString(), o = false, e = { ...s.flaggedPlugins };
  for (let g of r) {
    let c = e[g];
    if (c && !c.seenAt) e[g] = { ...c, seenAt: l }, o = true;
  }
  if (o) await y(e, n);
}
async function xqs(r, n) {
  let s = (0, import_chunk_865at33z.ce)();
  if (s.flaggedPlugins === null) s.flaggedPlugins = await k(n);
  if (!(r in s.flaggedPlugins)) return;
  let { [r]: l, ...o } = s.flaggedPlugins;
  s.flaggedPlugins = o, await y(o, n);
}
function N(r, n, s) {
  let l = new Set(n.plugins.map((g) => g.name)), o = `@${s}`, e = [];
  for (let g of Object.keys(r.plugins)) {
    if (!g.endsWith(o)) continue;
    let c = g.slice(0, -o.length), F = n.renames && (0, import_chunk_bzyb60p0.ySt)(c, n.renames, l)?.kind === "renamed";
    if (!l.has(c) && !F) e.push(g);
  }
  return e;
}
async function Vzr(r) {
  await D(r);
  let n = (0, import_chunk_m15w38ag.ne)() && r !== void 0 ? await (0, import_chunk_bzyb60p0.Qie)(r) : (0, import_chunk_bzyb60p0.tf)(), s = EGo(), l = await (0, import_chunk_bzyb60p0.Bd)(r), o = [];
  for (let [e, g] of Object.entries(l)) try {
    if ((0, import_chunk_xcgcdx61.hS)(g.source) && !Object.keys(n.plugins).some((u) => u.endsWith(`@${e}`))) continue;
    let c = (0, import_chunk_xcgcdx61.hS)(g.source) ? await (0, import_chunk_bzyb60p0.AT)(e, r, { registryEntry: g }) : await (0, import_chunk_bzyb60p0.r7)(e, r);
    if (c === null) {
      if (Object.keys(n.plugins).some((u) => u.endsWith(`@${e}`))) (0, import_chunk_y53wbr8a.a)("tengu_plugin_delisted_enforcement", { outcome: (0, import_chunk_78g0060s.S)("scan-skipped-no-catalog"), is_official_marketplace: false });
      continue;
    }
    if (!c.forceRemoveDeletedPlugins) continue;
    let F = N(n, c, e);
    for (let u of F) {
      if (u in s) continue;
      let I = n.plugins[u] ?? [];
      if (!I.some((P) => P.scope === "user" || P.scope === "project" || P.scope === "local")) continue;
      for (let P of I) {
        let { scope: m } = P;
        if (m !== "user" && m !== "project" && m !== "local") continue;
        try {
          let p = await (0, import_chunk_p3qkcp6e.fue)(u, m, true, r, { settingsStillOn: "remove-anyway" });
          (0, import_chunk_y53wbr8a.a)("tengu_plugin_delisted_enforcement", { outcome: p.success ? (0, import_chunk_78g0060s.S)("uninstalled") : (0, import_chunk_78g0060s.S)("uninstall-failed"), scope: (0, import_chunk_78g0060s.f)(m), ...!p.success && { error_kind: (0, import_chunk_78g0060s.f)((0, import_chunk_54j6k3fn.wpe)(p.message)) }, ...(0, import_chunk_54j6k3fn.aj)(u, (0, import_chunk_vcnr02by.Bg)()) });
        } catch (p) {
          (0, import_chunk_w578pjby.t)(`Failed to auto-uninstall delisted plugin ${u} from ${m}: ${(0, import_chunk_jv7av99m.d)(p)}`, { level: "error" }), (0, import_chunk_y53wbr8a.a)("tengu_plugin_delisted_enforcement", { outcome: (0, import_chunk_78g0060s.S)("uninstall-failed"), scope: (0, import_chunk_78g0060s.f)(m), error_kind: (0, import_chunk_78g0060s.f)((0, import_chunk_54j6k3fn.wpe)(p)), ...(0, import_chunk_54j6k3fn.aj)(u, (0, import_chunk_vcnr02by.Bg)()) });
        }
      }
      await b(u, r), o.push(u);
    }
  } catch (c) {
    (0, import_chunk_w578pjby.t)(`Failed to check for delisted plugins in "${e}": ${(0, import_chunk_jv7av99m.d)(c)}`, { level: "warn" }), (0, import_chunk_y53wbr8a.a)("tengu_plugin_delisted_enforcement", { outcome: (0, import_chunk_78g0060s.S)("scan-failed"), error_kind: (0, import_chunk_78g0060s.f)((0, import_chunk_54j6k3fn.wpe)(c)), _PROTO_marketplace_name: e, is_official_marketplace: (0, import_chunk_xcgcdx61.iu)(e) });
  }
  return o;
}
async function Kzr(r) {
  if (!(0, import_chunk_zddv3vvj.ABt)() || (0, import_chunk_zddv3vvj.vkt)()) return null;
  let n = (0, import_chunk_bzyb60p0.tN)(), s = await (0, import_chunk_bzyb60p0.Bd)(r), l = Object.keys((0, import_chunk_2yx6c1y2.vt)().extraKnownMarketplaces ?? {}).filter((e) => !Object.hasOwn(n, e) && !Object.hasOwn(s, e)), o = l[0];
  if (o === void 0) return null;
  return l.length === 1 ? `Skipped marketplace "${(0, import_chunk_tp3c5q2s.Qe)(o, 13)}". If main has it, run Claude there once.` : `Skipped ${l.length} marketplaces. If main has them, run Claude there once.`;
}
