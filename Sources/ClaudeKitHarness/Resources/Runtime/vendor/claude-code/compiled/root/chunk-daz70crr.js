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
var chunk_daz70crr_exports = {};
__export(chunk_daz70crr_exports, {
  N3o: () => N3o,
  hrr: () => hrr,
  iei: () => iei,
  k9r: () => k9r,
  sei: () => sei,
  uNa: () => uNa
});
module.exports = __toCommonJS(chunk_daz70crr_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_jg3mepas = require("/$bunfs/root/chunk-jg3mepas.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_6dfy8crz = require("/$bunfs/root/chunk-6dfy8crz.js");
var import_chunk_mwz7h6zx = require("/$bunfs/root/chunk-mwz7h6zx.js");
var import_chunk_c1hnv4fm = require("/$bunfs/root/chunk-c1hnv4fm.js");
var import_chunk_sk0gc06z = require("/$bunfs/root/chunk-sk0gc06z.js");
var import_chunk_37zqqqnw = require("/$bunfs/root/chunk-37zqqqnw.js");
var import_chunk_d775ds6c = require("/$bunfs/root/chunk-d775ds6c.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
function N3o() {
  return (0, import_chunk_sk0gc06z.p7)();
}
function hrr() {
  return (0, import_chunk_sk0gc06z.kae)();
}
function s() {
  if ((0, import_chunk_jg3mepas.th)()) return null;
  if (!(0, import_chunk_bzyb60p0.rHe)()) return `  - You can use the \`run_in_background\` parameter to run the command in the background. Only use this if you don't need the result immediately. ${import_chunk_bzyb60p0.UQr}`;
  return `  - You can use the \`run_in_background\` parameter to run the command in the background. ${(0, import_chunk_jg3mepas.Ly)() ? "Only use this if you don't need the result immediately; you'll be notified if it finishes while you are still working. After your reply you may not be told when it ends, and a few minutes later it is likely stopped, so if you need its result, wait for it before you reply." : "Only use this if you don't need the result immediately and are OK being notified when the command completes later. You do not need to check the output right away - you'll be notified when it finishes."}${(0, import_chunk_37zqqqnw.Jdo)()}`;
}
function l(e) {
  if ((0, import_chunk_jg3mepas.th)()) return null;
  let o = (0, import_chunk_bzyb60p0.rHe)(), t = (0, import_chunk_jg3mepas.Ly)();
  return `  - Avoid unnecessary \`Start-Sleep\` commands:
    - Do not sleep between commands that can run immediately \u2014 just run them.${o && !t ? "\n    - If your command is long running and you would like to be notified when it finishes \u2014 simply run your command using `run_in_background`. There is no need to sleep in this case." : ""}
    - Do not retry failing commands in a sleep loop \u2014 diagnose the root cause or consider an alternative approach.${e ? `
    - ${import_chunk_6dfy8crz.Qrn}` : ""}${o ? `
    - If waiting for a background task you started with \`run_in_background\`, you will be notified ${t ? "if it completes while you are still working" : "when it completes"} \u2014 do not poll.` : ""}
    - If you must poll an external process, use a check command rather than sleeping first.
    - If you must sleep, keep the duration short to avoid blocking the user.`;
}
function c(e) {
  if (e === "desktop") return "PowerShell edition: Windows PowerShell 5.1 (powershell.exe)\n   - Pipeline chain operators `&&` and `||` are NOT available \u2014 they cause a parser error. To run B only if A succeeds: `A; if ($?) { B }`. To chain unconditionally: `A; B`.\n   - Ternary (`?:`), null-coalescing (`??`), and null-conditional (`?.`) operators are NOT available. Use `if/else` and explicit `$null -eq` checks instead.\n   - Avoid `2>&1` on native executables. In 5.1, redirecting a native command's stderr inside PowerShell wraps each line in an ErrorRecord (NativeCommandError) and sets `$?` to `$false` even when the exe returned exit code 0. stderr is already captured for you \u2014 don't redirect it.\n   - `>`, `>>`, and `Out-File` usually default to UTF-8 (with BOM) in this environment, but `Set-Content`/`Add-Content` still default to the system ANSI codepage \u2014 when writing a file other tools will read, pass `-Encoding utf8` explicitly to `Out-File`/`Set-Content`.\n   - `ConvertFrom-Json` returns a PSCustomObject, not a hashtable. `-AsHashtable` is not available.";
  if (e === "core") return "PowerShell edition: PowerShell 7+ (pwsh)\n   - Pipeline chain operators `&&` and `||` ARE available and work like bash. Prefer `cmd1 && cmd2` over `cmd1; cmd2` when cmd2 should only run if cmd1 succeeds.\n   - Ternary (`$cond ? $a : $b`), null-coalescing (`??`), and null-conditional (`?.`) operators are available.\n   - Default file encoding is UTF-8 without BOM.";
  return "PowerShell edition: unknown \u2014 assume Windows PowerShell 5.1 for compatibility\n   - Do NOT use `&&`, `||`, ternary `?:`, null-coalescing `??`, or null-conditional `?.`. These are PowerShell 7+ only and parser-error on 5.1.\n   - To chain commands conditionally: `A; if ($?) { B }`. Unconditionally: `A; B`.";
}
async function uNa(e = false) {
  let o = await (0, import_chunk_d775ds6c.U_r)(), t = (0, import_chunk_865at33z.b)("tengu_brass_sled", false) ? await (0, import_chunk_c203g5kd.qBl)() : [];
  return sei({ edition: o, buildTools: t, onWindows: (0, import_chunk_cg8dqz0a.x)() === "windows", backgroundRuns: !(0, import_chunk_jg3mepas.th)(), canYield: e, isGitLeftOut: await (0, import_chunk_bzyb60p0.kLt)() });
}
function sei(e) {
  let { edition: o, buildTools: t } = e, n = e.backgroundRuns ? s() : null, i = e.backgroundRuns ? l(e.canYield === true) : null, r = e.onWindows ? "\n   - Exception: the MSVC toolchain (`cl`, `nmake`, `msbuild`) is only on PATH inside a Visual Studio developer shell, so it may be installed even if not listed. Environment changes do NOT persist between commands, so initialize and build in ONE command: `cmd /c '\"C:\\Program Files\\Microsoft Visual Studio\\<year>\\<edition>\\VC\\Auxiliary\\Build\\vcvarsall.bat\" x64 && <build command>'`" : "", a = t.length ? `
Developer tools verified on this machine's PATH: ${t.join(", ")}
   - Prefer these. A build/dev tool NOT in this list is likely not installed \u2014 do not assume \`make\`, \`gcc\`, or a package manager is available unless listed. Check with \`if (Get-Command <name> -ErrorAction SilentlyContinue) { ... }\` before relying on an unlisted tool, and prefer a listed equivalent.${r}
` : "", d = `
  - For git commands:
    - Prefer to create a new commit rather than amending an existing commit.
    - Before running destructive operations (e.g., git reset --hard, git push --force, git checkout --), consider whether there is a safer alternative that achieves the same goal. Only use destructive operations when they are truly the best approach.
    - Never skip hooks (--no-verify) or bypass signing (--no-gpg-sign, -c commit.gpgsign=false) unless the user has explicitly asked for it. If a hook fails, investigate and fix the underlying issue.
    - Do not commit files that likely contain secrets (.env, credentials.json, .claude/settings.local.json, etc). Warn the user if they specifically request to commit those files.`;
  return `Executes a given PowerShell command with optional timeout. Working directory persists between commands; shell state (variables, functions) does not.

IMPORTANT: This tool is for terminal operations via PowerShell: git, npm, docker, and PS cmdlets. DO NOT use it for file operations (reading, writing, editing, searching, finding files) - use the specialized tools for this instead.

${c(o)}
${a}
Before executing the command, please follow these steps:

1. Directory Verification:
   - If the command will create new directories or files, first use \`Get-ChildItem\` (or \`ls\`) to verify the parent directory exists and is the correct location

2. Command Execution:
   - Always quote file paths that contain spaces with double quotes
   - Capture the output of the command.

PowerShell Syntax Notes:
   - Variables use $ prefix: $myVar = "value"
   - Escape character is backtick (\`), not backslash
   - Use Verb-Noun cmdlet naming: Get-ChildItem, Set-Location, New-Item, Remove-Item
   - Common aliases: ls (Get-ChildItem), cd (Set-Location), cat (Get-Content), rm (Remove-Item)
   - ${import_chunk_mwz7h6zx.A9r}
   - Pipe operator | works similarly to bash but passes objects, not text
   - Use Select-Object, Where-Object, ForEach-Object for filtering and transformation
   - String interpolation: "Hello $name" or "Hello $($obj.Property)"
   - Registry access uses PSDrive prefixes: \`HKLM:\\SOFTWARE\\...\`, \`HKCU:\\...\` \u2014 NOT raw \`HKEY_LOCAL_MACHINE\\...\`
   - Environment variables: read with \`$env:NAME\`, set with \`$env:NAME = "value"\` (NOT \`Set-Variable\` or bash \`export\`)
   - Call native exe with spaces in path via call operator: \`& "C:\\Program Files\\App\\app.exe" arg1 arg2\`

Unix commands that DO NOT exist in PowerShell \u2014 use the equivalent instead:
   - head / tail \u2192 \`Get-Content file -TotalCount N\` / \`-Tail N\`; piped: \`| Select-Object -First N\` / \`-Last N\`
   - which \u2192 \`(Get-Command name).Source\`
   - touch \u2192 \`if (-not (Test-Path path)) { New-Item -ItemType File path }\` (NEVER use \`New-Item -Force\` on a file \u2014 it truncates existing content)
   - wc -l \u2192 \`(Get-Content file | Measure-Object -Line).Lines\`
   - mkdir -p \u2192 \`New-Item -ItemType Directory -Force path\` (\`-p\` is not a PowerShell flag)
   - rm -rf \u2192 \`Remove-Item -Recurse -Force path\`
   - ln -s \u2192 \`New-Item -ItemType SymbolicLink -Path link -Target target\`
   - chmod / chown \u2192 not applicable on Windows; use \`icacls\` only if ACL changes are required
   - 2>/dev/null \u2192 \`2>$null\` (but stderr is captured for you \u2014 usually unnecessary)
   - VAR=x cmd \u2192 \`$env:VAR = 'x'; cmd\` (PowerShell has no inline env-var prefix)
   - Bash control flow (\`if [ -f x ]\`, \`for x in *\`, backtick \`\`cmd\`\` substitution) is a parser error \u2014 use \`if (Test-Path x)\`, \`foreach ($x in ...)\`, \`$(cmd)\`

Exit-code note: \`-ErrorAction SilentlyContinue\` suppresses error OUTPUT but the cmdlet failure still causes this tool to report exit 1. To make a cmdlet failure truly non-fatal, promote it to terminating and swallow it: \`try { Cmdlet ... -ErrorAction Stop } catch {}\` (without \`-ErrorAction Stop\`, non-terminating errors skip the \`catch\` and still exit 1).

Interactive and blocking commands (this tool runs with -NonInteractive and stdin attached to the null device \u2014 console prompts read EOF or error immediately; GUI prompts can still block until timeout):
   - NEVER use \`Read-Host\`, \`Get-Credential\`, \`Out-GridView\`, \`$Host.UI.PromptForChoice\`, or \`pause\`
   - Destructive cmdlets (\`Remove-Item\`, \`Stop-Process\`, \`Clear-Content\`, etc.) may prompt for confirmation. Add \`-Confirm:$false\` when you intend the action to proceed. Use \`-Force\` for read-only/hidden items.
   - Never use \`git rebase -i\`, \`git add -i\`, or other commands that open an interactive editor

Passing multiline strings (commit messages, file content) to native executables:
   - Use a single-quoted here-string so PowerShell does not expand \`$\` or backticks inside. The closing \`'@\` MUST be at column 0 (no leading whitespace) on its own line \u2014 indenting it is a parse error:
<example>
${e.isGitLeftOut ? "tool" : "git commit"} -m @'
Commit message here.
Second line with $literal dollar signs.
'@
</example>
   - Use \`@'...'@\` (single-quoted, literal) not \`@"..."@\` (double-quoted, interpolated) unless you need variable expansion
   - For arguments containing \`-\`, \`@\`, or other characters PowerShell parses as operators, use the stop-parsing token: \`git log --% --format=%H\`

Usage notes:
  - The command argument is required.
  - You can specify an optional timeout in milliseconds (up to ${hrr()}ms / ${hrr() / 6e4} minutes for a foreground command). If not specified, commands will timeout after ${N3o()}ms (${N3o() / 6e4} minutes).
  - It is very helpful if you write a clear, concise description of what this command does.
  - If the output exceeds ${(0, import_chunk_c1hnv4fm.GW)()} characters, output will be truncated before being returned to you.
${n ? n + `
` : ""}  - Avoid using PowerShell to run commands that have dedicated tools, unless explicitly instructed:
    - File search: Use ${import_chunk_865at33z.Qr} (NOT Get-ChildItem -Recurse)
    - Content search: Use ${import_chunk_865at33z.Sr} (NOT Select-String)
    - Read files: Use ${import_chunk_k883m4fq.De} (NOT Get-Content)
    - Edit files: Use ${import_chunk_rb36kwbn.lt}
    - Write files: Use ${import_chunk_rb36kwbn.Dt} (NOT Set-Content/Out-File)
    - Communication: Output text directly (NOT Write-Output/Write-Host)
  - When issuing multiple commands:
    - If the commands are independent and can run in parallel, make multiple ${import_chunk_rb36kwbn.yt} tool calls in a single message.
    - If the commands depend on each other and must run sequentially, chain them in a single ${import_chunk_rb36kwbn.yt} call (see edition-specific chaining syntax above).
    - Use \`;\` only when you need to run commands sequentially but don't care if earlier commands fail.
    - DO NOT use newlines to separate commands (newlines are ok in quoted strings and here-strings)
  - Do NOT prefix commands with \`cd\` or \`Set-Location\` -- the working directory is already set to the correct project directory automatically.${i ? `
` + i : ""}
  - For git commands:
    - Prefer to create a new commit rather than amending an existing commit.
    - Before running destructive operations (e.g., git reset --hard, git push --force, git checkout --), consider whether there is a safer alternative that achieves the same goal. Only use destructive operations when they are truly the best approach.
    - Never skip hooks (--no-verify) or bypass signing (--no-gpg-sign, -c commit.gpgsign=false) unless the user has explicitly asked for it. If a hook fails, investigate and fix the underlying issue.
    - Do not commit files that likely contain secrets (.env, credentials.json, .claude/settings.local.json, etc). Warn the user if they specifically request to commit those files.`;
}
var iei = ["dangerouslyDisableSandbox"], k9r = [...iei, "run_in_background"];
