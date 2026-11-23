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
var chunk_p26a3tg2_exports = {};
__export(chunk_p26a3tg2_exports, {
  Gvn: () => Gvn,
  H6o: () => H6o,
  w9s: () => w9s,
  zvn: () => zvn
});
module.exports = __toCommonJS(chunk_p26a3tg2_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_h485hv2e = require("/$bunfs/root/chunk-h485hv2e.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var Gvn = "Remote Control is off, so this session can\u2019t be sent", zvn = "/send-to-project needs Remote Control so a Claude Project can read this session.", H6o = "Turn on Remote Control and send", o = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({})), e = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.zn)("choice", [(0, import_chunk_adx6804h.c)({ choice: (0, import_chunk_adx6804h.v)("turn_on") }), (0, import_chunk_adx6804h.c)({ choice: (0, import_chunk_adx6804h.v)("no") })])), w9s = (0, import_chunk_h485hv2e.ds)({ kind: "continue_in_projects_remote_control", payload: o, result: e, default: { choice: "no" }, hideWhile: ["panel", "draft"] });
