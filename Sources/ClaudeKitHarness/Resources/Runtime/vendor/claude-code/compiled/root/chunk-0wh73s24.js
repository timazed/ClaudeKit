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
var chunk_0wh73s24_exports = {};
__export(chunk_0wh73s24_exports, {
  kQs: () => kQs,
  rXt: () => rXt,
  yCn: () => yCn
});
module.exports = __toCommonJS(chunk_0wh73s24_exports);
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_h485hv2e = require("/$bunfs/root/chunk-h485hv2e.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var rXt = 200;
function yCn(e, t) {
  return e === null ? "no messages yet" : `active ${(0, import_chunk_f64qna2j.Ty)(new Date(e), { now: t })}`;
}
var o = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ sends: (0, import_chunk_adx6804h.F)(["message", "brief"]), newProjectName: (0, import_chunk_adx6804h.n)(), projects: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)(), name: (0, import_chunk_adx6804h.n)(), lastMessageAtMs: (0, import_chunk_adx6804h.E)().nullable() })).max(rXt), truncated: (0, import_chunk_adx6804h.P)(), listError: (0, import_chunk_adx6804h.n)().optional() })), r = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.zn)("choice", [(0, import_chunk_adx6804h.c)({ choice: (0, import_chunk_adx6804h.v)("new") }), (0, import_chunk_adx6804h.c)({ choice: (0, import_chunk_adx6804h.v)("existing"), projectId: (0, import_chunk_adx6804h.n)() }), (0, import_chunk_adx6804h.c)({ choice: (0, import_chunk_adx6804h.v)("cancel") })])), kQs = (0, import_chunk_h485hv2e.ds)({ kind: "continue_in_projects_target", payload: o, result: r, default: { choice: "cancel" }, hideWhile: [] });
