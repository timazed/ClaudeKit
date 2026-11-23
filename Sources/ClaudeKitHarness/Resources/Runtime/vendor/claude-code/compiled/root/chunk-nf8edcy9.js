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
var chunk_nf8edcy9_exports = {};
__export(chunk_nf8edcy9_exports, {
  A3r: () => A3r,
  C3r: () => C3r,
  Jqo: () => Jqo,
  QHt: () => QHt,
  R3r: () => R3r,
  T3r: () => T3r,
  UJs: () => UJs,
  Wtr: () => Wtr,
  X7l: () => X7l,
  Xqo: () => Xqo,
  Y7l: () => Y7l,
  ZHt: () => ZHt,
  aCn: () => aCn,
  att: () => att,
  eDt: () => eDt,
  lCn: () => lCn,
  lq: () => lq,
  ltt: () => ltt,
  nTe: () => nTe,
  pMe: () => pMe,
  rTe: () => rTe,
  xDa: () => xDa
});
module.exports = __toCommonJS(chunk_nf8edcy9_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_qtg8rez4 = require("/$bunfs/root/chunk-qtg8rez4.js");
var import_chunk_mha8pjbc = require("/$bunfs/root/chunk-mha8pjbc.js");
var import_chunk_f2vegtjy = require("/$bunfs/root/chunk-f2vegtjy.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_z1z1qsrb = require("/$bunfs/root/chunk-z1z1qsrb.js");
var import_chunk_e18ra2xv = require("/$bunfs/root/chunk-e18ra2xv.js");
var import_chunk_m9439hrw = require("/$bunfs/root/chunk-m9439hrw.js");
var import_chunk_9hnj2g25 = require("/$bunfs/root/chunk-9hnj2g25.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_hsfenxnq = require("/$bunfs/root/chunk-hsfenxnq.js");
var import_chunk_ww0784kh = require("/$bunfs/root/chunk-ww0784kh.js");
var g = 6e5, m = 6e4, f = 3e3;
function T3r(e, t, o) {
  let n = Date.now();
  if (!import_chunk_r8478wtb.yo.test(e)) return { askedAt: n, until: n, answer: Promise.resolve(void 0) };
  let s = (0, import_chunk_0rkwgmhx.se)().typeDescriptions, r = `${t}:${e}`, a = s.get(r);
  if (a !== void 0 && n < a.until) return a;
  let l = (0, import_chunk_e18ra2xv.eRe)(e, o).catch(() => {
    return;
  }), i = { askedAt: n, until: n + g, answer: l.then((u) => u?.err === null ? u.detail : void 0) };
  return s.set(r, i), l.then((u) => {
    if (s.get(r) !== i) return;
    if (u === void 0) s.delete(r);
    else if (u.err !== null && u.reason !== "not_found") i.until = Math.min(i.until, Date.now() + m);
  }), i;
}
async function xDa(e, t, o) {
  if (e === void 0 || !import_chunk_r8478wtb.yo.test(e)) return;
  let n = (0, import_chunk_r8478wtb.sr)({ slug: e, env: t });
  if ((0, import_chunk_0rkwgmhx.se)().frozenArtifactTypes?.typeCatalogOn !== true) return { url: n };
  let { askedAt: s, answer: r } = T3r(e, t, o), a = await (0, import_chunk_5appeerh.me)(r, Math.max(0, f - (Date.now() - s))), l = a !== void 0 && a.untitled !== true && (0, import_chunk_mha8pjbc.LT)(e) === "first_party_type" ? a.title : void 0;
  return { url: n, ...l !== void 0 && { title: l } };
}
async function aCn(e, t) {
  let o = (0, import_chunk_qtg8rez4.Bt)(e.slug), n = (0, import_chunk_qtg8rez4.gj)(o);
  if (!(0, import_chunk_m9439hrw.lZ)(o) || n === void 0 || (0, import_chunk_mha8pjbc.LT)(n) !== void 0) return;
  let { askedAt: s, answer: r } = T3r(n, e.env, t);
  await (0, import_chunk_5appeerh.me)(r, Math.max(0, f - (Date.now() - s)));
}
var y = 5e3;
function lCn(e) {
  return e === "boot_404";
}
async function QHt(e, t) {
  if ((0, import_chunk_0rkwgmhx.se)().frozenArtifactTypes?.typeCatalogOn !== true) return;
  let { askedAt: o, answer: n } = T3r(e.slug, e.env, { signal: t.abortController.signal, credentials: t.credentials }), s = await (0, import_chunk_5appeerh.me)(n, Math.max(0, y - (Date.now() - o)));
  return s?.firstParty === true ? s : void 0;
}
function C3r(e, t, o = false) {
  let n = (0, import_chunk_bz1f2qnq.Z)(e), s = (0, import_chunk_hsfenxnq.hbr)(n), r = { action: "describe_type", type_url: t }, a = [r, { action: "read", type_url: t }, { action: "list_types" }, { action: "list", scope: "types" }];
  return (0, import_chunk_ht27b0vz.Tr)(s, import_chunk_hsfenxnq.Nit) !== null || !o && (0, import_chunk_ht27b0vz.Di)(s, import_chunk_hsfenxnq.Nit) !== null || ["deny", "ask"].some((l) => a.some((i) => (0, import_chunk_hsfenxnq.gbr)(n, import_chunk_hsfenxnq.Nit, i, l) !== null) || (0, import_chunk_hsfenxnq.dV)(n, r, l) !== null);
}
async function Xqo(e, t, o) {
  if ((0, import_chunk_bz1f2qnq.Z)(o).mode !== "plan" && (0, import_chunk_qtg8rez4.Bt)(e.slug)?.probeGone === true && (0, import_chunk_mha8pjbc.LT)(e.slug) === void 0 && !C3r(o, t)) await QHt(e, o);
}
function att() {
  return (0, import_chunk_0rkwgmhx.se)().frozenMultiFile ?? (0, import_chunk_f2vegtjy.fj)();
}
function lq(e) {
  return (0, import_chunk_z1z1qsrb.OR)() && (0, import_chunk_bz1f2qnq.k_)(e);
}
function ZHt() {
  return { behavior: "deny", message: "Reading a local file from outside this session's connected folders, or through a link, needs the approval card, and no one can answer it in this Cowork session. Use a plain file inside the connected folders; do not retry this file in this session.", decisionReason: { type: "safetyCheck", reason: "A local file that may sit outside the working folders requires a live human consent surface in a Cowork-frame session", classifierApprovable: false } };
}
function Wtr(e, t = "file_path") {
  return { behavior: "deny", message: `cannot read ${t} (${e}) \u2014 the file could not be examined, and no one can answer the approval card in this Cowork session. Check that the file exists as a plain file inside the connected folders, then retry with that path.`, decisionReason: { type: "safetyCheck", reason: "A local file that could not be examined requires a live human consent surface in a Cowork-frame session", classifierApprovable: false } };
}
function ltt(e, t, o) {
  if (nTe(e, t.slug) || (0, import_chunk_m9439hrw.G1n)((0, import_chunk_qtg8rez4.Bt)(t.slug), o)) return true;
  if (!(import_chunk_9hnj2g25.Jhs && (0, import_chunk_bz1f2qnq.Z)(e).mode === "plan")) {
    let s = (0, import_chunk_qtg8rez4.Bt)(t.slug);
    if ((0, import_chunk_z1z1qsrb.u4)(s)) return (0, import_chunk_z1z1qsrb.OEt)("foreign_read", t.slug) || (0, import_chunk_z1z1qsrb.Vbe)((0, import_chunk_bz1f2qnq.Zdn)(e), "artifactAssetReadHumanConsentSlugs", t.slug);
    return o || (0, import_chunk_qtg8rez4.kU)(s) && (0, import_chunk_9hnj2g25.$1n)(t) === false || ((0, import_chunk_z1z1qsrb.cat)(o, t) ? (0, import_chunk_z1z1qsrb.OEt)("foreign_read", t.slug) : (0, import_chunk_z1z1qsrb.yle)("foreign_read", t.slug));
  }
  return (0, import_chunk_z1z1qsrb.Vbe)((0, import_chunk_bz1f2qnq.Zdn)(e), (0, import_chunk_bz1f2qnq.Z)(e).mode === "plan" || (0, import_chunk_z1z1qsrb.cat)(o, t) ? "artifactAssetReadHumanConsentSlugs" : "artifactAssetReadConsentSlugs", t.slug);
}
function pMe(e, t, o, n = "copy") {
  let s = (0, import_chunk_qtg8rez4.Bt)(t.slug);
  if (n === "copy" && (0, import_chunk_z1z1qsrb.d1)(s)) return (0, import_chunk_9hnj2g25.Zhs)(e, t.slug);
  let r = (0, import_chunk_qtg8rez4.up)(s);
  return r && (!(0, import_chunk_m9439hrw.iZ)(s) || (0, import_chunk_m9439hrw.lZ)(s)) && !(o === "files" && (0, import_chunk_m9439hrw.aZ)(s)) || ltt(e, t, r);
}
function nTe(e, t) {
  return A((0, import_chunk_bz1f2qnq.Z)(e).mode, t);
}
function A(e, t) {
  return e !== "plan" && p(t);
}
function p(e) {
  let t = (0, import_chunk_qtg8rez4.Bt)(e);
  return (0, import_chunk_qtg8rez4.kU)(t) && !(0, import_chunk_z1z1qsrb.u4)(t) && t?.lastProbeIssuedAt !== void 0 && !(0, import_chunk_qtg8rez4.E0)(t.lastProbeIssuedAt) && (0, import_chunk_mha8pjbc.ngl)(e);
}
function eDt(e, t) {
  return Jqo((0, import_chunk_bz1f2qnq.Z)(e).mode, t);
}
function Jqo(e, t) {
  return e !== "plan" && A3r(t);
}
function A3r(e) {
  return h(e) && p(e);
}
function h(e) {
  let t = (0, import_chunk_qtg8rez4.Bt)(e);
  return t !== void 0 && t.probeFailed !== true && t.mode === "org";
}
function R(e, t, o) {
  let n = (0, import_chunk_qtg8rez4.Bt)(t.slug);
  return (0, import_chunk_bz1f2qnq.Z)(e).mode !== "plan" && n?.probeFailed === true && n.probeGone === true && n.lastProbeIssuedAt !== void 0 && !(0, import_chunk_qtg8rez4.E0)(n.lastProbeIssuedAt) && (0, import_chunk_mha8pjbc.LT)(t.slug) === "first_party_type" && !C3r(e, (0, import_chunk_r8478wtb.sr)(t), o);
}
function rTe(e, t, o = false, n = false) {
  let s = (0, import_chunk_9hnj2g25.GO)("read", e, t);
  return (o ? eDt(t, e.slug) : nTe(t, e.slug) || R(t, e, n)) ? { ask: false, foreignRead: true, attested: true } : (0, import_chunk_z1z1qsrb.vE)(s);
}
function R3r(e, t) {
  let o = (0, import_chunk_qtg8rez4.Bt)(e.slug), n = (0, import_chunk_z1z1qsrb.d1)(o) ? (0, import_chunk_z1z1qsrb.vE)({ ...(0, import_chunk_9hnj2g25.GO)("read", e, t), owned: false, outsideOrg: true }) : rTe(e, t);
  return n.ask && n.about === "outside_org" ? { ...n, answeredBy: import_chunk_z1z1qsrb.B_l, informedOnly: true } : n;
}
function UJs(e, t) {
  if ((0, import_chunk_bz1f2qnq.VP)(e) || lq(e)) return () => "none";
  let o = (0, import_chunk_z1z1qsrb.VO)(t) || (0, import_chunk_z1z1qsrb.HEt)(t.slug);
  if (!(0, import_chunk_bz1f2qnq.OS)(e)) return (a) => o && !a ? "none" : "save";
  let n = (0, import_chunk_bz1f2qnq.Z)(e), s = n.mode === "auto", r = n.shouldAvoidPermissionPrompts === true;
  return (a) => s && !(o && !a) ? "save" : r ? "none" : "ask";
}
function Y7l(e, t, o) {
  if (!((0, import_chunk_qtg8rez4.uw)(t.slug) && !(0, import_chunk_865at33z.qi)(e.agentContext))) return (0, import_chunk_m9439hrw.v0e)("webfetch", e, t.slug, false), null;
  let s = o(), r = (0, import_chunk_r8478wtb.sr)(t);
  return ({ forcedBy: a, personOnly: l }) => {
    let i = a ?? s;
    (0, import_chunk_m9439hrw.v0e)("webfetch", e, t.slug, true, i !== null);
    let u = `${l?.lead ?? `Claude wants to fetch the artifact at ${r}`} \u2014 prompted by the new-comments notification; its content enters this conversation`;
    if (i === null) {
      let c = (0, import_chunk_9hnj2g25.Dje)(e, "Nothing was fetched", u);
      if (c !== null) return c;
    }
    let d = i === null ? u : `${u} \u2014 your ${i.ruleValue.toolName} ask rule covers ${i.ruleValue.toolName !== import_chunk_ww0784kh.Gn && i.ruleValue.ruleContent?.startsWith("url:") ? "this url" : "artifact reads"}`;
    return { behavior: "ask", message: d, decisionReason: { type: "safetyCheck", reason: d, classifierApprovable: i === null && l === void 0 }, ...i !== null && { matchedAskRule: i }, suppressAlwaysAllowRule: true, localDisplayOnly: true };
  };
}
function X7l(e, t) {
  if ((0, import_chunk_m9439hrw.Kkt)("webfetch", e, t.slug, false) && !(0, import_chunk_865at33z.qi)(e.agentContext)) (0, import_chunk_qtg8rez4.j7)(t.slug);
}
