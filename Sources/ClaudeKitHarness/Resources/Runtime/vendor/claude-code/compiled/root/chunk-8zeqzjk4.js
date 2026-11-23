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
var chunk_8zeqzjk4_exports = {};
__export(chunk_8zeqzjk4_exports, {
  Y1e: () => Y1e,
  cwn: () => cwn,
  h_a: () => h_a,
  m_a: () => m_a,
  q$o: () => q$o
});
module.exports = __toCommonJS(chunk_8zeqzjk4_exports);
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_c7hg08xn = require("/$bunfs/root/chunk-c7hg08xn.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_7e12xj51 = require("/$bunfs/root/chunk-7e12xj51.js");
function q$o() {
  return (0, import_chunk_a46xeenj.e)(import_chunk_c7hg08xn.At, { oneRow: true, children: "Fetching\u2026" });
}
function cwn(l) {
  let p = (0, import_chunk_sng02qpc.k)(7), { bytes: t, status: s } = l, u;
  if (p[0] !== t) u = (0, import_chunk_7e12xj51.dn)(t), p[0] = t, p[1] = u;
  else u = p[1];
  let n;
  if (p[2] !== u) n = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: u }), p[2] = u, p[3] = n;
  else n = p[3];
  const a = s !== void 0 && ` (${s})`;
  let m;
  if (p[4] !== n || p[5] !== a) m = (0, import_chunk_a46xeenj.o)(import_chunk_c7hg08xn.At, { tone: "plain", oneRow: true, children: ["Received ", n, a] }), p[4] = n, p[5] = a, p[6] = m;
  else m = p[6];
  return m;
}
function m_a(l) {
  let t = (0, import_chunk_0jve1fep.Le)(l) ? l.code : void 0;
  return typeof t !== "number" || t >= 200 && t < 300;
}
function h_a({ bytes: l, code: t, codeText: s, result: p }, u, { verbose: n }) {
  let a = (0, import_chunk_a46xeenj.e)(cwn, { bytes: l, status: `${t} ${s}` });
  if (n) return (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [a, (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: p })] });
  return a;
}
function Y1e(l) {
  let n = (0, import_chunk_sng02qpc.k)(8), { name: t, url: s, iconColor: p } = l, u = p === void 0 ? "claude" : p, a;
  if (n[0] !== u) a = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: u, children: import_chunk_xcgcdx61.Wh }), n[0] = u, n[1] = a;
  else a = n[1];
  let m;
  if (n[2] !== t || n[3] !== s) m = s ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: s, fallback: t === s ? void 0 : `${t} (${s})`, children: t }) : t, n[2] = t, n[3] = s, n[4] = m;
  else m = n[4];
  let d;
  if (n[5] !== a || n[6] !== m) d = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [a, " ", m] }), n[5] = a, n[6] = m, n[7] = d;
  else d = n[7];
  return d;
}
