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
var chunk_3mgqz62p_exports = {};
__export(chunk_3mgqz62p_exports, {
  fni: () => fni,
  oor: () => oor,
  uni: () => uni
});
module.exports = __toCommonJS(chunk_3mgqz62p_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var t = /^chat:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function uni() {
  let e = (0, import_chunk_3t7ve0wy.Gra)();
  if (!e) return "unset";
  if (!t.test(e)) return "malformed";
  return (0, import_chunk_42tcgre6.Tge)() ? "ignored" : "used";
}
function o() {
  return uni() === "used" ? (0, import_chunk_3t7ve0wy.Gra)() : void 0;
}
function fni() {
  let e = o();
  return e === void 0 ? { key: (0, import_chunk_f9x2f6cx.W)(), fromHost: false } : { key: e, fromHost: true };
}
function oor() {
  return fni().key;
}
