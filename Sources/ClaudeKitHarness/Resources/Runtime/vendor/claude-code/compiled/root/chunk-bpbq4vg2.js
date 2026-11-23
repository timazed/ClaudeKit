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
var chunk_bpbq4vg2_exports = {};
__export(chunk_bpbq4vg2_exports, {
  ki: () => ki
});
module.exports = __toCommonJS(chunk_bpbq4vg2_exports);
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
function ki(P) {
  let s = (0, import_chunk_sng02qpc.k)(9), { children: d, addMargin: h, glyph: m, color: t, dimColor: n, "aria-label": l } = P, T = h === void 0 ? false : h, a = m === void 0 ? import_chunk_xcgcdx61.Fc : m;
  const p = T ? 1 : 0;
  let i;
  if (s[0] !== t || s[1] !== n || s[2] !== a || s[3] !== l) i = a !== false && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.hg, { fromLeftEdge: true, minWidth: 2, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-hidden": l === void 0, "aria-label": l, color: t, dimColor: n, children: a }) }), s[0] = t, s[1] = n, s[2] = a, s[3] = l, s[4] = i;
  else i = s[4];
  let b;
  if (s[5] !== d || s[6] !== p || s[7] !== i) b = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "row", marginTop: p, width: "100%", children: [i, d] }), s[5] = d, s[6] = p, s[7] = i, s[8] = b;
  else b = s[8];
  return b;
}
