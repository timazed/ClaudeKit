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
var chunk_kt20mjaj_exports = {};
__export(chunk_kt20mjaj_exports, {
  B0i: () => B0i,
  EZl: () => EZl,
  W0i: () => W0i,
  aql: () => aql,
  c$n: () => c$n,
  i_o: () => i_o,
  ihl: () => ihl,
  j0i: () => j0i,
  jgs: () => jgs
});
module.exports = __toCommonJS(chunk_kt20mjaj_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_8m5q5cts = require("/$bunfs/root/chunk-8m5q5cts.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var i_o = "in-process";
class ihl {
  captured = null;
  cliOverride = null;
  setCliOverride(e) {
    this.cliOverride = e;
  }
  capture(e) {
    this.captured = e;
  }
  replaceWith(e) {
    this.captured = e, this.cliOverride = null;
  }
}
var aql = new import_chunk_2904xtvq.j(() => new ihl());
function o() {
  return aql.of((0, import_chunk_f9x2f6cx.N)().host);
}
function EZl(e) {
  o().setCliOverride(e);
}
function B0i() {
  return o().cliOverride;
}
function W0i(e) {
  o().replaceWith(e), (0, import_chunk_w578pjby.t)(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`);
}
function j0i() {
  return o().captured !== null;
}
function jgs() {
  let e = o();
  if (e.cliOverride) e.capture(e.cliOverride), (0, import_chunk_w578pjby.t)(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);
  else e.capture((0, import_chunk_8m5q5cts.ll)("teammateMode", i_o).value), (0, import_chunk_w578pjby.t)(`[TeammateModeSnapshot] Captured from config: ${e.captured}`);
}
function c$n() {
  let e = o();
  if (e.captured === null) (0, import_chunk_k449cc64.i)(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")), jgs();
  return e.captured ?? i_o;
}
