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
var chunk_4nzmdgn6_exports = {};
__export(chunk_4nzmdgn6_exports, {
  Jy: () => Jy
});
module.exports = __toCommonJS(chunk_4nzmdgn6_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_vx3fbgjb = require("/$bunfs/root/chunk-vx3fbgjb.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
function Jy(n) {
  let i = (0, import_chunk_sng02qpc.k)(5), { title: c, children: r } = n, t;
  if (i[0] !== c) t = (0, import_chunk_a46xeenj.e)(import_chunk_vx3fbgjb.Es, { children: c }), i[0] = c, i[1] = t;
  else t = i[1];
  let a;
  if (i[2] !== r || i[3] !== t) a = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: [t, r] }), i[2] = r, i[3] = t, i[4] = a;
  else a = i[4];
  return a;
}
