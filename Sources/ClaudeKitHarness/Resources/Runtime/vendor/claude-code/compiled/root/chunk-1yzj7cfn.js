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
var chunk_1yzj7cfn_exports = {};
__export(chunk_1yzj7cfn_exports, {
  parseOutputEnvelope: () => c
});
module.exports = __toCommonJS(chunk_1yzj7cfn_exports);
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
function c(r) {
  return (0, import_chunk_r3kja8v6.ue)() ? u(r) : null;
}
function u(r) {
  let o = /^<repl-output(?: [^>\n]*)?>\n/.exec(r);
  if (o === null) return null;
  let e = { logs: [] }, s = /<(log|result|error)\/>|<(log|result|error)>([\s\S]*?)<\/\2>/g;
  for (let t of r.slice(o[0].length).matchAll(s)) {
    let l = t[1] ?? t[2], n = p(t[3] ?? "");
    if (l === "log") e.logs.push(n);
    else if (l === "result") e.result = n;
    else if (l === "error") e.error = n;
  }
  return e;
}
function p(r) {
  return r.replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&amp;", "&");
}
