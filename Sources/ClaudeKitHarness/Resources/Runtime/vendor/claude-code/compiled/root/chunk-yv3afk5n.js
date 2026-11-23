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
var chunk_yv3afk5n_exports = {};
__export(chunk_yv3afk5n_exports, {
  AWa: () => AWa,
  m4e: () => m4e
});
module.exports = __toCommonJS(chunk_yv3afk5n_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var d = new import_chunk_2904xtvq.j(() => ({ degraded: false }));
function t() {
  return d.of((0, import_chunk_f9x2f6cx.N)().host);
}
function m4e(n, r) {
  if (n !== import_chunk_epy4sc29.bd) return;
  let e = t();
  if (r === void 0) {
    e.degraded = false;
    return;
  }
  let o = (0, import_chunk_yz5b8aaa.gz)(r);
  if (o === "downstream_unreachable") e.degraded = true;
  else if (o === "downstream_error") e.degraded = false;
}
function AWa() {
  return t().degraded;
}
