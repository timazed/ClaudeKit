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
var chunk_418mqjww_exports = {};
__export(chunk_418mqjww_exports, {
  Wqn: () => Wqn,
  _xt: () => _xt,
  sft: () => sft,
  yxt: () => yxt,
  zoe: () => zoe
});
module.exports = __toCommonJS(chunk_418mqjww_exports);
var _xt = String.raw`\$\{([A-Za-z_][A-Za-z0-9_]*)(?::-[^}]*)?\}`;
function zoe(e) {
  return new RegExp(_xt).test(e);
}
function yxt(e) {
  let n = [], r = 0;
  for (let t of e.matchAll(new RegExp(_xt, "g"))) n.push(e.slice(r, t.index)), r = t.index + t[0].length;
  return n.push(e.slice(r)), n;
}
function Wqn(e) {
  return e.replace(new RegExp(_xt, "g"), (n) => "x".repeat(n.length));
}
function sft(e) {
  return e.replace(new RegExp(_xt, "g"), (n, r) => `\${${r}}`);
}
