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
var chunk_cmv1wwpk_exports = {};
__export(chunk_cmv1wwpk_exports, {
  REPL_ROUTE_HOW_TO_BY_TYPE_KEY: () => A,
  REPL_ROUTE_HOW_TO_SYSTEM_ROW_END: () => E,
  REPL_ROUTE_HOW_TO_SYSTEM_SENTENCE: () => F,
  REPL_ROUTE_HOW_TO_TOKENS_WORDS: () => _,
  REPL_ROUTE_HOW_TO_URL_WORDS: () => T,
  REPL_ROUTE_SECTION_BY_TYPE_KEY: () => x,
  REPL_ROUTE_TWO_STEPS_BY_TYPE_KEY: () => O
});
module.exports = __toCommonJS(chunk_cmv1wwpk_exports);
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var e = (0, import_chunk_w1d7ygsk.ft)("/$bunfs/root/design-6m4nsdef.md");
var t = (0, import_chunk_w1d7ygsk.ft)("/$bunfs/root/designHowTo-p8zjfw0e.md");
var s = (0, import_chunk_w1d7ygsk.ft)("/$bunfs/root/designTwoSteps-g0bev2xr.md");
var i = (0, import_chunk_w1d7ygsk.ft)("/$bunfs/root/slides-fp2m3cps.md");
var a = (0, import_chunk_w1d7ygsk.ft)("/$bunfs/root/slidesHowTo-t4kr5d65.md");
var r = (0, import_chunk_w1d7ygsk.ft)("/$bunfs/root/slidesTwoSteps-sen5xrbt.md");
var x = /* @__PURE__ */ new Map([["design", e.trim()], ["slides", i.trim()]]), O = /* @__PURE__ */ new Map([["design", s.trim()], ["slides", r.trim()]]), T = "<the new Artifact's url>", _ = '"<the tokens.json path above>"', E = "   // only with a design system", F = " With a design system, the colours, type and spacing are the ones in the files you printed.", A = /* @__PURE__ */ new Map([["design", { text: t.trim(), whole: "design", parts: "boards" }], ["slides", { text: a.trim(), whole: "deck", parts: "slides" }]]);
