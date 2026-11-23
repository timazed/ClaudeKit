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
var chunk_w808xygp_exports = {};
__export(chunk_w808xygp_exports, {
  G9s: () => G9s,
  aVo: () => aVo,
  fKr: () => fKr,
  pKr: () => pKr,
  z9s: () => z9s
});
module.exports = __toCommonJS(chunk_w808xygp_exports);
var import_chunk_7f901c6t = require("/$bunfs/root/chunk-7f901c6t.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
function fKr(e) {
  let o = e.trim();
  return o !== "" && !o.startsWith("/");
}
var G9s = () => false;
var z9s = () => (0, import_chunk_3t7ve0wy.KA)() && !(0, import_chunk_3t7ve0wy.$6e)() && (0, import_chunk_865at33z.Lt)("tengu_quiet_ember", G9s());
var pKr = { name: "cc-plugin-responsive-mode", description: "Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt", isAvailable: z9s, defaultEnabled: false };
function aVo({ text: e, pastedContents: o, isSentByPerson: t, wait: r }) {
  if (!t || r || !fKr(e)) return false;
  try {
    return (0, import_chunk_7f901c6t.Zki)(e, o).length === 0 && (0, import_chunk_7f901c6t.arn)(pKr.name);
  } catch (n) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(n)), false;
  }
}
