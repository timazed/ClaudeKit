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
var chunk_cak1hmy1_exports = {};
__export(chunk_cak1hmy1_exports, {
  rs: () => rs
});
module.exports = __toCommonJS(chunk_cak1hmy1_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_x9zzkrd5 = require("/$bunfs/root/chunk-x9zzkrd5.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
function rs(K) {
  let C = (0, import_chunk_sng02qpc.k)(7), { action: w, context: N, fallback: R, description: n, twice: A, parens: r, bold: i, terse: a, format: c } = K, t = (0, import_chunk_x9zzkrd5.Ii)(w, N, R);
  const s = A && t ? `${t} ${t}` : t;
  let p;
  if (C[0] !== i || C[1] !== n || C[2] !== c || C[3] !== r || C[4] !== s || C[5] !== a) p = (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: s, action: n, parens: r, bold: i, terse: a, format: c }), C[0] = i, C[1] = n, C[2] = c, C[3] = r, C[4] = s, C[5] = a, C[6] = p;
  else p = C[6];
  return p;
}
