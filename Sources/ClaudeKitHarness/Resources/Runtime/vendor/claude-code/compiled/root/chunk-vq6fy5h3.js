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
var chunk_vq6fy5h3_exports = {};
__export(chunk_vq6fy5h3_exports, {
  Cgt: () => Cgt,
  Hei: () => Hei,
  tAn: () => tAn
});
module.exports = __toCommonJS(chunk_vq6fy5h3_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_tb222zty = require("/$bunfs/root/chunk-tb222zty.js");
var o = 50;
function Cgt() {
  let i = (0, import_chunk_69qhefwa.Be)(), e = [], u = 0;
  return { publish(t, r, s) {
    let n = s === void 0 ? { line: t, level: r } : { line: t, level: r, notice: s };
    if (u === 0) {
      e = [...e, n].slice(-o);
      return;
    }
    i.emit(n);
  }, takeBacklog() {
    let t = e;
    return e = [], t;
  }, subscribe(t) {
    u += 1;
    let r = i.subscribe(t);
    return () => {
      u -= 1, r();
    };
  } };
}
var a = Buffer.from([0]);
function tAn(i, { sessionUuid: e, boundDeviceUuid: u, issuedAtMs: t, fixed: r, strings: s }) {
  if (s.some((n) => n.includes("\0"))) throw Error("framedPreimage: NUL in a signed field");
  return Buffer.concat([i, a, (0, import_chunk_tb222zty.FY)(e), (0, import_chunk_tb222zty.FY)(u), Hei(t), ...r, ...s.flatMap((n) => [Buffer.from(n, "utf8"), a])]);
}
function Hei(i) {
  let e = Buffer.alloc(8);
  return e.writeBigUInt64BE(BigInt(i)), e;
}
