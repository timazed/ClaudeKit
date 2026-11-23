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
var chunk_3zbxgv80_exports = {};
__export(chunk_3zbxgv80_exports, {
  U3: () => U3
});
module.exports = __toCommonJS(chunk_3zbxgv80_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_s73318k8 = require("/$bunfs/root/chunk-s73318k8.js");
var import_chunk_d4d82adx = require("/$bunfs/root/chunk-d4d82adx.js");
var import_chunk_r95g2as8 = require("/$bunfs/root/chunk-r95g2as8.js");
var import_chunk_8z6a79mx = require("/$bunfs/root/chunk-8z6a79mx.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
function U3(y) {
  let i = (0, import_chunk_sng02qpc.k)(18), { label: s, onPress: a, onCancel: l } = y, { refuseInput: n } = (0, import_chunk_d4d82adx.sY)();
  if ((0, import_chunk_8bkqeb5d.Xe)()) {
    let o2;
    if (i[0] !== a || i[1] !== n) o2 = function(d) {
      if (d.key === "return" && d.name === "return") {
        if (d.preventDefault(), !n()) a();
      }
    }, i[0] = a, i[1] = n, i[2] = o2;
    else o2 = i[2];
    let t2;
    if (i[3] !== s) t2 = (0, import_chunk_a46xeenj.e)(import_chunk_r95g2as8.Rwn, { active: true, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: s }) }), i[3] = s, i[4] = t2;
    else t2 = i[4];
    let u2;
    if (i[5] !== o2 || i[6] !== t2) u2 = (0, import_chunk_a46xeenj.e)(import_chunk_8z6a79mx.il, { onKeyDown: o2, children: t2 }), i[5] = o2, i[6] = t2, i[7] = u2;
    else u2 = i[7];
    return u2;
  }
  let o;
  if (i[8] !== s) o = [{ label: s, value: "press" }], i[8] = s, i[9] = o;
  else o = i[9];
  let t;
  if (i[10] !== a || i[11] !== n) t = () => {
    if (n()) {
      return false;
    }
    a();
  }, i[10] = a, i[11] = n, i[12] = t;
  else t = i[12];
  let u;
  if (i[13] !== l || i[14] !== n || i[15] !== o || i[16] !== t) u = (0, import_chunk_a46xeenj.e)(import_chunk_s73318k8.ct, { options: o, hideIndexes: true, disablePrintableKeybindings: true, selectedValue: import_chunk_s73318k8.Do, refuseInput: n, onChange: t, onCancel: l }), i[13] = l, i[14] = n, i[15] = o, i[16] = t, i[17] = u;
  else u = i[17];
  return u;
}
