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
var chunk_t3er6wbx_exports = {};
__export(chunk_t3er6wbx_exports, {
  Cct: () => Cct,
  E8i: () => E8i,
  KPo: () => KPo,
  ROs: () => ROs,
  SIr: () => SIr,
  Uhe: () => Uhe,
  WAt: () => WAt,
  b8i: () => b8i,
  bIr: () => bIr,
  jAt: () => jAt,
  k8i: () => k8i,
  w8i: () => w8i,
  xOs: () => xOs,
  yIr: () => yIr
});
module.exports = __toCommonJS(chunk_t3er6wbx_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
function Cct() {
  let e = (0, import_chunk_xcgcdx61.Tm)();
  if (e) return e;
  if ((0, import_chunk_xcgcdx61.JC)() === false) {
    let n = (0, import_chunk_xcgcdx61.mge)();
    if (n) return { state: "ineligible", reason: n };
  }
  return;
}
function ROs() {
  return (0, import_chunk_xcgcdx61.JC)() === true && (0, import_chunk_xcgcdx61.Tm)() === void 0;
}
function WAt() {
  if ((0, import_chunk_xcgcdx61.JC)() !== true) return false;
  let e = (0, import_chunk_xcgcdx61.Tm)();
  if (e !== void 0) return e.state === "failed";
  let n = (0, import_chunk_xcgcdx61.Yb)();
  return n === null || Object.keys(n).length === 0;
}
function yIr() {
  {
    let e = (0, import_chunk_xcgcdx61.Dea)();
    if (e !== null) {
      let n = Math.max(0, e.names.length - 10);
      return `the cached copy of your organization's settings does not apply in full until a fetch replaces it. Left out of the copy, in whole or in part: ${[e.names.length > 0 && `${e.names.slice(0, 10).join(", ")}${n > 0 ? ` and ${n} more (--debug lists them)` : ""}`, e.others && "settings that this version of Claude Code doesn't know"].filter((t) => t !== false).join(", and ")}`;
    }
  }
  return null;
}
function SIr(e = Date.now()) {
  {
    let n = (0, import_chunk_xcgcdx61.Si)();
    if (n === null) return null;
    let i = (0, import_chunk_xcgcdx61.vea)();
    if (i !== void 0) return `fetched from your organization ${(0, import_chunk_f64qna2j.Ty)(new Date(i), { now: new Date(e) })}, in this session`;
    let t = (0, import_chunk_xcgcdx61.cta)();
    if (t === void 0) return "not fetched in this session";
    if (t === null || t.organizationUuid !== n) return "not fetched in this session, and no cached copy";
    return t.fetchedAtMs === void 0 || t.fetchedAtMs > e + 6e4 ? "not fetched in this session; the cached copy is of an unknown age" : `not fetched in this session; the cached copy was fetched ${(0, import_chunk_f64qna2j.Ty)(new Date(Math.min(t.fetchedAtMs, e)), { now: new Date(e) })}`;
  }
  return null;
}
function xOs(e) {
  switch (e) {
    case "third_party_provider":
      return "not available on Bedrock/Vertex/third-party providers";
    case "custom_base_url":
      return "not available with a custom ANTHROPIC_BASE_URL";
    case "hybrid_yields_to_device_policy":
      return "your organization's settings aren't applied here because this computer's own managed settings take priority: they don't name your organization (forceLoginOrgUUID), run a policy helper, couldn't be read, or were still loading at start-up (restart to check again). Ask your IT administrator if you expected your organization's settings to apply.";
    case "profile_base_url_mismatch":
      return "not available: the active profile's base_url is not the Anthropic API host";
    case "sandboxed_entrypoint":
      return "not available in sandboxed sessions";
    case "claude_tag":
      return "Claude in Slack and Claude in Teams sessions don't apply server-managed settings; organization policy limits are decided separately";
    case "hermetic_remote_session":
      return "not available in hermetic remote sessions";
    case "unpinned_gateway":
      return "gateway auth is unpinned; run `claude auth login` to pin";
    case "host_gateway_not_accepted":
      return "Claude Desktop's gateway is not an accepted source of managed settings on this machine (not the gateway its managed settings name in forceLoginGatewayUrl, not on your organization's network, or not reached over https); contact your administrator";
    case "unsupported_subscription":
      return "requires an Enterprise or Team subscription";
    case "no_auth":
      return "no usable credentials for the settings fetch";
  }
}
function jAt(e, n = false, i = false) {
  {
    let t = n ? "so this request was not sent" : "so Claude Code does not start";
    if (e === "unreadable") return `Claude Code could not read the managed settings that apply to this computer, which may require a sign-in to Anthropic (enforceAnthropicSignIn), ${t}. ${i ? "If this report lists no managed settings error" : "Run `claude doctor` for the cause. If it shows none"}, run \`claude update\`, or ask your administrator.`;
    let u = (0, import_chunk_2yx6c1y2.Aw)()?.forceLoginOrgUUID, d = u === void 0 || u.length === 0;
    if (import_chunk_c203g5kd.s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return `This computer's settings require a sign-in to Anthropic that this app cannot use, ${t}. Ask your administrator about that setting (enforceAnthropicSignIn). To use Claude Code in a terminal on this computer instead, run \`claude auth login\` there. Choose the account or organization that has your Claude subscription.${d ? "" : " Or, if your company reaches Claude through its own cloud account or server, choose the organization that your administrators manage in Anthropic's Enterprise Admin Console."}`;
    if (d) return e === "no_sign_in" ? `This computer's managed settings require a sign-in to Anthropic (enforceAnthropicSignIn), and none is stored or this session cannot read it (\`--bare\` and an app that manages the provider read none), ${t}. For a session on Anthropic's API, run \`claude auth login\`, then start \`claude\` again. An organization sign-in (to the organization that your administrators manage in Anthropic's Enterprise Admin Console, not a claude.ai login) would count for a session on a cloud provider or behind a custom base URL, but only if these managed settings name that organization (forceLoginOrgUUID). They name none. If your company has such an organization, ask your administrator to add it. An API key, an auth token or a key helper is not a sign-in.` : `This computer's managed settings require a sign-in to Anthropic (enforceAnthropicSignIn), and this session does not run under the one that is stored, ${t}. A claude.ai login counts for a session on Anthropic's API. An organization sign-in (to the organization that your administrators manage in Anthropic's Enterprise Admin Console, not a claude.ai login) would count for a session on a cloud provider or behind a custom base URL, but only if these managed settings name that organization (forceLoginOrgUUID). They name none. If your company has such an organization, ask your administrator to add it. Other causes, on Anthropic's API: \`--bare\`; an Anthropic API key, an auth token or a key helper, which decides before the sign-in (unset \`ANTHROPIC_API_KEY\` or \`ANTHROPIC_AUTH_TOKEN\` if one is set); an \`Authorization\` line or an API key line in \`ANTHROPIC_CUSTOM_HEADERS\`; Claude Desktop or another app that starts Claude Code and manages the provider.`;
    let a = e === "sign_in_not_used" ? (0, import_chunk_xcgcdx61.dF)() : void 0, r = n ? "Claude Code did not send this request." : i ? "Claude Code does not start." : "Claude Code did not start.";
    if (a === "connection_unusable") return `${r} This computer's managed settings require a sign-in to Anthropic (enforceAnthropicSignIn). ${import_chunk_xcgcdx61.nqt} Claude Code does not use your own sign-in in place of that connection. Ask your administrator.`;
    let c = (0, import_chunk_xcgcdx61.Si)();
    if (a === "no_cloud_provider" && c !== null && (0, import_chunk_xcgcdx61.nxt)(c)) return `${r} This computer's managed settings require a sign-in to Anthropic (enforceAnthropicSignIn). The organization that you signed in to (an organization sign-in, not a claude.ai login) lets its gateway manage Claude Code. A session that a gateway manages does not meet that setting. Ask your administrator to do one of these two things: remove enforceAnthropicSignIn from this computer's managed settings and name the gateway in those settings (forceLoginGatewayUrl), or, in Anthropic's Enterprise Admin Console, change how the gateway is set up for Claude Code.`;
    if (a === "no_cloud_provider") return `${r} This computer's managed settings require a sign-in to Anthropic (enforceAnthropicSignIn). ${n ? import_chunk_xcgcdx61.oqt : "You use an organization sign-in (not a claude.ai login). That organization's settings name no cloud provider for Claude Code. Under that sign-in, Claude Code does not use a claude.ai login"}. Ask your administrator to set up a cloud provider, then start Claude Code again. Or, at your shell prompt, run \`claude auth logout\`. This command signs you out of every account. Then start Claude Code, sign in, and choose the account or organization that has your Claude subscription. An API key does not meet this setting.`;
    return e === "no_sign_in" ? `This computer's managed settings require a sign-in to Anthropic (enforceAnthropicSignIn), and none is stored or this session cannot read it (\`--bare\` and an app that manages the provider read none), ${t}. For a session on Anthropic's API, run \`claude auth login\`. For a session on a cloud provider or behind a custom base URL, run ${(0, import_chunk_xcgcdx61.oP)()}. Then start \`claude\` again. An API key, an auth token or a key helper is not a sign-in.` : `This computer's managed settings require a sign-in to Anthropic (enforceAnthropicSignIn), and this session does not run under the one that is stored, ${t}. A claude.ai login counts for a session on Anthropic's API. An organization sign-in (to the organization that your administrators manage in Anthropic's Enterprise Admin Console) counts for a session on a cloud provider or behind a custom base URL that takes that organization's settings. The usual causes: \`--bare\`; an Anthropic API key, an auth token or a key helper, which decides before a claude.ai login (unset \`ANTHROPIC_API_KEY\` or \`ANTHROPIC_AUTH_TOKEN\` if one is set); a claude.ai login on a session that is not on Anthropic's API, with no organization sign-in stored (run ${(0, import_chunk_xcgcdx61.oP)()}); an organization sign-in on a session that is on Anthropic's API; an \`Authorization\` line or an API key line in \`ANTHROPIC_CUSTOM_HEADERS\`; Claude Desktop or another app that starts Claude Code and manages the provider; a Claude apps gateway session, or \`CLAUDE_CODE_USE_GATEWAY\`; the computer's own managed settings, which keep priority over the organization that you signed in to unless their \`forceLoginOrgUUID\` names it (ask your administrator); a managed settings file that Claude Code could not read (start \`claude\` again, and if the problem continues, ask your administrator).`;
  }
  return "";
}
function b8i() {
  return "Claude Code did not send this request. This session sends its requests to the API provider that came with an organization sign-in, but the session no longer runs under that sign-in. Usually, this is because you signed out or signed in to another account, in this window or in another window. To continue, run /login and choose the organization that your administrators manage in Anthropic's Enterprise Admin Console. If Claude Code still does not send requests, exit and run `claude`. A new session uses the account that you are signed in to now.";
}
function w8i(e) {
  return `Claude Code did not send this request. This Claude Code process ran under your organization (${e}). Now, the process does not run under that organization. Usually, this is because you signed out or signed in to another account, in this window or in another window. The process may still hold the conversation it had under that organization, including what you typed, file contents and command output. ${(0, import_chunk_3t7ve0wy.ta)() ? "To continue, start a new conversation." : "To continue, start Claude Code again. In a terminal, exit Claude Code, then run claude."}`;
}
function k8i(e) {
  return `Claude Code did not send this request. After a sign-in to your organization, only a new session sends requests. To continue, ${e ? "open the conversation again from Session history" : "exit, then run `claude`"}.`;
}
function KPo(e) {
  return e?.includes("`claude auth logout`") === true;
}
function Uhe(e, n) {
  switch (e) {
    case "no_auth_available":
      if ((0, import_chunk_xcgcdx61.bqn)()) return `the organization sign-in is due for renewal, and this process can't renew it; to renew it, start \`claude\` once in a terminal; if that does not help, run ${(0, import_chunk_xcgcdx61.oP)()}`;
      if ((0, import_chunk_xcgcdx61.S3)()) return `no readable organization sign-in (it may have ended, or your organization may have removed you), so only your organization's cached restrictions, limits, announcements and MCP server lists apply, and your own hooks may be off; to apply the rest, run ${(0, import_chunk_xcgcdx61.oP)()}; or run \`claude auth logout\` to sign out of all accounts and clear any cached settings; if sign-in fails, ask your administrator`;
      if ((0, import_chunk_xcgcdx61.Si)() !== null) return `no usable organization sign-in; your sign-in may have ended, or your organization may have removed you; run ${(0, import_chunk_xcgcdx61.oP)()}; if that fails, ask your administrator; to sign out of all accounts and clear any cached settings, run \`claude auth logout\``;
      return "no credentials available";
    case "profile_credential_error":
      return "the profile credential could not authenticate the fetch (details in the debug log)";
    case "api_key_not_sent":
    case "http_401":
      if ((0, import_chunk_xcgcdx61.Si)() !== null) return `authentication rejected (401); your organization may have removed you or revoked your sign-in; run ${(0, import_chunk_xcgcdx61.oP)()}; if that fails, ask your administrator`;
      return "authentication rejected (401)";
    case "http_403":
      if ((0, import_chunk_xcgcdx61.Si)() !== null) return "access denied (403); connect from your organization's network or ask your administrator";
      return "access denied (403)";
    case "http_4xx":
      if (n === 404 && (0, import_chunk_xcgcdx61.Si)() !== null) return `organization settings are not available for this sign-in (404); to sign in again, run ${(0, import_chunk_xcgcdx61.oP)()}; if that does not help, check that this network's proxy isn't answering in Anthropic's place, and ask your administrator to check your access to the organization; if the problem continues, run \`claude auth logout\` to sign out of all accounts and clear any cached settings`;
      if (n !== void 0 && (n < 400 || n === 404)) return `answered by a network intermediary, not Anthropic (${n}); check this network's proxy`;
      return `client error${n ? ` (${n})` : ""}`;
    case "http_5xx":
      return `server error${n ? ` (${n})` : ""}`;
    case "timeout":
      return "request timed out";
    case "network_error":
      return "network error";
    case "gateway_cert_mismatch":
      return "gateway certificate mismatch";
    case "gateway_pin_refused":
      return "gateway TLS pin is in a symlinked credentials file";
    case "gateway_pin_unreadable":
      return "gateway TLS pin could not be read from the credentials file";
    case "gateway_public_address":
      return "gateway host resolved to a public address at fetch time";
    case "parse_error":
      if ((0, import_chunk_xcgcdx61.Si)() !== null) return "the response isn't a settings document this version can read; update Claude Code if this keeps happening";
      return "server response could not be parsed";
    case "ruled_empty":
      return "no setting in the server response could be applied as written";
    case "sign_in_off":
      return "the organization that your administrators manage in Anthropic's Enterprise Admin Console has not turned on Claude Code sign-in for you; ask an owner of that organization to turn it on in the admin console";
    case "unknown_error":
      return "unexpected error";
  }
}
function E8i(e) {
  switch (e.state) {
    case "failed":
    case "stale_cache":
      return true;
    case "ok":
      return (0, import_chunk_xcgcdx61.Si)() !== null && (!e.hasSettings || (0, import_chunk_xcgcdx61.SDs)() !== null || (0, import_chunk_xcgcdx61.kDs)() !== null);
    case "ineligible":
      return e.reason === "third_party_provider" || e.reason === "custom_base_url" || e.reason === "hybrid_yields_to_device_policy" || e.reason === "profile_base_url_mismatch" || e.reason === "unpinned_gateway" || e.reason === "host_gateway_not_accepted";
  }
}
var h = "mcp__plugin_*_*";
function bIr(e) {
  if ((0, import_chunk_xcgcdx61.bqn)()) return `not fetched \u2014 the organization sign-in is due for renewal; your next \`claude\` session renews it; ${e.state === "failed" ? "no settings apply until then" : `cached settings apply until then${(0, import_chunk_xcgcdx61.xDs)() ? ", without the hosts that your organization allows" : ""}`}`;
  switch (e.state) {
    case "ok":
      if ((0, import_chunk_xcgcdx61.Si)() !== null) {
        let n = (0, import_chunk_xcgcdx61.SDs)(), i = (0, import_chunk_xcgcdx61.mDr)().length > 0, t = e.hasSettings ? (0, import_chunk_xcgcdx61.kDs)() : null;
        if (n !== null) return t === null ? `${e.hasSettings || i ? "loaded, but" : "nothing to apply:"} ${n}` : `loaded, but ${n}. ${t.charAt(0).toUpperCase()}${t.slice(1)}`;
        if (!e.hasSettings) return i ? "loaded: of your organization's settings, only its plugin marketplaces reach Claude Code in a terminal (/plugin \u2192 Marketplaces)" : "none of your organization's settings apply to Claude Code in a terminal";
        if (t !== null) return `loaded; ${t}`;
      }
      return e.hasSettings ? "loaded" : "none configured for this organization";
    case "stale_cache": {
      let n = `fetch failed \u2014 using stale cache (${Uhe(e.failure.errorKind, e.failure.httpStatus)})${e.transportEnvWithheld ? "; proxy/CA/provider env withheld until a fetch succeeds" : ""}`;
      if ((0, import_chunk_xcgcdx61.Si)() !== null) {
        let t = `${(0, import_chunk_xcgcdx61.xDs)() ? `${n}; the hosts that your organization allows are withheld until a fetch succeeds` : n}${l()}`;
        return KPo(t) ? t : `${t}; the cached settings may turn off your own hooks; to clear them, run \`claude auth logout\` (signs out of all accounts)`;
      }
      return n;
    }
    case "failed": {
      let n = `fetch failed \u2014 ${e.restrictionsOnly ? "the stale cache's restrictions still apply" : "no policy applied"} (${Uhe(e.failure.errorKind, e.failure.httpStatus)})${e.restrictionsOnly ? l() : ""}`;
      return e.restrictionsOnly && !KPo(n) ? `${n}; to clear them, run \`claude auth logout\` (signs out of all accounts)` : n;
    }
    case "ineligible":
      return `not fetched \u2014 ${(0, import_chunk_xcgcdx61.dF)() === "computer_names_no_organization" ? import_chunk_xcgcdx61.rqt.replace(/^You/, "you") : xOs(e.reason)}`;
  }
}
function l() {
  if ((0, import_chunk_xcgcdx61.Si)() !== null && (0, import_chunk_xcgcdx61.Yb)()?.permissions?.deny?.includes(h)) return "; all tools of plugins' MCP servers are blocked: your organization blocks them, or its locks on them couldn't be read when last fetched";
  return "";
}
