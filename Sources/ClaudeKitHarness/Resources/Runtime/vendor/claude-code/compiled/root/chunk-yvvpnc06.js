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
var chunk_yvvpnc06_exports = {};
__export(chunk_yvvpnc06_exports, {
  h9t: () => h9t
});
module.exports = __toCommonJS(chunk_yvvpnc06_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_6tzmmjxg = require("/$bunfs/root/chunk-6tzmmjxg.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_kvavrh0f = require("/$bunfs/root/chunk-kvavrh0f.js");
function d(g) {
  return g.startsWith(".");
}
function h9t(y) {
  let f = (0, import_chunk_sng02qpc.k)(8), { place: n, files: t } = y;
  if (t.length === 0) {
    return null;
  }
  let s;
  if (f[0] !== t) s = (0, import_chunk_kvavrh0f.ow)(t), f[0] = t, f[1] = s;
  else s = f[1];
  let c;
  if (f[2] !== n || f[3] !== s) c = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["Trusting this ", n, " loads ", s, "."] }), f[2] = n, f[3] = s, f[4] = c;
  else c = f[4];
  let i = c, a;
  if (f[5] !== t || f[6] !== i) a = t.every(d) ? i : (0, import_chunk_a46xeenj.e)(import_chunk_6tzmmjxg.$a, { multiline: true, children: i }), f[5] = t, f[6] = i, f[7] = a;
  else a = f[7];
  return a;
}
