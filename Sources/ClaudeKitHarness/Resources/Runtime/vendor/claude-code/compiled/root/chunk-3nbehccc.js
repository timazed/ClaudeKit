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
var chunk_3nbehccc_exports = {};
__export(chunk_3nbehccc_exports, {
  OY: () => OY,
  ZZs: () => ZZs
});
module.exports = __toCommonJS(chunk_3nbehccc_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_r60bafc1 = require("/$bunfs/root/chunk-r60bafc1.js");
var import_chunk_z1z1qsrb = require("/$bunfs/root/chunk-z1z1qsrb.js");
var import_chunk_qtg8rez4 = require("/$bunfs/root/chunk-qtg8rez4.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
function OY(r) {
  if ((0, import_chunk_z1z1qsrb.tYe)()) (0, import_chunk_r60bafc1.kys)((0, import_chunk_bzyb60p0.vZr)(r).map(([, t]) => ZZs(t)), () => (0, import_chunk_bzyb60p0.yE)((0, import_chunk_bzyb60p0.Ja)((0, import_chunk_f9x2f6cx.W)())));
}
function ZZs(r) {
  let t = (0, import_chunk_r8478wtb.Xc)(r.url);
  return { url: r.url, title: r.title, favicon: r.favicon, type_id: t === null ? void 0 : (0, import_chunk_qtg8rez4.gj)((0, import_chunk_qtg8rez4.Bt)(t)), kind: "frame", updated_at: new Date(r.updatedAt).toISOString() };
}
