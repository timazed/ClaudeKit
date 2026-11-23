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
var chunk_bs4v8td1_exports = {};
__export(chunk_bs4v8td1_exports, {
  Jvi: () => Jvi,
  Kvi: () => Kvi,
  Vvi: () => Vvi,
  Xvi: () => Xvi,
  Yvi: () => Yvi,
  a0: () => a0,
  ghr: () => ghr,
  j5e: () => j5e,
  lst: () => lst,
  qvi: () => qvi,
  zvi: () => zvi
});
module.exports = __toCommonJS(chunk_bs4v8td1_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_0kyr8hth = require("/$bunfs/root/chunk-0kyr8hth.js");
var import_chunk_9xt9z453 = require("/$bunfs/root/chunk-9xt9z453.js");
var t = 3e5, lst = import_chunk_0kyr8hth.Eae.recurringMaxAgeMs / 864e5;
function a0() {
  return !import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_CRON && true && (0, import_chunk_865at33z.yoe)("tengu_kairos_cron", true, t);
}
function ghr() {
  return a0() || (0, import_chunk_0kyr8hth.q0n)();
}
function j5e() {
  return (0, import_chunk_865at33z.yoe)("tengu_kairos_cron_durable", true, t);
}
function zvi(e) {
  return e ? "Schedule a prompt to run at a future time \u2014 either recurring on a cron schedule, or once at a specific time. Pass durable: true to save it to .claude/scheduled_tasks.json where that is possible; otherwise session-only." : "Schedule a prompt to run at a future time within this Claude session \u2014 either recurring on a cron schedule, or once at a specific time.";
}
function Vvi(e) {
  return e ? "true = persist to .claude/scheduled_tasks.json and survive restarts (the result says Session-only if the job could not be saved). false (default) = in-memory only, dies when this Claude session ends. Use true only when the user asks the task to survive across sessions." : "Has no effect \u2014 durable persistence is not available. All jobs are session-only (in-memory, gone when this Claude session ends).";
}
function Kvi(e) {
  let { recurringFrac: o, recurringCapMs: n, oneShotMaxMs: r } = import_chunk_0kyr8hth.Eae;
  return `Schedule a prompt to be enqueued at a future time. Use for both recurring schedules and one-shot reminders.

Uses standard 5-field cron in the user's local timezone: minute hour day-of-month month day-of-week. "0 9 * * *" means 9am local \u2014 no timezone conversion needed.

## One-shot tasks (recurring: false)

For "remind me at X" or "at <time>, do Y" requests \u2014 fire once then auto-delete.
Pin minute/hour/day-of-month/month to specific values:
  "remind me at 2:30pm today to check the deploy" \u2192 cron: "30 14 <today_dom> <today_month> *", recurring: false
  "tomorrow morning, run the smoke test" \u2192 cron: "57 8 <tomorrow_dom> <tomorrow_month> *", recurring: false

## Recurring jobs (recurring: true, the default)

For "every N minutes" / "every hour" / "weekdays at 9am" requests:
  "*/5 * * * *" (every 5 min), "0 * * * *" (hourly), "0 9 * * 1-5" (weekdays at 9am local)

## Avoid the :00 and :30 minute marks when the task allows it

Every user who asks for "9am" gets \`0 9\`, and every user who asks for "hourly" gets \`0 *\` \u2014 which means requests from across the planet land on the API at the same instant. When the user's request is approximate, pick a minute that is NOT 0 or 30:
  "every morning around 9" \u2192 "57 8 * * *" or "3 9 * * *" (not "0 9 * * *")
  "hourly" \u2192 "7 * * * *" (not "0 * * * *")
  "in an hour or so, remind me to..." \u2192 pick whatever minute you land on, don't round

Only use minute 0 or 30 when the user names that exact time and clearly means it ("at 9:00 sharp", "at half past", coordinating with a meeting). When in doubt, nudge a few minutes early or late \u2014 the user will not notice, and the fleet will.

${e ? `## Durability

By default (durable: false) the job lives only in this Claude session \u2014 nothing is written to disk, and the job is gone when Claude exits. Pass durable: true to write to .claude/scheduled_tasks.json so the job survives restarts. If Claude Code can't tell which organization this session is signed in to, the job stays session-only even with durable: true. If the result says "Session-only" after durable: true, tell the user that the job won't survive restarts. Only use durable: true when the user explicitly asks for the task to persist ("keep doing this every day", "set this up permanently"). Most "remind me in 5 minutes" / "check back in an hour" requests should stay session-only.` : `## Session-only

Jobs live only in this Claude session \u2014 nothing is written to disk, and the job is gone when Claude exits.`}

## Not for live watching

${import_chunk_xfj2cwfv.af} re-runs a prompt at fixed wall-clock intervals. To watch a log file, process, or command output and be notified the moment something changes, use the ${import_chunk_9xt9z453.Xo} tool instead \u2014 ${import_chunk_9xt9z453.Xo} streams events as they happen; cron polls on a schedule.

## Runtime behavior

Jobs only fire while the REPL is idle (not mid-query). ${e ? "Durable jobs that were saved to .claude/scheduled_tasks.json survive session restarts \u2014 on the next launch signed in to the same organization they resume automatically. One-shot durable tasks that were missed while the REPL was closed are surfaced for catch-up. Session-only jobs die with the process. " : ""}The scheduler shifts each job by a fixed per-job offset on top of whatever you pick: by default a recurring job runs up to ${Math.round(o * 100)}% of its period late (max ${n / 6e4} min), and a one-shot job landing on :00 or :30 runs up to ${r / 1e3} s early. The result of this tool and of ${import_chunk_xfj2cwfv.yPe} gives each job's actual next run time: when you tell the user when a job will run, give that time, not the minute in the cron expression. Picking an off-minute is still the bigger lever.

Recurring tasks auto-expire after ${lst} days \u2014 they fire one final time, with a note that it is their last run, then are deleted. This bounds session lifetime. Tell the user about the ${lst}-day limit when scheduling recurring jobs.

Returns a job ID you can pass to ${import_chunk_xfj2cwfv.sT}.`;
}
var qvi = "Cancel a scheduled cron job by ID";
function Yvi(e) {
  return e ? `Cancel a cron job previously scheduled with ${import_chunk_xfj2cwfv.af}. Removes it from .claude/scheduled_tasks.json (durable jobs) or the in-memory session store (session-only jobs).` : `Cancel a cron job previously scheduled with ${import_chunk_xfj2cwfv.af}. Removes it from the in-memory session store.`;
}
var Xvi = "List scheduled cron jobs";
function Jvi(e) {
  return e ? `List all cron jobs scheduled via ${import_chunk_xfj2cwfv.af}, both durable (.claude/scheduled_tasks.json) and session-only.` : `List all cron jobs scheduled via ${import_chunk_xfj2cwfv.af} in this session.`;
}
