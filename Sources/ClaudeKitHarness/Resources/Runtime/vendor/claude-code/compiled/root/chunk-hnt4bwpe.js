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
var chunk_hnt4bwpe_exports = {};
__export(chunk_hnt4bwpe_exports, {
  Nd: () => Nd,
  VPo: () => VPo,
  aDl: () => aDl,
  iDl: () => iDl,
  pS: () => pS
});
module.exports = __toCommonJS(chunk_hnt4bwpe_exports);
var pS = 1e4;
async function Nd(e, r, t) {
  let s = Math.max(1, Math.floor(t?.maxPages ?? 1e4)), u;
  for (let a = 0; a < s; a++) {
    if (t?.budget !== void 0) {
      if (t.budget.pagesLeft < 1) return { status: "capped" };
      t.budget.pagesLeft--;
    }
    let n = await e(u);
    if (!n.ok) return { status: "error", error: n.error };
    if (await r(n.value.items), t?.until?.()) return { status: "done" };
    if (u = n.value.cursor, !u) return { status: "done" };
  }
  return { status: "capped" };
}
function VPo(e = 1e4) {
  return { pagesLeft: e, capped: 0 };
}
function iDl(e, r) {
  if (e.status === "error") return "error";
  if (e.status === "capped") return r.capped++, r.capped === 1 ? "first-truncation" : void 0;
  return;
}
function aDl(e) {
  return Math.max(0, e.capped - 1);
}
