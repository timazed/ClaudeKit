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
var chunk_2cbgkbm2_exports = {};
__export(chunk_2cbgkbm2_exports, {
  aLs: () => aLs,
  p: () => p
});
module.exports = __toCommonJS(chunk_2cbgkbm2_exports);
class i {
  resetters = [];
  built = [];
  lazy(e) {
    let t, r = () => {
      t = void 0;
    };
    return this.resetters.push(r), () => {
      if (t === void 0) t = e(), this.built.push(r);
      return t;
    };
  }
  builtCount() {
    return this.built.length;
  }
  releaseBuiltSince(e) {
    for (let t of this.built.splice(e)) t();
  }
  reset() {
    for (let e of this.resetters) e();
    this.built.length = 0;
  }
}
var aLs = new i();
function p(e) {
  return aLs.lazy(e);
}
