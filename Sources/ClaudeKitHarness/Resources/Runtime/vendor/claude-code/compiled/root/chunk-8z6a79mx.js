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
var chunk_8z6a79mx_exports = {};
__export(chunk_8z6a79mx_exports, {
  il: () => il
});
module.exports = __toCommonJS(chunk_8z6a79mx_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
function il(D) {
  let P = (0, import_chunk_sng02qpc.k)(8), { onKeyDown: o, onPaste: t, flexDirection: s, gap: n, tabIndex: p, autoFocus: d, children: a } = D, r = s === void 0 ? "column" : s, c = p === void 0 ? 0 : p, i = d === void 0 ? true : d, u;
  if (P[0] !== i || P[1] !== a || P[2] !== r || P[3] !== n || P[4] !== o || P[5] !== t || P[6] !== c) u = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: r, gap: n, tabIndex: c, autoFocus: i, onKeyDown: o, onPaste: t, children: a }), P[0] = i, P[1] = a, P[2] = r, P[3] = n, P[4] = o, P[5] = t, P[6] = c, P[7] = u;
  else u = P[7];
  return u;
}
