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
var chunk_e99zzz48_exports = {};
__export(chunk_e99zzz48_exports, {
  I5s: () => I5s,
  M5s: () => M5s,
  SVr: () => SVr,
  rZn: () => rZn,
  vxa: () => vxa
});
module.exports = __toCommonJS(chunk_e99zzz48_exports);
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var e = "self_hosted_runner_";
function rZn(n) {
  return n.startsWith(e);
}
function SVr(n) {
  return (0, import_chunk_qebpc5de.$f)([...n]).some(rZn);
}
function I5s(n) {
  return (0, import_chunk_qebpc5de.$f)([n]).filter((t) => !rZn(t)).join(",");
}
function M5s(n) {
  if (n === void 0) return false;
  let t = typeof n === "string" ? n : String(n);
  return (0, import_chunk_qebpc5de.$f)([t]).some(rZn);
}
function vxa(n) {
  let t = n.tools;
  if (t === void 0) return n;
  let o = typeof t === "string" ? t : String(t);
  if (!M5s(o)) return typeof t === "string" ? n : { ...n, tools: o };
  return { ...n, tools: I5s(o) };
}
