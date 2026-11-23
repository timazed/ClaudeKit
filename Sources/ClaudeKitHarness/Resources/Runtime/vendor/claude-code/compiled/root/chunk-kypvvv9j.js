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
var chunk_kypvvv9j_exports = {};
__export(chunk_kypvvv9j_exports, {
  J8i: () => J8i,
  JDl: () => JDl,
  KXe: () => KXe,
  QDl: () => QDl,
  RIr: () => RIr,
  Tg: () => Tg,
  Whe: () => Whe,
  XN: () => XN,
  ZDl: () => ZDl,
  e0l: () => e0l,
  ihn: () => ihn,
  n0l: () => n0l,
  r0l: () => r0l,
  sOo: () => sOo,
  su: () => su,
  t0l: () => t0l
});
module.exports = __toCommonJS(chunk_kypvvv9j_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_2172r9j8 = require("/$bunfs/root/chunk-2172r9j8.js");
var import_chunk_8jsh3ct2 = require("/$bunfs/root/chunk-8jsh3ct2.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_fs = require("fs");
var import_os = require("os");
var import_path = require("path");
var tn = "tengu_proud_perlis", D = new import_chunk_8jsh3ct2.ex();
function JDl(n) {
  return D.register(n);
}
function KXe() {
  return !D.read(tn, true);
}
function J8i(n, { maxLines: t = 2e3 } = {}) {
  let e = [];
  return ihn(n, { entry(r, i, o) {
    if (o !== void 0 && o !== "" && r !== null && rn(r) && (i === "url" || i === "pushurl")) e.push(o);
  } }, { maxLines: t }), e;
}
function rn({ name: n, quoted: t }) {
  if (t) return n === "remote" || n.startsWith("remote.");
  let e = n.indexOf(".");
  return e !== -1 && n.slice(0, e) === "remote";
}
function ihn(n, t, { maxLines: e = 2e3, keepsBlanksAsWritten: r = false } = {}) {
  let o = (n.codePointAt(0) === 65279 ? n.slice(1) : n).split(/\r\n|\n/).slice(0, e), s = null, u = () => {
    s = null, t.malformed?.();
  }, c = 0;
  while (c < o.length) {
    let a = o[c] ?? "";
    c++;
    let l = _(a, 0), p = false;
    while (a[l] === "[") {
      let C = on(a, l);
      if (C === null) {
        u(), p = true;
        break;
      }
      s = C.section, t.header?.(s), l = _(a, C.end);
    }
    if (p) continue;
    let d = a[l];
    if (d === void 0 || d === "#" || d === ";") continue;
    if (!F(d)) {
      u();
      continue;
    }
    let g = l;
    while (l < a.length && T(a[l] ?? "")) l++;
    let L = a.slice(g, l).toLowerCase();
    while (l < a.length && (a[l] === " " || a[l] === "	")) l++;
    if (l >= a.length) {
      t.entry?.(s, L, void 0);
      continue;
    }
    if (a[l] !== "=") {
      u();
      continue;
    }
    let S = sn(a, l + 1, o, c, r);
    if (c = S.nextLineIndex, S.value === null) {
      u();
      continue;
    }
    t.entry?.(s, L, S.value);
  }
}
function on(n, t) {
  let e = t + 1, r = e;
  while (e < n.length) {
    let s = n[e];
    if (s === void 0 || !(T(s) || s === ".")) break;
    e++;
  }
  let i = n.slice(r, e);
  if (n[e] === "]") {
    if (i === "") return null;
    return { section: { name: i.toLowerCase(), quoted: false }, end: e + 1 };
  }
  if (n[e] !== " " && n[e] !== "	" && n[e] !== "\r") return null;
  if (e = _(n, e), n[e] !== '"') return null;
  e++;
  let o = "";
  while (true) {
    if (e >= n.length) return null;
    let s = n[e];
    if (s === "\\") {
      o += n[e + 1] ?? "", e += 2;
      continue;
    }
    if (e++, s === '"') break;
    o += s ?? "";
  }
  if (n[e] !== "]") return null;
  return { section: { name: i.toLowerCase(), quoted: true, subsection: o }, end: e + 1 };
}
function sn(n, t, e, r, i) {
  let o = n, s = r, u = "", c = "", a = false, l = t;
  while (true) {
    if (l >= o.length) {
      if (a) return { value: null, nextLineIndex: s };
      break;
    }
    let d = o[l];
    if (!a && (d === " " || d === "	" || d === "\r")) {
      if (u !== "") c += i ? d : " ";
      l++;
      continue;
    }
    if (!a && (d === ";" || d === "#")) break;
    if (u += c, c = "", d === "\\") {
      if (l + 1 >= o.length) {
        if (s >= e.length) return { value: null, nextLineIndex: s };
        o = e[s] ?? "", s++, l = 0;
        continue;
      }
      let g;
      switch (o[l + 1]) {
        case "\\":
          g = "\\";
          break;
        case '"':
          g = '"';
          break;
        case "n":
          g = `
`;
          break;
        case "t":
          g = "	";
          break;
        case "b":
          g = "\b";
          break;
        default:
          return { value: null, nextLineIndex: s };
      }
      u += g, l += 2;
      continue;
    }
    if (d === '"') {
      a = !a, l++;
      continue;
    }
    u += d, l++;
  }
  let p = u.indexOf("\0");
  return { value: p === -1 ? u : u.slice(0, p), nextLineIndex: s };
}
function _(n, t) {
  while (t < n.length && (n[t] === " " || n[t] === "	" || n[t] === "\r")) t++;
  return t;
}
function F(n) {
  return n >= "a" && n <= "z" || n >= "A" && n <= "Z";
}
function T(n) {
  return F(n) || n >= "0" && n <= "9" || n === "-";
}
var un = 4096;
function W(n) {
  let t, e = n.includes("\0") || n.split(/\r?\n/).map((r) => r.replace(/^[ \t]+/, "")).some((r) => !/^[#;]/.test(r) && /[\r\t]|(?:^|[^\\])(?:\\\\)*\\$/.test(r));
  return ihn(n, { entry: (r, i, o) => {
    if (r?.name === "core" && !r.quoted && i === "worktree") t = o, e ||= o === void 0 || o === "" || o.length > un || /^(?:~|%\(|:\()/.test(o);
  }, malformed: () => {
    e = true;
  } }, { maxLines: 1 / 0 }), e ? null : t;
}
var Whe = (0, import_path.join)(import_os.devNull, "not-a-git-repository"), dn = /* @__PURE__ */ new Set(["true", "yes", "on"]);
function N(n) {
  let t = n.trim().toLowerCase(), e = /^[+-]?(\d+)[kmg]?$/.exec(t);
  return dn.has(t) || e !== null && Number(e[1]) !== 0;
}
var O = /(^|\])[^\S\n\r\u2028\u2029]*worktree\s*=/im;
function Tg(n) {
  let t = (0, import_path.join)(n, ".git"), e;
  try {
    e = (0, import_fs.lstatSync)(t);
  } catch (u) {
    let c = (0, import_chunk_jv7av99m.J)(u) && Q(n) ? G(n) : null;
    return c === null || RIr() && (!c.canonical || P(n, c.path) !== null || E(c.path).kind !== "none") ? null : { gitDir: c.path, workTree: null, commonDir: c.path };
  }
  let r = G(n);
  if (r === null || RIr() && (!r.canonical || P(n, r.path) !== null)) return null;
  let i = r.path;
  if (e.isDirectory()) {
    let u = (0, import_path.join)(i, ".git");
    if (!nn(u)) return null;
    return RIr() && E(i).kind !== "none" ? null : { gitDir: u, workTree: i, commonDir: u };
  }
  let o;
  if (e.isSymbolicLink()) o = (0, import_chunk_w5s307zm.d2)(t);
  else if (e.isFile()) {
    let u = (0, import_chunk_w5s307zm.DK)(t, import_chunk_w5s307zm.I8)?.trim();
    o = u !== void 0 && u.startsWith("gitdir:") ? u.slice(7).trim() : null;
  } else return null;
  if (o === null || o === "" || (0, import_chunk_z6pfqf6e.fa)(o, n) || (0, import_chunk_w5s307zm.Rg)(o, n)) return null;
  let s = (0, import_chunk_z6pfqf6e.TF)((0, import_path.resolve)(n, o));
  if (s === null) return null;
  return RIr() ? gn(s, i) : j(s, i);
}
var fn = "tengu_piped_starlight";
class K {
  reader = null;
  register(n) {
    let t = this.reader;
    return this.reader = n, t;
  }
}
var X = new K();
function QDl(n) {
  return X.register(n);
}
function RIr() {
  let n = X.reader;
  if (!n) return true;
  try {
    let { value: t, source: e, defaultHost: r } = n(fn, true);
    return t !== false || e !== "payload" || !r;
  } catch {
    return true;
  }
}
var B = 1024;
function ZDl(n, t) {
  let e = G(n);
  if (e === null) return { kind: "unknown", host: null, registry: null, gone: true };
  if (!e.canonical) return { kind: "unknown", host: null, registry: null };
  let r = e.path, i = P(n, r);
  if (i !== null) return { kind: "unknown", host: i, registry: null, leftLayout: true };
  let o = E(r);
  if (o.kind === "none") return { kind: "none" };
  let { host: s } = o;
  if (o.kind === "unvettable") return { kind: "unknown", host: s, registry: null };
  let u = o.commonDir, c = (0, import_path.join)(u, "worktrees"), a = t === void 0 ? null : (0, import_chunk_z6pfqf6e.TF)(t);
  if (a !== null && (0, import_path.dirname)(a) === c && V(a, r)) return { kind: "registered", host: s, hostCommonDir: u, adminDirs: [a] };
  if ((0, import_chunk_w5s307zm.hO)(c, u)) return { kind: "unknown", host: s, registry: c };
  let l;
  try {
    l = (0, import_fs.readdirSync)(c).sort();
  } catch (d) {
    let g = (0, import_chunk_jv7av99m.w)(d);
    return g === "ENOENT" || g === "ENOTDIR" ? { kind: "unregistered", host: s, hostCommonDir: u } : { kind: "unknown", host: s, registry: c };
  }
  let p = l.slice(0, B).map((d) => (0, import_path.join)(c, d)).filter((d) => V(d, r));
  if (p.length > 0) return { kind: "registered", host: s, hostCommonDir: u, adminDirs: p };
  return l.length > B ? { kind: "unknown", host: s, registry: c } : { kind: "unregistered", host: s, hostCommonDir: u };
}
function V(n, t) {
  let e = sOo(n, t);
  return e !== null && y(e, t);
}
function E(n) {
  let t = I(n);
  if (t === null || Y(t)) return { kind: "none" };
  let e = Tg(t);
  if (e !== null) return { kind: "pinned", host: t, commonDir: e.commonDir };
  return en(t) ? { kind: "none" } : { kind: "unvettable", host: t };
}
function I(n) {
  let t = (0, import_chunk_z6pfqf6e.Vge)(n);
  if (t !== null) return t;
  let e = (0, import_path.dirname)(n), r = (0, import_path.dirname)(e);
  return (0, import_chunk_2172r9j8.Ff)((0, import_path.basename)(e)) === "worktrees" && (0, import_chunk_2172r9j8.Ff)((0, import_path.basename)(r)) === ".claude" ? (0, import_path.dirname)(r) : null;
}
function P(n, t) {
  let e = I((0, import_path.resolve)(n));
  if (e === null) return null;
  let r = I(t);
  if (r === e) return null;
  let i = (0, import_chunk_z6pfqf6e.TF)(e);
  if (r !== null && i === r || Y(e) || en(e)) return null;
  return e;
}
function Y(n) {
  let t;
  try {
    t = (0, import_os.homedir)();
  } catch {
    return false;
  }
  return y(n, t);
}
function q(n) {
  try {
    if (!(0, import_fs.lstatSync)((0, import_path.join)(n, "HEAD")).isFile()) return "absent";
    return (0, import_fs.lstatSync)((0, import_path.join)(n, "refs")).isDirectory() ? "present" : "absent";
  } catch (t) {
    let e = (0, import_chunk_jv7av99m.w)(t);
    return e === "ENOENT" || e === "ENOTDIR" ? "absent" : "unexaminable";
  }
}
function gn(n, t) {
  let e = E(t);
  switch (e.kind) {
    case "none":
      return j(n, t);
    case "unvettable":
      return null;
    case "pinned":
      return (0, import_path.dirname)(n) === (0, import_path.join)(e.commonDir, "worktrees") ? z(n, t) : null;
  }
}
function e0l(n) {
  let t = (0, import_path.join)(n, ".git"), e;
  try {
    e = (0, import_fs.lstatSync)(t);
  } catch {
    return false;
  }
  let r = null;
  if (e.isSymbolicLink()) r = (0, import_chunk_w5s307zm.d2)(t);
  else if (e.isFile()) {
    let o = (0, import_chunk_w5s307zm.DK)(t, import_chunk_w5s307zm.I8)?.trim();
    r = o !== void 0 && o.startsWith("gitdir:") ? o.slice(7).trim() : null;
  }
  if (r === null || r === "" || (0, import_chunk_z6pfqf6e.fa)(r, n) || (0, import_chunk_w5s307zm.Rg)(r, n)) return false;
  let i = (0, import_chunk_z6pfqf6e.TF)((0, import_path.resolve)(n, r));
  return i !== null && Q(i);
}
var mn = /* @__PURE__ */ new Set(["ENOENT", "ENOTDIR", "ELOOP"]);
function G(n) {
  let { real: t, code: e } = (0, import_chunk_z6pfqf6e.XOe)(n);
  if (t !== void 0) return { path: t, canonical: true };
  return e !== void 0 && mn.has(e) ? null : { path: (0, import_path.resolve)(n), canonical: false };
}
function j(n, t) {
  let e = sOo(n, t);
  if (e !== null) return z(n, t, e);
  let r = yn(n);
  return r !== null && y(r, t) && nn(n) ? { gitDir: n, workTree: t, commonDir: n } : null;
}
function z(n, t, e = sOo(n, t)) {
  let r = (0, import_path.dirname)((0, import_path.dirname)(n));
  return e !== null && (0, import_path.basename)((0, import_path.dirname)(n)) === "worktrees" && y(e, t) && hn(n, r, t) ? { gitDir: n, workTree: t, commonDir: r } : null;
}
function XN(n) {
  return Tg(n) ?? { gitDir: Whe, workTree: n, commonDir: Whe };
}
function su(n, t, { userLocale: e } = {}) {
  return (0, import_chunk_gd77dyw4.ms)(t, { repository: XN(n), userLocale: e });
}
function t0l(n, t) {
  return (0, import_chunk_gd77dyw4.x6e)(t, { repository: XN(n), keepUserPath: KXe() });
}
function n0l(n, t) {
  let { gitDir: e, workTree: r, commonDir: i } = XN(t), o = new Set(import_chunk_gd77dyw4.q_n), s = {};
  for (let u of Object.keys(n)) if (o.has(u.toUpperCase())) s[u] = void 0;
  return { ...n, ...s, GIT_DIR: e, ...r !== null ? { GIT_WORK_TREE: r } : { GIT_IMPLICIT_WORK_TREE: "0" }, GIT_COMMON_DIR: i };
}
function Q(n) {
  if (q(n) !== "present" || !b(n, "commondir")) return false;
  let t = Z(n);
  if (t === null || t.read.some((r) => O.test(r)) || t.unread !== void 0 && (O.test(t.unread) || (0, import_chunk_w5s307zm.wna)(t.unread, "core", null, "bare").some((r) => !N(r)))) return false;
  let e = t.read.flatMap((r) => (0, import_chunk_w5s307zm.wna)(r, "core", null, "bare")).at(-1);
  return e !== void 0 && N(e);
}
function Z(n) {
  let t = A(n, "config");
  if (t === void 0) return null;
  if (b(n, "config.worktree")) return { read: [t], unread: void 0 };
  let e = A(n, "config.worktree");
  if (e === void 0) return null;
  let r = (0, import_chunk_w5s307zm.EUl)(t, "extensions", null, "worktreeConfig").at(-1);
  return r !== void 0 && N(r) ? { read: [t, e], unread: void 0 } : { read: [t], unread: e };
}
function A(n, t) {
  let e = (0, import_path.join)(n, t), r = (0, import_chunk_w5s307zm.hO)(e, n) ? void 0 : (0, import_chunk_w5s307zm.DK)(e, import_chunk_w5s307zm.Lqt);
  return r !== void 0 && (0, import_chunk_w5s307zm.yOe)(r) ? void 0 : r;
}
var pn = /\[\s*include/i;
function r0l(n) {
  let t = [];
  for (let e of ["config", "config.worktree"]) {
    let r = A(n, e);
    if (r === void 0) {
      if (e === "config.worktree" && b(n, e)) continue;
      return null;
    }
    t.push(r);
  }
  return t.some((e) => pn.test(e));
}
function nn(n) {
  return b(n, "commondir");
}
function en(n) {
  return b(n, ".git") && q(n) === "absent";
}
function b(n, t) {
  try {
    return (0, import_fs.lstatSync)((0, import_path.join)(n, t)), false;
  } catch (e) {
    return (0, import_chunk_jv7av99m.J)(e);
  }
}
function hn(n, t, e) {
  let r = (0, import_path.join)(n, "commondir");
  if ((0, import_chunk_w5s307zm.P8)(r, n)) return false;
  let i = (0, import_chunk_w5s307zm.DK)(r, import_chunk_w5s307zm.I8)?.trim();
  if (i === void 0 || i === "" || (0, import_chunk_z6pfqf6e.fa)(i, e) || (0, import_chunk_w5s307zm.Rg)(i, n, e)) return false;
  return y((0, import_path.resolve)(n, i), t);
}
function y(n, t) {
  try {
    let e = (0, import_fs.statSync)(n, { bigint: true }), r = (0, import_fs.statSync)(t, { bigint: true });
    if (!e.isDirectory() || e.dev !== r.dev) return false;
    if (e.ino !== 0n && r.ino !== 0n) return e.ino === r.ino;
    return U(import_fs.realpathSync.native(n)) === U(import_fs.realpathSync.native(t));
  } catch {
    return false;
  }
}
function U(n) {
  switch ((0, import_chunk_cg8dqz0a.x)()) {
    case "macos":
      return (0, import_chunk_2172r9j8.Ff)(n.normalize("NFC"));
    case "windows":
      return (0, import_chunk_2172r9j8.Ff)(n);
    default:
      return n;
  }
}
function sOo(n, t) {
  let e = (0, import_path.join)(n, "gitdir");
  if ((0, import_chunk_w5s307zm.P8)(e, n)) return null;
  let r = (0, import_chunk_w5s307zm.DK)(e, import_chunk_w5s307zm.I8)?.trim();
  if (r === void 0 || (0, import_chunk_z6pfqf6e.fa)(r, t) || (0, import_chunk_w5s307zm.Rg)(r, n, t)) return null;
  let i = (0, import_path.resolve)(n, r);
  return (0, import_path.basename)(i) === ".git" ? (0, import_path.dirname)(i) : null;
}
function yn(n) {
  let t = Z(n), e = t === null || t.unread !== void 0 && O.test(t.unread) ? [null] : t.read.map((o) => W(o)), [r, ...i] = (0, import_chunk_4smdap7r.M)(e.filter((o) => o !== void 0)).map((o) => o === null || (0, import_chunk_z6pfqf6e.fa)(o, n) || (0, import_chunk_w5s307zm.Rg)(o, n) ? null : (0, import_path.resolve)(n, o));
  return typeof r === "string" && i.every((o) => o !== null && y(r, o)) ? r : null;
}
