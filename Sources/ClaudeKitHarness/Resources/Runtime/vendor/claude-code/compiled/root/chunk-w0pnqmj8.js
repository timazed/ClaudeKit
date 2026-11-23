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
var chunk_w0pnqmj8_exports = {};
__export(chunk_w0pnqmj8_exports, {
  CEl: () => CEl,
  EEl: () => EEl,
  Jko: () => Jko,
  TEl: () => TEl,
  W2t: () => W2t,
  kEl: () => kEl,
  vEl: () => vEl
});
module.exports = __toCommonJS(chunk_w0pnqmj8_exports);
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_43nz5n02 = require("/$bunfs/root/chunk-43nz5n02.js");
var import_chunk_kypvvv9j = require("/$bunfs/root/chunk-kypvvv9j.js");
var import_path = require("path");
var i = "anthropics", a = "anthropic", g = `github.com/${i}/${a}`;
function _(o) {
  return (0, import_chunk_w5s307zm.dft)(o) === g;
}
function N(o) {
  let e = "elsewhere";
  for (let n = (0, import_chunk_w5s307zm.dr)(o); n !== null; ) {
    let t = (0, import_chunk_w5s307zm.Mi)(n);
    if (t !== null && _(t)) return "monorepo";
    if (t !== null && (0, import_chunk_w5s307zm.Fna)(t)) e = "undetermined";
    let s = (0, import_path.dirname)(n), p = s === n ? null : (0, import_chunk_w5s307zm.dr)(s);
    if (p !== null && p.length >= n.length) {
      e = "undetermined";
      break;
    }
    n = p;
  }
  let r = v(o).verdict;
  return r === "elsewhere" ? e : r;
}
function v(o) {
  return { verdict: "elsewhere" };
}
function kEl(o) {
  return (0, import_chunk_w5s307zm.m6e)((0, import_chunk_w5s307zm.Ju)().monorepoVerdictByDir, o, N);
}
function w(o) {
  return o.replace(/(?:%[0-9a-f]{2})+/gi, (e) => {
    try {
      return decodeURIComponent(e);
    } catch {
      return e.replace(/%(..)/g, (r, n) => String.fromCharCode(parseInt(n, 16)));
    }
  });
}
var R = new RegExp(`${i}[^]*${a}`), y = new RegExp(`^${a}(?:\\.git)*$`);
function c(o) {
  let e = w(o).toLowerCase(), r = e.split(/[^a-z0-9._-]+/).filter((n) => n !== "" && n !== ".");
  return r.includes("..") ? R.test(e) : r.some((n, t) => n === i && y.test(r[t + 1] ?? ""));
}
function u(o) {
  let e = [], r = false;
  return (0, import_chunk_kypvvv9j.ihn)(o, { entry: (n, t, s) => {
    if (/^(?:push)?insteadof$/.test(t)) r = true;
    if (s !== void 0) e.push(s);
  }, malformed: () => {
    r = true;
  } }, { maxLines: 1 / 0 }), { values: e, provesNothing: r };
}
function d(o) {
  return u(o).values.some(c) || o.split(`
`).some((e) => c(e) || e.includes("\\") && c(e.replace(/\\(.)/g, "$1")));
}
var O = 1048576;
function E(o) {
  let e = (0, import_chunk_w5s307zm._0s)(o, O);
  if (e.ok) return d(e.text) ? "names" : null;
  return e.cause === "oversize" || e.cause === "nul_byte" || e.cause === "not_a_file" ? "unfit" : null;
}
function EEl(o) {
  return E(o) !== null;
}
function M(o) {
  let e = (0, import_chunk_w5s307zm.$na)(o);
  return e !== null && !u(e).provesNothing && !d(e);
}
function vEl(o) {
  return (0, import_chunk_w5s307zm.m6e)((0, import_chunk_w5s307zm.Ju)().monorepoRuledOutByRoot, o, M);
}
function Jko(o) {
  return false;
}
function TEl() {
  return;
}
function CEl(o, e) {
  return false;
}
function W2t(o) {
  return (0, import_chunk_43nz5n02.Ro)(o.host) && o.owner.toLowerCase() === i && o.name.toLowerCase() === a;
}
