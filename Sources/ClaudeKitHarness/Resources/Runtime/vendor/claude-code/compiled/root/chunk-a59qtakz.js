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
var chunk_a59qtakz_exports = {};
__export(chunk_a59qtakz_exports, {
  sEa: () => sEa,
  yMt: () => yMt
});
module.exports = __toCommonJS(chunk_a59qtakz_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_npsm5tcc = require("/$bunfs/root/chunk-npsm5tcc.js");
var import_chunk_c0frdpwg = require("/$bunfs/root/chunk-c0frdpwg.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_bq31aqv6 = require("/$bunfs/root/chunk-bq31aqv6.js");
var import_chunk_tjdnrbvx = require("/$bunfs/root/chunk-tjdnrbvx.js");
var import_chunk_ghnve1xk = require("/$bunfs/root/chunk-ghnve1xk.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
function sEa(n) {
  return (0, import_chunk_865at33z.b)("tengu_ccr_external_event_record", false) ? n : void 0;
}
var B = new RegExp(`[${import_chunk_hr2stdq7.J0.open}]\\\\?`, "gu");
function S(n) {
  return n.replace(B, "<");
}
function L(n, _, h) {
  let s = _.flat(), p = (0, import_chunk_tjdnrbvx.I2t)(n), i = (0, import_chunk_bq31aqv6.D0n)(n, s, p), o = new Set(i.map((r) => n.slice(r.from, r.to))), a = (r) => {
    let m = p(r), d = m(0);
    for (let c of i) {
      if (d !== -1 && d < c.from) d = m(c.from);
      if (d === -1) return false;
      if (d + r.length <= c.to) return true;
    }
    return false;
  };
  if (_.some((r) => !r.some((m) => o.has(m)) && !r.some(a))) (0, import_chunk_cqa9hrgx.l)("sdk_pasted_content", "inline_paste_not_found");
  let f = (0, import_chunk_bzyb60p0.CTe)();
  return (0, import_chunk_bq31aqv6.zel)(n, (0, import_chunk_bq31aqv6.Gel)(i, (0, import_chunk_bq31aqv6.jel)(n, (0, import_chunk_bq31aqv6.Svi)([...i, ...(0, import_chunk_bq31aqv6.Wel)(n, s, p)]), h)), (r) => ({ opener: (0, import_chunk_ghnve1xk.Gft)(f), body: (0, import_chunk_bzyb60p0.dye)(r), closer: (0, import_chunk_ghnve1xk.P4t)(f) }), import_chunk_bzyb60p0.dye);
}
function yMt(n, _, h) {
  let s = n ?? "", { texts: p, problem: i } = (0, import_chunk_npsm5tcc.Tps)(_), o = (0, import_chunk_npsm5tcc.idl)(h);
  if (i !== void 0) (0, import_chunk_cqa9hrgx.l)("sdk_pasted_content", i);
  if (o.problem !== void 0) (0, import_chunk_cqa9hrgx.l)("sdk_pasted_content", o.problem);
  if (p.length === 0 && o.texts.length === 0) return s;
  let a = (0, import_chunk_tjdnrbvx.qP)();
  if (i === void 0 && o.problem === void 0) (0, import_chunk_cqa9hrgx.u)("sdk_pasted_content", { tagged: a, ...o.texts.length > 0 && { inline: true } });
  if (p.length === 0 && !a) return s;
  let f = typeof s === "string" ? [] : s.flatMap((t) => t.type === "text" ? [t.text] : []), r = new Set(f.slice(0, -1).map((t) => S(t.trim()))), m, d = (t) => t === "" || (m ??= (0, import_chunk_tjdnrbvx.I2t)(f.at(-1) ?? ""))(t)(0) !== -1, c = /* @__PURE__ */ new Map(), y = (t) => {
    let e = c.get(t) ?? (0, import_chunk_4smdap7r.M)([t, (0, import_chunk_865at33z.bPr)(t), (0, import_chunk_c0frdpwg.Zte)(t)]);
    return c.set(t, e), e;
  }, C = (t) => (0, import_chunk_4smdap7r.M)([t, (0, import_chunk_npsm5tcc.hbe)(t).trim()]).flatMap(y), I = o.texts.map((t) => t.trim()).filter((t) => t.length >= import_chunk_bzyb60p0.j0t && (!C(t).some((e) => r.has(S(e))) || C(t).some(d))).map((t) => (0, import_chunk_4smdap7r.M)([t, (0, import_chunk_npsm5tcc.hbe)(`x${t}`).slice(1).trim(), (0, import_chunk_npsm5tcc.hbe)(`${t}x`).slice(0, -1).trim(), (0, import_chunk_npsm5tcc.hbe)(t).trim()].flatMap(y)).filter((e) => e.length >= import_chunk_bzyb60p0.j0t)), k = (t) => !a ? t : Array.isArray(h) ? L(t, I, o.texts.map((e) => e.trim()).filter((e) => e !== "" && e.length < import_chunk_bzyb60p0.j0t)) : (0, import_chunk_bzyb60p0.dye)(t), P = p.map((t) => a ? (0, import_chunk_bzyb60p0.cye)(t) : `

${t}`).join("");
  if (typeof s === "string") return (0, import_chunk_c0frdpwg.Zte)(k(s) + P);
  let x = s.findLastIndex((t) => t.type === "text"), T = new Set(o.texts.flatMap((t) => {
    let e = t.trim();
    return C(e).filter((w) => e.startsWith(">") ? w.startsWith(">") : w.length >= import_chunk_bzyb60p0.j0t).map(S);
  })), A = (t) => a && T.has(S(t.trim())), g = s.map((t, e) => t.type !== "text" ? t : A(t.text) ? { ...t, text: (0, import_chunk_bzyb60p0.cye)(t.text.trim()) } : e === x ? { ...t, text: k(t.text) } : a ? { ...t, text: (0, import_chunk_bzyb60p0.dye)(t.text) } : t), E = g[x];
  return (0, import_chunk_c0frdpwg.Zte)(E?.type !== "text" ? P === "" ? g : [...g, { type: "text", text: P }] : [...g.slice(0, x), { ...E, text: E.text + P }, ...g.slice(x + 1)]);
}
