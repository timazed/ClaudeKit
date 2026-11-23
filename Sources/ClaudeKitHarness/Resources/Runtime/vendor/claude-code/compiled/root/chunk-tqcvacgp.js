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
var chunk_tqcvacgp_exports = {};
__export(chunk_tqcvacgp_exports, {
  YE: () => YE,
  nTn: () => nTn,
  rTn: () => rTn,
  w8s: () => w8s
});
module.exports = __toCommonJS(chunk_tqcvacgp_exports);
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_210k8f6q = require("/$bunfs/root/chunk-210k8f6q.js");
var import_chunk_1tyxkk56 = require("/$bunfs/root/chunk-1tyxkk56.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var nTn = "\x1B]8;;", rTn = "\x07";
function YE(e, r, t) {
  let n = r === void 0 ? void 0 : (0, import_chunk_wbk1hf21.Dr)(r), o = n === void 0 || w8s(e, n);
  if (!(o && (t?.assumeSupport ?? false) && process.stdout.isTTY === true && ((0, import_chunk_210k8f6q.lqe)() ?? true) || (t?.supportsHyperlinks ?? (0, import_chunk_210k8f6q.XE)()))) {
    let i = t?.shownUrlStart ?? "", s = t?.mayWriteHyperlink ?? (0, import_chunk_210k8f6q.sOa)(e) ? `${nTn}${e}${rTn}${e}${nTn}${rTn}` : e;
    if (r !== void 0 && !o) return `${r}${i} (${s})`;
    return `${i}${s}`;
  }
  let p = ((t?.themeName ? (0, import_chunk_1tyxkk56.ASe)(t.themeName) : false) ? import_chunk_d57v19zt.Re.blue : import_chunk_d57v19zt.Re.blueBright)(r ?? e);
  return `${nTn}${e}${rTn}${p}${nTn}${rTn}`;
}
function w8s(e, r) {
  return r === e || e === `http://${r}` || e === `https://${r}`;
}
