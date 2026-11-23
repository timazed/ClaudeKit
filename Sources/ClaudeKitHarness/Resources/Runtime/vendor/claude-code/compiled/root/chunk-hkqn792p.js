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
var chunk_hkqn792p_exports = {};
__export(chunk_hkqn792p_exports, {
  C4o: () => C4o,
  EQs: () => EQs
});
module.exports = __toCommonJS(chunk_hkqn792p_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var C4o = "[3P telemetry] OTEL diag error:";
class EQs {
  error(r, ...e) {
    if (import_chunk_c203g5kd.s.CLAUDE_CODE_OTEL_DIAG_STDERR) process.stderr.write(`${C4o} ${r}
`);
    (0, import_chunk_w578pjby.t)(`${C4o} ${r}`, { level: "error" });
  }
  warn(r, ...e) {
    (0, import_chunk_w578pjby.t)(`[3P telemetry] OTEL diag warn: ${r}`, { level: "warn" });
  }
  info(r, ...e) {
    return;
  }
  debug(r, ...e) {
    return;
  }
  verbose(r, ...e) {
    return;
  }
}
