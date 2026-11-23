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
var chunk_4dnx2vkh_exports = {};
__export(chunk_4dnx2vkh_exports, {
  $gl: () => $gl,
  B0e: () => B0e,
  Bgl: () => Bgl,
  Dgl: () => Dgl,
  Dln: () => Dln,
  Fgl: () => Fgl,
  Ggl: () => Ggl,
  Hgl: () => Hgl,
  Igl: () => Igl,
  Jje: () => Jje,
  Lgl: () => Lgl,
  Lln: () => Lln,
  Mgl: () => Mgl,
  Ngl: () => Ngl,
  Ogl: () => Ogl,
  Pgl: () => Pgl,
  Syo: () => Syo,
  U0e: () => U0e,
  Ugl: () => Ugl,
  Vgl: () => Vgl,
  Wgl: () => Wgl,
  Y$n: () => Y$n,
  Ype: () => Ype,
  ZFi: () => ZFi,
  byo: () => byo,
  e1i: () => e1i,
  fRe: () => fRe,
  fys: () => fys,
  hV: () => hV,
  ikr: () => ikr,
  jWt: () => jWt,
  jgl: () => jgl,
  kEt: () => kEt,
  kyo: () => kyo,
  mRe: () => mRe,
  okr: () => okr,
  pRe: () => pRe,
  rkr: () => rkr,
  skr: () => skr,
  wyo: () => wyo,
  zgl: () => zgl
});
module.exports = __toCommonJS(chunk_4dnx2vkh_exports);
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_yesjd46y = require("/$bunfs/root/chunk-yesjd46y.js");
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_bne5t4g3 = require("/$bunfs/root/chunk-bne5t4g3.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_crypto = require("crypto");
var d = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (e) => e.clear());
function jWt(e) {
  let n = d.get(e.sender), t = n?.recipient === e.recipient ? { ...n.isReplaceable === void 0 && n, ...e, flagged: e.flagged || n.flagged } : { ...e };
  return d.set(e.sender, t), t;
}
function Pgl(e) {
  let n = d.get(e);
  if (n !== void 0) n.laterReportRefused = true, n.refusedThisPass = true;
}
function Ogl(e, n) {
  let t = d.get(e);
  if (t !== void 0) t.ranAgain = { canMessage: n }, t.refusedThisPass = false;
}
function ZFi(e, n) {
  let t = rkr(e, n);
  if (t !== void 0) t.askedSince = true;
}
function rkr(e, n) {
  let t = d.get(e);
  return t?.recipient === n ? t : void 0;
}
function fys(e, n) {
  let t = rkr(e, n);
  return t !== void 0 && t.isReplaceable === void 0;
}
function Igl(e) {
  let n = d.get(e);
  if (n?.consumed !== void 0) n.isReplaceable = true;
}
function okr(e) {
  return d.has(e);
}
function kEt(e) {
  return d.get(e);
}
function Jje(e) {
  d.delete(e);
}
var u = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (e) => e.clear());
function Mgl(e, n, t) {
  u.set(e, { contract: n, ...!n && t !== void 0 && { miss: t }, flagged: u.get(e)?.flagged === true });
}
function U0e(e) {
  u.set(e, { ...u.get(e), flagged: true }), fRe(e);
}
var m = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Set(), (e) => e.clear());
function Y$n(e, n) {
  if (!(0, import_chunk_r3kja8v6.ue)()) return;
  if (n.warning !== null || n.judged && n.unfinished) m.add(e);
}
function e1i(e) {
  return m.has(e);
}
function skr(e) {
  return u.get(e)?.flagged === true;
}
var p = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (e) => e.clear());
function fRe(e) {
  return p.set(e, (p.get(e) ?? 0) + 1), () => {
    p.set(e, (p.get(e) ?? 1) - 1);
  };
}
function Syo(e) {
  return (p.get(e) ?? 0) > 0;
}
function pRe(e) {
  return u.get(e)?.contract;
}
var k = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (e) => e.clear());
function Hgl(e, n) {
  k.set(e, n);
}
function Dgl(e) {
  return k.get(e);
}
function byo(e) {
  let n = u.get(e);
  return n?.contract === true ? "armed" : n?.miss;
}
function Dln() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_SUBAGENT_HANDBACK) return false;
  let e = import_chunk_c203g5kd.So.CLAUDE_CODE_SENDMESSAGE_HANDBACK;
  if (e !== void 0) return e;
  return (0, import_chunk_865at33z.b)("tengu_lively_waffle", true);
}
function ikr(e) {
  return e.mode === "auto" && !import_chunk_c203g5kd.s.CLAUDE_CODE_EVAL_CONFINED && Dln();
}
var _ = `Your final report is delivered through ${import_chunk_060xwhvh.mu}`;
function Lgl(e) {
  return `${_}: when your work is complete, call ${import_chunk_060xwhvh.mu}({message: <your full report>}). The call ends your run, so make it your last step. Only a ${import_chunk_060xwhvh.mu} call reaches your caller as your result; plain text you write at the end is not delivered.` + (e ? ` Do not also send the report with ${import_chunk_bne5t4g3.Ln}: your caller would get it twice.` : "");
}
var A = `${import_chunk_060xwhvh.mu} is not available in this run`;
function Ngl() {
  return `${A}: an earlier instruction to report through it no longer applies. Write your final report as plain text; it will be delivered.`;
}
var Fgl = "[handback-send-enforce]", $gl = 3, x = `<system-reminder>
${_}`;
function f(e, n) {
  return e.type === "user" && e.isMeta === true && typeof e.message.content === "string" && e.message.content.startsWith(n);
}
function Ugl(e) {
  for (let n = e.length - 1; n >= 0; n--) {
    let t = e[n];
    if (f(t, `<system-reminder>
${import_chunk_060xwhvh.Tko}`)) return "script";
    if (f(t, x)) return "reminder";
    if (f(t, `<system-reminder>
${A}`)) return "countermand";
  }
  return;
}
function Bgl(e) {
  return hV(e)?.handbackContract;
}
function hV(e) {
  return e?.type === "local_agent" ? e : void 0;
}
function Wgl({ contract: e, registered: n, callerInbox: t, resumerInbox: a, inboxReadable: r }) {
  let o = n.recipient !== void 0 && r(n.recipient) ? n.recipient : n.recipient === void 0 && r(t) ? t : a;
  return { handbackContract: e ? true : void 0, handbackRecipient: e ? o : n.recipient, handbackBounces: 0 };
}
function B0e(e, n) {
  let t = hV(e);
  if (t?.handbackContract !== true) return;
  let { handbackRecipient: a } = t;
  if (a === void 0) return;
  let r = rkr(n, a);
  if (r === void 0) return [];
  return r.consumed === void 0 ? [{ ...r, report: t.handbackReport }] : [r];
}
function jgl(e, n) {
  let t = (0, import_chunk_kx2fp6pc._2)(n);
  return e ? `This agent's report was delivered to you as a message from "${t}" (its ${import_chunk_060xwhvh.mu} call), under a SECURITY WARNING from auto mode \u2014 the warning above the report says why. Read it there; it is not repeated here.
` : `This agent's report was delivered to you as a message from "${t}" (its ${import_chunk_060xwhvh.mu} call). Read it there; it is not repeated here.
`;
}
function Ggl(e) {
  return `${import_chunk_060xwhvh.xko}${e ? import_chunk_060xwhvh.Pko : ""}
`;
}
function zgl(e) {
  return `${import_chunk_060xwhvh.TWn}${e === void 0 ? "" : import_chunk_060xwhvh.CWn[e]}
`;
}
var wyo = `This agent has not reported yet: it is waiting on its own background work and will deliver its report through ${import_chunk_060xwhvh.mu} when that finishes.
`;
function Vgl(e) {
  return `${import_chunk_060xwhvh.Cko} Its unsent text is not shown.${e ? import_chunk_060xwhvh.Ako : ""}
`;
}
function Ype() {
  let e = import_chunk_c203g5kd.So.CLAUDE_CODE_HANDBACK_PROVENANCE;
  if (e !== void 0) return e;
  return (0, import_chunk_865at33z.b)("tengu_melodic_wolf", true);
}
function mRe(e) {
  let n = (0, import_crypto.createHash)("sha256");
  n.update(String(e.length));
  for (let t of e) n.update(":" + t.text.length + ":"), n.update(t.text);
  return n.digest("hex").slice(0, 16);
}
function Lln(e, n, t, a) {
  let r = e.length, o = n ?? 0, i = t ?? 0;
  if (!(Number.isInteger(o) && Number.isInteger(i) && o >= 0 && i >= 0 && o + i <= r && (o + i === 0 || a !== void 0 && a === mRe(e)))) {
    if (o + i !== 0) (0, import_chunk_cqa9hrgx.l)("melodic_wolf", "sections_degraded", { hashMismatch: a !== mRe(e) });
    return { notes: [], body: e.slice(), tail: [] };
  }
  return { notes: e.slice(0, o), body: e.slice(o, r - i), tail: e.slice(r - i) };
}
function kyo(e, n, t, a) {
  let { notes: r, body: o, tail: i } = Lln(e, n, t, a);
  if (o.length === 0 && r.length + i.length > 0 && Dln()) return [{ type: "text", text: [...r, ...i].map((c) => (0, import_chunk_yesjd46y.Kke)(c.text)).join(`
`) }];
  let g = o.map((c) => c.text).join(`
`) || "(no text output)";
  return [{ type: "text", text: [...r.map((c) => (0, import_chunk_yesjd46y.Kke)(c.text)), ...i.map((c) => (0, import_chunk_yesjd46y.Kke)(c.text)), (0, import_chunk_yesjd46y.ZAt)(g)].join(`
`) }];
}
