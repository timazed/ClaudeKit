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
var chunk_qbrmmydq_exports = {};
__export(chunk_qbrmmydq_exports, {
  B6n: () => B6n,
  CHl: () => CHl,
  EHl: () => EHl,
  GPs: () => GPs,
  Hm: () => Hm,
  SHl: () => SHl,
  THl: () => THl,
  T_: () => T_,
  Y6t: () => Y6t,
  Z9: () => Z9,
  _Hl: () => _Hl,
  _Po: () => _Po,
  bHl: () => bHl,
  kHl: () => kHl,
  pI: () => pI,
  vHl: () => vHl,
  wHl: () => wHl,
  xOr: () => xOr,
  yHl: () => yHl,
  yPo: () => yPo
});
module.exports = __toCommonJS(chunk_qbrmmydq_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_myvyhcm0 = require("/$bunfs/root/chunk-myvyhcm0.js");
var import_chunk_13h3tw8q = require("/$bunfs/root/chunk-13h3tw8q.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_os = require("os");
var import_path = require("path");
function xOr(e) {
  return e.slice(0, 500).replace(/https?:\/\/\S+/gi, "<url>").replace(/\b[\w.+-]+@[\w.-]+\.\w{2,}\b/g, "<email>").replace(/\b(?:sk-ant|sk|pk|ghp|gho|ghs|ghu|github_pat|xox[bpoars])[-_][\w-]{8,}\b/gi, "<key>").replace(/[A-Za-z]:\\[^\s"']*/g, "<path>").replace(/\\\\[^\s"']+/g, "<path>").replace(/(?:[^\s"'\\]+\\){2,}[^\s"']+/g, "<path>").replace(/(?:\/[^\s"':]+){2,}/g, "<path>").replace(/\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/gi, "<id>").replace(/\breq_[A-Za-z0-9_-]{12,}/g, "<id>").replace(/\b[0-9a-fA-F]{16,}\b/g, "<id>").replace(/\b[A-Za-z0-9+/]{32,}={0,2}/g, "<b64>").replace(/\b\d{1,3}(?:\.\d{1,3}){3}\b/g, "<ip>").replace(/\b\d{4,}\b/g, "<num>");
}
var g = 4e3, x = /^(?:(?:async |new )?<anonymous> \()?\.\/compiled\.js:(\d+):(\d+)\)?$/;
function C(e, n = 5) {
  let t = [], r;
  for (let l of e.slice(0, g).split(`
`)) {
    let i = l.trim();
    if (!i.startsWith("at ")) continue;
    let u = i.slice(3), c = u.indexOf(" (");
    if (r === void 0) {
      let R = c !== -1 ? u.slice(c + 2, -1) : u;
      if (/^(?:node|bun|internal):/.test(R)) r = R;
      else {
        let E = R.match(/([^/\\]+:\d+:\d+)\)?$/);
        if (E) r = E[1];
      }
    }
    let a = c !== -1 ? u.slice(0, c) : u;
    if (a = a.replace(/^async\s+/, "").replace(/^new\s+/, ""), a = x.exec(u)?.slice(1).join(".") ?? a, a.includes("/") || a.includes("\\") || /:\d/.test(a)) continue;
    if (a) t.push(a);
    if (t.length >= n) break;
  }
  return { names: t, topFrame: r };
}
function M(e) {
  try {
    return String(e);
  } catch {
    return "[unstringifiable]";
  }
}
function T_(e) {
  try {
    let n = M(e instanceof Error ? e.message : e), t = { error_message_hash: (0, import_chunk_myvyhcm0.Zn)(xOr(n)) }, r = (0, import_chunk_jv7av99m.Cr)(e);
    if (r !== void 0) t.error_code = r;
    if (!(e instanceof Error)) return t;
    let l = (0, import_chunk_jv7av99m.tH)(e.constructor?.name);
    if (l !== void 0) t.error_constructor = l;
    let i = e.stack;
    if (typeof i !== "string") return t;
    let u = { name: e.name, message: e.message, stack: i }, c = (0, import_chunk_7fsmgfxx.t4n)(u), a = c.length < i.length && i.endsWith(c), { names: R, topFrame: E } = C(c);
    if (R.length > 0) t.error_stack_hash = (0, import_chunk_myvyhcm0.Zn)(R.join("|"));
    let h = i.length - c.length, b = i.slice(0, h + g), [f] = a ? (0, import_chunk_7fsmgfxx.I0r)({ ...u, stack: b }, 1) : [];
    if (f !== void 0) {
      let S = (0, import_chunk_7fsmgfxx.Kna)(f) ? f.file : (0, import_chunk_7fsmgfxx.TDo)(f) ? (0, import_chunk_7fsmgfxx.w0s)(f.file) : void 0, p = (0, import_chunk_jv7av99m.c5n)(S === void 0 ? import_chunk_7fsmgfxx.L_n : `${S}:${f.line}:${f.column}`), v = S !== void 0 && (0, import_chunk_jv7av99m.c5n)(E ?? "") !== p;
      if (p !== void 0 && !v) t.error_top_frame = p;
    }
    return t;
  } catch {
    return {};
  }
}
function m() {
  return performance.now();
}
var y = "tengu_ax_screen_reader";
function _Hl(e) {
  return o().swapRemoteGateReader(e);
}
class A {
  #n;
  #a;
  #o;
  #u;
  #t = null;
  #i = null;
  #c = false;
  #e = [];
  #r = false;
  #s = 0;
  swapRemoteGateReader(e) {
    let n = this.#t;
    return this.#t = e, n;
  }
  isEnabled() {
    if (this.#n !== void 0) return this.#n;
    let e, n;
    if ((0, import_chunk_dw5px5e0.GE)("--ax-screen-reader")) e = true, n = "flag";
    else {
      let r = import_chunk_c203g5kd.s.CLAUDE_AX_SCREEN_READER;
      if (r !== void 0) e = r, n = "env";
      else e = (0, import_chunk_2yx6c1y2.Lee)("axScreenReader").find((l) => (0, import_chunk_xzvhvaa2.rn)(l.source))?.value === true, n = "settings";
    }
    if (!e) return this.#n = false;
    let t = this.#t?.(y, true) ?? true;
    return this.#a = t ? n : void 0, this.#n = t;
  }
  activationSource() {
    return this.isEnabled() ? this.#a : void 0;
  }
  isArrowNavEnabled() {
    if (this.#o === void 0) this.#o = this.#t?.(F, false) ?? false;
    return this.#o;
  }
  isSuggestionNavEnabled() {
    {
      if (!this.isEnabled()) return false;
      let e = false;
      return this.#u ??= this.#t?.("tengu_ax_sr_suggestion_nav", e) ?? e, this.#u;
    }
    return false;
  }
  markAnnouncementWritten(e) {
    if (this.#i === null) this.#i = e;
  }
  endStartupQuiet() {
    this.#c = true;
  }
  startupQuietOpenedAtMs() {
    return this.#c ? null : this.#i;
  }
  queueAnnouncement(e, n = false) {
    if (this.#e.push(e), n) this.#r = true;
    if (this.#e.length > _) this.#e.splice(0, this.#e.length - _);
  }
  drainAnnouncements() {
    return this.#e.splice(0);
  }
  takeHoldRequest() {
    let e = this.#r;
    return this.#r = false, e;
  }
  startHold(e) {
    this.#s = e;
  }
  endHold() {
    this.#s = 0, this.#r = false;
  }
  holdActive(e) {
    return e < this.#s;
  }
  reset() {
    this.#n = void 0, this.#a = void 0, this.#o = void 0, this.#u = void 0, this.#i = null, this.#c = false, this.#e.length = 0, this.#r = false, this.#s = 0;
  }
}
var X = new import_chunk_2904xtvq.j(() => new A());
function o() {
  return X.of((0, import_chunk_f9x2f6cx.N)().host);
}
var F = "tengu_ax_sr_arrow_nav";
function B6n() {
  return o().isArrowNavEnabled();
}
function _Po() {
  return o().isSuggestionNavEnabled();
}
function Hm() {
  return o().isEnabled();
}
function yHl() {
  return o().activationSource();
}
function U() {
  {
    let e = o();
    if (e.isEnabled()) {
      let n = e.activationSource();
      return n ? `[Screen Reader Mode: on via ${n}]` : "[Screen Reader Mode: on]";
    }
  }
  return null;
}
function k() {
  {
    if (o().isEnabled() || (0, import_chunk_dw5px5e0.GE)("--ax-screen-reader") || import_chunk_c203g5kd.s.CLAUDE_AX_SCREEN_READER !== void 0 || (0, import_chunk_2yx6c1y2.Lee)("axScreenReader").some((i) => (0, import_chunk_xzvhvaa2.rn)(i.source))) return null;
    if (!["projectSettings", "localSettings"].some((i) => {
      let u = (0, import_chunk_xzvhvaa2.rn)(i) ? (0, import_chunk_2yx6c1y2._e)(i) : null;
      return u?.axScreenReader === true || Object.entries(u?.env ?? {}).some(([c, a]) => c.toUpperCase() === "CLAUDE_AX_SCREEN_READER" && (0, import_chunk_69qhefwa.Ne)(a));
    })) return null;
    let n = "start Claude Code with --ax-screen-reader";
    if (!(0, import_chunk_xzvhvaa2.rn)("userSettings")) return `Screen reader mode is off: project settings can't turn it on. To turn it on, ${n}.`;
    let t = (0, import_os.homedir)(), r = (0, import_chunk_13h3tw8q.js)((0, import_chunk_2yx6c1y2._n)("userSettings") ?? (0, import_path.join)(t, ".claude", "settings.json")).replace(/[\t\n]/g, " "), l = r.startsWith(t + import_path.sep) ? `~${r.slice(t.length)}` : r;
    return `Screen reader mode is off: project settings can't turn it on. To turn it on, ${n}, or add "axScreenReader": true to your own settings file at ${l} and restart.`;
  }
  return null;
}
function SHl(e, n) {
  {
    if (!e) return null;
    let t = U();
    if (t !== null) return n(t), P(), t;
    let r = k();
    if (r !== null) n(r);
    return r;
  }
  return null;
}
var H = 3e3, O = 6e5;
function P() {
  o().markAnnouncementWritten(m());
}
function GPs() {
  o().endStartupQuiet();
}
function yPo() {
  {
    let e = o().startupQuietOpenedAtMs();
    if (e === null) return 0;
    let n = Math.min(import_chunk_c203g5kd.s.CLAUDE_AX_STARTUP_QUIET_MS ?? H, O), t = e + n - m();
    return t > 0 ? t : 0;
  }
  return 0;
}
var L = 0, G = 5e3;
function bHl() {
  return Math.min(import_chunk_c203g5kd.s.CLAUDE_AX_PREPARK_MS ?? L, G);
}
function wHl() {
  return import_chunk_c203g5kd.s.CLAUDE_AX_REWRITE_HELD_ANNOUNCEMENT ?? false;
}
function Z9() {
  if (o().isEnabled()) return { CLAUDE_AX_SCREEN_READER: "1" };
  return {};
}
function kHl() {
  {
    let e = o();
    if (e.isEnabled()) return { screenReaderMode: true, screenReaderActivationSource: (0, import_chunk_78g0060s.fe)(e.activationSource()) };
  }
  return {};
}
var _ = 16;
function pI(e, n) {
  o().queueAnnouncement(e, n?.hold === true);
}
function EHl() {
  if (o().takeHoldRequest()) return Math.min(import_chunk_c203g5kd.s.CLAUDE_AX_ANNOUNCEMENT_HOLD_MS ?? 1e3, 1e4);
  return 0;
}
function vHl(e) {
  o().startHold(m() + e);
}
function Y6t() {
  o().endHold();
}
function THl() {
  return o().holdActive(m());
}
function CHl() {
  return o().drainAnnouncements();
}
