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
var chunk_5tb3z575_exports = {};
__export(chunk_5tb3z575_exports, {
  nm: () => nm
});
module.exports = __toCommonJS(chunk_5tb3z575_exports);
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_drb2187g = require("/$bunfs/root/chunk-drb2187g.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
function nm(B) {
  let d = (0, import_chunk_sng02qpc.k)(27), { width: E, color: t, char: M, padding: w, title: i, titleAlign: x } = B, l = M === void 0 ? import_chunk_xcgcdx61.ace : M, F = w === void 0 ? 0 : w, G = x === void 0 ? "center" : x, H = (0, import_chunk_drb2187g.nR)(), m = Math.max(0, (E ?? H) - F), D;
  if (d[0] !== t || d[1] !== i) D = i ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: t, dimColor: !t, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.rr, { children: i }) }) : null, d[0] = t, d[1] = i, d[2] = D;
  else D = d[2];
  let v = D;
  if (i) {
    let I = (0, import_chunk_mgh1y10w.oe)(i) + 2;
    let b = Math.max(0, m - I);
    let s = G === "start" ? Math.min(4, b) : Math.floor(b / 2);
    let y = b - s;
    const h2 = !t;
    let c2;
    if (d[3] !== l || d[4] !== s) c2 = l.repeat(s), d[3] = l, d[4] = s, d[5] = c2;
    else c2 = d[5];
    let a2;
    if (d[6] !== i) a2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.rr, { children: i }) }), d[6] = i, d[7] = a2;
    else a2 = d[7];
    let p;
    if (d[8] !== l || d[9] !== y) p = l.repeat(y), d[8] = l, d[9] = y, d[10] = p;
    else p = d[10];
    let W;
    if (d[11] !== t || d[12] !== h2 || d[13] !== c2 || d[14] !== a2 || d[15] !== p) W = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: t, dimColor: h2, children: [c2, " ", a2, " ", p] }), d[11] = t, d[12] = h2, d[13] = c2, d[14] = a2, d[15] = p, d[16] = W;
    else W = d[16];
    let R;
    if (d[17] !== v || d[18] !== W) R = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.sR, { fallback: v, children: W }), d[17] = v, d[18] = W, d[19] = R;
    else R = d[19];
    return R;
  }
  const h = !t;
  let c;
  if (d[20] !== l || d[21] !== m) c = l.repeat(m), d[20] = l, d[21] = m, d[22] = c;
  else c = d[22];
  let a;
  if (d[23] !== t || d[24] !== h || d[25] !== c) a = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.sR, { children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: t, dimColor: h, children: c }) }), d[23] = t, d[24] = h, d[25] = c, d[26] = a;
  else a = d[26];
  return a;
}
