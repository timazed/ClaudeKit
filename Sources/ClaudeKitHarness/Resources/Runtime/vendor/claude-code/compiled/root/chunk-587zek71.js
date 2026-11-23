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
var chunk_587zek71_exports = {};
__export(chunk_587zek71_exports, {
  RA: () => RA
});
module.exports = __toCommonJS(chunk_587zek71_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_t8x29mwc = require("/$bunfs/root/chunk-t8x29mwc.js");
var o = "Nothing was sent: this background session can't use its API key, token or workload identity here. To go on, stop it, then run claude --resume in a terminal that has it.", n = { admin: "Your organization's settings need an update. Ask your administrator to fix the API key helper configuration.", settings_unloaded: "Couldn't load your organization's settings. Check your connection, then restart Claude Code.", session_environment: o, restart_needed: "Restart Claude Code to finish signing in.", session_owner: "This session belongs to another account, so nothing was sent. Send a message to choose which account to use.", session_profile: import_chunk_t8x29mwc.lpl, organization_gateway: "Your organization's gateway doesn't accept your own Anthropic sign-in. Claude Code didn't send it." };
class RA extends import_chunk_jv7av99m.A {
  reason;
  constructor(e) {
    super(n[e], "Stored login held back", `stored_login_refused_${e}`);
    this.reason = e;
    this.name = "StoredLoginHeldBackError";
  }
}
