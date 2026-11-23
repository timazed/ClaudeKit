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
var chunk_gpach6z0_exports = {};
__export(chunk_gpach6z0_exports, {
  bzi: () => bzi,
  n7e: () => n7e
});
module.exports = __toCommonJS(chunk_gpach6z0_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var n = (0, import_chunk_t57w17k7.de)({ scale: void 0 }, (e) => {
  e.scale = void 0;
});
function n7e() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_JIT_POLICY_AFTER_STARTUP ?? 1;
  if (typeof Bun < "u" && typeof Bun.unsafe.setJITPolicy === "function") Bun.unsafe.setJITPolicy(e), n.scale = e;
  return e;
}
function bzi() {
  return n.scale;
}
