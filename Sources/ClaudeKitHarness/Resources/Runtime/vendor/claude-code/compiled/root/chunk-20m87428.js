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
var chunk_20m87428_exports = {};
__export(chunk_20m87428_exports, {
  _Bt: () => _Bt
});
module.exports = __toCommonJS(chunk_20m87428_exports);
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
function i() {
  return c((0, import_chunk_5e3gtsn9.Gle)((0, import_chunk_5e3gtsn9.Vcn)(), "globalConfig"), (0, import_chunk_xzvhvaa2.rn)("userSettings") ? (0, import_chunk_5e3gtsn9.Gle)((0, import_chunk_2yx6c1y2._e)("userSettings")?.env, "userSettings") : {}, (0, import_chunk_5e3gtsn9.Gle)((0, import_chunk_2yx6c1y2._e)("flagSettings")?.env, "flagSettings"), (0, import_chunk_5e3gtsn9.Gle)((0, import_chunk_2yx6c1y2._e)("policySettings")?.env, "policySettings"));
}
function _Bt() {
  return g((0, import_chunk_5e3gtsn9.n_)(), i());
}
function g(s, n) {
  let r = new Set(Object.keys(n).map((e) => e.toUpperCase())), t = { ...s };
  for (let e of Object.keys(t)) if (!(e in n) && r.has(e.toUpperCase())) delete t[e];
  return Object.assign(t, n);
}
function c(...s) {
  let n = /* @__PURE__ */ new Map();
  for (let t of s) for (let [e, o] of Object.entries(t)) n.set(e.toUpperCase(), { key: e, value: o });
  let r = {};
  for (let { key: t, value: e } of n.values()) r[t] = e;
  return r;
}
