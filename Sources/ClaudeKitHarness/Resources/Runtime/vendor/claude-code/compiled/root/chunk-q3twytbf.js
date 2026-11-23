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
var chunk_q3twytbf_exports = {};
__export(chunk_q3twytbf_exports, {
  RVe: () => RVe,
  kpa: () => kpa
});
module.exports = __toCommonJS(chunk_q3twytbf_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var r = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.c)({ v: (0, import_chunk_adx6804h.v)(1), state: (0, import_chunk_adx6804h.n)() }), (0, import_chunk_adx6804h.c)({ v: (0, import_chunk_adx6804h.v)(2), engine: (0, import_chunk_adx6804h.v)("bridge") })]));
function kpa(e, o) {
  if (e === void 0 || e === null) return typeof o === "object" && o !== null ? "none" : "unstated";
  let t = r().safeParse(e);
  if (!t.success) return "unreadable";
  if (t.data.v === 2) return "bridge";
  switch (t.data.state) {
    case "connected":
    case "requested":
    case "detached":
      return t.data.state;
    default:
      return "other_state";
  }
}
function RVe(e) {
  return e === "none" || e === "bridge" || e === "this_helper";
}
