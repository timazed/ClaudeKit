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
var chunk_jm07ya5t_exports = {};
__export(chunk_jm07ya5t_exports, {
  A0a: () => A0a,
  C0a: () => C0a,
  E0a: () => E0a,
  T0a: () => T0a,
  bCn: () => bCn,
  i5r: () => i5r,
  k0a: () => k0a,
  s5r: () => s5r,
  v0a: () => v0a,
  wCn: () => wCn
});
module.exports = __toCommonJS(chunk_jm07ya5t_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_3f2ytgjw = require("/$bunfs/root/chunk-3f2ytgjw.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_promises = require("fs/promises");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var bCn = "41077d10-94b8-4194-be48-d251e9eb21b4", k0a = [import_chunk_ephf358x.LK, import_chunk_ephf358x.uP], O = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ created_by: (0, import_chunk_adx6804h.n)().optional(), base_url: (0, import_chunk_adx6804h.n)().optional(), authentication: (0, import_chunk_adx6804h.$t)({ type: (0, import_chunk_adx6804h.n)(), client_id: (0, import_chunk_adx6804h.n)().optional(), credentials_path: (0, import_chunk_adx6804h.n)().optional() }) })), T = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ created_by: (0, import_chunk_adx6804h.n)().optional() })), I = { no_config_dir: true, invalid_profile_name: true, foreign_profile: true, custom_credentials_path: true, api_key_env_nondispatching: true, wif_env_quad: false, third_party_provider: false, api_key_env: false, env_credential_shadow: false, organizations_gateway: false, other_deployment_profile: false, federation_profile: false, unreadable_profile: false };
function b(e) {
  return Object.hasOwn(I, e);
}
function s5r(e) {
  if (!(e instanceof import_chunk_jv7av99m.A) || e.errorClass === void 0 || !b(e.errorClass)) return null;
  return I[e.errorClass];
}
var R = { no_config_dir: "no Anthropic config directory was found", invalid_profile_name: "the configured profile name isn't valid", foreign_profile: "the profile on this machine belongs to another tool", custom_credentials_path: "the existing profile keeps its sign-in somewhere custom", api_key_env_nondispatching: "ANTHROPIC_API_KEY is set in this environment" };
function E0a(e) {
  if (!(e instanceof import_chunk_jv7av99m.A) || e.errorClass === void 0 || !N(e.errorClass)) return null;
  return R[e.errorClass];
}
function N(e) {
  return Object.hasOwn(R, e);
}
async function wCn() {
  if (!(0, import_chunk_9b4aq7fb.jX)(import_chunk_c203g5kd.s.ANTHROPIC_PROFILE) && import_chunk_c203g5kd.s.ANTHROPIC_FEDERATION_RULE_ID && import_chunk_c203g5kd.s.ANTHROPIC_ORGANIZATION_ID) throw new import_chunk_jv7av99m.A("Workload identity federation is configured in this environment (ANTHROPIC_FEDERATION_RULE_ID and ANTHROPIC_ORGANIZATION_ID), and it takes precedence over the default profile. Set ANTHROPIC_PROFILE to a profile name to sign in with a profile that outranks it.", "Console profile login refused: env-quad federation outranks the implicit profile", "wif_env_quad");
  let e = (0, import_chunk_zhr7rpv7.ve)();
  if (e !== "firstParty") throw new import_chunk_jv7av99m.A(`This session uses ${import_chunk_zhr7rpv7.tx[e]}, which does not use Anthropic Console sign-in.`, "This session uses a third-party provider, which does not use Anthropic Console sign-in.", "third_party_provider");
  let o = import_chunk_c203g5kd.s.ANTHROPIC_API_KEY;
  if (o) {
    let l = await (0, import_chunk_865at33z.kRs)({ skipRetrievingKeyFromApiKeyHelper: true });
    if (l.source === "ANTHROPIC_API_KEY" && l.key === o) throw new import_chunk_jv7av99m.A("ANTHROPIC_API_KEY is set in this environment and takes precedence over a profile, so a profile sign-in would not be used. Unset it to sign in this way.", "Console profile login refused: env credential shadows the profile", "api_key_env");
  }
  if ((0, import_chunk_865at33z.qU)()) throw new import_chunk_jv7av99m.A("This session's requests go to your organization's gateway, which doesn't accept your own Anthropic sign-in, so a profile sign-in would not be used here.", "Console profile login refused: the organization's gateway doesn't accept the person's own sign-in", "organizations_gateway");
  if ((0, import_chunk_865at33z.pde)()) throw new import_chunk_jv7av99m.A("Something in this environment \u2014 an API key helper, an injected token, or a third-party provider setting \u2014 takes precedence over a profile sign-in, so it would not be used here.", "Console profile login refused: env credential shadows the profile", "env_credential_shadow");
  let i = (0, import_chunk_9b4aq7fb.FA)();
  if (i === null) throw new import_chunk_jv7av99m.A("Cannot locate the Anthropic config directory. Set ANTHROPIC_CONFIG_DIR (or HOME) and try again.", "Console profile login refused: no config directory", "no_config_dir");
  let a = g(i), r = await h((0, import_path.join)(i, "configs", `${a}.json`));
  if (r !== null) {
    if (r.base_url && !(0, import_chunk_zhr7rpv7.md)(r.base_url)) throw new import_chunk_jv7av99m.A("This profile is bound to a different Anthropic deployment, so Claude Code will not replace it here. Sign out of it with the tool that created it, then try again.", "Console profile login refused: profile bound to another deployment", "other_deployment_profile");
    if (r.authentication.type === "oidc_federation") throw new import_chunk_jv7av99m.A("This machine is set up for workload identity federation, which signs in on its own. If you need a different sign-in, ask whoever configured it.", "Console profile login refused: federation profile", "federation_profile");
    if (r.authentication.type !== "user_oauth") throw new import_chunk_jv7av99m.A("Claude Code cannot read the existing sign-in on this machine, so it will not overwrite it. Check the permissions on your Anthropic config directory, then try again.", "Console profile login refused: unreadable or unrecognized profile config", "unreadable_profile");
    if (r.authentication.client_id !== bCn) throw new import_chunk_jv7av99m.A("This machine already has a sign-in from another tool that Claude Code cannot replace. Sign out with that tool, then try again.", "Console profile login refused: profile is not a same-client login", "foreign_profile");
    if (r.authentication.credentials_path) throw new import_chunk_jv7av99m.A("This profile keeps its sign-in somewhere custom, so Claude Code cannot replace it. Sign out of it with the tool that created it, then try again.", "Console profile login refused: custom credentials_path", "custom_credentials_path");
  }
  if (o) throw new import_chunk_jv7av99m.A("ANTHROPIC_API_KEY is set in this environment. Unset it to sign in without an API key.", "Console profile login refused: non-dispatching env API key present", "api_key_env_nondispatching");
  return { profile: a, configDir: i, isNewProfile: r === null };
}
async function v0a(e) {
  let o = await wCn();
  return await (0, import_promises.mkdir)((0, import_path.join)(o.configDir, "credentials"), { recursive: true, mode: 448 }), (0, import_chunk_3f2ytgjw.EGi)(u(o.configDir, o.profile), () => S(e));
}
async function S(e) {
  let { profile: o, configDir: i, isNewProfile: a } = await wCn(), r = (0, import_path.join)(i, "configs", `${o}.json`);
  await (0, import_promises.mkdir)((0, import_path.join)(i, "configs"), { recursive: true, mode: 448 });
  let l = { version: import_chunk_3f2ytgjw.PTl, organization_id: e.organizationUuid, workspace_id: e.workspaceId, authentication: { type: "user_oauth", client_id: bCn }, ...import_chunk_9b4aq7fb.GX };
  await (0, import_chunk_9b4aq7fb.dRt)(r, l);
  let c = a, C = { version: import_chunk_3f2ytgjw.TCr, type: "oauth_token", access_token: e.accessToken, refresh_token: e.refreshToken, expires_at: Math.floor(e.expiresAtMs / 1e3), scope: e.scopes.join(" "), organization_uuid: e.organizationUuid, organization_name: e.organizationName, account_email: e.accountEmail };
  await (0, import_chunk_9b4aq7fb.dRt)(u(i, o), { ...C, workspace_id: e.workspaceId, workspace_name: e.workspaceName, ...import_chunk_9b4aq7fb.GX });
  let v = await F((0, import_path.join)(i, "active_config"), o + `
`);
  return (0, import_chunk_w578pjby.t)(`Console profile login: wrote credentials for profile ${o}${c ? " (new profile)" : ""}${v ? " (set active)" : ""}`), (0, import_chunk_3f2ytgjw.Qvt)(), { profile: o, configDir: i };
}
async function T0a({ revoke: e } = {}) {
  try {
    let o = (0, import_chunk_9b4aq7fb.FA)();
    if (o === null) return { removed: false };
    let i;
    try {
      i = g(o);
    } catch {
      return { removed: false };
    }
    let a = await h((0, import_path.join)(o, "configs", `${i}.json`));
    if (a === null || !m(a)) return { removed: false };
    if (await _(u(o, i)) === null) return { removed: false };
    return await (0, import_chunk_3f2ytgjw.EGi)(u(o, i), () => L(e));
  } catch (o) {
    if ((0, import_chunk_jv7av99m.w)(o) === "ENOENT") return { removed: false };
    return (0, import_chunk_w578pjby.t)(`Logout: profile credential removal failed: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" }), { removed: false };
  }
}
async function L(e) {
  let o = (0, import_chunk_9b4aq7fb.FA)();
  if (o === null) return { removed: false };
  let i;
  try {
    i = g(o);
  } catch {
    return { removed: false };
  }
  let a = await h((0, import_path.join)(o, "configs", `${i}.json`));
  if (a === null || !m(a)) return { removed: false };
  let r = u(o, i), l = await _(r);
  if (l === null) return { removed: false };
  let c = { refreshToken: l.refreshToken, clientId: bCn };
  if (e && c.refreshToken) await e({ refreshToken: c.refreshToken, clientId: c.clientId });
  try {
    await (0, import_promises.unlink)(r);
  } catch (C) {
    return (0, import_chunk_w578pjby.t)(`Logout: could not remove profile credentials: ${(0, import_chunk_jv7av99m.d)(C)}`, { level: "error" }), { removed: false, ...c };
  }
  return (0, import_chunk_w578pjby.t)(`Logout: removed credentials for profile ${i}`), (0, import_chunk_3f2ytgjw.Qvt)(), { removed: true, ...c };
}
function g(e) {
  let o = import_chunk_c203g5kd.s.ANTHROPIC_PROFILE || (0, import_chunk_9b4aq7fb.fJe)(e);
  if (!(0, import_chunk_9b4aq7fb.jX)(o)) throw new import_chunk_jv7av99m.A(`ANTHROPIC_PROFILE "${o}" is not a valid profile name (letters, digits, '_', '.', '-')`, "ANTHROPIC_PROFILE is not a valid profile name", "invalid_profile_name");
  return o;
}
function u(e, o) {
  return (0, import_path.join)(e, "credentials", `${o}.json`);
}
async function h(e) {
  let o;
  try {
    o = await (0, import_promises.readFile)(e, "utf-8");
  } catch (r) {
    if ((0, import_chunk_jv7av99m.w)(r) === "ENOENT") return null;
    if ((0, import_chunk_jv7av99m.fn)(r)) return { authentication: { type: "unreadable" } };
    throw r;
  }
  let i;
  try {
    i = (0, import_chunk_w578pjby.te)(o);
  } catch (r) {
    return (0, import_chunk_w578pjby.t)(`Profile config is not JSON, treating as foreign: ${(0, import_chunk_jv7av99m.d)(r)}`), { authentication: { type: "unreadable" } };
  }
  let a = O().safeParse(i);
  return a.success ? a.data : { authentication: { type: "unreadable" } };
}
function m(e) {
  return e.created_by === import_chunk_9b4aq7fb.GX.created_by && e.authentication.type === "user_oauth" && e.authentication.client_id === bCn;
}
async function _(e) {
  let o;
  try {
    o = await (0, import_promises.readFile)(e, "utf-8");
  } catch (l) {
    if ((0, import_chunk_jv7av99m.fn)(l)) return null;
    throw l;
  }
  let i;
  try {
    i = (0, import_chunk_w578pjby.te)(o);
  } catch {
    return null;
  }
  let a = T().safeParse(i);
  if (!a.success || a.data.created_by !== import_chunk_9b4aq7fb.GX.created_by) return null;
  let r = a.data.refresh_token;
  return { refreshToken: typeof r === "string" ? r : void 0 };
}
async function i5r(e) {
  let o = (0, import_chunk_9b4aq7fb.FA)();
  if (o === null) return false;
  try {
    let i = await _(u(o, g(o)));
    return i !== null && i.refreshToken === e;
  } catch {
    return true;
  }
}
async function C0a() {
  return false;
}
async function A0a() {
  try {
    let e = (0, import_chunk_9b4aq7fb.FA)();
    if (e === null) return false;
    let o = g(e), i = await h((0, import_path.join)(e, "configs", `${o}.json`));
    return i !== null && m(i) && await _(u(e, o)) !== null;
  } catch {
    return false;
  }
}
async function F(e, o) {
  try {
    return await (0, import_promises.writeFile)(e, o, { flag: "wx", mode: 420 }), true;
  } catch (i) {
    if ((0, import_chunk_jv7av99m.w)(i) === "EEXIST") return false;
    throw i;
  }
}
