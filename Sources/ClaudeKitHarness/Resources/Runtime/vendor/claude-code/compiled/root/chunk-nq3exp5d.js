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
var chunk_nq3exp5d_exports = {};
__export(chunk_nq3exp5d_exports, {
  bUt: () => bUt,
  mpo: () => mpo,
  qDe: () => qDe,
  sll: () => sll
});
module.exports = __toCommonJS(chunk_nq3exp5d_exports);
var import_chunk_9r4r85pg = require("/$bunfs/root/chunk-9r4r85pg.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var r = "claude/structuredContentJsonBase64", mpo = "toolbox.text_blocks_left_out", o = /^[A-Za-z0-9+/]*={0,2}$/;
function sll(t) {
  return { [r]: Buffer.from(t, "utf8").toString("base64") };
}
function qDe(t) {
  return (0, import_chunk_9r4r85pg.EG)() && (0, import_chunk_ma3kja9f.T)(t) && typeof (0, import_chunk_xcgcdx61.ko)(t, r) === "string" && Object.keys(t).length === 1;
}
function bUt(t) {
  if (!qDe(t)) return;
  let n = t[r];
  if (n.length % 4 !== 0 || !o.test(n)) return;
  let e = Buffer.from(n, "base64").toString("utf8");
  return e.trim() ? e : void 0;
}
