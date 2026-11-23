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
var chunk_mfm58fyw_exports = {};
__export(chunk_mfm58fyw_exports, {
  mg: () => mg
});
module.exports = __toCommonJS(chunk_mfm58fyw_exports);
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
function mg(r) {
  let [t, n] = (0, import_chunk_bs4h6795.y)({ attempts: 0, refused: null }), s = (0, import_chunk_bs4h6795.ye)((e) => {
    n((a) => ({ attempts: a.attempts + 1, refused: e }));
  }, []), u = (0, import_chunk_bs4h6795.ye)((e) => {
    if (r(e) === false) return s(e), false;
    return true;
  }, [r, s]);
  return (0, import_chunk_bs4h6795.H)(() => {
    if (t.refused !== null) n((e) => ({ attempts: e.attempts, refused: null }));
  }, [t.refused]), { answer: u, refuse: s, refused: t.refused, attempts: t.attempts };
}
