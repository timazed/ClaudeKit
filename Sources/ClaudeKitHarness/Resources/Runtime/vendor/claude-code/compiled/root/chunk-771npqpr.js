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
var chunk_771npqpr_exports = {};
__export(chunk_771npqpr_exports, {
  iQs: () => iQs
});
module.exports = __toCommonJS(chunk_771npqpr_exports);
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
function iQs(n) {
  if (!(0, import_chunk_r3kja8v6.ue)()) return;
  let r = /^\(dispatched #(\d+)\)$/;
  if (n === null || typeof n !== "object") return;
  let e = n;
  if (!("asyncDispatched" in e) || e.asyncDispatched !== true) return;
  let t = "evalId" in e ? e.evalId : void 0;
  if (typeof t === "number") return t;
  let u = "result" in e ? e.result : void 0, d = typeof u === "string" ? r.exec(u) : null;
  return d === null ? void 0 : Number(d[1]);
}
