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
var chunk_ab9n1jv4_exports = {};
__export(chunk_ab9n1jv4_exports, {
  $Ya: () => $Ya,
  FYa: () => FYa,
  UYa: () => UYa,
  cSi: () => cSi,
  fSi: () => fSi,
  uSi: () => uSi
});
module.exports = __toCommonJS(chunk_ab9n1jv4_exports);
var cSi = ["You've hit your", "You've reached your", "You're out of usage credits", "Your org is out of usage \xB7 add funds to continue", "Your org is out of usage \xB7 contact your admin", "Your seat type doesn't include usage credits", "Your seat type doesn't include usage", "Your usage allocation has been disabled by your admin", "Your group's usage limit is set to $0", "Fable 5 requires usage credits", "You're out of extra usage", "Your seat type doesn't include extra usage"], uSi = [/^(?:Fable|Haiku|Mythos|Opus|Sonnet)(?: [^\u00B7\n]{1,40})? requires usage credits\./];
function fSi(o) {
  return cSi.some((e) => o.startsWith(e)) || uSi.some((e) => e.test(o));
}
var FYa = ["This service is disabled for your org"], $Ya = ["You've used", "You're close to"], UYa = ["You're now using usage credits", "You're now using your usage allocation", "Now using your usage allocation", "Now using usage credits", "Now using credits", "You're now using extra usage", "Now using extra usage"];
