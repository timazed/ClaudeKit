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
var chunk_my2qa304_exports = {};
__export(chunk_my2qa304_exports, {
  J4s: () => J4s,
  Q4s: () => Q4s,
  Z4s: () => Z4s,
  eRa: () => eRa,
  nRa: () => nRa,
  oRa: () => oRa,
  rRa: () => rRa,
  tRa: () => tRa
});
module.exports = __toCommonJS(chunk_my2qa304_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var eRa = "Resumed agent. Its final report is not in this message.", tRa = "Resumed agent. Its final report follows this JSON, framed by the harness.", nRa = "Agent was not resumed, and your message was not delivered. A further message to it will try to resume the agent. Its final report is not in this message.", rRa = "Agent was not resumed, and your message was not delivered. A further message to it will try to resume the agent. Its final report, read from its saved transcript, follows this JSON, framed by the harness.";
function J4s({ displayName: e, content: t, stored: s }) {
  let r = (0, import_chunk_bzyb60p0.Go)(t, `
`) || "(no text output)";
  return s ? `Agent ${e} was not resumed, and your message was not delivered. A further message to it will try to resume the agent. Its final report, read from its saved transcript:

${r}` : `Resumed agent ${e}. Result:

${r}`;
}
var Q4s = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ message: (0, import_chunk_adx6804h.n)().optional(), display: (0, import_chunk_adx6804h.n)().optional(), inlineHandback: (0, import_chunk_adx6804h.c)({ displayName: (0, import_chunk_adx6804h.n)(), content: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("text"), text: (0, import_chunk_adx6804h.n)() })), stored: (0, import_chunk_adx6804h.v)(true).optional() }).optional().catch(void 0), routing: (0, import_chunk_adx6804h.ie)().optional(), request_id: (0, import_chunk_adx6804h.ie)().optional(), target: (0, import_chunk_adx6804h.ie)().optional() }));
function Z4s(e) {
  if (e.routing) return;
  if (e.request_id !== void 0 && e.target !== void 0) return;
  return e.display ?? (e.inlineHandback ? J4s(e.inlineHandback) : e.message);
}
function oRa(e) {
  let t = Q4s().safeParse(e);
  return t.success ? Z4s(t.data) ?? "" : "";
}
