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
var chunk_p052vp7t_exports = {};
__export(chunk_p052vp7t_exports, {
  aOi: () => aOi,
  iOi: () => iOi,
  nFn: () => nFn,
  odl: () => odl,
  rdl: () => rdl,
  sdl: () => sdl
});
module.exports = __toCommonJS(chunk_p052vp7t_exports);
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var s = ["boot_process", "boot_session", "boot_load", "boot_init", "boot_mcp", "boot_hydrate", "boot_connect", "open", "attachments", "prepare", "schemas", "normalize", "build"], o = ["stream", "permission", "tool", "send"], i = ["uploads", "telemetry"];
var a = ["rest", "after_stream", ...s, ...o, ...i];
function r() {
}
var t = (0, import_chunk_t57w17k7.de)({ clock: void 0 }, (e) => {
  e.clock = void 0;
});
function rdl(e) {
  t.clock?.setPhase(e);
}
function odl(e, n) {
  t.clock?.setPhaseWithin(e, n);
}
function sdl(e, n) {
  t.clock?.endPhaseWithin(e, n);
}
function nFn(e) {
  return t.clock?.openWindow(e) ?? r;
}
function iOi(e) {
  return t.clock?.enterSpan(e) ?? "not_clocked";
}
function aOi(e) {
  t.clock?.leaveSpan(e);
}
