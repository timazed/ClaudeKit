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
var chunk_esqsx0j3_exports = {};
__export(chunk_esqsx0j3_exports, {
  BWa: () => BWa,
  OXr: () => OXr,
  exn: () => exn
});
module.exports = __toCommonJS(chunk_esqsx0j3_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var exn = "CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE";
function OXr() {
  let { columns: e, rows: r } = process.stdout;
  if (!e || !r) return {};
  return { [exn]: `${e}x${r}` };
}
function BWa() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE;
  if (import_chunk_c203g5kd.s.unset(exn), e === void 0 || !process.stdout.isTTY) return;
  let r = /^([1-9]\d{0,3})x([1-9]\d{0,3})$/.exec(e);
  if (!r) return;
  process.stdout.columns ||= Number(r[1]), process.stdout.rows ||= Number(r[2]);
}
