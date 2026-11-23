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
var chunk_0zr3jtks_exports = {};
__export(chunk_0zr3jtks_exports, {
  KK: () => KK
});
module.exports = __toCommonJS(chunk_0zr3jtks_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_s73318k8 = require("/$bunfs/root/chunk-s73318k8.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
function K(q) {
  return q !== false;
}
function S(f, z) {
  let { label: B } = f;
  return { label: B, value: z };
}
function KK(f) {
  let a = (0, import_chunk_sng02qpc.k)(20), { title: u, subtitle: b, children: p, actions: c, note: R, onClose: t } = f, h;
  if (a[0] !== c) h = c === void 0 ? [] : c, a[0] = c, a[1] = h;
  else h = a[1];
  let C = h, n, v;
  if (a[2] !== C || a[3] !== t) {
    n = C.filter(K);
    let l2;
    if (a[6] !== t) l2 = { label: "Cancel", run: t }, a[6] = t, a[7] = l2;
    else l2 = a[7];
    v = [...n, l2];
    a[2] = C, a[3] = t, a[4] = n, a[5] = v;
  } else n = a[4], v = a[5];
  let s = v;
  const l = n.length > 0 ? "select" : void 0;
  let r;
  if (a[8] !== n.length || a[9] !== t || a[10] !== s) r = n.length > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_s73318k8.ct, { hideIndexes: true, disablePrintableKeybindings: true, refuseStrayText: true, selectedValue: import_chunk_s73318k8.Do, options: s.map(S), declineValue: n.length, onChange: (T) => s[T].run(), onCancel: t }), a[8] = n.length, a[9] = t, a[10] = s, a[11] = r;
  else r = a[11];
  let y;
  if (a[12] !== p || a[13] !== R || a[14] !== t || a[15] !== b || a[16] !== l || a[17] !== r || a[18] !== u) y = (0, import_chunk_a46xeenj.o)(import_chunk_vs99e3g5.Oe, { title: u, subtitle: b, onCancel: t, enterAction: l, escapeAction: "go back", children: [p, r, R] }), a[12] = p, a[13] = R, a[14] = t, a[15] = b, a[16] = l, a[17] = r, a[18] = u, a[19] = y;
  else y = a[19];
  return y;
}
