const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_h4acbrb5_exports = {};
__export(chunk_h4acbrb5_exports, {
  gCa: () => gCa,
  hCa: () => hCa
});
module.exports = __toCommonJS(chunk_h4acbrb5_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_p78dm83c = require("/$bunfs/root/chunk-p78dm83c.js");
function y(t) {
  return t.length > 0 && t.every((e) => e === "prometheus");
}
async function hCa(t, e) {
  let { initializeTelemetry: s } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-ezcqffvw.js"))), { meter: r, metricsExporterKinds: a } = await s(t, e);
  if (r) {
    (0, import_chunk_p78dm83c.Del)(r, (u, m) => {
      let c = r?.createCounter(u, m);
      return { add(d, p = {}) {
        let l = { ...(0, import_chunk_xfr8663h.HWn)(), ...p };
        c?.add(d, l);
      } };
    }, { omitUnits: y(a) });
    let o = (0, import_chunk_p78dm83c.QEi)();
    if (o && !(0, import_chunk_f9x2f6cx.wJ)()) await n(o);
  }
}
function gCa() {
  let t = (0, import_chunk_p78dm83c.QEi)();
  if (t) n(t).catch(import_chunk_k449cc64.i);
}
async function n(t) {
  await (0, import_chunk_xfr8663h.fEl)(), t.add(1, { start_type: (0, import_chunk_f9x2f6cx.Gaa)() });
}
