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
var chunk_qg858gb7_exports = {};
__export(chunk_qg858gb7_exports, {
  ist: () => ist
});
module.exports = __toCommonJS(chunk_qg858gb7_exports);
var import_string_decoder = require("string_decoder");
var h = 65536;
async function* ist(e, t) {
  let l = Buffer.allocUnsafe(h), f = new import_string_decoder.StringDecoder("utf8"), a = t ? t.end - t.start : 1 / 0, n = 0, r = [];
  while (n < a) {
    let { bytesRead: u } = await e.read(l, 0, Math.min(l.length, a - n), t ? t.start + n : null);
    if (u === 0) break;
    n += u;
    let i = f.write(l.subarray(0, u)), s = 0;
    for (let o = i.indexOf(`
`); o !== -1; o = i.indexOf(`
`, s)) r.push(i.slice(s, o)), yield d(r.join("")), r = [], s = o + 1;
    if (s < i.length) r.push(i.slice(s));
  }
  let c = r.join("") + f.end();
  if (c.length > 0) yield d(c);
  return n;
}
function d(e) {
  return e.endsWith("\r") ? e.slice(0, -1) : e;
}
