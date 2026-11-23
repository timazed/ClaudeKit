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
var chunk_263v0sz3_exports = {};
__export(chunk_263v0sz3_exports, {
  Q3o: () => Q3o,
  szl: () => szl
});
module.exports = __toCommonJS(chunk_263v0sz3_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_e1gwyq1j = require("/$bunfs/root/chunk-e1gwyq1j.js");
var import_os = require("os");
function n(t) {
  let r = (0, import_chunk_f9x2f6cx.Oo)(), e = (0, import_chunk_865at33z.dmn)(t);
  return !(0, import_chunk_z6pfqf6e.Rpt)(r, (0, import_os.homedir)()) && (0, import_chunk_z6pfqf6e.Rpt)(r, t) && (e === null || (0, import_chunk_z6pfqf6e.Rpt)(e.root, r));
}
function i(t) {
  return [(0, import_chunk_2yx6c1y2.wv)(t), (0, import_chunk_865at33z.dmn)(t)?.root].find((r) => !!r && r !== t);
}
function szl(t, r = true) {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_SANDBOXED || !(0, import_chunk_865at33z.b)("bot_protected_tengu_slate_orchard", true)) return;
  if (!r) return { path: t };
  let e = (0, import_chunk_z6pfqf6e.sNo)(t) ?? t;
  return (0, import_chunk_e1gwyq1j.FDt)(t).verdict !== "untrusted" || (0, import_chunk_865at33z.Xk)(e) || n(e) ? void 0 : { path: e, repository: i(e) };
}
function Q3o(t, r = true) {
  return (0, import_chunk_f9x2f6cx.Se)() || (0, import_chunk_f9x2f6cx.Hn)() ? void 0 : szl(t, r);
}
