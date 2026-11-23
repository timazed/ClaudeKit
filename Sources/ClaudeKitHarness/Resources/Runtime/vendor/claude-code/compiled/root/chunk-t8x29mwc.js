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
var chunk_t8x29mwc_exports = {};
__export(chunk_t8x29mwc_exports, {
  Bho: () => Bho,
  Cje: () => Cje,
  E8e: () => E8e,
  Ehs: () => Ehs,
  Hpe: () => Hpe,
  Rit: () => Rit,
  S0e: () => S0e,
  Sg: () => Sg,
  apl: () => apl,
  cpl: () => cpl,
  dpl: () => dpl,
  fpl: () => fpl,
  lpl: () => lpl,
  rle: () => rle,
  upl: () => upl
});
module.exports = __toCommonJS(chunk_t8x29mwc_exports);
var Ehs = ["ANTHROPIC_CONFIG_DIR"], Hpe = ["ANTHROPIC_PROFILE", ...Ehs], apl = /* @__PURE__ */ new Set(["ANTHROPIC_API_KEY", "ANTHROPIC_AUTH_TOKEN", "ANTHROPIC_FEDERATION_RULE_ID", "CLAUDE_CODE_OAUTH_TOKEN", ...Hpe]), Sg = "CLAUDE_BG_SESSION_CREDENTIAL", Rit = "Nothing was sent: this session's profile isn't here, changed organization, or is overruled by this folder's settings. Reopen it as you started it: same launcher, or same ANTHROPIC_PROFILE.", lpl = "Nothing was sent: this session's profile isn't here, changed organization, or is overruled by settings. Sign in to that profile again, or stop this session first and reopen it as you started it.", dpl = "CLAUDE_CODE_OAUTH_TOKEN wouldn't reach a background session, which would use another sign-in, such as your saved login. Keep working in this terminal, or start Claude Code without that variable: it then uses the profile that ANTHROPIC_PROFILE names, or your saved login if you unset that too", Bho = 1, cpl = "a background session started from here isn't --bare, so it can't use this session's API key, which nobody approved. Run it in this terminal. A new one started with claude --bare --bg gets the key only if the background service has it or isn't running yet", upl = "the background service that is running is an older version, which can't keep this session's profile. Run claude daemon stop --any, which stops background sessions, and try again. If it runs as a service, run claude daemon install instead. Continue a session that was stopped with claude --resume, as you started it", fpl = "the background service doesn't have this session's API key, token or workload identity, so run it in this terminal. Or, unless the service was set up with claude daemon install, run claude daemon stop --any, which stops every project's background sessions, and try again from here; other background sessions may then use this key, token or identity instead of their own sign-in", E8e = "env-login", t = /^(?:none|env-[a-z]{1,16}(?::[0-9a-f]{16}:[0-9a-f]{32})?|profile:[A-Za-z0-9_-]{0,64}:[0-9a-f]{16})$/;
function Cje(e) {
  return e.replace(/^(env-[a-z]+):.*$/, "$1");
}
function rle(e) {
  return e.startsWith("env-") && e.includes(":");
}
function S0e(e) {
  return t.test(e);
}
