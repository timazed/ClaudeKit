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
var chunk_0pkh1evw_exports = {};
__export(chunk_0pkh1evw_exports, {
  fx: () => fx
});
module.exports = __toCommonJS(chunk_0pkh1evw_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
function fx(c) {
  let f = (0, import_chunk_sng02qpc.k)(10), { added: d, removed: e, bold: a } = c;
  if (d === 0 && e === 0) {
    return null;
  }
  let b;
  if (f[0] !== d || f[1] !== a) b = d > 0 && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: "diffAddedWord", bold: a, children: ["+", d] }), f[0] = d, f[1] = a, f[2] = b;
  else b = f[2];
  const v = d > 0 && e > 0 && " ";
  let t;
  if (f[3] !== a || f[4] !== e) t = e > 0 && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: "diffRemovedWord", bold: a, children: ["-", e] }), f[3] = a, f[4] = e, f[5] = t;
  else t = f[5];
  let p;
  if (f[6] !== b || f[7] !== v || f[8] !== t) p = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [b, v, t] }), f[6] = b, f[7] = v, f[8] = t, f[9] = p;
  else p = f[9];
  return p;
}
