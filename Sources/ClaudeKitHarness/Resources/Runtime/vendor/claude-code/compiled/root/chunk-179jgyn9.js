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
var chunk_179jgyn9_exports = {};
__export(chunk_179jgyn9_exports, {
  Ads: () => Ads,
  DKl: () => DKl,
  Enl: () => Enl,
  FKl: () => FKl,
  HKl: () => HKl,
  IKl: () => IKl,
  Ido: () => Ido,
  J0n: () => J0n,
  Kbt: () => Kbt,
  LKl: () => LKl,
  MKl: () => MKl,
  Mdo: () => Mdo,
  NKl: () => NKl,
  OKl: () => OKl,
  Odo: () => Odo,
  Ods: () => Ods,
  PKl: () => PKl,
  Pdo: () => Pdo,
  Pds: () => Pds,
  RKl: () => RKl,
  Rds: () => Rds,
  Rx: () => Rx,
  Shr: () => Shr,
  Snl: () => Snl,
  Wne: () => Wne,
  X0n: () => X0n,
  aTi: () => aTi,
  bnl: () => bnl,
  cN: () => cN,
  dTi: () => dTi,
  dst: () => dst,
  iTi: () => iTi,
  knl: () => knl,
  lTi: () => lTi,
  nTi: () => nTi,
  o$t: () => o$t,
  oTi: () => oTi,
  qbt: () => qbt,
  rTi: () => rTi,
  sTi: () => sTi,
  tTi: () => tTi,
  wnl: () => wnl,
  xKl: () => xKl,
  xdo: () => xdo,
  xds: () => xds,
  ynl: () => ynl
});
module.exports = __toCommonJS(chunk_179jgyn9_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_n5qd9b6p = require("/$bunfs/root/chunk-n5qd9b6p.js");
var import_chunk_cee6q0wn = require("/$bunfs/root/chunk-cee6q0wn.js");
var import_chunk_ge3qft6b = require("/$bunfs/root/chunk-ge3qft6b.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_b83x8d52 = require("/$bunfs/root/chunk-b83x8d52.js");
var import_chunk_2b1wcpvk = require("/$bunfs/root/chunk-2b1wcpvk.js");
var import_chunk_w50zedgp = require("/$bunfs/root/chunk-w50zedgp.js");
var import_chunk_p44m8w7d = require("/$bunfs/root/chunk-p44m8w7d.js");
var import_chunk_jar84hn9 = require("/$bunfs/root/chunk-jar84hn9.js");
var import_chunk_59xxesz9 = require("/$bunfs/root/chunk-59xxesz9.js");
var import_chunk_t99xdws4 = require("/$bunfs/root/chunk-t99xdws4.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var c = import_chunk_865at33z.LA.deferralOf;
var RKl = import_chunk_865at33z.LA.describedOnce;
var ynl = import_chunk_865at33z.LA.recordDeferral;
function nTi(e) {
  let o = e.mcpInfo;
  if (o?.serverType === void 0) return;
  return Object.freeze({ type: o.serverType, ...o.describedOrigin !== void 0 && { origin: o.describedOrigin }, ...o.describedConnectorId !== void 0 && { connectorId: o.describedConnectorId } });
}
function Snl(e) {
  return import_chunk_865at33z.LA.describedServerEpoch(e.name, nTi(e));
}
var xKl = import_chunk_865at33z.LA.invalidateToolDescriptions;
var PKl = import_chunk_865at33z.LA.isToolDescribeHooked;
var xdo = import_chunk_865at33z.LA.isToolDescribeHookedForBuild;
var OKl = import_chunk_865at33z.LA.setToolDescribeBuildPresence;
var IKl = import_chunk_865at33z.LA.setToolDescribePresence;
var rTi = import_chunk_865at33z.LA.cacheBreakerOf, C = import_chunk_865at33z.LA.flaggedPlacementOf;
var MKl = import_chunk_865at33z.LA.isHookDescribed;
var HKl = import_chunk_865at33z.LA.isRewrittenByHook;
var DKl = import_chunk_865at33z.LA.redescribeEpoch;
var LKl = import_chunk_865at33z.LA.redescribeTools;
var NKl = import_chunk_865at33z.LA.resolveToolDescription;
var FKl = import_chunk_865at33z.LA.setToolDescribeResolver;
var P = "tengu_snoopy_thimble";
function Kbt(e) {
  return e.alwaysLoad === true && (e.mcpInfo?.serverOrigin === "directory" || e.mcpInfo?.serverOrigin === "custom") && (0, import_chunk_3t7ve0wy.kl)() && (0, import_chunk_865at33z.Lt)(P, false) === true;
}
var B = "tengu_mossy_gable", w = /* @__PURE__ */ new Set(["Adobe", "Adobe_for_creativity", "Firecrawl", "Granola", "Idiolect", "Intuit_QuickBooks", "Pipedrive"]);
function tTi(e) {
  return w.has(e);
}
function Ads(e, o) {
  let r = new Set(o), n = /* @__PURE__ */ new Set();
  for (let t of e) {
    if (t.mcpInfo === void 0 || !r.has(t.name)) continue;
    let a = (0, import_chunk_3f4m74y6.xn)(t.mcpInfo.serverName);
    if (tTi(a) && Kbt(t)) n.add(a);
  }
  return n.size > 0 && (0, import_chunk_865at33z.Lt)(B, false) === true ? [...n].sort() : [];
}
var Rx = "ReportFindings", sTi = "Report code-review findings as a typed list so the host UI can render them. Use this only when the active code-review instructions tell you to report findings with this tool; otherwise follow whatever output format those instructions specify. When reporting a review's results, call it once with the verified findings ranked most-severe first (empty array if nothing survived verification) and do not also print the findings as text. When re-reporting after applying fixes (only if the apply instructions ask for it), set `outcome` on each finding to what actually happened.";
function Shr(e) {
  return (0, import_chunk_865at33z.E_)(e) && !(0, import_chunk_865at33z.pxr)(e.model) && !(0, import_chunk_ge3qft6b.Vjt)(e.canonical);
}
function o$t(e) {
  return e.describesSystemTurns ?? (e.model !== void 0 && Shr((0, import_chunk_865at33z.ZP)(e.model)));
}
var F = "tengu_mellow_drawer", u = new Map([[import_chunk_qdcbcsg7.zde, true], [import_chunk_qdcbcsg7.gK, true], [import_chunk_qdcbcsg7.iMr, false], ...[[import_chunk_qdcbcsg7.WOo, false], ["create_artifact", true], ["device_list_dir", false], ["device_request_delete_permission", false], ["get_device_info", false], ["list_artifacts", true], ["list_devices", false], ["list_legacy_live_artifacts", true], ["project_memory_read", false], ["project_memory_write", false], ["update_artifact", true]].map(([e, o]) => [(0, import_chunk_px0hhsq7.lr)(import_chunk_qdcbcsg7.$n, e), o])]);
function Pdo(e) {
  return e.isMcp === true && e.mcpInfo?.serverName === import_chunk_qdcbcsg7.$n && (u.get(e.name) === true || e.name.startsWith(import_chunk_qdcbcsg7.KOo));
}
function Rds(e) {
  return Pdo(e) && (0, import_chunk_865at33z.Lt)(F, (0, import_chunk_f9x2f6cx.st)()) === true;
}
var T = "tengu_noble_twilight", _ = "tengu_abundant_owl", v = 64;
function h(e) {
  return Array.isArray(e) && e.length <= v ? (0, import_chunk_4smdap7r.Nr)(e).filter(import_chunk_px0hhsq7._qt) : [];
}
function H(e) {
  return e.isMcp === true && e.alwaysLoad === true && e.mcpInfo?.source === "plugin";
}
function X0n(e) {
  return H(e) && (0, import_chunk_3t7ve0wy.kl)();
}
function Odo(e) {
  return X0n(e) && h((0, import_chunk_865at33z.Lt)(T, [])).includes(e.name);
}
function O(e) {
  return X0n(e) && ((0, import_chunk_865at33z.Lt)(_, true) !== false || Odo(e));
}
function bnl(e) {
  if (e.isMcp !== true || e.mcpInfo?.source !== "plugin" || !(0, import_chunk_px0hhsq7._qt)(e.name) || !(0, import_chunk_f9x2f6cx.st)()) return false;
  try {
    return (0, import_chunk_3t7ve0wy.kl)() && (0, import_chunk_sghy0qej.Pe)(_, { safe: true });
  } catch (o) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(o)), true;
  }
}
function oTi(e, o) {
  return e.mcpInfo?.source === "plugin" && (0, import_chunk_3t7ve0wy.kl)() && o.some((r) => r.type === "attachment" && r.attachment?.type === "deferred_tools_delta" && r.attachment.toolSearchAbsent !== true && (0, import_chunk_4smdap7r.Nr)(r.attachment.surfacedNames).includes(e.name));
}
function wnl(e) {
  return X0n(e) || e.mcpInfo?.source === "plugin" && (0, import_chunk_3t7ve0wy.kl)() && h((0, import_chunk_865at33z.a3i)(T, [])).includes(e.name);
}
function J0n(e) {
  return u.has(e);
}
function knl() {
  return (0, import_chunk_f9x2f6cx.st)() && (0, import_chunk_3t7ve0wy.kl)() && ((0, import_chunk_n5qd9b6p.Aoe)()?.linkedComputerToolsFoundDefinitionsOffered ?? (0, import_chunk_865at33z.odt)());
}
var U = "tengu_quiet_ocean";
function E() {
  return (0, import_chunk_f9x2f6cx.st)() && (0, import_chunk_3t7ve0wy.kl)() && (0, import_chunk_865at33z.b)(U, false) === true;
}
function d(e) {
  return e.isMcp === true && e.alwaysLoad === true && e.mcpInfo?.serverName === import_chunk_qdcbcsg7.$n && J0n(e.name);
}
function Enl(e, o, r) {
  return d(e) && (0, import_chunk_f9x2f6cx.st)() && (0, import_chunk_3t7ve0wy.kl)() && ((0, import_chunk_n5qd9b6p.Ar)().linkedComputerToolsFoundDefinitionsOffered ??= (0, import_chunk_865at33z.odt)()) && (0, import_chunk_b83x8d52.oLn)(o, r);
}
var dst = "ShareOnboardingGuide", iTi = `Upload the ONBOARDING.md in the current directory and return a share link teammates can open in Claude Code. Call this after the user has confirmed the final content.

When called with the default mode='check': if a local ONBOARDING.md is present, uploads it to the most-recently-updated org guide (or creates one if none exist) and returns a fresh link. If no local file is present, returns the existing link without uploading (status: has_existing).`;
var G = require("/$bunfs/root/chunk-4tjhvemm.js").BRIEF_TOOL_NAME, V = /* @__PURE__ */ new Set([Rx, import_chunk_jar84hn9.xc, dst]), W = `Fetches full schema definitions for deferred tools so they can be called.

Deferred tools appear by name in <system-reminder> messages.`, j = `Fetches full schema definitions for deferred tools so they can be called.

Deferred tools appear by name in a message from the system.`, K = " Until fetched, only the name is known \u2014 there is no parameter schema, so the tool cannot be invoked.", Y = ` Until fetched, only the name is known \u2014 there is no parameter schema, so calling the tool fails with InputValidationError. When any instruction, system reminder, or other tool's description names a deferred tool, fetch it with query "select:<name>" before calling it.`, q = ` This tool takes a query, matches it against the deferred tool list, and returns the matched tools' complete JSONSchema definitions inside a <functions> block. Once a tool's schema appears in that result, it is callable exactly like any tool defined at the top of the prompt.

Result format: each matched tool appears as one <function>{"description": "...", "name": "...", "parameters": {...}}</function> line inside the <functions> block \u2014 the same encoding as the tool list at the top of this prompt.

Query forms:
- "select:Read,Edit,Grep" \u2014 fetch these exact tools by name
- "notebook jupyter" \u2014 keyword search, up to max_results best matches
- "+slack send" \u2014 require "slack" in the name, rank by remaining terms`;
function Wne(e, o, r) {
  return c(e.name) ?? qbt(e, o, r);
}
function qbt(e, o, r = {}) {
  if (e.alwaysLoad === true) return false;
  if (Ido(e, o)) return false;
  if (r.isCodeModeOnly ??= (0, import_chunk_w50zedgp.uZ)()) return false;
  return S(e, r);
}
function aTi(e) {
  let o = c(e.name);
  if (o !== void 0) return o;
  if (e.alwaysLoad === true || Ido(e)) return false;
  return S(e, {});
}
function S(e, o) {
  if (e.isMcp === true) return true;
  if ((o.areRareBuiltinsDeferred ??= (0, import_chunk_p44m8w7d.$Sl)()) && (0, import_chunk_4vsz8a99.dv)(e, V)) return true;
  if (o.guidance ??= (0, import_chunk_p44m8w7d.evr)(), (0, import_chunk_4vsz8a99.dv)(e, o.guidance.defer) && I(e, o.guidance) !== void 0) return true;
  return e.shouldDefer === true;
}
function Ido(e, o) {
  return g(e, o) || z(e) || N(e);
}
function y() {
  return (0, import_chunk_p44m8w7d.BSl)((e) => (0, import_chunk_b83x8d52.Uq)((0, import_chunk_f9x2f6cx.ao)(), typeof e === "string" ? (0, import_chunk_865at33z.jt)(e) : (0, import_chunk_865at33z.qd)()));
}
function g(e, o = (0, import_chunk_p44m8w7d.cM)(), r = false) {
  if (o.length > 0 && (0, import_chunk_4vsz8a99.dv)(e, o) && !(r && e.isMcp !== true && y())) return true;
  if (e.isMcp === true) return false;
  if (e.name === import_chunk_t99xdws4.co) return true;
  if (e.name === import_chunk_2b1wcpvk.ga) return true;
  if (e.name === import_chunk_060xwhvh._t) {
    let n = require("/$bunfs/root/chunk-trdh2hme.js");
    if (n.isForkSubagentEnabled()) return true;
  }
  if (e.name === G) return true;
  if (N(e) && !(0, import_chunk_p44m8w7d.USl)()) return true;
  return false;
}
function z(e) {
  return e.isMcp !== true && e.name === import_chunk_59xxesz9.IT && import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND === "bg";
}
function N(e) {
  return e.isMcp !== true && e.name === import_chunk_cee6q0wn.qx && (0, import_chunk_3t7ve0wy.nA)();
}
function cN(e, o, r, { toolSearchAbsent: n = false, placements: t = "hooks", nonDeferrableBuiltins: a, walk: f = {} } = {}) {
  let l = t === "hooks" ? c(e.name) : void 0, L = o?.has(e.name) === l && C(e.name) !== l;
  if (l !== void 0 && !L) return l;
  if (n) {
    if (o === void 0) return false;
  } else if (o === void 0) return t === "hooks" ? Wne(e, a, f) : qbt(e, a, f);
  if (r !== void 0 && (f.isPoolHidden ??= (0, import_chunk_w50zedgp.$h)(r))) return false;
  let m = !o.has(e.name);
  if (g(e, a, m && o.has(import_chunk_t99xdws4.co))) return false;
  return m;
}
function lTi(e) {
  let o = (0, import_chunk_p44m8w7d.evr)(), r = I(e, o);
  return r !== void 0 && (e.alwaysListsWhenToUse === true || o.whenToUse) && Wne(e) ? `${e.name}: ${r}` : e.name;
}
function I(e, o) {
  return (e.isMcp === true ? void 0 : o.sentences.get(e.name)) ?? e.whenToUse;
}
function xds(e = {}) {
  return (o$t(e) ? j : W) + ((0, import_chunk_865at33z.hMl)() ? Y : K) + q;
}
function Pds(e, { heldInlineTools: o, nonDeferrableBuiltins: r, listed: n }) {
  return x(e, o, r) && !n.has(e.name);
}
function Mdo(e, o) {
  return O(e) || e.isMcp !== true && (0, import_chunk_4vsz8a99.dv)(e, o) && y();
}
function Ods(e, { heldInlineTools: o, nonDeferrableBuiltins: r, listed: n, settled: t, loaded: a, pool: f }) {
  return n.has(e.name) && !t.has(e.name) && d(e) && import_chunk_qdcbcsg7._7i.includes(e.name) && !Pdo(e) && E() && !a.has(e.name) && x(e, o, r) && f.some((l) => l.mcpInfo?.serverName === import_chunk_qdcbcsg7.$n && !import_chunk_qdcbcsg7._7i.includes(l.name));
}
function x(e, o, r) {
  return o !== void 0 && !Wne(e, r) && !Kbt(e) && !Rds(e);
}
function dTi(e, o) {
  if (!cN(e, o.heldInlineTools, void 0, { nonDeferrableBuiltins: o.nonDeferrableBuiltins })) return;
  if (Ods(e, o)) return "resurfaced";
  if (o.announced.has(e.name)) return;
  if (o.listed.has(e.name)) return o.withdrawn.has(e.name) ? "again" : void 0;
  return Pds(e, o) && !Mdo(e, o.nonDeferrableBuiltins) ? "surfaced" : void 0;
}
