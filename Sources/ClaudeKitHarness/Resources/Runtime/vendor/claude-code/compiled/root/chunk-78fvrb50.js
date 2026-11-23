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
var chunk_78fvrb50_exports = {};
__export(chunk_78fvrb50_exports, {
  Ewn: () => Ewn,
  kwn: () => kwn
});
module.exports = __toCommonJS(chunk_78fvrb50_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_ky5sghtd = require("/$bunfs/root/chunk-ky5sghtd.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
var m = { keep: "none" };
function n() {
  if ((0, import_chunk_ky5sghtd.yc)().capabilities.now("programStatus")) return import_chunk_ky5sghtd.Zyi;
  return import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_TERMINAL_TITLE ? m : (0, import_chunk_f9x2f6cx.kaa)();
}
function S(t) {
  let { capabilities: e } = (0, import_chunk_ky5sghtd.yc)(), r = [e.onSettle("programStatus", t), (0, import_chunk_f9x2f6cx.vaa)(t)];
  return () => r.forEach((o) => o());
}
function kwn() {
  return (0, import_chunk_bs4h6795.Ot)(S, n);
}
function Ewn(t, e) {
  let r = (0, import_chunk_bs4h6795.be)(import_chunk_3jkk3v3z.uY);
  kwn(), (0, import_chunk_bs4h6795.It)(() => t && (0, import_chunk_ky5sghtd.yc)().programStatus.show({ root: t, main: e })), (0, import_chunk_bs4h6795.H)(() => i(r)), (0, import_chunk_bs4h6795.H)(() => () => i(r), [r]);
}
function i(t) {
  if (!t || (0, import_chunk_xfj2cwfv.nn)()) return;
  let { programStatus: e } = (0, import_chunk_ky5sghtd.yc)(), { hasReported: r } = e, o = (0, import_chunk_f9x2f6cx.pf)() !== null && (0, import_chunk_f9x2f6cx.t3t)(), a = e.update(n(), o, (0, import_chunk_2zeyvjwb.Ree)());
  if (a !== "") {
    if (t(a), !r) (0, import_chunk_cqa9hrgx.u)("terminal_program_status");
  }
}
