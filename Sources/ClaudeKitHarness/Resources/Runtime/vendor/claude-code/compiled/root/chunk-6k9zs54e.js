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
var chunk_6k9zs54e_exports = {};
__export(chunk_6k9zs54e_exports, {
  Jbe: () => Jbe,
  LG: () => LG,
  Qm: () => Qm,
  jk: () => jk
});
module.exports = __toCommonJS(chunk_6k9zs54e_exports);
var import_chunk_k886eq88 = require("/$bunfs/root/chunk-k886eq88.js");
var Qm = Symbol("untrustedArray.unreadable"), LG = "<unreadable list>";
function jk(e) {
  let n;
  try {
    if (!Array.isArray(e)) return;
    n = e.length;
  } catch {
    return Qm;
  }
  if (typeof n !== "number" || !Number.isSafeInteger(n) || n < 0 || n > import_chunk_k886eq88.NS) return Qm;
  let u = [];
  for (let r = 0; r < n; r++) {
    let t;
    try {
      t = e[r];
    } catch {
      t = void 0;
    }
    u.push(t);
  }
  return u;
}
function Jbe(e) {
  let n = jk(e);
  return n === Qm ? void 0 : n;
}
