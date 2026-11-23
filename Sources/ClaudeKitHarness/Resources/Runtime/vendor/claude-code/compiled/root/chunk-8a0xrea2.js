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
var chunk_8a0xrea2_exports = {};
__export(chunk_8a0xrea2_exports, {
  NOt: () => NOt
});
module.exports = __toCommonJS(chunk_8a0xrea2_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
async function NOt(o, r, n) {
  try {
    await Promise.all([(0, import_chunk_865at33z.Ke)((e) => e.managedSettingsNoticeSeenOrg === o ? e : { ...e, managedSettingsNoticeSeenOrg: o }, n), (0, import_chunk_cqa9hrgx.To)("remote_managed_settings_login_notice", { surface: (0, import_chunk_78g0060s.f)(r) })]);
  } catch (e) {
    (0, import_chunk_w578pjby.t)(`managed settings notice: not recorded as shown: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "error" });
  }
}
