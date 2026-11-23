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
var chunk_n4z23p9v_exports = {};
__export(chunk_n4z23p9v_exports, {
  BJs: () => BJs,
  cCn: () => cCn,
  dCn: () => dCn
});
module.exports = __toCommonJS(chunk_n4z23p9v_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_h485hv2e = require("/$bunfs/root/chunk-h485hv2e.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
function dCn(e, t) {
  return t ? `Create the project \u201C${e}\u201D and send this message?` : `Send this message to ${e}?`;
}
var cCn = "Choose Send again to confirm.", o = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ projectName: (0, import_chunk_adx6804h.n)(), creates: (0, import_chunk_adx6804h.P)(), message: (0, import_chunk_adx6804h.n)() })), s = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.zn)("choice", [(0, import_chunk_adx6804h.c)({ choice: (0, import_chunk_adx6804h.v)("send") }), (0, import_chunk_adx6804h.c)({ choice: (0, import_chunk_adx6804h.v)("cancel") })])), BJs = (0, import_chunk_h485hv2e.ds)({ kind: "continue_in_projects_message", payload: o, result: s, default: { choice: "cancel" }, hideWhile: [] });
