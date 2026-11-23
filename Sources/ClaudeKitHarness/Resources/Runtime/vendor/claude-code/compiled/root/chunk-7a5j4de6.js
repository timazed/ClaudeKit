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
var chunk_7a5j4de6_exports = {};
__export(chunk_7a5j4de6_exports, {
  Et: () => Et
});
module.exports = __toCommonJS(chunk_7a5j4de6_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_zvx9zp0y = require("/$bunfs/root/chunk-zvx9zp0y.js");
var import_chunk_pv97d3wp = require("/$bunfs/root/chunk-pv97d3wp.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
function Et(n) {
  let t = (0, import_chunk_sng02qpc.k)(9), { message: a, subtitle: i } = n, f;
  if (t[0] === import_chunk_w1d7ygsk.R) f = [], t[0] = f;
  else f = t[0];
  (0, import_chunk_zvx9zp0y.nl)(f);
  let l;
  if (t[1] === import_chunk_w1d7ygsk.R) l = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, children: (0, import_chunk_a46xeenj.e)(import_chunk_pv97d3wp.sKe, {}) }), t[1] = l;
  else l = t[1];
  let s;
  if (t[2] !== a) s = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: a }), t[2] = a, t[3] = s;
  else s = t[3];
  let m;
  if (t[4] !== i) m = i && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: i }), t[4] = i, t[5] = m;
  else m = t[5];
  let p;
  if (t[6] !== s || t[7] !== m) p = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "row", children: [l, (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", flexShrink: 1, children: [s, m] })] }), t[6] = s, t[7] = m, t[8] = p;
  else p = t[8];
  return p;
}
