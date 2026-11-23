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
var chunk_210k8f6q_exports = {};
__export(chunk_210k8f6q_exports, {
  AKr: () => AKr,
  WZn: () => WZn,
  XE: () => XE,
  lqe: () => lqe,
  oTn: () => oTn,
  sOa: () => sOa
});
module.exports = __toCommonJS(chunk_210k8f6q_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_vw137skj = require("/$bunfs/root/chunk-vw137skj.js");
var E = ["APPVEYOR", "BUILDKITE", "CIRCLECI", "GITHUB_ACTIONS", "GITLAB_CI", "TRAVIS"];
function c(e, r, t) {
  let i = false;
  if (r === void 0) {
    if (/^--(?:no-colors?|color=(?:false|never))$/m.test(t)) return false;
    i = /^--color(?:s|=true|=always)?$/m.test(t);
  } else {
    let o = parseInt(r, 10);
    if (o === 0 || r === "false") return false;
    i = !Number.isNaN(o) || r === "" || r === "true";
  }
  if (/^--color=(?:256|16m|full|truecolor)$/m.test(t)) return true;
  let { TERM: n = "", TERM_PROGRAM: u, TEAMCITY_VERSION: a } = e;
  if (n === "dumb") return i;
  if (e.CI !== void 0) return i || e.CI_NAME === "codeship" || E.some((o) => o in e);
  if (a !== void 0) {
    let o = a.split(".", 3), [l = "", p = ""] = o;
    return l === "9" ? o.length === 3 && /^\d+$/.test(p) && Number(p) > 0 : o.length > 1 && /^\d\d+$/.test(l);
  }
  return i || e.COLORTERM !== void 0 || u === "iTerm.app" || u === "Apple_Terminal" || /^(?:rxvt|screen|vt(?:100|220)|xterm)/i.test(n) || /ansi|color|cygwin|linux|-256$/i.test(n);
}
function y(e, r, t) {
  let { FORCE_HYPERLINK: i } = r;
  if (i) return parseInt(i, 10) !== 0;
  let n = I();
  if (n) {
    if (/^--(?:no-hyperlinks?|hyperlink=(?:false|never))$/m.test(n)) return false;
    if (/^--hyperlink=(?:true|always)$/m.test(n)) return true;
  }
  if (r.NETLIFY) return true;
  if (e && !e.isTTY || !c(r, t, n)) return false;
  if ("WT_SESSION" in r && !r.TMUX && r.TERM_PROGRAM !== "tmux") return true;
  if (r.CI || r.TEAMCITY_VERSION) return false;
  let [u, a] = d(r.TERM_PROGRAM_VERSION);
  switch (r.TERM_PROGRAM ?? "") {
    case "iTerm.app":
      return u > 3 || u === 3 && a >= 1;
    case "WezTerm":
      return u >= 20200620;
    case "vscode":
      return u > 1 || u === 1 && a >= 72;
    case "ghostty":
      return true;
  }
  let { VTE_VERSION: o } = r;
  if (o) {
    let [l, p] = d(o);
    return o !== "0.50.0" && o !== "5000" && (l > 0 || p >= 50);
  }
  return r.TERM === "alacritty";
}
var m = { supportsHyperlink: y };
function I() {
  let e = "";
  for (let r of process.argv) {
    if (r === "--") break;
    if (/^--(?:no-)?(?:color|hyperlink).*$/.test(r)) e += `${r}
`;
  }
  return e;
}
function d(e = "") {
  return /^\d{3,4}$/.test(e) ? [0, Math.floor(Number(e) / 100)] : [parseInt(e, 10), parseInt(e.split(".", 2)[1] ?? "", 10)];
}
var _ = import_chunk_c203g5kd.s.FORCE_COLOR, R = ["ghostty", "Hyper", "kitty", "alacritty", "iTerm.app", "iTerm2", "rex", "WarpTerminal"];
function lqe(e) {
  let r = (0, import_chunk_f9x2f6cx.pf)()?.hyperlinks;
  if (r !== void 0) return r;
  let i = (e?.env ?? process.env).FORCE_HYPERLINK;
  if (!i) return;
  return !((0, import_chunk_69qhefwa.Oi)(i) || parseInt(i, 10) === 0);
}
function XE(e) {
  let r = lqe(e);
  if (r !== void 0) return r;
  let t = e?.env ?? process.env;
  if (e?.stdoutSupported ?? m.supportsHyperlink(process.stdout, t, _)) return true;
  let n = t.TERM_PROGRAM;
  if (n && R.includes(n)) return true;
  if (t.TERMINAL_EMULATOR === "JetBrains-JediTerm") return true;
  if (t.WT_SESSION && n !== "tmux" && !t.TMUX) return true;
  if (n === "tmux") {
    let [o, l] = (t.TERM_PROGRAM_VERSION ?? "").split("."), p = parseInt(o ?? "", 10), T = parseInt(l ?? "", 10);
    if (p > 3 || p === 3 && T >= 4) return true;
  }
  let u = t.LC_TERMINAL;
  if (u && R.includes(u)) return true;
  if (t.TERM?.includes("kitty")) return true;
  return false;
}
function sOa(e) {
  return AKr(e) && !f() && oTn();
}
function WZn(e) {
  return AKr(e) && (f() || oTn());
}
function AKr(e) {
  return /^https?:\/\//i.test(e) && !import_chunk_7cfjrnwy.Wz.test(e);
}
function f() {
  return (0, import_chunk_f9x2f6cx.pf)() !== null || import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND === "bg";
}
function oTn() {
  if (f()) {
    let n = (0, import_chunk_f9x2f6cx.pf)();
    return n?.mayWriteHyperlinks ?? n?.hyperlinks ?? false;
  }
  let e = lqe();
  if (e !== void 0) return e;
  let r = import_chunk_c203g5kd.s.TERM ?? "", t = r === "dumb" || r === "" && (0, import_chunk_cg8dqz0a.x)() !== "windows", i = Boolean(import_chunk_c203g5kd.s.STY) || r.startsWith("screen") && !import_chunk_c203g5kd.s.TMUX;
  return process.stdout.isTTY === true && !t && !i && !(0, import_chunk_vw137skj.Hq)();
}
