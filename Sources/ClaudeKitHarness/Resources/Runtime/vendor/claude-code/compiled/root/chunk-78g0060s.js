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
var chunk_78g0060s_exports = {};
__export(chunk_78g0060s_exports, {
  Fr: () => Fr,
  Gs: () => Gs,
  Kca: () => Kca,
  R$: () => R$,
  Rh: () => Rh,
  S: () => S,
  Xge: () => Xge,
  Yge: () => Yge,
  f: () => f,
  fNo: () => fNo,
  fe: () => fe,
  lE: () => lE,
  ove: () => ove,
  pNo: () => pNo,
  sl: () => sl
});
module.exports = __toCommonJS(chunk_78g0060s_exports);
function r(n) {
  return n;
}
function S(n) {
  return r(n);
}
function f(n) {
  return r(n);
}
function fe(n) {
  return n == null ? void 0 : r(n);
}
function Gs(n) {
  return r(String(n));
}
function ove(n) {
  return n == null ? void 0 : r(String(n));
}
function Rh(...n) {
  return r(n.join(""));
}
function fNo(n) {
  return r(n.join(","));
}
function sl(n) {
  return r([...n].sort().join(","));
}
function lE(n, e) {
  return r(n.join(e ?? ","));
}
function Fr(n) {
  return r(n);
}
function R$(n, e) {
  return e ? Fr(n) : void 0;
}
function Kca(n, e) {
  return n !== void 0 && e.includes(n) && /^[a-z0-9-]{1,64}$/.test(n) ? Fr(n) : S("none");
}
function Yge(n, e) {
  return e ? Fr(n) : S("custom");
}
function Xge(n) {
  return Yge(n.agentType, n.source === "built-in");
}
function pNo(n, e) {
  return e ? Fr(n) : S("third-party");
}
