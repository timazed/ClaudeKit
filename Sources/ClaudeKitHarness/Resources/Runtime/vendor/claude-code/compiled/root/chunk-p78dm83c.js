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
var chunk_p78dm83c_exports = {};
__export(chunk_p78dm83c_exports, {
  $1t: () => $1t,
  Del: () => Del,
  Lel: () => Lel,
  Nel: () => Nel,
  QEi: () => QEi,
  ZEi: () => ZEi,
  Zlo: () => Zlo,
  edo: () => edo,
  evi: () => evi,
  ids: () => ids,
  tvi: () => tvi
});
module.exports = __toCommonJS(chunk_p78dm83c_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
function Del(t, r, o = {}) {
  e().host.telemetryHandles.installMeter(t, r, o);
}
function QEi() {
  return e().host.telemetryHandles.sessionCounter();
}
function ZEi() {
  return e().host.telemetryHandles.locCounter();
}
function $1t() {
  return e().host.telemetryHandles.prCounter();
}
function evi() {
  return e().host.telemetryHandles.commitCounter();
}
function Lel() {
  return e().host.telemetryHandles.costCounter();
}
function Zlo() {
  return e().host.telemetryHandles.tokenCounter();
}
function ids() {
  return e().host.telemetryHandles.codeEditToolDecisionCounter();
}
function Nel() {
  return e().host.telemetryHandles.activeTimeCounter();
}
function edo() {
  return e().host.telemetryHandles.meterProvider();
}
function tvi(t) {
  e().host.telemetryHandles.replaceMeterProvider(t);
}
function e() {
  return (0, import_chunk_f9x2f6cx.N)();
}
