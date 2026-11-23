const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_0dep9bd9_exports = {};
__export(chunk_0dep9bd9_exports, {
  K6s: () => K6s,
  ZXn: () => ZXn,
  g8t: () => g8t,
  x8l: () => x8l
});
module.exports = __toCommonJS(chunk_0dep9bd9_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_k5jn5rx9 = require("/$bunfs/root/chunk-k5jn5rx9.js");
var import_chunk_hrje0gx5 = require("/$bunfs/root/chunk-hrje0gx5.js");
async function p(e, t) {
  let { exitRefusingManagedConfig: r } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-z0mhdzdx.js")));
  return r({ message: e.message ?? "Claude Code couldn't load your organization's settings, which it requires before a session can start.", reason: (0, import_chunk_hrje0gx5.Y2r)(e.decision), print: t, beforeExit: import_chunk_hrje0gx5.X2r });
}
function d(e, t) {
  return { surface: e ? "startup" : "noninteractive", authRecoveryCommand: false, ...t.afterSignIn === true && { afterSignIn: true }, ...t.fetchFlag !== void 0 && { fetchFlag: t.fetchFlag }, ...t.isFlagFetchHeld !== void 0 && { isFlagFetchHeld: t.isFlagFetchHeld }, ...t.isFlagCacheEmpty !== void 0 && { isFlagCacheEmpty: t.isFlagCacheEmpty } };
}
async function ZXn(e = {}) {
  let t = e.interactive ?? !(0, import_chunk_f9x2f6cx.Se)(), r = d(t, e), a = e.peek ?? import_chunk_hrje0gx5.eJn, n = a(r);
  if ((0, import_chunk_k5jn5rx9.ts)("org_config_gate_phase_one"), n.decision.verdict !== "refused") return;
  if (n.flagSource === "disk" || n.flagSource === "fallback") {
    let i = e.isFlagFetchHeld ?? import_chunk_hrje0gx5.nEn;
    if (i()) return;
    if ((0, import_chunk_hrje0gx5.tJn)(n.flagSource, i, e.isFlagCacheEmpty)) {
      if (await (0, import_chunk_hrje0gx5.J2r)(n.flag.budgetMs, e.fetchFlag), n = a(r), n.decision.verdict !== "refused") return;
    }
  }
  return await (0, import_chunk_hrje0gx5.Qmt)(n, n.outcomes), l(n, r, t, e);
}
async function g8t(e = {}) {
  let t = e.interactive ?? !(0, import_chunk_f9x2f6cx.Se)(), r = d(t, e), a = await (e.evaluate ?? import_chunk_hrje0gx5.cka)(r);
  if ((0, import_chunk_k5jn5rx9.ts)("org_config_gate_phase_two"), !(0, import_chunk_hrje0gx5.C_e)(a.decision)) return;
  return l(a, r, t, e);
}
async function K6s(e, t = {}) {
  let r = d(false, t), { armed: a } = await C(r, t);
  if ((0, import_chunk_k5jn5rx9.ts)("org_config_gate_headless"), !a) return;
  let n = t.readPolicySlot ?? (() => (0, import_chunk_2yx6c1y2._e)("policySettings")), i = n(), o = await e();
  if (!o.valid) return o;
  return await g8t({ ...t, interactive: false }), (t.settingsInHand ?? (() => (0, import_chunk_hrje0gx5.Y6s)().reason === "ok"))() && n() === i ? o : void 0;
}
async function x8l(e = {}) {
  let t = d(true, e), r = await C(t, e);
  if ((0, import_chunk_k5jn5rx9.ts)("org_config_gate_launch_lane"), !r.armed) return;
  if (!(0, import_chunk_hrje0gx5.C_e)(r.decision)) {
    (0, import_chunk_hrje0gx5.Qmt)(r, r.outcomes);
    return;
  }
  if (!(e.attended ?? !(0, import_chunk_865at33z.Na)()) || e.showBlockedScreen === void 0) return await (e.retryFetches ?? import_chunk_hrje0gx5.Ojo)(), g8t({ ...e, interactive: true });
  return await (0, import_chunk_hrje0gx5.Qmt)(r, r.outcomes), l(r, t, true, { ...e, retryFirst: true });
}
async function C(e, t) {
  let r = t.peek ?? import_chunk_hrje0gx5.eJn, a = r(e);
  if ((0, import_chunk_hrje0gx5.nJn)(a, t.isFlagFetchHeld, t.isFlagCacheEmpty)) await (0, import_chunk_hrje0gx5.eVs)(t.fetchFlag), a = r(e);
  return (0, import_chunk_hrje0gx5.Q6s)(a, () => r(e), t.primeSettingsCacheAge);
}
async function l(e, t, r, a) {
  let n = a.exit ?? ((s) => p(s, a.printMessage)), i = a.reportFinal ?? import_chunk_hrje0gx5.Qmt;
  if (!r || !(a.attended ?? !(0, import_chunk_865at33z.Na)())) {
    let s = e;
    if (!r) {
      let f = await h(e, t, a);
      if (f !== void 0) {
        if (!(0, import_chunk_hrje0gx5.C_e)(f.decision)) {
          await i(f, void 0, { outcome: "passed", recoveredAfterMs: f.decision.blockedMs });
          return;
        }
        s = f;
      }
    }
    return await i(s, void 0, { outcome: "exit" }), n(s);
  }
  let o = await a.showBlockedScreen?.();
  if (o === void 0) return await i(e, void 0, { outcome: "exit" }), n(e);
  let g = a.now ?? (() => performance.now()), u = g() - e.decision.blockedMs, c = e, O = 0, m = await o(e, async () => (await (a.retryFetches ?? import_chunk_hrje0gx5.Ojo)(), O += 1, c = (a.reevaluate ?? import_chunk_hrje0gx5.Z6s)(t, Math.max(0, Math.round(g() - u)), O), c), { retryNow: a.retryFirst === true });
  if (m === "passed") {
    await i(c, void 0, { outcome: "passed", recoveredAfterMs: Math.max(0, Math.round(g() - u)) });
    return;
  }
  return await i(c, void 0, { outcome: m }), n(c);
}
async function h(e, t, r) {
  let { decision: a, flag: n } = e;
  if (a.verdict !== "blocked" || a.reason !== "unavailable_credential_refresh") return;
  let i = n.budgetMs - a.blockedMs;
  if (i <= 0) return;
  let o = r.now ?? (() => performance.now()), g = o();
  await (0, import_chunk_5appeerh.me)((r.retryFetches ?? import_chunk_hrje0gx5.Ojo)().catch(() => {
  }), i);
  let u = Math.max(0, Math.round(o() - g));
  return (r.reevaluate ?? import_chunk_hrje0gx5.Z6s)(t, a.blockedMs + u, 1);
}
