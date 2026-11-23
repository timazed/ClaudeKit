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
var chunk_dw56fm8m_exports = {};
__export(chunk_dw56fm8m_exports, {
  Ca: () => Ca
});
module.exports = __toCommonJS(chunk_dw56fm8m_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_zj98tvrk = require("/$bunfs/root/chunk-zj98tvrk.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
function Ca(l) {
  let o = (0, import_chunk_sng02qpc.k)(10), { error: r } = l, c, i;
  if (o[0] !== r) {
    i = import_chunk_w1d7ygsk.Mn;
    x: {
      let g = r ? (0, import_chunk_jv7av99m.d)(r).trim() : "";
      if (g === "") {
        i = null;
        break x;
      }
      c = (0, import_chunk_7cfjrnwy.s3n)(g);
    }
    o[0] = r, o[1] = c, o[2] = i;
  } else c = o[1], i = o[2];
  if (i !== import_chunk_w1d7ygsk.Mn) return i;
  let [f, t] = c, s;
  if (o[3] !== t) s = t !== "" && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.rr, { children: t }), o[3] = t, o[4] = s;
  else s = o[4];
  let m;
  if (o[5] !== f) m = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.rr, { children: f }), o[5] = f, o[6] = m;
  else m = o[6];
  let u;
  if (o[7] !== s || o[8] !== m) u = (0, import_chunk_a46xeenj.e)(import_chunk_zj98tvrk.tt, { status: "error", detail: s, children: m }), o[7] = s, o[8] = m, o[9] = u;
  else u = o[9];
  return u;
}
