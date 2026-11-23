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
var chunk_hh0zpd1p_exports = {};
__export(chunk_hh0zpd1p_exports, {
  DMa: () => DMa,
  FMa: () => FMa,
  HMa: () => HMa,
  LMa: () => LMa,
  NMa: () => NMa,
  qKo: () => qKo,
  utr: () => utr
});
module.exports = __toCommonJS(chunk_hh0zpd1p_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
function HMa(a) {
  let e = a.trim(), r = (0, import_chunk_r8478wtb.Ws)(), t = (0, import_chunk_r8478wtb.Kj)(e);
  if (t !== null) return { slug: t, url: (0, import_chunk_r8478wtb.sr)({ slug: t, env: r }) };
  let n = e.toLowerCase();
  if (import_chunk_r8478wtb.yo.test(n)) return { slug: n, url: (0, import_chunk_r8478wtb.sr)({ slug: n, env: r }) };
  let o = (0, import_chunk_r8478wtb.voe)(e);
  if (o === null) return { error: "Error: --watch-artifact expects an artifact id or a claude.ai artifact URL" };
  if (o.env !== r) return { error: `Error: --watch-artifact got a ${o.env} artifact URL, but this session is signed in to ${r}` };
  return { slug: o.slug, url: (0, import_chunk_r8478wtb.sr)(o) };
}
var s = null;
function DMa(a) {
  s = a;
}
function LMa() {
  let a = s;
  return s = null, a;
}
function NMa() {
  return s;
}
function utr(a) {
  let e = [];
  for (let r = 0; r < a.length; r++) {
    let t = a[r];
    if (t === "--watch-artifact" || t === "--watch-artifact-no-autoreact") {
      r++;
      continue;
    }
    if (t.startsWith("--watch-artifact=") || t.startsWith("--watch-artifact-no-autoreact=")) continue;
    e.push(t);
  }
  return e;
}
function qKo(a, e) {
  a = a.toLowerCase();
  let r = ["--watch-artifact", "--watch-artifact-no-autoreact"], t = (0, import_chunk_f9x2f6cx.b2)(), n = [], o = false;
  for (let i = 0; i < t.length; i++) {
    let c = t[i];
    if (r.some((u) => c === u && t[i + 1]?.toLowerCase() === a || c.toLowerCase() === `${u}=${a}`)) {
      if (c.indexOf("=") === -1) i++;
      o = true;
      continue;
    }
    n.push(c);
  }
  if (o) (0, import_chunk_f9x2f6cx.Q6e)(n), (0, import_chunk_9e5mdyfk.BW)("--watch-artifact", ["--watch-artifact-no-autoreact"], null, void 0, e);
}
function FMa(a) {
  let e = (0, import_chunk_f9x2f6cx.b2)(), r;
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (n === "--watch-artifact" && e[t + 1] !== void 0) r = e[t + 1].toLowerCase();
    else if (n.startsWith("--watch-artifact=")) r = n.slice(17).toLowerCase();
  }
  if (r === void 0) return false;
  return (0, import_chunk_f9x2f6cx.Q6e)([...utr((0, import_chunk_f9x2f6cx.b2)()), "--watch-artifact-no-autoreact", r]), (0, import_chunk_9e5mdyfk.BW)("--watch-artifact-no-autoreact", ["--watch-artifact"], r, void 0, a), true;
}
