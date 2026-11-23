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
var chunk_46a9055z_exports = {};
__export(chunk_46a9055z_exports, {
  $Xn: () => $Xn
});
module.exports = __toCommonJS(chunk_46a9055z_exports);
var import_chunk_qzgavhcz = require("/$bunfs/root/chunk-qzgavhcz.js");
var $Xn = [`Usage: claude ${import_chunk_qzgavhcz.GI.test.usage}`, "", import_chunk_qzgavhcz.GI.test.description, "", "Arguments:", "  dir         The mod's folder (default: the current folder)", "", "Options:", "  -h, --help  Display help for command", "", "Runs every *.test.ts and *.test.tsx under dir, each file in a child of this", "binary, in an environment like the one the mod's hooks run in. A test file", "imports its kit from 'claude-code/testing'. Exits 1 when a test fails.", ""].join(`
`);
