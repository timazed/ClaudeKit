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
var chunk_s2z83xnv_exports = {};
__export(chunk_s2z83xnv_exports, {
  Bjn: () => Bjn
});
module.exports = __toCommonJS(chunk_s2z83xnv_exports);
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var Bjn = (0, import_chunk_w1d7ygsk.V)(function(c) {
  var i = {}, r = {};
  for (let e = 0; e < 256; e++) {
    let t = e.toString(16).toLowerCase();
    if (t.length === 1) t = `0${t}`;
    i[e] = t, r[t] = e;
  }
  function s(e) {
    if (e.length % 2 !== 0) throw Error("Hex encoded strings must have an even number length");
    let t = new Uint8Array(e.length / 2);
    for (let n = 0; n < e.length; n += 2) {
      let o = e.slice(n, n + 2).toLowerCase();
      if (o in r) t[n / 2] = r[o];
      else throw Error(`Cannot decode unrecognized sequence ${o} as hexadecimal`);
    }
    return t;
  }
  function l(e) {
    let t = "";
    for (let n = 0; n < e.byteLength; n++) t += i[e[n]];
    return t;
  }
  c.fromHex = s;
  c.toHex = l;
});
