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
var chunk_d57v19zt_exports = {};
__export(chunk_d57v19zt_exports, {
  Eoe: () => Eoe,
  OHl: () => OHl,
  PHl: () => PHl,
  Re: () => Re,
  fct: () => fct,
  wPo: () => wPo
});
module.exports = __toCommonJS(chunk_d57v19zt_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_tty = require("tty");
var w = [0, 1, 2, 3], _ = { GITHUB_ACTIONS: 3, GITEA_ACTIONS: 3, CIRCLECI: 3, TRAVIS: 1, APPVEYOR: 1, GITLAB_CI: 1, BUILDKITE: 1, DRONE: 1 };
function I({ environment: e, argv: t, isTerminal: n, windowsRelease: i }) {
  let r = t.indexOf("--"), l = r < 0 ? t : t.slice(0, r), o, { FORCE_COLOR: c, TERM: f = "", TERM_PROGRAM: p, COLORTERM: u } = e;
  if (c === "" || c === "true") o = 1;
  else if (c !== void 0) o = c === "false" ? 0 : parseInt(c, 10);
  else if (y(l, ["--no-color", "--no-colors", "--color=false", "--color=never"])) o = 0;
  else if (y(l, ["--color", "--colors", "--color=true", "--color=always"])) o = 1;
  if (o === 0) return 0;
  if (y(l, ["--color=16m", "--color=full", "--color=truecolor"])) return 3;
  if (l.includes("--color=256")) return 2;
  if ("TF_BUILD" in e && "AGENT_NAME" in e) return 1;
  if (!n && o === void 0) return 0;
  let h = w[Math.min(o ?? 0, 3)] ?? 0;
  if (f === "dumb") return h;
  if (i !== void 0) {
    let [b = 0, , m = 0] = i.split(".").map(Number);
    if (b >= 10 && m >= 10586) return m >= 14931 ? 3 : 2;
    return 1;
  }
  if ("CI" in e) return Object.entries(_).find(([m]) => m in e)?.[1] ?? (e.CI_NAME === "codeship" ? 1 : h);
  if (e.TEAMCITY_VERSION !== void 0) {
    let [b = "", m = "", T] = e.TEAMCITY_VERSION.split(".");
    return (b === "9" ? T !== void 0 && /^\d+$/.test(m) && Number(m) > 0 : /^\d\d+\./.test(e.TEAMCITY_VERSION)) ? 1 : 0;
  }
  if (u === "truecolor" || ["xterm-kitty", "xterm-ghostty", "wezterm"].includes(f)) return 3;
  if (p === "iTerm.app") return parseInt(e.TERM_PROGRAM_VERSION ?? "", 10) >= 3 ? 3 : 2;
  if (p === "Apple_Terminal" || /-256(?:color)?$/i.test(f)) return 2;
  return u !== void 0 || /^(?:rxvt|screen|vt100|vt220|xterm)|ansi|color|cygwin|linux/i.test(f) ? 1 : h;
}
function y(e, t) {
  return t.some((n) => e.includes(n));
}
var v = 30, O = 40, x = 60, M = ["black", "red", "green", "yellow", "blue", "magenta", "cyan", "white"], S = Object.fromEntries([d("bold", 1, 22), d("dim", 2, 22), d("gray", 90, 39), d("grey", 90, 39), d("italic", 3, 23), d("reset", 0, 0), d("strikethrough", 9, 29), d("underline", 4, 24), ...M.flatMap((e, t) => {
  let n = `bg${e[0].toUpperCase()}${e.slice(1)}`;
  return [d(e, v + t, 39), d(`${e}Bright`, v + x + t, 39), d(n, O + t, 49), d(`${n}Bright`, O + x + t, 49)];
})]), N = Object.create(Function.prototype, S);
class wPo {
  static {
    Object.defineProperties(this.prototype, S);
  }
  level;
  owner = this;
  opening = "";
  marks = [];
  constructor({ level: e }) {
    this.level = e;
  }
  rgb(e, t, n) {
    return R(this.owner, v, e, t, n);
  }
  bgRgb(e, t, n) {
    return R(this.owner, O, e, t, n);
  }
  hex(e) {
    return k(this.owner, v, e);
  }
  bgHex(e) {
    return k(this.owner, O, e);
  }
  ansi256(e) {
    return g(this.owner, `\x1B[38;5;${e}m`, "\x1B[39m");
  }
  bgAnsi256(e) {
    return g(this.owner, `\x1B[48;5;${e}m`, "\x1B[49m");
  }
}
var a = new wPo({ level: I({ environment: process.env, argv: process.argv, isTerminal: (0, import_tty.isatty)(1), windowsRelease: void 0 }) });
function d(e, t, n) {
  let i = `\x1B[${t}m`, r = `\x1B[${n}m`;
  return [e, { get() {
    let l = g(this, i, r);
    return Object.defineProperty(this, e, { value: l }), l;
  } }];
}
function g(e, t, n) {
  let i = n;
  for (let l = 0; l < e.marks.length; l += 2) i += e.marks[l];
  let r = (...l) => {
    let o = l.length === 1 ? "" + l[0] : l.join(" ");
    if (r.owner.level <= 0 || o === "") return o;
    let c = o.indexOf("\x1B");
    if (c >= 0) for (let f = 0; f < r.marks.length; f += 2) {
      let p = r.marks[f], u = r.marks[f + 1], h = o.indexOf(p, c);
      if (h >= 0) o = h + p.length === o.length ? o.slice(0, h) + u : o.replaceAll(p, u);
    }
    if (o.includes(`
`)) o = o.replace(/\r?\n/g, `${i}$&${r.opening}`);
    return r.opening + o + i;
  };
  return r.owner = e.owner, r.opening = e.opening + t, r.marks = [n, n + t, ...e.marks], Object.setPrototypeOf(r, N);
}
function k(e, t, n) {
  let i = /[\da-f]{3}(?:[\da-f]{3})?/i.exec(n)?.[0] ?? "000", r = parseInt(i, 16);
  return i.length === 3 ? R(e, t, (r >> 8) * 17, (r >> 4 & 15) * 17, (r & 15) * 17) : R(e, t, r >> 16, r >> 8 & 255, r & 255);
}
function R(e, t, n, i, r) {
  let { level: l } = e, o = t === v ? "\x1B[39m" : "\x1B[49m";
  if (l === 3) return g(e, `\x1B[${t + 8};2;${n};${i};${r}m`, o);
  let c = 16 + 36 * Math.round(n / 255 * 5) + 6 * Math.round(i / 255 * 5) + Math.round(r / 255 * 5);
  if (n === i && i === r) c = n < 8 ? 16 : n > 248 ? 231 : 232 + Math.round((n - 8) * 24 / 247);
  if (l === 2) return g(e, `\x1B[${t + 8};5;${c}m`, o);
  if (c >= 232) {
    let u = Math.round(((c - 232) * 10 + 8) / 255);
    return g(e, `\x1B[${t + (u | u << 1 | u << 2)}m`, o);
  }
  let f = t, p = false;
  for (let u = 0; u < 3; u++) {
    let h = Math.floor((c - 16) / 6 ** (2 - u)) % 6;
    f += h >= 3 ? 1 << u : 0, p ||= h === 5;
  }
  return g(e, `\x1B[${p ? f + x : f}m`, o);
}
var F = /* @__PURE__ */ new Set(["--no-color", "--no-colors", "--color=false", "--color=never"]), G = /* @__PURE__ */ new Set(["--color", "--colors", "--color=true", "--color=always", "--color=256", "--color=16m", "--color=full", "--color=truecolor"]);
function E(e) {
  let t = process.argv.indexOf("--");
  return (t === -1 ? process.argv : process.argv.slice(0, t)).some((i) => e.has(i));
}
var j = () => E(F), P = () => E(G);
function U() {
  if (import_chunk_c203g5kd.s.NO_COLOR && import_chunk_c203g5kd.s.FORCE_COLOR === void 0 && !P() && a.level > 0) a.level = 0;
}
function B() {
  if (import_chunk_c203g5kd.s.TERM_PROGRAM === "vscode" && a.level === 2) a.level = 3;
}
var V = /* @__PURE__ */ new Set(["alacritty", "contour", "foot", "ghostty", "rio", "wezterm", "xterm-ghostty", "xterm-kitty"]);
function D() {
  if (!process.stdout.isTTY || import_chunk_c203g5kd.s.NO_COLOR || import_chunk_c203g5kd.s.FORCE_COLOR !== void 0 || j()) return;
  let e = import_chunk_c203g5kd.s.TERM;
  if (e && V.has(e) && a.level < 3) a.level = 3;
}
function Y() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_TMUX_TRUECOLOR) return;
  if ((import_chunk_c203g5kd.s.TMUX || import_chunk_c203g5kd.s.STY) && a.level > 2) a.level = 2;
}
function PHl(e) {
  if (C.ensureInit(), e && a.level > 2) return a.level = 2, true;
  return false;
}
function Eoe(e) {
  return C.ensureInit(), "\x1B[7m" + e + "\x1B[27m";
}
class L {
  initState = "pending";
  nativeLevel = 0;
  generation = 0;
  ensureInit() {
    if (this.initState !== "pending") return;
    this.initState = "running";
    try {
      U(), B(), D(), Y(), this.nativeLevel = a.level, this.initState = "done";
    } catch (e) {
      throw this.initState = "pending", e;
    }
  }
  get levelGeneration() {
    return this.ensureInit(), this.generation;
  }
  clampForAttacher(e) {
    this.ensureInit();
    let t = e !== void 0 && e < this.nativeLevel ? e : this.nativeLevel;
    if (t !== a.level) a.level = t, this.generation++;
  }
}
var C = new L();
var Re = new Proxy(a, { get(e, t) {
  return C.ensureInit(), Reflect.get(e, t, e);
}, set(e, t, n) {
  return C.ensureInit(), Reflect.set(e, t, n, e);
}, has(e, t) {
  return C.ensureInit(), Reflect.has(e, t);
} });
function fct() {
  return C.levelGeneration;
}
function OHl(e) {
  C.clampForAttacher(e);
}
