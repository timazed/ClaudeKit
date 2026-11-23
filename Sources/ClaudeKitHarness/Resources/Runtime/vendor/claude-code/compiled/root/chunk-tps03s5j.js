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
var chunk_tps03s5j_exports = {};
__export(chunk_tps03s5j_exports, {
  Ipe: () => Ipe,
  dHi: () => dHi,
  dj: () => dj,
  tle: () => tle
});
module.exports = __toCommonJS(chunk_tps03s5j_exports);
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_43nz5n02 = require("/$bunfs/root/chunk-43nz5n02.js");
var import_chunk_7mk0bxzp = require("/$bunfs/root/chunk-7mk0bxzp.js");
var u = /^([a-z][a-z\d+\-.]*:)?\/\//i;
function c(e, t) {
  let o = t?.baseURL, r = u.test(e), n = null;
  if (r && !(0, import_chunk_3jjr3wje.Pee)(e)) n = e;
  else if (o != null && !(0, import_chunk_3jjr3wje.Pee)(o)) n = o;
  else if (!r && o == null) n = e;
  if (n !== null) throw Error(`downloads: request (url="${e}"` + (o != null ? `, baseURL="${o}"` : "") + ") does not resolve to the public CDN (downloads.claude.ai). Use firstPartyApi for api.anthropic.com (residency-gated) or externalHttp for non-Anthropic hosts.");
}
var tle = { get(e, t) {
  return c(e, t), (0, import_chunk_np189awg.ZXe)(), import_chunk_3jjr3wje.bn.get(e, t);
} };
var l = [import_chunk_43nz5n02.Vr, "raw.githubusercontent.com", "objects.githubusercontent.com", "gist.githubusercontent.com", "gitlab.com", "bitbucket.org", "codeberg.org", "dev.azure.com", "ssh.dev.azure.com", "storage.googleapis.com"];
function m(e) {
  let t, o = /^[^@/]+@([^:/]+):/.exec(e);
  if (o) t = o[1];
  else try {
    t = new URL(e).hostname;
  } catch {
    return "unknown";
  }
  let r = t.toLowerCase();
  return l.find((n) => n === r) ?? "other";
}
function d(e) {
  return e.includes(`anthropics/${import_chunk_7mk0bxzp.nh}`);
}
function dj(e, t, o, r, n, s, i) {
  (0, import_chunk_y53wbr8a.a)("tengu_plugin_remote_fetch", { source: (0, import_chunk_78g0060s.f)(e), host: (0, import_chunk_78g0060s.f)(t ? m(t) : "unknown"), is_official: e === "plugin_catalog" || (t ? d(t) : false), outcome: (0, import_chunk_78g0060s.f)(o), duration_ms: Math.round(r), ...n && { error_kind: (0, import_chunk_78g0060s.f)(n) }, ...s !== void 0 ? { is_directory: s } : {}, ...i && { submodule_selection: (0, import_chunk_78g0060s.f)(i.fetched === "all" ? "all" : "selected"), submodules_recorded: i.recorded, submodules_fetched: i.fetched === "all" ? i.recorded : i.fetched } });
}
function dHi(e) {
  return e.replace(/\b[0-9a-f]{40}(?:[0-9a-f]{24})?\b/gi, "");
}
function Ipe(e) {
  let t = dHi(String(e?.message ?? e));
  if (/ENOTFOUND|ECONNREFUSED|EAI_AGAIN|Could not resolve host|Connection refused/i.test(t)) return "dns_or_refused";
  if (/ETIMEDOUT|timed out|timeout/i.test(t)) return "timeout";
  if (/ECONNRESET|socket hang up|Connection reset by peer|remote end hung up/i.test(t)) return "conn_reset";
  if (/403|401|authentication|permission denied/i.test(t)) return "auth";
  if (/404|not found|repository not found/i.test(t)) return "not_found";
  if (/certificate|SSL|TLS|unable to get local issuer/i.test(t)) return "tls";
  if (/Invalid response format|Invalid marketplace schema/i.test(t)) return "invalid_schema";
  return "other";
}
