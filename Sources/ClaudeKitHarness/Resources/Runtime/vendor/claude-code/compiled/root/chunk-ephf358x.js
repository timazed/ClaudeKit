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
var chunk_ephf358x_exports = {};
__export(chunk_ephf358x_exports, {
  $4n: () => $4n,
  CLr: () => CLr,
  Dft: () => Dft,
  F4n: () => F4n,
  Hft: () => Hft,
  I0o: () => I0o,
  Jxt: () => Jxt,
  LK: () => LK,
  Lft: () => Lft,
  Mft: () => Mft,
  O0o: () => O0o,
  P0o: () => P0o,
  PI: () => PI,
  TLr: () => TLr,
  TLs: () => TLs,
  cn: () => cn,
  cse: () => cse,
  dyn: () => dyn,
  eoa: () => eoa,
  ff: () => ff,
  g1e: () => g1e,
  h1e: () => h1e,
  toa: () => toa,
  uP: () => uP,
  vLs: () => vLs,
  x0o: () => x0o
});
module.exports = __toCommonJS(chunk_ephf358x_exports);
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
function a() {
  return "prod";
}
var cse = ["", "-staging-oauth", "-local-oauth", "-custom-oauth"];
function PI() {
  if (process.env.CLAUDE_CODE_CUSTOM_OAUTH_URL) return "-custom-oauth";
  switch (a()) {
    case "local":
      return "-local-oauth";
    case "staging":
      return "-staging-oauth";
    case "prod":
      return "";
  }
}
function TLr() {
  return PI() === "-staging-oauth";
}
var h1e = 31536e3;
var eoa = Math.round(h1e / 86400), uP = "user:inference", LK = "user:profile", g1e = "user:sessions:claude_code", F4n = [LK, g1e], Mft = "user:plugins", x0o = "user:projects:read", P0o = "user:projects:write", O0o = "user:privacy_consents:write";
function Hft(t) {
  return Array.isArray(t) && t.includes(uP);
}
var c = "org:create_api_key", ff = "oauth-2025-04-20", $4n = [c, LK], r = [LK, uP, g1e, "user:mcp_servers", "user:file_upload"];
function dyn() {
  let t = cn(), E = [...r];
  if (t.PLUGINS_SCOPE_REGISTERED) E.push(Mft);
  return E;
}
function vLs() {
  let t = (0, import_chunk_4smdap7r.M)([...$4n, ...dyn()]);
  if (cn().PRIVACY_CONSENTS_SCOPE_REGISTERED) t.push(O0o);
  return t;
}
var Dft = ["user:design:read", "user:design:write"], n = [x0o, P0o, O0o];
function TLs(t) {
  if (!Array.isArray(t)) return [];
  let E = n;
  return t.filter((e) => E.includes(e));
}
function toa(t) {
  return (0, import_chunk_4smdap7r.M)([...dyn(), ...TLs(t)]);
}
var o = { BASE_API_URL: "https://api.anthropic.com", CONSOLE_AUTHORIZE_URL: "https://platform.claude.com/oauth/authorize", CLAUDE_AI_AUTHORIZE_URL: "https://claude.com/cai/oauth/authorize", CLAUDE_AI_ORIGIN: "https://claude.ai", TOKEN_URL: "https://platform.claude.com/v1/oauth/token", API_KEY_URL: "https://api.anthropic.com/api/oauth/claude_cli/create_api_key", ROLES_URL: "https://api.anthropic.com/api/oauth/claude_cli/roles", CONSOLE_SUCCESS_URL: "https://platform.claude.com/buy_credits?returnUrl=/oauth/code/success%3Fapp%3Dclaude-code", CLAUDEAI_SUCCESS_URL: "https://platform.claude.com/oauth/code/success?app=claude-code", MANUAL_REDIRECT_URL: "https://platform.claude.com/oauth/code/callback", CLIENT_ID: "9d1c250a-e61b-44d9-88ed-5944d1962f5e", DESIGN_CLIENT_ID: "59637612-477b-4836-a601-b0589eda7704", OAUTH_FILE_SUFFIX: "", PLUGINS_SCOPE_REGISTERED: true, PROJECTS_SCOPES_REGISTERED: true, PRIVACY_CONSENTS_SCOPE_REGISTERED: true, HYBRID_SETTINGS_SCOPE_REGISTERED: true, MCP_PROXY_URL: "https://mcp-proxy.anthropic.com", MCP_PROXY_PATH: "/v1/mcp/{server_id}" }, I0o = "https://claude.ai/oauth/claude-code-client-metadata", S = void 0;
function C() {
  let t = process.env.CLAUDE_LOCAL_OAUTH_API_BASE?.replace(/\/$/, "") ?? "http://localhost:8000", E = process.env.CLAUDE_LOCAL_OAUTH_APPS_BASE?.replace(/\/$/, "") ?? "http://localhost:4000", e = process.env.CLAUDE_LOCAL_OAUTH_CONSOLE_BASE?.replace(/\/$/, "") ?? "http://localhost:3000";
  return { BASE_API_URL: t, CONSOLE_AUTHORIZE_URL: `${e}/oauth/authorize`, CLAUDE_AI_AUTHORIZE_URL: `${E}/oauth/authorize`, CLAUDE_AI_ORIGIN: E, TOKEN_URL: `${t}/v1/oauth/token`, API_KEY_URL: `${t}/api/oauth/claude_cli/create_api_key`, ROLES_URL: `${t}/api/oauth/claude_cli/roles`, CONSOLE_SUCCESS_URL: `${e}/buy_credits?returnUrl=/oauth/code/success%3Fapp%3Dclaude-code`, CLAUDEAI_SUCCESS_URL: `${e}/oauth/code/success?app=claude-code`, MANUAL_REDIRECT_URL: `${e}/oauth/code/callback`, CLIENT_ID: "22422756-60c9-4084-8eb7-27705fd5cf9a", DESIGN_CLIENT_ID: "00000000-0000-4000-8000-000000000000", OAUTH_FILE_SUFFIX: "-local-oauth", PLUGINS_SCOPE_REGISTERED: true, PROJECTS_SCOPES_REGISTERED: true, PRIVACY_CONSENTS_SCOPE_REGISTERED: true, HYBRID_SETTINGS_SCOPE_REGISTERED: true, MCP_PROXY_URL: "http://localhost:8205", MCP_PROXY_PATH: "/v1/toolbox/shttp/mcp/{server_id}" };
}
var Jxt = ["https://beacon.claude-ai.staging.ant.dev", "https://claude.fedstart.com", "https://claude-staging.fedstart.com"];
function Lft() {
  switch (a()) {
    case "local":
      return C();
    case "staging":
      return S ?? o;
    case "prod":
      return o;
  }
}
function CLr() {
  let t;
  try {
    t = cn().CLAUDE_AI_ORIGIN;
  } catch {
    t = Lft().CLAUDE_AI_ORIGIN;
  }
  return `${t}/settings/claude-code`;
}
function cn() {
  let t = Lft(), E = process.env.CLAUDE_CODE_CUSTOM_OAUTH_URL;
  if (E) {
    let _ = E.replace(/\/$/, "");
    if (!Jxt.includes(_)) throw Error("CLAUDE_CODE_CUSTOM_OAUTH_URL is not an approved endpoint.");
    t = { ...t, BASE_API_URL: _, CONSOLE_AUTHORIZE_URL: `${_}/oauth/authorize`, CLAUDE_AI_AUTHORIZE_URL: `${_}/oauth/authorize`, CLAUDE_AI_ORIGIN: _, TOKEN_URL: `${_}/v1/oauth/token`, API_KEY_URL: `${_}/api/oauth/claude_cli/create_api_key`, ROLES_URL: `${_}/api/oauth/claude_cli/roles`, CONSOLE_SUCCESS_URL: `${_}/oauth/code/success?app=claude-code`, CLAUDEAI_SUCCESS_URL: `${_}/oauth/code/success?app=claude-code`, MANUAL_REDIRECT_URL: `${_}/oauth/code/callback`, OAUTH_FILE_SUFFIX: "-custom-oauth", PLUGINS_SCOPE_REGISTERED: false, PROJECTS_SCOPES_REGISTERED: false, PRIVACY_CONSENTS_SCOPE_REGISTERED: false, HYBRID_SETTINGS_SCOPE_REGISTERED: false, SCOPES_CLEARED_BY: ["CLAUDE_CODE_CUSTOM_OAUTH_URL"] };
  }
  let e = process.env.CLAUDE_CODE_OAUTH_CLIENT_ID;
  if (e) t = { ...t, CLIENT_ID: e, PLUGINS_SCOPE_REGISTERED: false, PROJECTS_SCOPES_REGISTERED: false, PRIVACY_CONSENTS_SCOPE_REGISTERED: false, HYBRID_SETTINGS_SCOPE_REGISTERED: false, SCOPES_CLEARED_BY: [...t.SCOPES_CLEARED_BY ?? [], "CLAUDE_CODE_OAUTH_CLIENT_ID"] };
  return t;
}
