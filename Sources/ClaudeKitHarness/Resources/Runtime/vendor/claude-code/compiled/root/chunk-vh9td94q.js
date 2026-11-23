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
var chunk_vh9td94q_exports = {};
__export(chunk_vh9td94q_exports, {
  $2: () => $2,
  HIe: () => HIe,
  MF: () => MF
});
module.exports = __toCommonJS(chunk_vh9td94q_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
var n = (0, import_chunk_bs4h6795.an)(null), $2 = 1;
function HIe(w) {
  let m = (0, import_chunk_sng02qpc.k)(12), { box: D, reserve: l, onKeyDown: t, children: u } = w, O = (0, import_chunk_bs4h6795.I)(null), o = D ?? O, { rows: c } = (0, import_chunk_6n6exvyx.Qo)((0, import_chunk_6n6exvyx.qe)()), E = MF(), a = t !== void 0 || !!E?.takesUnusedKeys, r;
  if (m[0] !== o || m[1] !== l || m[2] !== c || m[3] !== a) r = { box: o, rows: c, reserve: l, takesUnusedKeys: a }, m[0] = o, m[1] = l, m[2] = c, m[3] = a, m[4] = r;
  else r = m[4];
  let s;
  if (m[5] !== o || m[6] !== u || m[7] !== t) s = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: o, flexDirection: "column", onKeyDown: t, children: u }), m[5] = o, m[6] = u, m[7] = t, m[8] = s;
  else s = m[8];
  let d;
  if (m[9] !== r || m[10] !== s) d = (0, import_chunk_a46xeenj.e)(n, { value: r, children: s }), m[9] = r, m[10] = s, m[11] = d;
  else d = m[11];
  return d;
}
function MF() {
  return (0, import_chunk_bs4h6795.be)(n);
}
