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
  var E2 = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m2, _2) {
    return _2 = Error(m2), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s, _2;
  };
  var fail = (e) => error = hasError ? new E2(e, error, "An error was suppressed during disposal") : (hasError = true, e);
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
var chunk_mv0px8y8_exports = {};
__export(chunk_mv0px8y8_exports, {
  $5n: () => $5n,
  ESn: () => ESn,
  J5l: () => J5l,
  KPt: () => KPt,
  M3t: () => M3t,
  Q5l: () => Q5l,
  Z5l: () => Z5l,
  eFo: () => eFo,
  jfa: () => jfa,
  n$s: () => n$s,
  nFo: () => nFo,
  r$s: () => r$s,
  rFo: () => rFo,
  tFo: () => tFo,
  vSn: () => vSn
});
module.exports = __toCommonJS(chunk_mv0px8y8_exports);
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_46fskppy = require("/$bunfs/root/chunk-46fskppy.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_nr0e9cdy = require("/$bunfs/root/chunk-nr0e9cdy.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_4f4ysf31 = require("/$bunfs/root/chunk-4f4ysf31.js");
var import_chunk_c1hnv4fm = require("/$bunfs/root/chunk-c1hnv4fm.js");
var import_chunk_339n78pp = require("/$bunfs/root/chunk-339n78pp.js");
var import_chunk_271f5kxt = require("/$bunfs/root/chunk-271f5kxt.js");
var import_chunk_s27zvffk = require("/$bunfs/root/chunk-s27zvffk.js");
var import_chunk_yzcgh8yd = require("/$bunfs/root/chunk-yzcgh8yd.js");
var import_chunk_4ab0wvf7 = require("/$bunfs/root/chunk-4ab0wvf7.js");
var import_chunk_g49rrdp1 = require("/$bunfs/root/chunk-g49rrdp1.js");
var import_chunk_0jwky18t = require("/$bunfs/root/chunk-0jwky18t.js");
var import_chunk_s8g3yq9x = require("/$bunfs/root/chunk-s8g3yq9x.js");
var import_chunk_5nbqcb4c = require("/$bunfs/root/chunk-5nbqcb4c.js");
var import_chunk_9xt9z453 = require("/$bunfs/root/chunk-9xt9z453.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_tt4yhkc0 = require("/$bunfs/root/chunk-tt4yhkc0.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_7e12xj51 = require("/$bunfs/root/chunk-7e12xj51.js");
var import_crypto = require("crypto");
(0, import_chunk_adx6804h.B)();
var C = 4194304;
var E = "anthropic/longOriginalFile", J = { [E]: { v: 1 } }, G = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ [E]: (0, import_chunk_adx6804h.Ae)({ v: (0, import_chunk_adx6804h.v)(1) }) }));
function jfa(e) {
  return G().safeParse(e).success;
}
function R() {
  return import_chunk_nr0e9cdy.zb.CLAUDE_CODE_MCP_SERVE_TOOL_OUTPUT === true;
}
var S = /* @__PURE__ */ new Set([import_chunk_hn3cwwzt.ke, import_chunk_k883m4fq.De, import_chunk_rb36kwbn.lt, import_chunk_rb36kwbn.Dt, import_chunk_rb36kwbn.Ks, import_chunk_865at33z.Sr, import_chunk_865at33z.Qr]);
function J5l(e, t) {
  let n = eFo(e, t);
  return n && { experimental: { [import_chunk_yzcgh8yd.dDt]: n } };
}
function eFo(e, t) {
  if (!R() || t === void 0) return;
  let n = P(e(), t);
  if (!(0, import_chunk_yzcgh8yd.hQs)(n.deny_rules)) {
    (0, import_chunk_cqa9hrgx.m)("mcp_serve_tool_output", "deny_rules_over_bounds");
    return;
  }
  let o = (0, import_chunk_yzcgh8yd.pQs)() ? (0, import_chunk_s27zvffk.S1r)() : void 0;
  return { ...n, ...o !== void 0 && { tools: [...n.tools, ...import_chunk_0jwky18t.Fpt, import_chunk_9xt9z453.Xo], tool_host_interface: o } };
}
function ESn(e) {
  if (!H()) return false;
  return (0, import_chunk_yzcgh8yd.z3r)((0, import_chunk_0jve1fep.Le)(e) ? e[import_chunk_yzcgh8yd.dDt] : void 0);
}
function H() {
  return R() && (0, import_chunk_yzcgh8yd.pQs)();
}
function P(e, t) {
  return (0, import_chunk_yzcgh8yd.f0a)({ tools: I(e), denyRules: t.alwaysDenyRules.cliArg ?? [] });
}
async function Q5l({ name: e, args: t, meta: n, tools: o, launchPermissionContext: r, newCall: a, startHeartbeat: y }) {
  let d = (0, import_chunk_yzcgh8yd.c0a)(n);
  if (d.kind === "absent") return;
  let s = (0, import_chunk_4ab0wvf7.sFo)(n).kind === "absent" ? W(d, e, o, r) : g("invalid_request", `${e} was not run: a call that carries _meta["${import_chunk_4ab0wvf7.U5n}"] is answered only as a plain call. Call it without asking for its output object.`, "carries_asks_key");
  if ("refusal" in s) return (0, import_chunk_cqa9hrgx.l)("mcp_serve_tool_output", s.reason, { tool: $5n(e) }), vSn(s.refusal);
  let { toolUseContext: O, release: T } = a();
  try {
    let h = await q(s.tool, t, x(O, (0, import_chunk_s8g3yq9x.Upt)(s.launchPermissionContext)), y);
    if (!O.abortController.signal.aborted) {
      let w = $5n(s.tool.name);
      if ("unsent" in h) (0, import_chunk_cqa9hrgx.m)("mcp_serve_tool_output", h.unsent, { tool: w });
      else if (h.objection === "crashed_check") (0, import_chunk_cqa9hrgx.m)("mcp_serve_tool_output", h.objection, { tool: w });
      else if (h.objection !== void 0) (0, import_chunk_cqa9hrgx.l)("mcp_serve_tool_output", h.objection, { tool: w });
      else (0, import_chunk_cqa9hrgx.u)("mcp_serve_tool_output", { tool: w, answer: (0, import_chunk_78g0060s.f)(h.answer), safety_ask_skipped: h.wasSafetyAskSkipped === true, ...h.wasOutputCut && { output_cut: true }, ...h.diffLeftOut && { diff_left_out: (0, import_chunk_78g0060s.f)(h.diffLeftOut) } });
    }
    return h.result;
  } finally {
    T();
  }
}
function W(e, t, n, o) {
  if (!R()) return g("unsupported_protocol", `${t} was not run: this server is not set up to return output objects (CLAUDE_CODE_MCP_SERVE_TOOL_OUTPUT is not on). Call it without asking for its output object.`);
  if (o === void 0) return g("unsupported_protocol", `${t} was not run: this server holds no permission rules (CLAUDE_CODE_MCP_SERVE_SETTINGS was unset or empty when it started), and it returns output objects only for calls it can judge. Call it without asking for its output object.`, "no_launch_rules");
  let { deny_rules: r } = P(n, o);
  if (!(0, import_chunk_yzcgh8yd.hQs)(r)) return g("unsupported_protocol", `${t} was not run: this server was launched with more or longer deny rules than it can advertise, so it returns no output objects. Call it without asking for its output object.`, "deny_rules_over_bounds");
  if (e.kind === "malformed") return g("invalid_request", `${t} was not run: _meta["${import_chunk_yzcgh8yd.dDt}"] must be exactly { versions, deny_rules_digest }. versions: up to 64 whole numbers. deny_rules_digest: the SHA-256 of JSON.stringify(deny_rules), for the deny_rules this server advertises, as 64 lower-case hex characters.`);
  if (e.kind === "no_shared_version") return g("unsupported_protocol", `${t} was not run: this server returns output objects only in version ${import_chunk_yzcgh8yd.y4o.join(", ")}, and the request lists ${e.versions.join(", ") || "none"}.`);
  if (e.denyRulesDigest !== (0, import_chunk_yzcgh8yd.u0a)(r)) return g("unsupported_protocol", `${t} was not run: the request's deny_rules_digest is not that of the deny_rules this server advertises. Reconnect and read them again.`, "deny_rules_digest_mismatch");
  let a = (0, import_chunk_4vsz8a99.tn)(n, t);
  if (a === void 0) return g("not_served", `${t} was not run: this server has no tool by that name.`);
  return S.has(t) ? { tool: a, launchPermissionContext: o } : g("not_served", `${t} was not run: the tools this server answers with an output object are ${I(n).join(", ") || "none"}. Call it without asking for its output object.`);
}
function n$s(e) {
  return S.has(e);
}
function I(e) {
  return e.map((t) => t.name).filter((t) => S.has(t));
}
function $5n(e) {
  return S.has(e) || import_chunk_0jwky18t.Fpt.has(e) ? (0, import_chunk_865at33z.hr)(e) : (0, import_chunk_865at33z.Ske)(e);
}
function vSn(e) {
  return (0, import_chunk_syr33dp2.y4)({ envelope: { v: import_chunk_syr33dp2.Zm, outcome: "refused", target: (0, import_chunk_g49rrdp1.TSn)(), ...e }, content: (0, import_chunk_syr33dp2.vp)(e.message) });
}
function r$s(e) {
  return (0, import_chunk_syr33dp2.y4)({ envelope: { v: import_chunk_syr33dp2.Zm, outcome: "acknowledged", target: (0, import_chunk_g49rrdp1.TSn)(), ask_id: e }, content: "Nothing was run: the permission question was answered with a no, or taken back." });
}
function g(e, t, n = e) {
  return { refusal: { code: e, message: t }, reason: n };
}
async function q(e, t, n, o) {
  let r = { ...t }, a = import_chunk_0jwky18t.CVe.filter((O) => O in r), y = a.length > 0 ? [(0, import_chunk_0jwky18t.D3t)(a)] : [], d = await z(e, r, n);
  if ("rejection" in d) return { result: M3t(d.rejection, F(d.objection), y), answer: "not_run", objection: d.objection };
  let s = await tFo(e, d.input, n, o);
  return { ..."failure" in s ? { result: M3t(s.failure, "ran", y), answer: "tool_failed" } : nFo(e, s.data, y), wasSafetyAskSkipped: d.wasSafetyAskSkipped };
}
async function z(e, t, n) {
  try {
    if (!e.isEnabled()) return { rejection: `Tool ${e.name} is not enabled` };
    let o = (0, import_chunk_0jwky18t.H3t)(e, t);
    if (!o.success) return { rejection: `InputValidationError: ${(0, import_chunk_339n78pp.fN)(e.name, o.error)}` };
    let r = await e.validateInput?.(o.data, n);
    if (r !== void 0 && !r.result) return { rejection: r.message, ...r.deniedByPermissionRule === true && { objection: "deny_rule" } };
    let a = await U(e, o.data, n);
    return "rejection" in a ? a : { input: o.data, ...a };
  } catch (o) {
    return KPt(e, o), { rejection: (0, import_chunk_339n78pp.B5)(o) };
  }
}
function x(e, t) {
  let n = { ...(0, import_chunk_0jwky18t.sIe)(), toolPermissionContext: { ...t, sandboxAutoAllowSuspended: true } };
  return { ...e, inputFromAnotherMachine: true, toolUseId: `toolu_${(0, import_crypto.randomUUID)()}`, getAppState: () => n };
}
async function U(e, t, n) {
  let o = await (0, import_chunk_bzyb60p0.ev)(e, t, n, { crashIsObjection: true }).catch((y) => {
    if (n.abortController.signal.aborted) throw y;
    return KPt(e, y), "crashed";
  });
  if (o === null) return { wasSafetyAskSkipped: false };
  if (o === "crashed" || o.decisionReason?.type === "other" && o.decisionReason.reason === import_chunk_bzyb60p0.WF) return { rejection: `${e.name} was not run: the permission rules could not be evaluated for this call (internal error).`, objection: "crashed_check" };
  if (o.behavior === "deny") return { rejection: o.message, objection: "deny_rule" };
  if ((0, import_chunk_bzyb60p0.Kw)(o)) return { rejection: `${e.name} was not run: a permission rule says to ask a person before a call like this one, and a call that runs in this environment cannot ask. Retrying won't help while that rule is in effect.`, objection: "ask_rule" };
  let r = (0, import_chunk_bzyb60p0.ha)(o.decisionReason, import_chunk_pbteexar.mce);
  if (r !== void 0) return { rejection: (0, import_chunk_bzyb60p0.yos)((0, import_chunk_bzyb60p0.LQo)(o, r)), objection: "circuit_breaker" };
  let a = (0, import_chunk_bzyb60p0.ha)(o.decisionReason, import_chunk_pbteexar.MK) !== void 0;
  return !a && (0, import_chunk_bzyb60p0.ha)(o.decisionReason) !== void 0 ? { wasSafetyAskSkipped: true, ask: o } : { rejection: `${e.name} was not run: ${o.message} A call that runs in this environment cannot put that to a person. Retrying won't help.`, objection: a ? "circuit_breaker" : "other_ask" };
}
async function Z5l(e, t, n, o, r, a = false, y = false) {
  if (o === void 0) return { toolUseContext: n };
  let d = { ...x(n, o), inputFromAnotherMachine: n.inputFromAnotherMachine }, { toolUseId: s } = d, O = s === void 0 ? void 0 : { toolUseId: s, opened: (0, import_chunk_271f5kxt.QWe)(d, s, e.name) }, T = await U(e, t, { ...d, permissionPhase: void 0, permissionRound: O?.opened }).catch((k) => {
    if (O) (0, import_chunk_271f5kxt.Nae)(d, O.toolUseId, O.opened);
    throw k;
  }), h = (O && (0, import_chunk_271f5kxt.Nae)(d, O.toolUseId, O.opened)) ?? {}, w = "rejection" in T;
  if (y && (!w || F(T.objection) === "ask_refused_no_surface")) {
    if (!a) (0, import_chunk_cqa9hrgx.u)("mcp_serve_plain_call", { safety_ask_skipped: w || T.wasSafetyAskSkipped, mod_own_call: true });
    return { toolUseContext: { ...d, permissionPhase: h } };
  }
  if (!("rejection" in T)) {
    let k = await (0, import_chunk_4ab0wvf7.o$s)(r, e, t, d.session, T.ask);
    if (k !== "run" && k !== "as_without_the_key") return k;
    if (!a) (0, import_chunk_cqa9hrgx.u)("mcp_serve_plain_call", k === "run" ? { safety_ask_skipped: false, caller_attested: true } : { safety_ask_skipped: T.wasSafetyAskSkipped });
    return { toolUseContext: { ...d, permissionPhase: h } };
  }
  if (T.objection === "crashed_check") (0, import_chunk_cqa9hrgx.m)("mcp_serve_plain_call", T.objection);
  else (0, import_chunk_cqa9hrgx.l)("mcp_serve_plain_call", T.objection);
  return { rejection: T.rejection };
}
function F(e) {
  switch (e) {
    case void 0:
      return "validation_failed";
    case "ask_rule":
    case "circuit_breaker":
    case "other_ask":
      return "ask_refused_no_surface";
    case "deny_rule":
    case "crashed_check":
      return "denied_by_rule";
  }
}
async function tFo(e, t, n, o, r = import_chunk_bzyb60p0.xk, a = false, y = false) {
  var _stack = [];
  try {
    const d = __using(_stack, o());
    try {
      return await e.call(t, n, r, (0, import_chunk_bzyb60p0.La)({ content: [] }), void 0, { gitDiffRead: true, ...a && { callerLogsSharedEvents: a }, ...y && { smallResultAsked: y } });
    } catch (s) {
      return KPt(e, s), { failure: (0, import_chunk_339n78pp.B5)(s) };
    }
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function KPt(e, t) {
  if ((0, import_chunk_bzyb60p0.Crt)(t) || (0, import_chunk_bzyb60p0.rIn)(t).isSad) return;
  let n = (0, import_chunk_jv7av99m.D)(t);
  (0, import_chunk_k449cc64.i)("telemetryMessage" in n ? n : (0, import_chunk_jv7av99m.Ye)(n, `mcp server tool '${e.name}' threw`));
}
function nFo(e, t, n, o) {
  try {
    let r = Y(e, t, o);
    for (let [a, { output: y, ...d }] of r.entries()) try {
      let s = (0, import_chunk_g49rrdp1.oFo)(`${e.name} ran. Its output is in this answer's structured content.`, y, false, n);
      if (Buffer.byteLength((0, import_chunk_w578pjby._)(s), "utf8") <= import_chunk_tt4yhkc0.MPo) return { ...d, result: s, answer: "output", ...N(e, t) && { wasOutputCut: true } };
    } catch (s) {
      if (a === r.length - 1) throw s;
      A(e, s, " in one form, so a smaller one is tried");
    }
    return j(e, "result_too_large", n);
  } catch (r) {
    return A(e, r, ""), j(e, "result_unbuildable", n);
  }
}
function A(e, t, n) {
  (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(t), `mcp server tool '${e.name}' output could not be encoded${n}`));
}
function Y(e, t, n) {
  if (e.name === import_chunk_rb36kwbn.Dt && (0, import_chunk_0jve1fep.Le)(t)) return b(t, [{ output: L(e, t) }]);
  if (e.name !== import_chunk_rb36kwbn.lt || !(0, import_chunk_0jve1fep.Le)(t)) return [{ output: L(e, t) }];
  let o = { ...t, originalFile: null };
  if (typeof t.originalFile !== "string" || n === void 0) return b(t, [{ output: o }]);
  if (n.isSubagent) return b(t, [{ output: o, originalFileLeftOutReason: "for_subagent" }]);
  if (n.sessionVersion < import_chunk_46fskppy.D2e.editOriginalFile) return b(t, [{ output: o, originalFileLeftOutReason: "older_session" }]);
  let r = Buffer.byteLength(t.originalFile, "utf8");
  return b(t, r > import_chunk_yzcgh8yd.fQs || r > C && !n.asksForLongOriginalFile ? [{ output: o, originalFileLeftOutReason: r > import_chunk_yzcgh8yd.fQs ? "over_limit" : "not_asked" }] : [{ output: t }, { output: o, originalFileLeftOutReason: "answer_too_large" }]);
}
function b(e, t) {
  let n = e.gitDiff === void 0 ? [] : t.map((o) => ({ ...o, output: M(o.output, { gitDiff: void 0 }), diffLeftOut: "git_diff" }));
  return [...t, ...n, { ...t.at(-1), output: { ...e, gitDiff: void 0, structuredPatch: [], originalFile: null }, diffLeftOut: "all" }];
}
function L(e, t) {
  if (N(e, t)) {
    let n = t.persistedOutputSize, o = typeof n === "number" ? `the command printed ${(0, import_chunk_7e12xj51.dn)(n)}; ` : "", r = typeof n === "number" && n >= import_chunk_4f4ysf31.o4 ? `The first ${(0, import_chunk_7e12xj51.dn)(import_chunk_4f4ysf31.o4)} of the command's output are` : "The command's whole output is", a = `(output truncated: ${o}only the start was returned, and a saved copy of this result holds only that start. ${r} in the file ${t.persistedOutputPath}. If the file is gone, run the command again with ${(0, import_chunk_5nbqcb4c.tMt)(e.name)}, if that is safe.)
`, y = (0, import_chunk_trwykz8a.Sd)(t.stdout), d = Math.max((0, import_chunk_c1hnv4fm.GW)(), import_chunk_tt4yhkc0.HPo) - a.length - (0, import_chunk_trwykz8a.Lf)(y, "").length, s = (0, import_chunk_7cfjrnwy.ee)(t.stdout, d);
    return { ...t, stdout: `${a}${(0, import_chunk_trwykz8a.Lf)(y, s)}${s}` };
  }
  switch (e.name) {
    case import_chunk_rb36kwbn.Dt:
      return e.stripForStorage?.(t) ?? t;
    case import_chunk_rb36kwbn.Ks:
      return M(t, { original_file: "", updated_file: "" });
    default:
      return t;
  }
}
function N(e, t) {
  return e.name === import_chunk_hn3cwwzt.ke && (0, import_chunk_0jve1fep.Le)(t) && typeof t.stdout === "string" && typeof t.persistedOutputPath === "string" && t.persistedOutputPath !== "" && t.isImage !== true;
}
function M(e, t) {
  return (0, import_chunk_0jve1fep.Le)(e) ? { ...e, ...t } : e;
}
function j(e, t, n) {
  return { result: rFo(`${e.name} ran, but its result could not be sent back. Check what it changed before running it again.`, n), unsent: t };
}
function rFo(e, t) {
  return (0, import_chunk_syr33dp2.y4)({ envelope: { v: import_chunk_syr33dp2.Zm, outcome: "failed", target: (0, import_chunk_g49rrdp1.TSn)(), code: "internal_error", message: e, ...t.length > 0 && { notes: t } }, content: e });
}
function M3t(e, t, n) {
  let o = (0, import_chunk_865at33z.ng)(e);
  return (0, import_chunk_syr33dp2.y4)({ envelope: { v: import_chunk_syr33dp2.Zm, outcome: "completed", target: (0, import_chunk_g49rrdp1.TSn)(), is_error: true, content: o, disposition: t, ...n.length > 0 && { notes: n } }, content: o });
}
