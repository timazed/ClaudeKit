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
var chunk_shs9e3r5_exports = {};
__export(chunk_shs9e3r5_exports, {
  Wae: () => Wae,
  kG: () => kG,
  u0: () => u0
});
module.exports = __toCommonJS(chunk_shs9e3r5_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
function kG(e, r) {
  let n = o(r);
  try {
    if (r instanceof Error) {
      let t = (0, import_chunk_7fsmgfxx.qna)(r);
      if (t.length > 0) e.stack = [`${e.name}: ${e.message}`, ...t].join(`
`);
    }
  } catch {
  }
  (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.M3)(e, { telemetryMessage: e.telemetryMessage, ...n !== void 0 && { code: n } }));
}
function o(e) {
  try {
    return (0, import_chunk_jv7av99m.Cr)(e);
  } catch {
    return;
  }
}
function u0(e) {
  let r = (0, import_chunk_jv7av99m.D1e)(e);
  if (r !== "a value that is not a built-in error") return r;
  try {
    return e instanceof Error ? "an error of another class" : "a value that is not an Error";
  } catch {
    return "a value whose class cannot be read";
  }
}
function Wae(e) {
  return `${u0(e)}, error code ${o(e) ?? "none"}`;
}
