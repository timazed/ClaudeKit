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
var chunk_h3wh7m36_exports = {};
__export(chunk_h3wh7m36_exports, {
  uve: () => uve
});
module.exports = __toCommonJS(chunk_h3wh7m36_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_6fvsq616 = require("/$bunfs/root/chunk-6fvsq616.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_jczdrj4v = require("/$bunfs/root/chunk-jczdrj4v.js");
var import_chunk_dfcadv0m = require("/$bunfs/root/chunk-dfcadv0m.js");
var import_chunk_096ekw6r = require("/$bunfs/root/chunk-096ekw6r.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
function uve(a) {
  let t = (0, import_chunk_sng02qpc.k)(20), c, l, s, m, n;
  if (t[0] !== a) ({ tabHasKeys: l, footer: s, onClose: c, onDiscard: m, ...n } = a), t[0] = a, t[1] = c, t[2] = l, t[3] = s, t[4] = m, t[5] = n;
  else c = t[1], l = t[2], s = t[3], m = t[4], n = t[5];
  let v = l === void 0 ? false : l, x;
  if (t[6] !== s) x = s === void 0 ? (0, import_chunk_a46xeenj.e)(import_chunk_jczdrj4v.Rm, { enterAction: "select", escapeAction: "close" }) : s, t[6] = s, t[7] = x;
  else x = t[7];
  let p = x, S = m === void 0 ? c : m, { entries: f, exitState: b } = (0, import_chunk_vs99e3g5.sW)(S);
  const d = !v;
  let H;
  if (t[8] !== d) H = { context: "Settings", isActive: d }, t[8] = d, t[9] = H;
  else H = t[9];
  (0, import_chunk_6fvsq616.In)("confirm:no", c, H);
  const y = !v;
  let r;
  if (t[10] !== y || t[11] !== n) r = (0, import_chunk_a46xeenj.e)(import_chunk_096ekw6r.L2, { navFromContent: y, ...n, color: "permission" }), t[10] = y, t[11] = n, t[12] = r;
  else r = t[12];
  let i;
  if (t[13] !== b || t[14] !== p || t[15] !== r) i = (0, import_chunk_a46xeenj.o)(import_chunk_jczdrj4v.vWr, { value: b, children: [r, p] }), t[13] = b, t[14] = p, t[15] = r, t[16] = i;
  else i = t[16];
  let K;
  if (t[17] !== f || t[18] !== i) K = (0, import_chunk_a46xeenj.e)(import_chunk_dfcadv0m.Ph, { color: "permission", children: (0, import_chunk_a46xeenj.e)(import_chunk_jczdrj4v.zi, { claimFocus: true, flexDirection: "column", bindings: f, children: i }) }), t[17] = f, t[18] = i, t[19] = K;
  else K = t[19];
  return K;
}
