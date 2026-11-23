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
var chunk_rcs2v54w_exports = {};
__export(chunk_rcs2v54w_exports, {
  RWs: () => RWs,
  dmt: () => dmt
});
module.exports = __toCommonJS(chunk_rcs2v54w_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var dmt = { heading: "Learn the moves", body: "Quick lessons on the things power users do \u2014 plan mode, undo, subagents, memory. About 5 minutes. Come back any time with /powerup.", banner: "New here? Type /powerup for a 5-minute tour \u2014 modes, undo, @-mentions, and how to teach Claude your rules." };
function RWs() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_POWERUP_ONBOARDING;
  if (e === "banner" || e === "step") return e;
  return (0, import_chunk_865at33z.b)("tengu_birch_lantern", "off");
}
