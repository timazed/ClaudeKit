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
var chunk_y2bpkgdh_exports = {};
__export(chunk_y2bpkgdh_exports, {
  $vt: () => $vt,
  j2t: () => j2t,
  xEl: () => xEl
});
module.exports = __toCommonJS(chunk_y2bpkgdh_exports);
function j2t(n) {
  return n.birthtimeNs > 0n && n.birthtimeNs !== n.ctimeNs ? n.birthtimeNs.toString() : void 0;
}
function xEl(n, i, t) {
  return u(`${n.dev}:${n.ino}`, i) && (t === void 0 || n.birthtimeNs.toString() === t);
}
function r(n) {
  return n >= -(2n ** 63n) && n < -1n ? n + 2n ** 64n : n;
}
function $vt(n, i) {
  return r(n) === r(i);
}
var s = /^(-?\d+):(-?[1-9]\d{0,19})$/;
function u(n, i) {
  let [t, e] = [n, i].map((o) => s.exec(o));
  return t == null || e == null ? n === i : t[1] === e[1] && $vt(BigInt(t[2]), BigInt(e[2]));
}
