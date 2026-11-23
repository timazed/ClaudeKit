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
var chunk_8v2an93p_exports = {};
__export(chunk_8v2an93p_exports, {
  JPa: () => JPa,
  QPa: () => QPa,
  TKr: () => TKr,
  XPa: () => XPa,
  YPa: () => YPa,
  ZPa: () => ZPa,
  vKr: () => vKr
});
module.exports = __toCommonJS(chunk_8v2an93p_exports);
var vKr = "Just want the answer? Run /focus now to hide the steps along the way", YPa = "Focus view is on and the steps are hidden. Run /focus to show them", XPa = 10;
var JPa = "Want Claude to teach as it works?", QPa = "config", ZPa = "outputStyle=explanatory", TKr = `${"Want Claude to teach as it works?"} \xB7 /${"config"} outputStyle=explanatory`;
