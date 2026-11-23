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
var chunk_06pt2b41_exports = {};
__export(chunk_06pt2b41_exports, {
  EO: () => EO,
  Jfa: () => Jfa,
  Kfa: () => Kfa,
  Qfa: () => Qfa,
  Vfa: () => Vfa,
  Xfa: () => Xfa,
  Yfa: () => Yfa,
  Zfa: () => Zfa,
  _$s: () => _$s,
  epa: () => epa,
  npa: () => npa,
  qfa: () => qfa,
  rpa: () => rpa,
  tpa: () => tpa,
  y$s: () => y$s,
  zfa: () => zfa
});
module.exports = __toCommonJS(chunk_06pt2b41_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_5sjwf92x = require("/$bunfs/root/chunk-5sjwf92x.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_crypto = require("crypto");
var S = 1024, h = 1024, m = 1024, c = 32, b = 16, w = 524288, A = 3e5;
function p() {
  return (0, import_chunk_5sjwf92x.iv)(import_chunk_5sjwf92x.JO, void 0, true);
}
function y() {
  return { isWatched: false, hasMoved: false, taken: void 0, goneUntoldToMainAgent: void 0, unseen: void 0, making: void 0, makesLaunchDirectory: false, makingLaunch: void 0, launchMadeToldBy: /* @__PURE__ */ new Map(), isMadeAgainUntold: false };
}
var EO = new import_chunk_pzzqg6s3.ze(() => ({ id: (0, import_crypto.randomUUID)(), now: () => performance.now(), runningRuns: /* @__PURE__ */ new Map(), finishedRuns: /* @__PURE__ */ new Map(), barredRuns: /* @__PURE__ */ new Map(), keptRuns: /* @__PURE__ */ new Map(), askDirectories: /* @__PURE__ */ new Map(), newestDropped: void 0, runEnded: (0, import_chunk_69qhefwa.Be)(), readFileState: p(), subagentReadFileStates: /* @__PURE__ */ new Map(), changedFilesPasses: /* @__PURE__ */ new WeakMap(), shell: y() }));
function zfa(n) {
  return EO.of(n).id;
}
function _$s(n, e) {
  let i = EO.of(n), { runningRuns: r, finishedRuns: s, barredRuns: o } = i;
  if (o.has(e)) return "barred";
  if (r.has(e) || s.has(e)) return "started_before";
  return r.set(e, i.now()), "claimed";
}
var g = (n, e) => n === void 0 || e === void 0 ? n ?? e : Math.max(n, e);
function l(n, e, i, r) {
  n.delete(e), n.set(e, r);
  let [s] = n;
  if (n.size <= i || s === void 0) return;
  return n.delete(s[0]), s[1];
}
function y$s(n, e) {
  let i = EO.of(n);
  if (!i.runningRuns.delete(e)) return;
  i.newestDropped = g(i.newestDropped, l(i.finishedRuns, e, S, i.now())), i.runEnded.emit();
}
function Vfa(n, e, { call: i, stop: r }, s) {
  let o = EO.of(n), { keptRuns: a, finishedRuns: u } = o;
  if (a.has(e)) return s();
  let d = { call: i, answer: s(), stop: r };
  return a.set(e, d), d.answer.then((f) => {
    if (a.delete(e), u.has(e) && (0, import_chunk_syr33dp2.pw)(f ?? null) <= w) a.set(e, { ...d, stop: () => {
    }, endedAt: o.now() });
  }, () => a.delete(e)), d.answer;
}
function Kfa(n, e, i) {
  let { keptRuns: r, now: s } = EO.of(n), o = [...r].filter(([, u]) => u.endedAt !== void 0);
  o.forEach(([u, { endedAt: d = 0 }], f) => {
    if (s() - d > A || o.length - f > b) r.delete(u);
  });
  let a = r.get(e);
  return a?.call === i ? a : void 0;
}
function qfa(n, e) {
  let i = EO.of(n), r = i.runningRuns.get(e);
  if (r !== void 0) return { state: "running", since_ms: Math.round(i.now() - r) };
  if (i.finishedRuns.has(e)) return { state: "finished" };
  if (!i.barredRuns.has(e)) i.newestDropped = g(i.newestDropped, l(i.barredRuns, e, h, i.now()));
  return { state: "unknown", barred: true };
}
function Yfa(n, e, i) {
  l(EO.of(n).askDirectories, e, m, i);
}
function Xfa(n, e) {
  return EO.of(n).barredRuns.has(e);
}
function Jfa(n, e) {
  let { runningRuns: i, finishedRuns: r } = EO.of(n);
  return i.has(e) || r.has(e);
}
function Qfa(n, e) {
  return EO.of(n).runningRuns.has(e);
}
function Zfa(n, e) {
  return EO.of(n).runEnded.subscribe(e);
}
function epa(n) {
  return [...EO.of(n).runningRuns.keys()];
}
function tpa(n) {
  let { newestDropped: e, now: i } = EO.of(n);
  return e === void 0 ? void 0 : Math.round(i() - e);
}
function npa(n, e) {
  let { readFileState: i, subagentReadFileStates: r } = EO.of(n);
  return e === void 0 ? i : r.get(e);
}
function rpa(n, e) {
  let { readFileState: i, subagentReadFileStates: r } = EO.of(n);
  if (e === void 0) return i;
  let s = r.get(e) ?? p();
  r.delete(e), r.set(e, s);
  let [o] = r.keys();
  if (r.size > c && o !== void 0) r.delete(o), (0, import_chunk_w578pjby.t)(`[mcp serve] more than ${c} subagents: dropped the read record of ${o}`);
  return s;
}
