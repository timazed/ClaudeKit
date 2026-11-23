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
var chunk_1g0cz451_exports = {};
__export(chunk_1g0cz451_exports, {
  hIe: () => hIe
});
module.exports = __toCommonJS(chunk_1g0cz451_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_5f9jkxad = require("/$bunfs/root/chunk-5f9jkxad.js");
function hIe({ newState: e, oldState: t }, n, s, p) {
  if ((0, import_chunk_5f9jkxad.IGr)({ newState: e, oldState: t }, n, void 0, s, p), e.expandedView !== t.expandedView) {
    let a = e.expandedView === "tasks";
    (0, import_chunk_865at33z.Ke)((o) => {
      if (o.showExpandedTodos === a) return o;
      return { ...o, showExpandedTodos: a };
    }, s);
  }
}
