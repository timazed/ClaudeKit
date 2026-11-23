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
var chunk_weavzzv1_exports = {};
__export(chunk_weavzzv1_exports, {
  Qge: () => Qge,
  TNo: () => TNo,
  XFr: () => XFr,
  c1s: () => c1s,
  d1s: () => d1s,
  l1s: () => l1s,
  mua: () => mua,
  pua: () => pua,
  u1s: () => u1s
});
module.exports = __toCommonJS(chunk_weavzzv1_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_dkc86g0t = require("/$bunfs/root/chunk-dkc86g0t.js");
var import_chunk_66srb2mf = require("/$bunfs/root/chunk-66srb2mf.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_promises = require("fs/promises");
(0, import_chunk_adx6804h.B)();
var O = 1e5, M = /[^\s'"`<>]+/g, F = new RegExp(`(?![\\n\\t\\u200c\\u200d\\ufe0f])[\\p{Cc}\\p{Cf}${import_chunk_kx2fp6pc.byn}]`, "gu"), pua = 3, z = (0, import_chunk_2cbgkbm2.p)(() => {
  let t = (0, import_chunk_adx6804h.n)().transform(H).optional().catch(void 0), e = (0, import_chunk_adx6804h.E)().optional().catch(void 0);
  return (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ file_path: t, start_line: e, end_line: e, severity: t, pr_comment: t, reasoning: t }));
});
function Qge(t, e) {
  let o = t.slice(0, O);
  return (0, import_chunk_tp3c5q2s.Ft)(XFr(t.length <= O ? t : o.slice(0, Math.max(o.lastIndexOf(" "), o.lastIndexOf(`
`)) + 1)), e);
}
function XFr(t) {
  return TNo((0, import_chunk_tp3c5q2s.Xb)(TNo(t)));
}
function b(t) {
  return z().safeParse((0, import_chunk_0jve1fep.et)(t, false)).data ?? null;
}
function l1s(t, e) {
  return (0, import_chunk_q7qjcthc.yr)(t, `${(0, import_chunk_w578pjby._)(e, null, 2)}
`, 384);
}
function H(t) {
  return (0, import_chunk_tp3c5q2s.XJe)((0, import_chunk_7cfjrnwy.qy)(t)).replace(/\r\n?|[\x85\u2028\u2029]/g, `
`).replace(F, "");
}
function TNo(t) {
  return (0, import_chunk_sah8dzn4.As)((0, import_chunk_sah8dzn4.ag)(t).replace(M, V)).replaceAll("://[REDACTED]@", "://");
}
function V(t) {
  let e = t.replace(/^\/\//, ""), o = /^\\|(?:^|\W)[A-Za-z]:\\/.test(e) ? e.indexOf("\\") : e.indexOf("/"), s = o === -1 ? e : e.slice(0, o), d = Math.max(s.lastIndexOf("@"), [...s.matchAll(/%(?:25)*40/g)].at(-1)?.index ?? -1), m = [...s.slice(0, Math.max(d, 0)).matchAll(/:|%(?:25)*3a/gi)].at(-1)?.index ?? -1;
  return m === -1 || s[m + 1] === "@" || /\bmailto$/i.test(s.slice(0, m)) || s.startsWith("@sha256:", d) ? t : `\u2026${e.slice(d)}`;
}
var G = 10, k = 67108864, L = 1e3, j = 2e3, d1s = "This command stopped waiting.", c1s = "Ultrareview could not launch:", u1s = "The local process for this review ended without saying why. If the review had already launched, it may be billed.";
async function mua(t, e, o, s, d, m) {
  let { cmd: S, prefixArgs: D } = (0, import_chunk_66srb2mf.Vf)({ pinToCurrentBinary: true }), A = (0, import_chunk_sjqze7qg.Eot)(), U = Date.now(), x = (0, import_chunk_7fsmgfxx.ut)(S, [...D, "ultrareview", e, "--no-post", "--trust-workspace", "--json", "--timeout", String(A)], { cwd: t, env: { ...(0, import_chunk_gd77dyw4.ms)(void 0, { userLocale: true }), ...import_chunk_dkc86g0t.IWe, CLAUDE_CODE_ULTRAREVIEW_LAUNCH_RECORD: o, CLAUDE_CODE_ULTRAREVIEW_PR_AS_MERGED: "1", CLAUDE_CODE_ULTRAREVIEW_REVIEW_MD_FILE: m ?? void 0, CLAUDECODE: void 0 }, abortSignal: s, timeout: (A + G) * 60 * 1e3, preserveOutputOnError: true, maxBuffer: k, stdin: "ignore", toolCgroupClass: "agent", waitForExitAfterKill: true }), h = new AbortController();
  x.finally(() => h.abort());
  let i = null, v = false;
  while (i === null && !v) if (v = h.signal.aborted, i = Qge(await (0, import_promises.readFile)(o, "utf8").catch(() => "")) || null, i === null && !v) await (0, import_chunk_5appeerh.K)(j, h.signal);
  if (i !== null) d(i);
  let { stdout: I, stderr: N, exitCode: l, timedOut: W } = await x, T = b(I);
  if (T !== null) return { session_id: i, minutes: Math.max(1, Math.ceil((Date.now() - U) / 6e4)), findings: T, outcome: "reviewed", outcome_detail: "" };
  let w = i === null ? "" : ` Its session id, for tracing it or its bill, is ${i}.`, f = i === null ? " If the review had already launched, it may be billed." : ` The review may still be running in the cloud, and may be billed.${w}`, a = { session_id: i, minutes: null, findings: [] };
  if (s.aborted) return { ...a, outcome: "pending", outcome_detail: `The run was stopped.${f}` };
  if (W) return { ...a, outcome: "timed_out", outcome_detail: `No result came in time.${f}` };
  let y = (0, import_chunk_wbk1hf21.Dr)(N).trimEnd().split(`
`), u = y.slice(y.findLastIndex((r) => r.startsWith("Ultrareview ")));
  if (u.some((r) => r.startsWith(d1s))) return { ...a, outcome: "timed_out", outcome_detail: `${Qge(u[0] ?? "", L).replace(/\.$/, "")}.${f}` };
  let R = (0, import_chunk_bzyb60p0.ilr)(I)?.error, g = Qge(R ?? u.map((r, P) => P < u.length - 1 && /[\p{L}\p{N})]$/u.test(r) ? `${r}.` : r).join(" "), L);
  if (i !== null || R !== void 0) {
    let r = g !== "" && (R !== void 0 || l !== void 0 && l <= 128 && u[0]?.startsWith("Ultrareview ") === true);
    return { ...a, outcome: r || l === 0 || i === null ? "failed" : "timed_out", outcome_detail: r ? `${g.replace(/\.$/, "")}. The review may still be billed.${w}` : l === 0 ? `The review ended, but it gave no list of findings. It may still be billed.${w}` : `The local process for this review ended without saying why.${f}` };
  }
  return l !== void 0 && u[0]?.startsWith(c1s) ? { ...a, outcome: "not_started", outcome_detail: g } : { ...a, outcome: "failed", outcome_detail: l !== void 0 && g !== "" ? `${g.replace(/\.$/, "")}.${f}` : u1s };
}
