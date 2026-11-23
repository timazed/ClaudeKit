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
var chunk_ee10yhqw_exports = {};
__export(chunk_ee10yhqw_exports, {
  Q: () => Q
});
module.exports = __toCommonJS(chunk_ee10yhqw_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_c2pkypdt = require("/$bunfs/root/chunk-c2pkypdt.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
function Q(n) {
  let i = (0, import_chunk_sng02qpc.k)(3), { children: o, compact: r } = n, l = r === void 0 ? false : r;
  if (!(0, import_chunk_c2pkypdt.DZe)(o)) {
    return null;
  }
  const c = l ? 0 : 1;
  let a;
  if (i[0] !== o || i[1] !== c) a = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", gap: c, children: o }), i[0] = o, i[1] = c, i[2] = a;
  else a = i[2];
  return a;
}
