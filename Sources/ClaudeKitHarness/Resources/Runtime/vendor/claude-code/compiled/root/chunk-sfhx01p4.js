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
var chunk_sfhx01p4_exports = {};
__export(chunk_sfhx01p4_exports, {
  LL: () => LL,
  UI: () => UI
});
module.exports = __toCommonJS(chunk_sfhx01p4_exports);
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_v2br6d1p = require("/$bunfs/root/chunk-v2br6d1p.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
function a() {
  let r = (0, import_chunk_bs4h6795.be)(import_chunk_v2br6d1p.NL), [o, t, n, , m] = (0, import_chunk_8bkqeb5d.DF)(), s = m() ?? t.isVisible;
  return [o, s || r, n];
}
function LL({ children: r, updatesWhenBackInView: o = false }) {
  let t = (0, import_chunk_bs4h6795.be)(import_chunk_3jkk3v3z.ay), [n, m, s] = a(), u = (0, import_chunk_bs4h6795.I)(r), [, c] = (0, import_chunk_bs4h6795.nb)((d) => d + 1, 0), i = !m;
  if (!i) u.current = r;
  let l = t?.columns, p = t?.rows;
  (0, import_chunk_bs4h6795.It)(() => {
    if (i && s()) c();
  }, [l, p, i, s]);
  let { subscribeLayout: f } = (0, import_chunk_bs4h6795.be)(import_chunk_8bkqeb5d.sp);
  return (0, import_chunk_bs4h6795.It)(() => {
    if (!i || !o) return;
    return f(() => {
      if (s()) c();
    });
  }, [i, o, f, s]), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: n, children: u.current });
}
function UI(r) {
  let [o, t] = a(), n = (0, import_chunk_bs4h6795.I)(r);
  if (t) n.current = r;
  return [o, n.current];
}
