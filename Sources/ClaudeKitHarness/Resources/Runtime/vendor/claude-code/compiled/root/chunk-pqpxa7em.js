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
var chunk_pqpxa7em_exports = {};
__export(chunk_pqpxa7em_exports, {
  KG: () => KG,
  Lcn: () => Lcn
});
module.exports = __toCommonJS(chunk_pqpxa7em_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
function KG() {
  return !(0, import_chunk_865at33z.Lc)() || !(0, import_chunk_zhr7rpv7.jn)();
}
function Lcn() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT === "claude-desktop-3p" && KG();
}
