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
var chunk_h5jsp3s5_exports = {};
__export(chunk_h5jsp3s5_exports, {
  Uue: () => Uue,
  asr: () => asr,
  lsr: () => lsr,
  u0t: () => u0t
});
module.exports = __toCommonJS(chunk_h5jsp3s5_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_wddxyb00 = require("/$bunfs/root/chunk-wddxyb00.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_g44r9njd = require("/$bunfs/root/chunk-g44r9njd.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_w1j4pyn0 = require("/$bunfs/root/chunk-w1j4pyn0.js");
var import_chunk_pyt5z6an = require("/$bunfs/root/chunk-pyt5z6an.js");
var import_chunk_myvyhcm0 = require("/$bunfs/root/chunk-myvyhcm0.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_crypto = require("crypto");
(0, import_chunk_adx6804h.B)();
function u0t(e) {
  let r = (0, import_chunk_bz1f2qnq.Z)(e);
  return (0, import_chunk_pyt5z6an.F7)() && r.shouldAvoidPermissionPrompts !== true && r.mode !== "dontAsk";
}
async function Uue(e) {
  let { toolUseContext: r, source: a } = e;
  if (!u0t(r)) return { kind: "unanswered", reason: "no_one_to_ask" };
  let s;
  try {
    s = await R(e);
  } catch (h) {
    if (r.abortController.signal.aborted) (0, import_chunk_w578pjby.t)(`confirmWithUser(${a}): ask aborted with the turn: ${(0, import_chunk_jv7av99m.d)(h)}`), s = { kind: "aborted" };
    else (0, import_chunk_k449cc64.i)(h), s = { kind: "unanswered", reason: "error" };
  }
  let o = { source_hash: (0, import_chunk_myvyhcm0.Zn)(a) };
  switch (s.kind) {
    case "chose":
    case "declined":
    case "aborted":
      (0, import_chunk_cqa9hrgx.u)("permission_confirm_with_user", { ...o, answer: (0, import_chunk_78g0060s.f)(s.kind) });
      break;
    case "unanswered":
      if (s.reason === "error") (0, import_chunk_cqa9hrgx.m)("permission_confirm_with_user", "error", o);
      else (0, import_chunk_cqa9hrgx.l)("permission_confirm_with_user", s.reason, o);
      break;
  }
  return s;
}
async function R({ canUseTool: e, toolUseContext: r, source: a, header: s, question: o, choices: h, personOnly: C }) {
  let w = import_chunk_g44r9njd.NY.inputSchema.safeParse(asr({ source: a, header: s, question: o, choices: h }));
  if (!w.success) throw new import_chunk_jv7av99m.A(`confirmWithUser(${a}): the question does not satisfy the AskUserQuestion schema: ${w.error.message}`, "confirmWithUser: the question does not satisfy the AskUserQuestion schema");
  let U = await import_chunk_g44r9njd.NY.checkPermissions(w.data, r);
  if (U.behavior !== "ask") throw new import_chunk_jv7av99m.A(`confirmWithUser(${a}): AskUserQuestion.checkPermissions answered ${U.behavior}, not ask`, "confirmWithUser: AskUserQuestion.checkPermissions did not answer ask");
  let W = { ...U, forcedByCaller: true, ...C === true && { personOnly: true } }, k = `${import_chunk_sjqze7qg.pae}${(0, import_crypto.randomUUID)()}`, V = import_chunk_wddxyb00.Yh.of(r.session).active;
  V?.watchConfirmAnswerEvent(k);
  let g;
  (0, import_chunk_sjqze7qg.EXa)(o);
  let b = await e(import_chunk_g44r9njd.NY, w.data, r, (0, import_chunk_bzyb60p0.La)({ content: [] }), k, W).finally(() => {
    (0, import_chunk_sjqze7qg.vXa)(o), (0, import_chunk_4vsz8a99.lwe)(r.session, k), g = V?.takeConfirmAnswerEventId(k);
  }), _ = I(b, W, r.abortController.signal, o, h);
  return _.kind === "chose" && g !== void 0 ? { ..._, answerEventId: g } : _;
}
function asr({ source: e, header: r, question: a, choices: s, appData: o }) {
  return { questions: [{ question: a, header: r, options: s.map(({ label: h, description: C }) => ({ label: h, description: C ?? "" })), multiSelect: false }], metadata: { ...o, source: e } };
}
function I(e, r, a, s, o) {
  if ((0, import_chunk_w1j4pyn0.nnt)(e, r)) return { kind: "unanswered", reason: "no_one_to_ask" };
  if (a.aborted) return { kind: "aborted" };
  switch (e.behavior) {
    case "allow":
      return lsr(e.updatedInput, s, o);
    case "deny":
      if (e.decisionReason.type === "other" && ((0, import_chunk_w1j4pyn0.EBa)(e.decisionReason.reason) || e.decisionReason.reason === import_chunk_pbteexar.UDs)) return { kind: "unanswered", reason: "host_closed" };
      if (e.decisionReason.type === "asyncAgent" || e.decisionReason.type === "other" && (0, import_chunk_w1j4pyn0.rnt)(e.decisionReason.reason)) return { kind: "unanswered", reason: "no_one_to_ask" };
      return { kind: "declined" };
    case "ask":
      return { kind: "declined" };
  }
}
function lsr(e, r, a) {
  let s = T().safeParse(e);
  if (!s.success) return { kind: "unanswered", reason: "no_selection" };
  if (s.data.followUp === true) return { kind: "declined" };
  let o = E(s.data.answers?.[r]);
  if (o === "") return { kind: "unanswered", reason: "no_selection" };
  let h = a.find((C) => y(C.label) === o);
  return h !== void 0 ? { kind: "chose", value: h.value } : { kind: "declined", typedAnswer: o };
}
var T = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ answers: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional(), followUp: (0, import_chunk_adx6804h.P)().optional() }));
function E(e) {
  if (typeof e === "string") return y(e);
  if (Array.isArray(e)) return y(e.filter((r) => typeof r === "string").join(", "));
  return "";
}
function y(e) {
  return e.replace(/\s+/g, " ").trim();
}
