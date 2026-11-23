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
var chunk_6dfy8crz_exports = {};
__export(chunk_6dfy8crz_exports, {
  $do: () => $do,
  ITi: () => ITi,
  Jbt: () => Jbt,
  MTi: () => MTi,
  OTi: () => OTi,
  Qnl: () => Qnl,
  Qrn: () => Qrn,
  Thr: () => Thr,
  Udo: () => Udo,
  V5e: () => V5e,
  Vv: () => Vv,
  Wds: () => Wds,
  Xbt: () => Xbt,
  ZCe: () => ZCe,
  Znl: () => Znl,
  arl: () => arl,
  d$t: () => d$t,
  erl: () => erl,
  irl: () => irl,
  nrl: () => nrl,
  orl: () => orl,
  rrl: () => rrl,
  srl: () => srl,
  trl: () => trl
});
module.exports = __toCommonJS(chunk_6dfy8crz_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_cee6q0wn = require("/$bunfs/root/chunk-cee6q0wn.js");
var import_chunk_jg3mepas = require("/$bunfs/root/chunk-jg3mepas.js");
var import_chunk_8ewjdpbn = require("/$bunfs/root/chunk-8ewjdpbn.js");
var import_chunk_rnad4hj1 = require("/$bunfs/root/chunk-rnad4hj1.js");
var import_chunk_9xt9z453 = require("/$bunfs/root/chunk-9xt9z453.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var Vv = "Yield", Qrn = `To wait on background work, call ${Vv}.`, Qnl = "The wait has ended. The line after this result says why.", Znl = "none of your background work is running. If you have nothing left to do, end your turn.", $do = "something arrived; it follows this line.", erl = "a message arrived. If it follows this line, deal with it as you judge right, then end your turn rather than waiting again: a reply before another wait may not be shown to the person. If it doesn't follow, end your turn and it reaches you then.", trl = "the wait was interrupted.", nrl = "an earlier call to this tool in this reply already waited.", rrl = "something is queued for the end of your turn. It is handled once you end your turn.", Udo = "a scheduled prompt is due. It starts a new turn once you end this one.", orl = "a message is waiting for you. If it doesn't follow this line, it reaches you once you end your turn.";
function h(e) {
  if (e < 1e3) return "Resumed at once";
  let t = Math.round(e / 1e3);
  if (t < 120) return `Resumed after ${t} ${(0, import_chunk_7cfjrnwy.O)(t, "second")}`;
  return `Resumed after ${Math.round(t / 60)} minutes`;
}
function srl(e, t) {
  return `${h(t)}: ${e}`;
}
var irl = "Pause until one of your asynchronous tools reports something. Call it only when you have no other work. You resume as soon as a report or a message arrives (shown after the line that follows this call's result, before your next reply, unless that line says it waits for the end of your turn), at once if none of your asynchronous tools has anything under way that could produce a report, or when a tool you are waiting on reaches its own time limit. Also resumes shortly before the prompt cache would expire, with a line saying how many tasks are still running; call it again to keep waiting.";
var Xbt = 3e5, Thr = 36e5, i = 18e5, c = 6e5;
function V5e() {
  return (0, import_chunk_f9x2f6cx.kJ)() || (0, import_chunk_f9x2f6cx.Y)() ? c : i;
}
function Jbt() {
  return (0, import_chunk_f9x2f6cx.Y)() && (0, import_chunk_8ewjdpbn.Kp)().backgroundWaitAfterReplyMinutes === 0;
}
var d = "[Monitor timed out \u2014 re-arm if needed.]";
function ZCe() {
  return (0, import_chunk_f9x2f6cx.Y)() || (0, import_chunk_865at33z.Lt)("tengu_breezy_crescent", true);
}
function d$t(e) {
  return `${Math.round(e / 6e4)} minutes`;
}
function arl(e, t) {
  if (t) return { timeout_ms: Math.min(e.timeout_ms, V5e()), persistent: false };
  let o = e.persistent === true;
  if (!import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) return { timeout_ms: e.timeout_ms, persistent: o };
  return { timeout_ms: o ? i : Math.min(e.timeout_ms, i), persistent: false };
}
function Wds(e, t, o, n) {
  let r = t === 0 && n ? `Its command wrote to stderr, which isn't delivered as events and may mean it failed: see \`${n}\`. ` : "";
  if (!o) {
    let u = r ? `Monitor timed out with no events delivered. ${r}` : "Monitor timed out. ";
    if ((0, import_chunk_jg3mepas.Ly)()) return `[${u}Re-arm it only if you have more to do before you reply; a few minutes after your reply a new watch is likely stopped, so tell the user what to check instead.]`;
    return r ? `[${u}Re-arm if needed.]` : d;
  }
  let a = (0, import_chunk_f64qna2j.Cn)(e, { hideTrailingZeros: true }), l = Jbt() ? "Re-arm it only if you have more to do before you reply; after your reply a new watch may stop within a minute, so tell the user what to check instead" : (0, import_chunk_jg3mepas.Ly)() ? "Re-arm it only if you have more to do before you reply; a few minutes after your reply a new watch is likely stopped, so tell the user what to check instead" : "Re-arm it if you still need the watch";
  if (t === 0) return `[Monitor expired after ${a} with no events delivered. ${r}${l} \u2014 and widen the filter if silence was unexpected.]`;
  return `[Monitor expired after ${a} with ${t} ${(0, import_chunk_7cfjrnwy.O)(t, "event")} delivered. ${l}.]`;
}
function OTi() {
  return (0, import_chunk_rnad4hj1.EDe)() ? `

When an event lands that the user would want to act on now \u2014 an error appeared, the status they were waiting on flipped \u2014 send a ${import_chunk_cee6q0wn.qx}. Not every event is worth a push; the ones that change what they'd do next are.` : "";
}
function ITi(e = false) {
  let t = (0, import_chunk_jg3mepas.uxe)() || Jbt() || (0, import_chunk_jg3mepas.Ly)(), o = '- **One** ("tell me when the server is ready / the build finishes") \u2192 ' + (t ? 'run the command in the **foreground with Bash**, exiting when the condition is true, e.g. `until grep -q "Ready in" dev.log; do sleep 0.5; done`.' : 'use **Bash with `run_in_background`** and a command that exits when the condition is true, e.g. `until grep -q "Ready in" dev.log; do sleep 0.5; done`. You get a single completion notification when it exits.'), n = t ? "use a foreground Bash `until` loop instead" : "use Bash `run_in_background` with an `until` loop instead (one notification, ends in seconds)";
  return `Start a background monitor that streams events from a long-running script. Each stdout line is an event \u2014 you keep working and notifications arrive in the chat. Events arrive on their own schedule and are not replies from the user, even if one lands while you're waiting for the user to answer a question.${Jbt() ? ` ${m}` : (0, import_chunk_f9x2f6cx.Y)() ? ` ${f}` : (0, import_chunk_jg3mepas.Ly)() ? ` ${p} ${(0, import_chunk_jg3mepas.Xvt)() ? `To wait past your reply, have a background agent wait with foreground ${import_chunk_hn3cwwzt.ke} commands, or tell the user what to check and when.` : "For anything longer, tell the user what to check and when."}` : ""}

Pick by how many notifications you need:
${o}
${Jbt() || (0, import_chunk_jg3mepas.Ly)() ? `- **One per occurrence, while you work on this turn** ("show each ERROR line in the dev server's log while you try the change") \u2192 ${import_chunk_9xt9z453.Xo} with an unbounded command (\`tail -f\`, \`inotifywait -m\`, \`while true\`).
- **One per occurrence, until a known end, while you work on this turn** ("show each test file's result as the suite you just started runs, stop when it ends") \u2192 ${import_chunk_9xt9z453.Xo} with a command that emits lines and then exits.` : `- **One per occurrence, ${ZCe() ? "until the monitor expires (re-arm to continue)" : "indefinitely"}** ("tell me every time an ERROR line appears") \u2192 Monitor with an unbounded command (\`tail -f\`, \`inotifywait -m\`, \`while true\`).
- **One per occurrence, until a known end** ("emit each CI step result, stop when the run completes") \u2192 Monitor with a command that emits lines and then exits.`}

Your script's stdout is the event stream. Each line becomes a notification. Exit ends the watch.${e ? ` ${import_chunk_9xt9z453.Xo} tells you when something happens; ${Vv} is how you wait for it.` : ""}

  # Each matching log line is an event
  tail -f /var/log/app.log | grep --line-buffered "ERROR"

  # Each file change is an event
  inotifywait -m -q --format '%e %f' /watched/dir

  # Poll GitHub for new PR comments and emit one line per new comment
  last=$(date -u +%Y-%m-%dT%H:%M:%SZ)
  while true; do
    now=$(date -u +%Y-%m-%dT%H:%M:%SZ)
    gh api "repos/owner/repo/issues/123/comments?since=$last" --jq '.[] | "\\(.user.login): \\(.body)"'
    last=$now; sleep 30
  done

  # Node script that emits events as they arrive (e.g. WebSocket listener)
  node watch-for-events.js

  # Per-occurrence with a natural end: emit each CI check as it lands, exit when the run completes
  prev=""
  while true; do
    s=$(gh pr checks 123 --json name,bucket)
    cur=$(jq -r '.[] | select(.bucket!="pending") | "\\(.name): \\(.bucket)"' <<<"$s" | sort)
    comm -13 <(echo "$prev") <(echo "$cur")
    prev=$cur
    jq -e 'all(.bucket!="pending")' <<<"$s" >/dev/null && break
    sleep 30
  done

**Don't use an unbounded command for a single notification.** \`tail -f\`, \`inotifywait -m\`, and \`while true\` never exit on their own, so the monitor stays armed until timeout even after the event has fired. For "tell me when X is ready," ${n}. Note that \`tail -f log | grep -m 1 ...\` does *not* fix this: if the log goes quiet after the match, \`tail\` never receives SIGPIPE and the pipeline hangs anyway.

**Script quality:**
- Every pipe stage must flush per line or matches sit in its buffer unseen: \`grep\` needs \`--line-buffered\`, \`awk\` needs \`fflush()\`. \`head\` cannot flush at all \u2014 \`| head -N\` delivers nothing until N matches accumulate, then ends the stream.
- In poll loops, handle transient failures (\`curl ... || true\`) \u2014 one failed request shouldn't kill the monitor.
- Poll intervals: 30s+ for remote APIs (rate limits), 0.5-1s for local checks.
- Write a specific \`description\` \u2014 it appears in every notification ("errors in deploy.log" not "watching logs").
- Only stdout is the event stream. Stderr goes to the output file (readable via Read) but does not trigger notifications \u2014 for a command you run directly (e.g. \`python train.py 2>&1 | grep --line-buffered ...\`), merge stderr with \`2>&1\` so its failures reach your filter. (No effect on \`tail -f\` of an existing log \u2014 that file only contains what its writer redirected.)

**Coverage \u2014 silence is not success.** When watching a job or process for an outcome, your filter must match every terminal state, not just the happy path. A monitor that greps only for the success marker stays silent through a crashloop, a hung process, or an unexpected exit \u2014 and silence looks identical to "still running." Before arming, ask: *if this process crashed right now, would my filter emit anything?* If not, widen it.

  # Wrong \u2014 silent on crash, hang, or any non-success exit
  tail -f run.log | grep --line-buffered "elapsed_steps="

  # Right \u2014 one alternation covering progress + the failure signatures you'd act on
  tail -f run.log | grep -E --line-buffered "elapsed_steps=|Traceback|Error|FAILED|assert|Killed|OOM"

For poll loops checking job state, emit on every terminal status (\`succeeded|failed|cancelled|timeout\`), not just success. If you cannot confidently enumerate the failure signatures, broaden the grep alternation rather than narrow it \u2014 some extra noise is better than missing a crashloop.

**Output volume**: Every stdout line is a conversation message, so the filter should be selective \u2014 but selective means "the lines you'd act on," not "only good news." Never pipe raw logs; filter to exactly the success and failure signals you care about. Monitors that produce too many events are automatically stopped; restart with a tighter filter if this happens.

Stdout lines within 200ms are batched into a single notification, so multiline output from a single event groups naturally.

The script runs in the same shell environment as Bash. Exit ends the watch (exit code is reported). ${y()} Use TaskStop to cancel early.`;
}
var m = `In this session a monitor can be counted on only while you are working. After your reply it may stop at any time, often within a minute, and you are told so with the user's next message. To wait for one thing before you answer, run a foreground ${import_chunk_hn3cwwzt.ke} command that exits when it happens; for anything longer, tell the user what to check and when.`, f = "In this session a monitor goes on after your reply, but only a few can be started between the user's messages, and a restart of the server behind this session ends one with no notice until the user writes again.", p = `In this session a monitor can be counted on only while you are working: a few minutes after your reply it is likely stopped along with every other process left running here, and you may hear nothing more from it, not even that it stopped, until the user writes again. To wait for one thing before you answer, run a foreground ${import_chunk_hn3cwwzt.ke} command that exits when it happens.`;
function y() {
  if (Jbt()) return `Every monitor expires after \`timeout_ms\` (default ${d$t(Xbt)}, at most ${d$t(V5e())}): it is killed and you get one notice with the event count. If it stops after your reply and before it expires, you learn only that it stopped, with the user's next message.`;
  if ((0, import_chunk_jg3mepas.Ly)()) return `${ZCe() ? `Every monitor expires after \`timeout_ms\` (default ${d$t(Xbt)}, at most ${d$t(V5e())}): it is killed and you get one notice with the event count.` : "Timeout \u2192 killed."} Any monitor is also likely stopped a few minutes after your reply, and you may hear nothing of that until the user writes again.`;
  return ZCe() ? `Every monitor expires after \`timeout_ms\` (default ${d$t(Xbt)}, at most ${d$t(V5e())}): it is killed and you get one notice with the event count. Re-arm it if you still need the watch; for a long watch (PR monitoring, log tails) set \`timeout_ms\` to the maximum and re-arm on each expiry, and widen the filter if an expiry with no events was unexpected.` : "Timeout \u2192 killed. Set `persistent: true` for session-length watches (PR monitoring, log tails) \u2014 the monitor runs until you call TaskStop or the session ends.";
}
var MTi = `
**ws source** \u2014 open a WebSocket and stream each incoming text frame as an event. No shell, no polling: the server pushes, you get notified.

  Monitor({
    ws: {url: 'wss://events.example.com/stream', protocols: ['v1']},
    description: 'deploy events',
  })

Each text frame becomes one notification (multiline frames stay as one event). Binary frames are reported as \`[binary frame, N bytes]\` rather than passed through. Socket close ends the watch with the close code surfaced; errors are surfaced before close. Same rate limiting as bash \u2014 a firehose will be suppressed and eventually stopped, so subscribe to a filtered feed where one exists.

Prefer this over \`command: 'websocat wss://\u2026'\` \u2014 it avoids the extra process and line-buffering pitfalls. Use bash when you need to transform or filter frames with shell tools before they become events.`;
