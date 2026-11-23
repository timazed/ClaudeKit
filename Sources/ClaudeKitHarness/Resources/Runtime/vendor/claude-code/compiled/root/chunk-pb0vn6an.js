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
var chunk_pb0vn6an_exports = {};
__export(chunk_pb0vn6an_exports, {
  S4l: () => S4l,
  wTo: () => wTo
});
module.exports = __toCommonJS(chunk_pb0vn6an_exports);
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var m = ["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight"];
var p = (t) => (0, import_chunk_ma3kja9f.T)(t) && m.every((e) => typeof t[e] === "string");
var c = { single: r(9472, 9474, 9484, 4), double: r(9552, 9553, 9556, 3), round: i("\u256D\u2500\u256E", "\u2502 \u2502", "\u2570\u2500\u256F"), bold: r(9473, 9475, 9487, 4), singleDouble: r(9472, 9553, 9555, 3), doubleSingle: r(9552, 9474, 9554, 3), classic: i("+-+", "| |", "+-+"), arrow: i("\u2198\u2193\u2199", "\u2192 \u2190", "\u2197\u2191\u2196") }, f = c;
function r(t, e, o, x) {
  return i(String.fromCharCode(o, t, o + x), String.fromCharCode(e, 32, e), String.fromCharCode(o + 2 * x, t, o + 3 * x));
}
function i(t, e, o) {
  return { topLeft: t.charAt(0), top: t.charAt(1), topRight: t.charAt(2), left: e.charAt(0), right: e.charAt(2), bottomLeft: o.charAt(0), bottom: o.charAt(1), bottomRight: o.charAt(2) };
}
var s = { dashed: { top: "\u254C", left: "\u254E", right: "\u254E", bottom: "\u254C", topLeft: " ", topRight: " ", bottomLeft: " ", bottomRight: " " }, quote: { top: " ", left: "\u258E", right: " ", bottom: " ", topLeft: " ", topRight: " ", bottomLeft: " ", bottomRight: " " } };
var n = { ...f, ...s };
function wTo(t) {
  let o = typeof t === "string" && Object.hasOwn(n, t) ? n[t] : t;
  return p(o) ? o : void 0;
}
var S4l = Object.keys(n).filter((t) => wTo(t) !== void 0);
