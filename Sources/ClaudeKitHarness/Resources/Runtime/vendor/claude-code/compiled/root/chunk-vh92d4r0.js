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
var chunk_vh92d4r0_exports = {};
__export(chunk_vh92d4r0_exports, {
  No: () => No
});
module.exports = __toCommonJS(chunk_vh92d4r0_exports);
function No(r) {
  return r.map((t) => {
    let n = String(t);
    if (n === "") return "''";
    if (/^[A-Za-z0-9_./:=@+,-]+$/.test(n)) return n;
    return "'" + n.replaceAll("'", `'"'"'`) + "'";
  }).join(" ");
}
