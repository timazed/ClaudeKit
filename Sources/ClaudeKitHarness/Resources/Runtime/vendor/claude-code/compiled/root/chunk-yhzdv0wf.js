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
var chunk_yhzdv0wf_exports = {};
__export(chunk_yhzdv0wf_exports, {
  Af: () => Af,
  Cjs: () => Cjs,
  Ejs: () => Ejs,
  GBr: () => GBr,
  Q$o: () => Q$o,
  SYn: () => SYn,
  S_a: () => S_a,
  Smt: () => Smt,
  Tjs: () => Tjs,
  VBr: () => VBr,
  Z$o: () => Z$o,
  __a: () => __a,
  bYn: () => bYn,
  b_a: () => b_a,
  bmt: () => bmt,
  eUo: () => eUo,
  g_a: () => g_a,
  iIt: () => iIt,
  jBr: () => jBr,
  kjs: () => kjs,
  vjs: () => vjs,
  wYn: () => wYn,
  y_a: () => y_a,
  zBr: () => zBr
});
module.exports = __toCommonJS(chunk_yhzdv0wf_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_ddk99w14 = require("/$bunfs/root/chunk-ddk99w14.js");
var import_chunk_ykad4ek3 = require("/$bunfs/root/chunk-ykad4ek3.js");
var import_chunk_e15pxvhz = require("/$bunfs/root/chunk-e15pxvhz.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_zdtzd1bp = require("/$bunfs/root/chunk-zdtzd1bp.js");
var import_chunk_58tv0tp7 = require("/$bunfs/root/chunk-58tv0tp7.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_path = require("path");
var import_path2 = require("path");
var import_os = require("os");
var import_path3 = require("path");
(0, import_chunk_bs4h6795.G)();
var W = 400, Q$o = 150, ae = 2e3, O = { hunks: /* @__PURE__ */ new Map(), skippedLarge: /* @__PURE__ */ new Set() };
async function V(t, o, n) {
  try {
    let a = await (0, import_chunk_e15pxvhz.Npr)(t, n, o);
    if (n?.aborted) return null;
    if (a === null) return (0, import_chunk_cqa9hrgx.l)("repl_diff_read", "git_diff_failed"), null;
    let s = a.stats.filesCount === 0 ? O : await (0, import_chunk_e15pxvhz.tki)(n, (0, import_chunk_e15pxvhz.PDn)(a));
    if (n?.aborted) return null;
    if (s === null) (0, import_chunk_cqa9hrgx.l)("repl_diff_read", "git_hunks_failed");
    else (0, import_chunk_cqa9hrgx.u)("repl_diff_read");
    return { result: a, hunks: s };
  } catch (a) {
    if (n?.aborted) return null;
    return (0, import_chunk_k449cc64.i)(a), (0, import_chunk_cqa9hrgx.l)("repl_diff_read", "git_diff_threw"), null;
  }
}
class q {
  #e = null;
  set(t, o, n, a) {
    this.#e = { baseMode: t, refreshKey: o, round: n, at: a };
  }
  take(t, o) {
    let n = this.#e;
    if (n === null) return;
    if (o - n.at > ae) {
      this.#e = null;
      return;
    }
    if (n.baseMode !== t) return;
    return this.#e = null, { round: n.round, refreshKey: n.refreshKey };
  }
  get isPrimed() {
    return this.#e !== null;
  }
}
var K = new import_chunk_2904xtvq.j(() => new q());
async function jBr(t, o, n, a) {
  let s = await V(t, o, a);
  if (a?.aborted) return;
  K.of(t).set(o, n, s && { result: s.result, baseMode: o, hunks: s.hunks ?? O }, Date.now());
}
function Z$o(t = 0, o = true, n = "auto") {
  let s = (0, import_chunk_bs4h6795.be)(import_chunk_ddk99w14.WI)?.setTimeout ?? import_chunk_ddk99w14.U2, p = (0, import_chunk_ykad4ek3.aa)(), [c] = (0, import_chunk_bs4h6795.y)(() => o ? K.of(p).take(n, Date.now()) : void 0), [h, S] = (0, import_chunk_bs4h6795.y)(c?.round ?? null), [b, E] = (0, import_chunk_bs4h6795.y)(c === void 0), v = (0, import_chunk_bs4h6795.I)(c !== void 0), U = (0, import_chunk_bs4h6795.I)(c !== void 0 && c.refreshKey === t), [ne, oe] = (0, import_chunk_bs4h6795.y)(0);
  return (0, import_chunk_bs4h6795.H)(() => (0, import_chunk_w5s307zm.w0r)(() => oe((w) => w + 1)), []), (0, import_chunk_bs4h6795.H)(() => {
    if (!o) return;
    if (U.current) {
      U.current = false;
      return;
    }
    let w = false, C = new AbortController();
    async function B() {
      let D = await V(p, n, C.signal);
      if (w) return;
      if (D !== null) {
        let g = (0, import_chunk_e15pxvhz.PDn)(D.result);
        S((P) => ({ result: D.result, baseMode: n, hunks: D.hunks ?? (P !== null && (0, import_chunk_e15pxvhz.PDn)(P.result) === g ? P.hunks : O) }));
      }
      v.current = true, E(false);
    }
    let _ = s(B, v.current || t !== 0 ? Q$o : 0);
    return () => {
      w = true, _(), C.abort();
    };
  }, [t, o, ne, n, p]), (0, import_chunk_bs4h6795.re)(() => {
    if (!h) return { stats: null, files: [], hunks: /* @__PURE__ */ new Map(), loading: o && b, source: { kind: "working-tree" }, baseMode: n };
    let { stats: w, perFileStats: C, source: B } = h.result, _ = [];
    for (let [D, g] of C) {
      let P = g.isUntracked, N = h.hunks.skippedLarge.has(D), ie = g.added + g.removed, se = !N && !g.isBinary && ie > W;
      _.push({ path: D, linesAdded: g.added, linesRemoved: g.removed, isBinary: g.isBinary, isLargeFile: N, isTruncated: se, isUntracked: P, preSession: g.preSession });
    }
    return _.sort((D, g) => D.path.localeCompare(g.path)), { stats: w, files: _, hunks: h.hunks.hunks, loading: false, source: B, baseMode: h.baseMode, noCommits: h.result.noCommits };
  }, [h, b, o, n]);
}
function F(t) {
  return { stats: null, files: [], hunks: /* @__PURE__ */ new Map(), loading: t, source: { kind: "working-tree" }, baseMode: "auto" };
}
function fe(t) {
  let o = new Set(t.skippedLarge), n = new Set(t.restricted), a = t.perFileStats.map((s) => {
    let p = o.has(s.path);
    return { path: s.path, linesAdded: s.added, linesRemoved: s.removed, isBinary: s.isBinary, isLargeFile: p, isTruncated: !p && !s.isBinary && s.added + s.removed > W, isUntracked: s.isUntracked, isRestricted: n.has(s.path) };
  }).sort((s, p) => s.path.localeCompare(p.path));
  return { stats: t.stats, files: a, hunks: new Map(t.hunks.map((s) => [s.path, s.hunks])), loading: false, source: t.source, baseMode: "branch-point" };
}
function le(t) {
  let [o, n] = (0, import_chunk_bs4h6795.y)(() => ({ data: F(t), notice: null }));
  return (0, import_chunk_bs4h6795.H)(() => {
    if (!t) return;
    let a = (0, import_chunk_t7fzcstv.br)();
    if (!a || !(0, import_chunk_t7fzcstv.CI)("controlChannel")) {
      (0, import_chunk_cqa9hrgx.l)("remote_workspace_diff_fetch", "no_channel"), n({ data: F(false), notice: "Workspace changes aren't available over this connection \xB7 showing per-turn changes only" });
      return;
    }
    let s = false;
    return a.sendControlRequest({ subtype: "get_workspace_diff" }).then((p) => {
      if (s) return;
      (0, import_chunk_cqa9hrgx.u)("remote_workspace_diff_fetch"), n({ data: p.diff ? fe(p.diff) : F(false), notice: null });
    }).catch((p) => {
      if (s) return;
      let c = (0, import_chunk_jv7av99m.d)(p), h = c.includes("Unsupported control request subtype") ? "unsupported_subtype" : (0, import_chunk_e15pxvhz.iN)(p);
      if (h === "unsupported_subtype") (0, import_chunk_cqa9hrgx.l)("remote_workspace_diff_fetch", h);
      else (0, import_chunk_cqa9hrgx.m)("remote_workspace_diff_fetch", h);
      n({ data: F(false), notice: h === "unsupported_subtype" ? "The remote workspace's Claude Code is too old to report workspace changes \xB7 showing per-turn changes only" : p instanceof import_chunk_e15pxvhz.nU ? "Timed out fetching workspace changes \xB7 showing per-turn changes only" : h === "disconnected" || h === "not_connected" ? "Lost the connection to the cloud session \xB7 showing per-turn changes only" : h === "not_delivered" ? "Couldn't reach the cloud session \xB7 showing per-turn changes only" : `Couldn't fetch workspace changes: ${c}` });
    }), () => {
      s = true;
    };
  }, [t]), o;
}
function kjs(t) {
  let o = Z$o(0, !t), n = le(t);
  return t ? n : { data: o, notice: null };
}
class z {
  lastLoggedSessionId = null;
  autoOpenPending = false;
}
var SYn = new import_chunk_2904xtvq.j(() => new z()), g_a = new import_chunk_2904xtvq.j(() => ({ lastLoggedSessionId: null })), iIt = new import_chunk_2904xtvq.j(() => (0, import_chunk_t57w17k7.de)({ cycled: false }, (t) => {
  t.cycled = false, t.unsentPick = void 0;
}));
var ue = "The diff panel shows git changes \u2014 the current directory isn\u2019t in a git repository", __a = "The diff panel isn\u2019t available right now \u2014 run /diff again to see your changes";
function Ejs(t) {
  SYn.of(t).autoOpenPending = true;
}
function y_a(t) {
  let o = SYn.of(t), n = o.autoOpenPending;
  return o.autoOpenPending = false, n;
}
function X(t) {
  SYn.of(t).autoOpenPending = false;
}
function GBr() {
  return (0, import_chunk_e15pxvhz.ODn)() || (0, import_chunk_e15pxvhz.Fpr)() !== null;
}
function eUo({ enabled: t, fullscreen: o, columns: n, isThinClient: a, isMainFocused: s, hasGitRepo: p }) {
  return t && o && !a && s && n >= import_chunk_58tv0tp7.LCe && p;
}
function vjs(t) {
  let o = (0, import_chunk_865at33z.ge)().diffSidebarOpen;
  if (o === false) return false;
  return t >= (o === true ? import_chunk_58tv0tp7.LCe : import_chunk_58tv0tp7.urn) && GBr();
}
function Y(t, o, n, a) {
  let s = n === "diff" ? "convo" : "diff";
  X(t), o((c) => c.replTab === s && c.panelFileView === null ? c : { ...c, replTab: s, panelFileView: null });
  let p = s === "diff";
  if ((0, import_chunk_865at33z.ge)().diffSidebarOpen !== p) (0, import_chunk_865at33z.Ke)((c) => ({ ...c, diffSidebarOpen: p }), a);
  return (0, import_chunk_cqa9hrgx.u)("repl_tab_switch", { tab: (0, import_chunk_78g0060s.f)(s) }), s;
}
async function pe(t, o, n, a, s) {
  if (await jBr(t, bYn(), a), o() === "diff") return;
  Y(t, n, "convo", s);
}
var ce = "Diff panel shown", me = "Diff panel hidden", S_a = 2e3;
function b_a(t) {
  switch (t.status) {
    case "shown":
      return ce;
    case "hidden":
      return me;
    case "refused":
      return t.text;
  }
}
function zBr({ host: t, getReplTab: o, setAppState: n, columns: a, trackSequence: s, storageV5: p }) {
  if (o() === "diff") return Y(t, n, "diff", p), { status: "hidden" };
  if (!GBr()) return { status: "refused", reason: "no-git", text: ue };
  if (a < import_chunk_58tv0tp7.LCe) return { status: "refused", reason: "too-narrow", text: `Resize your terminal to at least ${import_chunk_58tv0tp7.LCe} columns to show the diff panel` };
  return { status: "shown", settled: pe(t, o, n, s, p).catch(import_chunk_k449cc64.i) };
}
function Smt(t, o) {
  X(t), o((n) => n.replTab === "convo" && n.panelFileView === null ? n : { ...n, replTab: "convo", panelFileView: null });
}
function Tjs(t, o, n) {
  if (Smt(t, o), (0, import_chunk_865at33z.ge)().diffSidebarOpen !== false) (0, import_chunk_865at33z.Ke)((a) => ({ ...a, diffSidebarOpen: false }), n);
  (0, import_chunk_cqa9hrgx.u)("repl_tab_switch", { tab: (0, import_chunk_78g0060s.f)("convo") });
}
var L = ["session", "uncommitted", "branch"];
function bYn() {
  let t = (0, import_chunk_865at33z.Cc)().diffSidebarBaseMode;
  return t === "uncommitted" || t === "branch" ? t : "session";
}
function Cjs(t, o) {
  let n = L[(L.indexOf(t) + 1) % L.length] ?? "session";
  return (0, import_chunk_865at33z.kw)((a) => a.diffSidebarBaseMode === n ? a : { ...a, diffSidebarBaseMode: n }, o), (0, import_chunk_cqa9hrgx.u)("repl_diff_base_switch", { mode: (0, import_chunk_78g0060s.f)(n) }), n;
}
function wYn(t) {
  return (0, import_chunk_2nv4wrez.sxe)(Se(t));
}
function Se(t) {
  let o = (0, import_chunk_f9x2f6cx.Oo)(), n = (0, import_chunk_cg8dqz0a.x)() === "windows", a = n ? import_path.win32.sep : import_path.sep, s = (S) => n ? S.replaceAll("/", a).toLowerCase() : S, p = s(t), c = s(o);
  if (p.length !== t.length || c.length !== o.length) return t;
  if (p === c) return "";
  let h = c.endsWith(a) ? c : c + a;
  return p.startsWith(h) ? t.slice(h.length) : t;
}
function VBr(t) {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") return import_path2.win32.isAbsolute(t) && import_path2.win32.parse(t).root.length > 1;
  return (0, import_path2.isAbsolute)(t);
}
(0, import_chunk_bs4h6795.G)();
var bmt = (0, import_chunk_bs4h6795.an)(null);
function Af(t) {
  let p = (0, import_chunk_sng02qpc.k)(9), { filePath: o, children: n } = t, a = (0, import_chunk_bs4h6795.be)(bmt), s = n ?? o;
  if (M(o) || typeof s === "string" && M(s)) {
    let c2;
    if (p[0] === import_chunk_w1d7ygsk.R) c2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: import_chunk_2yx6c1y2.rKt }), p[0] = c2;
    else c2 = p[0];
    return c2;
  }
  let c;
  if (p[1] !== a || p[2] !== s) c = a !== null && typeof s === "string" ? (0, import_chunk_f64qna2j.Jc)(s, a) : s, p[1] = a, p[2] = s, p[3] = c;
  else c = p[3];
  let h = c, S;
  if (p[4] !== o) S = VBr(o) ? (0, import_chunk_zdtzd1bp.I6)(o) : null, p[4] = o, p[5] = S;
  else S = p[5];
  let b = S, E;
  if (p[6] !== h || p[7] !== b) E = b === null ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: h }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: b, children: h }), p[6] = h, p[7] = b, p[8] = E;
  else E = p[8];
  return E;
}
function M(t) {
  let o = Re(t);
  return (0, import_path3.isAbsolute)(o) ? wYn(o) : (0, import_chunk_2nv4wrez.sxe)(o);
}
function Re(t) {
  if (t === "~") return (0, import_os.homedir)();
  return t.startsWith("~" + import_path3.sep) ? (0, import_os.homedir)() + t.slice(1) : t;
}
