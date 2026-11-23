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
var chunk_ddznn4yb_exports = {};
__export(chunk_ddznn4yb_exports, {
  $re: () => $re,
  Jwl: () => Jwl,
  Kat: () => Kat,
  MC: () => MC,
  Qwl: () => Qwl,
  SWi: () => SWi,
  Wwo: () => Wwo,
  YBn: () => YBn,
  hws: () => hws,
  jwo: () => jwo,
  yWi: () => yWi
});
module.exports = __toCommonJS(chunk_ddznn4yb_exports);
var Wwo = ["mcp__Claude_Preview__", "mcp__Claude_Browser__", "mcp__remote-devices__Claude_Browser__"];
var yWi = "mcp__claude-device__chrome_", $re = ["mcp__claude-in-chrome__", "mcp__Claude_in_Chrome__", "mcp__remote-devices__claude-in-chrome__", "mcp__remote-devices__Claude_in_Chrome__", "mcp__claude-device__chrome_", ...Wwo];
function o(_) {
  if (!_.startsWith("mcp__claude-device__chrome_")) return null;
  let e = _.slice(27);
  return e === "" || e.startsWith("_") || e.includes("__") ? null : e;
}
function SWi(_) {
  let e = o(_);
  return e === null ? _ : "mcp__claude-in-chrome__" + e;
}
function Jwl(_, e) {
  let r = o(_);
  return r !== null && e === "chrome_" + r ? r : e;
}
var c = new RegExp("(?<![\\w-])mcp__claude-device__chrome_[\\w-]*", "g");
function hws(_) {
  return _.replace(c, (e) => e === "mcp__claude-device__chrome_" ? "mcp__claude-in-chrome__" : SWi(e));
}
var jwo = "Claude in Chrome action on ";
function MC(_) {
  return $re.some((e) => _.startsWith(e));
}
var t = ["mcp__remote-devices__Claude_Preview__", "mcp__claude-for-chrome__", "mcp__remote-devices__claude-for-chrome__"];
function YBn(_) {
  return MC(_) || t.some((e) => _.startsWith(e));
}
var n = ["mcp__claude-device__lcl-claude-in-chrome-", "mcp__claude-device__lcl-Claude_in_Chrome-", "mcp__claude-device__lcl-claude-for-chrome-", "mcp__claude-device__lcl-Claude_Browser-", "mcp__claude-device__lcl-Claude_Preview-"];
function Qwl(_) {
  return n.some((e) => _.startsWith(e));
}
function Kat(_) {
  return Wwo.some((e) => _.startsWith(e));
}
