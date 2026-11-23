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
var chunk_cpv7yv0r_exports = {};
__export(chunk_cpv7yv0r_exports, {
  ett: () => ett,
  q4r: () => q4r
});
module.exports = __toCommonJS(chunk_cpv7yv0r_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_yta0vzjp = require("/$bunfs/root/chunk-yta0vzjp.js");
function o(e) {
  let t = (0, import_chunk_865at33z.Mm)(e);
  return t === (0, import_chunk_865at33z.Mm)("") ? "(unnamed agent)" : t;
}
function r(e, t, i) {
  return `${o(e)} agent: ${(0, import_chunk_865at33z.QP)(t, i)}`;
}
function s(e, t, i) {
  return { type: "notification", notification: { key: `agent-model-restricted-${o(e)}-${(0, import_chunk_865at33z.Mm)(t)}`, text: r(e, t, i), priority: "medium", color: "warning", timeoutMs: 1e4 } };
}
function q4r(e, t) {
  return (i, n) => {
    t?.(s(e, i, n));
  };
}
function ett(e, t) {
  return (i, n) => {
    t?.((0, import_chunk_yta0vzjp.lp)(r(e, i, n), "warning"));
  };
}
