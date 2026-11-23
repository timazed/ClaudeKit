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
var chunk_8a0qz0ab_exports = {};
__export(chunk_8a0qz0ab_exports, {
  Oer: () => Oer,
  Oqr: () => Oqr,
  Pqr: () => Pqr,
  xqr: () => xqr
});
module.exports = __toCommonJS(chunk_8a0qz0ab_exports);
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_h4t4qfaq = require("/$bunfs/root/chunk-h4t4qfaq.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
function xqr() {
  return { uses: /* @__PURE__ */ new Set(), settled: void 0, withCalls: /* @__PURE__ */ new Set(), helperCalls: /* @__PURE__ */ new Set() };
}
function Pqr(e, r, t) {
  if (t) {
    if ((0, import_chunk_r3kja8v6.ue)() && require("/$bunfs/root/chunk-z5pk1qtk.js").isScriptHelperCallName(r.name)) {
      if (typeof r.id === "string") e.helperCalls.add(r.id);
      return false;
    }
    if (e.settled === void 0 || e.withCalls.has(e.settled)) return false;
    return e.withCalls.add(e.settled), true;
  }
  if ((0, import_chunk_h4t4qfaq.li)(r.name) && typeof r.id === "string") e.uses.add(r.id);
  return false;
}
function Oqr(e, r, t, n) {
  if (!t && e.uses.has(r)) e.settled = n ? void 0 : r;
}
function Oer(e, r) {
  if (typeof e !== "object" || e === null) return "";
  let t = e;
  if ((0, import_chunk_r3kja8v6.ue)() && (0, import_chunk_h4t4qfaq.li)(r)) return typeof t.description === "string" ? (0, import_chunk_f64qna2j.Us)((0, import_chunk_sah8dzn4.As)(t.description.replace(/\s+/g, " ").trim()), 60) : "";
  if (typeof t.code === "string" && typeof t.description === "string" && t.description.trim() !== "") return (0, import_chunk_f64qna2j.Us)(t.description.replace(/\s+/g, " ").trim(), 60);
  for (let n of ["command", "file_path", "path", "pattern", "query", "prompt"]) {
    let i = t[n];
    if (typeof i === "string") return (0, import_chunk_f64qna2j.Us)(i.replace(/\s+/g, " ").trim(), 60);
  }
  for (let n of Object.values(t)) if (typeof n === "string") return (0, import_chunk_f64qna2j.Us)(n.replace(/\s+/g, " ").trim(), 60);
  return "";
}
