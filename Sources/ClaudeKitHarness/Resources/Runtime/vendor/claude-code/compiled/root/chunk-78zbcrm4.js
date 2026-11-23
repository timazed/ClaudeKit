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
var chunk_78zbcrm4_exports = {};
__export(chunk_78zbcrm4_exports, {
  du: () => du
});
module.exports = __toCommonJS(chunk_78zbcrm4_exports);
var import_chunk_7r4ehpnw = require("/$bunfs/root/chunk-7r4ehpnw.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
function du(p) {
  let c = (0, import_chunk_sng02qpc.k)(5), { children: l, color: t, dimColor: i } = p, d;
  if (c[0] === import_chunk_w1d7ygsk.R) d = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { "aria-hidden": true, width: 2, flexShrink: 0, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: import_chunk_7r4ehpnw.xe.bullet }) }), c[0] = d;
  else d = c[0];
  let m;
  if (c[1] !== l || c[2] !== t || c[3] !== i) m = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "row", children: [d, (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexGrow: 1, flexShrink: 1, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: t, dimColor: i, children: l }) })] }), c[1] = l, c[2] = t, c[3] = i, c[4] = m;
  else m = c[4];
  return m;
}
