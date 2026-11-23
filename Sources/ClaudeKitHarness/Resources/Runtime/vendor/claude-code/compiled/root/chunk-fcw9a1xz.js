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
var chunk_fcw9a1xz_exports = {};
__export(chunk_fcw9a1xz_exports, {
  ks: () => ks
});
module.exports = __toCommonJS(chunk_fcw9a1xz_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_c2pkypdt = require("/$bunfs/root/chunk-c2pkypdt.js");
var import_chunk_drb2187g = require("/$bunfs/root/chunk-drb2187g.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var o = 2;
function ks(c) {
  let i = (0, import_chunk_sng02qpc.k)(2), { children: r } = c;
  if (!(0, import_chunk_c2pkypdt.DZe)(r)) {
    return null;
  }
  let n;
  if (i[0] !== r) n = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", paddingLeft: o, children: (0, import_chunk_a46xeenj.e)(import_chunk_drb2187g.FD, { count: o, children: r }) }), i[0] = r, i[1] = n;
  else n = i[1];
  return n;
}
