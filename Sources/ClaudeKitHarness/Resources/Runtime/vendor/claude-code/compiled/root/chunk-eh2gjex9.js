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
var chunk_eh2gjex9_exports = {};
__export(chunk_eh2gjex9_exports, {
  _va: () => _va,
  fva: () => fva,
  gva: () => gva,
  hva: () => hva,
  mva: () => mva,
  pva: () => pva,
  zGr: () => zGr
});
module.exports = __toCommonJS(chunk_eh2gjex9_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_4mh8nmh5 = require("/$bunfs/root/chunk-4mh8nmh5.js");
var import_chunk_y8kqnbqt = require("/$bunfs/root/chunk-y8kqnbqt.js");
var import_chunk_4xgvg9z4 = require("/$bunfs/root/chunk-4xgvg9z4.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_crypto = require("crypto");
function fva(e) {
  (0, import_chunk_qdcbcsg7.mt)().skippedDynamicServers.push(...e);
}
function pva() {
  return (0, import_chunk_qdcbcsg7.mt)().skippedDynamicServers;
}
var k = /^v1:([1-9][0-9]{0,8}):([0-9a-f]{64})$/, A = /^[\s\u001c-\u001f\u0085]+$/, S = 1024;
function E(e, t) {
  if (!import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) return { outcome: "not_remote" };
  if (!t) return { outcome: "no_append" };
  let n = k.exec(e);
  if (!n) return { outcome: "bad_designator" };
  let o = Number(n[1]), r = Buffer.from(t, "utf8"), c = r.subarray(0, o);
  if (r.length < o + 2 || r[o] !== 10 || r[o + 1] !== 10 || (0, import_crypto.createHash)("sha256").update(c).digest("hex") !== n[2]) return { outcome: "no_match" };
  let u = c.toString("utf8");
  if (!t.startsWith(`${u}

`)) return { outcome: "no_match" };
  return { outcome: "verified_at_startup", head: u };
}
function mva(e) {
  try {
    return O(import_chunk_c203g5kd.s.CLAUDE_CODE_APPEND_PROMPT_HEAD, e);
  } finally {
    import_chunk_c203g5kd.s.unset("CLAUDE_CODE_APPEND_PROMPT_HEAD");
  }
}
function O(e, t) {
  if (!e) return;
  try {
    let { outcome: n, head: o } = E(e, t);
    return (0, import_chunk_y53wbr8a.a)("tengu_append_head_designator", { outcome: (0, import_chunk_78g0060s.f)(n), appendHeadBytes: o === void 0 ? 0 : Buffer.byteLength(o, "utf8") }), o;
  } catch (n) {
    (0, import_chunk_k449cc64.i)(n);
    return;
  }
}
function hva(e, t, n, o) {
  if (!n) return;
  try {
    let r = B(e, t, n, o);
    return (0, import_chunk_y53wbr8a.a)("tengu_append_head_render", { outcome: (0, import_chunk_78g0060s.f)(r.outcome), appendHeadBytes: Buffer.byteLength(n, "utf8") }), r.outcome === "moved" ? { base: r.base, append: r.append } : void 0;
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r);
    return;
  }
}
function B(e, t, n, o) {
  if (!o) return { outcome: "no_cache_scope" };
  if (!t) return { outcome: "no_append" };
  let r = e.indexOf(import_chunk_xcgcdx61.bD);
  if (r === -1) return { outcome: "no_boundary" };
  let c = t.indexOf(n), u = c + n.length;
  if (c === -1 || t.indexOf(n, c + 1) !== -1 || !t.startsWith(`

`, u) || c !== 0 && (c < 2 || t.slice(c - 2, c) !== `

`)) return { outcome: "head_not_found" };
  let p = t.slice(0, c) + t.slice(u + 2), m = e.slice(0, r), y = e.slice(r + 1), g = d([...m, n]), l = d([...y, p]);
  if ([n, p, t, g, l, d([...m, n, ...y, p]), d(m), d([...y, t]), d([...m, ...y, t])].some(v)) return { outcome: "own_block_text" };
  if ([p, g, l].some((h) => A.test(h))) return { outcome: "blank_text" };
  if (g.length <= 2 * S && Array.from(g).length <= S) return { outcome: "short_block" };
  return { outcome: "moved", base: (0, import_chunk_4mh8nmh5.ebr)(e, [["shared", n]], o), append: p };
}
function v(e) {
  return e === import_chunk_xcgcdx61.bD || (0, import_chunk_4mh8nmh5.ngo)(e) || (0, import_chunk_4xgvg9z4.I7)({ text: e });
}
function d(e) {
  return e.filter((t) => t && !v(t)).join(`

`);
}
function C() {
  return !import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_PROACTIVITY && (0, import_chunk_865at33z.b)("tengu_proactivity_selector", true);
}
function gva(e = import_chunk_y8kqnbqt.OP, t, n) {
  return (0, import_chunk_f9x2f6cx.JNs)(false), () => {
  };
}
function zGr(e) {
  {
    let t = () => e && C() && ((0, import_chunk_f9x2f6cx.Se)() || !(0, import_chunk_4vsz8a99.LRe)());
    (0, import_chunk_f9x2f6cx.JNs)(t());
    let n = e ? (0, import_chunk_865at33z.ys)(() => {
      (0, import_chunk_f9x2f6cx.Yla)(t());
    }) : () => {
    };
    return (0, import_chunk_f9x2f6cx.Xla)(n), n;
  }
  return () => {
  };
}
function _va() {
  if ((0, import_chunk_f9x2f6cx.Se)() || !(0, import_chunk_4vsz8a99.LRe)()) return zGr(true);
  return () => {
  };
}
