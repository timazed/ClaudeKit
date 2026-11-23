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
var chunk_9nejjte0_exports = {};
__export(chunk_9nejjte0_exports, {
  nu: () => nu
});
module.exports = __toCommonJS(chunk_9nejjte0_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
function nu(s) {
  let b = (0, import_chunk_sng02qpc.k)(6), { children: r, paddingX: a, marginTop: o, marginBottom: n } = s, d = a === void 0 ? 1 : a;
  const t = (0, import_chunk_8bkqeb5d.Xe)() ? void 0 : "dashed";
  let i;
  if (b[0] !== r || b[1] !== n || b[2] !== o || b[3] !== d || b[4] !== t) i = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { borderStyle: t, borderColor: "subtle", borderLeft: false, borderRight: false, flexDirection: "column", overflow: "hidden", paddingX: d, marginTop: o, marginBottom: n, children: r }), b[0] = r, b[1] = n, b[2] = o, b[3] = d, b[4] = t, b[5] = i;
  else i = b[5];
  return i;
}
