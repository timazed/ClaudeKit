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
var chunk_7r4ehpnw_exports = {};
__export(chunk_7r4ehpnw_exports, {
  xe: () => xe
});
module.exports = __toCommonJS(chunk_7r4ehpnw_exports);
function l() {
  let r = process.env, i = r.TERM ?? "";
  return i !== "linux";
}
var e = !l(), o = { arrowDown: "\u2193", arrowLeft: "\u2190", arrowRight: "\u2192", arrowUp: "\u2191", bullet: "\u25CF", checkboxOff: e ? "[ ]" : "\u2610", checkboxOn: e ? "[\xD7]" : "\u2612", circle: e ? "( )" : "\u25EF", circleDouble: e ? "( )" : "\u25CE", circleFilled: e ? "(*)" : "\u25C9", cross: e ? "\xD7" : "\u2718", ellipsis: "\u2026", info: e ? "i" : "\u2139", lozenge: e ? "\u2666" : "\u25C6", pointer: e ? ">" : "\u276F", pointerSmall: "\u203A", radioOff: e ? "( )" : "\u25EF", radioOn: e ? "(*)" : "\u25C9", squareSmall: e ? "\u25A1" : "\u25FB", squareSmallFilled: e ? "\u25A0" : "\u25FC", star: e ? "\u2736" : "\u2605", tick: e ? "\u221A" : "\u2714", triangleDownSmall: "\u25BE", triangleLeft: e ? "\u25C4" : "\u25C0", triangleRight: e ? "\u25BA" : "\u25B6", triangleRightSmall: "\u25B8", triangleUp: "\u25B2", warning: e ? "\u203C" : "\u26A0" }, xe = o;
