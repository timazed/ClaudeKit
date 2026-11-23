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
var chunk_nej2e75x_exports = {};
__export(chunk_nej2e75x_exports, {
  dve: () => dve
});
module.exports = __toCommonJS(chunk_nej2e75x_exports);
var import_chunk_ky5sghtd = require("/$bunfs/root/chunk-ky5sghtd.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_qrgafffd = require("/$bunfs/root/chunk-qrgafffd.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
function dve(u) {
  let f = (0, import_chunk_sng02qpc.k)(16), { children: m, mouseTracking: p, surface: c } = u, i = p === void 0 ? "full" : p, w = (0, import_chunk_bs4h6795.be)(import_chunk_3jkk3v3z.ay), r = (0, import_chunk_bs4h6795.be)(import_chunk_3jkk3v3z.uY), t = (0, import_chunk_bs4h6795.be)(import_chunk_3jkk3v3z.tXn), M, F;
  if (f[0] !== t || f[1] !== c || f[2] !== r) M = () => {
    if (!r || !c) {
      return;
    }
    let A = (0, import_chunk_ky5sghtd.va)().get(process.stdout);
    let N = t.set("surface", c);
    if (!A?.keepForNextFrame(N)) r(N);
    return () => {
      let P = t.reset("surface");
      if (!A?.keepForNextFrame(P)) r(P);
    };
  }, F = [r, t, c], f[0] = t, f[1] = c, f[2] = r, f[3] = M, f[4] = F;
  else M = f[3], F = f[4];
  (0, import_chunk_bs4h6795.MSe)(M, F);
  let C, L;
  if (f[5] !== t || f[6] !== i || f[7] !== r) C = () => {
    let a = (0, import_chunk_ky5sghtd.va)().get(process.stdout);
    if (!r) {
      return;
    }
    let b = (a?.claimHeldAltScreen() ? t.reset("mouse") : "") + t.set("altScreen") + t.set("mouse", i) + (a?.nativeCursorSeq ?? "");
    if (!a?.keepForNextFrame(b)) r(b);
    return a?.setAltScreenActive(true, i), () => {
      if (!a?.holdAltScreenLeave(() => d(a, t, r))) d(a, t, r);
    };
  }, L = [r, t, i], f[5] = t, f[6] = i, f[7] = r, f[8] = C, f[9] = L;
  else C = f[8], L = f[9];
  (0, import_chunk_bs4h6795.MSe)(C, L);
  const T = w?.rows ?? 24, g = i === "full";
  let y;
  if (f[10] !== m || f[11] !== g) y = (0, import_chunk_a46xeenj.e)(import_chunk_qrgafffd.ZYn, { value: g, children: m }), f[10] = m, f[11] = g, f[12] = y;
  else y = f[12];
  let j;
  if (f[13] !== T || f[14] !== y) j = (0, import_chunk_a46xeenj.e)(import_chunk_3jkk3v3z.kS, { flexDirection: "column", height: T, width: "100%", flexShrink: 0, children: y }), f[13] = T, f[14] = y, f[15] = j;
  else j = f[15];
  return j;
}
function d(u, m, p) {
  let c = u?.setAltScreenActive(false) ?? "";
  u?.clearTextSelection();
  let i = m.reset("mouse"), w = m.reset("altScreen"), r = w !== "" && !u?.hasUnmounted, t = r ? m.reassert("extendedKeys") : "", f = r ? u?.nativeCursorSeq ?? "" : "";
  p(c + i + w + t + f);
}
