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
var chunk_vt9cg2p6_exports = {};
__export(chunk_vt9cg2p6_exports, {
  J1o: () => J1o
});
module.exports = __toCommonJS(chunk_vt9cg2p6_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_65494s25 = require("/$bunfs/root/chunk-65494s25.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_7g0kta79 = require("/$bunfs/root/chunk-7g0kta79.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
function J1o(L) {
  let t = (0, import_chunk_sng02qpc.k)(20), { customApiKeyTruncated: a, onDone: s } = L, { storageV5: c } = (0, import_chunk_3jkk3v3z.Ve)(), y = (0, import_chunk_7g0kta79.Hte)() ? 2 : 0, b;
  if (t[0] !== a || t[1] !== s || t[2] !== c) b = function n2(V) {
    G: switch (V) {
      case "yes": {
        (0, import_chunk_865at33z.Ke)((C) => {
          let { approved: Y, rejected: H } = (0, import_chunk_865at33z.q4)(C);
          return { ...C, customApiKeyResponses: { approved: [...Y, a], rejected: H } };
        }, c), (0, import_chunk_865at33z.zV)(), s(true);
        break G;
      }
      case "no": {
        (0, import_chunk_865at33z.Ke)((D) => {
          let { approved: O, rejected: q } = (0, import_chunk_865at33z.q4)(D);
          return { ...D, customApiKeyResponses: { approved: O, rejected: [...q, a] } };
        }, c), s(false);
      }
    }
  }, t[0] = a, t[1] = s, t[2] = c, t[3] = b;
  else b = t[3];
  let n = b, d;
  if (t[4] !== n) d = () => n("no"), t[4] = n, t[5] = d;
  else d = t[5];
  let P;
  if (t[6] === import_chunk_w1d7ygsk.R) P = (0, import_chunk_a46xeenj.e)(import_chunk_7g0kta79.IZe, { bold: true, children: "ANTHROPIC_API_KEY" }), t[6] = P;
  else P = t[6];
  let i;
  if (t[7] !== a) i = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [P, (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [": sk-ant-...", a] })] }), t[7] = a, t[8] = i;
  else i = t[8];
  let p;
  if (t[9] !== y || t[10] !== i) p = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: y, children: i }), t[9] = y, t[10] = i, t[11] = p;
  else p = t[11];
  let I;
  if (t[12] === import_chunk_w1d7ygsk.R) I = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "Do you want to use this API key?" }), t[12] = I;
  else I = t[12];
  let K;
  if (t[13] === import_chunk_w1d7ygsk.R) K = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["No (", (0, import_chunk_a46xeenj.e)(import_chunk_7g0kta79.IZe, { bold: true, children: "recommended" }), ")"] }), t[13] = K;
  else K = t[13];
  let u;
  if (t[14] !== n) u = (0, import_chunk_a46xeenj.e)(import_chunk_65494s25.ar, { hideIndexes: true, disablePrintableKeybindings: true, focus: "cancel", cancelLabel: K, onConfirm: () => n("yes"), onCancel: () => n("no") }), t[14] = n, t[15] = u;
  else u = t[15];
  let T;
  if (t[16] !== d || t[17] !== p || t[18] !== u) T = (0, import_chunk_a46xeenj.o)(import_chunk_vs99e3g5.Oe, { title: "Detected a custom API key in your environment", color: "warning", onCancel: d, exitOnCtrlCD: true, children: [p, I, u] }), t[16] = d, t[17] = p, t[18] = u, t[19] = T;
  else T = t[19];
  return T;
}
