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
var chunk_tg45bw84_exports = {};
__export(chunk_tg45bw84_exports, {
  Uet: () => Uet
});
module.exports = __toCommonJS(chunk_tg45bw84_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
function Uet() {
  let e = (0, import_chunk_865at33z.SNe)("proxyAuthHelper", ((0, import_chunk_2yx6c1y2.zr)() || {}).proxyAuthHelper), r = (0, import_chunk_3jjr3wje.tEe)() !== e;
  if ((0, import_chunk_3jjr3wje.FMr)({ helper: e, fromProjectOrLocal: (0, import_chunk_2yx6c1y2.vl)("projectSettings")?.proxyAuthHelper === e || (0, import_chunk_2yx6c1y2.vl)("localSettings")?.proxyAuthHelper === e || (0, import_chunk_865at33z.FGe)("proxyAuthHelper"), trustAccepted: import_chunk_865at33z.Yi, startHelper: import_chunk_865at33z.F7e, readAsHelperStarts: import_chunk_865at33z.Dzt }), r) (0, import_chunk_3jjr3wje.QVt)();
}
