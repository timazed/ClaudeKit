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
var chunk_9m8h3aw1_exports = {};
__export(chunk_9m8h3aw1_exports, {
  Aha: () => Aha,
  B1o: () => B1o,
  pIe: () => pIe
});
module.exports = __toCommonJS(chunk_9m8h3aw1_exports);
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_2t5dst6n = require("/$bunfs/root/chunk-2t5dst6n.js");
var import_chunk_f3ymc800 = require("/$bunfs/root/chunk-f3ymc800.js");
var import_chunk_wvchre07 = require("/$bunfs/root/chunk-wvchre07.js");
var import_chunk_ykad4ek3 = require("/$bunfs/root/chunk-ykad4ek3.js");
var import_chunk_z8dyhx9v = require("/$bunfs/root/chunk-z8dyhx9v.js");
var import_chunk_ma8jx6m7 = require("/$bunfs/root/chunk-ma8jx6m7.js");
var import_chunk_6fvsq616 = require("/$bunfs/root/chunk-6fvsq616.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_s73318k8 = require("/$bunfs/root/chunk-s73318k8.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_cak1hmy1 = require("/$bunfs/root/chunk-cak1hmy1.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var D = /* @__PURE__ */ new WeakMap();
function h(t, n = "") {
  let s = D.get(t);
  if (s === void 0) s = { needsArrow: n.trim() !== "", pastes: 0, pastesAtArrow: 0 }, D.set(t, s);
  return s;
}
function R(t, n) {
  h(t).needsArrow = n.trim() !== "";
}
function M(t) {
  let n = h(t);
  n.needsArrow = false, n.pastesAtArrow = n.pastes;
}
function W(t) {
  h(t).pastes += 1;
}
function B1o(t, n) {
  let s = h(t, n);
  return s.needsArrow || s.pastes > s.pastesAtArrow;
}
(0, import_chunk_bs4h6795.G)();
var O = /* @__PURE__ */ new WeakMap();
function N(t, n) {
  O.set(t, n);
}
function B(t) {
  return O.get(t);
}
function ce() {
}
function le(v) {
  return v + 1;
}
var H = 6e4, pIe = 1e3;
function Aha({ inactiveSince: t, contextTokens: n, percentOfFiveHourLimit: s, trigger: a, focusedAction: m, offersLookUp: i, offersSummary: l, ask: c, onDone: w }) {
  let b = se(t, a === "idle"), p = (0, import_chunk_ykad4ek3.mx)(), d = a === "idle", [, v] = (0, import_chunk_bs4h6795.y)(0), C = Y(p, d ? c : null, v);
  (0, import_chunk_bs4h6795.y)(() => {
    if (d) R(c, C);
  }), (0, import_chunk_f3ymc800.OF)(), (0, import_chunk_6fvsq616.Pa)((u, A) => {
    if (A.upArrow || A.downArrow) M(c), v((ne) => ne + 1);
  }, { isActive: d });
  let q = d && C.trim() !== "", z = d && B1o(c, C), J = (0, import_chunk_8bkqeb5d.si)(), X = (0, import_chunk_z8dyhx9v.Zu)(), [Z] = (0, import_chunk_bs4h6795.y)(() => B(c) ?? "new_conversation"), E = () => (0, import_chunk_2t5dst6n.Ha)(J, X(), pIe), { refusedWithin: I, noteRefused: T } = (0, import_chunk_z8dyhx9v.po)(), { refusedWithin: ee, noteRefused: oe } = (0, import_chunk_z8dyhx9v.po)(), F = () => {
    let u = E();
    if (u || I(import_chunk_2t5dst6n._s) || ee(import_chunk_2t5dst6n.K3)) {
      if (T(), u) oe();
      return true;
    }
    return false;
  }, te = (u) => {
    if (u === "compact" && F()) return false;
    if (m === "new_conversation" && u === "new_conversation" && (E() || I(import_chunk_2t5dst6n._s))) return T(), false;
    return w(u);
  }, P = a === "idle" && p !== void 0 ? (u) => {
    W(c), v((A) => A + 1), (0, import_chunk_ma8jx6m7.DMe)(p, (0, import_chunk_ma8jx6m7.tne)(p) + u.text.replace(/\r\n?/g, `
`));
  } : void 0, j = (0, import_chunk_a46xeenj.o)(import_chunk_vs99e3g5.Oe, { title: "Resume this conversation?", color: "warning", onCancel: () => w("dismiss"), inputGuide: (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [z ? (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: ["up", "down"], action: "pick a row first" }) : null, (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "enter", action: "confirm" }), (0, import_chunk_a46xeenj.e)(import_chunk_cak1hmy1.rs, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: d ? "dismiss" : "resume" })] }), children: [(0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["This conversation has been inactive for ", b, " and is", " ", (0, import_chunk_f64qna2j.go)(n), " tokens long.", " ", s >= 100 ? (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: ["Resuming it will use ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: "all" }), " of your 5-hour usage limit."] }) : (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: ["Resuming it will use about", " ", (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { bold: true, children: [s, "%"] }), " of your 5-hour usage limit."] })] }), q && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "Your unsent message will still be there after you answer." })] }), (0, import_chunk_a46xeenj.e)(import_chunk_s73318k8.ct, { options: [{ value: "resume", label: "Resume" }, { value: "new_conversation", label: "Start a new conversation", ...i && { description: "Claude can look this one up if you refer to it later" } }, ...l ? [{ value: "compact", label: "Resume from summary", description: "Claude writes a summary now, and you continue from it" }] : []], hideIndexes: a === "idle", onUpFromFirstItem: a === "idle" ? U : void 0, ...(l || m === "new_conversation") && { selectedValue: import_chunk_s73318k8.Do }, ...l && { refuseInput: F }, ...m === "new_conversation" && { defaultFocusValue: Z, onDownFromLastItem: a === "idle" ? U : void 0, onFocus: (u) => {
    if (u !== "dismiss") N(c, u === "compact" ? "resume" : u);
  } }, onChange: te })] });
  return P === void 0 ? j : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", onPaste: P, children: j });
}
function se(t, n) {
  let s = (0, import_chunk_8bkqeb5d.ir)(), [a] = (0, import_chunk_bs4h6795.y)(() => ({ since: t, text: _(t) }));
  if (a.since !== t) a.since = t, a.text = _(t);
  let m = (0, import_chunk_bs4h6795.ye)((i) => {
    if (!n) return () => {
    };
    let l = s.setTimeout(function c() {
      a.text = _(a.since), i(), l = s.setTimeout(c, H);
    }, H);
    return () => l();
  }, [s, a, n]);
  return (0, import_chunk_bs4h6795.Ot)(m, () => a.text, () => a.text);
}
function _(t) {
  return (0, import_chunk_f64qna2j.vy)(Math.max(0, Date.now() - t));
}
function Y(t, n, s) {
  let a = (0, import_chunk_sng02qpc.k)(8), m;
  if (a[0] !== t) m = t === void 0 ? null : (0, import_chunk_ma8jx6m7.gE)(t), a[0] = t, a[1] = m;
  else m = a[1];
  let i = m, l;
  if (a[2] !== n || a[3] !== s || a[4] !== i) l = (c) => i === null ? ce : (() => {
    let w = i.getState().value;
    return i.subscribe(() => {
      let b = i.getState().value;
      if (n !== null && b !== w) R(n, b), s(le);
      w = b, c();
    });
  })(), a[2] = n, a[3] = s, a[4] = i, a[5] = l;
  else l = a[5];
  let p = l, d;
  if (a[6] !== i) d = () => i === null ? "" : i.getState().value, a[6] = i, a[7] = d;
  else d = a[7];
  return (0, import_chunk_bs4h6795.Ot)(p, d);
}
function U() {
}
