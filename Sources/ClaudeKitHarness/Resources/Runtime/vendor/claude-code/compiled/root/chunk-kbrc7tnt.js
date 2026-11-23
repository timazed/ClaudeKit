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
var chunk_kbrc7tnt_exports = {};
__export(chunk_kbrc7tnt_exports, {
  uqr: () => uqr
});
module.exports = __toCommonJS(chunk_kbrc7tnt_exports);
function uqr(t) {
  let e = {};
  for (let [n, r] of Object.entries(t)) {
    if (r === void 0) continue;
    if (n === "__proto__") Object.defineProperty(e, n, { value: r, writable: true, enumerable: true, configurable: true });
    else e[n] = r;
  }
  return e;
}
