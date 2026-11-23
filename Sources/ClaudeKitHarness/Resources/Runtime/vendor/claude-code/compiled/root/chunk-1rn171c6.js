const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_1rn171c6_exports = {};
__export(chunk_1rn171c6_exports, {
  hWo: () => hWo,
  szs: () => szs
});
module.exports = __toCommonJS(chunk_1rn171c6_exports);
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
var hWo = 32;
async function szs() {
  let { EXTERNAL_PERMISSION_MODES: o } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-3psqpqew.js"))), s = o.join(", "), { isViolinWoodEnabledCached: t } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-xrsph9qz.js"))), e = t(), n = `
Remote Control - Control local sessions from claude.ai/code or the Claude mobile app

USAGE
  claude remote-control [options]
OPTIONS
  --name <name>                    Name for the session (shown in claude.ai/code)
  --remote-control-session-name-prefix <prefix>
                                   Prefix for auto-generated session names
                                   (default: hostname; env:
                                   CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX)
  -c, --continue                   Reattach to the session \`claude remote-control\`
                                   last recorded for this directory (or one of its
                                   git worktrees) instead of creating a new one.
                                   Exits with an error if nothing was recorded
                                   here within roughly the last 4 hours
  --session-id <id>                Reattach to a specific session by ID (cannot be
                                   used with spawn flags or --continue)
  --permission-mode <mode>         Permission mode for new sessions
                                   (${s})
  --settings <file>                JSON settings file for new sessions.
                                   Read once, at start: if it changes, no session
                                   starts until you restart Remote Control. Keep
                                   it where sessions can't write.
                                   With it, sessions started from a project
                                   don't get auto-compact, or auto mode ahead of
                                   this computer's own settings, which Remote
                                   Control otherwise turns on for them
  --[no-]chrome                    Claude in Chrome for new sessions
                                   (default: off; a session started from a
                                   project follows this machine's /chrome
                                   setting)
  -d, --debug[=<filter>]           Enable debug mode for this process, with
                                   optional category filtering (e.g.
                                   --debug=api,hooks)
  --debug-file <path>              Write debug logs to file
  -v, --verbose                    Enable verbose output
  -h, --help                       Show this help
  --spawn <mode>                   Spawn mode: same-dir, worktree, session
                                   (default: same-dir)
  --capacity <N>                   Max concurrent sessions in worktree or
                                   same-dir mode (default: ${hWo})
  --[no-]create-session-in-dir     Pre-create a session in the current
                                   directory; in worktree mode this session
                                   stays in cwd while on-demand sessions get
                                   isolated worktrees (default: on)
${e ? `  --allow-unattended-tool-calls    Let your cloud sessions use this folder for
                                   this run. Their auto-mode commands run
                                   without asking, inside the sandbox only
                                   (choose a mode in /sandbox first); otherwise
                                   they ask. Start it yourself in a terminal.
                                   Not with --spawn=session, --session-id or
                                   --continue (default: off)
` : ""}
DESCRIPTION
  Remote Control allows you to control sessions on your local device from
  claude.ai/code (https://claude.ai/code) or the Claude mobile app. Run
  this command in the directory you want to work in, then connect from
  your phone or a browser.${(0, import_chunk_7d2qr9z5.yin)() ? ` Your projects on claude.ai can also ask Claude to
  work in this directory.` : ""}

  Claude and its commands run on this computer; claude.ai and the app only
  show the session. Keep this computer awake and this command running, or
  the session stops. (A Cloud session is the opposite: Claude runs in the
  cloud and this computer can be off.)
${e ? `
  Your cloud sessions can also run file, shell and MCP tools in this
  folder (see --allow-unattended-tool-calls), under this computer's
  permission rules. Those calls fail while this computer is asleep or this
  command is stopped.
` : ""}
  Remote Control runs as a persistent server that accepts multiple concurrent
  sessions in the current directory. One session is pre-created on start so
  you have somewhere to type immediately. Use --spawn=worktree to isolate
  each on-demand session in its own git worktree, or --spawn=session for
  the classic single-session mode (exits when that session ends). Press 'w'
  during runtime to toggle between same-dir and worktree.

NOTES
  - You must be logged in with a Claude account that has a subscription
  - In a folder you haven't trusted yet you'll be asked whether to trust it
    (with no terminal to ask on, run \`claude\` there once first)
  - Worktree mode requires a git repository or WorktreeCreate/WorktreeRemove hooks
`;
  console.log(n);
}
