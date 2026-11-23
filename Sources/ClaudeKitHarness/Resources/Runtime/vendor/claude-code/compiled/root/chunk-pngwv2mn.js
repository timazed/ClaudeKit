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
var chunk_pngwv2mn_exports = {};
__export(chunk_pngwv2mn_exports, {
  NWn: () => NWn
});
module.exports = __toCommonJS(chunk_pngwv2mn_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_fzp6hh55 = require("/$bunfs/root/chunk-fzp6hh55.js");
var import_chunk_5rd4zsth = require("/$bunfs/root/chunk-5rd4zsth.js");
async function NWn(r, e = {}) {
  try {
    if (!(0, import_chunk_2gtmjt3y.Xn)()) {
      if (!import_chunk_c203g5kd.s.CLAUDE_CODE_OAUTH_TOKEN && e.backgroundAuthSnapshot !== "leave") await (0, import_chunk_fzp6hh55.BXi)(r);
      await (0, import_chunk_fzp6hh55.WXi)(r), await (0, import_chunk_fzp6hh55.VNl)(r);
    }
    await (0, import_chunk_5rd4zsth.jNl)(r);
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`Descriptor credential prime failed (non-fatal): ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" });
  }
}
