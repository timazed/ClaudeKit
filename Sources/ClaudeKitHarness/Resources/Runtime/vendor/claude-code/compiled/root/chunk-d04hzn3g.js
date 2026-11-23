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
var chunk_d04hzn3g_exports = {};
__export(chunk_d04hzn3g_exports, {
  IL: () => IL,
  M2: () => M2,
  Td: () => Td,
  W8n: () => W8n,
  m_: () => m_,
  ux: () => ux
});
module.exports = __toCommonJS(chunk_d04hzn3g_exports);
var import_chunk_7r4ehpnw = require("/$bunfs/root/chunk-7r4ehpnw.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_qbrmmydq = require("/$bunfs/root/chunk-qbrmmydq.js");
function t() {
  return process.stdout.isTTY === true && process.stderr.isTTY === true;
}
function e(r, n, i) {
  return i === void 0 || t() && (i === "" || !(0, import_chunk_qbrmmydq.Hm)()) ? `${r} ${n}` : i + n;
}
function ux(r, n) {
  return e(import_chunk_7r4ehpnw.xe.tick, r, n);
}
function Td(r, n) {
  return e(import_chunk_7r4ehpnw.xe.cross, r, n);
}
function m_(r, n) {
  return e(import_chunk_7r4ehpnw.xe.warning, r, n);
}
function W8n(r) {
  return `${t() ? import_chunk_7r4ehpnw.xe.circle : import_chunk_7r4ehpnw.xe.cross} ${r}`;
}
function IL(r) {
  return `  ${t() ? import_chunk_xcgcdx61.Hut : import_chunk_7r4ehpnw.xe.pointer} ${r}`;
}
function M2(r, n) {
  return ux(t() ? r.replace(new RegExp("^Successfully (\\p{Ll})", "u"), (i, s) => s.toUpperCase()) : r, n);
}
