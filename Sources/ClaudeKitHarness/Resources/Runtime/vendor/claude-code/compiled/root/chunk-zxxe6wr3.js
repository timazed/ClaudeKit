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
var chunk_zxxe6wr3_exports = {};
__export(chunk_zxxe6wr3_exports, {
  A9s: () => A9s,
  C9s: () => C9s,
  EPa: () => EPa,
  IZn: () => IZn,
  R9s: () => R9s,
  bPa: () => bPa,
  eKr: () => eKr,
  kPa: () => kPa,
  wPa: () => wPa,
  x9s: () => x9s,
  z6o: () => z6o
});
module.exports = __toCommonJS(chunk_zxxe6wr3_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_path = require("path");
function l(o) {
  try {
    if (!o) return {};
    let r = {}, n = o.split(/^## /gm).slice(1);
    for (let e of n) {
      let s = e.trim().split(`
`);
      if (s.length === 0) continue;
      let a = s[0];
      if (!a) continue;
      let g = (0, import_chunk_7cfjrnwy.nt)(a, " - ").trim();
      if (!g) continue;
      let c = s.slice(1).filter((f) => f.trim().startsWith("- ")).map((f) => f.trim().substring(2).trim()).filter(Boolean);
      if (c.length > 0) r[g] = c;
    }
    return r;
  } catch {
    return {};
  }
}
var bPa = "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md", z6o = "https://code.claude.com/docs/en/changelog", C9s = (0, import_chunk_7cfjrnwy.sA)(z6o, "https://"), b = "https://raw.githubusercontent.com/anthropics/claude-code/refs/heads/main/CHANGELOG.md";
function m() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "cache", "changelog.md");
}
function u() {
  return import_chunk_hkvzj051.at.cache("changelog", "changelog.md");
}
class d {
  content = null;
  remember(o) {
    this.content = o;
  }
}
var v = new import_chunk_2904xtvq.j(() => new d());
async function wPa(o) {
  let r = (0, import_chunk_865at33z.ge)();
  if (!r.cachedChangelog) return;
  if ((0, import_chunk_m15w38ag.ne)() && o) {
    let n = await o.write(u(), r.cachedChangelog, { precondition: { type: "ifAbsent" }, mode: 438 & ~process.umask() });
    if (!n.ok && n.error.code !== "AlreadyExists") (0, import_chunk_w578pjby.t)(`migrateChangelogFromConfig: ${n.error.code}`);
  } else if (!(0, import_chunk_f9x2f6cx.Y)()) {
    let n = m();
    try {
      await (0, import_chunk_8j3h6yzg.Vn)().mkdir((0, import_path.dirname)(n)), await (0, import_chunk_8j3h6yzg.Vn)().writeExclusive(n, r.cachedChangelog);
    } catch {
    }
  }
  await (0, import_chunk_865at33z.Ke)(({ cachedChangelog: n, ...e }) => e, o);
}
async function A9s(o) {
  if ((0, import_chunk_f9x2f6cx.Se)()) return;
  if ((0, import_chunk_f9x2f6cx.Y)()) return;
  if ((0, import_chunk_k449cc64.wt)()) return;
  let r = b, n = await import_chunk_np189awg.Xd.get(r);
  if (n.status === 200) {
    let e = n.data, s = C();
    if (e === s.content) return;
    let a = m();
    if (await (0, import_chunk_8j3h6yzg.Vn)().mkdir((0, import_path.dirname)(a)), (0, import_chunk_m15w38ag.ne)() && o) {
      let c = await o.write(u(), e, { publishDiscipline: "inPlace" });
      if (!c.ok) throw (0, import_chunk_w578pjby.t)(`fetchAndStoreChangelog: ${c.error.code}`), Error("fetchAndStoreChangelog: v5 write failed");
    } else await (0, import_chunk_8j3h6yzg.Vn)().write(a, e);
    s.remember(e);
    let g = Date.now();
    await (0, import_chunk_865at33z.Ke)((c) => ({ ...c, changelogLastFetched: g }), o);
  }
}
async function IZn(o) {
  let r = C();
  if (r.content !== null) return r.content;
  if ((0, import_chunk_m15w38ag.ne)() && o) {
    let e = await o.readText([u()]), s = e.ok && e.value.items[0].found ? e.value.items[0].value : "";
    return r.remember(s), s;
  }
  if ((0, import_chunk_f9x2f6cx.Y)()) return "";
  let n = m();
  try {
    let e = await (0, import_chunk_8j3h6yzg.Vn)().read(n);
    return r.remember(e), e;
  } catch {
    return r.remember(""), "";
  }
}
function R9s() {
  return `## 2.1.329

- Added a trust dialog warning that says where a folder's hooks are declared
- Added a warning in the conversation, in Claude Desktop and other non-interactive hosts, when hooks in managed settings fail to load
- Added this session's scheduled tasks, \`/loop\` wakeups, the goal and this conversation's forks to \`/tasks\`; x stops one after asking
- Added a "Server message" row to a server's page in \`/mcp\` that shows the JSON-RPC error message of a remote HTTP MCP server that refuses the connection
- Added a "Marketplace auto-update" row to \`/status\` that names managed marketplaces that get no automatic updates, and why
- Added support for turning on Code Mode while OpenTelemetry events and metrics are enabled; each tool call the code makes sends its events; tracing still keeps it off
- Fixed \`~/.claude.json\` sometimes being reset to defaults when a network stall or file lock made it unreadable and cleared during a save
- Fixed repeated sign-outs on macOS when Claude Code could read the Keychain but not save to it. That session now stops at expiry and says why, and other sessions stay signed in
- Fixed \`/terminal-setup\` corrupting VS Code settings or keybindings files around block comments, and reporting success while losing the Shift+Enter binding where keybindings.json has an unclosed string
- Fixed files accepted through the IDE diff being saved without their last newline, and losing their byte order mark (BOM) when an edit was accepted by saving the diff in VS Code
- Fixed picking a cloud session in \`/teleport\` replacing your open conversation: the pick now starts a new session, as \`/clear\` does, and \`/resume\` brings the old one back
- Fixed \`/usage-credits\` asking Pro and Max users to log in again after opening the browser, and the link disappearing after 8 seconds if the browser doesn't open and a task stops for usage credits
- Fixed \`/usage\` saying usage credits are off when they had run out or reached the monthly limit, and \`/model\` not telling Pro and Max users when that limit blocks a model that runs on usage credits
- Fixed the spend limit menu showing your spend as your monthly limit and wrapping its rows under the pointer in narrow windows
- Fixed a status line script that prints without end freezing the prompt and using gigabytes of memory
- Fixed an empty, frozen screen after approving managed settings while the --resume picker, the trust dialog or another set-up screen was waiting
- Fixed choosing Default in \`/model\` replacing your saved model with your organization's default when the Default row already showed your saved model
- Fixed an MCP server being signed in again after you cleared its authentication while a token refresh was running
- Fixed background MCP tasks that stalled after a slow reconnect: Claude Code now reconnects most HTTP MCP servers by itself when one is left on an older protocol version
- Fixed PDFs, images and \`.docx\`, \`.xlsx\` or \`.pptx\` files that MCP servers or websites send as \`application/octet-stream\` being saved as .bin, which kept Claude from reading the PDFs and images
- Fixed \`/code-review <pr number>\` sometimes reviewing the checked-out branch instead of the pull request without saying so: it now reads the pull request with \`gh pr diff\`, or says when it can't
- Fixed \`/code-review\` stopping at a permission prompt, on most models, to look for a \`~/.claude/CLAUDE.md\` that doesn't exist
- Self-hosted runner: Fixed \`--push-outcome-on-release\` sometimes deleting a session's branch on the git host
- Fixed Code Mode hiding a script's finished edits and the stopped command after Esc, and losing them on exit
- Fixed a runaway loop in Code Mode filling the machine's memory; it is now stopped at a limit
- Fixed a background agent running on when it was stopped while it was being resumed
- Fixed background shell commands using memory for the earlier conversation until they exit
- Fixed Remote Control using memory for the earlier conversation after a compaction or \`/clear\` in sessions run by Claude Desktop, IDEs or the SDK
- Fixed Stop not ending a request in Claude Desktop sessions on Bedrock while it waits on a hung AWS credential_process or sign-in call
- Fixed Claude sometimes failing to send you a file on its first try on Opus 4.8 and Opus 5
- Fixed Claude not being told that a connected MCP server's tools could not be loaded, and taking it for a server with no tools, in sessions with tool search
- Fixed \`claude mcp login\` and \`/mcp\` saying a service doesn't accept sign-ins from Claude Code when the service's client registration had been retired (HTTP 410 Gone)
- Fixed another case of claude.ai-synced plugin hooks failing with "Plugin directory does not exist" while a session was still running on macOS
- Fixed auto mode asking for manual approval to \`rm\` a symlink that points outside the working directory or at itself
- Fixed \`/sandbox\` on Linux listing \`allowUnixSockets\` entries as allowed: they don't open those sockets there, and \`/sandbox\` now says so
- Fixed pressing Esc twice to clear a mistyped code ending the sign-in in \`/install-github-app\`
- Remote Control: Fixed sessions going back to their first effort level after a restart while the app still showed the level you picked (not yet for sessions that start in Ultracode)
- Fixed a removed plugin's MCP server staying connected in headless sessions after \`reload_plugins\` or when the account's plugin list drops it
- Fixed the Claude Docs connector's tools going missing when a plugin or MCP server at the same address failed to connect, and its error wrongly suggesting \`/login\`
- Fixed a new skills, commands or agents folder being missed when \`--add-dir\` names the working directory or Claude Code starts in the home folder
- Fixed sessions started from a pre-warmed process ignoring the \`autoCompactWindow\` setting in the project's \`.claude/settings.json\`
- Fixed \`CLAUDE_AUTOCOMPACT_PCT_OVERRIDE\` staying in effect in a running session after it is removed from settings.json
- Fixed the Agent tool's \`effort\` parameter being ignored for named teammates in agent teams
- Fixed \`/auto-mode-setup\` ignoring recent auto mode denials when it scans a project for rules to suggest; it may now offer allow rules from them, and you review each before it's saved
- Fixed a false "Couldn't save this change" warning after adding a permission rule or directory in a subfolder or worktree whose own \`.claude/settings.local.json\` is unreadable or malformed
- Fixed cloud sessions telling Claude to run a network proxy check after a failed request, which auto mode then blocked
- Fixed headless rewind and fork going ahead while a message sent right after a model change still waited on it
- Fixed Claude not being told when a background task was stopped while a cloud session was restarting
- Fixed \`/team-onboarding\` reporting a guide as shared on Team and Enterprise plans when the server refused the upload
- Fixed panels and questions being cut off at the prompt in fullscreen, \`/help\`, history search and the background tasks list losing rows or titles in short windows, and tables wrapping in dialogs
- Fixed resumed sessions showing "Rejected" or "Declined" for edits, questions and plans that were cut off when the session ended
- Fixed \`/passes\` showing the wrong number of passes after a server error, and offering usage credits for sharing when no guest passes are left
- Fixed \`claude --help\` output being cut short when piped to another program
- Fixed \`/terminal-setup\` turning on "Use Option as Meta key" in Terminal.app on macOS 27, and tips there suggesting Option+Enter instead of Shift+Enter
- Self-hosted runner: Fixed setup failing on Git LFS repositories cloned through Anthropic-managed git; sessions now start on pointer files, and \`git lfs pull\` fetches the content
- Fixed sessions on self-hosted environments not starting from a git remote with an SSH host alias, GitHub SSH certificates or a GHE.com SSH user; an unresolved alias's error gives two git commands
- Fixed remote MCP servers in self-hosted runner sessions staying without tools, or (over https) disconnected, after a timeout or network error
- Fixed self-hosted runner sessions being shown as having stopped responding while Claude Code was still starting
- Fixed Code Mode keeping in memory every large text file that code read, and memory growing each time a background subagent was woken
- Fixed Code Mode stopping a script at its ten-minute limit while an MCP form, an MCP link prompt or a prompt that always asks was waiting for an answer
- Fixed Code Mode scripts receiving a "moved to the background" message as data from most MCP calls over two minutes: the script now waits up to ten minutes, then gets an error
- Fixed mods that list only some tools silently turning Code Mode off; such a mod no longer keeps it off, so use managed settings for that
- Fixed Code Mode ignoring an MCP tool's request to end the turn when the tool was called from a script that Claude waits for
- Fixed a Code Mode script's \`let x;\` keeping the value that an earlier script gave \`x\`
- Fixed a Code Mode script's call with no argument failing with a missing-parameter error on tools that need none
- Fixed Code Mode scripts losing access to tools through \`tools\` in sessions with more than 4,096 tools
- Fixed the \`/code-review\` findings card often showing "high" for a review that ran at medium, on most models
- Fixed key hints in permission prompts, questions, \`/model\` and \`/rewind\` ignoring \`keybindings.json\`
- Fixed auto-scroll, the PR status badge, the auto-compact warning and the ultracode tag not following the \`/config\` switches that control them in a running session
- Fixed a custom cancel key not working in \`/add-dir\`, \`/tui\` feedback and the save-workflow form
- Fixed arrow keys in the save-workflow form moving the selection in the workflow view behind it
- Fixed \`/config\` saying nothing, or "dismissed", after changing many settings
- Fixed Read and @-mentions showing one line too many for files that end in a newline
- Fixed \`/status\` not naming the model that opusplan and haiku use in plan mode
- Fixed \`claude doctor\` advising a Keychain unlock inside a macOS sandbox, where unlocking can't help
- Fixed the "Jump to bottom" pill staying hidden after copying text and scrolling away, the row under it going blank when its label changed, and quick PageUp presses scrolling too far in fullscreen
- Fixed a screen update sometimes being skipped when memory is low
- Fixed long code blocks losing a blank line and repeating another in scrollback
- Fixed prompt suggestions sometimes showing placeholder text such as \`_(no suggestion)_\`
- Fixed the line about earlier messages on resume blaming a damaged file when the file was intact
- Fixed characters disappearing from the prompt when its text held a color code that sets several styles and a keyword or command was highlighted
- Fixed \`/rename\` and \`UserPromptSubmit\` hook titles in \`claude remote-control\` sessions not showing on claude.ai and mobile
- Fixed the Remote Control diff listing a file twice when the branch renamed it and it was then edited
- Improved the automatic clean-up of old sessions on computers with managed settings
- Improved \`/tui\` and other in-place restarts to wait briefly for a login refresh, so they are less likely to sign you out
- Improved memory use in long sessions that edit many files, and in long Claude Desktop sessions on macOS and Linux with many large MCP tool results
- Windows: Improved start-up and the first search on PCs where Claude Code's search program starts slowly
- Improved auto mode's handling of a short reply such as "yes" to Claude's question when telemetry is off, behind a gateway to the Anthropic API, or on Microsoft Foundry
- Improved memory use of idle Claude Desktop and SDK sessions after a long turn, and after \`--resume\` or \`--continue\` of a session that holds screenshots or large tool results
- Improved how fast a Claude Desktop Code session with Remote Control on is ready for the next message after an answer
- Improved cloud sessions to retry plugins that failed to download at startup
- Improved Code Mode: the terminal freezes for far less time after a script makes thousands of tool calls
- Improved Code Mode: after starting a subagent, Claude now gets the same guidance on waiting as outside Code Mode
- Updated computer use on macOS to newer safety rules, so some actions are refused and some apps have less access
- Changed saved scheduled tasks: in new signed-in sessions, most saved by earlier versions need scheduling again, though \`--resume\` of their own session still runs them
- Changed \`/code-review\` with no target on most models to review the whole branch against the default branch, and fixed it losing the diff on multi-commit branches
- Changed auto mode to run \`git status\` less often so most requests wait less in large repositories; a git command that discards changes may be blocked until the working tree is checked
- Changed \`/code-review <pr number> --fix\`, and \`/code-review\` given a pull request URL, to stop without reviewing when \`gh pr diff\` is refused or fails
- Changed 'Exit and stop tasks' to end this session's scheduled tasks so they don't run again on resume, unless you exit while Claude is responding
- Changed some teammate panes to start through /bin/sh, so they may not read shell start-up files
- Changed computer use on macOS to give up on an app launch that has not finished after 30 seconds
- Gateway: Changed the start-up warning shown while \`access_control.allow_cidrs\` is empty to a notice at every start, boxed in text logs: never expose the gateway to the public internet
- Self-hosted runner: Changed a second host name's clone of the same owner/name to go under \`_repos/clones/<host>/\` in the base folder; no clone moves
- Self-hosted runner: Changed repositories with unusual characters in their address path to clone anew in a new folder; rules and volumes naming the old one stop applying, and the old clone stays put
- Self-hosted runner: Changed \`--repository-folder\` to take most folders in the base folder at \`--capacity 1\` (above 1, one there stops start-up); another repository's session overlapping one is refused
- Changed Code Mode so a PreToolUse hook that errors no longer refuses a script's tool call, as outside Code Mode; set \`"onFailure": "block"\` on a command, HTTP or MCP tool hook that must refuse
- Changed Code Mode to refuse a script's read of a line range over 256 MiB, which could use gigabytes of memory, and fixed reads of very long lines timing out
- Changed Code Mode to also start when telemetry, nonessential traffic or feature flags are turned off; an administrator can keep it off in managed settings
- Changed Code Mode to run a script that declares its own \`log\`, \`preview\` or \`sleep\`, which it used to refuse
- Changed macOS login renewal to test the Keychain with a \`Claude Code-write-check\` item
- Changed the \`/tasks\` header and the footer's background count to one number covering shells, monitors, MCP calls, agents, workflows and scheduled tasks
- Changed Stop and SubagentStop hooks to list a Monitor's script as \`monitor\`, not \`shell\`, in \`background_tasks\`
- Removed 2.1.326's automatic retry at the limit named in a \`max_tokens\` error; behind a gateway whose model takes fewer output tokens, set \`CLAUDE_CODE_MAX_OUTPUT_TOKENS\` to that limit
- [VSCode] Added a line above the message box after you decline the trust prompt, with Review trust to bring the prompt back without reloading the window
- [VSCode] Fixed being signed out of Claude Code in every window and terminal when the sign-in server took 10 to 30 seconds to answer the extension's token refresh
- [VSCode] Fixed keys pressed while an input method (IME) is composing moving focus on or declining a permission prompt, running menu rows and closing dialogs (anthropics/claude-code#106358)
- [VSCode] Fixed the permission prompt for Bash, Edit, Write and other built-in tools not showing why a safety check asks
- [VSCode] Fixed a half-written plan comment being lost or moved to another passage, and an input method's Enter sending the comment, ending a session rename or picking an @-mentioned file
- [VSCode] Fixed the limit banner not saying when usage credits are in use, and the session survey covering that banner and the usage credits card
- [VSCode] Fixed screen readers not announcing a permission request that arrived while the Account & Usage dialog was open until that dialog was closed
- [VSCode] Fixed a proposed-edit diff tab staying open, with an Accept button that did nothing, after its terminal Claude Code session disconnected
- [VSCode] Fixed short tool inputs and outputs cut off at the panel's edge with no way to read the rest (they now open in an editor tab), and dragging to select text also opening one
- [VSCode] Fixed the Up key putting an earlier message over text that an input method (IME) is composing in the message box (anthropics/claude-code#101294)
- [VSCode] Fixed dropping an Explorer folder onto the chat inserting nothing on VS Code 1.103 to 1.139 or in a floating chat window, and the drop highlight vanishing with a false "Hold Shift" hint
- [VSCode] Fixed a permission prompt moving keyboard focus away from the details you were scrolling as its buttons switched on
- [VSCode] Fixed file links in a Claude tab opening in another editor group when \`claudeCode.lockEditorGroups\` is off (anthropics/claude-code#108884)
- [VSCode] Fixed ranges written with a single tilde (\`3~5 \u2026 7~10\`) losing their tildes and showing struck-through text between them; only \`~~text~~\` is struck through now
- [VSCode] Fixed dictation errors wrapping into a narrow column, the spinner turning while a question card waits, and a NUL symbol after each letter in the output of a failed UTF-16 command
- [VSCode] Changed Down to stop at the last item of a permission prompt instead of wrapping to Yes
- [VSCode] Changed command output to show hidden characters and control sequences other than plain colors as symbols, so Persian, Khmer, Lao, Sinhala and Malayalam text can look broken or out of order

## 2.1.328

- Added auto mode for Claude Opus 4.6 and Sonnet 4.6 on Amazon Bedrock, Google Cloud's Agent Platform, Microsoft Foundry and Claude apps gateway; interactive sessions with no permission mode start in it
- Added \`"onFailure": "block"\` for \`mcp_tool\` hooks, as for command and HTTP hooks: a hook whose call fails blocks the action
- Added a warning when a message from a session that skips permission prompts may be held and dropped by a cloud session
- Added a notice in \`/status\` and \`claude doctor\` when an OpenTelemetry exporter has no endpoint and its data would likely be lost
- Added \`CLAUDE_CODE_DISABLE_DEFERRED_TOOL_RESUME\`, which lets a host stop \`claude -p --resume\` and \`--continue\` from running a tool call that a hook deferred
- Added support for apps that embed Claude Code to switch on the policy plugin's \`allowManagedModsOnly\` option; an admin's managed settings still win
- Added a startup warning to the Claude apps gateway when a policy's \`maxEffortLevel\` is not a valid effort level
- Self-hosted runner: Added \`--repository-folder\` to name the folder that sessions use for a repository at \`--capacity 1\`, in place of its path under the base folder, which can't be a symbolic link
- Self-hosted runner: Added a start-up warning when the host's settings.json sets a default permission mode that sessions ignore
- Self-hosted runner: Added \`--hook-label\` to \`claude self-hosted-runner orchestrator\`, to hand chosen session labels to the \`spawn-runner\` hook
- Self-hosted runner: Added \`--metadata key=value\` to \`claude --environment\`, to label a session for the \`spawn-runner\` hook
- Self-hosted runner: Added \`claude_code_self_hosted_orchestrator_session_queue_wait_by_reason_seconds\` to the orchestrator's \`/metrics\`, so a re-opened session's wait can be told from a new one's
- Self-hosted runner: Added an orchestrator metric, \`claude_code_self_hosted_orchestrator_sessions_given_up_total\`, that counts by cause how often Anthropic gave up starting a runner for a session
- Fixed Bash commands in zsh stopping with a "not found" error at a word that starts with \`=\`, such as \`echo ====\` or \`[ a == b ]\`; \`=cmd\` no longer expands to a command's path
- Fixed automatic compaction reusing the session's earlier system prompt instead of rebuilding it the way \`/compact\` does
- Fixed markdown rendering freezing on some very long or malformed input
- Fixed rare screen freezes
- Fixed Esc often being lost at a permission prompt or question when you typed straight after it; in terminals that send Alt as Esc and a key, an unused Alt or Option key now declines there
- Fixed a paste or a terminal's reply being typed into the prompt when a slow connection cut it in two
- Fixed saving a scheduled task erasing the project's other saved tasks when the scheduled tasks file can't be read, on third-party providers or with telemetry or feature flags turned off
- Fixed a scheduled task with a typo in the project's scheduled tasks file being deleted the next time that file was saved
- Fixed a case where a resumed cloud session could lose its compaction summary or recent messages when a message was saved late
- Fixed the token counts on the spinner and for subagents counting a retried reply twice, missing replies that were not streamed, and standing still while Claude thinks
- Fixed the error shown when usage credits run out mid-response, which named a rate limit
- Fixed auto mode failing every turn outside Claude Desktop with \`CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS\` set behind a gateway rejecting betas, on Bedrock, Agent Platform, Foundry or Claude apps gateway
- Fixed \`CLAUDE_STREAM_IDLE_TIMEOUT_MS\` not lengthening the 5-minute connection limit on gateways, custom base URLs and cloud providers
- Fixed some Claude Desktop sessions on third-party providers, other than scheduled tasks, ending for good with "Prompt is too long" after large tool results; the largest are now left out
- Fixed MCP tools whose input schema starts with \`anyOf\`, \`oneOf\` or \`allOf\` going missing on third-party providers or with telemetry or feature flags turned off
- Fixed an MCP tool with an invalid input schema failing requests on third-party providers or with telemetry or feature flags turned off; the tool is now left out and Claude is told why
- Fixed effort being turned off for a subagent's model for the session if Bedrock, Google Cloud's Agent Platform or Foundry refused its progress summary's effort setting (regression in 2.1.327)
- Fixed Code Mode stopping a script when a permission prompt outside auto or bypass mode, a plan approval or a question stayed open for ten minutes
- Fixed Code Mode scripts in auto and bypass-permissions modes failing to call an MCP server that had connected while the previous script was running
- Fixed Code Mode scripts not running in the background in auto or bypass permissions mode in a session chosen in the \`claude --resume\` picker
- Fixed Code Mode losing a loaded skill, hook context or a note typed with a permission approval when resuming a session in which one reply ran several scripts
- Fixed Claude not being told that a Code Mode script was cut off when the session was resumed from the picker or in a mode that asks for permission
- Fixed Code Mode silently using \`undefined\` for top-level variables that an earlier failed script never set
- Fixed Code Mode scripts not being told when a failing command's long output was cut
- Fixed Code Mode refusing valid scripts that start with a \`{\` block
- Fixed Code Mode refusing scripts that use both a top-level \`await\` and a top-level \`return\`
- Fixed an @-mentioned small file not being attached in Code Mode after a script had read or written it
- Fixed Code Mode offering \`write()\` and \`edit()\` to read-only subagents that can't call them
- Fixed Claude starting a turn by itself in Code Mode when Esc was followed by a command such as \`/model\`
- Fixed Claude in Code Mode not being told to run workflows only when you ask, or the workflow size you set in \`/config\`
- Fixed Remote Control repeating the same disconnect message, and telling you to retry a session that can't reconnect
- Fixed a waiting permission prompt being lost, and its answer ignored, when a remote session restarted while the service was slow
- Fixed cloud sessions resuming a cleared conversation after a rewind followed by \`/clear\`
- Fixed a remote session losing a turn's tool calls and results when its runner or worker was lost after a dropped model stream had been retried
- Fixed cloud and Remote Control sessions that just started, or have an @ in their title, being unreachable in cross-session messaging from a session with Remote Control on
- Fixed Claude being told that cloud sessions can never reply; it now learns when a reply can come and how else to get the result
- Fixed \`/diff\`, the Changes pane of Remote Control sessions and the diff beside an edit leaving out committed work after a command moved into another repository
- Fixed Remote Control not showing a running workflow's agents when a session run by an IDE extension or other SDK app is opened over an hour after the workflow last made progress
- Remote Control: Fixed an idle Desktop or VS Code session showing as running after Remote Control is turned on
- Fixed the model saying background agents were still running after an SDK interrupt had stopped them
- Fixed Send now in the desktop app and SDK hosts telling Claude that a stopped web search found no results
- Fixed Cmd+letter being typed into the prompt in terminals that report Cmd
- Fixed Ctrl+click opening a link twice in GNOME Terminal, side mouse buttons acting as clicks, and the first wheel notch in the other direction being ignored after a pause, in fullscreen mode
- Fixed Shift+Enter in Konsole outside tmux and ssh, and Alt shortcuts on non-Latin keyboard layouts in terminals that speak the kitty keyboard protocol
- Linux: Fixed pasting in other apps freezing while Claude Code is suspended with Ctrl+Z, when \`xclip\` or \`wl-copy\` is installed
- Linux: Fixed Ctrl+V missing the clipboard image, pasting an old one or hanging
- Fixed text copied in fullscreen mode including the quote bar, losing spaces at line wraps when a drag scrolled upward, or missing words under the "Jump to bottom" pill
- Fixed an image path pasted into a \`!\` command becoming an attachment
- Fixed Ctrl+C showing no exit warning while the \`?\` shortcuts list is open
- Fixed Ctrl+R search in fullscreen mode and the \`/theme\` color editor picking the wrong row when keys arrive together, and keys being dropped there and in the search of \`/config\` and \`/plugin\`
- Fixed wrong or missing colors inside GNU screen
- Fixed many background notifications cutting into the top border of open dialogs in fullscreen mode
- Fixed a message to a background agent showing a long file path in place of a pasted image
- Fixed \`/goal\` removing a skill's Stop hook, or ending early on another hook's result, when both had the same wording
- Fixed \`/bug\` saying cancelled after the report was sent
- Fixed Esc not dismissing the transcript share question for Pro and Max users
- Fixed \`/hooks\` losing your place when going back
- Fixed \`/export\` writing a file named \`.txt\` when the name was left empty
- Fixed \`/terminal-setup\` in Zed replacing a symlinked \`keymap.json\` with a plain file
- Fixed \`/install-github-app\` adding a code review workflow when asked to update the existing workflow file
- Fixed \`/plugin\` reopening a skill, or closing the open page, when a slow save or removal finished after you went back
- Fixed \`/plugin\` asking to uninstall the wrong plugin, or ignoring Esc, after leaving a plugin while a change was still running
- Fixed typing and arrow keys not working on the \`/plugin\` Installed tab after a search with no results or a click on the tab row
- Fixed holding Enter in \`/plugin\` turning off several installed plugins
- Fixed the \`/usage\` plugin total stopping at 2,000 tokens on 1M context models, and low token estimates in \`/usage\` and \`/plugin\` when no model is picked
- Fixed Esc on the Bedrock access keys step closing \`/login\` instead of going back
- Fixed \`/exit\` and Ctrl+D describing running work differently, and \`/exit\` warning about a workflow that had stopped
- Fixed Claude calling an artifact private after reading one in a shared folder or publishing to another organization's, and saying only named people can open one when its folder's people can too
- Fixed a plugin's toast sometimes showing another plugin's text
- Fixed a mod saved just after a turn began sometimes reloading mid-turn instead of at the turn's end
- Fixed one malformed \`OTEL_RESOURCE_ATTRIBUTES\` entry dropping the variable's other labels from metric points, events, and spans. Now only that entry is left off
- Fixed agent hooks running past their timeout while compacting after a request was refused as too large
- Fixed a crash at startup when \`FORCE_COLOR\` is set to a negative number
- Fixed a crash in secret masking when the machine is almost out of memory
- Fixed the Bash sandbox on Linux renaming \`.git/HEAD\` after each command when the branch name is not valid UTF-8
- Self-hosted runner: Fixed all running sessions being stopped when a proxy or web filter answered a poll with HTTP 200 and a body such as \`{}\`; the runner now retries such a poll
- Self-hosted runner: Fixed deletion of a kept clone's objects or refs, and of commits that existed only there, after a temporary disk error; that start now fails instead
- Fixed self-hosted runners stopping when their token ran out on a host whose clock is slow or was set back
- Self-hosted runner: Fixed sessions with Anthropic-managed git losing git access to GitHub after a script or hook in the session ran \`claude\` again
- Fixed self-hosted runners with Anthropic-managed git being unable to fetch or push where the machine's git config sets \`http.proactiveAuth\`
- Self-hosted runner: Fixed a runner that exited without telling the server when setup failed after it had registered; it now deregisters with a reason, and an on-demand runner reports the failed start
- Self-hosted runner: Fixed archiving or requeueing a session not taking effect while it waited for another session to prepare the same repository (\`--capacity\` above 1)
- Self-hosted runner: Fixed a session with a damaged \`.claude.json\` failing every later start under \`--trust-workspace false\`; it now starts on defaults, with MCP servers turned off there on again
- Self-hosted runner: Fixed a failed start's message losing the words that say what failed when a checkout hook or git printed a lot
- Fixed the self-hosted runner skipping its post-session hook when a disk stalled for a few seconds; on a dead disk a session's end can take 25 seconds longer by default
- Fixed self-hosted runners: a session that resumes in a new Claude config directory no longer loses its task list
- Fixed Claude not being told when a self-hosted session starts without one of its repositories, and why
- Self-hosted runner: Fixed \`--correlation-id\` of \`claude --environment\` not reaching the \`spawn-runner\` hook
- Fixed the self-hosted runner setup wizard's key rotation advice, which now warns that revoking a key stops the sessions running under it
- Improved \`claude -p\` and SDK sessions to fetch managed-settings plugins that have their own git repository, in the background, for a later session
- Improved how soon managed-settings plugins from a git marketplace load on a fresh machine in \`claude -p\`, SDK and Claude Desktop sessions; a short run may exit up to 30 seconds later
- Improved the time to resume large sessions
- Improved memory use when resuming a session with many images
- Improved memory use and response time in long SDK and desktop sessions that run slow commands or tools
- Improved Code Mode's speed in auto and bypass-permissions modes by removing a 0.75 second pause after most scripts
- Improved prompt caching for new Code Mode sessions that have MCP servers, and Claude is now told when a server is still connecting and when the list of servers changes
- Improved Code Mode's token use with shorter tool descriptions
- Improved Code Mode to show the command a script is running, and its output, while it runs
- Improved Code Mode edits: an edit that changes nothing no longer stops a script, and Claude is told where a failed edit matches or comes closest
- Improved Code Mode: Claude is now told which tool calls were still running when a script failed
- Improved how Claude starts dev servers in Code Mode's auto and bypass modes: Claude is told to run them as background tasks that show in \`/tasks\`
- Windows: Improved Code Mode by telling Claude that scripts' shell commands run in Git Bash and that PowerShell aliases run instead of functions with the same name
- Improved starting several in-process teammates at once: far fewer now fail with "Lock file is already being held"
- Improved the computer use approval dialog: it now shows each app's level of access and plainer warnings
- Improved cross-session messaging: Claude now explains that Remote Control is off when a cloud session or another computer is not listed
- Improved \`claude -p\` text output to say on stderr when a message from another session is held or dropped, and how to allow it
- Improved Claude's answers on who can open an artifact it published: Claude is now told to check the artifact again instead of repeating the last publish's answer
- Improved resumed self-hosted runner sessions: Claude now checks whether its earlier work is still there, and says what is missing
- Changed plan mode and Bash prompts for Opus 4.6 and Sonnet 4.6 on third-party providers to use and offer auto mode, as on newer models; \`disableAutoMode\` turns both off
- Changed Code Mode to no longer run UserPromptSubmit hooks, managed ones included, on scripts' output; to redact that output, use a PostToolUse hook with \`updatedToolOutput\`
- Changed \`/code-review\` on most models to report only bugs and CLAUDE.md violations; run \`/simplify\` for reuse, simplification and efficiency cleanups
- Changed \`/code-review\` to mark each finding Important, Pre-existing or Nit on most models, and to end each summary with a suggested fix; a clean review's list now reads "Code review found no issues."
- Changed \`deniedMcpServers\` entries of the form \`claude.ai <name>\` to apply to that connector in cloud and self-hosted runner sessions too
- Changed managed \`PostToolUse\` hooks to no longer fire for calls refused before they ran: no log entry, rewrite, block or stop there; \`PostToolBatch\` gets most, not marked as refused
- Changed \`/bug\` to ask Yes or No before sending, so repeated Enters no longer send a report or open GitHub
- Changed subagents in \`claude -p\`, the Agent SDK, desktop and VS Code to wait for their own subagents by default when \`CLAUDE_CODE_FORK_SUBAGENT=0\` is set
- Changed \`claude -p\` with \`CLAUDE_CODE_FORK_SUBAGENT=0\` to count a background subagent and those it waits for against one 10-minute wait; raise \`CLAUDE_CODE_PRINT_BG_WAIT_CEILING_MS\` for longer chains
- Changed a shell command rewritten by a PermissionRequest hook to a sandbox-excluded command to run outside the sandbox
- Changed the Claude in Chrome welcome screen and \`/chrome\` to say that Claude Code asks before Claude acts on a site, unless your permission mode or a rule in \`/permissions\` answers
- Changed Claude Desktop and Agent SDK sessions on third-party providers or with telemetry or feature flags off to end the turn when closed with a question open, instead of continuing without an answer
- Changed pasted text to be marked for Claude as pasted, on third-party providers or with telemetry or feature flags turned off
- Changed subagent progress summaries in terminal sessions on the Anthropic API to be written by the default small fast model from short notes, also with telemetry off, using far fewer tokens
- Changed how a sandbox that can't start is reported, unless \`sandbox.failIfUnavailable\` is set: the next sandboxed Bash command is refused and says that the sandbox is off for the session
- Changed \`/list-agents\` to show its list to you alone; Claude lists sessions itself when needed
- Self-hosted runner: Changed the built-in \`gh api\` to be off by default where settings guard Claude's GitHub tools by name; \`--use-anthropic-gh true\` turns it on
- Self-hosted runner: Changed a \`claude\` that a wrapper script runs before the session's own \`claude\` is up, or after it has ended, to have no Anthropic-managed git
- Self-hosted runner: Changed \`CLAUDE_RUNNER_SESSION_UUID\` and \`CLAUDE_CODE_REMOTE_SESSION_UUID\` to both be set for the session and its \`checkout\`, \`post-session\` and \`spawn-runner\` hooks
- Changed self-hosted runners at \`--capacity 1\` to refuse a session earlier when the path of a repository it pushes to is a symbolic link
- [VSCode] Added a notice when a message from another session is held, with a link to the settings file that can allow it
- [VSCode] Fixed the permission prompt cutting off its No button, reply field or title when the panel is low or a command, URL or description is long
- [VSCode] Fixed failed or blocked tool calls showing no reason or a reason cut short, and Glob and Grep counting an error as results

## 2.1.327

- Added a confirmation before \`/install-github-app\` changes a repository
- Added \`claude mcp add-json <name> -\` to read the server's JSON from stdin, so tokens can stay off the command line; not available inside a Claude Code session
- Added a line when a resumed session's earlier messages can't be loaded
- Added a list in \`/status\` of broken agent, skill, command and output style files, keybinding errors, an unavailable sandbox, ignored permission settings and hook matchers that never match
- Added a note in \`/config\` when other settings override a row
- Added \`x-claude-code-managed-settings-checksum\` to the gateway hint headers; sent where managed settings set \`CLAUDE_CODE_GATEWAY_HINT_HEADERS=1\`, including where they already do
- Added support for naming a session's billing group with the \`attributionProject\` setting, for Claude apps gateways that set \`admin.billing_group_tag\`
- Added \`/tui classic\` as the name for the non-fullscreen renderer; \`/tui default\` still works
- Remote Control: Fixed stopping the server in worktree mode deleting a running session's git-ignored files, such as \`.env\`
- Fixed self-hosted runners with \`--use-anthropic-git-proxy\` deleting a non-empty directory named by \`GIT_CONFIG_GLOBAL\` at startup: the runner now keeps it, ignores the variable and warns
- Fixed \`claude mcp add\` and \`claude mcp remove\` with project scope deleting other top-level keys from \`.mcp.json\`, such as \`$schema\` or another tool's \`servers\`
- Fixed \`/export\` overwriting an existing file without asking: the dialog now asks, and \`/export <name>\` keeps the file and says to run \`/export\`
- Fixed a command you had allowed still running after you pressed Stop, when the approval arrived after a restart, in cloud and self-hosted runner sessions with no feature flags loaded
- Fixed Enter closing \`/teleport\`'s load error screen
- Fixed a click followed by Enter in \`/plugin\` installing or disabling a plugin
- Fixed a half-typed \`!\` command running on an extra Enter after the usage limit menu
- Fixed some \`--disallowedTools\` rules with parentheses in their content
- Fixed auto mode ignoring some wildcard PowerShell allow rules that name a script with \`.\\\`, such as \`PowerShell(.\\scripts\\build.ps1 *)\`
- Fixed a running Code Mode script in auto mode getting permission prompts and denials once Claude started a second script that auto mode also allowed
- Changed some pre-started background sessions to be discarded after an account change
- Changed a workflow paused at a usage limit in the terminal to stay paused after a login, until the earlier login returns or you type a prompt
- Fixed a nested \`claude\` with its own token being refused by \`forceLoginOrgUUID\`: commands that don't get the session's token no longer get its \`CLAUDE_CODE_OAUTH_SCOPES\`; set it on any that need it
- Fixed headless sessions losing stored messages on resume when a message was sent again with the same UUID after the process was killed
- Fixed cases where a session resumed after an empty reply or a killed command lost an answer, or brought back a rewound prompt, after another crash or a move to the background
- Fixed a remote session forgetting messages sent after Stop was pressed during a restart, if Claude Code then crashed
- Fixed tasks created after \`/clear\` being lost, and cleared tasks coming back, when a cloud or self-hosted runner session with no feature flags loaded resumed later
- Fixed a compaction right after a reply cut at the output token limit losing that reply's tool call and its result
- Fixed a settings change from \`/config\` and similar commands failing to save with no warning; a line under the prompt now says so
- Fixed \`/rewind\` closing without a word when some files could not be restored
- Fixed pasted images being dropped when the prompt starts with a file path such as \`/tmp/a.txt\`
- Fixed agents passed with \`--agents\` being lost once plugins loaded or reloaded
- Fixed a plugin's agent being dropped when resuming a session from the \`--resume\` picker
- Fixed Claude Code refusing to start when \`https_proxy\` or \`HTTPS_PROXY\` is a bare \`host:port\` and neither its input nor its output is a terminal (the desktop app, an SDK, cron)
- Fixed Claude Code on Linux sometimes returning to the shell while restarting itself at startup, such as after the first sign-in to a Claude apps gateway or when turning on Code Mode
- Fixed \`claude -p\` hanging before its first request when the fetch of a model's settings stalled, such as at a proxy; it now goes on without them after 10 seconds
- Fixed the screen staying blank or frozen after a brief out-of-memory error
- Fixed a rare display fault that could freeze the screen or end the session
- Fixed cloud sessions breaking when a program left thousands of connections open to the session's network proxy
- Fixed a turn hanging when a mod's \`$.model.complete\` or \`$.model.classify\` call met a usage limit: the call now gets the API's error at once; mods should handle that error
- Fixed stalls on a compaction reply with thousands of unclosed tags and on some very long WebFetch URLs; WebFetch now refuses a URL over 2,000 characters before any permission prompt
- Fixed a message with thousands of \`@\` mentions stalling before Claude replies; only the first 100 mentions are now looked up as files
- Fixed the prompt freezing after rejecting a write to a very large file; a rejected write now shows a short preview
- Fixed a crash when a burst of keys reached the search box in \`/plugin\`
- Fixed a false crash report and exit code when a suspended session resumes, or at exit, where a Linux security policy blocks a process from signalling itself
- Fixed remote MCP servers staying disconnected after a longer outage such as a VPN drop: most servers on other machines reached by hostname over https are now retried in the background for about a day
- Fixed Edit refusing with "File has not been read yet" after a compaction on unchanged files outside the project that Claude had already read in full
- Fixed Grep repeating or skipping results when paging with \`head_limit\` and \`offset\`; content and count results are now sorted by file path
- Fixed Read failing on Jupyter notebooks that contain an output of an unknown type
- Fixed NotebookEdit removing the notebook file's final newline
- Fixed the Read tool reporting 512KB instead of the real size when a file of 10 MB or more is too large to read at once
- Fixed the Bash tool's diff of changed files not naming files that are binary, too large or too many to show
- Fixed artifact publishes failing with "the source file changed between approval and publish" when a synced or remote-backed folder had only changed the file's timestamp
- Fixed a new artifact that you approved being refused in a cloud scheduled task's session, in organizations that require approval of each new artifact
- Fixed a new artifact being refused after an app built on the Agent SDK approved it, in organizations that require approval of each new artifact
- Fixed \`/artifacts\` showing part of your list, or "No artifacts yet", when a request for more of the list failed: it now tries again, then warns if it can't load the whole list
- Fixed in-process agent teammates on a different model from the lead compacting at the lead's context limit and on the wrong model; they now use their own limit and model, at that model's rate
- Fixed a finished subagent resuming on the model and effort of a sibling subagent that messaged it
- Fixed the main conversation not being told a background agent had finished when the subagent that started it ended by itself without reading the result, outside auto mode
- Fixed Claude reporting a background agent as still running when it had waited 30 seconds or more on a permission prompt in the desktop app, on the web and in the SDK
- Fixed Claude not being told in auto mode when a background agent's reply to a follow-up message was dropped, and reduced repeat wake-ups there from agents waiting on background commands
- Fixed the desktop app, Claude Code on the web and VS Code showing a raw task notification as a subagent's prompt after its background task woke it
- Fixed messages sent from another session with "later" priority joining the running turn, instead of waiting for it to end, in Remote Control and Claude Desktop sessions
- Fixed messages to cloud and Remote Control sessions being reported as failed with a stale address after a timeout or rate limit; Claude now says when a message may have arrived
- Fixed cloud sessions giving no error when a \`UserPromptSubmit\` hook blocks a message sent while Claude works
- Fixed failing hooks showing nothing: SubagentStop in background agents, SessionEnd at \`/clear\` and \`/resume\`, and CwdChanged and FileChanged in fullscreen
- Fixed a Stop hook that failed to run being shown as having reported a problem
- Fixed focus view keeping a finished reply hidden while a Stop hook was running
- Fixed Claude getting a long managed PostToolUse hook output twice when a mod added context to the tool call
- Fixed \`/model\` listing the wrong models in some terminal sessions when a project's \`.claude/settings.json\` sets \`ANTHROPIC_BASE_URL\` to an LLM gateway
- Fixed \`/statusline\` writing to \`~/.claude/settings.json\` when \`CLAUDE_CONFIG_DIR\` points to another folder
- Fixed \`claudeMdExcludes\` patterns on Windows not matching a path whose drive letter is written in the other case
- Fixed \`claude agents\` and \`claude rm\` refusing to remove a fully pushed session ("The worktree has unpushed commits") when its worktree has a file or folder named \`HEAD\` at the top level
- Fixed long ListAgents results hiding most sessions on accounts with many cloud or Remote Control sessions: long lists now come in pages
- Fixed slow turns in resumed sessions for organizations with tens of thousands of connector tool permissions
- Self-hosted runner: Fixed \`claude -p\` started by a session's script or hook waiting out rate limits, because it inherited the session's own retry setting
- Fixed the spend limit menu reporting a changed limit when the server refused it
- Fixed a second \`x\` on a task's details in \`/tasks\` stopping the next task too
- Fixed Esc being ignored on a permission prompt that had just appeared
- Fixed lists that load their rows late sometimes ignoring Enter and the arrow keys
- Fixed \`/autofix-pr\` holding the keyboard after Esc while it stopped the cloud session; the dialog now closes at once, and a stop that fails is reported afterwards with a link
- Fixed a blank screen and stray mouse codes in the shell after quitting with ctrl+c just after \u2190 opens the agents view
- Fixed Ctrl+C right after the trust question leaving the terminal in fullscreen
- Fixed the shell flashing on screen when \u2190 opens the agents view in fullscreen mode
- Fixed terminal display faults: most scrambled scrollback in Ghostty on resize, link addresses hidden in Windows Terminal under old tmux and in VTE 0.50.0, and no selection highlight with 16 colors
- Fixed some garbled rows in tmux with \`allow-passthrough\` on inside kitty, Ghostty or iTerm2
- Fixed \`/mcp\` saying no servers were configured after one was added during a session or declined; it now says what to do
- Fixed \`/hooks\` leaving out hooks given by \`--settings\`
- Fixed the \`/\` menu listing a row for each skill of the same name, though every row ran the first
- Fixed \`/teleport\` showing no message when the chosen session failed to resume
- Fixed n and N in transcript search skipping matches
- Fixed cancelling a transcript search (ctrl+o, then /) in a long session landing far from where the search started
- Fixed up and down losing the cursor's column over a short or blank line
- Fixed Tab in shell mode filling in a file name after \`&&\`, \`;\` or \`|\`, where a command goes
- Fixed the selected session leaving the screen in \`claude --resume\` and \`/resume\` when branch names or folder paths are long
- Fixed the MCP tool list in \`/mcp\` and \`/plugin\` losing your place when going back from a tool
- Fixed \`/resume\` listing one session fewer than the window has room for, and a 'Resend your message' hint after most spend caps, where resending can't help
- Fixed an MCP server's long question being cut off after one row, text fields hiding long pastes with no sign, and a doubled divider line in \`/plugin\`'s options and \`/login\`'s Bedrock and Vertex steps
- Fixed the "+N lines" count being too high for command output with links or colors, and the transcript's \`?\` help hiding how to exit in a short window
- Fixed Ctrl+C twice not closing \`/chrome\` from its browser list
- Fixed a number and Enter typed too early at an agent's plan approval in screen reader mode causing the next number to be dropped too
- Fixed Claude trying to read design system token files that do not exist when starting a deck or design
- Fixed exit not saying that a worktree was kept
- Fixed \`/hooks\` help naming input fields that do not exist
- Fixed question dialogs naming ctrl+g after the external editor key was rebound
- Fixed two sign-in error messages that pointed to the Claude subscription option on computers where \`forceLoginMethod\` is set to \`console\`
- Fixed \`/config\` saying the dialog was dismissed instead of "Set theme to \u2026" after changing the theme
- Bug fixes and reliability improvements
- Improved the speed of a session's first Bash command: shell start-up files may now run before it's approved, even if it's refused; set \`CLAUDE_CODE_DISABLE_SHELL_HEAD_START=1\` to turn this off
- Improved commits on newer models and in PowerShell: Claude is now told not to commit files that likely contain secrets
- Improved sandboxed shell commands: Claude now sees when a command exempt from the sandbox stayed in it because its permission check relied on the sandbox
- Improved the refusal for shell commands with no \`rm\` that the dangerous \`rm\` check can't parse, so Claude can resend harmless ones in plain syntax instead of giving up
- Improved resuming very long sessions: a transcript read that ends early is now retried once, so messages are lost less often
- Improved subagent answers that hit the output token limit twice: they now more often come back whole or say up front that they are partial
- Improved long replies on unrecognized models: a reply cut at 32,000 output tokens now continues with a limit of 128,000
- Improved the reminder about a completed subagent after compaction: if Claude can't read the agent's output file, it is now told to ask the agent with \`SendMessage\`
- Improved the warning shown when an API key and an Anthropic profile are both set: it now says which one is in use and how to switch to the profile
- Improved \`/plugin\`: the question before removing a marketplace now says that its plugins' settings and saved data are deleted, and a marketplace's page no longer shows another marketplace's error
- Windows: Improved start-up time with no Git Bash and no \`pwsh\` on PATH by checking PowerShell's standard install locations at once; System32's \`powershell.exe\` now wins over one earlier on PATH
- Improved startup time on Windows when PATH points to Git for Windows' bin folder, by starting git.exe directly instead of through its launcher
- Windows: Improved PowerShell tool speed by up to about half a second per command
- Improved how soon the Bash tool's diff of changed files is ready in auto and bypass permissions modes
- Improved speed of the Bash permission check on very deeply nested missing paths on macOS and Linux, and of secret masking on very long text with a URL
- Improved transcript search to find text in edits and written files
- Improved speed of reading large PNG images, and the quality of the JPEG sent in their place
- Improved the Artifact tool to read an uploaded file by the address the artifact's page shows; other forms still fail, most with a message that says to read uploads one per call, by id
- Improved the Artifact tool to ignore \`prompt\`, \`limit\` and \`label\` on some calls that do not use them instead of failing the call
- Improved MCP server pages in \`/mcp\`: local, remote and agent servers share one layout, menus end in Back, and actions are no longer numbered outside screen reader mode; use the arrow keys and Enter
- Improved narrow terminals: \`/status\`, forms and detail screens lay out better, \`/model\` and \`/effort\` fit at about 40 columns, and key hints such as \`\u2190/\u2192 to adjust\` stay
- Improved \`/install-github-app\`: the repository, secret and API key steps use the standard list and keys, with shorter messages, a spinner and clearer errors
- Improved \`/desktop\`: the download question is a standard list instead of y/n
- Changed \`ExitWorktree\` to ask before removing a worktree that may hold unsaved work; refused in don't-ask mode or with nobody to answer, unless an allow rule, auto or bypass permissions mode allows it
- Changed \`claude mcp add --scope project\` to stop, instead of overwriting the file, when \`.mcp.json\` lists its servers at the top level with no \`mcpServers\` key
- Changed the arrow keys on most permission prompts to stop at No instead of wrapping around; a number past the last answer moves to No
- Changed path checks to refuse some symbolic links
- Changed what counts as inside a working directory, so some paths now ask for permission
- Changed \`permissions.blockReadsOutsideWorkingDirectories\` to ask about more Bash commands in bypass and auto modes, and to deny some in auto mode
- Changed \`permissions.blockReadsOutsideWorkingDirectories\` to refuse more Bash commands that name a path under a Read or Edit deny rule, where it used to ask
- Changed auto mode's notice about falling back to billed classifier requests to say that an upcoming release removes the fallback; each action it would have checked will be asked about or denied
- Changed auto mode to ignore more allow rules that run any package, like \`Bash(pnpm dlx *)\`, and path or version forms of ones it already ignored (\`/usr/bin/npm run:*\`); the safety check decides those
- Changed \`/sandbox\` and most \`/config\` value lists to be unnumbered outside screen reader mode; use the arrow keys and Enter
- Changed Bash commands whose variables expand to very long text to be denied, with a message that says to use shorter values or a file
- Changed the PowerShell tool to ask before one more command, even under a rule naming it; if nothing answers, it's refused unless a whole-tool rule, auto mode or bypass permissions mode allows it
- Changed a subagent resumed by a sibling's message to follow the session's permission settings; it may now ask, or be refused where nobody can answer
- Changed \`--worktree\` with a relative \`--add-dir\` beside the launch folder to give the Bash sandbox that folder, not one beside the worktree
- Changed some \`--worktree\` starts with a relative \`--add-dir\` above the launch folder, such as \`..\`, to give the Bash sandbox, and a \`--bg\` session, only the worktree
- Changed Claude in Chrome to refuse uploading some credential files; attach those to the page yourself
- Changed artifact approval in organizations that require it for each new artifact: an artifact that only a plugin created or allowed can be refused
- Changed sessions with nobody to ask to refuse a new artifact at once, with no permission prompt, in organizations that require approval of each one
- Changed the Artifact tool to refuse calls once settings turn Artifacts off, in sessions already running too
- Changed the Artifact publish prompt to stop offering "don't ask again" in subagents and after a background task result, someone else's message or a compaction
- Changed \`claude plugin eval\` to keep its deny rules over a plugin's permission hook, and to flag calls the hook let through
- Changed MCP server logs to record the mode, action, and field names of elicitation requests and hook answers, not their full contents
- Changed most prompts to ignore answers other than Esc for a moment after resuming with \`fg\`
- Changed Code Mode to no longer refuse to start when an installed mod hooks tool calls; an administrator can still keep Code Mode off in managed settings
- Changed subagents launched without a model to stay on the model they started on when resumed, including after \`/model\`
- Changed the first subagent on a model to wait up to 1.5 seconds (10 in \`claude -p\`) for that model's settings from Anthropic, instead of starting without them
- Changed restarted background subagents, and turns that start by themselves, to wait for plugins to load
- Changed prompt history to leave out most launch prompts of sessions that another Claude Code session started, such as \`claude --bg\` run by Claude
- Changed subagent progress summaries in terminal sessions on Amazon Bedrock, Google Vertex AI and Microsoft Foundry to be written from short notes, not the whole conversation, using far fewer tokens
- Changed non-interactive (\`-p\`) mode to run fewer git commands before the first request
- Changed first-run setup to skip terminal setup in remote VS Code, Cursor and Devin Desktop sessions, where it cannot change settings
- Changed fullscreen text selection to leave out the glyph of system, thinking and inbound message lines
- Changed Anthropic-hosted cloud sessions to ignore more of a repository's flag and plugin delivery settings; its \`CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC\` now acts at most as \`DISABLE_TELEMETRY\`
- [VSCode] Added "Claude Code: Add to Chat" to the Explorer's right-click menu, which @-mentions the selected files and folders in the chat
- [VSCode] Fixed the permission prompt not showing the reason that a PreToolUse hook gives when it asks for confirmation (anthropics/claude-code#85950)
- [VSCode] Fixed long tool and file names being cut off in a permission prompt's title
- [VSCode] Fixed a terminal session's diff showing the previous proposed edit after you typed in it and Claude edited the same file again
- [VSCode] Fixed Escape also stopping Claude's response when it closes the feedback or "Build a custom style" dialog, the @-mention menu, the model, mode or "+" menu, or another popup
- [VSCode] Improved speed when Claude makes several edits in a row: queued edits share one wait for new problems; a problem may be reported with a later edit
- [VSCode] Improved @-mention file search speed in large workspaces when \`rg\` is on your \`PATH\`; results now rank much as in the terminal, with less tolerance for typos
- [VSCode] Improved startup: the model picker is ready at once in folders opened for the first time, empty windows and worktrees, except on third-party providers
- [VSCode] Changed a chat edit's diff to stay open and keep asking for approval when a terminal session in the same window sends a prompt
- [VSCode] Removed unused tools from the IDE connection (openFile, saveDocument, getOpenEditors and related)

`;
}
function x9s(o, r, n = { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION) {
  if (typeof o !== "string") return [];
  let e = p(o);
  if (e.length === 0) return [];
  let s = (0, import_chunk_tvttgr51.hB)(r), a = (0, import_chunk_tvttgr51.hB)(n), g = s && a ? e.filter(({ base: c }) => (0, import_chunk_tvttgr51.cT)(c, s.version) && (0, import_chunk_tvttgr51.Qct)(c, a.version)) : [];
  return g.length, g.flatMap(({ notes: c }) => c);
}
function kPa(o) {
  if (typeof o !== "string") return [];
  return p(o)[0]?.notes ?? [];
}
function p(o) {
  let r = /* @__PURE__ */ new Map();
  for (let [n, e] of Object.entries(l(o))) {
    if (!(0, import_chunk_tvttgr51.Kde)(n)) continue;
    let s = (0, import_chunk_tvttgr51.hB)(n)?.version;
    if (s === void 0 || r.has(s)) continue;
    r.set(s, e);
  }
  return [...r].map(([n, e]) => ({ base: n, notes: e })).sort((n, e) => (0, import_chunk_tvttgr51.cT)(n.base, e.base) ? -1 : (0, import_chunk_tvttgr51.cT)(e.base, n.base) ? 1 : 0);
}
function eKr(o) {
  try {
    let r = l(o);
    return Object.keys(r).sort((e, s) => (0, import_chunk_tvttgr51.cT)(e, s) ? 1 : -1).map((e) => {
      let s = r[e];
      if (!s || s.length === 0) return null;
      let a = s.filter(Boolean);
      if (a.length === 0) return null;
      return [e, a];
    }).filter((e) => e !== null);
  } catch (r) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(r)), [];
  }
}
async function EPa(o = { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, r) {
  let n = await IZn(r);
  if (!n || y(n, o)) A9s(r).catch((e) => (0, import_chunk_w578pjby.t)(`Failed to fetch changelog: ${(0, import_chunk_jv7av99m.D)(e).message}`, { level: "error" }));
}
function y(o, r) {
  let n = (0, import_chunk_tvttgr51.hB)(r);
  if (!n) return false;
  return !Object.keys(l(o)).some((s) => {
    try {
      return (0, import_chunk_tvttgr51.Vb)(s, n.version);
    } catch {
      return false;
    }
  });
}
function C() {
  return v.of((0, import_chunk_f9x2f6cx.N)().host);
}
