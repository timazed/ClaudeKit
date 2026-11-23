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
var chunk_81nggker_exports = {};
__export(chunk_81nggker_exports, {
  kJt: () => kJt,
  m8o: () => m8o,
  pBa: () => pBa,
  w7r: () => w7r
});
module.exports = __toCommonJS(chunk_81nggker_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_m0xr8k74 = require("/$bunfs/root/chunk-m0xr8k74.js");
var import_chunk_qt3kq0hf = require("/$bunfs/root/chunk-qt3kq0hf.js");
var import_chunk_pyawkp3j = require("/$bunfs/root/chunk-pyawkp3j.js");
var import_chunk_a5r4xv9h = require("/$bunfs/root/chunk-a5r4xv9h.js");
var import_chunk_5ft9yxne = require("/$bunfs/root/chunk-5ft9yxne.js");
var import_chunk_qyhf6bts = require("/$bunfs/root/chunk-qyhf6bts.js");
function n(e) {
  return (0, import_chunk_pyawkp3j.x7)() && kJt(e) !== void 0;
}
function pBa(e, r) {
  try {
    if (!n(e)) return false;
    let o = (0, import_chunk_2nv4wrez.ba)("allow_connector_file_downloads");
    return o === null || (0, import_chunk_a5r4xv9h.p0t)(o) === "policy_unread" && !r;
  } catch {
    return false;
  }
}
function w7r(e) {
  return (0, import_chunk_qyhf6bts.eh)(e.config) !== void 0 && (0, import_chunk_m0xr8k74.k8e)(e.capabilities) && (0, import_chunk_pyawkp3j.x7)();
}
function m8o(e) {
  return n(e.config) || (0, import_chunk_pyawkp3j.x7)() && (0, import_chunk_qt3kq0hf.vsr)(e) !== void 0;
}
function kJt(e) {
  let r = (0, import_chunk_pyawkp3j.jfl)(e);
  if (r !== void 0) return r;
  let o = (0, import_chunk_5ft9yxne.ppo)(e);
  return o === void 0 || !(0, import_chunk_5ft9yxne.ksn)() || !(0, import_chunk_865at33z.L1)() || !(0, import_chunk_2nv4wrez.Rn)("allow_connector_file_downloads") ? void 0 : { via: "direct", mcpUrl: o.href, redirectedTo: (0, import_chunk_qdcbcsg7.mt)().redirectedMcpAddresses.get(o.href) };
}
