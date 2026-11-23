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
var chunk_kjd9cbj9_exports = {};
__export(chunk_kjd9cbj9_exports, {
  $Go: () => $Go,
  Kqs: () => Kqs,
  fQn: () => fQn,
  qqs: () => qqs,
  r6r: () => r6r,
  rvn: () => rvn,
  uQn: () => uQn
});
module.exports = __toCommonJS(chunk_kjd9cbj9_exports);
var import_chunk_cee6q0wn = require("/$bunfs/root/chunk-cee6q0wn.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_4x1jja6d = require("/$bunfs/root/chunk-4x1jja6d.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_d775ds6c = require("/$bunfs/root/chunk-d775ds6c.js");
var import_chunk_1hg0ytx8 = require("/$bunfs/root/chunk-1hg0ytx8.js");
var import_chunk_qnq7dhb5 = require("/$bunfs/root/chunk-qnq7dhb5.js");
var import_chunk_9jr493jm = require("/$bunfs/root/chunk-9jr493jm.js");
var import_chunk_0canfdjs = require("/$bunfs/root/chunk-0canfdjs.js");
var import_chunk_ze4kt7fs = require("/$bunfs/root/chunk-ze4kt7fs.js");
var import_chunk_cvv9kfq3 = require("/$bunfs/root/chunk-cvv9kfq3.js");
var import_chunk_2hdy50wd = require("/$bunfs/root/chunk-2hdy50wd.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
function $Go(o, t = o) {
  let n = !(0, import_chunk_2hdy50wd.Xf)() && (0, import_chunk_d775ds6c.gpe)() && t.some((e) => e.mcpInfo?.serverName === import_chunk_ze4kt7fs.xG && e.mcpInfo.toolName === import_chunk_hn3cwwzt.ke);
  return (0, import_chunk_ze4kt7fs.Dul)((0, import_chunk_ze4kt7fs.Hul)(o)).filter((e) => !n || e.mcpInfo?.serverName !== import_chunk_ze4kt7fs.xG || e.mcpInfo.toolName !== import_chunk_ze4kt7fs.Mul);
}
var c = /* @__PURE__ */ new Set([import_chunk_4x1jja6d.Ac, import_chunk_cee6q0wn.Yd]);
function Kqs(o, t) {
  if (t.length === 0) return o;
  let n = t.map((i) => [i, (0, import_chunk_px0hhsq7.Rr)(i)]), e = o.filter((i) => !n.some(([m, r]) => (0, import_chunk_px0hhsq7.Bu)(i, m, r)));
  return e.length === o.length ? o : e;
}
function f(o) {
  return o.mcpInfo?.cliOwned === true && o.mcpInfo.serverName === import_chunk_epy4sc29.Ll;
}
var a = require("/$bunfs/root/chunk-cc0f961n.js");
function r6r() {
  return (process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS ?? "").split(",").map((o) => o.trim()).filter(Boolean);
}
function qqs(o, t = r6r()) {
  if ((0, import_chunk_0canfdjs.p8e)(o) || import_chunk_qnq7dhb5.Gvi.includes(o.name)) return true;
  let n = (0, import_chunk_px0hhsq7.Rr)(o.name);
  return t.some((e) => e.startsWith(n));
}
function rvn(o, t = () => false) {
  let n = import_chunk_c203g5kd.s.CLAUDE_CODE_BRIEF, e = new Set(r6r()), i = (0, import_chunk_qnq7dhb5.hhr)(), m = o.some(import_chunk_0canfdjs.Bin);
  return o.filter((r) => import_chunk_qnq7dhb5.ydo.has(r.name) || i && (0, import_chunk_4vsz8a99.gt)(r, import_chunk_hn3cwwzt.ke) && !(0, import_chunk_cvv9kfq3.qf)(r) || (0, import_chunk_qnq7dhb5.Ztl)(r.name) || f(r) || (0, import_chunk_0canfdjs.Bin)(r) || n && c.has(r.name) || (0, import_chunk_4vsz8a99.dv)(r, e) || !m && t(r));
}
function uQn(o, t, n, e, i) {
  let [m, r] = (0, import_chunk_6mfepmbb.Wl)($Go((0, import_chunk_4smdap7r.bT)((0, import_chunk_1hg0ytx8.Uot)([...o, ...t]), (l) => l.name), e), (l) => (0, import_chunk_cvv9kfq3.qf)(l) || (0, import_chunk_cvv9kfq3.m0)(l)), p = [...(0, import_chunk_9jr493jm.s6r)(r).sort(import_chunk_4vsz8a99.gme), ...(0, import_chunk_9jr493jm.o6r)(m, e ?? m).sort(import_chunk_4vsz8a99.gme)];
  if (a.isCoordinatorMode()) return rvn(p, i);
  return p;
}
function fQn(o, t) {
  let n = o.length === 1 ? o[0] : void 0;
  if (n && (0, import_chunk_ht27b0vz.QSl)(t, n)) return [];
  return o;
}
