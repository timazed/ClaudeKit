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
var chunk_gw2m8pf7_exports = {};
__export(chunk_gw2m8pf7_exports, {
  Nbn: () => Nbn
});
module.exports = __toCommonJS(chunk_gw2m8pf7_exports);
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
function Nbn(s) {
  let b = (0, import_chunk_sng02qpc.k)(3), { children: u, exitActive: o, onInterrupt: x, italic: n } = s, R = o === void 0 ? true : o, t = n === void 0 ? false : n, { pending: y, keyName: N } = (0, import_chunk_vs99e3g5.$l)(void 0, x, R);
  const i = y ? `Press ${N} again to exit` : u;
  let a;
  if (b[0] !== t || b[1] !== i) a = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, italic: t, children: i }), b[0] = t, b[1] = i, b[2] = a;
  else a = b[2];
  return a;
}
