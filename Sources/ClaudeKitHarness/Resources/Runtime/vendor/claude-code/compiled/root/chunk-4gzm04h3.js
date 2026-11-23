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
var chunk_4gzm04h3_exports = {};
__export(chunk_4gzm04h3_exports, {
  Dfa: () => Dfa,
  Lfa: () => Lfa,
  Nfa: () => Nfa,
  TVe: () => TVe,
  m1r: () => m1r
});
module.exports = __toCommonJS(chunk_4gzm04h3_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_w58msjm6 = require("/$bunfs/root/chunk-w58msjm6.js");
var import_chunk_z688m88d = require("/$bunfs/root/chunk-z688m88d.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_crypto = require("crypto");
(0, import_chunk_adx6804h.B)();
var h = { deny: [], ask: [] };
function w(e) {
  if ((0, import_chunk_gbskgz33.fp)()) return { userSettings: h, projectSettings: h, localSettings: h };
  return e ?? T(K);
}
function T(e) {
  return { userSettings: e("userSettings"), projectSettings: e("projectSettings"), localSettings: e("localSettings") };
}
function C(e) {
  return T((s) => (0, import_chunk_xzvhvaa2.rn)(s) ? k(e(s), s) : h);
}
function K(e) {
  if (!(0, import_chunk_xzvhvaa2.rn)(e)) return h;
  let s = (0, import_chunk_2yx6c1y2.XMr)(e);
  switch (s.kind) {
    case "in_effect":
      return k(s.settings, e);
    case "unreadable_for_now":
      return k(s.settingsAsLastRead, e);
    case "some_do_not_load":
    case "unreadable":
      return (0, import_chunk_w578pjby.t)(`A settings file of ${e} did not load, so none of its permission rules apply`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("mcp_serve_tool_host_permission", "repo_rules_file_unread"), k(s.settingsOfTheOtherFile, e);
  }
}
function k(e, s) {
  let r = (0, import_chunk_gbskgz33.k4)(e, s);
  return { deny: P(r, "deny"), ask: P(r, "ask") };
}
function P(e, s) {
  return e.filter((r) => r.ruleBehavior === s).map((r) => (0, import_chunk_qebpc5de.yn)(r.ruleValue));
}
var A = ["userSettings", ...import_chunk_xzvhvaa2.WA];
function Dfa() {
  return A.map((e) => [(0, import_chunk_trq47kfh.Gwo)(e), e]);
}
var W = 3, R = new import_chunk_2904xtvq.j(() => ({ held: void 0, takesSkipped: 0, judged: [], digestKey: (0, import_crypto.randomBytes)(32) }));
function Lfa({ guarded: e, accept: s, judged: r }) {
  let o = R.of((0, import_chunk_f9x2f6cx.N)().host);
  if (e === false) o.judged = [], o.takesSkipped = 0;
  if (e !== true) {
    if (e === false && o.held !== void 0) {
      let { cache: f } = o.held;
      o.held = void 0, f.release(), (0, import_chunk_cqa9hrgx.u)("ccs_settings_hold_let_go");
    }
    return { differs: [], judged: o.judged };
  }
  o.judged = r ?? o.judged, (0, import_chunk_r3mm3x33.pr)();
  let n = o.held;
  if (n !== void 0 && s === void 0) return n.noted = void 0, { differs: O(n, H(n), L()), judged: o.judged };
  let g, a, S;
  try {
    if (g = L(), a = H(n), n === void 0) {
      if (x(a)) return { differs: [], judged: o.judged };
      let f = (0, import_chunk_2yx6c1y2.JMr)({ files: a.files, also: ["userSettings"] });
      S = { ...a, cache: f, policy: g, taken: a.counts };
    } else {
      let f = s?.length ? n.noted : void 0;
      if (f === void 0 && !a.counts.every((F) => s?.some((E) => (0, import_chunk_z688m88d.Zt)(E, F)) || n.taken.some((E) => (0, import_chunk_z688m88d.Zt)(E, F)))) return (0, import_chunk_cqa9hrgx.l)("ccs_settings_hold", "accept_out_of_date"), { differs: O(n, a, g), judged: o.judged };
      let y = f ?? a;
      if (x(y)) return { differs: O(n, a, g), judged: o.judged };
      n.cache.replace(y.files), S = { ...y, cache: n.cache, counts: n.counts.map((F) => D(s, F)), taken: y.counts, policy: D(s, n.policy) };
    }
  } catch (f) {
    throw (0, import_chunk_cqa9hrgx.m)("ccs_settings_hold", "take_failed"), f;
  }
  return o.held = S, (0, import_chunk_cqa9hrgx.u)("ccs_settings_hold"), (0, import_chunk_r3mm3x33.pr)(), { differs: O(S, a, g), judged: o.judged };
}
function q() {
  return R.of((0, import_chunk_f9x2f6cx.N)().host).held?.rules;
}
function m1r(e) {
  let { held: s } = R.of((0, import_chunk_f9x2f6cx.N)().host);
  if (s === void 0) return;
  let r = s.paths[e], o = r === null ? void 0 : s.files.get(r);
  return o === void 0 ? null : (0, import_chunk_w578pjby.Ka)(o);
}
function H(e) {
  let s = (0, import_chunk_2yx6c1y2.fut)(), o = { userSettings: (0, import_chunk_2yx6c1y2._n)("userSettings") ?? null, projectSettings: s.project ?? (e === void 0 ? (0, import_chunk_2yx6c1y2._n)("projectSettings") ?? null : e.paths.projectSettings), localSettings: s.local, legacyLocal: s.legacy }, n = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map();
  for (let a of Object.values(o)) if (a) g.set(a, (0, import_chunk_6mfepmbb.Kze)(a, n, (0, import_chunk_6mfepmbb.qC)(a)));
  return z(o, g, n);
}
function I({ files: e }) {
  return ![...e.values()].some((s) => s.failedForNow === true);
}
function x(e) {
  let s = R.of((0, import_chunk_f9x2f6cx.N)().host);
  if (I(e)) return s.takesSkipped = 0, false;
  if (s.takesSkipped++, s.takesSkipped >= W) return s.takesSkipped = 0, (0, import_chunk_cqa9hrgx.l)("ccs_settings_hold", "held_as_it_read"), false;
  return (0, import_chunk_cqa9hrgx.l)("ccs_settings_hold", "read_failed_for_now"), true;
}
function z(e, s, r) {
  let o = (0, import_chunk_2yx6c1y2.put)(s, ["userSettings"]), { digestKey: n } = R.of((0, import_chunk_f9x2f6cx.N)().host);
  return { paths: e, files: s, rules: C((g) => o.get(g)?.settings ?? null), counts: A.filter((g) => g !== "projectSettings" || e.projectSettings !== e.userSettings).map((g) => ({ source: (0, import_chunk_trq47kfh.Gwo)(g), digest: (0, import_crypto.createHmac)("sha256", n).update((0, import_chunk_w578pjby._)((g === "userSettings" ? [e.userSettings] : g === "projectSettings" ? [e.projectSettings] : [e.localSettings, e.legacyLocal]).map((a) => a === null ? null : [r.get(a)?.changedAt, r.get(a)?.content ?? { errors: s.get(a)?.errors.map(({ message: S }) => S) }]))).digest("hex") })) };
}
function Nfa() {
  let { held: e } = R.of((0, import_chunk_f9x2f6cx.N)().host);
  if (e === void 0) return;
  try {
    let s = H(e);
    e.noted = I(s) ? s : void 0;
  } catch (s) {
    e.noted = void 0, (0, import_chunk_k449cc64.i)(s);
  }
}
function O(e, s, r) {
  return [...s.counts.filter((o) => !e.counts.some((n) => (0, import_chunk_z688m88d.Zt)(n, o)) || !e.taken.some((n) => (0, import_chunk_z688m88d.Zt)(n, o))), ...(0, import_chunk_z688m88d.Zt)(e.policy, r) ? [] : [r]];
}
function D(e, s) {
  let r = e?.find((o) => o.source === s.source);
  return r === void 0 ? s : { ...s, digest: r.digest };
}
function L() {
  let { digestKey: e } = R.of((0, import_chunk_f9x2f6cx.N)().host);
  return { source: (0, import_chunk_trq47kfh.Gwo)("policySettings"), digest: (0, import_crypto.createHmac)("sha256", e).update((0, import_chunk_w578pjby._)((0, import_chunk_2yx6c1y2.wJe)().settings)).digest("hex") };
}
var b = "anthropic/repoRulesReadHere", Ee = { [b]: { v: 1 } }, J = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ [b]: (0, import_chunk_adx6804h.Ae)({ v: (0, import_chunk_adx6804h.v)(1) }) })), V = { repoRules: void 0 };
function TVe(e, s) {
  if (!(0, import_chunk_0jve1fep.Le)(s) || !Object.hasOwn(s, b)) return V;
  return J().safeParse(s).success ? G(e) : { refused: { cause: "repo_rules_ask_malformed", message: `${e} was not run: its request asks this server to read the repository's permission rules in a form that this server does not know. Retrying won't help.` } };
}
async function G(e) {
  try {
    return await (0, import_chunk_w58msjm6.Ih)(), { repoRules: w(q()) };
  } catch (s) {
    return (0, import_chunk_w578pjby.t)(`The repo's permission rules could not be read: ${(0, import_chunk_jv7av99m.d)(s)}`, { level: "error" }), { refused: { cause: "repo_rules_read_failed", message: `${e} was not run: this server could not read the repository's permission rules to judge it.` } };
  }
}
