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
var chunk_mj2v5j1v_exports = {};
__export(chunk_mj2v5j1v_exports, {
  Md: () => Md,
  OPa: () => OPa,
  bY: () => bY,
  jD: () => jD
});
module.exports = __toCommonJS(chunk_mj2v5j1v_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
function Md(t, e) {
  let o = typeof e === "object" && e !== null && "action" in e ? String(e.action) : typeof e === "object" && e !== null ? Object.keys(e).slice(0, 3).join(",") : String(e);
  throw new import_chunk_jv7av99m.A(`Artifact ${t}: no arm for ${o} (routing table and handler disagree)`, "Artifact action routing table and handler disagree");
}
var r = 500, OPa = 4e3;
function jD(t, e = r) {
  let o = Array.isArray(t) ? t.slice(0, e) : [], n = o.filter(import_chunk_ma3kja9f.T);
  return { rows: n, unreadable: o.length - n.length, pastCap: Array.isArray(t) ? t.length - o.length : 0 };
}
function bY(t, e) {
  return (0, import_chunk_r8478wtb.uD)(typeof t === "string" ? t : typeof t === "number" || typeof t === "boolean" ? String(t) : "", e);
}
