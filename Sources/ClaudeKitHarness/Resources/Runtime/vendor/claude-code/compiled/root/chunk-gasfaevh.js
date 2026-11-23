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
var chunk_gasfaevh_exports = {};
__export(chunk_gasfaevh_exports, {
  $I: () => $I
});
module.exports = __toCommonJS(chunk_gasfaevh_exports);
var import_chunk_5cey7gvv = require("/$bunfs/root/chunk-5cey7gvv.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var p = [" ", "\u258F", "\u258E", "\u258D", "\u258C", "\u258B", "\u258A", "\u2589", "\u2588"], R = { fill: "\u25B0", empty: "\u25B1" }, Y = { fill: "\u2588", empty: "\u2591" }, _ = { fill: "\u2593", empty: "\u2591" }, g = () => import_chunk_5cey7gvv.wC.hasGeometricShapesInkBleedBug() ? Y : R, v = (m) => Math.min(1, Math.max(0, m)), S = (m, i) => {
  let t = Math.floor(m * i), n = [(0, import_chunk_7cfjrnwy.xd)(p.at(-1), t)];
  if (t < i) {
    let l = m * i - t, h = Math.floor(l * (p.length - 1));
    n.push(p[h]);
    let a = i - t - 1;
    if (a > 0) n.push(p[0].repeat(a));
  }
  return n.join("");
};
function $I(m) {
  let G = (0, import_chunk_sng02qpc.k)(17), { ratio: i, width: t, fillColor: n, emptyColor: l, variant: h } = m, a = h === void 0 ? "block" : h, u, y, L, C, P, M;
  if (G[0] !== l || G[1] !== n || G[2] !== i || G[3] !== a || G[4] !== t) {
    M = import_chunk_w1d7ygsk.Mn;
    J: {
      let d = v(i);
      if (a !== "block") {
        let { fill: X, empty: j } = a === "shade" ? _ : g();
        let I = Math.round(d * t);
        let E = a === "shade" && d > 0 && d < 1 ? Math.min(Math.max(t - 1, 0), Math.max(1, I)) : I;
        M = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { "aria-label": a === "shade" ? `${Math.round(d * 100)}%` : void 0, children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: n, children: (0, import_chunk_7cfjrnwy.xd)(X, E) }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: l, dimColor: l === void 0, children: (0, import_chunk_7cfjrnwy.xd)(j, t - E) })] });
        break J;
      }
      u = import_chunk_8bkqeb5d.r;
      y = n;
      L = l;
      C = `${Math.round(d * 100)}%`;
      P = S(d, t);
    }
    G[0] = l, G[1] = n, G[2] = i, G[3] = a, G[4] = t, G[5] = u, G[6] = y, G[7] = L, G[8] = C, G[9] = P, G[10] = M;
  } else u = G[5], y = G[6], L = G[7], C = G[8], P = G[9], M = G[10];
  if (M !== import_chunk_w1d7ygsk.Mn) return M;
  let H;
  if (G[11] !== u || G[12] !== y || G[13] !== L || G[14] !== C || G[15] !== P) H = (0, import_chunk_a46xeenj.e)(u, { color: y, backgroundColor: L, "aria-label": C, children: P }), G[11] = u, G[12] = y, G[13] = L, G[14] = C, G[15] = P, G[16] = H;
  else H = G[16];
  return H;
}
