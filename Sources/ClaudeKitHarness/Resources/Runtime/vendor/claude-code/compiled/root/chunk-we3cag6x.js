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
var chunk_we3cag6x_exports = {};
__export(chunk_we3cag6x_exports, {
  Ote: () => Ote,
  Y5t: () => Y5t
});
module.exports = __toCommonJS(chunk_we3cag6x_exports);
var import_chunk_szvrpg0x = require("/$bunfs/root/chunk-szvrpg0x.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_ykad4ek3 = require("/$bunfs/root/chunk-ykad4ek3.js");
var import_chunk_ddk99w14 = require("/$bunfs/root/chunk-ddk99w14.js");
var import_chunk_0t7st4dz = require("/$bunfs/root/chunk-0t7st4dz.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
var R = 500, f = 5e3;
function Y5t() {
  let t = (0, import_chunk_8bkqeb5d.Xe)(), n = (0, import_chunk_3jkk3v3z.e6)(), o = (0, import_chunk_ykad4ek3.aa)();
  return (0, import_chunk_bs4h6795.ye)(() => {
    if (!t) return;
    let l = import_chunk_szvrpg0x.iO.of(o), c = Date.now();
    if (c - l.lastBellAt < R) return;
    l.lastBellAt = c, n.notifyBell();
  }, [t, n, o]);
}
(0, import_chunk_bs4h6795.G)();
var d = 600;
function m(t, n = d) {
  let o = (0, import_chunk_ddk99w14.Op)(), [l, c] = (0, import_chunk_8bkqeb5d.gc)(t && o ? n : null);
  if (!t || !o) return [l, true];
  let i = Math.floor(c / n) % 2 === 0;
  return [l, i];
}
function Ote({ isError: t, isNeutral: n = false, isUnresolved: o, shouldAnimate: l }) {
  let c = (0, import_chunk_8bkqeb5d.Xe)(), i = (0, import_chunk_0t7st4dz.Kh)(), [p, L] = m(l && !c && !i), u = o && l && i && !c, a = Y5t(), s = (0, import_chunk_bs4h6795.I)(null);
  return (0, import_chunk_bs4h6795.H)(() => {
    if (o) s.current ??= Date.now();
    else if (s.current !== null) {
      if (Date.now() - s.current > f) a();
      s.current = null;
    }
  }, [o, a]), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: p, minWidth: 2, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-label": t && !n ? "tool error:" : "tool:", color: u ? "text" : o || n ? void 0 : t ? "error" : "success", dimColor: o && !u || n, children: !l || L || t || !o ? import_chunk_xcgcdx61.Fc : " " }) });
}
