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
var chunk_6c9p0fd9_exports = {};
__export(chunk_6c9p0fd9_exports, {
  N9t: () => N9t,
  Oh: () => Oh
});
module.exports = __toCommonJS(chunk_6c9p0fd9_exports);
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
var u = (0, import_chunk_bs4h6795.an)(void 0);
function N9t(d) {
  let c = (0, import_chunk_sng02qpc.k)(3), { queue: t, children: r } = d, o;
  if (c[0] !== r || c[1] !== t) o = (0, import_chunk_a46xeenj.e)(u.Provider, { value: t, children: r }), c[0] = r, c[1] = t, c[2] = o;
  else o = c[2];
  return o;
}
function Oh() {
  return (0, import_chunk_bs4h6795.be)(u) ?? (0, import_chunk_bzyb60p0.Hg)();
}
