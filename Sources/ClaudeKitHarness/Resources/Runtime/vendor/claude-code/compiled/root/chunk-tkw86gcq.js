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
var chunk_tkw86gcq_exports = {};
__export(chunk_tkw86gcq_exports, {
  eW: () => eW,
  vbn: () => vbn
});
module.exports = __toCommonJS(chunk_tkw86gcq_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_09dxdt5c = require("/$bunfs/root/chunk-09dxdt5c.js");
var import_chunk_6fvsq616 = require("/$bunfs/root/chunk-6fvsq616.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_8n6jzsq4 = require("/$bunfs/root/chunk-8n6jzsq4.js");
var import_chunk_5h92z04c = require("/$bunfs/root/chunk-5h92z04c.js");
var import_chunk_gasfaevh = require("/$bunfs/root/chunk-gasfaevh.js");
var import_chunk_px0bhkvr = require("/$bunfs/root/chunk-px0bhkvr.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_0t7st4dz = require("/$bunfs/root/chunk-0t7st4dz.js");
var import_chunk_9rvw567f = require("/$bunfs/root/chunk-9rvw567f.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_fmx2hbpt = require("/$bunfs/root/chunk-fmx2hbpt.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function Fo(P) {
  return P.split(`
`).map(_e);
}
function Xo(h, c) {
  return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: h.color, children: h.text }, c);
}
function Jo(A, Ie) {
  return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: A.dim, children: A.segments.map(Xo) }, Ie);
}
function Go() {
  return [];
}
function Ho(Ue, J) {
  return Ue.x - J.x;
}
function Qo(X, Me) {
  let z = 0;
  return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { height: 1, children: X.map((D, Ze) => {
    let H = Math.max(0, D.x - z);
    return z = Math.max(z, D.x) + 1, (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [" ".repeat(H), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: D.color, children: D.char })] }, Ze);
  }) }, Me);
}
function Wo(v) {
  return (v + 1) % ee.length;
}
var Z = 3e3, q = 48, S = 3;
function Y(m) {
  let u = (0, import_chunk_sng02qpc.k)(10), { live: i, boxRef: n, children: s } = m, t;
  if (u[0] !== s) t = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", width: q - 4, height: S, children: s }), u[0] = s, u[1] = t;
  else t = u[1];
  const C = !i, l = i ? "claude" : void 0, b = i ? `${import_chunk_xcgcdx61.o$} try it` : `  ${import_chunk_xcgcdx61.zHr} demo`;
  let p;
  if (u[2] !== C || u[3] !== l || u[4] !== b) p = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { position: "absolute", marginLeft: q - 12, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: C, color: l, children: b }) }), u[2] = C, u[3] = l, u[4] = b, u[5] = p;
  else p = u[5];
  let w;
  if (u[6] !== n || u[7] !== t || u[8] !== p) w = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { ref: n, borderStyle: "round", borderColor: "inactive", paddingX: 1, width: q, height: S + 2, children: [t, p] }), u[6] = n, u[7] = t, u[8] = p, u[9] = w;
  else w = u[9];
  return w;
}
var ro = /\[(\w+):([^\]]*)\]/g;
function _e(m) {
  let i = m.startsWith("#"), n = i ? m.slice(1) : m, s = [], u = 0;
  for (let t of n.matchAll(ro)) {
    if (t.index > u) s.push({ text: n.slice(u, t.index) });
    s.push({ text: t[2], color: t[1] }), u = t.index + t[0].length;
  }
  if (u < n.length) s.push({ text: n.slice(u) });
  if (s.length === 0) s.push({ text: "" });
  return { dim: i, segments: s };
}
function x(m) {
  let w = (0, import_chunk_sng02qpc.k)(4), { frames: i } = m, n = i.map(Fo), s = (0, import_chunk_0t7st4dz.Lv)((0, import_chunk_px0bhkvr.Gu)().prefersReducedMotion), [u, t] = (0, import_chunk_8bkqeb5d.gc)(s ? null : Z), C = Math.floor(t / Z) % n.length, l = n[C];
  const b = Y, p = l.map(Jo);
  let v;
  if (w[0] !== b || w[1] !== u || w[2] !== p) v = (0, import_chunk_a46xeenj.e)(b, { boxRef: u, children: p }), w[0] = b, w[1] = u, w[2] = p, w[3] = v;
  else v = w[3];
  return v;
}
var ee = [{ label: "default", symbol: "", color: "text" }, { label: "accept edits on", symbol: import_chunk_xcgcdx61.Ngn, color: "autoAccept" }, { label: "plan mode on", symbol: import_chunk_xcgcdx61.HJe, color: "planMode" }, { label: "auto mode on", symbol: import_chunk_xcgcdx61.Ngn, color: "warning" }], te = 80, ze = 60, ne = 1400, U = 16, je = 60, Pe = 100, yo = [import_chunk_xcgcdx61.o$, import_chunk_xcgcdx61.tP, import_chunk_xcgcdx61.Fc, "\xB7"], bo = ["claude", "success", "warning", "suggestion", "autoAccept"];
function Ye(m) {
  let i = [];
  for (let n = 0; n < m; n++) i.push({ x: Math.floor(Math.random() * Pe), delay: Math.random() * 400, speed: 0.7 + Math.random() * 0.6, char: (0, import_chunk_9rvw567f.MJ)(yo), color: (0, import_chunk_9rvw567f.MJ)(bo) });
  return i;
}
function le(m) {
  let n = (0, import_chunk_sng02qpc.k)(6), { onDone: i } = m, s;
  if (n[0] === import_chunk_w1d7ygsk.R) s = Ye(40), n[0] = s;
  else s = n[0];
  let u = s, t = (0, import_chunk_0t7st4dz.Lv)((0, import_chunk_px0bhkvr.Gu)().prefersReducedMotion), [C, l] = (0, import_chunk_8bkqeb5d.gc)(t ? null : ze), [b] = (0, import_chunk_bs4h6795.y)(l), p = l - b, w;
  if (n[1] !== i) w = [i], n[1] = i, n[2] = w;
  else w = n[2];
  (0, import_chunk_8bkqeb5d.oo)(i, ne + 600, w);
  let v;
  if (n[3] !== p || n[4] !== C) {
    let P = Array.from({ length: U }, Go);
    for (const h of u) {
      let c = Math.max(0, p - h.delay);
      let A = Math.floor(c / ne * U * h.speed);
      if (A >= 0 && A < U) P[A].push(h);
    }
    for (const Ie of P) Ie.sort(Ho);
    v = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: C, position: "absolute", marginLeft: je, flexDirection: "column", width: Pe, height: U, children: P.map(Qo) });
    n[3] = p, n[4] = C, n[5] = v;
  } else v = n[5];
  return v;
}
function ce(m) {
  let b = (0, import_chunk_sng02qpc.k)(12), { text: i } = m, n = (0, import_chunk_mgh1y10w.oe)(i), s = (0, import_chunk_0t7st4dz.Lv)((0, import_chunk_px0bhkvr.Gu)().prefersReducedMotion), [u, t] = (0, import_chunk_8bkqeb5d.gc)(s ? null : te), C = n + 20, l = Math.floor(t / te) % C - 10, p;
  if (b[0] !== l || b[1] !== i) p = (0, import_chunk_fmx2hbpt.Tkn)(i, l), b[0] = l, b[1] = i, b[2] = p;
  else p = b[2];
  let { before: w, shimmer: v, after: P } = p, h;
  if (b[3] !== v) h = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "claudeShimmer", children: v }), b[3] = v, b[4] = h;
  else h = b[4];
  let c;
  if (b[5] !== P || b[6] !== w || b[7] !== h) c = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { bold: true, color: "claude", children: [w, h, P] }), b[5] = P, b[6] = w, b[7] = h, b[8] = c;
  else c = b[8];
  let A;
  if (b[9] !== u || b[10] !== c) A = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: u, children: c }), b[9] = u, b[10] = c, b[11] = A;
  else A = b[11];
  return A;
}
function de() {
  let u = (0, import_chunk_sng02qpc.k)(11), [m, i] = (0, import_chunk_bs4h6795.y)(0), n = ee[m], s = (0, import_chunk_09dxdt5c.cu)("confirm:cycleMode", "Confirmation", "shift+tab"), t, C;
  if (u[0] === import_chunk_w1d7ygsk.R) t = { "confirm:cycleMode": () => i(Wo) }, C = { context: "Confirmation" }, u[0] = t, u[1] = C;
  else t = u[0], C = u[1];
  (0, import_chunk_6fvsq616.gs)(t, C);
  let l;
  if (u[2] !== s) l = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["Press ", s, " now", `

`] }), u[2] = s, u[3] = l;
  else l = u[3];
  const b = n.symbol ? `${n.symbol} ` : "  ";
  let p;
  if (u[4] !== n.color || u[5] !== n.label || u[6] !== b) p = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: n.color, children: [b, n.label] }), u[4] = n.color, u[5] = n.label, u[6] = b, u[7] = p;
  else p = u[7];
  let w;
  if (u[8] !== l || u[9] !== p) w = (0, import_chunk_a46xeenj.e)(Y, { live: true, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [l, p] }) }), u[8] = l, u[9] = p, u[10] = w;
  else w = u[10];
  return w;
}
function M(m) {
  let n = (0, import_chunk_sng02qpc.k)(2), { children: i } = m, s;
  if (n[0] !== i) s = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, color: "claude", children: i }), n[0] = i, n[1] = s;
  else s = n[1];
  return s;
}
function d(m) {
  let n = (0, import_chunk_sng02qpc.k)(2), { children: i } = m, s;
  if (n[0] !== i) s = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "suggestion", children: i }), n[0] = i, n[1] = s;
  else s = n[1];
  return s;
}
var eW = [{ id: "at-mentions", title: "Talk to your codebase", tagline: "@ files, line refs", body: (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["Type ", (0, import_chunk_a46xeenj.e)(M, { children: "@" }), " anywhere in your prompt to find and attach a file. Claude reads it before answering."] }), (0, import_chunk_a46xeenj.e)(x, { frames: [`> what does [suggestion:@]
#type a file name\u2026`, `> what does [suggestion:@src/auth.ts]
  [suggestion:\u276F src/auth.ts]
#   src/auth.test.ts`, `> what does [suggestion:@src/auth.ts] do?
#\u25D0 Reading src/auth.ts\u2026`, `> what does [suggestion:@src/auth.ts] do?
Exports validateToken() which
checks JWT expiry and signature.`] }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["Reference specific lines with ", (0, import_chunk_a46xeenj.e)(d, { children: "src/app.ts:42" }), " and Claude jumps straight there. Works in both directions: Claude cites files the same way, so you can open them in your editor."] }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["Also try: ", (0, import_chunk_a46xeenj.e)(d, { children: "@src/" }), " to attach a whole directory."] })] }) }, { id: "modes", title: "Steer with modes", tagline: "shift+tab, plan, auto", body: (0, import_chunk_a46xeenj.e)(Je, {}) }, { id: "undo", title: "Undo anything", tagline: "/rewind, Esc-Esc", body: (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["Claude checkpoints your files before every edit. Press", " ", (0, import_chunk_a46xeenj.e)(M, { children: "Esc Esc" }), " to open ", (0, import_chunk_a46xeenj.e)(d, { children: "/rewind" }), " and go back to any earlier point: code, conversation, or both."] }), (0, import_chunk_a46xeenj.e)(x, { frames: [`[success:\u2713] Updated regex in parser.ts
#[error:8 tests failing]`, `#press Esc Esc
Rewind to:
  [suggestion:\u276F before parser.ts edit]`, `#[success:\u2713] parser.ts restored
> try a simpler approach
#\u25D0 thinking\u2026`] }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "Went down the wrong path? Rewind to before the detour and try a different prompt. Your git history stays clean." }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["Also: ", (0, import_chunk_a46xeenj.e)(d, { children: "/clear" }), " starts fresh and keeps your files.", " ", (0, import_chunk_a46xeenj.e)(d, { children: "/branch" }), " forks the conversation to try two approaches."] })] }) }, { id: "background", title: "Run in the background", tagline: "tasks, /tasks", body: (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["Long builds and test suites do not have to block you. Add", " ", (0, import_chunk_a46xeenj.e)(M, { children: "&" }), " to any bash command and it runs in the background \u2014 you keep chatting, Claude notifies you when it finishes."] }), (0, import_chunk_a46xeenj.e)(x, { frames: [`> run the test suite [claude:&]
#task started in background`, `> now fix the lint in app.ts
#\u25D0 Editing app.ts\u2026
#[warning:\u25D0] bun test \xB7 12s`, `> now fix the lint in app.ts
[success:\u2713] Removed unused import
#[warning:\u25D0] bun test \xB7 28s`, `> now fix the lint in app.ts
[success:\u2713] Removed unused import
#[success:\u2713] bun test \xB7 284 pass`] }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["Run ", (0, import_chunk_a46xeenj.e)(d, { children: "/tasks" }), " to see what's running. Claude can read the output and react to failures."] }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "Subagents show up there too." })] }) }, { id: "memory", title: "Teach Claude your rules", tagline: "CLAUDE.md, /memory", body: (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["Drop a ", (0, import_chunk_a46xeenj.e)(d, { children: "CLAUDE.md" }), " file in your repo and Claude reads it at the start of every session. Put your conventions there: test commands, style rules, do-not-touch directories."] }), (0, import_chunk_a46xeenj.e)(x, { frames: [`#\u2500 CLAUDE.md \u2500
#Run tests with: [suggestion:bun test]
#Never edit src/legacy/`, `> add tests for the cache
#\u25D0 reading CLAUDE.md\u2026`, `> add tests for the cache
Writing cache.test.ts,
running [suggestion:bun test] to verify.`] }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["Run ", (0, import_chunk_a46xeenj.e)(d, { children: "/init" }), " to generate a starter CLAUDE.md from your codebase. Run ", (0, import_chunk_a46xeenj.e)(d, { children: "/memory" }), " to edit it inline."] }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "Works at three levels: repo, your home directory (all projects), and per-directory overrides." })] }) }, { id: "mcp", title: "Extend with tools", tagline: "MCP, /mcp", body: (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["MCP servers give Claude new tools: read your Slack, query your database, control your browser. Run ", (0, import_chunk_a46xeenj.e)(d, { children: "/mcp" }), " to browse and connect servers."] }), (0, import_chunk_a46xeenj.e)(x, { frames: [`> [suggestion:/mcp]
Connected servers:
  [success:\u2713] slack    [success:\u2713] github`, `> anything urgent in #eng?
#\u25D0 [suggestion:slack] \xB7 reading channel\u2026`, `Boris posted about the merge
freeze. Also 3 PRs await
your review on github.`] }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: 'Once connected, ask Claude to "check my calendar" or "search our Notion".' }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["From your shell, run", " ", (0, import_chunk_a46xeenj.e)(d, { children: "claude mcp add my-server -- node ./my-server.js" }), " to add one."] })] }) }, { id: "automate", title: "Automate your workflow", tagline: "skills, hooks", body: (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["Save a prompt to ", (0, import_chunk_a46xeenj.e)(d, { children: ".claude/skills/deploy/SKILL.md" }), " and it becomes ", (0, import_chunk_a46xeenj.e)(d, { children: "/deploy" }), ". Run ", (0, import_chunk_a46xeenj.e)(d, { children: "/skills" }), " to see what you have."] }), (0, import_chunk_a46xeenj.e)(x, { frames: [`> [suggestion:/deploy] staging
#\u25D0 skill: deploy`, `[success:\u2713] built
[success:\u2713] tests pass
#\u25D0 pushing to staging\u2026`, `[success:\u2713] deployed
#[suggestion:staging.app.com]
#PostToolUse hook ran prettier`] }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["Hooks run your scripts on events: before a tool call, after a response, on session start. Use them to enforce rules or add context. Run ", (0, import_chunk_a46xeenj.e)(d, { children: "/hooks" }), " to see what runs when."] }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["Run ", (0, import_chunk_a46xeenj.e)(d, { children: "/install-github-app" }), " to let Claude review PRs when tagged."] })] }) }, { id: "subagents", title: "Multiply yourself", tagline: "subagents", body: (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: 'Claude can run subagents to work in parallel. Try "use subagents to search these 5 directories".' }), (0, import_chunk_a46xeenj.e)(x, { frames: [`> find any error handling bugs
#\u25D0 Running 3 subagents\u2026`, `#[warning:\u25D0] agent-1 \xB7 scanning api
#[warning:\u25D0] agent-2 \xB7 scanning utils
#[warning:\u25D0] agent-3 \xB7 scanning cli`, `#[success:\u2713] agent-1 \xB7 found reject
#[warning:\u25D0] agent-2 \xB7 scanning utils
#[success:\u2713] agent-3 \xB7 no issues`, `Found 2 issues:
  [suggestion:api/fetch.ts:42] unhandled
  [suggestion:utils/retry.ts:18] swallowed`] }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["Subagents run in isolated context. For true parallel sessions on separate branches, launch with ", (0, import_chunk_a46xeenj.e)(d, { children: "claude --worktree" }), "."] })] }) }, { id: "cross-device", title: "Code from anywhere", tagline: "/remote-control, /teleport", body: (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["Run ", (0, import_chunk_a46xeenj.e)(d, { children: "/remote-control" }), " to use this session from claude.ai/code or the Code tab in the Claude mobile app. It keeps running on this computer."] }), (0, import_chunk_a46xeenj.e)(x, { frames: [`> [suggestion:/remote-control]
#\u25D0 connecting\u2026`, `[success:\u2713] connected
see this session at
[suggestion:claude.ai/code/abc123]`, `#\u2500 on your phone \u2500
#abc123 \xB7 running tests
[warning:\u25D0] 142 of 284`, `#\u2500 on your phone \u2500
#abc123 \xB7 [success:\u2713] all pass
> ship it`] }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["Run ", (0, import_chunk_a46xeenj.e)(d, { children: "/teleport" }), " to move a session between here and the cloud \u2014 send this one up to keep it going after you close the lid, or pull a cloud session into this terminal with full history."] }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "Kick off a long task, close your laptop, check progress from your phone." })] }) }, { id: "model-dial", title: "Dial the model", tagline: "/model, /effort", body: (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["Run ", (0, import_chunk_a46xeenj.e)(d, { children: "/model" }), " to switch models. Fable for the hardest problems, Opus for complex work, Sonnet for most tasks, Haiku for quick questions. Each trades speed for depth."] }), (0, import_chunk_a46xeenj.e)(x, { frames: [`> [suggestion:/effort] high
#effort set to [claude:high]`, `> why is the list page slow?
#[claude:\u25D0 thinking deeply\u2026]`, `Three hypotheses, ranked:
 1. N+1 query in loader
 2. missing index on users`] }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [(0, import_chunk_a46xeenj.e)(d, { children: "/effort" }), " controls how long Claude thinks before answering.", " ", (0, import_chunk_a46xeenj.e)(M, { children: "high" }), " for tricky bugs, ", (0, import_chunk_a46xeenj.e)(M, { children: "low" }), " when you just need a quick edit."] }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["Also: ", (0, import_chunk_a46xeenj.e)(d, { children: "/fast" }), " gives faster output from the same model."] })] }) }];
