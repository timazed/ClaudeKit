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
var chunk_v6ez7m15_exports = {};
__export(chunk_v6ez7m15_exports, {
  D0i: () => D0i,
  Gan: () => Gan,
  Jml: () => Jml,
  L0i: () => L0i,
  N0i: () => N0i,
  R0e: () => R0e,
  Xml: () => Xml,
  n_o: () => n_o,
  t_o: () => t_o,
  zan: () => zan,
  zit: () => zit
});
module.exports = __toCommonJS(chunk_v6ez7m15_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_p2s0km69 = require("/$bunfs/root/chunk-p2s0km69.js");
var import_chunk_01eypw0a = require("/$bunfs/root/chunk-01eypw0a.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_tty = require("tty");
var _ = 32, i = "clear:", c = { type: "unknown", id: null, via: "launch" }, D0i = 64;
function Gan() {
  if ((0, import_chunk_f9x2f6cx.st)()) return [];
  let e = (0, import_chunk_wtm85h0y.G6n)(), o = e?.via === "teammate", n = (0, import_chunk_5e3gtsn9.Gc)(), t = n === void 0 ? import_chunk_c203g5kd.s.CLAUDE_CODE_CHILD_SESSION : (0, import_chunk_69qhefwa.Ne)(n.CLAUDE_CODE_CHILD_SESSION), E = n === void 0 ? import_chunk_c203g5kd.s.CLAUDECODE : (0, import_chunk_69qhefwa.Ne)(n.CLAUDECODE), d = !o && (t || E) ? (0, import_chunk_mzmcvr6c.ht)((n ?? import_chunk_c203g5kd.s).CLAUDE_CODE_SESSION_ID) : null, a = ((n ?? import_chunk_c203g5kd.s).CLAUDE_CODE_LAUNCHED_BY_SESSION_IDS ?? "").split(",").map((r) => r.trim()).filter((r) => r !== "" && r !== d);
  return (0, import_chunk_01eypw0a.Npe)([...d === null ? [] : [(0, import_chunk_01eypw0a._U)(d, "subprocess")], ...t && !o && d === null && a.every((r) => r.startsWith(i)) ? [{ type: "unknown", id: null, via: "subprocess" }] : [], ...a.map((r, S) => {
    let u = r.startsWith(i), l = u ? r.slice(i.length) : r;
    return S < _ && (0, import_chunk_mzmcvr6c.ht)(l) !== null ? (0, import_chunk_01eypw0a._U)(l, u ? "clear" : "launch") : c;
  }), ...e?.via === "launch" ? [(0, import_chunk_01eypw0a._U)(e.sessionId, "launch")] : []]).filter(({ id: r }) => r !== (0, import_chunk_f9x2f6cx.W)());
}
function R0e() {
  return (import_chunk_c203g5kd.s.CLAUDE_CODE_LAUNCHED_BY_SESSION_IDS ?? "").split(",").map((e) => e.trim()).some((e) => e !== "" && !(e.startsWith(i) && (0, import_chunk_mzmcvr6c.ht)(e.slice(i.length)) !== null));
}
function zan({ andUnknown: e = false } = {}) {
  let o = [...Gan().map((t) => zit(t) && (0, import_chunk_mzmcvr6c.ht)(t.id) || "unknown"), ...e ? ["unknown"] : []], n = (0, import_chunk_p2s0km69.Nbr)();
  return o.length === 0 ? {} : { CLAUDE_CODE_LAUNCHED_BY_SESSION_IDS: o.join(","), ...n && { CLAUDE_CODE_CHILD_NOTES_DIR: n } };
}
function m() {
  let e = (0, import_chunk_5e3gtsn9.Gc)() ?? import_chunk_c203g5kd.s;
  return e.CLAUDE_CODE_SESSION_KIND === "bg" && !(0, import_chunk_f9x2f6cx.Se)() && !e.CLAUDE_CODE_LAUNCHED_BY_SESSION_IDS?.trim();
}
function t_o() {
  let e = (0, import_chunk_f9x2f6cx.en)(), o = Gan();
  if ((0, import_chunk_4smdap7r.U)(e.derivedFrom(), zit) <= D0i) e.recordDerivedFrom([...o, ...m() ? [c] : []].map((n) => zit(n) ? { ...n, started: (0, import_chunk_f9x2f6cx.W)() } : n));
  return (0, import_chunk_4smdap7r.U)(o, zit);
}
function zit({ via: e }) {
  return e === "subprocess" || e === "launch";
}
function L0i() {
  let e = (0, import_chunk_5e3gtsn9.Gc)() ?? import_chunk_c203g5kd.s, o = e.CLAUDE_CODE_ENTRYPOINT ?? "cli", n = e.TERM_PROGRAM === "claude-desktop" && (o === "cli" || o === "sdk-cli") && ((0, import_tty.isatty)(0) || (0, import_tty.isatty)(2));
  return m() || (o === "claude-desktop" || n) && !e.CLAUDE_CODE_LAUNCHED_BY_SESSION_IDS?.trim() && !(0, import_chunk_69qhefwa.Ne)(e.CLAUDE_CODE_CHILD_SESSION) && !(0, import_chunk_69qhefwa.Ne)(e.CLAUDECODE) && !(0, import_chunk_69qhefwa.Ne)(e.CLAUDE_CODE_REMOTE) && !(0, import_chunk_f9x2f6cx.Hn)() && !(0, import_chunk_f9x2f6cx.st)();
}
function Xml() {
  let e = (0, import_chunk_wtm85h0y.G6n)();
  return (0, import_chunk_01eypw0a.Npe)([...(0, import_chunk_f9x2f6cx.en)().derivedFrom(), ...(0, import_chunk_f9x2f6cx.en)().derivedFromForSession(), ...Gan(), ...L0i() ? [c] : [], ...e?.via === "teammate" ? [(0, import_chunk_01eypw0a._U)(e.sessionId, "teammate")] : []]);
}
function n_o(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let n = (0, import_chunk_01eypw0a.Kan)(e[o]);
    if (n !== void 0) return n;
  }
  return;
}
function Jml(e) {
  for (let o of e) {
    let n = (0, import_chunk_01eypw0a.Kan)(o);
    if (n !== void 0) return n;
  }
  return;
}
function N0i(e) {
  let o = (0, import_chunk_f9x2f6cx.en)(), n = (0, import_chunk_f9x2f6cx.W)();
  o.replaceDerivedFrom([...o.derivedFrom().filter((t) => !(t.via === "resume" && t.id === n) && !(t.via === "fork" && e.includes(t.id ?? ""))), ...e.map((t) => (0, import_chunk_01eypw0a._U)(t, "cloud"))]);
}
