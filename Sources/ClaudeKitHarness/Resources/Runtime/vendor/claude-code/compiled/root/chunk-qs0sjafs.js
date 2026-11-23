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
var chunk_qs0sjafs_exports = {};
__export(chunk_qs0sjafs_exports, {
  A$o: () => A$o,
  B5t: () => B5t,
  C$o: () => C$o,
  DWs: () => DWs,
  HWs: () => HWs,
  IWs: () => IWs,
  LWs: () => LWs,
  MWs: () => MWs,
  NWs: () => NWs,
  OWs: () => OWs,
  R$o: () => R$o,
  T$o: () => T$o,
  U5t: () => U5t,
  W5t: () => W5t,
  qOt: () => qOt,
  x$o: () => x$o
});
module.exports = __toCommonJS(chunk_qs0sjafs_exports);
var import_chunk_7r4ehpnw = require("/$bunfs/root/chunk-7r4ehpnw.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8c111j67 = require("/$bunfs/root/chunk-8c111j67.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_5h92z04c = require("/$bunfs/root/chunk-5h92z04c.js");
var import_chunk_6n6exvyx = require("/$bunfs/root/chunk-6n6exvyx.js");
var import_chunk_dfcadv0m = require("/$bunfs/root/chunk-dfcadv0m.js");
var import_chunk_gp23aqt9 = require("/$bunfs/root/chunk-gp23aqt9.js");
var import_chunk_8mxqzyge = require("/$bunfs/root/chunk-8mxqzyge.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_0t7st4dz = require("/$bunfs/root/chunk-0t7st4dz.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function U5t(i, t) {
  let s = (a) => (0, import_chunk_865at33z.Y_)(a) ?? (0, import_chunk_865at33z.Mm)(a);
  if (t != null) return `${i == null ? "" : `${s(i)} `}${import_chunk_xcgcdx61.L1l} ${s(t)}`;
  return i != null ? s(i) : "";
}
function Lt(ee) {
  return ee.state === "done";
}
function $t(ve) {
  return ve.state === "error";
}
function Dt(it) {
  return it.state === "start" || it.state === "progress";
}
function It(B) {
  return B.state === "done";
}
function Et(W) {
  return W.state === "error";
}
function Nt(B, W) {
  return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: B }, W);
}
function T$o(i) {
  let t = /* @__PURE__ */ new Map(), s = [], a = /* @__PURE__ */ new Map();
  for (let n of i) if (n.type === "workflow_agent") t.set(n.index, n);
  else if (n.type === "workflow_log") s.push(n.message);
  else if (n.type === "workflow_phase") a.set(n.index, { title: n.title, kind: n.kind });
  return { agents: [...t.values()].sort((n, d) => n.index - d.index), logs: s, phaseTitles: a };
}
function ae(i, t) {
  if (!i.some((a) => a.phaseIndex != null)) return null;
  let s = /* @__PURE__ */ new Map();
  for (let a of i) {
    let n = a.phaseIndex ?? 0, d = s.get(n);
    if (!d) {
      let u = t.get(n);
      d = { phaseIndex: n, title: u?.title ?? `Phase ${n}`, kind: u?.kind, agents: [] }, s.set(n, d);
    }
    d.agents.push(a);
  }
  return [...s.values()].sort((a, n) => a.phaseIndex - n.phaseIndex);
}
function K(i) {
  let m = (0, import_chunk_sng02qpc.k)(31), { row: t, isLast: s } = i, a = s ? "\u2514\u2500" : "\u251C\u2500", n = t.state === "start" || t.state === "progress", d;
  u: switch (t.state) {
    case "done": {
      d = "success";
      break u;
    }
    case "error": {
      d = "error";
      break u;
    }
    case "start":
    case "progress": {
      d = "running";
    }
  }
  let c;
  if (m[0] !== n || m[1] !== t.agentType || m[2] !== t.durationMs || m[3] !== t.fallbackModel || m[4] !== t.model || m[5] !== t.tokens || m[6] !== t.toolCalls) {
    c = [];
    if (t.agentType != null) c.push(t.agentType);
    if (t.model != null || t.fallbackModel != null) {
      let l2;
      if (m[8] !== t.fallbackModel || m[9] !== t.model) l2 = U5t(t.model, t.fallbackModel), m[8] = t.fallbackModel, m[9] = t.model, m[10] = l2;
      else l2 = m[10];
      c.push(l2);
    }
    if (t.tokens != null) {
      let l2;
      if (m[11] !== t.tokens) l2 = (0, import_chunk_f64qna2j.go)(t.tokens), m[11] = t.tokens, m[12] = l2;
      else l2 = m[12];
      c.push(`${l2} tokens`);
    }
    if (t.toolCalls != null && t.toolCalls > 0) {
      const l2 = t.toolCalls;
      let f2;
      if (m[13] !== t.toolCalls) f2 = (0, import_chunk_7cfjrnwy.O)(t.toolCalls, "tool"), m[13] = t.toolCalls, m[14] = f2;
      else f2 = m[14];
      c.push(`${l2} ${f2}`);
    }
    if (t.durationMs != null) {
      let l2;
      if (m[15] !== t.durationMs) l2 = (0, import_chunk_f64qna2j.Cn)(t.durationMs), m[15] = t.durationMs, m[16] = l2;
      else l2 = m[16];
      c.push(l2);
    }
    if (n && c.length === 0) c.push("\u2026running");
    m[0] = n, m[1] = t.agentType, m[2] = t.durationMs, m[3] = t.fallbackModel, m[4] = t.model, m[5] = t.tokens, m[6] = t.toolCalls, m[7] = c;
  } else c = m[7];
  let l;
  if (m[17] !== d) l = (0, import_chunk_a46xeenj.e)(import_chunk_5h92z04c.ln, { status: d }), m[17] = d, m[18] = l;
  else l = m[18];
  const f = t.label;
  let p;
  if (m[19] !== c) p = c.length > 0 && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["  ", c.join(" \xB7 ")] }), m[19] = c, m[20] = p;
  else p = m[20];
  let h;
  if (m[21] !== t.error || m[22] !== t.state) h = t.state === "error" && t.error && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: "error", children: [" ", "\u2014", " ", t.error] }), m[21] = t.error, m[22] = t.state, m[23] = h;
  else h = m[23];
  let w;
  if (m[24] !== n || m[25] !== t.label || m[26] !== l || m[27] !== p || m[28] !== h || m[29] !== a) w = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: 1, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: n, children: [a, " ", l, " ", f, p, h] }) }), m[24] = n, m[25] = t.label, m[26] = l, m[27] = p, m[28] = h, m[29] = a, m[30] = w;
  else w = m[30];
  return w;
}
function we(i) {
  let n = (0, import_chunk_sng02qpc.k)(41), { group: t, verbose: s, width: a } = i, d;
  if (n[0] !== t.agents) d = t.agents.filter(Lt), n[0] = t.agents, n[1] = d;
  else d = n[1];
  let u = d, m, c, l, f, p;
  if (n[2] !== u.length || n[3] !== t.agents || n[4] !== s) {
    let h = t.agents.filter($t);
    let w = t.agents.filter(Dt);
    p = t.agents.length;
    c = u.length;
    l = h.length;
    m = c + l === p && p > 0;
    f = s ? t.agents : [...h, ...w];
    n[2] = u.length, n[3] = t.agents, n[4] = s, n[5] = m, n[6] = c, n[7] = l, n[8] = f, n[9] = p;
  } else m = n[5], c = n[6], l = n[7], f = n[8], p = n[9];
  let b = f, C = t.agents[0]?.model, P;
  if (n[10] !== C || n[11] !== t.agents) P = C && t.agents.every((V) => V.model === C) ? U5t(C, void 0) : void 0, n[10] = C, n[11] = t.agents, n[12] = P;
  else P = n[12];
  let M = P, B = !m ? "running" : l > 0 ? "error" : "success";
  const W = t.kind === "child" ? "permission" : "subtle";
  let F;
  if (n[13] !== t.title) F = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: t.title }), n[13] = t.title, n[14] = F;
  else F = n[14];
  let _;
  if (n[15] !== B) _ = (0, import_chunk_a46xeenj.e)(import_chunk_5h92z04c.ln, { status: B }), n[15] = B, n[16] = _;
  else _ = n[16];
  const j = M && ` \xB7 ${M}`;
  let L;
  if (n[17] !== l) L = l > 0 && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: "error", children: [" ", "\xB7", " ", l, " failed"] }), n[17] = l, n[18] = L;
  else L = n[18];
  let z;
  if (n[19] !== c || n[20] !== j || n[21] !== L || n[22] !== p) z = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [c, "/", p, j, L] }), n[19] = c, n[20] = j, n[21] = L, n[22] = p, n[23] = z;
  else z = n[23];
  let X;
  if (n[24] !== F || n[25] !== _ || n[26] !== z) X = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingX: 1, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [F, "  ", _, " ", z] }) }), n[24] = F, n[25] = _, n[26] = z, n[27] = X;
  else X = n[27];
  let D;
  if (n[28] !== c || n[29] !== s) D = !s && c > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: 1, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [(0, import_chunk_a46xeenj.e)(import_chunk_5h92z04c.ln, { status: "success" }), " ", c, " done"] }) }), n[28] = c, n[29] = s, n[30] = D;
  else D = n[30];
  let I;
  if (n[31] !== b) {
    let v2;
    if (n[33] !== b.length) v2 = (Y, ce) => (0, import_chunk_a46xeenj.e)(K, { row: Y, isLast: ce === b.length - 1 }, Y.index), n[33] = b.length, n[34] = v2;
    else v2 = n[34];
    I = b.map(v2);
    n[31] = b, n[32] = I;
  } else I = n[32];
  let v;
  if (n[35] !== X || n[36] !== D || n[37] !== I || n[38] !== W || n[39] !== a) v = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", borderStyle: "single", borderColor: W, alignSelf: "flex-start", width: a, children: [X, D, I] }), n[35] = X, n[36] = D, n[37] = I, n[38] = W, n[39] = a, n[40] = v;
  else v = n[40];
  return v;
}
var Ge = 8;
function be(i) {
  let a = (0, import_chunk_sng02qpc.k)(26), { agents: t, verbose: s } = i, n;
  if (a[0] !== t || a[1] !== s) n = s ? t : t.slice(-Ge), a[0] = t, a[1] = s, a[2] = n;
  else n = a[2];
  let d = n, u = t.length - d.length, m;
  if (a[3] !== t) m = (0, import_chunk_4smdap7r.U)(t, It), a[3] = t, a[4] = m;
  else m = a[4];
  let c = m, l = (0, import_chunk_4smdap7r.U)(t, Et);
  const f = t.length;
  let p;
  if (a[5] !== t.length) p = (0, import_chunk_7cfjrnwy.O)(t.length, "agent"), a[5] = t.length, a[6] = p;
  else p = a[6];
  let h;
  if (a[7] !== l) h = l > 0 && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: "error", children: [" ", "\xB7", " ", l, " failed"] }), a[7] = l, a[8] = h;
  else h = a[8];
  let w;
  if (a[9] !== t.length || a[10] !== c || a[11] !== p || a[12] !== h) w = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [f, " ", p, " ", "\xB7", " ", c, " done", h] }), a[9] = t.length, a[10] = c, a[11] = p, a[12] = h, a[13] = w;
  else w = a[13];
  let b;
  if (a[14] !== u || a[15] !== d) {
    let C2;
    if (a[17] !== u || a[18] !== d.length) C2 = (P, V) => (0, import_chunk_a46xeenj.e)(K, { row: P, isLast: V === d.length - 1 && u === 0 }, P.index), a[17] = u, a[18] = d.length, a[19] = C2;
    else C2 = a[19];
    b = d.map(C2);
    a[14] = u, a[15] = d, a[16] = b;
  } else b = a[16];
  let C;
  if (a[20] !== u) C = u > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: 1, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["\u2514\u2500 \xB7 \xB7 \xB7 +", u, " more"] }) }), a[20] = u, a[21] = C;
  else C = a[21];
  let M;
  if (a[22] !== w || a[23] !== b || a[24] !== C) M = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [w, b, C] }), a[22] = w, a[23] = b, a[24] = C, a[25] = M;
  else M = a[25];
  return M;
}
function OWs(i) {
  let m = (0, import_chunk_sng02qpc.k)(18), { collected: t, verbose: s, width: a } = i, { agents: n, logs: d, phaseTitles: u } = t;
  if (n.length === 0 && d.length === 0) {
    return null;
  }
  let c, l, f, p, h;
  if (m[0] !== n || m[1] !== d || m[2] !== u || m[3] !== s || m[4] !== a) {
    let w = ae(n, u);
    let b2;
    if (m[10] !== d) b2 = d.at(-1), m[10] = d, m[11] = b2;
    else b2 = m[11];
    let C = b2;
    let P = d.slice(-3, -1);
    c = import_chunk_ee10yhqw.Q;
    l = true;
    f = C && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { marginBottom: w || n.length > 0 ? 1 : 0, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [import_chunk_7r4ehpnw.xe.pointer, " ", C] }) });
    p = w ? (0, import_chunk_a46xeenj.e)(import_chunk_ee10yhqw.Q, { compact: true, children: w.map((V, M) => (0, import_chunk_a46xeenj.o)(import_chunk_bs4h6795.nf, { children: [(0, import_chunk_a46xeenj.e)(we, { group: V, verbose: s, width: a }), M < w.length - 1 && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingLeft: 3, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "\u2193" }) })] }, V.phaseIndex)) }) : n.length > 0 ? (0, import_chunk_a46xeenj.e)(be, { agents: n, verbose: s }) : null;
    h = P.length > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", paddingLeft: 3, marginTop: 1, children: P.map(Nt) });
    m[0] = n, m[1] = d, m[2] = u, m[3] = s, m[4] = a, m[5] = c, m[6] = l, m[7] = f, m[8] = p, m[9] = h;
  } else c = m[5], l = m[6], f = m[7], p = m[8], h = m[9];
  let b;
  if (m[12] !== c || m[13] !== l || m[14] !== f || m[15] !== p || m[16] !== h) b = (0, import_chunk_a46xeenj.o)(c, { compact: l, children: [f, p, h] }), m[12] = c, m[13] = l, m[14] = f, m[15] = p, m[16] = h, m[17] = b;
  else b = m[17];
  return b;
}
(0, import_chunk_bs4h6795.G)();
function xo() {
  return Date.now();
}
var T = 4, Ve = 80;
function Te(i) {
  let t = (0, import_chunk_sng02qpc.k)(2), s;
  if (t[0] === import_chunk_w1d7ygsk.R) s = (0, import_chunk_xcgcdx61.SZi)(), t[0] = s;
  else s = t[0];
  let a = s, [n, d] = (0, import_chunk_bs4h6795.y)(0), u = (0, import_chunk_0t7st4dz.Kh)(), m;
  if (t[1] === import_chunk_w1d7ygsk.R) m = () => d((c) => (c + 1) % a.length), t[1] = m;
  else m = t[1];
  return (0, import_chunk_8bkqeb5d.Al)(m, i && !u ? Ve : null), a[n % a.length];
}
function Se(i) {
  let n = (0, import_chunk_sng02qpc.k)(14), { done: t, total: s, running: a } = i, d;
  if (n[0] !== t || n[1] !== s) d = s > 0 ? Math.round(t / s * T) : 0, n[0] = t, n[1] = s, n[2] = d;
  else d = n[2];
  let u = d, m = Math.min(a ? T - 1 : T, Math.max(0, u)), c = a ? Math.min(T - m, 1) : 0, l = T - m - c, f = Te(c > 0), p;
  if (n[3] !== m) p = m > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "success", children: import_chunk_xcgcdx61.jMo.repeat(m) }), n[3] = m, n[4] = p;
  else p = n[4];
  let h;
  if (n[5] !== f || n[6] !== c) h = c > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "success", children: f }), n[5] = f, n[6] = c, n[7] = h;
  else h = n[7];
  let w;
  if (n[8] !== l) w = l > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "subtle", dimColor: true, children: import_chunk_xcgcdx61.jMo.repeat(l) }), n[8] = l, n[9] = w;
  else w = n[9];
  let b;
  if (n[10] !== p || n[11] !== h || n[12] !== w) b = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: [p, h, w] }), n[10] = p, n[11] = h, n[12] = w, n[13] = b;
  else b = n[13];
  return b;
}
var C$o = 9, Ke = 12;
function A$o(i) {
  let d = (0, import_chunk_sng02qpc.k)(8), t = (0, import_chunk_6n6exvyx.qe)(), { rows: s, columns: a } = (0, import_chunk_6n6exvyx.Qo)(t), n = (0, import_chunk_6n6exvyx.rl)(), u;
  if (d[0] !== n || d[1] !== i || d[2] !== s) u = n ? s : (0, import_chunk_8c111j67.RH)() ? Math.floor(s / 2) : i ? Math.max(Ke, s - C$o) : s, d[0] = n, d[1] = i, d[2] = s, d[3] = u;
  else u = d[3];
  let m = u, c = n ? import_chunk_dfcadv0m.IF : import_chunk_dfcadv0m.wS, l = Math.max(24, a - 2 * c), f;
  if (d[4] !== m || d[5] !== s || d[6] !== l) f = { availableRows: m, width: l, rows: s }, d[4] = m, d[5] = s, d[6] = l, d[7] = f;
  else f = d[7];
  return f;
}
function B5t(i) {
  let n = (0, import_chunk_sng02qpc.k)(1), t = i.status === "running", [s, a] = (0, import_chunk_bs4h6795.y)(xo), d;
  if (n[0] === import_chunk_w1d7ygsk.R) d = () => a(Date.now()), n[0] = d;
  else d = n[0];
  return (0, import_chunk_8bkqeb5d.Al)(d, t ? 1e3 : null), Math.max(0, (i.endTime ?? s) - i.startTime - (i.totalPausedMs ?? 0));
}
var de = 17;
function R$o(i) {
  let P = (0, import_chunk_sng02qpc.k)(27), { index: t, title: s, done: a, total: n, status: d, selected: u } = i, m = u === void 0 ? false : u, c = d === "done", l = d === "failed", f = c || l, p = m ? "permission" : c ? "success" : l ? "error" : "inactive", h = m ? import_chunk_7r4ehpnw.xe.pointer : " ", w = c ? import_chunk_7r4ehpnw.xe.tick : l ? import_chunk_7r4ehpnw.xe.cross : String(t), b = (0, import_chunk_mgh1y10w.oe)(h) + 1 + (0, import_chunk_mgh1y10w.oe)(w) + 1, C = Math.max(1, de - b), V;
  if (P[0] !== s || P[1] !== C) V = (0, import_chunk_f64qna2j.Tt)(s, C), P[0] = s, P[1] = C, P[2] = V;
  else V = P[2];
  let M = V, B = `${h} ${w} ${M}`, W = Math.max(0, de - (0, import_chunk_mgh1y10w.oe)(B)), F = n > 0 ? `${a}/${n}` : "";
  const _ = m ? "permission" : void 0;
  let j;
  if (P[3] !== h || P[4] !== _) j = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: _, children: h }), P[3] = h, P[4] = _, P[5] = j;
  else j = P[5];
  let L;
  if (P[6] !== p || P[7] !== w) L = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: p, children: w }), P[6] = p, P[7] = w, P[8] = L;
  else L = P[8];
  const z = m ? "permission" : c ? "success" : l ? "error" : void 0, X = !m && !f;
  let D;
  if (P[9] !== M || P[10] !== z || P[11] !== X) D = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: z, dimColor: X, children: M }), P[9] = M, P[10] = z, P[11] = X, P[12] = D;
  else D = P[12];
  let I;
  if (P[13] !== W) I = " ".repeat(W), P[13] = W, P[14] = I;
  else I = P[14];
  let v;
  if (P[15] !== j || P[16] !== L || P[17] !== D || P[18] !== I) v = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { wrap: "truncate-end", children: [j, " ", L, " ", D, I] }), P[15] = j, P[16] = L, P[17] = D, P[18] = I, P[19] = v;
  else v = P[19];
  const Y = m ? "permission" : c ? "success" : l ? "error" : void 0, ce = !m && !f;
  let ee;
  if (P[20] !== F || P[21] !== Y || P[22] !== ce) ee = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { wrap: "truncate-end", color: Y, dimColor: ce, children: F }), P[20] = F, P[21] = Y, P[22] = ce, P[23] = ee;
  else ee = P[23];
  let ve;
  if (P[24] !== v || P[25] !== ee) ve = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { children: [v, ee] }), P[24] = v, P[25] = ee, P[26] = ve;
  else ve = P[26];
  return ve;
}
function x$o(i) {
  let l = (0, import_chunk_sng02qpc.k)(14), { done: t, total: s, running: a, complete: n, dotState: d, phaseText: u } = i, m = n ? ` \xB7 ${import_chunk_7r4ehpnw.xe.ellipsis} to view` : "", c = d === "failed" ? "error" : "success", f;
  if (l[0] !== c) f = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: c, children: import_chunk_xcgcdx61.Fc }), l[0] = c, l[1] = f;
  else f = l[1];
  let p;
  if (l[2] !== t || l[3] !== a || l[4] !== s) p = (0, import_chunk_a46xeenj.e)(Se, { done: t, total: s, running: a }), l[2] = t, l[3] = a, l[4] = s, l[5] = p;
  else p = l[5];
  const h = u ? ` \xB7 ${u}` : "", w = ` \xB7 ${t}/${s} agents`;
  let b;
  if (l[6] !== m || l[7] !== h || l[8] !== w) b = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: [h, w, m] }), l[6] = m, l[7] = h, l[8] = w, l[9] = b;
  else b = l[9];
  let C;
  if (l[10] !== f || l[11] !== p || l[12] !== b) C = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { wrap: "truncate-end", children: [f, " ", p, b] }), l[10] = f, l[11] = p, l[12] = b, l[13] = C;
  else C = l[13];
  return C;
}
function W5t(i) {
  let d = (0, import_chunk_sng02qpc.k)(13), { name: t, subtext: s, stats: a, width: n } = i, u;
  if (d[0] !== t) u = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, color: "permission", wrap: "truncate-end", children: t }), d[0] = t, d[1] = u;
  else u = d[1];
  let m;
  if (d[2] !== s) m = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexGrow: 1, flexShrink: 1, overflow: "hidden", children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, wrap: "truncate-end", children: s }) }), d[2] = s, d[3] = m;
  else m = d[3];
  let c;
  if (d[4] !== a) c = a ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, marginLeft: 2, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: a }) }) : null, d[4] = a, d[5] = c;
  else c = d[5];
  let l;
  if (d[6] !== m || d[7] !== c || d[8] !== n) l = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { width: n, overflow: "hidden", children: [m, c] }), d[6] = m, d[7] = c, d[8] = n, d[9] = l;
  else l = d[9];
  let f;
  if (d[10] !== u || d[11] !== l) f = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [u, l] }), d[10] = u, d[11] = l, d[12] = f;
  else f = d[12];
  return f;
}
function Me(i) {
  let t = (0, import_chunk_4smdap7r.U)(i.agents, (l) => l.state === "done"), s = (0, import_chunk_4smdap7r.U)(i.agents, (l) => l.state === "error" && !(0, import_chunk_8mxqzyge.Lqr)(l)), a = i.agents.length, n = t + s === a && a > 0, d = 0, u = 1 / 0, m = 0;
  for (let l of i.agents) {
    if (l.tokens) d += l.tokens;
    if (l.startedAt != null) {
      if (l.startedAt < u) u = l.startedAt;
      let f = l.lastProgressAt ?? l.startedAt;
      if (f > m) m = f;
    }
  }
  let c = u < 1 / 0 ? m - u : 0;
  return { title: i.title, status: n ? s > 0 ? "failed" : "done" : "running", agents: i.agents, doneCount: t, totalCount: a, tokens: d, durationMs: c };
}
function ko(i) {
  return { title: i, status: "not-started", agents: [], doneCount: 0, totalCount: 0, tokens: 0, durationMs: 0 };
}
function st(i) {
  return i.toLowerCase().trim();
}
function yo(i, t) {
  let s = st(i), a = st(t);
  if (!s || !a) return s === a;
  return s === a || s.startsWith(a) || a.startsWith(s);
}
function Co(i, t) {
  let s = /* @__PURE__ */ new Set(), a = [];
  function n(d) {
    for (let u of t) {
      if (s.has(u)) continue;
      if (yo(d, u.title)) return s.add(u), u;
    }
    return;
  }
  for (let d of i ?? []) {
    let u = n(d.title);
    a.push(u ? Me(u) : ko(d.title));
  }
  for (let d of t) if (!s.has(d)) a.push(Me(d));
  return a;
}
function IWs(i) {
  let t = T$o(i.workflowProgress), s = ae(t.agents, t.phaseTitles) ?? [], a = Co(i.phases, s);
  if (a.length === 0 && t.agents.length > 0) return [Me({ phaseIndex: 0, title: "Agents", agents: t.agents })];
  return a;
}
var ue = 16;
function MWs(i, t) {
  return null;
}
var at = ue + 8, Re = "aeiou", Po = /* @__PURE__ */ new Map([["commit", "committing"], ["submit", "submitting"], ["format", "formatting"], ["edit", "editing"], ["exit", "exiting"], ["setup", null], ["cleanup", null], ["init", null]]), To = /^[A-Za-z]{3,12}$/;
function So(i) {
  if (!To.test(i)) return i;
  let t = i.toLowerCase(), s = Po.get(t);
  if (s !== void 0) return s === null ? i : i[0] + s.slice(1);
  if (t.endsWith("ing")) return i;
  if (t.endsWith("ie")) return `${i.slice(0, -2)}ying`;
  if (t.endsWith("e") && !t.endsWith("ee") && !t.endsWith("ye")) return `${i.slice(0, -1)}ing`;
  let a = t.at(-1);
  if (t.length <= 4 && !Re.includes(t.at(-3)) && Re.includes(t.at(-2)) && !Re.includes(a) && !"wxy".includes(a)) return `${i}${a}ing`;
  return `${i}ing`;
}
var Ae = " & ";
function HWs(i) {
  let { titles: t, positionStart: s, totalPhases: a } = i, n = t.map((u) => So((0, import_chunk_7cfjrnwy.Wr)(u)));
  if (n.length === 1) return `${(0, import_chunk_f64qna2j.Tt)(n[0] ?? "", ue)} (${s}/${a})`;
  if (n.length === 2) {
    let u = n.map((c) => (0, import_chunk_f64qna2j.Tt)(c, ue)).join(Ae), m = Math.floor((at - Ae.length) / 2);
    return (0, import_chunk_mgh1y10w.oe)(u) <= at ? u : n.map((c) => (0, import_chunk_f64qna2j.Tt)(c, m)).join(Ae);
  }
  let d = ` +${n.length - 1}`;
  return (0, import_chunk_f64qna2j.Tt)(n[0] ?? "", ue - (0, import_chunk_mgh1y10w.oe)(d)) + d;
}
function DWs(i, t) {
  let s = 0, a = 0;
  for (let n of i) s += n.doneCount, a += n.totalCount;
  return { doneAgents: s, totalAgents: Math.max(t, a, s) };
}
function LWs(i) {
  if (i.script.length > 0) {
    let t = (0, import_chunk_gp23aqt9.gR)(i.script);
    if (!("error" in t) && t.meta.description) return t.meta.description;
  }
  return i.description || i.summary || "";
}
function NWs(i, t, s, a) {
  let n = i.status === "completed" ? " \xB7 done" : i.status === "killed" ? " \xB7 stopped" : i.status === "paused" ? " \xB7 paused" : (0, import_chunk_ed372ykp.$o)(i.status) ? " \xB7 failed" : "", d = i.status === "running" && i.rateLimitWait !== void 0 ? (0, import_chunk_gp23aqt9.z8a)(i.rateLimitWait) : t, u = `${s.doneAgents}/${s.totalAgents} ${(0, import_chunk_7cfjrnwy.O)(s.totalAgents, "agent")} \xB7 ${(0, import_chunk_f64qna2j.GAt)(a)}${n}`;
  return { name: i.workflowName ?? i.summary ?? i.description, subtext: d, stats: u };
}
function qOt(i, t = 0) {
  let s = 0, a = 0, n = 0, d = 0, u = false;
  for (let l of i) {
    if (l.type !== "workflow_agent") continue;
    if (s++, l.state === "done") a++, d++;
    else if (l.state === "error") n++, d++;
    else if (l.state === "start" || l.state === "progress") {
      if (u = true, (0, import_chunk_8mxqzyge.Uer)(l)) d++;
    }
  }
  let m = Math.max(t, s), c = !u && s > 0 && a + n >= m;
  return { done: a, failedCount: n, running: u, total: m, started: d, complete: c };
}
