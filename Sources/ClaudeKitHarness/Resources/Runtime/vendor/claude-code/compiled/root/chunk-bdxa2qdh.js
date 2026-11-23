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
var chunk_bdxa2qdh_exports = {};
__export(chunk_bdxa2qdh_exports, {
  Ahr: () => Ahr,
  Chr: () => Chr,
  H5: () => H5,
  Rhr: () => Rhr,
  Wdo: () => Wdo,
  Zrn: () => Zrn,
  jdo: () => jdo,
  ust: () => ust
});
module.exports = __toCommonJS(chunk_bdxa2qdh_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var Zrn = 0, Wdo = 1, Chr = 262144, n = 5, Ahr = 1048576, ust = 1e4;
function Rhr(r) {
  let e = typeof r === "string" ? Buffer.from(r, "utf8") : r, t = Buffer.allocUnsafe(n + e.length);
  return t.writeUInt32BE(e.length, 0), t.writeUInt8(Zrn, 4), e.copy(t, n), t;
}
function H5(r) {
  let e = Buffer.from((0, import_chunk_w578pjby._)(r), "utf8"), t = Buffer.allocUnsafe(n + e.length);
  return t.writeUInt32BE(e.length, 0), t.writeUInt8(Wdo, 4), e.copy(t, n), t;
}
function jdo(r, e) {
  let t = Buffer.alloc(0), o = false;
  return (l) => {
    if (o) return;
    t = t.length === 0 ? l : Buffer.concat([t, l]);
    while (t.length >= n) {
      let f = t.readUInt32BE(0);
      if (f > Ahr) {
        o = true, e(`frame too large (${f} > ${Ahr})`);
        return;
      }
      let u = n + f;
      if (t.length < u) return;
      let i = t.readUInt8(4), s = t.subarray(n, u);
      if (t = t.subarray(u), i === Zrn) r({ kind: Zrn, payload: Buffer.from(s) });
      else if (i === Wdo) {
        let c;
        try {
          c = (0, import_chunk_w578pjby.te)(s.toString("utf8"));
        } catch {
          o = true, e("bad ctrl json");
          return;
        }
        r({ kind: Wdo, ctrl: c });
      } else {
        o = true, e(`unknown frame kind ${i}`);
        return;
      }
    }
  };
}
