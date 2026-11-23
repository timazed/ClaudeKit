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
var chunk_97b6xx64_exports = {};
__export(chunk_97b6xx64_exports, {
  BGs: () => BGs,
  Skn: () => Skn,
  WGs: () => WGs,
  aSa: () => aSa,
  bkn: () => bkn,
  dSa: () => dSa,
  fY: () => fY,
  iSa: () => iSa,
  lSa: () => lSa,
  nXn: () => nXn,
  vjr: () => vjr,
  zmt: () => zmt
});
module.exports = __toCommonJS(chunk_97b6xx64_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_0f2gasyz = require("/$bunfs/root/chunk-0f2gasyz.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_qbrmmydq = require("/$bunfs/root/chunk-qbrmmydq.js");
var import_chunk_ky5sghtd = require("/$bunfs/root/chunk-ky5sghtd.js");
var import_buffer = require("buffer");
var import_fs = require("fs");
var oe = /^\x1b\[(\d*(?:;\d*){0,5})_$/, ie = 1, ae = 2, ue = 4, fe = 8, ce = 16, le = 8, de = 9, pe = 13, xe = 18, me = 27, be = 32, G = 112, ge = 115, U = 116, he = 123, Ee = 8, ye = { 33: { code: 5, final: "~" }, 34: { code: 6, final: "~" }, 35: { code: 1, final: "F" }, 36: { code: 1, final: "H" }, 37: { code: 1, final: "D" }, 38: { code: 1, final: "A" }, 39: { code: 1, final: "C" }, 40: { code: 1, final: "B" }, 45: { code: 2, final: "~" }, 46: { code: 3, final: "~" } }, _e = [15, 17, 18, 19, 20, 21, 23, 24];
function Y(e, n) {
  let t = oe.exec(e);
  if (!t) return null;
  let r = t[1].split(";"), o = C(r, 0, 0), u = C(r, 2, 0), c = C(r, 3, 0) !== 0, d = C(r, 4, 0), l = Math.min(Math.max(C(r, 5, 1), 1), Ee);
  if (!c) {
    if (o === xe && u !== 0) return { sequences: [String.fromCharCode(u)], highSurrogate: "" };
    return { sequences: [], highSurrogate: n };
  }
  let i = (d & (ae | ie)) !== 0, g = (d & (fe | ue)) !== 0, O = (d & ce) !== 0, a = i && g && u > 32 && u !== 127, f = g && !a, x = i && !a, p = 1 + (O ? 1 : 0) + (x ? 2 : 0) + (f ? 4 : 0), h = ye[o];
  if (h) {
    if (h.final === "~") return E(l, p === 1 ? (0, import_chunk_0f2gasyz.Jl)(h.code, "~") : (0, import_chunk_0f2gasyz.Jl)(h.code, p, "~"));
    return E(l, p === 1 ? (0, import_chunk_0f2gasyz.Jl)(h.final) : (0, import_chunk_0f2gasyz.Jl)(1, p, h.final));
  }
  if (o >= G && o <= ge) {
    let y = String.fromCharCode(80 + (o - G));
    return E(l, p === 1 ? `\x1BO${y}` : (0, import_chunk_0f2gasyz.Jl)(1, p, y));
  }
  if (o >= U && o <= he) {
    let y = _e[o - U];
    return E(l, p === 1 ? (0, import_chunk_0f2gasyz.Jl)(y, "~") : (0, import_chunk_0f2gasyz.Jl)(y, p, "~"));
  }
  let R = x ? "\x1B" : "";
  switch (o) {
    case le:
      return E(l, R + (f ? "\b" : "\x7F"));
    case de:
      return E(l, R + (O ? (0, import_chunk_0f2gasyz.Jl)("Z") : "	"));
    case pe:
      return E(l, R + (f ? `
` : "\r"));
    case me:
      return E(l, R + "\x1B");
    default:
      break;
  }
  let m = u;
  if (f && o === be) m = 0;
  else if (m === 0) {
    let y = o >= 65 && o <= 90, se = o >= 48 && o <= 57;
    if (!(f || x) || !(y || se)) return { sequences: [], highSurrogate: n };
    if (m = y && !O ? o + 32 : o, f) m = H(m);
  } else if (f) m = H(m);
  if (m >= 55296 && m <= 56319) return { sequences: [], highSurrogate: String.fromCharCode(m) };
  let T = String.fromCharCode(m);
  if (m >= 56320 && m <= 57343) {
    if (!n) return { sequences: [], highSurrogate: "" };
    T = n + T;
  }
  return E(l, R + T);
}
function C(e, n, t) {
  let r = e[n];
  return r === void 0 || r === "" ? t : parseInt(r, 10);
}
function E(e, n) {
  return { sequences: Array(e).fill(n), highSurrogate: "" };
}
function H(e) {
  if (e < 32) return e;
  if (e >= 64 && e <= 95 || e >= 97 && e <= 122) return e & 31;
  switch (e) {
    case 32:
    case 50:
      return 0;
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
      return e - 51 + 27;
    case 56:
    case 63:
      return 127;
    case 47:
      return 31;
    default:
      return e;
  }
}
var Pe = /^(?:\x1b)([a-zA-Z0-9])$/, Re = /^(?:\x1b+)(O|N|\[|\[\[)(?:(\d+)(?:;(\d+))?([~^$])|(?:1;)?(\d+)?([a-zA-Z]))/, I = /^\x1b\[(\d+)(?::(\d*)(?::(\d+))?)?(?:;(\d+))?u/, L = /^\x1b\[27;(\d+);(\d+)~/, Se = /^\x1b\[\?(\d+);(\d+)\$y$/, Oe = /^\x1b\[\?([\d;]*)c$/, Ce = /^\x1b\[>([\d;]*)c$/, Ie = /^\x1b\[\?(\d+)u$/, Ae = /^\x1b\[\?(\d+);(\d+)R$/, Te = /^\x1b\[(?!1;(?:\d|1[0-6])R)(\d+);(\d+)R$/, ke = /^\x1b\[6;(\d+);(\d+)t$/, we = /^\x1b\[\?997;([12])n$/, Me = /^\x1b\](\d+);(.*?)(?:\x07|\x1b\\)$/s, Be = /^\x1bP>\|(.*?)(?:\x07|\x1b\\)$/s, Ke = /^\x1b_G(?:[^;]*,)?i=(\d+)[^;]*;(.*?)\x1b\\$/s, A = /^\x1b\[<(\d+);(-?\d+);(-?\d+)([Mm])$/, F = /^\x1b\[<[\d;-]*$/, ve = /^\x1b\[<[\d;-]*[Mm]/, De = /^\x1b[[\]P_]?$/, Le = 32;
function B(e) {
  return e.length <= Le && F.test(e);
}
var $e = /^\x1b\[(?:[0-9:;]+|[<=>?][0-9:;]*[ -/]*)$/, Fe = /^\x1b(?:\][0-9]|P[0-9>|$+=!]|_G)[^\x07]*$/s, Ge = 256, Ue = 64;
function vjr(e) {
  if (F.test(e)) return B(e);
  if (Fe.test(e)) return e.length <= Ge;
  return e.length <= Ue && $e.test(e);
}
function iSa(e) {
  return { ...e, incomplete: "", droppedMousePrefix: e.incomplete };
}
function K(e) {
  if (e.startsWith("\x1B[")) {
    let n;
    if (n = Se.exec(e)) return { type: "decrpm", mode: parseInt(n[1], 10), status: parseInt(n[2], 10) };
    if (n = Oe.exec(e)) return { type: "da1", params: W(n[1]) };
    if (n = Ce.exec(e)) return { type: "da2", params: W(n[1]) };
    if (n = Ie.exec(e)) return { type: "kittyKeyboard", flags: parseInt(n[1], 10) };
    if (n = Ae.exec(e)) return { type: "cursorPosition", row: parseInt(n[1], 10), col: parseInt(n[2], 10) };
    if (n = Te.exec(e)) return { type: "cursorReport", row: parseInt(n[1], 10), col: parseInt(n[2], 10) };
    if (n = we.exec(e)) return { type: "themeNotify", dark: n[1] === "1" };
    if (n = ke.exec(e)) return { type: "cellSize", height: parseInt(n[1], 10), width: parseInt(n[2], 10) };
    return null;
  }
  if (e.startsWith("\x1B]")) {
    let n = Me.exec(e);
    if (n) return { type: "osc", code: parseInt(n[1], 10), data: n[2] };
  }
  if (e.startsWith("\x1BP")) {
    let n = Be.exec(e);
    if (n) return { type: "xtversion", name: n[1] };
  }
  if (e.startsWith("\x1B_")) {
    let n = Ke.exec(e);
    if (n) return { type: "kittyGraphics", id: parseInt(n[1], 10), message: n[2] };
  }
  return null;
}
function He(e) {
  let n = (0, import_chunk_f64qna2j.wIr)(e, { x10Mouse: true }).tokens[0]?.value ?? "";
  return n === import_chunk_0f2gasyz.LOs || A.test(n) || K(n) !== null;
}
function W(e) {
  if (!e) return [];
  return e.split(";").map((n) => parseInt(n, 10));
}
var nXn = { mode: "NORMAL", incomplete: "", pasteBuffer: "", pendingByteEvents: [], droppedMousePrefix: "", flushedEscapePrefix: "", win32HighSurrogate: "" };
function Ye(e, n) {
  let t = n.CLAUDE_CODE_BS_AS_CTRL_BACKSPACE;
  if ((0, import_chunk_69qhefwa.Ne)(t)) return true;
  if ((0, import_chunk_69qhefwa.Oi)(t)) return false;
  return e === "win32" && n.TERM_PROGRAM !== "mintty" && n.TERM !== "cygwin";
}
function BGs() {
  return Ye("darwin", process.env);
}
function ne() {
  let e = (0, import_chunk_f9x2f6cx.pf)()?.keyDialect;
  return e !== void 0 ? e : (0, import_chunk_ky5sghtd.MHn)(import_chunk_c203g5kd.s.TERM);
}
function We() {
  return ne() === "st";
}
function k() {
  return { x10Mouse: true, escPrefixedKeyIsAlt: ne() === "rxvt", sizeLeavesOutReplies: (0, import_chunk_ky5sghtd.yc)().newRendererEnabled === true };
}
function Xe(e, n) {
  let t = e.CLAUDE_CODE_ALTGR_AS_TEXT;
  if ((0, import_chunk_69qhefwa.Ne)(t)) return "force";
  if ((0, import_chunk_69qhefwa.Oi)(t)) return "off";
  return n ?? !!e.WT_SESSION ? "auto" : "off";
}
function qe() {
  return Xe(process.env, (0, import_chunk_f9x2f6cx.pf)()?.wtSession);
}
function te(e) {
  return e > 32 && e < 127 || e >= 160 && e < 55296;
}
function Ve(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
function X(e, n, t) {
  return { kind: "key", name: String.fromCodePoint(n), fn: false, ctrl: false, meta: false, shift: t, option: false, super: false, sequence: e, raw: e, col: void 0, row: void 0 };
}
function q(e, n) {
  if (!(e.ctrl && e.meta) || e.super) return false;
  if (!te(n)) return false;
  let t = qe();
  if (t === "off") return false;
  return t === "force" || !Ve(n);
}
function ze(e) {
  if (import_buffer.Buffer.isBuffer(e)) if (e[0] > 127 && e[1] === void 0) return e[0] -= 128, "\x1B" + String(e);
  else return String(e);
  else if (e !== void 0 && typeof e !== "string") return String(e);
  else if (!e) return "";
  else return e;
}
function v(e, n) {
  if (e.inPaste) e.pasteBuffer += String.fromCharCode(n.byte);
  else e.keys.push(S(n.seq));
}
function P(e) {
  let n = e.pending;
  e.pending = [];
  for (let t of n) v(e, t);
}
function N(e, n, t) {
  if (e.pending.length === 0) {
    if (t >= 194 && t <= 244) {
      e.pending = [{ seq: n, byte: t }];
      return;
    }
    v(e, { seq: n, byte: t });
    return;
  }
  if (t >= 128 && t <= 191) {
    e.pending = [...e.pending, { seq: n, byte: t }];
    let r = e.pending[0].byte, o = r <= 223 ? 2 : r <= 239 ? 3 : 4;
    if (e.pending.length < o) return;
    let u = e.pending;
    e.pending = [];
    let c = import_buffer.Buffer.from(u.map((l) => l.byte)).toString("utf8");
    if ([...c].length !== 1 || import_buffer.Buffer.byteLength(c, "utf8") !== u.length) for (let l of u) v(e, l);
    else if (e.inPaste) e.pasteBuffer += c;
    else e.keys.push(S(c));
    return;
  }
  P(e), N(e, n, t);
}
function Skn(e, n = "") {
  let t = n === null, r = t ? "" : ze(n), o = e.droppedMousePrefix, u = t ? e.flushedEscapePrefix : "", c;
  if (t && e.mode !== "IN_PASTE") {
    let a = e.incomplete;
    if (vjr(a)) c = { tokens: [], unfinished: a };
    else if (F.test(a)) o = a, c = { tokens: [], unfinished: "" };
    else {
      if (De.test(a)) u = a;
      c = { tokens: (0, import_chunk_f64qna2j.qPo)(a, k()), unfinished: "" };
    }
  } else if (t) c = { tokens: (0, import_chunk_f64qna2j.qPo)(e.incomplete, k()), unfinished: "" };
  else {
    let a = e.flushedEscapePrefix + r, f = a !== r && He(a) ? a : r;
    c = (0, import_chunk_f64qna2j.wIr)(e.incomplete + f, k());
  }
  let { tokens: d, unfinished: l } = c, i = { keys: [], inPaste: e.mode === "IN_PASTE" || d.find((a) => a.value === import_chunk_0f2gasyz.LOs || a.value === import_chunk_0f2gasyz.NOs)?.value === import_chunk_0f2gasyz.NOs, pasteBuffer: e.pasteBuffer, pending: e.pendingByteEvents }, g = e.win32HighSurrogate;
  for (let a of d) if (a.type === "sequence") if (o = "", a.value === import_chunk_0f2gasyz.LOs) P(i), i.inPaste = true, i.pasteBuffer = "";
  else if (a.value === import_chunk_0f2gasyz.NOs) P(i), i.keys.push({ kind: "paste", text: i.pasteBuffer }), i.inPaste = false, i.pasteBuffer = "";
  else if (i.inPaste) {
    if (J(a.value)) continue;
    let f = Z(a.value);
    if (f !== void 0) {
      N(i, a.value, f);
      continue;
    }
    if (!K(a.value) && !j.test(a.value)) P(i);
    i.pasteBuffer += Qe(a.value);
  } else {
    let f = Y(a.value, g);
    if (f) {
      P(i), g = f.highSurrogate;
      for (let R of f.sequences) i.keys.push(S(R));
      continue;
    }
    let x = Z(a.value);
    if (x !== void 0) {
      N(i, a.value, x);
      continue;
    }
    let p = K(a.value);
    if (p) {
      i.keys.push({ kind: "response", sequence: a.value, response: p });
      continue;
    }
    let h = Q(a.value);
    if (h) {
      i.keys.push(h);
      continue;
    }
    if (a.value === import_chunk_0f2gasyz.uVn || !J(a.value) && !j.test(a.value)) P(i);
    if (a.value === import_chunk_0f2gasyz.cVn || a.value === import_chunk_0f2gasyz.uVn) {
      i.keys.push({ kind: "focus", focused: a.value === import_chunk_0f2gasyz.cVn });
      continue;
    }
    i.keys.push(S(a.value));
  }
  else if (a.type === "text") {
    P(i);
    let f = a.value;
    if (!i.inPaste && o) {
      let x = o + f, p = ve.exec(x);
      if (p) {
        if (o = "", f = x.slice(p[0].length), !f) continue;
      } else if (B(x)) {
        o = x;
        continue;
      } else o = "";
    } else if (!i.inPaste && B(f)) {
      o = f;
      continue;
    }
    if (i.inPaste) i.pasteBuffer += f;
    else if (/^\[<\d+;-?\d+;-?\d+[Mm]$/.test(f) || /^\[M[\x60-\x7f][\x20-\uffff]{2}$/.test(f)) {
      let x = "\x1B" + f, p = Q(x);
      i.keys.push(p ?? S(x));
    } else i.keys.push(S(f));
  }
  if (t) P(i);
  if (t && i.inPaste) {
    if (i.pasteBuffer) i.keys.push({ kind: "paste", text: i.pasteBuffer });
    i.inPaste = false, i.pasteBuffer = "";
  }
  let O = { mode: i.inPaste ? "IN_PASTE" : "NORMAL", incomplete: l, pasteBuffer: i.pasteBuffer, pendingByteEvents: i.pending, droppedMousePrefix: o, flushedEscapePrefix: u, win32HighSurrogate: g };
  return [i.keys, O];
}
var Ze = { OP: "f1", OQ: "f2", OR: "f3", OS: "f4", "[P": "f1", "[Q": "f2", "[S": "f4", Op: "0", Oq: "1", Or: "2", Os: "3", Ot: "4", Ou: "5", Ov: "6", Ow: "7", Ox: "8", Oy: "9", Oj: "*", Ok: "+", Ol: ",", Om: "-", On: ".", Oo: "/", OM: "return", "[11~": "f1", "[12~": "f2", "[13~": "f3", "[14~": "f4", "[[A": "f1", "[[B": "f2", "[[C": "f3", "[[D": "f4", "[[E": "f5", "[15~": "f5", "[17~": "f6", "[18~": "f7", "[19~": "f8", "[20~": "f9", "[21~": "f10", "[23~": "f11", "[24~": "f12", "[A": "up", "[B": "down", "[C": "right", "[D": "left", "[E": "clear", "[F": "end", "[H": "home", OA: "up", OB: "down", OC: "right", OD: "left", OE: "clear", OF: "end", OH: "home", "[1~": "home", "[2~": "insert", "[3~": "delete", "[4~": "end", "[5~": "pageup", "[6~": "pagedown", "[[5~": "pageup", "[[6~": "pagedown", "[7~": "home", "[8~": "end", "[a": "up", "[b": "down", "[c": "right", "[d": "left", "[e": "clear", "[2$": "insert", "[3$": "delete", "[5$": "pageup", "[6$": "pagedown", "[7$": "home", "[8$": "end", Oa: "up", Ob: "down", Oc: "right", Od: "left", Oe: "clear", "[2^": "insert", "[3^": "delete", "[5^": "pageup", "[6^": "pagedown", "[7^": "home", "[8^": "end", "[Z": "tab" }, je = (e) => ["[a", "[b", "[c", "[d", "[e", "[2$", "[3$", "[5$", "[6$", "[7$", "[8$", "[Z"].includes(e), Je = (e) => ["Oa", "Ob", "Oc", "Od", "Oe", "[2^", "[3^", "[5^", "[6^", "[7^", "[8^"].includes(e);
function D(e) {
  let n = e - 1;
  return { shift: !!(n & 1), meta: !!(n & 2), ctrl: !!(n & 4), super: !!(n & 8) };
}
function V(e) {
  switch (e) {
    case 8:
      return "backspace";
    case 9:
      return "tab";
    case 13:
      return "return";
    case 27:
      return "escape";
    case 32:
      return "space";
    case 127:
      return "backspace";
    case 57399:
      return "0";
    case 57400:
      return "1";
    case 57401:
      return "2";
    case 57402:
      return "3";
    case 57403:
      return "4";
    case 57404:
      return "5";
    case 57405:
      return "6";
    case 57406:
      return "7";
    case 57407:
      return "8";
    case 57408:
      return "9";
    case 57409:
      return ".";
    case 57410:
      return "/";
    case 57411:
      return "*";
    case 57412:
      return "-";
    case 57413:
      return "+";
    case 57414:
      return "return";
    case 57415:
      return "=";
    case 57416:
      return ",";
    case 57417:
      return "left";
    case 57418:
      return "right";
    case 57419:
      return "up";
    case 57420:
      return "down";
    case 57421:
      return "pageup";
    case 57422:
      return "pagedown";
    case 57423:
      return "home";
    case 57424:
      return "end";
    case 57425:
      return "insert";
    case 57426:
      return "delete";
    default:
      if (e >= 32 && e <= 126) return String.fromCharCode(e).toLowerCase();
      if (e >= 160 && e < 55296) return String.fromCodePoint(e);
      return;
  }
}
function z(e, n) {
  if (!e.ctrl || e.shift || e.meta || e.super) return;
  switch (n) {
    case 91:
      return "escape";
    case 109:
    case 77:
      return "return";
    case 105:
    case 73:
      return "tab";
    case 104:
    case 72:
      return "backspace";
    default:
      return;
  }
}
function Z(e) {
  let n, t, r = I.exec(e);
  if (r) n = parseInt(r[1], 10), t = r[4] === void 0 ? void 0 : parseInt(r[4], 10);
  else if (r = L.exec(e)) t = parseInt(r[1], 10), n = parseInt(r[2], 10);
  if (n === void 0 || n < 128 || n > 255) return;
  if (t !== void 0 && t !== 1) return;
  return n;
}
function aSa(e) {
  let n = parseInt(I.exec(e)?.[2] ?? "", 10);
  return te(n) ? String.fromCodePoint(n) : void 0;
}
function Qe(e) {
  let n = I.exec(e), t = n ? parseInt(n[1], 10) : void 0, r = n ? n[4] ? parseInt(n[4], 10) : 1 : 1;
  if (t === void 0 && (n = L.exec(e))) r = parseInt(n[1], 10), t = parseInt(n[2], 10);
  if (t !== void 0 && t <= 1114111) {
    if (r < 1) r = 1;
    if (D(r).ctrl) switch (t) {
      case 105:
      case 73:
        return "	";
      case 106:
      case 74:
        return `
`;
      case 109:
      case 77:
        return "\r";
    }
    return String.fromCodePoint(t);
  }
  return e;
}
var en = /^\x1b\[M[\x60-\x7f][\x20-\uffff]{2}$/, j = /^\x1b\[M[\x20-\x7f][\x20-\uffff]{2}$/;
function J(e) {
  return e === import_chunk_0f2gasyz.cVn || e === import_chunk_0f2gasyz.uVn || A.test(e) || en.test(e);
}
function lSa(e) {
  let n = e.kind === "key" && /^\x1b\[1;(\d+)R$/.exec(e.sequence ?? "");
  return n ? { kind: "response", sequence: n[0], response: { type: "cursorReport", row: 1, col: Number(n[1]) } } : void 0;
}
function Q(e) {
  let n = A.exec(e);
  if (!n) return null;
  let t = parseInt(n[1], 10);
  if ((t & 192) !== 0) return null;
  return { kind: "mouse", button: t, action: n[4] === "M" ? "press" : "release", col: parseInt(n[2], 10), row: parseInt(n[3], 10) };
}
function S(e = "") {
  let n = { kind: "key", name: "", fn: false, ctrl: false, meta: false, shift: false, option: false, super: false, sequence: e, raw: e, col: void 0, row: void 0 }, t;
  if (t = I.exec(e)) {
    let r = parseInt(t[1], 10), o = t[4] ? parseInt(t[4], 10) : 1, u = D(o);
    if (q(u, r)) return X(e, r, u.shift);
    let c = t[3] ? parseInt(t[3], 10) : void 0, d = c !== void 0 && (u.ctrl ? r > 127 : u.meta && r >= 880 && c >= 97 && c <= 122) ? c : r, l = z(u, d);
    return { kind: "key", name: l ?? V(d), fn: false, ctrl: l === void 0 && u.ctrl, meta: u.meta, shift: u.shift, option: false, super: u.super, sequence: e, raw: e, col: void 0, row: void 0 };
  }
  if (t = L.exec(e)) {
    let r = D(parseInt(t[1], 10)), o = parseInt(t[2], 10);
    if (q(r, o)) return X(e, o, r.shift);
    let u = z(r, o);
    return { kind: "key", name: u ?? V(o), fn: false, ctrl: u === void 0 && r.ctrl, meta: r.meta, shift: r.shift, option: false, super: r.super, sequence: e, raw: e, col: void 0, row: void 0 };
  }
  if (t = A.exec(e)) {
    let r = parseInt(t[1], 10), o = parseInt(t[2], 10), u = parseInt(t[3], 10);
    return ee(e, r, o, u) ?? _(e, "mouse", false);
  }
  if (e.length === 6 && e.startsWith("\x1B[M")) {
    let r = e.charCodeAt(3) - 32, o = e.charCodeAt(4) - 32, u = e.charCodeAt(5) - 32;
    return ee(e, r, o, u) ?? _(e, "mouse", false);
  }
  if (e === "\r" || e === "\x1B\r") n.raw = void 0, n.name = "return", n.meta = e.length === 2;
  else if (e === `
` || e === `\x1B
`) n.name = "enter", n.meta = e.length === 2;
  else if (e === "	" || e === "\x1B	") n.name = "tab", n.meta = e.length === 2;
  else if (e === "\b" || e === "\x1B\b") {
    if (n.name = "backspace", n.meta = e.charAt(0) === "\x1B", BGs()) n.ctrl = true;
  } else if (e === "\x7F" || e === "\x1B\x7F") n.name = "backspace", n.meta = e.charAt(0) === "\x1B";
  else if (e === "\x1B" || e === "\x1B\x1B") n.name = "escape", n.meta = e.length === 2;
  else if (e === " " || e === "\x1B ") n.name = "space", n.meta = e.length === 2;
  else if (e === "") n.name = "\\", n.ctrl = true;
  else if (e === "") n.name = "]", n.ctrl = true;
  else if (e === "") n.name = "^", n.ctrl = true;
  else if (e === "") n.name = "_", n.ctrl = true;
  else if (e <= "" && e.length === 1) n.name = String.fromCharCode(e.charCodeAt(0) + 97 - 1), n.ctrl = true;
  else if (e.length === 1 && e >= "0" && e <= "9") n.name = "number";
  else if (e.length === 1 && e >= "a" && e <= "z") n.name = e;
  else if (e.length === 1 && e >= "A" && e <= "Z") n.name = e.toLowerCase(), n.shift = true;
  else if (t = Pe.exec(e)) n.meta = true, n.shift = /^[A-Z]$/.test(t[1]), n.name = t[1].toLowerCase();
  else if (t = Re.exec(e)) {
    let r = [...e];
    if (r[0] === "\x1B" && r[1] === "\x1B") n.option = true;
    let o = [t[1], t[2], t[4], t[6]].filter(Boolean).join(""), u = Number(t[3] ?? t[5] ?? 1) - 1;
    n.ctrl = !!(u & 4), n.meta = !!(u & 2), n.super = !!(u & 8), n.shift = !!(u & 1), n.name = o === "[P" && u === 0 && We() ? "delete" : Ze[o], n.shift = je(o) || n.shift || o === "OM" && ((0, import_chunk_f9x2f6cx.pf)()?.terminal ?? import_chunk_c203g5kd.s.terminal) === "konsole", n.ctrl = Je(o) || n.ctrl;
  }
  if (n.raw === "\x1Bb") n.meta = true, n.name = "left";
  else if (n.raw === "\x1Bf") n.meta = true, n.name = "right";
  switch (e) {
    case "\x1B[1~":
      return _(e, "home", false);
    case "\x1B[4~":
      return _(e, "end", false);
    case "\x1B[5~":
      return _(e, "pageup", false);
    case "\x1B[6~":
      return _(e, "pagedown", false);
    case "\x1B[1;5D":
      return _(e, "left", true);
    case "\x1B[1;5C":
      return _(e, "right", true);
  }
  return n;
}
function ee(e, n, t, r) {
  let o = n & 67;
  if (o !== 64 && o !== 65) return null;
  return { kind: "key", name: o === 64 ? "wheelup" : "wheeldown", fn: false, ctrl: (n & 16) !== 0, meta: (n & 8) !== 0, shift: (n & 4) !== 0, option: false, super: false, sequence: e, raw: e, col: t, row: r };
}
function _(e, n, t) {
  return { kind: "key", name: n, fn: false, ctrl: t, meta: false, shift: false, option: false, super: false, sequence: e, raw: e, col: void 0, row: void 0 };
}
function fY() {
  return (0, import_chunk_ky5sghtd.yc)().nativeCursorEnabled ??= WGs();
}
function WGs() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_ACCESSIBILITY) return true;
  if ((0, import_chunk_qbrmmydq.Hm)()) return true;
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_NATIVE_CURSOR) return true;
  return (0, import_chunk_865at33z.b)("tengu_native_cursor", false);
}
var bkn = 250, dSa = 1750;
function zmt(e = process.stdin, n = 0, t = bkn) {
  if (!e.isTTY) return;
  let r = [];
  try {
    let d;
    while ((d = e.read()) !== null) r.push(typeof d === "string" ? Buffer.from(d, "utf8") : d);
  } catch {
  }
  let o = e, u = o.isRaw === true, c = -1;
  try {
    if (!u) o.setRawMode?.(true);
    c = (0, import_fs.openSync)("/dev/tty", import_fs.constants.O_RDONLY | import_fs.constants.O_NONBLOCK);
    let d = Buffer.alloc(1024), l = n > 0 ? performance.now() + t : 0;
    for (let i = 0; i < 64; ) {
      let g = sn(c, d);
      if (g > 0) {
        r.push(Buffer.from(d.subarray(0, g))), i++;
        continue;
      }
      if (g < 0 || performance.now() >= l || on(Buffer.concat(r)) >= n) break;
      Bun.sleepSync(2);
    }
  } catch {
  } finally {
    if (c >= 0) try {
      (0, import_fs.closeSync)(c);
    } catch {
    }
    if (!u) try {
      o.setRawMode?.(false);
    } catch {
    }
  }
  return r.length ? Buffer.concat(r) : void 0;
}
function sn(e, n) {
  try {
    return (0, import_fs.readSync)(e, n, 0, n.length, null);
  } catch (t) {
    return (0, import_chunk_jv7av99m.w)(t) === "EAGAIN" ? 0 : -1;
  }
}
function on(e) {
  return e.toString("latin1").match(/\x1b\[\?[\d;]*c/g)?.length ?? 0;
}
