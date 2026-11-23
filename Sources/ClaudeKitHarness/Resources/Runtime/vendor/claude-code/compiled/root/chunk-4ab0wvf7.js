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
var chunk_4ab0wvf7_exports = {};
__export(chunk_4ab0wvf7_exports, {
  CSn: () => CSn,
  U5n: () => U5n,
  a9l: () => a9l,
  i9l: () => i9l,
  iFo: () => iFo,
  n9l: () => n9l,
  o$s: () => o$s,
  o9l: () => o9l,
  qPt: () => qPt,
  r9l: () => r9l,
  s9l: () => s9l,
  sFo: () => sFo,
  t9l: () => t9l
});
module.exports = __toCommonJS(chunk_4ab0wvf7_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_crypto = require("crypto");
var import_promises = require("fs/promises");
(0, import_chunk_adx6804h.B)();
var U5n = "anthropic/permissionAsks";
function t9l() {
  return { experimental: { [U5n]: { v: 1 } } };
}
var ee = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ experimental: (0, import_chunk_adx6804h.c)({ [U5n]: (0, import_chunk_adx6804h.c)({ v: (0, import_chunk_adx6804h.v)(1) }) }) })), n9l = "CheckPlainCall", r9l = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ tool: (0, import_chunk_adx6804h.n)(), input: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()) })), o9l = "not_refused", s9l = "anthropic/refusedAsInvalid", b = "anthropic/checksPlainCalls";
function i9l() {
  return { experimental: { [b]: { v: 1 } } };
}
var ne = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ experimental: (0, import_chunk_adx6804h.c)({ [b]: (0, import_chunk_adx6804h.c)({ v: (0, import_chunk_adx6804h.v)(1) }) }) })), a9l = "anthropic/modOwnCall", O = "anthropic/permissionQuestion", k = 32, R = 2e3, T = 1024, j = new RegExp(`[${import_chunk_kx2fp6pc.nw}]+`, "gu");
function qPt(t) {
  return (0, import_chunk_kx2fp6pc.P3)(t.replace(j, "\uFFFD"));
}
var S = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.n)().regex(/^[0-9a-f]{64}$/)), L = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ v: (0, import_chunk_adx6804h.v)(1), approved: (0, import_chunk_adx6804h.Ae)({ ask_digest: S(), attested: (0, import_chunk_adx6804h.P)() }).optional() })), te = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ v: (0, import_chunk_adx6804h.v)(1), outcome: (0, import_chunk_adx6804h.v)("needs_approval"), ask_digest: S(), reasons: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.Ae)({ reason: (0, import_chunk_adx6804h.n)().min(1).max(R), classifier_approvable: (0, import_chunk_adx6804h.P)(), circuit_breaker: (0, import_chunk_adx6804h.n)().max(64).optional(), also: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().max(64)).max(k).optional() })).min(1).max(k) }));
function sFo(t) {
  let e = (0, import_chunk_0jve1fep.Le)(t) ? t[U5n] : void 0;
  if (e === void 0) return { kind: "absent" };
  if (typeof e !== "string" || e.length > T) return { kind: "unreadable" };
  let r = L().safeParse((0, import_chunk_0jve1fep.et)(e, false)).data;
  if (r === void 0) return { kind: "unreadable" };
  return r.approved === void 0 ? { kind: "can_ask" } : { kind: "approved", askDigest: r.approved.ask_digest, attested: r.approved.attested };
}
function iFo(t, e, r = true) {
  return { reason: qPt(t.reason), classifier_approvable: e && !(r && (0, import_chunk_pbteexar.HK)(t)), ...t.circuitBreaker !== void 0 && { circuit_breaker: t.circuitBreaker }, ...t.also !== void 0 && { also: [...t.also] } };
}
function CSn(t) {
  if (t?.type === "safetyCheck") return [t];
  return t?.type === "subcommandResults" ? [...t.reasons.values()].flatMap((e) => CSn(e.decisionReason)) : [];
}
function w({ matchedAskRule: t, decisionReason: e }) {
  return [...t?.ruleBehavior === "ask" ? [g(t)] : [], ...e?.type === "rule" && e.rule.ruleBehavior === "ask" ? [g(e.rule)] : [], ...e?.type === "other" ? [A(e.reason)] : [], ...e?.type === "subcommandResults" ? [...e.reasons.values()].flatMap((r) => r.behavior === "ask" ? w(r) : []) : []];
}
function g(t) {
  return A(`A permission rule says to ask a person before a call like this one: '${(0, import_chunk_qebpc5de.yn)(t.ruleValue)}'`);
}
function A(t) {
  return { type: "safetyCheck", reason: t, classifierApprovable: false };
}
function N(t, e, { path: r, identity: f }, o) {
  return (0, import_crypto.createHash)("sha256").update((0, import_chunk_w578pjby._)([t, e, r, f ?? null, o])).digest("hex");
}
function K(t, e, r, f) {
  let o = (a) => iFo(a, a.classifierApprovable), s = CSn(r.decisionReason).map(o), d = w(r).map(o), m = d.length === 0 ? s : [...s.toSorted((a, y) => Number(a.classifier_approvable) - Number(y.classifier_approvable)), ...d].map((a) => ({ ...a, classifier_approvable: false })), i = (0, import_chunk_pbteexar.Ls)(m, import_chunk_w578pjby._);
  if (i.length === 0 || i.length > k) return;
  if (i.some((a) => a.reason.length > R)) return;
  return { v: 1, outcome: "needs_approval", ask_digest: N(t.name, e, f, i), reasons: i };
}
async function o$s(t, e, r, f, o) {
  let s = sFo(t);
  if (s.kind === "absent") return "as_without_the_key";
  if (o === void 0) return s.kind === "approved" ? u(e, "question_changed", h) : "as_without_the_key";
  if (s.kind === "unreadable") return u(e, "asks_key_unreadable", `${o.message} That needs a person's approval, and this server could not read its caller's offer to ask for one, so nobody was asked. Retrying won't help.`);
  let d = (0, import_chunk_f9x2f6cx.Rs)(f).cwd, m = { path: d, identity: await Promise.all([(0, import_promises.realpath)(d), (0, import_promises.stat)(d, { bigint: true })]).then(([a, y]) => a === d ? `${y.dev}:${y.ino}` : void 0, () => {
    return;
  }) };
  if (m.identity === void 0) return s.kind === "approved" ? u(e, "question_changed", h) : u(e, "start_folder_unconfirmed", `${o.message} That needs a person's approval, and nobody was asked, because the working directory was moved, is gone or cannot be read. Change directory first, then send the call again.`);
  let i = K(e, r, o, m);
  if (i === void 0) return u(e, "question_too_large", `${o.message} The permission check's objections are too many, or one is too long, for this server to put to a person, so nobody was asked. Send smaller calls, or use shorter paths.`);
  switch (s.kind) {
    case "can_ask":
      return (0, import_chunk_cqa9hrgx.l)("mcp_serve_plain_call", "asked"), { rejection: `${e.name} was not run: ${o.message} A person has to approve this call, and none did. Tell the user what you wanted to run and why.`, meta: { [O]: i } };
    case "approved":
      if (!s.attested) return u(e, "approval_not_from_person", "the approval sent with this call did not come from a person, and only a person's counts. Tell the user what you wanted to run and why.");
      return i.ask_digest === s.askDigest ? "run" : u(e, "question_changed", h);
  }
}
var h = "what a person approved is no longer what this call would do: the working directory, or what the permission check found, has changed since, or the working directory was moved, is gone or cannot be read. If it was moved, is gone or cannot be read, change directory first. Then send the call again to have it checked afresh.";
function u(t, e, r) {
  return (0, import_chunk_cqa9hrgx.l)("mcp_serve_plain_call", e), { rejection: `${t.name} was not run: ${r}` };
}
