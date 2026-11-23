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
var chunk_jc9v3hv0_exports = {};
__export(chunk_jc9v3hv0_exports, {
  B_e: () => B_e,
  FGl: () => FGl,
  G7l: () => G7l,
  I7t: () => I7t,
  Jet: () => Jet,
  K7l: () => K7l,
  Qve: () => Qve,
  UXs: () => UXs,
  V7l: () => V7l,
  WHt: () => WHt,
  WTn: () => WTn,
  Xet: () => Xet,
  cMe: () => cMe,
  iq: () => iq,
  j7l: () => j7l,
  jTn: () => jTn,
  oqo: () => oqo,
  rqo: () => rqo,
  z7l: () => z7l
});
module.exports = __toCommonJS(chunk_jc9v3hv0_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_1ek4hhs6 = require("/$bunfs/root/chunk-1ek4hhs6.js");
var import_chunk_d3vfy4gs = require("/$bunfs/root/chunk-d3vfy4gs.js");
var import_chunk_mxhw2w5n = require("/$bunfs/root/chunk-mxhw2w5n.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_zsz02y6d = require("/$bunfs/root/chunk-zsz02y6d.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var WTn = `${import_chunk_k449cc64.yoa}
<${import_chunk_k449cc64.Cce}>
`, jTn = `
</${import_chunk_k449cc64.Cce}>

${import_chunk_k449cc64.Soa}`, f = { enveloped: false }, l = 256;
function u() {
  return (0, import_chunk_0rkwgmhx.v0)() ? (0, import_chunk_0rkwgmhx.se)().savedArtifactCopies : void 0;
}
function S(e) {
  let n = (0, import_chunk_cg8dqz0a.x)();
  return n === "macos" || n === "windows" ? (0, import_chunk_p1ewvgeh.Yo)(e) : e;
}
async function F(e) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return e;
  let n = [];
  for (let t = e; ; t = (0, import_path.dirname)(t)) {
    let r = await (0, import_promises.realpath)(t).catch(() => {
      return;
    });
    if (r !== void 0) return (0, import_path.join)(r, ...n.reverse());
    if ((0, import_path.dirname)(t) === t) return e;
    n.push((0, import_path.basename)(t));
  }
}
function L(e) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return e;
  let n = [];
  for (let t = e; ; t = (0, import_path.dirname)(t)) try {
    return (0, import_path.join)((0, import_fs.realpathSync)(t), ...n.reverse());
  } catch {
    if ((0, import_path.dirname)(t) === t) return e;
    n.push((0, import_path.basename)(t));
  }
}
async function p(e) {
  let n = (0, import_chunk_n2dbhmj2.Fa)(e);
  return n === null ? null : S((0, import_path.join)(await F((0, import_path.dirname)(n)), (0, import_path.basename)(n)));
}
async function k(e) {
  let n = (0, import_chunk_n2dbhmj2.Fa)(e);
  if (n === null) return null;
  return ((0, import_chunk_f9x2f6cx.Y)() ? void 0 : await (0, import_promises.realpath)(n).catch(() => {
    return;
  })) ?? (0, import_path.join)(await F((0, import_path.dirname)(n)), (0, import_path.basename)(n));
}
function O(e) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return e;
  try {
    return (0, import_fs.realpathSync)(e);
  } catch {
    return (0, import_path.join)(L((0, import_path.dirname)(e)), (0, import_path.basename)(e));
  }
}
function Xet(e, n) {
  let { artifactInlineEnvelope: t } = require("/$bunfs/root/chunk-012dj7az.js"), { enveloped: r, lead: i, tail: o } = t({ ...e, html: "" });
  return r || n !== "" ? { enveloped: true, notice: n, lead: i, tail: o } : f;
}
function Jet(e) {
  return { enveloped: true, notice: e, lead: WTn, tail: jTn };
}
function rqo(e) {
  return { enveloped: true, notice: e, lead: `${import_chunk_k449cc64.boa}
<${import_chunk_k449cc64.Cce}>
`, tail: `
</${import_chunk_k449cc64.Cce}>

${import_chunk_k449cc64.woa}` };
}
function I7t(e) {
  return `.${e},by-others`;
}
async function oqo(e, n, t = (r, i) => (0, import_promises.writeFile)(r, i, { flag: "wx" })) {
  let r = (0, import_path.join)(e, I7t(n));
  if (await (0, import_promises.lstat)(r).then(() => true, () => false)) return false;
  try {
    return await t(r, ""), true;
  } catch (i) {
    if ((0, import_chunk_jv7av99m.w)(i) === "EEXIST") return false;
    throw i;
  }
}
var D = /^(.+\.json)(?:\.tmp\.[0-9a-f]{8})?$/i;
function A(e) {
  let n = (0, import_chunk_f9x2f6cx.Y)() ? void 0 : D.exec((0, import_path.basename)(e))?.[1];
  return n === void 0 ? void 0 : (0, import_path.join)((0, import_path.dirname)(e), I7t(n));
}
function E(e) {
  return (0, import_chunk_jv7av99m.kn)(e) || (0, import_chunk_jv7av99m.w)(e) === "ENAMETOOLONG";
}
function d(e, n, t) {
  let r = e.copies.get(n);
  if (e.unwrapped -= r !== void 0 && !r.enveloped ? 1 : 0, e.copies.delete(n), t !== void 0) e.copies.set(n, t), e.unwrapped += t.enveloped ? 0 : 1;
}
function N(e, n) {
  let t = (0, import_chunk_0rkwgmhx.se)().savedArtifactCopies;
  d(t, e, n);
  let r = t.pending.get(e);
  if (r !== void 0) r.prior = n;
  if (t.unwrapped <= l) return;
  for (let [i, o] of t.copies) {
    if (t.unwrapped <= l) break;
    if (!o.enveloped && h(i) === void 0) d(t, i, void 0);
  }
}
async function j7l(e) {
  let n = await p(e);
  return n === null ? void 0 : u()?.copies.get(n);
}
async function iq(e, n) {
  let t = await p(e);
  if (t !== null) N(t, n);
}
async function B_e(e, n) {
  if (!n.enveloped) return;
  let t = await p(e);
  if (t === null) return;
  let r = (0, import_chunk_0rkwgmhx.se)().savedArtifactCopies, i = r.pending.get(t);
  if (i === void 0) r.pending.set(t, { prior: r.copies.get(t), saves: 1 });
  else i.saves++;
  d(r, t, n);
}
async function cMe(e, n) {
  if (!n.enveloped) return;
  let t = await p(e), r = u(), i = t === null ? void 0 : r?.pending.get(t);
  if (t === null || r === void 0 || i === void 0) return;
  if (d(r, t, n), i.prior = n, --i.saves === 0) r.pending.delete(t);
}
async function Qve(e, n) {
  if (!n.enveloped) return;
  let t = await p(e), r = u(), i = t === null ? void 0 : r?.pending.get(t);
  if (t === null || r === void 0 || i === void 0) return;
  if (--i.saves === 0) r.pending.delete(t), d(r, t, i.prior);
}
async function UXs(e) {
  let n = await p(e), t = u();
  if (n !== null && t !== void 0) d(t, n, void 0), t.pending.delete(n);
}
async function WHt(e, ...n) {
  let [, t, r] = n, i = (0, import_chunk_f9x2f6cx.ns)() === null ? void 0 : (0, import_path.join)((0, import_chunk_mxhw2w5n.C0)(), `${r}.${(0, import_chunk_d3vfy4gs.N9e)(t)}`);
  if (i !== void 0) await B_e(i, e);
  let o = await (0, import_chunk_d3vfy4gs.lbe)(...n).catch(async (P) => {
    if (i !== void 0) await Qve(i, e);
    throw P;
  });
  if (i !== void 0) await ("error" in o || o.filepath !== i ? Qve(i, e) : cMe(i, e));
  if (!("error" in o)) await iq(o.filepath, e);
  return o;
}
async function G7l(e) {
  let n = await k(e);
  if (n === null) return f;
  let t = A(n), r = t !== void 0 && !await (0, import_promises.lstat)(t).then(() => false, E);
  return _(n, r);
}
function z7l(e) {
  let n = (0, import_chunk_n2dbhmj2.Fa)(e);
  if (n === null) return f;
  let t = O(n), r = A(t), i = r !== void 0;
  try {
    if (r !== void 0) (0, import_fs.lstatSync)(r);
  } catch (o) {
    i = !E(o);
  }
  return _(t, i);
}
function V7l(e, n) {
  if (e.enveloped) (0, import_chunk_1ek4hhs6.ydl)(n);
}
function _(e, n) {
  let t = S(e), r = u()?.copies.get(t) ?? j(t);
  return n ? FGl(rqo((0, import_chunk_k449cc64.Up)(true, import_chunk_k449cc64.W4n)), r) : r;
}
function FGl(e, n) {
  let [t, r] = g(n) >= g(e) ? [n, e] : [e, n];
  return t.enveloped && t.lead === "" && r.enveloped ? { ...r, notice: t.notice } : t;
}
function g(e) {
  return !e.enveloped ? 0 : (e.notice === "" ? 0 : 2) + (e.lead === "" ? 0 : 1);
}
function K7l(e) {
  let { scrubArtifactEnvelopeTags: n } = require("/$bunfs/root/chunk-m68qnx38.js");
  return n(e, "page");
}
function b(e) {
  let n = (0, import_chunk_k449cc64.Up)(true, import_chunk_k449cc64.W4n);
  switch (e) {
    case "page":
      return Xet({ role: "owner", cowritten: false, vouchedOwn: false }, n);
    case "working_page":
      return Xet({ role: "writer", cowritten: true, vouchedOwn: false }, n);
    case "file":
      return Jet(n);
  }
}
var M = /^artifact-[^-]+-.+-.*-[0-9a-f]{32}\.[^.]+$/, B = /^(session|cse)_/, U = [import_chunk_mxhw2w5n.Mre, "scratchpad"];
function h(e) {
  let n = e.toLowerCase().split(import_path.sep);
  if ((0, import_chunk_d3vfy4gs.upo)(e) && m(n.at(-3) ?? "")) return M.test(n.at(-1) ?? "") ? "file" : "page";
  let t = n.findIndex((i, o) => i === "artifact-files" && (n[o - 1] === import_chunk_zsz02y6d.hbs || U.includes(n[o - 1] ?? "") && m(n[o - 2] ?? ""))), r = n.slice(t + 1);
  if (t < 0 || r.length < 2) return;
  return r[1] === "working-copy" && r.length === 3 && r[2] === "index.html" ? "working_page" : "file";
}
function m(e) {
  return (0, import_chunk_mzmcvr6c.ht)(e) !== null || B.test(e) || e === (0, import_chunk_f9x2f6cx.W)().toLowerCase();
}
function j(e) {
  let n = h(e);
  return n === void 0 ? f : b(n);
}
