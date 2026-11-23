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
var chunk_67x4acbe_exports = {};
__export(chunk_67x4acbe_exports, {
  Mkn: () => Mkn,
  iba: () => iba
});
module.exports = __toCommonJS(chunk_67x4acbe_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_wwft95x8 = require("/$bunfs/root/chunk-wwft95x8.js");
var import_chunk_d775ds6c = require("/$bunfs/root/chunk-d775ds6c.js");
var e = 2e3;
async function Mkn() {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") {
    (0, import_chunk_d775ds6c.e1)();
    return;
  }
  await (0, import_chunk_5appeerh.me)((0, import_chunk_wwft95x8.Huo)().catch(() => {
    return;
  }), e);
}
function iba() {
  return (0, import_chunk_cg8dqz0a.x)() === "windows" || (0, import_chunk_n2dbhmj2.sMo)() !== void 0;
}
