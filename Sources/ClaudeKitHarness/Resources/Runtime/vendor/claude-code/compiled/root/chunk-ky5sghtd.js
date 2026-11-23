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
var chunk_ky5sghtd_exports = {};
__export(chunk_ky5sghtd_exports, {
  Hfr: () => Hfr,
  IYa: () => IYa,
  Jyi: () => Jyi,
  Kss: () => Kss,
  MHn: () => MHn,
  MYa: () => MYa,
  OYa: () => OYa,
  Qyi: () => Qyi,
  Zyi: () => Zyi,
  cot: () => cot,
  eSi: () => eSi,
  fso: () => fso,
  nv: () => nv,
  pso: () => pso,
  uso: () => uso,
  va: () => va,
  yc: () => yc
});
module.exports = __toCommonJS(chunk_ky5sghtd_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_5cey7gvv = require("/$bunfs/root/chunk-5cey7gvv.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_vw137skj = require("/$bunfs/root/chunk-vw137skj.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
class b {
  hooks = null;
  uiMounted = false;
  setHooks(e) {
    this.hooks = e;
  }
  setUiMounted(e) {
    this.uiMounted = e;
  }
}
var m = new b();
function Jyi(e) {
  m.setHooks(e);
}
function Qyi() {
  return m.hooks;
}
function S(e) {
  m.setUiMounted(e);
}
function uso() {
  return m.uiMounted;
}
class k extends Map {
  get everMounted() {
    return uso();
  }
  set everMounted(e) {
    S(e);
  }
  set(e, t) {
    this.everMounted = true;
    let r = this.get(e);
    if (r && r !== t && !r.hasUnmounted && r.holdsRawMode) (0, import_chunk_k449cc64.i)(Error("ink: second root created on a stream whose mounted root still holds stdin (raw mode); unmount the previous root first"));
    return super.set(e, t);
  }
  treeRoots = /* @__PURE__ */ new Map();
  restoredAtExit;
  standaloneRender = null;
  claimForStandaloneRender(e) {
    let t = () => {
      if (this.standaloneRender === r) this.standaloneRender = null;
    }, r = e.then(t, t);
    this.standaloneRender = r;
  }
  get pendingStandaloneRender() {
    return this.standaloneRender;
  }
}
var I = new import_chunk_2904xtvq.j(() => new k());
function va() {
  return I.of((0, import_chunk_f9x2f6cx.N)().host);
}
function MHn(e) {
  if (e === void 0) return null;
  if (/^st(term)?(-|$)/.test(e)) return "st";
  if (/^rxvt(-|$)/.test(e)) return "rxvt";
  return null;
}
var eSi = ["iTerm.app", "kitty", "WezTerm", "ghostty", "tmux", "windows-terminal", "WarpTerminal"], OYa = ["windows-terminal"];
function E(e) {
  return MHn(e) === "st";
}
function c(e) {
  return `env: terminal=${e}, VTE before 0.53 (shows the query as text)`;
}
var x = "env: images are dropped on the way to this terminal", T = "env: inside tmux, waiting for tmux to say whether it passes images through";
function v() {
  let e = (0, import_chunk_3t7ve0wy.GM)() !== null;
  return { extendedKeys: W(import_chunk_c203g5kd.s.terminal, import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND === "bg"), synchronizedOutput: U(), kittyKeyboard: L(import_chunk_c203g5kd.s.terminal, import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND === "bg"), kittyGraphics: M({ terminal: import_chunk_c203g5kd.s.terminal, bgWorker: import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND === "bg", multiplexed: Boolean(import_chunk_c203g5kd.s.TMUX) || Boolean(import_chunk_c203g5kd.s.STY), tmux: Boolean(import_chunk_c203g5kd.s.TMUX) && !import_chunk_c203g5kd.s.STY, forced: import_chunk_c203g5kd.s.CLAUDE_CODE_FORCE_TERMINAL_IMAGES, imagesDropped: e }), itermImages: O({ bgWorker: import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND === "bg", multiplexed: Boolean(import_chunk_c203g5kd.s.TMUX) || Boolean(import_chunk_c203g5kd.s.STY), tmux: Boolean(import_chunk_c203g5kd.s.TMUX) && !import_chunk_c203g5kd.s.STY, imagesDropped: e }), mousePixels: P({ terminal: import_chunk_c203g5kd.s.terminal, bgWorker: import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND === "bg", multiplexed: Boolean(import_chunk_c203g5kd.s.TMUX) || Boolean(import_chunk_c203g5kd.s.STY) }), programStatus: _({ terminal: import_chunk_c203g5kd.s.terminal, bgWorker: import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND === "bg", tabWritesDisabled: import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_TERMINAL_TITLE }) };
}
function _(e) {
  if (e.tabWritesDisabled) return { settled: false, source: "env: CLAUDE_CODE_DISABLE_TERMINAL_TITLE" };
  if (e.bgWorker) return { settled: false, source: "bg worker" };
  if (import_chunk_5cey7gvv.wC.hasUnknownSequencePrintingBug(e.terminal)) return { settled: false, source: c(e.terminal) };
  return { likely: false, source: "not asked yet" };
}
function P(e) {
  if (e.bgWorker) return { settled: false, source: "bg worker" };
  if (e.multiplexed) return { settled: false, source: "env: inside tmux or screen" };
  return { likely: false, source: `env: terminal=${e.terminal || "unknown"}, not asked yet` };
}
var R = ["kitty", "ghostty"], D = "0.28.0";
function fso(e) {
  if (e === null) return false;
  if (e.startsWith("kitty(")) {
    let t = (0, import_chunk_tvttgr51.hB)(e.slice(6));
    return t !== null && (0, import_chunk_tvttgr51.Vb)(t.version, D);
  }
  return R.some((t) => e === t || e.startsWith(`${t} `));
}
function M(e) {
  if (e.forced) return { settled: true, source: "env: CLAUDE_CODE_FORCE_TERMINAL_IMAGES" };
  if (e.imagesDropped) return { settled: false, source: x };
  if (e.bgWorker) return { settled: false, source: "bg worker" };
  if (e.tmux) return { likely: false, source: T };
  if (e.multiplexed) return { settled: false, source: "env: inside screen" };
  return { likely: false, source: `env: terminal=${e.terminal || "unknown"}, not asked yet` };
}
var A = "3.5.0";
function pso(e) {
  if (e === null || !/^iTerm2\s/.test(e)) return false;
  let t = (0, import_chunk_tvttgr51.hB)(e.slice(6).trim());
  return t !== null && (0, import_chunk_tvttgr51.Vb)(t.version, A);
}
function O(e) {
  if (e.imagesDropped) return { settled: false, source: x };
  if (e.bgWorker) return { settled: false, source: "bg worker" };
  if (e.tmux) return { likely: false, source: T };
  if (e.multiplexed) return { settled: false, source: "env: inside screen, not supported" };
  return { likely: false, source: "yes only on an XTVERSION reply naming iTerm2 3.5 or later" };
}
function L(e, t) {
  if (t) return { settled: true, source: "bg worker" };
  if (e !== null && E(e)) return { settled: false, source: `env: terminal=${e}` };
  if (import_chunk_5cey7gvv.wC.hasUnknownSequencePrintingBug(e)) return { settled: false, source: c(e) };
  return { likely: true, source: "not asked yet" };
}
function W(e, t) {
  let r = `env: terminal=${e || "unknown"}`;
  if (t) return { settled: false, source: `${r}, bg worker` };
  if (e !== null && eSi.includes(e)) return { settled: true, source: r };
  if (e !== null && E(e)) return { settled: false, source: r };
  if (import_chunk_5cey7gvv.wC.hasUnknownSequencePrintingBug(e)) return { settled: false, source: c(e) };
  return { likely: false, source: r };
}
function U() {
  if (import_chunk_c203g5kd.s.TMUX) return { likely: false, source: "env: TMUX (tmux answers for itself)" };
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_FORCE_SYNC_OUTPUT) return { settled: true, source: "env: CLAUDE_CODE_FORCE_SYNC_OUTPUT" };
  if (import_chunk_5cey7gvv.wC.isJetBrainsIdeTerminal()) return { settled: true, source: "env: TERMINAL_EMULATOR=JetBrains-JediTerm" };
  let e = K();
  if (e) return { likely: true, source: `env: ${e}` };
  return { likely: false, source: "env: no known terminal" };
}
function K() {
  let e = import_chunk_c203g5kd.s.TERM_PROGRAM, t = import_chunk_c203g5kd.s.TERM;
  if (e === "iTerm.app" || e === "WezTerm" || e === "WarpTerminal" || e === "ghostty" || e === "contour" || e === "vscode" || e === "alacritty" || e === "mintty" || e === "rio" || e === "Tabby") return `TERM_PROGRAM=${e}`;
  if (t?.includes("kitty")) return `TERM=${t}`;
  if (import_chunk_c203g5kd.s.KITTY_WINDOW_ID) return "KITTY_WINDOW_ID";
  if (t === "xterm-ghostty") return `TERM=${t}`;
  if (t?.startsWith("foot")) return `TERM=${t}`;
  if (t?.includes("alacritty")) return `TERM=${t}`;
  if (import_chunk_c203g5kd.s.ZED_TERM) return "ZED_TERM";
  if (import_chunk_c203g5kd.s.WT_SESSION) return "WT_SESSION";
  if (parseInt(import_chunk_c203g5kd.s.VTE_VERSION ?? "", 10) >= 6800) return `VTE_VERSION=${import_chunk_c203g5kd.s.VTE_VERSION}`;
  return;
}
class p {
  reading;
  settled = (0, import_chunk_69qhefwa.Be)();
  constructor(e) {
    this.reading = e === void 0 ? { state: "unasked" } : { state: "settled", value: e.value, source: e.source };
  }
  get() {
    return this.reading;
  }
  now() {
    return this.reading.state === "settled" && this.reading.value;
  }
  begin() {
    if (this.reading.state !== "unasked") return false;
    return this.reading = { state: "asking" }, true;
  }
  unask() {
    if (this.reading.state === "asking") this.reading = { state: "unasked" };
  }
  answer(e) {
    if (this.reading.state === "settled") return false;
    this.reading = { state: "settled", ...e };
    try {
      this.settled.emit(e.value);
    } finally {
      this.settled.clear();
    }
    return true;
  }
  onSettle(e) {
    if (this.reading.state === "settled") return e(this.reading.value), () => {
    };
    return this.settled.subscribe(e);
  }
}
var Zyi = { keep: "all" };
class g {
  #r = /* @__PURE__ */ new Set();
  #e = /* @__PURE__ */ new Map();
  #t;
  #o = 0;
  #n = false;
  get hasReported() {
    return this.#n;
  }
  show(e) {
    return this.#r.add(e), () => void this.#r.delete(e);
  }
  update(e, t, r = false) {
    let o = this.#t !== e;
    if (this.#t = e, e.keep === "none") {
      let n = this.#i();
      return t ? n : "";
    }
    let a = [...this.#r].sort((n, d) => Number(d.main !== void 0) - Number(n.main !== void 0)), y = a.find((n) => n.root.state === "blocked") ?? a[0];
    if (y === void 0) return this.#i();
    let u = a[0]?.main;
    if (u !== void 0 && u.drops !== this.#o) this.#o = u.drops, this.#e.clear();
    let f = /* @__PURE__ */ new Map();
    for (let n of [y.root, ...u?.children ?? []]) f.set(n.id ?? "", (0, import_chunk_vw137skj.AZa)(r ? { ...n, title: void 0, msg: void 0 } : n));
    let l = "";
    for (let [n, d] of f) if (o || this.#e.get(n) !== d) this.#e.set(n, d), l += d;
    for (let n of this.#e.keys()) if (!f.has(n)) this.#e.delete(n), l += (0, import_chunk_vw137skj.RZa)(n);
    if (l === "" || this.#n) return l;
    return this.#n = true, e === Zyi ? l : import_chunk_vw137skj.n0n + l;
  }
  leave(e) {
    let t = this.#i();
    return e ? import_chunk_vw137skj.n0n : t;
  }
  #i() {
    let e = this.#e.size > 0 ? import_chunk_vw137skj.n0n : "";
    return this.#e.clear(), e;
  }
}
var w = { extendedKeys: false, synchronizedOutput: false, kittyKeyboard: true, kittyGraphics: false, itermImages: false, mousePixels: false, programStatus: false }, Kss = Object.keys(w);
class h {
  readings = /* @__PURE__ */ new Map();
  answeredYes = /* @__PURE__ */ new Set();
  listeners = /* @__PURE__ */ new Map();
  constructor(e) {
    for (let t of Kss) {
      let r = e[t];
      this.readings.set(t, "settled" in r ? { state: "settled", value: r.settled, source: r.source } : { state: "pending", likely: r.likely, source: r.source });
    }
  }
  get(e) {
    return this.readings.get(e);
  }
  now(e) {
    let t = this.get(e);
    return t.state === "settled" ? t.value : w[e];
  }
  confirmed(e) {
    return this.answeredYes.has(e);
  }
  pending() {
    return Kss.filter((e) => this.get(e).state === "pending");
  }
  answer(e, t, r) {
    let o = this.get(e);
    if (o.state === "settled") {
      if (t && o.value) this.answeredYes.add(e);
      return false;
    }
    if (t) this.answeredYes.add(e);
    return this.settle(e, t, r), true;
  }
  deadline() {
    for (let e of this.pending()) {
      let t = this.get(e);
      this.settle(e, t.likely, `${t.source}, no answer`);
    }
  }
  onSettle(e, t) {
    let r = this.get(e);
    if (r.state === "settled") return t(r.value), () => {
    };
    let o = this.listeners.get(e) ?? /* @__PURE__ */ new Set();
    return this.listeners.set(e, o), o.add(t), () => {
      o.delete(t);
    };
  }
  settle(e, t, r) {
    this.readings.set(e, { state: "settled", value: t, source: r });
    let o = this.listeners.get(e);
    this.listeners.delete(e);
    for (let a of o ?? []) a(t);
  }
}
class C {
  xtversionName = void 0;
  #r = void 0;
  get capabilities() {
    return this.#r ??= new h(v());
  }
  #e = void 0;
  get imageFiles() {
    return this.#e ??= new p(import_chunk_c203g5kd.s.CLAUDE_CODE_FORCE_TERMINAL_IMAGES ? { value: true, source: "env: CLAUDE_CODE_FORCE_TERMINAL_IMAGES" } : import_chunk_c203g5kd.s.TMUX ? { value: false, source: "env: inside tmux, where the terminal cannot be asked whether it reads files" } : void 0);
  }
  tmuxPane = void 0;
  isTmuxPaneAsked = false;
  tmuxPaneAnsweredAt = void 0;
  resetCapabilities() {
    this.#r = void 0, this.#e = void 0, this.tmuxPane = void 0, this.isTmuxPaneAsked = false, this.tmuxPaneAnsweredAt = void 0;
  }
  osc11Responsive = void 0;
  #t = void 0;
  cellPixelsChanged = (0, import_chunk_69qhefwa.Be)();
  get cellPixels() {
    return this.#t;
  }
  set cellPixels(e) {
    if (e?.width === this.#t?.width && e?.height === this.#t?.height) return;
    this.#t = e, this.cellPixelsChanged.emit();
  }
  versionReply = void 0;
  versionWasAsked = false;
  measured = void 0;
  measuringWasTried = false;
  cursorChecks = { answered: 0, mismatches: 0, afterFrames: 0 };
  characterWidths = void 0;
  lastCapabilities = void 0;
  programStatus = new g();
  probeEventLogged = false;
  nativeCursorEnabled = void 0;
  newRendererEnabled = void 0;
  showHiddenCharactersEnabled = void 0;
}
var z = new import_chunk_2904xtvq.j(() => new C());
function yc() {
  return z.of((0, import_chunk_f9x2f6cx.N)().host);
}
function nv() {
  return yc().capabilities;
}
function IYa() {
  return nv().now("kittyGraphics");
}
function cot() {
  let e = nv();
  return e.now("kittyGraphics") ? "kitty" : e.now("itermImages") ? "iterm" : void 0;
}
function MYa(e) {
  let t = nv(), r = () => e(cot()), o = [t.onSettle("kittyGraphics", r), t.onSettle("itermImages", r)];
  return () => o.forEach((a) => a());
}
function Hfr() {
  return yc().imageFiles;
}
