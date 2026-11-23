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
var chunk_kpby9tcv_exports = {};
__export(chunk_kpby9tcv_exports, {
  RF: () => RF,
  WFs: () => WFs,
  ia: () => ia
});
module.exports = __toCommonJS(chunk_kpby9tcv_exports);
var o = 0xffffffffffffffffn;
function ia(i) {
  let n = BigInt(i);
  return n === 0n || n === -1n || n === o || n === 1n << 64n;
}
function WFs(i, n) {
  return !ia(i.ino) && i.dev === n.dev && i.ino === n.ino;
}
function RF(i, n) {
  return !ia(i.ino) && !ia(n.ino) && i.ino !== n.ino;
}
