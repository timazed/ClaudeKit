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
var chunk_zz526ycg_exports = {};
__export(chunk_zz526ycg_exports, {
  LZn: () => LZn,
  lKr: () => lKr,
  pHt: () => pHt
});
module.exports = __toCommonJS(chunk_zz526ycg_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var pHt = "no stored login";
function lKr() {
  try {
    if ((0, import_chunk_865at33z.xa)().source !== "claude.ai" || !(0, import_chunk_865at33z.Vg)() || !(0, import_chunk_865at33z.wa)()) return pHt;
    let o = (0, import_chunk_865at33z.Sn)(), n = (0, import_chunk_865at33z.or)();
    if (!o?.accountUuid || !o.organizationUuid || n === null) return;
    return `${o.accountUuid}:${o.organizationUuid}:${n}`;
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`claude-platform: could not read who is signed in (${(0, import_chunk_jv7av99m.D)(o).name}); the plugin is not offered`, { level: "error" });
    return;
  }
}
function LZn() {
  try {
    let o = (0, import_chunk_865at33z.Sn)(), n = (0, import_chunk_865at33z.Uj)();
    return o?.accountUuid !== void 0 && o.organizationUuid !== void 0 && n.accountUuid === o.accountUuid && n.organizationUuid === o.organizationUuid;
  } catch (o) {
    return (0, import_chunk_w578pjby.t)(`claude-platform: could not read the account Claude Code's flag client was built with (${(0, import_chunk_jv7av99m.D)(o).name}); the plugin is not offered`, { level: "error" }), false;
  }
}
