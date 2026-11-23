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
var chunk_er4k5wmh_exports = {};
__export(chunk_er4k5wmh_exports, {
  nue: () => nue,
  v7n: () => v7n
});
module.exports = __toCommonJS(chunk_er4k5wmh_exports);
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
var v7n = 800;
function nue(t, c, u, s = v7n) {
  let n = (0, import_chunk_8bkqeb5d.ir)(), o = (0, import_chunk_8bkqeb5d.si)(), f = (0, import_chunk_bs4h6795.I)(0), e = (0, import_chunk_bs4h6795.I)(void 0), l = (0, import_chunk_bs4h6795.mo)(() => t(false)), r = (0, import_chunk_bs4h6795.ye)(() => {
    if (e.current) e.current(), e.current = void 0;
  }, []);
  return (0, import_chunk_bs4h6795.H)(() => () => {
    if (e.current) r(), l();
  }, [r]), (0, import_chunk_bs4h6795.ye)(() => {
    let i = o();
    if (i - f.current <= s && e.current !== void 0) r(), t(false), c();
    else u?.(), t(true), r(), e.current = n.setTimeout(() => {
      t(false), e.current = void 0;
    }, s);
    f.current = i;
  }, [t, c, u, r, n, o, s]);
}
