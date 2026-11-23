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
var chunk_2gtmjt3y_exports = {};
__export(chunk_2gtmjt3y_exports, {
  AFs: () => AFs,
  Ch: () => Ch,
  Cse: () => Cse,
  IPt: () => IPt,
  J3n: () => J3n,
  KOe: () => KOe,
  Nl: () => Nl,
  OPt: () => OPt,
  RFs: () => RFs,
  Rca: () => Rca,
  T2: () => T2,
  X3n: () => X3n,
  Xn: () => Xn,
  Xyn: () => Xyn,
  Y3n: () => Y3n,
  YOe: () => YOe,
  ZA: () => ZA,
  ZEe: () => ZEe,
  Ze: () => Ze,
  _3t: () => _3t,
  as: () => as,
  eve: () => eve,
  fjl: () => fjl,
  g3t: () => g3t,
  gVe: () => gVe,
  h3t: () => h3t,
  hjl: () => hjl,
  mjl: () => mjl,
  pjl: () => pjl,
  q3n: () => q3n,
  qOe: () => qOe,
  tve: () => tve,
  ujl: () => ujl,
  vk: () => vk,
  vpt: () => vpt,
  xFs: () => xFs,
  xca: () => xca,
  zK: () => zK,
  zge: () => zge
});
module.exports = __toCommonJS(chunk_2gtmjt3y_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_os = require("os");
var import_path = require("path");
var g = /^[a-z]{2,}(?:-[a-z0-9]+){0,4}$/i;
function m(e) {
  return !!e && g.test(e);
}
function ZEe(e) {
  return m(e) ? e : void 0;
}
var N = /^[+-]?(\d+(\.\d*)?|\.\d+)[eE][+-]?\d+$/, E = /^[+-]?\d{1,3}([_,\u00A0\u202F ])\d{3}(?:\1\d{3})*$/, c = /[_,\u00A0\u202F ]/g;
function Rca(e) {
  if (e.length <= 32) {
    if (N.test(e)) {
      let n = Number(e);
      return Number.isInteger(n) ? n : NaN;
    }
    if (E.test(e)) return parseInt(e.replace(c, ""), 10);
  }
  return;
}
function Ch(e) {
  let n = String(e).trim();
  return Rca(n) ?? parseInt(n, 10);
}
function Cse(e) {
  let n = Number(e);
  if (!Number.isNaN(n)) return n;
  let r = String(e).trim();
  return r.length <= 32 && E.test(r) ? parseInt(r.replace(c, ""), 10) : NaN;
}
var AFs = /^[a-z]+-\d/;
function gVe(e, n) {
  let r = /[-_]\d$/.test(n);
  for (let t = e.indexOf(n); t !== -1; t = e.indexOf(n, t + 1)) if (!r || !/^\d{3}/.test(e.slice(t + n.length))) return true;
  return false;
}
function zge(e, n) {
  let r = e.toLowerCase();
  for (let t of n) if (typeof t === "string" && t.length > 0 && gVe(r, t.toLowerCase())) return true;
  return false;
}
var vpt = [["claude-3-5-sonnet", "VERTEX_REGION_CLAUDE_3_5_SONNET"], ["claude-3-7-sonnet", "VERTEX_REGION_CLAUDE_3_7_SONNET"], ["claude-sonnet-4-5", "VERTEX_REGION_CLAUDE_4_5_SONNET"], ["claude-sonnet-4-6", "VERTEX_REGION_CLAUDE_4_6_SONNET"], ["claude-sonnet-5-5", "VERTEX_REGION_CLAUDE_5_5_SONNET"], ["claude-3-5-haiku", "VERTEX_REGION_CLAUDE_3_5_HAIKU"], ["claude-fable-5-1", "VERTEX_REGION_CLAUDE_FABLE_5_1"], ["claude-fable-5-2", "VERTEX_REGION_CLAUDE_FABLE_5_2"], ["claude-haiku-4-5", "VERTEX_REGION_CLAUDE_HAIKU_4_5"], ["claude-haiku-5-5", "VERTEX_REGION_CLAUDE_HAIKU_5_5"], ["claude-opus-4-1", "VERTEX_REGION_CLAUDE_4_1_OPUS"], ["claude-opus-4-5", "VERTEX_REGION_CLAUDE_4_5_OPUS"], ["claude-opus-4-6", "VERTEX_REGION_CLAUDE_4_6_OPUS"], ["claude-opus-4-7", "VERTEX_REGION_CLAUDE_4_7_OPUS"], ["claude-opus-4-8", "VERTEX_REGION_CLAUDE_4_8_OPUS"], ["claude-opus-5-5", "VERTEX_REGION_CLAUDE_5_5_OPUS"], ["claude-sonnet-4", "VERTEX_REGION_CLAUDE_4_0_SONNET"], ["claude-sonnet-5", "VERTEX_REGION_CLAUDE_5_SONNET"], ["claude-fable-5", "VERTEX_REGION_CLAUDE_FABLE_5"], ["claude-opus-4", "VERTEX_REGION_CLAUDE_4_0_OPUS"], ["claude-opus-5", "VERTEX_REGION_CLAUDE_5_OPUS"]];
function OPt() {
  return process.env.CLAUDE_CONFIG_DIR;
}
function KOe(e) {
  let n = e === "CLAUDE_CONFIG_DIR" ? OPt() : process.env[e];
  if (n === void 0) return;
  let r = String(n).trim();
  return r ? r : void 0;
}
function RFs(e) {
  return (0, import_chunk_69qhefwa.Ne)(process.env[e]);
}
function _(e, n) {
  let r = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (o) => o.clear());
  function t() {
    let o = n(), u = r.get(o);
    if (u) return u.value;
    let a = e();
    return r.set(o, { value: a }), a;
  }
  return Object.assign(t, { cache: r });
}
var Ze = _(() => (OPt() ?? (0, import_path.join)((0, import_os.homedir)(), ".claude")).normalize("NFC"), OPt);
function Nl() {
  return (0, import_chunk_psw95195.rve)() ? null : Ze();
}
function qOe(e) {
  let n = Nl();
  return n === null || e === null ? n === e : (0, import_path.resolve)(n) === (0, import_path.resolve)(e);
}
function IPt() {
  return (0, import_path.join)(Ze(), "teams");
}
function p() {
  return process.env.CLAUDE_CODE_PROJECT_DIR_NAME;
}
var T = /^[A-Za-z0-9_-]{1,64}$/, C = /^(?:con|prn|aux|nul|com[0-9]|lpt[0-9])$/i;
function xca(e) {
  if (!e || !T.test(e) || C.test(e)) return;
  return e;
}
function I() {
  return `${(0, import_chunk_psw95195.rve)()}\0${OPt() ?? ""}\0${p() ?? ""}`;
}
var q3n = _(() => OPt() || (0, import_chunk_psw95195.rve)() ? xca(p()) : void 0, I);
function eve(e) {
  let n = Nl();
  if (n === null) return false;
  if ((0, import_path.resolve)(e) === (0, import_path.resolve)(n)) return true;
  return d(e) === d(n);
}
function d(e) {
  let n = (0, import_path.resolve)(e), r = (0, import_path.dirname)(n), t = (0, import_chunk_z6pfqf6e.zh)(r) ?? r;
  return (0, import_chunk_z6pfqf6e.pn)((0, import_path.join)(t, (0, import_path.basename)(n)));
}
function Y3n(e) {
  let n = process.env.NODE_OPTIONS;
  if (!n) return false;
  return n.split(/\s+/).includes(e);
}
function xFs(e, n) {
  if (e === void 0) return n;
  let r = Ch(e);
  return Number.isNaN(r) ? n : r;
}
function ujl(e) {
  if (e !== void 0) return e;
  let n = process.env.CLAUDE_CODE_MAX_TURNS?.trim();
  if (!n) return;
  let r = Cse(n);
  if (!Number.isInteger(r) || r <= 0) throw Error(`CLAUDE_CODE_MAX_TURNS must be a positive integer; got "${n}"`);
  return r;
}
function fjl(e) {
  let n = Number(e);
  return isNaN(n) || n <= 0 ? void 0 : n;
}
function h3t(e, n = process.argv) {
  let r = n.indexOf(e);
  if (r === -1) return false;
  let t = n.indexOf("--");
  return t === -1 || r < t;
}
function Xn() {
  return (0, import_chunk_69qhefwa.Ne)(process.env.CLAUDE_CODE_SIMPLE) || h3t("--bare");
}
function as() {
  return (0, import_chunk_69qhefwa.Ne)(process.env.CLAUDE_CODE_SAFE_MODE) || h3t("--safe-mode") || false;
}
function YOe() {
  return (0, import_chunk_69qhefwa.Ne)(process.env.CLAUDE_CODE_RESTRICTED);
}
function f(e) {
  return process.env.CLAUDE_CODE_SESSION_KIND === "bg" ? "run /stop, then claude --resume from your shell" : `restart without ${e}`;
}
function vk() {
  return h3t("--safe-mode") ? f("--safe-mode") : "unset CLAUDE_CODE_SAFE_MODE";
}
function g3t() {
  return h3t("--bare") ? f("--bare") : "unset CLAUDE_CODE_SIMPLE";
}
function _3t() {
  return (0, import_chunk_69qhefwa.Ne)(process.env.CLAUDE_CODE_SUPERVISED);
}
function pjl(e) {
  let n = {};
  if (e) for (let r of e) {
    let [t, ...o] = r.split("=");
    if (!t || o.length === 0) throw Error(`Invalid environment variable format: ${r}, environment variables should be added as: -e KEY1=value1 -e KEY2=value2`);
    n[t] = o.join("=");
  }
  return n;
}
function X3n() {
  return ZEe(process.env.CLOUD_ML_REGION?.trim()) || "us-east5";
}
function Xyn(e) {
  switch (e) {
    case "global":
      return "https://aiplatform.googleapis.com";
    case "us":
    case "eu":
      return `https://aiplatform.${e}.rep.googleapis.com`;
    default:
      return `https://${e}-aiplatform.googleapis.com`;
  }
}
function J3n() {
  return (0, import_chunk_69qhefwa.Ne)(process.env.CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR);
}
function zK() {
  if ((0, import_chunk_69qhefwa.Ne)(process.env.CLAUDE_CODE_DISABLE_FEATURE_FLAGS)) return "CLAUDE_CODE_DISABLE_FEATURE_FLAGS";
  if ((0, import_chunk_69qhefwa.Ne)(process.env.DISABLE_GROWTHBOOK)) return "DISABLE_GROWTHBOOK";
  return null;
}
function ZA() {
  return false;
}
function T2() {
  return false;
}
function mjl() {
  return { namespace: void 0, cluster: void 0 };
}
function tve(e) {
  let n = l(e);
  if (n) return ZEe(process.env[n[1]]?.trim()) || X3n();
  return X3n();
}
function l(e) {
  return e ? vpt.find(([n]) => e.startsWith(n) && gVe(e, n)) : void 0;
}
function hjl(e) {
  return l(e)?.[1] ?? "CLOUD_ML_REGION";
}
