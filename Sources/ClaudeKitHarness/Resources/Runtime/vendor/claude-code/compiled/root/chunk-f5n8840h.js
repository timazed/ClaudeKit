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
var chunk_f5n8840h_exports = {};
__export(chunk_f5n8840h_exports, {
  Due: () => Due,
  e5: () => e5,
  ooi: () => ooi
});
module.exports = __toCommonJS(chunk_f5n8840h_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_h485hv2e = require("/$bunfs/root/chunk-h485hv2e.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var e5 = (0, import_chunk_h485hv2e.ds)({ kind: "mcp_elicitation", payload: (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.oc)((t) => typeof t === "object" && t !== null && "serverName" in t && "params" in t)), result: (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.oc)((t) => typeof t === "object" && t !== null)), default: { action: "cancel" }, holdsTop: true }), Due = (0, import_chunk_h485hv2e.ds)({ kind: "mcp_elicitation_waiting", payload: (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.oc)((t) => typeof t === "object" && t !== null && "serverName" in t && "params" in t)), result: (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.F)(["dismiss", "retry", "cancel", "cancelled"])), default: "cancelled" });
function ooi(t) {
  return t === e5.kind || t === Due.kind;
}
