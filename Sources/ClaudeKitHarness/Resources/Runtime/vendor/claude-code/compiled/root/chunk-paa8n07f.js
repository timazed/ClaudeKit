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
var chunk_paa8n07f_exports = {};
__export(chunk_paa8n07f_exports, {
  BTt: () => BTt,
  Efn: () => Efn,
  I4: () => I4,
  Jlt: () => Jlt,
  Mj: () => Mj,
  O1: () => O1,
  SCs: () => SCs,
  SX: () => SX,
  WTt: () => WTt,
  _Al: () => _Al,
  _Cs: () => _Cs,
  g7e: () => g7e,
  gAl: () => gAl,
  gCs: () => gCs,
  h7e: () => h7e,
  hAl: () => hAl,
  izt: () => izt,
  kfn: () => kfn,
  mAl: () => mAl,
  mCo: () => mCo,
  nRr: () => nRr,
  q_: () => q_,
  qme: () => qme,
  rRr: () => rRr,
  tGn: () => tGn,
  tRr: () => tRr,
  vfn: () => vfn,
  yCs: () => yCs
});
module.exports = __toCommonJS(chunk_paa8n07f_exports);
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_path = require("path");
var import_path2 = require("path");
var import_path3 = require("path");
var import_path4 = require("path");
(0, import_chunk_adx6804h.B)();
var Jlt = ".claude-plugin-link", gCs = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ target: (0, import_chunk_adx6804h.n)().min(1).max(4096).refine((e) => (0, import_path2.isAbsolute)(e), { message: "must be an absolute path" }).refine((e) => !(0, import_chunk_z6pfqf6e.wO)(e) && !(0, import_chunk_z6pfqf6e.vd)(e), { message: "must be a local path" }).refine((e) => !(0, import_chunk_z6pfqf6e.YB)(e), { message: "must be canonical" }) })), tRr = `
[mode: link]`;
function BTt() {
  let e = (0, import_chunk_2gtmjt3y.Nl)();
  return e === null ? null : (0, import_path4.join)(e, "skills");
}
function _(e) {
  let t = BTt();
  if (t === null) return false;
  let r = (0, import_path4.relative)(t, e);
  return r !== "" && r !== ".." && !r.startsWith(`..${import_path4.sep}`) && !(0, import_path4.isAbsolute)(r);
}
function S(e) {
  let t = BTt();
  if (t === null || !_(e)) return null;
  let r = (0, import_path4.relative)(t, e).split(import_path4.sep);
  return (0, import_chunk_hkvzj051.HM)(r) && (0, import_path4.join)(t, ...r) === e ? r : null;
}
function _Cs(e) {
  let t = S(e);
  return t === null ? null : import_chunk_hkvzj051.at.userConfigDir("skills", t);
}
function mAl(e) {
  let t = S(e);
  return t === null ? null : { namespace: "userConfigDir", dir: "skills", relPath: t };
}
var O1 = ".orphaned_at", q_ = ".in_use", kfn = ".gcs-sha", I4 = ".links_materialized";
function a() {
  return (0, import_path3.join)((0, import_chunk_2gtmjt3y.Ze)(), "plugins", "cache");
}
function g(e, t) {
  let r = a();
  if (t !== r) return null;
  let i = (0, import_path3.relative)(r, e);
  if (i === "" || i === ".." || i.startsWith(`..${import_path3.sep}`) || (0, import_path3.isAbsolute)(i)) return null;
  let s = i.split(import_path3.sep);
  return (0, import_path3.join)(r, ...s) === e ? s : null;
}
function m(e) {
  return e.endsWith(".zip");
}
function qme(e, t) {
  let r = g(e, t);
  if (r === null || r.length !== 3 || !(0, import_chunk_hkvzj051.HM)(r) || m(r[2])) return null;
  let [i, s, u] = r;
  return { marketplace: i, plugin: s, version: u };
}
function hAl(e) {
  return e.namespace === "pluginCache" && e.marketplace !== void 0 && e.plugin !== void 0 && e.version !== void 0 && e.relPath === void 0;
}
function tGn(e, t) {
  let r = qme(e, t);
  return r === null ? null : { namespace: "pluginCache", ...r };
}
function gAl(e, t) {
  let r = [e.marketplace, e.plugin, e.version];
  if (t !== a() || !(0, import_chunk_hkvzj051.HM)(r) || m(e.version)) return null;
  return (0, import_path3.join)(t, ...r);
}
function A(e, t) {
  let r = g(e, t);
  if (r === null || r.length < 4 || !(0, import_chunk_hkvzj051.HM)(r) || m(r[2])) return null;
  let [i, s, u, ...y] = r;
  return import_chunk_hkvzj051.at.pluginCache(i, s, u, y);
}
function nRr(e, t) {
  return A(e, t) ?? _Cs(e);
}
function yCs(e, t) {
  return f(t) ? import_chunk_hkvzj051.at.pluginRegistry(e) : null;
}
function SCs(e, t, r) {
  return f(r) && (0, import_chunk_hkvzj051.HM)([e]) ? import_chunk_hkvzj051.at.marketplaceCache(e, t) : null;
}
function f(e) {
  return e === (0, import_path3.join)((0, import_chunk_2gtmjt3y.Ze)(), "plugins");
}
function F(e, t) {
  if (!f(t)) return null;
  let r = (0, import_path3.join)(t, "marketplaces"), i = (0, import_path3.relative)(r, e);
  if (i === "" || i === ".." || i.startsWith(`..${import_path3.sep}`) || (0, import_path3.isAbsolute)(i)) return null;
  let s = i.split(import_path3.sep);
  return (0, import_path3.join)(r, ...s) === e ? s : null;
}
function rRr(e, t) {
  let r = F(e, t);
  if (r === null || r.length < 2 || !(0, import_chunk_hkvzj051.HM)(r)) return null;
  return import_chunk_hkvzj051.at.marketplaceTree(r[0], r.slice(1));
}
function _Al(e) {
  return e === (0, import_path3.join)((0, import_chunk_2gtmjt3y.Ze)(), "plugins", "asset-cache") ? { namespace: "pluginAssetCache" } : null;
}
function mCo(e, t) {
  if (e === t) return t === a() ? { namespace: "pluginCache" } : null;
  let r = g(e, t);
  if (r === null || r.length > 2 || !(0, import_chunk_hkvzj051.HM)(r)) return null;
  let [i, s] = r;
  return s === void 0 ? { namespace: "pluginCache", marketplace: i } : { namespace: "pluginCache", marketplace: i, plugin: s };
}
var izt = /* @__PURE__ */ new Set([Jlt, q_, O1]);
function Mj(e) {
  return (0, import_chunk_z6pfqf6e.lA)(e).replace(/[. ]+$/, "");
}
function Efn(e, t) {
  let r = Mj(e);
  if (t.has(r)) return true;
  for (let i of t) if ((0, import_chunk_q7qjcthc.NM)(r, i)) return true;
  return false;
}
function vfn(e) {
  return Mj(e) === "node_modules";
}
var h7e = ".mcpb-cache", SX = `it leads into ${h7e}, which Claude Code may have overwritten when it unpacked the plugin's MCP bundles; the plugin's author needs to move it to another folder`;
function WTt(e) {
  return Mj(e) === h7e;
}
function g7e(e, t) {
  return (0, import_path.relative)(e, t).split(import_path.sep).some(WTt);
}
