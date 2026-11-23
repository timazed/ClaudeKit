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
var chunk_dfcadv0m_exports = {};
__export(chunk_dfcadv0m_exports, {
  Fwn: () => Fwn,
  IF: () => IF,
  Ph: () => Ph,
  __e: () => __e,
  wS: () => wS
});
module.exports = __toCommonJS(chunk_dfcadv0m_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_drb2187g = require("/$bunfs/root/chunk-drb2187g.js");
var import_chunk_5tb3z575 = require("/$bunfs/root/chunk-5tb3z575.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
var wS = 2, IF = 0, __e = 2, Fwn = (0, import_chunk_bs4h6795.an)(false);
function Ph(X) {
  let i = (0, import_chunk_sng02qpc.k)(19), { children: s, color: f, insetX: m } = X, R = (0, import_chunk_bs4h6795.be)(Fwn);
  if ((0, import_chunk_6n6exvyx.rl)() || R) {
    const t2 = m ?? IF;
    const r2 = 2 * (m ?? IF);
    let n2;
    if (i[0] !== s || i[1] !== r2) n2 = (0, import_chunk_a46xeenj.e)(import_chunk_drb2187g.FD, { count: r2, children: s }), i[0] = s, i[1] = r2, i[2] = n2;
    else n2 = i[2];
    let c2;
    if (i[3] !== t2 || i[4] !== n2) c2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", paddingX: t2, flexShrink: 0, children: n2 }), i[3] = t2, i[4] = n2, i[5] = c2;
    else c2 = i[5];
    return c2;
  }
  let t;
  if (i[6] !== f) t = (0, import_chunk_a46xeenj.e)(import_chunk_5tb3z575.nm, { color: f }), i[6] = f, i[7] = t;
  else t = i[7];
  const r = m ?? wS, n = 2 * (m ?? wS);
  let c;
  if (i[8] !== s) c = (0, import_chunk_a46xeenj.e)(Fwn, { value: true, children: s }), i[8] = s, i[9] = c;
  else c = i[9];
  let l;
  if (i[10] !== n || i[11] !== c) l = (0, import_chunk_a46xeenj.e)(import_chunk_drb2187g.FD, { count: n, children: c }), i[10] = n, i[11] = c, i[12] = l;
  else l = i[12];
  let a;
  if (i[13] !== r || i[14] !== l) a = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", paddingX: r, children: l }), i[13] = r, i[14] = l, i[15] = a;
  else a = i[15];
  let u;
  if (i[16] !== t || i[17] !== a) u = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", paddingTop: 1, children: [t, a] }), i[16] = t, i[17] = a, i[18] = u;
  else u = i[18];
  return u;
}
