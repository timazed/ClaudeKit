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
var chunk_jczdrj4v_exports = {};
__export(chunk_jczdrj4v_exports, {
  Qy: () => Qy,
  Rm: () => Rm,
  vWr: () => vWr,
  zi: () => zi
});
module.exports = __toCommonJS(chunk_jczdrj4v_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_9js1xpg4 = require("/$bunfs/root/chunk-9js1xpg4.js");
var import_chunk_e1qrqxdt = require("/$bunfs/root/chunk-e1qrqxdt.js");
var import_chunk_q4pszsad = require("/$bunfs/root/chunk-q4pszsad.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_7g0kta79 = require("/$bunfs/root/chunk-7g0kta79.js");
var import_chunk_drb2187g = require("/$bunfs/root/chunk-drb2187g.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_y8kqnbqt = require("/$bunfs/root/chunk-y8kqnbqt.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
(0, import_chunk_bs4h6795.G)();
function zi({ scope: s, bindings: p, active: f = true, preemptive: h = false, swallowAll: w = false, claimFocus: b = false, ref: A, flexGrow: M = 0, flexDirection: T, flexShrink: S, children: Y }) {
  let x = (0, import_chunk_bs4h6795.I)(null), v = (0, import_chunk_9js1xpg4.$d)(), E = (0, import_chunk_bs4h6795.I)([]);
  E.current = f ? p : [];
  let K = (0, import_chunk_bs4h6795.ye)((a) => Ee(a, E.current), []), F = (0, import_chunk_bs4h6795.ye)((a) => {
    if (a.defaultPrevented || a.ctrl || a.meta || x.current === null || (0, import_chunk_8bkqeb5d.cH)(x.current).activeElement?.attributes.textEntry === true) return;
    for (let m of E.current) if ([m.on].flat().includes(a.key) && m.run() !== false) {
      a.preventDefault();
      return;
    }
  }, []), P = we(s, f, h, w, E.current), C = f && h && Boolean(s), O = C && w;
  (0, import_chunk_bs4h6795.It)(() => {
    if (!v) return;
    let a = x.current;
    if (!a) return;
    let { decls: m, scopesChanged: N, preemptiveScopes: n, swallowAll: c } = v.keyHandlerRegistry, d = { scope: s, active: f, preemptive: h, swallowAll: w, entriesRef: E };
    if (m.set(a, d), C && s) {
      if (ae(n, s), O) ae(c, s);
    }
    return N.emit(), () => {
      if (m.delete(a), C && s) {
        if (de(n, s), O) de(c, s);
      }
      N.emit();
    };
  }, [v, s, C, O, P]);
  let R = (0, import_chunk_bs4h6795.be)(import_chunk_e1qrqxdt.R9t), q = [...(0, import_chunk_bs4h6795.be)(import_chunk_e1qrqxdt.x9t), {}], j = (0, import_chunk_bs4h6795.mhr)(), [z] = (0, import_chunk_bs4h6795.y)(() => /* @__PURE__ */ new Map()), [Q] = (0, import_chunk_bs4h6795.y)(() => ({ byId: /* @__PURE__ */ new Map(), changed: (0, import_chunk_69qhefwa.Be)() })), B = (0, import_chunk_bs4h6795.re)(() => ({ chain: [...R?.chain ?? [], { scope: s, entriesRef: E, node: x }], below: [...R?.below ?? [], z], declared: R?.declared ?? Q }), [R, s, z, Q]);
  for (let a of R?.below ?? []) a.set(j, { chain: B.chain, claimFocus: b });
  (0, import_chunk_bs4h6795.H)(() => {
    let a = R?.below ?? [];
    for (let m of a) m.set(j, { chain: B.chain, claimFocus: b });
    return () => {
      for (let m of a) m.delete(j);
    };
  }, [R, j, B, b]), (0, import_chunk_bs4h6795.It)(() => {
    if (!b) return;
    let a = x.current;
    if (!a) return;
    let m = (0, import_chunk_8bkqeb5d.cH)(a), N = false, n = () => {
      if (N) return;
      let c = x.current;
      if (!c) return;
      let d = m.activeElement;
      if (d && (0, import_chunk_8bkqeb5d.Tve)(d, c)) return;
      N = true;
      try {
        m.focus(c);
      } finally {
        N = false;
      }
    };
    return m.pushAutoFocusFallback(a), n(), m.subscribe(n);
  }, [b]);
  let Z = (0, import_chunk_bs4h6795.I)(false);
  (0, import_chunk_bs4h6795.It)(() => {
    return;
  }, [s, b, v]);
  let ee = (0, import_chunk_bs4h6795.ye)((a) => {
    if (x.current = a, typeof A === "function") A(a);
    else if (A) A.current = a;
  }, [A]);
  return (0, import_chunk_a46xeenj.e)(import_chunk_3jkk3v3z.kS, { ref: ee, keybindingScope: s, onAction: K, onKeyDown: F, tabIndex: b ? -1 : void 0, flexGrow: M, flexDirection: T, flexShrink: S, children: (0, import_chunk_a46xeenj.e)(import_chunk_e1qrqxdt.R9t, { value: B, children: (0, import_chunk_a46xeenj.e)(import_chunk_e1qrqxdt.x9t, { value: q, children: Y }) }) });
}
function Ee(s, p) {
  for (let f of p) {
    if (f.action !== s.action) continue;
    if (f.chordOnly && !s.isChordCompletion) continue;
    if (f.run() === false) continue;
    s.consume();
    return;
  }
}
function ae(s, p) {
  s.set(p, (s.get(p) ?? 0) + 1);
}
function de(s, p) {
  let f = (s.get(p) ?? 0) - 1;
  if (f <= 0) s.delete(p);
  else s.set(p, f);
}
function we(s, p, f, h, w) {
  return (0, import_chunk_w578pjby._)([s ?? "", p, f, h, w.map((b) => [b.action, b.on, b.hint, Boolean(b.chordOnly)])]);
}
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
var Ke = { "confirm:yes": { description: "confirm" }, "confirm:no": { description: "cancel" }, "confirm:previous": { description: "navigate" }, "confirm:next": { description: "navigate" }, "confirm:nextField": { description: "next field" }, "confirm:previousField": { description: "previous field" }, "confirm:toggle": { description: "toggle" }, "confirm:cycleMode": { description: "cycle mode" }, ...{}, "select:next": { description: "navigate" }, "select:previous": { description: "navigate" }, "select:pageUp": { description: "page up" }, "select:pageDown": { description: "page down" }, "select:first": { description: "first" }, "select:last": { description: "last" }, "select:accept": { description: "select" }, "select:cancel": { description: "cancel" }, "abovePrompt:toggle": { description: "hide/show plugin panel" }, "abovePrompt:focus": { description: "focus plugin buttons, inputs and selects" }, "abovePrompt:next": { description: "navigate" }, "abovePrompt:previous": { description: "navigate" }, "abovePrompt:press": { description: "press / submit / pick" }, "abovePrompt:leave": { description: "back to prompt" }, "abovePrompt:highlightNext": { description: "next option" }, "abovePrompt:highlightPrevious": { description: "previous option" }, "pane:scrollUp": { description: "scroll" }, "pane:scrollDown": { description: "scroll" }, "pane:pageUp": { description: "page up" }, "pane:pageDown": { description: "page down" }, "pane:top": { description: "top" }, "pane:bottom": { description: "bottom" }, "pane:grow": { description: "widen / heighten plugin panel" }, "pane:shrink": { description: "narrow / shorten plugin panel" }, "pane:close": { description: "close plugin panel" }, "pane:next": { description: "show next plugin panel" }, "pane:previous": { description: "show previous plugin panel" }, "tabs:next": { description: "switch" }, "tabs:previous": { description: "switch" }, "app:toggleReplTab": { description: "switch tab" }, "app:toggleDiffNoiseFilter": { description: "show/hide tests in diff panel" }, "app:diffFileListUp": { description: "scroll diff panel file list" }, "app:diffFileListDown": { description: "scroll diff panel file list" }, "app:toggleDiffPreSession": { description: "show/hide pre-session changes in diff panel" }, "app:cycleDiffBase": { description: "switch diff panel base" }, ...{}, ...{} };
function pe(s) {
  if (s.startsWith("command:")) return { description: s.slice(8) };
  return Ke[s];
}
var ue = ["move", "switch", "toggle", "letter", "enter", "other", "escape"], Ce = [["move", "navigate"], ["switch", "switch"], ["enter", "select"]], fe = { up: "move", down: "move", "select:previous": "move", "select:next": "move", "select:pageUp": "move", "select:pageDown": "move", "select:first": "move", "select:last": "move", "confirm:previous": "move", "confirm:next": "move", left: "switch", right: "switch", tab: "switch", "tabs:previous": "switch", "tabs:next": "switch", space: "toggle", "confirm:toggle": "toggle", enter: "enter", "select:accept": "enter", "confirm:yes": "enter", escape: "escape", "select:cancel": "escape", "confirm:no": "escape", "help:dismiss": "escape" }, De = [["select:previous", "select:next"], ["confirm:previous", "confirm:next"], ["tabs:previous", "tabs:next"]];
function te({ enterAction: s, undeclaredEnterAction: p, escapeAction: f, width: h, terse: w = false, format: b }) {
  let A = (0, import_chunk_9js1xpg4.$d)(), { focusManager: M, rootNode: T } = (0, import_chunk_bs4h6795.be)(import_chunk_8bkqeb5d.sp), S = (0, import_chunk_bs4h6795.be)(import_chunk_e1qrqxdt.R9t), [Y, x] = (0, import_chunk_bs4h6795.y)(0), [v] = (0, import_chunk_bs4h6795.y)(() => ke(() => x((R) => R + 1))), E = S?.declared;
  (0, import_chunk_bs4h6795.It)(() => {
    let R = [M?.subscribe(v), A?.keyHandlerRegistry.scopesChanged.subscribe(v), E?.changed.subscribe(v)];
    return v(), () => R.forEach((q) => q?.());
  }, [A, M, E, v]);
  let K = (0, import_chunk_bs4h6795.be)(import_chunk_e1qrqxdt.x9t).at(-1), F = (0, import_chunk_bs4h6795.I)(void 0);
  (0, import_chunk_bs4h6795.It)(() => {
    if (F.current = K, [...E?.byId.values() ?? []].some((R) => !R.isMounted)) v();
  }, [K, E, v]);
  let P = (0, import_chunk_bs4h6795.re)(() => (0, import_chunk_y8kqnbqt.Vfe)(import_chunk_q4pszsad.NV), []), C = (0, import_chunk_bs4h6795.re)(() => He({ ctx: A, defaultBindings: P, activeElement: M?.activeElement ?? null, boundaryNode: S ? S.chain.at(-1)?.node.current ?? null : T ?? null, enclosing: S, newRender: K === F.current ? void 0 : K, enterAction: s, undeclaredEnterAction: p, escapeAction: f, width: h, terse: w, format: b }), [A, P, M, T, S, K, s, p, f, h, w, b, Y]), O = C.hadEntryWithoutDescription ? "no_description" : C.hasHandlerInside ? "ok" : null;
  return (0, import_chunk_bs4h6795.H)(() => {
    if (O === "ok") (0, import_chunk_cqa9hrgx.u)("keybinding_auto_hints");
    else if (O !== null) (0, import_chunk_cqa9hrgx.l)("keybinding_auto_hints", O);
  }, [O]), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, italic: true, children: C.text });
}
var Re = 10;
function ke(s) {
  let p = 0;
  return function f() {
    try {
      s();
    } catch (h) {
      if (++p > Re) throw h;
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(h), "Hint line update refused")), queueMicrotask(() => {
        p = 0, f();
      });
    }
  };
}
function He({ ctx: s, defaultBindings: p, activeElement: f, boundaryNode: h, enclosing: w, newRender: b, enterAction: A, undeclaredEnterAction: M, escapeAction: T, width: S = 1 / 0, terse: Y, format: x }) {
  let v = [], E = false, K = h === null || !s ? void 0 : f ?? void 0;
  while (K && !E) {
    let n = s?.keyHandlerRegistry.decls.get(K);
    if (n) v.push(n);
    E = K === h, K = K.parentNode;
  }
  let F = w?.chain.at(-1);
  if (!E) {
    let n = (w?.chain.length ?? 0) - 1, c = w?.chain ?? [];
    for (let d of w?.below[n]?.values() ?? []) if (d.claimFocus && d.chain.length > c.length) c = d.chain;
    v = c.slice(Math.max(0, n)).reverse();
  }
  let P = [...w?.declared.byId.values() ?? []].map((n) => ({ ...n, isInside: n.chain.some((c) => c.entriesRef === F?.entriesRef) })).filter(({ isMounted: n, isInside: c, renders: d }) => b ? !c || d.includes(b) : n), C = P.filter(({ isEmptyList: n }) => !n), O = P.some(({ isEmptyList: n, isInside: c }) => n && c), R = C.toSorted((n, c) => Number(c.isTyping) - Number(n.isTyping)).map(({ hints: n, isInside: c }) => n.map((d) => ({ entry: d, isInside: c, isComponentWording: true }))), q = (0, import_chunk_4smdap7r.U)(C, (n) => n.isTyping), j = [...R.slice(0, q).flat(), ...v.flatMap(({ scope: n, entriesRef: c }) => c.current.map((d) => ({ entry: { ...d, scope: n }, isInside: c !== F?.entriesRef, isComponentWording: false }))), ...R.slice(q).flat()].toSorted((n, c) => Number(c.isInside) - Number(n.isInside)), z = !C.some((n) => n.isInside) && !j.some(({ isInside: n }) => n);
  for (let n of [z ? { on: "enter", hint: M } : {}, { action: "confirm:no", scope: "Confirmation", hint: T }]) if (n.hint) j.push({ entry: n, isInside: false, isComponentWording: false });
  let Q = false, B = [];
  for (let { entry: n, isComponentWording: c } of j) {
    let { action: d, scope: L, on: J } = n, V = d && L ? (0, import_chunk_y8kqnbqt.ddo)(d, L, s?.bindings ?? p, p) : void 0, X = V ? [(0, import_chunk_y8kqnbqt.i0)(V)] : [J ?? []].flat(), [W] = X, se = /^[!-~]$/.test(W ?? "");
    if (W === void 0 || q > 0 && se || n.needsRows && O) continue;
    let ce = fe[d ?? W] ?? fe[W] ?? (se ? "letter" : "other"), ne = (ce === "enter" && c && n.hint !== "" ? A : void 0) ?? n.hint ?? pe(d ?? "")?.description;
    if (!ne) {
      Q ||= ne === void 0;
      continue;
    }
    B.push({ entry: n, kind: ce, verb: ne, chords: X });
  }
  let ee = B.find((n) => n.kind === "enter")?.verb === "confirm", a = /* @__PURE__ */ new Set(), m = [];
  for (let { entry: n, kind: c, verb: d, chords: L } of B) {
    let J = c === "enter" || c === "escape" ? c : `to ${d}`;
    if (a.has(J) || n.onlyIn === (ee ? "list" : "question")) continue;
    a.add(J);
    let V = De.find((X) => X.some((W) => W === n.action))?.flatMap((X) => B.find((W) => W.entry.action === X && W.verb === d) ?? []);
    m.push({ kind: c, verb: d, text: (0, import_chunk_paah1wya.ym)({ chord: V?.length === 2 ? V.flatMap((X) => X.chords) : L, action: d, terse: Y, format: x }) });
  }
  m.sort((n, c) => ue.indexOf(n.kind) - ue.indexOf(c.kind));
  let N = m.map((n) => n.text).join(" \xB7 ");
  for (let [n, c] of Ce) {
    let d = m.findIndex((L) => L.kind === n && L.verb === c);
    if (d >= 0 && (0, import_chunk_mgh1y10w.oe)(N) > S) m.splice(d, 1), N = m.map((L) => L.text).join(" \xB7 ");
  }
  return { hasHandlerInside: j.some((n) => n.isInside && !n.isComponentWording), text: N, hadEntryWithoutDescription: Q };
}
var me = {}, Ae = me;
function Qy(s) {
  return s ? Ae : me;
}
function _e() {
  return false;
}
var vWr = (0, import_chunk_bs4h6795.an)(null);
function Rm(s) {
  let S = (0, import_chunk_sng02qpc.k)(17), { children: p, enterAction: f, escapeAction: h, marginTop: w } = s, b = w === void 0 ? 1 : w, A = (0, import_chunk_7g0kta79.Hte)(), [M] = (0, import_chunk_bs4h6795.y)(_e), T = (0, import_chunk_bs4h6795.be)(vWr), Y;
  if (S[0] !== p || S[1] !== T) Y = T?.pending ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, italic: true, children: ["Press ", T.keyName, " again to close"] }) : p, S[0] = p, S[1] = T, S[2] = Y;
  else Y = S[2];
  let x = Y, v = (0, import_chunk_8bkqeb5d.Xe)(), E = (0, import_chunk_bs4h6795.I)(null), K = (0, import_chunk_drb2187g.nR)(), F;
  if (S[3] !== K || S[4] !== x) F = () => x == null && E.current && (0, import_chunk_8bkqeb5d.Gr)(E.current).width || K, S[3] = K, S[4] = x, S[5] = F;
  else F = S[5];
  let P = (0, import_chunk_8bkqeb5d.Wo)(F), C;
  if (S[6] !== f || S[7] !== h || S[8] !== A || S[9] !== M || S[10] !== v || S[11] !== P || S[12] !== x) C = x ?? (0, import_chunk_a46xeenj.e)(te, { enterAction: f, undeclaredEnterAction: f ?? (h ? void 0 : "confirm"), escapeAction: h ?? "cancel", width: v ? void 0 : P, ...Qy(A || M) }), S[6] = f, S[7] = h, S[8] = A, S[9] = M, S[10] = v, S[11] = P, S[12] = x, S[13] = C;
  else C = S[13];
  let O;
  if (S[14] !== b || S[15] !== C) O = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: E, marginTop: b, flexShrink: 0, children: C }), S[14] = b, S[15] = C, S[16] = O;
  else O = S[16];
  return O;
}
