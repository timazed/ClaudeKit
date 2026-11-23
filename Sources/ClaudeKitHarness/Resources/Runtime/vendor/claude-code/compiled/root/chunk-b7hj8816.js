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
var chunk_b7hj8816_exports = {};
__export(chunk_b7hj8816_exports, {
  Wn: () => Wn,
  k9t: () => k9t
});
module.exports = __toCommonJS(chunk_b7hj8816_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_drb2187g = require("/$bunfs/root/chunk-drb2187g.js");
var import_chunk_jbkqy09y = require("/$bunfs/root/chunk-jbkqy09y.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
var a = 5;
function Wn(u) {
  let d = (0, import_chunk_sng02qpc.k)(8), { children: t, height: i, settled: c } = u, w = c === void 0 ? false : c;
  if ((0, import_chunk_bs4h6795.be)(n)) {
    return t;
  }
  let x;
  if (d[0] === import_chunk_w1d7ygsk.R) x = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.hg, { fromLeftEdge: true, flexShrink: 0, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { "aria-hidden": true, dimColor: true, children: ["  ", "\u23BF \xA0"] }) }), d[0] = x;
  else x = d[0];
  let l;
  if (d[1] !== t) l = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 1, flexGrow: 1, children: (0, import_chunk_a46xeenj.e)(import_chunk_drb2187g.FD, { count: a, children: t }) }), d[1] = t, d[2] = l;
  else l = d[2];
  let N;
  if (d[3] !== i || d[4] !== l) N = (0, import_chunk_a46xeenj.e)(h, { children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "row", height: i, overflowY: "hidden", children: [x, l] }) }), d[3] = i, d[4] = l, d[5] = N;
  else N = d[5];
  let f = N;
  if (i !== void 0 || w) {
    return f;
  }
  let v;
  if (d[6] !== f) v = (0, import_chunk_a46xeenj.e)(import_chunk_jbkqy09y.M$, { lock: "offscreen", children: f }), d[6] = f, d[7] = v;
  else v = d[7];
  return v;
}
var n = (0, import_chunk_bs4h6795.an)(false);
function k9t() {
  return (0, import_chunk_bs4h6795.be)(n);
}
function h(u) {
  let i = (0, import_chunk_sng02qpc.k)(2), { children: t } = u, c;
  if (i[0] !== t) c = (0, import_chunk_a46xeenj.e)(n.Provider, { value: true, children: t }), i[0] = t, i[1] = c;
  else c = i[1];
  return c;
}
