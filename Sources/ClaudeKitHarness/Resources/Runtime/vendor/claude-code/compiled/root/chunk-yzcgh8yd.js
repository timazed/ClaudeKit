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
var chunk_yzcgh8yd_exports = {};
__export(chunk_yzcgh8yd_exports, {
  c0a: () => c0a,
  dDt: () => dDt,
  f0a: () => f0a,
  fQs: () => fQs,
  hQs: () => hQs,
  mQs: () => mQs,
  pQs: () => pQs,
  u0a: () => u0a,
  y4o: () => y4o,
  z3r: () => z3r
});
module.exports = __toCommonJS(chunk_yzcgh8yd_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_crypto = require("crypto");
(0, import_chunk_adx6804h.B)();
var dDt = "anthropic/returnToolOutput", y4o = [2], fQs = 8388608;
function pQs() {
  return true;
}
function z3r(e) {
  return (0, import_chunk_0jve1fep.Le)(e) && e.tool_host_interface !== void 0;
}
var d = 64;
var l = 1024, a = 1024, c = 65536, i = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.E)().int()).max(d)), y = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().min(1).max(a)).max(l).refine((e) => e.reduce((t, o) => t + o.length, 0) <= c)), f = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ versions: i(), deny_rules_digest: (0, import_chunk_adx6804h.n)().regex(/^[0-9a-f]{64}$/) }));
function c0a(e) {
  let t = s(e)?.[dDt];
  if (t === void 0) return { kind: "absent" };
  let o = i().safeParse(s(t)?.versions);
  if (!o.success) return { kind: "malformed" };
  if (m(o.data).length === 0) return { kind: "no_shared_version", versions: o.data };
  let r = f().safeParse(t);
  return r.success ? { kind: "requested", denyRulesDigest: r.data.deny_rules_digest } : { kind: "malformed" };
}
function m(e) {
  return y4o.filter((t) => e.includes(t));
}
var O = { [import_chunk_hn3cwwzt.ke]: [import_chunk_k883m4fq.De, import_chunk_rb36kwbn.lt], [import_chunk_rb36kwbn.lt]: [import_chunk_k883m4fq.De], [import_chunk_rb36kwbn.Dt]: [import_chunk_rb36kwbn.lt, import_chunk_k883m4fq.De], [import_chunk_rb36kwbn.Ks]: [import_chunk_rb36kwbn.lt, import_chunk_k883m4fq.De], [import_chunk_865at33z.Sr]: [import_chunk_k883m4fq.De], [import_chunk_865at33z.Qr]: [import_chunk_k883m4fq.De] }, T = (0, import_chunk_4smdap7r.M)([import_chunk_hn3cwwzt.ke, ...Object.values(O).flat()]);
function mQs(e) {
  return (0, import_chunk_4smdap7r.M)(e.map(import_chunk_qebpc5de.Ur).filter(({ toolName: t, ruleContent: o }) => o !== void 0 && T.includes(t)).map(import_chunk_qebpc5de.yn)).toSorted();
}
function hQs(e) {
  return y().safeParse(e).success;
}
function u0a(e) {
  return (0, import_crypto.createHash)("sha256").update((0, import_chunk_w578pjby._)(e)).digest("hex");
}
function f0a({ tools: e, denyRules: t }) {
  return { versions: [...y4o], tools: [...e], deny_rules: mQs(t) };
}
function s(e) {
  return (0, import_chunk_0jve1fep.Le)(e) ? e : void 0;
}
