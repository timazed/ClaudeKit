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
var chunk_pjgajh0r_exports = {};
__export(chunk_pjgajh0r_exports, {
  Byi: () => Byi,
  Gss: () => Gss,
  Gyi: () => Gyi,
  Kyi: () => Kyi,
  OHn: () => OHn,
  Ofr: () => Ofr,
  Pfr: () => Pfr,
  Rq: () => Rq,
  Uyi: () => Uyi,
  Vyi: () => Vyi,
  Wss: () => Wss,
  Wyi: () => Wyi,
  Xyi: () => Xyi,
  Yyi: () => Yyi,
  aso: () => aso,
  iso: () => iso,
  jss: () => jss,
  jyi: () => jyi,
  kFt: () => kFt,
  kYa: () => kYa,
  qyi: () => qyi,
  sso: () => sso,
  wYa: () => wYa,
  xfr: () => xfr,
  zyi: () => zyi
});
module.exports = __toCommonJS(chunk_pjgajh0r_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_0f2gasyz = require("/$bunfs/root/chunk-0f2gasyz.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_vw137skj = require("/$bunfs/root/chunk-vw137skj.js");
var import_chunk_ky5sghtd = require("/$bunfs/root/chunk-ky5sghtd.js");
var import_chunk_mqj2w7ns = require("/$bunfs/root/chunk-mqj2w7ns.js");
var import_chunk_yrh4vxq4 = require("/$bunfs/root/chunk-yrh4vxq4.js");
var import_chunk_em52jhgp = require("/$bunfs/root/chunk-em52jhgp.js");
var C = "\x1B[0m";
function m(e) {
  switch (e) {
    case "\x1B[0m":
    case "\x1B[22m":
    case "\x1B[23m":
    case "\x1B[24m":
    case "\x1B[27m":
    case "\x1B[28m":
    case "\x1B[29m":
    case "\x1B[39m":
    case "\x1B[49m":
    case "\x1B[55m":
      return true;
    default:
      return false;
  }
}
function g(e) {
  if (m(e)) return e;
  let t = parseInt(e.slice(2), 10);
  if (e.startsWith("38", 2) || t >= 30 && t <= 37 || t >= 90 && t <= 97) return "\x1B[39m";
  if (e.startsWith("48", 2) || t >= 40 && t <= 47 || t >= 100 && t <= 107) return "\x1B[49m";
  switch (t) {
    case 1:
    case 2:
      return "\x1B[22m";
    case 3:
      return "\x1B[23m";
    case 4:
      return "\x1B[24m";
    case 7:
      return "\x1B[27m";
    case 8:
      return "\x1B[28m";
    case 9:
      return "\x1B[29m";
    case 53:
      return "\x1B[55m";
    default:
      return "\x1B[0m";
  }
}
function OHn(e) {
  return e.reduce((t, { code: n }) => t + n, "");
}
function sso(e) {
  let t = [];
  for (let n of e) {
    let { code: o, endCode: r } = n;
    if (o === "\x1B[1m" || o === "\x1B[2m") {
      if (!t.some((c) => c.code === o && c.endCode === r)) t.push(n);
      continue;
    }
    let i = m(o), a = i ? o : r, d = 0;
    for (let c = 0; o !== C && c < t.length; c++) if (t[c].endCode !== a) t[d++] = t[c];
    if (!i) t[d++] = n;
    t.length = d;
  }
  return t;
}
function Uyi(e, t) {
  let n = [];
  for (let r of e) if (!t.some((i) => i.endCode === r.endCode)) n.push(r);
  let o = Wss(n);
  for (let r of t) if (!e.some((i) => i.code === r.code)) o.push(r);
  return o;
}
function Wss(e) {
  let t = sso(e), n = [];
  for (let o = t.length; o > 0; o--) {
    let { endCode: r } = t[o - 1];
    n.push({ type: "ansi", code: r, endCode: r });
  }
  return n;
}
var T = [], y = /[34]8;(?:5;\d*|2(?:;\d*){3})|\d*/y;
function Byi(e) {
  let t = Array(e.length), n = 0, o = e.lastIndexOf("\x07");
  for (let r = 0; r < e.length; ) {
    let i = e.charCodeAt(r);
    if (i === 27 || i === 155) {
      let u = r + 1;
      if (e.charCodeAt(u) === 91) {
        let p;
        do
          p = e.charCodeAt(++u);
        while (p >= 48 && p <= 57 || p === 59);
        if (p === 109) {
          for (let l = r + 2; l <= u; ) {
            y.lastIndex = l, y.test(e);
            let f = y.lastIndex, h = l === r + 2 && f === u && !e.slice(l, f).includes(";") ? e.slice(r, f + 1) : `\x1B[${e.slice(l, f)}m`;
            t[n++] = { type: "ansi", code: h, endCode: g(h) }, l = f + 1;
          }
          r = u + 1;
          continue;
        }
      } else if (r < o && e.startsWith("]8;;", u)) {
        u = e.indexOf("\x07", u);
        let p = e.slice(r, u + 1);
        t[n++] = { type: "ansi", code: p, endCode: i === 27 ? "\x1B]8;;\x07" : g(p) }, r = u + 1;
        continue;
      }
    }
    let a = i < 55296 ? i : e.codePointAt(r), d = i < 128 ? i : 128 + (a & 511), c = T[d];
    if (c === void 0 || i >= 128 && c.value.codePointAt(0) !== a) c = T[d] = Object.freeze({ type: "char", value: String.fromCodePoint(a) });
    t[n++] = c, r += a > 65535 ? 2 : 1;
  }
  return t.length = n, t;
}
var aso = "images inside tmux need tmux 3.3 or later with allow-passthrough and focus-events on: run `tmux set -g allow-passthrough on` and `tmux set -g focus-events on`, detach and attach tmux again, then restart Claude Code", jyi = "images inside tmux need tmux 3.3 or later, with kitty 0.28 or later, Ghostty, or iTerm2 3.5 or later as the terminal outside it: update tmux, then end every tmux session so the new version runs (`tmux kill-server` ends them all, and Claude Code with them), start tmux again, run `tmux set -g allow-passthrough on` and `tmux set -g focus-events on`, detach and attach again, then start Claude Code", Gyi = "images inside tmux need kitty 0.28 or later, Ghostty, or iTerm2 3.5 or later as the terminal outside tmux: attach tmux from one of those, run `tmux set -g allow-passthrough on` and `tmux set -g focus-events on`, detach and attach again, then restart Claude Code", zyi = "tmux does not know which terminal is outside it, so Claude Code draws no images here: attach tmux from kitty 0.28 or later, Ghostty, or iTerm2 3.5 or later, run `tmux set -g allow-passthrough on` and `tmux set -g focus-events on`, detach and attach again, then restart Claude Code", Vyi = "tmux did not say whether it passes images through; restart Claude Code to ask again", Kyi = "the terminal did not answer Claude Code's version query, so tmux was not asked whether it passes images through; restart Claude Code to ask again", qyi = "TMUX_PANE is not set (as in a tmux popup), so Claude Code cannot ask tmux about this pane; run Claude Code in a tmux pane to draw images", Yyi = "TMUX is set, but the terminal did not answer as tmux; if this is not a tmux pane, unset TMUX and restart Claude Code", v = ["#{client_termtype}", "#{allow-passthrough}", "#{focus-events}", "#{pane_top}", "#{pane_left}", "#{status}", "#{status-position}", "#{window_bigger}"].join("	");
async function Gss() {
  let e = import_chunk_c203g5kd.s.TMUX_PANE ? ["-t", import_chunk_c203g5kd.s.TMUX_PANE] : [], { stdout: t, code: n } = await (0, import_chunk_7fsmgfxx.kt)("tmux", ["display-message", "-p", ...e, v], { timeout: 1e3, useCwd: false });
  return n === 0 ? _(t) : void 0;
}
function _(e) {
  let t = e.replace(/\r?\n$/, "").split("	"), [n, o, r, i, a, d, c] = t, u = t[7];
  if (t.length !== 8 || n === void 0 || o === void 0 || i === void 0 || a === void 0 || d === void 0 || !/^\d+$/.test(i) || !/^\d+$/.test(a)) return;
  let p = d === "on" ? 1 : /^[2-5]$/.test(d) ? Number(d) : 0, l = c === "top" ? p : 0;
  return { termtype: n, pane: { passthrough: o === "on" || o === "1" ? "on" : o === "all" ? "all" : "off", hasFocusEvents: r === "1", isPlaced: u !== "1", top: Number(i) + l, left: Number(a) }, hasPassthroughOption: o !== "" };
}
function wYa(e, t) {
  let n = t.versionName?.startsWith("tmux ") === true, o = e === void 0 || e.termtype === "" ? null : e.termtype, r = (0, import_chunk_ky5sghtd.fso)(o), i = !r && (0, import_chunk_ky5sghtd.pso)(o);
  if (!n || !t.hasPane || e === void 0 || e.pane.passthrough === "off" || !e.pane.hasFocusEvents) {
    let u = { value: false, source: t.versionName === void 0 ? Kyi : !n ? Yyi : !t.hasPane ? qyi : e === void 0 ? Vyi : !e.hasPassthroughOption ? jyi : r || i ? aso : o === null ? zyi : `${Gyi}; tmux says it is ${o}` };
    return { kittyGraphics: u, itermImages: u };
  }
  let a = o === null ? `tmux passthrough ${e.pane.passthrough}, but tmux does not know which terminal is outside` : `tmux passthrough ${e.pane.passthrough}, outer terminal ${o}`, d = !i ? void 0 : e.pane.passthrough === "all" ? "iTerm2 pictures need `tmux set -g allow-passthrough on`, not `all`; then restart Claude Code" : !e.pane.isPlaced ? "the tmux window is bigger than this terminal, so Claude Code cannot tell where on screen to draw iTerm2 pictures; make the window fit, then restart Claude Code" : void 0;
  return { kittyGraphics: { value: r, source: a }, itermImages: { value: i && d === void 0, source: d === void 0 ? a : `${a}: ${d}` } };
}
var Xyi = 1500;
function kYa(e, t, n) {
  return !e || t !== void 0 && n >= t && n - t <= Xyi;
}
function Rq() {
  return (0, import_chunk_ky5sghtd.yc)().showHiddenCharactersEnabled ??= import_chunk_c203g5kd.s.CLAUDE_CODE_SHOW_HIDDEN_CHARACTERS ?? (0, import_chunk_865at33z.b)("tengu_bubbly_gadget", false);
}
var Wyi = "\u240D", P = /^[\u2190-\u21ff\u2300-\u23ff\u25a0-\u27bf\u2b00-\u2bff][\ufe0e\ufe0f]$/;
function jss(e) {
  let t = e.join(""), n = O(t), o = 0, r = 0, i = 0;
  return e.map((a) => {
    let d = [];
    i += a.length;
    for (; o < n.length && n[o] < i; o++) {
      let c = n[o];
      if (c > r) d.push({ text: t.slice(r, c), isMarker: false });
      let u = t.codePointAt(c);
      if (r = c + (u > 65535 ? 2 : 1), t[c] !== "\r" || !R(t, r)) d.push({ text: A(u), isMarker: true });
    }
    if (i > r) d.push({ text: t.slice(r, i), isMarker: false }), r = i;
    return d;
  });
}
function O(e) {
  let t = [];
  (0, import_chunk_xfj2cwfv.UC)(e, t);
  let n = [];
  for (let [o, { start: r, end: i, replacement: a }] of t.entries()) {
    if (a === "\uFFFD" || P.test(e.substring(r - 1, i))) continue;
    n.push(r);
    let d = t[o + 1]?.start ?? e.length;
    for (let c = i; c < d && (0, import_chunk_xfj2cwfv.qdt)(e.codePointAt(c)); c += e.codePointAt(c) > 65535 ? 2 : 1) n.push(c);
  }
  return n;
}
function A(e) {
  if (e < 32) return String.fromCharCode(9216 + e);
  return e === 127 ? "\u2421" : `<U+${e.toString(16).toUpperCase().padStart(4, "0")}>`;
}
function R(e, t) {
  return t === e.length || e[t] === `
` || e[t] === "\r";
}
function xfr(e) {
  return e.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f\ufeff]/g, (t) => A(t.charCodeAt(0)));
}
var S = /[\u061c\u200b\u200e\u200f]/g;
function Pfr(e) {
  return (0, import_chunk_xfj2cwfv.O6t)(e) ? jss([e])[0].map((t) => t.text).join("").replace(S, "") : e;
}
function kFt(e) {
  let t = (0, import_chunk_f64qna2j.POs)(e);
  return jss(t.map((n) => n.type === "text" ? n.value : "")).map((n, o) => t[o].type === "sequence" ? t[o].value : n.map(({ text: r, isMarker: i }) => !i ? r.replace(S, "") : r === Wyi ? `
` : (0, import_chunk_d57v19zt.Eoe)(r)).join("")).join("");
}
function E(e) {
  if (e.length === 0) return null;
  let t = e[0];
  if (t === "c") return { type: "reset" };
  if (t === "7") return { type: "cursor", action: { type: "save" } };
  if (t === "8") return { type: "cursor", action: { type: "restore" } };
  if (t === "D") return { type: "scroll", action: { type: "index" } };
  if (t === "M") return { type: "scroll", action: { type: "reverseIndex" } };
  if (t === "E") return { type: "cursor", action: { type: "nextLine", count: 1 } };
  if (t === "H") return null;
  if ("()".includes(t) && e.length >= 2) return null;
  return { type: "unknown", sequence: `\x1B${e}` };
}
function w(e) {
  let t = [], n = true;
  for (let o = 0; o < e.length; o++) if (e.charCodeAt(o) >= 128) {
    n = false;
    break;
  }
  if (n) {
    for (let o = 0; o < e.length; o++) t.push({ value: e[o], width: 1 });
    return t;
  }
  for (let o of (0, import_chunk_em52jhgp.Bke)(e)) {
    if (o.length === 1) {
      let r = o.charCodeAt(0);
      if (r >= 32 && r < 127) {
        t.push({ value: o, width: 1 });
        continue;
      }
    }
    t.push({ value: o, width: Math.max(1, (0, import_chunk_mgh1y10w.oe)(o)) });
  }
  return t;
}
function M(e, t) {
  switch (e) {
    case import_chunk_mqj2w7ns.Dk.CURSOR_VISIBLE:
      return { type: "cursor", action: t ? { type: "show" } : { type: "hide" } };
    case import_chunk_mqj2w7ns.Dk.ALT_SCREEN_CLEAR:
    case import_chunk_mqj2w7ns.Dk.ALT_SCREEN:
      return { type: "mode", action: { type: "alternateScreen", enabled: t } };
    case import_chunk_mqj2w7ns.Dk.BRACKETED_PASTE:
      return { type: "mode", action: { type: "bracketedPaste", enabled: t } };
    case import_chunk_mqj2w7ns.Dk.MOUSE_NORMAL:
      return { type: "mode", action: { type: "mouseTracking", mode: t ? "normal" : "off" } };
    case import_chunk_mqj2w7ns.Dk.MOUSE_BUTTON:
      return { type: "mode", action: { type: "mouseTracking", mode: t ? "button" : "off" } };
    case import_chunk_mqj2w7ns.Dk.MOUSE_ANY:
      return { type: "mode", action: { type: "mouseTracking", mode: t ? "any" : "off" } };
    case import_chunk_mqj2w7ns.Dk.FOCUS_EVENTS:
      return { type: "mode", action: { type: "focusEvents", enabled: t } };
    default:
      return null;
  }
}
function N(e) {
  let t = e.slice(2);
  if (t.length === 0) return [];
  let n = t.charCodeAt(t.length - 1), o = t.slice(0, -1), r = "", i = o, a = "";
  if (o.length > 0 && "?>=<".includes(o[0])) r = o[0], i = o.slice(1);
  let d = i.charCodeAt(i.length - 1);
  if (i.length > 0 && !(d >= 48 && d <= 59)) {
    let l = i.match(/([^0-9;:]+)$/);
    if (l) a = l[1], i = i.slice(0, -a.length);
  }
  if (n === import_chunk_0f2gasyz.pD.SGR && r === "") return [{ type: "sgr", params: i }];
  let c = i === "" ? [] : i.split(/[;:]/).map((l) => l === "" ? 0 : parseInt(l, 10)), u = c[0] ?? 1, p = c[1] ?? 1;
  if (n === import_chunk_0f2gasyz.pD.CUU) return [{ type: "cursor", action: { type: "move", direction: "up", count: u } }];
  if (n === import_chunk_0f2gasyz.pD.CUD || n === import_chunk_0f2gasyz.pD.VPR) return [{ type: "cursor", action: { type: "move", direction: "down", count: u } }];
  if (n === import_chunk_0f2gasyz.pD.CUF || n === import_chunk_0f2gasyz.pD.HPR) return [{ type: "cursor", action: { type: "move", direction: "forward", count: u } }];
  if (n === import_chunk_0f2gasyz.pD.CUB) return [{ type: "cursor", action: { type: "move", direction: "back", count: u } }];
  if (n === import_chunk_0f2gasyz.pD.CNL) return [{ type: "cursor", action: { type: "nextLine", count: u } }];
  if (n === import_chunk_0f2gasyz.pD.CPL) return [{ type: "cursor", action: { type: "prevLine", count: u } }];
  if (n === import_chunk_0f2gasyz.pD.CHA || n === import_chunk_0f2gasyz.pD.HPA) return [{ type: "cursor", action: { type: "column", col: u } }];
  if (n === import_chunk_0f2gasyz.pD.CUP || n === import_chunk_0f2gasyz.pD.HVP) return [{ type: "cursor", action: { type: "position", row: u, col: p } }];
  if (n === import_chunk_0f2gasyz.pD.VPA) return [{ type: "cursor", action: { type: "row", row: u } }];
  if (n === import_chunk_0f2gasyz.pD.ED) return [{ type: "erase", action: { type: "display", region: import_chunk_0f2gasyz.UDl[c[0] ?? 0] ?? "toEnd" } }];
  if (n === import_chunk_0f2gasyz.pD.EL) return [{ type: "erase", action: { type: "line", region: import_chunk_0f2gasyz.BDl[c[0] ?? 0] ?? "toEnd" } }];
  if (n === import_chunk_0f2gasyz.pD.ECH) return [{ type: "erase", action: { type: "chars", count: u } }];
  if (n === import_chunk_0f2gasyz.pD.IL) return [{ type: "edit", action: { type: "insertLines", count: u } }];
  if (n === import_chunk_0f2gasyz.pD.DL) return [{ type: "edit", action: { type: "deleteLines", count: u } }];
  if (n === import_chunk_0f2gasyz.pD.ICH) return [{ type: "edit", action: { type: "insertChars", count: u } }];
  if (n === import_chunk_0f2gasyz.pD.DCH) return [{ type: "edit", action: { type: "deleteChars", count: u } }];
  if (n === import_chunk_0f2gasyz.pD.SU) return [{ type: "scroll", action: { type: "up", count: u } }];
  if (n === import_chunk_0f2gasyz.pD.SD) return [{ type: "scroll", action: { type: "down", count: u } }];
  if (n === import_chunk_0f2gasyz.pD.DECSTBM) return [{ type: "scroll", action: { type: "setRegion", top: u, bottom: c[1] ?? 0 } }];
  if (n === import_chunk_0f2gasyz.pD.SCOSC) return [{ type: "cursor", action: { type: "save" } }];
  if (n === import_chunk_0f2gasyz.pD.SCORC) return [{ type: "cursor", action: { type: "restore" } }];
  if (n === import_chunk_0f2gasyz.pD.DECSCUSR && a === " ") return [{ type: "cursor", action: { type: "style", ...import_chunk_0f2gasyz.q8i[u] ?? import_chunk_0f2gasyz.q8i[0] } }];
  if (r === "?" && (n === import_chunk_0f2gasyz.pD.SM || n === import_chunk_0f2gasyz.pD.RM)) {
    let l = n === import_chunk_0f2gasyz.pD.SM, f = [];
    for (let h of c) {
      let x = M(h, l);
      if (x) f.push(x);
    }
    return f.length ? f : [{ type: "unknown", sequence: e }];
  }
  return [{ type: "unknown", sequence: e }];
}
function U(e) {
  if (e.length < 2) return "unknown";
  if (e.charCodeAt(0) !== import_chunk_0f2gasyz.r3.ESC) return "unknown";
  let t = e.charCodeAt(1);
  if (t === 91) return "csi";
  if (t === 93) return "osc";
  return "esc";
}
class iso {
  #o;
  #r;
  #e = "";
  #t = (0, import_chunk_yrh4vxq4.Ifr)();
  #n;
  constructor(e) {
    this.#r = e?.forOutput ?? false, this.#o = new import_chunk_f64qna2j.ehn({ intermediatesRunToFinal: this.#r });
  }
  get style() {
    return this.#t;
  }
  get inLink() {
    return this.#n !== void 0;
  }
  get linkUrl() {
    return this.#n;
  }
  flush() {
    let e = this.#e;
    return this.#e = "", e ? this.processText(e, false) : [];
  }
  reset() {
    this.#e = "", this.#o.reset(), this.#t = (0, import_chunk_yrh4vxq4.Ifr)(), this.#n = void 0;
  }
  feed(e) {
    let t = this.#o.feed(e), n = [];
    for (let o = 0; o < t.length; o++) {
      let r = t[o];
      if (r.type === "text") {
        let i = this.#e + r.value;
        this.#e = "";
        let a = this.#r && o === t.length - 1;
        n.push(...this.processText(i, a));
      } else {
        if (this.#e) n.push(...this.flush());
        n.push(...this.processSequence(r.value));
      }
    }
    return n;
  }
  processText(e, t) {
    let n = this.#t;
    if (e.indexOf("\x07") === -1) {
      let i = w(e);
      return this.holdTail(i, t), i.length > 0 ? [{ type: "text", graphemes: i, style: n }] : [];
    }
    let o = [], r = e.split("\x07");
    for (let i = 0; i < r.length; i++) {
      if (i > 0) o.push({ type: "bell" });
      let a = w(r[i]);
      if (this.holdTail(a, t && i === r.length - 1), a.length > 0) o.push({ type: "text", graphemes: a, style: n });
    }
    return o;
  }
  holdTail(e, t) {
    if (!t || e.length === 0) return;
    let n = e.at(-1), o = n.value.charCodeAt(n.value.length - 1);
    if (o < 32) return;
    if (this.#e = n.value, e.pop(), o >= 55296 && o <= 56319 && e.length > 0) this.#e = e.pop().value + this.#e;
    while (e.length > 0 && this.#e.length <= 64) {
      let r = e.at(-1).value, i = r.charCodeAt(r.length - 1), a = i >= 56320 && i <= 57343 ? r.codePointAt(r.length - 2) : i;
      if (a === 8205 || a !== void 0 && a >= 127462 && a <= 127487) this.#e = r + this.#e, e.pop();
      else break;
    }
  }
  processSequence(e) {
    switch (U(e)) {
      case "csi": {
        let n = N(e), o = n[0];
        if (o?.type === "sgr") return this.#t = (0, import_chunk_yrh4vxq4.PYa)(o.params, this.#t), [];
        return n;
      }
      case "osc": {
        let n = e.slice(2);
        if (n.endsWith("\x07")) n = n.slice(0, -1);
        else if (n.endsWith("\x1B\\")) n = n.slice(0, -2);
        let o = (0, import_chunk_vw137skj.wZa)(n);
        if (o) {
          if (o.type === "link") this.#n = o.action.type === "start" ? o.action.url : void 0;
          return [o];
        }
        return [];
      }
      case "esc": {
        let n = e.slice(1), o = E(n);
        if (o?.type === "reset") this.#t = (0, import_chunk_yrh4vxq4.Ifr)(), this.#n = void 0;
        return o ? [o] : [];
      }
      default:
        return [{ type: "unknown", sequence: e }];
    }
  }
}
function Ofr(e) {
  let t = new iso(), n = [];
  for (let { type: o, value: r } of (0, import_chunk_f64qna2j.POs)(e)) {
    if (o === "sequence") {
      t.processSequence(r);
      continue;
    }
    if (!r) continue;
    let i = I(t.style);
    i.hyperlink = t.linkUrl;
    let a = n.at(-1);
    if (a && F(a.props, i)) a.text += r;
    else n.push({ text: r, props: i });
  }
  return n;
}
function I(e) {
  return { color: k(e.fg), backgroundColor: k(e.bg), dim: e.dim ? true : void 0, bold: e.bold ? true : void 0, italic: e.italic ? true : void 0, underline: e.underline !== "none" ? true : void 0, strikethrough: e.strikethrough ? true : void 0, inverse: e.inverse ? true : void 0, hyperlink: void 0 };
}
var L = { black: "ansi:black", red: "ansi:red", green: "ansi:green", yellow: "ansi:yellow", blue: "ansi:blue", magenta: "ansi:magenta", cyan: "ansi:cyan", white: "ansi:white", brightBlack: "ansi:blackBright", brightRed: "ansi:redBright", brightGreen: "ansi:greenBright", brightYellow: "ansi:yellowBright", brightBlue: "ansi:blueBright", brightMagenta: "ansi:magentaBright", brightCyan: "ansi:cyanBright", brightWhite: "ansi:whiteBright" };
function k(e) {
  switch (e.type) {
    case "named":
      return L[e.name];
    case "indexed":
      return `ansi256(${e.index})`;
    case "rgb":
      return `rgb(${e.r},${e.g},${e.b})`;
    case "default":
      return;
  }
}
function F(e, t) {
  return e.color === t.color && e.backgroundColor === t.backgroundColor && e.bold === t.bold && e.dim === t.dim && e.italic === t.italic && e.underline === t.underline && e.strikethrough === t.strikethrough && e.inverse === t.inverse && e.hyperlink === t.hyperlink;
}
