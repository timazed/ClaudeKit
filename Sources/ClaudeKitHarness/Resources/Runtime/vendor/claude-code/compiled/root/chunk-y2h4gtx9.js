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
var chunk_y2h4gtx9_exports = {};
__export(chunk_y2h4gtx9_exports, {
  B3t: () => B3t,
  M1r: () => M1r,
  vpa: () => vpa
});
module.exports = __toCommonJS(chunk_y2h4gtx9_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_t9k2xeez = require("/$bunfs/root/chunk-t9k2xeez.js");
var import_chunk_5m9vge4h = require("/$bunfs/root/chunk-5m9vge4h.js");
function B3t() {
  return (0, import_chunk_t9k2xeez.Ny)() || (0, import_chunk_5m9vge4h.T9e)();
}
function vpa(e) {
  switch (e.kind) {
    case "elsewhere":
      return "elsewhere";
    case "nowhere":
      return e.hasOwnSessionRecord ? "here_only" : "nowhere";
    case "unknown":
      return e.why === "not_looked" ? "not_looked" : "unknown";
  }
}
function M1r(e, o) {
  (0, import_chunk_y53wbr8a.a)("tengu_remote_attach_record_lookup", { outcome: (0, import_chunk_78g0060s.f)(e), entry_point: (0, import_chunk_78g0060s.f)(o) });
}
