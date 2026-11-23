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
var chunk_0h9rvfx7_exports = {};
__export(chunk_0h9rvfx7_exports, {
  Odn: () => Odn,
  Pdn: () => Pdn,
  ime: () => ime,
  mSl: () => mSl,
  nvt: () => nvt,
  qSo: () => qSo
});
module.exports = __toCommonJS(chunk_0h9rvfx7_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var qSo = "mixed";
function Pdn(n, r) {
  let i = (0, import_chunk_mzmcvr6c.ht)(r)?.toLowerCase();
  return i === void 0 || i === n ? n : n === void 0 ? i : qSo;
}
function mSl(n) {
  return n === "none";
}
function ime(n, r) {
  return n === void 0 ? r ? "none" : "unknown" : n === qSo ? qSo : { organizationUuid: n };
}
function Odn(n) {
  return ime(nvt(n), /"type":"(?:user|assistant)"/.test(n));
}
function nvt(n) {
  let r;
  for (let i of n.split(`
`)) if (i.includes('"type":"hybrid-organization"')) r = Pdn(r, (0, import_chunk_q3a5dy2r.NX)(i, "hybrid-organization", "organizationUuid"));
  return r;
}
