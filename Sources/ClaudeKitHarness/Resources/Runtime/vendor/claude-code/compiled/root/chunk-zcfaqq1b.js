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
var chunk_zcfaqq1b_exports = {};
__export(chunk_zcfaqq1b_exports, {
  ML: () => ML
});
module.exports = __toCommonJS(chunk_zcfaqq1b_exports);
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
function ML(c, o, t = 1e3, i = 0, m) {
  let e = (0, import_chunk_8bkqeb5d.ir)(), n = () => (0, import_chunk_f64qna2j.Cn)(Math.max(0, (m ?? Date.now()) - c - i)), a = (0, import_chunk_bs4h6795.ye)((l) => {
    if (!o) return () => {
    };
    let r, u = () => {
      try {
        l();
      } finally {
        r = e.setTimeout(u, t);
      }
    };
    return r = e.setTimeout(u, t), () => r();
  }, [o, t, e]);
  return (0, import_chunk_bs4h6795.Ot)(a, n, n);
}
