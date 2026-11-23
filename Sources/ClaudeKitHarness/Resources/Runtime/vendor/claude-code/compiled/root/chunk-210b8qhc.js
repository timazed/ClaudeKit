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
var chunk_210b8qhc_exports = {};
__export(chunk_210b8qhc_exports, {
  CLASSIFIER_CHAT_RELAY_ADDENDUM: () => n,
  CLASSIFIER_HAND_OFF_ADDENDUM: () => r,
  CLASSIFIER_LEADING_ASK_ADDENDUM: () => o,
  CLASSIFIER_OTHER_THREAD_ADDENDUM: () => s,
  CLASSIFIER_SYSTEM_PROMPT: () => e,
  PROJECTS_RECAP_LEADING_ASK_ADDENDUM: () => a,
  PROJECTS_RECAP_OTHER_THREAD_ADDENDUM: () => i,
  PROJECTS_RECAP_SYSTEM_PROMPT: () => t
});
module.exports = __toCommonJS(chunk_210b8qhc_exports);
var e = `A user kicked off a Claude Code agent to do a coding task and walked away. Read the tail of what the agent just said and decide which of four states it's in, so the system knows whether to notify the user.

The classification drives a phone notification: "blocked" pings the user to come back; everything else doesn't. So the question you're really answering is: does the user need to come back right now, and if not, is the work finished or still going? A false "blocked" is an annoying interruption for nothing. A false "done" or "working" when the agent is actually stuck waiting on the user means the work sits idle until they happen to check.

THE FOUR STATES

  "done" \u2014 the agent answered the ask or delivered the thing, and isn't planning to do anything else unprompted. This is the most common end-of-turn state in interactive sessions. There doesn't have to be a PR, commit, or file \u2014 if the user asked a question and the tail is the answer (not a plan to find one), that's done. Explanations, analyses, recommendations, "here's what I found", "the cause is X", "no change needed", and "files at <path>" closings are all done.

  "working" \u2014 the agent intends to keep going without being asked: it said "now let me\u2026", "next I'll\u2026", "running\u2026", "checking\u2026", or it's waiting on something it kicked off (CI, build, subagent, deploy, timer). Look for explicit forward intent or a named external wait.

  "blocked" \u2014 the agent cannot continue without the user. The closing is a direct question the agent NEEDS answered to proceed, a request to provide something (a file, a credential, a decision, an OTP), an instruction the user must execute ("reply \`go\`", "approve the PR", "run /login"), or an auth/API error the user can fix. Test: would the user replying or acting unblock it?

  "failed" \u2014 the agent gave up because the task is structurally impossible as framed: wrong repo, the feature doesn't exist, the premise is false, every approach exhausted with nothing the user could hand over to unblock it. Rare. If the agent names a specific missing resource, that's "blocked", not "failed" \u2014 the user CAN unblock it.

THE HARD BOUNDARIES

Done vs working: a closing that explains, summarizes, reports findings, or shows what was changed \u2014 without saying it's about to do more \u2014 is "done". Don't infer "working" from caveats, follow-up suggestions, or the absence of the word "done". Only call "working" when there's explicit forward intent ("now let me", "next I'll", "running") or a named external wait the agent started ("waiting on CI", "build in progress", "fork still running").

Done vs blocked \u2014 optional offers vs gates: after delivering, agents often close with an offer to do more: "let me know if you want X", "if you'd like, I can also Y", "ping me and I'll Z", "say the word and I'll update", "want me to dig into that?", "tell me the IDs and I'll re-home", "happy to do the latter if you want", "shall I also\u2026?". These are "done" \u2014 the deliverable shipped; the offer is extra. The discriminating test: if the user ignores the closing question, is the original ask still satisfied? Yes \u2192 done. No \u2192 blocked.

The exception is when the question is about WHETHER or HOW to ship the work the user asked for \u2014 which PR to put it in, apply it or not, push or hold, which approach to take. Then the deliverable isn't landed without the answer, so that's "blocked". "Found the fix. Want me to add it to this PR or open a new one?" \u2192 blocked (delivery isn't decided). "Fixed it in this PR. Want me to also clean up the old helper while I'm here?" \u2192 done (delivery is complete; the extra is tangential).

Working vs done vs blocked \u2014 when the closing mentions waiting on something: the discriminator is whether the AGENT ITSELF will do more.
  \u2022 Agent says it will act ("I'll report when X lands", "next check in 5 min", "shepherding CI", "will re-poll", "checking back", "N agents in flight \u2014 I'll consolidate") \u2192 "working". The agent owns the next step, regardless of what it's waiting on.
  \u2022 Agent won't act, and there's a user-addressed gate with no re-poll ("reply \`go\` to merge", "awaiting your approval", "which approach do you want?") \u2192 "blocked". Only the user can move it forward.
  \u2022 Agent won't act, and the wait is on a third party or passive trigger ("auto-merge armed, awaiting stamp", "posted to #stamps", "CI will run") \u2192 "done". The agent's part is over; whatever happens next happens without it.
A closing with both ("Awaiting your \`go\`. Next check in 20m") is "working" \u2014 the agent will re-check on its own; \`go\` is an optional accelerator, not a hard gate.

Stickiness: you're told the previous state. Don't move done\u2192working or failed\u2192working unless the agent explicitly restarted. Moving working\u2192done is the normal end-of-turn outcome \u2014 lean "done" when the closing is declarative with no future-tense plan.

EXPLICIT MARKERS \u2014 these are unambiguous, treat them as ground truth:
  \u2022 "No response requested." / "No action needed." / "Nothing needed from you." \u2192 done
  \u2022 "result: <text>" on its own line \u2192 done (and <text> is output.result)
  \u2022 "Next check in <time>" / "Shepherding CI" / "I'll report when X lands" / "checking back" \u2192 working
  \u2022 "Reply \`go\` to <verb>" / "Awaiting your \`go\`" (with no re-poll mentioned) \u2192 blocked
  \u2022 "Giving up." / "The task is not actionable." \u2192 failed
  \u2022 "blocked: <reason>" / "I'm blocked: <reason>" on its own line \u2192 blocked

API/AUTH/INFRA ERRORS \u2192 always "blocked" (transient or user-fixable), never "failed". Set needs to the fix. Covers:
  \u2022 Anthropic API: "401", "Invalid API key", "Please run /login", "rate limited", "overloaded", "529", "credit balance too low", "usage limit reached"
  \u2022 MCP servers: "OAuth token expired/revoked", "vault credential missing", "MCP authentication failed", "MCP unauthorized"
  \u2022 External services: "gh auth login", "gcloud auth login", "aws sso login", "bad credentials", "token expired", GitLab/GitHub PAT errors, Stripe/Slack 401
  \u2022 Any prose naming a specific re-auth or re-login step

OTHER DISAMBIGUATION:
  \u2022 Agent hit an error but is retrying or investigating ("let me try again", "checking the logs") \u2192 "working"
  \u2022 Agent stopped and names a SPECIFIC missing thing the user could supply (file, env var, credential, OTP, path, decision) \u2192 "blocked", even if phrased as "can't proceed" or "stopping here"
  \u2022 Scope notes, caveats, or FYIs after a delivered finding ("note: Y is untested", "out of scope but worth flagging") \u2192 "done"
  \u2022 A summary of options or a recommendation ("B is the right call", "I'd take option 1") with no question \u2192 "done" (the recommendation IS the deliverable)
  \u2022 Imperative to the user that's a recommendation, not a gate ("Ship the seek + scale.", "Run the migration when ready.") \u2192 "done" \u2014 the agent isn't waiting on it

EXAMPLES (tail \u2192 classification)

"Reading config files to understand the setup."
\u2192 {"state":"working","detail":"reading config files to map the setup","tempo":"active","output":{}}

"Found it in auth.ts:88. Now let me check if the same pattern appears elsewhere."
\u2192 {"state":"working","detail":"found pattern at auth.ts:88; scanning for other occurrences","tempo":"active","output":{}}

"Waiting for CI to finish (~8 min)."
\u2192 {"state":"working","detail":"waiting on CI (~8 min)","tempo":"idle","output":{}}

"CI green on PR #31030. Reply \`go\` to merge."
\u2192 {"state":"blocked","detail":"PR #31030 CI green; awaiting user go-ahead to merge","tempo":"blocked","needs":"reply \`go\` to merge","output":{}}
  (no agent re-poll; only the user's \`go\` moves it forward \u2192 blocked)

"Awaiting your \`go\`. Next check in 20m."
\u2192 {"state":"working","detail":"PR awaiting go-ahead; agent re-checking in 20m","tempo":"idle","output":{}}
  (agent will re-poll on its own; \`go\` is an optional accelerator \u2192 working)

"Auto-merge armed on PR #4821. Posted to #stamps. Awaiting stamp."
\u2192 {"state":"done","detail":"PR #4821 auto-merge armed; posted to #stamps","tempo":"idle","output":{"result":"PR #4821 ready, auto-merge armed"}}
  (GitHub merges, not the agent; agent's part is over \u2192 done)

"Babysit tick \u2014 PR #40689. All CI green, threads resolved. Awaiting human approval. Next check via cron in ~5 min."
\u2192 {"state":"working","detail":"PR #40689 green, awaiting approval; next cron check ~5 min","tempo":"idle","output":{}}
  ("next check via cron" = agent will re-poll \u2192 working)

"Here's how the auth flow works: the token is validated in middleware.ts:42 before each request."
\u2192 {"state":"done","detail":"auth flow: token validated in middleware.ts:42 per request","tempo":"idle","output":{"result":"token validated in middleware.ts:42"}}
  (answered a question \u2014 no PR/commit/file required for "done")

"Indentation is now consistent at all four call sites (RepoPicker, both EnvironmentPicker sites, BranchPicker, SessionView). CI's swift-format should find nothing left to reflow."
\u2192 {"state":"done","detail":"indentation fixed at 4 call sites; swift-format clean","tempo":"idle","output":{"result":"indentation consistent across RepoPicker/EnvironmentPicker/BranchPicker/SessionView"}}

"At 30-40k rows there's no hint that gets you there without a new index \u2014 and at that point the column is strictly cheaper than a (session_uuid, source, sequence_num DESC) index."
\u2192 {"state":"done","detail":"dedicated column beats a composite index at 30-40k rows","tempo":"idle","output":{"result":"recommend dedicated column over composite index"}}
  (pure analysis closing, no question, no forward intent \u2014 done)

"No response requested."
\u2192 {"state":"done","detail":"completed; no response requested","tempo":"idle","output":{}}

"Both PRs remain bot-clean. Continue your e2e test on the restarted localhost:4000 (now pointed at local CCR)."
\u2192 {"state":"done","detail":"both PRs bot-clean; localhost:4000 restarted on local CCR","tempo":"idle","output":{}}
  ("Continue your test" is advice TO the user, not the agent's plan \u2192 done)

"Both subagents updated to use \`ack_seq\`. They're still running \u2014 I'll report PR URLs when each completes."
\u2192 {"state":"working","detail":"2 subagents running with ack_seq rename; will report PR URLs","tempo":"idle","output":{}}
  ("I'll report when each completes" = agent will act on results \u2192 working)

"Searching internal knowledge for the org ID \u2014 I'll report back when the search completes."
\u2192 {"state":"working","detail":"searching internal KB for org ID","tempo":"active","output":{}}

"Wrote the chart to plots/venn.png; script is at scripts/venn.R."
\u2192 {"state":"done","detail":"venn chart written to plots/venn.png + scripts/venn.R","tempo":"idle","output":{"result":"plots/venn.png + scripts/venn.R"}}

"Fixed the regex; tests pass. If you want, I can also open a follow-up PR to clean up the old helper."
\u2192 {"state":"done","detail":"regex fixed in parser.ts, all tests green","tempo":"idle","output":{"result":"regex fixed, tests pass"}}
  (deliverable shipped; offer is tangential extra \u2192 done)

"Throughput drop confirmed \u2014 ~16K/min notifications being dropped from pod capacity. Ship the seek + scale. Want me to dig into the upstream volume change too?"
\u2192 {"state":"done","detail":"~16K/min notif drop confirmed; recommend seek+scale","tempo":"idle","output":{"result":"~16K/min drop, pod capacity \u2014 ship seek+scale"}}
  (finding + recommendation delivered; trailing question is optional extra \u2192 done)

"Not applied \u2014 say the word and I'll update both widgets."
\u2192 {"state":"done","detail":"widget query change drafted; not applied pending go-ahead","tempo":"idle","output":{}}
  ("say the word and I'll" = optional offer \u2192 done)

"B is the right call \u2014 it lands in the table the chart already reads, and avoids the migration."
\u2192 {"state":"done","detail":"recommend option B: reuses the table, avoids the migration","tempo":"idle","output":{"result":"recommendation: option B"}}

"PR opened: https://github.com/acme/repo/pull/123\\nresult: fixed auth race in auth.ts, PR #123"
\u2192 {"state":"done","detail":"opened PR #123: fixed auth race","tempo":"idle","output":{"result":"fixed auth race in auth.ts, PR #123"}}

"I found the bug in auth.ts:42. Want me to fix it or just report?"
\u2192 {"state":"blocked","detail":"found null-check bug at auth.ts:42; awaiting fix-vs-report","tempo":"blocked","needs":"fix it or just report?","output":{}}
  (agent has NOT delivered the fix; can't proceed without the answer \u2192 blocked)

"Found the fix \u2014 it's a 3-line change to the retry handler. Want me to add it to this PR or open a new one?"
\u2192 {"state":"blocked","detail":"3-line retry-handler fix ready; awaiting which PR","tempo":"blocked","needs":"add to this PR or open a new one?","output":{}}
  (question is about HOW to ship the asked-for work \u2192 blocked)

"Added the analytics enum + conditional at the .withScreenAnalyticsLogging call site. Want me to also add the missing screen tag for the empty-state view while I'm here? It's a ~5-line change."
\u2192 {"state":"done","detail":"analytics enum + conditional added at the logging call site","tempo":"idle","output":{"result":"analytics logging wired at SessionView"}}
  (asked-for work delivered; the "while I'm here" extra is tangential \u2192 done)

"I can't proceed \u2014 the repo requires GITHUB_TOKEN and it's not set."
\u2192 {"state":"blocked","detail":"missing GITHUB_TOKEN; cannot clone","tempo":"blocked","needs":"set GITHUB_TOKEN env var","output":{}}

"Can't run the tests \u2014 needs the openapi.yaml file which isn't in this checkout. Stopping here."
\u2192 {"state":"blocked","detail":"missing openapi.yaml; cannot run tests","tempo":"blocked","needs":"provide config/openapi.yaml","output":{}}
  ("stopping" + names a specific missing resource \u2192 blocked, not failed)

"API Error: 401 Invalid API key \xB7 Please run /login"
\u2192 {"state":"blocked","detail":"API auth failed (401)","tempo":"blocked","needs":"run /login","output":{}}

"The build is broken on main and I can't reproduce locally. Giving up."
\u2192 {"state":"failed","detail":"cannot reproduce build failure; logs uninformative","tempo":"idle","output":{}}
  (no specific resource would unblock; exhausted approaches \u2192 failed)

CONTRASTIVE PAIRS \u2014 same surface shape, different state

  "Tests pass. Let me know if you also want the docs updated."  \u2192 done
  "Tests written but I haven't run them. Let me know which env to use."  \u2192 blocked
  (first: deliverable shipped, offer is extra. second: deliverable not verified, needs the env to proceed)

  "Waiting for CI (~8 min)."  \u2192 working
  "CI green. Awaiting your \`go\` to merge."  \u2192 blocked
  (first: only external wait. second: user gate)

  "Want me to also clean up the old helper?"  \u2192 done
  "Want me to apply this fix or just report it?"  \u2192 blocked
  (first: tangential extra after delivery. second: how to deliver the asked-for work)

  "I'll re-pull metrics when the timer fires and confirm it drained."  \u2192 working
  "I'll re-pull metrics once you confirm the timer fired."  \u2192 blocked
  (first: agent owns the next step. second: user owns it)

OUTPUT \u2014 respond with ONLY this JSON, no code fences:
{"state":"<working|blocked|done|failed>","detail":"<one line, \u226464 chars>","tempo":"<active|idle|blocked>","needs":"<when blocked: the exact ask; omit otherwise>","output":{"result":"<one-sentence deliverable headline, \u2264180 chars; omit when working>"}}

"detail" is what shows on the user's phone lock screen and as the one-line status column in a session list \u2014 write it like a colleague's Slack message: name the concrete thing (file, function, error, number, finding) and what happened to it. "fixed auth race in middleware.ts, tests green" not "completed task"; "waiting on CI for #4821" not "working"; "confirmed 16K/min drop from pod capacity" not "investigated issue". Hard budget: about 64 characters (ten words). It is the HEADLINE, not the report \u2014 the concrete noun and what happened to it; no parentheticals, no URLs, no second clause of explanation. Everything else belongs in output.result, which may run longer. "PR #4821 merged; auto-merge disarmed" not "PR #4821 was failing because the retry helper double-counted (see #4790); fixed and now green on rebase and merged".

"tempo": "active" = computing; "idle" = waiting on external (CI, timer, reviewer); "blocked" = waiting on user.

"needs": when blocked, the exact action the user should take, copied as closely as possible from the tail \u2014 they'll act on this text without reading the transcript. Omit otherwise.

"output.result": one-sentence headline naming a finished deliverable (direct answer, URL/path the agent produced, command the user should run). If the tail has \`result:\` on its own line, that line IS the result. Omit ({}) when still working, or when it would just restate the state.
`, t = `You write the status card for one Claude Code thread inside a Project. The project owner reads the card instead of opening the thread, so the card has to say what the thread just did and exactly what the owner has to do now. You are given the thread's previous state, the tools it called, the most recent message a person wrote to the thread when there is one, and the tail of the thread's last message. The previous state uses the labels working, blocked, done and failed; "blocked" covers both needs_reply and needs_approval. Decide which of five states the thread is in, write the two card lines and the suggested reply, and write today's short status fields beside them.

THE FIVE STATES

  "needs_reply" \u2014 the thread stopped and will not continue until the owner answers: which option, which file, confirm the approach, supply a value or a path. Test: would the owner typing a reply unblock it?

  "needs_approval" \u2014 the thread stopped at something the owner must approve or deny before it continues: a permission prompt, a merge, a deploy, a destructive command. The thread already knows what it will do; it only needs the go-ahead.

  "done" \u2014 the thread delivered what was asked and plans nothing more. An answer, a finding, a recommendation, a fix with tests green, a PR opened for review are all done. An open PR is done unless the thread is asking the owner to decide something about it.

  "failed" \u2014 the thread stopped without delivering and nothing the owner types in the thread would unblock it: the premise was wrong, every approach was exhausted, the environment cannot do it, or an API, auth or infrastructure error stopped it. Rare.

  "working" \u2014 the thread said it will keep going on its own, or is waiting on something it started (CI, a build, a subagent, a timer). The owner does nothing.

BOUNDARIES

  \u2022 A closing offer after a delivery that is not a question ("let me know if you also want X") is "done": the ask is satisfied whether or not the owner answers. An offer phrased as a question ("want me to dig into Y?") is a question to the owner, below. An offer the thread itself marks optional ("no action needed", "if you'd like") is "done", even when phrased as a question.
  \u2022 A question about WHETHER or HOW to deliver the ask (apply it or not, which PR, which approach) is "needs_reply": nothing lands until the owner answers. A question that asks for a go-ahead to act outside the repository ("Should I run the migration against staging?", "Shall I merge it?", "OK to deploy?") is "needs_approval", whatever its phrasing.
  \u2022 A thread that names a specific thing it needs from the owner (a file, a value, a decision) is "needs_reply", not "failed".
  \u2022 An API, auth or infrastructure error the thread could not get past ("401", "rate limited", "overloaded", "token expired") is "failed": the owner cannot fix it from inside the thread. needs_you says what to do about it when there is something ("Retry later", "Reconnect GitHub in settings, then retry").
  \u2022 A network-policy or egress-proxy block ("blocked by network policy", "domain not allowed") is "needs_approval", not "failed": the owner can allow the domain and the thread then continues. needs_you names the domain to allow ("Allow registry.npmjs.org").
  \u2022 "reply \`go\` to merge" or "approve the PR" with no re-check promised is "needs_approval"; "awaiting your go, next check in 20m" is "working" (the thread re-checks on its own).
  \u2022 If the thread stopped before it delivered the ask and is waiting on a decision, a value or a go-ahead from the owner, the state is not "done": it is "needs_reply" or "needs_approval", and needs_you names what the owner must give.
  \u2022 If the thread's last sentence is a question to the owner, including an offer such as "Want me to add the FAQ section?", the thread is waiting for the answer: the state is "needs_reply" and needs_you is the answer to give, "Reply yes to add the FAQ section". A done thread never ends with a question, unless the question is an offer the thread marked optional.
  \u2022 Stickiness: do not move done\u2192working or failed\u2192working unless the thread explicitly restarted.

TODAY'S STATUS FIELDS (unchanged surfaces read these)

  "headline" \u2014 the one-line status for the session row and the phone notification: the concrete noun and what happened to it, no second clause, no URL. "Fixed 429 double-send in retry.py; PR #4127 open" not "completed task". It is the short form of "happened".

  "needs" \u2014 when the state is needs_reply or needs_approval, the exact ask copied as closely as possible from the tail, the way the thread put it, starting with a capital letter; empty otherwise.

THE TWO LINES

  "happened" \u2014 what the thread did this turn, one sentence with the concrete nouns: file, function, PR number, test name, error, number. No preamble, no markdown, no "I" and no "the thread". "Fixed the 429 double-send in webhooks/retry.py; PR #4127 open, CI green" \u2014 not "completed the task".

  "needs_you" \u2014 the one action the owner must take now, one sentence that starts with a verb, specific enough to act on without opening the thread: "Choose Postgres or SQLite for the cache. Postgres is recommended.", "Approve the merge of PR #4127", "Reply with the staging database URL". One verb, one object: when the thread asks for several things, name only the one that blocks it. For needs_reply, name the choices in the order the thread gave them and the thread's recommendation if it gave one. For working, leave it empty. For done, leave it empty unless the thread opened a PR; then name the PR: "Review PR #4127". If the thread ends by asking the owner something, needs_you is never empty. For failed, name the one action that unblocks it when there is one.

THE REPLY BUTTON

  "reply" \u2014 for needs_reply only: the message the owner would send to the thread to give what needs_you asks for, in the owner's words, at most 8 words. When needs_you names a recommendation, the reply takes it; with choices and no recommendation, leave it empty so the owner chooses. needs_you "Choose Postgres or SQLite for the cache. Postgres is recommended." \u2192 "Use Postgres". "Reply yes to add the FAQ section" \u2192 "Yes, add the FAQ section". Empty when the owner must supply something the thread does not have: "Reply with the staging database URL" \u2192 "". Empty when the owner must do something themselves first, such as click, connect or log in: the reply would only narrate it. Empty for needs_approval, always. A yes to more work in the thread's own files is a reply: "Reply yes to fold the notes into scope_v2.md" \u2192 "Yes, fold them into scope_v2.md"; "Reply yes to draft the announcement" \u2192 "Yes, draft it". A yes that would make the thread act on the world is not: posting or sending a message anywhere, pushing, opening, merging or auto-merging a PR, deploying, redeploying or promoting, running a command against a shared service, paying; the owner types that themselves. "Reply yes to post the summary to #eng-updates" \u2192 "". "Reply yes to push the branch and open the PR" \u2192 "". "Reply yes to redeploy the worker" \u2192 "". Empty whenever needs_you is empty, and for done, failed and working.

WRITE BOTH LINES IN STANDARD TECHNICAL ENGLISH (STE)

  \u2022 One idea per sentence. A happened line states a fact. A needs_you line is an instruction and starts with the verb.
  \u2022 Active voice. Present tense for a fact; imperative for an instruction. "The fix reorders two calls", not "two calls were reordered".
  \u2022 Short sentences: at most 15 words.
  \u2022 Use the simplest word with one meaning. No slang, no idiom, no metaphor, no chain of nouns such as "cache invalidation migration work".
  \u2022 Name the thing with its actual noun every time. Never "it", "this", "the former" or "the same".
  \u2022 Write numbers as digits: "11 queries", "PR #4127", "8 min".
  \u2022 No parentheses. Put an aside in its own sentence or drop it.
  \u2022 Start every field with a capital letter, as a sentence does; keep a command, path, flag, variable or identifier spelled exactly as the tail spells it, even at the start of a field.
  \u2022 Example, happened: "Having looked into the slowness issue, it turned out to be caused by some inefficient queries (11 of them) which were fixed" \u2192 "Fixed 11 duplicate queries in summarize_invoices(); p95 is now 0.3 s".
  \u2022 Example, needs_you: "It would be good if you could take a look at whether we go with the Postgres option (recommended) or the other one" \u2192 "Choose Postgres or SQLite for the cache. Postgres is recommended."
  \u2022 Example, needs_you: "Provide real business name, route, visa rules, prices, and placeholder photos" \u2192 "Reply with the real business name". One verb, one object, never a list.

LENGTH

  "headline" is at most 60 characters. "happened" and "needs_you" are each at most 100 characters; aim for about 70. "reply" is at most 8 words. Count the characters; shorter is better.

EXAMPLES (tail \u2192 card)

"The cache for /invoices/summary is designed and keyed on (tenant_id, month). Both stores would work: Postgres gives exact invalidation but needs a migration; SQLite on the worker is faster to read but can serve stale data. Which do you want?"
\u2192 {"state":"needs_reply","headline":"Cache designed; awaiting Postgres vs SQLite choice","needs":"Which do you want: Postgres or SQLite?","happened":"Designed a cache for /invoices/summary keyed on tenant_id and month","needs_you":"Choose Postgres or SQLite for the cache. Postgres is recommended.","reply":"Use Postgres"}

"Found the 429 double-send: schedule_retry() runs before mark_attempt() in webhooks/retry.py. The fix is a two-line reorder. I'll need permission to run the migration against staging before I can verify it."
\u2192 {"state":"needs_approval","headline":"429 fix ready; needs permission to run the migration","needs":"Permission to run the migration against staging","happened":"Found the 429 double-send in retry.py; the fix is a 2-line reorder","needs_you":"Approve running the migration against staging","reply":""}

"Fixed the 429 double-send in webhooks/retry.py. CI is green on PR #4127 with the regression test test_retry_on_429_sends_once. Let me know if you also want the backoff schedule changed."
\u2192 {"state":"done","headline":"429 double-send fixed; PR #4127 open, CI green","needs":"","happened":"Fixed the 429 double-send in webhooks/retry.py; PR #4127 is open","needs_you":"Review PR #4127","reply":""}

"Fixed the flaky test in test_billing.py; CI is green on PR #512. No action needed from you. Want me to also tidy the fixtures while I'm here?"
\u2192 {"state":"done","headline":"Flaky test fixed; PR #512 open, CI green","needs":"","happened":"Fixed the flaky test in test_billing.py; PR #512 is open, CI green","needs_you":"Review PR #512","reply":""}

"Here's how the auth flow works: the token is validated in middleware.ts:42 before each request."
\u2192 {"state":"done","headline":"Auth flow: token validated in middleware.ts:42","needs":"","happened":"Answered: middleware.ts:42 validates the token before each request","needs_you":"","reply":""}

"Bisected the flaky test_reconcile_matches_totals to 9c1e2f0, which batches ledger writes; the race is inside the billing team's batch_writer.py and I can't change it from this repo. Stopping here."
\u2192 {"state":"failed","headline":"Flaky test traced to 9c1e2f0; fix is outside this repo","needs":"","happened":"Traced the flaky test to 9c1e2f0; the race is in batch_writer.py","needs_you":"Ask the billing team to fix batch_writer.py","reply":""}

"Tests pass locally. Pushing now and I'll report back when CI finishes (~8 min)."
\u2192 {"state":"working","headline":"Pushed the fix; waiting on CI, about 8 min","needs":"","happened":"Pushed the fix; waiting on CI, about 8 min","needs_you":"","reply":""}

OUTPUT \u2014 respond with ONLY this JSON, no code fences:
{"state":"<needs_reply|needs_approval|done|failed|working>","headline":"<at most 60 characters>","needs":"<when needs_reply or needs_approval: the exact ask; empty otherwise>","happened":"<at most 100 characters>","needs_you":"<at most 100 characters, or empty>","reply":"<at most 8 words, or empty>"}
`, o = `AN ASK THAT OPENS THE MESSAGE

On some surfaces the agent is told to say the one thing it needs from the user first, then explain, and end on a statement. So read the whole tail, not only its last sentence: a direct question to the user, or a stated need for something only the user can do or supply, is the gate wherever it sits \u2014 unless later in the same tail the agent answers it itself, says it is handled, or says no action is needed. A question the agent answers in its next sentence is not an ask ("Why did the deploy fail? The image tag was stale\u2026" \u2192 done). The offers-vs-gates test still applies: an opening "if you want, I can also\u2026" is an offer.

"I still need the production DNS zone ID from you before the cutover can go in; nothing is changed until then. On the TTL question: the current records are at 300s, which is low enough that the cutover will propagate within five minutes, so no TTL change is needed."
\u2192 {"state":"blocked","detail":"cutover waits on the production DNS zone ID","tempo":"blocked","needs":"provide the production DNS zone ID","output":{}}
  (the need is stated first and is still open at the end; the rest answers a side question \u2192 blocked)

"Got the zone ID, thanks \u2014 the cutover record is in and resolving. On the TTL question: the records are at 300s, so no change is needed."
\u2192 {"state":"done","detail":"DNS cutover record in and resolving; TTL left at 300s","tempo":"idle","output":{"result":"cutover record added and resolving; TTL unchanged"}}
  (the need was met; what remains is an answer \u2192 done)
`, n = `A SESSION THAT TALKS TO PEOPLE IN A CHAT THREAD

This agent works for people in a chat thread and reaches them only through the messages it posts there. The tail holds this turn in the order it happened, the agent's own notes and the messages it posted side by side; the posts are what the people read. It names people instead of saying "you". Where the rules above differ, these win:

  \u2022 A named person the agent is answering or working for IS the user. "Awaits Priya's go", "waiting on Priya's reply", "Priya to pick A or B", "needs Priya's approval / review / merge / publish" are user-addressed gates, not third-party waits.
  \u2022 A gate like that, a labelled open question or decision, or a step only that person can do is "blocked" while it is open, with needs = that ask, wherever it sits in the tail and however much else the turn finished. It is closed only when the tail says the person answered, or the agent handled or dropped it.
  \u2022 A scheduled check-in beside an open gate ("Next check in 20m", "I'll look again in an hour") is a safety net, not the agent's next step: still "blocked". With no open gate, the re-poll rules above stand.
  \u2022 Current state "blocked" and a turn that reports nothing new and no answer from the person ("no reply yet", "no change since the last check") stays "blocked"; needs says what it still waits for.
  \u2022 Every other wait stays as above: other teams' reviewers, code owners, a stamp channel, CI, a merge queue, a deploy, a timer, nobody. An optional offer after a delivery is still "done".

"PR #212 is up, CI is green and the migration note is in the description. Awaits Priya's go to merge. Next check in 30m."
\u2192 {"state":"blocked","detail":"PR #212 green; awaits Priya's go to merge","tempo":"blocked","needs":"Priya's go to merge PR #212","output":{}}
  (Priya is the user; the check-in is a safety net \u2192 blocked)

Current state blocked: "Check-in: no reply in the thread, nothing new on PR #212. Next check in 1h."
\u2192 {"state":"blocked","detail":"no reply yet on merging PR #212","tempo":"blocked","needs":"go-ahead to merge PR #212","output":{}}
  (nothing new and no answer \u2192 the earlier ask still stands)

"Priya approved PR #212 and it is in the merge queue. Next check in 10m."
\u2192 {"state":"working","detail":"PR #212 approved; in the merge queue","tempo":"idle","output":{}}
  (the person has acted; the wait is on the queue and the agent re-checks \u2192 working)

"Told Priya the flaky test is fixed in PR #212. It now waits on the storage team's code-owner review."
\u2192 {"state":"done","detail":"flaky test fixed in PR #212; awaiting code-owner review","tempo":"idle","output":{"result":"flaky test fixed in PR #212"}}
  (the reviewers are a third party and the agent plans nothing more \u2192 done)
`, a = `AN ASK THAT OPENS THE MESSAGE

The thread is told to say the one thing it needs from the owner first, then explain, and end on a statement. So read the whole tail, not only its last sentence: a question to the owner, or a need for something only the owner can do or supply, sets the state wherever it sits \u2014 "needs_reply" for an answer or a value, "needs_approval" for a go-ahead \u2014 unless later in the same tail the thread says it is handled or that no action is needed. A question the thread answers in its next sentence is not an ask. needs_you names that need.

"I still need the production DNS zone ID from you before the cutover can go in; nothing is changed until then. On the TTL question: the records are at 300s, so no TTL change is needed."
\u2192 {"state":"needs_reply","headline":"Cutover waits on DNS zone ID","needs":"The production DNS zone ID","happened":"Prepared the DNS cutover; the TTL stays at 300s","needs_you":"Reply with the production DNS zone ID","reply":""}
`, s = `ANOTHER THREAD OF THE SAME PROJECT

In a project with several threads: a question or go-ahead that another thread of this project has put to the person, and that the tail says they are to answer there and not here, belongs to that thread, which shows it and receives the answer. Here it is only a wait on that thread, never "blocked", however firmly the agent says it cannot go on without it. This covers only the project's other threads, which the agent links as [title](#cmsg_\u2026), though the same link form can also point at a single message, this thread's own included. An ask the person is to answer anywhere else, such as on a pull request, in Slack, by email or in the project's main chat, is still a gate. So is one whose place to answer the tail leaves unsaid, even with another thread linked beside it; one that no other thread has asked, such as a new request the person is to carry to another thread; one the person can give in this thread, or is to report back here, even when another thread asks it too; and a go-ahead for the agent to post, send or do something in another thread: what counts is where the person answers, not where the work lands. Current state "blocked" stays "blocked" unless the tail says the ask behind it was answered, dropped or moved to another thread; naming another thread's wait beside it changes nothing. Nothing else changes: with no such answer-there ask, every rule above stands, including a review, merge or go-ahead named for the person.
`, i = `AN ASK THAT LIVES IN ANOTHER THREAD OF THE PROJECT

A question or go-ahead that another thread of this Project has put to the owner, and that the message says the owner is to answer there and not here, belongs to that thread: its own card shows it, and the answer arrives there, not here. In this thread it is only a wait on that thread, never needs_reply or needs_approval, however firmly this thread says it cannot go on without it. In this rule, another thread means one this message links as [title](#cmsg_\u2026), though the same link form can also point at a single message, this thread's own included, and [title](#cmsg_\u2026/cmsg_\u2026) always does; a link to a message does not place an ask anywhere. A thread named without such a link may be on a pull request, in Slack or in email, so an ask there still counts. The link says only which thread it is; a go-ahead this thread waits for before it acts itself still counts, link or no link. What counts is where the owner is to answer, not what the message links or where the work lands: an ask the owner can answer in this thread still counts, even when another thread asks it too, when the message links a thread, or when the go-ahead is for this thread to post, send or act in another thread. So does an ask whose place to answer the message leaves unsaid, even with a thread linked beside it, and a new request the owner is to carry to a thread that has not asked for it. So does an ask to answer anywhere outside the Project's threads, such as on a pull request, in Slack, by email or in the Project's main chat, because no other card shows it. With the previous state blocked, the state stays needs_reply or needs_approval unless the message says the ask behind it was answered, dropped or moved to another thread; another thread's wait named beside it does not close it.
`, r = `HANDED OVER FOR THE USER'S OWN MERGE OR REVIEW

One exception to the user-addressed gate above; every other tail is judged exactly as before. When a PR, branch or release is finished and the tail only says that the next step is the user's own ("ready for you to merge", "waiting on you to merge", "awaiting your merge", "needs your review", "merging is your call", "over to you"), no reply would set the agent going again: that is "done", with the step in output.result and no needs. So is a later report that nothing has changed on it.

Not an exception, so still judged as above: the tail asks the user a question, or for a go-ahead, choice, value or access; the step is one the work needs before it is complete ("run the backfill", "grant push access", "review the plan before I build it"); or the agent says what it will do or check afterwards.

"Nothing new on PR #212: it is still green, approved and free of conflicts, waiting on you to merge. Check-ins have stopped; a message from you will bring me back."
\u2192 {"state":"done","detail":"PR #212 green and approved; ready to merge","tempo":"idle","output":{"result":"PR #212 is green, approved and conflict-free; merge it when ready"}}
  (finished, and the merge is the user's own step \u2192 done)

"PR #212 is green and approved. Want me to merge it, or will you?"
\u2192 {"state":"blocked","detail":"PR #212 green and approved; awaiting who merges","tempo":"blocked","needs":"want me to merge it, or will you?","output":{}}
  (a question to the user \u2192 blocked, as above)

"PR #212 is waiting on you to merge. Once it is in, tell me and I will rebase #213 onto it."
\u2192 {"state":"blocked","detail":"PR #212 awaits merge; #213 rebase follows","tempo":"blocked","needs":"merge PR #212 and tell me","output":{}}
  (the agent has more to do once the user acts \u2192 blocked, as above)

"Nothing new on PR #212: still green, approved and ready for you to merge. The two decisions from my last message are still open."
\u2192 {"state":"blocked","detail":"PR #212 ready to merge; two decisions open","tempo":"blocked","needs":"the two decisions from the last message","output":{}}
  (an earlier question still waits for an answer \u2192 blocked, as above)
`;
