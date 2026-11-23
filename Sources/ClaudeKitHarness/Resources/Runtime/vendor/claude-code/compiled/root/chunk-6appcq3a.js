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
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m2, _2) {
    return _2 = Error(m2), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s, _2;
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
var chunk_6appcq3a_exports = {};
__export(chunk_6appcq3a_exports, {
  A7l: () => A7l,
  E7t: () => E7t,
  HGl: () => HGl,
  KIa: () => KIa,
  R7l: () => R7l,
  RTn: () => RTn,
  VIa: () => VIa,
  k7t: () => k7t,
  x7l: () => x7l
});
module.exports = __toCommonJS(chunk_6appcq3a_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_0ha8wex8 = require("/$bunfs/root/chunk-0ha8wex8.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_57sd0ak5 = require("/$bunfs/root/chunk-57sd0ak5.js");
var import_chunk_r0q0n8n3 = require("/$bunfs/root/chunk-r0q0n8n3.js");
var import_chunk_271xsh6x = require("/$bunfs/root/chunk-271xsh6x.js");
var import_chunk_wddxyb00 = require("/$bunfs/root/chunk-wddxyb00.js");
var import_chunk_a9nnd83v = require("/$bunfs/root/chunk-a9nnd83v.js");
var import_chunk_8704k7wd = require("/$bunfs/root/chunk-8704k7wd.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_pmryp5f3 = require("/$bunfs/root/chunk-pmryp5f3.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_vfyns8ja = require("/$bunfs/root/chunk-vfyns8ja.js");
var import_chunk_z2xw6net = require("/$bunfs/root/chunk-z2xw6net.js");
var import_chunk_jhdsf4g3 = require("/$bunfs/root/chunk-jhdsf4g3.js");
var import_chunk_21y9ek9j = require("/$bunfs/root/chunk-21y9ek9j.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
var import_chunk_qvjn7dva = require("/$bunfs/root/chunk-qvjn7dva.js");
var import_chunk_54j6k3fn = require("/$bunfs/root/chunk-54j6k3fn.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_yg9g0473 = require("/$bunfs/root/chunk-yg9g0473.js");
var import_chunk_wzzzxdne = require("/$bunfs/root/chunk-wzzzxdne.js");
var import_chunk_tnmn1726 = require("/$bunfs/root/chunk-tnmn1726.js");
var import_chunk_w50zedgp = require("/$bunfs/root/chunk-w50zedgp.js");
var import_chunk_2xjdqky3 = require("/$bunfs/root/chunk-2xjdqky3.js");
var import_chunk_tfs0ssqe = require("/$bunfs/root/chunk-tfs0ssqe.js");
var import_chunk_qanr9g0g = require("/$bunfs/root/chunk-qanr9g0g.js");
var import_chunk_e4jbq56j = require("/$bunfs/root/chunk-e4jbq56j.js");
var import_chunk_knp99ee7 = require("/$bunfs/root/chunk-knp99ee7.js");
var import_chunk_m9badjcf = require("/$bunfs/root/chunk-m9badjcf.js");
var import_chunk_hkbgb7sm = require("/$bunfs/root/chunk-hkbgb7sm.js");
var import_chunk_qzhs2fs3 = require("/$bunfs/root/chunk-qzhs2fs3.js");
var import_chunk_be4a2jph = require("/$bunfs/root/chunk-be4a2jph.js");
var import_chunk_xcwk20g6 = require("/$bunfs/root/chunk-xcwk20g6.js");
var import_chunk_vgnv4f1p = require("/$bunfs/root/chunk-vgnv4f1p.js");
var import_chunk_cpv7yv0r = require("/$bunfs/root/chunk-cpv7yv0r.js");
var import_chunk_j7ensb3k = require("/$bunfs/root/chunk-j7ensb3k.js");
var import_chunk_f0r815zs = require("/$bunfs/root/chunk-f0r815zs.js");
var import_chunk_thj6vbn4 = require("/$bunfs/root/chunk-thj6vbn4.js");
var import_chunk_bf14swcm = require("/$bunfs/root/chunk-bf14swcm.js");
var import_chunk_58apc8rx = require("/$bunfs/root/chunk-58apc8rx.js");
var import_chunk_vhsysgcd = require("/$bunfs/root/chunk-vhsysgcd.js");
var import_chunk_07r720jc = require("/$bunfs/root/chunk-07r720jc.js");
var import_chunk_8kp03twd = require("/$bunfs/root/chunk-8kp03twd.js");
var import_chunk_nwk8fexj = require("/$bunfs/root/chunk-nwk8fexj.js");
var import_chunk_ch6321bk = require("/$bunfs/root/chunk-ch6321bk.js");
var import_chunk_gftn60qp = require("/$bunfs/root/chunk-gftn60qp.js");
var import_chunk_tjdnrbvx = require("/$bunfs/root/chunk-tjdnrbvx.js");
var import_chunk_c4zg4pwc = require("/$bunfs/root/chunk-c4zg4pwc.js");
var import_chunk_mjq4pbxz = require("/$bunfs/root/chunk-mjq4pbxz.js");
var import_chunk_5nf47kr4 = require("/$bunfs/root/chunk-5nf47kr4.js");
var import_chunk_rr6cvcc3 = require("/$bunfs/root/chunk-rr6cvcc3.js");
var import_chunk_4jzbgp2v = require("/$bunfs/root/chunk-4jzbgp2v.js");
var import_chunk_13h3tw8q = require("/$bunfs/root/chunk-13h3tw8q.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_ghnve1xk = require("/$bunfs/root/chunk-ghnve1xk.js");
var import_chunk_bp9b0hd8 = require("/$bunfs/root/chunk-bp9b0hd8.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_crypto = require("crypto");
var import_path = require("path");
var Jt = 64, Rt = "This skill declares hooks, and they were not registered in this session: a limit on hooks, a matcher that cannot be tested here, the organization's policy, or the service that runs this session or checks its tool calls kept them out. The tools that its allowed-tools would grant were not granted either. If the skill relies on its hooks to check or block tool calls, they check none now: tell the user.";
function It(e, s, o, c, n, T) {
  let g = e.skillDraws(s);
  if (g === void 0) return;
  let p = g.get(c ?? o) ?? { hooks: 0, characters: 0, texts: /* @__PURE__ */ new Map(), unfitTexts: 0 };
  g.set(c ?? o, p);
  let k = (0, import_chunk_w578pjby._)([n, (0, import_chunk_ccm69jjy.Je)((0, import_chunk_w578pjby._)(T))]);
  if (p.texts.has(k)) return p.texts.get(k);
  let v = 0, P = 0;
  for (let x of Object.values(T).flatMap((V) => V ?? [])) {
    let V = Math.max(1, x.hooks.length);
    v += V, P += (x.matcher?.length ?? 0) * V;
  }
  let U;
  if (p.characters + P > import_chunk_tnmn1726.tfo) U = "characters";
  else if (p.hooks + v > import_chunk_tnmn1726.Bon) U = "count";
  else if ((0, import_chunk_f9x2f6cx.mf)()?.testsSkillMatchers(T) === false) U = "matcher";
  if (U !== void 0) {
    if (p.unfitTexts === Jt) return U;
    p.unfitTexts++;
  }
  if (p.texts.set(k, U), (0, import_chunk_y53wbr8a.a)("tengu_skill_hooks_bounds_checked", { outcome: (0, import_chunk_78g0060s.f)(U ?? "fits"), source_kind: (0, import_chunk_78g0060s.f)(o), hooks_asked: v, characters_asked: P, hooks_drawn_before: p.hooks, characters_drawn_before: p.characters, hooks_bound: import_chunk_tnmn1726.Bon, characters_bound: import_chunk_tnmn1726.tfo }), U === void 0) {
    p.hooks += v, p.characters += P;
    return;
  }
  (0, import_chunk_w578pjby.t)(`Skill '${n}' registers none of its hooks and grants no tools (${U}): the skills of one source hold at most ${import_chunk_tnmn1726.Bon} hooks and ${import_chunk_tnmn1726.tfo} characters of matchers in a session, and a cloud session tests some matchers only`, { level: "warn" }), (0, import_chunk_42tcgre6.q)("warn", "skill_hooks_do_not_fit", { reason: U });
  try {
    (0, import_chunk_f9x2f6cx.mf)()?.skillHooksDoNotFit(o);
  } catch (x) {
    (0, import_chunk_w578pjby.t)(`Hooks: the plugin hook runner threw when told of a skill whose hooks do not fit (${(0, import_chunk_jv7av99m.d)(x)}): the host's log line is lost`, { level: "warn" });
  }
  return U;
}
function Et(e, s, o, c, n, T = false, g = false, p) {
  (0, import_chunk_rr6cvcc3.Ylt)(o, p);
  let k = 0;
  for (let v of import_chunk_xcgcdx61.Jd) {
    let P = o[v];
    if (!P) continue;
    for (let U of P) for (let x of U.hooks) {
      let V = x.once ? () => {
        (0, import_chunk_w578pjby.t)(`Removing one-shot hook for event ${v} in skill '${c}'`), e.remove(s, v, x, { skillRoot: n });
      } : void 0;
      e.add(s, v, U.matcher || "", x, { onHookSuccess: V, skillRoot: n, personal: T, checkout: g }), k++;
    }
  }
  if (k > 0) {
    if (n !== void 0) (0, import_chunk_f9x2f6cx.mf)()?.skillHooksRegistered(n, o);
    (0, import_chunk_w578pjby.t)(`Registered ${k} hooks from skill '${c}'`);
  }
}
function k7t(e) {
  try {
    let s = new Set((0, import_chunk_yg9g0473.I5)("command.run", { command: e }));
    return (0, import_chunk_865at33z.ce)().loadedModules.filter((c) => s.has(c.name)).reduce((c, n) => c + n.registrationsFor("command.run").length, 0) <= 1;
  } catch (s) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(s)), false;
  }
}
function mt({ commandName: e, agentId: s, isNonInteractiveSession: o, setAppState: c, credentials: n }) {
  if (s !== void 0 || o) return;
  if ((0, import_chunk_865at33z.Qt)()) return;
  (0, import_chunk_m9badjcf.tMa)(e);
  let T = (0, import_chunk_m9badjcf.t4r)(n);
  if (!(0, import_chunk_m9badjcf.kKo)(e)) return;
  if ((0, import_chunk_m9badjcf.EKo)(e)) {
    $t(e, c, n);
    return;
  }
  T.then((g) => {
    if ((0, import_chunk_m9badjcf.EKo)(e)) {
      $t(e, c, n);
      return;
    }
    if (!g) return;
    let p = (0, import_chunk_m9badjcf.wKo)();
    if (!p) return;
    c((k) => ({ ...k, fotwClaim: { phase: "needs_payment_setup", command: p, amountMinorUnits: g.amountMinorUnits, currency: g.currency } }));
  });
}
function $t(e, s, o) {
  let c = (0, import_chunk_m9badjcf.wKo)(), n = (0, import_chunk_m9badjcf._qe)();
  if (!c || !n) return;
  s((T) => ({ ...T, fotwClaim: { phase: "pending", command: c, amountMinorUnits: n.amountMinorUnits, currency: n.currency } })), (0, import_chunk_m9badjcf.eMa)(e, o).catch(() => ({ outcome: "failed" })).then((T) => {
    s((g) => {
      let p = g.fotwClaim;
      if (!p || p.command !== c) return g;
      if (T.outcome === "granted") return { ...g, fotwClaim: { phase: "granted", command: p.command, amountMinorUnits: T.amountMinorUnits, currency: T.currency } };
      return { ...g, fotwClaim: { ...p, phase: "failed" } };
    });
  });
}
var Zt = "tengu_polished_quill_killswitch", eo = 40;
function Ot(e) {
  if (!e) return false;
  return !(0, import_chunk_865at33z.b)(Zt, false);
}
function Ft({ commandName: e, suggestion: s, availableCommandNames: o, availableCommandCount: c, reservedName: n }) {
  return { type: "unknown_command_fallback", commandName: (0, import_chunk_kx2fp6pc.bQe)(e) && !(0, import_chunk_xfj2cwfv.SXe)(e) ? e : void 0, suggestion: s !== void 0 && (0, import_chunk_kx2fp6pc.bQe)(s) ? s : void 0, availableCommandNames: o.filter((T) => (0, import_chunk_kx2fp6pc.bQe)(T)).slice(0, eo), availableCommandCount: c, ...n && { reservedName: n } };
}
var Nt = (0, import_chunk_t57w17k7.de)((0, import_chunk_r0q0n8n3.Xr)(), (e) => e.set(void 0));
function to(e, s) {
  let o = import_chunk_bzyb60p0.qI.get()?.folder, c = import_chunk_bzyb60p0.DTe.ownerOf(e), n = c === void 0 ? void 0 : (0, import_chunk_07r720jc.HT)(c)?.pluginRoot, T = o !== void 0 && n !== void 0 && (0, import_chunk_bzyb60p0.kHe)((0, import_path.resolve)(o), (0, import_path.resolve)(n)) !== void 0, g = [...(0, import_chunk_f9x2f6cx.f3t)(null).values()].some((k) => k.content.includes(import_chunk_vgnv4f1p.ITn) || k.content.includes(import_chunk_vgnv4f1p.PTn) || k.content.includes(import_chunk_vgnv4f1p.OTn)), p = (0, import_chunk_f9x2f6cx.W)();
  if (s !== void 0 || !T || !g || Nt.get() === p) return;
  return Nt.set(p), `Claude Code sent this note after the person ran /${e}, a command of the mod they are building in this session; they have sent no message since, and the command's output is above. Reply in one or two lines and use no tools. If the output shows the mod did what they asked, make the plugin-authoring skill's one-line offer for the mod, unless it was already made or they said no; if the output shows a problem, say what went wrong; otherwise reply in one short line about the result.`;
}
var oo = /* @__PURE__ */ new Set(["clear", "resume", "help", "exit", "feedback"]);
function E7t(e, s) {
  if (!s) return false;
  return !(e && e.type !== "prompt" && oo.has(e.name));
}
async function xt(e, s, o) {
  let c = [], n = false, T = e.agentId ? void 0 : e.getAppState().activeGoal;
  try {
    let g = o.executeStopHooks((0, import_chunk_bz1f2qnq.Z)(e).mode, e.abortController.signal, void 0, false, e.agentId, e, [...e.messages, ...s], void 0, "fork_dispatch"), p = [];
    for await (let k of g) {
      if (k.timedOut && (0, import_chunk_ch6321bk.dLe)(T, k.hook)) (0, import_chunk_cqa9hrgx.l)("goal_met", "evaluator_timeout");
      if (k.message?.type === "attachment") {
        let v = k.message.attachment;
        if ("hookEvent" in v && v.hookEvent === "Stop") {
          if (v.type === "hook_non_blocking_error") p.push(v.stderr || `Exit code ${v.exitCode}`);
          else if (v.type === "hook_error_during_execution") p.push(v.content);
          else if (v.type === "hook_system_message") c.push(k.message);
        }
      }
      if (k.blockingError && !((0, import_chunk_ch6321bk.dLe)(T, k.hook) && T.paused)) c.push((0, import_chunk_bzyb60p0.Me)({ content: o.getStopHookMessage(k.blockingError), isMeta: true })), n = true;
      if (k.additionalContexts && k.additionalContexts.length > 0) c.push((0, import_chunk_bzyb60p0.Ut)({ type: "hook_additional_context", content: k.additionalContexts, hookName: "Stop", toolUseID: `hook-${(0, import_crypto.randomUUID)()}`, hookEvent: "Stop" })), n = true;
    }
    if (p.length > 0) c.push((0, import_chunk_bzyb60p0.Pt)(`Stop hook error: ${p.join("; ")}`, "warning"));
  } catch (g) {
    (0, import_chunk_w578pjby.t)(`Forked command Stop hooks failed: ${String(g)}`, { level: "error" });
  }
  if (!n) try {
    let g = o.executeStopHooks((0, import_chunk_bz1f2qnq.Z)(e).mode, e.abortController.signal, void 0, false, e.agentId, e, [], void 0, "turn_end_reactions");
    for await (let p of g) ;
  } catch (g) {
    (0, import_chunk_w578pjby.t)(`Forked command turn-end reactions failed: ${String(g)}`, { level: "error" });
  }
  return { messages: c, requestQuery: n };
}
async function so(e, s, o, c, n, T, g, p = [], k, v, P, U, x, V) {
  let I = (0, import_chunk_mzmcvr6c.qS)(), z = U && (0, import_chunk_865at33z._a)(U), { sanitizedName: re, skillNameHash: ve } = (0, import_chunk_54j6k3fn.bpe)({ rawName: e.name, canonicalName: e.name, isMcp: e.loadedFrom === "mcp", isBuiltIn: (0, import_chunk_bzyb60p0.Sq)().has(e.name), isBundled: e.source === "bundled", isOfficial: (0, import_chunk_54j6k3fn.gbe)(e) });
  (0, import_chunk_y53wbr8a.a)("tengu_slash_command_forked", { command_name: re, ...ve, _PROTO_skill_name: e.name, invocation_trigger: (0, import_chunk_78g0060s.S)("user-slash"), ...(0, import_chunk_54j6k3fn.fje)(e.source, e.loadedFrom, e.kind, e.createdBy), ...(0, import_chunk_54j6k3fn.pje)(e) });
  let ie = (0, import_chunk_xcwk20g6.Qqr)(e, o, k), Pe = ie ? { agentId: I, parentAgentId: o.agentId, depth: (0, import_chunk_865at33z.oh)(o.agentContext) + 1, agentType: "subagent", isAsync: false, isBackgroundAgent: o.agentContext && "isBackgroundAgent" in o.agentContext ? o.agentContext.isBackgroundAgent : void 0, ...(0, import_chunk_865at33z.CX)(o.agentContext) } : void 0, { skillContent: r, modifiedGetAppState: L, contextLayers: fe, recordInvocation: R, baseAgent: H, promptMessages: F, forkReadFileState: E, availableTools: X, webFetchReadmissionAllowed: y, frozenCommandDenies: N } = await (0, import_chunk_bzyb60p0.ncr)(e, s, o, Pe, { forkAgentId: I, extractAttachments: k ? void 0 : import_chunk_bzyb60p0.MHe, replaceCommandRules: true, replaceDenyRules: !k, deferInvocationRecording: ie }), w = fe.length > 0 ? [...o.permissionLayers ?? [], ...fe] : o.permissionLayers;
  if (n.length > 0 || c.length > 0) F.push((0, import_chunk_bzyb60p0.Udr)((0, import_chunk_bzyb60p0.Me)({ content: [...n, ...c], isMeta: true }), c, []));
  if (x && x.length > 0) F.push((0, import_chunk_bzyb60p0.Ut)({ type: "inlined_image_paths", paths: x, names: V }));
  let C = await (0, import_chunk_xcwk20g6.qer)(e, (0, import_chunk_f9x2f6cx.Oo)(), { options: { tools: (0, import_chunk_knp99ee7.KL)(H, y ? (0, import_chunk_bzyb60p0.$ye)(H, X, (0, import_chunk_bz1f2qnq.Z)(o), { activeAgents: o.options.agentDefinitions.activeAgents }) : X, ie, false, false, 0, (0, import_chunk_sjqze7qg.dG)(o).mode).resolvedTools, spawnedBySkill: (0, import_chunk_tfs0ssqe.V6)(e) }, storageV5: o.storageV5, session: o.session });
  if (C) F.push(C);
  F.push(...p);
  let O = e.getEffort?.(s, o) ?? e.getDefaultEffort?.(s, o)?.value ?? e.effort, B = O !== void 0 ? { ...H, effort: O } : H, J = (0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.Ane)({ inputString: `/${(0, import_chunk_vhsysgcd.Zs)(e)} ${s}`.trim(), precedingInputBlocks: n.length > 0 ? [...n, ...c] : c }), uuid: v, origin: U });
  if (k) J.queueSkipSlashCommands = true;
  if (await o.makeFileHistorySnapshot?.(J.uuid), (0, import_chunk_w578pjby.t)(`Executing forked slash command /${e.name} with agent ${B.agentType}`), ie) {
    P?.markTurnActive(k ? void 0 : `/${(0, import_chunk_vhsysgcd.Zs)(e)} ${s}`.trim());
    let se;
    try {
      se = await (0, import_chunk_xcwk20g6.Zqr)({ agentId: I, agentDefinition: B, command: e, description: `/${(0, import_chunk_vhsysgcd.Zs)(e)} ${s}`.trim(), prompt: r, promptMessages: F, context: { ...o, startedInSessionUsersTurn: z }, canUseTool: T, getAppState: L, permissionLayers: w, readFileState: E, availableTools: X, webFetchReadmissionAllowed: y, spawnedBySkill: (0, import_chunk_tfs0ssqe.V6)(e), recordInvocationOnSuccess: R, frozenCommandDenies: N });
    } catch (j) {
      if (await P?.settleTurnEnd(null), (0, import_chunk_jv7av99m.Fe)(j)) return { messages: [J, (0, import_chunk_bzyb60p0.hR)({ toolUse: false })], shouldQuery: false, command: e, aborted: true, forkDispatched: true };
      let ue = pt(j, e.name, o.session);
      return { messages: [J, (0, import_chunk_bzyb60p0.Xw)(`<local-command-stderr>${(0, import_chunk_hr2stdq7.sn)(ue)}</local-command-stderr>`)], shouldQuery: false, command: e, resultText: ue, threw: true, forkDispatched: true };
    }
    if (se) return await P?.settleTurnEnd(null), { messages: [J, (0, import_chunk_bzyb60p0.Xw)(`<local-command-stdout>Running in the background as @${(0, import_chunk_bzyb60p0.mH)((0, import_chunk_kx2fp6pc.wn)(se.name))}</local-command-stdout>
` + (0, import_chunk_bzyb60p0.Bja)({ agentId: se.agentId, skillName: e.name, description: `/${(0, import_chunk_vhsysgcd.Zs)(e)} ${s}`.trim() }))], shouldQuery: false, command: e, forkDispatched: true };
    R();
  }
  let M = [], me = [], ye = `forked-command-${e.name}`, pe = 0, ee = (se) => (pe++, { type: "progress", data: { message: se, type: "agent_progress", prompt: r, agentId: I, agentType: B.agentType, isBuiltIn: B.source === "built-in", description: e.description }, parentToolUseID: ye, toolUseID: `${ye}-${pe}`, timestamp: (/* @__PURE__ */ new Date()).toISOString(), uuid: (0, import_crypto.randomUUID)() }), oe = () => {
    o.emitToolProgress?.({ kind: "agent_progress", toolUseId: ye, progressMessages: [...me] });
  }, Te = import_chunk_wddxyb00.Yh.of(o.session).active !== void 0, Ae = false;
  P?.markTurnActive(k ? void 0 : `/${(0, import_chunk_vhsysgcd.Zs)(e)} ${s}`.trim());
  let Re = (0, import_chunk_xcwk20g6.e4r)({ agentId: I, parentAgentId: o.agentId, spawnDepth: (0, import_chunk_865at33z.oh)(o.agentContext) + 1, skillName: (0, import_chunk_vhsysgcd.Zs)(e), prompt: r, selectedAgent: B, taskRegistry: o.taskRegistry, callerAbortController: o.abortController }), Ue = (0, import_chunk_knp99ee7.W_e)(o, I, B.agentType, e), Ee = "failed";
  try {
    if (oe(), Te) {
      let K = (0, import_chunk_bzyb60p0.Mg)(F).find((he) => he.type === "user");
      if (K) (0, import_chunk_knp99ee7.XTn)(o, ee({ ...K, isMeta: void 0 }), false);
    }
    let se = { ...o, getAppState: L, permissionLayers: w, startedInSessionUsersTurn: z }, j = await (0, import_chunk_knp99ee7.NF)({ agentDefinition: B, model: e.model, toolUseContext: { ...se, abortController: Re.abortController }, run: "spawn", detached: false, onModelRestricted: (0, import_chunk_cpv7yv0r.q4r)((0, import_chunk_tfs0ssqe.V6)(e), o.onQueryEvent) });
    for await (let K of (0, import_chunk_knp99ee7.VL)({ agentDefinition: B, promptMessages: F, turnPrompt: r, staysInHookCall: true, toolUseContext: se, canUseTool: T, isAsync: false, querySource: "agent:custom", spawnedBySkill: (0, import_chunk_tfs0ssqe.V6)(e), spawnedByForkedSkill: true, model: e.model, modelFacts: j, availableTools: X, webFetchReadmissionAllowed: y, override: { shareFileHistory: () => true, agentId: I, abortController: Re.abortController, readFileState: E, pickedEffortModel: (0, import_chunk_bz1f2qnq.oX)(o) } })) {
      if (K.type === "api_metrics" || K.type === "set_in_progress_tool_use_ids" || K.type === "spinner_mode" || K.type === "query_model_change") continue;
      if (M.push(K), (0, import_chunk_bzyb60p0.UY)(K)) {
        if (Te && (0, import_chunk_knp99ee7.tgt)(o, K)) (0, import_chunk_knp99ee7.XTn)(o, K, false);
        continue;
      }
      let he = (0, import_chunk_bzyb60p0.Mg)([K]);
      if (K.type === "assistant") {
        let ae = (0, import_chunk_bzyb60p0.zQr)(K);
        if (ae > 0) o.onQueryEvent?.({ type: "response_length", op: "add", delta: ae });
        let xe = he[0];
        if (xe && xe.type === "assistant") {
          let Qe = ee(K);
          if (me.push(Qe), oe(), Ae = true, Te) (0, import_chunk_knp99ee7.XTn)(o, Qe, true);
        }
      }
      if (K.type === "user") {
        let ae = he[0];
        if (ae && ae.type === "user") {
          let xe = ee(ae);
          if (me.push(xe), oe(), Te && !(ae.isMeta && !Ae)) {
            (0, import_chunk_knp99ee7.XTn)(o, xe, true);
            for (let Qe of he.slice(1)) if (Qe.type === "user") (0, import_chunk_knp99ee7.XTn)(o, ee(Qe), true);
          }
        }
      }
    }
    let ue = (0, import_chunk_knp99ee7.VHt)((0, import_chunk_bzyb60p0._g)(M));
    if (!ue) (0, import_chunk_knp99ee7.rgt)(I, o);
    Ee = ue ? "failed" : "completed";
  } catch (se) {
    if ((0, import_chunk_jv7av99m.Fe)(se)) return (0, import_chunk_knp99ee7.eTe)(Ue("stopped")), await P?.settleTurnEnd(null), { messages: [J, (0, import_chunk_bzyb60p0.hR)({ toolUse: false })], shouldQuery: false, command: e, aborted: true, forkDispatched: true };
    await P?.settleTurnEnd(null);
    let j = await xt(o, M, g), ue = Ue("failed"), K = pt(ue ? await (0, import_chunk_knp99ee7.uMe)(se, ue, o.abortController.signal) : se, e.name, o.session);
    return { messages: [J, (0, import_chunk_bzyb60p0.Xw)(`<local-command-stderr>${(0, import_chunk_hr2stdq7.sn)(K)}</local-command-stderr>`), ...j.messages], shouldQuery: j.requestQuery, command: e, resultText: K, threw: true, forkDispatched: true };
  } finally {
    Re.remove(Ee), (0, import_chunk_f9x2f6cx.p3t)(I), o.emitToolProgress?.({ kind: "clear", toolUseId: ye });
  }
  let Q = (0, import_chunk_bzyb60p0.wIn)(M, "Command completed"), Ce = Ue(Ee), be = Ce && await (0, import_chunk_knp99ee7.Etr)(Ce, Q, o.abortController.signal);
  Q = be?.text ?? Q;
  try {
    Q = e.formatForegroundForkResult?.(Q) ?? Q;
  } catch (se) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(se), "fork result formatter threw"));
  }
  let $e = be?.isTaken ? be.text : (0, import_chunk_xfj2cwfv.Rde)(M) + Q;
  (0, import_chunk_w578pjby.t)(`Forked slash command /${e.name} completed with agent ${I}`), await P?.settleTurnEnd(M);
  let Se = await xt(o, M, g);
  return { messages: [J, (0, import_chunk_bzyb60p0.Xw)(`<local-command-stdout>${(0, import_chunk_bzyb60p0.mH)($e)}</local-command-stdout>`), ...Se.messages], shouldQuery: Se.requestQuery, command: e, resultText: $e, forkDispatched: true };
}
var no = { "remote-control": "allow_remote_control", ultraplan: "allow_remote_sessions", "claude-in-chrome": "allow_claude_browser_extension" };
function ro(e, s, { interactive: o }) {
  let c = (0, import_chunk_bzyb60p0.u5)(), n = (0, import_chunk_5nf47kr4.HTt)(), T = (0, import_chunk_qvjn7dva.u1)(), g = n ? (0, import_chunk_qvjn7dva.a2e)() : T, p = n ? (0, import_chunk_vfyns8ja.KCl)() : (0, import_chunk_vfyns8ja.ITo)(), k = [s, c, g, p], v, P;
  for (let z of k) {
    let re = (0, import_chunk_8704k7wd.zs)(e, z);
    if (!re) continue;
    let ve = z === c || z === g, ie = re.policyGate?.policy ?? (ve ? no[re.name] : void 0);
    if (n && (0, import_chunk_5nf47kr4.Jre)(re.name) && (z === g ? (0, import_chunk_8704k7wd.zs)(e, T) === void 0 : z === p) && (ie === void 0 || (0, import_chunk_2nv4wrez.Rn)(ie))) ie = import_chunk_5nf47kr4.YTs;
    if (ie) {
      v = re, P = ie;
      break;
    }
  }
  if (!v || !P) return;
  if (!(0, import_chunk_tfs0ssqe.Qne)(v)) return;
  if (v.name === "team-onboarding" && !(0, import_chunk_bzyb60p0.fto)()) return;
  if ((0, import_chunk_2nv4wrez.Rn)(P)) {
    if (o && !(0, import_chunk_f9x2f6cx.gh)() && (0, import_chunk_vhsysgcd.yl)(v) && (0, import_chunk_8704k7wd.zs)(e, s) === void 0) return { command: v, policy: P, reason: (0, import_chunk_4jzbgp2v.JHl)(v.name), kind: "stale_list" };
    if (o && v.name === "remote-control" && (0, import_chunk_7d2qr9z5.CG)()) return { command: v, policy: P, reason: import_chunk_8kp03twd.Jae, kind: "managed_disabled" };
    return;
  }
  let U = (0, import_chunk_2nv4wrez.ba)(P);
  if (!o) {
    if ((0, import_chunk_f0r815zs.ZJs)(e, (0, import_chunk_bzyb60p0.u5)()) !== void 0) return;
    if (U !== "org_denied" && (0, import_chunk_tfs0ssqe.HDe)(k.flatMap((z) => z.filter((re) => (0, import_chunk_8704k7wd.LDe)(e, [re])))).length === 0) return;
  }
  let { featureLabel: x, verb: V } = (0, import_chunk_2nv4wrez.Owe)(P), I = U === "cache_miss" ? (0, import_chunk_4jzbgp2v.LPo)(x) : (0, import_chunk_2nv4wrez.Dp)(P, x, V);
  if (I === null || U === null) return;
  return { command: v, policy: P, reason: I, kind: U };
}
function RTn(e, s, o, c) {
  let n = (0, import_chunk_271xsh6x.xr)(s, 200), T = (0, import_chunk_kx2fp6pc.wn)(s);
  if ((0, import_chunk_jv7av99m.Fe)(e)) {
    if ((0, import_chunk_wddxyb00.vs)(o)) return (0, import_chunk_w578pjby.t)(`${T} aborted: ${String(e)}`), "Interrupted";
    return (0, import_chunk_bzyb60p0.mH)(e instanceof Error ? e.message || "Interrupted" : "Interrupted");
  }
  if (e instanceof import_chunk_jv7av99m.WE) return (0, import_chunk_bzyb60p0.mH)(e.message);
  if ((0, import_chunk_wddxyb00.vs)(o)) return (0, import_chunk_w578pjby.t)(`${T} threw: ${String(e)}`, { level: "error" }), `${n} failed (detail withheld on this connection)`;
  if (c === "mcp" && e instanceof import_chunk_jv7av99m.A) return (0, import_chunk_bzyb60p0.mH)(e.message);
  return (0, import_chunk_bzyb60p0.mH)(String(e));
}
function pt(e, s, o, c) {
  return (0, import_chunk_bzyb60p0.mH)((0, import_chunk_13h3tw8q.js)(RTn(e, s, o, c)));
}
async function A7l(e, s, o, c, n, T, g, p, k, v, P, U, x, V, I, z, re, ve, ie, Pe, r, L, fe, R, H, F = []) {
  var _stack = [];
  try {
    const E = __using(_stack, (0, import_chunk_bzyb60p0.qli)(T));
    const X = __using(_stack, (0, import_chunk_bzyb60p0.S6l)(T));
    function y(h = [], G = e, ge = false) {
      let we = (0, import_crypto.randomUUID)(), ke = (0, import_chunk_wzzzxdne.SG)(s) ? void 0 : we;
      if (ke !== void 0) (0, import_chunk_f9x2f6cx.RPt)(ke);
      let et = (0, import_chunk_k67pwqya.mw)(n.modelFacts.model, (0, import_chunk_bz1f2qnq.e_)(n), (0, import_chunk_bz1f2qnq.kh)(n.permissionLayers));
      (0, import_chunk_y53wbr8a.a)("tengu_input_prompt", { ...k && { prompt_source: (0, import_chunk_78g0060s.f)(k) }, ...et && { effort_level: (0, import_chunk_78g0060s.f)(et) }, turn_origin: (0, import_chunk_78g0060s.f)((0, import_chunk_bzyb60p0.WBe)(I)), ...(0, import_chunk_bzyb60p0.Rir)({ wakeupSource: r, hostInitiator: L, inboundOrigin: R }), ...(0, import_chunk_w50zedgp.yWt)() });
      let We = T || (0, import_crypto.randomUUID)();
      (0, import_chunk_be4a2jph.IHt)({ text: G, attributes: { ...ke && { "prompt.id": ke }, "message.uuid": We }, origin: I }, n.userPromptHold);
      let De = (0, import_chunk_bzyb60p0.Me)({ content: o.length > 0 ? [...s, { type: "text", text: G }, ...o] : (0, import_chunk_bzyb60p0.Ane)({ inputString: G, precedingInputBlocks: s }), uuid: We, imagePasteIds: F.length > 0 ? F : void 0, permissionMode: Pe, isMeta: ie || void 0, promptSource: k, promptId: ke, origin: I }), tt = (0, import_chunk_qzhs2fs3.xTn)(De.message.content);
      if (I) (0, import_chunk_bzyb60p0.XMn)(De, I);
      return { messages: [De, ...c, ...h.map((Oe) => (0, import_chunk_bzyb60p0.Ut)(Oe))], shouldQuery: true, ...G === e && { promptRow: { message: De, unframed: tt } }, ...ge && { extractPromptAttachments: true } };
    }
    let N = (0, import_chunk_be4a2jph.Ww)(e);
    if (!N) {
      if ((0, import_chunk_y53wbr8a.a)("tengu_input_slash_missing", {}), n.options.isNonInteractiveSession) return y();
      (0, import_chunk_cqa9hrgx.m)("cmd_dispatch", "cmd_parse_failed");
      let h = "Commands are in the form `/command [args]`";
      return { messages: [(0, import_chunk_bzyb60p0.zHe)(), ...c, (0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.Ane)({ inputString: h, precedingInputBlocks: s }) })], shouldQuery: false, resultText: h };
    }
    let { commandName: w, args: C } = N, { isMcp: O } = N, B = w === "compact" && (0, import_chunk_bzyb60p0.Rie)(L) !== void 0;
    if (B) {
      let h = n.options.commands.filter((G) => (0, import_chunk_bzyb60p0.jOn)(G) === "builtin" || !(0, import_chunk_8704k7wd.LDe)(w, [G]));
      n = { ...n, options: { ...n.options, commands: h } };
    }
    let J;
    if (U !== void 0) {
      let h = (0, import_chunk_be4a2jph.Ww)(U);
      J = h && h.commandName === N.commandName ? h.args : void 0;
    }
    let M = (0, import_chunk_8704k7wd.zs)(w, n.options.commands);
    if (M && !(0, import_chunk_vhsysgcd.yl)(M)) M = void 0;
    if (!M && !O && !B && C.trim()) {
      let h = C.trimStart(), G = h.search(/\s/), ge = G === -1 ? h : h.slice(0, G), we = `${w}:${ge}`, ke = (0, import_chunk_8704k7wd.zs)(we, n.options.commands);
      if (ke) M = ke, w = we, C = G === -1 ? "" : h.slice(G + 1).trimStart();
    }
    if (!M && !O && !B && !(0, import_chunk_f9x2f6cx.gh)()) {
      let h = await (0, import_chunk_bzyb60p0.w6l)(w, E.origin === void 0, n.abortController.signal);
      if (!h && n.abortController.signal.aborted) {
        let G = (0, import_chunk_8704k7wd.zs)(w, n.options.commands) ?? (0, import_chunk_8704k7wd.zs)(w, (0, import_chunk_bzyb60p0.u5)());
        return (0, import_chunk_bzyb60p0.CXo)({ signal: n.abortController.signal, typed: [...c, (0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.Ane)({ inputString: G ? Ke(G, C) : (0, import_chunk_bzyb60p0.VHe)((0, import_chunk_kx2fp6pc.wn)(w), (0, import_chunk_xfj2cwfv.xde)(C)), precedingInputBlocks: s }), uuid: T, origin: I })], marker: (0, import_chunk_bzyb60p0.hR)({ toolUse: false }), isQueuedByPlugin: E.origin !== void 0 });
      }
      if (h) M = h, n = { ...n, options: { ...n.options, commands: [...n.options.commands, h] } };
    }
    let me, ye;
    if (M && !(0, import_chunk_tfs0ssqe.vA)(M)) {
      let h = (0, import_chunk_be4a2jph.zet)(M, C);
      if (h) {
        let G = (0, import_chunk_8704k7wd.zs)(h.targetName, n.options.commands);
        if (G && (0, import_chunk_vhsysgcd.yl)(G)) ye = `${w} ${h.consumedToken}`, M = G, w = h.targetName, C = h.remainingArgs;
        else if (M.name === import_chunk_nwk8fexj.oM) {
          let ge = (0, import_chunk_sjqze7qg.nio)();
          if (ge) me = (0, import_chunk_bzyb60p0.Pt)(`${ge} Running a local review instead.`, "warning");
        }
      }
    }
    if (M && H && !(0, import_chunk_tfs0ssqe.vA)(M)) {
      let h = await H(M, w, C);
      if (h) return je(E.origin !== void 0, h);
    }
    let pe = M ? await (0, import_chunk_tfs0ssqe.DDe)(M) : void 0;
    if (M && (0, import_chunk_tfs0ssqe.c9e)(M)) M = void 0;
    if (M && (0, import_chunk_qvjn7dva.RUn)(M)) M = void 0;
    if (M && (0, import_chunk_tfs0ssqe.tpe)(pe)) (0, import_chunk_tfs0ssqe.qSe)(M, pe), M = void 0;
    let ee = (0, import_chunk_bzyb60p0.Sq)().has(w);
    if (E7t(M, n.getAppState().endedByModel)) {
      let h = (0, import_chunk_bf14swcm.FQ)("Claude ended this conversation. Start a new session (or /clear) to continue.");
      return je(E.origin !== void 0, { messages: [(0, import_chunk_bzyb60p0.Pt)(h, "warning")], shouldQuery: false, resultText: h });
    }
    let oe = M?.type === "prompt" && M.source === "bundled", Te = M?.type === "prompt" && (0, import_chunk_54j6k3fn.gbe)(M), Ae = O || M?.type === "prompt" && M.source === "mcp";
    if (!M) {
      if (!(0, import_chunk_tjdnrbvx.Acn)(w)) return y();
      let h = `/${w}`, G = false;
      if (!(0, import_chunk_f9x2f6cx.Y)() && !(0, import_chunk_z6pfqf6e.ja)(h)) try {
        await (0, import_chunk_w578pjby.le)().stat(h), G = true;
      } catch {
      }
      if (!G) {
        let ge = !n.options.isNonInteractiveSession, we = ro(w, n.options.commands, { interactive: ge }), ke = we ?? (ge ? (0, import_chunk_hkbgb7sm.qIa)(w, [...(0, import_chunk_bzyb60p0.u5)(), ...(0, import_chunk_qvjn7dva.u1)()]) : void 0);
        if (ke) {
          let { command: ne, reason: Be } = ke, Ne = we?.kind ?? "off_for_setup", Ge = Ne !== "stale_list" && Ne !== "managed_disabled" && Ne !== "off_for_setup";
          if ((0, import_chunk_y53wbr8a.a)("tengu_input_slash_invalid", { input_length: w.length, had_suggestion: false, policy_denied: Ge }), (0, import_chunk_cqa9hrgx.m)("cmd_dispatch", Ge ? `cmd_policy_${Ne}` : `cmd_${Ne}`), Ge && we) (0, import_chunk_21y9ek9j.$H)(we.policy, "slash_command");
          let At = (0, import_chunk_bzyb60p0.mH)((0, import_chunk_kx2fp6pc.wn)(w)), qe = !C ? "" : ne && (0, import_chunk_8704k7wd.p9e)(ne, C) ? "***" : (0, import_chunk_bzyb60p0.mH)((0, import_chunk_xfj2cwfv.xde)(C));
          if (!ge) return je(E.origin !== void 0, { messages: [...c, (0, import_chunk_bzyb60p0.Xw)(`/${At}${qe ? ` ${qe}` : ""}`, { submitUuid: T }), (0, import_chunk_bzyb60p0.Xw)(`<local-command-stdout>${Be}</local-command-stdout>`)], shouldQuery: false, resultText: Be });
          return je(E.origin !== void 0, { messages: [...c, (0, import_chunk_bzyb60p0.Pt)(Be, "warning"), ...qe && qe !== "***" ? [(0, import_chunk_bzyb60p0.Pt)(`Args from /${At}: ${qe}`, "warning")] : []], shouldQuery: false, resultText: Be });
        }
        if (n.options.isNonInteractiveSession && (0, import_chunk_bzyb60p0.Sq)().has(w)) {
          let ne = (0, import_chunk_bzyb60p0.u5)(), Be = (0, import_chunk_f0r815zs.ZJs)(w, ne) ?? `/${(0, import_chunk_bzyb60p0.mH)((0, import_chunk_kx2fp6pc.wn)(w))} isn't available in this environment.`;
          (0, import_chunk_y53wbr8a.a)("tengu_input_slash_invalid", { input_length: w.length, had_suggestion: false }), (0, import_chunk_cqa9hrgx.m)("cmd_dispatch", "cmd_unavailable_headless");
          let Ne = (0, import_chunk_8704k7wd.zs)(w, ne), Ge = !C ? "" : Ne !== void 0 && (0, import_chunk_8704k7wd.p9e)(Ne, C) ? "***" : (0, import_chunk_bzyb60p0.mH)((0, import_chunk_xfj2cwfv.xde)(C));
          return je(E.origin !== void 0, { messages: [...c, (0, import_chunk_bzyb60p0.Xw)(`/${(0, import_chunk_bzyb60p0.mH)((0, import_chunk_kx2fp6pc.wn)(w))}${Ge ? ` ${Ge}` : ""}`, { submitUuid: T }), (0, import_chunk_bzyb60p0.Xw)(`<local-command-stdout>${Be}</local-command-stdout>`, { commandOutcome: { kind: "unavailable_headless" } })], shouldQuery: false, resultText: Be });
        }
        let et = await (0, import_chunk_tfs0ssqe.vuo)(n.options.commands), We = n.options.commands.filter((ne) => !ne.isHidden && !(0, import_chunk_tfs0ssqe.vA)(ne) && (0, import_chunk_vhsysgcd.yl)(ne) && !((0, import_chunk_a9nnd83v.BO)(ne) && (0, import_chunk_f9x2f6cx.gP)()) && !(0, import_chunk_a9nnd83v.ere)(ne) && !et.has(ne)), De = E.origin === void 0 && Ot(n.options.isNonInteractiveSession), tt = De ? We.filter((ne) => ne.type === "prompt" && !ne.disableModelInvocation && ne.loadedFrom !== "mcp") : We, Oe = (0, import_chunk_xcgcdx61.IFe)(w, tt.map((ne) => ({ name: (0, import_chunk_vhsysgcd.Zs)(ne), aliases: ne.aliases })), { maxEditDistance: 2 });
        if ((0, import_chunk_y53wbr8a.a)("tengu_input_slash_invalid", { input_length: w.length, had_suggestion: Boolean(Oe), suggestion_distance: Oe ? (0, import_chunk_xcgcdx61.CK)(w, Oe, 2) : void 0, fallback_to_model: De }), De) return (0, import_chunk_cqa9hrgx.l)("cmd_dispatch", "cmd_unknown_model_fallback"), y([Ft({ commandName: w, suggestion: Oe, availableCommandNames: tt.map((ne) => (0, import_chunk_vhsysgcd.Zs)(ne)), availableCommandCount: We.length, reservedName: (0, import_chunk_f9x2f6cx.st)() && (0, import_chunk_bzyb60p0.epi)()(w) })], (0, import_chunk_xfj2cwfv.SXe)(e) ? (0, import_chunk_xfj2cwfv.xde)(e) : e, true);
        (0, import_chunk_cqa9hrgx.m)("cmd_dispatch", "cmd_unknown");
        let lt = (0, import_chunk_271xsh6x.xr)(w, 200), dt = Oe ? (0, import_chunk_271xsh6x.xr)(Oe, 200) : void 0, ot = Oe ? `Unknown command: /${lt}. Did you mean /${dt}?` : `Unknown command: /${lt}`;
        if (n.options.isNonInteractiveSession) return je(E.origin !== void 0, { messages: [...c, (0, import_chunk_bzyb60p0.Xw)(`/${lt}${C ? ` ${(0, import_chunk_bzyb60p0.mH)((0, import_chunk_xfj2cwfv.xde)(C))}` : ""}`, { submitUuid: T }), (0, import_chunk_bzyb60p0.Xw)(`<local-command-stdout>${ot}</local-command-stdout>`, { commandOutcome: { kind: "unknown", ...dt !== void 0 && { suggestion: dt } } })], shouldQuery: false, resultText: ot });
        return je(E.origin !== void 0, { messages: [...c, (0, import_chunk_bzyb60p0.Pt)(ot, "warning"), ...C ? [(0, import_chunk_bzyb60p0.Pt)(`Args from unknown skill: ${(0, import_chunk_xfj2cwfv.xde)(C)}`, "warning")] : []], shouldQuery: false, resultText: ot });
      }
      return y();
    }
    let Re = Ae || M.loadedFrom === "mcp" ? "mcp" : ee || M.type === "prompt" && (M.source === "bundled" || M.source === "builtin") ? "builtin" : "custom", Ue = (0, import_chunk_8704k7wd.p9e)(M, C) ? `/${w} ***` : e, Ee = n.deferSlashToEngine?.(M) ?? false;
    if (!Ee) {
      let h = (0, import_crypto.randomUUID)();
      (0, import_chunk_f9x2f6cx.RPt)(h);
      let G = { text: Ue, attributes: { "prompt.id": h, command_name: Re === "builtin" || (0, import_chunk_865at33z.vh)() ? w : Re, command_source: Re }, origin: I };
      (0, import_chunk_be4a2jph.IHt)(G, n.userPromptHold);
    }
    if (M.type !== "prompt" && n.userPromptHold !== void 0) n.userPromptLine?.withheld();
    let Q = M, Ce = (0, import_chunk_vhsysgcd.Zs)(Q), be = C, $e = /* @__PURE__ */ new Map(), Se = 0, ze = false, se = async (h) => {
      Se += 1, be = h, n.userPromptLine?.ranAs({ name: Ce, args: C, argsRanWith: h });
      let G = Ee && (0, import_chunk_z2xw6net.o1)();
      if (Q.type !== "prompt" && !G) n.userPromptLine?.passed();
      let ge = await lo(w, h, n, s, o, g, p, T, v, P, J, ye, x, k, V, I, z, re, ve, fe && (async () => {
        let ke = $e.get(h) ?? fe({ name: Ce, args: C, argsRanWith: h });
        return $e.set(h, ke), rt(await ke);
      }));
      if (ge.ownPassCutShort) Se -= 1;
      let we = await $e.get(h);
      return we === void 0 ? ge : { ...ge, lineCheck: we };
    };
    if (Ee) E.handOn(n.abortController.signal);
    let j = Ee ? { kind: "engine", ran: await se(C) } : await (0, import_chunk_mjq4pbxz.Mun)((0, import_chunk_bzyb60p0.yQr)({ input: { command: Ce, args: C, origin: (0, import_chunk_bzyb60p0.gQr)({ submissionOrigin: I, dispatchedOverBridge: n.dispatchedOverBridge, promptSource: k }), presentation: (0, import_chunk_bzyb60p0.gLt)(n.presentation) }, engine: { run: se, textOf: (h) => h.resultText, contextOf: (h) => h.metaTexts, retell: ao }, queued: E, ahead: X, signal: n.abortController.signal }), n.abortController.signal), ue = j === void 0 ? await Promise.all($e.values()) : [], K = ue.some(rt) ? void 0 : ue.at(-1), he = (h) => (0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.Ane)({ inputString: Ke(Q, h), precedingInputBlocks: s }), uuid: T, origin: I });
    if (K !== void 0) return { messages: [he(K.ran.argsRanWith)], shouldQuery: true, ranCommand: K.ran, lineCheck: K };
    if (j === void 0) {
      let h = n.userPromptLine?.isHeldForOrganization() ? void 0 : ue.findLast(rt);
      return { ...(0, import_chunk_bzyb60p0.CXo)({ signal: n.abortController.signal, typed: [...c, he(C)], marker: (0, import_chunk_bzyb60p0.hR)({ toolUse: false }), isQueuedByPlugin: E.origin !== void 0 }), ...Se === 0 && { ownPassCutShort: true }, ...{}, ...h !== void 0 && { ranCommand: h.ran, lineCheck: h } };
    }
    let ae = j.kind !== "engine" && (!k7t((0, import_chunk_vhsysgcd.Zs)(Q)) || (n.userPromptLine?.isUnknownSinceDispatch() ?? false)), xe = ae ? "" : C, Qe = j.kind === "answered" && j.text !== void 0 && j.isTextDisplayOnly !== true && !ae && (j.exitCode ?? 0) === 0 && (0, import_chunk_865at33z.OE)(I) ? to(Ce, n.agentId) : void 0;
    if (ae) n.userPromptLine?.withheld();
    else if (j.kind !== "engine" && Q.type !== "prompt") n.userPromptLine?.passed();
    let { messages: _e, shouldQuery: Xe, allowedTools: ht, disallowedTools: kt, model: it, effort: Vt, command: te, resultText: yt, nextInput: Ct, submitNextInput: St, engineDeferredSlash: Ze, forkDispatched: qt, settledInPlace: zt, screened: _t, ownPassCutShort: wt, lineCheck: Ve, queriesAfterRun: Tt } = j.kind === "engine" ? j.ran : io(j.text, j.context, { plugin: j.plugin, isTextDisplayOnly: j.isTextDisplayOnly, command: Q, commandName: w, args: xe, precedingInputBlocks: s, uuid: T, submissionOrigin: I, isNonInteractiveSession: n.options.isNonInteractiveSession === true, offerTurn: Qe });
    if (te.type === "prompt" && te.pluginInfo) (0, import_chunk_bzyb60p0.ZJ)(te.pluginInfo.repository, "command", (0, import_chunk_bzyb60p0.iPn)(te, te.pluginInfo.pluginManifest.name));
    let { sanitizedName: at, skillNameHash: Yt } = (0, import_chunk_54j6k3fn.bpe)({ rawName: w, canonicalName: te.name, isMcp: Ae || te.loadedFrom === "mcp", isBuiltIn: ee, isBundled: oe, isOfficial: Te });
    function Mt() {
      let h = { input: at, ...Yt };
      if (te.type === "prompt" && te.pluginInfo) {
        Object.assign(h, (0, import_chunk_54j6k3fn.byr)(te));
        let G = te.pluginInfo.pluginManifest.version;
        if (G && (0, import_chunk_54j6k3fn.gbe)(te)) h.plugin_version = (0, import_chunk_865at33z.Ad)(G);
      }
      if (te.type === "prompt") Object.assign(h, (0, import_chunk_54j6k3fn.pje)(te));
      (0, import_chunk_y53wbr8a.a)("tengu_input_command", { ...h, invocation_trigger: (0, import_chunk_78g0060s.S)("user-slash"), ...(0, import_chunk_bzyb60p0.Rir)({ wakeupSource: r, hostInitiator: L, inboundOrigin: R }), ...(0, import_chunk_54j6k3fn.fje)(te.type === "prompt" ? te.source : void 0, te.loadedFrom, te.kind, te.type === "prompt" ? te.createdBy : void 0), ...te.type === "prompt" && { command_content_chars: te.contentLength }, ...te.type === "prompt" && { _PROTO_skill_name: (0, import_chunk_865at33z.m6t)(te.name) }, ...false });
    }
    if (_e.length === 0) {
      if (zt) (0, import_chunk_cqa9hrgx.u)("cmd_dispatch");
      return Mt(), { messages: [], shouldQuery: false, model: it, resultText: yt, nextInput: Ct, submitNextInput: St, localCommand: at, ...j.exitCode !== void 0 && { commandExitCode: j.exitCode } };
    }
    if (_e.length === 2 && _e[1].type === "user" && typeof _e[1].message.content === "string" && _e[1].message.content.startsWith("Unknown command:")) {
      if (!(e.startsWith("/var") || e.startsWith("/tmp") || e.startsWith("/private"))) (0, import_chunk_y53wbr8a.a)("tengu_input_slash_invalid", { input_length: w.length, had_suggestion: false }), (0, import_chunk_cqa9hrgx.m)("cmd_dispatch", "cmd_unknown");
      return { messages: [(0, import_chunk_bzyb60p0.zHe)(), ..._e], shouldQuery: Xe, allowedTools: ht, disallowedTools: kt, model: it, ranCommand: { name: Ce, args: C, argsRanWith: be } };
    }
    if (!Ze) (0, import_chunk_cqa9hrgx.u)("cmd_dispatch"), Mt();
    let Xt = _e.length > 0 && _e[0] && (0, import_chunk_865at33z.On)(_e[0]), vt = Xe || _e.every((h) => (0, import_chunk_f9x2f6cx.ax)(h) || h.type === "system" && h.subtype === "informational" || h.type === "user" && h.isMeta) || Xt || Ze ? _e : [(0, import_chunk_bzyb60p0.zHe)(), ..._e];
    return { messages: me && Xe && (Ve === void 0 || rt(Ve)) ? [...vt, me] : vt, shouldQuery: Xe, allowedTools: ht, disallowedTools: kt, model: it, effort: Vt, resultText: yt, nextInput: Ct, submitNextInput: St, engineDeferredSlash: Ze, forkDispatched: qt, ..._t !== void 0 && { screened: _t }, ...wt && { ownPassCutShort: wt }, ...Tt && { queriesAfterRun: Tt }, ...!Ze && { localCommand: at }, ...j.exitCode !== void 0 && { commandExitCode: j.exitCode }, ranCommand: Ve?.ran ?? { name: Ce, args: C, argsRanWith: be }, ...Ve !== void 0 && { lineCheck: Ve } };
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function rt(e) {
  return e.outcome?.proceeds !== void 0;
}
function io(e, s, { plugin: o, isTextDisplayOnly: c, command: n, commandName: T, args: g, precedingInputBlocks: p, uuid: k, submissionOrigin: v, isNonInteractiveSession: P, offerTurn: U }) {
  let x = (0, import_chunk_cqa9hrgx.NEe)((0, import_chunk_bzyb60p0.mfe)().has(T) ? T : "custom");
  (0, import_chunk_cqa9hrgx.u)(x, (0, import_chunk_e4jbq56j.igt)(n.name));
  let V = P || p.length > 0 || !(0, import_chunk_865at33z.OE)(v), I = s ?? [];
  if (e === void 0 && I.length === 0 && !V) return { messages: [], shouldQuery: false, command: n };
  return { messages: [V ? (0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.Ane)({ inputString: Le(n, g), precedingInputBlocks: p }), uuid: k, origin: v }) : (0, import_chunk_bzyb60p0.Xw)(Le(n, g)), ...e === void 0 ? [] : [(0, import_chunk_bzyb60p0.Xw)(`<local-command-stdout>${(0, import_chunk_bzyb60p0.mH)(e)}</local-command-stdout>`, { commandRun: (0, import_chunk_8704k7wd.uAe)(n, g, o), isDisplayOnly: c })], ...I.map((re) => (0, import_chunk_bzyb60p0.Me)({ content: re, isMeta: true })), ...U === void 0 ? [] : [(0, import_chunk_bzyb60p0.Me)({ content: U, isMeta: true })]], shouldQuery: U !== void 0, command: n, resultText: e, ...I.length > 0 && { metaTexts: I }, ...U !== void 0 && { queriesAfterRun: true } };
}
function ao(e, { text: s, plugin: o, context: c }) {
  if (e.shouldQuery || e.nextInput !== void 0 || e.settledInPlace) return;
  let n = e.messages;
  if (s !== void 0) {
    let T = e.resultText === void 0 ? -1 : n.findIndex((k) => (0, import_chunk_f9x2f6cx.ax)(k) && (k.content.startsWith(`<${import_chunk_k449cc64.Tf}>`) || k.content.startsWith(`<${import_chunk_k449cc64.Ky}>`)));
    if (T === -1) return;
    let g = n[T], p = g !== void 0 && (0, import_chunk_f9x2f6cx.ax)(g) && g.content.startsWith(`<${import_chunk_k449cc64.Ky}>`) ? import_chunk_k449cc64.Ky : import_chunk_k449cc64.Tf;
    n = n.with(T, (0, import_chunk_bzyb60p0.Xw)(`<${p}>${(0, import_chunk_bzyb60p0.mH)(s)}</${p}>`, g !== void 0 && (0, import_chunk_f9x2f6cx.ax)(g) ? { commandRun: g.commandRun !== void 0 && o !== void 0 ? { ...g.commandRun, plugin: o } : g.commandRun, commandOutcome: g.commandOutcome, isDisplayOnly: g.isDisplayOnly } : void 0));
  }
  if (c !== void 0) {
    if (!(e.metaTexts !== void 0 || n.some((p) => (0, import_chunk_f9x2f6cx.ax)(p) && (p.content.startsWith(`<${import_chunk_k449cc64.Tf}>`) || p.content.startsWith(`<${import_chunk_k449cc64.Ky}>`))))) return;
    let g = /* @__PURE__ */ new Map();
    for (let p of e.metaTexts ?? []) g.set(p, (g.get(p) ?? 0) + 1);
    n = [...n.filter((p) => {
      let k = p.type === "user" && p.isMeta && typeof p.message.content === "string" ? p.message.content : void 0, v = k === void 0 ? 0 : g.get(k) ?? 0;
      if (k === void 0 || v === 0) return true;
      return g.set(k, v - 1), false;
    }), ...c.map((p) => (0, import_chunk_bzyb60p0.Me)({ content: p, isMeta: true }))];
  }
  return { ...e, messages: n, resultText: s ?? e.resultText, ...(c ?? e.metaTexts) !== void 0 && { metaTexts: c ?? e.metaTexts } };
}
function ut(e, s, o) {
  let c = `/${(0, import_chunk_vhsysgcd.Zs)(e)} opens an interactive panel and isn't available in this environment. Run it from the Claude Code terminal instead.`;
  return { messages: [(0, import_chunk_bzyb60p0.Xw)(Ke(e, s), { submitUuid: o }), (0, import_chunk_bzyb60p0.Xw)(`<local-command-stdout>${c}</local-command-stdout>`, { commandOutcome: { kind: "unavailable_headless" } })], shouldQuery: false, command: e, resultText: c };
}
async function lo(e, s, o, c, n, T, g, p, k, v, P, U, x, V, I, z, re, ve, ie, Pe) {
  let r = (0, import_chunk_8704k7wd.Bgr)(e, o.options.commands);
  s = (0, import_chunk_ghnve1xk.lWl)(s);
  let L = (0, import_chunk_cqa9hrgx.NEe)((0, import_chunk_bzyb60p0.mfe)().has(e) ? e : "custom"), fe = (0, import_chunk_e4jbq56j.igt)(r.name);
  if (!(0, import_chunk_vhsysgcd.yl)(r)) {
    (0, import_chunk_cqa9hrgx.m)(L, "cmd_policy_disabled");
    let R = `/${(0, import_chunk_bzyb60p0.mH)((0, import_chunk_kx2fp6pc.wn)(e))} isn't available in this session.`;
    if (o.options.isNonInteractiveSession) return { messages: [(0, import_chunk_bzyb60p0.Xw)(Ke(r, s), { submitUuid: p }), (0, import_chunk_bzyb60p0.Xw)(`<local-command-stdout>${R}</local-command-stdout>`)], shouldQuery: false, command: r, resultText: R };
    return { messages: [(0, import_chunk_bzyb60p0.Pt)(R, "warning")], shouldQuery: false, command: r, resultText: R };
  }
  if ((0, import_chunk_tfs0ssqe.vA)(r)) {
    let R = (0, import_chunk_tfs0ssqe.wwt)(r);
    if ((0, import_chunk_cqa9hrgx.m)(L, R === void 0 ? "cmd_skill_override_off" : "cmd_skill_hidden_behind_plugin"), o.options.isNonInteractiveSession) {
      let E = R ?? `Skill "${(0, import_chunk_271xsh6x.xr)(r.name, 200)}" is disabled via skillOverrides. Remove the override from your settings to run it.`;
      return { messages: [(0, import_chunk_bzyb60p0.Xw)(Ke(r, s), { submitUuid: p }), (0, import_chunk_bzyb60p0.Xw)(`<local-command-stdout>${E}</local-command-stdout>`)], shouldQuery: false, command: r, resultText: E };
    }
    let H = R ?? `Skill "${(0, import_chunk_271xsh6x.xr)(r.name, 200)}" is disabled via skillOverrides. Re-enable it in /skills or remove the override from your settings to run it.`, F = !s ? "" : (0, import_chunk_8704k7wd.p9e)(r, s) ? "***" : (0, import_chunk_bzyb60p0.mH)((0, import_chunk_xfj2cwfv.xde)(s));
    return { messages: [(0, import_chunk_bzyb60p0.Pt)(H, "warning"), ...s ? [(0, import_chunk_bzyb60p0.Pt)(`Args from disabled skill: ${F}`, "warning")] : []], shouldQuery: false, command: r, resultText: H };
  }
  if (v?.(r)) {
    (0, import_chunk_cqa9hrgx.m)(L, "cmd_scheduled_run_refused");
    let R = `Skipped the scheduled /${(0, import_chunk_271xsh6x.xr)(r.name, 200)}, because Claude may not run it on its own.`;
    return { messages: [(0, import_chunk_bzyb60p0.Pt)(R, "warning")], shouldQuery: false, command: r, resultText: R };
  }
  if (r.type === "prompt" && r.userInvocable !== false) (0, import_chunk_bzyb60p0.bdr)(o.session, r.name, o.storageV5);
  if (r.type === "prompt" && r.pluginInfo) (0, import_chunk_54j6k3fn.ij)(r.pluginInfo.repository);
  if (!o.deferSlashToEngine?.(r)) mt({ commandName: r.name, agentId: o.agentId, isNonInteractiveSession: Boolean(o.options.isNonInteractiveSession), setAppState: o.setAppState, credentials: o.credentials });
  if (r.userInvocable === false) {
    (0, import_chunk_cqa9hrgx.m)(L, "cmd_not_user_invocable");
    let R = `This skill can only be invoked by Claude, not directly by users. Ask Claude to use the "${(0, import_chunk_bzyb60p0.mH)((0, import_chunk_kx2fp6pc.wn)(e))}" skill for you.`;
    return { messages: [(0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.Ane)({ inputString: `/${(0, import_chunk_kx2fp6pc.wn)(e)}`, precedingInputBlocks: c }), uuid: p }), (0, import_chunk_bzyb60p0.Xw)(`<local-command-stdout>${(0, import_chunk_hr2stdq7.sn)(R)}</local-command-stdout>`)], shouldQuery: false, command: r, resultText: R };
  }
  if (r.type === "local-jsx" && o.options.isNonInteractiveSession) return (0, import_chunk_cqa9hrgx.m)(L, "cmd_local_jsx_headless"), ut(r, s, p);
  try {
    switch (r.type) {
      case "local-jsx":
        return new Promise((R) => {
          let H = false, F = (y, N) => {
            if (H) return;
            if (H = true, (0, import_chunk_cqa9hrgx.u)(L, fe), N?.display === "skip") {
              R({ messages: [], shouldQuery: false, command: r, nextInput: N?.nextInput, submitNextInput: N?.submitNextInput });
              return;
            }
            let w = (0, import_chunk_bzyb60p0.BMn)(N), C = o.presentation === "fullscreen" && typeof y === "string" && y.endsWith(" dismissed");
            R({ messages: N?.display === "system" || N?.display === "displayOnly" ? C ? w : [(0, import_chunk_bzyb60p0.Xw)(Le(r, s)), (0, import_chunk_bzyb60p0.Xw)(`<local-command-stdout>${(0, import_chunk_bzyb60p0.mH)(String(y))}</local-command-stdout>`, { commandRun: (0, import_chunk_8704k7wd.uAe)(r, s), isDisplayOnly: N?.display === "displayOnly" ? true : void 0 }), ...w] : [(0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.Ane)({ inputString: Le(r, s), precedingInputBlocks: c }), uuid: p }), (0, import_chunk_bzyb60p0.Me)({ content: `<local-command-stdout>${y || import_chunk_bp9b0hd8.Wp}</local-command-stdout>`, localCommandOutput: "stdout" }), ...w], shouldQuery: N?.shouldQuery ?? false, command: r, nextInput: N?.nextInput, submitNextInput: N?.submitNextInput, ...w.length > 0 && { metaTexts: N?.metaMessages } });
          }, E = r.load ?? o.options.resolveCommandDialog?.(r);
          if (!E) {
            (0, import_chunk_cqa9hrgx.m)(L, "cmd_local_jsx_no_dialog_resolution"), R(ut(r, s));
            return;
          }
          let X = (0, import_chunk_vhsysgcd.YWe)(r, s, o.presentation ?? "inline");
          E().then((y) => y.call(F, { ...o, canUseTool: g, submissionOrigin: z, promptSource: V }, s, U ?? e)).then((y) => {
            if (y == null) return;
            if (H) return;
            let N = o.localJsx;
            if (!N) {
              (0, import_chunk_cqa9hrgx.m)(L, "cmd_local_jsx_no_panel_host"), H = true, R(ut(r, s));
              return;
            }
            N.show(y, { commandName: (0, import_chunk_vhsysgcd.Zs)(r), immediate: X, hidesPrompt: true, retireAtTurnBoundary: true }).closed.then((C) => {
              if (C === "dismissed" && !H) H = true, (0, import_chunk_cqa9hrgx.m)(L, "cmd_local_jsx_dismissed"), R({ messages: [], shouldQuery: false, command: r });
            });
          }).catch((y) => {
            let N = (0, import_chunk_jv7av99m.Fe)(y);
            if (N) (0, import_chunk_w578pjby.t)(`local-jsx command aborted: ${y instanceof Error ? y.message : String(y)}`);
            else (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(y), "local-jsx slash command threw"));
            if ((0, import_chunk_cqa9hrgx.m)(L, N ? "cmd_local_jsx_aborted" : "cmd_local_jsx_threw"), H) return;
            if (H = true, N) {
              R({ messages: [], shouldQuery: false, command: r });
              return;
            }
            R({ messages: [(0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.Ane)({ inputString: Le(r, s), precedingInputBlocks: c }), uuid: p }), (0, import_chunk_bzyb60p0.Xw)(`<local-command-stderr>${(0, import_chunk_hr2stdq7.sn)((0, import_chunk_bzyb60p0.mH)(RTn(y, r.name, o.session)))}</local-command-stderr>`, { commandRun: (0, import_chunk_8704k7wd.uAe)(r, s), commandOutcome: { kind: "failed" } })], shouldQuery: false, command: r });
          });
        });
      case "local": {
        if (o.deferSlashToEngine?.(r)) {
          let F = `/${(0, import_chunk_vhsysgcd.Zs)(r)} ${s}`.trim(), E = (0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.Ane)({ inputString: F, precedingInputBlocks: c }), uuid: p });
          return E.persist = false, { messages: [E], shouldQuery: false, command: r, engineDeferredSlash: { text: F, messageUuid: E.uuid, origin: z } };
        }
        let R = (0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.Ane)({ inputString: Le(r, s), precedingInputBlocks: c }), uuid: p }), H = (0, import_chunk_t7fzcstv.bt)() && (0, import_chunk_tfs0ssqe.pus)(r).workspace;
        if (H) o.applyMessageOp({ type: "append", messages: [R] });
        try {
          let F = (0, import_chunk_bzyb60p0.zHe)(), X = (await r.load()).call(s, { ...o, submissionOrigin: z, promptSource: V, commandMessageUuid: R.uuid, runLauncherStopHooks: I && ((C, O) => I.executeStopHooks((0, import_chunk_bz1f2qnq.Z)(o).mode, C, O, false, o.agentId, o, o.messages, void 0, "launcher_only")) }, U ?? e), y = H ? await (0, import_chunk_5appeerh.Tn)(X, o.abortController.signal, () => new import_chunk_jv7av99m.Ie()) : await X;
          if (y.type === "text" && y.level === "error") (0, import_chunk_cqa9hrgx.m)(L, "cmd_returned_error");
          else (0, import_chunk_cqa9hrgx.u)(L, fe);
          if (y.type === "skip") return { messages: [], shouldQuery: false, command: r };
          if (y.type === "compact") {
            let C = [F, R, ...y.displayText ? [(0, import_chunk_bzyb60p0.Me)({ content: `<local-command-stdout>${(0, import_chunk_bzyb60p0.mH)(y.displayText)}</local-command-stdout>`, localCommandOutput: y.displayTextIsHintOnly ? "terminal-hint" : "stdout", ...y.displayRepeatsSummary === true && { repeatsCompactSummary: true }, timestamp: new Date(Date.now() + 100).toISOString() })] : []], O = { ...y.compactionResult, messagesToKeep: [...y.compactionResult.messagesToKeep, ...C] }, B = (0, import_chunk_bzyb60p0.e7)(O);
            return (0, import_chunk_bzyb60p0.xrt)(B), { messages: B, shouldQuery: false, command: r };
          }
          if (y.type === "query") return { messages: [R, (0, import_chunk_bzyb60p0.Xw)(`<local-command-stdout>${(0, import_chunk_bzyb60p0.mH)(y.value)}</local-command-stdout>`, { commandRun: (0, import_chunk_8704k7wd.uAe)(r, s) }), ...(y.metaMessages ?? []).map((C) => (0, import_chunk_bzyb60p0.Me)({ content: C, isMeta: true })), (0, import_chunk_bzyb60p0.Me)({ content: y.prompt, isMeta: true })], shouldQuery: true, command: r, resultText: y.value, ...y.metaMessages !== void 0 && { metaTexts: y.metaMessages } };
          let N = y.level === "error" ? "local-command-stderr" : "local-command-stdout", w = (0, import_chunk_bzyb60p0.Xw)(`<${N}>${(0, import_chunk_bzyb60p0.mH)(y.value)}</${N}>`, { contextUsage: y.contextUsage, usageReport: y.usageReport, isDisplayOnly: y.isDisplayOnly, commandRun: (0, import_chunk_8704k7wd.uAe)(r, s), commandOutcome: y.outcome ?? (y.level === "error" ? { kind: "failed" } : void 0) });
          if (H) return Gt(o, R, { messages: [w], shouldQuery: false, command: r, resultText: y.value });
          return { messages: [R, w, ...(y.metaMessages ?? []).map((C) => (0, import_chunk_bzyb60p0.Me)({ content: C, isMeta: true }))], shouldQuery: false, command: r, resultText: y.value, ...y.metaMessages !== void 0 && { metaTexts: y.metaMessages } };
        } catch (F) {
          if ((0, import_chunk_jv7av99m.Fe)(F)) (0, import_chunk_w578pjby.t)(`local command aborted: ${F instanceof Error ? F.message : String(F)}`);
          else (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(F), "local slash command threw"));
          let E = (0, import_chunk_jv7av99m.Fe)(F);
          if (E && o.abortController.signal.aborted) (0, import_chunk_cqa9hrgx.l)(L, "cmd_local_aborted");
          else (0, import_chunk_cqa9hrgx.m)(L, E ? "cmd_local_aborted" : "cmd_local_threw");
          let X = E ? "local-command-stdout" : "local-command-stderr", y = H ? import_chunk_t7fzcstv.Vqt : "Interrupted", N = E ? (0, import_chunk_wddxyb00.vs)(o.session) ? y : F instanceof Error ? F.message || y : y : RTn(F, r.name, o.session), w = (0, import_chunk_bzyb60p0.Xw)(`<${X}>${(0, import_chunk_hr2stdq7.sn)((0, import_chunk_bzyb60p0.mH)(N))}</${X}>`, E ? void 0 : { commandRun: (0, import_chunk_8704k7wd.uAe)(r, s), commandOutcome: { kind: "failed" } });
          if (H) return Gt(o, R, { messages: [w], shouldQuery: false, command: r });
          return { messages: [R, w], shouldQuery: false, command: r };
        }
      }
      case "prompt": {
        let { stacked: R, trailingArgs: H, capped: F } = !VIa(r) ? { stacked: [], trailingArgs: s, capped: false } : HGl(s, P, o.options.commands, k ? v ?? (() => true) : void 0), E = H, X;
        if (R.length > 0) (0, import_chunk_y53wbr8a.a)("tengu_stacked_slash_commands", { stacked_count: R.length });
        let y = false;
        try {
          let N = (0, import_chunk_vhsysgcd.wfo)(r, E, o) === "fork" && !(0, import_chunk_c4zg4pwc.Cme)(o);
          if (!N && await Pe?.() === false) return (0, import_chunk_cqa9hrgx.m)(L, o.abortController.signal.aborted ? "cmd_prompt_aborted" : "cmd_prompt_submit_hook_blocked"), { messages: [(0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.Ane)({ inputString: Ke(r, s), precedingInputBlocks: c }), uuid: p, origin: z })], shouldQuery: true, command: r };
          if (!(r.isMcp && r.loadedFrom !== "mcp")) (0, import_chunk_54j6k3fn.cFn)(r.name, r, "user-slash");
          y = true;
          let w = await Wt(r, E, o);
          if (y = o.abortController.signal.aborted, "blocked" in w) return (0, import_chunk_cqa9hrgx.m)(L, "cmd_hook_blocked"), y && w.blocked.screened?.dropped !== true ? { ...w.blocked, ownPassCutShort: true } : w.blocked;
          if (!o.options.isNonInteractiveSession && !k) {
            let O = r.onUserTypedArgs?.(E, o);
            if (O) X = (0, import_chunk_bzyb60p0.Pt)(O, "notice");
          }
          if (N) {
            let O = (0, import_chunk_thj6vbn4.h6)(), B = `/${e} ${s}`.trim(), J = (0, import_chunk_bzyb60p0.wu)([...c, { type: "text", text: B }]) ?? B;
            if (!I) throw Error("Forked dispatch requires forkDispatchHookExecutors");
            let M = [], me = [];
            for await (let ee of I.executeUserPromptSubmitHooks(J, (0, import_chunk_bz1f2qnq.Z)(o).mode, o, (0, import_chunk_bzyb60p0.zJr)({ promptSource: V ?? "typed" }))) {
              if (ee.message?.type === "progress") continue;
              if (ee.message?.type === "attachment") {
                let oe = ee.message.attachment;
                if ("hookEvent" in oe && oe.hookEvent === "UserPromptSubmit") {
                  if (oe.type === "hook_non_blocking_error") me.push(oe.stderr || `Exit code ${oe.exitCode}`);
                  else if (oe.type === "hook_error_during_execution") me.push(oe.content);
                }
              }
              if (ee.blockingError) {
                (0, import_chunk_cqa9hrgx.m)(L, "cmd_prompt_submit_hook_blocked");
                let oe = I.getUserPromptSubmitHookBlockingMessage(ee.blockingError), Ae = ee.suppressOriginalPrompt === true || (o.userPromptLine?.isUnknownSinceDispatch() ?? (0, import_chunk_thj6vbn4.K2)(O)) || (0, import_chunk_thj6vbn4.kDt)({ isRunReached: false }) ? oe : `${oe}

Original prompt: ${J}`;
                return { messages: [(0, import_chunk_bzyb60p0.Pt)(Ae, "warning", void 0, true)], shouldQuery: false, resultText: Ae, command: r, forkDispatched: true, screened: { dropped: true } };
              }
              if (ee.preventContinuation) {
                let oe = ee.stopReason ? `Operation stopped by hook: ${ee.stopReason}` : "Operation stopped by hook";
                return (0, import_chunk_cqa9hrgx.m)(L, "cmd_prompt_submit_hook_stopped"), { messages: [(0, import_chunk_bzyb60p0.Me)({ content: oe }), (0, import_chunk_bzyb60p0.Pt)(oe, "warning", void 0, true)], shouldQuery: false, resultText: oe, command: r, forkDispatched: true, ...o.abortController.signal.aborted && { ownPassCutShort: true } };
              }
              if (ee.additionalContexts && ee.additionalContexts.length > 0) M.push((0, import_chunk_bzyb60p0.Ut)({ type: "hook_additional_context", content: ee.additionalContexts, hookName: "UserPromptSubmit", toolUseID: `hook-${(0, import_crypto.randomUUID)()}`, hookEvent: "UserPromptSubmit" }));
            }
            let ye = o.abortController.signal.aborted;
            if (ye && o.userPromptLine?.isHeldForOrganization()) return (0, import_chunk_cqa9hrgx.m)(L, "cmd_prompt_aborted"), { messages: [(0, import_chunk_bzyb60p0.hR)({ toolUse: false })], shouldQuery: false, command: r, forkDispatched: true, ownPassCutShort: true };
            if (!ye) o.userPromptLine?.forked();
            let pe = await so(r, E, { ...o, userPromptHold: void 0, userPromptLine: void 0 }, c, n, g ?? import_chunk_bzyb60p0.v6, I, [...w.hookMessages, ...M], k, p, x, z, re, ve);
            if (me.length > 0) pe.messages.push((0, import_chunk_bzyb60p0.Pt)(`UserPromptSubmit hook error: ${me.join("; ")}`, "warning"));
            if (pe.aborted) (0, import_chunk_cqa9hrgx.m)(L, "cmd_prompt_aborted");
            else if (pe.threw) (0, import_chunk_cqa9hrgx.m)(L, "cmd_prompt_threw");
            else if ((0, import_chunk_cqa9hrgx.u)(L, fe), X) pe.messages.splice(1, 0, X);
            return pe;
          }
          let C = await gt(r, E, o, c, n, p, w.hookMessages, k, z, ie, false, false, V);
          if (R.length > 0 && P !== void 0) {
            let O = C.messages[0];
            if (O?.type === "user" && !O.isMeta) O.stackedOriginalInput = `/${r.name} ${P}`;
          }
          for (let O of R) try {
            let B = await Wt(O, H, o);
            if ("blocked" in B) {
              if (C.messages.push((0, import_chunk_bzyb60p0.Pt)(`Stacked skill /${(0, import_chunk_kx2fp6pc.wn)(O.name)} blocked by UserPromptExpansion hook`, "warning")), B.blocked.screened?.dropped === true) C.screened = { dropped: true };
              continue;
            }
            if (!o.options.isNonInteractiveSession && !k) {
              let me = O.onUserTypedArgs?.(H, o);
              if (me) C.messages.push((0, import_chunk_bzyb60p0.Pt)(me, "notice"));
            }
            if (mt({ commandName: O.name, agentId: o.agentId, isNonInteractiveSession: Boolean(o.options.isNonInteractiveSession), setAppState: o.setAppState, credentials: o.credentials }), (0, import_chunk_bzyb60p0.bdr)(o.session, O.name, o.storageV5), O.pluginInfo) (0, import_chunk_54j6k3fn.ij)(O.pluginInfo.repository), (0, import_chunk_bzyb60p0.ZJ)(O.pluginInfo.repository, "command", (0, import_chunk_bzyb60p0.iPn)(O, O.pluginInfo.pluginManifest.name));
            if (!(O.isMcp && O.loadedFrom !== "mcp")) (0, import_chunk_54j6k3fn.cFn)(O.name, O, "user-slash");
            let J = await gt(O, H, { ...o, messages: [...o.messages, ...C.messages] }, [], [], void 0, B.hookMessages, k, z, void 0, false, false, V), M = J.messages[0];
            if (M?.type === "user" && !M.isMeta) M.stackedExpansion = true;
            C.messages.push(...J.messages), C.allowedTools = [...C.allowedTools ?? [], ...J.allowedTools ?? []], C.disallowedTools = [...C.disallowedTools ?? [], ...J.disallowedTools ?? []], C.model = J.model ?? C.model, C.effort = J.effort ?? C.effort;
          } catch (B) {
            if ((0, import_chunk_jv7av99m.Fe)(B)) throw B;
            (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(B), "stacked slash command expansion threw")), C.messages.push((0, import_chunk_bzyb60p0.Pt)(`Stacked skill /${(0, import_chunk_kx2fp6pc.wn)(O.name)} failed to load: ${RTn(B, O.name, o.session, O.loadedFrom)}`, "warning"));
          }
          if (F) C.messages.push((0, import_chunk_bzyb60p0.Pt)(`Reached the limit of ${Kt} commands in one message \xB7 the rest was passed as arguments`, "warning"));
          if (X) C.messages.push(X);
          return (0, import_chunk_cqa9hrgx.u)(L, fe), C;
        } catch (N) {
          if ((0, import_chunk_jv7av99m.Fe)(N)) {
            (0, import_chunk_cqa9hrgx.m)(L, "cmd_prompt_aborted");
            let C = [(0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.Ane)({ inputString: Le(r, s), precedingInputBlocks: c }), uuid: p })];
            if (!(0, import_chunk_cbnm4p23.jPe)(o.abortController.signal.reason)) C.push((0, import_chunk_bzyb60p0.hR)({ toolUse: false, interruptedByShutdown: (0, import_chunk_cbnm4p23.UA)(o.abortController.signal) }));
            return { messages: C, shouldQuery: false, command: r, ...y && { ownPassCutShort: true } };
          }
          (0, import_chunk_cqa9hrgx.m)(L, "cmd_prompt_threw");
          let w = pt(N, r.name, o.session, r.loadedFrom);
          return { messages: [(0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.Ane)({ inputString: Le(r, s), precedingInputBlocks: c }), uuid: p }), (0, import_chunk_bzyb60p0.Xw)(`<local-command-stderr>${(0, import_chunk_hr2stdq7.sn)(w)}</local-command-stderr>`, { commandRun: (0, import_chunk_8704k7wd.uAe)(r, s), commandOutcome: { kind: "failed" } })], shouldQuery: false, command: r, resultText: w };
        }
      }
    }
  } catch (R) {
    if (R instanceof import_chunk_jv7av99m.WE) return (0, import_chunk_cqa9hrgx.m)(L, "cmd_malformed"), { messages: [(0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.Ane)({ inputString: R.message, precedingInputBlocks: c }) })], shouldQuery: false, command: r };
    throw R;
  }
}
function Le(e, s) {
  let o = (0, import_chunk_8704k7wd.uAe)(e, s);
  return (0, import_chunk_bzyb60p0.VHe)(o.command, o.args);
}
function Ke(e, s) {
  return (0, import_chunk_bzyb60p0.VHe)((0, import_chunk_kx2fp6pc.wn)((0, import_chunk_vhsysgcd.Zs)(e)), (0, import_chunk_8704k7wd.p9e)(e, s) ? "***" : (0, import_chunk_xfj2cwfv.xde)(s));
}
function je(e, s) {
  return e ? { messages: [], shouldQuery: false } : s;
}
var Kt = 5;
function VIa(e) {
  return e.type === "prompt" && e.context !== "fork" && e.getContext === void 0 && !e.argsMayContainSlashCommands;
}
function HGl(e, s, o, c) {
  if (s === void 0 && c === void 0) return { stacked: [], trailingArgs: e, capped: false };
  let n = [], T = e, g = s, p = false;
  for (let k = 0; ; k++) {
    let v = T.trimStart();
    if (!v.startsWith("/")) break;
    if (k >= Kt) {
      p = true;
      break;
    }
    let P = (0, import_chunk_be4a2jph.Ww)(v);
    if (!P) break;
    let U = g;
    if (g !== void 0) {
      let V = g.trimStart(), I = V.startsWith("/") ? (0, import_chunk_be4a2jph.Ww)(V) : void 0;
      if (!I || I.commandName !== P.commandName) break;
      U = I.args;
    }
    let x = (0, import_chunk_8704k7wd.zs)(P.commandName, o);
    if (!x || x.type !== "prompt" || !VIa(x) || x.userInvocable === false || !(0, import_chunk_vhsysgcd.yl)(x) || (0, import_chunk_tfs0ssqe.vA)(x)) break;
    if (T = P.args, g = U, c?.(x)) continue;
    n.push(x);
  }
  return { stacked: n, trailingArgs: T, capped: p };
}
function KIa(e, s = "loading") {
  return [`<${import_chunk_k449cc64.ew}>${e}</${import_chunk_k449cc64.ew}>`, `<${import_chunk_k449cc64.xp}>${e}</${import_chunk_k449cc64.xp}>`, `<${import_chunk_k449cc64.G4n}>true</${import_chunk_k449cc64.G4n}>`].join(`
`);
}
function R7l(e, s) {
  return e === KIa(s);
}
function Bt(e, s) {
  return [`<${import_chunk_k449cc64.ew}>${e}</${import_chunk_k449cc64.ew}>`, `<${import_chunk_k449cc64.xp}>/${e}</${import_chunk_k449cc64.xp}>`, s ? `<command-args>${s}</command-args>` : null].filter(Boolean).join(`
`);
}
function jt(e, s) {
  if (e.userInvocable !== false) {
    let o = (0, import_chunk_vhsysgcd.Zs)(e);
    return Bt(e.source === "bundled" && e.aliases?.includes(o) ? o : e.name, s);
  }
  if (e.loadedFrom === "skills" || e.loadedFrom === "syncedSkills" || e.loadedFrom === "plugin" || e.loadedFrom === "mcp" || e.loadedFrom === "memoryStore" || e.loadedFrom === "attachedFolder" || e.loadedFrom === "userElsewhere") return KIa(e.name, e.progressMessage);
  return Bt(e.name, s);
}
async function Wt(e, s, o) {
  let c = [], n = s ? `/${e.name} ${s}` : `/${e.name}`, T = (0, import_chunk_thj6vbn4.h6)();
  try {
    for await (let g of (0, import_chunk_bzyb60p0.Mfi)(e.source === "mcp" ? "mcp_prompt" : "slash_command", e.name, s, e.source, n, (0, import_chunk_bz1f2qnq.Z)(o).mode, o)) {
      if (g.message?.type === "progress") continue;
      if (g.blockingError) {
        let p = `UserPromptExpansion operation blocked by hook:
${g.blockingError.blockingError}`, v = g.suppressOriginalPrompt === true || (0, import_chunk_thj6vbn4.K2)(T) || (0, import_chunk_thj6vbn4.kDt)({ isRunReached: false }) ? p : `${p}

Original prompt: ${n}`;
        return { blocked: { messages: [(0, import_chunk_bzyb60p0.Pt)(v, "warning", void 0, true)], shouldQuery: false, resultText: v, command: e, screened: { dropped: true } } };
      }
      if (g.preventContinuation) {
        let p = g.stopReason ? `${import_chunk_0ha8wex8.Sct}: ${g.stopReason}` : import_chunk_0ha8wex8.Sct;
        return { blocked: { messages: [(0, import_chunk_bzyb60p0.Me)({ content: p, isMeta: true }), (0, import_chunk_bzyb60p0.Pt)(p, "warning", void 0, true)], shouldQuery: false, resultText: p, command: e } };
      }
      if (g.additionalContexts?.length) c.push((0, import_chunk_bzyb60p0.Ut)({ type: "hook_additional_context", content: g.additionalContexts, hookName: "UserPromptExpansion", toolUseID: `hook-${(0, import_crypto.randomUUID)()}`, hookEvent: "UserPromptExpansion" }));
      if (g.message && !(g.message.type === "attachment" && g.message.attachment.type === "hook_success" && g.message.attachment.content === "")) c.push(g.message);
    }
  } catch (g) {
    if (!(g instanceof import_chunk_jv7av99m.wp)) throw g;
    (0, import_chunk_w578pjby.t)("UserPromptExpansion hooks cancelled (control stream closed)");
  }
  return { hookMessages: c };
}
async function x7l(e, s, o, c, n = false, T = false, g = 0) {
  let p = (0, import_chunk_8704k7wd.zs)(e, o);
  if (!p) throw new import_chunk_jv7av99m.WE(`Unknown command: ${(0, import_chunk_kx2fp6pc.wn)(e)}`);
  if (p.type !== "prompt") throw Error(`Unexpected ${p.type} command. Expected 'prompt' command. Use /${e} directly in the main conversation.`);
  return gt(p, s, c, [], [], void 0, [], void 0, void 0, void 0, n, T, void 0, g);
}
async function gt(e, s, o, c = [], n = [], T, g = [], p, k, v, P = false, U = false, x, V = 0) {
  let I = await (0, import_chunk_tfs0ssqe.DDe)(e);
  if ((0, import_chunk_tfs0ssqe.c9e)(e) || (0, import_chunk_qvjn7dva.RUn)(e)) throw new import_chunk_jv7av99m.WE(`Unknown command: ${(0, import_chunk_kx2fp6pc.wn)(e.name)}`);
  if ((0, import_chunk_tfs0ssqe.tpe)(I)) throw (0, import_chunk_tfs0ssqe.qSe)(e, I), new import_chunk_jv7av99m.WE(`Unknown command: ${(0, import_chunk_kx2fp6pc.wn)(e.name)}`);
  if ((0, import_chunk_58apc8rx.con)(e), (0, import_chunk_c4zg4pwc.Cme)(o) && !P) {
    let Q = jt(e, s), Ce = e.isMcp && e.loadedFrom !== "mcp", be = e.loadedFrom === "mcp", $e = (0, import_chunk_tfs0ssqe.Dae)(e);
    if (e.disableModelInvocation || Ce || $e) {
      let j = [Ce ? `"/${(0, import_chunk_kx2fp6pc.wn)(e.name)}" is an MCP prompt and cannot run in coordinator mode: the coordinator does not load prompt content, and workers cannot invoke MCP prompts via the ${import_chunk_pmryp5f3.Fn} tool.` : `Skill "/${(0, import_chunk_kx2fp6pc.wn)(e.name)}" is user-invocable only (${e.disableModelInvocation ? "disable-model-invocation" : "disabled for model invocation in settings"}) and cannot run in coordinator mode: the coordinator does not load skill content, and workers cannot invoke it via the ${import_chunk_pmryp5f3.Fn} tool.`];
      if (e.description && !be && !Ce) j.push(`Description: ${e.description}`);
      let ue = Object.entries(e.subcommands ?? {}).filter(([, he]) => {
        let ae = (0, import_chunk_8704k7wd.zs)(he, o.options.commands);
        return ae !== void 0 && (0, import_chunk_vhsysgcd.yl)(ae) && !ae.disableModelInvocation && !(0, import_chunk_tfs0ssqe.Dae)(ae) && !(ae.isMcp && ae.loadedFrom !== "mcp");
      }).map(([he]) => he);
      if (ue.length > 0) j.push(`Note: the subcommands ${ue.map((he) => `"/${(0, import_chunk_kx2fp6pc.wn)(e.name)} ${(0, import_chunk_kx2fp6pc.wn)(he)}"`).join(", ")} route to their own dedicated commands and DO still work when the user types them directly in the terminal (remote-control clients gate some commands separately).`);
      j.push(`
Do not instruct workers to invoke this via the ${import_chunk_pmryp5f3.Fn} tool \u2014 it will be refused. Tell the user that ${ue.length > 0 ? `/${(0, import_chunk_kx2fp6pc.wn)(e.name)} itself (beyond the subcommands above) is` : `the /${(0, import_chunk_kx2fp6pc.wn)(e.name)} command is`} unavailable in coordinator mode. If \u2014 and only if \u2014 the underlying task is achievable with the tools workers actually hold, you may brief a worker to do that work directly; do not promise this otherwise.`);
      let K = [{ type: "text", text: j.join(`
`) }];
      return { messages: [(0, import_chunk_bzyb60p0.Me)({ content: Q, uuid: T, origin: k }), ...ct([(0, import_chunk_bzyb60p0.Udr)((0, import_chunk_bzyb60p0.Me)({ content: ft(n, c, K), isMeta: true }), c, K), ...g])], shouldQuery: true, disallowedTools: (0, import_chunk_qebpc5de.$f)(e.disallowedTools ?? []), command: e };
    }
    let Se = [`Skill "/${(0, import_chunk_kx2fp6pc.wn)(e.name)}" is available for workers.`];
    if (e.description && !be) Se.push(`Description: ${e.description}`);
    if (e.whenToUse && !be) Se.push(`When to use: ${e.whenToUse}`);
    let ze = await (0, import_chunk_gbskgz33.vvt)(e);
    if (ze.length > 0) Se.push(`This skill grants workers additional tool permissions: ${ze.map(import_chunk_kx2fp6pc.wn).join(", ")}`);
    Se.push(`
Instruct a worker to use this skill by including "Use the /${(0, import_chunk_kx2fp6pc.wn)(e.name)} skill" in your Agent prompt. The worker has access to the Skill tool and will receive the skill's content and permissions when it invokes it.`);
    let se = [{ type: "text", text: Se.join(`
`) }];
    return { messages: [(0, import_chunk_bzyb60p0.Me)({ content: Q, uuid: T, origin: k }), ...ct([(0, import_chunk_bzyb60p0.Udr)((0, import_chunk_bzyb60p0.Me)({ content: ft(n, c, se), isMeta: true }), c, se), ...g])], shouldQuery: true, disallowedTools: (0, import_chunk_qebpc5de.$f)(e.disallowedTools ?? []), command: e };
  }
  let z = [], re = [], ve = { ...o, submissionOrigin: k, promptSource: x, promptShellHandOff: z, mcpSkillLoaded: re, ...(p || P) && { options: { ...o.options, ...p && { modelScheduledOrigin: true }, ...P && { isSkillPreload: true, readOnlySkillLoad: true } } } }, ie = await e.getPromptForCommand(s, ve), Pe = await (0, import_chunk_bzyb60p0.HXo)(e.name, ie, e), r = re.at(-1);
  if (e.loadedFrom === "mcp" && r === void 0) throw new import_chunk_jv7av99m.A(`The skill "${(0, import_chunk_kx2fp6pc.wn)(e.name)}" was not loaded because of a fault in Claude Code: it has no record of the files that the skill was verified against. Do not try again.`, "MCP skill body has no verified entry");
  let L = r !== void 0 && ie[0]?.type === "text" ? (0, import_chunk_7cfjrnwy.nt)(ie[0].text, `
`) : "", [fe, ...R] = Pe, H = fe?.type === "text" && !fe.text.startsWith(L) ? [{ ...fe, text: `${L}

${fe.text}` }, ...R] : Pe, F = (0, import_chunk_xcwk20g6.XIa)(H, V);
  if (F !== H) (0, import_chunk_cqa9hrgx.u)("skill_text_cut");
  let E = P ? [] : await (0, import_chunk_gbskgz33.vvt)(e), X = !P && (e.hooks !== void 0 || E.length > 0) ? await (0, import_chunk_tfs0ssqe.DDe)(e) : void 0, y = (!(0, import_chunk_57sd0ak5.Dl)("hooks") || (0, import_chunk_57sd0ak5.FU)(e.source)) && !(0, import_chunk_2yx6c1y2.Iee)(e.source) && !P && !(0, import_chunk_gftn60qp._cn)(), N = e.hooks !== void 0 && !y, w;
  if (X !== void 0) {
    let Q = { hooks: e.hooks !== void 0 && y, grant: E.length > 0 };
    if (Q.hooks || Q.grant) (0, import_chunk_jhdsf4g3.Bsl)((0, import_chunk_kx2fp6pc.wn)(e.name), X, Q);
  } else if (e.hooks && y) {
    let Q = (0, import_chunk_f9x2f6cx.W)();
    if (w = It(o.sessionHooksRegistry, Q, e.source, (0, import_chunk_gbskgz33.Xwo)(e), e.name, e.hooks), w === void 0) Et(o.sessionHooksRegistry, Q, e.hooks, e.name, e.type === "prompt" ? e.skillRoot : void 0, (0, import_chunk_gbskgz33.xWi)(e), (0, import_chunk_j7ensb3k.B7t)(e.source), (0, import_chunk_gbskgz33.Xwo)(e));
  }
  let C = e.source ? `${e.source}:${e.name}` : e.name, O = F.filter((Q) => Q.type === "text").map((Q) => Q.text).join(`

`);
  (0, import_chunk_bzyb60p0.GQt)(O, "skill", o.credentials, o.storageV5, o.appendSystemMessage);
  let B = (0, import_chunk_sjqze7qg.tDe)((0, import_chunk_tfs0ssqe.xon)(e)), J = P && B !== null, M = e.asksForTheSkill === true;
  if (!J && !M) (0, import_chunk_f9x2f6cx.zOe)(e.name, C, O, o.agentId ?? null, r !== void 0);
  if (B && !P && !M) o.applyAttributionOp({ kind: "recordVerification", method: B, checkout: await (0, import_chunk_bzyb60p0.FPn)(e, (0, import_chunk_18rsj2ts.oa)()) });
  o.options.activeSkill = (0, import_chunk_tfs0ssqe.V6)(e);
  let me = jt(e, s), ye = X !== void 0 || w !== void 0 || N ? [] : (0, import_chunk_qebpc5de.$f)(E), pe = (0, import_chunk_qebpc5de.$f)(e.disallowedTools ?? []);
  if (pe.length > 0) (0, import_chunk_qanr9g0g.O$t)(o.setToolPermissionContext, pe, "union");
  let ee = ft(n, c, F), oe = r === void 0 ? [] : ee.slice(0, ee.length - F.length), Te = r === void 0 ? ee : F, Re = (0, import_chunk_4vsz8a99.Rat)(e) || P || p || U ? [] : await (0, import_chunk_bzyb60p0.dBe)((0, import_chunk_bzyb60p0.MHe)(F.filter((Q) => Q.type === "text").map((Q) => Q.text).join(" "), o, v ?? null, [], { now: () => (/* @__PURE__ */ new Date()).toISOString(), uuid: () => (0, import_crypto.randomUUID)() }, o.messages, "repl_main_thread", { planSlugSeed: s })), Ue = await (0, import_chunk_xcwk20g6.qer)(e, (0, import_chunk_f9x2f6cx.Ed)(), o);
  return { messages: [(0, import_chunk_bzyb60p0.Me)({ content: me, uuid: T, origin: k }), ...ct([...oe.length > 0 ? [(0, import_chunk_bzyb60p0.Udr)((0, import_chunk_bzyb60p0.Me)({ content: oe, isMeta: true }), c, [])] : [], (0, import_chunk_bzyb60p0.Udr)((0, import_chunk_bzyb60p0.Me)({ content: Te, isMeta: true, ...z.length > 0 && { promptShellHandOff: { agentId: o.agentId ?? null, commands: z } }, ...r !== void 0 && { mcpSkill: { ...r, name: e.name } }, ...(0, import_chunk_2xjdqky3.w1n)() && !J && o.agentId === void 0 && Te === F && { invokedSkill: { name: e.name, path: C } } }), r === void 0 ? c : [], F), ...Ue ? [Ue] : [], ...w !== void 0 || N && !P ? [(0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.Qs)(Rt), isMeta: true })] : [], ...Re, ...g]), (0, import_chunk_bzyb60p0.Ut)({ type: "command_permissions", allowedTools: ye, model: (0, import_chunk_865at33z.H7e)(e.model) })], shouldQuery: true, allowedTools: ye, disallowedTools: pe, model: (0, import_chunk_865at33z.H7e)(e.model), effort: e.getEffort?.(s, o) ?? e.getDefaultEffort?.(s, o)?.value ?? e.effort, command: e };
}
function ft(e, s, o) {
  return e.length > 0 || s.length > 0 ? [...e, ...s, ...o] : o;
}
function Gt(e, s, o) {
  return e.applyMessageOp({ type: "insert-after-uuid", uuid: s.uuid, messages: o.messages }), { ...o, messages: [], settledInPlace: true };
}
function ct(e) {
  return e.map((s) => s.type === "user" ? { ...s, turnCompanion: true } : s);
}
