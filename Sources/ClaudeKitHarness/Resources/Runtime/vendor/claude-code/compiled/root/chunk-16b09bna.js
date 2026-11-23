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
var chunk_16b09bna_exports = {};
__export(chunk_16b09bna_exports, {
  hZe: () => hZe
});
module.exports = __toCommonJS(chunk_16b09bna_exports);
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var d = ["org:create_api_key", "user:profile", "user:inference", "user:sessions:claude_code", "user:mcp_servers", "user:file_upload", "user:plugins", "user:projects:read", "user:projects:write", "user:privacy_consents:write", "org:desktop_config"], g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function hZe(i) {
  let r = URL.parse(i), o = (0, import_chunk_ephf358x.Lft)();
  if (!r || import_chunk_c203g5kd.s.CLAUDE_CODE_FULL_SIGN_IN_LINK || o.OAUTH_FILE_SUFFIX === "-local-oauth") return i;
  let e = r.searchParams, p = e.get("code_challenge") ?? "", a = { code: "true", response_type: "code", redirect_uri: o.MANUAL_REDIRECT_URL, code_challenge_method: "S256" };
  if (r.origin + r.pathname !== o.CLAUDE_AI_AUTHORIZE_URL || e.get("client_id") !== o.CLIENT_ID || !/^[\w-]{43}$/.test(p) || e.has("prompt") || e.has("orgUUID") || Object.entries(a).some(([t, n]) => e.get(t) !== n)) return i;
  let c = 0, _ = [];
  for (let t of e.get("scope")?.split(" ") ?? []) {
    let n = d.indexOf(t);
    if (n === -1) _.push(t);
    else c |= 2 << n;
  }
  let l = "";
  do
    l = g.charAt(c % 64) + l, c >>= 6;
  while (c > 0);
  for (let t of ["client_id", "scope", "code_challenge", "state"]) e.delete(t);
  for (let t of Object.keys(a)) e.delete(t);
  if (_.length > 0) e.set("scope", _.join(" "));
  let u = e.size > 0 ? `&${e}` : "";
  return `${o.CLAUDE_AI_ORIGIN}/oauth/authorize?${l}${p}${u}`;
}
