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
var chunk_sr1rbsf6_exports = {};
__export(chunk_sr1rbsf6_exports, {
  k8t: () => k8t,
  pGr: () => pGr
});
module.exports = __toCommonJS(chunk_sr1rbsf6_exports);
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7q6ee47s = require("/$bunfs/root/chunk-7q6ee47s.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_zs6b24vw = require("/$bunfs/root/chunk-zs6b24vw.js");
var import_chunk_w58msjm6 = require("/$bunfs/root/chunk-w58msjm6.js");
var a = /* @__PURE__ */ new Set(["list", "marketplace list", "validate", "tag", "test", "eval init"]);
function pGr(i) {
  let o = [];
  for (let e = i; e.parent !== null; e = e.parent) o.unshift(e.name());
  return o[0] === "plugin" && !a.has(o.slice(1).join(" "));
}
async function k8t() {
  if ((0, import_chunk_wj4me9k5.cv)() === "unanswered") await (0, import_chunk_w58msjm6.Ih)();
  if (!(0, import_chunk_w58msjm6.ene)()) return true;
  (0, import_chunk_w578pjby.t)("[plugin-policy-cold-start] waiting on remote managed-settings load");
  let i = performance.now();
  await (0, import_chunk_w58msjm6.mq)();
  let o = !(0, import_chunk_bzyb60p0.Zr)() && (0, import_chunk_zs6b24vw.Usr)() === null, e = (0, import_chunk_w58msjm6.QRn)(), n = !o ? "stopped" : e ? "timed_out" : (0, import_chunk_w58msjm6.ene)() ? "load_failed" : "ok";
  if ((0, import_chunk_7q6ee47s.Q2t)("settings", e ? "timed_out" : "completed", { since: i }), (0, import_chunk_42tcgre6.q)(n === "ok" ? "info" : "warn", "plugin_policy_settings_wait", { waited_ms: Math.round(performance.now() - i), outcome: n }), n === "ok") return await (0, import_chunk_cqa9hrgx.To)("plugin_policy_cold_start"), true;
  if ((0, import_chunk_w578pjby.t)(o ? `[plugin-policy-cold-start] going on, managed policy not confirmed: ${n}` : "[plugin-policy-cold-start] the command does not run: managed settings were not approved, or the process is exiting", { level: "warn" }), n === "stopped") await (0, import_chunk_cqa9hrgx.Gt)("plugin_policy_cold_start", n);
  else await (0, import_chunk_cqa9hrgx.oi)("plugin_policy_cold_start", n);
  return o;
}
