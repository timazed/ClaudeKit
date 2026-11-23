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
var chunk_h485hv2e_exports = {};
__export(chunk_h485hv2e_exports, {
  AHl: () => AHl,
  ds: () => ds,
  j6n: () => j6n
});
module.exports = __toCommonJS(chunk_h485hv2e_exports);
var m = ["panel"];
function ds({ hideWhile: n = m, ...e }) {
  return { ...e, hideWhile: n };
}
function AHl(n) {
  return async function(a, r, t) {
    if (j6n(r)) return P(n, a, r, t);
    return D(n, a, r, t);
  };
}
function j6n(n) {
  return typeof n === "object" && n !== null && Symbol.asyncIterator in n;
}
function f(n, e) {
  let a = e?.alsoHideWhile ?? [];
  return a.every((r) => n.includes(r)) ? n : [...n, ...a.filter((r) => !n.includes(r))];
}
async function D(n, e, a, r) {
  let t = e.payload().safeParse(a);
  if (!t.success) return e.default;
  let i;
  try {
    let { replied: o } = n.request({ kind: e.kind, payload: t.data, userInvoked: e.userInvoked, hideWhile: f(e.hideWhile, r), holdsTop: e.holdsTop }, r);
    i = await o;
  } catch {
    return e.default;
  }
  if ("cancelled" in i) return e.default;
  let s = e.result().safeParse(i.result);
  return s.success ? s.data : e.default;
}
async function P(n, e, a, r) {
  let t = a[Symbol.asyncIterator](), i = await t.next();
  if (i.done) return e.default;
  let s = e.payload().safeParse(i.value);
  if (!s.success) return t.return?.(void 0), e.default;
  let o = new AbortController(), c = () => o.abort();
  if (r?.signal) if (r.signal.aborted) o.abort();
  else r.signal.addEventListener("abort", c, { once: true });
  let { replied: R, update: h } = n.request({ kind: e.kind, payload: s.data, userInvoked: e.userInvoked, hideWhile: f(e.hideWhile, r), holdsTop: e.holdsTop }, { signal: o.signal, place: r?.place, askOrder: r?.askOrder, armInputGrace: r?.armInputGrace, succeeds: r?.succeeds, onFirstReveal: r?.onFirstReveal, onClaimed: r?.onClaimed, countedAsk: r?.countedAsk }), d;
  (async () => {
    try {
      while (!o.signal.aborted) {
        let l = await t.next();
        if (l.done) return;
        if (o.signal.aborted) return;
        let y = e.payload().safeParse(l.value);
        if (!y.success) continue;
        h(y.data);
      }
    } catch (l) {
      d = l, o.abort();
    }
  })().catch(() => {
  });
  let u;
  try {
    u = await R;
  } finally {
    r?.signal?.removeEventListener("abort", c), t.return?.(void 0);
  }
  if (d !== void 0) throw d;
  if ("cancelled" in u) return e.default;
  let p = e.result().safeParse(u.result);
  return p.success ? p.data : e.default;
}
