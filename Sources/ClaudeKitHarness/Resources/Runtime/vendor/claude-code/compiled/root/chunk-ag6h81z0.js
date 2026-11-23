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
var chunk_ag6h81z0_exports = {};
__export(chunk_ag6h81z0_exports, {
  C5t: () => C5t
});
module.exports = __toCommonJS(chunk_ag6h81z0_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_pw8jgay2 = require("/$bunfs/root/chunk-pw8jgay2.js");
var import_chunk_dw56fm8m = require("/$bunfs/root/chunk-dw56fm8m.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function T(c, I) {
  let f = c.match(h);
  if (!f) {
    return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: c }, I);
  }
  let p = f[0];
  let B = f.index ?? 0;
  let q = c.slice(0, B);
  let v = c.slice(B + p.length);
  return (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [q, (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: p, children: p }), v] }, I);
}
var h = /https?:\/\/\S+/;
function C5t() {
  let n = (0, import_chunk_sng02qpc.k)(10), S;
  if (n[0] === import_chunk_w1d7ygsk.R) S = import_chunk_865at33z.ade.getInstance().getStatus(), n[0] = S;
  else S = n[0];
  let [t, Y] = (0, import_chunk_bs4h6795.y)(S), x, A;
  if (n[1] === import_chunk_w1d7ygsk.R) x = () => import_chunk_865at33z.ade.getInstance().subscribe(Y), A = [], n[1] = x, n[2] = A;
  else x = n[1], A = n[2];
  if ((0, import_chunk_bs4h6795.H)(x, A), !t.isAuthenticating && !t.error && t.output.length === 0) {
    return null;
  }
  if (!t.isAuthenticating && !t.error) {
    return null;
  }
  let i;
  if (n[3] !== t.output) i = t.output.length > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_ee10yhqw.Q, { compact: true, children: t.output.slice(-5).map(T) }), n[3] = t.output, n[4] = i;
  else i = n[4];
  let a;
  if (n[5] !== t.error) a = t.error && (0, import_chunk_a46xeenj.e)(import_chunk_dw56fm8m.Ca, { error: t.error }), n[5] = t.error, n[6] = a;
  else a = n[6];
  let C;
  if (n[7] !== i || n[8] !== a) C = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { marginY: 1, children: (0, import_chunk_a46xeenj.o)(import_chunk_pw8jgay2.Mv, { color: "permission", title: "Sign-in", children: [i, a] }) }), n[7] = i, n[8] = a, n[9] = C;
  else C = n[9];
  return C;
}
