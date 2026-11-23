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
var chunk_rr6cvcc3_exports = {};
__export(chunk_rr6cvcc3_exports, {
  LTt: () => LTt,
  Ylt: () => Ylt,
  tAl: () => tAl
});
module.exports = __toCommonJS(chunk_rr6cvcc3_exports);
var n = /* @__PURE__ */ new WeakMap();
var LTt = (o) => n.get(o);
function tAl(o) {
  let t = Object.values(o ?? {}).flatMap((r) => (r ?? []).flatMap((s) => (s.hooks ?? []).map(LTt))), [e] = t;
  return t.every((r) => r === e) ? e : void 0;
}
function Ylt(o, t) {
  if (t === void 0) return;
  for (let e of Object.values(o)) for (let r of e ?? []) for (let s of r.hooks ?? []) n.set(s, t);
}
