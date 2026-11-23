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
var chunk_9nypk94f_exports = {};
__export(chunk_9nypk94f_exports, {
  FOa: () => FOa,
  NOa: () => NOa,
  cTn: () => cTn
});
module.exports = __toCommonJS(chunk_9nypk94f_exports);
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_hsqa3g9e = require("/$bunfs/root/chunk-hsqa3g9e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cq1312e8 = require("/$bunfs/root/chunk-cq1312e8.js");
var import_chunk_zsqk76p8 = require("/$bunfs/root/chunk-zsqk76p8.js");
var import_chunk_nbyg4q5d = require("/$bunfs/root/chunk-nbyg4q5d.js");
var import_chunk_hnt4bwpe = require("/$bunfs/root/chunk-hnt4bwpe.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_path = require("path");
function v(e, r, a, s, i) {
  let { head: o, tail: t, mtime: n, size: d } = r, c = o.indexOf(`
`), u = c >= 0 ? o.slice(0, c) : o;
  if (u.includes('"isSidechain":true') || u.includes('"isSidechain": true')) return null;
  let l = (0, import_chunk_q3a5dy2r.kee)(t, "custom-title") || s || (0, import_chunk_q3a5dy2r.kee)(o, "custom-title") || (0, import_chunk_q3a5dy2r.kee)(t, "ai-title") || (0, import_chunk_q3a5dy2r.kee)(o, "ai-title") || void 0, f = (0, import_chunk_q3a5dy2r.h8i)(o) || void 0, m = (0, import_chunk_q3a5dy2r.TPe)(o, "timestamp"), g;
  if (m) {
    let P = Date.parse(m);
    if (!Number.isNaN(P)) g = P;
  }
  let w = l || (0, import_chunk_q3a5dy2r.JNe)(t, "lastPrompt") || (0, import_chunk_q3a5dy2r.JNe)(t, "summary") || f || (0, import_chunk_q3a5dy2r.g8i)(o);
  if (!w) return null;
  let y = (0, import_chunk_q3a5dy2r.kct)(t, "gitBranch") || (0, import_chunk_q3a5dy2r.TPe)(o, "gitBranch") || void 0, p = (0, import_chunk_q3a5dy2r.NX)(t, "relocated", "relocatedCwd") || (0, import_chunk_q3a5dy2r.TPe)(o, "cwd") || a || void 0, h = (0, import_chunk_q3a5dy2r.kee)(t, "tag") || void 0;
  return { sessionId: e, summary: w, lastModified: n, fileSize: d, customTitle: l, firstPrompt: f, gitBranch: y, cwd: p, tag: h, createdAt: g, archived: (0, import_chunk_zsqk76p8.gso)(i, r) };
}
function B(e) {
  let r = (0, import_chunk_hsqa3g9e.ume)(e);
  return r !== void 0 && (0, import_chunk_hkvzj051.Ao)(r) ? r : void 0;
}
function j(e) {
  return { pagesLeft: import_chunk_hnt4bwpe.pS + e };
}
async function cTn(e, r, a, s, i, o) {
  let t = (0, import_chunk_m15w38ag.ne)() && s !== void 0 ? B(e) : void 0;
  if (s !== void 0 && t !== void 0) {
    let c = /* @__PURE__ */ new Map();
    try {
      await (0, import_chunk_hnt4bwpe.Nd)((u) => s.listEntries({ namespace: "transcript", projectKey: t }, { skipScopeStats: true, ...r ? {} : { skipKeyStats: true }, ...u !== void 0 && { cursor: u } }), (u) => {
        for (let l of u) {
          if (l.kind !== "key" || l.key.namespace !== "transcript") continue;
          let f = (0, import_chunk_q3a5dy2r.cB)(l.key.sessionId);
          if (!f) continue;
          if (r && l.mtimeMs === void 0) continue;
          let m = r ? Math.trunc(l.mtimeMs ?? 0) : 0, g = c.get(f);
          if (g !== void 0) {
            if (m > g.mtime) g.mtime = m;
            continue;
          }
          c.set(f, { sessionId: f, filePath: (0, import_path.join)(e, `${l.key.sessionId}.jsonl`), mtime: m, projectPath: a, ownWorktrees: o });
        }
      }, i !== void 0 ? { budget: i } : void 0);
    } catch {
    }
    return [...c.values()];
  }
  let n;
  try {
    n = await (0, import_promises.readdir)(e);
  } catch {
    return [];
  }
  return (await Promise.all(n.map(async (c) => {
    if (!c.endsWith(".jsonl")) return null;
    let u = (0, import_chunk_q3a5dy2r.cB)(c.slice(0, -6));
    if (!u) return null;
    let l = (0, import_path.join)(e, c);
    if (!r) return { sessionId: u, filePath: l, mtime: 0, projectPath: a, ownWorktrees: o };
    try {
      let f = await (0, import_promises.stat)(l);
      return { sessionId: u, filePath: l, mtime: f.mtime.getTime(), projectPath: a, ownWorktrees: o };
    } catch {
      return null;
    }
  }))).filter((c) => c !== null);
}
async function L(e, r, a) {
  let s = await (0, import_chunk_q3a5dy2r.Nhe)(e.filePath, (0, import_chunk_nbyg4q5d.zv)((0, import_chunk_nbyg4q5d.B_)(e.filePath, a)));
  if (!s) return null;
  if (!r && (0, import_chunk_q3a5dy2r.m8i)(s.head, s.tail)) return null;
  let i = (0, import_chunk_zsqk76p8.Ffr)(s.tail);
  if (i !== void 0 && await (0, import_chunk_zsqk76p8._so)(e.filePath, i, a)) return null;
  let [o, t] = await Promise.all([(0, import_chunk_q3a5dy2r.kee)(s.tail, "custom-title") === void 0 ? (0, import_chunk_zsqk76p8.Sso)(e.filePath, e.sessionId, a) : void 0, (0, import_chunk_zsqk76p8.DHn)(e.filePath, e.sessionId, a)]), n = v(e.sessionId, s, e.projectPath, o, t);
  if (!n) return null;
  let d = (0, import_chunk_q3a5dy2r.NX)(s.tail, "relocated", "relocatedCwd") ?? (0, import_chunk_q3a5dy2r.Dhe)(s.head, "cwd");
  if (d !== void 0 && e.projectPath !== void 0 && !(0, import_chunk_q3a5dy2r.oVn)(d, e.ownWorktrees, (0, import_chunk_q3a5dy2r.Nke)()) && await (0, import_chunk_q3a5dy2r.rVn)(d, e.projectPath, (0, import_chunk_q3a5dy2r.Nke)(), import_chunk_w578pjby.qft, (0, import_chunk_nbyg4q5d.kR)(a))) return null;
  if (e.mtime) n.lastModified = e.mtime;
  return n;
}
var b = 32;
async function NOa(e, r, a) {
  let s = await cTn(e, false, void 0, a);
  for (let i = 0; i < s.length; i += b) {
    let t = (await Promise.all(s.slice(i, i + b).map(async (n) => {
      let d = await (0, import_chunk_q3a5dy2r.Nhe)(n.filePath, (0, import_chunk_nbyg4q5d.zv)((0, import_chunk_nbyg4q5d.B_)(n.filePath, a)));
      return d !== null && (0, import_chunk_zsqk76p8.Ffr)(d.tail) === r && await (0, import_chunk_zsqk76p8.$fr)(n.filePath, d.head, d.tail, d.size, a) ? n.filePath : void 0;
    }))).find((n) => n !== void 0);
    if (t !== void 0) return t;
  }
  return;
}
function N(e, r) {
  if (r.mtime !== e.mtime) return r.mtime - e.mtime;
  return r.sessionId < e.sessionId ? -1 : r.sessionId > e.sessionId ? 1 : 0;
}
async function A(e, r, a, s, i) {
  e.sort(N);
  let o = [], t = r && r > 0 ? r : 1 / 0, n = 0, d = /* @__PURE__ */ new Set();
  for (let c = 0; c < e.length && o.length < t; ) {
    let u = Math.min(c + b, e.length), l = e.slice(c, u), f = await Promise.all(l.map((m) => L(m, s, i)));
    for (let m = 0; m < f.length && o.length < t; m++) {
      c++;
      let g = f[m];
      if (!g) continue;
      if (d.has(g.sessionId)) continue;
      if (d.add(g.sessionId), n < a) {
        n++;
        continue;
      }
      o.push(g);
    }
  }
  return o;
}
async function D(e, r, a) {
  let s = await Promise.all(e.map((t) => L(t, r, a))), i = /* @__PURE__ */ new Map();
  for (let t of s) {
    if (!t) continue;
    let n = i.get(t.sessionId);
    if (!n || t.lastModified > n.lastModified) i.set(t.sessionId, t);
  }
  let o = [...i.values()];
  return o.sort((t, n) => n.lastModified !== t.lastModified ? n.lastModified - t.lastModified : n.sessionId < t.sessionId ? -1 : n.sessionId > t.sessionId ? 1 : 0), o;
}
async function F(e, r, a, s, i) {
  let t = i !== void 0 && i.hoverRestOn && e.length > 1 ? { ...i, source: (0, import_chunk_q3a5dy2r.jPo)(i.source) } : i, n = [], d = /* @__PURE__ */ new Set();
  for (let l of e) for (let f of await (0, import_chunk_q3a5dy2r.Fke)(l, t, a)) {
    let m = f;
    if (!d.has(m)) d.add(m), n.push({ projectDir: f, projectPath: l });
  }
  let c = j(n.length), u = [];
  for (let { projectDir: l, projectPath: f } of n) u.push(...await cTn(l, r, f, s, c));
  return u;
}
async function T(e, r, a, s, i) {
  let o = await (0, import_chunk_q3a5dy2r.vw)(e, (0, import_chunk_nbyg4q5d.kR)(i)), t = (0, import_chunk_nbyg4q5d.zv)((0, import_chunk_nbyg4q5d.s0)(i)), n = (0, import_chunk_q3a5dy2r.vOs)(e, o), d;
  if (r) try {
    d = await (0, import_chunk_cq1312e8.AGt)(o);
  } catch {
    d = [];
  }
  else d = [];
  if (d.length <= 1) return F(n, a, s, i, t);
  let c = false, u = d.map((p) => {
    let h = (0, import_chunk_q3a5dy2r.sO)(p), P = c ? h.toLowerCase() : h;
    return { path: p, exactName: P, truncatedPrefix: h.length > import_chunk_q3a5dy2r.Roe ? P.slice(0, import_chunk_q3a5dy2r.Roe) : void 0 };
  });
  u.sort((p, h) => h.exactName.length - p.exactName.length);
  let l = t !== void 0 && t.hoverRestOn ? await (0, import_chunk_q3a5dy2r.GPo)(t.source) : null, f = l;
  if (f === null) {
    let p;
    try {
      p = await (0, import_promises.readdir)(s, { withFileTypes: true });
    } catch {
      return F(n, a, s, i, void 0);
    }
    f = p.filter((h) => h.isDirectory()).map((h) => h.name);
  }
  let m = [], g = /* @__PURE__ */ new Set(), w = j(f.length + n.length), y = [...n, ...d];
  for (let p of n) {
    let h = t !== void 0 && t.hoverRestOn && l !== null ? await (0, import_chunk_q3a5dy2r.TOs)(p, l, c, t) : await (0, import_chunk_q3a5dy2r.Fke)(p, void 0, s);
    for (let P of h) {
      let C = (0, import_path.basename)(P), S = c ? C.toLowerCase() : C;
      if (g.has(S)) continue;
      g.add(S), m.push(...await cTn(P, a, p, i, w, y));
    }
  }
  for (let p of f) {
    let h = c ? p.toLowerCase() : p;
    if (g.has(h)) continue;
    for (let { path: P, exactName: C, truncatedPrefix: S } of u) if (h === C || S !== void 0 && h.startsWith(S + "-") && await (0, import_chunk_q3a5dy2r.pVt)((0, import_path.join)(s, p), P, c, t)) {
      g.add(h), m.push(...await cTn((0, import_path.join)(s, p), a, P, i, w, y));
      break;
    }
  }
  return m;
}
async function H(e, r, a) {
  let s = (0, import_chunk_nbyg4q5d.s0)(a), i = s !== void 0 ? await (0, import_chunk_q3a5dy2r.GPo)(s) : null;
  if (i === null) {
    let n;
    try {
      n = await (0, import_promises.readdir)(r, { withFileTypes: true });
    } catch {
      return [];
    }
    i = n.filter((d) => d.isDirectory()).map((d) => d.name);
  }
  let o = j(i.length);
  return (await Promise.all(i.map((n) => cTn((0, import_path.join)(r, n), e, void 0, a, o)))).flat();
}
async function FOa(e, r, a = (0, import_chunk_q3a5dy2r.Em)()) {
  let s = (0, import_chunk_m15w38ag.ne)() ? r : void 0, { dir: i, limit: o, offset: t, includeWorktrees: n, includeProgrammatic: d } = e ?? {}, c = t ?? 0, u = d ?? true, l = o !== void 0 && o > 0 || c > 0, f = i ? await T(i, n ?? true, l, a, s) : await H(l, a, s);
  if (!l) return D(f, u, s);
  return A(f, o, c, u, s);
}
