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
var chunk_7e12xj51_exports = {};
__export(chunk_7e12xj51_exports, {
  P4n: () => P4n,
  dn: () => dn,
  x4n: () => x4n
});
module.exports = __toCommonJS(chunk_7e12xj51_exports);
function dn(r) {
  let e = r / 1024;
  if (e < 1) return `${r} bytes`;
  if (e < 1024) return `${e.toFixed(1).replace(/\.0$/, "")}KB`;
  let n = e / 1024;
  if (n < 1024) return `${n.toFixed(1).replace(/\.0$/, "")}MB`;
  return `${(n / 1024).toFixed(1).replace(/\.0$/, "")}GB`;
}
function x4n(r, e) {
  let n = dn(e);
  if (r >= e) return `${n} of ${n}`;
  if (e < 1024) return `${dn(r)} of ${n}`;
  let t = n.endsWith("GB") ? 1073741824 : n.endsWith("MB") ? 1048576 : 1024;
  return `${Math.min(Math.floor(r / t * 10) / 10, parseFloat(n) - 0.1).toFixed(1)}${n.slice(-2)} of ${n}`;
}
function P4n(r) {
  if (r < 1e3) return `${r} B`;
  if (r < 999500) return `${Math.round(r / 1e3)} kB`;
  return `${(r / 1e6).toFixed(1).replace(/\.0$/, "")} MB`;
}
