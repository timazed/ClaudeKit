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
var chunk_d109n23j_exports = {};
__export(chunk_d109n23j_exports, {
  E6r: () => E6r,
  P4s: () => P4s,
  azo: () => azo,
  lzo: () => lzo,
  vAa: () => vAa
});
module.exports = __toCommonJS(chunk_d109n23j_exports);
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_a36sa5qg = require("/$bunfs/root/chunk-a36sa5qg.js");
function vAa(o, t) {
  try {
    o.toolState.get(import_chunk_a36sa5qg.Yte).add(t, o.abortController);
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r);
  }
}
function azo(o) {
  try {
    o.toolState.get(import_chunk_a36sa5qg.Yte).forget(o.abortController.signal);
  } catch (t) {
    (0, import_chunk_k449cc64.i)(t);
  }
}
function lzo(o) {
  try {
    let t = o.abortController.signal;
    if (!o.toolState.get(import_chunk_a36sa5qg.Yte).endedTurns.has(t)) return false;
    if (!t.aborted) o.abortController.abort("end_conversation");
    return true;
  } catch (t) {
    return (0, import_chunk_k449cc64.i)(t), false;
  }
}
function E6r(o, t) {
  try {
    o.toolState.get(import_chunk_a36sa5qg.Yte).declinedTurns.add(t);
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r);
  }
}
function P4s(o, t) {
  try {
    if (!o.toolState.get(import_chunk_a36sa5qg.Yte).declinedTurns.delete(t)) return false;
    return o.abortController.abort(), require("/$bunfs/root/chunk-ymvk0vd5.js").holdQueuedReports(o.messageQueue), true;
  } catch (r) {
    return (0, import_chunk_k449cc64.i)(r), false;
  }
}
