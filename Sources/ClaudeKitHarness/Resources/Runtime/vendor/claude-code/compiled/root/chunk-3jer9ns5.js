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
var chunk_3jer9ns5_exports = {};
__export(chunk_3jer9ns5_exports, {
  GXr: () => GXr,
  zXr: () => zXr
});
module.exports = __toCommonJS(chunk_3jer9ns5_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var e = { disabled: "The Windows Secondary Logon service (seclogon) is disabled; an administrator must set its startup type to Manual (`sc.exe config seclogon start= demand`). The sandbox cannot start without it.", missing: "The Windows Secondary Logon service (seclogon) is not present on this machine; the sandbox cannot start without it." };
function GXr(n) {
  return n?.seclogon === "disabled" || n?.seclogon === "missing" ? e[n.seclogon] : void 0;
}
async function zXr() {
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows") return;
  let n = await (0, import_chunk_ha393e1n.rbe)({ srtWin: (0, import_chunk_ha393e1n.rj)() }).catch((o) => {
    (0, import_chunk_w578pjby.t)(`[sandbox] could not read the sandbox status: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" });
    return;
  });
  return GXr(n?.user);
}
