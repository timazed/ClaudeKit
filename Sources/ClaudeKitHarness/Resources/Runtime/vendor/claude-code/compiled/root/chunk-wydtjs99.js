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
var chunk_wydtjs99_exports = {};
__export(chunk_wydtjs99_exports, {
  f_e: () => f_e
});
module.exports = __toCommonJS(chunk_wydtjs99_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_3bgaher8 = require("/$bunfs/root/chunk-3bgaher8.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_gpb7vtp4 = require("/$bunfs/root/chunk-gpb7vtp4.js");
var import_chunk_hn8k40x7 = require("/$bunfs/root/chunk-hn8k40x7.js");
function f_e(e) {
  if (!(0, import_chunk_865at33z.yke)()) return;
  let o = e?.message ?? (0, import_chunk_hn8k40x7.gIa)();
  if ((0, import_chunk_3bgaher8.k$e)({ type: "detach-request", msg: o, broadcast: e?.broadcast })) {
    (0, import_chunk_gpb7vtp4.GJn)();
    return;
  }
  process.stdout.write((0, import_chunk_9e5mdyfk.dDe)(o)), (0, import_chunk_gpb7vtp4.GJn)();
}
