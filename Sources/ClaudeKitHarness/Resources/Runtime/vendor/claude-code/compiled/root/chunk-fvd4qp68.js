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
var chunk_fvd4qp68_exports = {};
__export(chunk_fvd4qp68_exports, {
  Mjo: () => Mjo,
  cMt: () => cMt
});
module.exports = __toCommonJS(chunk_fvd4qp68_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
function f({ eligible: n, reason: e, machineTiers: t, launchEnv: r, flagEnv: o, servedEnv: a, liveEnv: c }) {
  if (n === void 0) return "undecided";
  if (n) return "not_applicable";
  let i = e === void 0 ? void 0 : u(e);
  if (i === void 0) return "not_attributed";
  if (t.some((d) => d.allowedProviders !== void 0 || i(d.env ?? {}))) return "machine_admin";
  if (i(r)) return "process_env";
  if (o !== void 0 && i(o)) return "launch_flag";
  if (a !== void 0 && i(a)) return "served_settings";
  return i(c) ? "settings_file" : "not_attributed";
}
function u(n) {
  switch (n) {
    case "third_party_provider":
      return (e) => import_chunk_zmb62hr5.Vy.some((t) => (0, import_chunk_69qhefwa.Ne)(e[t]));
    case "custom_base_url":
      return (e) => !!e.ANTHROPIC_BASE_URL && !(0, import_chunk_zhr7rpv7.md)(e.ANTHROPIC_BASE_URL);
    case "unpinned_gateway":
      return (e) => (0, import_chunk_69qhefwa.Ne)(e.CLAUDE_CODE_USE_GATEWAY);
    case "hybrid_yields_to_device_policy":
      return (e) => ["third_party_provider", "custom_base_url"].some((t) => u(t)?.(e));
    case "profile_base_url_mismatch":
    case "sandboxed_entrypoint":
    case "claude_tag":
    case "hermetic_remote_session":
    case "host_gateway_not_accepted":
    case "unsupported_subscription":
    case "no_auth":
      return;
  }
}
function Mjo() {
  let n = (0, import_chunk_2yx6c1y2.ece)(), e = {};
  for (let t of [...import_chunk_zmb62hr5.Vy, "CLAUDE_CODE_USE_GATEWAY", "ANTHROPIC_BASE_URL"]) {
    let r = import_chunk_c203g5kd.s[t];
    e[t] = r === void 0 || r === false ? void 0 : String(r);
  }
  return { author: f({ eligible: (0, import_chunk_xcgcdx61.JC)(), reason: (0, import_chunk_xcgcdx61.mge)(), machineTiers: n, launchEnv: (0, import_chunk_5e3gtsn9.n_)(), flagEnv: (0, import_chunk_2yx6c1y2._e)("flagSettings")?.env, servedEnv: (0, import_chunk_2yx6c1y2._e)("policySettings")?.env, liveEnv: e }), forcedRefreshFromMachine: n.some((t) => t.forceRemoteSettingsRefresh === true) };
}
function l() {
  return false;
}
function _({ author: n, forcedRefreshFromMachine: e }) {
  if (!e) return;
  switch (n) {
    case "settings_file":
      return 'A settings file on this machine selects an API provider or endpoint that turns them off. Remove the provider or base URL from the "env" block of your settings files, or contact your administrator.';
    case "served_settings":
      return "The settings served to this machine select an API provider or endpoint that turns them off. Contact your administrator.";
    case "undecided":
      return "Whether this session can receive them could not be decided. Contact your administrator.";
    case "not_applicable":
    case "not_attributed":
    case "machine_admin":
    case "process_env":
    case "launch_flag":
      return;
  }
}
function cMt() {
  if (!l()) return;
  return _(Mjo());
}
