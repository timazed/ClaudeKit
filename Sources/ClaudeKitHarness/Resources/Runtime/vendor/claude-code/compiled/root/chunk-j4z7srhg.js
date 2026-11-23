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
var chunk_j4z7srhg_exports = {};
__export(chunk_j4z7srhg_exports, {
  Opt: () => Opt,
  ec: () => ec
});
module.exports = __toCommonJS(chunk_j4z7srhg_exports);
function Opt() {
  return false;
}
var s = /^(?:--port(?:=\d+)?|\d+|--result-format(?:=(?:raw|rendered))?|raw|rendered|--session-tunnel|--debug|-d|--verbose)$/;
function ec() {
  {
    let e = process.argv;
    if (e[2] !== "mcp" || e[3] !== "serve") return false;
    let [, , t, ...r] = e.slice(2), n = t === "--transport=http" ? r : t === "--transport" && r[0] === "http" ? r.slice(1) : void 0;
    return Opt() && n !== void 0 && n.every((o) => s.test(o));
  }
  return false;
}
