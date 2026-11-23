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
var chunk_72w4k1fr_exports = {};
__export(chunk_72w4k1fr_exports, {
  Cx: () => Cx,
  Olo: () => Olo,
  REi: () => REi,
  W6: () => W6,
  Wmr: () => Wmr
});
module.exports = __toCommonJS(chunk_72w4k1fr_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
function W6() {
  return (0, import_chunk_865at33z.b)("tengu_lantern_prism", false) || import_chunk_c203g5kd.s.CLAUDE_CODE_LANTERN_PRISM;
}
function Cx() {
  return REi() || (0, import_chunk_865at33z.Lt)("tengu_spicy_blossom", false) === true;
}
function REi() {
  return (0, import_chunk_865at33z.Lt)("tengu_encapsulated_pebble", true) !== false;
}
function Wmr() {
  return !(0, import_chunk_865at33z.b)("tengu_sharded_snowflake", false);
}
function Olo() {
  if (Wmr()) return { enabled: true, text: "`claude plugin eval` is available in this session (generally available; no enablement setting is needed on any client, including Bedrock/Vertex/Foundry, LLM gateways, telemetry-disabled clients and CI runners)." };
  return { enabled: false, text: '`claude plugin eval` is generally available but switched OFF for this session by a server-side kill switch: it exists but prints "currently unavailable" here. If the user asks about it, say that plainly rather than that it does not exist; there is no setting or variable that turns it back on, and `claude update` plus a fresh session picks the command up again once the switch is lifted.' };
}
