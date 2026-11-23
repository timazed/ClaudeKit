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
var chunk_jbkqy09y_exports = {};
__export(chunk_jbkqy09y_exports, {
  M$: () => M$
});
module.exports = __toCommonJS(chunk_jbkqy09y_exports);
var import_chunk_aw136kab = require("/$bunfs/root/chunk-aw136kab.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_v2br6d1p = require("/$bunfs/root/chunk-v2br6d1p.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
function M$({ children: x, lock: o = "always", restartKey: i, maxRows: R = Number.POSITIVE_INFINITY }) {
  let [w, { isVisible: H }, d] = (0, import_chunk_8bkqeb5d.DF)(), { rows: r, columns: s } = (0, import_chunk_6n6exvyx.qe)(), m = (0, import_chunk_bs4h6795.I)(null), [t, u] = (0, import_chunk_bs4h6795.y)({ minHeight: 0, rows: r, columns: s, restartKey: i }), f = o === "always" && (t.rows !== r || t.columns !== s || t.restartKey !== i), N = (0, import_chunk_bs4h6795.be)(import_chunk_v2br6d1p.NL), P = (0, import_chunk_bs4h6795.be)(import_chunk_8bkqeb5d.$It), l = (o === "always" || !H && !(N && (0, import_chunk_8bkqeb5d.ckn)(P) === "fullscreen")) && !f, a = (0, import_chunk_bs4h6795.I)(0), p = Math.max(t.minHeight, a.current), E = (0, import_chunk_bs4h6795.be)(import_chunk_aw136kab.HJ) !== null;
  return (0, import_chunk_bs4h6795.It)(() => {
    if (!m.current) return;
    let { height: h } = (0, import_chunk_8bkqeb5d.Gr)(m.current), n = Math.min(h, r);
    if (f) {
      u({ minHeight: n, rows: r, columns: s, restartKey: i });
      return;
    }
    if (h > p) {
      if (E && o === "offscreen" && !l && n >= t.minHeight && d()) {
        a.current = n;
        return;
      }
      a.current = 0, u((c) => c.minHeight === n ? c : { ...c, minHeight: n });
    }
  }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { minHeight: l ? Math.min(p, R) : void 0, ref: w, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: m, flexDirection: "column", children: x }) });
}
