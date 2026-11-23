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
var chunk_8jqz7q9z_exports = {};
__export(chunk_8jqz7q9z_exports, {
  Isr: () => Isr,
  Tii: () => Tii,
  v0t: () => v0t,
  zRn: () => zRn
});
module.exports = __toCommonJS(chunk_8jqz7q9z_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
function v0t() {
  return (0, import_chunk_865at33z.b)("tengu_toasty_phoenix", false);
}
function Tii() {
  return (0, import_chunk_2yx6c1y2.Lee)("remoteMessageReceipts").find(({ source: e, value: t }) => e !== "flagSettings" || t === "off");
}
function Isr() {
  return Tii()?.value ?? "on";
}
function zRn() {
  return v0t() && !(0, import_chunk_k449cc64.wt)() && Isr() !== "off";
}
