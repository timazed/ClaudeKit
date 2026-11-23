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
var chunk_dwa7jc2e_exports = {};
__export(chunk_dwa7jc2e_exports, {
  Dv: () => Dv
});
module.exports = __toCommonJS(chunk_dwa7jc2e_exports);
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
function Dv(o, c, u = false) {
  (0, import_chunk_bs4h6795.H)(() => {
    let n = o.current;
    if (!n) return;
    let e = (0, import_chunk_8bkqeb5d.cH)(n);
    if (!c) {
      if (u && e.activeElement === n) e.blur();
      return;
    }
    return e.focus(n), e.subscribe(() => {
      let t = o.current;
      if (!t || e.activeElement === t) return;
      if (!e.activeElement) {
        e.focus(t);
        return;
      }
      let r = t.parentNode;
      while (r) {
        if (r === e.activeElement) {
          e.focus(t);
          return;
        }
        r = r.parentNode;
      }
    });
  }, [c, o, u]);
}
