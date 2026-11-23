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
var chunk_d159gprd_exports = {};
__export(chunk_d159gprd_exports, {
  G8t: () => G8t,
  J2o: () => J2o,
  Ozr: () => Ozr
});
module.exports = __toCommonJS(chunk_d159gprd_exports);
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_r3wrey46 = require("/$bunfs/root/chunk-r3wrey46.js");
var S = /[aeiou]/i, b = /[^aeiou][aeiou][bcdfghjklmnpqrstvz]$/i, a = { begin: "began", bind: "bound", bring: "brought", build: "built", buy: "bought", catch: "caught", choose: "chose", come: "came", cut: "cut", debug: "debugged", dig: "dug", do: "did", draw: "drew", feed: "fed", feel: "felt", fight: "fought", find: "found", fly: "flew", forget: "forgot", freeze: "froze", get: "got", give: "gave", go: "went", have: "had", hide: "hid", hit: "hit", hold: "held", input: "input", keep: "kept", know: "knew", lead: "led", leave: "left", let: "let", lose: "lost", make: "made", mean: "meant", meet: "met", override: "overrode", overwrite: "overwrote", pay: "paid", put: "put", quit: "quit", read: "read", rebuild: "rebuilt", redo: "redid", rerun: "reran", reset: "reset", rewrite: "rewrote", run: "ran", see: "saw", seek: "sought", send: "sent", set: "set", show: "showed", shut: "shut", sit: "sat", sleep: "slept", spend: "spent", spin: "spun", split: "split", spread: "spread", stand: "stood", sweep: "swept", sync: "synced", take: "took", teach: "taught", tear: "tore", tell: "told", think: "thought", throw: "threw", understand: "understood", undo: "undid", unset: "unset", win: "won", unwrap: "unwrapped", unzip: "unzipped", write: "wrote" }, u = { begin: "beginning", commit: "committing", control: "controlling", debug: "debugging", emit: "emitting", equip: "equipping", forget: "forgetting", format: "formatting", input: "inputting", occur: "occurring", omit: "omitting", output: "outputting", permit: "permitting", prefer: "preferring", quit: "quitting", refer: "referring", rerun: "rerunning", reset: "resetting", screenshot: "screenshotting", snapshot: "snapshotting", submit: "submitting", sync: "syncing", transfer: "transferring", unset: "unsetting", unwrap: "unwrapping", unzip: "unzipping" }, m = /* @__PURE__ */ new Set([...Object.entries(a).filter(([e, t]) => e !== t).map(([, e]) => e), "been", "broken", "chosen", "done", "drawn", "driven", "eaten", "fallen", "forgotten", "given", "gone", "grown", "hidden", "known", "ridden", "risen", "seen", "shown", "spoken", "taken", "thrown", "torn", "worn", "written"]);
function O(e) {
  return (e.match(/[aeiou]/gi) ?? []).length;
}
function d(e) {
  let t = e.toLowerCase();
  if (Object.hasOwn(u, t)) return u[t];
  if (/ie$/i.test(e)) return e.slice(0, -2) + "ying";
  if (/[^eoy]e$/i.test(e)) return e.slice(0, -1) + "ing";
  if (b.test(e) && O(e) === 1) return e + e.slice(-1) + "ing";
  if (/c$/i.test(e)) return e + "king";
  return e + "ing";
}
function l(e) {
  let t = e.toLowerCase();
  if (Object.hasOwn(a, t)) return a[t];
  if (/e$/i.test(e)) return e + "d";
  if (/[^aeiou]y$/i.test(e)) return e.slice(0, -1) + "ied";
  if (b.test(e) && O(e) === 1) return e + e.slice(-1) + "ed";
  if (/c$/i.test(e)) return e + "ked";
  if (Object.hasOwn(u, t)) return u[t].slice(0, -3) + "ed";
  return e + "ed";
}
function h(e, t) {
  return /^[A-Z]/.test(e) ? t.charAt(0).toUpperCase() + t.slice(1) : t;
}
function y(e) {
  if (e.length < 2 || e.length > 16) return false;
  if (!/^[A-Za-z]+$/.test(e)) return false;
  if (e === e.toUpperCase()) return false;
  let t = e.toLowerCase();
  if (m.has(t)) return false;
  if (Object.hasOwn(a, t)) return true;
  if (/ing$/i.test(e) && e.length > 4) return false;
  if (/ed$/i.test(e) && !/eed$/i.test(e) && e.length > 3) return false;
  if (/s$/i.test(e) && !/(ss|us)$/i.test(e) && e.length > 3) return false;
  return S.test(e) || /y/i.test(e);
}
var R = /* @__PURE__ */ new Set(["output", "input", "lead", "feed", "spread", "set", "cut", "split", "hit", "let", "put", "quit", "shut", "read", "go", "make", "dig", "tear", "win", "fly", "spin", "control", "permit", "have", "hold", "keep", "mean", "feel", "do", "see", "know", "think", "understand"]), L = /* @__PURE__ */ new Set([...Object.keys(a).filter((e) => !R.has(e)), ...Object.keys(u).filter((e) => !R.has(e)), "add", "analyze", "append", "apply", "archive", "assert", "attempt", "autofix", "await", "benchmark", "bisect", "call", "capture", "check", "clone", "collect", "compare", "compile", "compute", "confirm", "connect", "convert", "copy", "count", "create", "curl", "decode", "delete", "deploy", "detect", "discard", "dismiss", "display", "download", "dump", "edit", "emit", "enable", "encode", "ensure", "enumerate", "evaluate", "execute", "expand", "expect", "export", "extract", "fetch", "fill", "filter", "fix", "flush", "focus", "follow", "generate", "grep", "identify", "ignore", "import", "include", "inject", "insert", "inspect", "install", "invoke", "kill", "launch", "lint", "list", "load", "locate", "loop", "measure", "merge", "monitor", "move", "navigate", "normalize", "parse", "patch", "pick", "ping", "pipe", "poll", "post", "prepare", "preview", "print", "probe", "profile", "prune", "publish", "pull", "push", "queue", "rebase", "recheck", "record", "recover", "redirect", "reduce", "refresh", "regenerate", "reinstall", "relaunch", "reload", "remove", "rename", "render", "reopen", "repeat", "replay", "reply", "report", "request", "resolve", "restart", "restore", "retry", "revert", "save", "scan", "screenshot", "scroll", "search", "select", "serialize", "serve", "settle", "skip", "snapshot", "sort", "spawn", "squash", "stage", "start", "stash", "stop", "strip", "summarize", "switch", "sync", "tail", "tally", "test", "toggle", "touch", "trace", "track", "trigger", "trim", "truncate", "try", "typecheck", "unblock", "uninstall", "unlink", "unmount", "unpack", "update", "upgrade", "upload", "validate", "verify", "visit", "wait", "walk", "warn", "wipe"]), v = /(?:(?<![\w-])((?:(?:[Aa]nd|[Tt]hen)\s+)+)|(,\s+(?:(?:and|then)\s+)*))([a-z]{2,16})(?=$|[\s,;!?]|\.(?:\s|$))/g, q = /^(?:\s+\w+){0,2}\s+(?:is|are|was|were|has|have|do|does|did|will|would|should|can|could|passes|passed|fails|failed|exists|works|worked|succeeds|succeeded|stays|remains|looks|runs|ran|not|if|when|unless|whether)(?:n['\u2019]t)?\b/;
function g(e, t) {
  return e.replace(v, (n, r, i, s, o) => L.has(s) && !q.test(e.slice(o + n.length)) ? (r ?? i ?? "") + t(s) : n);
}
var C = /^(re|un|de|pre|co|sub|over|out|mis|auto|post)-(.+)$/i;
function J2o(e) {
  let t = e.trimStart(), n = e.slice(0, e.length - t.length), r = /^(\S+)([\s\S]*)$/.exec(t);
  if (!r) return;
  let i = r[1], s = r[2] ?? "", o = C.exec(i);
  if (o && o[2] !== void 0 && y(o[2])) {
    let p = o[1], c = o[2], f = (p + c).toLowerCase(), x = c.toLowerCase();
    if (m.has(f) || m.has(x)) return;
    let w = (k, E) => p + "-" + h(c, Object.hasOwn(k, f) ? k[f].slice(p.length) : E(c));
    return { running: n + w(u, d) + g(s, d), done: n + w(a, l) + g(s, l), infinitive: n + i.toLowerCase() + s };
  }
  if (!y(i)) return;
  return { running: n + h(i, d(i)) + g(s, d), done: n + h(i, l(i)) + g(s, l), infinitive: n + i.charAt(0).toLowerCase() + i.slice(1) + s };
}
function j(e) {
  let t = /^\s*(\S+)/.exec(e)?.[1];
  if (t === void 0) return;
  let n = (C.exec(t)?.[2] ?? t).toLowerCase();
  return L.has(n) || Object.hasOwn(a, n) || Object.hasOwn(u, n) ? J2o(e) : void 0;
}
function G8t(e, t) {
  let n = Array.isArray(e?.questions) && typeof e.questions[0]?.question === "string" ? e.questions[0].question : void 0, r = typeof e?.description === "string" ? e.description : "", i = n ?? j(r)?.running ?? (r || (t((0, import_chunk_sah8dzn4.yJ)(e ?? {})) ?? ""));
  return i ? (0, import_chunk_r3wrey46.Sh)((0, import_chunk_sah8dzn4.As)((0, import_chunk_kx2fp6pc.$c)(i)).replace(/\s+/g, " ").trim(), import_chunk_r3wrey46.oS) : "";
}
function Ozr(e, t) {
  try {
    let n = e?.getActivityDescription?.(t);
    return typeof n === "string" ? n : void 0;
  } catch {
    return;
  }
}
