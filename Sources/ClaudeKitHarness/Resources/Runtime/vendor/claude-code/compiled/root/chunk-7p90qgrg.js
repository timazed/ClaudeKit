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
var chunk_7p90qgrg_exports = {};
__export(chunk_7p90qgrg_exports, {
  Bot: () => Bot
});
module.exports = __toCommonJS(chunk_7p90qgrg_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var i = /[\u2018-\u201F]/;
function Bot(e, r = "value") {
  let t = i.exec(e);
  if (t) {
    let o = (t[0].codePointAt(0) ?? 0).toString(16).toUpperCase().padStart(4, "0");
    throw new import_chunk_jv7av99m.A(`Cannot safely quote ${r} in a PowerShell single-quoted string literal: it contains U+${o}, which PowerShell's tokenizer treats as a quote delimiter`, "psSingleQuotedLiteral: rejected a PowerShell quote-variant codepoint (U+2018..U+201F)");
  }
  return `'${e.replaceAll("'", "''")}'`;
}
