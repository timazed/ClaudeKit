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
var chunk_ata1yp21_exports = {};
__export(chunk_ata1yp21_exports, {
  IYs: () => IYs,
  nIa: () => nIa
});
module.exports = __toCommonJS(chunk_ata1yp21_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var y = ["Memory", "auto memory"];
class S {
  latest;
  lastBuilt;
  logged = false;
}
var x = new import_chunk_pzzqg6s3.ze(() => new S());
function p() {
  return (0, import_chunk_f9x2f6cx.en)().records(void 0).flatMap(({ implicit: s, touched: e }) => s === true && e?.kind === "memory" ? [e.id] : []);
}
function g(s, e, o) {
  let t = (0, import_chunk_p1ewvgeh.d2e)();
  if (t === null || !(0, import_chunk_p1ewvgeh.mdn)()) return false;
  let n = p(), d = [...import_chunk_p1ewvgeh.B$i.of(s.host).values()], c = d.length === (0, import_chunk_4smdap7r.U)(t, (r) => r.promptIndex !== void 0) && d.every((r) => n.includes(r)), a = e.lastBuilt !== void 0 && e.lastBuilt.texts.includes(o.text) && e.lastBuilt.memoryIds.every((r) => n.includes(r)), f = (0, import_chunk_f9x2f6cx.en)().isIncomplete(void 0);
  return (c || a || f) && (0, import_chunk_865at33z.b)("tengu_melodic_mitten", true) !== false;
}
function nIa(s, e, o) {
  try {
    let t = x.of(s), n = o?.find((m) => y.includes(m.name)), d = n !== void 0 && g(s, t, n), c = p().length, a = performance.now(), f = e.then((m) => {
      if (t.lastBuilt = { texts: Object.values(m), memoryIds: p() }, d && !t.logged) t.logged = true, (0, import_chunk_cqa9hrgx.u)("memory_section_stand_in", { count: c, duration_ms: Math.round(performance.now() - a) });
      return m;
    }).catch((m) => {
      if (d) (0, import_chunk_k449cc64.i)(m), (0, import_chunk_cqa9hrgx.l)("memory_section_stand_in", "build_failed");
      return;
    }), r = n ?? t.latest?.shown;
    if (r !== void 0) t.latest = { shown: r, build: f };
    return d ? Promise.resolve({ [n.name]: n.text }) : e;
  } catch (t) {
    return (0, import_chunk_k449cc64.i)(t), e;
  }
}
function IYs(s, e) {
  let o = x.peek(s)?.latest;
  if (o === void 0 || e[o.shown.name] !== o.shown.text) return;
  return o.build.then((t) => t === void 0 ? e : Object.fromEntries(Object.entries(e).flatMap((n) => n[0] === o.shown.name ? Object.entries(t) : [n])));
}
