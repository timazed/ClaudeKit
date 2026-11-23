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
var chunk_8dkwjpxx_exports = {};
__export(chunk_8dkwjpxx_exports, {
  I$: () => I$
});
module.exports = __toCommonJS(chunk_8dkwjpxx_exports);
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
function I$(P) {
  let y = (0, import_chunk_sng02qpc.k)(10), { children: o, color: u, bold: m, linkHref: a } = P, l;
  if (y[0] !== o || y[1] !== a) {
    l = [];
    let n = 0;
    for (const i of o.matchAll(import_chunk_9b4aq7fb.UVn)) {
      let x = (0, import_chunk_9b4aq7fb.FPe)(i[0]);
      let b = a === void 0 ? x : a(x);
      if (b === void 0) {
        continue;
      }
      if (i.index > n) l.push(o.slice(n, i.index));
      l.push((0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: b, children: b }, i.index)), n = i.index + x.length;
    }
    let s2;
    if (y[3] !== o || y[4] !== n) s2 = o.slice(n), y[3] = o, y[4] = n, y[5] = s2;
    else s2 = y[5];
    l.push(s2);
    y[0] = o, y[1] = a, y[2] = l;
  } else l = y[2];
  let s;
  if (y[6] !== m || y[7] !== u || y[8] !== l) s = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: u, bold: m, children: l }), y[6] = m, y[7] = u, y[8] = l, y[9] = s;
  else s = y[9];
  return s;
}
