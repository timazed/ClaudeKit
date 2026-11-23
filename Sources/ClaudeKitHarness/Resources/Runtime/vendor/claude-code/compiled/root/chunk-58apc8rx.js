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
var chunk_58apc8rx_exports = {};
__export(chunk_58apc8rx_exports, {
  MWe: () => MWe,
  Pco: () => Pco,
  Rae: () => Rae,
  SLn: () => SLn,
  Scs: () => Scs,
  USe: () => USe,
  bLn: () => bLn,
  bcs: () => bcs,
  con: () => con,
  eol: () => eol,
  nol: () => nol,
  ool: () => ool,
  rol: () => rol,
  sol: () => sol,
  tol: () => tol,
  wcs: () => wcs,
  xco: () => xco
});
module.exports = __toCommonJS(chunk_58apc8rx_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_a9nnd83v = require("/$bunfs/root/chunk-a9nnd83v.js");
var import_chunk_8704k7wd = require("/$bunfs/root/chunk-8704k7wd.js");
var import_path = require("path");
function eol(e) {
  return { skillId: e.id, name: e.name, description: e.description ?? "", source: e.source ?? "custom", updatedAt: e.updated_at ?? null, ...typeof e.backing_plugin_id === "string" && (0, import_chunk_mgntjepj.Oxe)(e.backing_plugin_id) && { backingPluginId: e.backing_plugin_id }, ...e.user_invocable != null && { userInvocable: e.user_invocable === true }, ...e.disable_model_invocation != null && { disableModelInvocation: e.disable_model_invocation !== false } };
}
function xco(e) {
  if (typeof e.creator_type !== "string") return;
  if (e.creator_type === "anthropic") return "anthropic";
  if (e.is_shared === true) return "shared";
  if (e.partition_by === "organization") return "org";
  let n = e.partition_by === "account";
  if (typeof e.backing_plugin_id === "string") return n ? "own" : "other";
  return n || e.partition_by == null ? "own" : "other";
}
function tol(e) {
  return e.enabled !== false;
}
var USe = "collision-loser";
function nol(e, n = e) {
  let o = (0, import_chunk_wj4me9k5.Dd)(), { listedOwnerships: t, anthropicsSkillNames: i } = o;
  t.clear(), i.clear(), o.listedSkillsAnswer = "none_yet";
  for (let r of e) {
    let l;
    try {
      l = (0, import_chunk_mgntjepj.Lp)((0, import_path.basename)((0, import_chunk_mgntjepj.Kme)(r.name, import_path.sep)));
    } catch {
      continue;
    }
    if (!t.has(l)) t.set(l, { listedName: r.name, ownership: xco(r), savedFromAChat: typeof r.backing_plugin_id === "string" });
  }
  for (let r of n) if (xco(r) === "anthropic") i.add(r.name);
  o.listedSkillsAnswer = "a_list", o.lastRoundCouldNotAsk = false;
}
function MWe(e) {
  return (0, import_chunk_wj4me9k5.Dd)().listedOwnerships.get((0, import_chunk_mgntjepj.Lp)(e));
}
var f = /[\p{Lu}\p{Ll}\p{Lt}\p{Lm}\p{Lo}\p{Nl}\p{Mn}\p{Mc}\p{Nd}]/u, m = new RegExp("\\p{Pc}", "u"), k = ["anthropic-skills:", "claude-ai:"];
function Scs(e) {
  let n = "";
  for (let o of (0, import_chunk_kx2fp6pc.lg)(e)) for (let t of o.normalize("NFKC")) if (t === " " || m.test(t)) n += "-";
  else if (t === "-" || f.test(t)) n += t;
  return n.toLowerCase().replace(/-{2,}/g, "-").replace(/^-+|-+$/g, "");
}
function bcs(e) {
  let n = e.trim(), o = n.startsWith("/") ? n.slice(1) : n, t = k.find((i) => o.startsWith(i));
  return t === void 0 ? o : o.slice(t.length);
}
function Pco(e, n, o) {
  let t = n.trim().toLowerCase();
  if (!t) return false;
  let i = e.trim().toLowerCase();
  if (i === t || o && `${i}:${i}` === t) return true;
  let r = Scs(n);
  return r !== "" && Scs(i) === r;
}
function Rae(e) {
  return e.unqualifiedName ?? (0, import_chunk_xcgcdx61.Pw)(e.name);
}
function s(e, n) {
  let o = Rae(e), t = MWe(o);
  return Pco(t?.listedName ?? o, n, t?.savedFromAChat ?? true);
}
function wcs(e, n) {
  let o = (0, import_chunk_8704k7wd.zs)(e, n), t = bcs(e), i = d(n).filter((r) => r === o || s(r, t));
  return { skills: i, foundByLookup: i.some((r) => r === o) };
}
function rol(e, n) {
  return d(n).filter((o) => {
    let t = MWe(Rae(o))?.ownership;
    return (t === void 0 || t === "own") && s(o, e);
  });
}
var g = { anthropic: "built in", org: "one of the organization's skills", shared: "a skill shared with the user" };
function ool(e, n) {
  let o;
  for (let t of wcs(e, n).skills) {
    let i = MWe(Rae(t))?.ownership, r = i && g[i];
    if (r === void 0) return;
    o ??= { skill: t, whose: r };
  }
  return o;
}
function d(e) {
  return e.flatMap((n) => n.type === "prompt" && (0, import_chunk_a9nnd83v.BO)(n) ? [n] : []);
}
var a = (e) => e === "anthropic_catalog" || e === "other_catalog";
function c(e) {
  if (e.type !== "prompt") return "no";
  let { serverAttribution: n, pluginInfo: o } = e;
  if (n?.skillId !== void 0) return "yes";
  if ((0, import_chunk_a9nnd83v.BO)(e)) {
    let i = MWe(Rae(e))?.ownership;
    return i === void 0 ? "unsure" : i === "anthropic" ? "no" : "yes";
  }
  let t = o?.marketplaceKind;
  if (t !== void 0) return a(t) ? "no" : "yes";
  return (o?.serverPluginId ?? n?.pluginId) !== void 0 || (0, import_chunk_xcgcdx61.is)(o?.repository ?? "") === import_chunk_xcgcdx61.qs ? "unsure" : "no";
}
function con(e) {
  if (c(e) !== "no") (0, import_chunk_f9x2f6cx.en)().recordLastingEvent("AccountSkillLoad");
}
function SLn(e) {
  if (e.some((n) => c(n) === "yes")) (0, import_chunk_f9x2f6cx.en)().recordLastingEvent("AccountSkillListing");
}
function bLn() {
  (0, import_chunk_f9x2f6cx.en)().recordLastingEvent("AccountSkillListing");
}
function sol(e) {
  if (e.some((n) => !a(n.marketplaceKind) && (n.serverPluginId !== void 0 || (0, import_chunk_xcgcdx61.is)(n.source) === import_chunk_xcgcdx61.qs))) (0, import_chunk_f9x2f6cx.en)().recordLastingEvent("AccountPluginEnabled");
}
