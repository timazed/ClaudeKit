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
var chunk_5kcnntmv_exports = {};
__export(chunk_5kcnntmv_exports, {
  JFr: () => JFr,
  _ua: () => _ua,
  b5n: () => b5n,
  f1s: () => f1s,
  gua: () => gua,
  hua: () => hua,
  uSn: () => uSn,
  yua: () => yua
});
module.exports = __toCommonJS(chunk_5kcnntmv_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_rnm2beqc = require("/$bunfs/root/chunk-rnm2beqc.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var v = ["manifest_invalid", "disabled_by_default", "identity_unverified", "archive_not_probed", "will_not_load"];
function JFr(t) {
  let { approved: e, refused: r } = t;
  return [...r.length > 0 ? [`A plugin's permission hook tried to allow ${r.length} ${(0, import_chunk_7cfjrnwy.O)(r.length, "call")} that a deny rule blocks or that could not be checked against the deny rules, and the eval refused ${(0, import_chunk_7cfjrnwy.O)(r.length, "it", "them")}: ${f(r)}`] : [], ...e.length > 0 ? [`A plugin's permission hook approved ${e.length} ${(0, import_chunk_7cfjrnwy.O)(e.length, "call")} that would not otherwise have run: ${f(e)}`] : []];
}
function f(t) {
  let e = /* @__PURE__ */ new Map();
  for (let r of t) e.set(r, (e.get(r) ?? 0) + 1);
  return Array.from(e, ([r, o]) => (0, import_chunk_kx2fp6pc.Yn)(o > 1 ? `${r} \xD7${o}` : r)).join(", ");
}
function hua(t) {
  let e = 0, r = 0;
  for (let o of t) {
    if (o.with_only) continue;
    if (r += o.weight, o.passed) e += o.weight;
  }
  return r > 0 ? e / r : 0;
}
function f1s(t) {
  if (t.length === 0) return { score: 0, passRate: 0 };
  let e = t.reduce((o, u) => o + u.score, 0) / t.length, r = (0, import_chunk_4smdap7r.U)(t, (o) => o.score >= 1) / t.length;
  return { score: e, passRate: r };
}
function gua(t) {
  let e = [], r = t.cases.map((n) => ({ ...n, name: (0, import_chunk_kx2fp6pc.Yn)(n.name) })), o = Math.max(4, ...r.map((n) => (0, import_chunk_mgh1y10w.oe)(n.name))), u = t.cases.some((n) => n.runs_without !== void 0);
  if (u) e.push(a("CASE", o) + "  " + a("WITH", 6) + a("W/OUT", 6) + a("\u0394", 7) + a("RUNS", 5) + a("COST", 8) + "NOTES");
  else e.push(a("CASE", o) + "  " + a("SCORE", 6) + a("PASS%", 6) + a("RUNS", 5) + a("COST", 8) + "NOTES");
  for (let n of r) {
    let c = n.runs.length + (n.runs_without?.length ?? 0), g = n.runs.reduce((l, i) => l + i.cost_usd, 0) + (n.runs_without?.reduce((l, i) => l + i.cost_usd, 0) ?? 0), p = E(n);
    if (u) {
      let { score_without: l, delta: i } = n;
      e.push(a(n.name, o) + "  " + a(n.score.toFixed(2), 6) + a(l !== void 0 ? l.toFixed(2) : "\u2014", 6) + a(i !== void 0 ? R(i) : "\u2014", 7) + a(String(c), 5) + a(`$${g.toFixed(2)}`, 8) + (p ?? ""));
    } else e.push(a(n.name, o) + "  " + a(n.score.toFixed(2), 6) + a(`${Math.round(n.pass_rate * 100)}%`, 6) + a(String(n.runs.length), 5) + a(`$${g.toFixed(2)}`, 8) + (p ?? ""));
  }
  e.push("");
  let d = t.partial ? ` \xB7 \u26A0 partial (${k[t.partial_reason ?? "interrupted"]})` : "";
  if (u) {
    let n = t.cases.filter((c) => c.delta !== void 0);
    if (n.length > 0) {
      let c = n.reduce((g, p) => g + (p.delta ?? 0), 0) / n.length;
      return e.push(`${t.cases.length} case(s) \xB7 mean \u0394 ${R(c)} \xB7 ${t.duration_seconds}s \xB7 $${t.cost_usd.toFixed(2)}${d}`), e.join(`
`);
    }
  }
  return e.push(`${t.cases.length} case(s) \xB7 ${t.duration_seconds}s \xB7 $${t.cost_usd.toFixed(2)}${d}`), e.join(`
`);
}
function R(t) {
  return `${t > 0 ? "+" : ""}${t.toFixed(2)}`;
}
function E(t) {
  let e = null;
  for (let r of t.runs) {
    for (let o of r.graders) if (!o.passed && (!e || o.weight > e.weight)) e = o;
    if (r.error) return (0, import_chunk_kx2fp6pc.Yn)(r.error);
  }
  if (e !== null) {
    let r = e.name, o = t.advisories?.find((d) => d.grader === r), u = t.runs.some((d) => d.graders.some((n) => n.name === r && n.passed));
    if (o !== void 0 && !u) return (0, import_chunk_kx2fp6pc.Yn)(o.text);
  }
  return e ? (0, import_chunk_kx2fp6pc.Yn)(`${e.name}: ${e.explanation}`) : null;
}
function a(t, e) {
  let r = (0, import_chunk_mgh1y10w.oe)(t);
  return r > e ? `${t} ` : t + (0, import_chunk_7cfjrnwy.xd)(" ", e - r);
}
function b5n(t, e, r, o, u, d) {
  let n = t.reduce((c, { report: g }) => c + g.runs.reduce((p, l) => p + l.cost_usd, 0) + (g.runs_without?.reduce((p, l) => p + l.cost_usd, 0) ?? 0), 0);
  return { schema_version: "1.0", claude_version: o, started_at: e.toISOString(), duration_seconds: Math.round((Date.now() - e.getTime()) / 1e3), cost_usd: n, partial: r !== void 0, partial_reason: r, concurrency: d, plugins: u, cases: t.map((c) => c.report) };
}
var k = { interrupted: "interrupted", cost_ceiling: "cost ceiling hit", auth_failed: "stopped: authentication failed" };
var S = 1;
function y() {
  return (0, import_chunk_rnm2beqc.on)({ score: (0, import_chunk_rnm2beqc.nr)(), passed: (0, import_chunk_rnm2beqc.Ci)(), turns: (0, import_chunk_rnm2beqc.nr)(), costUsd: (0, import_chunk_rnm2beqc.nr)(), judgeCostUsd: (0, import_chunk_rnm2beqc.nr)(), durationSeconds: (0, import_chunk_rnm2beqc.nr)().optional(), startedAt: (0, import_chunk_rnm2beqc.we)().optional(), error: (0, import_chunk_rnm2beqc.we)().nullable(), tracePath: (0, import_chunk_rnm2beqc.we)(), skippedPaidGraders: (0, import_chunk_rnm2beqc.Ci)(), aborted: (0, import_chunk_rnm2beqc.on)({ server: (0, import_chunk_rnm2beqc.we)(), tool: (0, import_chunk_rnm2beqc.we)(), reason: (0, import_chunk_rnm2beqc.we)() }).optional(), pluginHookApprovals: (0, import_chunk_rnm2beqc.on)({ approved: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)()), refused: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)()) }).optional(), mocks: (0, import_chunk_rnm2beqc.on)({ servers: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.on)({ server: (0, import_chunk_rnm2beqc.we)(), kind: (0, import_chunk_rnm2beqc.df)(["shadow", "standalone"]), withheld: (0, import_chunk_rnm2beqc.Cg)(true).optional(), replayPinned: (0, import_chunk_rnm2beqc.nr)().optional(), tools: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.on)({ tool: (0, import_chunk_rnm2beqc.we)(), responder: (0, import_chunk_rnm2beqc.df)(["fixed", "agent"]) })) })), warnings: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)()), calls: (0, import_chunk_rnm2beqc.on)({ total: (0, import_chunk_rnm2beqc.nr)(), errors: (0, import_chunk_rnm2beqc.nr)(), unmocked: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.on)({ tool: (0, import_chunk_rnm2beqc.we)(), count: (0, import_chunk_rnm2beqc.nr)() })), costUsd: (0, import_chunk_rnm2beqc.nr)().optional(), replay: (0, import_chunk_rnm2beqc.on)({ hits: (0, import_chunk_rnm2beqc.nr)(), misses: (0, import_chunk_rnm2beqc.nr)() }).optional() }) }).optional(), graders: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.on)({ name: (0, import_chunk_rnm2beqc.we)(), passed: (0, import_chunk_rnm2beqc.Ci)(), weight: (0, import_chunk_rnm2beqc.nr)(), explanation: (0, import_chunk_rnm2beqc.we)(), withOnly: (0, import_chunk_rnm2beqc.Ci)(), scored: (0, import_chunk_rnm2beqc.Ci)().optional(), judgeVotes: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.Ci)()).optional(), evidence: (0, import_chunk_rnm2beqc.we)().optional() })) });
}
function A() {
  return (0, import_chunk_rnm2beqc.on)({ name: (0, import_chunk_rnm2beqc.we)(), dir: (0, import_chunk_rnm2beqc.we)(), source: (0, import_chunk_rnm2beqc.we)(), promptMarkdown: (0, import_chunk_rnm2beqc.we)(), model: (0, import_chunk_rnm2beqc.we)().optional(), runsPerCase: (0, import_chunk_rnm2beqc.nr)(), timeoutSeconds: (0, import_chunk_rnm2beqc.nr)(), maxTurns: (0, import_chunk_rnm2beqc.nr)(), graders: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.on)({ name: (0, import_chunk_rnm2beqc.we)(), type: (0, import_chunk_rnm2beqc.we)(), weight: (0, import_chunk_rnm2beqc.nr)(), graderMarkdown: (0, import_chunk_rnm2beqc.we)().optional(), config: (0, import_chunk_rnm2beqc.mk)((0, import_chunk_rnm2beqc.we)(), (0, import_chunk_rnm2beqc.vf)()) })), arms: (0, import_chunk_rnm2beqc.on)({ with: (0, import_chunk_rnm2beqc._o)(y()), without: (0, import_chunk_rnm2beqc._o)(y()).optional() }), advisories: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)()).optional(), aggregates: (0, import_chunk_rnm2beqc.on)({ score: (0, import_chunk_rnm2beqc.nr)(), passRate: (0, import_chunk_rnm2beqc.nr)(), scoreWithout: (0, import_chunk_rnm2beqc.nr)().optional(), passRateWithout: (0, import_chunk_rnm2beqc.nr)().optional(), delta: (0, import_chunk_rnm2beqc.nr)().optional() }) });
}
function _ua() {
  return j((0, import_chunk_rnm2beqc.df)(v).optional());
}
function j(t) {
  return (0, import_chunk_rnm2beqc.on)({ schemaVersion: (0, import_chunk_rnm2beqc.Cg)(S), claudeVersion: (0, import_chunk_rnm2beqc.we)(), startedAt: (0, import_chunk_rnm2beqc.we)(), durationSeconds: (0, import_chunk_rnm2beqc.nr)(), costUsd: (0, import_chunk_rnm2beqc.nr)(), partial: (0, import_chunk_rnm2beqc.Ci)(), partialReason: (0, import_chunk_rnm2beqc.df)(["cost_ceiling", "interrupted", "auth_failed"]).optional(), suite: (0, import_chunk_rnm2beqc.on)({ root: (0, import_chunk_rnm2beqc.we)(), ablation: (0, import_chunk_rnm2beqc.df)(["none", "with-without"]), modelOverride: (0, import_chunk_rnm2beqc.we)().optional(), judgeModel: (0, import_chunk_rnm2beqc.we)().optional(), caseFilter: (0, import_chunk_rnm2beqc.we)().optional(), tagFilters: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)()).optional(), threshold: (0, import_chunk_rnm2beqc.nr)(), concurrency: (0, import_chunk_rnm2beqc.nr)().int().positive().optional(), pluginId: (0, import_chunk_rnm2beqc.we)().optional(), plugins: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.on)({ name: (0, import_chunk_rnm2beqc.we)(), version: (0, import_chunk_rnm2beqc.we)().optional(), path: (0, import_chunk_rnm2beqc.we)(), problem: t })) }), cases: (0, import_chunk_rnm2beqc._o)(A()), aggregates: (0, import_chunk_rnm2beqc.on)({ casesTotal: (0, import_chunk_rnm2beqc.nr)(), casesPassed: (0, import_chunk_rnm2beqc.nr)(), overallScore: (0, import_chunk_rnm2beqc.nr)(), overallPassRate: (0, import_chunk_rnm2beqc.nr)(), meanDelta: (0, import_chunk_rnm2beqc.nr)().optional(), pluginHookApprovalRuns: (0, import_chunk_rnm2beqc.on)({ approved: (0, import_chunk_rnm2beqc.nr)(), refused: (0, import_chunk_rnm2beqc.nr)() }).optional() }) });
}
var C = ["ablation", "aborted", "advisories", "aggregates", "approved", "arms", "calls", "caseFilter", "cases", "casesPassed", "casesTotal", "claudeVersion", "concurrency", "config", "costUsd", "count", "delta", "dir", "durationSeconds", "error", "errors", "evidence", "explanation", "graderMarkdown", "graders", "hits", "judgeCostUsd", "judgeModel", "judgeVotes", "kind", "maxTurns", "meanDelta", "misses", "mocks", "model", "modelOverride", "name", "overallPassRate", "overallScore", "partial", "partialReason", "passRate", "passRateWithout", "passed", "path", "pluginHookApprovalRuns", "pluginHookApprovals", "pluginId", "plugins", "problem", "promptMarkdown", "reason", "refused", "replay", "replayPinned", "responder", "root", "runsPerCase", "schemaVersion", "score", "scoreWithout", "scored", "server", "servers", "skippedPaidGraders", "source", "startedAt", "suite", "tagFilters", "threshold", "timeoutSeconds", "tool", "tools", "total", "tracePath", "turns", "type", "unmocked", "version", "warnings", "weight", "with", "withOnly", "withheld", "without"], P = ["config"], z = (0, import_chunk_0jve1fep.qHo)(C), Y = new Set(P);
function w(t) {
  return { score: t.score, passed: t.score >= 1, turns: t.turns, costUsd: t.cost_usd, judgeCostUsd: t.judge_cost_usd, durationSeconds: t.duration_seconds, startedAt: t.started_at, error: t.error, tracePath: t.trace_path, skippedPaidGraders: t.skipped_paid_graders ?? false, ...t.aborted && { aborted: t.aborted }, ...t.plugin_hook_approvals && { pluginHookApprovals: t.plugin_hook_approvals }, ...t.mocks && { mocks: t.mocks }, graders: t.graders.map((e) => ({ name: e.name, passed: e.passed, weight: e.weight, explanation: e.explanation, withOnly: e.with_only ?? false, scored: e.scored ?? !(e.with_only ?? false), judgeVotes: e.judge_votes, evidence: e.evidence })) };
}
function T(t, e) {
  return { name: e.name, dir: e.dir, source: e.source, promptMarkdown: t.execution.prompt ?? "", model: t.execution.model, runsPerCase: t.runs, timeoutSeconds: t.execution.timeout_seconds, maxTurns: t.execution.max_turns, graders: t.graders.map((r) => {
    let { name: o, type: u, weight: d, ...n } = r;
    return { name: o, type: u, weight: d, graderMarkdown: r.type === "llm" || r.type === "baseline" ? r.criteria : void 0, config: n };
  }), arms: { with: e.runs.map(w), without: e.runs_without?.map(w) }, ...e.advisories && { advisories: e.advisories.map((r) => r.text) }, aggregates: { score: e.score, passRate: e.pass_rate, scoreWithout: e.score_without, passRateWithout: e.pass_rate_without, delta: e.delta } };
}
function yua(t) {
  let { aggregate: e, resolvedCases: r, root: o, ablation: u, pluginId: d, modelOverride: n, judgeModel: c, caseFilter: g, tagFilters: p, threshold: l } = t, i = r.map(({ case_: s, report: m }) => T(s, m)), b = i.map((s) => s.aggregates.delta).filter((s) => s !== void 0), h = i.flatMap((s) => s.arms.with.concat(s.arms.without ?? [])).flatMap((s) => s.pluginHookApprovals ?? []);
  return { schemaVersion: S, claudeVersion: e.claude_version, startedAt: e.started_at, durationSeconds: e.duration_seconds, costUsd: e.cost_usd, partial: e.partial, partialReason: e.partial_reason, suite: { root: o, ablation: u, pluginId: d, modelOverride: n, judgeModel: c, caseFilter: g, tagFilters: p, threshold: l, concurrency: e.concurrency, plugins: e.plugins.map(({ name: s, version: m, path: x, problem: _ }) => ({ name: s, ...m !== void 0 && { version: m }, path: x, ..._ !== void 0 && { problem: _ } })) }, cases: i, aggregates: { casesTotal: i.length, casesPassed: (0, import_chunk_4smdap7r.U)(i, (s) => s.aggregates.score >= l), overallScore: uSn(i.map((s) => s.aggregates.score)), overallPassRate: uSn(i.map((s) => s.aggregates.passRate)), meanDelta: b.length > 0 ? uSn(b) : void 0, ...h.length > 0 && { pluginHookApprovalRuns: { approved: (0, import_chunk_4smdap7r.U)(h, (s) => s.approved.length > 0), refused: (0, import_chunk_4smdap7r.U)(h, (s) => s.refused.length > 0) } } } };
}
function uSn(t) {
  return t.length === 0 ? 0 : t.reduce((e, r) => e + r, 0) / t.length;
}
