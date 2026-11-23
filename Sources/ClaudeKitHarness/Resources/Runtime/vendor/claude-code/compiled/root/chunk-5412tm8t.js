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
var chunk_5412tm8t_exports = {};
__export(chunk_5412tm8t_exports, {
  G0i: () => G0i,
  uj: () => uj
});
module.exports = __toCommonJS(chunk_5412tm8t_exports);
var import_chunk_kbr9bg9m = require("/$bunfs/root/chunk-kbr9bg9m.js");
function uj(t) {
  try {
    let r = t;
    if (r === null || typeof r !== "object" && typeof r !== "function") return false;
    for (let o = 0; o < 64; o++) {
      if ((0, import_chunk_kbr9bg9m.dd)(r)) return false;
      let e = Reflect.getPrototypeOf(r);
      if (e === null) return false;
      if (e === Error.prototype) return true;
      r = e;
    }
    return false;
  } catch {
    return false;
  }
}
function G0i(t, r) {
  try {
    return r.toStr(t);
  } catch {
    return r.errMsg(t);
  }
}
