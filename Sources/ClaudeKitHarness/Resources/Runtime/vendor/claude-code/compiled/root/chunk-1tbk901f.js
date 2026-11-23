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
var chunk_1tbk901f_exports = {};
__export(chunk_1tbk901f_exports, {
  cE: () => cE
});
module.exports = __toCommonJS(chunk_1tbk901f_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
function cE(b) {
  let R = (0, import_chunk_sng02qpc.k)(7), { children: d, color: e, textColor: x, padded: T, bold: l, wrap: p } = b, t = T ? " " : "";
  const a = x ?? (e ? "inverseText" : void 0);
  let s;
  if (R[0] !== l || R[1] !== d || R[2] !== e || R[3] !== t || R[4] !== a || R[5] !== p) s = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { backgroundColor: e, color: a, bold: l, wrap: p, children: [t, d, t] }), R[0] = l, R[1] = d, R[2] = e, R[3] = t, R[4] = a, R[5] = p, R[6] = s;
  else s = R[6];
  return s;
}
