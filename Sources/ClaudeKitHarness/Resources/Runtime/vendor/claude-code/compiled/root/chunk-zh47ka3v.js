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
var chunk_zh47ka3v_exports = {};
__export(chunk_zh47ka3v_exports, {
  $q: () => $q,
  Bbt: () => Bbt,
  O0n: () => O0n,
  Qlo: () => Qlo,
  Sae: () => Sae,
  Wbt: () => Wbt,
  jQl: () => jQl,
  ost: () => ost
});
module.exports = __toCommonJS(chunk_zh47ka3v_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
var import_chunk_7q6ee47s = require("/$bunfs/root/chunk-7q6ee47s.js");
var import_chunk_4jzbgp2v = require("/$bunfs/root/chunk-4jzbgp2v.js");
var $q = { policy: "allow_remote_sessions" }, d = "Cloud sessions use your claude.ai login.", m = { ANTHROPIC_API_KEY: { noun: "key", fetchedTheLoadedAnswer: () => (0, import_chunk_7q6ee47s.Lks)() }, ANTHROPIC_AUTH_TOKEN: { noun: "token", fetchedTheLoadedAnswer: () => (0, import_chunk_2nv4wrez.rGt)() === "same" } };
function Sae() {
  let n = (0, import_chunk_zhr7rpv7.ve)();
  if (n !== "firstParty") return `Cloud sessions aren't available with ${import_chunk_zhr7rpv7.tx[n]}. They run on Anthropic's infrastructure and require an Anthropic account.`;
  let { policy: e } = $q, { featureLabel: r, verb: u } = (0, import_chunk_2nv4wrez.Owe)(e), i = (0, import_chunk_2nv4wrez.Dp)(e, r, u);
  if (i === null) return null;
  let l = (0, import_chunk_2nv4wrez.ba)(e);
  if (l === "org_denied") {
    let o = (0, import_chunk_2nv4wrez.v9)() && (0, import_chunk_2zeyvjwb.eL)().length === 0 ? p() : null;
    if (o === null) return i;
    let c = `${r} ${u} ${(0, import_chunk_4jzbgp2v.dVt)([])}.`;
    if (o === "apiKeyHelper") return c;
    let { noun: h, fetchedTheLoadedAnswer: _ } = m[o];
    if (!_()) return i;
    return `${c} This session is using ${o}, so Claude Code checked the policy for the organization that ${h} belongs to. ${d}`;
  }
  let t = (0, import_chunk_2nv4wrez.TLe)();
  if (l !== "cache_miss" || t === null || t.success || t.httpStatus === 404) return i;
  if (t.retrying) return t.errorCode === "auth_failed" && t.httpStatus === 401 && !(0, import_chunk_2nv4wrez.flt)(e) && f() ? `${i} If that doesn't help, run \`claude auth login\` (or /login in a local session).` : i;
  let a = (0, import_chunk_4jzbgp2v.DPo)(r, u, t);
  if (t.errorCode !== "auth_failed" || t.httpStatus === 403 || (0, import_chunk_2nv4wrez.flt)(e)) return a;
  if (p() !== null) {
    let o = (0, import_chunk_7d2qr9z5.ikt)({ prefix: d, suffix: "to use cloud sessions." });
    return `${a} ${o}`;
  }
  if (t.httpStatus === 401 && f()) return `${a} Run \`claude auth login\` (or /login in a local session), then try again.`;
  if (!(0, import_chunk_865at33z.FR)() && (0, import_chunk_865at33z.cl)() && t.httpStatus === null && (0, import_chunk_9b4aq7fb.c8)() && !(0, import_chunk_69qhefwa.Ne)(false)) {
    if ((0, import_chunk_865at33z.V7e)()) return `${a} Cloud sessions need a claude.ai sign-in. ${import_chunk_865at33z.cPr}`;
  }
  return a;
}
function Qlo() {
  return (0, import_chunk_2nv4wrez.ba)($q.policy) === "org_denied";
}
function f() {
  return !(0, import_chunk_865at33z.eee)() && (0, import_chunk_865at33z.Rt)() && (0, import_chunk_865at33z.xa)().source === "claude.ai" && (0, import_chunk_865at33z.z7e)() === null;
}
function p() {
  if (import_chunk_c203g5kd.s.ANTHROPIC_UNIX_SOCKET || (0, import_chunk_69qhefwa.Ne)(false) || !(0, import_chunk_865at33z.L1)() || (0, import_chunk_865at33z.Rt)()) return null;
  let { key: n, source: e } = (0, import_chunk_865at33z.lm)();
  if (e === "ANTHROPIC_API_KEY") return n === import_chunk_c203g5kd.s.ANTHROPIC_API_KEY ? e : null;
  if (e === "apiKeyHelper") return e;
  return (0, import_chunk_865at33z.xa)().source === "ANTHROPIC_AUTH_TOKEN" ? "ANTHROPIC_AUTH_TOKEN" : null;
}
function ost() {
  return !(0, import_chunk_k449cc64.wt)() && (0, import_chunk_2nv4wrez.Rn)("allow_remote_sessions") && (0, import_chunk_2nv4wrez.Rn)("allow_quick_web_setup");
}
function Bbt() {
  return !(0, import_chunk_3t7ve0wy.Ol)() && ost();
}
function O0n() {
  return `${(0, import_chunk_ephf358x.cn)().CLAUDE_AI_ORIGIN}/connect-github`;
}
function Wbt(n = "this repository") {
  let e = O0n(), r = Bbt() ? `Run /web-setup to connect with your GitHub CLI login, or connect on the web at ${e}` : `Connect it on the web at ${e}`;
  return `GitHub isn't connected to your Claude account, so ${n} can't be cloned in the cloud. ${r}`;
}
var A = { type: "local-jsx", name: "web-setup", description: "Set up cloud sessions with your GitHub account", availability: ["claude-ai"], isEnabled: ost, policyGate: $q, get isHidden() {
  return !(0, import_chunk_2nv4wrez.Rn)("allow_remote_sessions") || !(0, import_chunk_2nv4wrez.Rn)("allow_quick_web_setup");
} }, jQl = A;
