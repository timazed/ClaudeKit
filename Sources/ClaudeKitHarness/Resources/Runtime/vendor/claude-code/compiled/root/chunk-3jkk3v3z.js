const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_3jkk3v3z_exports = {};
__export(chunk_3jkk3v3z_exports, {
  $Gs: () => $Gs,
  Ave: () => Ave,
  BI: () => BI,
  BIt: () => BIt,
  Gmt: () => Gmt,
  Os: () => Os,
  Sjr: () => Sjr,
  UGs: () => UGs,
  Ve: () => Ve,
  _Ke: () => _Ke,
  _jr: () => _jr,
  _kn: () => _kn,
  ay: () => ay,
  bjr: () => bjr,
  e6: () => e6,
  eq: () => eq,
  gkn: () => gkn,
  hkn: () => hkn,
  kS: () => kS,
  kjr: () => kjr,
  mC: () => mC,
  mkn: () => mkn,
  oSa: () => oSa,
  sSa: () => sSa,
  tXn: () => tXn,
  uY: () => uY,
  wjr: () => wjr,
  yjr: () => yjr
});
module.exports = __toCommonJS(chunk_3jkk3v3z_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_0f2gasyz = require("/$bunfs/root/chunk-0f2gasyz.js");
var import_chunk_vw137skj = require("/$bunfs/root/chunk-vw137skj.js");
var import_chunk_2kg8bxyd = require("/$bunfs/root/chunk-2kg8bxyd.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_1tyxkk56 = require("/$bunfs/root/chunk-1tyxkk56.js");
var import_chunk_ghhxe1kj = require("/$bunfs/root/chunk-ghhxe1kj.js");
var import_chunk_8m5q5cts = require("/$bunfs/root/chunk-8m5q5cts.js");
var import_chunk_mqj2w7ns = require("/$bunfs/root/chunk-mqj2w7ns.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_7gv3ezdz = require("/$bunfs/root/chunk-7gv3ezdz.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_events = require("events");
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
class BIt {
  _didStopImmediatePropagation = false;
  didStopImmediatePropagation() {
    return this._didStopImmediatePropagation;
  }
  stopImmediatePropagation() {
    this._didStopImmediatePropagation = true;
  }
}
class hkn extends import_events.EventEmitter {
  constructor() {
    super();
    this.setMaxListeners(0);
  }
  emit(n, ...r) {
    if (n === "error") return super.emit(n, ...r);
    let o = this.rawListeners(n);
    if (o.length === 0) return false;
    let d = r[0] instanceof BIt ? r[0] : null;
    for (let a of o) if (a.apply(this, r), d?.didStopImmediatePropagation()) break;
    return true;
  }
}
function gkn() {
  return { lastWheelTime: 0, lastWheelDownTime: 0, bugConfirmed: false, notified: false, trackpadGesture: false, pendingArrowBoost: 0 };
}
function ze(n) {
  n.bugConfirmed = true, n.trackpadGesture = true, n.pendingArrowBoost++;
}
function Se(n) {
  n.trackpadGesture = false, n.pendingArrowBoost = 0;
}
function oSa(n) {
  let r = n.pendingArrowBoost;
  return n.pendingArrowBoost = 0, r;
}
function $Gs(n) {
  if (n.bugConfirmed) return true;
  if (process.env.INTELLIJ_TERMINAL_COMMAND_BLOCKS_REWORKED !== void 0 || process.env.INTELLIJ_TERMINAL_COMMAND_BLOCKS !== void 0) return n.bugConfirmed = true, true;
  return false;
}
var Qe = 75, Ze = 250, UGs = 200;
function sSa(n, r, o, d) {
  if (!(0, import_chunk_2kg8bxyd.zse)().jediTerm) return Se(n), r;
  let a = null;
  for (let m = 0; m < r.length; m++) {
    let s = r[m];
    if (s.kind !== "key") {
      a?.push(s);
      continue;
    }
    if (s.name === "wheelup" || s.name === "wheeldown") {
      if (o - n.lastWheelTime > UGs) n.lastWheelDownTime = 0, Se(n);
      if (n.lastWheelTime = o, s.name === "wheeldown") n.lastWheelDownTime = o;
      if (s.name === "wheelup" && o - n.lastWheelDownTime < Ze && $Gs(n)) {
        a ??= r.slice(0, m), a.push({ ...s, name: "wheeldown" });
        continue;
      }
      a?.push(s);
      continue;
    }
    if ((s.name === "up" || s.name === "down") && !s.ctrl && !s.meta && !s.shift && o - n.lastWheelTime < Qe) {
      if (!n.notified) n.notified = true, d();
      ze(n), a ??= r.slice(0, m);
      continue;
    }
    a?.push(s);
  }
  return a ?? r;
}
var Ee = (0, import_chunk_bs4h6795.an)({ stdin: process.stdin, internal_eventEmitter: new hkn(), setRawMode() {
}, isRawModeSupported: false, internal_querier: null, internal_jediTermInput: gkn() });
Ee.displayName = "InternalStdinContext";
var Gmt = Ee;
var et = () => (0, import_chunk_bs4h6795.be)(Gmt), BI = et;
(0, import_chunk_bs4h6795.G)();
var Q = Object.freeze({}), A = (0, import_chunk_bs4h6795.an)(Q);
function mkn(n) {
  let a = (0, import_chunk_sng02qpc.k)(6), { storageV5: r, credentials: o, children: d } = n, m;
  if (a[0] !== o || a[1] !== r) m = r === void 0 && o === void 0 ? Q : { storageV5: r, credentials: o }, a[0] = o, a[1] = r, a[2] = m;
  else m = a[2];
  let s = m, c;
  if (a[3] !== d || a[4] !== s) c = (0, import_chunk_a46xeenj.e)(A.Provider, { value: s, children: d }), a[3] = d, a[4] = s, a[5] = c;
  else c = a[5];
  return c;
}
function Ve() {
  return (0, import_chunk_bs4h6795.be)(A);
}
var Z = "dark", u = (0, import_chunk_bs4h6795.an)({ themeSetting: Z, setThemeSetting: () => {
}, setPreviewTheme: () => {
}, cancelPreview: () => {
}, currentTheme: Z, resolvedTheme: (0, import_chunk_1tyxkk56.LQ)(Z), activeThemeOverrides: void 0, customThemes: [], reloadCustomThemes: () => Promise.resolve(), setPreviewOverrides: () => {
} });
function _jr() {
  let { value: n, source: r } = (0, import_chunk_8m5q5cts.ll)("theme", "dark");
  if (r === "default") {
    let { hasCompletedOnboarding: o, lastOnboardingVersion: d } = (0, import_chunk_865at33z.ge)();
    if (!o && d === void 0) return "auto";
  }
  return n;
}
function yjr(n) {
  let m = (0, import_chunk_sng02qpc.k)(45), { children: r, initialState: o, onThemeSave: d } = n, { storageV5: a } = Ve(), s;
  if (m[0] !== d || m[1] !== a) s = (c) => d ? d(c) : (0, import_chunk_8m5q5cts.Ule)("theme", c, a), m[0] = d, m[1] = a, m[2] = s;
  else s = m[2];
  let p = s, [v, me] = (0, import_chunk_bs4h6795.y)(o ?? _jr), [de, x] = (0, import_chunk_bs4h6795.y)(null), [le, ue] = (0, import_chunk_bs4h6795.y)(null), [I, ce] = (0, import_chunk_bs4h6795.y)(import_chunk_ghhxe1kj.qss), W;
  if (m[3] === import_chunk_w1d7ygsk.R) W = (0, import_chunk_ghhxe1kj.AQ)(), m[3] = W;
  else W = m[3];
  let B = W.pluginThemes, C = (0, import_chunk_bs4h6795.Ot)(B.subscribe, B.getState), D;
  if (m[4] !== C || m[5] !== I) D = [...I, ...C], m[4] = C, m[5] = I, m[6] = D;
  else D = m[6];
  let h = D, j;
  if (m[7] !== o || m[8] !== v) j = () => (o ?? v) === "auto" ? (0, import_chunk_7gv3ezdz.Nqe)() : "dark", m[7] = o, m[8] = v, m[9] = j;
  else j = m[9];
  let [pe, T] = (0, import_chunk_bs4h6795.y)(j), l = de ?? v, F;
  if (m[10] !== a) F = () => (0, import_chunk_ghhxe1kj.HHn)(a).then(ce), m[10] = a, m[11] = F;
  else F = m[11];
  let f = F, J, q;
  if (m[12] !== f) J = () => (f(), (0, import_chunk_ghhxe1kj.Yss)(() => void f())), q = [f], m[12] = f, m[13] = J, m[14] = q;
  else J = m[13], q = m[14];
  (0, import_chunk_bs4h6795.H)(J, q);
  let { internal_querier: S } = BI(), V, i;
  if (m[15] !== l) V = () => {
    if (l !== "auto") {
      return;
    }
    return T((0, import_chunk_7gv3ezdz.Nqe)()), (0, import_chunk_7gv3ezdz.FCn)(() => T((0, import_chunk_7gv3ezdz.Nqe)()));
  }, i = [l], m[15] = l, m[16] = V, m[17] = i;
  else V = m[16], i = m[17];
  (0, import_chunk_bs4h6795.H)(V, i);
  let Be, De;
  if (m[18] !== l || m[19] !== S) Be = () => {
    if (l !== "auto" || !S) {
      return;
    }
    let je;
    let Ge = false;
    return Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-z1870124.js"))).then((Y2) => {
      let { watchSystemTheme: bt } = Y2;
      if (Ge) {
        return;
      }
      je = bt(S, T);
    }), () => {
      Ge = true, je?.();
    };
  }, De = [l, S], m[18] = l, m[19] = S, m[20] = Be, m[21] = De;
  else Be = m[20], De = m[21];
  (0, import_chunk_bs4h6795.H)(Be, De);
  let Y;
  if (m[22] !== l) Y = (0, import_chunk_ghhxe1kj.lG)(l), m[22] = l, m[23] = Y;
  else Y = m[23];
  let M = Y, Fe;
  if (m[24] !== M || m[25] !== h) Fe = M ? h.find((wt) => wt.slug === M) : void 0, m[24] = M, m[25] = h, m[26] = Fe;
  else Fe = m[26];
  let fe = Fe, E = fe ? fe.base : l === "auto" ? pe : M ? "dark" : l, b = le ?? fe?.overrides, Je;
  if (m[27] !== b || m[28] !== E) Je = (0, import_chunk_1tyxkk56.wmr)((0, import_chunk_1tyxkk56.LQ)(E), b), m[27] = b, m[28] = E, m[29] = Je;
  else Je = m[29];
  let ve = Je, qe;
  if (m[30] === import_chunk_w1d7ygsk.R) qe = () => x(null), m[30] = qe;
  else qe = m[30];
  let Pt = qe, U;
  if (m[31] !== p) U = (he) => {
    if (me(he), x(null), he === "auto") T((0, import_chunk_7gv3ezdz.Nqe)());
    p(he);
  }, m[31] = p, m[32] = U;
  else U = m[32];
  let Ye;
  if (m[33] === import_chunk_w1d7ygsk.R) Ye = (Ue) => {
    if (x(Ue), Ue === "auto") T((0, import_chunk_7gv3ezdz.Nqe)());
  }, m[33] = Ye;
  else Ye = m[33];
  let Xe;
  if (m[34] !== b || m[35] !== E || m[36] !== h || m[37] !== f || m[38] !== ve || m[39] !== U || m[40] !== v) Xe = { themeSetting: v, setThemeSetting: U, setPreviewTheme: Ye, cancelPreview: Pt, currentTheme: E, resolvedTheme: ve, activeThemeOverrides: b, customThemes: h, reloadCustomThemes: f, setPreviewOverrides: ue }, m[34] = b, m[35] = E, m[36] = h, m[37] = f, m[38] = ve, m[39] = U, m[40] = v, m[41] = Xe;
  else Xe = m[41];
  let Te = Xe, He;
  if (m[42] !== r || m[43] !== Te) He = (0, import_chunk_a46xeenj.e)(u.Provider, { value: Te, children: r }), m[42] = r, m[43] = Te, m[44] = He;
  else He = m[44];
  return He;
}
function Os() {
  let o = (0, import_chunk_sng02qpc.k)(3), { currentTheme: n, setThemeSetting: r } = (0, import_chunk_bs4h6795.be)(u), d;
  if (o[0] !== n || o[1] !== r) d = [n, r], o[0] = n, o[1] = r, o[2] = d;
  else d = o[2];
  return d;
}
function Ave() {
  return (0, import_chunk_bs4h6795.be)(u).themeSetting;
}
function Sjr() {
  let o = (0, import_chunk_sng02qpc.k)(3), { setPreviewTheme: n, cancelPreview: r } = (0, import_chunk_bs4h6795.be)(u), d;
  if (o[0] !== r || o[1] !== n) d = { setPreviewTheme: n, cancelPreview: r }, o[0] = r, o[1] = n, o[2] = d;
  else d = o[2];
  return d;
}
function mC() {
  return (0, import_chunk_bs4h6795.be)(u).resolvedTheme;
}
function bjr() {
  return (0, import_chunk_bs4h6795.be)(u).activeThemeOverrides;
}
function _Ke() {
  let d = (0, import_chunk_sng02qpc.k)(4), { customThemes: n, reloadCustomThemes: r, setPreviewOverrides: o } = (0, import_chunk_bs4h6795.be)(u), a;
  if (d[0] !== n || d[1] !== r || d[2] !== o) a = { customThemes: n, reloadCustomThemes: r, setPreviewOverrides: o }, d[0] = n, d[1] = r, d[2] = o, d[3] = a;
  else a = d[3];
  return a;
}
(0, import_chunk_bs4h6795.G)();
var uY = (0, import_chunk_bs4h6795.an)(null), kjr = uY.Provider;
function e6() {
  let n = (0, import_chunk_bs4h6795.be)(uY);
  if (!n) throw Error("useTerminalNotification must be used within TerminalWriteProvider");
  let r = (0, import_chunk_bs4h6795.ye)(({ message: s, title: c }) => {
    let p = c ? `${c}: ${s}` : s;
    n((0, import_chunk_vw137skj.Dq)((0, import_chunk_vw137skj.PT)(import_chunk_vw137skj.__.ITERM2, p)));
  }, [n]), o = (0, import_chunk_bs4h6795.ye)(({ message: s, title: c, id: p }) => {
    n((0, import_chunk_vw137skj.Dq)((0, import_chunk_vw137skj.PT)(import_chunk_vw137skj.__.KITTY, `i=${p}:d=0:p=title`, c))), n((0, import_chunk_vw137skj.Dq)((0, import_chunk_vw137skj.PT)(import_chunk_vw137skj.__.KITTY, `i=${p}:p=body`, s))), n((0, import_chunk_vw137skj.Dq)((0, import_chunk_vw137skj.PT)(import_chunk_vw137skj.__.KITTY, `i=${p}:d=1:a=focus`, "")));
  }, [n]), d = (0, import_chunk_bs4h6795.ye)(({ message: s, title: c }) => {
    n((0, import_chunk_vw137skj.Dq)((0, import_chunk_vw137skj.PT)(import_chunk_vw137skj.__.GHOSTTY, "notify", c, s)));
  }, [n]), a = (0, import_chunk_bs4h6795.ye)(() => {
    n(import_chunk_0f2gasyz.X1);
  }, [n]), m = (0, import_chunk_bs4h6795.ye)((s) => {
    if (!(0, import_chunk_2kg8bxyd.jIt)()) return;
    if (!s) {
      n((0, import_chunk_vw137skj.Dq)((0, import_chunk_vw137skj.PT)(import_chunk_vw137skj.__.ITERM2, import_chunk_vw137skj.qao.PROGRESS, import_chunk_vw137skj.Yao.CLEAR, "")));
      return;
    }
    switch (s) {
      case "completed":
        n((0, import_chunk_vw137skj.Dq)((0, import_chunk_vw137skj.PT)(import_chunk_vw137skj.__.ITERM2, import_chunk_vw137skj.qao.PROGRESS, import_chunk_vw137skj.Yao.CLEAR, "")));
        break;
      case "indeterminate":
        n((0, import_chunk_vw137skj.Dq)((0, import_chunk_vw137skj.PT)(import_chunk_vw137skj.__.ITERM2, import_chunk_vw137skj.qao.PROGRESS, import_chunk_vw137skj.Yao.INDETERMINATE, "")));
        break;
    }
  }, [n]);
  return (0, import_chunk_bs4h6795.re)(() => ({ notifyITerm2: r, notifyKitty: o, notifyGhostty: d, notifyBell: a, progress: m }), [r, o, d, a, m]);
}
function wjr(n, r, o, d, a) {
  if (n === void 0 && r === void 0 && o === void 0 && d === void 0 && a === void 0) return;
  return { hidden: n, label: r, role: o, state: d, preserveWhitespace: a };
}
function eq(n, r) {
  if (n === void 0) return;
  if (Number.isInteger(n)) return;
  (0, import_chunk_w578pjby.t)(`${r} should be an integer, got ${n}`, { level: "warn" });
}
function Et({ children: n, ref: r, tabIndex: o, autoFocus: d, onClick: a, onFocus: m, onBlur: s, onMouseEnter: c, onMouseLeave: p, onPointer: v, hoverIgnoresBlankCells: me, hoverFollowsPaint: de, renderEvent: x, renderComponent: le, drawPending: ue, elementKey: I, elementPlugin: ce, onKeyDown: W, onKeyDownCapture: B, onPaste: C, onPasteCapture: D, onWheel: h, onWheelCapture: j, keybindingScope: pe, textEntry: T, onAction: l, onActionCapture: F, "aria-hidden": f, "aria-label": J, "aria-role": q, "aria-state": S, "aria-preserve-whitespace": V, ...i }) {
  if (eq(i.margin, "margin"), eq(i.marginX, "marginX"), eq(i.marginY, "marginY"), eq(i.marginTop, "marginTop"), eq(i.marginBottom, "marginBottom"), i.marginLeft !== "auto") eq(i.marginLeft, "marginLeft");
  if (i.marginRight !== "auto") eq(i.marginRight, "marginRight");
  return eq(i.padding, "padding"), eq(i.paddingX, "paddingX"), eq(i.paddingY, "paddingY"), eq(i.paddingTop, "paddingTop"), eq(i.paddingBottom, "paddingBottom"), eq(i.paddingLeft, "paddingLeft"), eq(i.paddingRight, "paddingRight"), eq(i.gap, "gap"), eq(i.columnGap, "columnGap"), eq(i.rowGap, "rowGap"), i.flexWrap ??= "nowrap", i.flexDirection ??= "row", i.flexGrow ??= 0, i.flexShrink ??= 1, i.overflowX = i.overflowX ?? i.overflow ?? "visible", i.overflowY = i.overflowY ?? i.overflow ?? "visible", (0, import_chunk_a46xeenj.e)("ink-box", { ref: r, tabIndex: o, autoFocus: d, onClick: a, onFocus: m, onBlur: s, onMouseEnter: c, onMouseLeave: p, onPointer: v, hoverIgnoresBlankCells: me, hoverFollowsPaint: de, renderEvent: x, renderComponent: le, drawPending: ue, elementKey: I, elementPlugin: ce, onKeyDown: W, onKeyDownCapture: B, onPaste: C, onPasteCapture: D, onWheel: h, onWheelCapture: j, keybindingScope: pe, textEntry: T, onAction: l, onActionCapture: F, accessibility: wjr(f, J, q, S, V), style: i, children: n });
}
var kS = Et;
(0, import_chunk_bs4h6795.G)();
function _e({ background: n, foreground: r }) {
  return (0, import_chunk_vw137skj.PT)(import_chunk_vw137skj.__.SET_BG_COLOR, n) + (0, import_chunk_vw137skj.PT)(import_chunk_vw137skj.__.SET_FG_COLOR, r);
}
function Ke() {
  return (0, import_chunk_vw137skj.PT)(import_chunk_vw137skj.__.RESET_BG_COLOR) + (0, import_chunk_vw137skj.PT)(import_chunk_vw137skj.__.RESET_FG_COLOR);
}
var L = { bracketedPaste: 0, themeReports: 0, extendedKeys: 0, altScreen: 1, altScreenKeys: 2, mouse: 2, mousePixels: 2, surface: 3, focusEvents: 4 };
function Le(n) {
  switch (n) {
    case "bracketedPaste":
      return { mode: n, on: import_chunk_mqj2w7ns.dZa, off: import_chunk_mqj2w7ns.Hao };
    case "themeReports":
      return { mode: n, on: import_chunk_mqj2w7ns.cZa, off: import_chunk_mqj2w7ns.Lao };
    case "focusEvents":
      return { mode: n, on: import_chunk_mqj2w7ns.Dao, off: import_chunk_mqj2w7ns.XDn };
    case "mousePixels":
      return { mode: n, on: import_chunk_mqj2w7ns.uZa, off: import_chunk_mqj2w7ns.Fao };
    case "extendedKeys":
      return { mode: n, get on() {
        return (0, import_chunk_2kg8bxyd.Y9t)();
      }, get off() {
        return (0, import_chunk_2kg8bxyd.q9t)() + (0, import_chunk_2kg8bxyd.XZe)();
      } };
    case "altScreen":
      return { mode: n, on: import_chunk_mqj2w7ns.Znn + import_chunk_0f2gasyz.YN + import_chunk_0f2gasyz.Xx, get off() {
        return import_chunk_mqj2w7ns.u1t + (0, import_chunk_2kg8bxyd.q9t)();
      } };
    case "altScreenKeys":
      return { mode: n, get on() {
        return (0, import_chunk_2kg8bxyd.Y9t)();
      }, get off() {
        return (0, import_chunk_2kg8bxyd.XZe)();
      } };
  }
}
class _kn {
  entries = [];
  suspended = false;
  kept;
  get isSuspended() {
    return this.suspended;
  }
  isSet(n) {
    return this.entries.some((r) => r.mode === n);
  }
  set(n, r) {
    if (this.isSet(n)) return "";
    let o = this.add(this.entry(n, r));
    if (n === "altScreen") o += this.add(Le("altScreenKeys"));
    return this.suspended ? "" : o;
  }
  reset(n) {
    if (!this.isSet(n)) return "";
    let r = n === "altScreen" ? this.remove("altScreenKeys") : "", o = this.remove(n);
    if (this.suspended && n === this.kept) return this.kept = void 0, o;
    return this.suspended ? "" : r + o;
  }
  reassert(n) {
    if (this.suspended) return "";
    return this.entries.find((r) => r.mode === n)?.on ?? "";
  }
  reassertKeys() {
    if (this.suspended) return "";
    let n = this.isSet("altScreen") ? "altScreenKeys" : "extendedKeys";
    return this.entries.find((r) => r.mode === n)?.on ?? "";
  }
  reassertFrom(n) {
    if (this.suspended || !this.isSet(n)) return "";
    return this.entries.filter((r) => L[r.mode] >= L[n]).reduce((r, o) => r + o.on, "");
  }
  suspend(n) {
    if (this.suspended) return "";
    return this.suspended = true, this.kept = n, this.entries.reduceRight((r, o) => o.mode === n ? r : r + o.off, "");
  }
  resume({ clearKeys: n = false } = {}) {
    if (!this.suspended) return "";
    this.suspended = false, this.kept = void 0;
    let r = this.isSet("altScreen"), o = n ? (0, import_chunk_2kg8bxyd.q9t)() + (r ? "" : (0, import_chunk_2kg8bxyd.XZe)()) : "";
    return this.entries.reduce((d, a) => d + a.on + (n && a.mode === "altScreen" ? (0, import_chunk_2kg8bxyd.XZe)() : ""), o);
  }
  resetAll() {
    let n = this.suspended ? this.entries.filter((r) => r.mode === this.kept) : this.entries;
    return this.entries = [], this.kept = void 0, n.reduceRight((r, o) => r + o.off, "");
  }
  entry(n, r) {
    switch (n) {
      case "mouse": {
        let o = typeof r === "string" ? r : "off";
        return { mode: n, on: (0, import_chunk_mqj2w7ns.$ao)(o), off: o === "off" ? "" : import_chunk_mqj2w7ns.E5e };
      }
      case "surface":
        return { mode: n, on: typeof r === "object" ? _e(r) : "", off: Ke() };
      default:
        return Le(n);
    }
  }
  add(n) {
    let r = this.entries.findIndex((o) => L[o.mode] > L[n.mode]);
    if (r === -1) this.entries.push(n);
    else this.entries.splice(r, 0, n);
    return n.on;
  }
  remove(n) {
    let r = this.entries.findIndex((o) => o.mode === n);
    if (r === -1) return "";
    return this.entries.splice(r, 1)[0].off;
  }
}
var We = (0, import_chunk_bs4h6795.an)(new _kn());
We.displayName = "InternalTerminalModesContext";
var tXn = We;
(0, import_chunk_bs4h6795.G)();
var ay = (0, import_chunk_bs4h6795.an)(null);
