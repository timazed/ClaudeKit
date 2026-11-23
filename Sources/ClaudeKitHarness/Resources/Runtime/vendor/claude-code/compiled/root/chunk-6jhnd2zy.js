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
var chunk_6jhnd2zy_exports = {};
__export(chunk_6jhnd2zy_exports, {
  N8: () => N8,
  ete: () => ete,
  nLs: () => nLs,
  rse: () => rse
});
module.exports = __toCommonJS(chunk_6jhnd2zy_exports);
var c = typeof global == "object" && global && global.Object === Object && global, nLs = c;
var g = typeof self == "object" && self && self.Object === Object && self, p = nLs || g || Function("return this")(), N8 = p;
var d = N8.Symbol, ete = d;
var e = Object.prototype, { hasOwnProperty: m, toString: j } = e, r = ete ? ete.toStringTag : void 0;
function u(t) {
  var f = m.call(t, r), i = t[r];
  try {
    t[r] = void 0;
    var l = true;
  } catch (x) {
  }
  var b = j.call(t);
  if (l) if (f) t[r] = i;
  else delete t[r];
  return b;
}
var o = u;
var S = Object.prototype, T = S.toString;
function s(t) {
  return T.call(t);
}
var n = s;
var y = "[object Null]", O = "[object Undefined]", a = ete ? ete.toStringTag : void 0;
function v(t) {
  if (t == null) return t === void 0 ? O : y;
  return a && a in Object(t) ? o(t) : n(t);
}
var rse = v;
