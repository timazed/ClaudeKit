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
var chunk_12s0qmhg_exports = {};
__export(chunk_12s0qmhg_exports, {
  fqr: () => fqr,
  mqr: () => mqr,
  pqr: () => pqr
});
module.exports = __toCommonJS(chunk_12s0qmhg_exports);
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
class s {
  closes = void 0;
}
var l = new import_chunk_2904xtvq.j(() => new s());
function fqr(e, n, { isSameLaunch: t }) {
}
function pqr() {
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows" || !process.stdin.isTTY) return;
  try {
    process.stdin.setRawMode(true), process.stdin.setRawMode(false);
  } catch {
  }
}
function mqr(e) {
  {
    let n = (o) => o.toUpperCase() === import_chunk_gd77dyw4.eA;
    for (let o of Object.keys(e).filter(n)) delete e[o];
    let t = (0, import_chunk_5e3gtsn9.n_)();
    for (let o of Object.keys(t).filter(n)) e[o] = t[o];
  }
}
