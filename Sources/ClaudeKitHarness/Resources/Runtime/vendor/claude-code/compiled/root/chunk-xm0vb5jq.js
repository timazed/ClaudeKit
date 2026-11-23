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
var chunk_xm0vb5jq_exports = {};
__export(chunk_xm0vb5jq_exports, {
  SP: () => SP
});
module.exports = __toCommonJS(chunk_xm0vb5jq_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
function SP(f) {
  let c = (0, import_chunk_sng02qpc.k)(3), { action: n } = f, t = n === void 0 ? "continue" : n, i;
  if (c[0] === import_chunk_w1d7ygsk.R) i = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: "Enter" }), c[0] = i;
  else i = c[0];
  let a;
  if (c[1] !== t) a = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: "permission", children: ["Press ", i, " to ", t] }), c[1] = t, c[2] = a;
  else a = c[2];
  return a;
}
