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
var chunk_6sg4sn4j_exports = {};
__export(chunk_6sg4sn4j_exports, {
  $Br: () => $Br,
  K1e: () => K1e,
  i_e: () => i_e,
  mYn: () => mYn,
  tW: () => tW,
  z$o: () => z$o
});
module.exports = __toCommonJS(chunk_6sg4sn4j_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_x7880gvk = require("/$bunfs/root/chunk-x7880gvk.js");
var import_chunk_ra3kqnyn = require("/$bunfs/root/chunk-ra3kqnyn.js");
var import_chunk_0t7st4dz = require("/$bunfs/root/chunk-0t7st4dz.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
var i = 3, tW = 9, mYn = 60, h = { pose: "default", offset: 0 };
function A() {
  return [{ pose: "default", offset: 1, poof: "dot" }, { pose: "default", offset: 1, poof: "wave" }];
}
function t(n, a, { offset: s = 0, x: l, poof: f, shadow: d } = {}) {
  return Array.from({ length: a }, () => ({ pose: n, offset: s, x: l, poof: f, shadow: d }));
}
function v(n, a) {
  return n.flatMap((s) => t({ facing: s }, 1, { shadow: a }));
}
function m(n, a = "down", s = "both") {
  return { eyes: n, arms: a, feet: s };
}
var Ce = [...A(), ...t("arms-up", 3), ...t("default", 1), ...A(), ...t("arms-up", 3), ...t("default", 1)], Me = [...t("look-right", 5), ...t("look-left", 5), ...t("default", 1)], se = [...t("default", 12), ...t("look-right", 5), ...t("look-left", 5)], ve = [...Ce, ...t("default", 3, { offset: 1 })], Ie = [...t("look-left", 2), ...t("look-right", 2), ...t("look-left", 2), ...t("arms-up", 3), ...t("default", 1)], Ae = [...t("default", 1, { offset: 1, x: -tW }), ...t("arms-up", 2, { x: -6 }), ...t("default", 1, { x: -6 }), ...t("default", 1, { offset: 1, x: -6 }), ...t("arms-up", 2, { x: -3 }), ...t("default", 1, { x: -3 }), ...t("default", 1, { offset: 1, x: -3 }), ...t("arms-up", 2), ...A(), ...t("default", 1)], T = [...t(m("closed"), 1), h], De = [...t("default", 1, { offset: i }), ...t("default", 3, { offset: 2 }), ...t("look-right", 3, { offset: 2 }), ...t("look-left", 3, { offset: 2 }), ...t("default", 2, { offset: 2 }), ...t("default", 1, { offset: 1 }), ...t("arms-up", 4), ...t("default", 2), ...T], _e = [...t("arms-up", 1, { offset: -i }), ...t("arms-up", 2, { offset: -2 }), ...t("arms-up", 2, { offset: -1 }), ...t("arms-up", 1), ...A(), ...t("default", 3), ...T], Le = [...t("look-right", 1, { x: -tW }), ...[-6, -5, -4, -3, -2, -1].flatMap((n) => t(m("right", "down", n % 2 === 0 ? "left" : "right"), 2, { x: n })), ...t("look-right", 2), ...t("default", 2), ...T], Te = [...t("look-right", 1, { x: -tW }), ...t("look-right", 5, { x: -6 }), ...t("look-right", 3, { x: -tW }), ...t("look-right", 4, { x: -5 }), ...t("arms-up", 2, { x: -3 }), ...t("arms-up", 2), ...A(), h], Ue = [...t(m("wink"), 5), h], Be = [...t(m("closed"), 1, { offset: 1, poof: "dot" }), ...t(m("closed"), 2, { offset: 1, poof: "wave" }), ...t("look-left", 4), ...t("default", 2), ...T], Ye = [...t(m("open", "down", "left"), 2), ...t(m("open", "down", "right"), 2), ...t(m("open", "down", "left"), 2), ...t(m("open", "down", "right"), 2), ...t(m("open", "down", "left"), 1), ...t(m("open", "down", "right"), 1), ...t("arms-up", 3), h], je = [...t(m("closed", "up"), 4), ...t(m("closed"), 2, { offset: 1, poof: "wave" }), ...t(m("closed"), 2), ...t("default", 2), ...T], ze = [...v(["right-12", "right-30", "right-55", "right-75", "edge"]), ...v(["back-105", "back-125", "back-150", "back", "back"]), ...v(["back-150", "back-125", "back-105", "edge"]), ...v(["left-75", "left-55", "left-30", "left-12"]), h], We = [...t("default", 2, { offset: 1 }), ...t("arms-up", 1, { shadow: "wide" }), ...v(["right-55", "edge", "back-125", "back"], "narrow"), ...v(["back-125", "edge", "left-55"], "narrow"), ...t("arms-up", 1, { shadow: "wide" }), ...A(), h], C = { jump: Ce, look: Me, celebrate: ve, skip: Ae, spin: Ie, peekaboo: De, drop: _e, waddle: Le, peek: Te, wink: Ue, boop: Be, tap: Ye, sneeze: je, turn: ze, "coin-hop": We }, de = ["skip", "jump", "look", "spin", "peekaboo", "drop", "waddle", "peek", "wink", "boop", "tap", "sneeze", "turn", "coin-hop"], le = de.filter((n) => (C[n][0]?.x ?? 0) === 0);
function J(n, a) {
  if (a) return n;
  return n.filter((s) => {
    let l = C[s], f = l[0];
    if (f === void 0 || (0, import_chunk_ra3kqnyn.UBr)(f.pose)) return false;
    return !l.some((d) => (0, import_chunk_ra3kqnyn.UBr)(d.pose)) && ((0, import_chunk_ra3kqnyn.V$o)(f.pose).eyes !== "open" || f.offset !== 0 || (f.x ?? 0) !== 0);
  });
}
function fe(n, a) {
  let s = C[n], l = s[0];
  if (!a || l === void 0) return s;
  let d = (l.x ?? 0) !== 0 || Math.abs(l.offset) >= i ? l : h, N = Math.max(1, Math.round(a / mYn));
  return [...Array.from({ length: N }, () => d), ...s];
}
function $Br() {
  let n = import_chunk_c203g5kd.So.CLAUDE_CODE_FORCE_FIRST_LAUNCH;
  if (n === void 0) return;
  if ((0, import_chunk_tvttgr51.Kde)(n)) return { pretendLastSeen: n };
  return (0, import_chunk_69qhefwa.Ne)(n) ? { pretendLastSeen: void 0 } : void 0;
}
function K1e(n, a = { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION) {
  if (!(0, import_chunk_tvttgr51.Kde)(a)) return false;
  if (!(0, import_chunk_tvttgr51.Kde)(n)) return true;
  try {
    return (0, import_chunk_tvttgr51.cT)(a, n);
  } catch {
    return true;
  }
}
function po(u) {
  return K1e(u.lastClawdEntranceVersion) ? { ...u, lastClawdEntranceVersion: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION } : u;
}
var Z = { dot: "\xB7", wave: "~" }, Q = { wide: { glyphs: "\u2581\u2581\u2581", left: 3 }, narrow: { glyphs: "\u2581", left: 4 } }, xe = (n) => n + 1;
function i_e(n) {
  let a = (0, import_chunk_sng02qpc.k)(28), s;
  if (a[0] !== n) s = n === void 0 ? {} : n, a[0] = n, a[1] = s;
  else s = a[1];
  let { autoplay: l, sequence: f, delayMs: d, onComplete: N, reserveCrouchRow: u, color: ne, rest: p } = s, re = l === void 0 ? false : l, ye = u === void 0 ? false : u, { pose: x, bounceOffset: P, x: U, poof: w, shadow: R, isPlaying: O, onClick: B } = he(re, f, d, N), b = ye ? i + 1 : i, S = O ? void 0 : p;
  const Y = tW + (p?.heldWidth ?? 0), D = P > 1 ? P + b - i : P, j = S?.pose ?? x, z = S?.paint;
  let _;
  if (a[2] !== ne || a[3] !== j || a[4] !== z) _ = (0, import_chunk_a46xeenj.e)(import_chunk_ra3kqnyn.l_e, { pose: j, color: ne, paint: z }), a[2] = ne, a[3] = j, a[4] = z, a[5] = _;
  else _ = a[5];
  let W;
  if (a[6] !== D || a[7] !== _ || a[8] !== U) W = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { marginTop: D, marginLeft: U, flexShrink: 0, children: _ }), a[6] = D, a[7] = _, a[8] = U, a[9] = W;
  else W = a[9];
  let E;
  if (a[10] !== P || a[11] !== w) E = w && P > 0 ? (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { position: "absolute", top: i - 1, left: 0, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "inactive", children: Z[w] }) }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { position: "absolute", top: i - 1, right: 0, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "inactive", children: Z[w] }) })] }) : null, a[10] = P, a[11] = w, a[12] = E;
  else E = a[12];
  let c;
  if (a[13] !== R) c = R ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { position: "absolute", top: i - 1, left: Q[R].left, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "inactive", children: Q[R].glyphs }) }) : null, a[13] = R, a[14] = c;
  else c = a[14];
  let M;
  if (a[15] !== b || a[16] !== E || a[17] !== c || a[18] !== W) M = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { height: b, width: tW, flexDirection: "column", flexShrink: 0, overflow: "hidden", children: [W, E, c] }), a[15] = b, a[16] = E, a[17] = c, a[18] = W, a[19] = M;
  else M = a[19];
  let L;
  if (a[20] !== S) L = S ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, children: S.held }) : null, a[20] = S, a[21] = L;
  else L = a[21];
  let Oe;
  if (a[22] !== b || a[23] !== B || a[24] !== M || a[25] !== L || a[26] !== Y) Oe = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.sR, { children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { height: b, width: Y, flexShrink: 0, noSelect: true, onClick: B, children: [M, L] }) }), a[22] = b, a[23] = B, a[24] = M, a[25] = L, a[26] = Y, a[27] = Oe;
  else Oe = a[27];
  return Oe;
}
function he(n, a, s, l) {
  let d = (0, import_chunk_sng02qpc.k)(40), f = (0, import_chunk_8bkqeb5d.Xe)(), N;
  if (d[0] !== f) N = () => (0, import_chunk_0t7st4dz.Lv)((0, import_chunk_2yx6c1y2.vt)().prefersReducedMotion) || f, d[0] = f, d[1] = N;
  else N = d[1];
  let [u] = (0, import_chunk_bs4h6795.y)(N), ne = (n || a !== void 0) && !u, [p, re] = (0, import_chunk_bs4h6795.y)(ne ? 0 : -1), ye;
  if (d[2] !== n || d[3] !== s || d[4] !== a) ye = () => a ? fe(a, s) : n ? se : C.jump, d[2] = n, d[3] = s, d[4] = a, d[5] = ye;
  else ye = d[5];
  let [x, P] = (0, import_chunk_bs4h6795.y)(ye), U;
  if (d[6] !== l) U = () => l?.(), d[6] = l, d[7] = U;
  else U = d[7];
  let w = (0, import_chunk_bs4h6795.mo)(U), R = (0, import_chunk_bs4h6795.I)(!a), O = (0, import_chunk_8bkqeb5d.ir)(), B;
  if (d[8] !== w || d[9] !== u) B = () => {
    if (u) w();
  }, d[8] = w, d[9] = u, d[10] = B;
  else B = d[10];
  let b;
  if (d[11] !== u) b = [u], d[11] = u, d[12] = b;
  else b = d[12];
  (0, import_chunk_bs4h6795.H)(B, b);
  let S;
  if (d[13] !== n || d[14] !== p || d[15] !== u) S = () => {
    if (n || u || p !== -1 || !R.current) {
      return;
    }
    let Y = J(le, (0, import_chunk_ra3kqnyn.a_e)());
    P(C[Y[Math.floor(Math.random() * Y.length)]]), re(0);
  }, d[13] = n, d[14] = p, d[15] = u, d[16] = S;
  else S = d[16];
  let D = S, j;
  if (d[17] !== n || d[18] !== O || d[19] !== w || d[20] !== p || d[21] !== x || d[22] !== a) j = () => {
    if (p === -1) {
      return;
    }
    if (p >= x.length) {
      R.current = true, w(), re(n && !a ? 0 : -1);
      return;
    }
    return O.setTimeout(() => re(xe), mYn);
  }, d[17] = n, d[18] = O, d[19] = w, d[20] = p, d[21] = x, d[22] = a, d[23] = j;
  else j = d[23];
  let z;
  if (d[24] !== n || d[25] !== O || d[26] !== p || d[27] !== x || d[28] !== a) z = [p, x, n, a, O], d[24] = n, d[25] = O, d[26] = p, d[27] = x, d[28] = a, d[29] = z;
  else z = d[29];
  (0, import_chunk_bs4h6795.H)(j, z);
  let _;
  if (d[30] !== a) _ = a ? C[a].at(-1) : h, d[30] = a, d[31] = _;
  else _ = d[31];
  let W = _, E = p >= 0 && p < x.length, c = E ? x[p] : W;
  const M = c.x ?? 0;
  let L;
  if (d[32] !== c.offset || d[33] !== c.poof || d[34] !== c.pose || d[35] !== c.shadow || d[36] !== E || d[37] !== D || d[38] !== M) L = { pose: c.pose, bounceOffset: c.offset, x: M, poof: c.poof, shadow: c.shadow, isPlaying: E, onClick: D }, d[32] = c.offset, d[33] = c.poof, d[34] = c.pose, d[35] = c.shadow, d[36] = E, d[37] = D, d[38] = M, d[39] = L;
  else L = d[39];
  return L;
}
function Pe() {
  if (import_chunk_x7880gvk.nd.clawdEntranceTaken) return;
  if (!$Br() && !K1e((0, import_chunk_865at33z.ge)().lastClawdEntranceVersion)) return;
  import_chunk_x7880gvk.nd.clawdEntranceTaken = true;
  let n = J(de, (0, import_chunk_ra3kqnyn.a_e)());
  return n[Math.floor(Math.random() * n.length)];
}
function z$o(n) {
  let s = (0, import_chunk_sng02qpc.k)(6), { storageV5: a } = (0, import_chunk_3jkk3v3z.Ve)(), l;
  if (s[0] !== n) l = () => n ? Pe() : void 0, s[0] = n, s[1] = l;
  else l = s[1];
  let [f] = (0, import_chunk_bs4h6795.y)(l), d, N;
  if (s[2] !== f || s[3] !== a) d = () => {
    if (f === void 0 || !K1e((0, import_chunk_865at33z.ge)().lastClawdEntranceVersion)) {
      return;
    }
    (0, import_chunk_865at33z.Ke)(po, a);
  }, N = [f, a], s[2] = f, s[3] = a, s[4] = d, s[5] = N;
  else d = s[4], N = s[5];
  return (0, import_chunk_bs4h6795.H)(d, N), f;
}