function Je() {
  let m = (0, import_chunk_sng02qpc.k)(9), i, n;
  if (m[0] === import_chunk_w1d7ygsk.R) i = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["Press ", (0, import_chunk_a46xeenj.e)(M, { children: "shift+tab" }), " to cycle permission modes. Each mode changes how much Claude asks before acting:"] }), n = (0, import_chunk_a46xeenj.e)(de, {}), m[0] = i, m[1] = n;
  else i = m[0], n = m[1];
  let s;
  if (m[2] === import_chunk_w1d7ygsk.R) s = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "success", children: "default" }), " \u2014 ask before every edit"] }), m[2] = s;
  else s = m[2];
  let u;
  if (m[3] === import_chunk_w1d7ygsk.R) u = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "autoAccept", children: "accept edits" }), " \u2014 edit freely, ask for commands"] }), m[3] = u;
  else u = m[3];
  let t;
  if (m[4] === import_chunk_w1d7ygsk.R) t = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "planMode", children: "plan" }), " \u2014 research and propose, never touch files"] }), m[4] = t;
  else t = m[4];
  let C;
  if (m[5] === import_chunk_w1d7ygsk.R) C = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", paddingLeft: 2, children: [s, u, t, (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "warning", children: "auto" }), " \u2014 Claude decides what is safe"] })] }), m[5] = C;
  else C = m[5];
  let l;
  if (m[6] === import_chunk_w1d7ygsk.R) l = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "planMode", children: "plan" }), m[6] = l;
  else l = m[6];
  let b;
  if (m[7] === import_chunk_w1d7ygsk.R) b = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "warning", children: "auto" }), m[7] = b;
  else b = m[7];
  let p;
  if (m[8] === import_chunk_w1d7ygsk.R) p = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", gap: 1, children: [i, n, C, (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["Use ", l, " for big refactors you want to review first. Use ", b, " for long unattended tasks. Run ", (0, import_chunk_a46xeenj.e)(d, { children: "/permissions" }), " to pre-allow specific commands so Claude stops asking about them."] })] }), m[8] = p;
  else p = m[8];
  return p;
}
(0, import_chunk_bs4h6795.G)();
function yt(kt) {
  return eW.some((xt) => xt.id === kt);
}
function ft() {
  let wt = (0, import_chunk_865at33z.ge)().powerupsUnlocked ?? [];
  return new Set(wt.filter(yt));
}
function gt() {
  return false;
}
function vbn(m) {
  let c = (0, import_chunk_sng02qpc.k)(58), { onExit: i, exitOnCtrlCD: n } = m, s = n === void 0 ? false : n, { storageV5: u } = (0, import_chunk_3jkk3v3z.Ve)(), [t, C] = (0, import_chunk_bs4h6795.y)(ft), [l, b] = (0, import_chunk_bs4h6795.y)(null), [p, w] = (0, import_chunk_bs4h6795.y)(eW[0].id), [v, P] = (0, import_chunk_bs4h6795.y)(false), [h] = (0, import_chunk_bs4h6795.y)(gt), A;
  if (c[0] === import_chunk_w1d7ygsk.R) A = () => P(false), c[0] = A;
  else A = c[0];
  let Ie = A, Ue;
  if (c[1] !== t) Ue = function X2(J) {
    w(J.id), b(J), (0, import_chunk_y53wbr8a.a)("tengu_powerup_lesson_opened", { lesson_id: (0, import_chunk_78g0060s.f)(J.id), was_already_unlocked: t.has(J.id), unlocked_count: t.size });
  }, c[1] = t, c[2] = Ue;
  else Ue = c[2];
  let X = Ue, Me;
  if (c[3] !== u || c[4] !== t) Me = function H2(z) {
    if (t.has(z)) {
      return;
    }
    let D = new Set(t).add(z);
    if (C(D), (0, import_chunk_865at33z.Ke)((Ze) => ({ ...Ze, powerupsUnlocked: [...D] }), u), (0, import_chunk_y53wbr8a.a)("tengu_powerup_lesson_completed", { lesson_id: (0, import_chunk_78g0060s.f)(z), unlocked_count: D.size, all_unlocked: D.size === eW.length }), D.size === eW.length) P(true);
  }, c[3] = u, c[4] = t, c[5] = Me;
  else Me = c[5];
  let H = Me, Se;
  if (c[6] !== i) Se = function K2() {
    i("Power-ups closed");
  }, c[6] = i, c[7] = Se;
  else Se = c[7];
  let K = Se, eo;
  if (c[8] === import_chunk_w1d7ygsk.R) eo = function Ee2() {
    b(null);
  }, c[8] = eo;
  else eo = c[8];
  let Ee = eo;
  if (l) {
    let j2;
    if (c[9] !== t || c[10] !== l.id) j2 = t.has(l.id), c[9] = t, c[10] = l.id, c[11] = j2;
    else j2 = c[11];
    let he = j2;
    let E2;
    if (c[12] !== he || c[13] !== h) E2 = h && (0, import_chunk_a46xeenj.e)(import_chunk_5h92z04c.ln, { status: he ? "success" : "pending", withSpace: true }), c[12] = he, c[13] = h, c[14] = E2;
    else E2 = c[14];
    let L2;
    if (c[15] !== E2 || c[16] !== l.title) L2 = (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [E2, l.title] }), c[15] = E2, c[16] = l.title, c[17] = L2;
    else L2 = c[17];
    const _2 = he && !h ? "done" : void 0;
    let B2;
    if (c[18] === import_chunk_w1d7ygsk.R) B2 = { action: "confirm:no", hint: "go back", run: Ee }, c[18] = B2;
    else B2 = c[18];
    let I2;
    if (c[19] !== H || c[20] !== l.id) I2 = [B2, { action: "confirm:yes", hint: "mark done", run: () => {
      H(l.id), b(null);
    } }], c[19] = H, c[20] = l.id, c[21] = I2;
    else I2 = c[21];
    let V2;
    if (c[22] !== s || c[23] !== _2 || c[24] !== I2 || c[25] !== L2 || c[26] !== l.body) V2 = (0, import_chunk_a46xeenj.e)(import_chunk_vs99e3g5.Oe, { title: L2, subtitle: _2, onCancel: Ee, exitOnCtrlCD: s, isCancelActive: s, escapeAction: "go back", keys: I2, children: l.body }, "lesson"), c[22] = s, c[23] = _2, c[24] = I2, c[25] = L2, c[26] = l.body, c[27] = V2;
    else V2 = c[27];
    return V2;
  }
  let W = t.size === eW.length;
  const j = h && W ? "All powered up" : "Power-ups", E = h ? void 0 : `${t.size}/${eW.length} done`;
  let L;
  if (c[28] !== K) L = [{ action: "confirm:no", hint: "close", run: K }], c[28] = K, c[29] = L;
  else L = c[29];
  let _;
  if (c[30] !== h || c[31] !== t.size) _ = h && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [t.size, "/", eW.length, " unlocked", " "] }), (0, import_chunk_a46xeenj.e)(import_chunk_gasfaevh.$I, { ratio: t.size / eW.length, width: 16, fillColor: "claude", emptyColor: "inactive" })] }), c[30] = h, c[31] = t.size, c[32] = _;
  else _ = c[32];
  let B;
  if (c[33] !== W || c[34] !== h) B = W && !h ? (0, import_chunk_a46xeenj.e)(ce, { text: "All powered up. Now go build something." }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: W ? "Now go build something." : "Each power-up teaches one thing Claude Code can do that most people miss. Open one, read it, try it, mark it done." }), c[33] = W, c[34] = h, c[35] = B;
  else B = c[35];
  let I;
  if (c[36] !== p) I = eW.findIndex((bt) => bt.id === p), c[36] = p, c[37] = I;
  else I = c[37];
  let V;
  if (c[38] !== X) V = (Ct) => {
    let to = eW[Ct];
    if (to) X(to);
  }, c[38] = X, c[39] = V;
  else V = c[39];
  let fe;
  if (c[40] !== t) fe = eW.map((ye) => (0, import_chunk_a46xeenj.e)(import_chunk_8n6jzsq4.Qn.Item, { label: ye.title, icon: t.has(ye.id) ? (0, import_chunk_a46xeenj.e)(import_chunk_5h92z04c.ln, { status: "success" }) : (0, import_chunk_a46xeenj.e)(import_chunk_5h92z04c.ln, { status: "pending", "aria-label": "not done:" }), meta: [ye.tagline] }, ye.id)), c[40] = t, c[41] = fe;
  else fe = c[41];
  let be;
  if (c[42] !== I || c[43] !== V || c[44] !== fe) be = (0, import_chunk_a46xeenj.e)(import_chunk_8n6jzsq4.Qn, { wrap: true, defaultFocusIndex: I, onSelect: V, children: fe }), c[42] = I, c[43] = V, c[44] = fe, c[45] = be;
  else be = c[45];
  let Ce;
  if (c[46] !== v) Ce = v && (0, import_chunk_a46xeenj.e)(le, { onDone: Ie }), c[46] = v, c[47] = Ce;
  else Ce = c[47];
  let no;
  if (c[48] !== K || c[49] !== s || c[50] !== _ || c[51] !== B || c[52] !== be || c[53] !== Ce || c[54] !== j || c[55] !== E || c[56] !== L) no = (0, import_chunk_a46xeenj.o)(import_chunk_vs99e3g5.Oe, { title: j, subtitle: E, onCancel: K, exitOnCtrlCD: s, isCancelActive: s, enterAction: "open", escapeAction: "close", keys: L, children: [_, B, be, Ce] }, "lessons"), c[48] = K, c[49] = s, c[50] = _, c[51] = B, c[52] = be, c[53] = Ce, c[54] = j, c[55] = E, c[56] = L, c[57] = no;
  else no = c[57];
  return no;
}
