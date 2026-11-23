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
var chunk_yrnmwxwe_exports = {};
__export(chunk_yrnmwxwe_exports, {
  Rmt: () => Rmt
});
module.exports = __toCommonJS(chunk_yrnmwxwe_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
function Rmt(a) {
  let d = (0, import_chunk_sng02qpc.k)(4), { children: r } = a;
  if ((0, import_chunk_8bkqeb5d.Xe)()) {
    let o2;
    if (d[0] !== r) o2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { "aria-role": "blockquote", children: r }), d[0] = r, d[1] = o2;
    else o2 = d[1];
    return o2;
  }
  let o;
  if (d[2] !== r) o = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { borderStyle: "single", borderLeft: true, borderRight: false, borderTop: false, borderBottom: false, borderDimColor: true, paddingLeft: 1, children: r }), d[2] = r, d[3] = o;
  else o = d[3];
  return o;
}
