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
var chunk_gqajdb5q_exports = {};
__export(chunk_gqajdb5q_exports, {
  zL: () => zL
});
module.exports = __toCommonJS(chunk_gqajdb5q_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
function zL(r, n, o) {
  let e = n.safeParse(o);
  if (e.success) return e.data;
  let s = e.error.issues[0];
  return (0, import_chunk_w578pjby.t)(`[thin-client] ${r} reply did not match its schema (${e.error.issues.length} issue(s); first: ${s ? `${s.path.join(".") || "<root>"}: ${s.message}` : "unknown"})`, { level: "warn" }), null;
}
