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
var chunk_r3kja8v6_exports = {};
__export(chunk_r3kja8v6_exports, {
  QC: () => QC,
  Voe: () => Voe,
  oUl: () => oUl,
  rna: () => rna,
  ue: () => ue,
  vi: () => vi,
  vqt: () => vqt
});
module.exports = __toCommonJS(chunk_r3kja8v6_exports);
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var n = (0, import_chunk_t57w17k7.de)({ accepted: false }, (e) => {
  e.accepted = false;
});
function ue() {
  return n.accepted;
}
function vi() {
  return n.accepted;
}
function QC() {
  return vi();
}
function vqt() {
  return ue();
}
var t = { isOn: void 0 };
function oUl(e) {
  t.isOn = e;
}
function Voe() {
  if (n.accepted) try {
    return t.isOn?.() === true;
  } catch {
    return false;
  }
  return false;
}
function rna(e) {
  n.accepted = e;
}
