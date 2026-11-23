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
var chunk_7p84he2h_exports = {};
__export(chunk_7p84he2h_exports, {
  C1r: () => C1r
});
module.exports = __toCommonJS(chunk_7p84he2h_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_cpdpk5r1 = require("/$bunfs/root/chunk-cpdpk5r1.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
async function C1r() {
  if ((0, import_chunk_f9x2f6cx.hP)()) return;
  let r = (0, import_chunk_865at33z.R3i)();
  if (!r) return;
  let p = (e) => e !== void 0 && (!Array.isArray(e) || e.length > 0), g = r.enableAllProjectMcpServers !== void 0, v = p(r.enabledMcpjsonServers), S = p(r.disabledMcpjsonServers);
  if (!g && !v && !S) return;
  try {
    if ((0, import_chunk_cpdpk5r1._rr)().length > 0) {
      (0, import_chunk_w578pjby.t)("migrateEnableAllProjectMcpServersToSettings: deferring \u2014 settings.local.json carries validation errors a write could compound; will retry next startup", { level: "error" });
      return;
    }
    let e = [];
    if (g) e.push("enableAllProjectMcpServers");
    if (v) e.push("enabledMcpjsonServers");
    if (S) e.push("disabledMcpjsonServers");
    let s = { disabledMcpjsonServers: r.disabledMcpjsonServers };
    (0, import_chunk_6mfepmbb.NRt)(s);
    let o = (0, import_chunk_4smdap7r.Nr)(s.disabledMcpjsonServers), l = s.disabledMcpjsonServers == null || Array.isArray(s.disabledMcpjsonServers) && s.disabledMcpjsonServers.length === o.length, b = l ? (0, import_chunk_4smdap7r.Nr)(r.enabledMcpjsonServers) : [];
    if (!l) (0, import_chunk_w578pjby.t)("migrateEnableAllProjectMcpServersToSettings: disabledMcpjsonServers in ~/.claude.json is not a list of server names, so no old MCP approval moves; a terminal session asks about each server again", { level: "error" });
    let { error: j } = await (0, import_chunk_2yx6c1y2.fl)("localSettings", (f) => {
      let c = f ?? {}, n = {};
      if (l && r.enableAllProjectMcpServers === true && c.enableAllProjectMcpServers === void 0) n.enableAllProjectMcpServers = true;
      let _ = c.enabledMcpjsonServers || [];
      if (b.some((d) => !_.includes(d))) n.enabledMcpjsonServers = (0, import_chunk_4smdap7r.M)([..._, ...b]);
      let A = c.disabledMcpjsonServers || [];
      if (o.some((d) => !A.includes(d))) n.disabledMcpjsonServers = (0, import_chunk_4smdap7r.M)([...A, ...o]);
      return Object.keys(n).length > 0 ? n : null;
    }, { legacyRevocation: "skip" });
    if (j) {
      (0, import_chunk_w578pjby.t)(`migrateEnableAllProjectMcpServersToSettings: settings write failed (${j.message}); will retry next startup`, { level: "error" });
      return;
    }
    if (e.length > 0) {
      if (!await (0, import_chunk_865at33z.VPr)(e)) {
        (0, import_chunk_w578pjby.t)("migrateEnableAllProjectMcpServersToSettings: settings copy landed but legacy projectConfig fields could not be removed (unwritable config?); will retry next startup", { level: "error" });
        return;
      }
    }
    (0, import_chunk_y53wbr8a.a)("tengu_migrate_mcp_approval_fields_success", { migratedCount: e.length }), (0, import_chunk_cqa9hrgx.u)("migration_mcp_servers_to_settings");
  } catch (e) {
    (0, import_chunk_k449cc64.i)(e), (0, import_chunk_y53wbr8a.a)("tengu_migrate_mcp_approval_fields_error", {}), (0, import_chunk_cqa9hrgx.m)("migration_mcp_servers_to_settings", "migration_mcp_servers_unexpected_error");
  }
}
