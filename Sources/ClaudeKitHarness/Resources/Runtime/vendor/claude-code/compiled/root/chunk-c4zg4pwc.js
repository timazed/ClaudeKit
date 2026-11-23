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
var chunk_c4zg4pwc_exports = {};
__export(chunk_c4zg4pwc_exports, {
  Cme: () => Cme,
  dl: () => dl
});
module.exports = __toCommonJS(chunk_c4zg4pwc_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
function dl() {
  if (!(0, import_chunk_69qhefwa.Ne)(process.env.CLAUDE_CODE_COORDINATOR_MODE)) return false;
  if ((0, import_chunk_f9x2f6cx.Cl)() && !(0, import_chunk_f9x2f6cx.Hn)() && !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) return false;
  return true;
}
function Cme(e) {
  return dl() && e.agentId === void 0;
}
