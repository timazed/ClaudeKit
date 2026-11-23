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
var chunk_btfm8m05_exports = {};
__export(chunk_btfm8m05_exports, {
  JBa: () => JBa,
  P8o: () => P8o,
  XBa: () => XBa,
  Xsi: () => Xsi,
  Ysi: () => Ysi
});
module.exports = __toCommonJS(chunk_btfm8m05_exports);
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var XBa = "anthropic/connectorFiles/put", Ysi = "anthropic/connectorFiles/part", JBa = "anthropic/connectorFiles/get", P8o = "anthropic/connectorFiles/read";
function Xsi(o) {
  return (0, import_chunk_0jve1fep.Le)(o) && (o.method === Ysi || o.method === P8o);
}
