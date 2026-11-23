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
var chunk_3gmqyxcs_exports = {};
__export(chunk_3gmqyxcs_exports, {
  $Xs: () => $Xs,
  BHt: () => BHt,
  BTn: () => BTn,
  DXs: () => DXs,
  FXs: () => FXs,
  G$e: () => G$e,
  LXs: () => LXs,
  M4r: () => M4r,
  NXs: () => NXs,
  O7t: () => O7t,
  UHt: () => UHt,
  W7l: () => W7l,
  eqo: () => eqo,
  gtr: () => gtr,
  nqo: () => nqo,
  tqo: () => tqo
});
module.exports = __toCommonJS(chunk_3gmqyxcs_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_c1hnv4fm = require("/$bunfs/root/chunk-c1hnv4fm.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_7fjbagnr = require("/$bunfs/root/chunk-7fjbagnr.js");
var import_chunk_74mx55jd = require("/$bunfs/root/chunk-74mx55jd.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_d3vfy4gs = require("/$bunfs/root/chunk-d3vfy4gs.js");
var import_chunk_jc9v3hv0 = require("/$bunfs/root/chunk-jc9v3hv0.js");
var import_chunk_f2vegtjy = require("/$bunfs/root/chunk-f2vegtjy.js");
var import_chunk_s12kntv9 = require("/$bunfs/root/chunk-s12kntv9.js");
var import_crypto = require("crypto");
var import_promises = require("fs/promises");
function G$e(e, d, n) {
  return e.ver === d && (e.observers === void 0 || Object.hasOwn(e.observers, n));
}
function M(e, d, n) {
  return G$e(e.getArtifactReadObservation(d), n, e.agentId ?? "main") && !(0, import_chunk_f2vegtjy.Xje)(e.agentId, d, n);
}
function eqo(e) {
  return e.fileReadingLimits?.maxTokens ?? (0, import_chunk_7fjbagnr.P1)().maxTokens;
}
function BTn(e, d) {
  let n = eqo(d), t = [], o = 0, r = 0;
  while (r <= e.length) {
    let s = e.indexOf(`
`, r), g = s === -1 ? e.length : s;
    if (o++, (0, import_chunk_c1hnv4fm.x0n)(e.slice(r, g), "html") > n / 4) t.push({ line: o, start: r, end: g });
    r = g + 1;
  }
  return { lines: o, unterminated: !e.endsWith(`
`), overlong: t };
}
var T = 3, K = 8, X = 32;
function gtr({ html: e, ver: d, shape: n, sent: t, recorded: o, lineCount: r = true }) {
  let s = (a) => a.toLocaleString("en-US"), g = n.unterminated ? n.lines : n.lines - 1, b = `version ${d}: ${s(Buffer.byteLength(e))} bytes${r ? `, ${s(g)} ${(0, import_chunk_7cfjrnwy.O)(g, "line")}` : ""}`;
  if (n.overlong.length === 0) return `${b}, ${r ? "each" : "every line"} short enough to Read with offset/limit`;
  let p = (t !== void 0 && n.overlong.length <= X ? t : void 0)?.replace(/\r\n/g, `
`), C;
  try {
    C = p === void 0 ? void 0 : (0, import_chunk_f2vegtjy.Kwr)(p);
  } catch (a) {
    if (!(a instanceof import_chunk_f2vegtjy.N0e)) throw a;
  }
  let P = p === void 0 ? void 0 : /* @__PURE__ */ new Set([...p.split(`
`), ...C?.split(`
`) ?? []]), y = n.overlong.map((a) => {
    let _ = e.slice(a.start, a.end).replace(/\r$/, ""), A = P === void 0 ? void 0 : P.has(_) ? "same" : "differs";
    return { line: a.line, chars: a.end - a.start, verdict: A };
  }), x = y.slice(0, T), R = y.slice(T), v = R.length, f = R.filter((a) => a.verdict === "differs"), H = v > 0 && R.every((a) => a.verdict === "same"), h = f.slice(0, K).map((a) => s(a.line)), m = f.length - h.length, S = f.length === 0 ? H ? ", none differing from what you sent" : "" : `, of which ${(0, import_chunk_7cfjrnwy.O)(f.length, "line")} ${h.join(", ")}${m > 0 ? ` and ${s(m)} more` : ""} ${f.length === 1 ? "differs" : "differ"} from what you sent`, w = (a) => `line ${s(a.line)} (${s(a.chars)} characters${a.verdict === "differs" ? ", which differs from the content you sent" : a.verdict === "same" ? ", identical to a line you sent" : ""})`;
  return `${b}; a single Read may not return ${x.map(w).join(", or ")}${v > 0 ? `, or ${s(v)} more such ${(0, import_chunk_7cfjrnwy.O)(v, "line")}${S}` : ""}` + (o ? " \u2014 no whole Read of it is needed: Read the lines you need with offset/limit, and take those long lines from the saved file, never from your own copy" : "");
}
async function O7t({ filepath: e, persistId: d, html: n, slug: t, ver: o, confirmsResend: r, batch: s, heldSkipsRead: g }, b) {
  let c = b.agentId ?? "main", { lines: p, overlong: C } = BTn(n, b), P = C.length === 0, y = M(b, t, o), x = y && g ? "held" : "unverifiable", R = (0, import_chunk_n2dbhmj2.xt)(e), v;
  if ((0, import_chunk_f9x2f6cx.Y)()) (0, import_chunk_74mx55jd.KQ)("handover_read");
  else v = await (0, import_chunk_2yx6c1y2._D)(R).catch(() => {
    return;
  });
  if (v === void 0) return x === "held" ? "held" : "unexaminable";
  let f = (0, import_crypto.createHash)("sha256").update(n).digest("hex"), H = (0, import_chunk_0rkwgmhx.se)().pendingHandoverReads, h = H.get(R), m = h !== void 0 && h.slug === t && h.ver === o && h.contentHash === f ? h : void 0;
  if (m !== void 0) m.mtimeMs = v;
  if (!P) return x;
  let S = y && g;
  if (m !== void 0) {
    if (m.handedTo.add(c), S) return m.completedBy.add(c), "held";
    if (r) m.confirmsResendFor.set(c, s ?? "");
    else m.confirmsResendFor.delete(c);
    return m.completedBy.delete(c), m.unrecordableBy.has(c) ? "unverifiable" : "pending";
  }
  let w = /* @__PURE__ */ new Set();
  for (let [_, A] of H) if (A.slug === t) {
    for (let q of A.unrecordableBy) w.add(q);
    H.delete(_);
  }
  let a = !n.endsWith(`
`);
  return H.set(R, { slug: t, ver: o, mtimeMs: v, totalLines: p, unterminated: a, contentHash: f, bytes: Buffer.byteLength(n), requiredLines: a ? p : p - 1, linesReturned: /* @__PURE__ */ new Map(), linesPrepared: /* @__PURE__ */ new Map(), completedBy: new Set(S ? [c] : []), handedTo: /* @__PURE__ */ new Set([c]), unrecordableBy: w, persistId: d, confirmsResendFor: new Map(r ? [[c, s ?? ""]] : []) }), S ? "held" : w.has(c) ? "unverifiable" : "pending";
}
async function M4r(e, d, n) {
  for (let [t, o] of (0, import_chunk_0rkwgmhx.se)().pendingHandoverReads) if (o.slug === e && o.ver === d) {
    let r = await (0, import_chunk_2yx6c1y2._D)(t).catch(() => {
      return;
    });
    return r !== void 0 && r !== o.mtimeMs ? { persistId: `${n}-${Date.now().toString(36)}`, editedCopy: t } : { persistId: o.persistId };
  }
  return { persistId: n };
}
async function UHt(e, d) {
  let n = (0, import_chunk_n2dbhmj2.xt)(e), t = (0, import_chunk_0rkwgmhx.se)().pendingHandoverReads, o = t.get(n);
  if (o === void 0) return;
  if ((0, import_crypto.createHash)("sha256").update(d).digest("hex") !== o.contentHash) {
    t.delete(n);
    return;
  }
  let r = await (0, import_chunk_2yx6c1y2._D)(n).catch(() => {
    return;
  });
  if (r !== void 0) o.mtimeMs = r;
}
function N(e, d, n) {
  for (let [t, o] of (0, import_chunk_0rkwgmhx.se)().pendingHandoverReads) if (o.slug === d && (n === void 0 || o.ver === n) && o.handedTo.has(e) && !o.completedBy.has(e) && !o.unrecordableBy.has(e)) return [t, o];
  return;
}
function DXs(e, d, n) {
  return N(e ?? "main", d, n) !== void 0;
}
function I(e, d, n, t = false) {
  let o = e.agentId ?? "main", r = N(o, d, n);
  if (r === void 0) return;
  let s = r[1];
  return G(s, e) || !t && M(e, d, s.ver) ? void 0 : r;
}
function tqo(e, d, n, { ignoreHold: t = false } = {}) {
  let o = I(e, d, n, t);
  return o === void 0 ? void 0 : k(o[0], o[1], e.agentId);
}
async function LXs(e, d, n) {
  let t = I(e, d, n);
  if (t === void 0) return;
  let [o, r] = t, s;
  try {
    s = await (0, import_chunk_2yx6c1y2._D)(o) === r.mtimeMs ? "intact" : "changed";
  } catch (g) {
    s = (0, import_chunk_jv7av99m.J)(g) ? "changed" : "unknown";
  }
  return { ...k(o, r, e.agentId), file: s };
}
function k(e, d, n) {
  return { path: e, slug: d.slug, ver: d.ver, lines: d.requiredLines, unterminated: d.unterminated, unread: D(d.linesReturned.get(n ?? "main") ?? [], d.requiredLines) };
}
function NXs(e, d, n) {
  let t = I(e, d, n);
  return t !== void 0 && j(t[1], e.agentId, e.agentId ?? "main") === void 0;
}
function FXs(e, d, n, t) {
  I(e, d, n)?.[1].confirmsResendFor.set(e.agentId ?? "main", t);
}
function nqo({ lines: e, unterminated: d, unread: n }) {
  let t = n.reduce((o, [r, s]) => o + s - r + 1, 0);
  return `${e} ${(0, import_chunk_7cfjrnwy.O)(e, "line")}` + (d ? `; the last has no trailing newline, so \`wc -l\` reports ${e - 1} \u2014 Read through line ${e} and leave the file as it is` : "") + (t > 0 && t < e ? `; you have not yet Read ${(0, import_chunk_7cfjrnwy.O)(t, "line")} ${n.map(([o, r]) => o === r ? `${o}` : `${o}-${r}`).join(", ")}` : "");
}
function BHt(e, d, n, t) {
  let o = tqo(e, d, n, t);
  return o === void 0 ? "" : ` (${nqo(o)})`;
}
function D(e, d) {
  let n = [], t = 0;
  for (let [o, r] of B(e)) {
    if (o > t) n.push([t + 1, Math.min(o, d)]);
    if (t = Math.max(t, r), t >= d) break;
  }
  if (t < d) n.push([t + 1, d]);
  return n;
}
async function $Xs(e, d) {
  if ((0, import_chunk_0rkwgmhx.se)().pendingHandoverReads.delete((0, import_chunk_n2dbhmj2.xt)(e)), (0, import_chunk_d3vfy4gs.Jal)(d, e), (0, import_chunk_f9x2f6cx.Y)()) (0, import_chunk_74mx55jd.KQ)("handover_discard");
  else await (0, import_promises.unlink)(e).then(() => (0, import_chunk_jc9v3hv0.UXs)(e), () => {
  });
}
var L = { artifactRead: void 0, remaining: void 0, commit: () => {
  return;
} };
async function W7l(e, d, n, t) {
  try {
    let o = (0, import_chunk_0rkwgmhx.se)().pendingHandoverReads, r = o.get(e), s = d.agentId ?? "main";
    if (r === void 0 || n === void 0 || t.lineCount <= 0 || r.completedBy.has(s)) return L;
    if (Math.floor(t.mtimeMs) !== r.mtimeMs || t.totalLines !== r.totalLines) return (0, import_chunk_cqa9hrgx.l)("artifact_handover_read", "file_changed"), L;
    if (V(r, e, d)) return L;
    let g = [t.firstLine, t.firstLine + t.lineCount], b = await Z(e, r.bytes, r.contentHash);
    if (b === "changed") return o.delete(e), (0, import_chunk_cqa9hrgx.l)("artifact_handover_read", "file_changed"), L;
    if (b === "unreadable") (0, import_chunk_cqa9hrgx.l)("artifact_handover_read", "file_unreadable");
    let c = b === "holds", p = (r.linesPrepared.get(s) ?? []).filter((f) => f.messageId === n), C = B([...r.linesReturned.get(s) ?? [], ...p.map((f) => f.range), g]), P = E(C, r.requiredLines), y = { messageId: n, range: g };
    r.linesPrepared.set(s, [...p, y]);
    let x = () => {
      try {
        let f = r.linesPrepared.get(s) ?? [];
        if (o.get(e) !== r || r.completedBy.has(s) || !f.includes(y)) return;
        let H = f.filter((m) => m !== y);
        if (H.length > 0) r.linesPrepared.set(s, H);
        else r.linesPrepared.delete(s);
        let h = B([...r.linesReturned.get(s) ?? [], g]);
        if (!c || !E(h, r.requiredLines)) {
          r.linesReturned.set(s, h);
          return;
        }
        return r.linesReturned.delete(s), r.completedBy.add(s), Q(r, e, d, n, s) ? { slug: r.slug, ver: r.ver } : void 0;
      } catch (f) {
        (0, import_chunk_k449cc64.i)(f);
        return;
      }
    }, R = !r.unrecordableBy.has(s), v = R && r.handedTo.has(s) && !M(d, r.slug, r.ver);
    return { artifactRead: P && c && R ? { slug: r.slug, ver: r.ver } : void 0, remaining: P || !v ? void 0 : { ...k(e, r, d.agentId), unread: D(C, r.requiredLines) }, commit: x };
  } catch (o) {
    return (0, import_chunk_k449cc64.i)(o), L;
  }
}
function G(e, d) {
  let n = d.getArtifactReadObservation(e.slug).ver;
  return n !== void 0 && n !== e.ver && ((0, import_chunk_s12kntv9.d4)(n, e.ver) ?? 0) > 0;
}
function V(e, d, n) {
  if (G(e, n)) return (0, import_chunk_0rkwgmhx.se)().pendingHandoverReads.delete(d), (0, import_chunk_cqa9hrgx.l)("artifact_handover_read", "superseded"), true;
  return false;
}
function B(e) {
  let d = e.map((t) => [t[0], t[1]]).sort((t, o) => t[0] - o[0]), n = [];
  for (let t of d) {
    let o = n.at(-1);
    if (o !== void 0 && t[0] <= o[1]) o[1] = Math.max(o[1], t[1]);
    else n.push(t);
  }
  return n;
}
function E(e, d) {
  let n = e[0];
  return n !== void 0 && n[0] <= 0 && n[1] >= d;
}
function j(e, d, n) {
  let t = (0, import_chunk_0rkwgmhx.se)().refusedPublishBodies.get((0, import_chunk_0rkwgmhx.z7)(d, e.slug)), o = e.confirmsResendFor.get(n);
  return o !== void 0 && (t === void 0 || t.batch !== o) ? void 0 : t;
}
function Q(e, d, n, t, o) {
  if (V(e, d, n)) return false;
  let r = j(e, n.agentId, o), s = r?.observedFrom;
  try {
    n.setArtifactReadVersion(e.slug, e.ver, (0, import_chunk_f2vegtjy.qpe)(n.agentId, t));
  } finally {
    if (r !== void 0) if (s === void 0) delete r.observedFrom;
    else r.observedFrom = s;
  }
  if (G$e(n.getArtifactReadObservation(e.slug), e.ver, o)) return (0, import_chunk_cqa9hrgx.u)("artifact_handover_read"), true;
  return e.unrecordableBy.add(o), (0, import_chunk_cqa9hrgx.l)("artifact_handover_read", "seed_not_persisted"), false;
}
async function Z(e, d, n) {
  try {
    return (await (0, import_promises.stat)(e)).size === d && (0, import_crypto.createHash)("sha256").update(await (0, import_promises.readFile)(e)).digest("hex") === n ? "holds" : "changed";
  } catch (t) {
    return (0, import_chunk_jv7av99m.J)(t) ? "changed" : "unreadable";
  }
}
