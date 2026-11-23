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
var chunk_8f66wxnw_exports = {};
__export(chunk_8f66wxnw_exports, {
  A3l: () => A3l,
  AOs: () => AOs,
  QNe: () => QNe,
  Tct: () => Tct,
  Zmn: () => Zmn,
  _Ir: () => _Ir,
  gIr: () => gIr,
  iVn: () => iVn
});
module.exports = __toCommonJS(chunk_8f66wxnw_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_t3er6wbx = require("/$bunfs/root/chunk-t3er6wbx.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_tp0b74sz = require("/$bunfs/root/chunk-tp0b74sz.js");
function g(e) {
  return e?.forceLoginMethod === "gateway" ? e.forceLoginGatewayUrl : void 0;
}
function f() {
  return (0, import_chunk_2yx6c1y2.Aw)() !== null || (0, import_chunk_2yx6c1y2.e$)() || l();
}
function l() {
  return (0, import_chunk_f9x2f6cx._te)()?.forceLoginOrgUUID !== void 0 || (0, import_chunk_f9x2f6cx.EJ)();
}
function QNe() {
  {
    let e = g((0, import_chunk_2yx6c1y2._e)("userSettings"));
    if (!e || f()) return;
    if ((0, import_chunk_tvttgr51.xee)("gateway") !== void 0) return;
    return e;
  }
  return;
}
function Zmn() {
  {
    let e = (0, import_chunk_xcgcdx61.Si)(), n = y(e);
    if (e !== null && n !== void 0) return d(e, n) === void 0 ? { url: n.url, organizationUuid: e, namedBy: "organization", keepsOrganizationSettings: true } : void 0;
    let i = e === null || (0, import_chunk_xcgcdx61.S3)() ? void 0 : (0, import_chunk_xcgcdx61.nxt)(e), t = (0, import_chunk_f9x2f6cx.Io)(), o = require("/$bunfs/root/chunk-2q2c1b7t.js"), a = i !== void 0 ? i === null || e === null ? void 0 : { url: i, organizationUuid: e } : t?.organizationUuid !== void 0 && o.readSignedInOrganizationUuid() === t.organizationUuid ? { url: t.url, organizationUuid: t.organizationUuid, fromSavedSignIn: true } : void 0, u = (0, import_chunk_2yx6c1y2.vt)().forceLoginMethod;
    if (a === void 0 || u === "claudeai" || u === "console" || (0, import_chunk_tp0b74sz.Q1)() || gIr(a.url) || s((0, import_chunk_2yx6c1y2.Aw)()) || (0, import_chunk_tvttgr51.xee)("gateway") !== void 0) return;
    return { ...a, namedBy: "organization" };
  }
  return;
}
function AOs() {
  {
    let e = `you are not signed in to your organization \xB7 Run ${(0, import_chunk_xcgcdx61.oP)()}`, n = (0, import_chunk_xcgcdx61.Si)();
    if (n === null || (0, import_chunk_xcgcdx61.S3)()) return e;
    let i = (0, import_chunk_xcgcdx61.gge)(n);
    if (i === void 0) {
      let o = (0, import_chunk_xcgcdx61.Tm)();
      if ((o?.state === "failed" || o?.state === "stale_cache") && o.failure.errorKind === "sign_in_off") return (0, import_chunk_t3er6wbx.Uhe)("sign_in_off");
      return "Claude Code could not get your organization's settings \xB7 Check your network and try again, or run /status in Claude Code for details";
    }
    if (i === null || !("identityProviderSignIn" in i)) return "there is no sign-in through an identity provider that Claude Code can use on this computer \xB7 For details, start `claude` and run /status";
    let t = require("/$bunfs/root/chunk-mn0yw68p.js");
    return d(n, i) ?? t.gatewayIdpConnectionOf(i) ?? e;
  }
  return "";
}
function iVn() {
  let e = AOs();
  return typeof e === "string" ? void 0 : e;
}
function y(e) {
  let n = e === null ? void 0 : (0, import_chunk_xcgcdx61.gge)(e);
  return n && "gatewaySignIn" in n ? n : void 0;
}
function d(e, n) {
  let i = require("/$bunfs/root/chunk-mn0yw68p.js");
  if (i.activeHybridHelper("firstParty") !== n) return "this computer's settings send Claude Code's requests elsewhere \xB7 Run /status in Claude Code for details";
  if ((0, import_chunk_xcgcdx61.S3)()) return `your sign-in to your organization has ended \xB7 Run ${(0, import_chunk_xcgcdx61.oP)()}`;
  if ((0, import_chunk_xcgcdx61.yDr)(e)) return "Claude Code could not use your organization's latest settings \xB7 Run /status in Claude Code for details";
  if ((0, import_chunk_2yx6c1y2.vt)().forceLoginMethod === "console") return "a setting requires an Anthropic Console sign-in (forceLoginMethod) \xB7 Remove it, or ask your administrator";
  if ((0, import_chunk_tp0b74sz.Q1)()) return "this computer's managed settings require a sign-in at another gateway \xB7 Ask your IT administrator";
  if (s((0, import_chunk_2yx6c1y2.Aw)())) return "this computer's policy helper has not run yet \xB7 Start Claude Code again";
  return (0, import_chunk_tvttgr51.xee)("firstParty") === void 0 ? void 0 : "this computer's managed settings don't allow the gateway's address (allowedProviders) \xB7 Ask your IT administrator";
}
var c = "Claude Code did not send this request. Your organization sends Claude Code's requests through its gateway, which you haven't signed in to \xB7 Run /login to sign in to it, or /status for details", h = "Claude Code did not send this request. Your organization sends Claude Code's requests through its gateway, which you haven't signed in to. That sign-in needs an interactive session: start `claude` in a terminal, run /login and sign in to the gateway. Then start Claude Code again.", p = `Claude Code did not send this request. Your organization sends Claude Code's requests through its gateway, but this computer's managed settings do not name that gateway, so Claude Code does not sign in to it here. ${import_chunk_xcgcdx61.jJe}. Ask your IT administrator to name the gateway in this computer's managed settings (forceLoginGatewayUrl), then start Claude Code again.`;
function A3l() {
  {
    if (Zmn() !== void 0) return (0, import_chunk_f9x2f6cx.Se)() ? h : c;
    let e = (0, import_chunk_xcgcdx61.Si)(), n = y(e);
    if (e !== null && n !== void 0) {
      let t = require("/$bunfs/root/chunk-hxqzwt88.js");
      return t.gatewaySignInNotOffered(d(e, n));
    }
    let i = e === null ? void 0 : (0, import_chunk_xcgcdx61.nxt)(e);
    if (i && gIr(i)) return p;
  }
  return;
}
(0, import_chunk_tvttgr51.rXi)(A3l);
(0, import_chunk_xcgcdx61.ota)(gIr);
function Tct(e, n) {
  if ((0, import_chunk_tp0b74sz.Q1)()) {
    let { forceLoginGatewayUrl: t, gatewayInternalNetworks: o } = (0, import_chunk_2yx6c1y2.JPe)();
    return t === void 0 ? { url: t } : { url: t, namedBy: "administrator", internalNetworks: o };
  }
  let i = (0, import_chunk_2yx6c1y2.vt)().forceLoginMethod;
  if (i === "console" || i === "claudeai" && !n?.keepsOrganizationSettings) return;
  return n ?? (e === void 0 ? void 0 : { url: e, namedBy: "developer" });
}
function gIr(e) {
  {
    let n = (0, import_chunk_2yx6c1y2.Aw)(), i = s(n), t = n?.forceLoginGatewayUrl === void 0 && n?.forceLoginMethod === "gateway";
    return (i || t ? l() || (0, import_chunk_tvttgr51.vIo)(g((0, import_chunk_2yx6c1y2.vl)("userSettings")), e) : f()) && !(0, import_chunk_tvttgr51.FIs)(e) && !(0, import_chunk_tvttgr51.vIo)((0, import_chunk_2yx6c1y2.Zde)()?.forceLoginGatewayUrl, e);
  }
  return false;
}
function _Ir(e) {
  {
    let n = (0, import_chunk_f9x2f6cx.Io)();
    if (!(0, import_chunk_f9x2f6cx.iA)(n) || (0, import_chunk_tp0b74sz.Q1)()) return;
    let i = require("/$bunfs/root/chunk-2q2c1b7t.js"), t = e ?? i.readSignedInOrganizationUuid();
    return t === void 0 || n.organizationUuid?.toLowerCase() === t.toLowerCase() ? void 0 : n.url;
  }
  return;
}
function s(e) {
  return e?.forceLoginGatewayUrl === void 0 && !(0, import_chunk_2yx6c1y2.Qde)() && (e?.policyHelper != null || (0, import_chunk_2yx6c1y2.yMs)(e));
}
