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
var chunk_42nfpkzm_exports = {};
__export(chunk_42nfpkzm_exports, {
  Jji: () => Jji,
  Mp: () => Mp,
  Qji: () => Qji,
  Sks: () => Sks,
  Vle: () => Vle,
  WWn: () => WWn,
  Y2t: () => Y2t,
  Zji: () => Zji,
  bks: () => bks,
  e2i: () => e2i,
  k9: () => k9,
  pEo: () => pEo,
  q2t: () => q2t,
  ted: () => ted,
  wks: () => wks,
  zle: () => zle
});
module.exports = __toCommonJS(chunk_42nfpkzm_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_fzp6hh55 = require("/$bunfs/root/chunk-fzp6hh55.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_t3er6wbx = require("/$bunfs/root/chunk-t3er6wbx.js");
var import_chunk_snmsx2fv = require("/$bunfs/root/chunk-snmsx2fv.js");
var import_chunk_zc7mq9x0 = require("/$bunfs/root/chunk-zc7mq9x0.js");
var import_chunk_3v09xgvh = require("/$bunfs/root/chunk-3v09xgvh.js");
var import_chunk_v6tczjz9 = require("/$bunfs/root/chunk-v6tczjz9.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
function O(e) {
  try {
    return new URL(e).host;
  } catch {
    return;
  }
}
function Sks(e = import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL || (0, import_chunk_9b4aq7fb.hFe)()) {
  if (!e) return true;
  let n = O((0, import_chunk_ephf358x.cn)().BASE_API_URL);
  return n !== void 0 && O(e) === n;
}
function k9() {
  (0, import_chunk_xcgcdx61.hea)();
}
function Jji() {
  (0, import_chunk_xcgcdx61.yea)(E(Mp()));
}
function E(e) {
  if (!(0, import_chunk_xcgcdx61.sOe)() && !S(e)) return { kind: "unreadable" };
  try {
    return { kind: "read", orgs: (0, import_chunk_v6tczjz9.iGe)() };
  } catch {
    return { kind: "unreadable" };
  }
}
function bks(e) {
  {
    if (!e || (0, import_chunk_zhr7rpv7.ve)() === "gateway" || (0, import_chunk_xcgcdx61.xea)() || (0, import_chunk_xcgcdx61.Si)() !== null || (0, import_chunk_ephf358x.PI)() !== "") return;
    let n = (0, import_chunk_865at33z.Jxe)();
    return n === "enterprise" || n === "team" ? (0, import_chunk_865at33z.Dc)()?.organizationUuid || void 0 : void 0;
  }
  return;
}
function S(e, n = false) {
  try {
    if (bks(e) === void 0) return false;
    let { kind: r } = q2t();
    return r !== "api_key" && r !== "host_bearer" && (n || r !== "profile") && (0, import_chunk_865at33z.$R)() === "store";
  } catch (r) {
    if ((0, import_chunk_jv7av99m.w)(r) !== void 0) return (0, import_chunk_w578pjby.t)(`Remote settings: could not read the profile store: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "error" }), true;
    return (0, import_chunk_k449cc64.i)(r), true;
  }
}
function q2t() {
  if ((0, import_chunk_865at33z.Rt)() && pEo() && (0, import_chunk_865at33z.L1)()) return { kind: "org_login" };
  try {
    let { key: n } = (0, import_chunk_865at33z.F0)({ skipRetrievingKeyFromApiKeyHelper: true });
    if (n) return { kind: "api_key", key: n };
  } catch {
  }
  let e = (0, import_chunk_865at33z.KGn)();
  if (e !== void 0) return { kind: "host_bearer", bearer: e };
  return { kind: (0, import_chunk_865at33z.upn)() ? "profile" : "login" };
}
function wks() {
  return Mp(), (0, import_chunk_xcgcdx61.wqn)();
}
function zle() {
  return Mp(), (0, import_chunk_xcgcdx61.hDr)();
}
function Mp() {
  let e = (0, import_chunk_xcgcdx61.JC)();
  if (e !== void 0) return e;
  let { eligible: n, ineligibleReason: r, hybridOrganizationUuid: o, hybridSignInEnded: a, hybridBlockFilter: c, hybridProviderFromOrganization: p, hybridOnlyForConnection: b, hybridSignInKeepsCredentialAside: y, hybridPluginLockRules: m } = (0, import_chunk_xcgcdx61.qFe)(I);
  if ((0, import_chunk_xcgcdx61.Pea)(import_chunk_c203g5kd.s.CLAUDE_CODE_USE_GATEWAY === true), (0, import_chunk_xcgcdx61.Lea)(o ?? null, a === true, c ?? null, p === true, b === true, y === true, m ?? null), n && o === void 0) (0, import_chunk_xcgcdx61._ea)({ readAccount: import_chunk_865at33z.Dc, covers: (0, import_chunk_zhr7rpv7.ve)() !== "gateway" || (0, import_chunk_865at33z.Exr)() && !(0, import_chunk_f9x2f6cx.xQe)() && !(0, import_chunk_f9x2f6cx.kse)(), orgPin: E(n), mayHideDialog: () => S(Mp()), writesForHiddenDialog: () => S(Mp(), true) });
  let h = import_chunk_c203g5kd.s.CLAUDE_CODE_EVAL_CONFINED === true, _ = !n && h;
  if ((0, import_chunk_xcgcdx61.Aea)(_), (0, import_chunk_6mfepmbb.t$)()) return (0, import_chunk_xcgcdx61.yDs)(false, r);
  let R = n || _;
  return (0, import_chunk_xcgcdx61.yDs)(R, R ? void 0 : r, !n && (0, import_chunk_xcgcdx61.qFe)(() => (0, import_chunk_865at33z.az)() !== void 0 && (0, import_chunk_xcgcdx61.tqt)(I).eligible));
}
function N() {
  return pEo() || (0, import_chunk_865at33z.dm)() && ((0, import_chunk_865at33z.Jxe)() === null || (0, import_chunk_2yx6c1y2.ZMr)());
}
function U() {
  let e = (0, import_chunk_3v09xgvh.T2i)();
  return e === null ? { eligible: true } : { eligible: false, ineligibleReason: e };
}
function pEo() {
  if (!(0, import_chunk_865at33z.dm)()) return false;
  let e = (0, import_chunk_865at33z.Jxe)();
  return e === "enterprise" || e === "team" || (0, import_chunk_xcgcdx61.Eea)(import_chunk_2yx6c1y2.IJi, import_chunk_2yx6c1y2.oEe);
}
function k() {
  try {
    return (0, import_chunk_865at33z.dm)() && !(0, import_chunk_865at33z.eO)();
  } catch (e) {
    return (0, import_chunk_w578pjby.t)(`Remote settings: could not read the claude.ai login (${(0, import_chunk_jv7av99m.d)(e)}); treating it as the stored login, so this session's surface skip does not apply`, { level: "warn" }), true;
  }
}
function P() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT;
  return e === "local-agent" || e?.startsWith("claude-coworker") === true;
}
function Qji() {
  return (0, import_chunk_snmsx2fv.ZH)() || (0, import_chunk_xcgcdx61.cm)() && (0, import_chunk_3v09xgvh.T2i)() !== null || P() || H("for_stored_login");
}
function L() {
  try {
    if ((0, import_chunk_865at33z.cc)()) return true;
    if ((0, import_chunk_fzp6hh55.bK)("CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR") || (0, import_chunk_fzp6hh55.bK)("CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR")) return true;
    let e = (0, import_chunk_zc7mq9x0.t2i)(import_chunk_gd77dyw4.Zee), n = (0, import_chunk_zc7mq9x0.slt)(import_chunk_gd77dyw4.Zee), r = e && n ? new Map(import_chunk_gd77dyw4.Zee.map((o) => [o, [n(o), e(o)].flatMap((a) => a?.trim() ? [a] : [])])) : null;
    return !(0, import_chunk_865at33z.eee)() && ((0, import_chunk_fzp6hh55.wK)() !== null || (r ? import_chunk_gd77dyw4.f2.some((o) => !!r.get(o)?.length) : !!import_chunk_c203g5kd.s.ANTHROPIC_API_KEY || !!(0, import_chunk_865at33z.eg)())) || (r ? !!r.get("ANTHROPIC_CUSTOM_HEADERS")?.some((o) => (0, import_chunk_xfj2cwfv.Ahe)(o).some(([a]) => ["authorization", "x-api-key"].includes(a.toLowerCase()))) || !!r.get("CLAUDE_CODE_OAUTH_TOKEN")?.length : (0, import_chunk_xfj2cwfv.Ade)() || (0, import_chunk_xfj2cwfv.BS)()) || (0, import_chunk_865at33z.eO)();
  } catch (e) {
    return (0, import_chunk_w578pjby.t)(`Remote settings: could not read the host's credential (${(0, import_chunk_jv7av99m.d)(e)}); keeping the surface's settings skip`, { level: "warn" }), true;
  }
}
function H(e) {
  return (0, import_chunk_3t7ve0wy.$6e)() && !(0, import_chunk_6e68m1dj.Ru)() && ((0, import_chunk_6e68m1dj.hn)() || L() || e === "for_session" && !k());
}
function I() {
  if ((0, import_chunk_xcgcdx61.kI)()) return { eligible: true };
  if ((0, import_chunk_snmsx2fv.ZH)()) return { eligible: false, ineligibleReason: "hermetic_remote_session" };
  if ((0, import_chunk_xcgcdx61.cm)()) return U();
  if ((0, import_chunk_zhr7rpv7.ve)() === "gateway") {
    let o = (0, import_chunk_f9x2f6cx.Io)(), a = (0, import_chunk_f9x2f6cx.FNr)(o);
    return { eligible: a, ineligibleReason: a ? void 0 : o?.hostVerdict !== void 0 ? "host_gateway_not_accepted" : "unpinned_gateway" };
  }
  let e = (0, import_chunk_zhr7rpv7.ve)() !== "firstParty" ? "third_party_provider" : !(0, import_chunk_zhr7rpv7.ya)() ? "custom_base_url" : void 0;
  if (e) return C(false) ?? { eligible: false, ineligibleReason: e };
  if (P()) return { eligible: false, ineligibleReason: "sandboxed_entrypoint" };
  if (H("for_session")) return { eligible: false, ineligibleReason: "claude_tag" };
  let n = C(true);
  if (n?.hybridOrganizationUuid !== void 0 && n.hybridSignInEnded !== true || n?.hybridSignInKeepsCredentialAside === true) return n;
  let r = false;
  try {
    r = (0, import_chunk_865at33z.upn)();
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`Remote settings: could not read the profile store (${(0, import_chunk_jv7av99m.d)(o)}); not treating this session as profile-authenticated`, { level: "warn" });
  }
  if (r) return Sks() ? { eligible: true } : { eligible: false, ineligibleReason: "profile_base_url_mismatch" };
  if (N()) return { eligible: true };
  try {
    let { key: o } = (0, import_chunk_865at33z.F0)({ skipRetrievingKeyFromApiKeyHelper: true });
    if (o) return { eligible: true };
  } catch {
  }
  if ((0, import_chunk_865at33z.KGn)() !== void 0) return { eligible: true };
  if (n !== null) return n;
  if ((0, import_chunk_865at33z.dm)() && (0, import_chunk_865at33z.mRo)((0, import_chunk_865at33z.Jxe)(), (0, import_chunk_865at33z.wpn)()) === null) return { eligible: true };
  return { eligible: false, ineligibleReason: (0, import_chunk_865at33z.dm)() ? "unsupported_subscription" : "no_auth" };
}
function Y2t(e = true) {
  {
    let n = (0, import_chunk_xcgcdx61.zee)(Mp());
    return (0, import_chunk_xcgcdx61.Si)() !== null && (n || e && (0, import_chunk_xcgcdx61.Xut)() && !(0, import_chunk_xcgcdx61.nc)());
  }
  return false;
}
function Zji() {
  {
    let e = A();
    return (0, import_chunk_xcgcdx61.fDr)(), A() || e;
  }
  return false;
}
function A() {
  {
    let e = (0, import_chunk_xcgcdx61.zee)(Mp());
    return Vle() === "hybrid" || (0, import_chunk_xcgcdx61.Si)() !== null && (e || (0, import_chunk_xcgcdx61.Xut)());
  }
  return false;
}
function F() {
  let e = (0, import_chunk_xcgcdx61.dF)();
  return e === "connection_unusable" || e === "no_cloud_provider";
}
function ted(e) {
  if (Y2t() || (0, import_chunk_2yx6c1y2.Mee)() !== "unset") return true;
  return Mp(), e && (0, import_chunk_xcgcdx61.Si)() !== null && !(0, import_chunk_xcgcdx61.S3)();
}
function Vle(e = false) {
  try {
    let n = (0, import_chunk_2yx6c1y2.Mee)();
    if (n === "unset") return "none";
    if (n === "unloaded") return "none";
    if (n === "unreadable") return "unreadable";
    let r = (0, import_chunk_zhr7rpv7.ve)() === "firstParty" && (!import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL || (0, import_chunk_tvttgr51.mJe)(import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL)) && (!import_chunk_c203g5kd.s.CLAUDE_CODE_API_BASE_URL || (0, import_chunk_tvttgr51.mJe)(import_chunk_c203g5kd.s.CLAUDE_CODE_API_BASE_URL)) && !import_chunk_c203g5kd.s.ANTHROPIC_UNIX_SOCKET;
    if (Mp(), (0, import_chunk_xcgcdx61.Si)() !== null && !(0, import_chunk_xcgcdx61.S3)() && !F() && !(e && (0, import_chunk_zhr7rpv7.ve)() === "firstParty" && (!import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL || (0, import_chunk_tvttgr51.NIs)(import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL) !== void 0))) return "hybrid";
    if (r && (0, import_chunk_865at33z.Rt)() && !(0, import_chunk_xfj2cwfv.Ade)() && !(0, import_chunk_xfj2cwfv.BS)()) return "claude_ai";
    let o = require("/$bunfs/root/chunk-2q2c1b7t.js");
    return o.readSignedInOrganizationUuid() === void 0 && !(0, import_chunk_865at33z.L1)() ? "no_sign_in" : "sign_in_not_used";
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`anthropicSignInMandate: the check threw: ${(0, import_chunk_jv7av99m.d)(n)}`, { level: "error" }), "unreadable";
  }
  return "none";
}
var g = (0, import_chunk_t57w17k7.de)({ isNoted: false, hybridOrganizationUuid: null, hasReportedRefusal: false, hasReportedLostSignIn: false, hasReportedOrganizationLeft: false, hasReportedSignInForNewProcess: false }, (e) => {
  e.isNoted = false, e.hybridOrganizationUuid = null, e.hasReportedRefusal = false, e.hasReportedLostSignIn = false, e.hasReportedOrganizationLeft = false, e.hasReportedSignInForNewProcess = false;
});
function WWn(e) {
  if (!g.isNoted && e !== "unread") (0, import_chunk_cqa9hrgx.u)("managed_settings_sign_in_required");
  if (g.isNoted = true, g.hybridOrganizationUuid = e === "hybrid" ? (0, import_chunk_xcgcdx61.Si)() : null, e === "unread") (0, import_chunk_xcgcdx61.pge)();
}
function T() {
  {
    if (!g.isNoted) return;
    let e = Vle(true);
    if (e === "none" || e === "claude_ai") return;
    if (e === "hybrid") {
      let n = require("/$bunfs/root/chunk-2q2c1b7t.js"), r = n.readSignedInOrganizationUuid();
      if (r !== void 0 && r === g.hybridOrganizationUuid && r === (0, import_chunk_xcgcdx61.Si)()) return;
      e = r === void 0 ? "no_sign_in" : "sign_in_not_used";
    }
    if (!g.hasReportedRefusal) g.hasReportedRefusal = true, (0, import_chunk_cqa9hrgx.l)("managed_settings_sign_in_required", `request_${e}`);
    return (0, import_chunk_t3er6wbx.jAt)(e, true);
  }
  return;
}
function z() {
  if (!(0, import_chunk_xcgcdx61.EDs)()) return false;
  try {
    let e = require("/$bunfs/root/chunk-2q2c1b7t.js"), n = e.readSignedInOrganizationUuid(), r = (0, import_chunk_xcgcdx61.Si)(), o = n !== void 0 && n === r ? n : e.getHybridSettingsOrganization()?.organizationUuid, a = o && o === r && (0, import_chunk_xcgcdx61.Mz)(o);
    if (a && (0, import_chunk_xcgcdx61.hge)().every((c) => c === a || Object.keys(c).length === 0)) return false;
  } catch (e) {
    (0, import_chunk_w578pjby.t)(`The organization sign-in could not be read: ${String(e)}`, { level: "error" });
  }
  return true;
}
function e2i() {
  {
    if ((0, import_chunk_xcgcdx61.fOe)()) {
      if (!g.hasReportedSignInForNewProcess) g.hasReportedSignInForNewProcess = true, (0, import_chunk_cqa9hrgx.l)("managed_settings_sign_in_required", "request_sign_in_for_new_process");
      return new import_chunk_tvttgr51.QVn((0, import_chunk_t3er6wbx.k8i)((0, import_chunk_3t7ve0wy.ta)()), "Hybrid sign-in that only a new process takes up");
    }
    let e = T();
    if (e !== void 0) return new import_chunk_tvttgr51.QVn(e);
    if (z()) {
      if (!g.hasReportedLostSignIn) g.hasReportedLostSignIn = true, (0, import_chunk_cqa9hrgx.l)("managed_settings_sign_in_required", "request_sign_in_lost");
      return new import_chunk_tvttgr51.QVn((0, import_chunk_t3er6wbx.b8i)(), "Hybrid connection in use that this process can no longer go by");
    }
    let [n] = (0, import_chunk_xcgcdx61.gDr)();
    if (n !== void 0) {
      if (!g.hasReportedOrganizationLeft) g.hasReportedOrganizationLeft = true, (0, import_chunk_cqa9hrgx.l)("managed_settings_sign_in_required", "request_organization_left");
      return new import_chunk_tvttgr51.QVn((0, import_chunk_t3er6wbx.w8i)(n), "Process ran under a hybrid organization that the session has left");
    }
  }
  return;
}
function C(e) {
  {
    let n = require("/$bunfs/root/chunk-2q2c1b7t.js"), r = n.getHybridSettingsOrganization();
    if (r === null) return null;
    let o = (0, import_chunk_zc7mq9x0.t2i)(import_chunk_zhr7rpv7.pLr);
    if (o === null ? e : (0, import_chunk_zhr7rpv7.Ora)(o)) return null;
    let a = e && o !== null && !(0, import_chunk_zhr7rpv7.T4n)(o);
    if (a && r.signInEnded) return null;
    let c = (0, import_chunk_xcgcdx61.Mz)(r.organizationUuid), p = (0, import_chunk_zc7mq9x0.slt)(import_chunk_zmb62hr5.Vy), b = import_chunk_zmb62hr5.Vy.filter((h) => import_chunk_c203g5kd.s[h]), y = c?.ANTHROPIC_BASE_URL, m = a || !r.signInEnded && o !== null && !(0, import_chunk_zhr7rpv7.T4n)(o) && c !== void 0 && p !== null && (b.length > 0 ? b.every((h) => c[h] === "1" && !(0, import_chunk_69qhefwa.Ne)(p(h))) : !!y && !!import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL && (0, import_chunk_xcgcdx61.KFe)(import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL, y));
    return (0, import_chunk_2yx6c1y2.XPe)(r.organizationUuid) ? { eligible: false, ineligibleReason: "hybrid_yields_to_device_policy", hybridSignInKeepsCredentialAside: a && !import_chunk_c203g5kd.s.ANTHROPIC_UNIX_SOCKET && (0, import_chunk_2yx6c1y2.SJi)(r.organizationUuid) } : { eligible: true, hybridOrganizationUuid: r.organizationUuid, hybridSignInEnded: r.signInEnded, hybridBlockFilter: require("/$bunfs/root/chunk-77pb6j67.js").takeFromRawSettings, hybridProviderFromOrganization: !r.signInEnded, hybridOnlyForConnection: m, hybridPluginLockRules: (h, _) => require("/$bunfs/root/chunk-y2w54s9d.js").pluginLockRulesByUrl(h, _) };
  }
  return null;
}
