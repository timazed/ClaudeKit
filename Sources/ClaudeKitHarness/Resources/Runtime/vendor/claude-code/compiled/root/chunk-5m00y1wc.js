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
var chunk_5m00y1wc_exports = {};
__export(chunk_5m00y1wc_exports, {
  $7: () => $7,
  Dyo: () => Dyo,
  EEt: () => EEt,
  Lyo: () => Lyo,
  X8e: () => X8e,
  Zje: () => Zje,
  __l: () => __l,
  y_l: () => y_l,
  yys: () => yys
});
module.exports = __toCommonJS(chunk_5m00y1wc_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_ac8t6db0 = require("/$bunfs/root/chunk-ac8t6db0.js");
var import_chunk_7j8he8m3 = require("/$bunfs/root/chunk-7j8he8m3.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var yys = /^u_[A-Za-z0-9_]{1,62}$/, Dyo = /^[a-z_]{0,32}$/;
function Lyo(t, e) {
  return !(t === void 0 || t === null || t === "" || t === "agent" && e === "assistant");
}
function $7(t, e) {
  if (e.tokens.has(t)) return true;
  return e.account !== void 0 && t.toLowerCase() === e.account;
}
async function Zje(t) {
  let { info: e } = (0, import_chunk_7j8he8m3.ySo)(), r = await (0, import_chunk_865at33z.v_)(t) === "store" ? e?.accountUuid?.toLowerCase() : void 0;
  return { account: r === "" ? void 0 : r, tokens: EEt() };
}
function X8e(t, e) {
  let r = e.account !== void 0 || e.tokens.size > 0, i = false;
  for (let o of t) if (o.account === "unknown" || o.role === "degraded" || o.postedByArtifact === true || !r || yys.test(o.account) && e.tokens.size === 0) i = true;
  else if (!$7(o.account, e)) return "other";
  return i ? "unknown" : "own";
}
function c() {
  return (0, import_chunk_7j8he8m3.ySo)().info?.accountUuid?.toLowerCase() ?? null;
}
var u = /* @__PURE__ */ new Set();
function EEt() {
  let t = (0, import_chunk_0rkwgmhx.se)(), e = t.ownPrincipalTokens;
  if (e.size === 0) return u;
  if (t.ownPrincipalTokenAccount !== c()) return (0, import_chunk_0rkwgmhx.R$i)(t), u;
  let r = (0, import_chunk_ac8t6db0.Vyo)();
  for (let [i, o] of e) if (o !== d && o !== r) e.delete(i);
  return new Set(e.keys());
}
var d = "relay", l = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.n)().regex(yys));
async function __l(t) {
  return await (0, import_chunk_ac8t6db0.P1i)(t), EEt(), { epoch: (0, import_chunk_0rkwgmhx.se)().ownPrincipalTokenEpoch, account: c(), bearer: (0, import_chunk_ac8t6db0.Vyo)() };
}
function y_l(t, e, r, i) {
  let o = (0, import_chunk_0rkwgmhx.se)();
  if (o.ownPrincipalTokenEpoch !== e.epoch || c() !== e.account) return;
  let a = i === "relay" ? d : e.bearer !== null && (0, import_chunk_ac8t6db0.Vyo)() === e.bearer && r === e.bearer ? e.bearer : void 0;
  if (a === void 0) return;
  let s = l().safeParse(t);
  if (s.success) {
    if (o.ownPrincipalTokenAccount !== e.account) o.ownPrincipalTokens.clear(), o.ownPrincipalTokenAccount = e.account;
    o.ownPrincipalTokens.set(s.data, a);
  }
}
