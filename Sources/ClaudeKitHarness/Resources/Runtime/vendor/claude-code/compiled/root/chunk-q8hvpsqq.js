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
var chunk_q8hvpsqq_exports = {};
__export(chunk_q8hvpsqq_exports, {
  VFr: () => VFr,
  cua: () => cua,
  dua: () => dua,
  fua: () => fua,
  kNo: () => kNo,
  lua: () => lua,
  uua: () => uua
});
module.exports = __toCommonJS(chunk_q8hvpsqq_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var l = { uncommitted_changes: "uncommitted changes", unfinished_operation: "an unfinished merge, rebase or the like", unpushed_commits: "commits that are not pushed", unpushed_branch: "commits on a local branch that are not pushed", moved_since_start: "new commits, or a different commit checked out, that the resumed session would not have", stash: "a stash", own_folder_entries: "files or folders beside what the runner put there; the debug log names the first", submodules: "it has submodules, which are not checked", hidden_files: "its index hides files from git status", pushed_unknown: "git cannot tell what is pushed: no 'origin', one that does not fetch every branch, or a history cut off from it", too_slow: "git took too long", unreadable: "git could not read it", own_folder_unknown: "the runner could not list it", own_folder_too_slow: "the runner could not list it in time", own_folder_not_linux: "the runner checks this folder only on Linux, so on this system it keeps every session at this limit", own_folder_start_named: "Anthropic's control plane started the session in a folder inside it, which the runner does not check", own_folder_no_look: "the runner has no way to look at it yet", own_folder_behind_script: "the runner cannot tell that it sees the folder in which --exec-path or a command hook started the session; the debug log names the cause", start_unknown: "the runner could not tell at which commit it started", branches_unknown: "the runner could not list the clone's local branches when it picked the session up", started_by_script: "the runner does not check the checkouts of sessions that --exec-path or a command hook starts", look_timed_out: "the check of its checkouts did not finish in time", look_failed: "the check of its checkouts failed" }, p = ["uncommitted_changes", "unfinished_operation", "unpushed_commits", "unpushed_branch", "stash", "own_folder_entries"];
function m(e) {
  return typeof e === "string" && Object.hasOwn(l, e);
}
var w = "work-look", kNo = "work-look-answer: ", g = 9e4, y = 65536;
function S(e, n) {
  let r = e.split(`
`).findLast((i) => i.startsWith(kNo)), s = (0, import_chunk_0jve1fep.et)(r?.slice(kNo.length) ?? "", false);
  if (!Array.isArray(s) || s.length !== n) return;
  let d = [];
  for (let i of s) {
    if (i !== null && !m(i)) return;
    d.push(i ?? void 0);
  }
  return d;
}
function lua(e, n, r, s = g) {
  let d;
  return async (i) => {
    let a = (o) => i.map(() => o);
    if (d !== void 0) return a("look_timed_out");
    let t;
    try {
      t = (0, import_chunk_9zdrdv25.WM)(e.execPath, [...e.execArgs, "self-hosted-runner", w, (0, import_chunk_w578pjby._)(i.map((o) => ({ path: o, ...e.checkoutStarts.get(o), branchTips: void 0, tipsOnStdin: true })))], { cwd: e.cwd, env: { ...e.env, ...Object.fromEntries(import_chunk_gd77dyw4.Oge.map((o) => [o, void 0])), CLAUDE_CODE_SESSION_ACCESS_TOKEN: void 0, CLAUDE_CODE_OAUTH_TOKEN: void 0, CLAUDE_SESSION_INGRESS_TOKEN_FILE: void 0 }, extendEnv: false, stdio: ["pipe", "pipe", "ignore"], windowsHide: true, detached: true, toolCgroupClass: "agent" });
    } catch {
      return a("look_failed");
    }
    d = t, t.once("exit", () => {
      d = void 0;
    }), t.stdin?.on("error", () => {
    }), t.stdin?.end((0, import_chunk_w578pjby._)(i.map((o) => e.checkoutStarts.get(o)?.branchTips ?? null)));
    let h = "", u = () => {
    }, c = await (0, import_chunk_5appeerh.me)(new Promise((o) => {
      if (t.stdout?.on("data", (k) => {
        if (h += String(k), h.length > y) o(false);
      }), t.once("error", () => {
        d = void 0, o(false);
      }), t.once("close", () => void o(true)), u = () => void o(false), n.addEventListener("abort", u, { once: true }), n.aborted) u();
    }), s);
    if (n.removeEventListener("abort", u), t.stdout?.removeAllListeners("data"), t.stdout?.destroy(), t.stdin?.destroy(), t.pid !== void 0 && t.exitCode === null && t.signalCode === null) (0, import_chunk_865at33z.lk)(t.pid);
    let f = c ? S(h, i.length) : void 0;
    if (f === void 0) r(`the check of the checkouts gave no answer: ${c === void 0 ? `stopped after ${s} ms` : `exit code ${t.exitCode}, signal ${t.signalCode}, ${h.length} characters of output`}`);
    return f ?? a(c === void 0 ? "look_timed_out" : "look_failed");
  };
}
async function dua(e, n) {
  if (e.length === 0) return [];
  if (n === void 0) return e.map(() => "started_by_script");
  let r = await n(e).catch(() => {
    return;
  });
  return r?.length === e.length ? r.filter((s) => s !== void 0) : e.map(() => "look_failed");
}
async function cua(e) {
  return e === void 0 ? "own_folder_no_look" : e().catch(() => "own_folder_unknown");
}
function VFr(e) {
  let n = (0, import_chunk_4smdap7r.M)(e);
  return Object.keys(l).filter(m).filter((r) => n.includes(r));
}
function uua(e, n) {
  return `kept_${VFr(n === void 0 ? e : [...e, n])[0]}`;
}
function fua(e, n, r) {
  let s = VFr(e), d = n === 1 ? "its checkout" : `${e.length} of its ${n} checkouts`, i = s.every((a) => p.includes(a)) ? n === 1 || e.length === 1 ? "holds" : "hold" : "may hold";
  return [...e.length > 0 ? [`${d} ${i} work that a release would lose (${s.map((a) => l[a]).join("; ")})`] : [], ...r === void 0 ? [] : [`its own folder under --base-dir/_sessions ${p.includes(r) ? "holds" : "may hold"} work that a release would lose (${l[r]})`]].join(" and ");
}
