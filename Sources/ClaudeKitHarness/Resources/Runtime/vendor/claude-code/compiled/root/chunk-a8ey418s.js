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
var chunk_a8ey418s_exports = {};
__export(chunk_a8ey418s_exports, {
  DUi: () => DUi,
  O2e: () => O2e,
  XEr: () => XEr,
  av: () => av
});
module.exports = __toCommonJS(chunk_a8ey418s_exports);
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_fp3vnecp = require("/$bunfs/root/chunk-fp3vnecp.js");
var import_path = require("path");
var DUi = 6;
function O2e(e) {
  return e.endsWith(".meta.json") ? av(e) : void 0;
}
function av(e) {
  let i = (0, import_path.basename)(e);
  if ((0, import_chunk_hkvzj051.jqn)(i)) return;
  let o = (0, import_chunk_q3a5dy2r.Em)(), t = [i], n = (0, import_path.dirname)(e);
  while (n !== o && t.length <= DUi + 1) {
    let f = (0, import_path.dirname)(n);
    if (f === n) return;
    t.unshift((0, import_path.basename)(n)), n = f;
  }
  if (n !== o || t.length < 3) return;
  let [s, d, ...r] = t;
  if (!(0, import_chunk_hkvzj051.Ao)(s) || !(0, import_chunk_hkvzj051.Ao)(d) || r.length === 0 || !r.every(import_chunk_hkvzj051.Ao)) return;
  let u = import_chunk_hkvzj051.at.sidecar(s, d, r);
  return (0, import_chunk_fp3vnecp.db)(u) === void 0 ? u : void 0;
}
function XEr(e) {
  return typeof e === "string" ? av(e) : e.key;
}
