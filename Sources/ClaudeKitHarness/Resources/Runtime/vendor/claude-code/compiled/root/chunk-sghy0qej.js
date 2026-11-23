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
var chunk_sghy0qej_exports = {};
__export(chunk_sghy0qej_exports, {
  CGe: () => CGe,
  Pe: () => Pe
});
module.exports = __toCommonJS(chunk_sghy0qej_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_8jsh3ct2 = require("/$bunfs/root/chunk-8jsh3ct2.js");
function Pe(t, { safe: e }) {
  try {
    let { value: n, source: r } = (0, import_chunk_865at33z.gn)(t, e), o = !(0, import_chunk_865at33z.wf)();
    return (0, import_chunk_8jsh3ct2.Y0r)({ value: n, source: r, defaultHost: o }, e);
  } catch {
    return e;
  }
}
function CGe(t, { safe: e, others: n }) {
  try {
    let { value: r, source: o } = (0, import_chunk_865at33z.gn)(t, e), u = n.find((i) => i === r);
    return u !== void 0 && o === "payload" && !(0, import_chunk_865at33z.wf)() ? u : e;
  } catch {
    return e;
  }
}
