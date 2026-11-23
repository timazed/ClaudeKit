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
var chunk_c7hg08xn_exports = {};
__export(chunk_c7hg08xn_exports, {
  At: () => At
});
module.exports = __toCommonJS(chunk_c7hg08xn_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_b7hj8816 = require("/$bunfs/root/chunk-b7hj8816.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
function At(g) {
  let c = (0, import_chunk_sng02qpc.k)(8), { children: d, tone: p, oneRow: R, settled: i } = g, t = p === void 0 ? "dim" : p;
  const a = (R === void 0 ? false : R) ? 1 : void 0, l = t === "dim", s = t === "warning" || t === "error" ? t : void 0;
  let n;
  if (c[0] !== d || c[1] !== l || c[2] !== s) n = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: l, color: s, children: d }), c[0] = d, c[1] = l, c[2] = s, c[3] = n;
  else n = c[3];
  let f;
  if (c[4] !== i || c[5] !== a || c[6] !== n) f = (0, import_chunk_a46xeenj.e)(import_chunk_b7hj8816.Wn, { height: a, settled: i, children: n }), c[4] = i, c[5] = a, c[6] = n, c[7] = f;
  else f = c[7];
  return f;
}
