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
var chunk_8khjhfq8_exports = {};
__export(chunk_8khjhfq8_exports, {
  Eti: () => Eti,
  Tti: () => Tti,
  aFa: () => aFa,
  iFa: () => iFa,
  kti: () => kti,
  n8r: () => n8r,
  vti: () => vti,
  wti: () => wti
});
module.exports = __toCommonJS(chunk_8khjhfq8_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var n8r = "[changes pane] repository not shown:", wti = 'See the runner option --diff-finds-nested-repository in "claude self-hosted-runner --help" and in the operator guide.', kti = `${n8r} Further reasons are not shown: eight have been, for this session's process.`, Eti = `${n8r} The runner's first argument did not reach Claude Code in first place, so --diff-finds-nested-repository is off for this session. If a wrapper script or command hook starts Claude Code, it must put nothing before "$@": its own options go after. See "Pass every argument through" in the operator guide.`, vti = "The variable in which the runner names the folder for the checked copy of the repository's git settings (CLAUDE_CODE_DIFF_COPY_ROOT) did not reach Claude Code as an absolute path. If a wrapper script or command hook starts Claude Code, it must pass the runner's environment on unchanged.", Tti = "The git that Claude Code runs is older than 2.32, or its version could not be read; an older git would follow a .gitattributes or .gitignore committed as a link. Update git to 2.32 or newer.", t = (0, import_chunk_7cfjrnwy.fo)("Its own git settings (.git/config or .git/config.worktree)"), o = String.raw`"[a-z0-9-]{1,40}(?:\.<\.\.\.>)?\.[a-z0-9-]{1,40}" \(shown in lower case(?:, "<\.\.\.>" for the middle of its name)?\)`, s = "commondir|gitdir|reftable", n = String.raw`config|config\.worktree|HEAD|packed-refs|shallow`, r = "refs|info", i = [String.raw`oversized \.git`, String.raw`unknown \.git entry`, String.raw`no \.git/config or \.git/HEAD`, String.raw`symlinked, hardlinked or unexpected \.git/index`, String.raw`symlinked or oversized \.git/objects entry`, String.raw`\.git/objects/info/alternates`, String.raw`config config(?:\.worktree)? unlistable`, "a folder that is no longer the one that was checked", String.raw`\.git/(?:${s})`, String.raw`symlinked or unexpected \.git/(?:${n}|${r}|objects)`, String.raw`unreadable, linked or oversized \.git/(?:${n})`, String.raw`unreadable, linked or oversized entry under \.git/(?:${r})`].join("|");
function iFa(e) {
  return new RegExp(`^(?:${i})$`).test(e);
}
var a = [`${t} have a setting whose name is not shown: it is too long, or not plain letters, digits and dashes\\.`, `${t} have the setting ${o}, which is not one Claude Code accepts there\\.`, `${t} give the setting ${o} a value that is not one Claude Code accepts there\\.`, `${t} give the setting ${o} a value that runs over several lines\\.`, (0, import_chunk_7cfjrnwy.fo)("An unexpected error stopped the check of its .git folder; the session's debug log has the details."), `The check of its \\.git folder stopped at: (?:${i})\\.`, (0, import_chunk_7cfjrnwy.fo)("The check of its .git folder stopped for a reason that is not shown."), (0, import_chunk_7cfjrnwy.fo)(vti), (0, import_chunk_7cfjrnwy.fo)(Tti)], d = new RegExp(`^${(0, import_chunk_7cfjrnwy.fo)(n8r)} (?:${a.join("|")}) ${(0, import_chunk_7cfjrnwy.fo)(wti)}$`);
function aFa(e) {
  return e === kti || e === Eti || d.test(e);
}
