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
var chunk_51ftf0z7_exports = {};
__export(chunk_51ftf0z7_exports, {
  yBs: () => yBs
});
module.exports = __toCommonJS(chunk_51ftf0z7_exports);
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_2fxy1zey = require("/$bunfs/root/chunk-2fxy1zey.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_e15pxvhz = require("/$bunfs/root/chunk-e15pxvhz.js");
var import_chunk_cdgrg7dd = require("/$bunfs/root/chunk-cdgrg7dd.js");
var import_chunk_pqb914sj = require("/$bunfs/root/chunk-pqb914sj.js");
var import_chunk_ztgy6ctb = require("/$bunfs/root/chunk-ztgy6ctb.js");
var import_chunk_hw7myrmg = require("/$bunfs/root/chunk-hw7myrmg.js");
var import_chunk_fz3c96rq = require("/$bunfs/root/chunk-fz3c96rq.js");
var import_chunk_gtx7bw71 = require("/$bunfs/root/chunk-gtx7bw71.js");
var import_chunk_2tqq6ycx = require("/$bunfs/root/chunk-2tqq6ycx.js");
var import_chunk_4684b8fc = require("/$bunfs/root/chunk-4684b8fc.js");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
async function kt(t) {
  let e = (0, import_path.dirname)(t), i = [(0, import_path.basename)(t)];
  for (let r = 0; r < 64; r++) {
    try {
      let s = await (0, import_promises.realpath)(e);
      return (0, import_path.join)(s, ...i);
    } catch (s) {
      if (s?.code !== "ENOENT") return;
    }
    let n = (0, import_path.dirname)(e);
    if (n === e) return;
    i.unshift((0, import_path.basename)(e)), e = n;
  }
  return;
}
var St = 2e6, Et = /* @__PURE__ */ new Set(["100644", "100755", "100664"]), U = 1e7, yt = 1e4, Pt = { perFileMs: 5e3, totalMs: 1e4 }, Dt = import_chunk_fz3c96rq.h2o | (import_fs.constants.O_NOFOLLOW ?? 0);
function N(t) {
  if (t.length === 0 || t.startsWith('"')) return false;
  if (/[\u0000-\u001f\u007f\uFFFD]/.test(t)) return false;
  if (t.startsWith("-") || t.startsWith(":") || t.includes(" => ") || t.includes("\\") || !(0, import_chunk_e15pxvhz.IDn)(t)) return false;
  return t.split("/").every((e) => e !== "" && (0, import_chunk_2fxy1zey.x9)(e) !== ".");
}
function F(t) {
  if (!import_chunk_e15pxvhz.Las.test(t)) return t;
  let e = t.length > 1 && t.startsWith('"') && t.endsWith('"') && !t.includes('" => ');
  return (0, import_chunk_gtx7bw71.BPa)(e ? (0, import_chunk_e15pxvhz.lDe)(t.slice(1, -1)) : t);
}
var at = /^[0-9a-f]{40,64}$/;
function v(t) {
  return ["--literal-pathspecs", ...import_chunk_gd77dyw4.Nn, ...t];
}
function T(t, e) {
  return { ...e, cwd: t, timeout: import_chunk_e15pxvhz.Iq, preserveOutputOnError: false };
}
async function Rt(t, e, i, r) {
  let { stdout: n, code: s } = await (0, import_chunk_7fsmgfxx.ut)((0, import_chunk_w5s307zm.Ht)(), v(["ls-tree", "-r", "-l", "-z", "--full-tree", e, "--", ...i]), { ...T(t, r), maxBuffer: 1e7 });
  if (s !== 0) return null;
  let c = /* @__PURE__ */ new Map();
  for (let a of n.split("\0")) {
    if (!a) continue;
    let p = a.match(/^(\d{6}) (\S+) ([0-9a-f]{40,64}) +(\d+|-)\t(.+)$/s);
    if (!p) continue;
    let [, d = "", l, g = "", S, w] = p;
    if (w === void 0) continue;
    c.set(w, { mode: d, oid: g, size: l === "blob" && S !== "-" ? Number(S) : -1 });
  }
  return c;
}
async function _t(t, e, i) {
  let { stdout: r, code: n } = await (0, import_chunk_7fsmgfxx.ut)((0, import_chunk_w5s307zm.Ht)(), v(["ls-files", "--stage", "-v", "-z", "--", ...e]), { ...T(t, i), maxBuffer: 1e7 });
  if (n !== 0) return null;
  let s = /* @__PURE__ */ new Map();
  for (let c of r.split("\0")) {
    let a = c.match(/^(\S) (\d{6}) ([0-9a-f]{40,64}) (\d)\t(.+)$/s);
    if (!a) continue;
    let [, p = "", , d = "", l, g = ""] = a;
    s.set(g, { entryIsNewSide: l === "0" && (p === "S" || /[a-z]/.test(p)), oid: d });
  }
  return s;
}
function z(t, e) {
  let i = typeof t === "string" ? Buffer.from(t, "utf-8") : t;
  return (0, import_crypto.createHash)(e.length === 64 ? "sha256" : "sha1").update(`blob ${i.length}\0`).update(i).digest("hex");
}
function bt(t, e) {
  if (z(t, e) === e) return t;
  if (!t.includes(`\r
`)) return null;
  let i = t.replaceAll(`\r
`, `
`);
  return z(i, e) === e ? i : null;
}
async function vt(t, e, i) {
  if (!at.test(e)) return null;
  let { stdout: r, code: n } = await (0, import_chunk_7fsmgfxx.ut)((0, import_chunk_w5s307zm.Ht)(), v(["cat-file", "blob", e]), { ...T(t, i), maxBuffer: U + 65536, stripFinalNewline: false, encoding: "latin1" });
  if (n !== 0) return null;
  let s = Buffer.from(r, "latin1");
  return z(s, e) === e ? s.toString("utf-8") : null;
}
async function Tt(t, e, i) {
  let r;
  try {
    r = await (0, import_promises.open)(t, Dt);
  } catch (n) {
    return n?.code === "ENOENT" ? { kind: "missing" } : { kind: "restricted" };
  }
  try {
    let n = await r.stat({ bigint: true });
    if (!n.isFile()) return { kind: "not-regular-file" };
    if (n.nlink !== 1n || n.dev === 0n || n.ino === 0n) return { kind: "restricted" };
    let s;
    try {
      s = await (0, import_promises.realpath)(t);
    } catch {
      return { kind: "restricted" };
    }
    let c = await (0, import_chunk_xfj2cwfv.g6n)(r, n, s);
    if (c === void 0) return { kind: "restricted" };
    if (s = c, !(0, import_chunk_pqb914sj.R9e)(s, i).allowed || (0, import_chunk_p1ewvgeh.Ia)(s, i, "read", "ask") !== null) return { kind: "restricted" };
    if ((0, import_chunk_2tqq6ycx.r0)(s, i.trustedNetworkDirectories) !== void 0) return { kind: "restricted" };
    if (!await (0, import_chunk_fz3c96rq.OGr)(s, i)) return { kind: "restricted" };
    if (s !== e) return { kind: "off-path" };
    let a = await (0, import_chunk_xfj2cwfv.IE)(r, U, n.size);
    if (a.overLimit) return { kind: "too-large" };
    return { kind: "ok", content: a.bytes.toString("utf-8") };
  } catch {
    return { kind: "restricted" };
  } finally {
    await r.close().catch(() => {
    });
  }
}
async function H(t, e) {
  let i;
  try {
    i = await (0, import_promises.realpath)(t);
  } catch (r) {
    i = r?.code === "ENOENT" ? await kt(t) : void 0;
  }
  return i !== void 0 && (0, import_chunk_2tqq6ycx.r0)(i, e.trustedNetworkDirectories) === void 0 && await (0, import_chunk_fz3c96rq.OGr)(i, e);
}
function C(t, e) {
  let i = (0, import_chunk_2tqq6ycx.Nq)(t, t, e.trustedNetworkDirectories);
  return i.ok && i.pathsToCheck.every((r) => (0, import_chunk_pqb914sj.R9e)(r, e).allowed && (0, import_chunk_p1ewvgeh.Ia)(r, e, "read", "ask") === null);
}
async function Nt(t, e, i) {
  let { stdout: r, code: n } = await (0, import_chunk_7fsmgfxx.ut)((0, import_chunk_w5s307zm.Ht)(), v(["check-attr", "-z", "-a", "--", ...e]), { ...T(t, i), maxBuffer: 1e7 });
  if (n !== 0) return null;
  let s = new Map(e.map((a) => [a, { text: "unspecified", eol: "unspecified", converted: false }])), c = r.split("\0");
  for (let a = 0; a + 2 < c.length; a += 3) {
    let p = c[a], d = c[a + 1], l = c[a + 2];
    if (p === void 0 || d === void 0 || l === void 0) continue;
    let g = s.get(p);
    if (!g) continue;
    if (d === "text") g.text = l;
    else if (d === "eol") g.eol = l;
    else if (d === "filter" || d === "working-tree-encoding") g.converted = true;
  }
  return s;
}
async function Ft(t, e) {
  let { stdout: i, exitCode: r } = await (0, import_chunk_7fsmgfxx.ut)((0, import_chunk_w5s307zm.Ht)(), v(["config", "--get", "core.autocrlf"]), T(t, e));
  if (r !== 0) return false;
  let n = i.trim().toLowerCase();
  return n === "true" ? "true" : n === "input" ? "input" : false;
}
function Lt(t) {
  return t.slice(0, 8e3).includes("\0");
}
function At(t, e, i, r) {
  if (!e || e.converted) return "unsupported";
  if (e.text === "unset") return t;
  let n;
  if (e.text === "set") n = false;
  else if (e.text === "auto") n = true;
  else if (e.text === "unspecified") if (i === "true" || i === "input") n = true;
  else if (e.eol === "crlf" || e.eol === "lf") n = true;
  else return t;
  else return t;
  if (!t.includes(`\r
`)) return t;
  if (n && (Lt(t) || r.includes(`\r
`))) return t;
  return t.replaceAll(`\r
`, `
`);
}
function st(t, e, i) {
  let r = (0, import_chunk_4684b8fc.yae)("a", "b", t, e, "", "", { context: 3, maxEditLength: yt, timeout: i });
  if (!r) return null;
  return r.hunks.map((n) => ({ oldStart: n.oldStart, oldLines: n.oldLines, newStart: n.newStart, newLines: n.newLines, lines: n.lines.filter((s) => !s.startsWith("\\")) })).filter((n) => n.lines.length > 0);
}
function Ot(t) {
  let e = import_chunk_e15pxvhz.Lpr, i = [];
  for (let r of t) {
    if (e <= 0) break;
    let n = r.lines.slice(0, e);
    e -= n.length, i.push({ ...r, lines: n });
  }
  return i;
}
async function yBs(t, e, i = Pt) {
  let r = await (0, import_chunk_ztgy6ctb.nQn)();
  if (r === null) {
    let c = (0, import_chunk_hw7myrmg.wzr)(t);
    if (c.listed === null) return { diff: null, noDiffReason: c.noDiffReason };
    let a = c.listed;
    return await (0, import_chunk_hw7myrmg.sTa)(t, e, a, (p) => ot(t, e, i, a, a, p)) ?? { diff: null, noDiffReason: "no-repository" };
  }
  let n = r.nested ? r.root : null, s = n === null ? null : await (0, import_chunk_cdgrg7dd.bti)(n, t);
  if (n !== null && s === null) return { diff: null, noDiffReason: "repository-refused" };
  try {
    return await ot(t, e, i, r.root, n, s?.spawn);
  } finally {
    await s?.dispose();
  }
}
async function ot(t, e, i, r, n, s) {
  let c = n ?? void 0, a = s ?? {}, p = "diff-failed", d = await (0, import_chunk_e15pxvhz.Npr)(t, void 0, "branch-point", c, s, (o) => {
    p = o;
  });
  if (d === null) return { diff: null, noDiffReason: p };
  let l = n ?? await (0, import_chunk_e15pxvhz.$pr)();
  if (l === null || l !== r) return { diff: null, noDiffReason: "root-moved" };
  let g = (0, import_chunk_e15pxvhz.PDn)(d), S = /* @__PURE__ */ new Map();
  for (let [o, u] of d.perFileStats) {
    let f = d.replacedRows?.get(o);
    if (f !== void 0 && !f[1].isBinary && N(f[1].newPath ?? f[0])) {
      let m = u.previousPath;
      if (u.isBinary || m === void 0 || !N(m) || !C((0, import_path.join)(l, m), e) || !await H((0, import_path.join)(l, m), e)) S.set(...f);
    }
    S.set(o, u);
  }
  let w = (o) => ({ diff: { stats: d.stats, perFileStats: Array.from(S, ([u, f]) => ({ path: F(u), ...f })), omitted: d.omitted, hunks: o.hunks.map((u) => ({ ...u, path: F(u.path) })), skippedLarge: o.skippedLarge.map(F), restricted: o.restricted.map(F), source: d.source, rootId: (0, import_chunk_ztgy6ctb.jzr)(r) } }), R = [];
  for (let [o, u] of S) {
    let f = u.newPath ?? o, m = u.previousPath ?? f;
    if (u.status === void 0 || u.isUntracked || u.isBinary || !N(m) || !N(f)) continue;
    R.push({ key: o, oldPath: m, newPath: f, removed: u.status === "removed" });
  }
  if (R.length === 0) return w({ hunks: [], skippedLarge: [], restricted: [] });
  let j = g === "--cached";
  if (!j && g !== "HEAD" && !at.test(g)) return w({ hunks: [], skippedLarge: [], restricted: [] });
  let K = R.map((o) => o.newPath), [X, J] = await Promise.all([j ? /* @__PURE__ */ new Map() : Rt(l, g, R.map((o) => o.oldPath), a), _t(l, K, a)]);
  if (X === null || J === null) return w({ hunks: [], skippedLarge: [], restricted: [] });
  let Y;
  try {
    Y = await (0, import_promises.realpath)(l);
  } catch {
    return w({ hunks: [], skippedLarge: [], restricted: [] });
  }
  let lt = await Nt(l, K, a), ft = await Ft(l, a), E = [], y = [], q = [], Z = St, A = i.totalMs;
  for (let { key: o, oldPath: u, newPath: f, removed: m } of R) {
    await new Promise((P) => setImmediate(P));
    let Q = (0, import_path.join)(l, f), O = (0, import_path.join)(l, u);
    if (!C(Q, e) || u !== f && !C(O, e)) {
      y.push(o);
      continue;
    }
    let h = X.get(u);
    if (h && !Et.has(h.mode)) continue;
    let G = u !== f && d.replacedRows?.has(o) === true, M = h !== void 0 && (h.size < 0 || h.size > U);
    if (M && !G) {
      E.push(o);
      continue;
    }
    let I = null, _ = J.get(f);
    if (_ === void 0 && !h) {
      y.push(o);
      continue;
    }
    let k = m || _ === void 0 ? { kind: "missing" } : await Tt(Q, (0, import_path.join)(Y, f), e);
    if (k.kind === "restricted") {
      y.push(o);
      continue;
    }
    if (k.kind === "not-regular-file" || k.kind === "off-path") continue;
    if (k.kind === "too-large") {
      E.push(o);
      continue;
    }
    let V = _?.entryIsNewSide && k.kind === "ok" ? bt(k.content, _.oid) : null;
    if (_?.entryIsNewSide && V === null) continue;
    if (k.kind === "missing") {
      if (!h) continue;
      if (!await H(O, e)) {
        y.push(o);
        continue;
      }
      if (M) {
        E.push(o);
        continue;
      }
    } else if (I = k.content, h && u !== f && !await H(O, e)) {
      y.push(o);
      continue;
    }
    if (A <= 0) {
      E.push(o);
      continue;
    }
    let tt = h && !M ? await vt(l, h.oid, a) : "";
    if (tt === null && !G) continue;
    let B = tt ?? "", b;
    if (I === null) b = "";
    else {
      let P = At(I, lt?.get(f), ft, B);
      if (P === "unsupported") continue;
      b = V ?? P;
    }
    let ct = Date.now(), et = Math.min(i.perFileMs, A), nt = st(B, b, et) ?? (G && B !== "" && b !== "" ? st("", b, et) : null);
    if (A -= Date.now() - ct, nt === null) {
      E.push(o);
      continue;
    }
    let x = Ot(nt);
    if (x.length === 0) continue;
    let W = x.reduce((P, dt) => P + dt.lines.reduce((pt, gt) => pt + gt.length + 1, 0), 0);
    if (W > import_chunk_e15pxvhz.aao || W > Z) {
      E.push(o);
      continue;
    }
    Z -= W, q.push({ path: o, hunks: x });
  }
  return w({ hunks: q, skippedLarge: E, restricted: y });
}
