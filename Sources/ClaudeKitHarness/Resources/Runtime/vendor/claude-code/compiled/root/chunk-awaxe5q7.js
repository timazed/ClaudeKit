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
var chunk_awaxe5q7_exports = {};
__export(chunk_awaxe5q7_exports, {
  j2: () => j2
});
module.exports = __toCommonJS(chunk_awaxe5q7_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_zjhyjv3y = require("/$bunfs/root/chunk-zjhyjv3y.js");
var import_chunk_vfyns8ja = require("/$bunfs/root/chunk-vfyns8ja.js");
var import_chunk_7q6ee47s = require("/$bunfs/root/chunk-7q6ee47s.js");
var import_chunk_w58msjm6 = require("/$bunfs/root/chunk-w58msjm6.js");
async function j2(r) {
  let n = performance.now(), o = false, e, a = (0, import_chunk_w58msjm6.ene)(), i = false;
  if ((0, import_chunk_w58msjm6.wXr)()) (0, import_chunk_w578pjby.t)("[mcp-policy-cold-start] waiting on remote managed-settings confirmation (managedMcpServers is withheld from the unverified cache)"), e = performance.now(), await (0, import_chunk_w58msjm6.Ih)(), o = true, i = true;
  else if (!a && !(0, import_chunk_7q6ee47s.dlt)()) ;
  else if (r.hasDynamicMcpConfig || !r.pluginStateReliable || (0, import_chunk_f9x2f6cx.Se)() || await m(r.storageV5)) {
    if (a) (0, import_chunk_w578pjby.t)("[mcp-policy-cold-start] waiting on remote managed-settings load"), e = performance.now(), await (0, import_chunk_w58msjm6.mq)(), o = true;
    i = true;
  } else (0, import_chunk_w578pjby.t)("[mcp-policy-cold-start] skipped \u2014 no MCP server source visible");
  if (e !== void 0 && (0, import_chunk_zjhyjv3y.Z2e)("mcp_policy_settings_wait_ms") === void 0) {
    let s = performance.now() - e, c = (0, import_chunk_w58msjm6.QRn)();
    (0, import_chunk_zjhyjv3y.zo)("mcp_policy_settings_wait_ms", s, e);
    let d = c ? "timed_out" : (0, import_chunk_w58msjm6.ene)() || (0, import_chunk_w58msjm6.wXr)() ? "load_failed" : "ok";
    (0, import_chunk_42tcgre6.q)(d === "ok" ? "info" : "warn", "mcp_policy_settings_wait", { waited_ms: Math.round(s), timed_out: c, outcome: d, ...(0, import_chunk_xcgcdx61._ge)() && { stored_copy: "not_read" } });
  }
  if ((0, import_chunk_7q6ee47s.Q2t)("settings", () => !o ? "not_awaited" : (0, import_chunk_w58msjm6.QRn)() ? "timed_out" : "completed", { since: o ? n : void 0 }), i && (0, import_chunk_7q6ee47s.dlt)()) {
    if ((0, import_chunk_w578pjby.t)("[mcp-policy-cold-start] waiting on the policy-limits verdict (compliance taints feed config ${VAR} expansion)"), await (0, import_chunk_7q6ee47s.XWn)() === "timed_out") (0, import_chunk_w578pjby.t)("[mcp-policy-cold-start] policy-limits verdict did not land within the cold-start budget; loading MCP configs without it");
  }
}
async function m(r) {
  for (let n of import_chunk_bzyb60p0.vfe) if (Object.keys((0, import_chunk_bzyb60p0.F_)(n, { expandVars: false }).servers).length > 0) return true;
  if ((0, import_chunk_bzyb60p0.yNt)()) return true;
  try {
    for (let { record: e } of (0, import_chunk_bzyb60p0.aQr)((0, import_chunk_bzyb60p0.rLt)())) for (let [a, i] of Object.entries(e ?? {})) if ((i === true || Array.isArray(i)) && !(0, import_chunk_vfyns8ja.Jf)(a)) return true;
    let { enabled: n, errors: o } = await (0, import_chunk_bzyb60p0.pi)(r);
    if (o.length > 0) return true;
    for (let e of n) if (!e.isBuiltin || e.mcpServers !== void 0 && Object.keys(e.mcpServers).length > 0) return true;
  } catch {
    return true;
  }
  return (0, import_chunk_865at33z.dm)();
}
