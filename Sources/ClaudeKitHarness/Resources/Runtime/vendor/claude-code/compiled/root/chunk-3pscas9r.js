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
var chunk_3pscas9r_exports = {};
__export(chunk_3pscas9r_exports, {
  SYSTEM_PROMPT_STATIC_BREAKPOINT: () => import_chunk_4mh8nmh5.v1n,
  baseSystemPromptOf: () => import_chunk_4mh8nmh5.KBt,
  splitAtStaticBreakpoint: () => import_chunk_4mh8nmh5.pDi,
  splitSystemPromptAtBoundary: () => import_chunk_4mh8nmh5.T1n,
  withAddedSections: () => import_chunk_4mh8nmh5.ebr
});
module.exports = __toCommonJS(chunk_3pscas9r_exports);
var import_chunk_4mh8nmh5 = require("/$bunfs/root/chunk-4mh8nmh5.js");
