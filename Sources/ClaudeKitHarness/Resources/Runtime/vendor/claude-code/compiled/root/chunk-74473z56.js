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
var chunk_74473z56_exports = {};
__export(chunk_74473z56_exports, {
  Svo: () => Svo
});
module.exports = __toCommonJS(chunk_74473z56_exports);
function Svo(e) {
  let n = e.indexOf("--handle-uri");
  if (n === -1 || !e[n + 1]) return null;
  if (e.length > n + 2) return `claude: rejected deep-link invocation \u2014 unexpected arguments after the URI.
The OS protocol handler passes exactly \`--handle-uri <uri>\`; extra arguments indicate argument injection via the URL. If invoking --handle-uri manually, place other flags before it.`;
  return null;
}
