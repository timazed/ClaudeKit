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
var chunk_gkm2eky6_exports = {};
__export(chunk_gkm2eky6_exports, {
  BEi: () => BEi,
  Eel: () => Eel,
  Kmr: () => Kmr,
  nds: () => nds,
  qmr: () => qmr
});
module.exports = __toCommonJS(chunk_gkm2eky6_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
function o() {
  return "";
}
function r() {
  return (0, import_chunk_7fsmgfxx.PUl)() && import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT !== "local-agent";
}
function Kmr(e) {
  return (0, import_chunk_zmb62hr5.jM)(e) && r() ? o() : null;
}
function nds(e) {
  let t = o();
  return t !== "" && e.some((n) => n.includes(t));
}
function BEi(e) {
  return false;
}
function Eel() {
  return;
}
function qmr(e, t) {
  try {
    (0, import_chunk_865at33z.ode)(t ?? (0, import_chunk_865at33z.dt)());
  } catch {
  }
  return (0, import_chunk_865at33z.kCo)(e);
}
