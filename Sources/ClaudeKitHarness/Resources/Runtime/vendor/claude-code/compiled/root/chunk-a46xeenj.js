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
var chunk_a46xeenj_exports = {};
__export(chunk_a46xeenj_exports, {
  ae: () => ae,
  e: () => e,
  o: () => o
});
module.exports = __toCommonJS(chunk_a46xeenj_exports);
var v = Symbol.for("react.transitional.element"), x = Symbol.for("react.fragment");
function E(k, r, t) {
  var s = null;
  if (t !== void 0 && (s = "" + t), r.key !== void 0 && (s = "" + r.key), "key" in r) {
    t = {};
    for (var l in r) l !== "key" && (t[l] = r[l]);
  } else t = r;
  return r = t.ref, { $$typeof: v, type: k, key: s, ref: r !== void 0 ? r : null, props: t };
}
var ae = x, e = E, o = E;
