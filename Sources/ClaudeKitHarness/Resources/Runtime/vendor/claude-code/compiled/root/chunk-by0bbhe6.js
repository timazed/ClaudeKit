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
var chunk_by0bbhe6_exports = {};
__export(chunk_by0bbhe6_exports, {
  yie: () => yie
});
module.exports = __toCommonJS(chunk_by0bbhe6_exports);
var import_chunk_271xsh6x = require("/$bunfs/root/chunk-271xsh6x.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var i = ["microsoft365.mcp.claude.com", "gmail.mcp.claude.com", "gcal.mcp.claude.com"];
function p(t) {
  return t.toLowerCase().replace(/\.$/, "");
}
function u() {
  let t = (0, import_chunk_865at33z.b)("tengu_mcp_local_oauth_blocked_hosts", { hosts: i }), e = i;
  if (t !== null && typeof t === "object" && "hosts" in t && Array.isArray(t.hosts)) {
    let o = t.hosts.filter((n) => typeof n === "string");
    if (o.length > 0) e = o;
  }
  return new Set(e.map(p));
}
function c(t) {
  if (!t) return false;
  try {
    let e = p(new URL(t).hostname);
    return u().has(e);
  } catch {
    return false;
  }
}
function a(t, e = {}) {
  let o = `"${(0, import_chunk_271xsh6x.xr)(t)}" is Anthropic-hosted and doesn't support local OAuth. Connect it via Settings \u2192 Connectors on claude.ai (requires \`claude login\`), then it'll be available here automatically.`, r = e.scope === "local" || e.scope === "project" || e.scope === "user" ? (0, import_chunk_xcgcdx61.xu)("mcp remove", t) : null, s = r ? `${o} Remove the stale entry with: \`${r}\`` : o;
  return r && [...s].length <= 1024 ? s : o;
}
function yie(t, e) {
  if (e.type === "claudeai-proxy") return { kind: "claudeai-proxy", config: e };
  if (e.type !== "sse" && e.type !== "http") return { kind: "unsupported-transport", transport: e.type ?? "stdio" };
  if (c(e.url)) return { kind: "anthropic-hosted", config: e, message: a(t, { scope: e.scope }) };
  if ((0, import_chunk_2mwshd9r.Wde)(t, e)) return { kind: "anthropic-hosted", config: e, message: `"${(0, import_chunk_271xsh6x.xr)(t)}" is provided to this session by Claude Code's cloud service, which holds its sign-in, so it can't be signed in to from here. If it is one of your claude.ai connectors, reconnect it under Settings \u2192 Connectors on claude.ai and then start a new session.` };
  return { kind: "oauth", config: e };
}
