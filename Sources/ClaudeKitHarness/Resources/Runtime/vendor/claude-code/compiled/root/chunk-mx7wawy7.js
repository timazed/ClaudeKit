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
var chunk_mx7wawy7_exports = {};
__export(chunk_mx7wawy7_exports, {
  RTl: () => RTl,
  blt: () => blt,
  wGi: () => wGi
});
module.exports = __toCommonJS(chunk_mx7wawy7_exports);
function blt(n) {
  if (n === null || typeof n !== "object") return n;
  let e = n;
  if (t(e), "response" in e && e.response !== null && typeof e.response === "object") t(e.response);
  return n;
}
function t(n) {
  if ("requestId" in n && !("request_id" in n)) {
    let e = wGi(n);
    if (delete n.requestId, e !== void 0) n.request_id = e;
  }
}
function wGi(n) {
  if ("request_id" in n) return n.request_id;
  let e = "requestId" in n ? n.requestId : void 0;
  return typeof e === "string" && e.toLowerCase().startsWith("late-bind-") ? void 0 : e;
}
var RTl = 128;
