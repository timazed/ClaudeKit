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
var chunk_3bjtjsgp_exports = {};
__export(chunk_3bjtjsgp_exports, {
  Ths: () => Ths,
  Uo: () => Uo,
  eDi: () => eDi,
  lan: () => lan,
  n4: () => n4
});
module.exports = __toCommonJS(chunk_3bjtjsgp_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_crypto = require("crypto");
function eDi(r) {
  return r.configErrorReason === "url_empty" || !r.configError && "url" in r && r.url.trim() === "";
}
var R = "gzip, x-ccr-all-but-tool-lists;q=0";
function lan(r) {
  let { scope: t, pluginSource: d, pluginPath: u, relayed: l, hostRegistered: p, pluginEndpointTemplated: g, pluginOfficialSourceVouched: i, heldForClaim: c, agentSource: f, declaredIn: C, readFrom: E, configError: b, configErrorReason: M, expandedFromEnv: x, configuredCommand: O, redialToRelearnRegistration: k, ...h } = r, e = h;
  if (delete e.tools, import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) delete e.orgMaxPermission;
  if (delete e.discoveryCache, delete e.cachedInitResponse, delete e.cachedDiscoverResponse, delete e.discoverSupport, delete e.eligible, delete e.ineligibleReason, delete e.enterpriseManaged, e.type !== "claudeai-proxy") delete e.displayName;
  if ((0, import_chunk_0jve1fep.Le)(e.headers)) {
    let a = /* @__PURE__ */ Object.create(null);
    for (let [o, n] of Object.entries(e.headers)) if (o.toLowerCase() !== "accept-encoding" || n !== R) a[o] = n;
    e.headers = a;
  }
  if (e.type === "stdio" || e.type === void 0 && "command" in e) e.type = "stdio", e.args = e.args ?? [];
  if (typeof e.url === "string") e.url = Ths(e.url);
  if (eDi(r)) e.unconfigured = true;
  if (f !== void 0) e.agentSource = f;
  return (0, import_chunk_w578pjby._)(e, (a, o) => {
    if (o && typeof o === "object" && !Array.isArray(o)) {
      let n = o, m = /* @__PURE__ */ Object.create(null);
      for (let S of Object.keys(n).sort()) m[S] = n[S];
      return m;
    }
    return o;
  });
}
function Ths(r) {
  try {
    new URL(r);
  } catch {
    return r;
  }
  let t = /^([^?#]*\?)([^#]*)(.*)$/s.exec(r);
  if (!t) return r;
  let [, d = "", u = "", l = ""] = t;
  return d + u.split("&").sort((p, g) => {
    let i = (0, import_chunk_7cfjrnwy.nt)(p, "="), c = (0, import_chunk_7cfjrnwy.nt)(g, "=");
    return i < c ? -1 : i > c ? 1 : 0;
  }).join("&") + l;
}
function n4(r) {
  return (0, import_crypto.createHash)("sha256").update(lan(r)).digest("hex").slice(0, 16);
}
function Uo(r, t) {
  return `${r}-${n4(t)}`;
}
