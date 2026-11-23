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
var chunk_37r5t3h3_exports = {};
__export(chunk_37r5t3h3_exports, {
  Zzr: () => Zzr,
  evn: () => evn
});
module.exports = __toCommonJS(chunk_37r5t3h3_exports);
var Zzr = 50;
function evn(o) {
  let r = performance.now() + o, e = 0, n = setInterval(() => {
    let t = performance.now();
    e = Math.max(e, t - r), r = t + o;
  }, o);
  return n.unref(), { takeMaxMs() {
    let t = e;
    return e = 0, t;
  }, stop() {
    return clearInterval(n), Math.max(e, performance.now() - r);
  } };
}
