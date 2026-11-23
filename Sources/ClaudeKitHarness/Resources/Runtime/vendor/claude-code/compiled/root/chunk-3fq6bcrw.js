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
var chunk_3fq6bcrw_exports = {};
__export(chunk_3fq6bcrw_exports, {
  n7t: () => n7t
});
module.exports = __toCommonJS(chunk_3fq6bcrw_exports);
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_j4z7srhg = require("/$bunfs/root/chunk-j4z7srhg.js");
function n7t() {
  if (import_chunk_c203g5kd.s.NODE_EXTRA_CA_CERTS) return;
  let o = f();
  if (o) import_chunk_c203g5kd.s.set("NODE_EXTRA_CA_CERTS", o), (0, import_chunk_w578pjby.t)(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${o}`);
}
function f() {
  try {
    if (import_chunk_c203g5kd.s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && !(0, import_chunk_3t7ve0wy.Ol)() && (0, import_chunk_gd77dyw4.o4t)("NODE_EXTRA_CA_CERTS")) {
      (0, import_chunk_w578pjby.t)("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");
      return;
    }
    if ((0, import_chunk_xcgcdx61.cm)() || (0, import_chunk_5e3gtsn9.hks)("NODE_EXTRA_CA_CERTS")) return;
    if ((0, import_chunk_2yx6c1y2.yB)() || (0, import_chunk_j4z7srhg.ec)()) return;
    let o = (0, import_chunk_865at33z.ge)(), e = (0, import_chunk_5e3gtsn9.FTr)(o?.env, "globalConfig"), i = (0, import_chunk_xzvhvaa2.rn)("userSettings") ? (0, import_chunk_2yx6c1y2._e)("userSettings") : void 0, n = (0, import_chunk_5e3gtsn9.FTr)(i?.env, "userSettings");
    (0, import_chunk_w578pjby.t)(`CA certs: Config fallback - globalEnv keys: ${e ? Object.keys(e).join(",") : "none"}, settingsEnv keys: ${n ? Object.keys(n).join(",") : "none"}`);
    let r = n?.NODE_EXTRA_CA_CERTS || e?.NODE_EXTRA_CA_CERTS;
    if (r) (0, import_chunk_w578pjby.t)(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);
    return r;
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`CA certs: Config fallback failed: ${o}`, { level: "error" }), (0, import_chunk_cqa9hrgx.l)("ca_certs_load", "config_read_failed");
    return;
  }
}
