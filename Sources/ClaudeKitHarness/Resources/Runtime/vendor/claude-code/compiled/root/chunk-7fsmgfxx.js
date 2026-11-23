const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
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
var __using = (stack, value, async) => {
  if (value != null) {
    if (typeof value !== "object" && typeof value !== "function") __typeError("Object expected");
    var dispose, inner;
    if (async) dispose = value[__knownSymbol("asyncDispose")];
    if (dispose === void 0) {
      dispose = value[__knownSymbol("dispose")];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") __typeError("Object not disposable");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    stack.push([async, dispose, value]);
  } else if (async) {
    stack.push([async]);
  }
  return value;
};
var __callDispose = (stack, error, hasError) => {
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m, _) {
    return _ = Error(m), _.name = "SuppressedError", _.error = e, _.suppressed = s2, _;
  };
  var fail = (e) => error = hasError ? new E(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it) => {
    while (it = stack.pop()) {
      try {
        var result = it[1] && it[1].call(it[2]);
        if (it[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_7fsmgfxx_exports = {};
__export(chunk_7fsmgfxx_exports, {
  $Ul: () => $Ul,
  $qt: () => $qt,
  A0s: () => A0s,
  ADo: () => ADo,
  C0s: () => C0s,
  CDo: () => CDo,
  DUl: () => DUl,
  E0s: () => E0s,
  FUl: () => FUl,
  F_n: () => F_n,
  H0r: () => H0r,
  H8: () => H8,
  HUl: () => HUl,
  I0r: () => I0r,
  IUl: () => IUl,
  Jna: () => Jna,
  Kna: () => Kna,
  LUl: () => LUl,
  L_n: () => L_n,
  M0r: () => M0r,
  MUl: () => MUl,
  NUl: () => NUl,
  N_n: () => N_n,
  OEe: () => OEe,
  OUl: () => OUl,
  Oxt: () => Oxt,
  PEe: () => PEe,
  PUl: () => PUl,
  Pxt: () => Pxt,
  Qna: () => Qna,
  S6e: () => S6e,
  Sce: () => Sce,
  T0s: () => T0s,
  TB: () => TB,
  TDo: () => TDo,
  UUl: () => UUl,
  Uqt: () => Uqt,
  Xna: () => Xna,
  Yna: () => Yna,
  Zna: () => Zna,
  b6e: () => b6e,
  e4n: () => e4n,
  era: () => era,
  fft: () => fft,
  k0s: () => k0s,
  kt: () => kt,
  mft: () => mft,
  n4n: () => n4n,
  nQe: () => nQe,
  pft: () => pft,
  qna: () => qna,
  sC: () => sC,
  t4n: () => t4n,
  ut: () => ut,
  v0s: () => v0s,
  w0s: () => w0s
});
module.exports = __toCommonJS(chunk_7fsmgfxx_exports);
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_z8cg6ntt = require("/$bunfs/root/chunk-z8cg6ntt.js");
var import_chunk_vh92d4r0 = require("/$bunfs/root/chunk-vh92d4r0.js");
var import_chunk_wn8z7ghn = require("/$bunfs/root/chunk-wn8z7ghn.js");
var import_chunk_8jsh3ct2 = require("/$bunfs/root/chunk-8jsh3ct2.js");
var import_chunk_6tyx83ga = require("/$bunfs/root/chunk-6tyx83ga.js");
var import_buffer = require("buffer");
var import_path = require("path");
var import_os = require("os");
var import_path2 = require("path");
var import_path3 = require("path");
var import_promises = require("fs/promises");
var import_os2 = require("os");
var import_path4 = require("path");
var import_path5 = require("path");
var import_fs = require("fs");
function PUl() {
  return false;
}
function e4n(e) {
  return;
}
var L_n = "<user-code>";
function mt() {
  try {
    return (0, import_os.homedir)();
  } catch {
    return "";
  }
}
var xe = "cli", Ne = /* @__PURE__ */ new Set(["cli.js", xe, "sdk.mjs", "browser-sdk.js", "agentSdk.js"]), ye = "compiled.js", we = /^chunk-[0-9a-z]+\.js$/;
function Ae(e) {
  return e[0] === "/" && we.test(e.slice(1));
}
function Ce(e) {
  return Ae(e) || e === "/" + ye || e[0] === "/" && Ne.has(e.slice(1));
}
function OUl(e) {
  return Ae(e) ? "/" + xe : e;
}
var Ie = /^(?:\/(?:\$bunfs|~BUN)|\/?[A-Za-z]:[\\/](?:\$bunfs|~BUN))[\\/]/;
function Re(e) {
  let n = e.startsWith("file://") ? e.slice(7) : e;
  return Ie.test(n);
}
function gt(e) {
  let n = e;
  if (n.startsWith("file://")) n = n.slice(7);
  if (Re(n)) return w0s(n);
  if (n.startsWith("/snapshot/")) n = n.slice(10);
  let r = mt();
  if (r && n.startsWith(r + import_path2.sep)) n = "~" + n.slice(r.length);
  return n;
}
var V = ["src/", "packages/"];
function Et(e) {
  let n = e;
  if (!n.startsWith("../") && !n.startsWith("..\\")) return null;
  while (n.startsWith("../") || n.startsWith("..\\")) n = n.slice(3);
  let r = n.replaceAll("\\", "/");
  for (let o of V) if (r.startsWith(o)) return r;
  return null;
}
var _t = /^(?=.{1,256}$)(?:node_modules\/@)?(?:[\w-][\w.-]*\/)+[\w-][\w.-]*\.[cm]?[jt]sx?$/;
var ht = /^(?=.{1,512}$)(?:[\w@-][\w@.-]*\/)+[\w@-][\w@.-]*$/, Tt = /^(?=.{1,128}$)(?:(?:[gs]et )?(?!\d|.*\.\d)[\w$.#<>[\]]+|::bunternal::|(?:module|global|eval) code)$/;
function w0s(e) {
  let n = Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\"));
  return n === -1 ? e : e.slice(n + 1);
}
function TDo(e) {
  return Ce(e.file) || V.some((n) => e.file.startsWith(n));
}
var St = ["node:", "bun:", "internal:"], Ot = /* @__PURE__ */ new Set(["native", "unknown", "ws", "undici", "node-fetch", "isomorphic-fetch", "vercel_fetch", "utf-8-validate"]);
function Pe(e) {
  return Ot.has(e) || St.some((n) => e.startsWith(n));
}
function Kna(e) {
  return Pe(e.file);
}
function IUl(e) {
  let n = e.find((r) => !Kna(r));
  if (n === void 0) return e.length >= be;
  if (n.file === "/" + ye) return e.some((r) => r.file === L_n);
  return n.file === L_n || n.file.startsWith("node_modules/");
}
function MUl(e) {
  return Ce(e.file) && (e.function == null || e.function === "<anonymous>");
}
function Oe(e) {
  let n = e.split(/[/\\]/), r = -1;
  for (let u = n.length - 1; u >= 0; u--) if (n[u] === "node_modules") {
    r = u;
    break;
  }
  if (r === -1 || r >= n.length - 1) return null;
  let o = n[r + 1], d;
  if (o.startsWith("@")) {
    if (r + 2 >= n.length) return null;
    d = `${o}/${n[r + 2]}`;
  } else d = o;
  let c = n.at(-1);
  if (!c) return null;
  return `node_modules/${d}/${c}`;
}
function xt(e) {
  let n = e, r = false, o = gt(n), d = w0s(o), c = null;
  if (r) {
    let f = n.startsWith("file://") ? n.slice(7) : n, g = Ie.exec(f);
    if (g) {
      let p = f.slice(g[0].length).replaceAll("\\", "/");
      c = p.startsWith("root/") && ht.test(p) ? p.slice(5) : null;
    }
  }
  let u = Oe(o) ?? (c === null ? null : Oe(c));
  if (Ne.has(d) && (u === null || u.startsWith("node_modules/@anthropic-ai/")) || Re(n) && we.test(d)) return "/" + d;
  let a = r ? Et(o) ?? (c !== null && V.some((f) => c.startsWith(f)) ? c : null) : null;
  if (a !== null && _t.test(a)) return a;
  if (Pe(o)) return o;
  if (!r) return L_n;
  return u ?? d;
}
function Nt(e) {
  let n = e.trim();
  if (!n.startsWith("at ")) return null;
  let r = n.slice(3), o = r.indexOf(" ("), d, c;
  if (o !== -1 && r.endsWith(")")) d = r.slice(0, o).trim(), c = r.slice(o + 2, -1);
  else c = r.trim();
  if (d) {
    if (d = d.replace(/^async\s+/, "").replace(/^new\s+/, ""), d = d.replace(/\s*\[as\s+[^\]]+\]$/, ""), !d) d = void 0;
  }
  let u = c.match(/^(.*):(\d+):(\d+)$/);
  if (!u) return null;
  let [, a, f, g] = u, p = xt(a);
  if (d && !Tt.test(d)) d = L_n;
  return { file: p, line: Number(f), column: Number(g), function: p === L_n && d ? L_n : d };
}
var be = 50;
function I0r(e, n = be) {
  let r = [];
  for (let o of t4n(e).split(`
`)) {
    let d = Nt(o);
    if (d) {
      if (r.push(d), r.length >= n) break;
    }
  }
  return r;
}
function t4n(e) {
  let n = typeof e.stack === "string" ? e.stack : "", r = typeof e.message === "string" ? e.message : "", o = yt(n, e.name, r);
  return o === -1 ? n : n.slice(o + 1);
}
function yt(e, n, r) {
  let o = (c) => c !== "" && e.startsWith(`${c}
`);
  if (r !== "") {
    let c = typeof n === "string" && n !== "" ? `${n}: ${r}` : "";
    if (c !== "" && o(c)) return c.length;
    let u = `: ${r}`, a = e.indexOf(`${u}
`);
    return a > 0 && !e.slice(0, a).includes(`
`) ? a + u.length : n === "" && o(r) ? r.length : -1;
  }
  let d = n === void 0 ? "Error" : typeof n === "string" ? n : typeof n === "number" || typeof n === "boolean" || typeof n === "bigint" || n === null ? String(n) : "";
  return o(d) ? d.length : -1;
}
function qna(e) {
  let n = typeof e.stack === "string" ? e.stack : "", r = t4n(e), d = r.length < n.length && n.endsWith(r) ? r.replace(/\n$/, "").split(`
`) : [];
  return d.every((c) => c.trimStart().startsWith("at ")) ? d : [];
}
function k0s(e, n) {
  try {
    let r = qna(e), o = e.name === "" ? n : `${e.name}: ${n}`;
    e.stack = [o, ...r].join(`
`), e.message = n;
  } catch {
  }
  return e;
}
function HUl(e, n) {
  return [`${e.name}: ${e.message}`, ...n.map((r) => {
    let o = `${r.file}${r.line ? `:${r.line}` : ""}${r.column ? `:${r.column}` : ""}`;
    return r.function ? `    at ${r.function} (${o})` : `    at ${o}`;
  })].join(`
`);
}
class PEe {
  #e;
  constructor(e) {
    this.#e = e;
  }
  get path() {
    return this.#e;
  }
  static filesystemRoot() {
    return new PEe((0, import_path3.parse)(process.execPath).root || import_path3.sep);
  }
  static forTests(e) {
    if (!(0, import_path3.isAbsolute)(e)) throw Error("a test start folder must be absolute");
    return new PEe(e);
  }
}
function ve(e, n, r, o) {
  let d = { ...o };
  for (let c of Object.keys(o)) if (/^(?:OLD)?PWD$/i.test(c)) delete d[c];
  return { cwd: e.path, args: ["-C", n, ...r], env: d };
}
var $qt = "CLAUDE_CODE_FOUND_REPOSITORY_GIT";
var N_n = `f() { git --git-dir="$1" for-each-ref --format='%(objectname)'; }; f`;
function E0s(e) {
  return e.includes(import_path5.delimiter) ? null : e;
}
function Uqt() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE || import_chunk_c203g5kd.s.CLAUDE_CODE_PLUGIN_PREFER_HTTPS;
}
var H8 = "--upload-pack=git-upload-pack", CDo = ["-c", `core.alternateRefsCommand=${N_n}`], Yna = { config: ["-c", "fetch.writeCommitGraph=false", "-c", "fetch.bundleURI=", "-c", "transfer.bundleURI=false"], options: ["--no-tags", "--no-write-fetch-head", "--refmap=", "--no-recurse-submodules"] }, DUl = ["-c", "fetch.unpackLimit=0", "-c", "transfer.unpackLimit=0"], Xna = [["log.showSignature", "false"], ["format.pretty", "medium"]], Jna = [["gc.auto", "0"], ["maintenance.auto", "false"]], Qna = [["diff.autoRefreshIndex", "false"]];
function M0r() {
  return (0, import_chunk_cg8dqz0a.x)() === "windows" ? "\\\\.\\NUL" : "/dev/null";
}
var Ft = /^core\.hooksPath=(?:\/dev\/null|\\\\\.\\nul)$/i, Gt = ["applypatch-msg", "pre-applypatch", "post-applypatch", "pre-commit", "pre-merge-commit", "prepare-commit-msg", "commit-msg", "post-commit", "pre-rebase", "post-checkout", "post-merge", "pre-push", "pre-receive", "update", "proc-receive", "post-receive", "post-update", "reference-transaction", "push-to-checkout", "pre-auto-gc", "post-rewrite", "sendemail-validate", "fsmonitor-watchman", "p4-changelist", "p4-prepare-changelist", "p4-post-changelist", "p4-pre-submit", "post-index-change"], v0s = Gt.map((e) => [`hook.${e}.enabled`, "false"]), Lt = "tengu_cozy_parasol", Le = new import_chunk_8jsh3ct2.ex();
function LUl(e) {
  return Le.register(e);
}
function Mt() {
  return Le.read(Lt, true);
}
function Pxt() {
  return [["core.fsmonitor", ""], ["core.hooksPath", M0r()], ["core.askPass", ""], ["protocol.ext.allow", "never"], ...Mt() ? [["core.alternateRefsCommand", N_n]] : [], ["submodule.recurse", "false"], ...Xna, ...Jna, ...Qna, ...v0s];
}
var Dt = /* @__PURE__ */ new Set(["core.hooksPath", "core.askPass", "submodule.recurse", ...v0s.map(([e]) => e)]), T0s = { GIT_NO_LAZY_FETCH: "1", GIT_NO_REPLACE_OBJECTS: "1", GIT_TERMINAL_PROMPT: "0", ...import_chunk_gd77dyw4.bft };
function Zna(e, { allowGitTerminalPrompt: n = false } = {}) {
  return (0, import_chunk_gd77dyw4.Hr)(T0s, (r, o) => !(n && o === "GIT_TERMINAL_PROMPT") && !De(e, o));
}
function Sce(e, n, r, o = r.GIT_CONFIG_COUNT, { allowRepoGitHooks: d = false, allowGitTerminalPrompt: c = false, hooksAlsoLose: u } = {}) {
  let a = (0, import_path4.basename)(e).toLowerCase();
  if (!/^git(\.exe|\.cmd|\.bat|\.com)?$/.test(a)) return null;
  let f = d ? Pxt().filter(([p]) => !Dt.has(p)) : Pxt(), g = Me(n).map((p) => n[p]);
  return { args: f.filter(([p]) => !g.some((m) => m.startsWith(`${p}=`))).flatMap(([p, m]) => ["-c", `${p}=${m}`]).concat(Ut(n)), env: { ...r, ...(0, import_chunk_9zdrdv25.P0s)(r, { runsUserHooks: d, startsNoHelper: Bt(n, r), hooksAlsoLose: u }), ...Zna(r, { allowGitTerminalPrompt: c }), ...TB(o, f), GIT_PROXY_COMMAND: r.GIT_PROXY_COMMAND ?? "" } };
}
var $t = /* @__PURE__ */ new Set(["cat-file", "check-attr", "check-ignore", "config", "diff", "diff-files", "diff-index", "diff-tree", "for-each-ref", "grep", "hash-object", "log", "ls-files", "ls-tree", "merge-base", "reflog", "rev-list", "rev-parse", "show", "show-ref", "status", "symbolic-ref"]);
function Bt(e, n) {
  let r = Ht(e);
  return r !== void 0 && $t.has(r) && ["GIT_NO_LAZY_FETCH", ...Object.keys(import_chunk_gd77dyw4.bft)].every((o) => !De(n, o) || /^(?:1|true|yes|on)$/i.test(sC(n, o) ?? ""));
}
var ke = /* @__PURE__ */ new Set(["-C", "--git-dir", "--work-tree", "--namespace", "--super-prefix", "--config-env", "--attr-source", "--exec-path"]);
function Ht(e) {
  let n = 0;
  while (n < e.length) {
    let r = e[n];
    if ((r === "-c" || ke.has(r)) && n + 1 < e.length) n += 2;
    else if (r.startsWith("-")) n += 1;
    else return r;
  }
  return;
}
function Me(e) {
  let n = [], r = 0;
  while (r < e.length) {
    let o = e[r];
    if (o === "-c" && r + 1 < e.length) n.push(r + 1), r += 2;
    else if (ke.has(o) && r + 1 < e.length) r += 2;
    else if (o.startsWith("-")) r += 1;
    else break;
  }
  return n;
}
function Ut(e) {
  let n = [...e];
  for (let r of Me(n)) if (Ft.test(n[r])) n[r] = `core.hooksPath=${M0r()}`;
  return n;
}
var OEe = { GIT_TERMINAL_PROMPT: "0", GIT_ASKPASS: "", GCM_INTERACTIVE: "never" };
function NUl(e) {
  let n = {};
  for (let [r, o] of Object.entries(OEe)) if (sC(e, r) === void 0) n[r] = o;
  return n;
}
function nQe(e = process.env) {
  return { ...e, ...S6e(e, (n, r) => Object.hasOwn(OEe, n) && r !== n), ...OEe, ...TB(sC(e, "GIT_CONFIG_COUNT"), [["credential.interactive", "false"]], e) };
}
function S6e(e, n) {
  let r = {};
  for (let o of Object.keys(e)) if (n(o.toUpperCase(), o)) r[o] = void 0;
  return r;
}
function sC(e, n) {
  if (e[n] !== void 0 || (0, import_chunk_cg8dqz0a.x)() !== "windows") return e[n];
  for (let [r, o] of Object.entries(e)) if (r.toUpperCase() === n && o !== void 0) return o;
  return;
}
function De(e, n) {
  if (Object.hasOwn(e, n)) return true;
  return (0, import_chunk_cg8dqz0a.x)() === "windows" && Object.keys(e).some((r) => r.toUpperCase() === n);
}
function TB(e, n, r = {}) {
  let o = Number(e), d = Number.isInteger(o) && o > 0 ? o : 0, c = { GIT_CONFIG_COUNT: String(d + n.length) };
  n.forEach(([a, f], g) => {
    c[`GIT_CONFIG_KEY_${d + g}`] = a, c[`GIT_CONFIG_VALUE_${d + g}`] = f;
  });
  let u = new Set(Object.keys(c));
  return { ...S6e(r, (a, f) => u.has(a) && !u.has(f)), ...c };
}
var Oxt = ["-c", "core.sshCommand=ssh -o BatchMode=yes -o StrictHostKeyChecking=yes"], Wt = "-o BatchMode=yes -o StrictHostKeyChecking=yes", jt = "-o BatchMode=yes", $e = "-batch";
function Vt(e, n) {
  switch (e) {
    case "ssh":
      return n ? Wt : jt;
    case "plink":
      return $e;
    case "other":
      return;
  }
}
function H0r(e, n) {
  let r = (0, import_chunk_cg8dqz0a.x)() === "windows" ? e.replace(/\\/g, "/") : e;
  return `CDPATH= cd -- ${(0, import_chunk_vh92d4r0.No)([r])} 2>/dev/null || cd / || exit 1; ${n}`;
}
function fft() {
  let e = "";
  try {
    e = (0, import_os2.homedir)();
  } catch {
  }
  return (0, import_path4.isAbsolute)(e) ? e : (0, import_path4.resolve)("/");
}
function era(e, n) {
  if (e !== void 0 && e !== "auto") return e;
  let r = Yt(n).toLowerCase().replace(/\.exe$/, "");
  return ["ssh", "plink", "tortoiseplink"].includes(r) ? r : "auto";
}
function Yt(e) {
  let n = "", r, o = true;
  for (let c = 0; c < e.length; c++) {
    let u = e[c], a;
    if (r === void 0 && /[ \t\n\r]/.test(u)) o = false;
    else if (r === void 0 && (u === "'" || u === '"')) r = u;
    else if (u === r) r = void 0;
    else if (u === "\\" && r !== "'") {
      if (c++, c >= e.length) return "";
      a = e[c];
    } else a = u;
    if (o && a !== void 0) n += a;
  }
  if (r !== void 0) return "";
  let d = (0, import_chunk_cg8dqz0a.x)() === "windows" ? /[\\/]/ : /\//;
  return n.split(d).filter((c) => c !== "").at(-1) ?? "";
}
function Be(e, n) {
  return { ...e, ...S6e(e, (r) => r === "GIT_SSH_COMMAND" || r === "GIT_SSH"), GIT_SSH: void 0, GIT_SSH_COMMAND: n };
}
function ADo(e, n, { strictHostKeys: r = true } = {}) {
  let { chosen: o, named: d } = z(e, n), c = Vt(d === void 0 ? "ssh" : Jt(e, d), r);
  if (c === void 0 || c === $e && Kt(o)) return { command: o, env: e };
  let u = `${o} ${c}`;
  return { command: u, env: Be(e, u) };
}
function z(e, n) {
  let r = J(sC(e, "GIT_SSH_COMMAND")) ?? J(n), o = J(sC(e, "GIT_SSH"));
  return { chosen: r ?? (0, import_chunk_vh92d4r0.No)([o ?? "ssh"]), named: r !== void 0 ? Xt(r) : o };
}
function FUl(e, n) {
  let r = sC(e, "GIT_SSH_VARIANT"), { chosen: o, named: d } = z(e, n);
  return (r === void 0 || r === "auto") && d !== void 0 && !["ssh", "plink", "tortoiseplink"].includes(He(d)) ? o : void 0;
}
async function $Ul(e, n) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows") return e;
  let r = sC(e, "GIT_SSH_COMMAND");
  if (r !== void 0) return r.trim() === "" ? e : ADo(e, void 0, { strictHostKeys: false }).env;
  let o = await n(["config", "--null", "--get", "core.sshCommand"]), d = o.exitCode === 0 && o.stdout.includes("\0") ? (0, import_chunk_7cfjrnwy.nt)(o.stdout, "\0") : void 0;
  if (d?.trim() === "") return e;
  return ADo(e, d, { strictHostKeys: false }).env;
}
function J(e) {
  return e !== void 0 && e.trim() !== "" ? e : void 0;
}
function Jt(e, n) {
  let r = sC(e, "GIT_SSH_VARIANT");
  if (r !== void 0 && r !== "auto") return r === "plink" ? "plink" : ["putty", "tortoiseplink", "simple"].includes(r) ? "other" : "ssh";
  let o = He(n);
  return o === "ssh" || o === "plink" ? o : "other";
}
function He(e) {
  return (0, import_path4.basename)(e.trim().replace(/\\/g, "/")).toLowerCase().replace(/\.exe$/, "");
}
function Kt(e) {
  let n = e.trim().match(/^(?:"[^"]*"|'[^']*'|\S+)/)?.[0] ?? "";
  return /(?:^|\s)-batch(?:\s|$)/.test(e.trim().slice(n.length));
}
function Xt(e) {
  let n = e.trim().match(/^(?:"([^"]*)"|'([^']*)'|(\S+))/);
  return n?.[1] ?? n?.[2] ?? n?.[3] ?? "";
}
var zt = ["-c", "protocol.ext.allow=never", "-c", "protocol.fd.allow=never", "-c", "protocol.git.allow=never", "-c", "protocol.ftp.allow=never", "-c", "protocol.ftps.allow=never"];
function Zt(e) {
  return { ...e, ...S6e(e, (n) => n === "GIT_ALLOW_PROTOCOL"), GIT_ALLOW_PROTOCOL: void 0 };
}
function qt(e) {
  let n = sC(e, "GIT_ALLOW_PROTOCOL");
  if (n === void 0) return [];
  let r = new Set(n.split(":"));
  return ["https", "http", "ssh", "file"].filter((o) => !r.has(o)).flatMap((o) => ["-c", `protocol.${o}.allow=never`]);
}
function Qt(e) {
  return [...zt, ...qt(e)];
}
var en = ["-c", "init.defaultRefFormat=files"], Fe = { GIT_DEFAULT_REF_FORMAT: "files" }, tn = ["-c", "core.longpaths=true"];
function nn(e = nQe(rn()), n) {
  let r = [...Qt(e), ...en, ...tn], o = sC(e, "GIT_SSH_VARIANT"), d = o === void 0 || o === "auto" ? { ...e, ...S6e(e, (c) => c === "GIT_SSH_VARIANT"), GIT_SSH_VARIANT: era(n.variant, z(e, n.command).chosen) } : e;
  return { pinArgs: r, inCheckoutArgs: [...import_chunk_gd77dyw4.Nn, ...Oxt, ...r], env: { ...Be(Zt(d), H0r(fft(), ADo(d, n.command).command)), ...S6e(e, (c, u) => Object.hasOwn(import_chunk_gd77dyw4.bft, c) && u !== c), ...import_chunk_gd77dyw4.bft, ...S6e(e, (c, u) => Object.hasOwn(Fe, c) && u !== c), ...Fe } };
}
function rn() {
  let e = new Set(import_chunk_gd77dyw4.q_n), n = process.env;
  return { ...n, ...S6e(n, (r) => e.has(r)), ...Object.fromEntries([...e].map((r) => [r, void 0])) };
}
function b6e(e, n) {
  let r = nn(void 0, n);
  return { ...r, env: { ...r.env, GIT_CEILING_DIRECTORIES: Ue((0, import_path4.dirname)(e)) } };
}
function n4n(e) {
  let n = {};
  for (let r of [...Object.keys(OEe), "GIT_CEILING_DIRECTORIES"]) {
    let o = e[r];
    if (o !== void 0) n[r] = o;
  }
  return n;
}
function Ue(e) {
  let n = E0s((0, import_path4.resolve)(e));
  if (n === null) throw new import_chunk_jv7av99m.A(`Cannot run git under ${(0, import_path4.resolve)(e)}: its path contains "${import_path4.delimiter}", which git's discovery ceiling (a "${import_path4.delimiter}"-separated list) cannot express. Use a location without "${import_path4.delimiter}" for this directory (the plugins cache \u2014 CLAUDE_CODE_PLUGIN_CACHE_DIR \u2014 or the temporary directory \u2014 TMPDIR \u2014 whichever this path is under).`, "git working directory path contains the PATH delimiter; git discovery ceiling inexpressible");
  return n;
}
async function F_n(e, n) {
  let r = (0, import_path4.dirname)(e);
  return await (0, import_promises.mkdir)(r, { recursive: true }), { cwd: r, env: { ...n, GIT_CEILING_DIRECTORIES: Ue((0, import_path4.dirname)(r)) } };
}
var We = 9, on = /^(?<opening>(?:(?:\/usr\/bin\/)?env(?: -u \w+)+ )?\/bin\/sh -c 'exec 9<"\$1" && shift && exec "\$@"' srt-args )\/proc\/(?<pid>\d+)\/fd\/(?<fd>\d+)/;
function UUl(e) {
  let n = (0, import_chunk_z8cg6ntt.B4n)() ? on.exec(e) : null;
  if (n === null || Number(n.groups?.pid) !== process.pid) return { command: e };
  let r = e.slice(n[0].length);
  return { command: `${n.groups?.opening}/proc/self/fd/${We}${r}`, bwrapProfileFd: Number(n.groups?.fd) };
}
function C0s(e, n) {
  if (n === void 0) return e === void 0 ? [] : [e];
  let r = Array(We - 4).fill("ignore");
  return [e ?? "ignore", ...r, n];
}
var A0s = /[\\/](cmd|(mingw64|ucrt64|clangarm64)[\\/]bin)[\\/]git\.exe$/i;
function je() {
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows") return false;
  try {
    return (0, import_fs.closeSync)((0, import_fs.openSync)("\\\\.\\CONOUT$", "r+")), true;
  } catch {
    return false;
  }
}
var cn = 1e3, un = 60;
function pft(e, { abortSignal: n, timeout: r = 10 * un * cn, input: o, stdio: d = ["ignore", "pipe", "pipe"], useToolMemoryCgroup: c, onExit: u } = {}) {
  var _stack = [];
  try {
    n?.throwIfAborted();
    const a = __using(_stack, import_chunk_w578pjby.tw`exec: ${e.slice(0, 200)}`);
    try {
      let f = (0, import_chunk_9zdrdv25.eBl)(e, { env: process.env, maxBuffer: 1e6, timeout: r, cwd: (0, import_chunk_18rsj2ts.Mxt)(), stdio: d, reject: false, input: o, useToolMemoryCgroup: c });
      if (u?.(f.exitCode), !f.stdout) return null;
      return f.stdout.trim() || null;
    } catch {
      return null;
    }
  } catch (_) {
    var _error = _, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
var Q = 1e3, ee = 60, mft = "/proc/self/fd/3";
function kt(e, n, r = { timeout: 10 * ee * Q, preserveOutputOnError: true, useCwd: true }) {
  return Ze(() => ut(e, n, { allowRepoGitHooks: r.allowRepoGitHooks, gitHooksAlsoLose: r.gitHooksAlsoLose, allowGitTerminalPrompt: r.allowGitTerminalPrompt, abortSignal: r.abortSignal, timeout: r.timeout, preserveOutputOnError: r.preserveOutputOnError, cwd: r.cwd ?? (r.useCwd && !(0, import_chunk_wn8z7ghn.ZC)() ? (0, import_chunk_18rsj2ts.Mxt)() : void 0), env: r.env, extendEnv: r.extendEnv, stdin: r.stdin, input: r.input, stdout: r.stdout, stderr: r.stderr, maxBuffer: r.maxBuffer, stripFinalNewline: r.stripFinalNewline, useToolMemoryCgroup: r.useToolMemoryCgroup, toolCgroupClass: r.toolCgroupClass, waitForExitAfterKill: r.waitForExitAfterKill, killOutright: r.killOutright, inheritFd: r.inheritFd, gitStartsIn: r.gitStartsIn }));
}
async function Ze(e) {
  try {
    return await e();
  } catch (n) {
    return (0, import_chunk_k449cc64.i)(n), { stdout: "", stderr: "", code: 1, error: (0, import_chunk_jv7av99m.D)(n).message };
  }
}
function ut(e, n, r) {
  return Ze(() => r === void 0 ? ze(e, n) : ze(e, n, r));
}
function te(e) {
  if (e <= 1) return;
  try {
    process.kill(-e, "SIGTERM");
  } catch {
  }
}
var ln = 6e3, fn = 2e3;
function pn(e, n, r) {
  let o, d = () => {
    te(n), o = setTimeout(({ stdout: c, stderr: u }) => {
      c?.destroy(), u?.destroy();
    }, fn, e);
  };
  if (r.aborted) d();
  else r.addEventListener("abort", d, { once: true });
  return () => {
    r.removeEventListener("abort", d), clearTimeout(o);
  };
}
var mn = 5e3;
function gn(e, n, r, o, d) {
  let c, u = false, a = () => {
    if (e.exitCode !== null || e.signalCode !== null) return;
    Promise.resolve().then(() => o(n)).catch(() => false).then((f) => {
      if (u) return;
      if (!f) {
        d.abort(r.reason);
        return;
      }
      c = setTimeout((g, p, { stdout: m, stderr: O }) => {
        g.abort(p), m?.destroy(), O?.destroy();
      }, mn, d, r.reason, e);
    });
  };
  if (r.aborted) a();
  else r.addEventListener("abort", a, { once: true });
  return () => {
    u = true, r.removeEventListener("abort", a), clearTimeout(c);
  };
}
async function En(e, n) {
  if (e.pid === void 0 || e.exitCode !== null || e.signalCode !== null) return;
  await (0, import_chunk_5appeerh.me)(new Promise((r) => e.once("exit", () => r())), n);
}
function Z(e) {
  return (0, import_chunk_jv7av99m.w)(e) === "ERR_CHILD_PROCESS_STDIO_MAXBUFFER" || e?.isMaxBuffer === true || e?.name === "MaxBufferError";
}
var P = { cwd: "execFileNoThrow spawn rejected: null byte in cwd", file: "execFileNoThrow spawn rejected: null byte in executable path", argv: "execFileNoThrow spawn rejected: null byte in argv", envName: "execFileNoThrow spawn rejected: null byte in env name", envValue: "execFileNoThrow spawn rejected: null byte in env value" };
function _n(e, n, r, o, d, c) {
  let u = `the runtime rejected ${qe((0, import_path.basename)(e))} because`;
  if (typeof r === "string" && r.includes("\0")) return { telemetry: P.cwd, local: `${u} the working directory contains a null byte (\\0)` };
  if (e.includes("\0")) return { telemetry: P.file, local: `${u} the executable path contains a null byte (\\0)` };
  let a = n.findIndex((m) => typeof m === "string" && m.includes("\0"));
  if (a !== -1) return { telemetry: P.argv, local: `${u} the argument at index ${a} (zero-based) contains a null byte (\\0)` };
  let f = Object.entries({ ...d, ...o }).filter(([, m]) => m !== void 0), g = f.find(([m]) => m.includes("\0"));
  if (g !== void 0) return { telemetry: P.envName, local: `${u} the name of environment variable ${Ke(g[0])} contains a null byte (\\0)${Ve(g, c)}` };
  let p = f.find(([, m]) => typeof m === "string" && m.includes("\0"));
  return p && { telemetry: P.envValue, local: `${u} the value of environment variable ${Ke(p[0])} contains a null byte (\\0)${Ve(p, c)}` };
}
function Ve([e, n], r) {
  return r[e] === n ? "; every program this process starts will fail the same way until that variable is removed from its environment" : " (in the env passed for this command)";
}
var Je = 200;
function hn(e) {
  return e === 1 ? "1 character" : `${e} characters`;
}
function qe(e) {
  return (0, import_chunk_w578pjby.cs)(e).slice(1, -1).replace(/[^\x20-\x7e]/g, (n) => `\\u${n.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function Ke(e) {
  let n = e.indexOf("="), r = n === -1 ? e : e.slice(0, n), o = r.length > Je, d = `"${qe(o ? r.slice(0, Je) : r)}"${o ? "\u2026" : ""}`;
  return n === -1 ? d : `${d} (then '=' and ${hn(e.length - n - 1)}, not shown)`;
}
var Tn = /* @__PURE__ */ new Set(["EPIPE", "ECONNRESET", "ENOTCONN", "EOF"]);
function Sn(e) {
  let n = {}, r;
  try {
    r = e.stdin;
  } catch {
    return n;
  }
  if (!r) return n;
  return r.removeAllListeners("error"), r.on("error", (o) => {
    let d = (0, import_chunk_jv7av99m.w)(o) ?? "unknown";
    if (Tn.has(d)) return;
    n.truncatedBy ??= d, e.kill();
  }), n;
}
function On(e, n) {
  if (e.shortMessage) return e.shortMessage;
  if (typeof e.signal === "string") return e.signal;
  return String(n);
}
function xn(e, n) {
  if (!(0, import_chunk_jv7av99m.pa)(n) || n.code === void 0 || typeof n.syscall !== "string" || !n.syscall.startsWith("spawn") || e.exitCode !== void 0 || e.timedOut || e.isCanceled || (0, import_chunk_jv7av99m.w)(e) === n.code) return;
  return `Command failed with ${n.code}: ${e.command}
${n.message}`;
}
var yn = 3, wn = 1e8;
function Xe(e, n) {
  if (e instanceof Uint8Array && n === "utf8-keep-bom") return Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8");
  let r = e instanceof Uint8Array ? Buffer.from(e).toString("latin1") : typeof e === "string" ? e : "";
  return n === "utf8-keep-bom" ? Buffer.from(r, "latin1").toString("utf8") : r;
}
async function ze(e, n, { abortSignal: r, timeout: o = 10 * ee * Q, preserveOutputOnError: d = true, cwd: c, env: u, extendEnv: a, maxBuffer: f, shell: g, stdin: p, input: m, stdout: O, stderr: M, stripFinalNewline: ne, encoding: N, allowRepoGitHooks: Qe, gitHooksAlsoLose: et, allowGitTerminalPrompt: tt, gitStartsIn: re, useToolMemoryCgroup: rt = true, toolCgroupClass: ot = "helper", waitForExitAfterKill: st = false, killOutright: oe = false, onStdoutData: se, inheritFd: ie, bwrapProfileFd: de, withoutControllingTerminal: it = false, sharesConsole: dt = false, tellBeforeKill: B, abortEndsProcessGroup: ct = false } = { timeout: 10 * ee * Q, preserveOutputOnError: true, maxBuffer: 1e6 }) {
  if ((0, import_chunk_wn8z7ghn.ZC)()) return { stdout: "", stderr: import_chunk_wn8z7ghn.gft, code: 126, error: import_chunk_wn8z7ghn.gft };
  let b = e, ce = process.env, h = Sce(b, n, u === void 0 ? ce : a === false ? u : { ...ce, ...u }, u && "GIT_CONFIG_COUNT" in u ? u.GIT_CONFIG_COUNT : import_chunk_c203g5kd.s.GIT_CONFIG_COUNT, { allowRepoGitHooks: Qe, allowGitTerminalPrompt: tt, hooksAlsoLose: et });
  if (h !== null && (0, import_chunk_6tyx83ga.Fft)(b, h.env)) return { stdout: "", stderr: import_chunk_6tyx83ga.ALr, code: 127, error: import_chunk_6tyx83ga.ALr };
  let y = h !== null && re instanceof PEe && c !== void 0 ? ve(re, c, h.args, h.env) : null;
  if (h !== null && u?.[$qt] !== void 0 && y === null) {
    let l = `${(0, import_path.basename)(e)} was not started: a found repository's git must start outside the repository's folder`;
    return (0, import_chunk_w578pjby.t)(l, { level: "error" }), { stdout: "", stderr: l, code: 1, error: l };
  }
  let at = y?.args ?? h?.args ?? n, lt = y?.cwd ?? c, { env: H, extendEnv: ue } = (0, import_chunk_9zdrdv25.j_n)({ env: y?.env ?? h?.env ?? u, ...y !== null ? { extendEnv: false } : a === void 0 ? {} : { extendEnv: a } }), U = it && (0, import_chunk_cg8dqz0a.x)() !== "windows";
  if (U && (0, import_chunk_w578pjby.c_)()) {
    let l = `${(0, import_path.basename)(e)} was not started because Claude Code was exiting; try again after it restarts`;
    return { stdout: "", stderr: l, code: 1, error: l };
  }
  let E, C, ae, le, fe, W = B !== void 0 && r !== void 0 ? new AbortController() : void 0, j, pe = (0, import_chunk_cg8dqz0a.x)() === "linux" ? { noChildLeft: true } : {}, v = pe, ge, T = N === "utf8-keep-bom" ? f ?? wn : void 0;
  try {
    let l = (0, import_chunk_9zdrdv25.o4n)(b, at, { signal: W?.signal ?? r, timeout: o, ...oe && { killSignal: "SIGKILL" }, cwd: lt, env: H, shell: g, ...ie === void 0 && de === void 0 ? { stdin: p, ...O === void 0 ? {} : { stdout: O }, ...M === void 0 ? {} : { stderr: M } } : { stdio: [p, O, M, ...C0s(ie, de)] }, ...T !== void 0 ? { maxBuffer: Math.min(T * yn, import_buffer.constants.MAX_STRING_LENGTH) } : f === void 0 ? {} : { maxBuffer: f }, ...ne === void 0 ? {} : { stripFinalNewline: ne }, ...N !== void 0 && N !== "utf8" && { encoding: "latin1" }, ...ue === void 0 ? {} : { extendEnv: ue }, ...rt ? (0, import_chunk_9zdrdv25.hm)(ot) : {}, ...U && { detached: true }, ...dt && je() && { windowsHide: false }, reject: false });
    if (v = l.pid === void 0 ? pe : {}, B !== void 0 && r !== void 0 && W !== void 0 && l.pid !== void 0) le = gn(l, l.pid, r, B, W);
    if (C = U ? l.pid : void 0, C !== void 0) {
      let _ = C;
      if (ct && r !== void 0) fe = pn(l, _, r);
      let S = () => te(_), I = (0, import_chunk_w578pjby.Ct)(S), k = (0, import_chunk_9zdrdv25.Fz)(S, { alwaysLast: true });
      ae = () => {
        I(), k();
      };
    }
    if (l.once("error", (_) => {
      ge = _;
    }), j = m === void 0 ? void 0 : Sn(l), m !== void 0 && l.pid !== void 0) l.stdin?.end(m);
    if (se && l.pid !== void 0) l.stdout?.on("data", (_) => {
      try {
        se(_.toString());
      } catch (S) {
        (0, import_chunk_k449cc64.i)(S);
      }
    });
    E = await l;
    let L = oe && Z(E);
    if (L) l.kill("SIGKILL");
    if (st && E.exitCode === void 0 && (r?.aborted === true || E.timedOut || L)) await En(l, ln);
  } catch (l) {
    let { message: L, shortMessage: _, originalMessage: S } = l, I = _ === void 0 ? L : S ?? "the spawn threw a value that is not an Error";
    if ((0, import_chunk_jv7av99m.pa)(l)) return (0, import_chunk_w578pjby.t)(`execFileNoThrow spawn failed: ${(0, import_chunk_jv7av99m.w)(l)} ${I}`, { level: "error" }), { stdout: "", stderr: "", code: 1, ...v };
    else if (Z(l)) return (0, import_chunk_w578pjby.t)(`execFileNoThrow maxBuffer exceeded: ${I}`, { level: "error" }), { stdout: "", stderr: "", code: 1, maxBufferExceeded: true };
    else {
      let k = process.env, R = (0, import_chunk_jv7av99m.w)(l) === "ERR_INVALID_ARG_VALUE" ? _n(b, n, c, H, a === false && H !== void 0 ? void 0 : k, k) : void 0;
      if (R) (0, import_chunk_w578pjby.t)(`execFileNoThrow spawn refused: ${R.local}`, { level: "error" });
      let Te = (0, import_chunk_jv7av99m.D)(l);
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)(R === void 0 && _ === void 0 ? Te : k0s(Te, R?.telemetry ?? I), R?.telemetry ?? "execFileNoThrow unexpected rejection"));
    }
    return { stdout: "", stderr: "", code: 1 };
  } finally {
    if (le?.(), fe?.(), ae?.(), C !== void 0 && (E === void 0 || E.exitCode === void 0)) te(C);
  }
  if (j?.truncatedBy !== void 0) {
    let l = `stdin write failed: ${j.truncatedBy}`;
    return (0, import_chunk_w578pjby.t)(`execFileNoThrow ${l}`, { level: "error" }), { stdout: "", stderr: "", code: 1, error: l };
  }
  let F = Xe(E.stdout, N), G = Xe(E.stderr, N);
  if (T !== void 0 && (F.length > T || G.length > T)) return d ? { stdout: F.slice(0, T), stderr: G.slice(0, T), code: 1, error: `Command failed: ${E.command}
maxBuffer exceeded`, maxBufferExceeded: true } : { stdout: "", stderr: "", code: 1, maxBufferExceeded: true };
  if (!E.failed) return { stdout: F, stderr: G, code: 0, exitCode: 0 };
  let Ee = Z(E) ? { maxBufferExceeded: true } : {}, _e = E.timedOut ? { timedOut: true } : {};
  if (!d) return { stdout: "", stderr: "", code: E.exitCode ?? 1, exitCode: E.exitCode, ...Ee, ..._e, ...v };
  let he = E.exitCode ?? 1;
  return { stdout: F, stderr: G, code: he, error: xn(E, ge) ?? On(E, he), exitCode: E.exitCode, ...Ee, ..._e, ...v };
}
