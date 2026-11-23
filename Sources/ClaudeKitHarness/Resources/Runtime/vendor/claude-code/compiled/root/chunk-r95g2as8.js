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
var chunk_r95g2as8_exports = {};
__export(chunk_r95g2as8_exports, {
  Rwn: () => Rwn
});
module.exports = __toCommonJS(chunk_r95g2as8_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
function Rwn(p) {
  let i = (0, import_chunk_sng02qpc.k)(10), o, r, t;
  if (i[0] !== p) ({ active: o, children: t, ...r } = p), i[0] = p, i[1] = o, i[2] = r, i[3] = t;
  else o = i[1], r = i[2], t = i[3];
  let c;
  if (i[4] !== o) c = { line: 0, column: 0, active: o }, i[4] = o, i[5] = c;
  else c = i[5];
  let s = (0, import_chunk_8bkqeb5d.EP)(c), f;
  if (i[6] !== r || i[7] !== t || i[8] !== s) f = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ...r, ref: s, children: t }), i[6] = r, i[7] = t, i[8] = s, i[9] = f;
  else f = i[9];
  return f;
}
