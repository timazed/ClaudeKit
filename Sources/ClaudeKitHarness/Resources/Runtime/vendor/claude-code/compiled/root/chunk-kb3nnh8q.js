const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
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
var __using = (stack, value, async) => {
  if (value != null) {
    if (typeof value !== "object" && typeof value !== "function") __typeError("Object expected");
    var dispose, inner;
    if (async) dispose = value[__knownSymbol("asyncDispose")];
    if (dispose === void 0) {
      dispose = value[__knownSymbol("dispose")];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") __typeError("Object not disposable");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    stack.push([async, dispose, value]);
  } else if (async) {
    stack.push([async]);
  }
  return value;
};
var __callDispose = (stack, error, hasError) => {
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m2, _) {
    return _ = Error(m2), _.name = "SuppressedError", _.error = e, _.suppressed = s2, _;
  };
  var fail = (e) => error = hasError ? new E(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it) => {
    while (it = stack.pop()) {
      try {
        var result = it[1] && it[1].call(it[2]);
        if (it[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_kb3nnh8q_exports = {};
__export(chunk_kb3nnh8q_exports, {
  $zr: () => $zr,
  Bzr: () => Bzr,
  Fzr: () => Fzr,
  GTa: () => GTa,
  KIe: () => KIe,
  Sqs: () => Sqs,
  Uzr: () => Uzr,
  VKe: () => VKe,
  VTa: () => VTa,
  WTa: () => WTa,
  X8t: () => X8t,
  ZJn: () => ZJn,
  _Go: () => _Go,
  _qs: () => _qs,
  eQn: () => eQn,
  gGo: () => gGo,
  ght: () => ght,
  hGo: () => hGo,
  jTa: () => jTa,
  yGo: () => yGo,
  yqs: () => yqs,
  zTa: () => zTa
});
module.exports = __toCommonJS(chunk_kb3nnh8q_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_n5qd9b6p = require("/$bunfs/root/chunk-n5qd9b6p.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_8hfdvrr1 = require("/$bunfs/root/chunk-8hfdvrr1.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_drk264d0 = require("/$bunfs/root/chunk-drk264d0.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_b83x8d52 = require("/$bunfs/root/chunk-b83x8d52.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_q2404y26 = require("/$bunfs/root/chunk-q2404y26.js");
var import_chunk_4dnx2vkh = require("/$bunfs/root/chunk-4dnx2vkh.js");
var import_chunk_6h9mds0d = require("/$bunfs/root/chunk-6h9mds0d.js");
var import_chunk_mndk3x2g = require("/$bunfs/root/chunk-mndk3x2g.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_yg9g0473 = require("/$bunfs/root/chunk-yg9g0473.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_4f4ysf31 = require("/$bunfs/root/chunk-4f4ysf31.js");
var import_chunk_54j6k3fn = require("/$bunfs/root/chunk-54j6k3fn.js");
var import_chunk_4mh8nmh5 = require("/$bunfs/root/chunk-4mh8nmh5.js");
var import_chunk_jg3mepas = require("/$bunfs/root/chunk-jg3mepas.js");
var import_chunk_yvad17bv = require("/$bunfs/root/chunk-yvad17bv.js");
var import_chunk_qf73a9we = require("/$bunfs/root/chunk-qf73a9we.js");
var import_chunk_0canfdjs = require("/$bunfs/root/chunk-0canfdjs.js");
var import_chunk_tc5xmewh = require("/$bunfs/root/chunk-tc5xmewh.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_wddxyb00 = require("/$bunfs/root/chunk-wddxyb00.js");
var import_chunk_p51r1nb3 = require("/$bunfs/root/chunk-p51r1nb3.js");
var import_chunk_d3vfy4gs = require("/$bunfs/root/chunk-d3vfy4gs.js");
var import_chunk_7ds2xzy3 = require("/$bunfs/root/chunk-7ds2xzy3.js");
var import_chunk_qr6brph0 = require("/$bunfs/root/chunk-qr6brph0.js");
var import_chunk_sphs90qq = require("/$bunfs/root/chunk-sphs90qq.js");
var import_chunk_vj6f11qy = require("/$bunfs/root/chunk-vj6f11qy.js");
var import_chunk_knp99ee7 = require("/$bunfs/root/chunk-knp99ee7.js");
var import_chunk_wx3ay5nf = require("/$bunfs/root/chunk-wx3ay5nf.js");
var import_chunk_jrzfkd53 = require("/$bunfs/root/chunk-jrzfkd53.js");
var import_chunk_z2c6pmpw = require("/$bunfs/root/chunk-z2c6pmpw.js");
var import_chunk_6hkrqqbp = require("/$bunfs/root/chunk-6hkrqqbp.js");
var import_chunk_ynbv8e5n = require("/$bunfs/root/chunk-ynbv8e5n.js");
var import_chunk_759mf2n7 = require("/$bunfs/root/chunk-759mf2n7.js");
var import_chunk_jhy72swy = require("/$bunfs/root/chunk-jhy72swy.js");
var import_chunk_nd1dn2mq = require("/$bunfs/root/chunk-nd1dn2mq.js");
var import_chunk_wcvnrqjb = require("/$bunfs/root/chunk-wcvnrqjb.js");
var import_chunk_k1q4r2vq = require("/$bunfs/root/chunk-k1q4r2vq.js");
var import_chunk_kxv2z9ac = require("/$bunfs/root/chunk-kxv2z9ac.js");
var import_chunk_mzra7agn = require("/$bunfs/root/chunk-mzra7agn.js");
var import_chunk_yegw2jm5 = require("/$bunfs/root/chunk-yegw2jm5.js");
var import_chunk_pmap704y = require("/$bunfs/root/chunk-pmap704y.js");
var import_chunk_41appe38 = require("/$bunfs/root/chunk-41appe38.js");
var import_chunk_95a7fepj = require("/$bunfs/root/chunk-95a7fepj.js");
var import_chunk_5p1tkxex = require("/$bunfs/root/chunk-5p1tkxex.js");
var import_chunk_h9qt07a5 = require("/$bunfs/root/chunk-h9qt07a5.js");
var import_chunk_wd66nsbc = require("/$bunfs/root/chunk-wd66nsbc.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var import_chunk_harsxaq1 = require("/$bunfs/root/chunk-harsxaq1.js");
var import_chunk_mahb4v28 = require("/$bunfs/root/chunk-mahb4v28.js");
var import_chunk_yvba4101 = require("/$bunfs/root/chunk-yvba4101.js");
var import_chunk_cvv9kfq3 = require("/$bunfs/root/chunk-cvv9kfq3.js");
var import_chunk_ww0784kh = require("/$bunfs/root/chunk-ww0784kh.js");
var import_chunk_tjdnrbvx = require("/$bunfs/root/chunk-tjdnrbvx.js");
var import_chunk_c4zg4pwc = require("/$bunfs/root/chunk-c4zg4pwc.js");
var import_chunk_wx2mpa0f = require("/$bunfs/root/chunk-wx2mpa0f.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_tt4yhkc0 = require("/$bunfs/root/chunk-tt4yhkc0.js");
var import_chunk_bne5t4g3 = require("/$bunfs/root/chunk-bne5t4g3.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_util = require("util");
var import_crypto = require("crypto");
(0, import_chunk_adx6804h.B)();
function Xn(r, e, o) {
  if (e === void 0) return;
  let g = r?.message?.content;
  if (!Array.isArray(g)) return;
  return g.some((A) => (0, import_chunk_ma3kja9f.T)(A) && A.type === "tool_use" && A.id === e && (0, import_chunk_ma3kja9f.T)(A.input) && (A.input.run_in_background === true || o && A.input.run_in_background !== false)) ? e : void 0;
}
function Un(r) {
  let e = Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE), o = (0, import_chunk_f9x2f6cx.Y)(), g = !e && (0, import_chunk_bzyb60p0.aSt)(), y = r ? "(--restricted)" : "(no claude.ai login in use, or feature gate off)", A = e ? "(already inside a CCR session); running as a local agent" : o ? "(the session has no disk); running as a local agent" : g ? `${y}; falling back to isolation:'worktree'` : `${y} and no git root; running as a local agent`;
  return (0, import_chunk_w578pjby.t)(`[remote agent] isolation:'remote' is unavailable ${A}`), g ? "worktree" : void 0;
}
var en = (r, e) => ({ ...r, prompt: e.prompt, description: e.description, subagent_type: e.subagentType, model: e.model, run_in_background: e.background, cwd: e.cwd });
function Jn(r) {
  let { agent: e, isolation: o, restricted: g } = r, y = o ?? e.isolation;
  if (y !== void 0 && (0, import_chunk_tc5xmewh.yA)(e)) {
    (0, import_chunk_w578pjby.t)(`[web-fetch agent] isolation:'${y}' ignored; the built-in web-fetch agent always runs as a local agent`);
    return;
  }
  return y === "remote" && (!(0, import_chunk_bzyb60p0.Lts)() || g) ? Un(g) : y;
}
function Zn(r, e) {
  let o = r?.decisionReason, g = e.decisionReason;
  if (o?.type !== "rule" || g?.type !== "rule") return false;
  let [y, A] = [o.rule, g.rule];
  return y.source === A.source && y.ruleBehavior === A.ruleBehavior && y.ruleValue.toolName === A.ruleValue.toolName && y.ruleValue.ruleContent === A.ruleValue.ruleContent;
}
var no = true;
var so = false;
function ao(r) {
  let { agent: e, wantsBackground: o, callerIsInProcessTeammate: g } = r, y = g || r.callerIsHeadlessSubagent, A = r.isCoordinator && !g || r.forceAsync || !y && o !== false, I = Jn(r), _ = o === true || e.background === true || !(0, import_chunk_tc5xmewh.yA)(e) && A, x = I === "remote";
  return { effectiveIsolation: I, isRemoteLaunch: x, shouldRunAsync: x || _ && !r.backgroundTasksDisabled };
}
async function er(r) {
  let { tool: e, raised: o, rewritten: g, context: y } = r;
  if ((0, import_util.isDeepStrictEqual)(o, g)) return null;
  let A = await (0, import_chunk_bzyb60p0.ev)(e, g, y);
  if (A === null || A.behavior === "deny") return A;
  return Zn(await (0, import_chunk_bzyb60p0.ev)(e, o, y), A) ? null : A;
}
var tr = { deny: "denies", ask: "asks about" };
var bt = (r, e) => e && r.mode === "prompt";
var Tt = (r) => (0, import_chunk_bzyb60p0.cSt)(r) && r.promptSubmitted === void 0 && r.shouldQuery !== false && r.skipSubmissionHooks !== true;
var ho = "update_queued_message_v1";
function KIe() {
  return !(0, import_chunk_f9x2f6cx.E$)() && (0, import_chunk_865at33z.b)("tengu_patient_drawbridge", false);
}
function Fzr() {
  return KIe() ? [ho] : [];
}
function kt(r, e) {
  let o = new Set(e.getCommandQueue());
  return r.filter((g) => o.has(g) && !(g.mode === "prompt" && g.priority === "later" && KIe()));
}
function rr(r, e) {
  let o = false, g = [];
  for (let y of r) if (Tt(y)) o = true;
  else if (!bt(y, o)) g.push(y);
  return kt(g, e);
}
var VKe = (r) => r !== void 0 && import_chunk_q2404y26.xae.get()?.has(r) === true;
var or = (r) => r.mode === "task-notification" ? { kind: "task-notification" } : void 0;
var sr = (r) => ({ text: (0, import_chunk_bzyb60p0.wu)(r.value) ?? "", input: r.value, pastedContents: r.pastedContents, ...r.isMeta === true && { isMeta: true } });
function ir(r, e, o) {
  let g = (0, import_chunk_xfj2cwfv.pee)(r.origin) ?? or(r), y = r.isMeta === true || !(0, import_chunk_865at33z.$u)(g);
  return { submission: sr(r), origin: g, bridgeOrigin: r.bridgeOrigin, mode: r.mode, turnId: (0, import_chunk_bzyb60p0.ufe)()?.turnId, shouldWait: r.wait === true, context: e, result: o, promptSource: (0, import_chunk_bzyb60p0.xQt)({ isNonInteractive: e.options.isNonInteractiveSession, isMeta: r.isMeta, callerSource: y ? "system" : r.inputSource ?? "queued" }), wakeupSource: r.wakeupSource, isStartInput: VKe(r.uuid) };
}
var St = (r, e) => ({ fate: r ? e : "left" });
function ght(r) {
  return (0, import_chunk_tjdnrbvx.Kl)(r) && r.mode === "prompt" && r.shouldQuery !== false && r.isMeta === true && r.origin?.kind === "peer" && r.origin.senderTaskId !== void 0 && r.origin.handback === true;
}
function Ao(r) {
  return typeof r === "string" ? [{ type: "text", text: r }] : r;
}
function Io(r) {
  if (r.length === 1) return r[0];
  if (r.every((e) => typeof e === "string")) return r.join(`
`);
  return r.map(Ao).reduce(import_chunk_bzyb60p0.Tos);
}
function hGo(r) {
  let e = r[0];
  if (r.length === 1) return e;
  let o = (0, import_chunk_jrzfkd53.aUa)(r), g = r.findLast((_) => _.uuid) ?? e, y = Io(r.map((_) => _.value)), A = e.origin?.kind === "peer" ? (0, import_chunk_xfj2cwfv.Ide)(e.origin, y, e.value) : void 0, I = r.flatMap(({ origin: _ }) => _?.kind === "peer" && _.body !== void 0 ? [{ body: _.body }] : []);
  return { ...e, ...A !== void 0 && { origin: I.length === r.length ? { ...A, members: I } : A }, ...e.origin?.kind === "task-notification" && e.origin.subkind === "external-event" && r.some((_) => _.origin?.kind !== "task-notification" || _.origin.subkind !== "external-event") && { origin: (0, import_chunk_xfj2cwfv.$6t)(e.origin) }, value: y, hostAsked: r.every((_) => _.hostAsked) ? e.hostAsked : void 0, ownWord: r.every((_) => _.ownWord) ? e.ownWord : void 0, declaresNoSender: r.every((_) => _.declaresNoSender) ? e.declaresNoSender : void 0, bearsNoUntypedMark: r.every((_) => _.bearsNoUntypedMark) || void 0, uuid: g.uuid, frameTiming: g.frameTiming, turnAttributionKey: (0, import_chunk_865at33z.s4i)(r), traceContext: o.parent, linkedTraceContexts: o.linked, attachmentSourceUuid: void 0, deliveryId: void 0, fileAttachments: r.flatMap((_) => _.fileAttachments ?? []), ...r.some((_) => _.namesWidgetViews) && { namesWidgetViews: true }, clientPlatform: r.find((_) => _.clientPlatform)?.clientPlatform ?? e.clientPlatform, clientContentWidth: r.findLast((_) => _.clientContentWidth !== void 0)?.clientContentWidth, ccrTurnId: (0, import_chunk_xfj2cwfv.qMl)(r), typedByPerson: r.every((_) => _.typedByPerson === true) || void 0, ccrProgramUseCaseId: (0, import_chunk_xfj2cwfv.YMl)(r), ...r.some((_) => _.ccrTurnIdEndsWithTurn) && { ccrTurnIdEndsWithTurn: true }, ...r.some((_) => _.stampThreadState) && { stampThreadState: true }, ...r.some((_) => _.ultrathinkTyped) && { ultrathinkTyped: true }, ...r.some((_) => _.toolsUsed !== void 0) && { toolsUsed: (0, import_chunk_4smdap7r.M)(r.flatMap((_) => _.toolsUsed ?? [])) }, ...r.some((_) => _.fromConnector === true) && { fromConnector: true } };
}
function $zr(r) {
  return r.uuid !== void 0 && (r.turnAttributionKey !== void 0 || !r.isMeta);
}
function X8t(r) {
  return !Uzr(r) && r.some((e) => e.resumedTurnUserMessageUuid !== void 0 || $zr(e) && (e.turnAttributionKey !== void 0 || e.resumeReason !== void 0));
}
function Uzr(r) {
  return r.some((e) => e.handedOffTurn?.kind === "run" || e.resumedTurnUserMessageUuid !== void 0 && e.resumedTurnOpenerVouched !== true);
}
function ZJn(r) {
  return r.flatMap((e) => [e.uuid, e.resumedTurnUserMessageUuid, e.droppedPromptReport?.uuid, ...e.mergedSendUuids ?? [], ...e.alsoLeftToThisReRun ?? [], ...e.sendsOfItsCompactedTurn ?? []].filter((o) => o !== void 0));
}
function ar(r) {
  return r.drainOnly === true && r.resumedTurnUserMessageUuid !== void 0 || r.sendsOfItsCompactedTurn !== void 0 || r.isMeta === true && r.alsoLeftToThisReRun !== void 0;
}
function WTa(r, e) {
  return e !== void 0 && r.mode === "prompt" && e.mode === "prompt" && e.workload === r.workload && e.isMeta === r.isMeta && e.shouldQuery === r.shouldQuery && e.wakeupSource === r.wakeupSource && (0, import_chunk_tjdnrbvx.iTr)(e, r) && Eo(r.origin, e.origin) && !lr(r.origin) && !lr(e.origin) && !!e.verifiedSlackHumanTurn === !!r.verifiedSlackHumanTurn && !!e.projectsUserTurn === !!r.projectsUserTurn && e.emailSenderTurn === r.emailSenderTurn && !!e.localStdinOrigin === !!r.localStdinOrigin && !!e.sessionChannelPersonTyped === !!r.sessionChannelPersonTyped && (0, import_chunk_bzyb60p0.Rie)(e.hostInitiator) === (0, import_chunk_bzyb60p0.Rie)(r.hostInitiator) && !!e.skipAttachments === !!r.skipAttachments && !!e.skipSlashCommands === !!r.skipSlashCommands && !ar(r) && !ar(e) && !r.continuesInterruptedWork && !e.continuesInterruptedWork && r.seededSummon !== true && e.seededSummon !== true && !(0, import_chunk_5p1tkxex.XAn)(r.value) && !(0, import_chunk_5p1tkxex.XAn)(e.value) && e.answeredPost === void 0 && r.hearthRelayRows === void 0 && e.hearthRelayRows === void 0 && r.hearthRelayThreadTs === void 0 && e.hearthRelayThreadTs === void 0 && r.hearthRelayMessageIds === void 0 && e.hearthRelayMessageIds === void 0 && (e.priority === r.priority || r.priority === "now" && r.raisedFrom !== void 0 && e.priority === r.raisedFrom) && !r.inlinedImagePaths?.length && !e.inlinedImagePaths?.length && !r.imageFileUuids?.length && !e.imageFileUuids?.length && !r.runsAlone && !e.runsAlone && !r.filesBesideLine && !e.filesBesideLine && !r.textNotTyped && !e.textNotTyped && (r.shouldQuery !== false || !r.fileAttachments?.length && !e.fileAttachments?.length) && !r.taskDelivery && !e.taskDelivery && !(0, import_chunk_tjdnrbvx.wg)(r.value) && !(0, import_chunk_tjdnrbvx.wg)(e.value);
}
var jTa = import_chunk_tt4yhkc0.DXe;
function GTa(r, e) {
  return e.priority === r.priority && e.workload === r.workload && !!e.isMeta === !!r.isMeta && !!e.skipAttachments === !!r.skipAttachments && e.wakeupSource === r.wakeupSource && (0, import_chunk_tjdnrbvx.iTr)(e, r) && e.ccrTurnId === r.ccrTurnId && (0, import_chunk_865at33z.$pn)(e) === (0, import_chunk_865at33z.$pn)(r) && (ur(r) && ur(e) || dr(r) && dr(e));
}
function _qs(r) {
  return (0, import_chunk_tjdnrbvx.Tc)(r) && !(0, import_chunk_qf73a9we.W_)(r) && !(0, import_chunk_bzyb60p0.EQ)(r) && r.waitsOutStop !== true;
}
function ur(r) {
  if (!(0, import_chunk_tjdnrbvx.K2e)(r) || r.taskId === void 0 || !Ro(r.origin) || r.uuid !== void 0 || r.taskDelivery !== void 0 || r.userResumeNotice === true || r.stopHookActive === true || r.shouldQuery === false || typeof r.value !== "string") return false;
  let e = r.value.trim(), o = `<${import_chunk_k449cc64.Ou}>`, g = `</${import_chunk_k449cc64.Ou}>`;
  return e.startsWith(o) && e.indexOf(o, 1) === -1 && e.endsWith(g) && e.indexOf(g) === e.length - g.length && (0, import_chunk_h9qt07a5.Bi)(e, import_chunk_k449cc64.yT) !== null;
}
function dr(r) {
  return ght(r) && (0, import_chunk_tjdnrbvx.xcn)(r) === void 0 && r.uuid === void 0 && r.drainOnly !== true && r.promptSubmitted === void 0 && r.resumeReason === void 0 && typeof r.value === "string";
}
function Ro(r) {
  return r === void 0 || (0, import_chunk_xfj2cwfv.rB)(r) && (0, import_chunk_xfj2cwfv.mee)(r);
}
var vo = ["from", "name", "inbound_origin", "senderTaskId", "verifiedPeerPid", "verifiedLocal", "hostInjected", "activityObservation", "plugin", "selfSent"];
function lr(r) {
  return r?.kind === "peer" && r.handback === true;
}
function Eo(r, e) {
  if (r === e) return true;
  if (!r || !e) return false;
  if (r.kind !== e.kind) return false;
  if (r.kind === "slack-ping" && e.kind === "slack-ping") return r.channelId === e.channelId && r.threadTs === e.threadTs && r.messageTs === e.messageTs && r.slackUserId === e.slackUserId && r.senderDisplay === e.senderDisplay && r.permalink === e.permalink;
  if (r.kind === "peer" && e.kind === "peer") return vo.every((o) => r[o] === e[o]) && (r.fullHopChain === e.fullHopChain || (0, import_chunk_p51r1nb3.hFn)(r) === (0, import_chunk_p51r1nb3.hFn)(e));
  if (r.kind === "channel" && e.kind === "channel") return r.server === e.server;
  if (r.kind === "plugin" && e.kind === "plugin") return r.name === e.name && r.asUser === e.asUser;
  if (r.kind === "task-notification" && e.kind === "task-notification") return (r.subkind === e.subkind || (0, import_chunk_xfj2cwfv.kAt)(r.subkind) && (0, import_chunk_xfj2cwfv.kAt)(e.subkind)) && r.fireReason === e.fireReason;
  return true;
}
function pr({ outcome: r, scratch: e, under: o, text: g, isHidden: y }) {
  let { proceeds: A } = r;
  return { text: y ? g : A ? A.text : r.text ?? g, context: A ? A.context : r.context, messages: e.messages, under: o, stopped: A ? void 0 : r.stopped, sessionTitle: A?.sessionTitle };
}
var mr = (r) => !r.isStartInput && (0, import_chunk_q2404y26.m7)() !== void 0;
var cr = "Claude did not get this message: a hook in this session blocked it or could not check it.";
function Do(r, e) {
  let o = true;
  try {
    o = (0, import_chunk_wddxyb00.rm)(e.session);
  } catch (g) {
    (0, import_chunk_w578pjby.t)(`shouldRedactPersistedInitFrame threw; the dropped prompt's report withholds the hooks' words: ${(0, import_chunk_jv7av99m.d)(g)}`);
  }
  if (!o) return { messages: r.messages.map((g) => ({ ...g, uuid: (0, import_crypto.randomUUID)() })), shouldQuery: false, resultText: r.resultText };
  return { messages: r.messages.flatMap((g) => {
    let y = g.type === "system" && g.subtype === "informational" ? g.promptSubmitEnding?.ending : void 0;
    return y === void 0 ? [] : (0, import_chunk_z2c6pmpw.MCn)(cr, y.kind === "no_verdict" ? { kind: y.kind, noVerdictKind: y.noVerdictKind } : { kind: y.kind }).messages;
  }), shouldQuery: false, resultText: cr };
}
async function fr(r, e) {
  let o = e.messageQueue, g = { messages: [], shouldQuery: true }, y = ir(r, e, g), A = () => St(o.settleSurfaced(r, { promptSubmitted: void 0, drainOnly: true }), "waits");
  if (mr(y) || (0, import_chunk_f9x2f6cx.mf)()?.callRefusal?.("UserPromptSubmit") !== void 0) return A();
  let I, _, x;
  function _e(E) {
    if (!E || !I || E.wasCancelled) return St(o.settleSurfaced(r, { promptSubmitted: void 0, drainOnly: true }), "waits");
    let Re = E.ended !== void 0;
    return St(o.settleSurfaced(r, { promptSubmitted: pr({ outcome: E, scratch: g, under: I, text: y.submission.text, isHidden: r.isMeta === true && (0, import_chunk_865at33z.cRo)(y.origin) }), drainOnly: Re ? true : void 0 }), Re ? "waits" : "surfaces");
  }
  try {
    I = (0, import_chunk_z2c6pmpw.wDt)(e), _ = await (0, import_chunk_z2c6pmpw.N5r)({ ...y, enter: async (E) => {
      x = _e(E);
    } });
  } catch (E) {
    if (!(0, import_chunk_jv7av99m.Fe)(E)) (0, import_chunk_w578pjby.t)("prompt.submit at the fold failed, leaving the prompt to the drain: " + (0, import_chunk_jv7av99m.d)(E), { level: "error" });
  }
  if (x) return x;
  let L = _?.ended && _.stopped === void 0 ? _.ended : void 0;
  function ce(E) {
    if (!o.settleSurfaced(r, { dropped: true })) return { fate: "left" };
    o.handTypedBack([r]);
    try {
      if ($zr(r) && (0, import_chunk_865at33z._a)(r.origin) && e.options.isNonInteractiveSession && (0, import_chunk_wddxyb00.N5e)(e.session)) o.queueAfterTurn({ mode: "prompt", value: "", isMeta: true, shouldQuery: false, drainOnly: true, runsAlone: true, unlogged: true, agentId: r.agentId, droppedPromptReport: { uuid: r.uuid, ended: Do(E, e) } });
    } catch (Re) {
      (0, import_chunk_w578pjby.t)(`the dropped prompt gets no report: ${(0, import_chunk_jv7av99m.d)(Re)}`, { level: "error" });
    }
    return { fate: "dropped", notices: E.messages };
  }
  return L ? ce(L) : _e(_);
}
async function zTa(r, e) {
  let o = [], g = [], y = [], A = false, I = false, _;
  try {
    for (let x of r) {
      if (bt(x, A)) continue;
      if (_ ??= (0, import_chunk_z2c6pmpw.cZs)(e), !Tt(x) || !_) {
        o.push(x);
        continue;
      }
      I = true;
      let L = await fr(x, e);
      switch (L.fate) {
        case "surfaces":
          o.push(x);
          break;
        case "waits":
          A = true;
          break;
        case "dropped":
          g.push(...L.notices), y.push(x);
          break;
        case "left":
          break;
      }
    }
  } catch (x) {
    if (!(0, import_chunk_jv7av99m.Fe)(x)) (0, import_chunk_k449cc64.i)(x);
    return { deliverable: rr(r, e.messageQueue), notices: g, dropped: y };
  }
  return { deliverable: I ? kt(o, e.messageQueue) : o, notices: g, dropped: y };
}
async function gGo(r, e) {
  if (r === void 0) return [];
  if (r.sessionTitle !== void 0) try {
    await (0, import_chunk_bzyb60p0.PMn)(e.session.id, r.sessionTitle, e.storageV5, e.credentials);
  } catch (y) {
    if (!(0, import_chunk_jv7av99m.Fe)(y)) (0, import_chunk_w578pjby.t)(`Failed to apply a folded prompt.submit session title: ${(0, import_chunk_jv7av99m.d)(y)}`, { level: "error" });
  }
  let o = r.messages.filter((y) => y.type === "attachment" || y.type === "user"), g = await (0, import_chunk_sjqze7qg.Ann)(r.context ?? [], "prompt.submit", e.storageV5);
  return g.length > 0 ? [...o, (0, import_chunk_z2c6pmpw.ICn)(g, "prompt.submit")] : o;
}
function Bzr(r) {
  let e = false;
  return (o) => {
    if (e && o.mode === "prompt") return false;
    if (!Bo(o, r)) return true;
    return e = true, false;
  };
}
function Bo(r, e) {
  if (r.drainOnly === true || r.screeningPending === true || r.answeredPost !== void 0) return true;
  if (r.promptSubmitted === void 0) return false;
  let o = e();
  return o === void 0 || (0, import_chunk_z2c6pmpw.L5r)(r.promptSubmitted.under, o);
}
async function tn(r, e, o) {
  let g = [];
  try {
    if (e.agentId !== void 0 || e.innerCall || !e.takesReportRows || !e.options.isNonInteractiveSession || !o || false || (0, import_chunk_bz1f2qnq.Tp)(import_chunk_865at33z.rxl) !== "on" || !hr(e)) return g;
    let y = yr(r, e);
    if (y.length > 0 && Lo()) return (0, import_chunk_cqa9hrgx.l)("report_beside_its_result", "stamped_turn"), g;
    let A = await zTa(y, e);
    g.push(...A.notices.filter((L) => L.type === "system"));
    let I = A.deliverable;
    if (I.length === 0) return g;
    let _ = await (0, import_chunk_bzyb60p0.zye)(I, (0, import_chunk_yvba4101.ac)(e.modelFacts.model), 0, { tools: e.options.tools, messages: e.messages });
    if (_.length !== I.length) return (0, import_chunk_cqa9hrgx.m)("report_beside_its_result", "attachments_missing"), g;
    let x = [];
    for (let [L, ce] of _.entries()) x.push((0, import_chunk_bzyb60p0.Ut)(ce.type === "queued_command" ? { ...ce, beside_result: o } : ce), ...await gGo(I[L]?.promptSubmitted, e));
    let _e = yr(r, e);
    return hr(e) && I.every((L) => _e.includes(L)) ? [...g, ...x] : g;
  } catch (y) {
    if (!(0, import_chunk_jv7av99m.Fe)(y)) (0, import_chunk_cqa9hrgx.m)("report_beside_its_result", "threw"), (0, import_chunk_k449cc64.i)(y);
    return g;
  }
}
function VTa(r) {
  try {
    let e = [];
    for (let o = 0; o < r.length; o++) {
      let g = r[o];
      if (g?.type !== "attachment" || g.attachment?.type !== "queued_command") continue;
      let y = (0, import_chunk_bzyb60p0.pts)(r, o);
      if (y !== void 0) e.push({ origin: y.origin, value: y.prompt });
    }
    if (e.length > 0) (0, import_chunk_xfj2cwfv.Rke)(e);
  } catch (e) {
    (0, import_chunk_wx3ay5nf.uJs)(), (0, import_chunk_cqa9hrgx.m)("report_beside_its_result", "rows_unreadable"), (0, import_chunk_k449cc64.i)(e);
  }
}
function hr({ abortController: r, messageQueue: e }) {
  return !r.signal.aborted && !e.isMidTurnFoldSuspended();
}
function Lo() {
  return (0, import_chunk_xfj2cwfv.tct)() !== void 0 || (0, import_chunk_xfj2cwfv.Amn)() !== void 0;
}
function yr(r, e) {
  return e.messageQueue.getCommandQueue().filter(Bzr((0, import_chunk_z2c6pmpw.D5r)(() => e, { latch: true }))).filter((o) => ght(o) && o.origin?.kind === "peer" && o.origin.senderTaskId === r);
}
class Ge {
  #e = /* @__PURE__ */ new Map();
  #t;
  #n;
  constructor(r = 2048, e = 6e5) {
    this.#t = r, this.#n = e;
  }
  static key(r, e) {
    return JSON.stringify([r, ...e]);
  }
  static #r(r) {
    return `${JSON.stringify([r]).slice(0, -1)},`;
  }
  get size() {
    return this.#e.size;
  }
  set(r, e, o) {
    if (this.dropToolUse(r), this.#e.size >= this.#t) {
      let g = Date.now();
      for (let [y, A] of this.#e) if (g - A.at > this.#n) this.#e.delete(y);
      if (this.#e.size >= this.#t) {
        let y = this.#e.keys().next().value;
        if (y !== void 0) this.#e.delete(y);
      }
    }
    this.#e.set(Ge.key(r, e), { value: o, at: Date.now() });
  }
  take(r, e) {
    let o = Ge.key(r, e), g = this.#e.get(o);
    return this.#e.delete(o), g?.value;
  }
  has(r, e) {
    return this.#e.has(Ge.key(r, e));
  }
  dropToolUse(r) {
    let e = Ge.#r(r);
    for (let o of this.#e.keys()) if (o.startsWith(e)) this.#e.delete(o);
  }
}
var It = "dontAsk", Wo = 8, jo = new RegExp(import_chunk_9b4aq7fb.UVn.source, "gi");
class nn extends Ge {
}
async function Qo({ prompt: r, subagent_type: e }, o) {
  let g = (0, import_chunk_bz1f2qnq.Z)(o), y = g.mode;
  if (!(0, import_chunk_xfj2cwfv.Jr)(y) || (0, import_chunk_xcgcdx61.nP)(It, y) !== It || !(0, import_chunk_bzyb60p0.pfe)(e, o.options.agentDefinitions.activeAgents) || typeof r !== "string" || (0, import_chunk_bzyb60p0.cOn)() || (0, import_chunk_bzyb60p0.JL)() || (0, import_chunk_bzyb60p0.rOn)(import_chunk_ww0784kh.Gn, y, g) || (0, import_chunk_f9x2f6cx.aA)()) return false;
  let A = new Set([...r.matchAll(jo)].map((I) => (0, import_chunk_9b4aq7fb.FPe)(I[0])));
  if (A.size === 0 || A.size > Wo) return false;
  for (let I of A) {
    let _ = import_chunk_bzyb60p0.qw.inputSchema.safeParse({ url: I, prompt: "" });
    if (!_.success || await (0, import_chunk_bzyb60p0.ev)(import_chunk_bzyb60p0.qw, _.data, o) !== null || (await import_chunk_bzyb60p0.qw.checkPermissions(_.data, o)).behavior !== "allow") return false;
  }
  return true;
}
async function wr({ input: r, toolUseContext: e }) {
  if (!await Qo(r, e)) return false;
  return xo(e), true;
}
function xo({ toolUseId: r, toolState: e }) {
  if (r === void 0) return;
  e.get(nn).set(r, [], true);
}
function rn({ toolUseId: r, toolState: e }) {
  return r !== void 0 && e.get(nn).take(r, []) === true;
}
function on(r, e) {
  if (r === null || typeof r !== "object" || e === null || typeof e !== "object" || e.status === "remote_launched") return e;
  let o = false;
  switch (r.status) {
    case "completed":
    case "async_launched":
      o = r.canContinueAgent;
      break;
    case "remote_launched":
      break;
  }
  return { ...e, canContinueAgent: o === false || e.canContinueAgent === false ? false : o };
}
var Ho = { none: "Each fresh agent you launch has a budget of {N} tokens, counting the context it starts with.", forks: "Each agent you launch has a budget of {N} tokens. For a fork, the budget does not count the context it starts with.", all: "Each agent you launch has a budget of {N} tokens. The budget does not count the context the agent starts with: its system prompt, its tools, and your prompt to it." };
function br(r) {
  if ((0, import_chunk_c4zg4pwc.dl)() || (0, import_chunk_865at33z.JP)(r)) return;
  if ((0, import_chunk_bzyb60p0.Qlr)("tengu_streamed_bumblebee", import_chunk_c203g5kd.s.CLAUDE_CODE_STREAMED_BUMBLEBEE) !== true) return;
  let e = (0, import_chunk_bzyb60p0.Oui)((0, import_chunk_6hkrqqbp.qTn)((0, import_chunk_f9x2f6cx.q4t)()), void 0);
  if (e === void 0) return;
  let o = (0, import_chunk_bzyb60p0.Qlr)("tengu_streamed_bumblebee_text", import_chunk_c203g5kd.s.CLAUDE_CODE_STREAMED_BUMBLEBEE_TEXT), g = typeof o === "string" && o.trim() !== "", y = g ? o.trim() : Ho[(0, import_chunk_bzyb60p0.Myt)()];
  return (0, import_chunk_y53wbr8a.a)("tengu_streamed_bumblebee_applied", { budget: e, isConfiguredWording: g }), y.replaceAll("{N}", e.toLocaleString("en-US"));
}
var zo = 1e3, Go = 64;
function _r() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS !== void 0) return import_chunk_c203g5kd.s.CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS;
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE || import_chunk_c203g5kd.s.CLAUDE_CODE_IS_COWORK || (0, import_chunk_3t7ve0wy.Gm)() || (0, import_chunk_f9x2f6cx.st)()) return import_chunk_bzyb60p0.dNt;
  let r = (0, import_chunk_865at33z.b)(import_chunk_865at33z.Cxl, import_chunk_bzyb60p0.dNt), e = Go, o = typeof r === "number" && Number.isInteger(r) && r > import_chunk_bzyb60p0.dNt && r <= zo ? Math.min(r, e) : import_chunk_bzyb60p0.dNt, g = (0, import_chunk_n5qd9b6p.Ar)();
  if (g.servedSubagentLimitLogged !== o) g.servedSubagentLimitLogged = o, (0, import_chunk_y53wbr8a.a)("tengu_subagent_concurrency_limit", { limit: o });
  return o;
}
function yqs(r, e) {
  if (!r || r === import_chunk_bzyb60p0.W$.agentType) return;
  if (r !== import_chunk_95a7fepj.LDt) return r;
  let o = e?.find((g) => g.agentType === import_chunk_95a7fepj.LDt);
  return o !== void 0 && o.source !== "built-in" ? r : void 0;
}
function _Go(r, { activeAgents: e, webFetchByAgentType: o = false } = {}) {
  if (!o && (0, import_chunk_bzyb60p0.pfe)(r?.subagent_type, e)) return import_chunk_ww0784kh.xbo;
  return yqs(r?.subagent_type, e) ?? "Agent";
}
function yGo(r, { activeAgents: e } = {}) {
  if (!r?.subagent_type || (0, import_chunk_bzyb60p0.pfe)(r.subagent_type, e)) return;
  return (0, import_chunk_xfj2cwfv.dct)(r.subagent_type);
}
class me extends Error {
  constructor(r) {
    super(r);
    this.name = "AgentTypeError";
  }
}
class vt extends Error {
  constructor(r) {
    super(r);
    this.name = "RemoteAgentPreconditionError";
  }
}
var qo = 'Cannot launch cloud agent: this session limits what your own Claude Code files can do (CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG), and a cloud session would not apply those limits. Set isolation to "worktree" instead.';
class K extends Error {
  constructor(r) {
    super(r);
    this.name = "AgentPreconditionError";
  }
}
async function Tr(r, e) {
  let o = await (0, import_chunk_ynbv8e5n.uHa)(r);
  if (o !== void 0) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_cwd_refused"), new K(e === "the call" ? `Cannot run the agent in another directory: ${o}. Start it without cwd.` : `A plugin's agent.spawn hook set cwd on this spawn: ${o}.`);
}
var Ko = 2e3, Yo = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ description: (0, import_chunk_adx6804h.n)().describe(import_chunk_060xwhvh.Nkl), prompt: (0, import_chunk_adx6804h.n)().describe(import_chunk_060xwhvh.Lkl), subagent_type: (0, import_chunk_adx6804h.n)().optional().describe("The type of specialized agent to use for this task"), model: (0, import_chunk_adx6804h.F)(import_chunk_060xwhvh.Fkl).optional().describe(`Optional model override for this agent. Takes precedence over the agent definition's model frontmatter and the configured default subagent model. If omitted, uses the agent definition's model, else the default (inherits from the parent unless a default subagent model is configured). Ignored for subagent_type: "fork" \u2014 forks always inherit the parent model.` + ((0, import_chunk_c4zg4pwc.dl)() ? import_chunk_c203g5kd.s.CLAUDE_CODE_COORDINATOR_FORCE_WORKER_INHERIT_MODEL ? " Unavailable on this session: this parameter is ignored \u2014 do not set it." : " Set this only when EXPLICITLY asked by the user for a specific model, never because the task seems small, simple, or cheap; otherwise omit it so the worker uses the default (the session model, unless a default subagent model is configured)." : "")), effort: (0, import_chunk_adx6804h.F)(import_chunk_8hfdvrr1.ea).optional().describe("Reasoning effort for this agent. Set this ONLY when the user, or instructions such as CLAUDE.md or a skill, explicitly ask that this agent or delegated work run at a specific effort level, never on your own judgment; otherwise omit it and the agent runs at its usual effort." + ((0, import_chunk_bzyb60p0.ZUe)() ? ' Ignored for subagent_type: "fork": a fork runs at your own effort.' : "")), run_in_background: (0, import_chunk_adx6804h.P)().optional().describe("Agents run in the background by default; you will be notified when one completes. Set to false only when your very next action depends on this agent's result and nothing else could usefully happen while it runs \u2014 otherwise leave it in the background so the user can hand you other work.") })), Xo = (0, import_chunk_2cbgkbm2.p)(() => {
  let r = (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)().regex(import_chunk_xfj2cwfv.oHl, { message: "name must start with a letter or digit and contain only letters, digits, underscores, or hyphens (max 64 chars)" }).refine((e) => e !== import_chunk_865at33z.cS, { message: `"${import_chunk_865at33z.cS}" is reserved \u2014 SendMessage routes it to the main conversation` }).refine((e) => !(0, import_chunk_865at33z.$j)(e), { message: 'name must not be a reserved name ("main", "team-lead", "user" or "system", in any spelling) or have the shape of an agent id or a session id \u2014 those already address a recipient directly' }).optional().describe(import_chunk_060xwhvh.$kl), team_name: (0, import_chunk_adx6804h.n)().optional().describe("Deprecated; ignored. The session has a single implicit team."), mode: (0, import_chunk_xcgcdx61.V1l)().optional().describe("Deprecated; ignored. Subagents inherit the parent session's permission mode; agent-definition frontmatter may override it.") });
  return Yo().merge(r).extend({ isolation: (0, import_chunk_adx6804h.F)(["worktree", "remote"]).optional().describe('Isolation mode. "worktree" creates a temporary git worktree so the agent works on an isolated copy of the repo. "remote" launches the agent in a remote cloud environment (always runs in background; availability is gated).'), cwd: (0, import_chunk_adx6804h.n)().optional().describe('Absolute path to run the agent in. Overrides the working directory for all filesystem and shell operations within this agent. Mutually exclusive with isolation: "worktree".') });
}), an = (0, import_chunk_2cbgkbm2.p)(() => {
  let r = Xo().omit({ cwd: true }), e = (0, import_chunk_jg3mepas.A9)() || (0, import_chunk_bzyb60p0.bZt)(), o = e || (0, import_chunk_jg3mepas.kCr)() ? void 0 : (0, import_chunk_bzyb60p0.i5)()?.parameterDescription, g = e ? r.omit({ run_in_background: true }) : o === void 0 ? r : r.extend({ run_in_background: (0, import_chunk_adx6804h.P)().optional().describe(o) }), y = import_chunk_c203g5kd.s.CLAUDE_CODE_SUBAGENT_MODEL_FORCE ? g.omit({ model: true }) : g;
  return (0, import_chunk_k67pwqya.rk)() !== void 0 ? y.omit({ effort: true }) : y;
}), Rr = (0, import_chunk_2cbgkbm2.p)(() => an().extend({ effort: (0, import_chunk_adx6804h.F)([...import_chunk_bzyb60p0.Jza, ...import_chunk_8hfdvrr1.ea]).optional().describe('Reasoning effort for this agent. "lower" or "higher" is one step from the effort the agent would otherwise run at (normally yours), on whatever model it would otherwise use. Pass "lower" when the brief is mechanical and checkable against itself \u2014 bounded search, grep-and-report, a pattern you spelled out. Pass "higher" when one well-specified piece needs more reasoning than the work around it. Omit when neither clearly applies. Name a level (' + import_chunk_8hfdvrr1.ea.join(", ") + ') ONLY when the user, or instructions such as CLAUDE.md or a skill, explicitly ask for that level. "lower" and "higher" are ignored for subagent_type: "fork", isolation: "remote", and teammates.') })), vr = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.F)(["worktree", "remote"]).optional().describe(`Isolation mode. "worktree" keeps the agent's work apart: in a temporary working copy of the project or, where its version control makes none, under its own label in this folder. "remote" launches the agent in a remote cloud environment (always runs in background; availability is gated).`)), Uo = (0, import_chunk_2cbgkbm2.p)(() => an().extend({ isolation: vr() })), Jo = (0, import_chunk_2cbgkbm2.p)(() => Rr().extend({ isolation: vr() }));
function Sqs() {
  if ((0, import_chunk_harsxaq1.Dg)()) return (0, import_chunk_bzyb60p0.q_t)() ? Jo() : Uo();
  return (0, import_chunk_bzyb60p0.q_t)() ? Rr() : an();
}
var Zo = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_knp99ee7.CHa)().extend({ status: (0, import_chunk_adx6804h.v)("completed"), prompt: (0, import_chunk_adx6804h.n)(), worktreePath: (0, import_chunk_adx6804h.n)().optional(), worktreeBranch: (0, import_chunk_adx6804h.n)().optional(), inPlace: (0, import_chunk_adx6804h.c)({ vcs: (0, import_chunk_adx6804h.n)(), branch: (0, import_chunk_adx6804h.n)().optional() }).optional().describe("@internal Where a mod isolated the agent in its parent's own folder and its work was kept: the labels it is found under. No worktreePath comes with it"), canContinueAgent: Mr(), taskCalls: (0, import_chunk_vj6f11qy.bqs)().optional().describe(`@internal The subagent's ${import_chunk_mahb4v28.Gp} and ${import_chunk_mahb4v28.$m} calls that succeeded, in order: each call's tool, its input as the model wrote it, and its result text. The subagent writes the session's task list, and no other row of the main transcript shows these calls. A missing member does not mean that no call ran. A host may read it, so a later build only adds keys to a call: see "For another program that reads a sub-agent's task calls" in docs/task-list-across-compaction.md`) })), es = (0, import_chunk_2cbgkbm2.p)(() => {
  let r = Zo(), e = (0, import_chunk_adx6804h.c)({ status: (0, import_chunk_adx6804h.v)("async_launched"), isAsync: (0, import_chunk_adx6804h.v)(true).optional(), agentId: (0, import_chunk_adx6804h.n)().describe("The ID of the async agent"), description: (0, import_chunk_adx6804h.n)().describe("The description of the task"), resolvedModel: (0, import_chunk_adx6804h.n)().optional().describe("Model in use at the backgrounding transition (a pre-background swap is reflected here)"), modelsUsed: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional().describe("Ordered distinct models used before backgrounding (length > 1 means a mid-run swap)"), prompt: (0, import_chunk_adx6804h.n)().describe("The prompt for the agent"), outputFile: (0, import_chunk_adx6804h.n)().describe("Path to the output file for checking agent progress"), canReadOutputFile: (0, import_chunk_adx6804h.P)().optional().describe("Whether the calling agent has Read/Bash tools to check progress"), canContinueAgent: Mr(), waitsAtPermissionPrompt: (0, import_chunk_adx6804h.P)().optional().describe("@internal True when this foreground agent was moved to the background because nobody had answered its permission prompt (drives the model-facing text; not a stable API)"), sharesCwd: (0, import_chunk_adx6804h.P)().optional().describe("@internal True when this unisolated write-capable agent was launched into a working directory where another one is already running and a worktree could have been made here (drives a model-facing note; not a stable consumer field)") }), o = (0, import_chunk_adx6804h.c)({ status: (0, import_chunk_adx6804h.v)("remote_launched"), taskId: (0, import_chunk_adx6804h.n)().describe("The ID of the remote agent task"), sessionUrl: (0, import_chunk_adx6804h.n)().describe("The URL of the cloud session"), description: (0, import_chunk_adx6804h.n)().describe("The description of the task"), prompt: (0, import_chunk_adx6804h.n)().describe("The prompt for the agent"), outputFile: (0, import_chunk_adx6804h.n)().describe("Path to the output file for checking agent progress") });
  return (0, import_chunk_adx6804h.We)([r, e, o]);
});
function ts(r) {
  let { toolUseContext: e } = r, o = e.spawnParentId;
  if (e.agentCall !== void 0) return sn({ ...r, modsCall: e, isParentRestored: e.agentCall.isRestored, parentSignal: e.agentCall.loopSignal, toolUseContext: { ...e, agentCall: void 0 } });
  if (o === void 0) return sn(r);
  return (0, import_chunk_ynbv8e5n.Qet)(o, e, r.canUseTool).then((g) => {
    if ("refusal" in g) {
      if (g.isRetryable !== true) (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_spawn_parent_refused");
      throw new K(g.refusal);
    }
    let { context: y, isRestored: A, canUseTool: I } = g, _ = (0, import_chunk_trwykz8a.mn)().canUseToolNarrowings.get(o);
    return (0, import_chunk_18rsj2ts.k6e)(y.session.project, () => sn({ ...r, canUseTool: _ ? _(I) : I, modsCall: e, isParentRestored: A, parentSignal: y.abortController.signal, toolUseContext: { ...y, messages: (0, import_chunk_865at33z.Or)(y.messages), permissionLayers: [...(0, import_chunk_bz1f2qnq.Lre)(y.permissionLayers) ?? [], ...(0, import_chunk_bz1f2qnq.L2e)(y.permissionLayers), ...(0, import_chunk_bz1f2qnq.$at)(e.permissionLayers)], abortController: e.abortController, toolUseId: e.toolUseId, hookOrigin: e.hookOrigin, hookCaller: e.hookCaller, hookServesModel: e.hookServesModel } }));
  });
}
function ns(r) {
  return () => r;
}
async function sn({ agentInput: r, toolUseContext: e, modsCall: o, isParentRestored: g = false, parentSignal: y, canUseTool: A, assistantMessage: I, onProgress: _, timing: x, enclosingToolUseId: _e }) {
  var _stack2 = [];
  try {
    let { subagent_type: L, run_in_background: ce, name: E, isolation: Re } = r, { prompt: Cr, description: Dr, cwd: Et, effort: Ve } = r, at = r.model, Ot = (0, import_chunk_bzyb60p0.q_t)() && (Ve === "lower" || Ve === "higher") ? Ve : void 0, Ue = Ve === "lower" || Ve === "higher" ? void 0 : Ve, Fr = Date.now();
    if ((0, import_chunk_c4zg4pwc.dl)() && import_chunk_c203g5kd.s.CLAUDE_CODE_COORDINATOR_FORCE_WORKER_INHERIT_MODEL) at = void 0;
    let ut = at, U = Cr, G = Dr, ge = Et;
    await Tr(ge, "the call");
    let Pt = Math.max((0, import_chunk_865at33z.oh)(e.agentContext), (0, import_chunk_yg9g0473.Rmr)(e.hookOrigin)), un = (0, import_chunk_7ds2xzy3.MP)();
    if (Pt >= un) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_depth_cap"), import_chunk_759mf2n7.ADt.of(e.session).recordRefused("depth_limit"), new K(`Subagent nesting limit reached (depth ${Pt} of ${un}). Complete this task directly using your tools instead of spawning another agent. If the user explicitly requested deeper nesting, ask them to raise CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH.`);
    if (e.agentId !== void 0 && (0, import_chunk_bzyb60p0.FF)(e.agentId)) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_spawner_stop_pending"), new K("This agent has been stopped and its stop is still completing; it cannot launch new agents.");
    let Mt = (0, import_chunk_ynbv8e5n.zTn)(e) ? e.toolState.get(import_chunk_nd1dn2mq.qMt).take(e.toolUseId) : void 0;
    if (Mt !== void 0) {
      let h = await (0, import_chunk_nd1dn2mq.sRa)(Mt, e), k = h.status === "completed" ? await tn(Mt.agentId, e, I?.message.id) : [];
      return h.status === "async_launched" ? { data: { ...h, isAsync: true, prompt: r.prompt, canReadOutputFile: (0, import_chunk_bzyb60p0.q$)((0, import_chunk_q2404y26.wA)(e)), canContinueAgent: (0, import_chunk_wd66nsbc.bC)((0, import_chunk_q2404y26.wA)(e)) } } : { ...k.length > 0 && { newMessages: k }, data: { status: "completed", prompt: r.prompt, ...h.report, canContinueAgent: (0, import_chunk_wd66nsbc.bC)((0, import_chunk_q2404y26.wA)(e)) } };
    }
    G = G.replace(/\s+/g, " ").trim();
    let { agent: dn, agentDefinitions: Nr, proactivityLevel: ln, teamContext: Br } = e.getAppState(), Te = (0, import_chunk_bz1f2qnq.Z)(e), Je = Te.mode, { taskRegistry: J } = e, Lr = (0, import_chunk_yvad17bv.xi)() ? Br : void 0, Le = !!e.teammateContext;
    if ((Le || !!(0, import_chunk_wtm85h0y.lT)()) && E && !(0, import_chunk_bzyb60p0.z$)()) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_nested_teammate"), new K("Teammates cannot spawn other teammates \u2014 the team roster is flat. To spawn a subagent instead, omit the `name` parameter.");
    if (Le && ce === true) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_teammate_background_denied"), new K("In-process teammates cannot spawn background agents. Use run_in_background=false for synchronous subagents.");
    let { activeAgents: ke, allowedAgentTypes: $e } = e.options.agentDefinitions, Ct = L !== void 0 && (0, import_chunk_tc5xmewh.MQ)(L) === import_chunk_060xwhvh.pv, { available: pn, denyRule: cn } = Er(ke, $e, Te);
    if (Ct && cn) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_type_denied"), new me(`Agent type '${import_chunk_060xwhvh.pv}' has been denied by permission rule '${import_chunk_060xwhvh._t}(${import_chunk_060xwhvh.pv})' from ${cn.source}.`);
    let V = Ct && pn;
    if (L !== void 0 && !Ct) {
      let h = (0, import_chunk_ht27b0vz.vZ)(Te, import_chunk_060xwhvh._t, L);
      if (h) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_type_denied"), new me(`Agent type '${L}' has been denied by permission rule '${import_chunk_060xwhvh._t}(${L})' from ${h.source}.`);
      if ($e && !$e.includes(L)) {
        (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_type_not_found");
        let k = (await (0, import_chunk_bzyb60p0.aBe)(ke, $e, Te, o ?? e)).map((W) => W.agentType);
        throw new me(`Agent type '${L}' not found. Available agents: ${Rt(k)}`);
      }
    }
    let Dt = (h = false) => {
      if (e.abortController.signal.aborted) {
        let W = (0, import_chunk_cbnm4p23.Ai)(e.abortController.signal.reason);
        if (!(h && W === "interrupt")) throw new import_chunk_jv7av99m.Ie();
      }
      let { maxBudgetUsd: k } = e.options;
      if ((0, import_chunk_bzyb60p0.BF)(k)) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_budget_exhausted"), import_chunk_759mf2n7.ADt.of(e.session).recordRefused("budget"), new K(`Budget limit reached ($${(0, import_chunk_bzyb60p0.GTe)().toFixed(2)} spent of the $${k} maximum). New agents cannot be started. Complete the remaining work directly with your tools, or wrap up with the results you already have.`);
    }, $r = async () => {
      let h = kr(e);
      if (h) throw await xe(), h;
      return e.taskRegistry.takeConcurrencySlot();
    };
    if (Lr && E && !V && !(0, import_chunk_bzyb60p0.pfe)(L, ke) && !Re && !ge && ((0, import_chunk_mndk3x2g.ape)(e) === (0, import_chunk_rb36kwbn.ui)()?.worktreePath || !(0, import_chunk_wcvnrqjb.H5s)()) && !(0, import_chunk_bzyb60p0.z$)()) {
      var _stack = [];
      try {
        let h = await (0, import_chunk_bzyb60p0.aBe)(ke, $e, Te, o ?? e), k = L ? Ir(ke, h, L) : void 0;
        if (k && k.agentType !== L) {
          let ze = (0, import_chunk_ht27b0vz.vZ)(Te, import_chunk_060xwhvh._t, k.agentType);
          if (ze) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_type_denied"), new me(`Agent type '${k.agentType}' has been denied by permission rule '${import_chunk_060xwhvh._t}(${k.agentType})' from ${ze.source}.`);
        }
        let W = k ?? (L ? Ir(ke, ke, L) : void 0);
        if (!(W === void 0 || (await (0, import_chunk_bzyb60p0.hcr)([W], o ?? e)).length === 1)) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_teammate_not_offered"), new me(`Agent type '${L}' is not offered in this session.`);
        let j = k ? await (0, import_chunk_bzyb60p0.cHe)(k, e.abortController.signal) : void 0;
        if (k && !j) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_plugin_load_failed"), new me(`Agent type '${k.agentType}' could not be loaded from its plugin.`);
        Dt(so);
        let Q = e.loopModel, H = j ?? (0, import_chunk_nd1dn2mq.Ezo)(L), N = await (0, import_chunk_pmap704y.hqo)({ tool_use_id: e.toolUseId ?? "", prompt: U, description: G, agent: H, agents: h, model: at, parentModel: Q, parentAgentId: e.agentId, permissionMode: Je, background: true, fork: false, isTeammate: true, name: E, cwd: void 0, signal: e.abortController.signal, origin: e.hookOrigin });
        const ee = __using(_stack, N.starting);
        if (N.deny !== void 0) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_spawn_denied_by_hook"), new K(`Subagent spawn denied by a plugin: ${N.deny}`);
        (0, import_chunk_bzyb60p0.iar)({ toolUseContext: e, modsCall: o }, N.isRewritten);
        let oe = N.spawn, q = await er({ tool: eQn, raised: en(r, { prompt: U, description: G, subagentType: H.agentType, model: at, background: true, cwd: void 0 }), rewritten: en(r, oe), context: e });
        if (q) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_spawn_hook_rewrite_ruled"), new K(`A plugin's agent.spawn hook rewrote this spawn into one a permission rule ${tr[q.behavior]}: ${q.message} Dispatch it directly.`);
        let z = h.find((ze) => ze === N.agent && ze !== H);
        if ((0, import_chunk_bzyb60p0.pfe)(z?.agentType, ke)) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_spawn_hook_teammate_rewrite"), new K(`A plugin's agent.spawn hook retyped a teammate into '${z?.agentType}', which does not run as a teammate.`);
        if ((z || j && (0, import_chunk_bzyb60p0.tBe)(j)) && (0, import_chunk_3t7ve0wy.Nw)()) e.modShaped = true;
        if (z) {
          if (j = await (0, import_chunk_bzyb60p0.cHe)(z, e.abortController.signal), !j) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_plugin_load_failed"), new me(`Agent type '${z.agentType}' could not be loaded from its plugin.`);
        }
        U = oe.prompt, G = oe.description.replace(/\s+/g, " ").trim();
        let ye = oe.model, we = j?.agentType ?? L;
        if (Dt(no), j?.color) (0, import_chunk_xfj2cwfv.Hmn)(z ? j.agentType : L ?? j.agentType, j.color);
        let { spawnTeammate: He } = require("/$bunfs/root/chunk-5tj5e8g3.js"), de = await He({ name: E, prompt: U, description: G, plan_mode_required: Je === "plan", model: ye ?? rs(j, e.loopModel), modelSource: ye ? "tool" : "frontmatter", effort: Ue, agent_type: we, agentDefinition: j, invokingRequestId: I?.requestId }, e, _), te = { status: "teammate_spawned", prompt: U, agentId: de.data.agent_id, resolvedModel: (0, import_chunk_865at33z.jt)(de.data.model ?? Q), ...de.data }, it = de.loopAgentId ?? de.data.teammate_id;
        return (0, import_chunk_bzyb60p0._fi)(it, e), ee?.started({ agentId: it, model: (0, import_chunk_865at33z.jt)(de.data.model ?? Q), teammateId: de.data.teammate_id }), (0, import_chunk_cqa9hrgx.u)("subagent_launch"), { data: te };
      } catch (_2) {
        var _error = _2, _hasError = true;
      } finally {
        __callDispose(_stack, _error, _hasError);
      }
    }
    let fn = { isolation: Re, querySource: e.options.querySource, messages: e.messages, isModsOwnSpawn: o !== void 0 }, w, gn = [];
    if (V) {
      let h = Sr(fn);
      if (h) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", h.code), new K(h.message);
      w = import_chunk_bzyb60p0.zY;
    } else {
      let h = await (0, import_chunk_bzyb60p0.aBe)(ke, $e, Te, o ?? e);
      gn = h;
      let k = h.map((Q) => Q.agentType);
      if (L === void 0 && !Pr(ke, $e)) {
        (0, import_chunk_y53wbr8a.a)("tengu_subagent_type_miss", { requestedNormalized: (0, import_chunk_78g0060s.S)("OMITTED"), availableCount: h.length }), (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_type_missing");
        let Q = pn && Sr(fn) === null ? [import_chunk_060xwhvh.pv, ...k] : k;
        throw new me(`${import_chunk_060xwhvh.Iko}. Available agents: ${Rt(Q)}`);
      }
      let W = L ?? import_chunk_bzyb60p0.W$.agentType, X = h.find((Q) => Q.agentType === W);
      if (!X) {
        let Q = (0, import_chunk_tc5xmewh.MQ)(W), H = new Set(k), N = Q ? ke.filter((q) => (0, import_chunk_tc5xmewh.MQ)(q.agentType) === Q && true) : [], ee = (0, import_chunk_78g0060s.Yge)(Q, N.length > 0 && N.every(import_chunk_bzyb60p0.ic)), oe = Q.length;
        if (N.length > 1) {
          (0, import_chunk_y53wbr8a.a)("tengu_subagent_type_miss", { requestedNormalized: ee, requestedLength: oe, availableCount: h.length, ambiguousCount: N.length }), (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_type_ambiguous");
          let q = N.map((z) => z.agentType).filter((z) => H.has(z));
          throw new me(`Agent type '${W}' is ambiguous \u2014 matches ${N.map((z) => H.has(z.agentType) ? z.agentType : `${z.agentType} (unavailable)`).join(", ")}. ${q.length > 0 ? `Use the exact name: ${q.join(" or ")}` : `None of these are available. Available agents: ${Rt(k)}`}`);
        }
        if (N.length === 1) {
          let q = N[0];
          if (H.has(q.agentType)) {
            if (X = q, X.color) (0, import_chunk_xfj2cwfv.Hmn)(W, X.color);
            (0, import_chunk_y53wbr8a.a)("tengu_subagent_type_normalized", { requestedNormalized: ee, matched: (0, import_chunk_78g0060s.Xge)(X) });
          } else {
            let z = q.agentType, ye = (0, import_chunk_ht27b0vz.vZ)(Te, import_chunk_060xwhvh._t, z);
            if (ye) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_type_denied"), new me(`Agent type '${z}' has been denied by permission rule '${import_chunk_060xwhvh._t}(${z})' from ${ye.source}.`);
            if ((0, import_chunk_bzyb60p0.LZt)(q, Te)) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_type_tools_denied"), new me((0, import_chunk_bzyb60p0.NZt)(z));
          }
        }
        if (!X) throw (0, import_chunk_y53wbr8a.a)("tengu_subagent_type_miss", { requestedNormalized: ee, requestedLength: oe, availableCount: h.length }), (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_type_not_found"), new me(`Agent type '${W}' not found. Available agents: ${Rt(k)}`);
      }
      let j = await (0, import_chunk_bzyb60p0.cHe)(X, e.abortController.signal);
      if (j === void 0) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_plugin_load_failed"), new me(`Agent type '${W}' could not be loaded from its plugin.`);
      w = j;
    }
    if (Le && w.background === true) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_teammate_background_denied"), new K(`In-process teammates cannot spawn background agents. Agent '${w.agentType}' has background: true in its definition.`);
    if ((Re ?? w.isolation) === "worktree" && !(0, import_chunk_tc5xmewh.yA)(w)) {
      if ((0, import_chunk_bzyb60p0.brt)("agent worktree"), !(0, import_chunk_bzyb60p0.aSt)()) (0, import_chunk_bzyb60p0.CZo)();
    }
    let hn = (0, import_chunk_c4zg4pwc.dl)(), yn = e.agentId !== void 0 && !e.innerCall && o?.agentCall === void 0 && !Le && (0, import_chunk_f9x2f6cx.Se)(), wn = (0, import_chunk_bzyb60p0.bZt)() && !Le && !yn, Ft = (0, import_chunk_jg3mepas.Yle)(), je = (0, import_chunk_bzyb60p0.i5)(), dt = (0, import_chunk_jg3mepas.kCr)(), bn = je !== void 0 && (ce === true || dt && ce !== false) && !(0, import_chunk_jg3mepas.A9)() ? Xn(I, e.toolUseId, dt) : void 0, qe = je !== void 0 && bn !== void 0 ? (0, import_chunk_bzyb60p0.WZt)(je, { toolUseId: bn, callerAgentId: e.agentId, signal: e.abortController.signal }) : void 0, Wr = je === void 0 ? Ft : qe === void 0, _n = (0, import_chunk_yegw2jm5.M7t)(je, Ft), Tn = (h, k) => ao({ agent: h, wantsBackground: k, isolation: Re, restricted: Te.restricted, isCoordinator: hn, forceAsync: wn, callerIsInProcessTeammate: Le, callerIsHeadlessSubagent: yn, backgroundTasksDisabled: Wr }), { effectiveIsolation: Ze, isRemoteLaunch: ve, shouldRunAsync: ne } = Tn(w, ce);
    if (!ve) {
      if (e.abortController.signal.aborted) {
        let k = (0, import_chunk_cbnm4p23.Ai)(e.abortController.signal.reason);
        if (!(ne && k === "interrupt")) throw new import_chunk_jv7av99m.Ie();
      }
      let h = kr(e);
      if (h) throw h;
    }
    Dt(ne && !ve);
    let jr = e.options.tools.filter(import_chunk_cvv9kfq3.qf), Qr = x?.mark("external");
    if (!ve) await (0, import_chunk_0canfdjs.EBt)(() => e.getAppState().mcp);
    if (Qr?.(), w.color) (0, import_chunk_xfj2cwfv.Hmn)(w.agentType, w.color);
    let Ee = await (0, import_chunk_pmap704y.hqo)({ tool_use_id: e.toolUseId ?? "", prompt: U, description: G, agent: w, agents: gn, model: V ? void 0 : ut, parentModel: e.loopModel, parentAgentId: e.agentId, permissionMode: Je, background: ne, fork: V, name: E, cwd: ge, signal: e.abortController.signal, origin: e.hookOrigin });
    const Nt = __using(_stack2, Ee.starting);
    if ((0, import_chunk_bzyb60p0.Kxn)(e.abortController.signal, ne && !ve)) throw new import_chunk_jv7av99m.Ie();
    if (Ee.deny !== void 0) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_spawn_denied_by_hook"), new K(`Subagent spawn denied by a plugin: ${Ee.deny}`);
    (0, import_chunk_bzyb60p0.iar)({ toolUseContext: e, modsCall: o }, Ee.isRewritten);
    let kn = () => en(r, { prompt: U, description: G, subagentType: w.agentType, model: V ? void 0 : ut, background: ne, cwd: ge }), xr = kn(), { spawn: Pe } = Ee, lt = Ee.agent !== w;
    if (lt && (0, import_chunk_3t7ve0wy.Nw)()) e.modShaped = true;
    let Bt = lt || Pe.background !== ne;
    if (w = Ee.agent, U = Pe.prompt, G = Pe.description.replace(/\s+/g, " ").trim(), ge = Pe.cwd, ge !== Et) await Tr(ge, "a hook");
    if (ut = Pe.model, Bt) ({ effectiveIsolation: Ze, isRemoteLaunch: ve, shouldRunAsync: ne } = Tn(w, Pe.background));
    if (lt && rn(e)) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_spawn_hook_retype_unreviewed"), new K("A plugin's agent.spawn hook named another agent for a web-fetch dispatch admitted without classifier review; it cannot run unconfined. Dispatch that agent directly.");
    let $t = await er({ tool: eQn, raised: xr, rewritten: kn(), context: e });
    if ($t) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_spawn_hook_rewrite_ruled"), new K(`A plugin's agent.spawn hook rewrote this spawn into one a permission rule ${tr[$t.behavior]}: ${$t.message} Dispatch it directly.`);
    if (Pe.cwd !== void 0 && Pe.cwd !== Et && Ze === "worktree") throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_spawn_hook_cwd_worktree"), new K(`A plugin's agent.spawn hook set cwd on a spawn isolated in a worktree; cwd and isolation: "worktree" are mutually exclusive.`);
    if (Bt && (0, import_chunk_bzyb60p0.Kxn)(e.abortController.signal, ne && !ve)) throw new import_chunk_jv7av99m.Ie();
    if (Bt && Le && ne && !ve) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_teammate_background_denied"), new K("In-process teammates cannot spawn background agents; a plugin's agent.spawn hook backgrounded this one.");
    let Sn = lt ? w.color : void 0;
    if (Sn) (0, import_chunk_xfj2cwfv.Hmn)(w.agentType, Sn);
    let Qe = V ? "inherit" : ut, An = ve || e.spawnedByWorkflowRunId !== void 0 ? void 0 : (0, import_chunk_ynbv8e5n.uqo)(w, { parentModel: e.loopModel, callModel: Qe, effortState: e.getAppState(), inheritedLayers: e.permissionLayers, isResume: false });
    w = An?.definition ?? w;
    let pt = await (0, import_chunk_knp99ee7.NF)({ agentDefinition: w, model: Qe, toolUseContext: e, run: "spawn", detached: ne, onModelRestricted: (h, k) => _?.({ type: "notification", notification: { key: `agent-model-restricted-${w.agentType}-${(0, import_chunk_865at33z.Mm)(h)}`, text: `${w.agentType} agent: ${(0, import_chunk_865at33z.QP)(h, k)}`, priority: "medium", color: "warning", timeoutMs: 1e4 } }) }), ae = pt.model;
    if (!V && (0, import_chunk_bzyb60p0.V6a)(ae, e.rootToolSurface.mainLoopModel, e.requestDialog)) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_model_bills_credits_unasked"), new K("This model bills usage credits, and claude.ai asks about them only for this chat's own model. Start the agent on the chat's model instead, or ask the person to switch this chat to that model first.");
    if (!V && Ue !== void 0) w = { ...w, effort: Ue };
    let Ke = ve ? void 0 : (0, import_chunk_6hkrqqbp.j4r)({ agentDefinition: w, isFork: V, modelFacts: pt, effortState: e.getAppState(), pickedEffortModel: (0, import_chunk_bz1f2qnq.oX)(e), inheritedLayers: e.permissionLayers, recordedBudgetText: void 0 }), mt = Ot !== void 0 && !V && Ke?.subagentEffort !== void 0 ? (0, import_chunk_k67pwqya.f2t)(ae, Ke.subagentEffort, Ot === "higher" ? 1 : -1, { mayReachMax: import_chunk_c203g5kd.s.CLAUDE_CODE_LINKED_SPINDLE !== false }) : void 0, Ae = Ke !== void 0 && mt !== void 0 ? { ...Ke, agentDefinition: { ...Ke.agentDefinition, effort: mt }, subagentEffort: mt } : Ke, Wt = V ? void 0 : mt ?? Ue;
    w = Ae?.agentDefinition ?? w;
    let et = (0, import_chunk_78g0060s.Xge)(w), Hr = await (0, import_chunk_p1ewvgeh.Sdn)(w, e.storageV5), Qt = w.getSystemPrompt({ toolUseContext: e, primedAgentMemory: Hr }), ct = (0, import_chunk_bzyb60p0.Q4e)(w) ? (0, import_chunk_xcgcdx61.uf)(w.plugin) : void 0;
    if ((0, import_chunk_bzyb60p0.Q4e)(w)) (0, import_chunk_54j6k3fn.ij)(w.plugin);
    let Ce = Pt + 1;
    if ((0, import_chunk_bzyb60p0.Q4e)(w)) (0, import_chunk_bzyb60p0.ZJ)(w.plugin, "subagent", { kind: "agent", name: w.filename });
    let In = () => ((0, import_chunk_ynbv8e5n.fqo)(An), (0, import_chunk_y53wbr8a.a)("tengu_agent_tool_selected", { agent_type: et, model: (0, import_chunk_865at33z.Xt)(ae), source: (0, import_chunk_78g0060s.f)(w.source), color: (0, import_chunk_78g0060s.fe)(w.color), is_built_in_agent: (0, import_chunk_bzyb60p0.ic)(w), is_resume: false, is_async: ne, is_fork: V, is_name_given: Boolean(E && E !== import_chunk_865at33z.cS), effort_param: (0, import_chunk_78g0060s.fe)(Ot ?? Ue), session_effort: (0, import_chunk_78g0060s.fe)(Ae?.sessionEffort), subagent_effort: (0, import_chunk_78g0060s.fe)(Ae?.subagentEffort), subagent_total_tokens_budget: Ae?.totalTokensBudget, subagent_budget_on_top_of_start: Ae?.totalTokensBudget === void 0 ? void 0 : Ae.isBudgetOnTopOfStart, agent_depth: Ce, agent_system_prompt_chars: Qt.length, ...ct && (0, import_chunk_54j6k3fn.Vae)(ct.name, ct.marketplace) }), import_chunk_759mf2n7.ADt.of(e.session).recordSpawn({ agentType: w.agentType, runInBackground: ce, runsInBackground: ne, depth: Ce }));
    if (ve) {
      if ((0, import_chunk_wx2mpa0f.fb)()) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_remote_personal_config"), new vt(qo);
      let h = await (0, import_chunk_bzyb60p0.art)({ storageV5: e.storageV5, credentials: e.credentials });
      if (!h.eligible) {
        let N = h.errors.map(import_chunk_bzyb60p0.n3e).join(`
`);
        (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_remote_ineligible");
        let ee = new vt(`Cannot launch cloud agent:
${N}`);
        throw h.errors.some((oe) => oe.type === "not_logged_in" && oe.message === void 0) ? (0, import_chunk_r8478wtb.MX)(ee, (0, import_chunk_r8478wtb.OOr)(await (0, import_chunk_865at33z.v_)(e.credentials))) : ee;
      }
      let k, W = false, X = await (0, import_chunk_bzyb60p0._q)({ initialMessage: U, source: "remote_agent", tags: [import_chunk_865at33z.g6t], description: G, model: ae, ...(0, import_chunk_kxv2z9ac.Dqr)((0, import_chunk_bzyb60p0.d3a)({ declaredMode: w.permissionMode, narrowOnly: (0, import_chunk_gbskgz33.RWi)(w), parentMode: Je, parentModeToHand: (0, import_chunk_bzyb60p0.xye)(Je, ln, (0, import_chunk_bzyb60p0.E6)(Te)), model: ae }), ln), branchName: await (0, import_chunk_bzyb60p0.l3a)(), signal: e.abortController.signal, onBundleFail: (N) => {
        k = N;
      }, onCreateFail: (N, ee, oe) => {
        k = N, W = ee === "no_access_token" || oe?.status === 401;
      }, storageV5: e.storageV5, credentials: e.credentials });
      if (!X) {
        (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_remote_session_failed");
        let N = new vt(k ?? "Failed to create cloud session");
        throw W ? (0, import_chunk_r8478wtb.MX)(N, (0, import_chunk_r8478wtb.OOr)(await (0, import_chunk_865at33z.v_)(e.credentials))) : N;
      }
      let { taskId: j, sessionId: Q } = (0, import_chunk_bzyb60p0.uyt)({ remoteTaskType: "remote-agent", session: { id: X.id, title: X.title || G }, command: U, context: e, toolUseId: e.toolUseId, permissionRelay: { canUseTool: A, toolUseContext: (0, import_chunk_bzyb60p0.iye)(e), allowedToolNames: new Set((0, import_chunk_knp99ee7.KL)(w, e.options.tools, false, false, false, 0, (0, import_chunk_sjqze7qg.dG)(e).mode).resolvedTools.map((N) => N.name)) } });
      In(), (0, import_chunk_y53wbr8a.a)("tengu_agent_tool_remote_launched", { agent_type: et }), (0, import_chunk_cqa9hrgx.u)("subagent_launch");
      let H = { status: "remote_launched", taskId: j, sessionUrl: (0, import_chunk_bzyb60p0.oBe)(Q), description: G, prompt: U, outputFile: (0, import_chunk_4f4ysf31.cp)(j) };
      return Nt?.started({ agentId: j, model: ae }), { data: H };
    }
    let xt, Ht, Oe, ft;
    if (V) {
      if (e.renderedSystemPrompt) Ht = e.renderedSystemPrompt;
      else {
        let h = dn ? Nr.activeAgents.find((W) => W.agentType === dn) : void 0, k = await (0, import_chunk_bzyb60p0.eG)((0, import_chunk_q2404y26.wA)(e), e.modelFacts.model);
        Ht = (0, import_chunk_bzyb60p0.Nye)({ mainThreadAgentDefinition: h, toolUseContext: e, customSystemPrompt: e.options.customSystemPrompt, defaultSystemPrompt: k, appendSystemPrompt: e.options.appendSystemPrompt, model: e.modelFacts.model });
      }
      Oe = (0, import_chunk_bzyb60p0.aci)(U, (0, import_chunk_bzyb60p0.ici)(I, { description: G, prompt: U }, (h) => (0, import_chunk_bzyb60p0.tv)((0, import_chunk_865at33z.Or)([...(0, import_chunk_knp99ee7.vtr)(e.messages), h]), e.options.tools, ae).at(-2)), _e ?? e.toolUseId);
    } else {
      try {
        if (w.memory) (0, import_chunk_y53wbr8a.a)("tengu_agent_memory_loaded", { ...false, scope: (0, import_chunk_78g0060s.f)(w.memory), source: (0, import_chunk_78g0060s.S)("subagent") });
        xt = await (0, import_chunk_bzyb60p0.Sdr)([(0, import_chunk_bzyb60p0.ic)(w) ? (0, import_chunk_bzyb60p0.Gnt)(Qt) : Qt], pt, Ae?.totalTokensBudget);
      } catch (h) {
        (0, import_chunk_w578pjby.t)(`Failed to get system prompt for agent ${w.agentType}: ${(0, import_chunk_jv7av99m.d)(h)}`);
      }
      ft = g ? void 0 : (0, import_chunk_865at33z.fOl)(e.messages, (0, import_chunk_bzyb60p0.SVa)(e)), Oe = [...ft?.copies ?? [], (0, import_chunk_bzyb60p0.Me)({ content: U })];
    }
    let tt = (0, import_chunk_bzyb60p0._ne)(e.agentId, J) ?? (0, import_chunk_f9x2f6cx.ot)(), re = { prompt: U, resolvedAgentModel: ae, isBuiltInAgent: (0, import_chunk_bzyb60p0.ic)(w), startTime: Fr, agentType: w.agentType, isAsync: ne, agentDepth: Ce, source: w.source, pluginId: ct, callerCanContinueAgents: (0, import_chunk_bzyb60p0.qLt)(e, tt), persistedToolResultFiles: (0, import_chunk_tc5xmewh.yA)(w) ? (0, import_chunk_d3vfy4gs.abe)() : void 0 }, Rn = (0, import_chunk_b83x8d52.ZI)(e.abortController.signal);
    if (Rn !== void 0) await Rn;
    let En = (0, import_chunk_bz1f2qnq.Z)((0, import_chunk_bz1f2qnq._y)(e)), zr = (0, import_chunk_knp99ee7.F7t)(e, En, e.getAppState().mcp.tools.concat(jr)), On = e.agentId ?? import_chunk_41appe38.SMe, gt = (w.observer ? (0, import_chunk_41appe38.y9r)({ observedDefinition: w, activeAgents: e.options.agentDefinitions.activeAgents, observedIsObserver: false }) : (0, import_chunk_41appe38.QLa)({ parentPairings: (0, import_chunk_41appe38.lTe)(e.session, On), spawnedDefinition: w, spawnedIsObserver: false })).map((h) => h.inheritedArming ? { config: h, toolUseContext: h.inheritedArming.toolUseContext, canUseTool: h.inheritedArming.canUseTool, persistedArmingMode: h.inheritedArming.permissionMode, inheritedFromKey: On, inheritedFromPairing: h.inheritedArming.parentPairing } : { config: h, toolUseContext: e, canUseTool: A }), se = (0, import_chunk_mzmcvr6c.qS)(), Ne = e.agentId, Gr = e.agentContext !== void 0 && e.agentContext.agentType !== "main" && (e.agentContext.isBackgroundAgent ?? false), Pn = (0, import_chunk_865at33z.qi)(e.agentContext), Mn = (0, import_chunk_bzyb60p0.ABe)(e.messages, e.agentContext), he = null;
    if (Ze === "worktree") {
      let h = x?.mark("external"), k = (0, import_chunk_xcgcdx61.mHo)(se), { signal: W } = e.abortController, X = (0, import_chunk_cbnm4p23.RMr)(W, () => (0, import_chunk_bzyb60p0.Kxn)(W, ne));
      he = await (0, import_chunk_bzyb60p0.YY)({ name: k, from: (0, import_chunk_18rsj2ts.pe)(), for: "agent", agentId: se, ...Ne !== void 0 && { parentAgentId: Ne }, base: (0, import_chunk_bzyb60p0.lQ)() }, { origin: e.hookOrigin, signal: X.signal, make: (j) => (0, import_chunk_bzyb60p0.nCe)(k, { ...j, storageV5: e.storageV5, credentials: e.credentials }) }).catch((j) => {
        if (j instanceof import_chunk_bzyb60p0.den && (Re ?? w.isolation) === "remote" && !(0, import_chunk_6h9mds0d.U6)()) return Ze = void 0, null;
        throw j;
      }).finally(X.release), h?.();
    }
    let nt = he?.isInPlace ? null : he, Cn = he?.isInPlace ? he : null;
    if (nt) (0, import_chunk_rb36kwbn.wOo)(se);
    if (Cn) Oe.push((0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_9e5mdyfk.xao)() }));
    else if (V && he) Oe.push((0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.lci)((0, import_chunk_18rsj2ts.pe)(), he.worktreePath, he.copy.madeBy === "core" && Boolean((await (0, import_chunk_bzyb60p0.Gue)(he.worktreePath))?.system), he.copy.madeBy) }));
    let Dn = (0, import_chunk_bzyb60p0.f3a)({ taskRegistry: J, selectedAgent: w, effectiveIsolation: Ze, cwd: ge, parentCwd: e.session.project === null ? null : (0, import_chunk_18rsj2ts.pe)(), parentAgentId: Ne });
    if (Dn) Oe.push((0, import_chunk_bzyb60p0.Me)({ content: import_chunk_bzyb60p0.u3a }));
    if (V && Ae?.totalTokensBudget !== void 0) Oe.push((0, import_chunk_bzyb60p0.Ut)({ type: "total_tokens_reminder", text: (0, import_chunk_bzyb60p0.Zlr)("padded-countdown", Ae.totalTokensBudget) }));
    let Fn = Dn && (0, import_chunk_bzyb60p0.aSt)(), { onToolPool: Vr, reviewTools: zt } = (0, import_chunk_knp99ee7.tTe)(e.options.tools), ht = { agentDefinition: w, promptMessages: Oe, turnPrompt: U, toolUseContext: e, canUseTool: A, name: E, isAsync: ne, handbackOptIn: !V, handbackTool: import_chunk_ynbv8e5n.GTn, persistedToolResultFiles: re.persistedToolResultFiles, querySource: e.options.querySource ?? (0, import_chunk_qr6brph0.Zve)(w.agentType, (0, import_chunk_bzyb60p0.ic)(w)), spawnedBySkill: e.options.spawnedBySkill ?? e.options.activeSkill, spawnedByForkedSkill: e.options.spawnedByForkedSkill, model: Qe, modelFacts: pt, effort: Wt, ...rn(e) && { spawnMode: It }, override: V ? { systemPrompt: Ht, parentSystemPrompt: true } : xt && !nt && !ge ? { systemPrompt: (0, import_chunk_4mh8nmh5.Sl)(xt) } : void 0, availableTools: V ? (0, import_chunk_b83x8d52.jne)(e) : zr, assembleAvailableTools: (h) => (0, import_chunk_knp99ee7.F7t)(e, En, h), onToolPool: Vr, forkContextMessages: V ? e.messages : void 0, ...V && { useExactTools: true }, totalTokensReminderBudget: Ae?.totalTokensBudget, isTotalTokensReminderBudgetOnTopOfStart: Ae?.isBudgetOnTopOfStart, worktreePath: nt?.worktreePath, worktreeBranch: nt?.worktreeBranch, cwd: ge, description: G, preserveToolUseResults: !(0, import_chunk_f9x2f6cx.Se)(), toolUseId: e.toolUseId, ...(0, import_chunk_r3kja8v6.ue)() && _e !== void 0 && { enclosingToolUseId: _e }, onMcpServersBlocked: (h, k) => _?.({ type: "notification", notification: { key: `agent-mcp-blocked-${se}`, text: `${w.agentType} agent MCP ${(0, import_chunk_7cfjrnwy.O)(h.length, "server")} blocked by ${k}: ${h.join(", ")}`, priority: "medium", color: "warning", timeoutMs: 1e4 } }) }, Nn = ge ?? nt?.worktreePath, Bn = Nn ?? (e.agentWorktree !== void 0 ? (0, import_chunk_18rsj2ts.pe)() : void 0), Gt = e.session.withProject({ cwd: Nn ?? Cn?.from }), Vt = Gt.project, xe = async () => {
      if (!he) return {};
      let h = he, { worktreePath: k, headCommit: W, baseChangeset: X, sessionDir: j, gitRoot: Q, hookBased: H } = h, N = h.worktreeBranch ?? (0, import_chunk_9e5mdyfk.HCe)(h.copy), ee = h.isInPlace ? { inPlace: (0, import_chunk_9e5mdyfk.Wnn)(h.copy) } : { worktreePath: k, ...N !== void 0 && { worktreeBranch: N } }, oe = H ? h.realPath : void 0;
      he = null;
      let q = (0, import_chunk_bzyb60p0.Hyt)(h, e.hookOrigin);
      if (H && !q && (X === void 0 || oe === void 0)) return (0, import_chunk_w578pjby.t)(`Hook-based agent worktree kept at: ${k}`), ee;
      if ((0, import_chunk_bzyb60p0.QTe)(J.get(se))) return (0, import_chunk_w578pjby.t)(`Agent worktree kept at ${k}: backgrounded owner awaits keepalive, resume pending`), ee;
      if (W || X !== void 0 || q) {
        let z = (te) => (0, import_chunk_jhy72swy.Q8t)(J.all(), oe === void 0 ? [k] : [k, oe], te), ye = () => h.isInPlace ? (0, import_chunk_k1q4r2vq.Mer)(h, J) : z() ?? z((te) => te.id !== se && (0, import_chunk_jhy72swy.oQn)(te, J)), we = ye(), He = q ? (await q()).holdsWork : W ? await (0, import_chunk_bzyb60p0.ldr)(k, W) : await (0, import_chunk_bzyb60p0.gBe)(k, void 0, { hookBased: true, baseChangeset: X, sessionDir: j, vettedRealPath: oe }).then((te) => te.dirty || te.checkoutMoved === true), de = we ?? ye();
        if (de) {
          if ((0, import_chunk_w578pjby.t)(`Agent worktree ${k} is still the working directory of ${de.type} task ${de.id}; kept`), (0, import_chunk_y53wbr8a.a)("tengu_agent_worktree_kept", { reason: (0, import_chunk_ed372ykp.$o)(de.status) ? (0, import_chunk_78g0060s.S)("parked_task") : (0, import_chunk_78g0060s.S)("live_task"), task_type: (0, import_chunk_78g0060s.f)(de.type), seen: we ? (0, import_chunk_78g0060s.S)("before_check") : (0, import_chunk_78g0060s.S)("after_check"), changed: He }), Q) (0, import_chunk_jhy72swy.QTa)({ worktreePath: k, gitRoot: Q, taskRegistry: J, findOccupant: z });
          return ee;
        }
        if (!He && H && h.copy.madeBy === "core") J.update(se, (te) => te.sweptByStop ? { ...te, sweptByStop: void 0 } : te);
        if (!He && !J.get(se)?.sweptByStop && (await (0, import_chunk_bzyb60p0.Dyt)(h, { origin: e.hookOrigin, isDiscard: false, reason: "the subagent ended", storageV5: e.storageV5, remove: () => (0, import_chunk_bzyb60p0.cQ)(k, h.worktreeBranch, Q, H ?? false, "agent_tool") })).isReleased) {
          if (h.isInPlace) return {};
          return (0, import_chunk_knp99ee7.nJs)({ agentId: (0, import_chunk_mzmcvr6c.ro)(se), removedWorktreePath: k, spawnMetadata: { agentType: w.agentType, ...w.agentType === import_chunk_060xwhvh.pv && { isFork: (0, import_chunk_bzyb60p0.ic)(w) }, ...w.agentType === import_chunk_tc5xmewh.Gv && { isBuiltIn: (0, import_chunk_bzyb60p0.ic)(w) }, ...ge && { cwd: ge }, description: G, ...E && { name: E }, ...e.toolUseId && { toolUseId: e.toolUseId }, spawnDepth: Ce, ...(0, import_chunk_knp99ee7.Eqo)(ne, e.options.isNonInteractiveSession), ...Qe && { model: Qe }, ...Wt && { effort: Wt } }, storageV5: e.storageV5 }).catch((te) => (0, import_chunk_w578pjby.t)(`Failed to clear worktree metadata: ${(0, import_chunk_bzyb60p0.KI)(te)}`)), {};
        }
      }
      if (Q) await (0, import_chunk_bzyb60p0.rCe)(k, Q);
      return (0, import_chunk_w578pjby.t)(`Agent worktree kept at: ${k}`), ee;
    };
    if (o !== void 0 && e.agentId !== void 0 && ((0, import_chunk_bzyb60p0.FF)(e.agentId) || !g && (y?.aborted === true || (0, import_chunk_ed372ykp.$o)(J.get(e.agentId)?.status ?? "running")))) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_spawner_stop_pending"), await xe(), new K(`agent ${e.agentId} was stopped or ended while this spawn started`);
    if (e.abortController.signal.aborted) {
      let h = (0, import_chunk_cbnm4p23.Ai)(e.abortController.signal.reason);
      if (!(ne && h === "interrupt")) throw await xe(), new import_chunk_jv7av99m.Ie();
    }
    if (Vt === null && (0, import_chunk_18rsj2ts.Nz)()) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_no_directory_in_cwd_scope"), new K("A subagent cannot be started from here in this session. Do the task without a subagent.");
    let rt = await $r();
    if (je !== void 0 && ne) {
      let h = qe === void 0 ? { kind: "closed", message: (0, import_chunk_bzyb60p0.TQo)(dt) } : qe.confirm(e.abortController.signal);
      if (h !== void 0) {
        if (rt(), await xe(), h.kind === "aborted") throw new import_chunk_jv7av99m.Ie();
        throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_background_launch_closed"), new K(h.message);
      }
    }
    let Ye = In();
    re.spawnedSubagent = Ye;
    let $n = () => {
      if (ft !== void 0) (0, import_chunk_865at33z.pOl)({ agentId: se, deliveringLoop: e.agentId }, ft);
    }, qt = async (h) => {
      try {
        return await h;
      } catch (k) {
        throw rt(), k;
      }
    }, Wn = qe !== void 0 && E && E !== import_chunk_865at33z.cS ? e.getAppState().agentNameRegistry.get(E) : void 0;
    if (E && E !== import_chunk_865at33z.cS) e.agentLifecycle.registerName(E, (0, import_chunk_mzmcvr6c.ro)(se));
    let yt = E && E !== import_chunk_865at33z.cS ? E : void 0, qr = (0, import_chunk_sphs90qq.btr)(e.agentId, se), jn = o !== void 0 && e.requireCanUseTool === true;
    if (jn && !(0, import_chunk_trwykz8a.mn)().canUseToolNarrowings.has(se)) (0, import_chunk_trwykz8a.mn)().canUseToolNarrowings.set(se, ns(A));
    let Qn = qr || jn ? true : void 0;
    (0, import_chunk_trwykz8a.mn)().agentSpawned.emit({ agentId: se, agentType: w.agentType, parentAgentId: Ne, taskRegistry: J });
    let wt = Qe === void 0 && !(0, import_chunk_drk264d0.Ey)(e), xn = V || (0, import_chunk_drk264d0.Ey)(e) ? void 0 : Qe;
    if (ne) {
      let h = se, k = (0, import_chunk_bzyb60p0.yHe)({ outputFileReadable: (0, import_chunk_bzyb60p0.q$)((0, import_chunk_q2404y26.wA)(e)), ownerCanContinueAgents: re.callerCanContinueAgents, agentId: h, ownerAgentId: tt, parentAgentId: Ne, spawnDepth: Ce, launchedWithDefaults: wt, launchModel: xn, description: G, prompt: U, model: ae, selectedAgent: w, taskRegistry: J, toolUseId: e.toolUseId, cwd: Bn, spawnedSubagent: Ye, pluginRewrote: Ee.isRewritten, sessionScratch: e.session.sessionScratch });
      if (qe !== void 0 && !qe.handOver({ agentId: k.agentId, abortController: k.abortController })) {
        if ((0, import_chunk_bzyb60p0.XI)(k.agentId, J, "system", void 0, { lifecycleNotStarted: true }), rt(), (0, import_chunk_bzyb60p0.ZL)(k.agentId, J), E && Wn !== void 0) e.agentLifecycle.registerName(E, Wn);
        throw await xe(), (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_background_launch_not_taken"), new K((0, import_chunk_bzyb60p0.TQo)(dt));
      }
      if (!(0, import_chunk_f9x2f6cx.Se)() && o?.spawnParentId === void 0) (0, import_chunk_4yjj7pjs.EH)(tt, `agent:${h}`, J);
      if ((0, import_chunk_bzyb60p0.z$)() && !(0, import_chunk_f9x2f6cx.Se)() && (!E || E === import_chunk_865at33z.cS) && !import_chunk_060xwhvh.EWn.has(w.agentType)) {
        let j = e.agentLifecycle.allocateName(w.agentType);
        e.agentLifecycle.registerName(j, (0, import_chunk_mzmcvr6c.ro)(h)), yt = j;
      }
      if (gt.length > 0) await qt((0, import_chunk_41appe38.rei)({ observedTaskId: h, observedName: yt ?? E ?? w.agentType, observedDefinition: w, arms: gt, storageV5: e.storageV5 }));
      let W = { agentId: h, parentAgentId: Ne, depth: Ce, ...(0, import_chunk_865at33z.s6t)(e) && { spawnedByMainThread: true }, parentSessionId: (0, import_chunk_wtm85h0y.cD)(), agentType: "subagent", subagentName: w.agentType, displayName: yt, isAsync: true, isBackgroundAgent: true, ...Pn && { delegatedObservation: true }, isBuiltIn: (0, import_chunk_bzyb60p0.ic)(w), ...V && (0, import_chunk_865at33z.uz)(e.agentContext) && { forkOfMainConversation: true }, invokingRequestId: I?.requestId, invocationKind: "spawn", invocationEmitted: false, parentPromptId: Mn, ...(0, import_chunk_865at33z.CX)(e.agentContext) };
      re.agentContext = W, (0, import_chunk_865at33z.Qme)(import_chunk_865at33z.N1, W, () => (0, import_chunk_18rsj2ts.k6e)(Vt, () => (0, import_chunk_knp99ee7.j_e)({ taskId: k.agentId, abortController: k.abortController, makeStream: (j, Q, H) => (0, import_chunk_knp99ee7.VL)({ ...ht, launchedWithDefaults: wt, session: Gt, override: { ...ht.override, agentId: (0, import_chunk_mzmcvr6c.ro)(k.agentId), agentContext: W, abortController: k.abortController, requireCanUseTool: Qn }, onCacheSafeParams: j, onQueryProgress: Q, onStreamTokenEstimate: H }), metadata: re, definedBy: w, description: G, toolUseContext: e, taskRegistry: J, agentIdForCleanup: h, reviewTools: zt, enableSummarization: (0, import_chunk_f9x2f6cx.nVe)() || (hn || wn) && !(0, import_chunk_f9x2f6cx.Se)(), getWorktreeResult: xe, onRunSettled: rt }))), $n(), Nt?.started({ agentId: k.agentId, model: ae });
      let X = !(0, import_chunk_tc5xmewh.yA)(w) && (0, import_chunk_bzyb60p0.q$)((0, import_chunk_q2404y26.wA)(e));
      return (0, import_chunk_cqa9hrgx.u)("subagent_launch"), { data: { isAsync: true, status: "async_launched", agentId: k.agentId, description: G, resolvedModel: ae, prompt: U, outputFile: k.outputFile ?? "", canReadOutputFile: X, canContinueAgent: (0, import_chunk_wd66nsbc.bC)((0, import_chunk_q2404y26.wA)(e)), ...Fn && { sharesCwd: true } } };
    } else {
      let h = (0, import_chunk_mzmcvr6c.ro)(se), k = (0, import_chunk_mzra7agn.vY)() || (0, import_chunk_bzyb60p0.i5)() !== void 0, W = { agentId: h, parentAgentId: Ne, depth: Ce, ...(0, import_chunk_865at33z.s6t)(e) && { spawnedByMainThread: true }, parentSessionId: (0, import_chunk_wtm85h0y.cD)(), agentType: "subagent", subagentName: w.agentType, displayName: yt, isAsync: false, isBackgroundAgent: Gr, ...Pn && { delegatedObservation: true }, isBuiltIn: (0, import_chunk_bzyb60p0.ic)(w), ...V && (0, import_chunk_865at33z.uz)(e.agentContext) && { forkOfMainConversation: true }, invokingRequestId: I?.requestId, invocationKind: "spawn", invocationEmitted: false, parentPromptId: Mn, ...(0, import_chunk_865at33z.CX)(e.agentContext) };
      re.agentContext = W;
      let X = (0, import_chunk_865at33z.N1)(W, () => (0, import_chunk_18rsj2ts.k6e)(Vt, async () => {
        let j = Date.now(), Q = ae, H = (0, import_chunk_knp99ee7.J4r)([], ae);
        if (Oe.length > 0) {
          let ie = (0, import_chunk_bzyb60p0.Mg)(Oe).find((be) => be.type === "user");
          if (ie && ie.type === "user" && _) _({ type: "progress", toolUseID: `agent_${I.message.id}`, data: { message: ie, type: "agent_progress", prompt: U, agentId: h, agentType: w.agentType, isBuiltIn: (0, import_chunk_bzyb60p0.ic)(w), description: G, resolvedModel: Q, modelsUsed: H } });
        }
        let N = (0, import_chunk_bzyb60p0.sen)({ outputFileReadable: (0, import_chunk_bzyb60p0.q$)((0, import_chunk_q2404y26.wA)(e)), ownerCanContinueAgents: re.callerCanContinueAgents, agentId: h, ownerAgentId: tt, parentAgentId: Ne, spawnDepth: Ce, description: G, prompt: U, model: ae, selectedAgent: w, taskRegistry: J, parentAbortController: e.abortController, toolUseId: e.toolUseId, ...(0, import_chunk_yegw2jm5.G4r)(je, _n), isDirectCall: !e.innerCall && e.hookCaller === void 0, cwd: Bn, spawnedSubagent: Ye, pluginRewrote: Ee.isRewritten, ...k && { launchedWithDefaults: wt, launchModel: xn, requestShape: "foreground" } }), { taskId: ee, cancelAutoBackground: oe, abortController: q, detachParentAbortRelay: z } = N;
        if (gt.length > 0) await qt((0, import_chunk_41appe38.rei)({ observedTaskId: h, observedName: E ?? w.agentType, observedDefinition: w, arms: gt, storageV5: e.storageV5 }));
        let ye = { moved: false };
        (0, import_chunk_cqa9hrgx.u)("subagent_launch");
        let we = [], He = new import_chunk_bzyb60p0.sHe(h), de = e.options.forwardSubagentText, te, it = false, ze = (R) => {
          if (He.hasNews()) (0, import_chunk_bzyb60p0.iHe)(we, h);
          if (ye.moved) return;
          if (R.type === "query_model_change") {
            Q = R.toModel, H = (0, import_chunk_knp99ee7.J4r)(H, R.toModel);
            return;
          }
          if (R.type === "spinner_mode") return;
          if (R.type !== "api_metrics" && R.type !== "set_in_progress_tool_use_ids") we.push(R);
          if (!_) return;
          if (te !== void 0 && !(R.type === "system" && R.subtype === "api_error")) te = void 0, _({ type: "progress", toolUseID: `agent_${I.message.id}`, data: { type: "agent_api_retry", resolved: true, agentId: h, agentType: w.agentType } });
          if (R.type === "api_metrics") {
            _(R);
            return;
          }
          if (R.type === "set_in_progress_tool_use_ids") return;
          if (R.type === "progress" && (R.data.type === "bash_progress" || R.data.type === "powershell_progress")) _({ type: "progress", toolUseID: R.toolUseID, data: R.data });
          if (R.type === "system" && R.subtype === "api_error") {
            let ie = (0, import_chunk_bzyb60p0.yZt)(R.error), be = `${R.source ?? "request_retry"}:${R.retryAttempt}:${R.maxRetries}:${ie}`;
            if (be !== te) te = be, _({ type: "progress", toolUseID: `agent_${I.message.id}`, data: { type: "agent_api_retry", agentId: h, agentType: w.agentType, attempt: R.retryAttempt, maxRetries: R.maxRetries, retryDelayMs: R.retryInMs, errorStatus: R.error.status, errorCategory: ie } });
            return;
          }
          if ((0, import_chunk_bzyb60p0.UY)(R)) {
            if ((0, import_chunk_knp99ee7.tgt)(e, R)) _((0, import_chunk_bzyb60p0.mJr)(R));
            return;
          }
          if (R.type !== "assistant" && R.type !== "user") return;
          if (R.type === "user" && R.isMeta && !it) return;
          if (R.type === "assistant") it = true;
          if (R.type === "assistant") {
            let ie = (0, import_chunk_bzyb60p0.zQr)(R);
            if (ie > 0) _({ type: "response_length", op: "add", delta: ie });
          }
          for (let ie of (0, import_chunk_bzyb60p0.Mg)([R])) {
            let be = ie.message.content[0];
            if (!de && be.type !== "tool_use" && be.type !== "tool_result") continue;
            _({ type: "progress", toolUseID: `agent_${I.message.id}`, data: { message: ie, type: "agent_progress", prompt: "", agentId: h, agentType: w.agentType, isBuiltIn: (0, import_chunk_bzyb60p0.ic)(w), description: G, resolvedModel: Q, modelsUsed: H } });
          }
        }, Hn = Ft ? void 0 : setTimeout((R) => {
          if (R.toolUseId) R.emitToolProgress?.({ kind: "background_hint", toolUseId: R.toolUseId });
        }, Ko, e), Kt = {}, Kr = async () => (Kt = await xe(), Kt);
        Nt?.started({ agentId: h, model: ae }), x?.mark("model");
        let Yr = (0, import_chunk_knp99ee7.j_e)({ taskId: ee, abortController: q, makeStream: (R, ie, be) => (0, import_chunk_knp99ee7.VL)({ ...ht, ...k && { launchedWithDefaults: wt }, session: Gt, override: { ...ht.override, agentId: h, agentContext: W, abortController: q, requireCanUseTool: Qn }, onCacheSafeParams: R, onQueryProgress: ie, onStreamTokenEstimate: be }), metadata: re, definedBy: w, description: G, toolUseContext: e, taskRegistry: J, agentIdForCleanup: h, reviewTools: zt, enableSummarization: (0, import_chunk_f9x2f6cx.nVe)(), getWorktreeResult: Kr, onMessage: ze, shouldNotifyOwner: () => ye.moved, onRunSettled: rt });
        $n();
        let Yt = (0, import_chunk_knp99ee7.W_e)(e, h, w.agentType, w), Be, zn;
        try {
          let R;
          try {
            R = await (0, import_chunk_yegw2jm5.H7t)(Yr, N.backgroundSignal, _n);
          } catch (le) {
            if (R = "done", le instanceof import_chunk_jv7av99m.Ie) {
              let Xe = (0, import_chunk_cbnm4p23.Ai)(q.signal.reason) === "permission-stop";
              if (Xe) zn = (0, import_chunk_jv7av99m.d)(le);
              if ((0, import_chunk_y53wbr8a.a)("tengu_agent_tool_terminated", { agent_type: et, model: (0, import_chunk_865at33z.Xt)(re.resolvedAgentModel), final_model: (0, import_chunk_865at33z.Xt)(H.at(-1) ?? re.resolvedAgentModel), model_swapped: H.length > 1, duration_ms: Date.now() - re.startTime, is_async: false, is_built_in_agent: re.isBuiltInAgent, agent_depth: re.agentDepth, reason: Xe ? (0, import_chunk_78g0060s.S)("permission_stop_sync") : (0, import_chunk_cbnm4p23.XT)(q.signal) ? (0, import_chunk_78g0060s.S)("plugin_cut_sync") : (0, import_chunk_78g0060s.S)("user_cancel_sync") }), !Xe) Ye.killed("user");
              if (!(q.signal.aborted && !e.abortController.signal.aborted)) throw (0, import_chunk_knp99ee7.eTe)(Yt("stopped")), le;
              Be = (0, import_chunk_jv7av99m.D)(le);
            } else (0, import_chunk_w578pjby.t)(`Sync agent error: ${(0, import_chunk_jv7av99m.d)(le)}`, { level: "error" }), Be = (0, import_chunk_jv7av99m.D)(le);
          }
          if (!Be && (0, import_chunk_yegw2jm5.D7t)({ outcome: R, registration: N, agentContext: W, wait: ye, ownerAgentId: tt, taskRegistry: J, sessionScratch: e.session.sessionScratch, agentTask: { startWorkerCheckinForBackgroundedAgent: import_chunk_bzyb60p0.ien, backgroundAgentTask: import_chunk_bzyb60p0.ZTe, hasAgentChildKeepalive: import_chunk_bzyb60p0.jie } })) {
            let le = !(0, import_chunk_tc5xmewh.yA)(w) && (0, import_chunk_bzyb60p0.q$)((0, import_chunk_q2404y26.wA)(e));
            return { data: { isAsync: true, status: "async_launched", agentId: ee, description: G, resolvedModel: Q, ...H.length > 1 && { modelsUsed: [...H] }, prompt: U, outputFile: N.outputFile ?? "", canReadOutputFile: le, canContinueAgent: (0, import_chunk_wd66nsbc.bC)((0, import_chunk_q2404y26.wA)(e)), ...(0, import_chunk_nd1dn2mq.t3s)(J, ee), ...Fn && { sharesCwd: true } } };
          }
          let ie = we.findLast((le) => le.type !== "system" && le.type !== "progress");
          if (ie && (0, import_chunk_bzyb60p0.wH)(ie)) throw (0, import_chunk_y53wbr8a.a)("tengu_agent_tool_terminated", { agent_type: et, model: (0, import_chunk_865at33z.Xt)(re.resolvedAgentModel), final_model: (0, import_chunk_865at33z.Xt)(H.at(-1) ?? re.resolvedAgentModel), model_swapped: H.length > 1, duration_ms: Date.now() - re.startTime, is_async: false, is_built_in_agent: re.isBuiltInAgent, agent_depth: re.agentDepth, reason: (0, import_chunk_78g0060s.S)("user_cancel_sync") }), Ye.cancelledAfterCompletion(), (0, import_chunk_knp99ee7.eTe)(Yt("stopped")), new import_chunk_jv7av99m.Ie();
          let be, Jt = we, Vn = Be instanceof import_chunk_jv7av99m.Ie ? "stopped" : "failed";
          if (Be) {
            let le;
            try {
              le = (0, import_chunk_knp99ee7.e3r)(Be, we);
            } catch (Xe) {
              Ye.failed();
              let Zt = Yt(Vn);
              throw Zt ? await (0, import_chunk_knp99ee7.uMe)(Xe, Zt, e.abortController.signal) : Xe;
            }
            be = le.cutoffNote ?? zn, Jt = le.history, (0, import_chunk_w578pjby.t)(`Sync agent recovering from error with ${Jt.length} messages`);
          }
          let qn = (0, import_chunk_4dnx2vkh.B0e)(J.get(h), h), Xr = await (0, import_chunk_knp99ee7.t3r)((0, import_chunk_knp99ee7.rtt)(Jt, h, { ...re, modelsUsed: H }, { suppressTelemetry: !Be, handback: qn }), { agentId: h, agentMessages: we, agentType: et, child: V ? "fork" : "agent", consumed: qn?.at(-1)?.consumed, cutoffNote: be, definedBy: w, status: Be ? Vn : "completed", tools: zt(), toolUseContext: e }), Kn = (0, import_chunk_vj6f11qy.KTa)(we), Yn = await tn(h, e, I?.message.id);
          return { ...Yn.length > 0 && { newMessages: Yn }, data: { status: "completed", prompt: U, ...Xr, ...Kn !== void 0 && { taskCalls: Kn }, ...Kt, canContinueAgent: (0, import_chunk_wd66nsbc.bC)((0, import_chunk_q2404y26.wA)(e)) } };
        } finally {
          if (Hn) clearTimeout(Hn);
          if (e.toolUseId) e.emitToolProgress?.({ kind: "clear", toolUseId: e.toolUseId });
          if (oe?.(), z(), !ye.moved) (0, import_chunk_bzyb60p0.Deo)(ee, J, { toolUseId: e.toolUseId, summary: G, startTime: j });
        }
      }));
      return qt(X);
    }
  } catch (_3) {
    var _error2 = _3, _hasError2 = true;
  } finally {
    __callDispose(_stack2, _error2, _hasError2);
  }
}
var eQn = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "8bda39eb-cba5-5e9b-a431-7436107f1f45", async prompt({ agents: r, tools: e, getToolPermissionContext: o, allowedAgentTypes: g, model: y, leanPrompt: A, describesSystemTurns: I, querySource: _ }) {
  let x = await o(), _e = (0, import_chunk_c4zg4pwc.dl)(), { available: L } = Er(r, g, x), ce = Pr(r, g);
  return await (0, import_chunk_bzyb60p0.m3a)({ model: y, isCoordinator: _e, forkAvailable: L, generalPurposeAvailable: ce, continueAvailable: (0, import_chunk_wd66nsbc.bC)(e), canYield: (0, import_chunk_bzyb60p0.oHe)(e), leanPrompt: A, describesSystemTurns: I, subagentBudgetNote: br(_), modelMix: (0, import_chunk_bzyb60p0.iJo)(_) });
}, name: import_chunk_060xwhvh._t, searchHint: "delegate work to a subagent", aliases: [import_chunk_060xwhvh.Df], backgrounding: "self", maxResultSizeChars: import_chunk_060xwhvh.Hcn, get preserveToolUseResultInSubagents() {
  return (0, import_chunk_865at33z.Lt)("tengu_velvety_sprout", false) === true;
}, async description() {
  return "Launch a new agent";
}, get inputSchema() {
  return Sqs();
}, coerceInput: import_chunk_bzyb60p0.$Qr, get outputSchema() {
  return es();
}, create(r) {
  return { call(e, o) {
    if (!o.runEngine) return Promise.reject(Error("Agent: launching needs the executor (call.runEngine)"));
    return o.runEngine(ts, { agentInput: e, assistantMessage: o.parentMessage, onProgress: o.onProgress, timing: o.timing, ...(0, import_chunk_r3kja8v6.ue)() && { enclosingToolUseId: o.enclosingToolUseId } });
  }, async checkPermissions(e, o) {
    if (!(0, import_chunk_xfj2cwfv.Jr)(r.permissions().mode)) return { behavior: "allow", updatedInput: e };
    if (await o.runEngine(wr, { input: e })) return { behavior: "allow", updatedInput: e };
    return { behavior: "passthrough", message: "Agent tool requires permission to spawn subagents." };
  } };
}, isReadOnly() {
  return true;
}, toAutoClassifierInput(r) {
  let e = r, o = [e.subagent_type].filter((y) => y !== void 0);
  return `${o.length > 0 ? `(${o.join(", ")}): ` : ": "}${e.prompt}`;
}, isConcurrencySafe() {
  return true;
}, userFacingName: _Go, getActivityDescription(r) {
  return r?.description?.replace(/\s+/g, " ").trim() || "Running task";
}, restoreTransientForRemap: on, keepMarksOnAnswer: on, mapToolResultToToolResultBlockParam(r, e) {
  let o = r;
  if (typeof o === "object" && o !== null && "status" in o && o.status === "teammate_spawned") {
    let g = o;
    return { tool_use_id: e, type: "tool_result", content: [{ type: "text", text: `Spawned successfully. (This tool result is internal metadata \u2014 never quote or paste any part of it, including the ID below, into a user-facing reply.)
agent_id: ${g.agent_id}
name: ${g.name}
The agent is now running and will receive instructions via mailbox.${g.started_away_from_shell ? `
It started in the session's own folder, not in the folder the shell has moved to, so that folder's settings and permission rules do not apply to it. Send it the path to work in, and tell the user that /cd moves the session's folder.` : ""}` }] };
  }
  if (r.status === "remote_launched") {
    let g = r;
    return { tool_use_id: e, type: "tool_result", content: [{ type: "text", text: `Cloud agent launched. (This tool result is internal metadata \u2014 never quote or paste any part of it, including the ID below, into a user-facing reply.)
taskId: ${g.taskId}
session_url: ${g.sessionUrl}
output_file: ${g.outputFile} (final results land here only after the completion notification; until then it holds a partial, still-growing event log)
The agent is running in the cloud. You will be notified automatically when it completes. Do not report or predict its results before that notification arrives.
In your own words, briefly tell the user what you launched \u2014 do not echo this tool result \u2014 and end your response.` }] };
  }
  if (r.status === "async_launched" && r.waitsAtPermissionPrompt) return { tool_use_id: e, type: "tool_result", content: [{ type: "text", text: `The agent has not finished. It is waiting for the user to answer a permission request that is shown in the chat. What needs the permission has not run. The agent no longer blocks this turn. If the user allows the request, the agent continues, and a notification with its report arrives in a later message.
agentId: ${r.agentId} (internal ID, not shown to the user)` }] };
  if (r.status === "async_launched") {
    let g = `Async agent launched successfully. (This tool result is internal metadata \u2014 never quote or paste any part of it, including the agentId below, into a user-facing reply.)
agentId: ${r.agentId} (internal ID - do not mention to user.${r.canContinueAgent === false ? "" : ` Use ${import_chunk_bne5t4g3.Ln} with to: '${r.agentId}', summary: '<5-10 word recap>' to continue this agent.`})
The agent is working in the background. You will be notified automatically when it completes. You know nothing about its results until that notification arrives \u2014 do not report, assume, or predict them; continue other work or respond to the user in the meantime.`, y = r.canReadOutputFile && r.outputFile ? `Do not duplicate this agent's work \u2014 avoid working with the same files or topics it is using.
output_file: ${r.outputFile}
Do NOT ${import_chunk_k883m4fq.De} or tail this file via the shell tool \u2014 it is the full subagent JSONL transcript and reading it will overflow your context. If the user asks for progress, say the agent is still running; you'll get a completion notification.` : "In your own words, briefly tell the user what you launched \u2014 do not echo this tool result. Agent results will arrive in a subsequent message. If the user asks for progress, say the agent is still running.", A = `${g}
${y}${r.sharesCwd ? `
${import_chunk_bzyb60p0.c3a}` : ""}`;
    return { tool_use_id: e, type: "tool_result", content: [{ type: "text", text: A }] };
  }
  if (r.status === "completed") {
    let g = r.worktreePath ? `
worktreePath: ${r.worktreePath}${r.worktreeBranch ? `
worktreeBranch: ${r.worktreeBranch}` : ""}` : "", y = r.inPlace ? `${(0, import_chunk_9e5mdyfk.jnn)(r.inPlace)}
` : "", A = r.content.length > 0 ? r.content : [{ type: "text", text: "(Subagent completed but returned no output.)" }], I = (0, import_chunk_4dnx2vkh.Ype)() ? (0, import_chunk_4dnx2vkh.kyo)(A, r.content.length > 0 ? r.harnessNoteCount : 0, r.content.length > 0 ? r.harnessTailCount : 0, r.harnessSectionHash) : A;
    if (r.agentType && import_chunk_060xwhvh.EWn.has(r.agentType) && !g && !y) return { tool_use_id: e, type: "tool_result", content: I };
    let _ = r.canContinueAgent === false ? "" : ` (use ${import_chunk_bne5t4g3.Ln} with to: '${r.agentId}', summary: '<5-10 word recap>' to continue this agent)`, x = `${y}agentId: ${r.agentId}${_}${g}
<usage>subagent_tokens: ${r.totalTokens}
tool_uses: ${r.totalToolUseCount}
duration_ms: ${r.totalDurationMs}</usage>`;
    if (I !== A && I.length === 1) return { tool_use_id: e, type: "tool_result", content: [{ type: "text", text: I[0].text + `
` + x }] };
    return { tool_use_id: e, type: "tool_result", content: [...I, { type: "text", text: x }] };
  }
  throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_unexpected_result_status"), Error(`Unexpected agent tool result status: ${r.status}`);
} });
function Er(r, e, o) {
  if (!(0, import_chunk_bzyb60p0.ZUe)() || r.some((y) => (0, import_chunk_tc5xmewh.MQ)(y.agentType) === import_chunk_060xwhvh.pv) || !(e?.includes(import_chunk_060xwhvh.pv) ?? true)) return { available: false, denyRule: null };
  let g = (0, import_chunk_ht27b0vz.vZ)(o, import_chunk_060xwhvh._t, import_chunk_060xwhvh.pv);
  return { available: g === null, denyRule: g };
}
function kr(r) {
  let e = r.taskRegistry.getConcurrentSubagents();
  if (e < (0, import_chunk_bzyb60p0.cNt)()) return;
  if ((0, import_chunk_865at33z.b)("tengu_amber_kestrel", false)) return;
  let o = r.getAppState();
  if ((0, import_chunk_k67pwqya.IC)(o.ultracode, r.rootToolSurface.mainLoopModel)) return;
  let g = _r();
  if (e < g) return;
  return (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_concurrency_cap"), import_chunk_759mf2n7.ADt.of(r.session).recordRefused("concurrency_limit"), new K(`Concurrent subagent limit reached. You can run ${g} subagents at once. Do not retry. If the user wants more concurrent subagents, ask them to increase CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS.`);
}
function Pr(r, e) {
  let o = (0, import_chunk_tc5xmewh.MQ)(import_chunk_bzyb60p0.W$.agentType), g = r.filter((I) => (0, import_chunk_tc5xmewh.MQ)(I.agentType) === o), y = (I) => e?.includes(I.agentType) ?? true, A = g.find((I) => I.agentType === import_chunk_bzyb60p0.W$.agentType);
  if (A) return y(A);
  return g.length === 1 && y(g[0]);
}
function Sr({ isolation: r, querySource: e, messages: o, isModsOwnSpawn: g = false }) {
  if (r === "remote") return { code: "subagent_fork_remote_isolation", message: 'Fork cannot use isolation: "remote" \u2014 a remote session cannot inherit the conversation context. Omit isolation (or use "worktree"), or spawn a named agent type for remote work.' };
  if (!g && (e === `agent:builtin:${import_chunk_bzyb60p0.zY.agentType}` || (0, import_chunk_bzyb60p0.sci)(o))) return { code: "subagent_recursive_fork", message: "Fork is not available inside a forked worker. Complete your task directly using your tools." };
  return null;
}
function Rt(r) {
  return r.join(", ") || "none";
}
function rs(r, e) {
  if (!r) return;
  let o = (0, import_chunk_bzyb60p0.pQt)(r, e);
  return typeof o === "object" ? o.inheritCap : o;
}
function Ir(r, e, o) {
  let g = e.find((_) => _.agentType === o);
  if (g) return g;
  let y = (0, import_chunk_tc5xmewh.MQ)(o);
  if (!y) return;
  let A = r.filter((_) => (0, import_chunk_tc5xmewh.MQ)(_.agentType) === y);
  if (A.length !== 1) return;
  let I = A[0];
  return e.some((_) => _.agentType === I.agentType) ? I : void 0;
}
function Mr() {
  return (0, import_chunk_adx6804h.P)().optional().describe("@internal False when the calling agent cannot continue this agent with a follow-up message (it holds no messaging tool); absent means it can.");
}
