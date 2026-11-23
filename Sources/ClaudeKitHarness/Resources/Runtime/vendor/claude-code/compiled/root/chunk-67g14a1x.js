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
var chunk_67g14a1x_exports = {};
__export(chunk_67g14a1x_exports, {
  Rml: () => Rml,
  cbr: () => cbr,
  dbr: () => dbr,
  ugo: () => ugo,
  zhs: () => zhs
});
module.exports = __toCommonJS(chunk_67g14a1x_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_a7h1jnra = require("/$bunfs/root/chunk-a7h1jnra.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_v6ez7m15 = require("/$bunfs/root/chunk-v6ez7m15.js");
class u {
  read = null;
  register(e) {
    this.read = e;
  }
  loaded() {
    if (this.read === null) import_chunk_a7h1jnra.jbe.loadWriters?.();
    return this.read;
  }
}
var zhs = new u();
function Rml(e) {
  zhs.register(e);
}
var dbr = { suppressAlwaysAllowRule: true, personOnly: true, defaultToNo: true, localDisplayOnly: true };
function m() {
  return import_chunk_3t7ve0wy.I4n.has((0, import_chunk_3t7ve0wy.Li)() ?? "") && (0, import_chunk_3t7ve0wy.ite)() && (0, import_chunk_2mwshd9r.mK)().status === "ok";
}
function p() {
  let e = (0, import_chunk_5e3gtsn9.Gc)();
  return !(0, import_chunk_3t7ve0wy.KA)() && (0, import_chunk_3t7ve0wy.NBl)() && (0, import_chunk_f9x2f6cx.zS)() === "stdio" && !(0, import_chunk_v6ez7m15.R0e)() && !(0, import_chunk_3t7ve0wy.nx)() && !(0, import_chunk_69qhefwa.Ne)(import_chunk_c203g5kd.s.CLAUDE_CODE_ACTION) && !(0, import_chunk_69qhefwa.Ne)(e?.CLAUDE_CODE_ACTION) && !import_chunk_c203g5kd.s.CLAUDE_JOB_DIR && !e?.CLAUDE_JOB_DIR?.trim() && !(0, import_chunk_3t7ve0wy.Bra)() && !(0, import_chunk_3t7ve0wy._4t)() && !(0, import_chunk_f9x2f6cx.st)();
}
function c(e) {
  if ((0, import_chunk_3t7ve0wy.KA)()) return "any";
  return m() || p() && e === void 0 && !(0, import_chunk_xfj2cwfv.rOr)() ? "to_this_call" : void 0;
}
function l(e) {
  return { behavior: "deny", message: e, decisionReason: { type: "safetyCheck", reason: "Creating an artifact needs a person to approve it", classifierApprovable: false } };
}
function cbr(e, n) {
  let { decider: o, scheduledTrigger: t, replacedTurnStart: r, outsideOpened: a } = (0, import_chunk_865at33z.PE)(e.messages), i = o === null ? void 0 : e.messages[o.index], d = o === null ? r?.bySessionUsersOwnWords === true : i !== void 0 && (0, import_chunk_865at33z._a)(o.origin) && (0, import_chunk_865at33z.s_)(i);
  if ((0, import_chunk_bz1f2qnq.k_)(e) || n && (0, import_chunk_bz1f2qnq.Z)(e).mode === "dontAsk" || t && !d || a === true || (0, import_chunk_865at33z._a)(o?.origin) && !d || r?.byHuman === true && !r.byHumanHere || n && p() && ((0, import_chunk_xfj2cwfv.rOr)() || o?.origin !== void 0 && !(0, import_chunk_865at33z._a)(o.origin))) return l("The user's organization requires a person to approve each new artifact, and nobody can be asked here: permission prompts are off or bypassed, or a schedule or a message from outside this session started this turn. Nothing was created or published. Tell the user they can ask for it themselves in a session that shows permission prompts, and don't retry in this turn.");
  return n && (0, import_chunk_f9x2f6cx.Se)() && !(0, import_chunk_f9x2f6cx.st)() && (0, import_chunk_3t7ve0wy.Li)() !== void 0 && c(e.agentId) === void 0 ? l("The user's organization requires a person to approve each new artifact, and nobody can be asked here: this kind of session can't show that an answer came from a person. Nothing was created or published. Don't retry. Tell the user they can ask for it themselves in desktop Cowork, a claude.ai chat or an interactive Claude Code session (version 2.1.309 or later).") : void 0;
}
function ugo(e) {
  let { toolUseId: n, allowGivenBy: o } = e, t = n === void 0 ? void 0 : e.toolDecisions?.get(n)?.source;
  if (t !== void 0) return t === "user_temporary" || t === "user_permanent";
  let r = e.permissionPhase?.pipeline?.result;
  if (r?.behavior === "allow") return false;
  let a = c(e.agentId);
  if (a !== "to_this_call") return a === "any";
  let i = o !== void 0 && o.toolUseId === n ? o.approver : void 0;
  return i === "user" || i === void 0 && n !== void 0 && (e.lateAnswerFor === n && (0, import_chunk_2mwshd9r.mK)().status === "ok" || r?.behavior === "ask" && r.personOnly === true);
}
