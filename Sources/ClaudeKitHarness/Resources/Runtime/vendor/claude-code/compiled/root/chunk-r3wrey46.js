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
var chunk_r3wrey46_exports = {};
__export(chunk_r3wrey46_exports, {
  $Qa: () => $Qa,
  BQa: () => BQa,
  GQa: () => GQa,
  Gas: () => Gas,
  Lne: () => Lne,
  Sao: () => Sao,
  Sh: () => Sh,
  UQa: () => UQa,
  VQa: () => VQa,
  WQa: () => WQa,
  Was: () => Was,
  bao: () => bao,
  cki: () => cki,
  dki: () => dki,
  jQa: () => jQa,
  jas: () => jas,
  oS: () => oS,
  uki: () => uki,
  wao: () => wao,
  zQa: () => zQa
});
module.exports = __toCommonJS(chunk_r3wrey46_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_rnm2beqc = require("/$bunfs/root/chunk-rnm2beqc.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var Was = "Claude Code can't use your Claude subscription, usually because a payment is past due \xB7 Pay or renew at https://claude.ai/settings/billing (if you just paid, try again shortly), or use an Anthropic API key instead", jas = `Claude Code can't use the Anthropic Console sign-in saved on this computer, usually because it isn't for a Console account \xB7 Run /login and select "Claude account with subscription", or set up a Console account at https://platform.claude.com and run /login again, or use an Anthropic API key instead`, Gas = "Claude Code can't use the Anthropic Console sign-in saved on this computer, usually because it isn't for a Console account \xB7 Run /login and sign in with a Console account \xB7 To get one, go to https://platform.claude.com or ask your administrator";
var q = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ state: (0, import_chunk_rnm2beqc.we)().nullish(), detail: (0, import_chunk_rnm2beqc.we)().nullish(), tempo: (0, import_chunk_rnm2beqc.we)().nullish(), needs: (0, import_chunk_rnm2beqc.we)().nullish(), output: (0, import_chunk_rnm2beqc.mk)((0, import_chunk_rnm2beqc.we)(), (0, import_chunk_rnm2beqc.vf)()).nullish() })), W = { working: "actively progressing on the task \u2014 narrating plans, calling tools, or writing code; no pending question for the user", blocked: 'the last message ends on a direct question or explicit request for the user ("want me to\u2026?", "which do you prefer?", "approve this?", "needs input: \u2026") \u2014 nothing will happen until the user replies', done: 'the task the user asked for is fully delivered and there is no further work the agent plans to do \u2014 not just a progress update, not "almost done", not "let me know what you think"', failed: "the agent has given up or hit something unrecoverable \u2014 missing credential, broken build it cannot fix, wrong repo, task impossible as framed; distinct from blocked (user can unblock) and done (succeeded)" }, B = { result: "one short sentence naming the finished deliverable \u2014 no sub-clauses or bullet summaries" }, oS = 800, $Qa = 2e3, H = /* @__PURE__ */ new Set(["done", "failed", "stopped"]);
function Sh(e, n) {
  if (e.length <= n) return e;
  let t = n - 1, s = e.charCodeAt(t - 1);
  if (s >= 55296 && s <= 56319) t--;
  return e.slice(0, t) + "\u2026";
}
function f(e, n) {
  return P(e, n) !== null;
}
function P(e, n) {
  let t = null, s = 0, i = 0, o = e.indexOf("```"), l = e.indexOf("~~~");
  while (i < n) {
    if (o !== -1 && o < i) o = e.indexOf("```", i);
    if (l !== -1 && l < i) l = e.indexOf("~~~", i);
    let c = o === -1 ? l : l === -1 ? o : Math.min(o, l);
    if (c === -1 || c >= n) break;
    let u = e[c], r = c - 1, h = 0;
    while (r >= 0 && e[r] === " " && h < 3) r--, h++;
    let b = r < 0 || e[r] === `
`, d = 3;
    i = c + 3;
    while (e[i] === u) i++, d++;
    if (!b) continue;
    if (t === null) t = u, s = d;
    else if (t === u && d >= s) t = null, s = 0;
  }
  return t === null ? null : { marker: t, length: s };
}
function dki(e) {
  let n = P(e, e.length);
  return n === null ? "" : n.marker.repeat(n.length) + `
`;
}
var cki = "organization verification required \u2014 see detail";
function UQa(e, n = "", t) {
  if (t === "dlp_request_denied" || t === "safety_monitor_blocked") return { state: "failed", needs: "API error" };
  if (t === "oauth_refresh_store_refused") return { state: "blocked", needs: "login can't be saved \u2014 see detail" };
  if (t === "stored_login_refused" || t === "named_profile_unusable") return { state: "blocked", needs: "sign-in not available \u2014 see detail" };
  if (t === "network_edge_blocked") return { state: "blocked", needs: "network or region blocked \u2014 check VPN or network" };
  switch (e) {
    case "authentication_failed":
      return { state: "blocked", needs: "login required \u2014 run /login" };
    case "oauth_org_not_allowed":
      if (n === jas) return { state: "blocked", needs: "can't use Anthropic Console sign-in \u2014 run /login or use API key" };
      if (n === Gas) return { state: "blocked", needs: "can't use Anthropic Console sign-in \u2014 run /login" };
      return n === Was ? { state: "blocked", needs: "can't use subscription \u2014 pay or renew, or use API key" } : { state: "blocked", needs: "org disabled OAuth \u2014 use API key or ask admin" };
    case "account_on_hold":
      return { state: "blocked", needs: "account on hold \u2014 see detail" };
    case "cloud_credential_error":
      return { state: "blocked", needs: "cloud credentials unavailable \u2014 check or refresh them" };
    case "verification_required":
      return { state: "blocked", needs: cki };
    case "billing_error":
      return { state: "blocked", needs: "usage limit reached \u2014 check plan" };
    case "rate_limit":
      return { state: "blocked", needs: "rate limited \u2014 wait and retry" };
    case "overloaded":
      return { state: "blocked", needs: "API overloaded \u2014 wait and retry" };
    case "server_error":
      return { state: "blocked", needs: "API unavailable \u2014 retry" };
    case "invalid_request":
      return /\b(too long|too large|exceeds|token limit|prompt is too long)\b/i.test(n) ? { state: "blocked", needs: "request too large \u2014 /compact or trim" } : { state: "blocked", needs: "invalid API request \u2014 see detail" };
    case "max_output_tokens":
      return null;
    case void 0:
      return { state: "blocked", needs: "API error \u2014 see detail" };
    case "unknown":
    default:
      return { state: "failed", needs: "API error" };
  }
}
var K = /(?:^|\n)\s*failed\s*[:\u2014\u2013-]\s*(.{3,200}?)(?=\n|$)/gi, V = /(?:^|\n)\s*needs input\s*[:\u2014\u2013-]\s*(.{3,200}?)(?=\n|$)/gi, z = /(?:^|\n)\s*blocked\s*[:\u2014\u2013-]\s*(.{3,200}?)(?=\n|$)/gi, J = /\bI'?m blocked\s*[:\u2014\u2013-]\s*(.{3,200}?)(?=\n|$)/gi;
function Y(e, n, t) {
  let s;
  for (let [i, o] of [["failed", K], ["blocked", V], ["blocked", z], ["blocked", J]]) for (let l of n.matchAll(o)) {
    if (f(e, t + l.index)) continue;
    if (!s || l.index > s.index) s = { state: i, capture: l[1].trim(), index: l.index, end: l.index + l[0].length };
  }
  return s;
}
function BQa(e) {
  let n = e.trim();
  if (!n) return "empty";
  if (f(n, n.length)) return "code-fence";
  let t = n.slice(-800), s = n.length - t.length;
  for (let o of t.matchAll(/(?:^|\n)\s*result:\s*\S/gi)) if (!f(n, s + o.index)) return "result-line";
  for (let o of t.matchAll(/(?:^|\n)\s*failed:\s*\S/gi)) if (!f(n, s + o.index)) return "failed-line";
  if (/[?\uFF1F]\s*$/.test(n)) return "trailing-q";
  let i = n.slice(-200);
  if (/(?:^|\n)\s*(?:[-*\u2022]|\d+\.|[|])\s/.test(i)) return "list-or-table";
  return "declarative";
}
function Sao(e, { linkedThreads: n = false } = {}) {
  let t = e.trim();
  if (!t) return null;
  let s = t.slice(-800), i;
  for (let a of s.matchAll(/(?:^|\n)\s*result:\s*(.+?)\s*(?:\n|$)/gi)) if (!f(t, t.length - s.length + a.index)) i = a;
  let o = s, l = t.length - s.length;
  if (i) {
    let a = i.index + i[0].length;
    o = s.slice(a), l = t.length - s.length + a;
  }
  let c = Y(t, o, l);
  if (i && !c) {
    let a = Sh(i[1], oS);
    if ([...o.matchAll(/(?:^|\n)\s*next:\s*\S/gi)].some((R) => !f(t, l + R.index))) return { branch: "result-then-next", state: "working", tempo: "idle", detail: a, output: { result: a } };
    let _ = y(t, t.length - s.length + i.index, n);
    if (_?.kind === "stale") return null;
    if (_) return { branch: "result-approval-ask", state: "blocked", tempo: "blocked", needs: _.needs, detail: a };
    return { branch: "result-marker", state: "done", tempo: "idle", detail: a, output: { result: a } };
  }
  if (c?.state === "failed") return { branch: "failed-marker", state: "failed", tempo: "idle", detail: Sh(c.capture, oS), output: {} };
  if (c?.state === "blocked") {
    let a = o.slice(c.end);
    if ((0, import_chunk_4smdap7r.U)(a.split(/\n\s*\n/), (g) => g.trim().length > 0) >= 3) return null;
    if (!/\bnothing (?:needed|required) from you\b|\bno(?: user)? action (?:needed|required)\b/i.test(o)) {
      let g = Sh(c.capture, oS);
      return { branch: "blocked-marker", state: "blocked", tempo: "blocked", needs: g, detail: g };
    }
    if (i) {
      let g = Sh(i[1], oS);
      return { branch: "blocked-disclaimed", state: "done", tempo: "idle", detail: g, output: { result: g } };
    }
    return null;
  }
  if (/[?\uFF1F]\s*$/.test(s) && s.replace(/[?\uFF1F\s]+$/, "").length >= 4) {
    let a = Math.max(s.lastIndexOf(`
`), s.lastIndexOf(". "), s.lastIndexOf("! "), s.lastIndexOf("? ", s.length - 2));
    if (!f(t, t.length - s.length + a)) {
      let g = Sh(s.slice(a + 1).trim(), oS);
      if (w.test(g)) return null;
      return { branch: "trailing-q", state: "blocked", tempo: "blocked", needs: g, detail: g };
    }
  }
  let u = Math.max(0, s.lastIndexOf(". "), s.lastIndexOf("! "), s.lastIndexOf("? "), s.lastIndexOf(`
`)), r = s.slice(u).replace(/^[.!?\s]+/, ""), h = f(t, t.length - s.length + u), b = /\b(?:waiting (?:for|on)|pending)\s+(?:the\s+)?(?:CI|build|tests?|reviewer|deploy(?:ment)?|workflow|checks?|rollout|merge queue)\b/i.exec(r);
  if (b && !h) return { branch: "wait-external", state: "working", tempo: "idle", detail: Sh(b[0], oS), output: {} };
  let d = false;
  if (!h) for (let a of r.matchAll(de)) {
    let g = v(r, a), _ = L(r, a, g);
    if (_ === "not-an-ask") continue;
    if (_ === "defer") return null;
    if (n && F.test(g.after) || !he.test(g.before) && fe.test(g.after)) {
      d = true;
      continue;
    }
    let R = Sh(r.slice(a.index).trim(), oS);
    return { branch: "awaiting-user", state: "blocked", tempo: "blocked", needs: R, detail: R };
  }
  let x = /\b(please (?:run|provide|confirm|clarify|choose|let me know)|let me know (?:which|what|how|when)|which (?:option|approach|one)|should I (?:proceed|continue|use))\b/i.exec(r);
  if (x && !h) {
    let a = Sh(r.slice(x.index).trim(), oS);
    return { branch: "ask-verb", state: "blocked", tempo: "blocked", needs: a, detail: a };
  }
  if (!h && /\b(not logged in|please run \/login|authentication failed|invalid api key|oauth token (?:expired|revoked)|credit balance (?:is )?too low|usage limit reached|mcp (?:server )?(?:authentication|auth|authorization|unauthorized)|mcp (?:server )?(?:credential|token) (?:missing|expired|invalid)|401 unauthorized|403 forbidden|token (?:has )?expired|bad credentials|gh auth login|gcloud auth login|aws (?:sso )?login)\b/i.test(r)) return { branch: "auth-prose", state: "blocked", tempo: "blocked", needs: Sh(r, oS), detail: "authentication required" };
  let k = !h && !d;
  if (k && Q.test(r) && !Z.test(r)) return { branch: "working-verb", state: "working", tempo: "active", detail: Sh(r, oS), output: {} };
  if (k && ee.test(r)) return { branch: "agents-status", state: "working", tempo: "idle", detail: Sh(r, oS) };
  if (k && ne.test(r)) return { branch: "will-check-back", state: "working", tempo: "idle", detail: Sh(r, oS) };
  if (!h && se.test(r)) {
    let a = Sh(r, oS);
    return { branch: "cant-proceed", state: "blocked", tempo: "blocked", detail: a, needs: a };
  }
  if (k && ie.test(r)) return { branch: "giving-up", state: "failed", tempo: "idle", detail: Sh(r, oS) };
  if (k && re.test(r)) {
    let a = Sh(r, oS);
    return { branch: "pushed-committed", state: "done", tempo: "idle", detail: a, output: { result: a } };
  }
  if (k && oe.test(r)) return { branch: "ready-for", state: "done", tempo: "idle", detail: Sh(r, oS) };
  if (k && ae.test(r)) {
    let a = Sh(r, oS);
    return { branch: "verdict-marker", state: "done", tempo: "idle", detail: a, output: { result: a } };
  }
  if (!h && le.test(r)) {
    let a = Sh(r, oS);
    return { branch: "please-do-x", state: "blocked", tempo: "blocked", detail: a, needs: a };
  }
  if (!h && ce.test(r)) {
    let a = Sh(r, oS);
    return { branch: "stopping-here", state: "blocked", tempo: "blocked", detail: a, needs: a };
  }
  let A = y(t, t.length - s.length, n);
  if (A?.kind === "ask") return { branch: "leading-approval-ask", state: "blocked", tempo: "blocked", needs: A.needs, detail: A.needs };
  return null;
}
function y(e, n, t) {
  let s = new RegExp(ue);
  s.lastIndex = n;
  let i = false;
  for (let o of e.matchAll(s)) {
    if (f(e, o.index)) continue;
    let l = v(e, o), { before: c, after: u, end: r } = l;
    if (!(pe.test(c) || /^\s*(?:\*\*|\))?\s*$/.test(u) && (ge.test(c) || /^ready\b/i.test(o[0]) && !/\bas\s+$/i.test(c)))) continue;
    let b = L(e, o, l);
    if (b === "not-an-ask") continue;
    if (b === "defer") return;
    if (t && F.test(u)) {
      i = true;
      continue;
    }
    if (X(e, o.index)) {
      i = true;
      continue;
    }
    let d = e.slice(o.index, r).trim();
    if (d.endsWith("**") && d.split("**").length % 2 === 0) d = d.slice(0, -2);
    else if (d.endsWith(")") && (0, import_chunk_7cfjrnwy.Mt)(d, ")") > (0, import_chunk_7cfjrnwy.Mt)(d, "(")) d = d.slice(0, -1);
    return { kind: "ask", needs: Sh(d, oS) };
  }
  return i ? { kind: "stale" } : void 0;
}
function X(e, n) {
  let t = /\n[ \t]*\n/.exec(e.slice(n));
  if (!t) return false;
  let s = n + t.index + 1;
  for (let i of e.slice(s).split(`
`)) {
    let o = s;
    s += i.length + 1;
    let l = i.trim();
    if (l && !_e.test(l) && !f(e, o)) return true;
  }
  return false;
}
function v(e, n) {
  let t = e.slice(Math.max(0, n.index - 800), n.index), s = [...t.matchAll(be)], i = s.at(-1), o = s.at(-2), l = i ? t.slice(i.index + i[0].length) : t, c = i ? t.slice(o ? o.index + o[0].length : 0, i.index + 1) : "", u = n.index + n[0].length, r = me.exec(e.slice(u));
  return { before: l, previous: c, after: e.slice(u, r ? u + r.index : e.length), end: r ? u + r.index + r[0].length : e.length };
}
function L(e, n, { before: t, previous: s }) {
  let i = t.split(ke).at(-1) ?? t;
  if (Re.test(i) || Ae.test(i + n[0]) || Ee.test(t) || w.test(t) || /\?$/.test(s) && w.test(s)) return "not-an-ask";
  return Se.test(e.slice(n.index)) ? "defer" : "ask";
}
function uki(e) {
  let n = e.split(`
`).map((t) => t.trim()).findLast(Boolean);
  return { branch: "heuristic", state: "working", tempo: "idle", detail: n ? Sh(n, oS) : "\u2014" };
}
var w = /\b(?:want|like) me to\b|\b(?:shall|should) I also\b/i, Q = /^(?:(?:Now|Next|Then|Alright|OK|Okay|Right|Good|First|Also),?\s+)?(?:Let me (?!know\b)|(?:I(?:'?ll| will) |I'?m going to |Going to )(?!need\b|require\b|wait\b|leave\b|hold\b|skip\b|stop\b)|Proceeding |Moving (?:on|to)\b|Continuing |Starting |Trying |Checking |Looking |Searching |Reading |Investigating |Running |Re-?running |Building |Rebuilding |Installing |Fetching |Applying |Fixing |Patching |Updating |Adding |Removing |Deleting |Importing |Refactoring |Rewriting |Writing |Grepping |Scanning |Wrapping |Switching |Testing |Verifying |Regenerating |Pushing |Pulling |Reviewing |Examining |Loading |Compiling |Parsing |Analyzing |Tracing |Exploring )/i, Z = /\b(?:once |when |after |until |as soon as )(?:you|it|the|that|this|they)\b|\bagain in\b|\bcheck back\b|\bin ~?\d+\s*(?:s(?:ec(?:ond)?s?)?|m(?:in(?:ute)?s?)?|h(?:ours?|rs?)?)\b|\bthen\.?\s*$|\bwhichever you\b|\bhold(?:ing)? for your\b|\b(?:to|and) wait for\b|\bgive it (?:more |some )?time\b|\bif (?:you(?:'d| want| prefer| need|'re)?|that(?:'s| helps| works)?|useful|needed|helpful|desired)\b|\b(?:isn'?t|not|won'?t) going to work\b/i, ee = /^(?:(?:\*\*)?[1-9]\d* (?:agent|cron|task|fork|job|worker|PR|check)s? (?:in flight|remaining|active|still (?:running|working)|pending|running|launched)\b|(?:Continuous )?(?:[Ll]oop|[Cc]rons?|[Bb]abysit) (?:active|healthy|continuing|running|will keep|continues)\b|Waiting for (?:the )?(?:agent|cron|task|fork|worker|job|remaining|them)s?\b|Agents? will report back\b|Waiting\.?$)/, ne = /^(?:I will|I'll|Will) (?:check back|re-?check|poll|look again|retry|re-?run|try again) (?:(?:when|once|after|until) (?!your?\b)|in\b|again\b)/i, se = /^I (?:can(?:'?t|not)|am unable to) (?:proceed|continue|make (?:any )?progress|complete|fix this)\b/i, ie = /^(?:Giving up|I(?:'m| am) giving up|The task is not actionable)\b/i, re = /^(?:Pushed (?:to `|`[0-9a-f]{7,})|Committed as `?[0-9a-f]{7,}\b|Commit: `?[0-9a-f]{7,}\b|(?:Opened|Created) PR #?\d)/, oe = /^Ready (?:for review|to (?:upload|merge|ship|land))\b/, ae = /^VERDICT: (?:PASS|FAIL)\b/, le = /^Please (?:start|run|provide|grant|export|add|install|configure|give me|paste|point me|set (?:the |up |`?[A-Z][A-Z0-9_]+\b))/, ce = /^(?:Stopping here|I've stopped here|Parked (?:the|this) branch|Paused here)(?:\.|$| \u2014| -| until| pending| since| because)/i, T = String.raw((0, import_chunk_w1d7ygsk.jE)([`(?<!["'\u201C\u2018\\x60]|\\b(?:not|no longer|nothing(?: is|['\u2019]s)?|without|instead of|rather than|was|were|had been)\\s+|n['\u2019]t\\s+)`])`(?<!["'\u201C\u2018\x60]|\b(?:not|no longer|nothing(?: is|['\u2019]s)?|without|instead of|rather than|was|were|had been)\s+|n['\u2019]t\s+)`), D = String.raw`${T}\b(?:awaiting|waiting (?:for|on)|pending|ready for)\s+your\s+(?:approval|confirmation|go[- ]ahead|ok(?:ay)?\b|sign[- ]?off|green light)`, de = new RegExp(String.raw`${D}|${T}\b(?:awaiting|waiting (?:for|on)|pending)\s+(?:your\s+(?:feedback|input|decision|response|direction|guidance)|you\b|the user\b)`, "gi"), ue = new RegExp(D, "gi"), S = String.raw((0, import_chunk_w1d7ygsk.jE)(["(?:\\*\\*|\\()?(?:(?:I['\u2019]?m|I am|still|now|currently|just)\\s+)*$"])`(?:\*\*|\()?(?:(?:I['\u2019]?m|I am|still|now|currently|just)\s+)*$`), pe = new RegExp(String.raw`^\s*(?:result:\s*)?${S}`, "i"), ge = new RegExp(String.raw((0, import_chunk_w1d7ygsk.jE)(["(?:[:;,\u2014\u2013]|\\s-|\\s\\()\\s*", ""])`(?:[:;,\u2014\u2013]|\s-|\s\()\s*${0}`, S), "i"), he = new RegExp(String.raw((0, import_chunk_w1d7ygsk.jE)(["(?:^|[^\\p{L}\\p{N}\\s]|\\b(?:is|are|am|be|been|and|but|or)|['\u2019](?:s|re|m))\\s*", ""])`(?:^|[^\p{L}\p{N}\s]|\b(?:is|are|am|be|been|and|but|or)|['\u2019](?:s|re|m))\s*${0}`, S), "iu"), fe = /^\s+(?:will|would|is|are|was|were|has|have|had|can|should|gets?|go(?:es)?|stays?|shows?)\b/i, be = /[.!?](?:\*\*|\))?\s+|\n/g, me = /[.!?](?:\*\*|\)|["'\u2019\u201D])*(?=\s|$)|\n/, ke = /[,;:\u2014\u2013(]|\s-\s|\b(?:and|but|so|while)\b/i, _e = /^(?:```|~~~|[-+>|@]|[*\u2022]\s|\d+[.)]\s|#{1,6}\s)|:(?:\*\*)?$/, Re = /\b(?:no|not|nothing|none|never|nobody|neither|nor)\b|n['\u2019]t\b/i, Ee = /\bif you(?:['\u2019]d like| want| prefer| like)\b|\bI can also\b|\bhappy to\b|\boptionally\b/i, Ae = /\b(?:once|when|after|until|as soon as)\s+(?:it|the|that|this|they)\b|\b(?:will|['\u2019]ll)\s+be\s+(?:ready|pending)\b/i, Se = /\bnext check\b|\bagain in\b|\bre-?poll|\bpoll(?:ing)? again\b|\bshepherding\b|\b(?:check(?:ing)? (?:back|again)|re-?check(?:ing)?|report(?:ing)?(?: back)?) (?:in|when|once|after)\b(?! you)/i, F = /^[\s,]*(?:there,?\s+)?in \[[^\]\n]{1,200}\]\(#cmsg_[^)/\s]+\)\s*$/;
function WQa(e) {
  let { tail: n, prev: t, latestAsk: s, toolSummary: i, minsInState: o } = e;
  return `Current state: ${t} (for ${o}m)
Tool calls so far: ${i || "none"}${s ? `
User's most recent ask: "${s}"` : ""}

Assistant message tail (last ${n.length} chars):
${n}`;
}
function jQa(e) {
  let n = G(e);
  if (n === void 0) return null;
  let t = q().safeParse(n);
  return t.success ? t.data : null;
}
function G(e) {
  let n = e.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/, ""), t = n.indexOf("{"), s = n.lastIndexOf("}");
  if (t < 0 || s < 0) return;
  try {
    return (0, import_chunk_w578pjby.te)(n.slice(t, s + 1));
  } catch {
    return;
  }
}
function m(e) {
  return typeof e === "string" && e ? e : void 0;
}
function bao(e, n, t) {
  let s = m(e.state), i = s && Object.hasOwn(W, s) ? s : t?.state ?? n, o = m(e.tempo), l = H.has(i) ? "idle" : o === "active" || o === "idle" || o === "blocked" ? o : t?.tempo ?? "active", c = {}, u = e.output ?? t?.output;
  if (u && typeof u === "object") for (let [h, b] of Object.entries(u)) {
    let d = m(b);
    if (d && Object.hasOwn(B, h)) c[h] = Sh(d, oS);
  }
  let r = m(e.needs) ?? (l === "blocked" ? t?.needs : void 0);
  return { state: i, detail: m(e.detail) ?? t?.detail ?? "", tempo: l, needs: r, output: c, branch: t?.branch };
}
var xe = 140, ye = 64, Ce = 80, Ie = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ state: (0, import_chunk_rnm2beqc.df)(["working", "needs_reply", "needs_approval", "done", "failed"]), headline: (0, import_chunk_rnm2beqc.we)().nullish(), needs: (0, import_chunk_rnm2beqc.we)().nullish(), happened: (0, import_chunk_rnm2beqc.we)().nullish(), needs_you: (0, import_chunk_rnm2beqc.we)().nullish(), reply: (0, import_chunk_rnm2beqc.we)().nullish() }));
function GQa(e) {
  let n = G(e);
  if (n === void 0) return null;
  let t = Ie().safeParse(n);
  if (!t.success || !m(t.data.happened)?.trim()) return null;
  return t.data;
}
function wao(e, n = xe) {
  let t = E(e);
  if (t.length <= n) return { text: t, truncated: false };
  let s = t.lastIndexOf(" ", n - 1), i = s >= n / 2 ? s : n - 1;
  return { text: Sh(t, i + 1), truncated: true };
}
function zQa(e) {
  let n = wao(e.happened ?? ""), t = wao(e.needs_you ?? ""), s = Pe(e, t.text), i = wao(m(e.headline) ?? n.text, ye);
  return { recap: { state: e.state, headline: i.text, needs: Sh(E(m(e.needs) ?? ""), oS), happened: n.text, needsYou: t.text, reply: s.text }, truncated: i.truncated || n.truncated || t.truncated || s.truncated };
}
var Oe = /(?![\u200C\u200D\uFE0E\uFE0F\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u{110BD}\u{110CD}])[\p{Cf}\p{Default_Ignorable_Code_Point}]/gu;
function E(e) {
  return e.replace(new RegExp("\\p{Cs}", "gu"), "").replace(Oe, "").replace(/[\s\u0085\p{Cc}]+/gu, " ").trim();
}
function C(e) {
  return (0, import_chunk_hr2stdq7.vee)(e.replace(new RegExp("\\p{Cs}", "gu"), "").replace(/[\p{Cf}\p{M}\p{Co}\p{Cn}\p{Default_Ignorable_Code_Point}]/gu, "").replace(/[\s\u0085]+/gu, " ").replace(new RegExp("\\p{Cc}", "gu"), "").replace(new RegExp("\\p{Pd}", "gu"), "-").replace(/[^\p{L}\p{Nd}-]+/gu, " ")).toLowerCase();
}
function I(e) {
  return [E(e), C(e), C(e.replace(/[\p{Cc}\p{Co}\p{Cn}]/gu, " "))].some((n) => O.test(n) || O.test(n.replace(/-/g, "")));
}
var O = /\b(?:re|auto[- ]*|un)?(?:approv|merg(?!er\b)|deploy|promot|publish|releas|ship(?!ment)|pay(?!load|pal|ment)|migrat(?:e|ing)\b|sudo\b|launch|roll(?:ing|ed|s)?(?:[- ]+(?:it|this|that|them|these|those))?[- ]*out|green[- ]*light|force[- ]*push)|\bgo[- ]*(?:ahead|live)/iu;
function Pe(e, n) {
  if (e.state !== "needs_reply" || n === "") return { text: "", truncated: false };
  let t = E(e.reply ?? "");
  if (!/(?!\u2800)[\p{L}\p{N}\p{P}\p{S}]/u.test(t) || I(e.reply ?? "") || I(e.needs_you ?? "")) return { text: "", truncated: false };
  return t.length <= Ce ? { text: t, truncated: false } : { text: "", truncated: true };
}
function VQa(e) {
  let n = e.state === "needs_reply" || e.state === "needs_approval";
  return { state: n ? "blocked" : e.state, detail: e.headline, tempo: n ? "blocked" : "idle", needs: n && e.needs ? e.needs : void 0, output: {}, recap: e };
}
class M {
  inFlightSnapshot = { tasks: 0, queued: 0, kinds: [], items: [] };
  inFlightSnapshotChanged = (0, import_chunk_69qhefwa.Be)();
  pendingStructuredResult = void 0;
  jobRecordSeenIn = void 0;
  relocatedCwd = void 0;
  ownStateWriteDepth = 0;
  warnedUnknownDisabledSurface = false;
  publishInFlightSnapshot(e) {
    this.inFlightSnapshot = e;
    try {
      this.inFlightSnapshotChanged.emit();
    } catch {
    }
  }
  reset() {
    this.pendingStructuredResult = void 0, this.jobRecordSeenIn = void 0, this.relocatedCwd = void 0, this.warnedUnknownDisabledSurface = false, this.publishInFlightSnapshot({ tasks: 0, queued: 0, kinds: [], items: [] });
  }
}
var ve = new import_chunk_2904xtvq.j(() => new M());
function Lne() {
  return ve.of((0, import_chunk_f9x2f6cx.N)().host);
}
