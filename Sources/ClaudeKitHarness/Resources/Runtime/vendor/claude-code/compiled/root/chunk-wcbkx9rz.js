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
var chunk_wcbkx9rz_exports = {};
__export(chunk_wcbkx9rz_exports, {
  LUo: () => LUo,
  NUo: () => NUo
});
module.exports = __toCommonJS(chunk_wcbkx9rz_exports);
var import_chunk_1tyxkk56 = require("/$bunfs/root/chunk-1tyxkk56.js");
var import_chunk_s56g10ck = require("/$bunfs/root/chunk-s56g10ck.js");
var LUo = (t) => (e) => {
  if (!(0, import_chunk_1tyxkk56.prn)(e)) return { error: Error("Theme takes the name of a theme") };
  t(e);
  return;
}, NUo = (t, e, r) => (0, import_chunk_s56g10ck.mDt)((0, import_chunk_s56g10ck.B4o)(e), t, LUo(e.setTheme), r);
